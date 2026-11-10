#!/usr/bin/env node
/* A small QR code encoder (byte mode, versions 1 to 10), after the QR Code specification and Project Nayuki's reference
   implementation. It draws the install page's QR code (INSTALL_QR in parts/engine.js), and test.js checks with it that
   the code still opens the web app's #install page, and that it agrees with the poster's QR code module for module.

   Usage: node qr.js <text> [L|M|Q|H]     prints {size, version, mask, d}: d is an SVG path, one unit per module, with no
                                          quiet zone (draw it in a viewBox of size + 8 for the four-module border) */
'use strict';
const ECL = {L: [0, 1], M: [1, 0], Q: [2, 3], H: [3, 2]}; /* index into the tables, format bits */
const ECC_PER_BLOCK = [
  [7, 10, 15, 20, 26, 18, 20, 24, 30, 18], [10, 16, 26, 18, 24, 16, 18, 22, 22, 26],
  [13, 22, 18, 26, 18, 24, 18, 22, 20, 24], [17, 28, 22, 16, 22, 28, 26, 26, 24, 28]];
const BLOCKS = [
  [1, 1, 1, 1, 1, 2, 2, 2, 2, 4], [1, 1, 1, 2, 2, 4, 4, 4, 5, 5],
  [1, 1, 2, 2, 4, 4, 6, 6, 8, 8], [1, 1, 2, 4, 4, 4, 5, 6, 8, 8]];

const rawModules = v => { let r = (16 * v + 128) * v + 64; if (v >= 2){ const n = Math.floor(v / 7) + 2; r -= (25 * n - 10) * n - 55; if (v >= 7) r -= 36; } return r; };
const dataCodewords = (v, e) => Math.floor(rawModules(v) / 8) - ECC_PER_BLOCK[e][v - 1] * BLOCKS[e][v - 1];
const mul = (x, y) => { let z = 0; for (let i = 7; i >= 0; i--){ z = (z << 1) ^ ((z >>> 7) * 0x11d); z ^= ((y >>> i) & 1) * x; } return z; };
function divisor(deg){
  const r = new Array(deg - 1).fill(0).concat(1); let root = 1;
  for (let i = 0; i < deg; i++){ for (let j = 0; j < r.length; j++){ r[j] = mul(r[j], root); if (j + 1 < r.length) r[j] ^= r[j + 1]; } root = mul(root, 2); }
  return r;
}
function remainder(data, div){
  const r = div.map(() => 0);
  for (const b of data){ const f = b ^ r.shift(); r.push(0); div.forEach((c, i) => { r[i] ^= mul(c, f); }); }
  return r;
}

/* Text made only of the 45 alphanumeric characters (digits, capitals, space and $%*+-./:) is packed 11 bits to two
   characters, as the poster's code is; anything else goes byte by byte (UTF-8) */
const ALNUM = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:';
function encode(text, level = 'M', forceMask = -1, minVersion = 1){
  const [e, fbits] = ECL[level];
  text = String(text);
  const alnum = [...text].every(c => ALNUM.includes(c)), bytes = [...Buffer.from(text, 'utf8')];
  const countBits = v => alnum ? (v < 10 ? 9 : 11) : (v < 10 ? 8 : 16);
  const payload = alnum ? Math.floor(text.length / 2) * 11 + (text.length % 2) * 6 : bytes.length * 8;
  let v = minVersion;
  while (v <= 10 && 4 + countBits(v) + payload > dataCodewords(v, e) * 8) v++;
  if (v > 10) throw new Error('Too long for a version 10 QR code');
  const cap = dataCodewords(v, e) * 8, bits = [];
  const put = (val, n) => { for (let i = n - 1; i >= 0; i--) bits.push((val >>> i) & 1); };
  if (alnum){
    put(2, 4); put(text.length, countBits(v));
    for (let i = 0; i < text.length; i += 2){
      const a = ALNUM.indexOf(text[i]);
      if (i + 1 < text.length) put(a * 45 + ALNUM.indexOf(text[i + 1]), 11); else put(a, 6);
    }
  } else { put(4, 4); put(bytes.length, countBits(v)); bytes.forEach(b => put(b, 8)); }
  put(0, Math.min(4, cap - bits.length)); put(0, (8 - bits.length % 8) % 8);
  for (let pad = 0xec; bits.length < cap; pad ^= 0xec ^ 0x11) put(pad, 8);
  const data = []; for (let i = 0; i < bits.length; i += 8) data.push(parseInt(bits.slice(i, i + 8).join(''), 2));

  /* Error correction, block by block, then interleaved */
  const nb = BLOCKS[e][v - 1], eccLen = ECC_PER_BLOCK[e][v - 1], raw = Math.floor(rawModules(v) / 8);
  const nShort = nb - raw % nb, shortLen = Math.floor(raw / nb), div = divisor(eccLen), blocks = [];
  for (let i = 0, k = 0; i < nb; i++){
    const d = data.slice(k, k + shortLen - eccLen + (i < nShort ? 0 : 1)); k += d.length;
    const ecc = remainder(d, div); if (i < nShort) d.push(0); blocks.push(d.concat(ecc));
  }
  const words = [];
  for (let i = 0; i < blocks[0].length; i++) blocks.forEach((b, j) => { if (i !== shortLen - eccLen || j >= nShort) words.push(b[i]); });

  /* The matrix: function patterns first */
  const size = v * 4 + 17, M = [...Array(size)].map(() => Array(size).fill(false)), F = [...Array(size)].map(() => Array(size).fill(false));
  const set = (x, y, dark) => { M[y][x] = dark; F[y][x] = true; };
  for (let i = 0; i < size; i++){ set(6, i, i % 2 === 0); set(i, 6, i % 2 === 0); }
  const finder = (cx, cy) => { for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++){ const x = cx + dx, y = cy + dy, d = Math.max(Math.abs(dx), Math.abs(dy)); if (x >= 0 && x < size && y >= 0 && y < size) set(x, y, d !== 2 && d !== 4); } };
  finder(3, 3); finder(size - 4, 3); finder(3, size - 4);
  const align = v === 1 ? [] : (() => { const n = Math.floor(v / 7) + 2, step = Math.ceil((v * 4 + 4) / (n * 2 - 2)) * 2, r = [6]; for (let p = size - 7; r.length < n; p -= step) r.splice(1, 0, p); return r; })();
  align.forEach((a, i) => align.forEach((b, j) => {
    if ((i === 0 && j === 0) || (i === 0 && j === align.length - 1) || (i === align.length - 1 && j === 0)) return;
    for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) set(a + dx, b + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
  }));
  const format = mask => {
    const dat = fbits << 3 | mask; let rem = dat;
    for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
    const b = (dat << 10 | rem) ^ 0x5412, bit = i => ((b >>> i) & 1) === 1;
    for (let i = 0; i <= 5; i++) set(8, i, bit(i));
    set(8, 7, bit(6)); set(8, 8, bit(7)); set(7, 8, bit(8));
    for (let i = 9; i < 15; i++) set(14 - i, 8, bit(i));
    for (let i = 0; i < 8; i++) set(size - 1 - i, 8, bit(i));
    for (let i = 8; i < 15; i++) set(8, size - 15 + i, bit(i));
    set(8, size - 8, true);
  };
  format(0);
  if (v >= 7){
    let rem = v; for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) * 0x1f25);
    const b = v << 12 | rem;
    for (let i = 0; i < 18; i++){ const dark = ((b >>> i) & 1) === 1, a = size - 11 + i % 3, c = Math.floor(i / 3); set(a, c, dark); set(c, a, dark); }
  }
  /* The codewords, in the zigzag */
  let n = 0;
  for (let right = size - 1; right >= 1; right -= 2){
    if (right === 6) right = 5;
    for (let vert = 0; vert < size; vert++) for (let j = 0; j < 2; j++){
      const x = right - j, y = ((right + 1) & 2) === 0 ? size - 1 - vert : vert;
      if (!F[y][x] && n < words.length * 8){ M[y][x] = ((words[n >>> 3] >>> (7 - (n & 7))) & 1) === 1; n++; }
    }
  }
  /* The mask with the lowest penalty, unless one is asked for */
  const masked = mask => M.map((row, y) => row.map((dark, x) => {
    if (F[y][x]) return dark;
    const flip = [(x + y) % 2 === 0, y % 2 === 0, x % 3 === 0, (x + y) % 3 === 0, (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0,
      x * y % 2 + x * y % 3 === 0, (x * y % 2 + x * y % 3) % 2 === 0, ((x + y) % 2 + x * y % 3) % 2 === 0][mask];
    return flip ? !dark : dark;
  }));
  let best = forceMask, grid = null;
  if (best < 0){
    let low = Infinity;
    for (let k = 0; k < 8; k++){ format(k); const g = masked(k), p = penalty(g); if (p < low){ low = p; best = k; } }
  }
  format(best); grid = masked(best);
  return {size, version: v, mask: best, level, modules: grid, func: F};
}

function penalty(g){
  const size = g.length; let score = 0;
  const lines = (get) => {
    for (let a = 0; a < size; a++){
      let color = false, run = 0; const hist = [0, 0, 0, 0, 0, 0, 0];
      const add = len => { if (hist[0] === 0) len += size; hist.pop(); hist.unshift(len); };
      const count = () => { const n = hist[1], core = n > 0 && hist[2] === n && hist[3] === n * 3 && hist[4] === n && hist[5] === n;
        return (core && hist[0] >= n * 4 && hist[6] >= n ? 1 : 0) + (core && hist[6] >= n * 4 && hist[0] >= n ? 1 : 0); };
      for (let b = 0; b < size; b++){
        if (get(a, b) === color){ run++; if (run === 5) score += 3; else if (run > 5) score++; }
        else { add(run); if (!color) score += count() * 40; color = get(a, b); run = 1; }
      }
      if (color){ add(run); run = 0; }
      run += size; add(run); score += count() * 40;
    }
  };
  lines((y, x) => g[y][x]); lines((x, y) => g[y][x]);
  for (let y = 0; y < size - 1; y++) for (let x = 0; x < size - 1; x++){ const c = g[y][x]; if (c === g[y][x + 1] && c === g[y + 1][x] && c === g[y + 1][x + 1]) score += 3; }
  const dark = g.flat().filter(Boolean).length, total = size * size;
  score += (Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1) * 10;
  return score;
}

/* Read a QR code back (versions 1 to 9): the format, the mask, every segment (numeric, alphanumeric, byte), and whether
   each block's error correction matches its data. It is the check on encode(): it reads the poster's code, made by
   another encoder, and the codes made here. modules: rows of booleans, dark true, without the quiet zone. */
function decode(modules){
  const size = modules.length, v = (size - 17) / 4;
  if (!Number.isInteger(v) || v < 1 || v > 9) throw new Error('Not a version 1 to 9 QR code');
  const at = (x, y) => modules[y][x];
  let fb = 0; const pos = [];
  for (let i = 0; i <= 5; i++) pos.push([8, i]); pos.push([8, 7], [8, 8], [7, 8]); for (let i = 9; i < 15; i++) pos.push([14 - i, 8]);
  pos.forEach(([x, y], i) => { fb |= (at(x, y) ? 1 : 0) << i; });
  const raw = fb ^ 0x5412, dat = raw >>> 10;
  let rem = dat; for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
  if ((raw & 0x3ff) !== (rem & 0x3ff)) throw new Error('Format bits do not check');
  const level = {1: 'L', 0: 'M', 3: 'Q', 2: 'H'}[dat >>> 3], mask = dat & 7, e = ECL[level][0];
  /* Which modules carry data: the same function patterns encode() draws (from an empty code of this version) */
  const F = encode('', level, 0, v).func;
  const flip = (x, y) => [(x + y) % 2 === 0, y % 2 === 0, x % 3 === 0, (x + y) % 3 === 0, (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0,
    x * y % 2 + x * y % 3 === 0, (x * y % 2 + x * y % 3) % 2 === 0, ((x + y) % 2 + x * y % 3) % 2 === 0][mask];
  const bits = [];
  for (let right = size - 1; right >= 1; right -= 2){
    if (right === 6) right = 5;
    for (let vert = 0; vert < size; vert++) for (let j = 0; j < 2; j++){
      const x = right - j, y = ((right + 1) & 2) === 0 ? size - 1 - vert : vert;
      if (!F[y][x]) bits.push(at(x, y) !== flip(x, y) ? 1 : 0);
    }
  }
  const words = []; for (let i = 0; i + 8 <= bits.length; i += 8) words.push(parseInt(bits.slice(i, i + 8).join(''), 2));
  /* Undo the interleaving, then check each block's error correction */
  const nb = BLOCKS[e][v - 1], eccLen = ECC_PER_BLOCK[e][v - 1], rawN = Math.floor(rawModules(v) / 8);
  const nShort = nb - rawN % nb, shortLen = Math.floor(rawN / nb), blocks = [...Array(nb)].map(() => []);
  let k = 0;
  for (let i = 0; i <= shortLen; i++) for (let j = 0; j < nb; j++){
    if (i === shortLen - eccLen && j < nShort) continue; /* a short block has no byte here */
    blocks[j].push(words[k++]);
  }
  const div = divisor(eccLen);
  const eccOk = blocks.every(b => { const d = b.slice(0, b.length - eccLen), want = b.slice(b.length - eccLen); return remainder(d, div).every((w, i) => w === want[i]); });
  const data = blocks.flatMap(b => b.slice(0, b.length - eccLen));
  const dbits = data.flatMap(w => [7, 6, 5, 4, 3, 2, 1, 0].map(s => (w >>> s) & 1));
  let p = 0; const take = n => { let x = 0; for (let i = 0; i < n; i++) x = x * 2 + (dbits[p++] || 0); return x; };
  let text = '';
  while (p + 4 <= dbits.length){
    const mode = take(4);
    if (mode === 0) break;
    if (mode === 1){ const n = take(10); for (let i = 0; i < n; i += 3){ const left = n - i; text += String(take(left >= 3 ? 10 : left === 2 ? 7 : 4)).padStart(Math.min(3, left), '0'); } }
    else if (mode === 2){ const n = take(9); for (let i = 0; i < n; i += 2){ if (i + 1 < n){ const x = take(11); text += ALNUM[Math.floor(x / 45)] + ALNUM[x % 45]; } else text += ALNUM[take(6)]; } }
    else if (mode === 4){ const n = take(8), b = []; for (let i = 0; i < n; i++) b.push(take(8)); text += Buffer.from(b).toString('utf8'); }
    else throw new Error('Unsupported segment mode ' + mode);
  }
  return {text, level, mask, version: v, eccOk};
}

/* One horizontal run of dark modules per path segment, in module units */
function path(qr){
  let d = '';
  qr.modules.forEach((row, y) => { for (let x = 0; x < row.length; x++) if (row[x]){ let n = 1; while (row[x + n]) n++; d += `M${x} ${y}h${n}v1h-${n}z`; x += n - 1; } });
  return d;
}

module.exports = {encode, decode, path};
if (require.main === module){
  const qr = encode(process.argv[2] || '', process.argv[3] || 'M');
  console.log(JSON.stringify({size: qr.size, version: qr.version, mask: qr.mask, level: qr.level, d: path(qr)}));
}
