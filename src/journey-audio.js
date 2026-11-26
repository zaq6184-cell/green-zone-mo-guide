#!/usr/bin/env node
/* Joins the journey's ten stop recordings into two files, one per language (26 Nov 2026, Krishna's "Flow loops, free up files"):
   app/audio/stops-en.mp3 and stops-ms.mp3, so the artifact holds 2 files instead of 10. Each stop is decoded to PCM, the stops are
   joined with GAP seconds of silence between them (so stopping a moment late plays silence, never the next stop), and the whole is
   encoded once as the sources are (MP3, 24 kHz, mono, 64 kb/s). Prints JSTOPS_AUDIO for engine.js: each stop's start and length
   in seconds, worked out from the decoded sample counts, and checks the joined file's length against their sum.
   Sources: narration/read-aloud/journey/stop<n>.mp3 and stop<n>-ms.mp3 (the masters, copied there by this script the first time,
   from app/audio/, before those are removed). Run: node journey-audio.js  (needs ffmpeg and ffprobe on PATH) */
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '..'), APP = path.join(ROOT, 'app', 'audio'), KEEP = path.join(ROOT, 'narration', 'read-aloud', 'journey');
const RATE = 24000, GAP = 0.3, TMP = path.join(require('os').tmpdir(), 'gz-journey-audio');
fs.mkdirSync(KEEP, {recursive:true}); fs.mkdirSync(TMP, {recursive:true});
const run = (cmd, args) => execFileSync(cmd, args, {stdio:['ignore', 'pipe', 'pipe']}).toString();
const out = {};
for (const lang of ['en', 'ms']) {
  const parts = [], segs = [];
  let at = 0;
  for (let i = 1; i <= 5; i++) {
    const name = `stop${i}${lang === 'ms' ? '-ms' : ''}.mp3`, master = path.join(KEEP, name);
    if (!fs.existsSync(master)) fs.copyFileSync(path.join(APP, name), master);
    const raw = path.join(TMP, `${lang}-${i}.raw`);
    run('ffmpeg', ['-v', 'error', '-y', '-i', master, '-ac', '1', '-ar', String(RATE), '-f', 's16le', raw]);
    const n = fs.statSync(raw).size / 2, dur = n / RATE;
    segs.push({at:+at.toFixed(3), dur:+dur.toFixed(3)});
    parts.push(fs.readFileSync(raw));
    at += dur;
    if (i < 5) { const g = Math.round(GAP * RATE); parts.push(Buffer.alloc(g * 2)); at += g / RATE; }
  }
  const pcm = path.join(TMP, `${lang}.raw`), mp3 = path.join(APP, `stops-${lang}.mp3`);
  fs.writeFileSync(pcm, Buffer.concat(parts));
  run('ffmpeg', ['-v', 'error', '-y', '-f', 's16le', '-ar', String(RATE), '-ac', '1', '-i', pcm, '-c:a', 'libmp3lame', '-b:a', '64k', '-ar', String(RATE), '-ac', '1', mp3]);
  const total = fs.statSync(pcm).size / 2 / RATE, probed = +run('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', mp3]).trim();
  const dec = path.join(TMP, `${lang}-check.raw`);
  run('ffmpeg', ['-v', 'error', '-y', '-i', mp3, '-f', 's16le', '-ac', '1', '-ar', String(RATE), dec]);
  const decoded = fs.statSync(dec).size / 2 / RATE;
  const sum = segs.reduce((s, x) => s + x.dur, 0) + GAP * 4;
  console.log(`${lang}: ${fs.statSync(mp3).size} bytes; parts ${sum.toFixed(3)} s with gaps; PCM ${total.toFixed(3)} s; decoded ${decoded.toFixed(3)} s; ffprobe ${probed.toFixed(3)} s`);
  if (Math.abs(decoded - total) > 0.06) throw new Error(lang + ': the joined file decodes to ' + decoded + ' s, not ' + total);
  out[lang] = segs;
}
console.log('const JSTOPS_AUDIO = ' + JSON.stringify({en:{src:'audio/stops-en.mp3', s:out.en}, ms:{src:'audio/stops-ms.mp3', s:out.ms}}) + ';');
