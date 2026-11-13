/* Tokenizer for Model2Vec potion-multilingual-128M (MIT, Minish Lab; its tokenizer is bge-m3's XLM-R SentencePiece Unigram,
   with Model2Vec's 250,351 added whole words). Standalone: CommonJS for Node (src/ai-ms.js), and the same text can be pasted
   into a browser page, where it defines the globals msNorm, msVocab and msTok.

   What the model's tokenizer.json does, and what this file does in its place:
     normalizer   Precompiled (SentencePiece nmt_nfkc): here NFKC, with control characters removed and zero-width and other
                  odd spaces made a space; then "  " -> " "; then a space either side of each ASCII punctuation mark;
                  then any run of white space -> " "; then strip.
     (lower)      The model does NOT lowercase. Its 250,351 added words are all lower case, so the guide passes lower:true
                  (applied after the steps above) for its own text and for what is typed, the same both sides.
     pre-tokenizer Metaspace, prepend "always", split false: every " " becomes "▁" and one "▁" goes in front.
     model        Unigram, Viterbi over the piece scores (log probabilities), ties to the first found as in Hugging Face
                  tokenizers (encode_optimized); a character with no piece of its own is [UNK] (score: the lowest score - 10),
                  and runs of [UNK] are fused into one.
   No piece holds "▁" anywhere but at its start, so every "▁" starts a piece and each word can be cut on its own and cached.

   Vocab file (sources/ai/ms/vocab.txt, made by src/ai-ms.js), UTF-8 text, one line per piece in id order:
     line 1   "#GZMS" TAB <score of an added word> TAB <lowest score in the full model>
     then     <piece> [TAB <score>]     (no score: the added-word score from line 1)
   Usage:
     const V = msVocab(text);                    // {pieces, ids: Map, score: Float64Array, def, min}
     const tok = msTok(V, {lower: true});        // s => array of piece ids, [UNK] (-1 here) left out
     tok('Sakit dada')                           // [ids...] into the model's rows
*/
(function(root){
  'use strict';
  const META = '\u2581';
  /* SentencePiece nmt_nfkc removes ASCII control characters and maps these to a space before NFKC */
  const CTRL = /[\u0000-\u0008\u000B\u000E-\u001F\u007F\u008F\u009F]/g;
  const SPACEISH = /[\t\n\f\r\u0085\u1680\u200B-\u200F\u2028\u2029\u2581\uFEFF\uFFFD]/g;
  const PUNCT = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;

  function msNorm(s, lower){
    s = String(s).replace(CTRL, '').replace(SPACEISH, ' ').normalize('NFKC');
    s = s.replace(/ {2,}/g, ' ').replace(PUNCT, ' $& ').replace(/\s+/g, ' ').trim();
    return lower ? s.toLowerCase() : s;
  }

  function msVocab(text){
    const lines = text.split('\n');
    const head = lines[0].split('\t');
    if (head[0] !== '#GZMS') throw new Error('vocab format');
    const def = Number(head[1]), min = Number(head[2]), n = lines.length - 1;
    const pieces = new Array(n), score = new Float64Array(n), ids = new Map();
    for (let i = 0; i < n; i++){
      const l = lines[i + 1], t = l.indexOf('\t');
      const p = t < 0 ? l : l.slice(0, t);
      pieces[i] = p; score[i] = t < 0 ? def : Number(l.slice(t + 1));
      if (!ids.has(p)) ids.set(p, i);
    }
    return {pieces, ids, score, def, min};
  }

  /* V: {ids: Map piece -> id, score, min}. Returns s => ids; opts.unk: true keeps [UNK] as -1 (for checking only).
     opts.offset: true carries the running score from word to word, exactly as one Viterbi over the whole string (slower, no cache). */
  function msTok(V, opts){
    opts = opts || {};
    const unkScore = V.min - 10, ids = V.ids, score = V.score;
    let maxLen = 1; for (const p of ids.keys()){ const n = Array.from(p).length; if (n > maxLen) maxLen = n; }
    const cache = new Map();
    function word(w, base){
      const cp = Array.from(w), n = cp.length;
      const best = new Float64Array(n + 1), from = new Int32Array(n + 1).fill(-1), tid = new Int32Array(n + 1);
      best[0] = base; from[0] = 0;
      for (let i = 0; i < n; i++){
        if (from[i] < 0) continue;
        const b = best[i]; let sub = '', single = false;
        for (let j = i; j < n && j - i < maxLen; j++){
          sub += cp[j];
          const t = ids.get(sub);
          if (t === undefined) continue;
          const c = b + score[t];
          if (j === i) single = true;
          if (from[j + 1] < 0 || c > best[j + 1]){ best[j + 1] = c; from[j + 1] = i; tid[j + 1] = t; }
        }
        if (!single){ const c = b + unkScore; if (from[i + 1] < 0 || c > best[i + 1]){ best[i + 1] = c; from[i + 1] = i; tid[i + 1] = -1; } }
      }
      const out = []; let e = n;
      while (e > 0){ const t = tid[e]; if (!(t === -1 && out.length && out[out.length - 1] === -1)) out.push(t); e = from[e]; }
      out.reverse();
      return {out, end: best[n]};
    }
    return function(s){
      const t = msNorm(s, opts.lower);
      if (!t) return [];
      const words = (META + t.replace(/ /g, META)).split(/(?=\u2581)/);
      const res = []; let acc = 0, prevUnk = false;
      for (const w of words){
        let r;
        if (opts.offset){ const x = word(w, acc); acc = x.end; r = x.out; }
        else { r = cache.get(w); if (!r){ r = word(w, 0).out; if (cache.size > 50000) cache.clear(); cache.set(w, r); } }
        for (const id of r){
          if (id === -1){ if (!prevUnk && opts.unk) res.push(-1); prevUnk = true; }
          else { res.push(id); prevUnk = false; }
        }
      }
      return res;
    };
  }

  const api = {msNorm, msVocab, msTok};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else Object.assign(root, api);
})(typeof globalThis !== 'undefined' ? globalThis : this);
