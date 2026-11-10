#!/usr/bin/env node
/* Check the guide's content before every build.

   Loads parts/data.js, data2.js, data3.js, data4.js, data5.js, data6.js, data7.js, data8.js, data9.js, data10.js, data11.js, data12.js and data13.js and checks every entry in P:
   - the start node exists, and every option and "next" points to a node that exists;
   - every node is a question (opts), a step (step + next) or an outcome (end + items);
   - every node can be reached from the start;
   - every link (node links, "see also") points to an entry, a step (#entry--node), a view of the app, or a source PDF in Google Drive;
   - a scored checklist (check:'score') has a suggest function.

   Expected result since the third CPG round (9 Nov 2026): "54 entries; rules: 15" and "no errors".
   Usage: node check-data.js [folder with the data files]     (npm run check) */
const fs = require('fs');
const path = require('path');

const dir = path.resolve(process.argv[2] || path.join(__dirname, 'parts'));
const parts = ['data.js', 'data2.js', 'data3.js', 'data4.js', 'data5.js', 'data6.js', 'data7.js', 'data8.js', 'data9.js', 'data10.js', 'data11.js', 'data12.js', 'data13.js'].filter(f => fs.existsSync(path.join(dir, f)));
const src = parts.map(f => fs.readFileSync(path.join(dir, f), 'utf8')).join('\n') + '\nmodule.exports = P;';
const m = {exports: {}};
new Function('module', src)(m);
const P = m.exports;

/* Views of the app that a link may point to (see the route list at the top of engine.js) */
const VIEWS = ['top', 'home', 'search', 'tour', 'video', 'journey', 'learn', 'rules', 'pathways', 'saved', 'quiz', 'numbers', 'links', 'tools', 'poster', 'new', 'about', 'intro', 'install'];
/* Every calculator the engine defines: the keys of its CALCS object */
const CALC_IDS = (() => { const e = fs.readFileSync(path.join(dir, 'engine.js'), 'utf8'), b = e.slice(e.indexOf('const CALCS = {'), e.indexOf('\n};', e.indexOf('const CALCS = {'))); return [...b.matchAll(/^  ([a-z0-9]+):\{t:'/gm)].map(m => m[1]); })();
const okHref = h => {
  if (/^https:\/\/drive\.google\.com\/(file\/d\/[\w-]+\/view|uc\?export=download&id=[\w-]+)$/.test(h)) return true; /* a source document's PDF in Drive, to open or download */
  const x = h.slice(1);
  if (P[x]) return true;
  const mm = x.match(/^([\w-]+?)--(\w+)$/);
  if (mm && P[mm[1]] && P[mm[1]].nodes[mm[2]]) return true;
  if (/^journey-[1-5]$/.test(x)) return true;
  if (x === 'calc' || (/^calc-([a-z0-9]+)$/.test(x) && CALC_IDS.includes(x.slice(5)))) return true;
  return VIEWS.includes(x);
};

const errs = [];
for (const [id, p] of Object.entries(P)) {
  if (!p.nodes[p.start]) errs.push(id + ': bad start');
  for (const [k, n] of Object.entries(p.nodes)) {
    (n.opts || []).forEach(o => { if (!p.nodes[o[1]]) errs.push(`${id}.${k}: option -> ${o[1]} missing`); });
    if (n.step && !p.nodes[n.next]) errs.push(`${id}.${k}: next ${n.next} missing`);
    if (!n.end && !n.step && !n.opts) errs.push(`${id}.${k}: no options`);
    if (n.end && !n.items) errs.push(`${id}.${k}: outcome without items`);
    (n.links || []).forEach(l => { if (!okHref(l[0])) errs.push(`${id}.${k}: bad link ${l[0]}`); });
    if (n.check === 'score' && typeof n.suggest !== 'function') errs.push(`${id}.${k}: score without suggest`);
  }
  (p.see || []).forEach(l => { if (!okHref(l[0])) errs.push(`${id}: bad see-also link ${l[0]}`); });
  const seen = new Set(), stack = [p.start];
  while (stack.length) {
    const k = stack.pop();
    if (seen.has(k)) continue;
    seen.add(k);
    const n = p.nodes[k];
    if (!n) continue;
    (n.opts || []).forEach(o => stack.push(o[1]));
    if (n.next) stack.push(n.next);
  }
  Object.keys(p.nodes).forEach(k => { if (!seen.has(k)) errs.push(`${id}.${k}: unreachable`); });
}

console.log(Object.keys(P).length + ' entries; rules: ' + Object.values(P).filter(p => p.grp === 'rules').length);
console.log(errs.length ? errs.join('\n') : 'no errors');
process.exitCode = errs.length ? 1 : 0;
