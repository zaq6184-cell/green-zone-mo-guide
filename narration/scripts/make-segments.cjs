// The read-aloud scripts, word for word from the app's data: the two bilingual leaflets (dengue CPG Appendix 5B, cancer pain
// CPG patient leaflet) in English and Bahasa Melayu, and three English advice tabs. One segment per leaflet section, so each
// take is short enough to check. Writes segments.json: [{clip, seg, lang, text}].
const fs = require('fs');
const D = require('path').resolve(__dirname, '..', '..', 'src', 'parts') + '/';
let src = '';
for (const f of ['data.js', 'data2.js', 'data3.js', 'data4.js', 'data5.js', 'data6.js', 'data7.js']) src += fs.readFileSync(D + f, 'utf8') + '\n';
const P = new Function(src + ';return P;')();
const end = t => /[.!?:;]$/.test(t.trim()) ? t.trim() : t.trim() + '.';
const segs = [];
const leaflet = (id, key) => {
  for (const lg of ['en', 'ms']) {
    const L = P[id].leaflet[lg], clip = `leaf-${key}-${lg}`;
    let n = 0;
    segs.push({clip, seg:n++, lang:lg, text:end(L.title), parts:[end(L.title)]});
    for (const g of L.groups) { const parts = [end(g.h), g.p ? end(g.p) : '', ...g.items.map(end)].filter(Boolean); segs.push({clip, seg:n++, lang:lg, text:parts.join(' '), parts}); }
  }
};
leaflet('dengue-cpg', 'dengue');
leaflet('cancer-pain-cpg', 'cancerpain');
for (const [id, key] of [['mild-tbi', 'tbi'], ['dengue', 'dengue'], ['asthma-zone', 'asthma']]) {
  const a = P[id].advice, clip = `adv-${key}-en`;
  const half = Math.ceil(a.length / 2);
  [a.slice(0, half), a.slice(half)].forEach((part, n) => part.length && segs.push({clip, seg:n, lang:'en', text:part.map(end).join(' '), parts:part.map(end)}));
}
fs.writeFileSync(__dirname + '/segments.json', JSON.stringify(segs, null, 1));
const byClip = segs.reduce((o, s) => ((o[s.clip] = (o[s.clip] || 0) + s.text.split(/\s+/).length), o), {});
console.log(segs.length, 'segments'); console.log(byClip);
console.log('longest segment:', Math.max(...segs.map(s => s.text.split(/\s+/).length)), 'words');
