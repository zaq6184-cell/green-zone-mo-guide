// Final check of the mixed clip: transcribe the whole MP3 and each line's stretch (cut at timing.json's starts), score each
// against its line (character error, spaces ignored), and confirm the five lines are heard in order.
// node abdo-check.cjs ../../app/audio/abdo-script-ms.mp3 ../read-aloud/abdo-script-ms/timing.json
// Report: <mp3 name>-check.json in narration/read-aloud/abdo-script-ms/ (working cuts in narration/scripts/asm/abdo/fc/).
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const [mp3, timingF] = process.argv.slice(2), T = JSON.parse(fs.readFileSync(timingF, 'utf8'));
const LINES = [
  'Punca sakit perut anda belum dapat dipastikan sepenuhnya.',
  'Datang semula ke Jabatan Kecemasan dengan segera jika sakit bertambah teruk, pitam, demam, muntah berterusan, tidak boleh minum, muntah atau najis berdarah, perut membuncit, susah bernafas atau air kencing berkurang.',
  'Jika ada kemungkinan hamil dan sakit atau pendarahan bertambah, datang segera.',
  'Jangan tunggu tarikh temujanji jika keadaan semakin teruk.',
  'Jika rebah atau terlalu lemah untuk datang dengan selamat, hubungi sembilan sembilan sembilan.',
];
const MS1 = ['sifar', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'lapan', 'sembilan'];
const msNum = n => n < 10 ? MS1[n] : n === 10 ? 'sepuluh' : n === 11 ? 'sebelas' : n < 20 ? MS1[n - 10] + ' belas'
  : n < 100 ? MS1[Math.floor(n / 10)] + ' puluh' + (n % 10 ? ' ' + MS1[n % 10] : '')
  : n < 1000 ? (n < 200 ? 'seratus' : MS1[Math.floor(n / 100)] + ' ratus') + (n % 100 ? ' ' + msNum(n % 100) : '') : String(n);
const words = s => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/\b9\s?9\s?9\b/g, ' sembilan sembilan sembilan ')
  .replace(/\b\d+\b/g, d => msNum(+d)).replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
const lev = (a, b) => { let p = Array.from({length:b.length + 1}, (_, j) => j);
  for (let i = 1; i <= a.length; i++) { const q = [i]; for (let j = 1; j <= b.length; j++) q[j] = Math.min(p[j] + 1, q[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); p = q; } return p[b.length]; };
const cer = (want, heard) => { const x = words(want).join(''), y = words(heard).join(''); return lev(x, y) / Math.max(1, x.length); };
const PHANTOM = /terima kasih kerana menonton!?|terima kasih\.?$|thank you for watching!?|thanks for watching!?|thank you\.?$/gi;
async function hear(f) {
  const fd = new FormData();
  fd.append('file', new Blob([fs.readFileSync(f)], {type:'audio/wav'}), 'p.wav'); fd.append('language', 'ms'); fd.append('response_format', 'json'); fd.append('temperature', '0');
  const r = await fetch('http://127.0.0.1:3900/v1/audio/transcriptions', {method:'POST', body:fd});
  if (!r.ok) throw new Error(`transcribe ${r.status}`);
  return ((await r.json()).text || '').replace(PHANTOM, '').trim();
}
// where each line's text best sits in the whole transcript (characters, spaces ignored), to confirm the order
function place(h, line, from) {
  const k = words(line).join(''); let best = {d:1e9, at:-1};
  for (let i = from; i <= Math.max(from, h.length - Math.floor(k.length * 0.8)); i++) {
    const L = Math.min(k.length, h.length - i); const d = lev(k, h.slice(i, i + L)) + (k.length - L);
    if (d < best.d) best = {d, at:i};
  }
  return {at:best.at, err:+(best.d / k.length).toFixed(3)};
}
(async () => {
  const tmp = path.join(__dirname, 'asm', 'abdo', 'fc'); fs.mkdirSync(tmp, {recursive:true});
  const whole = path.join(tmp, 'whole.wav');
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', mp3, '-ac', '1', '-ar', '16000', whole]);
  const heardWhole = await hear(whole), h = words(heardWhole).join('');
  const wholeErr = cer(LINES.join(' '), heardWhole);
  let from = 0; const order = [];
  for (const [i, l] of LINES.entries()) { const p = place(h, l, from); order.push({line:i + 1, ...p}); if (p.at >= 0) from = p.at + Math.floor(words(l).join('').length * 0.8); }
  const inOrder = order.every((o, i) => o.at >= 0 && o.err <= 0.15 && (i === 0 || o.at > order[i - 1].at));
  const segs = [];
  for (let i = 0; i < 5; i++) {
    const s = T.lines[i][0], e = i < 4 ? T.lines[i + 1][0] : T.dur, f = path.join(tmp, `seg${i + 1}.wav`);
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', s.toFixed(3), '-to', e.toFixed(3), '-i', mp3, '-ac', '1', '-ar', '16000', f]);
    const heard = await hear(f), c = cer(LINES[i], heard), first = words(heard)[0], want1 = words(LINES[i])[0];
    segs.push({line:i + 1, from:s, to:e, err:+c.toFixed(4), startsOnFirstWord:first === want1, heard});
  }
  const res = {mp3, bytes:fs.statSync(mp3).size, dur:T.dur, wholeErr:+wholeErr.toFixed(4), inOrder, order, heardWhole, segs};
  console.log(JSON.stringify(res, null, 1));
  fs.writeFileSync(path.resolve(__dirname, '..', 'read-aloud', 'abdo-script-ms', path.basename(mp3, '.mp3') + '-check.json'), JSON.stringify(res, null, 1));
})().catch(e => { console.error(e); process.exit(1); });
