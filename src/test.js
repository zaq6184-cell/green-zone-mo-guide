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
  ok(await p.waitForFunction(() => [...document.querySelectorAll('#libcats .tm img')].every(i => i.complete && i.naturalWidth === 640), null, {timeout:5000}).then(() => true, () => false), 'every topic picture loads');
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm video').length) > 0, 'the topic tiles start their loops (Moving tiles is on by default)');
  ok(await p.evaluate(() => document.querySelectorAll('.libsec .lh .tm img').length) >= 8, 'the Pathways section bars carry their topic pictures');
  await p.fill('#libq', 'co'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm video').length) > 0, 'typing in the filter keeps the tile loops');
  await p.fill('#libq', ''); await p.waitForTimeout(150);
  // Library filter and stars
  await go(p, '#pathways');
  ok(await p.evaluate(() => document.querySelectorAll('#libgrid .pc').length === Object.keys(P).length && Object.keys(P).length >= 44), `library shows a card for each of the ${await p.evaluate(() => Object.keys(P).length)} entries`);
  ok(await p.evaluate(() => document.querySelector('#libf [data-f="ebook"] small').textContent === '23' && document.querySelector('#libf [data-f="rules"] small').textContent === '15' && document.querySelector('#libf [data-f="cpg"] small').textContent === String(Object.keys(P).filter(id => P[id].grp === 'cpg').length)), 'the Ebook filter still counts the 23 ebook pathways (the CPGs are not), rules 15, and Guidelines every CPG entry');
  await p.fill('#libq', 'colic'); await p.waitForTimeout(150);
  console.log('     filter colic ->', await p.evaluate(() => [...document.querySelectorAll('#libgrid .pc h3')].map(h => h.textContent).join(' | ')));
  await p.fill('#libq', ''); await p.waitForTimeout(100);
  await p.click('#libcats [data-cat="heart"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelectorAll('#libgrid .pc').length) === 7, 'heart category shows 7');
  await p.click('#libgrid [data-star="acs"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => JSON.parse(localStorage.getItem('gz-saved') || '[]').includes('acs')), 'star on a card saves it');
  ok(await p.evaluate(() => location.hash) === '#pathways', 'star does not open the card');
  ok(await p.evaluate(() => !document.querySelector('#sidesaved').hidden), 'sidebar shows saved');
  await p.click('#libcats [data-cat="all"]'); await p.waitForTimeout(100);
  // Guidelines: the CPG entries in the guide, then the national CPG shelf as outside links
  await p.click('#libf [data-f="cpg"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => [...document.querySelectorAll('#libgrid .pc:not(.shelf-c) h3 a')].map(a => a.getAttribute('href')).sort().join() === Object.keys(P).filter(id => P[id].grp === 'cpg').map(id => '#' + id).sort().join() && document.querySelectorAll('#libgrid .pc:not(.shelf-c)').length >= 6), 'Guidelines shows every CPG entry in the guide');
  ok(await p.evaluate(() => { const want = CPG_SHELF.filter(c => !(c.id && P[c.id])), l = [...document.querySelectorAll('#libgrid .shelf-c h3 a')];
    return l.length === want.length && l.length >= 35 && l.every((a, i) => a.target === '_blank' && a.rel.includes('noopener') && a.href.startsWith(want[i].drive ? 'https://drive.google.com/file/d/' + want[i].drive : 'https://www.acadmed.org.my/view_file.cfm?fileid=' + want[i].cpg)); }), 'the shelf lists every national CPG not built in: the Drive copy where its terms allow, otherwise the Academy file');
  ok(await p.evaluate(() => CPG_SHELF.find(c => c.cpg === '894').drive === '' && !!document.querySelector('#libgrid .shelf-c h3 a[href$="fileid=894"]') && CPG_SHELF.filter(c => !c.drive).length >= 10), 'a CPG whose rights are reserved (hypertension, 2018) links to the Academy only');
  ok(await p.evaluate(() => [...document.querySelectorAll('#libgrid .shelf-c .pill.ext')].filter(x => x.textContent.startsWith('Patient leaflet')).length === 4 && [...document.querySelectorAll('#libgrid .shelf-c .pill.ext')].some(x => x.textContent.startsWith('Patient leaflet, Bahasa Melayu'))), 'the shelf carries the patient leaflets: cancer pain in English and Bahasa Melayu, depression and dementia');
  ok(await p.evaluate(() => { const want = CPG_SHELF.filter(c => !(c.id && P[c.id])), pills = [...document.querySelectorAll('#libgrid .shelf-c .shelf-l a')];
    return pills.filter(a => a.textContent.startsWith('Academy')).length === want.filter(c => c.drive).length && pills.every(a => /^https:\/\/(drive\.google\.com\/file\/d\/|www\.acadmed\.org\.my\/view_file\.cfm\?fileid=)/.test(a.href) && a.target === '_blank') && document.querySelector('#libgrid .shelf-top a').href.startsWith('https://drive.google.com/drive/folders/'); }), 'cards with a Drive copy also link the Academy file, every pill opens Drive or the Academy in a new tab, and the shelf opens the whole Drive folder');
  ok(await p.evaluate(() => CPG_SHELF.filter(c => c.id && P[c.id]).every(c => !document.querySelector(`#libgrid .shelf-c a[href$="fileid=${c.cpg}"]`) && !document.querySelector(`#libgrid .shelf-c a[href*="${c.drive}"]`))), 'the CPGs built into the guide are not repeated as links');
  ok(await p.evaluate(() => [...document.querySelectorAll('#libgrid .shelf-c .pill.ext')].filter(x => x.textContent.startsWith('Quick reference')).length === CPG_SHELF.filter(c => !(c.id && P[c.id]) && c.qr).length && document.querySelectorAll('#libgrid .shelf-sub').length === 2), 'the shelf carries each quick reference, in two groups');
  await p.screenshot({path:out + '/d-guidelines.png'});
  await p.click('#libf [data-f="all"]'); await p.waitForTimeout(100);
  ok(await p.evaluate(() => !document.querySelector('#libgrid .shelf')), 'All without a search shows no shelf');
  await p.fill('#libq', 'sore throat'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => [...document.querySelectorAll('#libgrid .shelf-c h3 a')].some(a => a.textContent.includes('Sore Throat'))), 'a library search under All also finds a national CPG on the shelf');
  await p.fill('#libq', ''); await p.waitForTimeout(100);
  await go(p, '#guidelines');
  ok(await p.evaluate(() => document.querySelector('#libf [data-f="cpg"]').getAttribute('aria-pressed') === 'true' && !!document.querySelector('#libgrid .shelf')), '#guidelines opens the library on Guidelines');
  await p.click('#libf [data-f="all"]'); await p.waitForTimeout(100);
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
  ok(await p.evaluate(() => document.querySelector('#tcx').getAttribute('href') === '#calc' && document.querySelectorAll('#tcx .gl li').length === 8), 'Shift tools leads to the calculators, with their eight groups');
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
  ok(await p.evaluate(() => document.querySelectorAll('#cxlist .cxc').length === 25 && document.querySelectorAll('#cxlist .cxl').length === 18), 'the hub lists 25 calculators and 18 outside links (5 PEMCalc, 13 MDCalc)');
  ok(await p.evaluate(() => [...document.querySelectorAll('#cxlist .cxl a')].every(a => a.target === '_blank' && /noopener/.test(a.rel) && (a.href.startsWith('https://pemcalc.com/') || a.href.startsWith('https://www.mdcalc.com/calc/')) && /(PEMCalc|MDCalc), outside site/.test(a.closest('.pc').textContent))), 'the PEMCalc and MDCalc links open in a new tab and say they are an outside site');
  ok(await p.evaluate(() => document.querySelectorAll('#cxcats button').length === 9 && document.querySelectorAll('#cxcats .tm img').length === 9), 'the nine group tiles have their pictures');
  ok(await p.evaluate(() => document.querySelectorAll('#cxcats .tm video').length > 0), 'the calculator group tiles start their loops');
  await p.screenshot({path:out + '/d-calc-hub.png', fullPage:true});
  await p.click('#cxcats [data-cg="scores"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => [...document.querySelectorAll('#cxlist .cxc')].filter(r => !r.hidden).map(r => r.dataset.id).join() === 'apef,curb,wells' && [...document.querySelectorAll('#cxlist .cxl')].filter(r => !r.hidden).length === 3), 'the Scores tile shows the asthma action plan zones, CURB-65 and Wells, with ABCD2, Alvarado and Centor on MDCalc');
  await p.click('#cxcats [data-cg="all"]'); await p.fill('#cxq', 'clexane'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => [...document.querySelectorAll('#cxlist .cxc')].filter(r => !r.hidden).map(r => r.dataset.id).join() === 'anticoag'), 'finding "clexane" shows the anticoagulant calculator');
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
  await go(p, '#calc-obsess', 400);
  for (let i = 0; i < 7; i++) await p.check('#calcbox input[data-k="o"][data-i="' + i + '"]');
  ok(await p.evaluate(() => document.querySelector('#couts .verdict a').getAttribute('href') === '#acs--obs' && [...document.querySelectorAll('#couts .cx-links a')].some(a => /mdcalc\.com\/calc\/111\//.test(a.href) && a.target === '_blank')), 'all seven Obsess criteria start the protocol, with the TIMI score on MDCalc beside it');
  await go(p, '#calc-syncope', 400);
  await p.check('#calcbox input[data-k="r"][data-i="1"]');
  ok(await p.evaluate(() => document.querySelector('#couts .verdict').classList.contains('stop') && document.querySelector('#couts .verdict a').getAttribute('href') === '#syncope--adm'), 'one syncope high-risk factor means admission');
  await go(p, '#calc-svt', 400);
  ok(await p.evaluate(() => [...document.querySelectorAll('#couts .out b')].slice(0, 4).map(b => b.textContent).join(' | ') === '25 mg/min | 2.5 mg/min | 5 mg/min | 15 mg/min' && document.querySelectorAll('#couts .cx-list dt').length === 4), 'SVT at 50 kg: esmolol 25, 2.5, 5 and up to 15 mg/min, with the four drugs listed');
  await go(p, '#calc-htn', 400);
  await p.selectOption('#cf-drug', {index:1}); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelector('#couts .out b').textContent === '12.5/25 mg stat then bd' && /ACE inhibitors/.test(document.querySelector('#couts').textContent)), 'choosing captopril shows its dose and the ACE inhibitor contraindications');
  await go(p, '#calc-paraod', 400);
  await p.fill('#cf-h', '10'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelector('#couts .verdict a').getAttribute('href') === '#paracetamol-overdose--nac' && !!document.querySelector('#couts .cx-gap')), '10 hours after a paracetamol overdose: start N-acetylcysteine, and the missing regimen is named');
  await p.fill('#cf-h', '8'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => /exactly 8 hours/.test(document.querySelector('#couts .cx-gap').textContent)), 'exactly 8 hours says the ebook does not place it');
  await p.fill('#cf-h', '');
  await p.evaluate(() => { const d = new Date(Date.now() - 3 * 3600e3), el = document.querySelector('#cf-at'); el.value = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); el.dispatchEvent(new Event('input', {bubbles:true})); });
  await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelector('#couts .verdict a').getAttribute('href') === '#paracetamol-overdose--lvl' && /about 3 hours ago/.test(document.querySelector('#couts').textContent)), 'the clock time works: taken 3 hours ago gives the 2 to 8 hour route');
  await go(p, '#calc-anaph', 400);
  ok(await p.evaluate(() => document.querySelector('#couts .out b').textContent === '500–1000 ml' && document.querySelectorAll('#couts .cx-list dt').length === 8), 'anaphylaxis at 50 kg: a 500–1000 ml bolus, with the eight drugs listed');
  await p.screenshot({path:out + '/d-calc-anaph.png', fullPage:true});
  // The four dengue CPG calculators (4th edition, 2026)
  await go(p, '#calc-dvitals', 400);
  for (const [k, v] of [['sbp', 100], ['dbp', 80], ['hr', 110], ['rr', 18], ['spo2', 98], ['map', 85]]) await p.fill('#cf-' + k, String(v));
  await p.waitForTimeout(150);
  ok(await p.evaluate(() => { const v = document.querySelector('#couts .verdict'); return v.classList.contains('stop') && v.querySelector('a').getAttribute('href') === '#dengue-cpg--red2' && /PP < 30 mmHg; Shock index > 1; HR > 100\/min/.test(v.textContent); }), 'dengue triage vital signs: a pulse pressure of 20, shock index 1.1 and HR 110 mean the Red Zone');
  for (const [k, v] of [['sbp', 120], ['hr', 80], ['rr', 16], ['map', 93]]) await p.fill('#cf-' + k, String(v));
  await p.waitForTimeout(150);
  ok(await p.evaluate(() => { const v = document.querySelector('#couts .verdict'); return v.classList.contains('ok') && v.querySelector('a').getAttribute('href') === '#dengue-cpg--ws'; }), 'and stable vital signs lead on to the warning signs question');
  await p.fill('#cf-sbp', '130'); await p.fill('#cf-dbp', '55'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => { const v = document.querySelector('#couts .verdict'); return v.classList.contains('next') && /Check the blood pressure/.test(v.textContent) && document.querySelector('#couts .out').classList.contains('warn'); }), 'a diastolic under 60 with a normal systolic is flagged to judge, not sent to the Red Zone');
  await p.fill('#cf-dbp', '80'); await p.waitForTimeout(100);
  await p.screenshot({path:out + '/d-calc-dvitals.png', fullPage:true});
  await go(p, '#calc-dfluid', 400);
  await p.fill('#cf-wt', '60'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => [...document.querySelectorAll('#couts .out b')].map(b => b.textContent).join(' | ') === '60 kg | 100 ml/hr | 5400 ml'), 'dengue fluids at 60 kg: maintenance 100 ml/hr and a 48-hour quota of 5400 ml');
  await p.fill('#cf-wt', '62'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => /5400–5700 ml/.test(document.querySelector('#couts').textContent) && /5 kg steps/.test(document.querySelector('#couts .cx-gap').textContent)), 'at 62 kg the quota shows both table rows and says the table does not cover it');
  await p.fill('#cf-wt', '80'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => [...document.querySelectorAll('#couts .out b')].map(b => b.textContent).join(' | ') === '70 kg | 110 ml/hr | 6000 ml'), 'at 80 kg the 70 kg limit applies: 110 ml/hr and 6000 ml');
  await p.screenshot({path:out + '/d-calc-dfluid.png', fullPage:true});
  await go(p, '#calc-drdt', 400);
  for (const [k, v] of [['fd', 'lt'], ['ns1', '+'], ['igm', '−'], ['igg', '−']]){ await p.click(`#calcbox [data-k="${k}"][data-sv="${v}"]`); await p.waitForTimeout(80); }
  ok(await p.evaluate(() => document.querySelector('#couts .out b').textContent === 'Acute dengue infection'), 'Table 5: NS1 positive alone, under 5 days of fever, is acute dengue');
  await p.click('#calcbox [data-k="fd"][data-sv="eq"]'); await p.waitForTimeout(120);
  ok(await p.evaluate(() => document.querySelector('#couts .out b').textContent === 'Not covered' && !!document.querySelector('#couts .cx-gap')), 'exactly 5 days of fever is not in Table 5, and the gap is named');
  await go(p, '#calc-duo', 400);
  await p.fill('#cf-vol', '300'); await p.fill('#cf-hrs', '4'); await p.fill('#cf-wt', '60'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelector('#couts .out b').textContent === '1.25 ml/kg/hr'), 'urine output: 300 ml over 4 hours at 60 kg is 1.25 ml/kg/hr');
  // The asthma CPG calculators (Academy CPG round)
  await go(p, '#calc-apred', 400);
  await p.fill('#cf-ibw', '60'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => [...document.querySelectorAll('#couts .out b')].map(b => b.textContent).join(' | ') === '30–50 mg | 5 to 7 days'), 'asthma prednisolone at an ideal weight of 60 kg: 30–50 mg (the upper end held at 50 mg), for 5 to 7 days');
  await p.fill('#cf-ibw', '110'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelector('#couts .out b').textContent === '50 mg' && !!document.querySelector('#couts .cx-gap')), 'at 110 kg both ends are 50 mg, and the missing weight formula is named');
  await go(p, '#calc-apef', 400);
  await p.fill('#cf-best', '450'); await p.fill('#cf-now', '200'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => [...document.querySelectorAll('#couts .out b')].map(b => b.textContent).join(' | ') === '360 to 450 l/min | 225 to 356 l/min | Below 225 l/min | 200 l/min, 44.4%'), 'action plan zones from a best of 450 l/min: 360 to 450, 225 to 356, below 225; 200 is 44.4%');
  ok(await p.evaluate(() => document.querySelectorAll('#couts .out')[3].querySelector('em').textContent.startsWith('ALERT')), 'and the current reading falls in the ALERT zone');
  await p.screenshot({path:out + '/d-calc-apef.png', fullPage:true});
  // The GCS calculator, read from the head injury CPG's Appendix 3
  await go(p, '#calc-gcs', 400);
  for (const [k, v] of [['ge', '4'], ['gv', '5'], ['gm', '6']]){ await p.click(`#calcbox [data-k="${k}"][data-pv="${v}"]`); await p.waitForTimeout(80); }
  ok(await p.evaluate(() => document.querySelector('#couts .out b').textContent === 'E4V5M6 = 15' && document.querySelector('#couts .verdict a').getAttribute('href') === '#head-injury-cpg--imm'), 'GCS: E4V5M6 is 15, a mild head injury, and points to the head CT decision');
  for (const [k, v] of [['ge', '2'], ['gv', '2'], ['gm', '4']]){ await p.click(`#calcbox [data-k="${k}"][data-pv="${v}"]`); await p.waitForTimeout(80); }
  ok(await p.evaluate(() => document.querySelector('#couts .out b').textContent === 'E2V2M4 = 8' && document.querySelector('#couts .verdict').classList.contains('stop') && /intubation/.test(document.querySelector('#couts .verdict').textContent)), 'E2V2M4 is 8, a severe head injury, with the CPG\'s intubation line');
  await p.screenshot({path:out + '/d-calc-gcs.png', fullPage:true});
  ok(await gz() === store0, 'using the calculators stores nothing');
  // The dengue CPG entry: tabs, the triage route, the leaflet in two languages, deep links and search
  await go(p, '#dengue-cpg', 400);
  const dtabs = await p.evaluate(() => [...document.querySelectorAll('#ptab [role="tab"]')].map(b => b.textContent).join('|'));
  ok(dtabs === 'Home care advice|Groups and zones|Fluids|Tests|Shock|Course and care|References', `the dengue CPG has its seven tabs (${dtabs})`);
  ok(await p.waitForFunction(() => { const i = document.querySelector('#run .run-hero .tm img'); return i && i.complete && i.naturalWidth === 640 && document.querySelector('#run .run-hero h1').textContent === 'Dengue in adults: CPG 4th edition'; }, null, {timeout:5000}).then(() => true, () => false), 'the dengue CPG banner carries its own picture under the title');
  ok(await p.waitForFunction(() => !!document.querySelector('#run .run-hero .tm video'), null, {timeout:5000}).then(() => true, () => false), 'and starts its own loop (Moving tiles is on by default)');
  ok(await p.evaluate(() => P.dengue.see.some(s => s[0] === '#dengue-cpg') && P['dengue-cpg'].see.some(s => s[0] === '#dengue')), 'the ebook dengue pathway and the CPG link to each other');
  await p.click('#cur [data-go="0"]'); await p.waitForTimeout(250);
  await p.click('#cur [data-next]'); await p.waitForTimeout(250);
  for (let i = 0; i < 4; i++){ await p.click('#cur [data-go="1"]'); await p.waitForTimeout(250); }
  ok(await p.evaluate(() => /^MTS level 5/.test(document.querySelector('#cur h2').textContent) && /Home care advice/.test(document.querySelector('#cur [data-showadvice]').textContent)), 'no to every triage question ends at MTS level 5, with the home care advice');
  await p.click('#cur [data-showadvice]'); await p.waitForTimeout(450);
  ok(await p.evaluate(() => document.querySelector('#ptab [aria-selected="true"]').dataset.pt === 'leaflet' && document.querySelectorAll('#leaf .leaf-g').length === 3), 'the home care leaflet opens with its three parts');
  await p.click('#tp-leaflet [data-leaf="ms"]'); await p.waitForTimeout(200);
  ok(await p.evaluate(() => document.querySelector('#leaf').lang === 'ms' && /^Nasihat/.test(document.querySelector('#leaf .leaf-t').textContent) && document.activeElement.dataset.leaf === 'ms'), 'the leaflet switches to Bahasa Melayu and keeps the focus on the switch');
  await p.screenshot({path:out + '/d-run-dengue-cpg.png', fullPage:true});
  await p.click('#tp-leaflet [data-leaf="en"]'); await p.waitForTimeout(150);
  for (const [h, t] of [['#dengue-cpg--red2', 'Red Zone: MTS level 2'], ['#dengue-cpg--msglt', 'SGLT2 inhibitor: withhold while unwell'], ['#dengue-cpg--dcok', 'Meets the discharge criteria']]){
    await go(p, h, 350);
    const got = await p.evaluate(() => (document.querySelector('#cur h2') || {}).textContent || '');
    ok(got.startsWith(t), `${h} shows "${t}" (got "${got}")`);
  }
  await p.keyboard.press('/'); await p.waitForTimeout(250);
  await p.fill('#gq', 'fluid quota'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => [...document.querySelectorAll('#palbody a')].slice(0, 6).some(a => ['#dengue-cpg', '#calc-dfluid'].includes(a.getAttribute('href')))), 'searching "fluid quota" finds the dengue CPG');
  await p.fill('#gq', 'denggi'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => [...document.querySelectorAll('#palbody a')].slice(0, 6).some(a => a.getAttribute('href') === '#dengue-cpg')), 'searching in Malay ("denggi") finds it through the leaflet');
  await p.keyboard.press('Escape'); await p.waitForTimeout(200);
  // The asthma and gout CPG entries (Academy CPG round): tabs, banners, a walk to an outcome, deep links, links and search
  await go(p, '#asthma-cpg', 400);
  const atabs = await p.evaluate(() => [...document.querySelectorAll('#ptab [role="tab"]')].map(b => b.textContent).join('|'));
  ok(atabs === 'Severity|Drugs|Action plan|Inhaler and spacer|Treatment steps|References', `the asthma CPG has its six tabs (${atabs})`);
  ok(await p.waitForFunction(() => { const i = document.querySelector('#run .run-hero .tm img'); return i && i.complete && i.naturalWidth === 640 && document.querySelector('#run .run-hero h1').textContent === 'Asthma in adults: CPG 2nd edition'; }, null, {timeout:5000}).then(() => true, () => false), 'the asthma CPG banner carries its own picture');
  ok(await p.waitForFunction(() => !!document.querySelector('#run .run-hero .tm video'), null, {timeout:5000}).then(() => true, () => false), 'and its own loop');
  for (const sel of ['[data-go="0"]', '[data-next]', '[data-go="1"]', '[data-go="1"]', '[data-go="1"]', '[data-next]', '[data-go="0"]', '[data-go="0"]', '[data-go="1"]']){ await p.click('#cur ' + sel); await p.waitForTimeout(220); }
  ok(await p.evaluate(() => /^Discharge with an asthma action plan/.test(document.querySelector('#cur h2').textContent)), 'mild, improved, both discharge criteria met and no admission factor: discharge with an action plan');
  await p.screenshot({path:out + '/d-run-asthma-cpg.png', fullPage:true});
  ok(await p.evaluate(() => P.asthma.see.some(s => s[0] === '#asthma-cpg') && P['asthma-zone'].see.some(s => s[0] === '#asthma-cpg') && P['asthma-cpg'].see.some(s => s[0] === '#asthma')), 'the ebook asthma pathway, the Asthma Zone flow and the CPG link to each other');
  await p.click('#ptab [data-pt="refs"]'); await p.waitForTimeout(200);
  ok(await p.evaluate(() => { const a = document.querySelector('#tp-refs .cpg-pdf a'); return !!a && a.href.startsWith('https://drive.google.com/file/d/1pkxXZSQHmoCxIw2X4XLfXBf4OZDAQC0s') && a.target === '_blank'; }), 'the asthma CPG\'s References tab opens the full CPG PDF in Google Drive');
  ok(await p.evaluate(() => [...document.querySelectorAll('#tp-refs .cpg-pdf a')].some(a => a.textContent.startsWith('Quick reference') && /^https:\/\/(drive\.google\.com\/file\/d\/|www\.acadmed\.org\.my\/view_file\.cfm\?fileid=866)/.test(a.href))), 'and its quick reference');
  await go(p, '#gout-cpg', 400);
  const gtabs = await p.evaluate(() => [...document.querySelectorAll('#ptab [role="tab"]')].map(b => b.textContent).join('|'));
  ok(gtabs === 'Flare drugs|Diagnosis|Urate-lowering|Pregnancy|Diet and medicines|References', `the gout CPG has its six tabs (${gtabs})`);
  ok(await p.waitForFunction(() => { const i = document.querySelector('#run .run-hero .tm img'); return i && i.complete && i.naturalWidth === 640 && document.querySelector('#run .run-hero h1').textContent === 'Gout: CPG 2nd edition'; }, null, {timeout:5000}).then(() => true, () => false), 'the gout CPG banner carries its own picture');
  for (const sel of ['[data-go="1"]', '[data-go="0"]', '[data-go="1"]', '[data-go="0"]']){ await p.click('#cur ' + sel); await p.waitForTimeout(220); }
  ok(await p.evaluate(() => /^Colchicine for the flare/.test(document.querySelector('#cur h2').textContent)), 'treat the flare, colchicine, no contraindication, no interaction: the colchicine doses');
  await p.screenshot({path:out + '/d-run-gout-cpg.png', fullPage:true});
  ok(await p.evaluate(() => P['gz-rules'].nodes.gout.links.some(l => l[0] === '#gout-cpg') && P['gout-cpg'].see.some(s => s[0] === '#gz-rules--gout')), 'the Green Zone gout rule and the gout CPG link to each other');
  for (const [h, t] of [['#asthma-cpg--ltx', 'Life-threatening: treat, and refer early to critical care'], ['#asthma-cpg--preg', 'Pregnancy: treat an exacerbation'], ['#gout-cpg--nsdose', 'NSAID or COX-2 inhibitor for the flare'], ['#gout-cpg--kk', 'Home with advice; follow up at the Klinik Kesihatan']]){
    await go(p, h, 350);
    const got = await p.evaluate(() => (document.querySelector('#cur h2') || {}).textContent || '');
    ok(got.startsWith(t), `${h} shows "${t}" (got "${got}")`);
  }
  // Part 2 entries (Academy CPG round)
  await go(p, '#head-injury-cpg', 400);
  ok(await p.evaluate(() => document.querySelectorAll('#ptab [role="tab"]').length >= 4 && [...document.querySelectorAll('#ptab [role="tab"]')].pop().textContent === 'References'), `head-injury-cpg has its reference tabs (${await p.evaluate(() => [...document.querySelectorAll('#ptab [role="tab"]')].map(b => b.textContent).join('|'))})`);
  ok(await p.waitForFunction(() => { const i = document.querySelector('#run .run-hero .tm img'); return i && i.complete && i.naturalWidth === 640 && document.querySelector('#run .run-hero h1').textContent === 'Head injury in adults: CPG 2015'; }, null, {timeout:5000}).then(() => true, () => false), 'head-injury-cpg: its banner carries its own picture');
  ok(await p.evaluate(() => P['mild-tbi'].see.some(s => s[0] === '#head-injury-cpg')), 'mild-tbi links to head-injury-cpg');
  for (const sel of ["[data-go=\"0\"]","[data-go=\"1\"]","[data-go=\"1\"]","[data-go=\"0\"]","[data-go=\"0\"]"]){ await p.click('#cur ' + sel); await p.waitForTimeout(220); }
  ok(await p.evaluate(() => (document.querySelector('#cur h2') || {}).textContent.startsWith("Discharge with head injury advice")), 'head-injury-cpg: a walk ends at "Discharge with head injury advice"');
  await p.screenshot({path:out + '/d-run-head-injury-cpg.png', fullPage:true});
  await go(p, '#head-injury-cpg--hr', 350); ok(await p.evaluate(() => ((document.querySelector('#cur h2') || {}).textContent || '').startsWith("Aged 65 or over, or on an anticoagulant or antiplatelet") || ((document.querySelector('#cur h2') || {}).textContent || '').includes("Aged 65 or over, or on an anticoagulant or antiplatelet")), '#head-injury-cpg--hr opens "Aged 65 or over, or on an anticoagulant or antiplatelet"');
  await go(p, '#head-injury-cpg--wardx', 350); ok(await p.evaluate(() => ((document.querySelector('#cur h2') || {}).textContent || '').startsWith("Not for ED observation") || ((document.querySelector('#cur h2') || {}).textContent || '').includes("Not for ED observation")), '#head-injury-cpg--wardx opens "Not for ED observation"');
  await go(p, '#acs-cpg', 400);
  ok(await p.evaluate(() => document.querySelectorAll('#ptab [role="tab"]').length >= 4 && [...document.querySelectorAll('#ptab [role="tab"]')].pop().textContent === 'References'), `acs-cpg has its reference tabs (${await p.evaluate(() => [...document.querySelectorAll('#ptab [role="tab"]')].map(b => b.textContent).join('|'))})`);
  ok(await p.waitForFunction(() => { const i = document.querySelector('#run .run-hero .tm img'); return i && i.complete && i.naturalWidth === 640 && document.querySelector('#run .run-hero h1').textContent === 'ACS: CPG 1st edition'; }, null, {timeout:5000}).then(() => true, () => false), 'acs-cpg: its banner carries its own picture');
  ok(await p.evaluate(() => P['acs'].see.some(s => s[0] === '#acs-cpg')), 'acs links to acs-cpg');
  await go(p, '#diabetic-foot-cpg', 400);
  ok(await p.evaluate(() => document.querySelectorAll('#ptab [role="tab"]').length >= 4 && [...document.querySelectorAll('#ptab [role="tab"]')].pop().textContent === 'References'), `diabetic-foot-cpg has its reference tabs (${await p.evaluate(() => [...document.querySelectorAll('#ptab [role="tab"]')].map(b => b.textContent).join('|'))})`);
  ok(await p.waitForFunction(() => { const i = document.querySelector('#run .run-hero .tm img'); return i && i.complete && i.naturalWidth === 640 && document.querySelector('#run .run-hero h1').textContent === 'Diabetic foot: CPG 2nd edition'; }, null, {timeout:5000}).then(() => true, () => false), 'diabetic-foot-cpg: its banner carries its own picture');
  ok(await p.evaluate(() => P['cellulitis'].see.some(s => s[0] === '#diabetic-foot-cpg')), 'cellulitis links to diabetic-foot-cpg');
  for (const sel of ["[data-go=\"0\"]","[data-go=\"1\"]","[data-go=\"1\"]","[data-go=\"1\"]","[data-go=\"1\"]","[data-go=\"0\"]","[data-go=\"0\"]"]){ await p.click('#cur ' + sel); await p.waitForTimeout(220); }
  ok(await p.evaluate(() => (document.querySelector('#cur h2') || {}).textContent.startsWith("Oral antibiotics, then manage as outpatient")), 'diabetic-foot-cpg: a walk ends at "Oral antibiotics, then manage as outpatient"');
  await p.screenshot({path:out + '/d-run-diabetic-foot-cpg.png', fullPage:true});
  await go(p, '#diabetic-foot-cpg--mdt', 350); ok(await p.evaluate(() => ((document.querySelector('#cur h2') || {}).textContent || '').startsWith("Refer to the multidisciplinary foot care team") || ((document.querySelector('#cur h2') || {}).textContent || '').includes("Refer to the multidisciplinary foot care team")), '#diabetic-foot-cpg--mdt opens "Refer to the multidisciplinary foot care team"');
  await go(p, '#diabetic-foot-cpg--cnr', 350); ok(await p.evaluate(() => ((document.querySelector('#cur h2') || {}).textContent || '').startsWith("Suspected Charcot neuroarthropathy") || ((document.querySelector('#cur h2') || {}).textContent || '').includes("Suspected Charcot neuroarthropathy")), '#diabetic-foot-cpg--cnr opens "Suspected Charcot neuroarthropathy"');
  await go(p, '#fb-children-cpg', 400);
  ok(await p.evaluate(() => document.querySelectorAll('#ptab [role="tab"]').length >= 4 && [...document.querySelectorAll('#ptab [role="tab"]')].pop().textContent === 'References'), `fb-children-cpg has its reference tabs (${await p.evaluate(() => [...document.querySelectorAll('#ptab [role="tab"]')].map(b => b.textContent).join('|'))})`);
  ok(await p.waitForFunction(() => { const i = document.querySelector('#run .run-hero .tm img'); return i && i.complete && i.naturalWidth === 640 && document.querySelector('#run .run-hero h1').textContent === 'Swallowed foreign body in children: CPG 2025'; }, null, {timeout:5000}).then(() => true, () => false), 'fb-children-cpg: its banner carries its own picture');
  ok(await p.evaluate(() => P['children'].see.some(s => s[0] === '#fb-children-cpg')), 'children links to fb-children-cpg');
  for (const sel of ["[data-go=\"1\"]","[data-go=\"1\"]"]){ await p.click('#cur ' + sel); await p.waitForTimeout(220); }
  ok(await p.evaluate(() => (document.querySelector('#cur h2') || {}).textContent.startsWith("Emergent endoscopic removal")), 'fb-children-cpg: a walk ends at "Emergent endoscopic removal"');
  await p.screenshot({path:out + '/d-run-fb-children-cpg.png', fullPage:true});
  await go(p, '#fb-children-cpg--bbage', 350); ok(await p.evaluate(() => ((document.querySelector('#cur h2') || {}).textContent || '').startsWith("Child aged <5 years") || ((document.querySelector('#cur h2') || {}).textContent || '').includes("Child aged <5 years")), '#fb-children-cpg--bbage opens "Child aged <5 years"');
  await go(p, '#fb-children-cpg--magmet', 350); ok(await p.evaluate(() => ((document.querySelector('#cur h2') || {}).textContent || '').startsWith("A magnet plus another metallic object") || ((document.querySelector('#cur h2') || {}).textContent || '').includes("A magnet plus another metallic object")), '#fb-children-cpg--magmet opens "A magnet plus another metallic object"');
  await go(p, '#children--bbhome', 350);
  ok(await p.evaluate(() => !!document.querySelector('#cur .links a[href="#fb-children-cpg--bb"]')), 'the department\'s battery-home outcome links to the CPG\'s battery step');
  await p.click('#cur .links a[href="#fb-children-cpg--bb"]'); await p.waitForTimeout(400);
  ok(await p.evaluate(() => location.hash === '#fb-children-cpg--bb' && ((document.querySelector('#cur h2') || {}).textContent || '').startsWith('Confirmed button battery')), 'and the link opens it');
  ok(await p.evaluate(() => { const t = P['dengue-cpg'].notes.find(x => x.l === 'Tests'); const n = t && t.notes.find(x => x.h === 'Bleeding and transfusion'); return !!n && n.src === 'CPG Recommendation 9 (p57)' && n.items.some(i => i.startsWith('Routine prophylactic transfusion of platelets or plasma should not be performed')); }), 'the dengue CPG has Recommendation 9 on transfusion in its Tests tab');
  // End of part 2 entries
  await p.keyboard.press('/'); await p.waitForTimeout(250);
  await p.fill('#gq', 'colchicine'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => [...document.querySelectorAll('#palbody a')].slice(0, 6).some(a => a.getAttribute('href').startsWith('#gout-cpg'))), 'searching "colchicine" finds the gout CPG');
  await p.fill('#gq', 'peak flow action plan'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => [...document.querySelectorAll('#palbody a')].slice(0, 6).some(a => ['#calc-apef', '#asthma-cpg'].includes(a.getAttribute('href')))), 'searching "peak flow action plan" finds the asthma CPG or its calculator');
  await p.keyboard.press('Escape'); await p.waitForTimeout(200);
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
  await go(p, '#guidelines', 500);
  ok(await hscroll(p) <= 0, 'phone #guidelines no sideways scroll');
  await p.screenshot({path:out + '/p-guidelines.png'});
  await p.screenshot({path:out + '/p-guidelines-full.png', fullPage:true});
  await p.tap('#libf [data-f="all"]'); await p.waitForTimeout(100);
  for (const h of ['#asthma-cpg', '#gout-cpg', '#gout-cpg--coldose', '#asthma-cpg--home', '#dengue-cpg--dcok', '#head-injury-cpg', '#acs-cpg', '#diabetic-foot-cpg', '#fb-children-cpg']){
    await go(p, h, 500);
    ok(await hscroll(p) <= 0, `phone ${h} no sideways scroll`);
    if (!h.includes('--')) await p.screenshot({path:out + `/p-${h.slice(1)}.png`});
  }
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
