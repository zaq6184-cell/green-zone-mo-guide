// Join each read-aloud clip's section takes in order with a short pause, note where each section starts (marks) and where each
// line starts (lines: [seconds, section, element]), level the speech to -16 LUFS and encode a mono 64 kbps MP3 for the app
// (app/audio/<clip>.mp3). The joined WAV (asm/<clip>.wav) is the film's voice track. Writes read-map.json for fill-read.cjs.
// A leaflet's section 0 is its title and section k its k-th group, whose elements are [heading, paragraph if any, ...items];
// the advice tabs have one section whose elements are the advice lines in order.
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const DIR = path.resolve(__dirname, '..', 'read-aloud') + '/', APP = path.resolve(__dirname, '..', '..', 'app', 'audio') + '/', TMP = path.join(__dirname, 'asm');
fs.mkdirSync(TMP, {recursive:true});
const segs = require('./segments.json'), rep = require('./chunks.json');
const only = process.argv[2], clips = [...new Set(segs.map(s => s.clip))].filter(c => !only || c === only);
const probe = f => parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nk=1:nw=1', f]).toString());
const rateOf = f => fs.readFileSync(f).readUInt32LE(24);
const GAP = 0.7;
const mapF = path.join(__dirname, 'read-map.json'), map = only && fs.existsSync(mapF) ? JSON.parse(fs.readFileSync(mapF, 'utf8')) : {};
for (const clip of clips) {
  const mine = segs.filter(s => s.clip === clip).sort((a, b) => a.seg - b.seg);
  const files = mine.map(s => path.join(DIR, clip, String(s.seg).padStart(2, '0') + '.wav'));
  const rate = rateOf(files[0]), sil = path.join(TMP, `sil-${rate}.wav`);
  if (!fs.existsSync(sil)) execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 'lavfi', '-i', `anullsrc=r=${rate}:cl=mono`, '-t', String(GAP), '-c:a', 'pcm_s16le', sil]);
  const list = [], marks = [], lines = [], advice = clip.startsWith('adv-');
  let t = 0, n = 0;
  mine.forEach((s, i) => {
    if (i) { list.push(sil); t += GAP; }
    marks.push(+t.toFixed(2));
    const r = rep[`${clip}#${s.seg}`];
    if (!r) throw new Error(`no takes for ${clip}#${s.seg}: run gen-chunks.cjs`);
    for (const c of r.chunks) if (c.j === 0) lines.push([+(t + c.at).toFixed(2), advice ? 0 : s.seg, advice ? n++ : c.k]);
    list.push(files[i]); t += probe(files[i]);
  });
  const lst = path.join(TMP, clip + '.txt');
  fs.writeFileSync(lst, list.map(f => `file '${f.replace(/\\/g, '/')}'`).join('\n'));
  const joined = path.join(TMP, clip + '.wav');
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', lst, '-c:a', 'pcm_s16le', joined]);
  const out = path.join(APP, clip + '.mp3');
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', joined, '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-ac', '1', '-ar', '24000', '-c:a', 'libmp3lame', '-b:a', '64k', out]);
  const dur = +probe(out).toFixed(2);
  map[clip] = {src:'audio/' + clip + '.mp3', dur, marks, lines};
  console.log(`${clip}: ${mine.length} sections, ${lines.length} lines, ${dur} s (joined ${t.toFixed(2)} s), ${(fs.statSync(out).size / 1024).toFixed(0)} KB, marks ${marks.join(' ')}`);
}
fs.writeFileSync(mapF, JSON.stringify(map, null, 1));
