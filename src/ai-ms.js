#!/usr/bin/env node
/* Smart search, Malay-aware trial (13 Nov 2026): cuts Model2Vec potion-multilingual-128M (MIT, Minish Lab; teacher bge-m3,
   101 languages including Malay) down to the phone's budget, in the same file layout as src/ai.js. Writes to sources/ai/ms/
   only (nothing in app/), for measuring first.

   Reads (git-ignored, from https://huggingface.co/minishlab/potion-multilingual-128M):
     sources/ai/pm128-tokenizer.json, sources/ai/pm128-model.safetensors (500,353 pieces x 256 dimensions, float32)
     sources/ai/ms/passages.json   the guide's passages as aiLoad in engine.js builds them ([IDX index, text]); make it with
                                   node ai-ms.js --passages  (serves app/ on port 8811 and reads IDX with Playwright)
     sources/ai/wordfreq-top.json  the most frequent words of Malay, Indonesian and English (wordfreq 3.1.1's "best" lists:
                                   28,707 ms, 31,108 id, the top 60,000 en), used only to choose which pieces to keep; no list
                                   is shipped (wordfreq: Apache-2.0 code, CC BY-SA 4.0 data). Made in a venv outside AppData:
                                     py -3.14 -m venv C:\Users\user\tools\m2v-venv
                                     C:\Users\user\tools\m2v-venv\Scripts\python -m pip install wordfreq tokenizers
                                     C:\Users\user\tools\m2v-venv\Scripts\python -c "import wordfreq, json; json.dump({l:
                                       wordfreq.top_n_list(l, 60000 if l == 'en' else 40000, wordlist='best') for l in
                                       ['ms', 'id', 'en']}, open('sources/ai/wordfreq-top.json', 'w', encoding='utf-8'),
                                       ensure_ascii=False)"            (run in the project folder, as one line)
   Keeps, as rows of the new model:
     1. every single-character piece that lower-case text can produce (so any string still tokenises);
     2. every piece the guide's own passages use (so the guide tokenises exactly as with the full model);
     3. with --fill words (the default): the pieces of the most frequent Malay, Indonesian and English words, taken in turn
        rank by rank, so each of those words also tokenises exactly as with the full model (all 119,815 words: 65,989 rows,
        8.06 MB); given --rows N, it stops at N rows or, once the lists run out, tops up to N with the Latin-script
        lower-case pieces with the highest scores. With --fill score: only the latter, to N rows. A plain "top N by score"
        keeps none of the model's 250,351 added whole words (all share one score, below 112,632 word fragments of other
        languages): in the trial it lost 3 of 13 Malay hits.
   Keeps the first 128 of the 256 dimensions (the model's own PCA order), with each row's own length (the length carries the
   word's weight: making rows unit length cost 6 English and 5 Malay hits of 63 in the trial), stored as 8-bit numbers with one
   scale per dimension. Writes:
     model.bin      "GZAI", pieces (uint32), dimensions (uint32), the scales (float32 x D), the rows (int8 x V x D)
     model.b64.txt  the same bytes as base64 (the claude.ai artifact serves only web file types)
     vocab.txt      "#GZMS" TAB <added-word score> TAB <lowest score>, then one piece per line in row order, TAB its score
                    when it differs from the added-word score (read with msVocab in src/ai-ms-tok.js)
     LICENSE.txt    the MIT notice
   Usage: node ai-ms.js [--rows N] [--fill words|score] [--dims 128] [--out dir] [--prec 8]   (--rows at most 81,915: 10 MB)
          node ai-ms.js --passages */
const fs = require('fs');
const path = require('path');
const {msVocab, msTok} = require('./ai-ms-tok.js');

const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const SRC = path.join(__dirname, '..', 'sources', 'ai');
const OUT = path.resolve(arg('out', path.join(SRC, 'ms')));
const D = Number(arg('dims', 128)), FILL = arg('fill', 'words'), PREC = Number(arg('prec', 8));
const BUDGET = 10 * 1048576;
const ROWS = Number(arg('rows', Math.floor((BUDGET - 12 - D * 4) / D))), TOPUP = FILL === 'score' || process.argv.includes('--rows');
const stop = m => { console.error(m); process.exit(1); };
const mb = n => (n / 1048576).toFixed(2) + ' MB';

if (process.argv.includes('--passages')) return dumpPassages();

/* The full model */
const tj = JSON.parse(fs.readFileSync(path.join(SRC, 'pm128-tokenizer.json'), 'utf8'));
if (tj.model.type !== 'Unigram' || tj.pre_tokenizer.type !== 'Metaspace' || tj.pre_tokenizer.split !== false) stop('Expected the Unigram tokenizer with a Metaspace pre-tokenizer (split false).');
const full = tj.model.vocab, FV = full.length, fids = new Map(), fscore = new Float64Array(FV);
let fmin = Infinity;
full.forEach(([p, s], i) => { fids.set(p, i); fscore[i] = s; if (s < fmin) fmin = s; });
const ADDED = full[FV - 1][1]; /* the score Model2Vec gave every added word */
const tokFull = msTok({ids: fids, score: fscore, min: fmin}, {lower: true});
const buf = fs.readFileSync(path.join(SRC, 'pm128-model.safetensors'));
const hlen = Number(buf.readBigUInt64LE(0)), header = JSON.parse(buf.slice(8, 8 + hlen).toString('utf8'));
const {dtype, shape, data_offsets} = header.embeddings || {};
if (dtype !== 'F32' || shape[0] !== FV || shape[1] < D) stop('Unexpected tensor: ' + JSON.stringify(header).slice(0, 200));
const FD = shape[1], at = 8 + hlen + data_offsets[0];
const row = (i, k) => buf.readFloatLE(at + (i * FD + k) * 4);

/* 1. single characters */
const keep = new Set();
full.forEach(([p], i) => { if (i > 1 && Array.from(p).length === 1 && p === p.toLowerCase()) keep.add(i); });
const nSingle = keep.size;
/* 2. the guide's own passages */
const PFILE = path.join(SRC, 'ms', 'passages.json');
if (!fs.existsSync(PFILE)) stop('No passages: run  node ai-ms.js --passages  first.');
const PASS = JSON.parse(fs.readFileSync(PFILE, 'utf8')).map(p => p[1]);
for (const t of PASS) for (const id of tokFull(t)) keep.add(id);
const nGuide = keep.size - nSingle;
if (keep.size > ROWS) stop(`The guide alone needs ${keep.size} rows, more than ${ROWS}.`);
/* 3. fill */
let nWords = 0;
if (FILL === 'words'){
  const wf = JSON.parse(fs.readFileSync(path.join(SRC, 'wordfreq-top.json'), 'utf8'));
  const lists = ['ms', 'id', 'en'].map(l => wf[l]), longest = Math.max(...lists.map(l => l.length));
  fill: for (let r = 0; r < longest; r++) for (const l of lists){
    const w = l[r]; if (!w) continue;
    const need = tokFull(w).filter(id => !keep.has(id));
    if (keep.size + need.length > ROWS) break fill;
    need.forEach(id => keep.add(id)); nWords++;
  }
}
const nByWords = keep.size - nSingle - nGuide;
if (TOPUP){
  const lat = /^[▁]?[\p{Script=Latin}0-9\p{P}\p{S}]+$/u;
  const cand = [...full.keys()].filter(i => i > 1 && !keep.has(i) && lat.test(full[i][0]) && full[i][0] === full[i][0].toLowerCase()).sort((a, b) => full[b][1] - full[a][1] || a - b);
  for (const i of cand){ if (keep.size >= ROWS) break; keep.add(i); }
}
if (FILL !== 'words' && FILL !== 'score') stop('--fill words or score');

const ids = [...keep].sort((a, b) => a - b), V = ids.length;
for (const i of ids) if (/[\t\r\n]/.test(full[i][0])) stop('A piece holds a tab or line break: ' + JSON.stringify(full[i][0]));

/* 8-bit rows, one scale per dimension over the kept rows */
const scale = new Float32Array(D);
for (const i of ids) for (let k = 0; k < D; k++){ const a = Math.abs(row(i, k)); if (a > scale[k]) scale[k] = a; }
for (let k = 0; k < D; k++) scale[k] = (scale[k] || 1) / 127;
const q = Buffer.alloc(V * D);
ids.forEach((i, r) => { for (let k = 0; k < D; k++) q.writeInt8(Math.max(-127, Math.min(127, Math.round(row(i, k) / scale[k]))), r * D + k); });
const head = Buffer.alloc(12); head.write('GZAI', 0, 'ascii'); head.writeUInt32LE(V, 4); head.writeUInt32LE(D, 8);
const sc = Buffer.alloc(D * 4); for (let k = 0; k < D; k++) sc.writeFloatLE(scale[k], k * 4);
const model = Buffer.concat([head, sc, q]);

/* vocab with scores: the added-word score is left out; the others to PREC significant digits */
const num = s => String(Number(s.toPrecision(PREC)));
const vocabTxt = ['#GZMS\t' + ADDED + '\t' + fmin, ...ids.map(i => full[i][1] === ADDED ? full[i][0] : full[i][0] + '\t' + num(full[i][1]))].join('\n');

fs.mkdirSync(OUT, {recursive: true});
fs.writeFileSync(path.join(OUT, 'model.bin'), model);
fs.writeFileSync(path.join(OUT, 'model.b64.txt'), model.toString('base64'));
fs.writeFileSync(path.join(OUT, 'vocab.txt'), vocabTxt);
const lic = path.join(SRC, 'LICENSE-model2vec.txt');
fs.writeFileSync(path.join(OUT, 'LICENSE.txt'), `Smart search in the Green Zone MO Guide uses Model2Vec potion-multilingual-128M
(https://huggingface.co/minishlab/potion-multilingual-128M, by Minish Lab: Stephan Tulkens and Thomas van Dongen;
distilled from BAAI bge-m3), cut to ${V} of its 500,353 word pieces and its first ${D} dimensions, stored as 8-bit numbers.
It is used under the MIT licence:

` + (fs.existsSync(lic) ? fs.readFileSync(lic, 'utf8') : ''));

/* Checks, reading the files back as the phone would */
const PV = msVocab(fs.readFileSync(path.join(OUT, 'vocab.txt'), 'utf8'));
if (PV.pieces.length !== V) stop('vocab.txt and model.bin disagree on the number of pieces.');
const tokP = msTok(PV, {lower: true});
let same = 0;
for (const t of PASS){ const a = tokP(t).map(r => PV.pieces[r]).join(' '), b = tokFull(t).map(i => full[i][0]).join(' '); if (a === b) same++; }
if (same !== PASS.length) stop(`Only ${same} of ${PASS.length} passages tokenise as with the full model.`);
const encP = (s, f8) => { const v = new Float64Array(D); for (const r of tokP(s)) for (let k = 0; k < D; k++) v[k] += f8 ? model.readInt8(12 + D * 4 + r * D + k) * scale[k] : row(ids[r], k); const n = Math.hypot(...v) || 1; return v.map(x => x / n); };
let worst = 1;
for (const s of ['short of breath', 'sakit dada', 'demam denggi dengan platelet rendah', 'fell and hit head', 'kaki bengkak merah', 'paracetamol overdose in a child'])
  worst = Math.min(worst, encP(s, false).reduce((a, x, k) => a + x * encP(s, true)[k], 0));
console.log(`Rows: ${V} (single characters ${nSingle}, the guide's own pieces ${nGuide}, ${FILL === 'words' ? `the pieces of the top ${nWords} words of ms/id/en ${nByWords}, ` : ''}top Latin pieces by score ${V - nSingle - nGuide - nByWords}) x ${D} dimensions`);
console.log(`Wrote ${path.relative(process.cwd(), OUT) || OUT}: model.bin ${mb(model.length)} (${model.length} bytes), model.b64.txt ${mb(Math.ceil(model.length / 3) * 4)}, vocab.txt ${mb(Buffer.byteLength(vocabTxt))}`);
console.log(`All ${PASS.length} guide passages tokenise as with the full model; 8-bit against float on 6 phrases: worst cosine ${worst.toFixed(4)}`);
if (model.length > BUDGET) stop('Over the 10 MB budget.');
if (worst < 0.99) stop('The 8-bit copy drifts too far from the float rows.');

/* --passages: serve app/ on port 8811, read IDX with Playwright, build the passages exactly as aiLoad in engine.js does */
async function dumpPassages(){
  const http = require('http');
  const root = path.join(__dirname, '..', 'app'), port = 8811;
  const TYPES = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.json': 'application/json', '.webp': 'image/webp'};
  const srv = http.createServer((req, res) => {
    let rel = decodeURIComponent(req.url.split('?')[0]); if (rel === '/') rel = '/index.html';
    const f = path.join(root, path.normalize(rel));
    if (!f.startsWith(root) || !fs.existsSync(f) || !fs.statSync(f).isFile()){ res.writeHead(404); res.end(); return; }
    res.writeHead(200, {'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream'}); fs.createReadStream(f).pipe(res);
  }).listen(port, '127.0.0.1');
  const {chromium} = require('playwright');
  const b = await chromium.launch(), pg = await b.newPage();
  try {
    await pg.goto(`http://127.0.0.1:${port}/#home`);
    await pg.waitForFunction(() => typeof IDX !== 'undefined' && IDX.length > 0, null, {timeout: 30000});
    const idx = await pg.evaluate(() => IDX.map(e => ({href: e.href, title: e.title, kind: e.kind, meta: e.meta, body: e.body})));
    const SKIP = new Set(['Setting', 'Quiz', 'Update', 'Poster', 'About', 'Video']), P = [];
    idx.forEach((e, i) => {
      if (SKIP.has(e.kind)) return;
      P.push([i, e.title]);
      let cur = [], words = 0;
      const flush = () => { if (cur.length){ P.push([i, e.title + ': ' + cur.join(' · ')]); cur = []; words = 0; } };
      for (const p of (e.body || '').split(' · ')){ cur.push(p); words += p.split(' ').length; if (words > 40) flush(); }
      flush();
    });
    fs.mkdirSync(path.join(SRC, 'ms'), {recursive: true});
    fs.writeFileSync(path.join(SRC, 'ms', 'idx.json'), JSON.stringify(idx));
    fs.writeFileSync(path.join(SRC, 'ms', 'passages.json'), JSON.stringify(P));
    console.log(`IDX ${idx.length} entries; ${P.length} passages written to sources/ai/ms/passages.json`);
  } finally { await b.close(); srv.close(); }
}
