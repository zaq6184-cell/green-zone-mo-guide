/* What's new film: the narration as scripted (SPEC.md), word times and the levelled voice.
   node work/prep.cjs
   Reads work/vo-raw/sNN.wav (the VoiceStudio takes as saved) and work/sNN.json (whisper.cpp, -ml 1 -sow -oj, on a 16 kHz copy),
   aligns whisper's words to the script's words (a word whisper heard differently, such as "50" for "fifty", takes the time of
   the word it heard in its place, else it is spread between its neighbours), writes work/timing.json, and writes the voice
   levelled as one: every take gets the same gain, so the whole narration measures -16 LUFS (assets/vo/sNN.wav). */
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '..');
const SCRIPT = require('./script.cjs');
const ff = a => execFileSync('ffmpeg', ['-hide_banner', '-y', ...a], { stdio: ['ignore', 'pipe', 'pipe'] });
const dur = f => Number(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString());
const norm = w => w.toLowerCase().replace(/[^a-z0-9]/g, '');
const out = [];
for (const [id, text] of SCRIPT) {
  const raw = path.join(__dirname, 'vo-raw', id + '.wav');
  const J = JSON.parse(fs.readFileSync(path.join(__dirname, id + '.json'), 'utf8'));
  const heard = J.transcription.map(s => ({ w: s.text.trim(), s: s.offsets.from / 1000, e: s.offsets.to / 1000 })).filter(x => norm(x.w));
  const words = text.split(/\s+/).map(w => ({ w, s: null, e: null }));
  let j = 0;
  for (const x of words) {
    const k = heard.slice(j, j + 3).findIndex(h => norm(h.w) === norm(x.w));
    if (k >= 0) { Object.assign(x, { s: heard[j + k].s, e: heard[j + k].e }); j += k + 1; }
  }
  /* words whisper heard differently: take the time of the unmatched word(s) between matched neighbours, else spread evenly */
  for (let i = 0; i < words.length; i++) {
    if (words[i].s !== null) continue;
    let a = i; while (a < words.length && words[a].s === null) a++;
    const t0 = i ? words[i - 1].e : (heard[0] ? heard[0].s : 0), t1 = a < words.length ? words[a].s : heard[heard.length - 1].e;
    const n = a - i;
    for (let q = 0; q < n; q++) { words[i + q].s = +(t0 + (t1 - t0) * q / n).toFixed(3); words[i + q].e = +(t0 + (t1 - t0) * (q + 1) / n).toFixed(3); words[i + q].guessed = true; }
    i = a - 1;
  }
  out.push({ id, text, dur: +dur(raw).toFixed(3), heard: heard.map(h => h.w).join(' '), words });
}
/* one gain for the whole narration */
const list = path.join(__dirname, 'vo-list.txt');
fs.writeFileSync(list, out.map(o => `file 'vo-raw/${o.id}.wav'`).join('\n'));
const joined = path.join(__dirname, 'vo-joined.wav');
ff(['-f', 'concat', '-safe', '0', '-i', list, '-c', 'copy', joined]);
const r = require('child_process').spawnSync('ffmpeg', ['-hide_banner', '-i', joined, '-af', 'ebur128', '-f', 'null', '-'], { encoding: 'utf8' });
const I = Number((/I:\s+(-?[\d.]+) LUFS/.exec(r.stderr.split('Summary:').pop()) || [])[1]);
const gain = -16 - I;
fs.mkdirSync(path.join(ROOT, 'assets', 'vo'), { recursive: true });
for (const o of out) ff(['-i', path.join(__dirname, 'vo-raw', o.id + '.wav'), '-af', `volume=${gain.toFixed(2)}dB`, '-ar', '48000', '-ac', '1', '-c:a', 'pcm_s16le', path.join(ROOT, 'assets', 'vo', o.id + '.wav')]);
fs.writeFileSync(path.join(__dirname, 'timing.json'), JSON.stringify({ voiceLUFS: I, gainDb: +gain.toFixed(2), sentences: out }, null, 1));
for (const o of out) console.log(o.id, o.dur + ' s', '| heard:', o.heard, o.words.some(w => w.guessed) ? '| guessed: ' + o.words.filter(w => w.guessed).map(w => w.w).join(' ') : '');
console.log('voice', I, 'LUFS; gain', gain.toFixed(2), 'dB');
