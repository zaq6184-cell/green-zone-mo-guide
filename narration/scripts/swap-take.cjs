// Use another seed's take for one line, then rejoin its section (the takes with GAP between them) and update chunks.json.
// node swap-take.cjs <clip> <seg> <file, e.g. p1-0.wav> <seed> ["what the check heard"]
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const [clip, seg, file, seed, heard] = process.argv.slice(2);
const repF = path.join(__dirname, 'chunks.json'), rep = JSON.parse(fs.readFileSync(repF, 'utf8')), v = rep[`${clip}#${seg}`];
const dir = path.join('C:/Users/user/Green Zone/narration/read-aloud', clip, String(seg).padStart(2, '0'));
const c = v.chunks.find(x => x.file === file), src = path.join(dir, file.replace(/\.wav$/, `-s${seed}.wav`));
if (!c || !fs.existsSync(src)) { console.error('no such take: ' + src); process.exit(1); }
fs.copyFileSync(src, path.join(dir, file));
const b = fs.readFileSync(src); c.seed = +seed; c.dur = +((b.length - 44) / b.readUInt32LE(28)).toFixed(3); c.bad = false; if (heard) { c.heard = heard; c.err = 0; }
c.swapped = `seed ${seed} after the strict check (10 Nov 2026)`;
const rate = fs.readFileSync(path.join(dir, v.chunks[0].file)).readUInt32LE(24), sil = path.join(__dirname, 'asm', `gap-${rate}.wav`);
if (!fs.existsSync(sil)) execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 'lavfi', '-i', `anullsrc=r=${rate}:cl=mono`, '-t', String(v.gap), '-c:a', 'pcm_s16le', sil]);
const list = v.chunks.flatMap((r, n) => (n ? [sil] : []).concat([path.join(dir, r.file)])), lst = path.join(__dirname, 'asm', `${clip}-${seg}.txt`);
fs.writeFileSync(lst, list.map(f => `file '${f.replace(/\\/g, '/')}'`).join('\n'));
execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', lst, '-c:a', 'pcm_s16le', path.join(dir, '..', String(seg).padStart(2, '0') + '.wav')]);
let t = 0; for (const r of v.chunks) { r.at = +t.toFixed(3); t += r.dur + v.gap; }
fs.writeFileSync(repF, JSON.stringify(rep, null, 1));
console.log(`${clip}#${seg} ${file} now seed ${seed} (${c.dur} s); section rejoined`);
