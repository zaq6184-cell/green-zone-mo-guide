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
/* Values that must never appear in the app (names, IC, passport and registration numbers from the sources) live in
   guard-values.local.json, kept out of git, so this public test checks for them without publishing them. */
let GUARD = null;
try { GUARD = JSON.parse(fs.readFileSync(path.join(__dirname, 'guard-values.local.json'), 'utf8')); } catch (e) { console.log('note: guard-values.local.json not found, so the checks for values that must never appear are skipped'); }
const guardRe = k => GUARD && GUARD[k] ? GUARD[k].map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') : null;
const root = path.resolve(process.argv[2] || path.join(__dirname, '..', 'app'));
const out = path.resolve(process.argv[3] || path.join(__dirname, 'shots'));
const PORT = Number(process.env.PORT) || 8765;
fs.mkdirSync(out, {recursive:true});
const types = {'.html':'text/html','.webp':'image/webp','.mp4':'video/mp4','.mp3':'audio/mpeg','.png':'image/png'};
const srv = http.createServer((q, r) => {
  const f = path.join(root, decodeURIComponent(q.url.split('?')[0]).replace(/^\/$/, '/index.html'));
  fs.readFile(f, (e, d) => {
    if (e){ r.writeHead(404); r.end(); return; }
    /* Byte ranges, as a web host serves them, so the read-aloud narration and the films can seek */
    const type = types[path.extname(f)] || 'application/octet-stream', m = /^bytes=(\d*)-(\d*)$/.exec(q.headers.range || '');
    if (m && (m[1] || m[2])){
      const s = m[1] ? +m[1] : Math.max(0, d.length - +m[2]), t = m[1] && m[2] ? Math.min(+m[2], d.length - 1) : d.length - 1;
      r.writeHead(206, {'content-type':type, 'accept-ranges':'bytes', 'content-range':`bytes ${s}-${t}/${d.length}`, 'content-length':t - s + 1}); r.end(d.subarray(s, t + 1)); return;
    }
    r.writeHead(200, {'content-type':type, 'accept-ranges':'bytes', 'content-length':d.length}); r.end(d);
  });
}).listen(PORT);
const U = `http://localhost:${PORT}/`;
const VIEWS = ['home','pathways','rules','tools','calc','numbers','links','intro','journey','tour','quiz','new','poster','about'];
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
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm img').length) === 10, 'the ten topic tiles have their pictures');
  ok(await p.waitForFunction(() => [...document.querySelectorAll('#libcats .tm img')].every(i => i.complete && i.naturalWidth === 640), null, {timeout:5000}).then(() => true, () => false), 'every topic picture loads');
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm video').length) > 0, 'the topic tiles start their loops (Moving tiles is on by default)');
  ok(await p.evaluate(() => document.querySelectorAll('.libsec .lh .tm img').length) >= 8, 'the Pathways section bars carry their topic pictures');
  await p.fill('#libq', 'co'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm video').length) > 0, 'typing in the filter keeps the tile loops');
  await p.fill('#libq', ''); await p.waitForTimeout(150);
  // Library filter and stars
  await go(p, '#pathways');
  ok(await p.evaluate(() => document.querySelectorAll('#libgrid .pc').length === Object.keys(P).length && Object.keys(P).length >= 44), `library shows a card for each of the ${await p.evaluate(() => Object.keys(P).length)} entries`);
  ok(await p.evaluate(() => document.querySelector('#libf [data-f="ebook"] small').textContent === '23' && document.querySelector('#libf [data-f="rules"] small').textContent === '18' && document.querySelector('#libf [data-f="cpg"] small').textContent === String(Object.keys(P).filter(id => P[id].grp === 'cpg').length)), 'the Ebook filter still counts the 23 ebook pathways (the CPGs are not), rules 18, and Guidelines every CPG entry');
  await p.fill('#libq', 'colic'); await p.waitForTimeout(150);
  console.log('     filter colic ->', await p.evaluate(() => [...document.querySelectorAll('#libgrid .pc h3')].map(h => h.textContent).join(' | ')));
  await p.fill('#libq', ''); await p.waitForTimeout(100);
  await p.click('#libcats [data-cat="heart"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelectorAll('#libgrid .pc').length === CATS.find(c => c.k === 'heart').ids.filter(id => P[id]).length && CATS.find(c => c.k === 'heart').ids.length === 8), 'heart category shows its 8 entries');
  await p.click('#libgrid [data-star="acs"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => JSON.parse(localStorage.getItem('gz-saved') || '[]').includes('acs')), 'star on a card saves it');
  ok(await p.evaluate(() => location.hash) === '#pathways', 'star does not open the card');
  ok(await p.evaluate(() => !document.querySelector('#sidesaved').hidden), 'sidebar shows saved');
  await p.click('#libcats [data-cat="all"]'); await p.waitForTimeout(100);
  // Guidelines: the CPG entries in the guide, then the national CPG shelf as outside links
  await p.click('#libf [data-f="cpg"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => [...document.querySelectorAll('#libgrid .pc:not(.shelf-c) h3 a')].map(a => a.getAttribute('href')).sort().join() === Object.keys(P).filter(id => P[id].grp === 'cpg').map(id => '#' + id).sort().join() && document.querySelectorAll('#libgrid .pc:not(.shelf-c)').length >= 6), 'Guidelines shows every CPG entry in the guide');
  ok(await p.evaluate(() => { const want = CPG_SHELF.filter(c => !(c.id && P[c.id])), l = [...document.querySelectorAll('#libgrid .shelf-c h3 a')];
    return l.length === want.length && l.length >= 25 && l.every((a, i) => a.target === '_blank' && a.rel.includes('noopener') && a.href.startsWith(want[i].drive ? 'https://drive.google.com/file/d/' + want[i].drive : 'https://www.acadmed.org.my/view_file.cfm?fileid=' + want[i].cpg)); }), 'the shelf lists every national CPG not built in: the Drive copy where its terms allow, otherwise the Academy file');
  ok(await p.evaluate(() => CPG_SHELF.find(c => c.cpg === '894').drive === '' && !!document.querySelector('#libgrid .shelf-c h3 a[href$="fileid=894"]') && CPG_SHELF.filter(c => !c.drive).length >= 10), 'a CPG whose rights are reserved (hypertension, 2018) links to the Academy only');
  ok(await p.evaluate(() => [...document.querySelectorAll('#libgrid .shelf-c .pill.ext')].filter(x => x.textContent.startsWith('Patient leaflet')).length === 2 && !!P['cancer-pain-cpg'].leaflet.en && !!P['cancer-pain-cpg'].leaflet.ms), 'the shelf carries the patient leaflets for depression and dementia; the cancer pain leaflet, now built in, is in its entry in English and Bahasa Melayu');
  ok(await p.evaluate(() => { const want = CPG_SHELF.filter(c => !(c.id && P[c.id])), pills = [...document.querySelectorAll('#libgrid .shelf-c .shelf-l a')];
    return pills.filter(a => a.textContent.startsWith('Academy')).length === want.filter(c => c.drive).length && pills.every(a => /^https:\/\/(drive\.google\.com\/file\/d\/|www\.acadmed\.org\.my\/view_file\.cfm\?fileid=)/.test(a.href) && a.target === '_blank') && document.querySelector('#libgrid .shelf-top a').href.startsWith('https://drive.google.com/drive/folders/'); }), 'cards with a Drive copy also link the Academy file, every pill opens Drive or the Academy in a new tab, and the shelf opens the whole Drive folder');
  ok(await p.evaluate(() => CPG_SHELF.filter(c => c.id && P[c.id]).every(c => !document.querySelector(`#libgrid .shelf-c a[href$="fileid=${c.cpg}"]`) && !document.querySelector(`#libgrid .shelf-c a[href*="${c.drive}"]`))), 'the CPGs built into the guide are not repeated as links');
  ok(await p.evaluate(() => [...document.querySelectorAll('#libgrid .shelf-c .pill.ext')].filter(x => x.textContent.startsWith('Quick reference')).length === CPG_SHELF.filter(c => !(c.id && P[c.id]) && c.qr).length && document.querySelectorAll('#libgrid .shelf-sub').length === 2), 'the shelf carries each quick reference, in two groups');
  await p.screenshot({path:out + '/d-guidelines.png'});
  await p.click('#libf [data-f="all"]'); await p.waitForTimeout(100);
  ok(await p.evaluate(() => !document.querySelector('#libgrid .shelf')), 'All without a search shows no shelf');
  await p.fill('#libq', 'dementia'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => [...document.querySelectorAll('#libgrid .shelf-c h3 a')].some(a => a.textContent.includes('Dementia'))), 'a library search under All also finds a national CPG on the shelf');
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
  ok(await p.evaluate(() => document.querySelectorAll('#cxlist .cxc').length === 32 && document.querySelectorAll('#cxlist .cxl').length === 18), 'the hub lists 32 calculators and 18 outside links (5 PEMCalc, 13 MDCalc)');
  ok(await p.evaluate(() => [...document.querySelectorAll('#cxlist .cxl a')].every(a => a.target === '_blank' && /noopener/.test(a.rel) && (a.href.startsWith('https://pemcalc.com/') || a.href.startsWith('https://www.mdcalc.com/calc/')) && /(PEMCalc|MDCalc), outside site/.test(a.closest('.pc').textContent))), 'the PEMCalc and MDCalc links open in a new tab and say they are an outside site');
  ok(await p.evaluate(() => document.querySelectorAll('#cxcats button').length === 9 && document.querySelectorAll('#cxcats .tm img').length === 9), 'the nine group tiles have their pictures');
  ok(await p.evaluate(() => document.querySelectorAll('#cxcats .tm video').length > 0), 'the calculator group tiles start their loops');
  await p.screenshot({path:out + '/d-calc-hub.png', fullPage:true});
  await p.click('#cxcats [data-cg="scores"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => [...document.querySelectorAll('#cxlist .cxc')].filter(r => !r.hidden).map(r => r.dataset.id).sort().join() === 'apef,curb,mcisaac,wells' && [...document.querySelectorAll('#cxlist .cxl')].filter(r => !r.hidden).length === 3), 'the Scores tile shows the asthma action plan zones, CURB-65, Wells and McIsaac, with ABCD2, Alvarado and Centor on MDCalc');
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
  // The dengue one-screen assessment: Appendix 7 in its own order, from the dengue CPG's triage steps
  await go(p, '#calc-dassess', 400);
  ok(await p.evaluate(() => document.querySelectorAll('#calcbox .cf-h').length === 5 && document.querySelectorAll('#calcbox input[data-none]').length === 3 && !document.querySelector('#couts .verdict')), 'the dengue one-screen assessment opens with five sections, a None of these for each list, and no result yet');
  await p.check('#calcbox input[data-none="lt"]');
  for (const [k, v] of [['sbp', 120], ['dbp', 80], ['hr', 80], ['rr', 16], ['spo2', 98], ['map', 93]]) await p.fill('#cf-' + k, String(v));
  await p.waitForTimeout(150);
  ok(await p.evaluate(() => { const v = document.querySelector('#couts .verdict'); return v.classList.contains('next') && /the warning signs/.test(v.textContent) && !/MTS 5/.test(document.querySelector('#couts').textContent); }), 'with lists 3 and 4 not yet checked it shows no level below the Red Zone, and says what is left');
  await p.check('#calcbox input[data-none="ws"]'); await p.check('#calcbox input[data-none="cm"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => { const v = document.querySelector('#couts .verdict'); return v.classList.contains('ok') && v.querySelector('a').getAttribute('href') === '#dengue-cpg--pc' && /Group A/.test(document.querySelector('#couts .out').textContent) && document.querySelector('#cxsticky.ok') && !document.querySelector('#cxsticky').hidden; }), 'nothing present and stable vital signs: MTS level 5, at-home management (Group A)');
  await p.check('#calcbox input[data-k="ws"][data-i="8"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => { const v = document.querySelector('#couts .verdict'); return v.classList.contains('stop') && v.querySelector('a').getAttribute('href') === '#dengue-cpg--yellow' && !document.querySelector('#calcbox input[data-none="ws"]').checked && /Present: Mucosal bleed/.test(document.querySelector('#couts .out').textContent); }), 'a mucosal bleed makes it Yellow Zone, MTS level 3 (Group B2), and clears None of these');
  await p.fill('#cf-hr', '110'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelector('#couts .verdict a').getAttribute('href') === '#dengue-cpg--red2'), 'a heart rate over 100 makes it Red Zone, MTS level 2');
  await p.fill('#cf-day', '4'); await p.fill('#cf-plt', '80'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => !!document.querySelector('#couts .dtl .dtl-pin') && document.querySelector('#couts .dtl-ax i.on').textContent === '4' && /usual critical-phase window/.test(document.querySelector('#couts').textContent) && [...document.querySelectorAll('#couts .cx-list h4')].some(h => /Key indicators of the critical phase/.test(h.textContent))), 'day 4 shows on the phase timeline inside the critical window, with the key indicators');
  await p.screenshot({path:out + '/d-calc-dassess.png', fullPage:true});
  // Third CPG round calculators
  await go(p, '#calc-crcl', 400);
  for (const [k, v] of [['yrs', 70], ['wt', 60], ['scr', 120]]) await p.fill('#cf-' + k, String(v));
  await p.click('#calcbox [data-k="sex"][data-sv="f"]'); await p.click('#calcbox [data-k="drug"][data-pv="Metformin"]'); await p.waitForTimeout(200);
  ok(await p.evaluate(() => document.querySelector('#couts .out b').textContent === '36 ml/min' && /no accurate method/.test(document.querySelector('#couts .out').textContent) && [...document.querySelectorAll('#couts .cx-list dd')].some(d => d.textContent === '30 - 45: 50%')), 'kidney function: a woman of 70, 60 kg, creatinine 120 gives a clearance of 36, and metformin\'s moderate cell (30 - 45: 50%)');
  for (const [k, v] of [['yrs', 80], ['wt', 50], ['scr', 123]]) await p.fill('#cf-' + k, String(v));
  await p.click('#calcbox [data-k="sex"][data-sv="m"]'); await p.waitForTimeout(200);
  ok(await p.evaluate(() => /Where the columns meet/.test(document.querySelector('#couts').textContent) && document.querySelectorAll('#couts .cx-list dt').length >= 3), 'at a clearance of exactly 30 it shows both columns that meet there');
  await p.fill('#cf-wt', '');
  await go(p, '#calc-copioid', 400);
  await p.fill('#cf-tdd', '60'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelector('#couts .out b').textContent === '5–10 mg'), 'cancer pain: 60 mg a day gives a rescue dose of 5–10 mg');
  await p.fill('#cf-nres', '4'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelector('#couts .verdict a').getAttribute('href') === '#cancer-pain-cpg--titr'), 'more than 3 rescue doses a day leads to the titration step');
  await go(p, '#calc-mcisaac', 400);
  for (const i of [0, 1, 2, 3]) await p.check(`#calcbox input[data-k="ms"][data-i="${i}"]`);
  await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelector('#couts .out b').textContent === '4 of 5' && document.querySelector('#couts .verdict a').getAttribute('href') === '#sore-throat-cpg--four'), 'McIsaac: four features score 4 and lead to the swab-or-antibiotic step');
  await go(p, '#calc-insulin', 400);
  await p.fill('#cf-wt', '60'); await p.click('#calcbox [data-k="prof"] button, #calcbox button[data-k="prof"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => [...document.querySelectorAll('#couts .cx-list h4')].some(h => /Type 2 diabetes CPG/.test(h.textContent))), 'the insulin calculator shows what the type 2 diabetes CPG gives on splitting, without computing a split');
  await p.fill('#cf-wt', '');
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
  // Read-aloud: the leaflet's Listen bar follows its language, loads nothing until tapped, lights the section being read
  ok(await p.evaluate(() => document.querySelector('#leaf .lsn').dataset.read === 'leaf-dengue-en' && document.querySelectorAll('#leaf .lsn-ch button').length === 3 && reader.paused && !performance.getEntriesByType('resource').some(e => /audio\/(leaf|adv)-/.test(e.name))), 'the leaflet has a Listen bar with three section chips, and no narration loads before a tap');
  await p.click('#leaf .lsn-ch button >> nth=1'); await p.waitForTimeout(1500);
  ok(await p.evaluate(() => !reader.paused && reader.currentTime > READ['leaf-dengue-en'].marks[2] && document.querySelector('#leaf .leaf-g.reading h5').textContent.startsWith('What to avoid') && document.querySelector('#leaf .lsn-ch button.on').textContent === 'What to avoid'), 'tapping a section chip plays from that section and lights it');
  ok(await p.evaluate(() => document.querySelectorAll('.rl-on').length === 1 && !!document.querySelector('#leaf .leaf-g.reading .rl-on')), 'the line being read is marked inside the section being read');
  ok(await p.evaluate(() => { const box = document.querySelector('#leaf .lsn'), L = READ['leaf-dengue-en'].lines; return L.length === document.querySelectorAll('#leaf .leaf-t, #leaf .leaf-g > h5, #leaf .leaf-g > p, #leaf .leaf-g li').length && L.every(l => readLine(box, l[1], l[2])) && L.every((l, i) => !i || l[0] > L[i - 1][0]); }), 'every English leaflet line has its own mark, in order, on its own element');
  // The leaflet's film: a small card until tapped (nothing loads before), then the player, which stops the narration
  ok(await p.evaluate(() => { const b = document.querySelector('#leaf .lfilm-b'); return !!b && b.dataset.film === 'media/dengue-home-720.mp4' && !document.querySelector('#leaf video') && !performance.getEntriesByType('resource').some(e => e.name.includes('dengue-home') && e.name.includes('.mp4')); }), 'the leaflet offers its film as a small card, and no film loads before a tap');
  await p.click('#leaf .lfilm-b'); await p.waitForTimeout(400);
  ok(await p.evaluate(() => { const v = document.querySelector('#leaf .lfilm video'); return !!v && v.src.endsWith('media/dengue-home-720.mp4') && v.controls && reader.paused; }), 'tapping the film card swaps in the player and stops the narration');
  ok(Object.values(await p.evaluate(() => FILMS)).every(f => ['en', 'ms'].every(l => ['src', 'cover', 'thumb'].every(k => fs.existsSync(path.join(__dirname, '..', 'app', f[l][k]))) && !/FILM_/.test(f[l].d))), 'every leaflet film, cover and thumbnail exists, with its length written');
  await p.click('#tp-leaflet [data-leaf="ms"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => reader.paused && document.querySelector('#leaf .lsn').dataset.read === 'leaf-dengue-ms' && !document.querySelector('.reading, .rl-on')), 'switching to Bahasa Melayu stops the English narration and offers the Malay one');
  ok(await p.evaluate(() => { const box = document.querySelector('#leaf .lsn'), L = READ['leaf-dengue-ms'].lines; return L.length === document.querySelectorAll('#leaf .leaf-t, #leaf .leaf-g > h5, #leaf .leaf-g > p, #leaf .leaf-g li').length && L.every(l => readLine(box, l[1], l[2])); }), 'every Malay leaflet line has its own mark on its own element');
  ok(await p.evaluate(() => (document.querySelector('#leaf .lfilm-b') || {}).dataset?.film === 'media/dengue-home-ms-720.mp4' && !document.querySelector('#leaf video')), 'the Malay leaflet offers the Malay film');
  await p.click('#leaf .lsn-b'); await p.waitForTimeout(800);
  await go(p, '#home', 300);
  ok(await p.evaluate(() => reader.paused), 'leaving the page stops the narration');
  await go(p, '#mild-tbi', 400); await p.click('#ptab [data-pt="advice"]'); await p.waitForTimeout(200);
  ok(await p.evaluate(() => (document.querySelector('#tp-advice .lsn') || {}).dataset?.read === 'adv-tbi-en' && READ['adv-tbi-en'].lines.length === document.querySelectorAll('#tp-advice #advlist > li').length), 'the mild head injury advice has its Listen bar, with a mark for each advice line');
  for (const [h, k] of [['#dengue', 'adv-dengue-en'], ['#asthma-zone', 'adv-asthma-en']]){
    await go(p, h, 400); await p.click('#ptab [data-pt="advice"]'); await p.waitForTimeout(150);
    ok(await p.evaluate(k => (document.querySelector('#tp-advice .lsn') || {}).dataset?.read === k && READ[k].lines.length === document.querySelectorAll('#tp-advice #advlist > li').length, k), 'the advice of ' + h.slice(1) + ' has its Listen bar, with a mark for each advice line');
  }
  await go(p, '#cancer-pain-cpg', 400); await p.click('#ptab [data-pt="leaflet"]'); await p.waitForTimeout(150);
  for (const lg of ['en', 'ms']){
    await p.click('#tp-leaflet [data-leaf="' + lg + '"]'); await p.waitForTimeout(150);
    ok(await p.evaluate(lg => { const box = document.querySelector('#leaf .lsn'), L = READ['leaf-cancerpain-' + lg].lines; return box.dataset.read === 'leaf-cancerpain-' + lg && L.length === document.querySelectorAll('#leaf .leaf-t, #leaf .leaf-g > h5, #leaf .leaf-g > p, #leaf .leaf-g li').length && L.every(l => readLine(box, l[1], l[2])) && !document.querySelector('#leaf .lfilm'); }, lg), 'every line of the cancer pain leaflet (' + lg + ') has its own mark, and it has no film');
  }
  ok(Object.values(await p.evaluate(() => READ)).every(r => fs.existsSync(path.join(__dirname, '..', 'app', r.src)) && r.marks[0] === 0 && r.marks.every((m, i, a) => !i || m > a[i - 1]) && r.marks[r.marks.length - 1] < r.dur), 'every narration file exists, and its section marks run in order inside it');
  await go(p, '#dengue-cpg', 400); await p.click('#ptab [data-pt="leaflet"]'); await p.waitForTimeout(150);
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
  // Third CPG round (9 Nov 2026): every entry that is built, checked from its own data
  const R3 = ['ckd-cpg', 'sinusitis-cpg', 'avulsed-tooth-cpg', 'hip-fracture-cpg', 'cancer-pain-cpg', 't2dm-cpg', 'vte-cpg', 'copd-cpg', 'sore-throat-cpg'];
  for (const id of await p.evaluate(ids => ids.filter(i => P[i]), R3)){
    await go(p, '#' + id, 450);
    const info = await p.evaluate(id => { const q = P[id]; return {tabs:[...document.querySelectorAll('#ptab [role="tab"]')].map(b => b.textContent), title:q.title, hero:q.hero, h1:(document.querySelector('#run .run-hero h1') || {}).textContent,
      foot:tabsOf(q).filter(t => t.cls === 't-cpg').every(t => q.own ? /in the guide's own words/.test(t.html) : new RegExp('Reproduced with acknowledgement to ' + (q.ack || 'MaHTAS').replace(/[()]/g, '.')).test(t.html))}; }, id);
    ok(info.tabs.length >= 2 && info.tabs[info.tabs.length - 1] === 'References' && info.h1 === info.title && info.foot, `${id}: its banner title, reference tabs (${info.tabs.join('|')}) and the right copyright line`);
    if (await p.evaluate(k => TILE_KEYS.has(k), info.hero)) ok(await p.waitForFunction(() => { const i = document.querySelector('#run .run-hero .tm img'); return i && i.complete && i.naturalWidth === 640; }, null, {timeout:5000}).then(() => true, () => false), `${id}: its banner carries its own picture`);
    const walk = await p.evaluate(id => { const q = P[id]; let k = q.start; const seq = [], seen = new Set(); while (k && q.nodes[k] && !q.nodes[k].end && !seen.has(k) && seq.length < 30){ seen.add(k); const n = q.nodes[k]; if (n.opts){ seq.push('#cur [data-go="0"]'); k = n.opts[0][1]; } else { seq.push('#cur button[data-next]'); k = n.next; } } return {seq, end:k && q.nodes[k] && q.nodes[k].end ? q.nodes[k].title : null}; }, id);
    for (const sel of walk.seq){ await p.click(sel); await p.waitForTimeout(200); }
    ok(!!walk.end && await p.evaluate(t => ((document.querySelector('#cur h2') || {}).textContent || '').startsWith(t), walk.end), `${id}: a walk on the first options ends at "${walk.end}"`);
    const last = await p.evaluate(id => { const e = Object.entries(P[id].nodes).filter(([, n]) => n.end).pop(); return e && [e[0], e[1].title]; }, id);
    await go(p, '#' + id + '--' + last[0], 350);
    ok(await p.evaluate(t => ((document.querySelector('#cur h2') || {}).textContent || '').startsWith(t), last[1]), `#${id}--${last[0]} opens "${last[1]}"`);
    await p.screenshot({path:out + `/d-run-${id}.png`, fullPage:true});
  }
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

  /* Rabies and the ABC (protocol of Oct 2022, rebuilt 10 Nov 2026): the two flow charts as one pathway, figures, PDF, writer */
  await go(p, '#animal-bites', 500);
  ok(await p.evaluate(() => document.querySelectorAll('#cur .checks li').length === 15 && /Definite risk/.test(document.querySelector('#cur h2').textContent)), 'animal bites opens on the checklist\'s Table 1A, all fifteen items');
  await p.click('#cur .checks li:first-child input'); await p.click('#cur button.opt[data-go="0"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => /Wound category/.test(document.querySelector('#cur h2').textContent) && document.querySelectorAll('#cur .figwc .wc').length === 3), 'a definite risk leads to the wound category, with the three categories drawn');
  await p.click('#cur button.opt[data-go="2"]'); await p.waitForTimeout(200);
  await p.click('#cur button.opt[data-go="0"]'); await p.waitForTimeout(200);
  await p.click('#cur .checks li:nth-child(2) input'); await p.click('#cur button.opt[data-go="0"]'); await p.waitForTimeout(200);
  await p.click('#cur button.opt[data-go="0"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => /^RIG in the ED/.test(document.querySelector('#cur h2').textContent.replace(/^Do this: /, '')) && document.querySelector('#cur .figrig') && /Max\. dose: 1 vial\/patient/.test(document.querySelector('#cur').textContent)), 'Category 3, no prophylaxis, eligible and urgent: RIG in the ED, at most one vial, with the RIG card');
  await p.click('#cur button[data-next]'); await p.waitForTimeout(200); await p.click('#cur button[data-next]'); await p.waitForTimeout(300);
  ok(await p.evaluate(() => document.querySelector('#cur .res.refer h2').textContent === 'Refer to the Animal Bite Clinic' && !!document.querySelector('#cur .res a.ext[href^="https://drive.google.com/file/d/1k8Yh8oSoEMw3MPJ02kf19ujBnxCXMsX8"]') && state.cur === 'abc'), 'the route ends at the ABC referral (its old node key, abc), with the protocol PDF');
  await go(p, '#animal-bites--hx2', 400);
  await p.click('#cur button.opt[data-go="0"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => /IM: 1 site; D0,3,7,14-28/.test(document.querySelector('#cur').textContent) && document.querySelectorAll('#cur .figsc .sc-r i').length === 9), 'Category 2 with no prophylaxis: the full course, with the schedule strip');
  await go(p, '#animal-bites--hx3', 400);
  await p.click('#cur button.opt[data-go="3"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => /Pre-exposure prophylaxis only/.test(document.querySelector('#cur h2').textContent) && /Not in the protocol/.test(document.querySelector('#cur .gap').textContent)), 'pre-exposure prophylaxis: no RIG, and the vaccine schedule is marked as not in the protocol');
  ok(await p.evaluate(() => [...document.querySelectorAll('#ptab [role="tab"]')].map(t => t.textContent).join('|') === 'How to prescribe|Risk checklist|Who does what|Signs to counsel|References' && !!document.querySelector('#tp-refs a.ext[href*="1k8Yh8oSoEMw3MPJ02kf19ujBnxCXMsX8"]')), 'its tabs: how to prescribe, the checklist, who does what, signs to counsel, and references with the PDF');
  if (guardRe('rabies')) ok(await p.evaluate(re => !new RegExp(re).test(JSON.stringify(P['animal-bites']) + document.body.textContent), guardRe('rabies')), 'no name, IC, passport or serial number from the sample prescriptions, and not the mobile number on the card');
  ok(await p.evaluate(() => !/\b\d{6}-\d{2}-\d{4}\b/.test(JSON.stringify(P))), 'no IC-shaped number in any entry');
  /* The writer: the protocol's own example (Appendix 4B) must come out as printed */
  await go(p, '#calc-rabies', 500);
  await p.fill('#cf-d0', '2022-05-01'); await p.waitForTimeout(200);
  const rx = () => p.evaluate(() => [...document.querySelectorAll('#couts .cx-list dd')].map(d => d.textContent));
  ok((await rx()).join('|').includes('IM Rabies Vaccine 0.5 ml stat D0 (01/05/2022)|IM Rabies Vaccine 0.5 ml stat D3 (04/05/2022)|IM Rabies Vaccine 0.5 ml stat D7 (08/05/2022)|IM Rabies Vaccine 0.5 ml stat D14 (15/05/2022)'), 'the writer gives the protocol\'s own example: D0 1 May 2022, then 4, 8 and 15 May');
  await p.click('[data-k="slip"][data-sv="fgn"]'); await p.waitForTimeout(150);
  ok((await rx()).filter(t => /stat D\d/.test(t)).join() === 'IM Rabies Vaccine 0.5 ml stat D0 (01/05/2022)', 'a foreigner gets one dose per visit');
  await p.click('[data-k="slip"][data-sv="opd"]'); await p.click('[data-k="rt"][data-sv="id"]'); await p.waitForTimeout(200);
  ok((await rx()).join('|').includes('ID Rabies Vaccine 0.1 ml x 2 sites stat D7 (08/05/2022)') && !(await rx()).some(t => /D14/.test(t)), 'the ID course: 0.1 ml at 2 sites on D0, D3 and D7');
  await p.click('[data-k="rig"][data-sv="yes"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => /Rabies Immunoglobulin 1 vial \(1000 units\) stat/.test(document.querySelector('#couts').textContent) && /accept verbal consent/.test(document.querySelector('#couts').textContent)), 'with RIG: one vial, after the ID trainee or consultant agrees');
  await p.click('[data-k="reg"][data-sv="short"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => [...document.querySelectorAll('[data-k="rt"]')].map(b => b.textContent).join('|') === 'IM, 1 site|ID, 1 site|ID, 4 sites' && /D0, D3/.test(document.querySelector('#couts .out b').textContent)), 'the shorter course offers 1 site on D0 and D3, or ID at 4 sites on D0');
  await go(p, '#home', 300);

  /* The orthopaedic referral memo, to show when a referral is declined: open and download, from both outcomes and References */
  await go(p, '#referral-rules--orthoc', 400);
  ok(await p.evaluate(() => { const a = [...document.querySelectorAll('#cur .res .links a.ext')].map(x => x.getAttribute('href')); return a.length === 2 && a[0].endsWith('/1KNToAW7LBSnZ3ckP3XHyZj6slNuothGQ/view') && a[1].includes('export=download&id=1KNToAW7LBSnZ3ckP3XHyZj6slNuothGQ') && [...document.querySelectorAll('#cur .res .links a.ext')].every(x => x.target === '_blank'); }), 'the on-call orthopaedic referral shows the memo, to open or download, in a new tab');
  await p.click('#ptab [data-pt="refs"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelectorAll('#tp-refs .cpg-pdf a.ext').length === 2), 'the referral rules list the memo in References, to open or download');
  await go(p, '#home', 300);

  /* Code Blue (Code Blue Manual 2022/2024, 10 Nov 2026): the numbers, the block map, both zones, the 10 minutes, the colour codes */
  await go(p, '#code-blue', 500);
  ok(await p.evaluate(() => document.querySelectorAll('#cur .figcbn .cbn').length === 4 && /5333/.test(document.querySelector('#cur .cbn.hot').textContent) && document.querySelector('.run-hero').classList.contains('t-garnet')), 'Code Blue opens on its numbers, 5333 first, under a garnet banner');
  await p.click('#cur .cbn.hot .cpy'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => /Copied|Selected/.test(document.querySelector('#cur .cbn.hot .cpy').textContent)), 'Copy on a Code Blue number answers');
  await p.click('#cur button.opt[data-go="0"]'); await p.waitForTimeout(300);
  ok(await p.evaluate(() => document.querySelectorAll('#cur .cbm-b').length === 10 && document.querySelectorAll('#cur .cbm-map .rd').length === 5), 'the block map shows the ten blocks and the roads of Appendix ii');
  await p.click('#cur [data-cbb="hta"]'); await p.waitForTimeout(200);
  ok(await p.evaluate(() => document.querySelector('#cur [data-cbb="hta"]').getAttribute('aria-pressed') === 'true' && /03-2600 1050/.test(document.querySelector('#cur .cbm-out').textContent)), 'tapping HTA shows the WCH code blue team, 03-2600 1050');
  await p.click('#cur [data-cbb="hta"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelector('#cur [data-cbb="hta"]').getAttribute('aria-pressed') === 'false' && /Tap a block/.test(document.querySelector('#cur .cbm-out').textContent)), 'tapping it again clears the panel');
  await p.click('#cur button.opt[data-go="0"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => document.querySelectorAll('#cur .cbs li').length === 8 && /1133 \/ 1134/.test(document.querySelector('#cur .cbs li.an').textContent)), 'SCACC shows its eight levels, level 7 Anaesthesia on 1133 / 1134');
  for (const k of [1, 1, 1]){ await p.click(`#cur button.opt[data-go="${k}"]`); await p.waitForTimeout(200); }
  ok(await p.evaluate(() => state.cur === 'z2cpr' && document.querySelectorAll('#cur .cbc').length === 4), 'SCACC, not stable, not conscious, no pulse: initiate CPR, with the chain of survival');
  await p.click('#cur button[data-next]'); await p.waitForTimeout(200); await p.click('#cur button[data-next]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => state.cur === 'z2t' && /EDHKL for transport: 5333/.test(document.querySelector('#cur .res h2').textContent)), 'then Anaesthesiology on 1133 / 1134, and EDHKL for transport on 5333');
  await go(p, '#code-blue--ten', 400);
  ok(await p.evaluate(() => !!document.querySelector('#cur .figcbk .cbk-fill') && document.querySelectorAll('#cur button.opt').length === 3), 'the 10-minute check shows its clock and three answers');
  await p.click('#cur button.opt[data-go="2"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => state.cur === 'move' && /5\.4d/.test(document.querySelector('#cur').textContent)), 'past 10 minutes with no one BLS-trained: start the transfer to the ED (5.4d)');
  await go(p, '#code-blue--codes', 400);
  ok(await p.evaluate(() => { const n = document.querySelector('#cur .cc .cc-n'), c = n && n.closest('.cc'); return !!n && getComputedStyle(n).color !== getComputedStyle(c).backgroundColor && getComputedStyle(c.querySelector('.cc-t b')).color !== getComputedStyle(c).backgroundColor; }), 'the colour codes outcome shows each code and extension (not white on white)');
  ok(await p.evaluate(() => document.querySelectorAll('#cur .cc').length === 6 && !document.querySelector('#cur .res-b > ul.ticks') && /6000/.test(document.querySelector('#cur .cc.orange').textContent) && P['code-blue'].nodes.codes.items.length === 6), 'the colour codes show as six cards (Code Orange on 6000), with the list kept for Copy outcome');
  ok(await p.evaluate(() => [...document.querySelectorAll('#ptab [role="tab"]')].map(t => t.textContent).join('|') === 'Who covers where|Team and kit|Record|Bystander poster|Emergency codes|References'), 'Code Blue\'s tabs: who covers where, team and kit, record, bystander poster, emergency codes, references');
  if (guardRe('codeblue')) ok(await p.evaluate(re => !new RegExp(re).test(JSON.stringify(P['code-blue']) + JSON.stringify(P['interpreter']) + document.body.textContent), guardRe('codeblue')), 'no person in charge, signer or registration number is copied');
  ok(await p.evaluate(() => NUMS[0].href === '#code-blue' && NUMS.some(n => n.val === 'ext 6000') && NUMS.some(n => n.val === 'ext 5441') && NUMS.some(n => n.href === '#interpreter' && n.val === 'Line 0') && find('translator').r[0].href === '#interpreter'), 'Numbers carry the colour codes and the interpreter line; the Code Blue number opens the new entry; a search for translator finds the interpreters');

  /* Snake bites (MOH guideline 2017, 10 Nov 2026): the entry, its drawings and timer, and the two calculators */
  await go(p, '#snakebite-moh', 500);
  ok(await p.evaluate(() => /Red Zone/.test(document.querySelector('#run').textContent) && document.querySelector('.run-hero .tm img') && P['snakebite-moh'].grp === 'cpg' && P['snakebite-moh'].own), 'snake bites opens under its glass viper banner, a guideline in the guide\'s own words, saying no snakebite stays in the Green Zone');
  await go(p, '#snakebite-moh--labs', 400);
  ok(await p.evaluate(() => document.querySelectorAll('#cur .figwb .wb-s li').length === 4 && document.querySelector('#cur .wb-cd').textContent === '20:00'), 'the 20WBCT is drawn in four steps, with a 20-minute timer');
  await p.click('#cur [data-wbct]'); await p.waitForTimeout(1300);
  ok(await p.evaluate(() => /^19:5\d$/.test(document.querySelector('#cur .wb-cd').textContent) && /Tip the tube once at \d\d:\d\d/.test(document.querySelector('#cur .wb-at').textContent) && !Object.keys(localStorage).some(k => /wb|snake/i.test(k))), 'Start counts down and gives the clock time to tip the tube, storing nothing');
  await go(p, '#snakebite-moh--mpv', 400);
  ok(await p.evaluate(() => /4 vials/.test(document.querySelector('#cur').textContent) && document.querySelectorAll('#cur .figav .av-s li').length === 5 && /3 vials in all \(p37\)/.test(document.querySelector('#cur').textContent)), 'the Malayan pit viper: 4 vials, how to give it, and the 3 vials of the guideline\'s own photo flagged');
  ok(await p.evaluate(() => ['ptosis', 'wbct', 'obs', 'avgive', 'react', 'rpp'].every(k => FIGS[k] && FIGS[k]().length > 200)), 'its six drawings exist');
  await go(p, '#calc-snakeav', 500);
  await p.click('[data-k="grp"][data-sv="pv"]'); await p.waitForTimeout(150); await p.click('[data-k="sp"][data-sv="mpv"]'); await p.waitForTimeout(150);
  await p.click('[data-k="age"][data-sv="ch"]'); await p.waitForTimeout(150); await p.fill('#cf-wt', '18'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => { const x = document.querySelector('#couts').textContent; return /QSMI Malayan Pit Viper Antivenin/.test(x) && /4 vials/.test(x) && /0\.18 mg/.test(x) && /90-180 ml/.test(x) && /At 6 hours/.test(x); }), 'antivenom by snake: a child of 18 kg with a Malayan pit viper bite gets 4 vials, adrenaline 0.18 mg ready and 90-180 ml to dilute in');
  ok(await p.evaluate(() => /Not in the sources for a child/.test(document.querySelector('#calcbox').textContent)), 'a child\'s adrenaline infusion: in neither source, so ask the EP');
  ok(await p.evaluate(() => P['snakebite-moh'].nodes.rxe.items.some(s => s.includes('1 mcg/min')) && CONFIRM.some(c => c.startsWith('LA OT') && c.includes('Which MO')) && P['referral-rules'].nodes.orthoc.items.some(s => s.includes('within 2 hours of the referral')) && P['referral-rules'].nodes.orthoc.items.some(s => s.includes('Orthopaedic Ward first')) && !JSON.stringify(P).includes('Which limit applies')), 'settled on 10 Nov 2026: the adult adrenaline infusion, the pit viper, and LA OT as one timeline');
  await p.click('[data-k="reg"][data-sv="bor"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => /Not in Borneo/.test(document.querySelector('#calcbox').textContent)), 'Sabah and Sarawak with a Malayan pit viper: the not-in-Borneo note');
  await p.click('[data-k="grp"][data-sv="unk"]'); await p.waitForTimeout(150); await p.click('[data-k="syn"][data-sv="par"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => /Not in the guideline/.test(document.querySelector('#couts').textContent)), 'an unidentified bite with paralysis: no polyvalent dose is invented');
  await go(p, '#calc-snake20', 500);
  await p.fill('#cf-at', '14:05'); await p.click('[data-k="res"][data-sv="no"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => { const x = document.querySelector('#couts').textContent; return /14:25/.test(x) && /coagulopathy is possible/.test(x); }), 'the 20WBCT calculator: blood in at 14:05, tip it at 14:25; not clotted, a coagulopathy is possible');
  /* The ED links page (the ETD HKL link page, 10 Nov 2026) */
  await go(p, '#links', 500);
  ok(await p.evaluate(() => document.querySelectorAll('#lnks .lk-g').length === 6 && document.querySelectorAll('#lnks .lk-g.net [data-lcopy]').length === 7 && [...document.querySelectorAll('#lnks a.lk')].every(a => a.target === '_blank')), 'ED links: six groups, the seven hospital systems with Copy, every link in a new tab');
  ok(await p.evaluate(() => ![...document.querySelectorAll('#lnks a.lk')].some(a => /1Y8JMu0egidQ6BekfTplSwCOZerw9gqv5GosyQpzJgws|1QHWVJken0gGngEdnH6K4LuL3CKRnDSzXTTaa-C5l8V8|1jVlYRpBn_NB4GIh42ZPUg1P6tE2L8_3dFSecIxiLMT4|1FDF7xjScfbY-rAye1cS4aq1wCFeZx0UrSqEruUOGMYw/.test(a.href))), 'the response registers that may hold patients\' details are not linked');
  await p.fill('#lkq', 'porter'); await p.waitForTimeout(200);
  ok(await p.evaluate(() => document.querySelectorAll('#lnks a.lk').length === 1 && /Permohonan Porter/.test(document.querySelector('#lnks').textContent)), 'finding "porter" leaves the porter request');
  await p.fill('#lkq', ''); await p.click('#lkf [data-lf="net"]'); await p.waitForTimeout(200);
  ok(await p.evaluate(() => document.querySelectorAll('#lnks .lk-g').length === 1 && document.querySelector('#lkf [data-lf="net"]').getAttribute('aria-pressed') === 'true'), 'the Hospital systems filter shows only them');
  await p.click('#lkf [data-lf="all"]');
  ok(await p.evaluate(() => find('porter').r.some(e => e.href === '#links')), 'search finds the porter request on the ED links page');
  /* The rabies protocol downloads too; the 2022 orthopaedic memo is no longer cited */
  ok(await p.evaluate(() => P['animal-bites'].nodes.abc.links.some(l => l[0].includes('export=download&id=1k8Yh8oSoEMw3MPJ02kf19ujBnxCXMsX8')) && !/3\(29\)22/.test(JSON.stringify(P))), 'the rabies protocol can be downloaded; the 2022 orthopaedic memo is cited nowhere');
  await go(p, '#home', 300);
  /* Communication on shift (10 Nov 2026): safety first, the card's three steps, the eight figures */
  await go(p, '#communication', 500);
  ok(await p.evaluate(() => document.querySelector('.run-hero .tm img') && document.querySelectorAll('#cur button.opt').length >= 6), 'communication opens under its lantern banner on the situation in front of you');
  await p.click('#cur button.opt[data-go="0"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => /weapon/i.test(document.querySelector('#cur h2').textContent)), 'an angry or aggressive person: the first question is a weapon or violence now');
  await p.click('#cur button.opt[data-go="0"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => /5441/.test(document.querySelector('#cur').textContent) && !!document.querySelector('#cur .res')), 'a weapon or violence now: step away, Code Gray on ext 5441, at once');
  ok(await p.evaluate(() => ['cmdanger', 'cmstance', 'cmdeesc', 'cmleap', 'cmsay', 'cmspikes', 'cmteach', 'cmisbar'].every(k => FIGS[k] && FIGS[k]().length > 200)), 'its eight figures exist');
  await go(p, '#communication--talk', 400);
  ok(await p.evaluate(() => document.querySelectorAll('#cur .cm3 li').length === 3 && /I can see you\u2019re upset\./.test(document.querySelector('#cur .cm3').textContent)), 'the three steps, with the card\'s phrases');
  await go(p, '#communication--isbar', 400);
  ok(await p.evaluate(() => document.querySelectorAll('#cur .cmb li').length === 6), 'ISBAR for a phone referral, with the read-back');
  await go(p, '#home', 300);
  /* From the department's link page (10 Nov 2026): the new steps open, EM Watch booking, the corrected memo date */
  for (const h of ['#gz-rules--glance', '#gz-rules--sepsis', '#safe-practice--leave', '#safe-practice--rx', '#safe-practice--dnr', '#referral-rules--psydc', '#referral-rules--fbt', '#code-blue--fire']){ await go(p, h, 300); ok(await p.evaluate(x => state.cur === x.split('--')[1] && !!document.querySelector('#cur h2'), h), h + ' opens'); }
  ok(await p.evaluate(() => /6000/.test(document.querySelector('#cur').textContent) && /Parking Terbuka Cawangan Sumber/.test(document.querySelector('#cur').textContent)), 'Fire in the department: dial 6000, and the assembly point');
  await go(p, '#em-watch--book', 300);
  ok(await p.evaluate(() => (P['em-watch'].nodes.book.items || []).length >= 7 && /AK-15/.test(JSON.stringify(P['em-watch'].nodes.book))), 'EM Watch booking: the seven steps of AK-15');
  ok(await p.evaluate(() => !/9 Jul 2024/.test(JSON.stringify(P))), 'memo (10)24 is no longer dated 9 Jul 2024');
  await go(p, '#home', 300);
  /* The medical interpreters (memo of 9 Jul 2026) */
  await go(p, '#interpreter', 400);
  ok(await p.evaluate(() => document.querySelectorAll('#cur button.opt').length === 5 && /Nepali · नेपाली/.test(document.querySelector('#cur').textContent)), 'interpreters: the four languages of the memo, each in its own script, and another language');
  await p.click('#cur button.opt[data-go="2"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => state.cur === 'call' && document.querySelectorAll('#cur .figint li').length === 5 && /line 0/.test(document.querySelector('#cur h2').textContent)), 'a language of the memo: call line 0, with the five steps of Lampiran 1');
  await p.click('#cur button[data-next]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => state.cur === 'talk' && /Lampiran 2/.test(document.querySelector('#cur .gap').textContent)), 'it ends on the interpreter, and says Lampiran 2 was not seen');
  await go(p, '#home', 300);

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
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm img').length === 10 && document.querySelectorAll('#libcats .tm video').length > 0), 'on a phone the topic tiles move by default too');
  ok(await p.evaluate(() => { const n = document.querySelectorAll('.tm[data-play]').length; return n > 0 && n <= 6; }), 'a phone plays at most six loops at once');
  await p.screenshot({path:out + '/p-pathways-tiles.png'});
  await go(p, '#guidelines', 500);
  ok(await hscroll(p) <= 0, 'phone #guidelines no sideways scroll');
  await p.screenshot({path:out + '/p-guidelines.png'});
  await p.screenshot({path:out + '/p-guidelines-full.png', fullPage:true});
  await p.tap('#libf [data-f="all"]'); await p.waitForTimeout(100);
  for (const h of ['#asthma-cpg', '#gout-cpg', '#gout-cpg--coldose', '#asthma-cpg--home', '#dengue-cpg--dcok', '#head-injury-cpg', '#acs-cpg', '#diabetic-foot-cpg', '#fb-children-cpg', ...(await p.evaluate(ids => ids.filter(i => P[i]).map(i => '#' + i), R3))]){
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
  /* A long route trail: its hidden labels must not stretch the page sideways (audit, 10 Nov 2026) */
  for (const r of ['#acs-cpg--tmix', '#pneumonia--opd', '#gastroenteritis--admit']) { await go(p, r, 300); ok(await hscroll(p) <= 0, r + ': a long route trail does not scroll the page sideways'); }
  ok(await p.evaluate(() => !!document.querySelector('.trailx') && getComputedStyle(document.querySelector('.trailx')).position === 'relative'), 'the route trail contains its hidden labels');

  /* ---------- Reduced motion, tablet width ---------- */
  p = await mk({viewport:{width:900, height:1100}, reducedMotion:'reduce', colorScheme:'light'}, 'tablet');
  await p.goto(U + '#acs', {waitUntil:'networkidle'}); await p.waitForTimeout(600);
  ok(await hscroll(p) <= 0, 'tablet runner no sideways scroll');
  await p.screenshot({path:out + '/t-acs.png'});
  await go(p, '#home', 400);
  await p.screenshot({path:out + '/t-home.png'});
  await go(p, '#pathways', 500);
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm img').length === 10 && !document.querySelector('.tm video')), 'with reduced motion the tiles stay as still pictures');

  console.log('errors:', errs.length ? '\n  ' + errs.join('\n  ') : 'none');
  console.log(fails ? fails + ' FAILED' : 'all checks passed');
  console.log('screenshots: ' + out);
  process.exitCode = (fails || errs.length) ? 1 : 0;
  await b.close(); srv.close();
})().catch(e => { console.error(e); process.exit(1); });
