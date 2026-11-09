/* Takes the dengue leaflet's read-aloud narration (the same take the app plays) into the film: the joined voice, levelled to
   -16 LUFS at 48 kHz, as assets/vo-<lang>.wav, and its line marks as work/timing-<lang>.json ({dur, lines:[[s, section, element]]}).
   node work/prep.cjs <read-map.json> <folder of the joined WAVs (asm)> [en|ms] */
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const [mapF, asm] = process.argv.slice(2);
if (!mapF || !asm) { console.error('usage: node work/prep.cjs <read-map.json> <asm folder>'); process.exit(1); }
const map = JSON.parse(fs.readFileSync(mapF, 'utf8'));
const ROOT = path.resolve(__dirname, '..');
for (const lg of (process.argv[4] ? [process.argv[4]] : ['en', 'ms'])) {
  const k = `leaf-dengue-${lg}`, m = map[k];
  const src = path.join(asm, k + '.wav'), out = path.join(ROOT, 'assets', `vo-${lg}.wav`);
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', src, '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-ar', '48000', '-ac', '1', '-c:a', 'pcm_s16le', out]);
  const dur = +parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nk=1:nw=1', out]).toString()).toFixed(3);
  fs.writeFileSync(path.join(__dirname, `timing-${lg}.json`), JSON.stringify({clip:k, dur, lines:m.lines}, null, 1));
  console.log(`${lg}: ${dur} s, ${m.lines.length} lines -> assets/vo-${lg}.wav, work/timing-${lg}.json`);
}
