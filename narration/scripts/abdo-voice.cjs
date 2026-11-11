// Record the five Malay lines of the abdominal pain script with VoiceStudio's local service (as narration/scripts/gen-chunks.cjs:
// Kore 364099c8, ms, speed 0.95, 32 steps, seeds 7, 11, 23, 41), check each take (whole-take CER, spaces ignored, and the strict
// piece-by-piece check of narration/scripts/check-all.cjs), retake with the next seed when it fails, keep the best.
// Takes: narration/read-aloud/abdo-script-ms/p<n>-s<seed>.wav, the kept one as p<n>.wav; scores: voice-report.json beside them.
// 12 Nov 2026: all five passed on seed 7. node abdo-voice.cjs [1,2,...]
const fs = require('fs'), path = require('path'), { execFileSync, spawnSync } = require('child_process');
const OUT = path.resolve(__dirname, '..', 'read-aloud', 'abdo-script-ms');
const TMP = path.join(__dirname, 'asm', 'abdo'); fs.mkdirSync(TMP, {recursive:true});
const VOICE = {id:'364099c8', speed:'0.95'};
const SEEDS = [7, 11, 23, 41];
const LINES = [
  'Punca sakit perut anda belum dapat dipastikan sepenuhnya.',
  'Datang semula ke Jabatan Kecemasan dengan segera jika sakit bertambah teruk, pitam, demam, muntah berterusan, tidak boleh minum, muntah atau najis berdarah, perut membuncit, susah bernafas atau air kencing berkurang.',
  'Jika ada kemungkinan hamil dan sakit atau pendarahan bertambah, datang segera.',
  'Jangan tunggu tarikh temujanji jika keadaan semakin teruk.',
  'Jika rebah atau terlalu lemah untuk datang dengan selamat, hubungi sembilan sembilan sembilan.',
];
// L2's ten red flags, each must be heard, in order
const L2_ITEMS = ['bertambah teruk', 'pitam', 'demam', 'muntah berterusan', 'tidak boleh minum', 'najis berdarah', 'perut membuncit', 'susah bernafas', 'air kencing berkurang'];
const MS1 = ['sifar', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'lapan', 'sembilan'];
const msNum = n => n < 10 ? MS1[n] : n === 10 ? 'sepuluh' : n === 11 ? 'sebelas' : n < 20 ? MS1[n - 10] + ' belas'
  : n < 100 ? MS1[Math.floor(n / 10)] + ' puluh' + (n % 10 ? ' ' + MS1[n % 10] : '')
  : n < 1000 ? (n < 200 ? 'seratus' : MS1[Math.floor(n / 100)] + ' ratus') + (n % 100 ? ' ' + msNum(n % 100) : '') : String(n);
// "999" is the emergency number, read digit by digit: a heard "999" is scored as three "sembilan"
const words = s => s.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/\b9\s?9\s?9\b/g, ' sembilan sembilan sembilan ')
  .replace(/\b\d+\b/g, d => msNum(+d)).replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
const lev = (a, b) => { let p = Array.from({length:b.length + 1}, (_, j) => j);
  for (let i = 1; i <= a.length; i++) { const q = [i]; for (let j = 1; j <= b.length; j++) q[j] = Math.min(p[j] + 1, q[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); p = q; } return p[b.length]; };
const cer = (want, heard) => { const x = words(want).join(''), y = words(heard).join(''); return lev(x, y) / Math.max(1, x.length); };
const PHANTOM = /terima kasih kerana menonton!?|terima kasih\.?$|thank you for watching!?|thanks for watching!?|thank you\.?$/gi;
const probe = f => +execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString().trim();
async function gen(text, seed, f) {
  const fd = new FormData();
  fd.append('text', text); fd.append('language', 'ms'); fd.append('profile_id', VOICE.id);
  fd.append('speed', VOICE.speed); fd.append('num_step', '32'); fd.append('seed', String(seed));
  const r = await fetch('http://127.0.0.1:3900/generate', {method:'POST', body:fd});
  if (!r.ok) throw new Error(`generate ${r.status} ${(await r.text()).slice(0, 200)}`);
  fs.writeFileSync(f, Buffer.from(await r.arrayBuffer()));
}
async function hear(f) {
  const fd = new FormData();
  fd.append('file', new Blob([fs.readFileSync(f)], {type:'audio/wav'}), 'p.wav'); fd.append('language', 'ms'); fd.append('response_format', 'json'); fd.append('temperature', '0');
  const r = await fetch('http://127.0.0.1:3900/v1/audio/transcriptions', {method:'POST', body:fd});
  if (!r.ok) throw new Error(`transcribe ${r.status}`);
  return ((await r.json()).text || '').replace(PHANTOM, '').trim();
}
// strict check, as check-all.cjs: cut at the take's own pauses into 1.5-6 s pieces, transcribe each piece
function pieces(file, dur) {
  const log = spawnSync('ffmpeg', ['-v', 'info', '-i', file, '-af', 'silencedetect=noise=-40dB:d=0.12', '-f', 'null', '-'], {encoding:'utf8'}).stderr || '';
  const ends = [...log.matchAll(/silence_end: ([\d.]+) \| silence_duration: ([\d.]+)/g)].map(m => [+m[1] - +m[2], +m[1]]);
  const cuts = ends.filter(([s, e]) => s > 0.3 && e < dur - 0.3).map(([s, e]) => (s + e) / 2);
  const out = []; let a = 0;
  for (const c of cuts) if (c - a >= 1.5 && dur - c >= 1.2) { out.push([a, c]); a = c; }
  out.push([a, dur]);
  return out;
}
async function strict(file, want) {
  const dur = probe(file), ps = pieces(file, dur), tmp = path.join(TMP, 'piece.wav'), parts = [];
  for (const [s, e] of ps) { execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', s.toFixed(3), '-to', e.toFixed(3), '-i', file, tmp]); parts.push(await hear(tmp)); }
  const heard = parts.join(' ').replace(/\s+/g, ' ').trim();
  const W = words(want), H = words(heard), ws = W.join(''), hs = H.join('');
  const c = lev(ws, hs) / Math.max(1, ws.length), ratio = hs.length / Math.max(1, ws.length);
  const n = 2, count = (arr, g) => { let k = 0; for (let i = 0; i + n <= arr.length; i++) if (arr.slice(i, i + n).join(' ') === g) k++; return k; };
  const reps = [...new Set(H.map((_, i) => H.slice(i, i + n).join(' ')).filter(g => g.split(' ').length === n))].filter(g => count(H, g) > 1 && count(H, g) > count(W, g));
  const firsts = [...new Set(W.slice(0, 3).filter(w => w.length >= 3))];
  const restart = firsts.filter(w => H.slice(0, 10).filter(x => x === w).length > W.slice(0, 10).filter(x => x === w).length);
  const why = [];
  if (restart.length) why.push(`restarts on "${restart.join('", "')}"`);
  if (c > 0.06) why.push(`strict error ${(c * 100).toFixed(1)}%`);
  if (ratio > 1.12) why.push(`longer than the script (${ratio.toFixed(2)}x)`);
  if (ratio < 0.85) why.push(`shorter than the script (${ratio.toFixed(2)}x)`);
  if (reps.length) why.push(`repeats "${reps.join('", "')}"`);
  return {pieces:ps.length, cer:+c.toFixed(4), ratio:+ratio.toFixed(2), reps, restart, heard, why};
}
// L2: every red flag heard, in order (character match on the joined words, spaces ignored, allowing near spellings)
function itemsInOrder(heard) {
  const h = words(heard).join(''); let at = 0; const miss = [];
  for (const it of L2_ITEMS) {
    const k = words(it).join('');
    // best approximate match at or after `at`: lowest edit distance over windows of length k-1..k+2
    let best = {d:1e9, end:at};
    for (let i = at; i < h.length; i++) for (let L = Math.max(1, k.length - 1); L <= k.length + 2 && i + L <= h.length; L++) {
      const d = lev(k, h.slice(i, i + L)); if (d < best.d) best = {d, end:i + L};
    }
    if (best.d / k.length > 0.25) miss.push(it); else at = best.end;
  }
  return miss;
}
(async () => {
  fs.mkdirSync(OUT, {recursive:true});
  const only = process.argv[2] ? process.argv[2].split(',').map(Number) : [1, 2, 3, 4, 5];
  const repF = path.join(OUT, 'voice-report.json');
  const rep = fs.existsSync(repF) ? JSON.parse(fs.readFileSync(repF, 'utf8')) : {};
  for (const n of only) {
    const want = LINES[n - 1], tries = [];
    for (const seed of SEEDS) {
      const f = path.join(OUT, `p${n}-s${seed}.wav`);
      if (!fs.existsSync(f)) await gen(want, seed, f);
      const heard = await hear(f), whole = cer(want, heard), st = await strict(f, want);
      const why = [...st.why];
      if (whole > 0.06) why.push(`whole error ${(whole * 100).toFixed(1)}%`);
      if (n === 2) { const miss = itemsInOrder(heard), miss2 = itemsInOrder(st.heard); if (miss.length || miss2.length) why.push(`items not heard: ${[...new Set([...miss, ...miss2])].join(', ')}`); }
      const t = {seed, dur:+probe(f).toFixed(3), whole:+whole.toFixed(4), heard, strict:st.cer, strictHeard:st.heard, pieces:st.pieces, ratio:st.ratio, ok:!why.length, why};
      tries.push(t);
      console.log(`L${n} seed ${seed}: whole ${(whole * 100).toFixed(1)}%, strict ${(st.cer * 100).toFixed(1)}% (${st.pieces} pieces) ${t.ok ? 'OK' : 'FAIL ' + why.join('; ')}\n   heard:  ${heard}\n   strict: ${st.heard}`);
      if (t.ok) break;
    }
    const best = tries.slice().sort((a, b) => (b.ok - a.ok) || (a.whole + a.strict) - (b.whole + b.strict))[0];
    fs.copyFileSync(path.join(OUT, `p${n}-s${best.seed}.wav`), path.join(OUT, `p${n}.wav`));
    rep[`L${n}`] = {text:want, kept:best.seed, tries};
    fs.writeFileSync(repF, JSON.stringify(rep, null, 1));
    console.log(`L${n}: kept seed ${best.seed} ${best.ok ? '(passes)' : '(BEST, STILL FAILS)'}`);
  }
})().catch(e => { console.error(e); process.exit(1); });
