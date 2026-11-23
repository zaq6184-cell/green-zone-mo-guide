/* Prepares "Cancer pain at home" (the sibling of video/dengue-home): run from video/cancer-pain-home.
   node work/prep.cjs [leaflet] [voice] [bed]      (no argument: all three)
   leaflet  reads P['cancer-pain-cpg'].leaflet from src/parts/data*.js (read only, in build order) into work/leaflet.json, as the app shows it.
   voice    joins the read-aloud section takes (narration/read-aloud/leaf-cancerpain-<lang>/00.wav ... 07.wav) with 0.7 s between
            them, exactly as narration/scripts/assemble.cjs does for the app's MP3, levels the join to -16 LUFS at 48 kHz mono
            (assets/vo-<lang>.wav), checks the section starts against read-map.json's marks, and writes the line marks to
            work/timing-<lang>.json ({clip, dur, lines:[[s, section, element]]}).
   bed      the Flow Music take "Gentle Reassurance (Extended)" (148 s, it fades from about 137 s) made longer than the film with one
            6 s crossfade: the take from 0 to 134 s, then the take again from 14 s to its own soft end (which so falls after the film ends); levelled to the dengue bed's
            -15.7 LUFS so 0.14 volume sits the same under the voice (assets/music.mp3, 48 kHz stereo, 192 kbps). */
const fs = require('fs'), path = require('path'), vm = require('vm'), { execFileSync } = require('child_process');
const ROOT = path.resolve(__dirname, '..'), GZ = path.resolve(ROOT, '..', '..');
const BED_SRC = path.join(GZ, 'narration', 'music', 'flowmusic-gentle-reassurance-extended.wav');   /* a copy of C:/Users/user/Downloads/Music/Flow Music/Gentle Reassurance (Extended).wav */
const steps = process.argv.slice(2).length ? process.argv.slice(2) : ['leaflet', 'voice', 'bed'];
const probe = f => parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nk=1:nw=1', f]).toString());
const ff = a => execFileSync('ffmpeg', ['-v', 'error', '-y', ...a]);

if (steps.includes('leaflet')) {
  /* the data parts in the app's build order (src/build.js), so a later part that changes the leaflet is seen too; engine.js is
     not run, since it draws the page and does not touch the leaflet text */
  const parts = ['data.js', ...Array.from({length:29}, (_, i) => `data${i + 2}.js`)];
  const code = parts.map(f => fs.readFileSync(path.join(GZ, 'src', 'parts', f), 'utf8')).join('\n;\n');
  const ctx = {console};
  vm.runInNewContext(code + '\n;this.__P = P;', ctx);
  const store = ctx.__P;
  const L = store['cancer-pain-cpg'].leaflet;
  fs.writeFileSync(path.join(__dirname, 'leaflet.json'), JSON.stringify(L, null, 1));
  console.log(`leaflet: ${L.en.groups.length} groups (en), ${L.ms.groups.length} (ms) -> work/leaflet.json`);
}
if (steps.includes('voice')) {
  const map = JSON.parse(fs.readFileSync(path.join(GZ, 'narration', 'scripts', 'read-map.json'), 'utf8'));
  for (const lg of ['en', 'ms']) {
    const clip = `leaf-cancerpain-${lg}`, dir = path.join(GZ, 'narration', 'read-aloud', clip), m = map[clip];
    const secs = fs.readdirSync(dir).filter(f => /^\d\d\.wav$/.test(f)).sort().map(f => path.join(dir, f));
    const rate = fs.readFileSync(secs[0]).readUInt32LE(24), sil = path.join(__dirname, `sil-${rate}.wav`);
    ff(['-f', 'lavfi', '-i', `anullsrc=r=${rate}:cl=mono`, '-t', '0.7', '-c:a', 'pcm_s16le', sil]);
    let t = 0; const marks = [], list = [];
    secs.forEach((f, i) => { if (i) { list.push(sil); t += 0.7; } marks.push(+t.toFixed(2)); list.push(f); t += probe(f); });
    if (marks.join() !== m.marks.join()) throw new Error(`${clip}: section starts ${marks} differ from read-map ${m.marks}`);
    const lst = path.join(__dirname, `vo-${lg}.txt`), joined = path.join(__dirname, `vo-${lg}-joined.wav`), out = path.join(ROOT, 'assets', `vo-${lg}.wav`);
    fs.writeFileSync(lst, list.map(f => `file '${f.replace(/\\/g, '/')}'`).join('\n'));
    ff(['-f', 'concat', '-safe', '0', '-i', lst, '-c:a', 'pcm_s16le', joined]);
    ff(['-i', joined, '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-ar', '48000', '-ac', '1', '-c:a', 'pcm_s16le', out]);
    const dur = +probe(out).toFixed(3);
    fs.writeFileSync(path.join(__dirname, `timing-${lg}.json`), JSON.stringify({clip, dur, lines:m.lines}, null, 1));
    console.log(`${lg}: ${dur} s (sections ${t.toFixed(2)} s), ${m.lines.length} lines -> assets/vo-${lg}.wav, work/timing-${lg}.json`);
  }
}
if (steps.includes('bed')) {
  const A_END = 134, X = 6, B_FROM = 14, out = path.join(ROOT, 'assets', 'music.mp3'), tmp = path.join(__dirname, 'bed-joined.wav');
  ff(['-i', BED_SRC, '-filter_complex',
    `[0:a]atrim=0:${A_END},asetpts=PTS-STARTPTS[a];[0:a]atrim=${B_FROM},asetpts=PTS-STARTPTS[b];[a][b]acrossfade=d=${X}:c1=qsin:c2=qsin[o]`,
    '-map', '[o]', '-ar', '48000', '-ac', '2', '-c:a', 'pcm_s16le', tmp]);
  ff(['-i', tmp, '-af', 'loudnorm=I=-15.7:TP=-1.5:LRA=11', '-ar', '48000', '-ac', '2', '-c:a', 'libmp3lame', '-b:a', '192k', out]);
  console.log(`bed: ${probe(out).toFixed(2)} s (crossfade at ${A_END - X}–${A_END} s) -> assets/music.mp3`);
}
