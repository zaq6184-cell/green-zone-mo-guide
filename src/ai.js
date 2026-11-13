#!/usr/bin/env node
/* Smart search's model (13 Nov 2026): makes app/ai/ from Model2Vec's potion-retrieval-32M (MIT, Minish Lab), a static
   embedding model: one vector per word piece, averaged over a query. No AI engine runs on the phone, only a look-up and a sum.

   Reads sources/ai/pr32-tokenizer.json and sources/ai/pr32-model.safetensors (git-ignored; from
   https://huggingface.co/minishlab/potion-retrieval-32M), keeps the first 128 of its 512 dimensions (the model's own PCA
   puts the most telling first: tried on 110 on-shift searches on 13 Nov 2026, 128 kept every gain of the full model),
   stores them as 8-bit numbers with one scale per dimension, and writes:
     app/ai/model.bin    "GZAI", word pieces (uint32), dimensions (uint32), the scales (float32 x D), the pieces (int8 x V x D)
     app/ai/vocab.txt    the word pieces in id order, one per line
     app/ai/LICENSE.txt  the MIT notice the model's licence asks for
   Then checks the 8-bit copy against the full-precision one on a few phrases.
   Usage: node ai.js  (run again only if the model or the number of dimensions changes; the files are kept in git) */
const fs = require('fs');
const path = require('path');

const D = 128;
const SRC = path.join(__dirname, '..', 'sources', 'ai');
const OUT = path.join(__dirname, '..', 'app', 'ai');
const stop = m => { console.error(m); process.exit(1); };

const tok = JSON.parse(fs.readFileSync(path.join(SRC, 'pr32-tokenizer.json'), 'utf8'));
if (tok.model.type !== 'WordPiece' || tok.model.continuing_subword_prefix !== '##') stop('Expected a WordPiece tokenizer with ## pieces.');
const vocab = tok.model.vocab, V = Object.keys(vocab).length;
const pieces = new Array(V);
for (const [t, id] of Object.entries(vocab)){ if (/[\r\n]/.test(t)) stop('A word piece holds a line break: ' + JSON.stringify(t)); pieces[id] = t; }
if (pieces.some(x => x === undefined)) stop('The word piece ids have a gap.');

const buf = fs.readFileSync(path.join(SRC, 'pr32-model.safetensors'));
const hlen = Number(buf.readBigUInt64LE(0));
const header = JSON.parse(buf.slice(8, 8 + hlen).toString('utf8'));
const key = Object.keys(header).find(k => header[k].shape);
const {dtype, shape, data_offsets} = header[key];
if (dtype !== 'F32' || shape[0] !== V || shape[1] < D) stop(`Unexpected tensor ${key}: ${dtype} ${shape}`);
const full = shape[1], at = 8 + hlen + data_offsets[0];
const row = (i, k) => buf.readFloatLE(at + (i * full + k) * 4);

/* one scale per dimension, so each keeps its own range in 8 bits */
const scale = new Float32Array(D);
for (let i = 0; i < V; i++) for (let k = 0; k < D; k++){ const a = Math.abs(row(i, k)); if (a > scale[k]) scale[k] = a; }
for (let k = 0; k < D; k++) scale[k] = (scale[k] || 1) / 127;
const q = Buffer.alloc(V * D);
for (let i = 0; i < V; i++) for (let k = 0; k < D; k++) q.writeInt8(Math.max(-127, Math.min(127, Math.round(row(i, k) / scale[k]))), i * D + k);

const head = Buffer.alloc(12); head.write('GZAI', 0, 'ascii'); head.writeUInt32LE(V, 4); head.writeUInt32LE(D, 8);
const sc = Buffer.alloc(D * 4); for (let k = 0; k < D; k++) sc.writeFloatLE(scale[k], k * 4);
fs.mkdirSync(OUT, {recursive: true});
fs.writeFileSync(path.join(OUT, 'model.bin'), Buffer.concat([head, sc, q]));
fs.writeFileSync(path.join(OUT, 'vocab.txt'), pieces.join('\n'));
/* The claude.ai artifact serves only web file types (no .bin), so its copy of the model is the same bytes as base64 text.
   It is published from here (sources/ai/, git-ignored) as ai/model.b64.txt; the web app keeps the smaller model.bin. */
fs.writeFileSync(path.join(SRC, 'model.b64.txt'), Buffer.concat([head, sc, q]).toString('base64'));
fs.writeFileSync(path.join(OUT, 'LICENSE.txt'), `Smart search in the Green Zone MO Guide uses Model2Vec potion-retrieval-32M
(https://huggingface.co/minishlab/potion-retrieval-32M, by Minish Lab: Stephan Tulkens and Thomas van Dongen),
cut to its first ${D} dimensions and stored as 8-bit numbers. It is used under the MIT licence:

` + fs.readFileSync(path.join(SRC, 'LICENSE-model2vec.txt'), 'utf8'));

/* The same tokenising as engine.js (aiTok), to check the 8-bit copy */
const pre = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[a-z0-9]+|[^\sa-z0-9]/g) || [];
const wp = w => { if (w.length > 100) return []; const out = []; let i = 0; while (i < w.length){ let j = w.length, f = -1; while (j > i){ const s = (i ? '##' : '') + w.slice(i, j); if (s in vocab){ f = vocab[s]; break; } j--; } if (f < 0) return []; out.push(f); i = j; } return out; };
const enc = (s, get) => { const v = new Float64Array(D); for (const id of pre(s).flatMap(wp)) for (let k = 0; k < D; k++) v[k] += get(id, k); const n = Math.hypot(...v) || 1; return v.map(x => x / n); };
const f32 = (id, k) => row(id, k), i8 = (id, k) => q.readInt8(id * D + k) * scale[k];
const cos = (a, b) => a.reduce((s, x, k) => s + x * b[k], 0);
let worst = 1;
for (const s of ['short of breath', 'fell and hit head', 'red swollen leg', 'platelet low in dengue', 'paracetamol overdose in a child', 'Any urgent indication for urology referral?'])
  worst = Math.min(worst, cos(enc(s, f32), enc(s, i8)));
const mb = n => (n / 1048576).toFixed(2) + ' MB';
console.log(`Wrote app/ai/model.bin (${mb(12 + D * 4 + V * D)}: ${V} word pieces x ${D}), vocab.txt (${mb(Buffer.byteLength(pieces.join('\n')))}) and LICENSE.txt`);
console.log(`8-bit against full precision on 6 phrases: worst cosine ${worst.toFixed(4)}`);
if (worst < 0.99) stop('The 8-bit copy drifts too far from the full model.');
