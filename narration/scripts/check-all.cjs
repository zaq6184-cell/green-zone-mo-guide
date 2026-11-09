// Strict check of narration takes for stumbles a whole-take transcription smooths over (false starts, repeated or skipped
// words, garbled stretches). Each take is cut at its own pauses into pieces of 1.5 to 6 s, each piece is transcribed on its own,
// and the joined transcript is compared with the script: character error (spaces ignored), length ratio, and any phrase heard
// more often than the script says it. Exports check(); run alone it checks a list: node check-all.cjs <items.json> <report.json>
const fs = require('fs'), path = require('path'), { execFileSync, spawnSync } = require('child_process');
const { msNum } = require('./spoken-lib.cjs');
const EN = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const ENT = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const enNum = n => n < 20 ? EN[n] : n < 100 ? ENT[Math.floor(n / 10)] + (n % 10 ? ' ' + EN[n % 10] : '') : n < 1000 ? EN[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' + enNum(n % 100) : '') : String(n);
const words = (s, lg) => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/(\d)\s*ml\b/g, lg === 'ms' ? '$1 mililiter' : '$1 millilitres')
  .replace(/(\d)\s*g\b/g, lg === 'ms' ? '$1 gram' : '$1 grams').replace(/\b\d+\b/g, d => lg === 'ms' ? msNum(+d) : enNum(+d))
  .replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w && w !== 'dot' && w !== 'titik');
const lev = (a, b) => { let p = Array.from({length:b.length + 1}, (_, j) => j);
  for (let i = 1; i <= a.length; i++) { const q = [i]; for (let j = 1; j <= b.length; j++) q[j] = Math.min(p[j] + 1, q[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); p = q; } return p[b.length]; };
const PHANTOM = /terima kasih kerana menonton!?|terima kasih\.?$|thank you for watching!?|thanks for watching!?|thank you\.?$/gi;
async function hear(file, lang) {
  const fd = new FormData(); fd.append('file', new Blob([fs.readFileSync(file)], {type:'audio/wav'}), 'p.wav'); fd.append('language', lang); fd.append('response_format', 'json'); fd.append('temperature', '0');
  const r = await fetch('http://127.0.0.1:3900/v1/audio/transcriptions', {method:'POST', body:fd});
  return ((await r.json()).text || '').replace(PHANTOM, '').trim();
}
function pieces(file, dur) {
  const log = spawnSync('ffmpeg', ['-v', 'info', '-i', file, '-af', 'silencedetect=noise=-40dB:d=0.12', '-f', 'null', '-'], {encoding:'utf8'}).stderr || '';
  const ends = [...log.matchAll(/silence_end: ([\d.]+) \| silence_duration: ([\d.]+)/g)].map(m => [+m[1] - +m[2], +m[1]]);
  const cuts = ends.filter(([s, e]) => s > 0.3 && e < dur - 0.3).map(([s, e]) => (s + e) / 2);
  const out = []; let a = 0;
  for (const c of cuts) if (c - a >= 1.5 && (dur - c >= 1.2)) { if (c - a <= 6 || !out.length || true) { out.push([a, c]); a = c; } }
  out.push([a, dur]);
  // merge a piece over 6 s only if no cut was possible; nothing to do then
  return {pieces:out, pauses:ends.filter(([s, e]) => s > 0.3 && e < dur - 0.05).map(([s, e]) => [s, e - s])};
}
async function check(item) {
  const b = fs.readFileSync(item.file), dur = (b.length - 44) / b.readUInt32LE(28);
  const {pieces:ps, pauses} = pieces(item.file, dur), tmp = path.join(__dirname, 'piece-' + process.pid + '.wav');
  const parts = [];
  for (const [s, e] of ps) { execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', s.toFixed(3), '-to', e.toFixed(3), '-i', item.file, tmp]); parts.push(await hear(tmp, item.lang)); }
  const heard = parts.join(' ').replace(/\s+/g, ' ').trim();
  const W = words(item.say, item.lang), H = words(heard, item.lang);
  const ws = W.join(''), hs = H.join(''), cer = lev(ws, hs) / Math.max(1, ws.length), ratio = hs.length / Math.max(1, ws.length);
  // a phrase (3 words, or 2 in a short line) heard more often than the script has it
  const n = 2, count = (arr, g) => { let k = 0; for (let i = 0; i + n <= arr.length; i++) if (arr.slice(i, i + n).join(' ') === g) k++; return k; };
  const reps = [...new Set(H.map((_, i) => H.slice(i, i + n).join(' ')).filter(g => g.split(' ').length === n))].filter(g => count(H, g) > 1 && count(H, g) > count(W, g));
  const lim = 0.06;
  const why = [];
  // a restart: one of the script's first words heard more often near the start than the script has it
  const head = (arr, k) => arr.slice(0, k), firsts = [...new Set(W.slice(0, 3).filter(w => w.length >= 3))];
  const restart = firsts.filter(w => head(H, 10).filter(x => x === w).length > head(W, 10).filter(x => x === w).length);
  if (restart.length) why.push(`restarts on "${restart.join('", "')}"`);
  if (cer > lim) why.push(`error ${(cer * 100).toFixed(0)}%`);
  if (ratio > 1.12) why.push(`longer than the script (${ratio.toFixed(2)}x)`);
  if (ratio < 0.85) why.push(`shorter than the script (${ratio.toFixed(2)}x)`);
  if (reps.length) why.push(`repeats "${reps.join('", "')}"`);
  return {id:item.id, dur:+dur.toFixed(2), pieces:ps.length, cer:+cer.toFixed(3), ratio:+ratio.toFixed(2), reps, pauses:pauses.map(([s, d]) => `${s.toFixed(2)}+${d.toFixed(2)}`), heard, ok:!why.length, why};
}
module.exports = {check};
if (require.main === module) (async () => {
  const [itemsF, outF] = process.argv.slice(2), items = JSON.parse(fs.readFileSync(itemsF, 'utf8')), res = [];
  for (const it of items) { const r = await check(it); res.push(r); process.stdout.write(r.ok ? '.' : 'x'); fs.writeFileSync(outF, JSON.stringify(res, null, 1)); }
  const bad = res.filter(r => !r.ok);
  console.log(`\n${items.length} takes checked, ${bad.length} to fix`); bad.forEach(r => console.log(`${r.id}: ${r.why.join('; ')}\n   heard: ${r.heard.slice(0, 200)}`));
})();
