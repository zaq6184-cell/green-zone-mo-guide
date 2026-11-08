/* Playwright check for the Green Zone MO Guide, version 8.
   Serves the offline copy and walks every view on desktop (1366 px), phone (390 px) and tablet (900 px),
   in light and dark, with reduced motion on the tablet. It fails on any console or page error, any
   sideways scroll, and any check below that does not hold. Screenshots go to the shots folder.

   It is written for the version 8 markup (ids such as #bento, #zmap, #daynight, #libgrid, #cur, #ptab, #pmap, #introbox, #gq). Change it with the shell.
   The night poster sheets and night films must be in the site folder: the dark runs load them.
   Setup once: npm install, then npx playwright install chromium.
   Usage: node test.js [site folder, default ../app] [screenshot folder, default ./shots]     (npm test) */
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const root = path.resolve(process.argv[2] || path.join(__dirname, '..', 'app'));
const out = path.resolve(process.argv[3] || path.join(__dirname, 'shots'));
const PORT = Number(process.env.PORT) || 8765;
fs.mkdirSync(out, {recursive:true});
const types = {'.html':'text/html','.webp':'image/webp','.mp4':'video/mp4','.mp3':'audio/mpeg','.png':'image/png'};
const srv = http.createServer((q, r) => {
  const f = path.join(root, decodeURIComponent(q.url.split('?')[0]).replace(/^\/$/, '/index.html'));
  fs.readFile(f, (e, d) => { if (e){ r.writeHead(404); r.end(); return; } r.writeHead(200, {'content-type':types[path.extname(f)] || 'application/octet-stream'}); r.end(d); });
}).listen(PORT);
const U = `http://localhost:${PORT}/`;
const VIEWS = ['home','pathways','rules','tools','calc','numbers','intro','journey','tour','quiz','new','poster','about'];
let fails = 0;
const ok = (cond, msg) => { console.log((cond ? 'ok   ' : 'FAIL ') + msg); if (!cond) fails++; };

(async () => {
  const b = await chromium.launch();
  const errs = [];
  const mk = async (opts, name) => {
    const ctx = await b.newContext(opts); const p = await ctx.newPage();
    p.on('console', m => { if (m.type() === 'error') errs.push(name + ': ' + m.text()); });
    p.on('pageerror', e => errs.push(name + ' PAGEERROR: ' + e.message));
    return p;
  };
  const hscroll = p => p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  const visible = p => p.evaluate(() => [...document.querySelectorAll('#viewport > .view')].filter(v => !v.hidden).map(v => v.dataset.view).join(','));
  const go = async (p, h, wait = 350) => { await p.evaluate(x => { location.hash = x; }, h); await p.waitForTimeout(wait); };

  /* ---------- Desktop, light ---------- */
  let p = await mk({viewport:{width:1366, height:900}, colorScheme:'light'}, 'desk');
  await p.goto(U, {waitUntil:'networkidle'}); await p.waitForTimeout(900);
  ok(await visible(p) === 'home', 'desktop opens on home');
  ok(await hscroll(p) <= 0, 'desktop home has no sideways scroll');
  ok(await p.evaluate(() => document.querySelectorAll('svg.i').length > 40), 'icons filled');
  ok(await p.evaluate(() => !document.querySelector('[data-icon]:not(button)')), 'no icon placeholders left');
  ok(await p.evaluate(() => document.querySelectorAll('#zmap [data-zs]').length) === 5, 'zone map shows five stops');
  ok(await p.evaluate(() => /5333/.test(document.querySelector('#kn-a').textContent)), 'Code Blue tile shows ext 5333');
  ok(await p.evaluate(() => document.querySelectorAll('#quick a .dots i').length) > 8, 'quick routes show how each can end');
  ok(await p.evaluate(() => { const s = document.querySelector('#daynight'); return !!s && s.getAttribute('role') === 'switch' && s.getAttribute('aria-checked') === 'false' && s.querySelectorAll('svg.i').length === 2; }), 'home shows the Day and Night switch, set to day');
  ok(await p.evaluate(() => document.querySelector('#vid').getAttribute('src') === 'media/green-zone-explainer-720p.mp4' && document.querySelector('#vid').getAttribute('poster') === 'media/explainer-poster.webp'), 'in day colours the tour has the day film and cover');
  ok(await p.evaluate(() => document.querySelector('#v-poster [data-sheet="1"] img').getAttribute('src') === 'poster/sheet1-thumb.webp'), 'in day colours the poster page has the day sheets');
  ok(await p.evaluate(() => APP_URL) === 'https://zaq6184-cell.github.io/green-zone-mo-guide/', 'Copy link builds links on the public web app');
  ok(await p.evaluate(() => document.querySelectorAll('#kn-a .tm img, #kn-b .tm img').length) === 2, 'Code Blue and Code Stroke tiles have their pictures');
  ok(await p.evaluate(() => ['#t-paths', '#t-rules', '#t-dc', '#t-calc', '#t-intro', '#tl-tip'].every(s => document.querySelector(s + ' .tm img'))), 'the six home tiles have their pictures');
  ok(await p.evaluate(() => { const on = ['#t-paths', '#t-rules', '#t-dc', '#t-calc', '#t-intro', '#tl-tip'].map(s => document.querySelector(s + ' .tm')).filter(el => { const r = el.getBoundingClientRect(); return (Math.min(r.bottom, innerHeight) - Math.max(r.top, 0)) / r.height >= .5; }); return on.length > 0 && on.every(el => el.querySelector('video')); }), 'the home tiles on screen start their loops');
  await p.screenshot({path:out + '/d-home.png'});
  await p.click('#zmap [data-zs="3"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => !document.querySelector('#zx').hidden && /CCA/.test(document.querySelector('#zx h3').textContent)), 'a zone stop opens its rules');
  await p.screenshot({path:out + '/d-home-zone.png'});
  await p.click('#zmap [data-zs="3"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelector('#zx').hidden), 'tapping the stop again closes it');
  await p.screenshot({path:out + '/d-home-full.png', fullPage:true});
  for (const v of VIEWS.slice(1)){
    await go(p, '#' + v);
    const vis = await visible(p), expect = ['journey','tour','quiz'].includes(v) ? 'learn' : v;
    ok(vis === expect, `#${v} shows ${expect} (got ${vis})`);
    ok(await hscroll(p) <= 0, `#${v} no sideways scroll`);
    await p.screenshot({path:out + `/d-${v}.png`, fullPage:true});
  }
  // Topic tiles: pictures, and loops while Moving tiles is on (on by default)
  await go(p, '#pathways', 900);
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm img').length) === 9, 'the nine topic tiles have their pictures');
  ok(await p.evaluate(() => [...document.querySelectorAll('#libcats .tm img')].every(i => i.complete && i.naturalWidth === 640)), 'every topic picture loads');
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm video').length) > 0, 'the topic tiles start their loops (Moving tiles is on by default)');
  ok(await p.evaluate(() => document.querySelectorAll('.libsec .lh .tm img').length) >= 8, 'the Pathways section bars carry their topic pictures');
  await p.fill('#libq', 'co'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm video').length) > 0, 'typing in the filter keeps the tile loops');
  await p.fill('#libq', ''); await p.waitForTimeout(150);
  // Library filter and stars
  await go(p, '#pathways');
  ok(await p.evaluate(() => document.querySelectorAll('#libgrid .pc').length) === 38, 'library shows 38 cards');
  await p.fill('#libq', 'colic'); await p.waitForTimeout(150);
  console.log('     filter colic ->', await p.evaluate(() => [...document.querySelectorAll('#libgrid .pc h3')].map(h => h.textContent).join(' | ')));
  await p.fill('#libq', ''); await p.waitForTimeout(100);
  await p.click('#libcats [data-cat="heart"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelectorAll('#libgrid .pc').length) === 6, 'heart category shows 6');
  await p.click('#libgrid [data-star="acs"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => JSON.parse(localStorage.getItem('gz-saved') || '[]').includes('acs')), 'star on a card saves it');
  ok(await p.evaluate(() => location.hash) === '#pathways', 'star does not open the card');
  ok(await p.evaluate(() => !document.querySelector('#sidesaved').hidden), 'sidebar shows saved');
  await p.click('#libcats [data-cat="all"]'); await p.waitForTimeout(100);
  // Palette
  await p.keyboard.press('/'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => !document.querySelector('#pal').hidden && document.activeElement.id === 'gq'), 'slash opens search with focus');
  await p.screenshot({path:out + '/d-pal-empty.png'});
  await p.keyboard.type('ivab antibiotics'); await p.waitForTimeout(200);
  await p.fill('#gq', 'antibiotics no bed'); await p.waitForTimeout(200);
  console.log('     search ->', await p.evaluate(() => [...document.querySelectorAll('#palbody a')].slice(0, 5).map(a => a.getAttribute('href')).join(' ')));
  await p.screenshot({path:out + '/d-pal-results.png'});
  await p.fill('#gq', 'renal colic'); await p.waitForTimeout(200);
  await p.keyboard.press('Enter'); await p.waitForTimeout(450);
  ok(await p.evaluate(() => location.hash) === '#renal-colic' && await visible(p) === 'run', 'Enter opens renal colic');
  console.log('     can end in ->', await p.evaluate(() => [...document.querySelectorAll('.rail-p .end')].map(e => e.textContent).join(' | ')));
  ok(await p.evaluate(() => document.querySelectorAll('.rail-p .end').length) === 3, 'renal colic can end three ways');
  await p.screenshot({path:out + '/d-run-start.png'});
  await p.click('.rail-p [data-map]'); await p.waitForTimeout(400);
  ok(await p.evaluate(() => !document.querySelector('#pmap').hidden && document.querySelectorAll('#pmbody .pm li').length === Object.keys(P['renal-colic'].nodes).length), 'whole-pathway map lists every step');
  await p.screenshot({path:out + '/d-map.png'});
  await p.keyboard.press('Escape'); await p.waitForTimeout(200);
  ok(await p.evaluate(() => document.querySelector('#pmap').hidden), 'Escape closes the map');
  await p.keyboard.press('2'); await p.waitForTimeout(300);
  await p.keyboard.press('1'); await p.waitForTimeout(300);
  console.log('     rail ->', await p.evaluate(() => [...document.querySelectorAll('.rp li')].map(l => l.textContent.trim().slice(0, 50)).join(' / ')));
  await p.screenshot({path:out + '/d-run-steps.png', fullPage:true});
  const before = await p.evaluate(() => document.querySelectorAll('.rp li.done').length);
  await p.keyboard.press('Backspace'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => document.querySelectorAll('.rp li.done').length) === before - 1, `Backspace steps back one answer (${before} to ${before - 1})`);
  // Deep links to the version 7 notes
  for (const [h, t] of [['#gz-rules--ivab','IV antibiotics when no bed is free'],['#gz-rules--oneway','One-way flow'],['#gz-rules--down','Down-triage: only the EP can allow it'],['#referral-rules--iprok','Suitable for transfer to IPR'],['#gz-rules--kk','Redirect to a Klinik Kesihatan or private GP']]){
    await go(p, h, 400);
    const got = await p.evaluate(() => (document.querySelector('#cur h2') || {}).textContent || '');
    ok(got.startsWith(t), `${h} shows "${t}" (got "${got}")`);
  }
  await p.screenshot({path:out + '/d-run-kk.png', fullPage:true});
  await go(p, '#referral-rules--ortho', 400);
  await p.click('#cur .checks label'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelector('#cur button.opt.sugg span').textContent) === 'Any present', 'ortho criteria suggest on-call referral');
  await p.screenshot({path:out + '/d-run-ortho.png', fullPage:true});
  await p.click('#cur button.opt.sugg'); await p.waitForTimeout(350);
  ok((await p.evaluate(() => document.querySelector('#cur h2').textContent)).includes('orthopaedic team on call'), 'ortho any -> on call');
  ok(await p.evaluate(() => !!document.querySelector('#cur .res.land')), 'the outcome card turns over when you reach it');
  await p.click('.rail-p [data-map]'); await p.waitForTimeout(400);
  ok(await p.evaluate(() => document.querySelector('#pmbody .pm').classList.contains('trail') && !!document.querySelector('#pmbody li.now') && document.querySelectorAll('#pmbody li.gone').length > 0), 'the map lights your route and dims the outcomes left behind');
  await p.screenshot({path:out + '/d-map-trail.png'});
  await p.click('#pmclose'); await p.waitForTimeout(200);
  // Reference tabs and discharge advice
  await go(p, '#dengue', 400);
  const tabs = await p.evaluate(() => [...document.querySelectorAll('#ptab [role="tab"]')].map(b => b.textContent));
  console.log('     dengue tabs ->', tabs.join(' | '));
  ok(tabs.includes('Department notes'), 'dengue has a department notes tab');
  await p.click('#ptab [data-pt="dept"]'); await p.waitForTimeout(200);
  ok(await p.evaluate(() => !document.querySelector('#tp-dept').hidden && document.querySelector('#tp-advice') ? document.querySelector('#tp-advice').hidden : true), 'tab switch shows department notes');
  await p.screenshot({path:out + '/d-run-dengue-dept.png', fullPage:true});
  // Walk a pathway to an outcome with discharge advice
  const endWithAdvice = await p.evaluate(() => { for (const [id, x] of Object.entries(P)){ if (!x.advice) continue; const k = Object.keys(x.nodes).find(k => x.nodes[k].end === 'discharge'); if (k) return '#' + id + '--' + k; } return null; });
  await go(p, endWithAdvice, 400);
  ok(await p.evaluate(() => !!document.querySelector('.res.discharge [data-showadvice]')), `outcome ${endWithAdvice} offers discharge advice`);
  await p.click('[data-showadvice]'); await p.waitForTimeout(500);
  ok(await p.evaluate(() => document.querySelector('#ptab [aria-selected="true"]').dataset.pt) === 'advice', 'advice tab selected');
  await p.screenshot({path:out + '/d-run-outcome.png', fullPage:true});
  await p.click('[data-save]'); await p.waitForTimeout(150);
  // Tools
  await go(p, '#tools');
  ok(await p.evaluate(() => !!document.querySelector('#dcheck .tool-h .tm img') && !!document.querySelector('#tcx .tm img')), 'the discharge check header and the calculators card have their pictures');
  ok(await p.evaluate(() => document.querySelector('#tcx').getAttribute('href') === '#calc' && document.querySelectorAll('#tcx .gl li').length === 6), 'Shift tools leads to the calculators, with their six groups');
  for (let i = 0; i < 6; i++) await p.check(`[data-dc="a${i}"]`);
  ok(await p.evaluate(() => document.querySelector('#verdict').className) === 'verdict ok', 'all checks give ready to discharge');
  ok(await p.evaluate(() => document.querySelectorAll('#dcr i.on').length) === 6, 'the route meter lights all six stations');
  await p.check('[data-dc="s3"]');
  ok(await p.evaluate(() => document.querySelector('#verdict').className) === 'verdict stop', 'a stop item blocks discharge');
  ok(await p.evaluate(() => document.querySelector('#dcr').classList.contains('stop')), 'the route meter turns red on a stop sign');
  await p.screenshot({path:out + '/d-tools.png', fullPage:true});
  await go(p, '#calc-dengue', 400);
  await p.fill('#cf-hr', '110'); await p.fill('#cf-sbp', '100'); await p.fill('#cf-dbp', '70'); await p.waitForTimeout(200);
  ok(await p.evaluate(() => document.querySelectorAll('#couts .scale').length) === 3, 'dengue sums draw three gauges');
  ok(await p.evaluate(() => document.querySelector('#couts .out').classList.contains('bad')), 'shock index over 1 shows as a sign of shock');
  await p.screenshot({path:out + '/d-tools-dengue.png', fullPage:true});
  await go(p, '#calc-kids', 400);
  await p.fill('#cf-wt', '15'); await p.waitForTimeout(150);
  console.log('     kids 15 kg ->', await p.evaluate(() => [...document.querySelectorAll('#couts .out b')].map(b => b.textContent).join(' | ')));
  await p.screenshot({path:out + '/d-tools-kids.png', fullPage:true});
  // Calculators: the hub, the outside links, each kind of calculator, the shared weight, the sources and the storage rule
  const gz = () => p.evaluate(() => Object.keys(localStorage).filter(k => k.startsWith('gz-')).sort().map(k => k + '=' + localStorage.getItem(k)).join('|'));
  const store0 = await gz();
  for (const [r, t] of [['#calc-dengue', 'Shock index'], ['#calc-kids', 'Child doses'], ['#calc-weight', 'Adjusted weight']]){
    await go(p, r, 300);
    ok(await p.evaluate(() => document.querySelector('#calcbox:not([hidden]) h2').textContent) === t, `the old link ${r} still opens ${t}`);
  }
  await go(p, '#calc', 500);
  ok(await p.evaluate(() => document.querySelector('#calcbox').hidden), 'the calculators hub opens with no calculator open');
  ok(await p.evaluate(() => document.querySelectorAll('#cxlist .cxc').length === 12 && document.querySelectorAll('#cxlist .cxl').length === 5), 'the hub lists 12 calculators and 5 outside links');
  ok(await p.evaluate(() => [...document.querySelectorAll('#cxlist .cxl a')].every(a => a.target === '_blank' && /noopener/.test(a.rel) && a.href.startsWith('https://pemcalc.com/') && /outside site/.test(a.closest('.pc').textContent))), 'the PEMCalc links open in a new tab and say they are an outside site');
  ok(await p.evaluate(() => document.querySelectorAll('#cxcats button').length === 7 && document.querySelectorAll('#cxcats .tm img').length === 7), 'the seven group tiles have their pictures');
  ok(await p.evaluate(() => document.querySelectorAll('#cxcats .tm video').length > 0), 'the calculator group tiles start their loops');
  await p.screenshot({path:out + '/d-calc-hub.png', fullPage:true});
  await p.click('#cxcats [data-cg="scores"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => [...document.querySelectorAll('#cxlist .pc')].filter(r => !r.hidden).map(r => r.dataset.id).join() === 'curb,wells'), 'the Scores tile shows CURB-65 and Wells');
  await p.click('#cxcats [data-cg="all"]'); await p.fill('#cxq', 'clexane'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => [...document.querySelectorAll('#cxlist .pc')].filter(r => !r.hidden).map(r => r.dataset.id).join() === 'anticoag'), 'finding "clexane" shows the anticoagulant calculator');
  await p.fill('#cxq', 'zzzz'); await p.waitForTimeout(100);
  ok(await p.evaluate(() => !document.querySelector('#cxempty').hidden), 'a find with no match says so');
  await p.fill('#cxq', ''); await p.waitForTimeout(100);
  ok(await p.evaluate(() => calcFactsMissing().map(f => f.join(': ')).join(' / ')) === '', 'every number in the calculators is still in its source text');
  ok(await p.evaluate(() => Object.values(P).every(e => { const h = (e.see || []).map(s => s[0]); return h.length === new Set(h).size; }) && P.dengue.see.filter(s => s[0] === '#calc-dengue').length === 1 && P.dengue.see.some(s => s[0] === '#calc-weight')), 'no see-also row repeats a link: dengue links once to the shock index, and to adjusted weight');
  await go(p, '#calc-curb', 400);
  for (const i of [0, 1]) await p.check(`#calcbox input[data-k="c"][data-i="${i}"]`);
  ok(await p.evaluate(() => { const v = document.querySelector('#couts .verdict'); return v.classList.contains('stop') && /admit/.test(v.textContent) && v.querySelector('a').getAttribute('href') === '#pneumonia--admit'; }), 'CURB-65 of 2 gives admit');
  await go(p, '#calc-wells', 400);
  for (const i of [0, 1, 2]) await p.check(`#calcbox input[data-k="w"][data-i="${i}"]`);
  ok(await p.evaluate(() => document.querySelector('#couts .verdict a').getAttribute('href') === '#dvt--cp'), 'Wells of 3 leads to the 2-point compression test');
  await p.check('#calcbox input[data-k="w"][data-i="9"]');
  ok(await p.evaluate(() => document.querySelector('#couts .out b').textContent === '1' && document.querySelector('#couts .verdict a').getAttribute('href') === '#dvt--ddm'), 'the alternative-diagnosis item takes 2 off Wells');
  await go(p, '#calc-pain', 400);
  for (const [r, s] of [[0, 2], [1, 2], [2, 2], [3, 1], [4, 0]]) await p.click(`#calcbox [data-r="${r}"][data-s="${s}"]`);
  ok(await p.evaluate(() => document.querySelector('#couts .out b').textContent === '7 of 10' && document.querySelector('#couts .verdict').classList.contains('refer')), 'FLACC of 7 sends the patient to the EP for the morphine protocol');
  await p.click('#calcbox [data-sv="cpot"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => { const r = [...document.querySelectorAll('#calcbox .rate .rn')].map(x => x.textContent); return r.length === 4 && /Ventilator/.test(r[3]); }), 'CPOT scores four rows, with the ventilator row for an intubated patient');
  await p.click('#calcbox [data-sv="ex"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => { const r = [...document.querySelectorAll('#calcbox .rate .rn')].map(x => x.textContent); return r.length === 4 && /Vocalisation/.test(r[3]); }), 'and the vocalisation row instead once extubated');
  await p.screenshot({path:out + '/d-calc-pain.png', fullPage:true});
  await go(p, '#calc-analgesia', 400);
  ok(await p.evaluate(() => document.querySelector('#cf-wt').value === '15' && document.querySelector('#couts .out b').textContent === '225 mg'), 'the weight from Child doses carries to Analgesia: paracetamol 225 mg at 15 kg');
  await p.fill('#cf-wt', '50'); await p.waitForTimeout(100);
  ok(await p.evaluate(() => document.querySelector('#couts .out b').textContent === 'Not covered'), 'exactly 50 kg says the ebook does not cover it');
  await go(p, '#calc-anticoag', 400);
  ok(await p.evaluate(() => /Choose over or under 30/.test(document.querySelector('#couts').textContent)), 'the anticoagulant asks for the creatinine clearance first');
  await p.click('#calcbox [data-sv="over"]'); await p.waitForTimeout(100);
  ok(await p.evaluate(() => [...document.querySelectorAll('#couts .out b')].map(b => b.textContent).slice(0, 2).join(' | ') === '7.5 mg once a day | 50 mg every 12 hours'), 'at 50 kg: fondaparinux 7.5 mg, Clexane 50 mg 12-hourly');
  await go(p, '#calc-insulin', 400);
  await p.click('#calcbox [data-pv="0.4"]'); await p.waitForTimeout(100);
  ok(await p.evaluate(() => document.querySelector('#couts .out b').textContent === '20 units a day' && !!document.querySelector('#couts .cx-gap')), 'insulin at 50 kg and 0.4 unit/kg: 20 units a day, and the missing split is named');
  await go(p, '#calc-head', 400);
  await p.check('#calcbox input[data-k="ct"][data-i="1"]');
  ok(await p.evaluate(() => document.querySelector('#couts .verdict a').getAttribute('href') === '#mild-tbi--ct1'), 'an immediate CT criterion asks for a CT brain');
  await go(p, '#calc-calm', 400);
  await p.click('#calcbox [data-pv="7"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => !!document.querySelector('#calcbox #cf-wt') && document.querySelector('#couts .verdict').classList.contains('stop') && /Midazolam/.test(document.querySelector('#couts').textContent)), 'BARS 7 gives the medication step with weight-based lines');
  await p.screenshot({path:out + '/d-calc-calm.png', fullPage:true});
  await go(p, '#calc-soap', 400);
  for (const i of [0, 1]) await p.check(`#calcbox input[data-k="s"][data-i="${i}"]`);
  ok(await p.evaluate(() => /5–10% dehydrated/.test(document.querySelector('#couts').textContent) && /moderate/.test(document.querySelector('#couts .cx-gap').textContent)), 'two SOAP signs read 5–10%, and the moderate gap is named');
  ok(await gz() === store0, 'using the calculators stores nothing');
  // Quiz
  await go(p, '#quiz');
  await p.click('#quizbox .q-opts button'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => !!document.querySelector('#quizbox .q-why')), 'quiz answer shows the explanation');
  // First-shift intro
  await go(p, '#intro', 400);
  ok(await p.evaluate(() => document.querySelector('#introbox h2').textContent) === 'Find it in one search', 'intro opens on screen 1');
  await p.screenshot({path:out + '/d-intro-1.png'});
  await p.click('#introbox [data-intro="next"]'); await p.waitForTimeout(250);
  await p.keyboard.press('ArrowRight'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => document.querySelector('#introbox h2').textContent) === 'Patients move one way', 'Next and the arrow key move through the intro');
  await p.waitForTimeout(1600);
  await p.screenshot({path:out + '/d-intro-3.png'});
  await p.keyboard.press('ArrowRight'); await p.waitForTimeout(250);
  await p.click('#introbox [data-intro="done"]'); await p.waitForTimeout(450);
  ok(await p.evaluate(() => location.hash === '#home' && document.querySelector('#t-intro').classList.contains('done')), 'finishing the intro goes home and marks it seen');
  // Journey
  await go(p, '#journey-4', 400);
  ok(await p.evaluate(() => document.querySelector('#rail [aria-current="step"]').dataset.i) === '3', '#journey-4 selects stop 4');
  await p.screenshot({path:out + '/d-journey-4.png', fullPage:true});
  // Home with saved items
  await go(p, '#home', 400);
  console.log('     mine ->', await p.evaluate(() => [...document.querySelectorAll('#mine .rt b')].map(b => b.textContent).join(' | ')));
  await p.screenshot({path:out + '/d-home-saved.png'});
  // Settings: dark and large
  await p.click('.side-foot [data-settings]'); await p.waitForTimeout(250);
  await p.screenshot({path:out + '/d-settings.png'});
  await p.click('#st-theme [data-val="dark"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.documentElement.dataset.theme) === 'dark', 'settings switch to dark');
  ok(await p.evaluate(() => document.querySelector('#daynight').getAttribute('aria-checked')) === 'true', 'the home switch follows Settings');
  await p.click('#st-tiles [data-val="off"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => JSON.parse(localStorage.getItem('gz-tiles')) === 'off' && [...document.querySelectorAll('.tm video')].every(v => v.paused)), 'Moving tiles off stops the tile loops');
  await p.click('#st-tiles [data-val="on"]'); await p.waitForTimeout(150);
  await p.keyboard.press('Escape'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelector('#settings').hidden), 'Escape closes settings');
  await p.screenshot({path:out + '/d-home-dark.png'});
  await go(p, '#asthma', 400);
  await p.screenshot({path:out + '/d-run-dark.png', fullPage:true});
  await go(p, '#pathways', 400);
  await p.screenshot({path:out + '/d-pathways-dark.png'});
  await go(p, '#tour', 400);
  await p.screenshot({path:out + '/d-tour-dark.png'});
  const tour = await p.evaluate(() => ({ch:document.querySelectorAll('#chaps button').length, ln:document.querySelectorAll('#tscript li').length,
    src:document.querySelector('#vid').getAttribute('src'), last:(document.querySelector('#chaps button:last-child') || {}).textContent || ''}));
  ok(tour.ch === 9 && /When to call the EP/.test(tour.last), 'tour lists the 9 chapters of the version 8 explainer');
  ok(tour.ln === 49 && tour.src === 'media/green-zone-explainer-night-720p.mp4', 'tour transcript has 49 timed lines; in night colours it has the night film');
  await p.click('#tlang [data-lang="ms"]'); await p.waitForTimeout(200);
  const tms = await p.evaluate(() => ({src:document.querySelector('#vid').getAttribute('src'), cover:document.querySelector('#vid').getAttribute('poster'),
    ch:document.querySelectorAll('#chaps button').length, first:(document.querySelector('#chaps button') || {}).textContent || '', ln:document.querySelectorAll('#tscript li').length,
    h:document.querySelector('#tourh').textContent, lang:document.querySelector('#tscript').getAttribute('lang'), saved:localStorage.getItem('gz-tour-lang'),
    pressed:document.querySelector('#tlang [data-lang="ms"]').getAttribute('aria-pressed')}));
  ok(tms.src === 'media/green-zone-explainer-ms-night-720p.mp4' && tms.cover === 'media/explainer-ms-night-poster.webp', 'tour switches to the Bahasa Melayu night film and cover');
  ok(tms.ch === 9 && /Baru di Zon Hijau/.test(tms.first) && tms.ln === 50 && tms.lang === 'ms' && /Zon Hijau/.test(tms.h), 'Malay chapters, transcript and heading');
  ok(tms.saved === '"ms"' && tms.pressed === 'true', 'the tour remembers the language');
  await p.screenshot({path:out + '/d-tour-ms-dark.png'});
  await p.click('#tlang [data-lang="en"]'); await p.waitForTimeout(200);
  const ten = await p.evaluate(() => ({src:document.querySelector('#vid').getAttribute('src'), ln:document.querySelectorAll('#tscript li').length}));
  ok(ten.src === 'media/green-zone-explainer-night-720p.mp4' && ten.ln === 49, 'tour switches back to English');
  await go(p, '#numbers', 400);
  await p.screenshot({path:out + '/d-numbers-dark.png'});
  await go(p, '#poster', 400);
  ok(await p.evaluate(() => [...document.querySelectorAll('#v-poster [data-sheet] img')].map(i => i.getAttribute('src')).join(' ')) === 'poster/sheet1-night-thumb.webp poster/sheet2-night-thumb.webp', 'in night colours the poster page has the night sheets');
  await p.click('#v-poster [data-sheet="2"]'); await p.waitForTimeout(500);
  ok(await p.evaluate(() => document.querySelector('#lbimg').getAttribute('src')) === 'poster/sheet2-night.webp', 'a night sheet opens full size');
  await p.screenshot({path:out + '/d-poster-dark.png'});
  await p.keyboard.press('Escape'); await p.waitForTimeout(200);
  await p.screenshot({path:out + '/d-poster-dark-page.png', fullPage:true});
  // The home switch back to day
  await go(p, '#home', 400);
  await p.click('#daynight'); await p.waitForTimeout(400);
  const day = await p.evaluate(() => ({theme:document.documentElement.dataset.theme, on:document.querySelector('#daynight').getAttribute('aria-checked'), saved:localStorage.getItem('gz-theme'),
    src:document.querySelector('#vid').getAttribute('src'), cover:document.querySelector('#vid').getAttribute('poster'), thumb:document.querySelector('#v-poster [data-sheet="1"] img').getAttribute('src')}));
  ok(day.theme === 'light' && day.on === 'false' && day.saved === '"light"', 'the home switch turns the day colours on and remembers it');
  ok(day.src === 'media/green-zone-explainer-720p.mp4' && day.cover === 'media/explainer-poster.webp' && day.thumb === 'poster/sheet1-thumb.webp', 'day colours bring back the day film, cover and sheets');
  await p.screenshot({path:out + '/d-home-day-again.png'});
  await p.evaluate(() => { localStorage.setItem('gz-theme', '"auto"'); });

  /* ---------- Phone, light ---------- */
  const phone = {viewport:{width:390, height:844}, isMobile:true, hasTouch:true, deviceScaleFactor:1};
  p = await mk({...phone, colorScheme:'light'}, 'phone');
  await p.goto(U, {waitUntil:'networkidle'}); await p.waitForTimeout(800);
  ok(await hscroll(p) <= 0, 'phone home has no sideways scroll');
  ok(await p.evaluate(() => getComputedStyle(document.querySelector('#tabbar')).display) !== 'none', 'phone shows the tab bar');
  await p.screenshot({path:out + '/p-home.png'});
  await p.screenshot({path:out + '/p-home-full.png', fullPage:true});
  await p.evaluate(() => document.querySelector('#t-paths').scrollIntoView({block:'center'})); await p.waitForTimeout(500);
  ok(await p.evaluate(() => { const n = document.querySelectorAll('.tm[data-play]').length; return n > 0 && n <= 6 && !!document.querySelector('#t-paths .tm video'); }), 'on a phone the home tiles move too, at most six at once');
  await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(200);
  const dn = await p.evaluate(() => {
    const r = e => e.getBoundingClientRect(), s = r(document.querySelector('#daynight')), h1 = document.querySelector('#h-home'), g = document.createRange();
    g.selectNodeContents(h1); const t = g.getBoundingClientRect(), sub = r(document.querySelector('.hello-sub'));
    return {gap:Math.round(s.left - t.right), clear:Math.round(sub.top - s.bottom), right:Math.round(innerWidth - s.right), w:Math.round(s.width), h:Math.round(s.height), oneLine:t.height < parseFloat(getComputedStyle(h1).fontSize) * 1.6};
  });
  ok(dn.gap >= 4 && dn.clear >= -1 && dn.right >= 15 && dn.oneLine && dn.w >= 44, `phone: the switch sits beside a one-line title, clear of the greeting (${JSON.stringify(dn)})`);
  await p.tap('#daynight'); await p.waitForTimeout(450);
  const pn = await p.evaluate(() => ({theme:document.documentElement.dataset.theme, on:document.querySelector('#daynight').getAttribute('aria-checked'), saved:localStorage.getItem('gz-theme'),
    src:document.querySelector('#vid').getAttribute('src'), thumb:document.querySelector('#v-poster [data-sheet="2"] img').getAttribute('src')}));
  ok(pn.theme === 'dark' && pn.on === 'true' && pn.saved === '"dark"', 'phone: the home switch turns the night colours on and remembers it');
  ok(pn.src === 'media/green-zone-explainer-night-720p.mp4' && pn.thumb === 'poster/sheet2-night-thumb.webp', 'night colours bring the night film and the night sheets');
  await p.screenshot({path:out + '/p-home-night.png'});
  await p.tap('#daynight'); await p.waitForTimeout(450);
  ok(await p.evaluate(() => document.documentElement.dataset.theme === 'light' && document.querySelector('#daynight').getAttribute('aria-checked') === 'false' && document.querySelector('#vid').getAttribute('src') === 'media/green-zone-explainer-720p.mp4'), 'a second tap brings the day colours back');
  for (const v of VIEWS.slice(1)){
    await go(p, '#' + v);
    ok(await hscroll(p) <= 0, `phone #${v} no sideways scroll`);
    await p.screenshot({path:out + `/p-${v}.png`, fullPage:true});
  }
  await go(p, '#pathways', 600);
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm img').length === 9 && document.querySelectorAll('#libcats .tm video').length > 0), 'on a phone the topic tiles move by default too');
  ok(await p.evaluate(() => { const n = document.querySelectorAll('.tm[data-play]').length; return n > 0 && n <= 6; }), 'a phone plays at most six loops at once');
  await p.screenshot({path:out + '/p-pathways-tiles.png'});
  await go(p, '#home');
  await p.tap('#menubtn'); await p.waitForTimeout(450);
  ok(await p.evaluate(() => document.querySelector('#side').classList.contains('open')), 'menu opens');
  await p.screenshot({path:out + '/p-menu.png'});
  await p.tap('#snav a[href="#rules"]'); await p.waitForTimeout(450);
  ok(await visible(p) === 'rules' && await p.evaluate(() => !document.querySelector('#side').classList.contains('open')), 'menu link opens rules and closes the menu');
  await p.tap('#tabbar .fab'); await p.waitForTimeout(300);
  await p.fill('#gq', 'dengue'); await p.waitForTimeout(200);
  await p.screenshot({path:out + '/p-search.png'});
  await p.tap('#palbody a'); await p.waitForTimeout(450);
  ok(await visible(p) === 'run', 'tapping a result opens it');
  ok(await p.evaluate(() => document.querySelector('#cur').getBoundingClientRect().top) < 844 * 0.4, 'phone: the question card starts in the top 40% of the screen');
  await p.screenshot({path:out + '/p-run.png'});
  await p.tap('#cur button.opt'); await p.waitForTimeout(350);
  await p.tap('#cur button.opt'); await p.waitForTimeout(350);
  ok(await p.evaluate(() => getComputedStyle(document.querySelector('.trailx')).display) !== 'none', 'phone shows answer chips');
  ok(await hscroll(p) <= 0, 'phone runner no sideways scroll');
  await p.screenshot({path:out + '/p-run-steps.png'});
  await p.screenshot({path:out + '/p-run-full.png', fullPage:true});
  await p.tap('#run .run-acts [data-map]'); await p.waitForTimeout(450);
  ok(await p.evaluate(() => !document.querySelector('#pmap').hidden), 'phone opens the whole-pathway map');
  ok(await hscroll(p) <= 0, 'phone map no sideways scroll');
  await p.screenshot({path:out + '/p-map.png'});
  await p.tap('#pmclose'); await p.waitForTimeout(250);
  await go(p, '#gz-rules--ivab', 400);
  await p.screenshot({path:out + '/p-run-ivab.png', fullPage:true});
  ok(await p.evaluate(() => [...document.querySelectorAll('#run button, #run a')].filter(e => e.offsetParent !== null && !e.closest('.trailx, .ptab-bar')).every(e => { const r = e.getBoundingClientRect(); return r.left >= -1 && r.right <= innerWidth + 1; })), 'phone outcome: no control is clipped at the edges');
  await go(p, '#home', 400);
  await p.tap('#zmap [data-zs="1"]'); await p.waitForTimeout(300);
  await p.screenshot({path:out + '/p-home-zone.png', fullPage:true});
  await go(p, '#intro', 400);
  await p.waitForTimeout(1300);
  ok(await hscroll(p) <= 0, 'phone intro no sideways scroll');
  await p.screenshot({path:out + '/p-intro.png'});
  await go(p, '#tools', 400);
  for (let i = 0; i < 3; i++) await p.evaluate(s => document.querySelector(s).click(), `[data-dc="a${i}"]`);
  ok(await p.evaluate(() => document.querySelectorAll('#dcr i.on').length) === 3, 'phone route meter lights three stations');
  await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(200);
  await p.screenshot({path:out + '/p-tools.png'});
  await go(p, '#calc-dengue', 400);
  await p.screenshot({path:out + '/p-calc.png'});

  /* ---------- Phone, dark ---------- */
  p = await mk({...phone, colorScheme:'dark'}, 'phone-dark');
  await p.goto(U, {waitUntil:'networkidle'}); await p.waitForTimeout(800);
  await p.screenshot({path:out + '/pd-home.png'});
  ok(await p.evaluate(() => document.querySelector('#daynight').getAttribute('aria-checked') === 'true' && document.querySelector('#vid').getAttribute('src') === 'media/green-zone-explainer-night-720p.mp4' && document.querySelector('#vid').getAttribute('poster') === 'media/explainer-night-poster.webp'), 'on Auto, a dark phone gets the switch at night and the night film');
  await go(p, '#tour', 400);
  await p.screenshot({path:out + '/pd-tour.png'});
  await go(p, '#poster', 400);
  ok(await hscroll(p) <= 0, 'phone dark poster no sideways scroll');
  await p.screenshot({path:out + '/pd-poster.png', fullPage:true});
  await p.emulateMedia({colorScheme:'light'}); await p.waitForTimeout(400);
  ok(await p.evaluate(() => document.querySelector('#daynight').getAttribute('aria-checked') === 'false' && document.querySelector('#vid').getAttribute('src') === 'media/green-zone-explainer-720p.mp4' && document.querySelector('#v-poster [data-sheet="1"] img').getAttribute('src') === 'poster/sheet1-thumb.webp'), 'on Auto, when the device turns light the switch, film and sheets follow');
  await p.emulateMedia({colorScheme:'dark'}); await p.waitForTimeout(400);
  await go(p, '#referral-rules--ortho', 400);
  await p.screenshot({path:out + '/pd-run-ortho.png', fullPage:true});
  await go(p, '#journey', 400);
  await p.screenshot({path:out + '/pd-journey.png'});
  await go(p, '#new', 400);
  await p.screenshot({path:out + '/pd-new.png'});

  /* ---------- Reduced motion, tablet width ---------- */
  p = await mk({viewport:{width:900, height:1100}, reducedMotion:'reduce', colorScheme:'light'}, 'tablet');
  await p.goto(U + '#acs', {waitUntil:'networkidle'}); await p.waitForTimeout(600);
  ok(await hscroll(p) <= 0, 'tablet runner no sideways scroll');
  await p.screenshot({path:out + '/t-acs.png'});
  await go(p, '#home', 400);
  await p.screenshot({path:out + '/t-home.png'});
  await go(p, '#pathways', 500);
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm img').length === 9 && !document.querySelector('.tm video')), 'with reduced motion the tiles stay as still pictures');

  console.log('errors:', errs.length ? '\n  ' + errs.join('\n  ') : 'none');
  console.log(fails ? fails + ' FAILED' : 'all checks passed');
  console.log('screenshots: ' + out);
  process.exitCode = (fails || errs.length) ? 1 : 0;
  await b.close(); srv.close();
})().catch(e => { console.error(e); process.exit(1); });
