/* Playwright check for the Green Zone MO Guide, version 8.
   Serves the offline copy and walks every view on desktop (1366 px), phone (390 px) and tablet (900 px),
   in light and dark, with reduced motion on the tablet. It fails on any console or page error, any
   sideways scroll, and any check below that does not hold. Screenshots go to the shots folder.

   The pages register the service worker, as the web app does on localhost. Last, on a second server (PORT + 1), it checks the
   web app itself: the manifest and icons, the worker's install, Install the guide (#install: its live state, the steps for
   each device and browser, the Install offer, the QR code, read back with qr.js), offline reloads, kept sounds, an update,
   the installed app, and the artifact's copy (served as /artifact.html); then #install at 360 px by day and night.
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
const types = {'.html':'text/html','.webp':'image/webp','.mp4':'video/mp4','.mp3':'audio/mpeg','.png':'image/png','.jpg':'image/jpeg','.js':'text/javascript','.webmanifest':'application/manifest+json'};
/* For the web app's update check below: when set, sw.js is served as a newer build (its version and page id changed) */
let swNewer = null;
/* The site server. log, if given, collects every path asked for, with its byte range and Sec-Fetch-Dest. A film or sound
   asked for in a byte range comes from a player (Chrome marks one the service worker passes on as dest empty), and one
   asked for whole is a fetch, such as the worker's own. The web app checks run on a server of their own, PORT + 1 */
const site = log => (q, r) => {
  if (log) log.push(decodeURIComponent(q.url.split('?')[0]) + (q.headers.range ? ' ' + q.headers.range : '') + ' dest=' + (q.headers['sec-fetch-dest'] || ''));
  /* /artifact.html is the claude.ai artifact's page, with the site's media beside it, as the host serves it */
  const f = q.url.split('?')[0] === '/artifact.html' ? path.join(__dirname, '..', 'green-zone-pathways.html') : path.join(root, decodeURIComponent(q.url.split('?')[0]).replace(/^\/$/, '/index.html'));
  fs.readFile(f, (e, d) => {
    if (e){ r.writeHead(404); r.end(); return; }
    if (swNewer && q.url.split('?')[0] === '/sw.js') d = Buffer.from(swNewer(d.toString()));
    if (q.url.split('?')[0] === '/artifact.html') d = Buffer.from('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body>\n' + d + '\n</body></html>');
    /* Byte ranges, as a web host serves them, so the read-aloud narration and the films can seek */
    const type = types[path.extname(f)] || 'application/octet-stream', m = /^bytes=(\d*)-(\d*)$/.exec(q.headers.range || '');
    if (m && (m[1] || m[2])){
      const s = m[1] ? +m[1] : Math.max(0, d.length - +m[2]), t = m[1] && m[2] ? Math.min(+m[2], d.length - 1) : d.length - 1;
      r.writeHead(206, {'content-type':type, 'accept-ranges':'bytes', 'content-range':`bytes ${s}-${t}/${d.length}`, 'content-length':t - s + 1}); r.end(d.subarray(s, t + 1)); return;
    }
    r.writeHead(200, {'content-type':type, 'accept-ranges':'bytes', 'content-length':d.length}); r.end(d);
  });
};
const srv = http.createServer(site()).listen(PORT);
const U = `http://localhost:${PORT}/`;
const VIEWS = ['home','pathways','rules','tools','calc','numbers','links','intro','journey','tour','quiz','new','poster','about','install'];
let fails = 0;
const ok = (cond, msg) => { console.log((cond ? 'ok   ' : 'FAIL ') + msg); if (!cond) fails++; };

(async () => {
  const b = await chromium.launch();
  const errs = [];
  const mk = async (opts, name) => {
    const ctx = await b.newContext(opts); const p = await ctx.newPage();
    p.on('console', m => { if (m.type() === 'error') errs.push(name + ': ' + m.text()); });
    p.on('pageerror', e => errs.push(name + ' PAGEERROR: ' + e.message));
    /* Every film from media/ this page asks for, from its own requests (the server is shared by pages left open, and the
       resource timing buffer drops entries once full): none may load before a tap */
    p.films = []; p.on('request', r => { const f = new URL(r.url()).pathname; if (/^\/media\/[^/]+\.mp4$/.test(f)) p.films.push(f); });
    /* and the pictures that are not on the first screen: the journey's stops and the films' covers (23 Nov 2026) */
    p.pics = []; p.on('request', r => { const f = new URL(r.url()).pathname; if (/^\/img\/gz-0[2-6]|^\/media\/[^/]+poster\.webp$/.test(f)) p.pics.push(f); });
    return p;
  };
  const noFilm = (p, msg) => ok(!p.films.length, msg + (p.films.length ? ': ' + [...new Set(p.films)].join(', ') : ''));
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
  ok(await p.evaluate(() => { const v = document.querySelector('#vid'); return v.dataset.cover === 'media/explainer-poster.webp' && !v.hasAttribute('poster') && !v.hasAttribute('src') && v.readyState === 0; }), 'in day colours the tour has the day cover chosen, and neither cover nor film loads until the tour opens');
  noFilm(p, 'no film from media/ loads before a tap');
  ok(!p.pics.length && await p.evaluate(() => !document.querySelector('#gzboot')), 'a first open fetches no picture that is off screen (the journey\'s stops, the tour\'s cover), and the ready bar has gone' + (p.pics.length ? ': ' + p.pics.join(', ') : ''));
  ok(await p.evaluate(() => document.querySelector('#v-poster [data-sheet="1"] img').getAttribute('src') === 'poster/sheet1-thumb.webp'), 'in day colours the poster page has the day sheets');
  ok(await p.evaluate(() => APP_URL) === 'https://zaq6184-cell.github.io/green-zone-mo-guide/', 'Copy link builds links on the public web app');
  ok(await p.evaluate(() => document.querySelectorAll('#kn-a .tm img, #kn-b .tm img').length) === 2, 'Code Blue and Code Stroke tiles have their pictures');
  ok(await p.evaluate(() => ['#t-paths', '#t-rules', '#t-dc', '#t-calc', '#t-intro', '#tl-tip'].every(s => document.querySelector(s + ' .tm img'))), 'the six home tiles have their pictures');
  ok(await p.evaluate(() => { const t = document.querySelector('#t-inst'); return !!t && !t.hidden && !!t.querySelector('.ph3-i svg') && !!t.querySelector('.tag') && !!t.querySelector('a[href="#install"]'); }), 'home has the Install tile: its state, its 3D phone and a link to the steps');
  // Printed pages (12 Nov 2026): an ebook pathway links to its own pages of the ebook; a page image loads only on a tap
  { const q = await p.context().newPage(); const seen = []; q.on('request', r => { if (/\/ebook\/p\d+\.webp/.test(r.url())) seen.push(r.url()); });
    await q.goto(p.url().split('#')[0] + '#renal-colic'); await q.waitForTimeout(700);
    const tab = q.locator('#ptab [role="tab"]', {hasText:'Printed pages'}); await tab.click(); await q.waitForTimeout(200);
    const n = await q.locator('#ptab [data-epage]').count(), before = seen.length;
    await q.locator('#ptab [data-epage="53"]').click(); await q.waitForTimeout(600);
    const st = await q.evaluate(() => ({open:!document.querySelector('#lb').hidden, src:document.querySelector('#lbimg').getAttribute('src'), ok:document.querySelector('#lbimg').naturalWidth > 0, t:document.querySelector('#lbt').textContent}));
    ok(n === 2 && before === 0 && st.open && st.src === 'ebook/p53.webp' && st.ok && /page 53/.test(st.t), 'renal colic has a Printed pages tab: two pages, none loaded before a tap, page 53 opens full size' + (n === 2 && before === 0 && st.open && st.ok ? '' : ' ' + JSON.stringify({n, before, st})));
    ok(await q.evaluate(() => !tabsOf(P['gz-rules']).some(t => t.k === 'pages') && !tabsOf(P['dengue-cpg']).some(t => t.k === 'pages')), 'rules and guidelines have no Printed pages tab');
    ok(await q.evaluate(() => { const a = document.querySelector('#ptab .epg a.pill'); return !!a && a.getAttribute('href').startsWith('https://drive.google.com/file/d/') && a.getAttribute('href').endsWith('/view') && a.target === '_blank' && /noopener/.test(a.rel); }), 'Printed pages links to the whole ebook as a PDF in Google Drive, in a new tab');
    await q.close(); }
  // The abdominal pain handbook (12 Nov 2026): its 3D map loads its frames only when turned, its tabs, its own printed pages, the Malay script read aloud
  { const q = await p.context().newPage(); const seen = []; q.on('request', r => { const u = r.url(); if (/\/(abdo3d|abdo)\/|abdo-script-ms/.test(u)) seen.push(u.replace(/^.*?\/(abdo3d|abdo|audio)\//, '$1/')); });
    await q.goto(p.url().split('#')[0] + '#abdo-handbook'); await q.waitForTimeout(700);
    ok(await q.locator('#run button[data-go]').count() === 12 && await q.evaluate(() => kindOf(P['abdo-handbook']) === 'Handbook' && CAT_OF['abdo-handbook'] && CAT_OF['abdo-handbook'].k === 'abdo'), 'the abdominal pain handbook opens on its twelve sections, labelled a handbook, in the abdomen group');
    await q.goto(p.url().split('#')[0] + '#abdo-handbook--loc'); await q.waitForTimeout(900);
    const f0 = seen.filter(u => /abdo3d\/f\d/.test(u)).length;
    ok(await q.locator('[data-a3] .a3-g').count() === 9 && f0 === 0 && await q.evaluate(() => /poster\.webp$/.test(document.querySelector('.a3-img').getAttribute('src'))), 'the 3D map shows its front view and nine regions, with no turntable frame loaded' + (f0 ? ' (' + f0 + ' frames)' : ''));
    ok(await q.evaluate(() => { const g = [...document.querySelectorAll('.a3-g')].map(x => { const b = x.getBBox(); return b.x + b.width / 2; }); return g[0] < g[1] && g[1] < g[2] && document.querySelector('.a3-sr').getBoundingClientRect().left < document.querySelector('.a3-sl').getBoundingClientRect().left && /right/i.test(document.querySelector('.a3-sr').textContent); }), 'the 3D map keeps the patient\'s right on the screen\'s left, labelled');
    await q.locator('.a3-g[data-a3r="7"]').click(); await q.waitForTimeout(300);
    ok(await q.evaluate(() => /front-lit\/r7\.webp$/.test(document.querySelector('.a3-img').getAttribute('src')) && /Right lower/.test(document.querySelector('.a3-info').textContent) && !!document.querySelector('.a3-info a[href="#abdo-handbook--rg7"]')), 'tapping region 7 lights it and lists what to think of there, with a link to its step');
    await q.locator('[data-a3yaw]').fill('3'); await q.locator('[data-a3yaw]').dispatchEvent('input'); await q.waitForTimeout(900);
    ok(await q.evaluate(() => /abdo3d\/f03\.webp$/.test(document.querySelector('.a3-img').getAttribute('src')) && document.querySelector('.a3-g.on').dataset.a3r === '7') && seen.filter(u => /abdo3d\/f\d/.test(u)).length === 25, 'turning loads the 25 frames once and keeps the lit region on the new frame');
    await q.goto(p.url().split('#')[0] + '#abdo-handbook--pain'); await q.waitForTimeout(700);
    const tabs = await q.locator('#ptab [role="tab"]').allInnerTexts();
    ok(JSON.stringify(tabs) === JSON.stringify(['Quick reference', 'Sources', 'Malay script', 'Printed pages']), 'the handbook has its four tabs: Quick reference, Sources, Malay script, Printed pages (' + tabs.join(', ') + ')');
    await q.locator('#ptab [data-pt="n1"]').click(); await q.waitForTimeout(200);
    ok(await q.evaluate(() => { const a = [...document.querySelectorAll('#ptab .srcl a')]; return a.length === 42 && a.filter(x => x.target === '_blank').length === 41 && a.some(x => x.getAttribute('href') === '#dengue-cpg'); }), 'Sources lists the 42 references, each with its link (the dengue CPG opens in the guide)');
    await q.locator('#ptab [data-pt="pages"]').click(); await q.waitForTimeout(200);
    const pb = seen.filter(u => /^abdo\//.test(u)).length;
    await q.locator('#ptab [data-ppage="abdo/p07"]').click(); await q.waitForTimeout(700);
    const st = await q.evaluate(() => ({n:document.querySelectorAll('#ptab [data-ppage]').length, open:!document.querySelector('#lb').hidden, src:document.querySelector('#lbimg').getAttribute('src'), ok:document.querySelector('#lbimg').naturalWidth > 0}));
    ok(st.n === 30 && pb === 0 && st.open && st.src === 'abdo/p07.webp' && st.ok, 'the handbook\'s 30 printed pages: none loaded before a tap, page 7 opens full size' + (st.ok && pb === 0 ? '' : ' ' + JSON.stringify({pb, st})));
    await q.keyboard.press('Escape'); await q.waitForTimeout(150);
    await q.locator('#ptab [data-pt="script"]').click(); await q.waitForTimeout(200);
    ok(await q.locator('#ptab #advlist li').count() === 6 && await q.locator('#ptab .lsn[data-read="abdo-script-ms"]').count() === 1 && !seen.some(u => /abdo-script-ms/.test(u)), 'the Malay script tab has its six lines and a Listen bar, and its sound has not loaded');
    ok(await q.evaluate(() => P['abdo-handbook'].nodes.fk3.items.every(i => !/not an indication for antibiotics/.test(i)) && /Left out or changed/.test(P['abdo-handbook'].nodes.fk3.gap) && !/two IV lines/.test(P['abdo-handbook'].nodes.stab.items.join(' '))), 'the lines the source check could not confirm are left out, and their nodes say so');
    await q.close(); }
  // The department memos (12 Nov 2026): Green Zone memo steps, the Yellow Zone menu, memo cards whose pages load only on a tap
  { const q = await p.context().newPage(); const seen = []; q.on('request', r => { const u = r.url(); if (/\/memo\//.test(u)) seen.push(u.replace(/^.*?\/memo\//, 'memo/')); });
    const base = p.url().split('#')[0];
    await q.goto(base + '#gz-rules'); await q.waitForTimeout(700);
    const gopts = await q.locator('#run button[data-go]').allInnerTexts();
    ok(gopts.some(t => /Team leader of the shift/.test(t)) && gopts.some(t => /More department memos/.test(t)), 'the Green Zone rules offer the team leader and the department memos');
    await q.goto(base + '#gz-rules--gzm'); await q.waitForTimeout(700);
    ok(await q.locator('#run button[data-go]').count() === 13, 'the Green Zone memo menu has thirteen memos');
    await q.goto(base + '#gz-rules--tl'); await q.waitForTimeout(700);
    ok(await q.evaluate(() => { const o = document.querySelector('#cur .opts'), c = document.querySelector('#cur .figmemo'); return !!o && !!c && !!(o.compareDocumentPosition(c) & Node.DOCUMENT_POSITION_FOLLOWING) && c.querySelectorAll('[data-ppage]').length === 2 && /3\(1\)23/.test(c.textContent); }) && seen.length === 0, 'the team leader step shows its memo card below the options, with two pages and none loaded');
    for (const b of await q.locator('#cur .checks input').all()) await b.check();
    ok(await q.evaluate(() => document.querySelector('#cur button.opt[data-go="0"]').classList.contains('sugg')), 'ticking the three start-of-shift checks suggests running the shift');
    await q.locator('#cur button.opt[data-go="0"]').click(); await q.waitForTimeout(700);
    ok(await q.evaluate(() => document.querySelectorAll('#cur .figtl .tl-r').length === 3 && /2\.00 pm/.test(document.querySelector('#cur .figtl').textContent) && /7\.00 am/.test(document.querySelector('#cur .figtl').textContent)), 'the shift chart shows the three shifts, with the first and last case');
    await q.goto(base + '#yellow-zone'); await q.waitForTimeout(700);
    ok(await q.locator('#run button[data-go]').count() === 11, 'the Yellow Zone opens on its menu of eleven');
    await q.goto(base + '#yellow-zone--flow'); await q.waitForTimeout(600);
    ok(await q.evaluate(() => /Aliran pesakit di Zon Kuning/.test(document.querySelector('#cur').textContent)), 'the old Yellow Zone flow link still opens the flow');
    await q.goto(base + '#yellow-zone--cvcb'); await q.waitForTimeout(700);
    ok(await q.locator('#cur .checks input').count() === 21, 'the CVC care bundle lists its 21 critical steps');
    await q.locator('#cur [data-ppage="memo/2022-09-p2"]').click(); await q.waitForTimeout(800);
    const st = await q.evaluate(() => ({open:!document.querySelector('#lb').hidden, src:document.querySelector('#lbimg').getAttribute('src'), ok:document.querySelector('#lbimg').naturalWidth > 0}));
    ok(st.open && st.src === 'memo/2022-09-p2.webp' && st.ok && seen.length === 1, 'a memo page opens full size on a tap, and only then loads' + (st.ok && seen.length === 1 ? '' : ' ' + JSON.stringify({st, seen})));
    await q.keyboard.press('Escape'); await q.waitForTimeout(150);
    const mf = await q.evaluate(() => Object.entries(MEMOS).filter(([, m]) => !m.dir).flatMap(([k, m]) => m.pages.map(([n]) => `memo/${k}-p${n}.webp`)));
    const onDisk = fs.readdirSync(path.join(__dirname, '..', 'app', 'memo')).map(f => 'memo/' + f).sort();
    ok(mf.length === 98 && JSON.stringify(onDisk) === JSON.stringify([...mf].sort()), 'app/memo holds exactly the 41 pages of the 22 memos, the 4 of the pink EM Watch form, the 32 of the memos, letters and antimicrobial guides of 21 Nov 2026, and the 13 of the own-risk circular and 8 of the leptospirosis circular, and nothing else (' + onDisk.length + ' on disk)');
    ok(await q.evaluate(() => { const d = document.createElement('div'); d.innerHTML = FIGS['memo-2022-19'](); const a = d.querySelector('a.pill'); return !!a && a.href === MEMO_LIST && a.target === '_blank'; }), 'each memo card links to the department\'s own memo list');
    // EMACC follows memo (01)24 of 11 Jan 2024 (Krishna, 12 Nov 2026)
    await q.goto(base + '#emacc--need'); await q.waitForTimeout(700);
    ok(await q.evaluate(() => /blood result/i.test(document.querySelector('#cur').textContent) && !!document.querySelector('#cur .figmemo') && /3\(01\)24/.test(document.querySelector('#cur .figmemo').textContent)), 'EMACC asks what the follow-up reviews, with the 2024 memo');
    await q.goto(base + '#emacc--bku'); await q.waitForTimeout(700);
    ok(await q.evaluate(() => /day 4/.test(document.querySelector('#cur h2, #cur h3') ? document.querySelector('#cur').textContent : '') && document.querySelectorAll('#cur .emt li').length === 5 && /Counter 10/.test(document.querySelector('#cur').textContent) && !/ext 7040|EMACC box/.test(document.querySelector('#cur').textContent)), 'an urgent EMACC booking is day 4 at the earliest, at Counter 10, with the memo\'s timeline, and no 2018 booking line');
    ok(await q.evaluate(() => !P['emacc'].nodes.book && NUMS.some(n => n.lbl === 'EMACC follow-up' && n.val === 'Counter 10')), 'the 2018 booking step is gone, and Numbers sends EMACC to Counter 10');
    ok(await q.evaluate(() => Object.keys(P).every(id => Object.values(P[id].nodes).every(n => !n.fig || !/^memo-/.test(n.fig) || !!MEMOS[n.fig.slice(5)]))), 'every memo card points to a memo');
    await q.goto(base + '#missed-fractures--mf1'); await q.waitForTimeout(700);
    ok(await q.evaluate(() => /Does it show a fracture/.test(document.querySelector('#cur h2').textContent)), 'missed fractures has the department memo\'s flow');
    await q.close(); }
  // The ED pharmacy drug list (12 Nov 2026): 155 drugs as printed, found as you type, filtered by formulary category, reached from search
  { const q = await p.context().newPage(); const base = p.url().split('#')[0];
    await q.goto(base + '#pharmacy'); await q.waitForTimeout(700);
    ok(await q.evaluate(() => document.querySelectorAll('#rxl .phx').length === 155 && EDRX.items.length === 155 && EDRX.items.every((i, k) => i[0] === k + 1) && document.querySelector('#rxl .phx b').textContent === 'Acetylsalicylic Acid 100mg, Glycine 45mg Tablet' && document.querySelectorAll('#rxl .phx b')[154].textContent === 'Zinc Oxide, Benzyl Benzoate & Balsam Peru Suppository'), 'the ED pharmacy page lists the 155 drugs as printed, first to last');
    const chips = await q.locator('#rxf button').allInnerTexts();
    ok(chips.join('|').replace(/\s+/g, ' ') === 'All 155|MO may start 113|Specialist categories 28|Not in the formulary 14', 'the category filters count 155, 113, 28 and 14 (' + chips.join(', ') + ')');
    await q.locator('#rxq').fill('amox'); await q.waitForTimeout(150);
    ok(await q.evaluate(() => { const r = [...document.querySelectorAll('#rxl .phx')]; return r.length === 2 && r.every(x => x.querySelector('mark')) && r[1].querySelector('.phx-b').textContent.includes('B') && /^https:\/\/pharmacy\.moh\.gov\.my\/en\/apps\/fukkm\?generic=/.test(r[1].querySelector('a.phx-go').href) && r[1].querySelector('a.phx-go').target === '_blank'; }), 'finding "amox" leaves two drugs, highlighted, each with its category and a link to the MOH formulary');
    await q.locator('#rxq').fill(''); await q.locator('#rxf [data-rf="no"]').click(); await q.waitForTimeout(150);
    ok(await q.evaluate(() => document.querySelectorAll('#rxl .phx').length === 14 && !document.querySelector('#rxl a.phx-go')), 'Not in the formulary shows the 14, with no formulary link');
    await q.locator('#rxf [data-rf="all"]').click(); await q.waitForTimeout(150);
    await q.locator('#rxaz [data-rl="T"]').click(); await q.waitForTimeout(600);
    ok(await q.evaluate(() => { const s = document.getElementById('rx-T').getBoundingClientRect(); return s.top < innerHeight / 2 && s.top > -10; }), 'the letter T jumps to the drugs starting with T');
    ok(await q.evaluate(() => /14 Apr 2025/.test(document.querySelector('#rxsrc').textContent) && document.querySelectorAll('#rxcats .phx-c').length === 3), 'the source line gives the list\'s date, and the three categories are explained');
    ok(await hscroll(q) <= 0, 'the pharmacy page has no sideways scroll');
    await q.goto(base + '#tools'); await q.waitForTimeout(600);
    ok(await q.evaluate(() => { const t = document.querySelector('#trx'); return !!t && t.getAttribute('href') === '#pharmacy' && /155/.test(t.textContent); }), 'Shift tools has the ED pharmacy tile');
    await q.goto(base + '#search'); await q.waitForTimeout(500);
    await q.keyboard.type('celecoxib'); await q.waitForTimeout(400);
    ok(await q.evaluate(() => { const a = [...document.querySelectorAll('#gres a')]; const k = a.findIndex(x => x.dataset.rx === 'Celecoxib'); return k > 0 && a[k].getAttribute('href') === '#pharmacy' && !a[0].dataset.rx; }), 'searching a drug offers it on the ED pharmacy list, after the pathways that mention it');
    await q.locator('#gres a[data-rx="Celecoxib"]').click(); await q.waitForTimeout(700);
    ok(await q.evaluate(() => location.hash === '#pharmacy' && document.querySelector('#rxq').value === 'Celecoxib' && document.querySelectorAll('#rxl .phx').length === 1), 'opening it shows the list filtered to that drug');
    await q.close(); }
  // The HKL doctors starter pack (12 Nov 2026): New to HKL, Prescribing at HKL, the NAC regimen, the look-alike marks
  { const q = await p.context().newPage(); const base = p.url().split('#')[0], seen = []; q.on('request', r => { const u = r.url(); if (/\/sp\//.test(u)) seen.push(u.replace(/^.*?\/sp\//, 'sp/')); });
    await q.goto(base + '#new-hkl'); await q.waitForTimeout(700);
    ok(await q.locator('#run button[data-go]').count() === 11, 'New to HKL opens on its eleven topics');
    await q.goto(base + '#new-hkl--map'); await q.waitForTimeout(700);
    ok(await q.evaluate(() => document.querySelectorAll('#cur .figmemo').length === 2 && !!document.querySelector('#cur .figmemo a[href="https://linktr.ee/hkldoctors_starterpack"]')) && seen.length === 0, 'the map step shows its two sources, links the starter pack page, and loads no picture before a tap');
    await q.locator('#cur [data-ppage="sp/a09-p1"]').click(); await q.waitForTimeout(800);
    ok(await q.evaluate(() => !document.querySelector('#lb').hidden && document.querySelector('#lbimg').naturalWidth > 0) && seen.length === 1, 'the site plan opens on a tap');
    await q.keyboard.press('Escape'); await q.waitForTimeout(150);
    await q.goto(base + '#prescribing'); await q.waitForTimeout(700);
    ok(await q.locator('#run button[data-go]').count() === 19, 'Prescribing at HKL opens on its nineteen topics');
    // Two documents that open only with an MOH sign-in (12 Nov 2026): the facts in the guide's own words, the picture their link-page tile
    await q.goto(base + '#prescribing--ams'); await q.waitForTimeout(700);
    ok(await q.evaluate(() => { const c = document.querySelector('#cur'); return /Antimicrobial Request Form/.test(c.innerText) && /72 hours/.test(c.innerText) && /OPAT/.test(c.innerText) && !!c.querySelector('.figmemo [data-ppage="sp/tile-c01"]') && /MOH sign-in/.test(c.querySelector('.figmemo').innerText) && /7 Apr 2026/.test(c.innerText); }) && !seen.some(f => /tile-c01/.test(f)), 'the stewardship topic gives the policy\'s rules (request form, 72-hour review, OPAT readmission through the ED), with its tile card and date, and loads no picture before a tap');
    await q.goto(base + '#prescribing--animal'); await q.waitForTimeout(700);
    ok(await q.evaluate(() => { const c = document.querySelector('#cur'); return /darurat/.test(c.innerText) && /halal/.test(c.innerText) && /consent/.test(c.innerText) && !!c.querySelector('.figmemo [data-ppage="sp/tile-b01"]') && /HKL\/FAR\/GP-19/.test(c.innerText); }), 'the animal source topic gives the good practice, the emergency case and the religions\' needs, with its tile card');
    await q.goto(base + '#prescribing--check'); await q.waitForTimeout(700);
    ok(await q.evaluate(() => document.querySelectorAll('#cur .checks input').length === 8 && !!document.querySelector('#cur .opts + .figmemo [data-ppage="sp/tile-b04"]')), 'the prescription check has eight items, with its source card (a link-page tile) below the options');
    const spf = await q.evaluate(() => Object.entries(MEMOS).filter(([, m]) => m.dir === 'sp').flatMap(([k, m]) => m.pages.map(([n]) => (typeof n === 'number' ? `sp/${k}-p${n}` : n === 'tile' ? `sp/tile-${k}` : `sp/${n}`) + '.webp')));
    ok(spf.length > 30 && spf.every(f => fs.existsSync(path.join(__dirname, '..', 'app', f))), 'every starter pack source card points to a picture in app/sp (' + spf.length + ')');
    ok(await q.evaluate(() => Object.values(SPFIGS).flat().every(k => !!MEMOS[k])), 'every multi-source figure names known sources');
    await q.goto(base + '#calc-nac'); await q.waitForTimeout(700);
    await q.locator('#v-calc input').first().fill('60'); await q.waitForTimeout(400);
    ok(await q.evaluate(() => /12000 mg/.test(document.querySelector('#v-calc').innerText) && /60 ml of IV NAC/.test(document.querySelector('#v-calc').innerText) && /300 mg\/kg over 20 hours/.test(document.querySelector('#v-calc').innerText)), 'the NAC calculator gives the circular\'s 60 kg example: 12000 mg in 60 ml, three bags over 20 hours');
    ok(await q.evaluate(() => P['paracetamol-overdose'].dept.some(d => /Lampiran 1a/.test(d.src) && d.items.some(i => /31\.25 ml\/hr/.test(i)))), 'the paracetamol overdose entry carries the hospital\'s regimen as a dated note');
    await q.goto(base + '#pharmacy'); await q.waitForTimeout(700);
    ok(await q.evaluate(() => /Look-alike sound-alike with Antirabies Immunoglobulin/.test(document.querySelector('#rxl [data-rxn="133"]').textContent) && document.querySelectorAll('#rxl .phx-lasa').length === 18), 'the ED pharmacy list marks its nine look-alike pairs (rabies vaccine with rabies immunoglobulin)');
    await q.close(); }
  // The ED dosing and dilution guide (12 Nov 2026): 116 drugs, each opening its own printed pages on a tap, 31 on the high alert list
  { const q = await p.context().newPage(); const base = p.url().split('#')[0], seen = []; q.on('request', r => { const u = r.url(); if (/\/sp\/c17-/.test(u)) seen.push(u.replace(/^.*?\/sp\//, 'sp/')); });
    await q.goto(base + '#dilution'); await q.waitForTimeout(700);
    ok(await q.evaluate(() => EDDG.items.length === 116 && EDDG.items.every((i, k) => i[0] === k + 1 && i[2] - i[4] === 8 && i[3] - i[5] === 8 && i[3] >= i[2]) && document.querySelectorAll('#dgl .phx').length === 116), 'the dilution guide lists its 116 drugs, each with its pages (printed page = PDF page - 8)');
    const dgf = await q.evaluate(() => EDDG.items.flatMap(i => Array.from({length:i[3] - i[2] + 1}, (_, k) => 'sp/c17-p' + (i[2] + k) + '.webp')));
    ok(dgf.every(f => fs.existsSync(path.join(__dirname, '..', 'app', f))), 'every page a drug opens is in app/sp (' + dgf.length + ' pills)');
    const dgOn = fs.readdirSync(path.join(__dirname, '..', 'app', 'sp')).filter(f => /^c17-p/.test(f));
    ok(dgOn.length === 227 && dgOn.every(f => dgf.includes('sp/' + f)), 'app/sp holds exactly the 227 pages the drugs open, and no other page of the guide');
    const dchips = await q.locator('#dgf button').allInnerTexts();
    ok(dchips.join('|').replace(/\s+/g, ' ') === 'All 116|High alert 31', 'the filters count 116 and 31 on the high alert list (' + dchips.join(', ') + ')');
    ok(seen.length === 0, 'no page of the guide loads before a tap');
    await q.locator('#dgq').fill('noradr'); await q.waitForTimeout(150);
    ok(await q.evaluate(() => { const r = [...document.querySelectorAll('#dgl .phx')]; return r.length === 1 && !!r[0].querySelector('mark') && /high alert/.test(r[0].textContent) && r[0].querySelectorAll('[data-ppage]').length === 5 && r[0].querySelector('[data-ppage]').dataset.ppage === 'sp/c17-p148'; }), 'finding "noradr" leaves noradrenaline, marked high alert, with its five pages from printed page 140');
    await q.locator('#dgl [data-ppage="sp/c17-p148"]').click(); await q.waitForTimeout(900);
    ok(await q.evaluate(() => !document.querySelector('#lb').hidden && document.querySelector('#lbimg').naturalWidth > 0 && /page 140/.test(document.querySelector('#lb').textContent)) && seen.length === 1 && seen[0] === 'sp/c17-p148.webp', 'its first page opens on a tap, and only that page loads');
    await q.keyboard.press('Escape'); await q.waitForTimeout(150);
    await q.locator('#dgq').fill(''); await q.locator('#dgf [data-df="ham"]').click(); await q.waitForTimeout(150);
    ok(await q.evaluate(() => document.querySelectorAll('#dgl .phx').length === 31 && [...document.querySelectorAll('#dgl .phx')].every(r => r.querySelector('.phx-lasa'))), 'High alert shows the 31, each marked');
    ok(await q.evaluate(() => { const r = document.querySelector('#dgl [data-dgn="64"] .dg-note'); return !!r && /600 mg fentanyl/.test(r.textContent) && /10 mcg\/ml/.test(r.textContent) && /Still to confirm/.test(r.textContent) && document.querySelectorAll('#dgl .dg-note').length === 1 && CONFIRM.some(c => /page 126/.test(c)); }), 'midazolam carries the note on page 126\'s fentanyl figure, before its pages are opened, and it is under Still to confirm');
    await q.locator('#dgf [data-df="all"]').click(); await q.waitForTimeout(150);
    await q.locator('#dgaz [data-dl="S"]').click(); await q.waitForTimeout(600);
    ok(await q.evaluate(() => { const s = document.getElementById('dg-S').getBoundingClientRect(); return s.top < innerHeight / 2 && s.top > -10; }), 'the letter S jumps to the drugs starting with S');
    ok(await q.evaluate(() => /3rd edition, January 2026/.test(document.querySelector('#dgsrc').textContent) && /covered/.test(document.querySelector('#dgsrc').textContent)), 'the source line gives the edition and says what is covered on the pages');
    ok(await q.evaluate(() => { const was = DG_REMOTE; DG_REMOTE = true; renderDg(); renderDgStatic(); const a = document.querySelector('#dgl [data-dgn="64"] a.pill'), n = document.querySelectorAll('#dgl a.pill').length, b = document.querySelectorAll('#dgl button.pill').length, s = /opens from the web app/.test(document.querySelector('#dgsrc').textContent); DG_REMOTE = was; renderDg(); renderDgStatic(); return !!a && a.href === APP_URL + 'sp/c17-p133.webp' && a.target === '_blank' && n === 227 && b === 0 && s && document.querySelectorAll('#dgl button.pill').length === 227; }), 'in the claude.ai artifact each of the 227 pages opens from the web app in a new tab, and the source line says so');
    ok(await q.evaluate(() => { const g = document.querySelector('#dgicu'); return !!g && /Special case/i.test(g.innerText) && /5th edition, April 2026/.test(g.innerText) && /only in that ICU/.test(g.innerText) && !!g.querySelector('.figmemo [data-ppage="sp/tile-c16"]') && CONFIRM.some(c => /general ICU's own dilution guide/.test(c)); }), 'the general ICU guide is a special case below the list, described in the guide\'s own words with its tile card, and backs the page 126 query');
    ok(await hscroll(q) <= 0, 'the dilution guide has no sideways scroll');
    await q.goto(base + '#tools'); await q.waitForTimeout(600);
    ok(await q.evaluate(() => { const t = document.querySelector('#tdg'); return !!t && t.getAttribute('href') === '#dilution' && /116/.test(t.textContent); }), 'Shift tools has the dilution guide tile');
    await q.goto(base + '#search'); await q.waitForTimeout(500);
    await q.keyboard.type('vasopressin'); await q.waitForTimeout(400);
    ok(await q.evaluate(() => { const a = document.querySelector('#gres a[data-dg="VASOpressin"]'); return !!a && a.getAttribute('href') === '#dilution'; }), 'searching a drug offers it in the dilution guide');
    await q.locator('#gres a[data-dg="VASOpressin"]').click(); await q.waitForTimeout(700);
    ok(await q.evaluate(() => location.hash === '#dilution' && document.querySelector('#dgq').value === 'VASOpressin' && document.querySelectorAll('#dgl .phx').length === 1), 'opening it shows the guide filtered to that drug');
    await q.close(); }
  if (guardRe('starterpack')) ok(await p.evaluate(re => !new RegExp(re).test(JSON.stringify(P) + JSON.stringify(MEMOS) + document.body.textContent), guardRe('starterpack')), 'no signer, staff name or registration number from the starter pack documents is copied');
  if (guardRe('pharmacy')) ok(await p.evaluate(re => !new RegExp(re).test(JSON.stringify(EDRX) + document.body.textContent), guardRe('pharmacy')), 'no name or registration number of the pharmacists who signed the list is copied');
  /* since 26 Nov 2026 the current alerts card can sit above the bento, so bring the tiles on screen first */
  await p.evaluate(() => document.querySelector('#t-paths').scrollIntoView({block:'center'})); await p.waitForTimeout(900);
  ok(await p.evaluate(() => { const on = ['#t-paths', '#t-rules', '#t-dc', '#t-calc', '#t-intro', '#tl-tip'].map(s => document.querySelector(s + ' .tm')).filter(el => { const r = el.getBoundingClientRect(); return (Math.min(r.bottom, innerHeight) - Math.max(r.top, 0)) / r.height >= .5; }); return on.length > 0 && on.every(el => el.querySelector('video')); }), 'the home tiles on screen start their loops');
  await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(300);
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
  ok(await p.evaluate(() => { const v = document.querySelector('#vid'); return v.getAttribute('src') === 'media/green-zone-explainer-720p.mp4' && v.getAttribute('poster') === 'media/explainer-poster.webp' && v.readyState === 0; }), 'opening the tour puts in the day film, which waits for play (preload none)');
  noFilm(p, 'every view, the tour included, loads no film from media/ before a tap');
  // Topic tiles: pictures, and loops while Moving tiles is on (on by default)
  await go(p, '#pathways', 900);
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm img').length) === 11, 'the eleven topic tiles have their pictures (Scores and rules since 16 Nov 2026)');
  ok(await p.waitForFunction(() => [...document.querySelectorAll('#libcats .tm img')].every(i => i.complete && i.naturalWidth === 640), null, {timeout:5000}).then(() => true, () => false), 'every topic picture loads');
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm video').length) > 0, 'the topic tiles start their loops (Moving tiles is on by default)');
  ok(await p.evaluate(() => document.querySelectorAll('.libsec .lh .tm img').length) >= 8, 'the Pathways section bars carry their topic pictures');
  await p.fill('#libq', 'co'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm video').length) > 0, 'typing in the filter keeps the tile loops');
  await p.fill('#libq', ''); await p.waitForTimeout(150);
  // Library filter and stars
  await go(p, '#pathways');
  ok(await p.evaluate(() => document.querySelectorAll('#libgrid .pc').length === Object.keys(P).length && Object.keys(P).length >= 44), `library shows a card for each of the ${await p.evaluate(() => Object.keys(P).length)} entries`);
  ok(await p.evaluate(() => document.querySelector('#libf [data-f="ebook"] small').textContent === '23' && document.querySelector('#libf [data-f="rules"] small').textContent === '24' && document.querySelector('#libf [data-f="cpg"] small').textContent === String(Object.keys(P).filter(id => P[id].grp === 'cpg').length)), 'the Ebook filter still counts the 23 ebook pathways (the CPGs are not), rules 24, and Guidelines every CPG entry');
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
  console.log('     search ->', await p.evaluate(() => [...document.querySelectorAll('#gres a')].slice(0, 5).map(a => a.getAttribute('href')).join(' ')));
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
  ok(await p.evaluate(() => getComputedStyle(document.querySelector('.thumbbar')).display === 'none' && getComputedStyle(document.querySelector('.run-acts')).display !== 'none' && !!document.querySelector('.run-acts [data-pin]') && [...document.querySelectorAll('#run [data-save]')].every(b => b.getAttribute('aria-pressed') === 'true')), 'desktop: the step actions stay at the top, with Pin, and both Save buttons show the save');
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
  ok(await p.evaluate(() => document.querySelectorAll('#cxlist .cxc').length === 56 && document.querySelectorAll('#cxlist .cxl').length === 6), 'the hub lists 56 calculators and 6 outside links (5 PEMCalc, 1 MDCalc: the QTc)');
  ok(await p.evaluate(() => [...document.querySelectorAll('#cxlist .cxl a')].every(a => a.target === '_blank' && /noopener/.test(a.rel) && (a.href.startsWith('https://pemcalc.com/') || a.href.startsWith('https://www.mdcalc.com/calc/')) && /(PEMCalc|MDCalc), outside site/.test(a.closest('.pc').textContent))), 'the PEMCalc and MDCalc links open in a new tab and say they are an outside site');
  ok(await p.evaluate(() => document.querySelectorAll('#cxcats button').length === 9 && document.querySelectorAll('#cxcats .tm img').length === 9), 'the nine group tiles have their pictures');
  ok(await p.evaluate(() => document.querySelectorAll('#cxcats .tm video').length > 0), 'the calculator group tiles start their loops');
  await p.screenshot({path:out + '/d-calc-hub.png', fullPage:true});
  await p.click('#cxcats [data-cg="scores"]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => [...document.querySelectorAll('#cxlist .cxc')].filter(r => !r.hidden).map(r => r.dataset.id).sort().join() === 'abcd2,alvarado,apef,ciwa,curb,mcisaac,mews,news2,qsofa,sah,wells' && [...document.querySelectorAll('#cxlist .cxl')].filter(r => !r.hidden).length === 0), 'the Scores tile shows its eleven, with ABCD2 and Alvarado now built in and no outside link; was: the Scores tile shows the asthma action plan zones, CURB-65, Wells and McIsaac, with ABCD2, Alvarado and Centor on MDCalc');
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
  ok(await p.evaluate(() => document.querySelector('#couts .verdict a').getAttribute('href') === '#acs--obs' && [...document.querySelectorAll('#couts .cx-links a')].some(a => a.getAttribute('href') === '#calc-timi')), 'all seven Obsess criteria start the protocol, with the guide\'s own TIMI calculator beside it; was: the TIMI score on MDCalc beside it');

  // 16 Nov 2026: the calculators built from their own sources (data24.js), in place of MDCalc links
  {
    const r = await p.evaluate(() => {
      const T = (id, set) => { cState[id] = {}; for (const [k, v] of Object.entries(set)) cPut(id, k, v); const r = CALCS[id].run(calcVals(id).v); const o = Array.isArray(r) ? {outs:r} : (r || {}); return {outs:(o.outs || []).map(x => x[0] + '=' + x[1]).join(' | '), href:o.verdict ? o.verdict.href : ''}; };
      const ck = (n, t) => Array.from({length:n}, (_, i) => t.includes(i)), w0 = calcMem.wt;
      const out = {
        timi: T('timi', {t:ck(7, [0, 1])}), heart: T('heart', {hr0:'1', hr1:'1', hr2:'1', hr3:'1', hr4:'1'}), cthr: T('cthr', {h:ck(5, []), h_none:true, m:ck(2, [0])}),
        cspine: T('cspine', {h:ck(3, []), h_none:true, l:ck(5, [1]), rot:'able'}), cspx: T('cspine', {h:ck(3, [0])}), nexus: T('nexus', {n:ck(5, [0, 1, 2, 3])}),
        wellspe: T('wellspe', {w:ck(7, [0, 2])}), ottawa: T('ottawa', {j:'kn', r_kn:ck(P['xray-guide'].nodes.kn.items.length, [0])}),
        chads: T('chads', {ag:'75', c:ck(6, [1])}), hasbled: T('hasbled', {b:ck(9, [0, 3, 6])}), mews: T('mews', {mw0:'3', mw1:'4', mw2:'3', mw3:'1', mw4:'0'}),
        abcd2: T('abcd2', {a:ck(3, [0, 1, 2]), cf:'weak', du:'60'}), abcdlo: T('abcd2', {a:ck(3, [0]), cf:'speech', du:'10'}), sah: T('sah', {s:ck(6, []), s_none:true}),
        perc: T('perc', {g:'low', p:ck(8, [0, 1, 2, 3, 4, 5, 6, 7])}), percnot: T('perc', {g:'not'}), ddimer: T('ddimer', {pr:'low', yrs:'72', dd:'650'}), ddhigh: T('ddimer', {pr:'high', yrs:'72'}),
        sfsr: T('sfsr', {f:ck(5, [1])}), csrs: T('csrs', {c:ck(7, [1, 3]), dx:'card'}), csvv: T('csrs', {c:ck(7, [0]), dx:'vv'}), alvarado: T('alvarado', {a:ck(8, [2, 3, 6])}),
        qsofa: T('qsofa', {q:ck(3, [0, 2])}), news2: T('news2', {sc:'1', rr:'22', sp:'95', o2:'Air', sbp:'105', pr:'95', cn:'Alert', tp:'38.5'}),
        news2s2: T('news2', {sc:'2', rr:'16', sp:'95', o2:'Oxygen', sbp:'120', pr:'80', cn:'Alert', tp:'37'}), news2red: T('news2', {sc:'1', rr:'16', sp:'97', o2:'Air', sbp:'120', pr:'80', cn:'CVPU', tp:'37'}),
        ciwa: T('ciwa', {cw0:'1', cw1:'1', cw2:'1', cw3:'1', cw4:'1', cw5:'1', cw6:'1', cw7:'1', cw8:'1', cw9:'0'}),
        burns: T('burns', {who:'adult', rg:ck(8, [1, 3]), wt:'70', hrs:'2', given:'1000', co:'3'}), burnsch: T('burns', {who:'child', tbsa:'8', wt:'20'}), wtage: T('wtage', {yrs:'5'}),
        vit23: T('vitals', {vband:'2–3 y', vhr:'150', vrr:'30'}), vitat: T('vitals', {vband:'0–3 m', vhr:'143', vrr:'24'}), vitbirth: T('vitals', {vband:'Birth', vhr:'120'}), vit812: T('vitals', {vband:'8–12 y', vhr:'100'})};
      calcMem.wt = w0; for (const id of Object.keys(out)) delete cState[id]; delete cState.cspine; delete cState.abcd2; delete cState.perc; delete cState.ddimer; delete cState.csrs; delete cState.news2; delete cState.burns; delete cState.vitals; return out;
    });
    const eq = (k, outs, href) => ok(r[k].outs === outs && (href == null || r[k].href === href), k + ': ' + outs + (href ? ' >> ' + href : '') + (r[k].outs === outs && (href == null || r[k].href === href) ? '' : ' (got ' + r[k].outs + ' >> ' + r[k].href + ')'));
    eq('timi', 'TIMI for UA/NSTEMI=2 of 7', '#acs-cpg--ind');
    eq('heart', 'HEART score=5 of 10', '#acs-cpg--ind');
    eq('cthr', 'Canadian CT Head Rule=Medium risk', '#head-injury-cpg--imm');
    eq('cspine', 'Canadian C-spine Rule=No radiography', '#head-injury-cpg--ccrok');
    eq('cspx', 'Canadian C-spine Rule=Radiography', '#head-injury-cpg--ccrx');
    eq('nexus', 'Criteria met=4 of 5', '#head-injury-cpg--nexx');
    eq('wellspe', 'PE Wells score=4.5', '#vte-cpg--pelik');
    eq('ottawa', 'Ottawa knee rule=Film needed');
    eq('chads', 'CHA2DS2-VASc=3 of 9 | Adjusted stroke rate=3.20% a year', '#ed-scores--chad2');
    eq('hasbled', 'HAS-BLED=3 of 9', '#ed-scores--hbhi');
    eq('mews', 'MEWS=4 of 14', '#ed-scores--mew3');
    eq('abcd2', 'ABCD2=7 of 7 | Johnston et al.=High risk', '#ed-scores--abcdhi');
    eq('abcdlo', 'ABCD2=3 of 7 | Johnston et al.=Low risk', '#ed-scores--abcdlo');
    eq('sah', 'Ottawa SAH rule=Not required by the rule', '#ed-scores--sahno');
    eq('perc', 'Criteria met=8 of 8', '#ed-scores--percneg');
    eq('percnot', 'PERC=Does not apply', '#vte-cpg--pewells');
    eq('ddimer', 'Cut-off=720 \u00b5g/L | D-dimer 650 \u00b5g/L=Below the cut-off');
    eq('ddhigh', 'Age-adjusted cut-off=Does not apply', '#vte-cpg--pelik');
    eq('sfsr', 'San Francisco Syncope Rule=Not low risk', '#ed-scores--sfhi');
    eq('csrs', 'Canadian Syncope Risk Score=5 | 30-day risk=19.7%', '#ed-scores--csh');
    eq('csvv', 'Canadian Syncope Risk Score=-3 | 30-day risk=0.4%', '#ed-scores--csvl');
    eq('alvarado', 'Alvarado score=5 of 10', '#ed-scores--alv5');
    eq('qsofa', 'qSOFA=2 of 3', '#ed-scores--qs2');
    eq('news2', 'NEWS2=6 | Parameters that score=5 of 7', '#ed-scores--nw5');
    eq('news2s2', 'NEWS2=4 | Parameters that score=2 of 7', '#ed-scores--nw0');
    eq('news2red', 'NEWS2=3 | Parameters that score=1 of 7', '#ed-scores--nw3');
    eq('ciwa', 'CIWA-Ar=9 of 67', '#ed-scores--cw0');
    eq('burns', 'TBSA=27% | First 24 hours=5670 ml | Starting rate=306 ml/hr | Next 16 hours=177 ml/hr | Urine output target=35\u201370 ml/hr', '#ed-scores--bfx');
    eq('burnsch', 'TBSA=8%', '#ed-scores--bmin');
    eq('wtage', 'Formula then in use=18 kg | Luscombe and Owens=22 kg');
    /* Fleming centiles (Web Tables 4 and 5), each case read off the table by hand */
    eq('vit23', 'Heart rate, healthy children (2–3 y)=Median 110 | Heart rate 150=Above the 99th | Breathing rate, healthy children (2–3 y)=Median 28 | Breathing rate 30=Median to 75th', '#children');
    eq('vitat', 'Heart rate, healthy children (0–3 m)=Median 143 | Heart rate 143=At the median | Breathing rate, healthy children (0–3 m)=Median 43 | Breathing rate 24=Below the 1st', '#children');
    eq('vitbirth', 'Heart rate, healthy children (Birth)=Median 127 | Heart rate 120=25th to median | Breathing rate=No row for birth', '#children');
    eq('vit812', 'Heart rate, healthy children (8–12 y)=Median 84 | Heart rate 100=75th to 90th | Breathing rate, healthy children (8–12 y)=Median 19', '#children');
    ok(await p.evaluate(() => {
      const asc = r => r.length === 8 && r.slice(1).every((x, i, a) => Number.isInteger(x) && (i === 0 || x > a[i - 1]));
      return FLEMING_RR.length === 13 && FLEMING_HR.length === 14 && FLEMING_RR.every(asc) && FLEMING_HR.every(asc)
        && FLEMING_HR.slice(1).map(r => r[0]).join() === FLEMING_RR.map(r => r[0]).join() && FLEMING_HR[0].join() === 'Birth,90,107,116,127,138,148,164'
        && FLEMING_RR[12].join() === '15–18 y,11,13,15,16,18,19,22' && FLEMING_HR[13].join() === '15–18 y,43,58,65,73,83,92,104';
    }), 'Fleming: 13 breathing-rate and 14 heart-rate bands, seven rising centiles in each, birth for heart rate only, the first and last rows as printed');
    ok(await p.evaluate(() => FLEMING_HR.every(r => { cState.vitals = {}; cPut('vitals', 'vband', r[0]); cPut('vitals', 'vhr', String(r[7] + 1)); cPut('vitals', 'vrr', '30'); const o = CALCS.vitals.run(calcVals('vitals').v); delete cState.vitals;
      return o.verdict.cls === 'next' && !/\bnormal\b/i.test(JSON.stringify(o.outs) + o.verdict.h + o.verdict.p) && o.outs[1][1] === 'Above the 99th'; })),
      'Fleming: in every band the verdict is neutral, the word normal never appears, and a rate one above the 99th centile says so');
    ok(await p.evaluate(() => { const l = CALC_LINKS.find(x => /vitalsigns/.test(x.href)); return l && l.t === 'Blood pressure and SpO2 by age' && P['ed-scores'].nodes.vitals && P['ed-scores'].nodes.menu.opts.some(o => o[1] === 'vitals') && (P.children.see || []).some(s => s[0] === '#ed-scores--vitals'); }),
      'PEMCalc stays linked for blood pressure and SpO2 only; the scores entry has the Fleming step, and Children in the ED links to it');
    ok(await p.evaluate(() => CALC_LINKS.length === 6 && CALC_LINKS.filter(l => l.site === 'MDCalc').map(l => l.t).join() === 'Corrected QT interval (QTc)'), 'MDCalc is linked for the QTc only; the other scores are built in');
    ok(await p.evaluate(() => P['ed-scores'].refs.length === 17 && CATS.some(c => c.k === 'scores' && c.ids.includes('ed-scores')) && Object.keys(P['ed-scores'].nodes).length > 40), 'the scores entry lists its seventeen sources and has its own topic group');
    ok(await p.evaluate(() => CONFIRM.some(c => /D-dimer assay the HKL laboratory runs/.test(c) && /\.160|before 160/.test(c) && /CIWA-Ar of 10/.test(c))), 'the D-dimer assay, the AF CPG footnote, the SAH age, burns and alcohol withdrawal are under Still to confirm');
    await go(p, '#calc-news2', 400);
    await p.fill('#cf-rr', '26'); await p.fill('#cf-sp', '91'); await p.fill('#cf-sbp', '88'); await p.fill('#cf-pr', '135'); await p.fill('#cf-tp', '39.5'); await p.waitForTimeout(200);
    ok(await p.evaluate(() => /NEWS2\s*14/.test(document.querySelector('#couts').textContent.replace(/\s+/g, ' ')) && document.querySelector('#couts .verdict a').getAttribute('href') === '#ed-scores--nw7'), 'NEWS2 typed in the page: respiration 26, SpO2 91, systolic 88 and pulse 135 score 3 each and 39.5 °C scores 2: 14, the emergency response step');
    // (the scores entry itself is not opened here: opening an entry adds it to Recent, and this part of the test checks that the calculators store nothing)
  }
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
  /* Every entry opens on a banner: an ebook pathway takes its topic's glass loop, and answering keeps the loop playing (10 Nov 2026) */
  ok(await p.evaluate(() => Object.keys(P).every(id => P[id].hero || (catOf(id) && TILE_KEYS.has(catOf(id).k)))), 'every entry has a banner picture, its own or its topic picture');
  await go(p, '#renal-colic', 400);
  ok(await p.waitForFunction(() => { const h = document.querySelector('#run .run-hero.topic'), i = h && h.querySelector('.tm img'); return !!(h && h.classList.contains('t-teal') && i && i.complete && i.naturalWidth === 640 && /Renal colic/.test(h.textContent)); }, null, {timeout:5000}).then(() => true, () => false), 'an ebook pathway opens on its topic banner (renal colic: the teal abdomen picture)');
  ok(await p.waitForFunction(() => !!document.querySelector('#run .run-hero .tm video'), null, {timeout:5000}).then(() => true, () => false), 'and its topic loop starts');
  await p.evaluate(() => { document.querySelector('#run .run-hero .tm video').dataset.mark = 'kept'; });
  await p.click('#cur button.opt'); await p.waitForTimeout(300);
  ok(await p.evaluate(() => { const v = document.querySelector('#run .run-hero .tm video'); return !!v && v.dataset.mark === 'kept' && state.trail.length === 1; }), 'answering keeps the same loop playing, it does not restart');
  await go(p, '#dengue-cpg', 400);
  const dtabs = await p.evaluate(() => [...document.querySelectorAll('#ptab [role="tab"]')].map(b => b.textContent).join('|'));
  ok(dtabs === 'Home care advice|Groups and zones|Fluids|Tests|Shock|Course and care|Quick Reference, 2026|References', `the dengue CPG has its eight tabs (${dtabs})`);
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
  noFilm(p, 'up to this first film tap, no film from media/ has loaded on this page');
  await p.click('#leaf .lfilm-b'); await p.waitForTimeout(400);
  ok(await p.evaluate(() => { const v = document.querySelector('#leaf .lfilm video'); return !!v && v.src.endsWith('media/dengue-home-720.mp4') && v.controls && reader.paused; }), 'tapping the film card swaps in the player and stops the narration');
  ok(Object.values(await p.evaluate(() => FILMS)).every(f => Object.keys(f).every(l => ['src', 'cover', 'thumb'].every(k => fs.existsSync(path.join(__dirname, '..', 'app', f[l][k]))) && !/FILM_/.test(f[l].d))), 'every film (leaflets, advice and the What\'s new film), cover and thumbnail exists, with its length written');
  await p.click('#tp-leaflet [data-leaf="ms"]'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => reader.paused && document.querySelector('#leaf .lsn').dataset.read === 'leaf-dengue-ms' && !document.querySelector('.reading, .rl-on')), 'switching to Bahasa Melayu stops the English narration and offers the Malay one');
  ok(await p.evaluate(() => { const box = document.querySelector('#leaf .lsn'), L = READ['leaf-dengue-ms'].lines; return L.length === document.querySelectorAll('#leaf .leaf-t, #leaf .leaf-g > h5, #leaf .leaf-g > p, #leaf .leaf-g li').length && L.every(l => readLine(box, l[1], l[2])); }), 'every Malay leaflet line has its own mark on its own element');
  ok(await p.evaluate(() => (document.querySelector('#leaf .lfilm-b') || {}).dataset?.film === 'media/dengue-home-ms-720.mp4' && !document.querySelector('#leaf video')), 'the Malay leaflet offers the Malay film');
  await p.click('#leaf .lsn-b'); await p.waitForTimeout(800);
  await go(p, '#home', 300);
  ok(await p.evaluate(() => reader.paused), 'leaving the page stops the narration');
  await go(p, '#mild-tbi', 400); await p.click('#ptab [data-pt="advice"]'); await p.waitForTimeout(200);
  ok(await p.evaluate(() => (document.querySelector('#tp-advice .lsn') || {}).dataset?.read === 'adv-tbi-en' && READ['adv-tbi-en'].lines.length === document.querySelectorAll('#tp-advice #advlist > li').length), 'the mild head injury advice has its Listen bar, with a mark for each advice line');
  for (const [h, k] of [['#dengue', 'adv-dengue-en'], ['#asthma-zone', 'adv-asthma-en'], ['#gastroenteritis', 'adv-gastro-en'], ['#renal-colic', 'adv-renal-en'], ['#abdominal-pain', 'adv-abdo-en'], ['#hypoglycaemia', 'adv-hypo-en']]){
    await go(p, h, 400); await p.click('#ptab [data-pt="advice"]'); await p.waitForTimeout(150);
    ok(await p.evaluate(k => (document.querySelector('#tp-advice .lsn') || {}).dataset?.read === k && READ[k].lines.length === document.querySelectorAll('#tp-advice #advlist > li').length, k), 'the advice of ' + h.slice(1) + ' has its Listen bar, with a mark for each advice line');
  }
  await go(p, '#cancer-pain-cpg', 400); await p.click('#ptab [data-pt="leaflet"]'); await p.waitForTimeout(150);
  for (const lg of ['en', 'ms']){
    await p.click('#tp-leaflet [data-leaf="' + lg + '"]'); await p.waitForTimeout(150);
    ok(await p.evaluate(lg => { const box = document.querySelector('#leaf .lsn'), L = READ['leaf-cancerpain-' + lg].lines; return box.dataset.read === 'leaf-cancerpain-' + lg && L.length === document.querySelectorAll('#leaf .leaf-t, #leaf .leaf-g > h5, #leaf .leaf-g > p, #leaf .leaf-g li').length && L.every(l => readLine(box, l[1], l[2])) && document.querySelector('#leaf .lfilm-b').dataset.film === 'media/cancer-pain-home' + (lg === 'ms' ? '-ms' : '') + '-720.mp4'; }, lg), 'every line of the cancer pain leaflet (' + lg + ') has its own mark, and its film in the same language (23 Nov 2026)');
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
  ok(await p.evaluate(() => [...document.querySelectorAll('#gres a')].slice(0, 6).some(a => ['#dengue-cpg', '#calc-dfluid'].includes(a.getAttribute('href')))), 'searching "fluid quota" finds the dengue CPG');
  await p.fill('#gq', 'denggi'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => [...document.querySelectorAll('#gres a')].slice(0, 6).some(a => a.getAttribute('href') === '#dengue-cpg')), 'searching in Malay ("denggi") finds it through the leaflet');
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
  ok(await p.evaluate(() => [...document.querySelectorAll('#gres a')].slice(0, 6).some(a => a.getAttribute('href').startsWith('#gout-cpg'))), 'searching "colchicine" finds the gout CPG');
  await p.fill('#gq', 'peak flow action plan'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => [...document.querySelectorAll('#gres a')].slice(0, 6).some(a => ['#calc-apef', '#asthma-cpg'].includes(a.getAttribute('href')))), 'searching "peak flow action plan" finds the asthma CPG or its calculator');
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
  ok(await p.evaluate(() => !!document.querySelector('#jclip').getAttribute('poster')) && new Set(p.pics.filter(f => /^\/img\/gz-0/.test(f))).size === 5, 'the journey\'s pictures load once its page opens, all five stops');
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
  if (guardRe('memos')) ok(await p.evaluate(re => !new RegExp(re).test(JSON.stringify(P) + JSON.stringify(MEMOS) + document.body.textContent), guardRe('memos')), 'no signer, staff name, registration or phone number from the department memos is copied');
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
  ok(await p.evaluate(() => P['snakebite-moh'].nodes.rxe.items.some(s => s.includes('1 mcg/min')) && !CONFIRM.some(c => c.startsWith('LA OT')) && P['referral-rules'].nodes.orthoc.items.some(s => s.includes('6 hours of the orthopaedic MO')) && P['referral-rules'].nodes.orthoc.items.some(s => s.includes('within 2 hours of the referral')) && P['referral-rules'].nodes.orthoc.items.some(s => s.includes('Orthopaedic Ward first')) && !JSON.stringify(P).includes('Which limit applies')), 'settled on 10 Nov 2026: the adult adrenaline infusion, the pit viper, and LA OT as one timeline');
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
  /* 18 Nov 2026: the pink EM Watch form (data25.js) */
  { const seenE = [], onReq = r => { if (/\/memo\/emwatch/.test(r.url())) seenE.push(r.url()); }; p.on('request', onReq);
    ok(await p.evaluate(() => { const E = P['em-watch']; return E.nodes.cond.opts[0][1] === 'form' && E.nodes.form.next === 'book' && E.nodes.book.links[0][0] === '#em-watch--form' && /given by the guide owner on 18 Nov 2026/.test(E.nodes.book.gap); }), 'EM Watch: once the condition fits, the pink form comes before the booking steps, which link back to it and name it in their source line');
    await go(p, '#em-watch--form', 450);
    const ef = await p.evaluate(() => { const c = document.querySelector('#cur .figmemo'), t = document.querySelector('#cur').textContent;
      return {conds:['Warganegara Malaysia sahaja', 'Berumur lebih 18 tahun/penjaga', 'Mempunyai telefon pintar & WhatsApp', 'Berpengetahuan melakukan panggilan video', 'Pesakit tidak memerlukan pemeriksaan secara fisikal'].every(s => t.includes(s)),
        hours:/Isnin hingga Sabtu, 8\.00 pagi hingga 2\.00 petang/.test(t) && /Monday to Saturday, 8 am to 2 pm, closed on Sunday/.test(t),
        pages:c ? [...c.querySelectorAll('[data-ppage]')].map(b => b.dataset.ppage) : [], link:c ? !!c.querySelector('a.pill') : null, chip:c ? c.querySelector('.mm-chip').textContent : ''}; });
    ok(ef.conds && ef.hours, 'the form step quotes its five mandatory conditions and the slip\'s hours as printed');
    ok(JSON.stringify(ef.pages) === JSON.stringify(['memo/emwatch-p1', 'memo/emwatch-p2', 'memo/emwatch-p3', 'memo/emwatch-p4']) && ef.link === false && /Department form/.test(ef.chip) && seenE.length === 0, 'its card is a department form with the four pages, links to no memo list, and loads none before a tap' + (seenE.length ? ' ' + seenE.join(' ') : ''));
    await p.locator('#cur [data-ppage="memo/emwatch-p3"]').click(); await p.waitForFunction(() => { const i = document.querySelector('#lbimg'); return i.complete && i.naturalWidth > 0; }, null, {timeout:6000}).catch(() => {}); await p.waitForTimeout(150);
    const lb = await p.evaluate(() => ({open:!document.querySelector('#lb').hidden, src:document.querySelector('#lbimg').getAttribute('src'), w:document.querySelector('#lbimg').naturalWidth, name:document.querySelector('#lbt').textContent}));
    ok(lb.open && lb.src === 'memo/emwatch-p3.webp' && lb.w === 1240 && lb.name === 'The pink EM Watch form · Page 3: consent, English' && seenE.length === 1, 'a page of the form opens full size on a tap, named by the form, not as a memo' + (lb.open && lb.w === 1240 && seenE.length === 1 ? '' : ' ' + JSON.stringify({lb, seenE})));
    await p.keyboard.press('Escape'); await p.waitForTimeout(200);
    const tabs = await p.evaluate(() => { const t = [...document.querySelectorAll('#run .ptab-bar [role="tab"], #run .ptab-bar button')].map(b => b.textContent.trim()); selectTab('n0'); const ms = [...document.querySelectorAll('#run .deptnote[lang="ms"]')].length, txt = document.querySelector('#run').textContent; selectTab('n1'); return {t, ms, bm:/Saya bersetuju untuk menerima rawatan melalui tele konsultasi/.test(txt), en:/I agree to receive teleconsultation treatment via online video consultation/.test(document.querySelector('#run').textContent)}; });
    ok(tabs.t.some(x => /Consent, BM/.test(x)) && tabs.t.some(x => /Consent, English/.test(x)) && tabs.ms === 4 && tabs.bm && tabs.en, 'the consent is in two tabs, Malay (marked as Malay) and English, as printed');
    if (guardRe('emwatch')) { const re = new RegExp(guardRe('emwatch')), art = fs.readFileSync(path.join(__dirname, '..', 'green-zone-pathways.html'), 'utf8'), idx = fs.readFileSync(path.join(__dirname, '..', 'app', 'index.html'), 'utf8');
      ok(!re.test(art) && !re.test(idx) && await p.evaluate(r => !new RegExp(r).test(JSON.stringify(P) + JSON.stringify(MEMOS) + document.body.textContent), guardRe('emwatch')), 'the clinic\'s mobile number printed on the form is nowhere in the guide, page or data'); }
    ok(await p.evaluate(() => ['pink form', 'borang pink', 'google meet', 'borang kebenaran', 'emwatch'].every(q => { const r = findMore(q); return (r.r || r)[0].href === '#em-watch'; }) && ['klinik kesihatan', 'clinic referral', 'referral form', 'borang', 'pink urine'].every(q => { const r = findMore(q); return !(r.r || r).slice(0, 2).some(x => x.href === '#em-watch'); })), 'search: the pink form, its Malay name and Google Meet open EM Watch first, while clinic, form and borang searches keep their own first results');
    p.off('request', onReq); }
  /* 21 Nov 2026: memos and letters the department circulated, 2019 to 2026 (data26.js) */
  { const seenN = [], onReqN = r => { if (/\/memo\/(20(19|22|25|26)-|far-|upsk|med-mau25|nefro-hd|kpk-|abx-)/.test(r.url())) seenN.push(r.url()); }; p.on('request', onReqN);
    await go(p, '#gz-rules--gzn', 450);
    ok(await p.locator('#run button[data-go]').count() === 7, 'the Green Zone rules open the seven memos of 2025 and 2026');
    await go(p, '#infection-alerts--measles', 450);
    const ms = await p.evaluate(() => { const c = document.querySelector('#cur .figmemo'), t = document.querySelector('#cur').textContent;
      return {t:/Demam tinggi \(≥ 38°C\)/.test(t) && /4 days before to 4 days after the rash/.test(t) && /"Suspected Measles"/.test(t), pages:c ? [...c.querySelectorAll('[data-ppage]')].map(b => b.dataset.ppage) : [], link:c ? !!c.querySelector('a.pill') : null}; });
    ok(ms.t && JSON.stringify(ms.pages) === JSON.stringify(['memo/2026-measles-p1', 'memo/2026-measles-p2']) && ms.link === false && seenN.length === 0, 'suspected measles: the memo of 19 Nov 2026 and its triage guide, quoted as printed, its pages loading only on a tap' + (seenN.length ? ' ' + JSON.stringify(seenN) : ''));
    await p.locator('#cur [data-ppage="memo/2026-measles-p2"]').click(); await p.waitForFunction(() => { const i = document.querySelector('#lbimg'); return i.complete && i.naturalWidth > 0; }, null, {timeout:6000}).catch(() => {}); await p.waitForTimeout(150);
    const lbN = await p.evaluate(() => ({open:!document.querySelector('#lb').hidden, src:document.querySelector('#lbimg').getAttribute('src'), w:document.querySelector('#lbimg').naturalWidth}));
    ok(lbN.open && lbN.src === 'memo/2026-measles-p2.webp' && lbN.w === 1240 && seenN.length === 1, 'the triage guide opens full size on a tap' + (lbN.open && seenN.length === 1 ? '' : ' ' + JSON.stringify({lbN, seenN})));
    await p.keyboard.press('Escape'); await p.waitForTimeout(200);
    await go(p, '#blood-tests--forms', 450);
    const lf = await p.evaluate(() => [...document.querySelectorAll('#cur .figmemo')].map(c => ({chip:c.querySelector('.mm-chip').textContent, pages:c.querySelectorAll('[data-ppage]').length})));
    ok(lf.length === 3 && lf.every(c => /Pathology letter/.test(c.chip) && c.pages === 0), 'the lab request forms step names its three pathology letters, without pages (they name staff throughout)' + (lf.length === 3 ? '' : ' ' + JSON.stringify(lf)));
    await go(p, '#mau-admission', 450);
    ok(await p.evaluate(() => [...document.querySelectorAll('#run [role="tab"], #run .ptab-bar button')].some(x => /2025 criteria/.test(x.textContent)) && /2025 criteria tab/.test(P['mau-admission'].nodes.crit.hint)), 'MAU: the 2025 criteria from General Medicine are a dated tab beside the 2022 checklist');
    ok(await p.evaluate(() => P['gz-rules'].nodes.gzm.opts.length === 13 && P['yellow-zone'].nodes.hd && P['abdominal-pain'].dept.some(d => /Bil\. 9\/2024/.test(d.src) && d.fig === 'memo-kpk-ectopic') && P['infection-alerts'].nodes.nipah.fig === 'memo-2026-nipah'
      && CONFIRM.some(c => c.includes('21 Nov 2026')) && V8.find(v => /^Department memos and letters/.test(v[0]))[3].includes('#blood-tests') && APP_VER === 'Version 8, updated 26 Nov 2026'), 'the two older memos, haemodialysis, the 2024 ectopic circular, the Nipah memo, Still to confirm, What\'s new and the version line are in place');
    ok(await p.evaluate(() => Object.entries({'measles':'#infection-alerts', 'campak':'#infection-alerts', 'dispatch book':'#blood-tests', 'winspirin':'#prescribing', 'phq-9':'#referral-rules'}).every(([q, h]) => { const r = findMore(q), a = (r.r || r)[0]; return !!a && a.href.startsWith(h); })), 'search: measles, campak, dispatch book, winspirin and PHQ-9 open their new steps');
    if (guardRe('announcements')) { const re = new RegExp(guardRe('announcements')), art = fs.readFileSync(path.join(__dirname, '..', 'green-zone-pathways.html'), 'utf8'), idx = fs.readFileSync(path.join(__dirname, '..', 'app', 'index.html'), 'utf8');
      ok(!re.test(art) && !re.test(idx) && await p.evaluate(r => !new RegExp(r).test(JSON.stringify(P) + JSON.stringify(MEMOS) + document.body.textContent), guardRe('announcements')), 'no patient, password, link or registration number from these documents is anywhere in the guide, page or data'); }
    /* The ED antimicrobial guides (data27.js): bands marked only where the guide prints them, nothing stored */
    await go(p, '#antibiotics', 500);
    const abSet = async v => p.evaluate(v => { const i = document.querySelector('#abcr'); i.value = v; i.dispatchEvent(new Event('input')); return {on:document.querySelectorAll('#abl .ab-b.on').length, gaps:[...new Set([...document.querySelectorAll('#abl .ab-gap')].map(g => g.textContent))]}; }, v);
    const a25 = await abSet('25'), a55 = await abSet('55'), a40 = await abSet('40'), a305 = await abSet('30.5');
    ok(a25.on === 20 && a25.gaps.length === 0 && a55.on === 3 && /No printed band covers 55 ml\/min: the usual dose column prints no CrCl/.test(a55.gaps.join()) && a40.on === 21 && /share their ends: 40 ml\/min sits in two/.test(a40.gaps.join()) && /30\.5 ml\/min falls between the printed bands/.test(a305.gaps.join()), 'antimicrobials: a CrCl marks only the bands the guide prints, says when bands share an end, and never rounds into one' + (a25.on === 20 && a55.on === 3 && a40.on === 21 ? '' : ' ' + JSON.stringify({a25, a55, a40, a305})));
    const abv = await p.evaluate(() => { document.querySelector('#abcr').value = ''; document.querySelector('#abcr').dispatchEvent(new Event('input')); const q = document.querySelector('#abq'); q.value = 'ceftri'; q.dispatchEvent(new Event('input'));
      const names = [...document.querySelectorAll('#abl .ab-n')].map(n => n.textContent), cards = [...document.querySelectorAll('#absrc .figmemo')].map(c => c.querySelectorAll('[data-ppage]').length);
      q.value = ''; q.dispatchEvent(new Event('input'));
      return {names, cards, rows:document.querySelectorAll('#abl .ab-r').length, cg:/1\.23/.test(document.querySelector('#abcg').textContent) && /BMI > 30/.test(document.querySelector('#abcg').textContent), tile:/ED antimicrobial guides/.test((document.querySelector('#tabx') || {}).textContent || ''),
        store:Object.keys(localStorage).filter(k => /ab|crcl/i.test(k) && !/^gz-(tabs|clips)$/.test(k))}; });
    ok(abv.names.length === 2 && abv.names.every(n => /^Ceftriaxone/.test(n)) && abv.rows === 54 && JSON.stringify(abv.cards) === JSON.stringify([4, 2]) && abv.cg && abv.tile && abv.store.length === 0 && !seenN.some(u => /abx-/.test(u)), 'antimicrobials: find by name, 54 rows in all, the guide\'s own formula with both obesity definitions, both guides as covered pages loaded only on a tap, a Shift tools tile, nothing stored' + (abv.rows === 54 ? '' : ' ' + JSON.stringify(abv)));
    ok(await p.evaluate(() => { const r = (findMore('ceftriaxone').r || findMore('ceftriaxone')), k = r.findIndex(a => a.ab === 'Ceftriaxone'), d = drugsFor(['vancomycin']); return k > 0 && r[k].href === '#antibiotics' && !r[0].ab && d.length === 1 && /Antimicrobial guide/.test(drugCard(d[0])); }), 'antimicrobials: search offers the drug in the guides after the pages that mention it, and the drug finder card points to it');
    p.off('request', onReqN); }
  ok(await p.evaluate(() => !/9 Jul 2024/.test(JSON.stringify(P))), 'memo (10)24 is no longer dated 9 Jul 2024');
  /* ---------- 21 Nov 2026: the documents left out, the antidotes and abbreviations, and the turnable 3D route ---------- */
  {
    /* By this point the page's resource timing buffer is full, so loading is read from the guide's own states */
    await go(p, '#home', 400);
    ok(await p.evaluate(() => AX.state === 'idle' && !spinReady.has('route')), 'the antidotes and the 3D route download nothing before they are needed, idle drawing included');
    /* Antidotes: loaded on first open, every entry, headings in printed order, doubtful lines marked, in the drug card */
    await go(p, '#antidotes', 1200);
    const ax = await p.evaluate(() => { const q = document.querySelector('#axq'), out = {cards:document.querySelectorAll('#axl .ax').length};
      q.value = 'naloxone'; q.dispatchEvent(new Event('input'));
      const o = document.querySelector('#axl .ax[open]'); out.heads = o ? [...o.querySelectorAll('.ax-f h3')].map(h => h.textContent) : []; /* h3 since 25 Nov 2026: no level skipped under the banner's h2 */
      q.value = 'calcium gluconate'; q.dispatchEvent(new Event('input'));
      out.cal = (document.querySelector('#axl .ax .ab-gap') || {}).textContent || '';
      q.value = 'paracetamol'; q.dispatchEvent(new Event('input'));
      out.para = [...document.querySelectorAll('#axl .ax-h b')].map(b => b.textContent);
      out.src = /shall not modify the text/.test(document.querySelector('#axsrc').textContent);
      out.card = drugsFor(['naloxone']).some(d => d.ax && d.ax.length);
      out.store = Object.keys(localStorage).filter(k => /ax|antidote/i.test(k));
      q.value = ''; q.dispatchEvent(new Event('input')); return out; });
    ok(ax.cards === 38 && ax.heads.includes('Dosage and administration') && !ax.heads.some(h => /^references?$/i.test(h)) && /3000-6000mg\/kg\/dose/.test(ax.cal) && ax.para.some(n => /N-ACETYLCYSTEINE/.test(n)) && ax.src && ax.card && !ax.store.length && await p.evaluate(() => AX.state === 'ready'),
      'antidotes: 38 entries load on first open, headings as printed, the calcium gluconate maximum marked, found by poison, in the drug card, nothing stored' + (ax.cards === 38 ? '' : ' ' + JSON.stringify(ax)));
    /* Abbreviations: the list loads on first need; a search that is exactly an abbreviation shows it above the results */
    await go(p, '#abbreviations', 1200);
    const kb = await p.evaluate(() => { const q = document.querySelector('#kbq'); q.value = 'mso4'; q.dispatchEvent(new Event('input'));
      const r = document.querySelector('#kbl .kb-r'), out = {row:r ? r.textContent : '', n:KB.rows.length};
      q.value = 'tds'; q.dispatchEvent(new Event('input')); out.tds = [...document.querySelectorAll('#kbl .kb-r')].map(x => x.textContent)[0] || '';
      q.value = ''; q.dispatchEvent(new Event('input')); return out; });
    ok(kb.n === 2665 && /Do Not Use This Abbreviation/.test(kb.row) && /Row 1500 · p35/.test(kb.row) && /Toilet, Debridement And Suturing/.test(kb.tds) && await p.evaluate(() => KB.state === 'ready'),
      'abbreviations: 2,665 rows load on first open, MSO4 shows its do-not-use line with its row and page, each meaning as printed');
    await p.evaluate(() => { location.hash = '#search'; }); await p.waitForTimeout(400);
    await p.fill('#gq', 'MSO4'); await p.waitForTimeout(400);
    ok(await p.evaluate(() => { const c = document.querySelector('#palbody .kbc'); return !!c && /Morphine Sulfate/.test(c.textContent) && !palLinks().some(a => a.closest('.kbc')); }), 'search: an exact abbreviation with nothing else in the guide shows its card, outside the arrow-key results');
    await p.fill('#gq', 'acs'); await p.waitForTimeout(500);
    ok(await p.evaluate(() => { const a = palLinks(), c = document.querySelector('#palbody .kbc'), g = document.querySelector('#gres'); return a.length && /^#acs/.test(a[0].getAttribute('href')) && (!c || !!(g.compareDocumentPosition(c) & Node.DOCUMENT_POSITION_FOLLOWING)); }), 'search: "acs" still opens an ACS entry first, the abbreviation card (if any) below the results');
    await p.keyboard.press('Escape'); await p.waitForTimeout(200);
    /* The documents: the own-risk circular, leptospirosis, smoking products, the CME decks */
    const docs = await p.evaluate(() => ({
      aor:!!P['safe-practice'].nodes.aorkpk && P['safe-practice'].nodes.menu.opts.some(o => o[1] === 'aorkpk') && MEMOS['kpk-aor'].pages.length === 13,
      lepto:/doxycycline 200 mg stat, then 100 mg BD for 5 to 7 days/.test(P['infection-alerts'].nodes.lepto.items.join()) && /608 hourly/.test(P['infection-alerts'].nodes.lepto.items.join()) && MEMOS['kpk-lepto'].pages.length === 8,
      vape:/within 24 hours/.test(P['infection-alerts'].nodes.vape.items.join()) && !P['infection-alerts'].nodes.vape.fig && /Hak cipta terpelihara/.test(P['infection-alerts'].nodes.vape.gap),
      ct:P['ct-brain'].nodes.menu.opts.length === 6 && /brain WW 80, WL 40/.test(P['ct-brain'].nodes.win.items.join()) && /ASPECTS ≤ 7/.test(P['ct-brain'].nodes.stroke.items.join()),
      agg:(P['behavioural-disturbance'].dept || []).some(d => /CME deck/.test(d.src) && /not copied/.test(d.src)),
      confirm:/608 hourly/.test(CONFIRM.join()) && /3000-6000mg\/kg\/dose/.test(CONFIRM.join()) }));
    ok(Object.values(docs).every(Boolean), 'documents of 21 Nov 2026: the own-risk circular (13 pages), leptospirosis (8 pages, doses as printed), smoking products (own words, no pages), the CT brain CME, the aggressive patient deck without its dose table, and their open questions' + (Object.values(docs).every(Boolean) ? '' : ' ' + JSON.stringify(docs)));
    await go(p, '#infection-alerts--lepto', 600);
    ok(await p.evaluate(() => /leptospirosis/i.test(document.querySelector('#cur h2').textContent) && document.querySelectorAll('#cur .figmemo [data-ppage]').length === 8), 'leptospirosis opens as a step, with its eight pages on a tap');
    await go(p, '#ct-brain', 600);
    ok(await p.evaluate(() => document.querySelectorAll('#cur button.opt').length === 6), 'the CT brain notes open on their six topics');
    /* The 3D route: the first view lazily, the rest on the first turn, labels on the scene's own points */
    await go(p, '#journey', 800);
    await p.evaluate(() => document.querySelector('#jspin [data-spin]').scrollIntoView({block:'center'})); await p.waitForTimeout(500);
    ok(await p.evaluate(() => !spinReady.has('route') && document.querySelector('#jspin .spin-img').complete), 'the 3D route shows its first view and loads the turntable only when turned');
    const sp = await p.evaluate(async () => { const f = document.querySelector('#jspin [data-spin]'), r = f.querySelector('[data-spin-yaw]');
      r.value = 6; r.dispatchEvent(new Event('input', {bubbles:true})); await new Promise(z => setTimeout(z, 1200));
      const at = SPIN.route.at[6][1][0], pin = f.querySelector('[data-spin-pin="0"]');
      const out = {i:+f.dataset.i, ready:f.classList.contains('spin-ready'), left:pin.style.left, want:(at[0] / SPIN.route.w * 100).toFixed(2) + '%', pins:f.querySelectorAll('.spin-pin').length};
      pin.click(); out.info = f.querySelector('.spin-info h4') ? f.querySelector('.spin-info h4').textContent : ''; return out; });
    sp.sheet = await p.evaluate(() => spinReady.has('route') && /spin\/route\.webp/.test(document.querySelector('#jspin .spin-sheet').style.backgroundImage));
    ok(sp.i === 6 && sp.ready && sp.left === sp.want && sp.pins === 5 && /^1\. Triage/.test(sp.info) && sp.sheet, 'the 3D route turns to the view asked for, its five labels follow it, and a label opens its stop' + (sp.i === 6 && sp.ready && sp.left === sp.want && sp.sheet ? '' : ' ' + JSON.stringify(sp)));
  }
  /* Page transitions (23 Nov 2026): a tile grows into the page's banner, back slides, an answer has none */
  {
    await go(p, '#tools', 500);
    await p.evaluate(() => { window.__vt = []; const f = document.startViewTransition.bind(document);
      document.startViewTransition = cb => { const t = f(cb); t.updateCallbackDone.then(() => { const h = document.querySelector('#viewport > .view:not([hidden]) :is(.run-hero, .phx-hero, .lk-hero)');
        __vt.push({h:location.hash, hero:h ? h.style.viewTransitionName : '', back:document.documentElement.classList.contains('vt-back'), enter:!!document.querySelector('#viewport > .view.enter:not([hidden])')}); }); return t; }; });
    await p.click('#trx'); await p.waitForTimeout(700);
    const v1 = await p.evaluate(() => ({vt:__vt.slice(), view:curView, on:vtOn, cls:document.documentElement.className, names:document.querySelectorAll('[style*="view-transition-name"]').length}));
    ok(v1.vt.length === 1 && v1.vt[0].h === '#pharmacy' && v1.vt[0].hero === 'gz-hero' && !v1.vt[0].back && !v1.vt[0].enter && v1.view === 'pharmacy' && !v1.on && !/vt-/.test(v1.cls) && !v1.names,
      'page transitions: a tool tile grows into the page\'s banner, with no fade on top, and leaves nothing behind' + (v1.vt.length === 1 && v1.vt[0].hero ? '' : ' ' + JSON.stringify(v1)));
    await p.click('.side-back'); await p.waitForTimeout(700);
    const v2 = await p.evaluate(() => ({vt:__vt.slice(), view:curView}));
    ok(v2.vt.length === 2 && v2.vt[1].h === '#tools' && v2.vt[1].back && v2.view === 'tools', 'page transitions: the back button slides the earlier page back' + (v2.vt.length === 2 ? '' : ' ' + JSON.stringify(v2)));
    await go(p, '#interpreter', 500);
    const n0 = await p.evaluate(() => __vt.length);
    await p.click('#cur button.opt[data-go="2"]'); await p.waitForTimeout(300);
    ok(await p.evaluate(n => __vt.length === n && state.cur === 'call', n0), 'page transitions: none for an answer on the same page');
    /* A page that draws no frame (behind another window): the tap still changes page, by skipping the transition */
    const nf = await p.evaluate(async () => { location.hash = '#tools'; await new Promise(r => setTimeout(r, 400));
      /* a stand-in for a browser that draws no frame: the update runs only when the transition is skipped */
      const counted = document.startViewTransition; /* the counting wrapper above, put back after */
      let held = null; document.startViewTransition = cb => { let skipped = false; const done = new Promise(r => { held = () => { if (!skipped){ skipped = true; Promise.resolve(cb()).then(r); } }; });
        return {skipTransition: held, ready: Promise.reject(new Error('held')), updateCallbackDone: done, finished: done}; };
      document.querySelector('#trx').click();
      const at200 = location.hash; await new Promise(r => setTimeout(r, 700));
      document.startViewTransition = counted;
      return {at200, at700:location.hash, view:curView, on:vtOn}; });
    ok(nf.at200 === '#tools' && nf.at700 === '#pharmacy' && nf.view === 'pharmacy' && !nf.on, 'page transitions: where the page draws no frame, the tap still opens its page within about 300 ms' + (nf.at700 === '#pharmacy' ? '' : ' ' + JSON.stringify(nf)));
    await go(p, '#pathways', 500);
    await p.click('#libgrid .pc h3 a'); await p.waitForTimeout(400);
    ok(await p.evaluate(n => __vt.length === n && curView === 'run', n0), 'page transitions: none for a plain link, such as a library row, which opens at once');
  }
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
    src:document.querySelector('#vid').getAttribute('src'), cover:document.querySelector('#vid').dataset.cover, poster:document.querySelector('#vid').getAttribute('poster'), thumb:document.querySelector('#v-poster [data-sheet="2"] img').getAttribute('src')}));
  ok(pn.theme === 'dark' && pn.on === 'true' && pn.saved === '"dark"', 'phone: the home switch turns the night colours on and remembers it');
  ok(pn.cover === 'media/explainer-night-poster.webp' && pn.poster === null && pn.src === null && pn.thumb === 'poster/sheet2-night-thumb.webp', 'night colours choose the night film\'s cover (cover and film wait for the tour) and the night sheets');
  await p.screenshot({path:out + '/p-home-night.png'});
  await p.tap('#daynight'); await p.waitForTimeout(450);
  ok(await p.evaluate(() => document.documentElement.dataset.theme === 'light' && document.querySelector('#daynight').getAttribute('aria-checked') === 'false' && document.querySelector('#vid').dataset.cover === 'media/explainer-poster.webp'), 'a second tap brings the day colours back');
  for (const v of VIEWS.slice(1)){
    await go(p, '#' + v);
    ok(await hscroll(p) <= 0, `phone #${v} no sideways scroll`);
    await p.screenshot({path:out + `/p-${v}.png`, fullPage:true});
  }
  noFilm(p, 'phone: Day and Night and every view, the tour included, load no film from media/ before a tap');
  await go(p, '#pathways', 600);
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm img').length === 11 && document.querySelectorAll('#libcats .tm video').length > 0), 'on a phone the topic tiles move by default too');
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
  await p.tap('#run .thumbbar [data-map]'); await p.waitForTimeout(450);
  ok(await p.evaluate(() => !document.querySelector('#pmap').hidden), 'phone opens the whole-pathway map');
  ok(await hscroll(p) <= 0, 'phone map no sideways scroll');
  await p.screenshot({path:out + '/p-map.png'});
  await p.tap('#pmclose'); await p.waitForTimeout(250);
  /* 17 Nov 2026: the thumb bar, bedside reminders, pins, the drug finder card and the folded library */
  ok(await p.evaluate(() => getComputedStyle(document.querySelector('.thumbbar')).display === 'grid' && getComputedStyle(document.querySelector('.run-acts')).display === 'none' && document.querySelectorAll('.thumbbar button').length === 5 && document.querySelector('.thumbbar').getBoundingClientRect().top > 844 * 0.3), 'phone: Save, Pin, Map, Link and Again sit in the thumb bar under the step, not at the top');
  ok(await p.evaluate(() => Object.keys(REMIND).length === 13 && Object.entries(REMIND).every(([a, rs]) => { const [id, k] = a.split('--'), n = P[id] && P[id].nodes[k]; return !!n && rs.every(([m, ph]) => m > 0 && m <= 60 && JSON.stringify(n).includes(ph) && new RegExp('\\b' + m + ' minutes').test(ph)); })), 'every reminder is on its own step, its minutes printed in the step\'s own words (13 steps)');
  await go(p, '#asthma--m1', 500);
  await p.tap('[data-remind]'); await p.waitForTimeout(200);
  ok(await p.evaluate(() => !document.querySelector('#rmd').hidden && rems.length === 1 && rems[0].m === 10 && /Reassess after 10 minutes/.test(document.querySelector('#rmd').innerText) && /^(10:00|9:5\d)$/.test(document.querySelector('#rmd output').textContent)), 'a reminder starts from the step, for the 10 minutes it prints');
  ok(await p.evaluate(() => Object.keys(localStorage).every(k => !/rem/i.test(k) && (k === 'gz-last' || !String(localStorage.getItem(k)).includes('asthma--m1')))), 'a reminder is not stored (gz-last, the last step opened, belongs to the pick-up card)');
  await p.evaluate(() => { navigator.vibrate = x => { (window.__vib = window.__vib || []).push(x); return true; }; rems[0].end = Date.now() - 1; remTick(); });
  await p.waitForTimeout(250);
  ok(await p.evaluate(() => document.querySelector('#rmd').classList.contains('is-due') && /Due now/.test(document.querySelector('#rmd').innerText) && JSON.stringify(window.__vib || []) === JSON.stringify([BUZZ.alarm]) && /Reminder due: Reassess after 10 minutes/.test(document.querySelector('#rmdlive').textContent)), 'when it is due it buzzes the alarm, opens the tray and says so');
  await p.screenshot({path:out + '/p-reminder-due.png'});
  ok(await hscroll(p) <= 0, 'phone reminder tray no sideways scroll');
  await p.tap('#rmd [data-ragain]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => rems.length === 1 && !rems[0].due && !document.querySelector('#rmd').classList.contains('is-due')), 'Again restarts it');
  await p.tap('#rmd [data-rdone]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => rems.length === 0 && document.querySelector('#rmd').hidden && !document.documentElement.classList.contains('rmd-on')), 'the cross clears it and the tray goes');
  ok(await p.evaluate(() => /buzzes when it is due/.test(document.querySelector('.rmd-b small').textContent)), 'on a phone that can vibrate, the line under the button says it buzzes');
  ok(await p.evaluate(() => { const was = prefs.buzz; prefs.buzz = 'off'; const t = remBtns('asthma', 'm1'); prefs.buzz = was; return /cannot vibrate for it, so watch for it on screen/.test(t); }), 'where it cannot buzz (an iPhone, or Vibration off), the line says to watch the screen');
  await p.tap('[data-remind]'); await p.waitForTimeout(200);
  await p.evaluate(() => document.querySelector('.thumbbar').scrollIntoView({block:'center'})); await p.waitForTimeout(200);
  await p.tap('.thumbbar [data-map]'); await p.waitForTimeout(450);
  ok(await p.evaluate(() => !document.querySelector('#pmap').hidden), 'with a reminder running, the thumb bar can still be reached above the tray');
  await p.tap('#pmclose'); await p.waitForTimeout(250);
  await p.evaluate(() => document.querySelector('#cur [data-next], #cur button.opt').scrollIntoView({block:'center'})); await p.waitForTimeout(150);
  await p.tap('#cur [data-next], #cur button.opt'); await p.waitForTimeout(400);
  ok(await p.evaluate(() => state.cur !== 'm1' && rems.length === 1 && !document.querySelector('#rmd').hidden), 'and the step\'s own answer too, and the reminder keeps running as the steps change');
  await p.evaluate(() => { rems = []; remDraw(); });
  await go(p, '#home', 300); await go(p, '#asthma--m1', 500);
  await p.tap('.thumbbar [data-pin]'); await p.waitForTimeout(150);
  await go(p, '#calc-news2', 500);
  await p.tap('#calcbox [data-pin]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => localStorage.getItem('gz-pins') === JSON.stringify(['#calc-news2', '#asthma--m1'])), 'a pin keeps only the address: a calculator and a step');
  await go(p, '#home', 500);
  ok(await p.evaluate(() => { const a = [...document.querySelectorAll('#pins .pinc')]; return !document.querySelector('#pins').hidden && a.map(x => x.getAttribute('href')).join() === '#calc-news2,#asthma--m1' && /NEWS2/.test(a[0].textContent) && /Bronchodilator/.test(a[1].textContent) && /Bronchial asthma/.test(a[1].textContent); }), 'home shows the pinned calculator and step at the top');
  await p.screenshot({path:out + '/p-home-pins.png'});
  ok(await hscroll(p) <= 0, 'phone home with pins no sideways scroll');
  await p.tap('#pins .pinc[href="#asthma--m1"]'); await p.waitForTimeout(500);
  ok(await p.evaluate(() => state.id === 'asthma' && state.cur === 'm1' && document.querySelector('.thumbbar [data-pin]').getAttribute('aria-pressed') === 'true'), 'a pinned step opens on that step, marked as pinned');
  await p.tap('.thumbbar [data-pin]'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => localStorage.getItem('gz-pins') === JSON.stringify(['#calc-news2']) && document.querySelector('.thumbbar [data-pin]').getAttribute('aria-pressed') === 'false'), 'tapping the pin again unpins the step');
  await p.evaluate(() => { document.getElementById('st-clear').click(); });
  ok(await p.evaluate(() => !localStorage.getItem('gz-pins') && document.querySelector('#pins').hidden), 'Settings, Clear removes the pins too');
  await p.evaluate(() => openPal()); await p.fill('#gq', 'tramadol'); await p.waitForTimeout(500);
  ok(await p.evaluate(() => { const c = [...document.querySelectorAll('.drugc')]; return c.length === 1 && c[0].querySelector('.dc-ht b').textContent === 'Tramadol' && c[0].querySelectorAll('.dc-r[data-rx]').length === 1 && c[0].querySelectorAll('.dc-r[data-dg]').length === 1 && /^Named in \d+ steps? of \d+ entries/.test(c[0].querySelector('.dc-n').textContent); }), 'tramadol: one card with its pharmacy row and its dilution row (the HCl salt joined), and the steps that name it');
  ok(await p.evaluate(() => [...document.querySelectorAll('.drugc .dc-s li a')].every(a => { const [id, k] = a.getAttribute('href').slice(1).split('--'), q = P[id]; if (!q) return false; const n = q.nodes[k || q.start], s = a.querySelector('span').textContent.replace(/…$/, ''); return s === 'Named in its reference tabs' || (n.end ? n.title : nodeText(n)).startsWith(s); })), 'each line on the card is a step\'s own heading, linking to that step: no dose is lifted out');
  ok(await p.evaluate(() => !!palLinks()[0] && !palLinks()[0].closest('.drugc') && !!palLinks()[0].closest('#gres')), 'Enter still opens the first result: the card sits above without taking the selection');
  await p.screenshot({path:out + '/p-drug-card.png'});
  await p.fill('#gq', 'adrenaline'); await p.waitForTimeout(400);
  ok(await p.evaluate(() => { const c = document.querySelectorAll('.drugc'); return c.length === 1 && !!c[0].querySelector('.dc-h .tag.hi') && /ADrenaline/.test(c[0].querySelector('.dc-r[data-dg]').textContent) && !/NORADrenaline/.test(c[0].textContent); }), 'adrenaline: one card with the high-alert mark and its dilution guide row, not noradrenaline');
  await p.fill('#gq', 'chest pain'); await p.waitForTimeout(300);
  ok(await p.evaluate(() => !document.querySelector('.drugc')), 'no card when no drug is named');
  ok(await p.evaluate(() => drugsFor(['adrenal crisis']).length === 0 && drugsFor(['none of the four conditions']).length === 0 && drugsFor(['oral antibiotics']).length === 0 && drugsFor(['amox'])[0].g === 'Amoxicillin' && drugsFor(['dose of tramadol'])[0].g === 'Tramadol'), 'a longer search must hold a drug\'s whole name: "adrenal crisis" is not adrenaline, "four" and "oral" open no card');
  ok(await p.evaluate(() => drugIndex().every(d => [...new DOMParser().parseFromString(drugCard(d), 'text/html').querySelectorAll('.dc-s li span')].every(s => !/\d+(\.\d+)?\s?(mg|mcg|µg|g|ml|mL|units?|IU|mmol|µmol|%|puffs?|L\/min)\b/i.test(s.textContent)))), 'on every drug\'s card (' + await p.evaluate(() => drugIndex().length) + ' drugs), no step row carries a dose or a threshold');
  ok(await p.evaluate(() => { const i = EDRX.items.find(x => x[0] === +Object.keys(EDRX_LASA)[0]), d = drugsFor([drugName(rxGeneric(i[1]))]); return d.length >= 1 && d.length <= 2 && /Look-alike pair/.test(d.map(drugCard).join('')); }), 'a drug on the pharmacy\'s look-alike top 10 says so on its card');
  await p.fill('#gq', 'tramadol'); await p.waitForTimeout(300);
  await p.tap('.drugc a[data-rx]'); await p.waitForTimeout(500);
  ok(await p.evaluate(() => location.hash === '#pharmacy' && /tramadol/i.test(document.querySelector('#rxq').value) && document.querySelector('#pal').hidden), 'the card\'s pharmacy row opens the list on that drug');
  await go(p, '#pathways', 500);
  const libH = await p.evaluate(() => document.documentElement.scrollHeight);
  ok(await p.evaluate(() => document.querySelectorAll('#libgrid .pc').length === 0 && document.querySelectorAll('#libgrid [data-lsec]:not([data-lsec="*"])').length === document.querySelectorAll('#libgrid .libsec').length) && libH < 4000, 'phone: the library opens folded by group (' + libH + ' px)');
  await p.tap('#libgrid [data-lsec="heart"]'); await p.waitForTimeout(300);
  ok(await p.evaluate(() => document.querySelectorAll('#libgrid .pc').length === CATS.find(c => c.k === 'heart').ids.filter(id => P[id]).length && document.querySelector('#libgrid [data-lsec="heart"]').getAttribute('aria-expanded') === 'true'), 'a tap on a group opens it');
  await p.screenshot({path:out + '/p-library-folded.png'});
  await p.locator('#libq').fill('colic'); await p.waitForTimeout(300);
  ok(await p.evaluate(() => !document.querySelector('#libgrid [data-lsec]') && document.querySelectorAll('#libgrid .pc').length >= 1), 'a library search shows every match, unfolded');
  await p.locator('#libq').fill(''); await p.waitForTimeout(200);
  ok(await hscroll(p) <= 0, 'phone folded library no sideways scroll');
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

  /* ---------- The 12 Nov 2026 review (content, design and function) ---------- */
  {
    const tiles = []; p.on('request', r => { const f = new URL(r.url()).pathname; if (/^\/tiles\/(whatsnew|sources|poster|dilute)\.mp4$/.test(f)) tiles.push(f); });
    await go(p, '#renal-colic', 500);
    await p.evaluate(() => document.querySelector('#cur button[data-go="0"]').click());
    let wide = 0; for (let i = 0; i < 12; i++){ wide = Math.max(wide, await hscroll(p)); await p.waitForTimeout(45); }
    ok(wide <= 1, 'review: a question card dealt on a phone never pushes the page sideways (' + wide + ' px)');
    await go(p, '#cancer-pain-cpg', 500);
    await p.evaluate(() => { const t = [...document.querySelectorAll('#v-run button, #v-run [role="tab"]')].find(b => /Home care advice/.test(b.textContent)); if (t) t.click(); });
    await p.waitForTimeout(400);
    ok(await p.evaluate(() => { const l = document.querySelector('.leaf'); return !!l && !!l.offsetParent && l.getBoundingClientRect().right <= innerWidth + 0.5 && document.documentElement.scrollWidth <= innerWidth; }), 'review: the cancer pain leaflet and its listen bar stay inside a phone screen');
    const top = async q => { await p.evaluate(() => openPal()); await p.fill('#gq', ''); await p.fill('#gq', q); await p.waitForTimeout(250); const h = await p.$$eval('#palbody a', as => as.slice(0, 3).map(a => a.getAttribute('href'))); await p.keyboard.press('Escape'); await p.waitForTimeout(100); return h; };
    const cp = await top('chest pain'), tops = [(await top('asthma'))[0], (await top('dengue'))[0], (await top('MC'))[0], (await top('renal colic'))[0]];
    ok(cp.includes('#acs') && tops.join(' ') === '#asthma #dengue-cpg #emacc #renal-colic', 'review: search finds the ACS pathway in the top three for "chest pain", and puts the ebook asthma pathway first for "asthma", the dengue CPG for "dengue", EMACC for "MC" and renal colic for "renal colic" (' + cp.join(' ') + '; ' + tops.join(' ') + ')');
    ok(await p.evaluate(() => TIPS.every(t => !!t.src) && /Dengue in Adults/.test(TIPS[0].src) && TIPS.find(t => /cannot walk/.test(t.t)).l === 'Limbs and fractures' && typeof TIP_SRC === 'undefined'), 'review: every pearl carries its own source (the dengue pearl names the CPG)');
    await go(p, '#pathways', 300);
    ok(await p.evaluate(() => /the 24 rules and protocols/.test(document.querySelector('#v-pathways .vhead p').textContent) && [...document.querySelectorAll('[data-ver]')].every(e => /^Version 8, updated /.test(e.textContent)) && INTRO.every(i => !/\{(calcs|nums)\}/.test(i.p) || /calculators/.test(i.p))), 'review: the counts in the views\' own text follow the data, and the version line is current');
    for (const v of ['#new', '#about', '#poster', '#dilution']) await go(p, v, 450);
    await p.waitForTimeout(600);
    ok(await p.evaluate(() => [['newhero', 'whatsnew'], ['abouthero', 'sources'], ['posterhero', 'poster'], ['dghero', 'dilute']].every(([id, k]) => { const t = document.querySelector('#' + id + ' .tm'); return !!t && t.dataset.tm === k && TILE_KEYS.has(k) && !!t.querySelector('img'); })) && ['dilute', 'whatsnew', 'sources', 'poster'].every(k => fs.existsSync(path.join(__dirname, '..', 'app', 'tiles', k + '.mp4')) && fs.existsSync(path.join(__dirname, '..', 'app', 'tiles', k + '.webp'))), 'review: What\'s new, Sources and about, the wall poster and the dilution guide open on their own Flow banners, each a still and its loop');
    ok(await p.evaluate(() => P['infection-alerts'].nodes.notify.links.some(l => l[0] === '#gz-rules--notif') && P['new-hkl'].nodes.grey.items.some(i => /5441/.test(i)) && P['dengue-cpg'].nodes.yellow.links.some(l => l[0] === '#gz-rules--dengue') && P['safe-practice'].nodes.rx.links.some(l => l[0] === '#prescribing--check')), 'review: repeated topics point to their one full copy, and every old link still opens');
    await go(p, '#links', 300);
    const tl = await p.evaluate(() => document.querySelector('#toptitle').textContent);
    await go(p, '#share', 300);
    ok(tl === 'ED links' && await p.evaluate(() => document.querySelector('#toptitle').textContent) === 'Share the guide', 'review: the top bar names ED links and Share the guide');
    ok(await p.evaluate(() => !Object.values(P).some(e => /Krishna/.test(JSON.stringify(e))) && !CONFIRM.some(c => /Krishna/.test(c))), 'review: the app text says "the guide owner", not a name');
  }

  /* ---------- The ED extension directory (12 Nov 2026, data22.js) ---------- */
  {
    await go(p, '#numbers', 500);
    ok(await p.evaluate(() => EXTDIR.groups.length === 5 && document.querySelectorAll('#extl .ext-l li').length === 34 && document.querySelectorAll('#extl [data-ext]').length === 46 && !!document.querySelector('#exthero [data-ext="6705"]') && document.querySelector('#exthero .tm').dataset.tm === 'extdir' && TILE_KEYS.has('extdir')) && ['mp4', 'webp'].every(x => fs.existsSync(path.join(__dirname, '..', 'app', 'tiles', 'extdir.' + x))) && await hscroll(p) === 0, 'extensions: the directory lists 34 rooms and 46 extension keys in five areas, with 6705 on its Flow banner (a still and its loop), and nothing scrolls sideways');
    await p.fill('#extq', 'resus'); await p.waitForTimeout(200);
    ok(await p.evaluate(() => [...document.querySelectorAll('#extl .ext-t b')].map(b => b.textContent).join('|') === 'Resus I|Resus II'), 'extensions: "resus" finds Resus I and Resus II');
    await p.fill('#extq', '5359'); await p.waitForTimeout(200);
    ok(await p.evaluate(() => [...document.querySelectorAll('#extl .ext-t b')].map(b => b.textContent).join('|') === 'Observation Ward' && !!document.querySelector('#extl .ext-x mark')), 'extensions: digits find the room, with the digits marked');
    await p.fill('#extq', ''); await p.evaluate(() => document.querySelector('#extf [data-ef="ucc"]').click()); await p.waitForTimeout(150);
    ok(await p.evaluate(() => document.querySelectorAll('#extl .ext-l li').length === 4), 'extensions: the UCC / PHC filter shows its four rooms');
    await p.evaluate(() => document.querySelector('#extf [data-ef="all"]').click()); await p.waitForTimeout(150);
    ok(await p.evaluate(() => CONFIRM.some(c => /6699 for Bilik Porter PPK and Pejabat Rekod Kecemasan/.test(c)) && [...document.querySelectorAll('#extl small')].filter(x => /same number/.test(x.textContent)).length === 6 && /no issuer or date printed/.test(document.querySelector('#extsrc').textContent)), 'extensions: the three numbers printed for two rooms are marked on all six rows and under Still to confirm, and the source line says what the list lacks');
    await p.evaluate(() => openPal()); await p.fill('#gq', 'observation ward'); await p.waitForTimeout(250);
    await p.keyboard.press('Enter'); await p.waitForTimeout(400);
    ok(await p.evaluate(() => location.hash === '#numbers' && document.querySelector('#extq').value === 'Observation Ward' && document.querySelectorAll('#extl .ext-l li').length === 1), 'search: "observation ward" opens the directory on its row');
    await p.evaluate(() => { document.querySelector('#extq').value = ''; renderExt(); });
  }

  /* ---------- Seven features of 12 Nov 2026: forgiving search, voice, home care advice by QR, Copy route, saving
     everything (in the web app section below), Ask in your own words and Flag this step ---------- */
  {
    const fm = q => p.evaluate(q => { const x = findMore(q); return {fixed:x.fixed, also:x.also, r:x.r.map(e => e.href)}; }, q);
    let r = await fm('renal colic');
    ok(r.r[0] === '#renal-colic' && !r.fixed && !r.also.length, 'forgiving search: a query that already matches is left as it is (renal colic)');
    r = await fm('paracetmol'); ok(r.fixed === 'paracetamol' && r.r[0] === '#paracetamol-overdose', 'forgiving search: "paracetmol" finds paracetamol overdose, as a corrected word');
    r = await fm('renal collic'); ok(r.fixed === 'renal colic' && r.r[0] === '#renal-colic', 'forgiving search: "renal collic" finds renal colic');
    r = await fm('asthama'); ok(r.fixed === 'asthma' && r.r[0] === '#asthma', 'forgiving search: "asthama" finds asthma');
    r = await fm('hypoglycemia'); ok(r.fixed === 'hypoglycaemia' && r.r[0] === '#hypoglycaemia', 'forgiving search: the American spelling hypoglycemia finds hypoglycaemia');
    r = await fm('diarrhea'); ok(r.fixed === 'diarrhoea' && r.r.slice(0, 3).includes('#gastroenteritis'), 'forgiving search: diarrhea finds diarrhoea and gastroenteritis');
    r = await fm('sakit dada'); ok(r.also.includes('chest pain') && r.r.slice(0, 3).includes('#acs'), 'forgiving search: Malay "sakit dada" adds chest pain, with the ACS pathway in the top 3');
    r = await fm('kencing batu'); ok(r.r[0] === '#renal-colic', 'forgiving search: "kencing batu" opens with renal colic');
    r = await fm('cirit-birit'); ok(r.r.slice(0, 3).includes('#gastroenteritis'), 'forgiving search: "cirit-birit" finds gastroenteritis');
    r = await fm('darah tinggi'); ok(r.r[0] === '#hypertensive-urgency', 'forgiving search: "darah tinggi" opens with hypertensive urgency');
    r = await fm('AGE'); ok(r.r[0] === '#gastroenteritis', 'forgiving search: AGE in capitals opens with gastroenteritis');
    r = await fm('age'); ok(!r.also.length && !r.fixed, 'forgiving search: "age" in small letters stays the word age');
    r = await fm('5359'); ok(!r.fixed && r.r[0] === '#numbers', 'forgiving search: digits are never corrected (an extension finds its room)');
    r = await fm('dengue'); ok(r.r[0] === '#dengue-cpg' && !r.also.length, 'forgiving search: dengue still opens with the CPG');
    await p.evaluate(() => openPal()); await p.fill('#gq', 'metoclopromide'); await p.waitForTimeout(250);
    ok(/Nothing for .metoclopromide.\. Showing results for metoclopramide/.test(await p.textContent('#gfix').catch(() => '')), 'forgiving search: a corrected word is always shown, so a corrected drug name is never silent');
    await p.fill('#gq', 'sakit perut'); await p.waitForTimeout(250);
    ok(/Including results for abdominal pain/.test(await p.textContent('#gfix').catch(() => '')) && await p.evaluate(() => [...document.querySelectorAll('#gres a')].slice(0, 3).some(a => a.getAttribute('href') === '#abdominal-pain')), 'forgiving search: "sakit perut" says it includes abdominal pain, with the ebook pathway in the top 3');
    ok(await p.evaluate(() => !!(window.SpeechRecognition || window.webkitSpeechRecognition) === !document.querySelector('#gmic').hidden && /not a patient's name/.test(MIC_HINT.en) && /bukan nama atau butiran pesakit/.test(MIC_HINT.ms)), 'voice: the microphone shows where the browser can listen, and its hint says not to speak a patient\'s details');
    ok(await p.evaluate(() => askFn === null && askBtn('dengue in pregnancy') === '' && !document.querySelector('#gask')), 'ask: outside claude.ai there is no Ask button');
    await p.keyboard.press('Escape');

    /* Copy route: walk renal colic to its discharge by tapping, then copy */
    await go(p, '#renal-colic', 500);
    const plan = await p.evaluate(() => { const q = P['renal-colic']; const end = Object.keys(q.nodes).find(k => q.nodes[k].end === 'discharge'); return {end, labels:pathTo('renal-colic', end).map(t => t.label)}; });
    for (const l of plan.labels){
      const sel = await p.evaluate(l => { const n = P[state.id].nodes[state.cur]; return l === 'Done' ? '#run [data-next]' : `#run [data-go="${n.opts.findIndex(o => o[0] === l)}"]`; }, l);
      await p.click(sel); await p.waitForTimeout(120);
    }
    const rt = await p.evaluate(() => routeText(P[state.id], P[state.id].nodes[state.cur]));
    ok(await p.evaluate(e => state.cur === e, plan.end) && !!(await p.$('#run [data-copyroute]')) && /^Renal colic: route through the pathway\n1\. .+ Answer: Yes/.test(rt) && /\nOutcome: .+\n- /.test(rt) && /pages 53–54/.test(rt) && !/—/.test(rt), 'copy route: after walking renal colic, the outcome offers Copy route: each question with the answer chosen, the outcome and its pages');
    await go(p, '#renal-colic--' + plan.end, 500);
    ok(!(await p.$('#run [data-copyroute]')), 'copy route: a step opened by a link has no route to copy (no answer is made up)');

    /* Home care advice by QR: the outcome's Show to patient, the code and the patient's page */
    await p.click('#run [data-ptqr]'); await p.waitForTimeout(250);
    ok(await p.evaluate(() => !document.querySelector('#ptq').hidden && document.querySelector('#ptq .ptq-c path').getAttribute('d') === PT_QR['renal-colic'].en.d && document.querySelector('#ptqu').textContent === APP_URL + '#pt-renal-colic'), 'patient QR: Show to patient on the discharge outcome brings up the code for the web app\'s #pt-renal-colic');
    await p.keyboard.press('Escape'); await p.waitForTimeout(150);
    const qrm2 = require('./qr.js');
    const codes = await p.evaluate(() => Object.entries(PT_QR).flatMap(([id, o]) => Object.entries(o).map(([lg, q]) => ({id, lg, ...q}))));
    const grid = q => { const m = Array.from({length:q.n}, () => Array(q.n).fill(false)); for (const [, x, y, n] of q.d.matchAll(/M(\d+) (\d+)h(\d+)/g)) for (let i = 0; i < +n; i++) m[+y][+x + i] = true; return m; };
    ok(codes.length === 16 && codes.every(q => { const d = qrm2.decode(grid(q)); return d.eccOk && d.text === q.u && q.u === 'https://zaq6184-cell.github.io/green-zone-mo-guide/#pt-' + q.id + (q.lg === 'ms' ? '-ms' : ''); }), 'patient QR: all 16 codes (since 24 Nov 2026 the six advice pages in Bahasa Melayu too) read back as their own #pt- address on the web app');
    ok(await p.evaluate(() => Object.keys(PT_QR).every(id => (P[id].leaflet && READ_LEAF[id]) || (P[id].advice && READ_ADV[id])) && Object.keys(READ_ADV).every(id => ptKey(id)) && ptKey('dengue') === 'dengue-cpg' && !ptKey('cellulitis')), 'patient QR: only advice written for the patient (the two leaflets and the read-aloud advice); the ebook\'s dengue hands out the CPG leaflet; none for cellulitis');
    await go(p, '#pt-dengue-cpg-ms', 600);
    ok(await p.evaluate(() => document.documentElement.classList.contains('pt-mode') && curView === 'pt' && getComputedStyle(document.querySelector('#topbar')).display === 'none' && getComputedStyle(document.querySelector('#tabbar')).display === 'none' && document.querySelector('#h-pt').textContent === 'Nasihat penjagaan di rumah' && !!document.querySelector('#ptbody .lsn[data-read="leaf-dengue-ms"]') && document.querySelectorAll('#ptbody .leaf-g').length === P['dengue-cpg'].leaflet.ms.groups.length) && await hscroll(p) <= 0, 'patient page: #pt-dengue-cpg-ms shows the Malay leaflet with Listen, and nothing else from the guide, with no sideways scroll');
    await p.screenshot({path:out + '/p-pt.png'});
    await go(p, '#pt-renal-colic', 500);
    ok(await p.evaluate(() => document.querySelectorAll('#ptbody .pt-list li').length === P['renal-colic'].advice.length && ![...document.querySelectorAll('#ptbody .pt-list li')].some(li => /\(p\s?\d/.test(li.textContent))), 'patient page: the advice lines are all there, without the ebook\'s page references');
    await go(p, '#home', 400);
    ok(await p.evaluate(() => !document.documentElement.classList.contains('pt-mode') && document.title === 'Green Zone MO Guide'), 'patient page: leaving it brings the guide back, with its title');

    /* Flag this step: preset reasons, no box to type in, a report to send */
    await go(p, '#renal-colic', 500);
    await p.click('#run [data-flag]'); await p.waitForTimeout(200);
    await p.click('#flagbody [data-fw="2"]'); await p.waitForTimeout(120);
    const ft = await p.textContent('#flagt');
    ok(/Where: Renal colic: /.test(ft) && /#renal-colic\n/.test(ft) && /What: It is unclear/.test(ft) && !(await p.$('#flagdlg input, #flagdlg textarea, #flagdlg [contenteditable]')) && (await p.getAttribute('#flagwa', 'href')).startsWith('https://wa.me/?text=Green%20Zone'), 'flag: Something wrong on this step offers preset reasons only, and a report with the step\'s link to send on WhatsApp or copy');
    await p.screenshot({path:out + '/p-flag.png'});
    await p.keyboard.press('Escape');

    /* Ask in your own words, with a stand-in for the claude.ai host: the guide's own entries only */
    const ac2 = await b.newContext({...phone, reducedMotion:'reduce'});
    await ac2.addInitScript(() => {
      const fake = Object.assign(async () => ({text:''}), {json: async input => { window.__askIn = input; return {picks:['c2', 'c1', 'c99', '#made-up', 'c2']}; }});
      window.claude = {use: async n => n === 'sample' ? fake : null};
    });
    const aq = await ac2.newPage(); aq.on('pageerror', e => errs.push('ask PAGEERROR: ' + e.message));
    await aq.goto(U + '#home', {waitUntil:'load'}); await aq.waitForTimeout(600);
    await aq.evaluate(() => openPal()); await aq.fill('#gq', 'pregnant dengue patient which zone'); await aq.waitForTimeout(300);
    ok(await aq.isVisible('#gask') && /Don't type a patient's name or details/.test(await aq.textContent('#gask')), 'ask: in claude.ai the Ask button shows, and says not to type a patient\'s details');
    await aq.click('#gask'); await aq.waitForTimeout(500);
    const asked = await aq.evaluate(() => ({n:(window.__askIn.match(/^c\d+ \|/gm) || []).length, q:/pregnant dengue patient which zone/.test(window.__askIn), picks:[...document.querySelectorAll('#gaskres a')].map(a => a.getAttribute('href')), cands:askCands('pregnant dengue patient which zone').map(e => e.href)}));
    ok(asked.q && asked.n > 0 && asked.n <= 40 && asked.picks.length === 2 && asked.picks[0] === asked.cands[1] && asked.picks[1] === asked.cands[0] && asked.picks.every(h => /^#[a-z0-9-]+(--\w+)?$/.test(h)), 'ask: Claude is sent the question and at most 40 of the guide\'s own places, and only its valid picks show, as the guide\'s own entries (a made-up pick is ignored)');
    await ac2.close();
  }

  /* ---------- The cosmetic round of 13 Nov 2026, and the comment box for flagged steps ---------- */
  {
    /* The suggested answer in thumb reach */
    await go(p, '#renal-colic', 500);
    ok(!(await p.$('#ansbar')), 'answer bar: a question without a checklist has none');
    await p.setViewportSize({width:390, height:740}); /* since 25 Nov 2026 the step starts higher on a phone, so a shorter screen puts its keys under the tab bar */
    await go(p, '#renal-colic--urgent', 600);
    await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(250);
    await p.evaluate(() => document.querySelector('#cur .checks input').click()); await p.waitForTimeout(400);
    const ab = await p.evaluate(() => { const b = document.querySelector('#ansbar'), s = document.querySelector('#cur button.opt.sugg'), r = s.getBoundingClientRect(), br = b.getBoundingClientRect(), tb = document.querySelector('#tabbar').getBoundingClientRect();
      return {shown:!b.hidden, label:b.querySelector('b') && b.querySelector('b').textContent, sugg:s.querySelector('span').textContent, below:r.top > innerHeight - 112, aboveTab:br.bottom <= tb.top, h:br.height}; });
    ok(ab.below && ab.shown && ab.label === ab.sugg && ab.aboveTab && ab.h >= 44, 'answer bar: with the keys under the tab bar, a tick brings up the suggested answer in a bar just above it');
    if (!ab.below) console.log('  (answer bar check: ' + JSON.stringify(ab) + ')');
    await p.screenshot({path:out + '/p-ansbar.png'});
    await p.evaluate(() => document.querySelector('#cur button.opt.sugg').scrollIntoView({block:'center'})); await p.waitForTimeout(400);
    ok(await p.evaluate(() => document.querySelector('#ansbar').hidden), 'answer bar: it hides while the suggested key itself is on screen');
    await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(400);
    const to = await p.evaluate(() => P['renal-colic'].nodes.urgent.opts[0][1]);
    await p.click('#ansbar'); await p.waitForTimeout(400);
    ok(await p.evaluate(() => !document.documentElement.classList.contains('ab-on')), 'answer bar: once it has answered, the next step keeps no room for it');
    ok(await p.evaluate(to => state.cur === to && state.trail[state.trail.length - 1].label === P['renal-colic'].nodes.urgent.opts[0][0], to), 'answer bar: a tap answers with the suggested key');
    ok(await p.evaluate(() => { const t = document.querySelector('.trailx'); return !!t && t.scrollLeft >= t.scrollWidth - t.clientWidth - 2 && !!document.querySelector('.trailw .tlbl') && /: you answered /.test(t.querySelector('button .vh').textContent); }), 'route trail: it opens on the newest answer, its label stays put, and each answer names its question for a screen reader');
    await p.setViewportSize({width:390, height:844});
    ok(await p.evaluate(() => [...document.querySelectorAll('.strip .end')].every(e => getComputedStyle(e).backgroundColor === 'rgba(0, 0, 0, 0)')), 'route: on a phone the endings are plain dots and words');

    /* The outcome card */
    const end = await p.evaluate(() => Object.keys(P['renal-colic'].nodes).find(k => P['renal-colic'].nodes[k].end === 'discharge'));
    await go(p, '#renal-colic--' + end, 600);
    const ls0 = await p.evaluate(() => JSON.stringify(Object.entries(localStorage).filter(([k]) => k !== 'gz-recent')));
    await p.evaluate(() => document.querySelector('#cur .ticks input').click()); await p.waitForTimeout(150);
    const oc = await p.evaluate(() => { const f = document.querySelector('#cur .res-f'), pr = f.querySelector('.primary'), cs = getComputedStyle(f);
      return {boxes:document.querySelectorAll('#cur .ticks input[type="checkbox"]').length, items:P['renal-colic'].nodes[state.cur].items.length, ticked:document.querySelector('#cur .ticks input').checked,
        src:document.querySelector('#cur .res-s').textContent, last:f.lastElementChild === pr, full:Math.abs(pr.getBoundingClientRect().width - (f.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight))) < 2, again:!!f.querySelector('.res-again'), grid:cs.display}; });
    ok(oc.boxes === oc.items && oc.ticked && oc.src === 'Ebook p53–54' && oc.last && oc.full && oc.again && oc.grid === 'grid', 'outcome: the items are boxes to tick, the ebook pages are on the card, and the main action is full width at the foot');
    ok(await p.evaluate(ls0 => JSON.stringify(Object.entries(localStorage).filter(([k]) => k !== 'gz-recent')) === ls0, ls0), 'outcome: ticking an item stores nothing');
    await p.screenshot({path:out + '/p-outcome.png', fullPage:false});

    /* Badges, chips, search, the library, the view openings, the focus ring */
    ok(await p.evaluate(() => !!document.querySelector('.run-hero .badge.b-dept') && document.querySelector('.run-hero .chip.mono').textContent === 'Ebook p53–54' && getComputedStyle(document.querySelector('.run-hero .chip.mono')).fontFamily.includes('Mono')), 'banner: Dept notes has its own badge, and the ebook page chip is in the figure face');
    ok(await p.evaluate(() => { const b = 'The urgent indication for a urology referral is fever with urosepsis or pyelonephritis, frank haematuria or anuria, pregnancy, or a single kidney, transplanted kidney or another comorbidity that needs the urology team the same day.';
      const t = snippet(b, ['haematuria'], false).replace(/<[^>]+>/g, ''); const w = t.replace(/^…/, '').split(' ')[0], z = t.replace(/…$/, '').split(' ').pop();
      return t.startsWith('…') && b.includes(' ' + w + ' ') && b.includes(' ' + z) && (t.endsWith('…') ? b.includes(z + ' ') : true); }), 'search: a snippet starts and ends on whole words');
    await p.evaluate(() => openPal()); await p.fill('#gq', 'dengue'); await p.waitForTimeout(300);
    ok(await p.evaluate(() => { const R = document.querySelector('#palbody').getBoundingClientRect().right; const rs = [...document.querySelectorAll('#palbody .pal-res .rx')]; return rs.length > 5 && rs.every(x => x.getBoundingClientRect().right <= R + 1) && [...document.querySelectorAll('#palbody .pal-res .rs')].every(s => s.getBoundingClientRect().height <= parseFloat(getComputedStyle(s).lineHeight) * 2 + 2); }), 'search: each result stays inside the palette, its snippet at most two lines');
    await p.screenshot({path:out + '/p-search-rows.png'});
    await p.keyboard.press('Escape');
    await go(p, '#pathways', 500);
    ok(await p.evaluate(() => { const d = [...document.querySelectorAll('#libgrid .outs-dots')]; return d.every(e => e.scrollWidth <= e.clientWidth + 1 && getComputedStyle(e.querySelector('.od')).backgroundColor === 'rgba(0, 0, 0, 0)'); }) && await hscroll(p) <= 0, 'library: each row\'s endings are plain swatches and words, none hidden, with no sideways scroll');
    await go(p, '#numbers', 500);
    const vm = await p.evaluate(() => { const h = document.querySelector('#v-numbers .vhead'); return {more:getComputedStyle(h.querySelector('.vmore')).display, key:/current department directory/.test(h.querySelector('.vkey').textContent)}; });
    await p.click('#v-numbers [data-vmore]'); await p.waitForTimeout(100);
    ok(vm.more === 'none' && vm.key && await p.evaluate(() => getComputedStyle(document.querySelector('#v-numbers .vmore')).display !== 'none' && document.querySelector('#v-numbers [data-vmore]').getAttribute('aria-expanded') === 'true'), 'numbers: on a phone it opens on the sentence that carries its rule, and More shows the rest');
    await p.screenshot({path:out + '/p-numbers-open.png'});
    await go(p, '#renal-colic', 500);
    ok(await p.evaluate(() => { const f = e => getComputedStyle(document.querySelector(e)).getPropertyValue('--focus').trim(); return f('#run .back') !== f('.run-hero .chip') && f('.run-hero .chip').toLowerCase() === getComputedStyle(document.documentElement).getPropertyValue('--mint').trim().toLowerCase(); }), 'focus: the ring is dark green on pearl by day and mint on a jewel');
    await p.click('#run [data-flag]'); await p.waitForTimeout(200);
    ok(!(await p.$('#flagbody [data-flagcmt]')), 'comment box: outside claude.ai the flag has no comment button');
    await p.keyboard.press('Escape');

    /* The comment box, with a stand-in for the claude.ai host (composer only: the page opens claude.ai's own box and posts nothing) */
    const cc = await b.newContext({...phone, reducedMotion:'reduce'});
    await cc.addInitScript(() => {
      const fake = {openComposer: async t => { const el = t.range ? t.range.commonAncestorContainer : t.element; window.__cmt = {kind:t.range ? 'range' : 'element', text:(t.range ? t.range.toString() : t.element.textContent).trim(), id:el.id}; return {opened:true}; }};
      window.claude = {use: async n => n === 'comments' ? fake : null};
      try { Object.defineProperty(navigator, 'clipboard', {value:{writeText: t => { window.__clip = t; return Promise.resolve(); }}, configurable:true}); } catch(e){}
    });
    const cq = await cc.newPage(); cq.on('pageerror', e => errs.push('comment PAGEERROR: ' + e.message));
    await cq.goto(U + '#renal-colic--urgent', {waitUntil:'load'}); await cq.waitForTimeout(700);
    await cq.click('#run [data-flag]'); await cq.waitForTimeout(250);
    ok(await cq.isVisible('#flagbody [data-flagcmt]') && /Never write a patient's name, IC or anything that identifies them/.test(await cq.textContent('#flagbody .flag-c')), 'comment box: in claude.ai the flag offers Comment on this step, and says never to write a patient\'s details');
    await cq.screenshot({path:out + '/p-flag-comment.png'});
    await cq.click('#flagbody [data-flagcmt]'); await cq.waitForTimeout(300);
    const cm = await cq.evaluate(() => ({c:window.__cmt, closed:document.querySelector('#flagdlg').hidden, q:P['renal-colic'].nodes.urgent.q}));
    ok(cm.closed && cm.c && cm.c.kind === 'range' && cm.c.text === cm.q && cm.c.id === 'sq-renal-colic--urgent', 'comment box: it opens claude.ai\'s own comment box on this step\'s heading (its own id per step), and the flag dialog steps aside');
    const clip = await cq.evaluate(() => window.__clip || '');
    ok(/Where: Renal colic: /.test(clip) && /#renal-colic--urgent\n/.test(clip), 'comment box: the report, with the step\'s link, is copied to paste into the comment');
    await cc.close();

    /* Vibration (13 Nov 2026), with a stand-in for the phone's vibration */
    const vc = await b.newContext({...phone, reducedMotion:'reduce'});
    await vc.addInitScript(() => {
      window.__buzz = [];
      Object.defineProperty(navigator, 'vibrate', {value: p => { window.__buzz.push(JSON.stringify(p)); return true; }, configurable:true});
      try { Object.defineProperty(navigator, 'clipboard', {value:{writeText: () => Promise.resolve()}, configurable:true}); } catch(e){}
    });
    const vq = await vc.newPage(); vq.on('pageerror', e => errs.push('vibration PAGEERROR: ' + e.message));
    const lastBuzz = () => vq.evaluate(() => window.__buzz[window.__buzz.length - 1] || null);
    await vq.goto(U + '#renal-colic', {waitUntil:'load'}); await vq.waitForTimeout(600);
    ok(await vq.evaluate(() => window.__buzz.length === 0), 'vibration: opening a pathway does not buzz');
    await vq.click('#run [data-go="0"]'); await vq.waitForTimeout(250);
    const tick = await lastBuzz();
    const vend = await vq.evaluate(() => Object.keys(P['renal-colic'].nodes).find(k => P['renal-colic'].nodes[k].end === 'discharge'));
    const vplan = await vq.evaluate(e => pathTo('renal-colic', e).map(t => t.label), vend);
    await vq.evaluate(() => restart()); await vq.waitForTimeout(200);
    for (const l of vplan){ const sel = await vq.evaluate(l => { const n = P[state.id].nodes[state.cur]; return l === 'Done' ? '#run [data-next]' : `#run [data-go="${n.opts.findIndex(o => o[0] === l)}"]`; }, l); await vq.click(sel); await vq.waitForTimeout(120); }
    const landed = await lastBuzz();
    await vq.click('#run [data-copyout]'); await vq.waitForTimeout(250);
    ok(tick === '8' && landed === '[22]' && await lastBuzz() === '14', 'vibration: a light tick on each answer, a pulse on reaching the outcome, and a buzz when a copy is made');
    await vq.goto(U + '#tools', {waitUntil:'load'}); await vq.waitForTimeout(500);
    await vq.click('[data-dc="s0"]'); await vq.waitForTimeout(150);
    ok(await lastBuzz() === '[30,70,30]', 'vibration: ticking a stop sign on the discharge check buzzes twice');
    await vq.evaluate(() => { wbEnd = Date.now() - 1; clearInterval(wbT); wbT = setInterval(wbTick, 1000); wbTick(); }); await vq.waitForTimeout(150);
    ok(await lastBuzz() === '[400,150,400,150,600]', 'vibration: the 20WBCT timer running out gives a long buzz');
    await vq.evaluate(() => openSettings()); await vq.waitForTimeout(200);
    ok(await vq.isVisible('#st-buzzrow'), 'vibration: Settings offers it on a phone that can vibrate');
    await vq.click('#st-buzz [data-val="off"]'); await vq.waitForTimeout(150);
    const n0 = await vq.evaluate(() => window.__buzz.length);
    await vq.evaluate(() => closeSettings(false));
    await vq.click('[data-dc="s1"]'); await vq.waitForTimeout(150);
    ok(await vq.evaluate(n0 => window.__buzz.length === n0 && localStorage.getItem('gz-buzz') !== null, n0), 'vibration: switched off in Settings, nothing buzzes, and only the switch is kept');
    await vc.close();

    /* Smart search (13 Nov 2026): the model downloads the first time a search is typed, then meaning sorts what words miss */
    const ac = await b.newContext({...phone, reducedMotion:'reduce'});
    const aq = await ac.newPage(), aiReq = []; aq.on('pageerror', e => errs.push('smart search PAGEERROR: ' + e.message));
    aq.on('request', r => { if (/\/ai\//.test(r.url())) aiReq.push(r.url()); });
    await aq.goto(U + '#home', {waitUntil:'load'}); await aq.waitForTimeout(800);
    ok(aiReq.length === 0 && fs.existsSync(path.join(__dirname, '..', 'app', 'ai', 'model.bin')) && fs.existsSync(path.join(__dirname, '..', 'app', 'ai', 'LICENSE.txt')), 'smart search: nothing of the model downloads before a search');
    await aq.evaluate(() => openPal()); await aq.fill('#gq', 'fainted');
    await aq.waitForFunction(() => AI.state === 'ready' || AI.state === 'failed', null, {timeout:20000}).catch(() => {});
    await aq.waitForTimeout(300);
    const top3 = q => aq.evaluate(q => { const kw = findMore(q), sm = smartFind(q, kw); return (sm ? sm.r : kw.r).slice(0, 3).map(e => e.href + ' ' + e.title); }, q);
    const first = q => aq.evaluate(q => { const kw = findMore(q), sm = smartFind(q, kw); return ((sm ? sm.r : kw.r)[0] || {}).href; }, q);
    ok(await aq.evaluate(() => AI.state === 'ready' && AI.n > 3000) && aiReq.some(u => /ai\/model\.bin$/.test(u)) && aiReq.some(u => /ai\/vocab\.txt$/.test(u)), 'smart search: the first search downloads the model, and the guide\'s passages are read on the phone');
    ok(/Smart search: closest in meaning first/.test(await aq.textContent('#gai').catch(() => '')) && (await top3('fainted')).some(t => /syncope/i.test(t)), 'smart search: "fainted" finds syncope, and the palette says meaning sorted it');
    await aq.screenshot({path:out + '/p-smart.png'});
    const want = {'fell and hit head':/head/i, 'ankle sprain':/ankle/i, 'red swollen leg':/dvt|leg/i, 'platelet low':/dengue/i, 'renal failure':/ckd|kidney|nephro|dialysis/i, 'allergic reaction':/anaphylaxis/i, 'old lady fall':/hip|fall/i, 'short of breath':/asthma|breathless|copd/i};
    const misses = [];
    for (const [q, re] of Object.entries(want)) if (!(await top3(q)).some(t => re.test(t))) misses.push(q);
    ok(misses.length === 0, 'smart search: everyday words find their pages (head injury, ankle, DVT, dengue, CKD, anaphylaxis, hip fracture, asthma)' + (misses.length ? ': missed ' + misses.join(', ') : ''));
    const keepFirst = {'renal colic':'#renal-colic', 'dengue':'#dengue-cpg', 'AGE':'#gastroenteritis', '5359':'#numbers', 'kencing batu':'#renal-colic', 'paracetmol':'#paracetamol-overdose', 'asthama':'#asthma', 'code blue':'#code-blue', 'emacc':'#emacc', 'rabies':'#calc-rabies'};
    const moved = [];
    for (const [q, h] of Object.entries(keepFirst)) if (await first(q) !== h) moved.push(q + ' -> ' + await first(q));
    ok(moved.length === 0, 'smart search: searches that already worked keep their first result' + (moved.length ? ': ' + moved.join(', ') : ''));
    await aq.fill('#gq', 'ankle sprain'); await aq.waitForTimeout(250);
    ok(!/ankle strain/.test(await aq.textContent('#palbody')), 'smart search: "ankle sprain" is not "corrected" to ankle strain');
    /* Malay-aware smart search: a Malay search downloads the Malay model, once; English searches never do */
    ok(!aiReq.some(u => /ms-model/.test(u)) && await aq.evaluate(() => msQuery('sakit dada') && !msQuery('chest pain') && AIMS.state === 'idle'), 'smart search: English searches never download the Malay model');
    await aq.fill('#gq', 'buku lali terseliuh');
    await aq.waitForFunction(() => AIMS.state === 'ready' || AIMS.state === 'failed', null, {timeout:20000}).catch(() => {});
    ok(await aq.evaluate(() => AIMS.state === 'ready') && aiReq.some(u => /ai\/ms-model\.bin$/.test(u)) && aiReq.some(u => /ai\/ms-vocab\.txt$/.test(u)), 'smart search: the first Malay search downloads the Malay model');
    const msWant = {'buku lali terseliuh':/ankle/i, 'alahan teruk':/anaphylaxis|allerg/i, 'luka terbakar':/burn/i, 'lemah sebelah badan':/stroke|cva/i, 'kaki bengkak merah':/dvt|leg|cellulitis/i, 'sakit belakang':/pain|back/i, 'digigit kucing':/bite|rabies/i};
    const msMiss = [];
    for (const [q, re] of Object.entries(msWant)) if (!(await top3(q)).some(t => re.test(t))) msMiss.push(q);
    ok(msMiss.length === 0 && await aq.evaluate(() => smartFind('alahan teruk', findMore('alahan teruk')).ms === true), 'smart search: Malay searches go to the Malay model and find their pages' + (msMiss.length ? ': missed ' + msMiss.join(', ') : ''));
    await aq.evaluate(() => { closePal(false); openSettings(); }); await aq.waitForTimeout(150);
    ok(/Ready on this device/.test(await aq.textContent('#st-aistate')), 'smart search: Settings says it is ready on this device');
    await aq.click('#st-ai [data-val="off"]'); await aq.evaluate(() => closeSettings(false));
    ok(await aq.evaluate(() => smartFind('fainted', findMore('fainted')) === null && prefs.ai === 'off' && /off/.test(localStorage.getItem('gz-ai'))), 'smart search: switched off in Settings, search goes by words alone');
    await ac.close();
    /* The claude.ai copy serves the model as base64 text (it serves no .bin): with only that file, smart search still loads */
    const b64 = path.join(__dirname, '..', 'sources', 'ai', 'model.b64.txt');
    if (fs.existsSync(b64)){
      const bc = await b.newContext({...phone, reducedMotion:'reduce'});
      await bc.route('**/ai/model.bin', r => r.fulfill({status:404, body:'not here'}));
      await bc.route('**/ai/model.b64.txt', r => r.fulfill({status:200, contentType:'text/plain', body:fs.readFileSync(b64, 'utf8')}));
      const msb64 = path.join(__dirname, '..', 'sources', 'ai', 'ms', 'model.b64.txt');
      await bc.route('**/ai/ms-model.bin', r => r.fulfill({status:404, body:'not here'}));
      await bc.route('**/ai/ms-model.b64.txt', r => fs.existsSync(msb64) ? r.fulfill({status:200, contentType:'text/plain', body:fs.readFileSync(msb64, 'utf8')}) : r.fulfill({status:404, body:''}));
      const bq = await bc.newPage(); bq.on('pageerror', e => errs.push('smart search b64 PAGEERROR: ' + e.message));
      await bq.goto(U + '#home', {waitUntil:'load'}); await bq.waitForTimeout(500);
      await bq.evaluate(() => aiLoad());
      ok(await bq.evaluate(() => AI.state === 'ready' && smartFind('fainted', findMore('fainted')).r[0].href === '#syncope'), 'smart search: the base64 copy the claude.ai artifact serves loads the same model');
      await bq.evaluate(() => aiLoadMs());
      ok(await bq.evaluate(() => AIMS.state === 'ready' && smartFind('alahan teruk', findMore('alahan teruk')).ms === true), 'smart search: the base64 copy of the Malay model loads too');
      await bc.close();
    }

    /* Read aloud with the phone's own voices (13 Nov 2026), with a stand-in for the phone's speech */
    const tc = await b.newContext({...phone, reducedMotion:'reduce'});
    await tc.addInitScript(() => {
      window.__said = []; window.__cancel = 0;
      const voices = [{lang:'en-US', name:'English US', localService:true}, {lang:'en-GB', name:'English UK', localService:true}, {lang:'ms-MY', name:'Malay', localService:true}];
      window.SpeechSynthesisUtterance = class { constructor(t){ this.text = t; } };
      Object.defineProperty(window, 'speechSynthesis', {configurable:true, value:{speaking:false,
        getVoices: () => window.__noms ? voices.filter(v => !/^ms/.test(v.lang)) : voices,
        speak(u){ window.__said.push({t:u.text, lang:u.lang, v:u.voice && u.voice.name}); if (!window.__hold) setTimeout(() => { if (u.onend) u.onend(); }, 30); },
        cancel(){ window.__cancel++; }}});
    });
    const tq = await tc.newPage(); tq.on('pageerror', e => errs.push('read aloud PAGEERROR: ' + e.message));
    await tq.goto(U + '#renal-colic--urgent', {waitUntil:'load'}); await tq.waitForTimeout(600);
    await tq.click('#run [data-say="cur"]'); await tq.waitForTimeout(250);
    const said1 = await tq.evaluate(() => ({all:window.__said.map(s => s.t).join(' '), s:window.__said[0], q:P['renal-colic'].nodes.urgent.q}));
    ok(said1.s && said1.s.lang === 'en-GB' && said1.s.v === 'English UK' && said1.all.includes(said1.q) && /Answers: /.test(said1.all) && !/Read aloud|Something wrong|Copy/.test(said1.all), 'read aloud: the step is read by the phone\'s own British English voice, its question and its answers, and none of the buttons');
    await tq.goto(U + '#dengue-cpg', {waitUntil:'load'}); await tq.waitForTimeout(500);
    await tq.evaluate(() => { window.__said = []; selectTab('leaflet'); }); await tq.click('#run [data-leaf="ms"]'); await tq.waitForTimeout(150);
    await tq.click('#run [data-say="tab"]:visible'); await tq.waitForTimeout(250);
    const said2 = await tq.evaluate(() => ({all:window.__said.map(s => s.t).join(' '), s:window.__said[0], title:P['dengue-cpg'].leaflet.ms.title}));
    ok(said2.s && said2.s.lang === 'ms-MY' && said2.s.v === 'Malay' && said2.all.includes(said2.title), 'read aloud: the Malay side of a leaflet is read by a Malay voice');
    await tq.evaluate(() => { window.__said = []; window.__noms = true; });
    await tq.click('#run [data-say="tab"]:visible'); await tq.waitForTimeout(250);
    ok(await tq.evaluate(() => window.__said.length === 0), 'read aloud: with no Malay voice on the phone it says so, rather than reading Malay in an English voice');
    await tq.evaluate(() => { window.__noms = false; window.__hold = true; }); await tq.click('#run [data-say="tab"]:visible'); await tq.waitForTimeout(100);
    const reading = await tq.evaluate(() => ({on:!!sayOn, c:window.__cancel, label:sayOn && sayOn.querySelector('span').textContent})); /* the visible one: since 25 Nov 2026 a tab with a recording carries it in its Listen bar */
    await tq.evaluate(() => { location.hash = '#renal-colic'; }); await tq.waitForTimeout(300);
    ok(reading.on && reading.label === 'Stop reading' && await tq.evaluate(c => !sayOn && window.__cancel > c, reading.c), 'read aloud: while it reads, the button says Stop reading, and leaving the page stops it');
    /* 18 Nov 2026: the pink EM Watch form: an English step with a Malay-titled card reads in English; each consent tab in its own voice */
    await tq.evaluate(() => { window.__hold = false; window.__said = []; });
    await tq.goto(U + '#em-watch--form', {waitUntil:'load'}); await tq.waitForTimeout(600);
    await tq.click('#run [data-say="cur"]'); await tq.waitForTimeout(250);
    const said3 = await tq.evaluate(() => ({s:window.__said[0], all:window.__said.map(s => s.t).join(' ')}));
    ok(said3.s && said3.s.lang === 'en-GB' && /Fill in the pink EM Watch form/.test(said3.all), 'read aloud: the EM Watch form step reads in English, though its card\'s title is Malay');
    await tq.evaluate(() => { sayStop(); window.__said = []; selectTab('n0'); }); await tq.waitForTimeout(150);
    await tq.click('#run [data-say="tab"]:visible'); await tq.waitForTimeout(250);
    const said4 = await tq.evaluate(() => ({s:window.__said[0], all:window.__said.map(s => s.t).join(' ')}));
    ok(said4.s && said4.s.lang === 'ms-MY' && said4.s.v === 'Malay' && /Kebenaran Rawatan/.test(said4.all) && /Saya adalah pesakit atau penjaga yang sah/.test(said4.all), 'read aloud: the EM Watch consent in Malay is read by a Malay voice, as printed');
    await tq.evaluate(() => { sayStop(); window.__said = []; selectTab('n1'); }); await tq.waitForTimeout(150);
    await tq.click('#run [data-say="tab"]:visible'); await tq.waitForTimeout(250);
    const said5 = await tq.evaluate(() => ({s:window.__said[0], all:window.__said.map(s => s.t).join(' ')}));
    ok(said5.s && said5.s.lang === 'en-GB' && /Treatment consent/.test(said5.all) && /I am the patient or authorised guardian/.test(said5.all), 'read aloud: the English consent is read by an English voice');
    await tc.close();

    /* Back through this visit (18 Nov 2026): the arrow restores the page left, as it was; a revisit by address starts fresh */
    const nv = await b.newContext({...phone, reducedMotion:'reduce'}), nq = await nv.newPage(); nq.on('pageerror', e => errs.push('back PAGEERROR: ' + e.message));
    const NW = ms => nq.waitForTimeout(ms), nhash = h => nq.evaluate(x => { location.hash = x; }, h);
    await nq.goto(U + '#home', {waitUntil:'load'}); await NW(500);
    ok(await nq.evaluate(() => document.querySelector('#gback').hidden), 'back: no arrow on the first page of a visit');
    await nhash('#renal-colic'); await NW(450);
    await nq.tap('#cur button.opt[data-go="0"]'); await NW(350);
    await nq.tap('#cur button.opt[data-go="0"], #cur [data-next]'); await NW(350);
    const nat = await nq.evaluate(() => ({cur:state.cur, n:state.trail.length}));
    await nq.evaluate(() => scrollTo(0, 260)); await NW(150);
    await nq.evaluate(() => { const a = document.createElement('a'); a.href = '#emacc'; a.textContent = 'EMACC'; document.querySelector('#cur').appendChild(a); a.click(); }); await NW(500);
    const ng = await nq.evaluate(() => { const g = document.querySelector('#gback'); return {on:!g.hidden, label:g.getAttribute('aria-label'), peek:g.classList.contains('peek'), brand:getComputedStyle(document.querySelector('.top .brand')).display, menu:Math.round(document.querySelector('#menubtn').getBoundingClientRect().left), sw:document.documentElement.scrollWidth, iw:innerWidth}; });
    ok(ng.on && /^Back to Renal colic, Step 3 · /.test(ng.label) && ng.peek && ng.brand === 'none' && ng.menu <= 16 && ng.sw <= ng.iw, 'back: after a link inside a step, the arrow opens to show where it leads, in the logo\'s place, the menu unmoved and nothing past the edge' + (ng.on && ng.peek ? '' : ' ' + JSON.stringify(ng)));
    await nq.tap('#gback'); await NW(600);
    const nr = await nq.evaluate(() => ({hash:location.hash, cur:state.cur, n:state.trail.length, y:Math.round(scrollY), next:document.querySelector('#gback').getAttribute('aria-label')}));
    ok(nr.hash === '#renal-colic' && nr.cur === nat.cur && nr.n === nat.n && Math.abs(nr.y - 260) <= 4, 'back: returns to the same step, with its answers and its place on the page' + (nr.cur === nat.cur ? '' : ' ' + JSON.stringify({nr, nat})));
    ok(nr.next === 'Back to Home', 'back: and then offers the page before it');
    await nhash('#emacc'); await NW(450); await nq.goBack(); await NW(600);
    ok(await nq.evaluate(x => location.hash === '#renal-colic' && state.cur === x.cur && state.trail.length === x.n, nat), 'back: the phone\'s own back restores the step too');
    await nhash('#home'); await NW(350); await nhash('#renal-colic'); await NW(450);
    ok(await nq.evaluate(() => state.cur === P['renal-colic'].start && !state.trail.length), 'back: a pathway opened again by its address starts at its first question, as before');
    await nq.tap('#cur button.opt[data-go="0"]'); await NW(300);
    await nhash('#numbers'); await NW(400); await nhash('#pharmacy'); await NW(400);
    await nq.dispatchEvent('#gback', 'contextmenu'); await NW(250);
    const nl = await nq.evaluate(() => ({open:!document.querySelector('#gbm').hidden, rows:[...document.querySelectorAll('#gbml button b')].map(x => x.textContent), n:[...document.querySelectorAll('#gbml .gbm-n')].map(x => x.textContent), exp:document.querySelector('#gback').getAttribute('aria-expanded')}));
    ok(nl.open && nl.rows[0] === 'Numbers' && nl.rows[1] === 'Renal colic' && nl.n[0] === 'Back' && nl.n[1] === '2 back' && nl.exp === 'true', 'back: press and hold lists the earlier pages of the visit, newest first' + (nl.open ? '' : ' ' + JSON.stringify(nl)));
    await nq.tap('#gbml button >> nth=1'); await NW(550);
    ok(await nq.evaluate(() => location.hash === '#renal-colic' && state.trail.length === 1 && document.querySelector('#gbm').hidden), 'back: a row of the list goes back that far, as the page was');
    await nq.evaluate(() => { openPal(); document.querySelector('#gq').value = 'tramadol'; renderPal(); }); await NW(400);
    await nq.tap('#gres a >> nth=0'); await NW(550);
    ok(await nq.evaluate(() => document.querySelector('#gback').getAttribute('aria-label') === 'Back to Search, “tramadol”'), 'back: from a search result, the arrow leads back to the search');
    await nq.tap('#gback'); await NW(650);
    const ns = await nq.evaluate(() => ({open:!document.querySelector('#pal').hidden, q:document.querySelector('#gq').value, rows:document.querySelectorAll('#gres a').length, under:location.hash, kb:document.activeElement === document.querySelector('#gq')}));
    ok(ns.open && ns.q === 'tramadol' && ns.rows > 0 && ns.under === '#renal-colic' && !ns.kb, 'back: the search reopens with its words and results, over the page it came from, without the phone\'s keyboard' + (ns.open ? '' : ' ' + JSON.stringify(ns)));
    await nq.evaluate(() => closePal(true)); await NW(150);
    ok(await nq.evaluate(() => sessionStorage.length === 0 && Object.keys(localStorage).every(k => /^gz-/.test(k)) && !Object.values(localStorage).some(v => /"trail"|"gzl"/.test(v))), 'back: memory only: nothing is written to storage');
    await nv.close();
    /* On a desktop the menu carries it under Search */
    const dv = await b.newContext({viewport:{width:1280, height:800}, reducedMotion:'reduce'}), dq = await dv.newPage(); dq.on('pageerror', e => errs.push('back desk PAGEERROR: ' + e.message));
    await dq.goto(U + '#home', {waitUntil:'load'}); await dq.waitForTimeout(500);
    await dq.evaluate(() => { location.hash = '#asthma'; }); await dq.waitForTimeout(450); await dq.click('#cur button.opt[data-go="0"]'); await dq.waitForTimeout(350);
    await dq.evaluate(() => { location.hash = '#calc-curb'; }); await dq.waitForTimeout(500);
    const dd = await dq.evaluate(() => ({side:getComputedStyle(document.querySelector('.side-back')).display, top:getComputedStyle(document.querySelector('#topbar')).display, t:document.querySelector('#sbt').textContent, s:document.querySelector('#sbs').textContent}));
    ok(dd.side === 'flex' && dd.top === 'none' && dd.t === 'Bronchial asthma' && /^Step 2 · /.test(dd.s), 'back: on a desktop, the menu shows Back to, with the page and its step' + (dd.side === 'flex' ? '' : ' ' + JSON.stringify(dd)));
    await dq.click('.side-back', {button:'right'}); await dq.waitForTimeout(250);
    const dl = await dq.evaluate(() => { const m = document.querySelector('#gbm').getBoundingClientRect(), s = document.querySelector('.side-back').getBoundingClientRect(), top = document.elementFromPoint(m.left + 40, m.top + 40); return {open:!document.querySelector('#gbm').hidden, beside:m.left >= s.right, onTop:!!(top && top.closest('#gbm'))}; });
    ok(dl.open && dl.beside && dl.onTop, 'back: a right-click opens the list beside the menu, drawn above the page' + (dl.onTop ? '' : ' ' + JSON.stringify(dl)));
    await dq.keyboard.press('Escape'); await dq.waitForTimeout(150);
    await dq.click('.side-back'); await dq.waitForTimeout(550);
    ok(await dq.evaluate(() => location.hash === '#asthma' && state.trail.length === 1 && document.querySelector('#gbm').hidden), 'back: the menu\'s button goes back, as the page was');
    await dv.close();

    /* Open now (18 Nov 2026): the hours the sources print, read against Malaysia time, whatever the phone's own time zone */
    const onc = await b.newContext({...phone, reducedMotion:'reduce', timezoneId:'Europe/London'}), onq = await onc.newPage(); onq.on('pageerror', e => errs.push('open now PAGEERROR: ' + e.message));
    await onq.clock.setFixedTime(new Date('2026-11-17T06:40:00Z')); /* Tuesday 2.40 pm in Malaysia, 6.40 am in London */
    await onq.goto(U + '#home', {waitUntil:'load'}); await onq.waitForFunction(() => document.querySelectorAll('#tl-now .nowl a').length >= 3, null, {timeout:6000}).catch(() => {});
    await onq.evaluate(() => { document.querySelector('#tl-now .nowsum').open = true; }); /* on a phone the tile opens on one line (25 Nov 2026) */
    const on1 = await onq.evaluate(() => ({t:document.querySelector('#tl-now [data-nowt]').textContent, sh:document.querySelector('#tl-now .nowsh').textContent, emacc:document.querySelector('#tl-now [data-nowk="emacc"]').innerText, cls:document.querySelector('#tl-now [data-nowk="emacc"]').className}));
    ok(on1.t === 'Tue 2.40 pm' && on1.sh === 'AM shift' && /In session until 3 pm \(20 min left\)/.test(on1.emacc) && on1.cls === 'on', 'open now: the home tile reads Malaysia time on a phone set to London (Tuesday 2.40 pm, AM shift, EMACC in session for 20 more minutes)' + (on1.cls === 'on' ? '' : ' ' + JSON.stringify(on1)));
    const ost = await onq.evaluate(() => { const H = k => HOURS.find(h => h.k === k), L = (k, dow, h, m) => hoursState(H(k), {dow, min:h * 60 + m}).line;
      return {emOpen:L('emacc', 1, 8, 0), emClose:L('emacc', 2, 15, 0), emFri:L('emacc', 5, 15, 0), ewSat:L('emwatch', 6, 13, 0), ewSun:L('emwatch', 0, 10, 0),
        abcFri:L('abc', 5, 15, 30), abcThu:L('abc', 4, 16, 0), abcFriLate:L('abc', 5, 16, 30), sh1:L('shift', 3, 21, 59), sh2:L('shift', 3, 22, 0), sh3:L('shift', 4, 7, 59), sh4:L('shift', 4, 8, 0),
        cb1:L('cbs', 2, 16, 59), cb2:L('cbs', 2, 17, 0), mau:L('mau', 2, 4, 0), laot:L('laot', 2, 21, 0)}; });
    ok(ost.emOpen === 'In session until 3 pm' && ost.emClose === 'Not in session now; next session tomorrow, 8 am' && ost.emFri === 'Not in session now; next session Monday, 8 am', 'open now: EMACC opens on the minute and closes on the minute, and after Friday its next session is Monday' + (ost.emFri.includes('Monday') ? '' : ' ' + JSON.stringify(ost)));
    ok(ost.ewSat === 'In session until 2 pm' && ost.ewSun === 'Not in session now; next session tomorrow, 8 am', 'open now: EM Watch runs on Saturday and not on Sunday, as its slip prints');
    ok(ost.abcFri === 'In session until 4.30 pm (unless today is a public holiday)' && ost.abcThu === 'Not in session now; next session tomorrow, 3 pm (unless it is a public holiday)' && ost.abcFriLate === 'Not in session now; next session Monday, 2 pm (unless it is a public holiday)', 'open now: the Animal Bite Clinic keeps its Friday hours and says the public holiday it cannot know');
    ok(ost.sh1 === 'PM shift, 3 pm to 10 pm' && ost.sh2 === 'ON shift, 10 pm to 8 am' && ost.sh3 === 'ON shift, 10 pm to 8 am' && ost.sh4 === 'AM shift, 8 am to 3 pm', 'open now: the night shift runs across midnight');
    ok(/^Before 1700 hr/.test(ost.cb1) && /^After 1700 hr: the manual sends a SCACC Code Blue to MECC, 5333$/.test(ost.cb2) && ost.mau === 'After hours now: MAU 1, 2 or 3, until 8 am' && ost.laot === 'No orthopaedic cases in the emergency OT now, until 8 am', 'open now: the hours that change a route say what holds now and until when');
    ok(await onq.evaluate(() => HOURS.every(h => { const [id, k] = h.at.slice(1).split('--'); return P[id] && P[id].nodes[k] && JSON.stringify(P[id].nodes[k]).includes(h.phrase) && /days are not printed|Sessions|AM 8 am/.test(h.hrs); })), 'open now: every row\'s hours are still printed in the step it names, and the rows without days say so');
    await onq.evaluate(() => { location.hash = '#emacc--clinic'; }); await onq.waitForFunction(() => !!document.querySelector('.nowc [data-nowk="emacc"]'), null, {timeout:5000}).catch(() => {});
    const och = await onq.evaluate(() => { const c = document.querySelector('.nowc'); return c ? {t:c.innerText.replace(/\s+/g, ' '), before:!!(c.compareDocumentPosition(document.querySelector('#cur')) & Node.DOCUMENT_POSITION_FOLLOWING), kinds:/admit|discharge|observe|refer/.test(c.innerHTML)} : null; });
    ok(och && /Tue 2\.40 pm EMACC: In session until 3 pm/.test(och.t) && och.before && !och.kinds, 'open now: the EMACC step shows its hours live, with the time read, above the step, in no outcome colour' + (och ? '' : ' (no chips)'));
    await onq.clock.setFixedTime(new Date('2026-11-17T07:05:00Z')); await onq.evaluate(() => nowTick());
    ok(await onq.evaluate(() => /Tue 3\.05 pm EMACC: Not in session now; next session tomorrow, 8 am/.test(document.querySelector('.nowc').innerText.replace(/\s+/g, ' '))), 'open now: the chips update as the clock passes 3 pm');
    ok(await onq.evaluate(() => sessionStorage.length === 0 && !Object.keys(localStorage).some(k => /now|hour|open/i.test(k))), 'open now: nothing is stored');
    await onc.close();

    /* Changed since you last looked (18 Nov 2026): a count of rounds seen, and marks for what changed after it */
    const ec = await b.newContext({...phone, reducedMotion:'reduce'}), eq = await ec.newPage(); eq.on('pageerror', e => errs.push('changed PAGEERROR: ' + e.message));
    await eq.goto(U + '#em-watch', {waitUntil:'load'}); await eq.waitForTimeout(600);
    const e1 = await eq.evaluate(() => ({stored:localStorage.getItem('gz-round'), n:V8.length, note:!!document.querySelector('.chg-n'), mark:CHG.size}));
    ok(e1.stored === String(e1.n) && !e1.note && e1.mark === 0, 'changed: on a first open the phone stores the count of rounds and marks nothing');
    await eq.evaluate(() => localStorage.setItem('gz-round', String(V8.length - 1 - V8.findIndex(v => /pink EM Watch form/.test(v[0]))))); await eq.reload({waitUntil:'load'}); await eq.waitForTimeout(700);
    const e2 = await eq.evaluate(() => ({note:(document.querySelector('.chg-n') || {}).textContent || '', stored:localStorage.getItem('gz-round'), n:V8.length}));
    ok(/Changed since you last opened the guide: The pink EM Watch form/.test(e2.note) && e2.stored === String(e2.n), 'changed: rounds later, EM Watch opens with what changed in it, and the count moves on');
    await eq.evaluate(() => { location.hash = '#rules'; }); await eq.waitForTimeout(500);
    ok(await eq.evaluate(() => [...document.querySelectorAll('#v-rules .badge.b-chg')].length >= 1), 'changed: the rules list marks EM Watch Changed');
    await eq.evaluate(() => { location.hash = '#home'; }); await eq.waitForTimeout(500);
    ok(await eq.evaluate(() => document.querySelectorAll('#newcard .chg-d').length === Math.min(6, 1 + V8.findIndex(v => /pink EM Watch form/.test(v[0])))), 'changed: What\'s new on the home page marks the rounds that are new to this phone');
    await ec.close();

    /* The reference beside the step (18 Nov 2026), on a desktop */
    const rc = await b.newContext({viewport:{width:1280, height:800}, reducedMotion:'reduce'}), rq = await rc.newPage(); rq.on('pageerror', e => errs.push('ref beside PAGEERROR: ' + e.message));
    await rq.goto(U + '#renal-colic', {waitUntil:'load'}); await rq.waitForTimeout(600);
    await rq.click('.rail-p .refsw'); await rq.waitForTimeout(400);
    const rb = await rq.evaluate(() => { const c = document.querySelector('#cur').getBoundingClientRect(), r = document.querySelector('.refcol').getBoundingClientRect();
      return {side:document.querySelector('.run-grid').classList.contains('ref-side'), apart:c.right <= r.left, top:Math.abs(c.top - r.top) < 400, rail:getComputedStyle(document.querySelector('.rail-p')).display, strip:getComputedStyle(document.querySelector('.strip')).display, sw:document.documentElement.scrollWidth <= innerWidth, pref:localStorage.getItem('gz-refside')}; });
    ok(rb.side && rb.apart && rb.top && rb.rail === 'none' && rb.strip !== 'none' && rb.sw && /on/.test(rb.pref), 'reference beside: on a desktop the reference tabs sit beside the step, the route moves to the strip, nothing scrolls sideways' + (rb.apart ? '' : ' ' + JSON.stringify(rb)));
    await rq.evaluate(() => { location.hash = '#asthma'; }); await rq.waitForTimeout(500);
    ok(await rq.evaluate(() => document.querySelector('.run-grid').classList.contains('ref-side')), 'reference beside: it stays on for the next pathway');
    await rq.click('.refcol .refsw'); await rq.waitForTimeout(400);
    ok(await rq.evaluate(() => !document.querySelector('.run-grid').classList.contains('ref-side') && getComputedStyle(document.querySelector('.rail-p')).display !== 'none'), 'reference beside: Show your route brings the route panel back');
    await rq.setViewportSize({width:820, height:1100}); await rq.waitForTimeout(300);
    ok(await rq.evaluate(() => getComputedStyle(document.querySelector('.rail-p .refsw')).display === 'none' && document.documentElement.scrollWidth <= innerWidth), 'reference beside: a tablet held upright keeps one column, with no switch');
    await rc.close();

    /* Pages drawn when first needed (18 Nov 2026): with idle drawing switched off, a hand-off and a deep link still draw their page */
    const lc = await b.newContext({...phone, reducedMotion:'reduce'}); await lc.addInitScript(() => { window.requestIdleCallback = () => 0; window.__noIdle = true; });
    const lq = await lc.newPage(); lq.on('pageerror', e => errs.push('lazy PAGEERROR: ' + e.message));
    await lq.goto(U + '#home', {waitUntil:'load'}); await lq.waitForTimeout(500);
    ok(await lq.evaluate(() => lazyDone.size === 0 && !document.querySelector('#dgl .phx') && !document.querySelector('#nums *')), 'drawn when needed: at startup only the home page is drawn');
    await lq.evaluate(() => { openPal(); document.querySelector('#gq').value = 'vasopressin'; renderPal(); }); await lq.waitForTimeout(400);
    await lq.locator('#gres a[data-dg]').first().click(); await lq.waitForTimeout(600);
    ok(await lq.evaluate(() => location.hash === '#dilution' && /vaso/i.test(document.querySelector('#dgq').value) && document.querySelectorAll('#dgl .phx').length >= 1), 'drawn when needed: a search handed to the dilution guide draws it and fills its find box');
    await lq.evaluate(() => { location.hash = '#calc-curb'; }); await lq.waitForTimeout(500);
    ok(await lq.evaluate(() => !!document.querySelector('#calcbox *') && document.querySelectorAll('#cxcats button').length > 0), 'drawn when needed: a link straight to a calculator draws the calculators');
    await lc.close();
    const ic = await b.newContext({...phone, reducedMotion:'reduce'}), iq = await ic.newPage(); iq.on('pageerror', e => errs.push('idle PAGEERROR: ' + e.message));
    await iq.goto(U + '#home', {waitUntil:'load'});
    ok(await iq.waitForFunction(() => lazyDone.size === Object.keys(LAZY).length, null, {timeout:15000}).then(() => true, () => false), 'drawn when idle: after the first screen, every page is drawn while the phone is idle');
    await ic.close();

    /* Ask with exact quotes (13 Nov 2026): a quote shows only if it is the guide's own text, letter for letter */
    const qc = await b.newContext({...phone, reducedMotion:'reduce'});
    await qc.addInitScript(() => {
      const fake = Object.assign(async () => ({text:''}), {json: async input => {
        const line = input.split('\n').find(l => l.startsWith('c1 |')), text = line.split(' | ').slice(4).join(' | ');
        window.__quote = text.split(' ').slice(0, 12).join(' ');
        return {picks:[{id:'c1', quote:window.__quote}, {id:'c2', quote:'Give 50 mg of a drug the guide never names'}]};
      }});
      window.claude = {use: async n => n === 'sample' ? fake : null};
    });
    const qq = await qc.newPage(); qq.on('pageerror', e => errs.push('ask quotes PAGEERROR: ' + e.message));
    await qq.goto(U + '#home', {waitUntil:'load'}); await qq.waitForTimeout(600);
    await qq.evaluate(() => openPal()); await qq.fill('#gq', 'pregnant dengue patient which zone'); await qq.waitForTimeout(300);
    await qq.click('#gask'); await qq.waitForFunction(() => document.querySelectorAll('#gaskres .rs').length >= 2, null, {timeout:6000}).catch(() => {}); await qq.waitForTimeout(150);
    const aqr = await qq.evaluate(() => ({q:window.__quote, li:[...document.querySelectorAll('#gaskres .rs')].map(s => s.textContent), note:(document.querySelector('#gaskn') || {}).textContent || ''}));
    ok(aqr.li.length >= 2 && aqr.li[0].includes('“' + aqr.q + '”') && !aqr.li.some(t => /never names/.test(t)) && /checked letter for letter/.test(aqr.note), 'ask: a quote Claude copied from the guide shows in quotation marks; a quote that is not the guide\'s own text is dropped' + (aqr.li.length >= 2 && aqr.li[0].includes('“' + aqr.q + '”') ? '' : ' ' + JSON.stringify(aqr).slice(0, 600)));
    await qc.close();

    /* Voice search on this phone (13 Nov 2026), with stand-ins for the microphone and the speech model (no network) */
    const mc = await b.newContext({...phone, reducedMotion:'reduce'}), asrReq = [];
    await mc.route('**/@huggingface/transformers@4.3.2/dist/transformers.min.js', r => { asrReq.push(r.request().url()); r.fulfill({status:200, contentType:'application/javascript', body:'export const env = {}; export async function pipeline(task, model){ window.__asrModel = task + " " + model; return async pcm => ({text: pcm && pcm.length ? "Chest pain." : ""}); }'}); });
    await mc.addInitScript(() => {
      Object.defineProperty(navigator, 'mediaDevices', {configurable:true, value:{getUserMedia: async () => { window.__mic = (window.__mic || 0) + 1; return {getTracks: () => [{stop(){ window.__micStop = true; }}]}; }}});
      window.MediaRecorder = class { constructor(){ this.state = 'inactive'; this.mimeType = 'audio/webm'; } start(){ this.state = 'recording'; setTimeout(() => this.stop(), 150); } stop(){ if (this.state === 'inactive') return; this.state = 'inactive'; if (this.ondataavailable) this.ondataavailable({data:new Blob([new Uint8Array(10)])}); if (this.onstop) this.onstop(); } };
      window.AudioContext = class { constructor(o){ window.__rate = o && o.sampleRate; } async decodeAudioData(){ return {numberOfChannels:1, getChannelData: () => new Float32Array(16000)}; } close(){} };
    });
    const mq = await mc.newPage(); mq.on('pageerror', e => errs.push('voice on phone PAGEERROR: ' + e.message));
    await mq.goto(U + '#home', {waitUntil:'load'}); await mq.waitForTimeout(500);
    ok(await mq.evaluate(() => ASR_OK && prefs.asr === 'off' && !asrLocal()) && asrReq.length === 0, 'voice on this phone: off until switched on, and nothing of it loads');
    await mq.evaluate(() => openSettings()); await mq.waitForTimeout(150);
    ok(await mq.isVisible('#st-asrrow') && /about 35 MB/.test(await mq.textContent('#st-asrrow')), 'voice on this phone: Settings offers it, with its download size');
    await mq.click('#st-asr [data-val="on"]'); await mq.evaluate(() => { closeSettings(false); openPal(); }); await mq.waitForTimeout(150);
    /* the stand-in recorder stops itself after 150 ms and the stand-in model answers at once, so record every hint shown from the tap on */
    await mq.evaluate(() => { const h = document.querySelector('#gmhint'); window.__hints = []; new MutationObserver(() => window.__hints.push(h.textContent)).observe(h, {childList:true, characterData:true, subtree:true}); });
    await mq.click('#gmic'); await mq.waitForTimeout(150);
    ok(await mq.evaluate(() => window.__hints.some(t => /^Listening on this phone/.test(t))), 'voice on this phone: while it listens, it says it is listening on this phone');
    await mq.waitForFunction(() => document.querySelector('#gq').value === 'Chest pain', null, {timeout:5000}).catch(() => {});
    const asr1 = await mq.evaluate(() => ({q:document.querySelector('#gq').value, model:window.__asrModel, rate:window.__rate, stopped:!!window.__micStop, mic:window.__mic, res:document.querySelectorAll('#gres a').length}));
    ok(asr1.q === 'Chest pain' && asr1.model === 'automatic-speech-recognition onnx-community/moonshine-tiny-ONNX' && asr1.rate === 16000 && asr1.stopped && asr1.res > 0 && asrReq.length === 1, 'voice on this phone: a tap records, Moonshine hears it on the phone, the words fill the search and the microphone is let go');
    await mq.click('#gmlang'); await mq.waitForTimeout(100);
    ok(await mq.evaluate(() => !asrLocal() && micLang === 'ms'), 'voice on this phone: Bahasa Melayu keeps the browser\'s speech service');
    await mc.close();
  }

  /* ---------- Phone, dark ---------- */
  p = await mk({...phone, colorScheme:'dark'}, 'phone-dark');
  await p.goto(U, {waitUntil:'networkidle'}); await p.waitForTimeout(800);
  await p.screenshot({path:out + '/pd-home.png'});
  ok(await p.evaluate(() => document.querySelector('#daynight').getAttribute('aria-checked') === 'true' && !document.querySelector('#vid').hasAttribute('src') && !document.querySelector('#vid').hasAttribute('poster') && document.querySelector('#vid').dataset.cover === 'media/explainer-night-poster.webp'), 'on Auto, a dark phone gets the switch at night and the night film\'s cover');
  await go(p, '#tour', 400);
  ok(await p.evaluate(() => document.querySelector('#vid').getAttribute('src') === 'media/green-zone-explainer-night-720p.mp4' && document.querySelector('#vid').getAttribute('poster') === 'media/explainer-night-poster.webp'), 'opening the tour puts in the night film and its cover');
  await p.screenshot({path:out + '/pd-tour.png'});
  await go(p, '#poster', 400);
  ok(await hscroll(p) <= 0, 'phone dark poster no sideways scroll');
  await p.screenshot({path:out + '/pd-poster.png', fullPage:true});
  await p.emulateMedia({colorScheme:'light'}); await p.waitForTimeout(400);
  ok(await p.evaluate(() => document.querySelector('#daynight').getAttribute('aria-checked') === 'false' && document.querySelector('#vid').getAttribute('src') === 'media/green-zone-explainer-720p.mp4' && document.querySelector('#vid').getAttribute('poster') === 'media/explainer-poster.webp' && document.querySelector('#v-poster [data-sheet="1"] img').getAttribute('src') === 'poster/sheet1-thumb.webp'), 'on Auto, when the device turns light the switch, film and sheets follow');
  noFilm(p, 'phone at night: opening the tour and the device turning light load no film from media/');
  await p.emulateMedia({colorScheme:'dark'}); await p.waitForTimeout(400);
  await go(p, '#referral-rules--ortho', 400);
  await p.screenshot({path:out + '/pd-run-ortho.png', fullPage:true});
  await go(p, '#journey', 400);
  await p.screenshot({path:out + '/pd-journey.png'});
  await go(p, '#new', 400);
  await p.screenshot({path:out + '/pd-new.png'});
  /* Tapping a topic or group tile brings its list up under the top bar (Krishna, 10 Nov 2026) */
  await go(p, '#pathways', 400);
  await p.tap('#libcats [data-cat="infect"]'); await p.waitForTimeout(900);
  ok(await p.evaluate(() => { const s = [...document.querySelectorAll('#libgrid .libsec')].find(x => !x.hidden), r = s && s.getBoundingClientRect(); return !!r && r.top >= 40 && r.top < innerHeight * 0.4 && /Infection/.test(s.textContent); }), 'phone: tapping a topic tile brings its list up under the top bar');
  await go(p, '#calc', 400);
  await p.tap('#cxcats [data-cg="kids"]'); await p.waitForTimeout(900);
  ok(await p.evaluate(() => { const s = [...document.querySelectorAll('#cxlist .cxsec')].find(x => !x.hidden), r = s && s.getBoundingClientRect(); return !!r && r.top >= 40 && r.top < innerHeight * 0.4 && s.dataset.g === 'kids'; }), 'phone: tapping a calculator group brings its calculators up');
  await go(p, '#home', 400);
  const gc = await p.$('#bento [data-gocat="heart"]');
  if (gc){ await gc.evaluate(el => el.click()); await p.waitForTimeout(1000); ok(await p.evaluate(() => { const s = [...document.querySelectorAll('#libgrid .libsec')].find(x => !x.hidden), r = s && s.getBoundingClientRect(); return location.hash === '#pathways' && !!r && r.top >= 40 && r.top < innerHeight * 0.4; }), 'phone: a topic chosen on the home tile opens the library with its list up'); }
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
  ok(await p.evaluate(() => document.querySelectorAll('#libcats .tm img').length === 11 && !document.querySelector('.tm video')), 'with reduced motion the tiles stay as still pictures');

  /* ---------- The tour film: it downloads only on a tap, and chapters, the transcript, Resume, the language and
     Day/Night still work. Chrome treats a call to load() as overriding preload="none", so the film goes in only when the
     tour opens and nothing calls load() before a tap. Played muted: the sound is not under test. ---------- */
  {
    const q = await mk({viewport:{width:1366, height:900}, colorScheme:'light'}, 'tour');
    const vid = () => q.evaluate(() => { const v = document.querySelector('#vid'); return {src:v.getAttribute('src'), cover:v.getAttribute('poster'), t:v.currentTime, paused:v.paused, rs:v.readyState}; });
    const plays = (from, src = 'media/green-zone-explainer-720p.mp4') => q.waitForFunction(([f, s]) => { const v = document.querySelector('#vid'); return v.getAttribute('src') === s && !v.paused && v.readyState >= 3 && v.currentTime >= f; }, [from, src], {timeout:12000, polling:100}).then(() => true, () => false);
    await q.goto(U + '#tour', {waitUntil:'networkidle'}); await q.waitForTimeout(1500);
    await q.evaluate(() => { document.querySelector('#vid').muted = true; });
    let s = await vid();
    ok(s.src === 'media/green-zone-explainer-720p.mp4' && s.cover === 'media/explainer-poster.webp' && s.rs === 0, 'tour: opened straight from #tour, it has the day film and cover, and the film waits for play');
    noFilm(q, 'tour: opening it loads no film');
    const ch = await q.evaluate(() => +document.querySelector('#chaps [data-ch="3"]').dataset.t);
    await q.click('#chaps [data-ch="3"]');
    ok(await plays(ch), `tour: tapping a chapter loads the film and plays it from that chapter (${ch} s)`);
    ok(q.films.includes('/media/green-zone-explainer-720p.mp4'), 'tour: the film loads on that tap (so the checks above would have seen a film loading)');
    ok(await q.evaluate(() => document.querySelector('#chaps [data-ch="3"]').getAttribute('aria-current') === 'true'), 'tour: and that chapter lights up');
    const ln = await q.evaluate(() => +document.querySelector('#tscript [data-ln="30"]').dataset.t);
    await q.click('#tscript [data-ln="30"]');
    ok(await plays(ln) && await q.evaluate(() => document.querySelector('#tscript [data-ln="30"]').getAttribute('aria-current') === 'true'), `tour: a line of the transcript plays from that line (${ln} s) and lights it`);
    await q.waitForTimeout(600);
    await q.evaluate(() => document.querySelector('#vid').pause());
    const pos = await q.evaluate(() => JSON.parse(localStorage.getItem('gz-tour-pos')));
    await q.click('#tlang [data-lang="ms"]'); await q.waitForTimeout(1200);
    s = await vid();
    ok(s.src === 'media/green-zone-explainer-ms-720p.mp4' && s.cover === 'media/explainer-ms-poster.webp' && s.rs === 0 && s.paused && !q.films.some(f => f.includes('-ms-')), 'tour: Bahasa Melayu swaps in its film and cover, and downloads nothing before play');
    ok(await q.evaluate(() => localStorage.getItem('gz-tour-pos-ms') === null && JSON.parse(localStorage.getItem('gz-tour-pos')) > 3), 'tour: the switch wipes neither language\'s saved place');
    await q.click('#tlang [data-lang="en"]'); await q.waitForTimeout(300);
    const rs = await q.evaluate(() => { const r = document.querySelector('#resume'); return r ? {t:+r.dataset.t, text:r.textContent} : null; });
    ok(!!rs && rs.t === pos && pos >= Math.floor(ln) && /^Resume at \d:\d\d$/.test(rs.text), `tour: back in English, Resume offers the saved place (${rs ? rs.text : 'none'})`);
    await q.click('#resume');
    ok(await plays(pos), 'tour: Resume plays from the saved place');
    const t1 = (await vid()).t;
    await q.emulateMedia({colorScheme:'dark'});
    ok(await plays(t1 - .5, 'media/green-zone-explainer-night-720p.mp4') && (await vid()).cover === 'media/explainer-night-poster.webp', 'tour: night colours while it plays: the night film plays on from the same place');
    await q.waitForTimeout(400);
    await q.evaluate(() => document.querySelector('#vid').pause());
    const t2 = (await vid()).t, n = q.films.length;
    await q.emulateMedia({colorScheme:'light'}); await q.waitForTimeout(1200);
    s = await vid();
    ok(s.src === 'media/green-zone-explainer-720p.mp4' && s.cover === 'media/explainer-poster.webp' && s.rs === 0 && !q.films.slice(n).includes('/media/green-zone-explainer-720p.mp4'), 'tour: day colours while paused: the day film and cover go in, with nothing downloaded');
    ok(await q.evaluate(t => JSON.parse(localStorage.getItem('gz-tour-pos')) >= Math.floor(t) - 3 && +(document.querySelector('#chaps [aria-current="true"]') || {dataset:{ch:-1}}).dataset.ch === [...document.querySelectorAll('#chaps [data-t]')].filter(b => +b.dataset.t <= t).length - 1, t2), 'tour: and the saved place and the lit chapter are kept');
    await q.evaluate(() => document.querySelector('#vid').play());
    ok(await plays(t2 - .5), 'tour: play goes on from the same place');
    await q.evaluate(() => document.querySelector('#vid').pause());
    await q.screenshot({path:out + '/d-tour-played.png'});
    await q.context().close();
  }

  /* ---------- The public web app: manifest, service worker, offline, kept sounds, updates ----------
     On a server of its own (PORT + 1), whose log holds only this phone's requests and its worker's. With reduced motion
     the tiles stay still, so a film or sound fetched before a tap would be the worker's doing. */
  {
    const log = [], srv2 = http.createServer(site(log)).listen(PORT + 1), W = `http://localhost:${PORT + 1}/`;
    const swText = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
    const [, VER, PAGEID] = /const VERSION = '([0-9a-f]{12})', PAGE = '([0-9a-f]{12})'/.exec(swText) || [];
    const PRE = JSON.parse((/const PRE = (\{[\s\S]*?\n\});/.exec(swText) || [0, '{}'])[1]), KEEP = JSON.parse((/const KEEP = (\{[\s\S]*?\n\});/.exec(swText) || [0, '{}'])[1]);
    const CACHE = 'green-zone-mo-guide-' + VER, KEPT = 'green-zone-mo-guide-kept', nPre = Object.keys(PRE).length;
    const until = (q, fn, arg, ms = 10000) => q.waitForFunction(fn, arg, {timeout:ms, polling:250}).then(() => true, () => false);
    const kept = (q, f) => q.evaluate(async ([k, u]) => { const r = await (await caches.open(k)).match(u); return r ? r.headers.get('X-GZ-Hash') : null; }, [KEPT, W + f]);
    const playIt = (q, f) => q.evaluate(src => new Promise(res => { const a = new Audio(src); a.muted = true; a.onended = () => res(true); a.onerror = () => res(false); a.play().catch(() => res(false)); setTimeout(() => res(false), 15000); }), f);
    ok(!!VER && !!PAGEID && !!PRE[''] && !!PRE['manifest.webmanifest'] && nPre > 50 && Object.keys(KEEP).filter(f => /\.(mp4|mp3)$/.test(f)).length > 60, `web app: sw.js is build ${VER} (page ${PAGEID}), with ${nPre} files to save at install and ${Object.keys(KEEP).length} to keep once used`);
    ok(Object.keys(PRE).every(f => f === '' || f === 'manifest.webmanifest' || /^(img|tiles|media|poster)\/[^/]+\.webp$/.test(f)) && !Object.keys(PRE).some(f => /^poster\/sheet\d(-night)?\.webp$/.test(f)), 'web app: only the page, the manifest and the small stills are saved ahead, no film, sound, loop or full poster sheet');
    const ctx = await b.newContext({...phone, reducedMotion:'reduce', colorScheme:'light'});
    let p = await ctx.newPage();
    const perr = [], cerr = [];
    p.on('pageerror', e => perr.push(e.message));
    p.on('console', m => { if (m.type() === 'error') cerr.push(m.text()); });
    await p.goto(W, {waitUntil:'load'});

    /* The manifest and the icons */
    const man = await p.evaluate(async () => { const l = document.querySelector('link[rel="manifest"]'), r = await fetch(l.href); return {href:l.href, type:r.headers.get('content-type'), m:await r.json()}; });
    const m = man.m, LIVE = 'https://zaq6184-cell.github.io/green-zone-mo-guide/';
    ok(man.href === W + 'manifest.webmanifest' && /^application\/manifest\+json/.test(man.type) && m.name === 'Green Zone MO Guide' && m.short_name === 'Green Zone' && m.display === 'standalone', 'web app: the manifest loads, with its name, short name and standalone display');
    ok([m.start_url, m.scope, m.id].every(u => new URL(u, LIVE + 'manifest.webmanifest').href === LIVE), 'web app: on GitHub Pages its start_url, scope and id are /green-zone-mo-guide/');
    const bg = await p.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--bg').trim());
    ok(m.theme_color === bg && m.background_color === bg && await p.evaluate(c => { const t = [...document.querySelectorAll('meta[name="theme-color"]')]; return t.length === 2 && t.every(x => x.content === c); }, bg), 'web app: the theme and background colours are the page background (--bg), and so is the browser bar');
    const srcs = m.icons.map(i => i.src).concat('icons/apple-touch-icon.png');
    const dims = await p.evaluate(list => Promise.all(list.map(src => new Promise(res => { const i = new Image(); i.onload = () => res(i.naturalWidth + 'x' + i.naturalHeight); i.onerror = () => res('none'); i.src = src; }))), srcs);
    ok(m.icons.every((ic, k) => ic.type === 'image/png' && ic.sizes === dims[k]) && ['192x192', '512x512'].every(s => ['any', 'maskable'].every(u => m.icons.some(ic => ic.sizes === s && ic.purpose === u))) && dims[dims.length - 1] === '180x180' && await p.evaluate(() => document.querySelector('link[rel="apple-touch-icon"]').getAttribute('href') === 'icons/apple-touch-icon.png'), 'web app: the 192 and 512 px icons (any and maskable) and the 180 px touch icon load at their sizes');
    const cdp = await ctx.newCDPSession(p);
    const am = await cdp.send('Page.getAppManifest');
    ok(am.url === W + 'manifest.webmanifest' && am.errors.length === 0, 'web app: Chrome reads the manifest with no errors' + (am.errors.length ? ': ' + am.errors.map(x => x.message).join('; ') : ''));

    /* The service worker saves the page and the small stills, and nothing heavy */
    const reg = await p.evaluate(() => Promise.race([navigator.serviceWorker.ready.then(r => ({scope:r.scope, url:r.active.scriptURL})), new Promise(r => setTimeout(r, 20000, {}))]));
    ok(reg.scope === W && reg.url === W + 'sw.js', 'web app: the service worker registers, for the whole app');
    ok(await until(p, () => !!navigator.serviceWorker.controller), 'web app: it takes charge of the open page');
    const saved = await p.evaluate(async c => (await (await caches.open(c)).keys()).map(r => r.url), CACHE);
    ok(saved.length === nPre && Object.keys(PRE).every(f => saved.includes(W + f)), `web app: the page, the manifest and the ${nPre - 2} small stills are saved, each matching the build`);
    /* Before any tap nothing asks for a film, sound or full poster sheet: not the worker (it would fetch one whole), and not
       the page's own players (they ask in byte ranges; the tour's film goes in only when the tour opens) */
    const ahead = log.filter(l => /\.(mp4|mp3) /.test(l) || /^\/poster\/sheet\d(-night)?\.webp /.test(l));
    ok(!ahead.length, 'web app: nothing fetched a film, sound, loop or full poster sheet ahead, neither the worker nor the page' + (ahead.length ? ': ' + ahead.join(', ') : ''));
    const inst = await cdp.send('Page.getInstallabilityErrors').catch(e => ({installabilityErrors:[{errorId:'cdp: ' + e.message}]}));
    const instErr = inst.installabilityErrors.map(x => x.errorId).filter(x => x !== 'in-incognito');
    ok(!instErr.length, 'web app: Chrome finds nothing that stops it installing (besides the test browser being private)' + (instErr.length ? ': ' + instErr.join(', ') : ''));
    for (const s of m.shortcuts){
      await go(p, s.url.slice(2), 450);
      const at = await p.evaluate(() => ({v:[...document.querySelectorAll('#viewport > .view')].filter(v => !v.hidden).map(v => v.dataset.view).join(), pal:!document.querySelector('#pal').hidden}));
      ok(s.url === './#search' ? at.pal : at.v === s.url.slice(3), `web app: the ${s.short_name} shortcut (${s.url}) opens it`);
      if (at.pal) await p.keyboard.press('Escape');
    }

    /* Settings: Offline and install */
    await go(p, '#home', 300);
    await p.tap('#topbar [data-settings]');
    ok(await until(p, () => /^Saved on this device: it opens without a signal\. Films and sounds are kept once played through\./.test((document.querySelector('#st-off') || {}).textContent || ''), null, 5000), 'Settings: Offline and install says the guide is saved on this device');
    ok(await p.evaluate(() => document.querySelector('#st-inst').hidden && !document.querySelector('#st-how').hidden && document.querySelector('#st-how').getAttribute('href') === '#install' && document.querySelector('#st-offline').nextElementSibling.id === 'st-all' && document.querySelector('#st-all').nextElementSibling.classList.contains('dlg-f')), 'Settings: with no install offer from the browser, it links to How to install (the row, then Save everything, sit above the footnote)');
    ok(await hscroll(p) <= 0, 'Settings with the offline row: no sideways scroll');
    await p.evaluate(() => document.querySelector('#st-offline').scrollIntoView({block:'center'}));
    await p.screenshot({path:out + '/p-settings-offline.png'});

    /* Install the guide: the live state, this device's steps and every other device's, the browser's own Install offer, the code */
    await p.tap('#st-how'); await p.waitForTimeout(450);
    ok(await visible(p) === 'install' && await p.evaluate(() => document.querySelector('#settings').hidden), 'Settings: How to install opens Install the guide');
    ok(await until(p, () => document.querySelector('#in-state').textContent === 'Ready offline' && /^Saved on this device: the guide and all its pictures, \d+\.\d MB\./.test(document.querySelector('#in-sub').textContent) && /Works without a signal/.test(document.querySelector('#in-chips').textContent) && /Not installed yet/.test(document.querySelector('#in-chips').textContent) && /Online/.test(document.querySelector('#in-chips').textContent), null, 6000), 'install: the hero says Ready offline, with the size saved on this device, not installed yet, online');
    ok(await p.evaluate(() => /^Windows/.test(document.querySelector('#in-plat [aria-pressed="true"]').textContent) && /Chrome or Edge/.test(document.querySelector('#in-br [aria-pressed="true"]').textContent) && [...document.querySelectorAll('#in-steps h3')].map(h => h.textContent).join('|').includes('Click the install icon') && document.querySelectorAll('#in-steps .in-fig svg').length === 3), 'install: it finds this browser (Chrome on Windows) and shows its three steps, each drawn');
    const UAS = [
      ['Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1', 'iphone safari'],
      ['Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/131.0.6778.73 Mobile/15E148 Safari/604.1', 'iphone other'],
      ['Mozilla/5.0 (iPad; CPU OS 17_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.1', 'iphone safari'],
      ['Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36', 'android chrome'],
      ['Mozilla/5.0 (Linux; Android 14; SM-S921B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/26.0 Chrome/122.0.0.0 Mobile Safari/537.36', 'android samsung'],
      ['Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 EdgA/131.0.0.0', 'android edge'],
      ['Mozilla/5.0 (Android 14; Mobile; rv:133.0) Gecko/133.0 Firefox/133.0', 'android firefox'],
      ['Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0', 'windows chrome'],
      ['Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0', 'windows firefox'],
      ['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Safari/605.1.15', 'mac safari'],
      ['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'mac chrome'],
      ['Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'linux chrome'],
      ['Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'linux chrome']];
    const det = await p.evaluate(list => { const r = list.map(([ua]) => { Object.defineProperty(navigator, 'userAgent', {get:() => ua, configurable:true}); const d = detectDevice(); return d.plat + ' ' + d.br; }); delete navigator.userAgent; return r; }, UAS);
    const detBad = UAS.map(([, want], i) => det[i] === want ? '' : want + ' got ' + det[i]).filter(Boolean);
    ok(!detBad.length, `install: it tells apart ${UAS.length} phones, tablets and computers by their browser (iPhone and iPad, Android with Chrome, Samsung Internet, Edge or Firefox, Windows, Mac, Linux and ChromeOS)` + (detBad.length ? ': ' + detBad.join('; ') : ''));
    let stepsOk = true;
    for (const [pl, br, want] of [['iphone', 'safari', 'Add to Home Screen'], ['iphone', 'other', 'Add to Home Screen'], ['android', 'chrome', 'Install app'], ['android', 'samsung', 'Add page to'], ['android', 'edge', 'Add to phone'], ['android', 'firefox', 'Tap Install'], ['mac', 'safari', 'Add to Dock'], ['mac', 'firefox', 'Bookmark it'], ['linux', 'chrome', 'Click the install icon'], ['windows', 'firefox', 'Bookmark it'], ['windows', 'chrome', 'Click Install']]){
      await p.tap(`#in-plat [data-inplat="${pl}"]`); await p.waitForTimeout(60);
      if (await p.$(`#in-br [data-inbr="${br}"]`)){ await p.tap(`#in-br [data-inbr="${br}"]`); await p.waitForTimeout(60); }
      const got = await p.evaluate(() => [...document.querySelectorAll('#in-steps h3')].map(h => h.textContent).join(' | '));
      if (!got.includes(want) || await hscroll(p) > 0){ stepsOk = false; console.log('     install steps', pl, br, '->', got); }
    }
    ok(stepsOk, 'install: each device and browser chosen shows its own steps, with no sideways scroll');
    await p.evaluate(() => { window.__prompted = 0; const e = new Event('beforeinstallprompt'); e.prompt = () => { window.__prompted++; return Promise.resolve(); }; e.userChoice = Promise.resolve({outcome:'accepted', platform:'web'}); dispatchEvent(e); });
    ok(await until(p, () => !!document.querySelector('#in-acts [data-ingo]'), null, 3000) && await p.evaluate(() => !document.querySelector('#st-inst').hidden && document.querySelector('#st-how').hidden), 'install: when the browser offers to install, the page and Settings show Install');
    await p.screenshot({path:out + '/p-install-offer.png', fullPage:true});
    await p.tap('#in-acts [data-ingo]'); await p.waitForTimeout(300);
    ok(await p.evaluate(() => window.__prompted === 1 && !document.querySelector('#in-acts [data-ingo]') && document.querySelector('#st-inst').hidden), 'install: Install opens the browser\'s own install prompt, once');
    const qrm = require('./qr.js');
    const posterQr = (fs.readFileSync(path.join(__dirname, '..', 'poster', 'src', 'poster.html'), 'utf8').match(/<img class="qr"[^>]*src="(data:image\/png;base64,[^"]+)"/) || [])[1];
    const pgrid = await p.evaluate(async s => {
      const im = new Image(); im.src = s; await im.decode();
      const c = document.createElement('canvas'); c.width = im.naturalWidth; c.height = im.naturalHeight; const x = c.getContext('2d'); x.drawImage(im, 0, 0);
      const n = 37, m = im.naturalWidth / n, d = x.getImageData(0, 0, c.width, c.height).data, g = [];
      for (let r = 2; r < n - 2; r++){ const row = []; for (let k = 2; k < n - 2; k++){ const i = (Math.floor((r + .5) * m) * c.width + Math.floor((k + .5) * m)) * 4; row.push(d[i] < 128); } g.push(row); }
      return g;
    }, posterQr);
    const pd = qrm.decode(pgrid);
    ok(pd.text === LIVE && pd.eccOk, 'QR: qr.js reads the poster\'s code, made by another encoder, as the web app, with its error correction intact');
    const iq = qrm.encode(LIVE + '#install', 'M'), back = qrm.decode(iq.modules);
    ok(await p.evaluate(() => INSTALL_QR) === qrm.path(iq) && back.text === LIVE + '#install' && back.eccOk, 'QR: the install page\'s code is the one qr.js makes for the web app\'s #install address, and reads back as it');
    ok(await p.evaluate(() => { const s = document.querySelector('.in-qr-c'); return !!s && s.getBoundingClientRect().width >= 120 && /On your phone/.test(document.querySelector('#h-inqr').textContent); }), 'QR: on a computer it shows at a scannable size, for your phone');
    await ctx.grantPermissions(['clipboard-read', 'clipboard-write'], {origin:W.slice(0, -1)});
    await p.tap('[data-incopy]'); await p.waitForTimeout(250);
    ok(await p.evaluate(() => navigator.clipboard.readText()) === LIVE + '#install', 'install: Copy link copies the web app\'s #install address');
    ok(await p.evaluate(() => { const t = document.querySelector('#tin'); return !!t && t.getAttribute('href') === '#install' && /Install the guide/.test(t.textContent) && /Ready offline/.test(t.querySelector('.tag').textContent) && !!document.querySelector('#snav a[href="#install"]'); }), 'install: Shift tools has its tile (Ready offline), and the menu links it');
    await p.tap('#tabbar .fab'); await p.fill('#gq', 'install'); await p.waitForTimeout(250);
    ok(await p.evaluate(() => !!document.querySelector('#palbody a[href="#install"]')), 'search: "install" finds Install the guide');
    await p.keyboard.press('Escape');
    await go(p, '#install', 300);
    await p.screenshot({path:out + '/p-install-web.png', fullPage:true});

    /* Share the guide and the link preview (12 Nov 2026) */
    const htm = fs.readFileSync(path.join(__dirname, '..', 'app', 'index.html'), 'utf8'), headPart = htm.split('</head>')[0];
    const tagOf = pr => (headPart.match(new RegExp('<meta (?:property|name)="' + pr + '" content="([^"]*)"')) || [])[1];
    ok(tagOf('og:title') === 'Green Zone MO Guide' && tagOf('og:url') === LIVE && tagOf('og:image') === LIVE + 'og/preview.jpg' && tagOf('og:image:width') === '1200' && tagOf('og:image:height') === '630' && tagOf('twitter:card') === 'summary_large_image' && /Green Zone/.test(tagOf('og:description') || '') && headPart.indexOf('og:image') > 0 && headPart.indexOf('og:image') < 4000 && /<title>Green Zone MO Guide<\/title>/.test(headPart), 'link preview: the web app\'s head carries its Open Graph and Twitter tags on the live address, in its first 4 KB');
    ok(!/property="og:|name="twitter:/.test(fs.readFileSync(path.join(__dirname, '..', 'green-zone-pathways.html'), 'utf8')), 'link preview: the artifact page carries none (claude.ai makes its own card)');
    const jpg = fs.readFileSync(path.join(__dirname, '..', 'app', 'og', 'preview.jpg'));
    const jdim = (() => { for (let i = 2; i < jpg.length - 9;){ if (jpg[i] !== 0xFF){ i++; continue; } const mk = jpg[i + 1]; if (mk >= 0xC0 && mk <= 0xC2) return [jpg.readUInt16BE(i + 7), jpg.readUInt16BE(i + 5)]; i += 2 + jpg.readUInt16BE(i + 2); } return []; })();
    ok(jpg[0] === 0xFF && jpg[1] === 0xD8 && jdim[0] === 1200 && jdim[1] === 630 && jpg.length < 300 * 1024 && !!KEEP['og/preview.jpg'] && !PRE['og/preview.jpg'], 'link preview: og/preview.jpg is a JPEG of 1200 x 630 under 300 KB, kept by the worker once used and not saved at install (' + Math.round(jpg.length / 1024) + ' KB)');
    ok(!log.some(l => l.startsWith('/og/')), 'share: nothing of the link preview loads before the share page opens');
    await go(p, '#share', 800);
    ok(await p.evaluate(() => { const v = document.querySelector('#v-share'); return !v.hidden && /Send the guide to a colleague/.test(v.innerText) && !!document.querySelector('#shbox .sh3.big .sh3-card') && !!document.querySelector('#shbox .sh-prev .shc-img img') && !document.getElementById('share'); }) && await hscroll(p) === 0, 'share: the page opens on its 3D card and the link preview, with no element named after its route and no sideways scroll');
    ok(await until(p, () => !!document.querySelector('#shbox .sh-prev .shc-img img.on'), null, 5000) && log.some(l => l.startsWith('/og/preview.jpg')), 'share: the preview picture loads on the share page, and shows');
    ok(await p.evaluate(() => getComputedStyle(document.querySelector('#shbox .sh3-card')).animationName === 'none'), 'share: with reduced motion the card stands still');
    const sq = qrm.encode(LIVE, 'M'), sback = qrm.decode(sq.modules);
    ok(await p.evaluate(() => SHARE_QR) === qrm.path(sq) && sback.text === LIVE && sback.eccOk, 'share: its QR code is the one qr.js makes for the web app, and reads back as it');
    ok(await p.evaluate(L => { const a = document.querySelector('#shbox a[href^="https://wa.me/"]'), t = document.querySelector('#shbox a[href^="https://t.me/share/url"]'); return !!a && decodeURIComponent(a.href).includes(L) && a.target === '_blank' && !!t && decodeURIComponent(t.href).includes(L); }, LIVE), 'share: WhatsApp and Telegram open with the web app\'s address, in a new tab');
    await p.tap('#shbox [data-shcopy]'); await p.waitForTimeout(250);
    ok(await p.evaluate(() => navigator.clipboard.readText()) === LIVE, 'share: Copy link copies the web app\'s address');
    await go(p, '#numbers', 400);
    await p.tap('#extl [data-ext="5359"]'); await p.waitForTimeout(250);
    ok(await p.evaluate(() => navigator.clipboard.readText()) === '5359', 'extensions: tapping an extension copies it');
    ok(await p.evaluate(async () => { const calls = []; Object.defineProperty(navigator, 'share', {value:d => { calls.push(d); return Promise.reject(Object.assign(new Error('cancelled'), {name:'AbortError'})); }, configurable:true}); shareGuide(null); await new Promise(r => setTimeout(r, 80)); return calls.length === 1 && calls[0].url === APP_URL && /Green Zone/.test(calls[0].title); }), 'share: the share sheet is given the web app\'s address, and a cancel is not an error');
    await p.screenshot({path:out + '/p-share-web.png', fullPage:true});
    await go(p, '#home', 500);
    ok(await p.evaluate(() => { const t = document.querySelector('#t-share'); return !!t && !t.hidden && /Share the guide/.test(t.textContent) && !!t.querySelector('a[href="#share"]') && !!t.querySelector('.sh3 .sh3-card') && !t.querySelector('img') && !!document.querySelector('#snav a[href="#share"]'); }), 'share: the home tile has its 3D card (drawn, so no picture loads), a way to the share page, and the menu links it');
    await p.tap('#tabbar .fab'); await p.fill('#gq', 'share whatsapp'); await p.waitForTimeout(250);
    ok(await p.evaluate(() => !!document.querySelector('#palbody a[href="#share"]')), 'search: "share whatsapp" finds Share the guide');
    await p.keyboard.press('Escape');

    /* A sound is kept once played, from the same download, and a part of one or an unplayed film is not */
    ok(await playIt(p, 'audio/intro-1-en.mp3'), 'web app: a sound plays through the worker');
    ok(await until(p, ([k, u, h]) => caches.open(k).then(c => c.match(u)).then(r => !!r && r.headers.get('X-GZ-Hash') === h), [KEPT, W + 'audio/intro-1-en.mp3', KEEP['audio/intro-1-en.mp3']], 8000), 'web app: once played, the sound is kept, and it matches the build');
    const asked = log.filter(l => l.startsWith('/audio/intro-1-en.mp3'));
    ok(asked.length > 0 && asked.every(l => / bytes=\d+-\d* /.test(l)), 'web app: it was kept from the player\'s own download, with nothing fetched twice (' + asked.join(', ') + ')');
    const part = await p.evaluate(async () => { const r = await fetch('audio/intro-3-en.mp3', {headers:{Range:'bytes=0-99'}}); return [r.status, (await r.arrayBuffer()).byteLength]; });
    await p.waitForTimeout(400);
    ok(part[0] === 206 && part[1] === 100 && !(await kept(p, 'audio/intro-3-en.mp3')), 'web app: part of a sound (a byte range) is passed on but not kept');
    ok(await p.evaluate(async k => !(await (await caches.open(k)).keys()).some(r => /\.mp4$/.test(r.url)), KEPT), 'web app: no film is kept before it has been played');
    /* The journey's narration (26 Nov 2026): one file per language, fetched whole on the first Listen and kept by the worker */
    await go(p, '#journey-2', 700);
    ok(!log.some(l => l.startsWith('/audio/stops-')), 'web app: the journey asks for no narration before Listen');
    await p.tap('#jlisten');
    ok(await until(p, () => !voice.paused && voice.dataset.i === '1' && voice.currentTime >= JSTOPS_AUDIO.en.s[1].at, null, 8000), 'web app: Listen plays the stop from the joined narration');
    ok(await until(p, ([k, u, h]) => caches.open(k).then(c => c.match(u)).then(r => !!r && r.headers.get('X-GZ-Hash') === h), [KEPT, W + 'audio/stops-en.mp3', KEEP['audio/stops-en.mp3']], 8000), 'web app: the joined narration is fetched whole and kept, and it matches the build');
    await p.evaluate(() => stopJourney());

    /* Offline */
    await ctx.setOffline(true);
    ok(await until(p, () => /Offline: the saved guide still works/.test((document.querySelector('#toast') || {}).textContent || ''), null, 5000), 'offline: when the connection drops, a notice says the saved guide still works');
    ok(await until(p, () => /Offline now: using the saved copy/.test(document.querySelector('#in-chips').textContent), null, 3000), 'install: the hero shows the guide is offline, on its saved copy');
    await p.screenshot({path:out + '/p-install-offline.png'});
    await go(p, '#home', 300);
    perr.length = 0; cerr.length = 0;
    await p.reload({waitUntil:'load'});
    ok(await visible(p) === 'home', 'offline: the guide reloads from the saved copy, on home');
    ok(await until(p, () => { const im = [...document.querySelectorAll('#v-home .tm img')].filter(i => { const r = i.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; }); return im.length > 0 && im.every(i => i.complete && i.naturalWidth > 0); }, null, 8000), 'offline: the tile pictures on screen show from the saved stills');
    await p.screenshot({path:out + '/p-offline-home.png'});
    await go(p, '#renal-colic', 500);
    ok(await visible(p) === 'run' && await p.evaluate(() => document.querySelectorAll('#cur button.opt').length > 1), 'offline: a pathway opens');
    await p.tap('#cur button.opt'); await p.waitForTimeout(350);
    ok(await p.evaluate(() => state.id === 'renal-colic' && state.trail.length === 1), 'offline: and an answer steps through it');
    await go(p, '#calc-dengue', 500);
    ok(await visible(p) === 'calc', 'offline: a calculator opens');
    await go(p, '#pathways', 700);
    ok(await until(p, () => { const im = [...document.querySelectorAll('#libcats .tm img')]; return im.length === 11 && im.every(i => i.complete && i.naturalWidth === 640); }, null, 8000), 'offline: the topic tiles show their saved pictures');
    await p.screenshot({path:out + '/p-offline-pathways.png'});
    ok(await playIt(p, 'audio/intro-1-en.mp3'), 'offline: the kept sound plays');
    const rng = await p.evaluate(async () => { const r = await fetch('audio/intro-1-en.mp3', {headers:{Range:'bytes=100-199'}}); return [r.status, r.headers.get('content-range'), (await r.arrayBuffer()).byteLength]; });
    ok(rng[0] === 206 && rng[1] === 'bytes 100-199/' + fs.statSync(path.join(root, 'audio', 'intro-1-en.mp3')).size && rng[2] === 100, 'offline: the kept sound answers byte ranges, so it can seek');
    ok(await p.evaluate(() => fetch('audio/intro-4-en.mp3').then(() => false, () => true)), 'offline: a sound never played is not there, as nothing was fetched ahead');
    await go(p, '#journey-3', 700);
    await p.tap('#jlisten');
    ok(await until(p, () => !voice.paused && voice.dataset.i === '2' && voice.currentTime >= JSTOPS_AUDIO.en.s[2].at, null, 8000), 'offline: Listen plays the journey from the kept narration');
    await p.evaluate(() => stopJourney());
    await go(p, '#home', 300);
    await p.tap('#topbar [data-settings]');
    ok(await until(p, () => /Films and sounds you have played through are kept \(2 so far\)/.test(document.querySelector('#st-off').textContent), null, 5000), 'offline: Settings counts the films and sounds kept');
    await p.keyboard.press('Escape');
    ok(!perr.length, 'offline: no script errors' + (perr.length ? ': ' + perr.join('; ') : ''));
    const cother = cerr.filter(t => !/Failed to load resource|ERR_INTERNET_DISCONNECTED|net::ERR_|FetchEvent/.test(t));
    ok(!cother.length, 'offline: no console errors besides failed network loads' + (cother.length ? ': ' + cother.join('; ') : ''));

    /* An update: sw.js changes (a newer build), the newer worker takes over, keeps what is unchanged without downloading it
       again, deletes the old cache but no other site's, and the open page from the older build offers Reload */
    await ctx.setOffline(false);
    await p.evaluate(async () => { await (await caches.open('another-site-on-github-io')).put('/x', new Response('x')); await (await caches.open('green-zone-mo-guide-000000000000')).put('/x', new Response('x')); });
    swNewer = t => t.replace(`'${VER}'`, `'${VER}a'`).replace(`'${PAGEID}'`, `'${PAGEID}a'`);
    const from = log.length;
    await p.evaluate(() => navigator.serviceWorker.getRegistration().then(r => r.update()).catch(e => String(e)));
    ok(await until(p, v => caches.keys().then(k => k.includes('green-zone-mo-guide-' + v + 'a') && !k.includes('green-zone-mo-guide-' + v)), VER, 15000), 'update: a newer build takes over and deletes the older cache');
    /* The notice comes once the newer worker has finished taking over */
    ok(await until(p, () => !!document.querySelector('#gz-upd') && /New version ready/.test(document.querySelector('#gz-upd').textContent), null, 8000), 'update: the open page from the older build offers Reload');
    const keys = await p.evaluate(() => caches.keys());
    ok(keys.includes('another-site-on-github-io') && !keys.includes('green-zone-mo-guide-000000000000'), 'update: another site\'s cache on the same origin is left alone, this guide\'s leftovers go (' + keys.join(', ') + ')');
    const nNew = await p.evaluate(async c => (await (await caches.open(c)).keys()).length, CACHE + 'a');
    ok(nNew === nPre, `update: the newer build has every file saved (${nNew} of ${nPre})`);
    const fetched = log.slice(from).filter(l => !/^\/sw\.js /.test(l));
    ok(!fetched.length, 'update: the unchanged page and stills come from the old cache, nothing downloaded again' + (fetched.length ? ': ' + fetched.slice(0, 5).join(', ') : ''));
    ok(await kept(p, 'audio/intro-1-en.mp3') === KEEP['audio/intro-1-en.mp3'] && await kept(p, 'audio/stops-en.mp3') === KEEP['audio/stops-en.mp3'], 'update: the kept sounds stay kept, as their files have not changed');
    ok(await hscroll(p) <= 0 && await p.evaluate(() => { const u = document.querySelector('#gz-upd'), r = u.getBoundingClientRect(), t = document.querySelector('#tabbar').getBoundingClientRect(); return r.left >= 0 && r.right <= innerWidth && r.bottom <= t.top && r.height < 60; }), 'update: the notice fits the phone on one line, above the tab bar');
    await p.screenshot({path:out + '/p-update.png'});
    await Promise.all([p.waitForEvent('load'), p.tap('#gz-upd .tb')]);
    await p.waitForTimeout(600);
    ok(await visible(p) === 'home' && !(await p.$('#gz-upd')), 'update: Reload opens the page, without the notice');
    swNewer = null;

    /* Opened as the installed app (iOS reports navigator.standalone; the others display-mode standalone) */
    const ip = await ctx.newPage();
    await ip.addInitScript(() => Object.defineProperty(Navigator.prototype, 'standalone', {get:() => true, configurable:true}));
    await ip.goto(W + '#install', {waitUntil:'load'});
    ok(await until(ip, () => document.querySelector('#in-state').textContent === 'Installed: you are using the app' && /Installed/.test(document.querySelector('#in-chips').textContent) && !document.querySelector('#in-acts [data-ingo]'), null, 8000), 'install: opened as the installed app, it says so');
    await ip.close();

    /* The claude.ai artifact's copy: it cannot install, so it says so and links to the web app's #install page */
    const ac = await b.newContext({...phone, colorScheme:'light'}), ap = await ac.newPage(), aerr = [];
    ap.on('pageerror', e => aerr.push(e.message));
    ap.on('console', m => { if (m.type() === 'error') aerr.push(m.text()); });
    await ap.goto(W + 'artifact.html#install', {waitUntil:'load'}); await ap.waitForTimeout(900);
    ok(await ap.evaluate(() => { const a = document.querySelector('#inhero a.in-go'); return document.querySelector('#in-state').textContent === 'Install it from the web app' && !document.querySelector('#in-steps') && !document.querySelector('#in-chips') && !window.GZ_PWA && !!a && a.href === APP_URL + '#install' && a.target === '_blank' && a.rel.includes('noopener') && !!document.querySelector('.in-qr-c'); }), 'artifact: Install the guide says it installs from the web app, links to its #install page and shows the code');
    ok(await ap.evaluate(async () => (await navigator.serviceWorker.getRegistrations()).length === 0) && !aerr.length && await hscroll(ap) <= 0, 'artifact: no service worker, no errors, no sideways scroll' + (aerr.length ? ': ' + aerr.join('; ') : ''));
    await ap.evaluate(() => { location.hash = '#asthma'; }); await ap.waitForTimeout(450); await ap.tap('#cur button.opt[data-go="0"]'); await ap.waitForTimeout(350);
    await ap.evaluate(() => { location.hash = '#numbers'; }); await ap.waitForTimeout(450); await ap.tap('#gback'); await ap.waitForTimeout(550);
    ok(await ap.evaluate(() => location.hash === '#asthma' && state.trail.length === 1) && !aerr.length, 'artifact: back returns to the step, as it was');
    await ap.screenshot({path:out + '/p-install-artifact.png', fullPage:true});
    await ac.close();

    /* Anywhere but github.io or localhost (here 127.0.0.1), the page registers nothing */
    const q = await ctx.newPage();
    await q.goto(`http://127.0.0.1:${PORT + 1}/`, {waitUntil:'load'}); await q.waitForTimeout(1200);
    ok(await q.evaluate(async () => 'serviceWorker' in navigator && (await navigator.serviceWorker.getRegistrations()).length === 0 && !document.querySelector('#st-offline')), 'web app: served from anywhere but github.io or localhost (here 127.0.0.1), it registers no service worker and adds no offline row');
    /* Save everything (12 Nov 2026): only on a tap, in a fresh browser; then every kept file is on the device, matching the build */
    swNewer = null;
    {
      const sc = await b.newContext({...phone, reducedMotion:'reduce'}), sp = await sc.newPage();
      await sp.goto(W + '#home', {waitUntil:'load'});
      await until(sp, () => !!navigator.serviceWorker.controller, null, 20000);
      await sp.evaluate(() => document.querySelector('[data-settings]').click());
      ok(await until(sp, () => /^Save all \(\d/.test(document.querySelector('#st-allb').textContent) && !document.querySelector('#st-allb').disabled, null, 15000), 'save everything: Settings offers to save the rest, with its size');
      await sp.click('#st-allb');
      ok(await until(sp, () => /Everything is saved/.test(document.querySelector('#st-allt').textContent), null, 180000), 'save everything: it saves, then says everything is on this device');
      const all = await sp.evaluate(async ([k, keep, w]) => { const c = await caches.open(k); let n = 0; for (const [f, h] of Object.entries(keep)){ const r = await c.match(w + f); if (r && r.headers.get('X-GZ-Hash') === h) n++; } return n; }, [KEPT, KEEP, W]);
      ok(all === Object.keys(KEEP).length, `save everything: all ${Object.keys(KEEP).length} films, sounds, loops and pages are kept, each matching the build`);
      await sc.close();
    }
    /* A patient's phone: the advice page registers no worker and saves nothing */
    {
      const pc = await b.newContext({...phone, reducedMotion:'reduce'}), pq = await pc.newPage();
      await pq.goto(W + '#pt-renal-colic', {waitUntil:'load'}); await pq.waitForTimeout(1500);
      ok(await pq.evaluate(async () => (await navigator.serviceWorker.getRegistrations()).length === 0 && (await caches.keys()).length === 0 && document.documentElement.classList.contains('pt-mode') && document.querySelectorAll('.pt-list li').length > 0), 'patient page: on the web app it shows the advice, registers no worker and saves nothing on the patient\'s phone');
      await pc.close();
    }
    await ctx.close(); srv2.close();

    /* The claude.ai artifact never gets any of it */
    const art = fs.readFileSync(path.join(__dirname, '..', 'green-zone-pathways.html'), 'utf8'), idx = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
    ok(!/serviceWorker|sw\.js|manifest\.webmanifest|rel="manifest"|apple-touch-icon|theme-color|st-offline|gz-upd/.test(art), 'the claude.ai artifact has no manifest, touch icon, theme colour, service worker or offline row');
    ok(idx.includes('<link rel="manifest" href="manifest.webmanifest">') && idx.includes("register('sw.js'") && idx.includes(`const PAGE = '${PAGEID}'`), 'the web app copy links the manifest and registers sw.js, with the page id its worker knows');
  }

  /* Install the guide on an Android phone: 360 px by day and by night, and 390 px by night */
  {
    const ANDROID = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36';
    for (const [w, h, scheme, name] of [[360, 780, 'light', 's-install'], [360, 780, 'dark', 'sd-install'], [390, 844, 'dark', 'pd-install']]){
      const q = await mk({viewport:{width:w, height:h}, isMobile:true, hasTouch:true, deviceScaleFactor:1, colorScheme:scheme, userAgent:ANDROID}, name);
      await q.goto(U + '#install', {waitUntil:'load'});
      const where = `install at ${w} px by ${scheme === 'dark' ? 'night' : 'day'}`;
      ok(await q.waitForFunction(() => document.querySelector('#in-state') && document.querySelector('#in-state').textContent === 'Ready offline', null, {timeout:15000, polling:250}).then(() => true, () => false)
        && await q.evaluate(() => /^Android/.test(document.querySelector('#in-plat [aria-pressed="true"]').textContent) && /Install app/.test(document.querySelector('#in-steps').textContent) && /For a colleague/.test(document.querySelector('#h-inqr').textContent)), `${where}: Ready offline, the Android steps, and the code is for a colleague`);
      ok(await hscroll(q) <= 0 && await q.evaluate(() => [...document.querySelectorAll('#instbox button, #instbox a')].filter(e => e.offsetParent !== null).every(e => { const r = e.getBoundingClientRect(); return r.left >= -1 && r.right <= innerWidth + 1; })), `${where}: no sideways scroll, and no control clipped at the edges`);
      await q.screenshot({path:out + `/${name}.png`, fullPage:true});
    }
  }

  /* The page in two parts (23 Nov 2026): the guide starts while the second script is still on its way. A server sends the page
     up to its second script and holds the rest until released: home, a department pathway and search work, a guideline waits and
     opens when the rest arrives, and then everything (entries and their order, the search index, groups, links, figures, counts,
     the home page's quick routes) is exactly as in a page loaded whole. */
  {
    const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8'), first = html.indexOf('\n<script>\n'), cut = html.indexOf('\n<script>\n', first + 5);
    ok(first > 0 && cut > first && /\ngzMore\(\);\n<\/script>/.test(html.slice(cut)) && /const MORE_IDS = new Set\(\[/.test(html.slice(first, first + 400)), 'the page is in two parts, the second ending with gzMore()');
    let release; const held = new Promise(r => { release = r; });
    const hs = http.createServer((req, res) => {
      const u = req.url.split('?')[0];
      if (u === '/held/' || u === '/whole/'){ res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'}); if (u === '/whole/') return res.end(html); res.write(html.slice(0, cut) + ' '.repeat(4096)); held.then(() => res.end(html.slice(cut))); return; }
      const f = path.join(root, decodeURIComponent(u.replace(/^\/(held|whole)\//, '/')));
      if (/sw\.js$/.test(u) || !f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()){ res.writeHead(404); res.end(); return; }
      res.writeHead(200); res.end(fs.readFileSync(f));
    }).listen(PORT + 2);
    const ctx = await b.newContext({viewport:{width:390, height:844}, serviceWorkers:'block'}), q = await ctx.newPage(), perr = [];
    q.on('pageerror', e => perr.push(e.message));
    q.goto(`http://localhost:${PORT + 2}/held/#home`).catch(() => {});
    await q.waitForFunction(() => typeof curView !== 'undefined' && curView === 'home', null, {timeout:30000});
    const pre = await q.evaluate(() => ({more:MORE, boot:!!document.querySelector('#gzboot'), dengue:!P['dengue-cpg'], renal:!!P['renal-colic']}));
    ok(!pre.more && pre.boot && pre.dengue && pre.renal, 'two parts: home is ready before the rest arrives, with the ready bar still showing');
    await go(q, '#renal-colic', 400);
    ok(await q.evaluate(() => curView === 'run' && state.id === 'renal-colic'), 'two parts: a department pathway opens before the rest arrives');
    await go(q, '#dengue', 400);
    ok(await q.evaluate(() => curView === 'run' && /follows the CPG Management of Dengue/.test(P.dengue.nodes[P.dengue.start].hint) && P.dengue.see[0][0] === '#dengue-cpg'), 'two parts: an ebook pathway already carries the lines its guideline adds (marked @light)');
    await go(q, '#search', 300); await q.fill('#gq', 'renal colic'); await q.waitForTimeout(500);
    ok(await q.evaluate(() => document.querySelector('#gres a') && document.querySelector('#gres a').getAttribute('href') === '#renal-colic'), 'two parts: search works before the rest arrives');
    await q.keyboard.press('Escape');
    await go(q, '#dengue-cpg', 400);
    ok(await q.evaluate(() => curView === 'run' && state.id === 'dengue' && moreWant && !!document.querySelector('#gzboot')), 'two parts: a guideline waits, the ready bar showing');
    release(); await q.waitForFunction(() => MORE, null, {timeout:30000}); await q.waitForTimeout(800);
    ok(await q.evaluate(() => curView === 'run' && state.id === 'dengue-cpg' && !document.querySelector('#gzboot')), 'two parts: the waiting guideline opens once the rest arrives, and the ready bar goes');
    const snap = () => ({keys:Object.keys(P), idx:IDX.map(e => [e.href, e.title, e.kind, e.meta, e.body, e.kw || '', e.ic, e.c, e.j]), cats:CATS.map(c => [c.k, c.ids.join()]),
      ent:Object.entries(P).map(([k, p]) => [k, JSON.stringify(p.see || []), p.kw || '', JSON.stringify(p.nodes)]), figs:Object.keys(FIGS).sort(), chg:CHG.size, a3:A3_REG.length,
      cnt:[...document.querySelectorAll('[data-cnt],#cnt-path,#cnt-rule,#cnt-calc')].map(e => e.textContent), quick:document.querySelector('#quick').innerHTML});
    const A = await q.evaluate(snap), r = await ctx.newPage(); await r.goto(`http://localhost:${PORT + 2}/whole/#home`); await r.waitForFunction(() => typeof MORE !== 'undefined' && MORE && curView); await r.waitForTimeout(400);
    const W = await r.evaluate(snap), diff = Object.keys(W).filter(k => JSON.stringify(A[k]) !== JSON.stringify(W[k]));
    ok(!diff.length, 'two parts: once the rest has arrived, entries, their order, the search index, groups, links, figures, counts and quick routes match a page loaded whole' + (diff.length ? ' ' + diff.join(', ') : ''));
    ok(!perr.length, 'two parts: no page errors' + (perr.length ? ' ' + perr.join(' | ') : ''));
    await ctx.close(); hs.close();
  }

  /* Pick up where you left off (23 Nov 2026): the last step's address and time only, offered on home for 12 hours, forgotten by the cross */
  {
    const ctx = await b.newContext({viewport:{width:390, height:844}, serviceWorkers:'block'}), q = await ctx.newPage();
    await q.goto(U + '#home'); await q.waitForFunction(() => typeof MORE !== 'undefined' && MORE && curView === 'home');
    ok(await q.evaluate(() => document.querySelector('#pickup').hidden && !localStorage.getItem('gz-last')), 'pick up: nothing offered on a first open');
    await go(q, '#renal-colic', 400); await q.click('#v-run .opts button, #v-run button.opt'); await q.waitForTimeout(300);
    const kept = await q.evaluate(() => ({ls:JSON.parse(localStorage.getItem('gz-last')), cur:'#' + state.id + '--' + state.cur}));
    ok(kept.ls && kept.ls.h === kept.cur && Object.keys(kept.ls).sort().join() === 'h,t', 'pick up: only the step\'s address and the time are kept');
    await go(q, '#home', 400);
    const card = await q.evaluate(() => { const r = document.querySelector('#pickup'); return {shown:!r.hidden, href:r.querySelector('a.rsm').getAttribute('href'), t:r.textContent}; });
    ok(card.shown && card.href === kept.cur && /Renal colic/.test(card.t) && /just now/.test(card.t), 'pick up: home offers the step, one tap away');
    await q.click('#pickup a.rsm'); await q.waitForTimeout(500);
    ok(await q.evaluate(c => location.hash === c && curView === 'run' && state.trail.every(x => x.auto), kept.cur), 'pick up: the card opens that step, its route marked auto');
    await q.evaluate(() => localStorage.setItem('gz-last', JSON.stringify({h:'#renal-colic', t:Date.now() - 13 * 3600e3}))); await go(q, '#home', 300);
    ok(await q.evaluate(() => document.querySelector('#pickup').hidden && !localStorage.getItem('gz-last')), 'pick up: forgotten after 12 hours');
    await q.evaluate(() => localStorage.setItem('gz-last', JSON.stringify({h:'#renal-colic', t:Date.now() - 5 * 60e3}))); await go(q, '#pathways', 200); await go(q, '#home', 300);
    ok(await q.evaluate(() => /5 min ago/.test(document.querySelector('#pickup').textContent)), 'pick up: says how long ago');
    await q.click('#pickup [data-rsmx]'); await q.waitForTimeout(200);
    ok(await q.evaluate(() => document.querySelector('#pickup').hidden && !localStorage.getItem('gz-last')), 'pick up: the cross forgets it');
    await q.screenshot({path:out + '/p-resume.png'});
    /* A page warmed on press: a pressed tile starts its page's banner picture, nothing else */
    const seen = []; q.on('request', x => { if (/\/tiles\/[^/]+\.webp$/.test(x.url())) seen.push(x.url().split('/').pop()); });
    await q.setViewportSize({width:1366, height:900}); await go(q, '#pathways', 500); seen.length = 0; /* wide: the library is unfolded */
    const row = q.locator('#libgrid .pc h3 a').first(), href = await row.getAttribute('href');
    const want = await q.evaluate(h => { const id = h.slice(1), p = P[id], c = catOf(id); return (p.hero || c.k) + '.webp'; }, href);
    await q.evaluate(() => WARM.clear());
    const box = await row.boundingBox(); await q.mouse.move(box.x + 5, box.y + 5); await q.mouse.down(); await q.waitForTimeout(150);
    ok(seen.includes(want) && seen.length <= 2, 'warm on press: pressing a library row starts its banner picture before the tap lands (' + seen.join(', ') + ')');
    await q.mouse.up(); await ctx.close();
  }

  /* The intro read aloud (23 Nov 2026): nothing downloads before Listen; Listen plays the screen on show in the language chosen */
  {
    const ctx = await b.newContext({viewport:{width:390, height:844}, serviceWorkers:'block'}), q = await ctx.newPage(), got = [];
    q.on('request', x => { if (/\/audio\/intro-/.test(x.url())) got.push(x.url().split('/').pop()); });
    await q.goto(U + '#intro'); await q.waitForFunction(() => typeof MORE !== 'undefined' && MORE && curView === 'intro'); await q.waitForTimeout(400);
    ok(!got.length && await q.evaluate(() => !!document.querySelector('#introbox [data-isay]') && document.querySelectorAll('#introbox [data-ilang]').length === 2), 'intro voice: Listen and the language choice, nothing downloaded before a tap');
    ok(['en', 'ms'].every(l => [1, 2, 3, 4].every(i => fs.existsSync(path.join(root, 'audio', `intro-${i}-${l}.mp3`)))), 'intro voice: four screens recorded in English and in Bahasa Melayu');
    await q.click('#introbox [data-isay]'); await q.waitForTimeout(600);
    ok(got.includes('intro-1-en.mp3') && await q.evaluate(() => introPlay && /intro-1-en\.mp3$/.test(introAud.src)), 'intro voice: Listen plays the first screen in English');
    await q.click('#introbox [data-ilang="ms"]'); await q.waitForTimeout(400);
    ok(await q.evaluate(() => /intro-1-ms\.mp3$/.test(introAud.src) && introPlay), 'intro voice: BM switches the narration to Bahasa Melayu');
    await q.click('#introbox [data-intro="next"]'); await q.waitForTimeout(400);
    ok(await q.evaluate(() => /intro-2-ms\.mp3$/.test(introAud.src) && introPlay), 'intro voice: Next carries on reading the next screen');
    await go(q, '#home', 300);
    ok(await q.evaluate(() => !introPlay && introAud.paused), 'intro voice: leaving the intro stops it');
    await ctx.close();
  }

  /* The cancer pain leaflet's film (23 Nov 2026): a card in each language, nothing loaded before a tap */
  {
    const ctx = await b.newContext({viewport:{width:390, height:844}, serviceWorkers:'block'}), q = await ctx.newPage(), got = [];
    q.on('request', x => { if (/cancer-pain-home/.test(x.url())) got.push(x.url().split('/').pop()); });
    ok(['cancer-pain-home-720.mp4', 'cancer-pain-home-ms-720.mp4', 'cancer-pain-home-poster.webp', 'cancer-pain-home-ms-poster.webp', 'cancer-pain-home-thumb.webp', 'cancer-pain-home-ms-thumb.webp'].every(f => fs.existsSync(path.join(root, 'media', f))), 'cancer pain film: both languages, with covers, are in media/');
    await q.goto(U + '#pt-cancer-pain-cpg'); await q.waitForFunction(() => typeof MORE !== 'undefined' && MORE && curView === 'pt'); await q.waitForTimeout(500);
    ok(await q.evaluate(() => { const b = document.querySelector('#ptbody .lfilm-b'); return !!b && b.dataset.film === 'media/cancer-pain-home-720.mp4'; }) && !got.some(f => /\.mp4$/.test(f)), 'cancer pain film: the patient page offers it, and no film loads before a tap');
    await q.goto(U + '#pt-cancer-pain-cpg-ms'); await q.waitForTimeout(600);
    ok(await q.evaluate(() => { const b = document.querySelector('#ptbody .lfilm-b'); return !!b && b.dataset.film === 'media/cancer-pain-home-ms-720.mp4'; }), 'cancer pain film: the Malay page offers the Malay film');
    await ctx.close();
  }

  /* 24 Nov 2026: the discharge advice in Bahasa Melayu, the journey in Bahasa Melayu, the advice films and What's new in 60 seconds */
  {
    const ctx = await b.newContext({viewport:{width:390, height:844}, serviceWorkers:'block'}), q = await ctx.newPage(), got = [];
    q.on('request', x => { if (/\/media\/(adv-|whatsnew)[^/]*\.mp4|\/audio\/(adv-[a-z]+-ms|stops-ms)/.test(x.url())) got.push(x.url().split('/').pop()); });
    await q.goto(U + '#renal-colic'); await q.waitForFunction(() => typeof MORE !== 'undefined' && MORE && curView === 'run'); await q.waitForTimeout(300);
    const all = await q.evaluate(() => Object.keys(READ_ADV).map(id => [id, !!advMs(id), !!READ[READ_ADV[id].replace(/-en$/, '-ms')], !!(FILMS[id] && FILMS[id].en)]));
    ok(all.length === 7 && all.every(r => r[1] && r[2] && r[3]), 'Malay advice: all seven tabs have a complete translation, a Malay read-aloud and an English film' + (all.every(r => r[1] && r[2] && r[3]) ? '' : ' ' + JSON.stringify(all)));
    ok(['tbi', 'dengue', 'asthma', 'gastro', 'renal', 'abdo', 'hypo'].every(k => fs.existsSync(path.join(root, 'media', `adv-${k}-720.mp4`)) && fs.existsSync(path.join(root, 'audio', `adv-${k}-ms.mp3`))) && fs.existsSync(path.join(root, 'audio', 'stops-ms.mp3')), 'Malay advice and journey: every film and recording is in app/');
    await q.evaluate(() => selectTab('advice')); await q.waitForTimeout(250);
    const en = await q.evaluate(() => ({seg:document.querySelectorAll('#tp-advice [data-advlang]').length, film:(document.querySelector('#tp-advice .lfilm-b') || {}).dataset || {}, read:document.querySelector('#tp-advice .lsn').dataset.read, n:document.querySelectorAll('#advlist li').length}));
    ok(en.seg === 2 && en.film.film === 'media/adv-renal-720.mp4' && en.film.cover === 'tiles/abdo.webp' && en.read === 'adv-renal-en' && en.n === 6 && !got.length, 'advice tab: English and Bahasa Melayu, the English film (its banner still as cover) and read-aloud, nothing loaded before a tap');
    await q.click('#tp-advice [data-advlang="ms"]'); await q.waitForTimeout(250);
    const ms = await q.evaluate(() => ({lang:document.querySelector('#advlist').lang, n:document.querySelectorAll('#advlist li').length, first:document.querySelector('#advlist li').textContent === ADVICE_MS['renal-colic'][0], read:document.querySelector('#tp-advice .lsn').dataset.read, film:!!document.querySelector('#tp-advice .lfilm-b'), src:/translation/.test(document.querySelector('#tp-advice .src').textContent), pressed:document.querySelector('#tp-advice [data-advlang="ms"]').getAttribute('aria-pressed')}));
    ok(ms.lang === 'ms' && ms.n === 6 && ms.first && ms.read === 'adv-renal-ms' && !ms.film && ms.src && ms.pressed === 'true', 'advice tab: Bahasa Melayu shows the translation line for line, its Malay read-aloud, a note that it is a translation, and no film (none in Malay yet)');
    await q.evaluate(() => navigator.clipboard && (navigator.clipboard.writeText = async t => { window.__clip = t; }));
    await q.click('#tp-advice [data-copyadvice]'); await q.waitForTimeout(200);
    ok(await q.evaluate(() => !window.__clip || /^1\. Minum/.test(window.__clip)), 'advice tab: Copy advice copies the language on screen');
    await q.goto(U + '#pt-renal-colic-ms'); await q.waitForTimeout(700);
    const pt = await q.evaluate(() => ({view:curView, lang:document.querySelector('.pt-adv').lang, seg:document.querySelectorAll('[data-ptlang]').length, first:document.querySelector('.pt-list li').textContent === ADVICE_MS['renal-colic'][0], read:document.querySelector('.pt-adv .lsn').dataset.read, src:/Terjemahan/.test(document.querySelector('.pt-adv .src').textContent)}));
    ok(pt.view === 'pt' && pt.lang === 'ms' && pt.seg === 2 && pt.first && pt.read === 'adv-renal-ms' && pt.src, 'patient page: renal colic advice in Bahasa Melayu, with its read-aloud and a Malay source line');
    await q.goto(U + '#pt-renal-colic'); await q.waitForTimeout(600);
    ok(await q.evaluate(() => document.querySelector('.pt-adv').lang === 'en' && document.querySelector('#ptbody .lfilm-b').dataset.film === 'media/adv-renal-720.mp4'), 'patient page: the English page offers the advice film');
    await q.click('#ptbody .lfilm-b'); await q.waitForTimeout(500);
    ok(got.some(f => f === 'adv-renal-720.mp4'), 'advice film: loads only after a tap');
    /* The journey in Bahasa Melayu */
    await q.goto(U + '#journey-2'); await q.waitForTimeout(900);
    ok(await q.evaluate(() => document.querySelectorAll('#jlang [data-jlang]').length === 2 && JOURNEY_MS.length === JOURNEY.length), 'journey: EN and BM beside Listen');
    await q.click('#jlang [data-jlang="ms"]'); await q.click('#jlisten'); await q.waitForFunction(() => !voice.paused, null, {timeout:8000}).catch(() => {}); await q.waitForTimeout(400);
    ok(await q.evaluate(() => voice.dataset.lang === 'ms' && voice.dataset.i === '1' && /^blob:/.test(voice.src) && voice.currentTime >= JSTOPS_AUDIO.ms.s[1].at && document.querySelector('#jcap').lang === 'ms' && JOURNEY_MS[1].startsWith(document.querySelector('#jcap').textContent.trim())), 'journey: BM plays the Malay narration with Malay captions');
    await q.evaluate(() => stopJourney());
    /* What's new in 60 seconds */
    got.length = 0; await q.goto(U + '#new'); await q.waitForTimeout(800);
    const wn = await q.evaluate(() => { const b = document.querySelector('#drive .lfilm-b'); return b && {film:b.dataset.film, w:b.dataset.w, h:b.dataset.h}; });
    ok(wn && wn.film === 'media/whatsnew-720.mp4' && wn.w === '1280' && wn.h === '720' && !got.length && fs.existsSync(path.join(root, 'media', 'whatsnew-720.mp4')), 'What\'s new: the 60-second film at the top of the page, 16:9, nothing loaded before a tap');
    await q.click('#drive .lfilm-b'); await q.waitForTimeout(500);
    ok(await q.evaluate(() => { const v = document.querySelector('#drive .lfilm-v'); return !!v && v.getAttribute('width') === '1280' && /1280\s*\/\s*720/.test(v.style.aspectRatio); }) && got.includes('whatsnew-720.mp4'), 'What\'s new: a tap plays it in a 16:9 player');
    await q.screenshot({path:out + '/p-whatsnew-film.png'});
    await ctx.close();
  }

  /* ---------- The 25 Nov 2026 round: the design review's upgrades (REVIEW.md, section 11) ---------- */
  {
    const P25 = {viewport:{width:390, height:844}, isMobile:true, hasTouch:true, deviceScaleFactor:1, serviceWorkers:'block'};
    const ctx = await b.newContext({...P25, reducedMotion:'reduce'}), q = await ctx.newPage();
    q.on('pageerror', e => errs.push('25 Nov PAGEERROR: ' + e.message));
    q.on('console', m => { if (m.type() === 'error') errs.push('25 Nov: ' + m.text()); });
    const settle = async (ms = 400) => q.waitForTimeout(ms);

    /* 1. A calculator's citation reads "Source:"; a real gap keeps "Not in the source:". Every literal gap line is pinned: the
       citations (an author with et al. or a second author, or a source with its year) and nothing else */
    const parts = path.join(__dirname, 'parts'), eng = fs.readFileSync(path.join(parts, 'engine.js'), 'utf8');
    const citeRe = new RegExp(eng.match(/const CITE_RE = \/(.*)\/;/)[1]), gapsAll = new Set();
    fs.readdirSync(parts).filter(f => /\.js$/.test(f)).forEach(f => { const t = fs.readFileSync(path.join(parts, f), 'utf8'); for (const m of t.matchAll(/gap:\s*'((?:[^'\\]|\\.)*)'/g)) gapsAll.add(m[1].replace(/\\'/g, "'")); });
    const cites = [...gapsAll].filter(g => citeRe.test(g)), realStart = [...gapsAll].filter(g => !citeRe.test(g));
    ok(cites.length === 34 && cites.every(g => /^([A-Z][a-z'-]+ [A-Z]{1,2}( et al|, [A-Z])|Head injury CPG|VTE CPG|AF CPG|Abdominal trauma CPG|CMAJ|RCP|Royal|Victorian)/.test(g)) && !realStart.some(g => /^[A-Z][a-z'-]+ [A-Z]{1,2} et al\b/.test(g) || /^(Head injury|AF|VTE|Abdominal trauma) CPG (19|20)\d\d,/.test(g)),
      'calculator sources: 34 gap lines open on their citation and read Source:, and no other gap line starts with an author or a source and year' + (cites.length === 34 ? '' : ' (' + cites.length + ')'));
    await q.goto(U + '#calc-news2'); await settle(900);
    const fill = async vals => q.evaluate(v => { Object.entries(v).forEach(([k, x]) => { const i = document.querySelector('#cf-' + k); i.value = x; i.dispatchEvent(new Event('input', {bubbles:true})); }); }, vals);
    await fill({rr:'28', sp:'90', sbp:'88', pr:'135', tp:'39.5'}); await settle();
    const n2 = await q.evaluate(() => ({cite:(document.querySelector('#couts .cx-cite') || {}).textContent || '', gaps:[...document.querySelectorAll('#couts .cx-gap')].map(g => g.textContent), copy:calcText()}));
    ok(/^Source: RCP, NEWS2, 2017/.test(n2.cite) && !n2.gaps.some(g => /Not in the source:\s*RCP/.test(g)) && /\nSource: RCP, NEWS2, 2017/.test(n2.copy) && !/Not in the source: RCP/.test(n2.copy), 'NEWS2: its citation reads "Source: RCP, NEWS2, 2017", on screen and in Copy' + (n2.cite ? '' : ' ' + JSON.stringify(n2)));
    await q.goto(U + '#calc-insulin'); await settle(700);
    await q.evaluate(() => { const i = document.querySelector('#cf-wt'); i.value = '50'; i.dispatchEvent(new Event('input', {bubbles:true})); });
    await q.click('#calcbox [data-pv="0.4"]'); await settle();
    ok(await q.evaluate(() => [...document.querySelectorAll('#couts .cx-gap')].some(g => /^Not in the source:/.test(g.textContent.trim())) && !document.querySelector('#couts .cx-cite')), 'a real gap still reads "Not in the source:" (insulin, the missing split)');

    /* 2. One reference-list pattern: top-bar titles, the lead's first sentence with More, the banner's count and edition only,
       placeholders that fit, one filter row, no skipped heading, the abbreviation list's examples and its source folded */
    for (const [h, t, ph] of [['antidotes', 'Antidotes', 'Antidote or poison'], ['abbreviations', 'Abbreviations', 'Letters or a word'], ['antibiotics', 'Antimicrobial guides', 'Antimicrobial']]){
      await q.goto(U + '#' + h); await settle(900);
      const r = await q.evaluate(([h, ph]) => { const v = document.querySelector('#v-' + h), inp = v.querySelector('.lk-top input[type="search"]'), cs = getComputedStyle(inp);
        const room = inp.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight), ctx2 = document.createElement('canvas').getContext('2d'); ctx2.font = cs.fontWeight + ' ' + cs.fontSize + ' ' + cs.fontFamily;
        return {top:document.querySelector('#toptitle').textContent, key:!!v.querySelector('.vhead .vkey'), more:getComputedStyle(v.querySelector('.vhead .vmore')).display, clamp:getComputedStyle(v.querySelector('.vhead p')).webkitLineClamp, heroP:!!v.querySelector('.phx-hero p'), ph:inp.placeholder, fits:ctx2.measureText(inp.placeholder).width <= room, side:document.documentElement.scrollWidth <= innerWidth}; }, [h, ph]);
      ok(r.top === t && r.key && r.more === 'none' && (r.clamp === 'none' || r.clamp === '' || r.clamp === 'unset') && !r.heroP && r.ph === ph && r.fits && r.side, `${h}: the top bar names it, the lead opens on its first sentence with More, the banner keeps its count and edition, and the find box's "${ph}" fits at 390 px` + (r.top === t && r.fits ? '' : ' ' + JSON.stringify(r)));
    }
    await q.goto(U + '#antidotes'); await q.waitForFunction(() => document.querySelectorAll('#axl .ax').length > 30, null, {timeout:8000}).catch(() => {});
    await q.evaluate(() => { document.querySelector('#axl .ax').open = true; });
    ok(await q.evaluate(() => !document.querySelector('#axl h4') && document.querySelectorAll('#axl .ax-f h3').length > 0 && !!document.querySelector('#axhero h2')), 'antidotes: the headings inside an antidote are h3 under the banner\'s h2, with no level skipped');
    await q.goto(U + '#antibiotics'); await settle(700);
    ok(await q.evaluate(() => { const f = document.querySelector('#abf'), cs = getComputedStyle(f), rows = new Set([...f.querySelectorAll('button')].map(b => Math.round(b.getBoundingClientRect().top))); return cs.flexWrap === 'nowrap' && rows.size === 1 && FADE_ROWS.includes('#abf') && getComputedStyle(document.querySelector('#abl .ab-r')).backgroundColor === 'rgba(0, 0, 0, 0)'; }), 'antimicrobial guides: the filters sit in one row that scrolls, and each drug is one card whose bands are recessed rows');
    await q.goto(U + '#abbreviations'); await q.waitForFunction(() => KB.state === 'ready', null, {timeout:8000}).catch(() => {});
    await settle(300);
    const kb0 = await q.evaluate(() => ({tries:[...document.querySelectorAll('#kbl [data-kbx]')].map(b => b.textContent), about:!!document.querySelector('#kbsrc details.kb-about:not([open]) .lk-note')}));
    await q.click('#kbl [data-kbx="TCA"]'); await settle(300);
    const kb1 = await q.evaluate(() => ({q:document.querySelector('#kbq').value, rows:[...document.querySelectorAll('#kbl .kb-r')].map(r => r.querySelector('.kb-a').textContent + '=' + r.querySelector('.kb-m').textContent)}));
    ok(kb0.tries.join() === 'KIV,TCA,AOR' && kb0.about && kb1.q === 'TCA' && kb1.rows.some(r => r === 'TCA=To Come Again / Appointment'), 'abbreviations: three example searches fill the box and show the list\'s own row; the source is folded under About this list');

    /* 3. A calculator opens on itself on a phone, with paired fields in line, short units inside the field, and a result bar while
       the result is off screen (never coloured without a verdict) */
    await q.goto(U + '#calc-news2'); await settle(900);
    const c3 = await q.evaluate(() => { const h = document.querySelector('#v-calc .vhead').getBoundingClientRect(), a = document.querySelector('#cf-rr').getBoundingClientRect(), b2 = document.querySelector('#cf-sp').getBoundingClientRect(), f = document.querySelector('#cf-sp').closest('.field');
      return {head:h.height <= 1, h1:!!document.querySelector('#v-calc h1#h-calc'), first:Math.round(document.querySelector('#calcbox .tool-h').getBoundingClientRect().top), pair:Math.abs(a.top - b2.top) < 1 && Math.abs(a.bottom - b2.bottom) < 1, unit:(f.querySelector('.fu') || {}).textContent, label:f.querySelector('label').textContent}; });
    ok(c3.head && c3.h1 && c3.first < 120 && c3.pair && c3.unit === '%' && /SpO2\s*\(%\)/.test(c3.label), 'calculator on a phone: it opens on its own banner (the hub\'s heading kept for screen readers), paired fields line up, and the unit sits inside the field and stays in its label' + (c3.head && c3.pair ? '' : ' ' + JSON.stringify(c3)));
    await fill({rr:'28', sp:'90', sbp:'88', pr:'135', tp:'39.5'}); await q.evaluate(() => scrollTo(0, 0)); await settle(500);
    const bar1 = await q.evaluate(() => { const b = document.querySelector('#cxbar'), vd = calcLast && calcLast.verdict; return {shown:!b.hidden, cls:b.className, want:vd ? 'k-' + ({ok:'discharge', stop:'admit', refer:'refer', next:'neutral'}[vd.cls]) : 'k-none', fig:(b.querySelector('b') || {}).textContent, above:b.getBoundingClientRect().bottom <= document.querySelector('#tabbar').getBoundingClientRect().top}; });
    await q.evaluate(() => document.querySelector('#couts').scrollIntoView({block:'center'})); await settle(500);
    const bar2 = await q.evaluate(() => document.querySelector('#cxbar').hidden);
    ok(bar1.shown && bar1.cls.includes(bar1.want) && /\d/.test(bar1.fig || '') && bar1.above && bar2, 'calculator result bar: once filled it shows the figure and the verdict\'s own colour above the tab bar while the result is off screen, and hides when the result is on screen' + (bar1.shown && bar2 ? '' : ' ' + JSON.stringify({bar1, bar2})));
    await q.click('#cxclear'); await q.evaluate(() => scrollTo(0, 0)); await settle(400);
    ok(await q.evaluate(() => document.querySelector('#cxbar').hidden), 'calculator result bar: Clear takes it away');
    await q.goto(U + '#calc-timi'); await settle(700);
    await q.evaluate(() => { const c = document.querySelector('#calcbox input[type="checkbox"]'); if (c){ c.checked = true; c.dispatchEvent(new Event('change', {bubbles:true})); } scrollTo(0, 0); }); await settle(500);
    ok(await q.evaluate(() => { const b = document.querySelector('#cxbar'); return !b || b.hidden || !/k-discharge/.test(b.className); }), 'calculator result bar: TIMI never turns it green');

    /* 4. The runner's header on a phone */
    await q.goto(U + '#renal-colic'); await settle(800);
    await q.click('#cur button.opt'); await settle(500);
    const r4 = await q.evaluate(() => { const lib = document.querySelector('.run-hero .chip.lib'), last = document.querySelector('.trailx button.last'); return {lib:!!lib && getComputedStyle(lib).display !== 'none' && lib.getAttribute('href') === '#pathways', top:getComputedStyle(document.querySelector('.run-top')).display, tq:last && getComputedStyle(last.querySelector('.tq')).display !== 'none' && last.querySelector('.tq').textContent.length > 3, qTop:document.querySelector('#cur').getBoundingClientRect().top / innerHeight}; });
    ok(r4.lib && r4.top === 'none' && r4.tq && r4.qTop < 0.4, 'runner on a phone: the library link is the banner\'s first chip, the newest route chip names its question, and the question starts in the top 40%' + (r4.lib && r4.tq ? '' : ' ' + JSON.stringify(r4)));

    /* 5. Grouped search: heads with counts, the order the search gave, one listbox the arrows walk */
    await q.goto(U + '#home'); await settle(600);
    await q.evaluate(() => openPal('ceftriaxone')); await settle(700); /* its results run from the guide's pages into the drug lists */
    await q.focus('#gq');
    const s5 = await q.evaluate(() => { const hrefs = () => [...document.querySelectorAll('#gres a')].map(a => a.getAttribute('href') + (a.dataset.rx || a.dataset.dg || a.dataset.ab || a.dataset.ax || ''));
      const grouped = hrefs(), heads = [...document.querySelectorAll('#gres .pal-gh')].map(h => h.textContent), keep = palGrouped;
      palGrouped = (r, d) => r.map(d).join(''); renderPal(); const flat = hrefs(); palGrouped = keep; renderPal();
      return {same:grouped.join() === flat.join() && grouped.length > 3, heads, lists:document.querySelectorAll('#gres').length, roles:[...document.querySelectorAll('#gres > li')].every(li => li.getAttribute('role') === 'group' || li.getAttribute('role') === 'none')}; });
    await q.keyboard.press('ArrowDown'); await q.keyboard.press('ArrowDown');
    const sel = await q.evaluate(() => { const L = palLinks(); return L.findIndex(a => a.getAttribute('aria-selected') === 'true'); });
    const s5b = await q.evaluate(() => { const a = document.querySelector('#gres a'), m = document.querySelector('#gres .rt mark'), hov = getComputedStyle(document.documentElement).getPropertyValue('--surface-3'); return {mark:m ? getComputedStyle(m).textDecorationLine : 'none', voice:document.querySelector('#gmlang .ml-k') && document.querySelector('#gmlang .ml-k').textContent}; });
    ok(s5.same && s5.heads.length >= 2 && s5.heads.every(h => /^(In the guide|Calculators|Drug lists|Outside the guide)\d+$/.test(h)) && s5.lists === 1 && s5.roles && sel === 2, 'search: results sit under quiet heads with counts, in exactly the order the search gave, in one listbox that the arrows walk' + (s5.same && sel === 2 ? '' : ' ' + JSON.stringify({s5, sel})));
    ok(s5b.mark.includes('underline') && s5b.voice === 'Voice', 'search: a match in a title is underlined, not boxed, and the voice language button says Voice');
    ok(await q.evaluate(() => { const css = [...document.querySelectorAll('style')].map(s => s.textContent).join(''); return /\.pal-res a:hover\{background:var\(--surface-3\)\}/.test(css) && /\.pal-res a\[aria-selected="true"\]\{background:var\(--accent-soft\);box-shadow:inset 3px 0 0 var\(--accent\)\}/.test(css); }), 'search: hover and the selected row are drawn differently');
    await q.evaluate(() => closePal(false));

    /* 6. The accessibility variants */
    const mq = await q.evaluate(() => { const seen = new Set(); const walk = rs => [...rs].forEach(r => { if (r.media) seen.add(r.media.mediaText); if (r.cssRules) walk(r.cssRules); }); [...document.styleSheets].forEach(s => { try { walk(s.cssRules); } catch(e){} }); return [...seen].join(' | '); });
    ok(/prefers-reduced-transparency: reduce/.test(mq) && /prefers-contrast: more/.test(mq) && /forced-colors: active/.test(mq), 'accessibility: the stylesheet answers reduced transparency, more contrast and forced colours');
    const ctxC = await b.newContext({...P25, contrast:'more', reducedMotion:'reduce'}).catch(() => null);
    if (ctxC){ const qc = await ctxC.newPage(); await qc.goto(U + '#renal-colic'); await qc.waitForTimeout(800);
      ok(await qc.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--muted').trim() === '#38463f' && getComputedStyle(document.querySelector('.run-hero .chip.j')).backgroundColor === 'rgba(0, 0, 0, 0.55)'), 'accessibility: with more contrast, muted ink darkens and the banner chips turn solid'); await ctxC.close(); }

    /* 8. A shorter home: the Now tile opens on one line and stays as it was when it redraws; the shift has left its header */
    await q.goto(U + '#home'); await settle(800);
    const n8 = await q.evaluate(() => { const t = document.querySelector('#tl-now'), s = t.querySelector('.nowsum'); const closed = !s.open && s.getBoundingClientRect().height < 80; s.open = true; renderNow(); return {closed, line:t.querySelector('.nowsum summary').textContent, kept:t.querySelector('.nowsum').open, head:t.querySelector('.tile-h').textContent, shift:!!t.querySelector('.nowsum .nowsh'), names:document.querySelectorAll('#t-rules .gl span').length && [...document.querySelectorAll('#t-rules .gl span')].every(s => s.scrollWidth <= s.clientWidth + 1 && getComputedStyle(s).whiteSpace !== 'nowrap')}; });
    ok(n8.closed && /(In session|No clinic in session now|Not in session)/.test(n8.line) && /EMACC/.test(n8.line) && n8.kept && !/shift/i.test(n8.head) && n8.shift && n8.names, 'home on a phone: Now opens on one line of today\'s clinics and stays open across its 30-second redraw; the shift moved inside; the Rules tile shows whole names' + (n8.closed && n8.kept ? '' : ' ' + JSON.stringify(n8)));
    ok(await q.evaluate(() => { const c = [...document.querySelectorAll('#keynums .qnum b')].find(b => b.textContent === 'Counter 10'); return !c || (c.classList.contains('w') && !/Mono/.test(getComputedStyle(c).fontFamily)); }), 'numbers: Counter 10 is set in words, not in mono');

    /* 9. The night outcome: day fills exactly as the ebook prints them; at night the same hue, quieter, and the primary in its soft tint */
    const fillsOf = async () => q.evaluate(() => ['admit', 'observe', 'discharge', 'refer', 'neutral'].map(k => getComputedStyle(document.documentElement).getPropertyValue('--b-' + k).trim()));
    await q.goto(U + '#renal-colic--home'); await settle(700);
    const day = await fillsOf(), dayPri = await q.evaluate(() => getComputedStyle(document.querySelector('.res .res-f .primary')).backgroundColor);
    await q.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark')); await settle(200);
    const night = await fillsOf(), nPri = await q.evaluate(() => ({bg:getComputedStyle(document.querySelector('.res .res-f .primary')).backgroundColor, soft:getComputedStyle(document.documentElement).getPropertyValue('--discharge-soft').trim()}));
    await q.evaluate(() => document.documentElement.removeAttribute('data-theme'));
    ok(day.join() === '#c42a20,#f0ae1c,#13834c,#5a44c4,#41544b' && night.every((v, i) => v && v !== day[i]) && dayPri === 'rgb(255, 255, 255)' && nPri.bg !== 'rgb(255, 255, 255)' && nPri.soft === '#10301f' && nPri.bg === 'rgb(16, 48, 31)', 'night outcome: by day the five fills are the ebook\'s own; at night each is quieter, and the primary takes the soft tint' + (night.every((v, i) => v !== day[i]) ? '' : ' ' + JSON.stringify({day, night, nPri})));

    /* 10. One film card, one listen control, the same stack in both languages */
    await q.evaluate(() => selectTab('advice')); await settle(300);
    const t10 = await q.evaluate(() => ({say:getComputedStyle(document.querySelector('#ptab .ptab-say')).display, link:!!document.querySelector('#tp-advice .lsn .lsn-tts[data-say="tab"]')}));
    await q.click('#tp-advice [data-advlang="ms"]'); await settle(300);
    const t10b = await q.evaluate(() => { const note = document.querySelector('#tp-advice .adv-ms'), lsn = document.querySelector('#tp-advice .lsn'); return {order:!!note && !!lsn && !!(note.compareDocumentPosition(lsn) & Node.DOCUMENT_POSITION_FOLLOWING) && !!(document.querySelector('#tp-advice .leaf-lang').compareDocumentPosition(note) & Node.DOCUMENT_POSITION_FOLLOWING), gap:Math.round(lsn.getBoundingClientRect().top - document.querySelector('#tp-advice .leaf-lang').getBoundingClientRect().bottom)}; });
    await q.click('#tp-advice [data-advlang="en"]'); await settle(300);
    const gapEn = await q.evaluate(() => Math.round(document.querySelector('#tp-advice .lsn').getBoundingClientRect().top - document.querySelector('#tp-advice .leaf-lang').getBoundingClientRect().bottom));
    ok(t10.say === 'none' && t10.link && t10b.order && gapEn >= 12 && gapEn <= 16, 'advice tab: the phone\'s voice is a small link in the recorded bar, the translation note sits under the switch, and the switch keeps 12 to 16 px above the bar' + (t10b.order ? '' : ' ' + JSON.stringify({t10, t10b, gapEn})));
    await q.goto(U + '#new'); await settle(800);
    ok(await q.evaluate(() => { const im = document.querySelector('#drive .lfilm-th img'), card = document.querySelector('#drive .lfilm'); return !!im && getComputedStyle(im).objectPosition.startsWith('0%') && parseFloat(getComputedStyle(card).marginBottom) >= 12; }), 'film card: What\'s new keeps its title in the cover and a margin below, like the leaflet\'s');

    /* 11. Native details and the compact tab bar, off by default */
    ok(await q.evaluate(() => { const css = [...document.querySelectorAll('style')].map(s => s.textContent).join(''); return /@starting-style/.test(css) && /100dvh/.test(css) && /\.gz-app body\{background:var\(--amb-3\)\}/.test(css); }), 'native details: @starting-style for the sheets, dvh heights, and the web app\'s body on the top bar\'s ground');
    await q.goto(U + '#pathways'); await settle(700);
    await q.evaluate(() => { scrollTo(0, 60); }); await settle(100); await q.evaluate(() => { scrollTo(0, 900); }); await settle(300);
    const tb0 = await q.evaluate(() => ({pref:prefs.tabc, min:document.documentElement.classList.contains('tb-min'), stored:localStorage.getItem('gz-tabc')}));
    ok(tb0.pref === 'off' && !tb0.min && tb0.stored === null, 'compact tab bar: off by default, so scrolling leaves the tab bar as it is');
    await ctx.close();
    const ctxT = await b.newContext({...P25}), qt = await ctxT.newPage(); qt.on('pageerror', e => errs.push('tab bar PAGEERROR: ' + e.message));
    await qt.goto(U + '#pathways'); await qt.waitForTimeout(800);
    await qt.evaluate(() => openSettings()); await qt.waitForTimeout(300); await qt.click('#st-tabc [data-val="on"]'); await qt.click('#setclose'); await qt.waitForTimeout(300);
    await qt.evaluate(() => scrollTo(0, 100)); await qt.waitForTimeout(120); await qt.evaluate(() => scrollTo(0, 700)); await qt.waitForTimeout(400);
    const tb1 = await qt.evaluate(() => ({min:document.documentElement.classList.contains('tb-min'), h:Math.round(document.querySelector('#tabbar').getBoundingClientRect().height), stored:localStorage.getItem('gz-tabc'), label:document.querySelector('#tabbar a').textContent.trim()}));
    await qt.evaluate(() => scrollTo(0, 400)); await qt.waitForTimeout(400);
    const tb2 = await qt.evaluate(() => document.documentElement.classList.contains('tb-min'));
    ok(tb1.min && tb1.h < 60 && tb1.stored === '"on"' && tb1.label === 'Home' && !tb2, 'compact tab bar: switched on, it folds to its icons scrolling down (the labels stay for screen readers) and opens scrolling up' + (tb1.min && !tb2 ? '' : ' ' + JSON.stringify({tb1, tb2})));
    await ctxT.close();
  }

  /* ---------- The 26 Nov 2026 content round: current alerts, the asthma CPG's corrected web version, NAG links, Nipah, the abbreviation circular ---------- */
  {
    const P26 = {viewport:{width:390, height:844}, isMobile:true, hasTouch:true, deviceScaleFactor:1, serviceWorkers:'block'};
    const ctx = await b.newContext({...P26, reducedMotion:'reduce'}), q = await ctx.newPage();
    q.on('pageerror', e => errs.push('26 Nov PAGEERROR: ' + e.message));
    q.on('console', m => { if (m.type() === 'error') errs.push('26 Nov: ' + m.text()); });
    const settle = async (ms = 400) => q.waitForTimeout(ms);
    const whole = () => q.waitForFunction(() => !!P['asthma-cpg'] && !!P['diabetic-foot-cpg'], null, {timeout:15000}).catch(() => {});

    /* Current alerts: the in-date lines, each with its date, its source in a new tab and a pill to the guide's own page */
    await q.goto(U + '#home'); await whole(); await settle(700);
    const al = await q.evaluate(() => { renderAlerts('2026-11-26'); const el = document.querySelector('#alerts'), rows = [...el.querySelectorAll('.al-r')];
      return {hidden:el.hidden, head:(el.querySelector('.al-h h2') || {}).textContent, n:(el.querySelector('.al-h .tag') || {}).textContent, keys:rows.map(r => r.dataset.alk).join(),
        texts:rows.every((r, i) => r.querySelector('.al-t').textContent === ALERTS[i].t), dates:rows.every((r, i) => r.querySelector('.al-m').textContent.includes(ALERTS[i].d)),
        srcs:rows.every((r, i) => { const a = r.querySelector('a.al-src'); return a.getAttribute('href') === ALERTS[i].href && a.target === '_blank' && /noopener/.test(a.rel) && /noreferrer/.test(a.rel); }),
        pills:rows.map(r => r.querySelector('a.al-go').getAttribute('href')).join(), out:[...el.querySelectorAll('a[href^="http"]')].every(a => a.target === '_blank'),
        sb:el.previousElementSibling && el.previousElementSibling.id, wide:document.documentElement.scrollWidth <= innerWidth, stored:Object.keys(localStorage).filter(k => /alert/i.test(k)).length}; });
    ok(!al.hidden && al.head === 'Current alerts' && /3$/.test(al.n) && al.keys === 'dengue,rabies,flood' && al.texts && al.dates && al.srcs && al.out && al.pills === '#dengue-cpg,#animal-bites,#infection-alerts--lepto' && al.sb === 'pins' && al.wide && al.stored === 0,
      'current alerts: on 26 Nov 2026 the home card shows its three lines in the guide\'s words, each with its date, its source opening in a new tab and a pill to the guide\'s own page, under the search box, nothing stored and nothing sideways at 390 px' + (al.keys === 'dengue,rabies,flood' && al.wide ? '' : ' ' + JSON.stringify(al)));
    /* Folded on a phone (Krishna, 26 Nov 2026: "Fold to one line"): the band, the heading and one line naming the alerts, so the Code Blue tile stays on the first screen */
    const fo = await q.evaluate(() => { const el = document.querySelector('#alerts'), sum = el.querySelector('.al-sum'), m = el.querySelector('.al-more'), cs = getComputedStyle(sum);
      const cb = document.querySelector('[data-tm="codeblue"]'), cbt = cb && cb.closest('.tile, a, section'), tab = [...document.querySelectorAll('nav, .tabs, #tabs')].find(n => getComputedStyle(n).position === 'fixed' && n.getBoundingClientRect().top > 600);
      return {folded:!el.classList.contains('open') && getComputedStyle(el.querySelector('.al-l')).display === 'none', sum:[...sum.querySelectorAll('span')].map(x => x.textContent).join('|'), want:ALERTS.map(a => a.s).join('|'),
        fits:sum.scrollWidth <= sum.clientWidth, one:sum.getBoundingClientRect().height <= parseFloat(cs.lineHeight) * 1.5 + parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom), h:Math.round(el.getBoundingClientRect().height),
        more:getComputedStyle(m).display !== 'none' && m.getAttribute('aria-expanded') === 'false', inPage:[...el.querySelectorAll('.al-t')].length === 3,
        cb:cbt ? Math.round(cbt.getBoundingClientRect().bottom) : null, tab:tab ? Math.round(tab.getBoundingClientRect().top) : null}; });
    ok(fo.folded && fo.sum === fo.want && fo.fits && fo.one && fo.h <= 140 && fo.more && fo.inPage && fo.cb !== null && fo.tab !== null && fo.cb <= fo.tab,
      'current alerts on a phone: folded to the band, the heading and one line naming the three alerts (whole, at 390 px), the full lines still in the page, and the Code Blue tile on the first screen above the tab bar' + (fo.folded && fo.one && fo.cb <= fo.tab ? '' : ' ' + JSON.stringify(fo)));
    await q.screenshot({path:out + '/p-home-alerts-folded.png'});
    const cl = await q.evaluate(() => { const el = document.querySelector('#alerts'), m = el.querySelector('.al-more'), r = {};
      el.querySelector('.al-sum').click(); r.bySum = el.classList.contains('open') && m.getAttribute('aria-expanded') === 'true' && m.textContent === 'Less' && getComputedStyle(el.querySelector('.al-sum')).display === 'none';
      m.click(); r.closed1 = !el.classList.contains('open');
      m.click(); const t = el.querySelector('.al-t'), cs = getComputedStyle(t);
      r.open = el.classList.contains('open') && getComputedStyle(el.querySelector('.al-l')).display !== 'none' && t.getBoundingClientRect().height > parseFloat(cs.lineHeight) * 1.5;
      r.short = getComputedStyle(el.querySelector('.al-s')).display === 'none' && getComputedStyle(el.querySelector('.al-gs')).display !== 'none';
      r.full = cs.webkitLineClamp === 'none' || cs.display !== '-webkit-box';
      m.click(); r.closed = !el.classList.contains('open') && m.textContent === 'More'; return r; });
    ok(cl.bySum && cl.closed1 && cl.open && cl.short && cl.full && cl.closed, 'current alerts on a phone: More in the heading, or a tap on the folded line, opens every line in full with the source\'s short link and the pill\'s short label, and Less folds it again' + (cl.bySum && cl.open && cl.closed ? '' : ' ' + JSON.stringify(cl)));
    await q.evaluate(() => document.querySelector('#alerts .al-more').click()); await settle(200);
    await q.screenshot({path:out + '/p-home-alerts.png'});
    await q.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark')); await settle(200);
    const dk = await q.evaluate(() => ({bg:getComputedStyle(document.querySelector('#alerts')).backgroundImage, ink:getComputedStyle(document.querySelector('#alerts .al-t')).color, wide:document.documentElement.scrollWidth <= innerWidth}));
    await q.screenshot({path:out + '/pd-home-alerts.png'});
    await q.evaluate(() => document.documentElement.removeAttribute('data-theme')); await settle(200);
    const lt = await q.evaluate(() => getComputedStyle(document.querySelector('#alerts .al-t')).color);
    ok(dk.ink !== lt && /gradient/.test(dk.bg) && dk.wide, 'current alerts at night: the pearl card takes the night tokens, and nothing scrolls sideways' + (dk.ink !== lt ? '' : ' ' + JSON.stringify([dk, lt])));
    /* A line past its date hides itself (Malaysia time), and the card hides when none is in date */
    const dt = await q.evaluate(() => { const keys = () => [...document.querySelectorAll('#alerts .al-r')].map(r => r.dataset.alk).join(), real = Date.now, r = {};
      Date.now = () => Date.parse('2026-12-06T15:59:00Z'); renderAlerts(); r.last = keys();   /* 6 Dec, 11.59 pm in Malaysia: the dengue line's last minute */
      Date.now = () => Date.parse('2026-12-06T16:01:00Z'); renderAlerts(); r.next = keys(); r.n = document.querySelector('#alerts .al-h .tag').textContent; /* 7 Dec, 12.01 am */
      Date.now = real;
      renderAlerts('2027-03-31'); r.flood = keys();
      renderAlerts('2027-04-01'); r.none = document.querySelector('#alerts').hidden && !document.querySelector('#alerts').innerHTML;
      return r; });
    ok(dt.last === 'dengue,rabies,flood' && dt.next === 'rabies,flood' && /2$/.test(dt.n) && dt.flood === 'flood' && dt.none, 'current alerts: a line hides itself after its date in Malaysia time (the dengue line goes at midnight on 6 Dec 2026), and the card hides when none is in date' + (dt.next === 'rabies,flood' && dt.none ? '' : ' ' + JSON.stringify(dt)));
    /* Its pills open the guide's own pages, the second part's dengue CPG too */
    await q.evaluate(() => { renderAlerts('2026-11-26'); if (!document.querySelector('#alerts').classList.contains('open')) document.querySelector('#alerts .al-more').click(); });
    await q.click('#alerts a.al-go[href="#animal-bites"]'); await settle(700);
    const pa = await q.evaluate(() => ({h:location.hash, run:!document.querySelector('#v-run').hidden, t:(document.querySelector('.run-hero h1') || {}).textContent || ''}));
    await q.goto(U + '#home'); await settle(700); await q.evaluate(() => { renderAlerts('2026-11-26'); if (!document.querySelector('#alerts').classList.contains('open')) document.querySelector('#alerts .al-more').click(); });
    await q.click('#alerts a.al-go[href="#dengue-cpg"]'); await settle(900);
    const pd = await q.evaluate(() => ({h:location.hash, t:(document.querySelector('.run-hero h1') || {}).textContent || '', want:P['dengue-cpg'].title, wantA:P['animal-bites'].title}));
    ok(pa.h === '#animal-bites' && pa.run && pa.t === pd.wantA && pd.h === '#dengue-cpg' && pd.t === pd.want, 'current alerts: the pills open the guide\'s own pages (animal bites, the dengue CPG)' + (pa.run && pd.t ? '' : ' ' + JSON.stringify([pa, pd])));

    /* The asthma CPG follows its corrected web version: SpO2 ≥94% and moderate 90 – 94%; 93 to 95% is gone */
    const as = await q.evaluate(() => { const j = JSON.stringify(P['asthma-cpg']); return {ge94:j.includes('target saturation ≥94%'), mod:j.includes('90 – 94%'), old:/93 to 95|90 – 95%/.test(j), room:j.includes('SpO2 ≥94% under room air'),
      confirm:CONFIRM.some(c => /≤95% in Algorithms 3 and 4, and the current quick reference/.test(c)) && !CONFIRM.some(c => /four oxygen targets/.test(c)) && CONFIRM.some(c => /ipratropium bromide 0\.5 mg stat in the severe box/.test(c))}; });
    ok(as.ge94 && as.mod && !as.old && as.room && as.confirm, 'asthma CPG: oxygen to a target saturation ≥94%, moderate SpO2 90 – 94% and SpO2 ≥94% under room air, with no 93 to 95% left; Still to confirm says what the quick reference prints' + (as.ge94 && !as.old && as.confirm ? '' : ' ' + JSON.stringify(as)));

    /* National Antimicrobial Guideline: links and topic names only, on the outcomes the round names */
    const nag = await q.evaluate(() => { const want = [['cellulitis', 'opd', 2], ['pneumonia', 'opd', 2], ['animal-bites', 'wound', 1], ['animal-bites', 'abc', 1], ['renal-colic', 'uro', 1], ['infection-alerts', 'lepto', 1], ['diabetic-foot-cpg', 'mild', 1], ['diabetic-foot-cpg', 'mod', 1], ['diabetic-foot-cpg', 'sevx', 1]];
      const isNag = l => /^https:\/\/sites\.google\.com\/moh\.gov\.my\/nag\//.test(l[0]), all = [];
      const each = want.map(([id, k, n]) => { const nd = P[id].nodes[k], L = (nd.links || []).filter(isNag); all.push(...L); return L.length === n && !(nd.items || []).some(i => /National Antimicrobial|\bNAG\b/.test(i)); });
      const elsewhere = Object.values(P).reduce((c, e) => c + Object.values(e.nodes).reduce((d, nd) => d + (nd.links || []).filter(isNag).length, 0), 0);
      return {each:each.every(Boolean), n:all.length, elsewhere, labels:all.every(l => /^(National Antimicrobial Guideline|NAG)\b/.test(l[1]) && !/\d\s*(mg|g|ml|mcg)\b/i.test(l[1])),
        gastro:!(P.gastroenteritis.nodes.opd.links || []).some(isNag), confirm:CONFIRM.some(c => /National Antimicrobial Guideline's online updates/.test(c) && /melioidosis/.test(c))}; });
    ok(nag.each && nag.n === 11 && nag.elsewhere === 11 && nag.labels && nag.gastro && nag.confirm, 'NAG: eleven links on cellulitis, pneumonia, animal bites, urosepsis, leptospirosis and the diabetic foot, labelled by topic only, with no dose and no NAG text in any step, and the check against them under Still to confirm' + (nag.n === 11 && nag.each ? '' : ' ' + JSON.stringify(nag)));
    await q.goto(U + '#cellulitis--opd'); await settle(800);
    ok(await q.evaluate(() => { const a = [...document.querySelectorAll('#cur a.pill.ext')].filter(x => /sites\.google\.com\/moh\.gov\.my\/nag\//.test(x.href)); return a.length === 2 && a.every(x => x.target === '_blank' && /noopener/.test(x.rel)); }), 'NAG: the cellulitis outcome shows its two links, opening in a new tab');
    await q.goto(U + '#renal-colic--uro'); await settle(800);
    await q.screenshot({path:out + '/p-renal-uro-nag.png'});
    await q.goto(U + '#antibiotics'); await settle(900);
    ok(await q.evaluate(() => { const n = document.querySelector('#absrc .lk-note'), a = n && n.querySelector('a[href="https://sites.google.com/moh.gov.my/nag/information/whats-new"]'); return !!a && a.target === '_blank' && /predate the National Antimicrobial Guideline's online updates of Dec 2025 and Jan 2026/.test(n.textContent); }), 'antimicrobial guides: the source note says they predate the NAG updates of Dec 2025 and Jan 2026, with its What\'s new page');

    /* Nipah: the national guideline of January 2026 in the guide's own words, with its sections and pages */
    const nv = await q.evaluate(() => { const n = P['infection-alerts'].nodes.nipah, it = n.items.join('\n');
      return {n:n.items.length, lines:[/above 37\.5 °C/, /SpO2 below 95%/, /Health Alert Card/, /probable case/, /within 24 hours/, /close contacts/].every(r => r.test(it)), cites:(it.match(/\(national guideline, Jan 2026, /g) || []).length,
        gap:/circular KPK Bil\. 16\/2026 \(KKM\.600-29\/4\/44 Jld\.2\(4\), 6 May 2026\)/.test(n.gap), link:(n.links || []).some(l => /moh\.gov\.my\/en\/publications-and-reports\/circulars\/.+bil-16-2026/.test(l[0])),
        hosp:!/Sungai Buloh|Tunku Azizah/.test(it), refs:P['infection-alerts'].refs.some(r => /Bil\. 16\/2026/.test(r)), confirm:CONFIRM.some(c => /Bil\. 16\/2026/.test(c) && /Sungai Buloh/.test(c) && /Third Edition/.test(c))}; });
    await q.goto(U + '#infection-alerts--nipah'); await settle(800);
    const nvs = await q.evaluate(() => ({txt:document.querySelector('#cur').innerText, wide:document.documentElement.scrollWidth <= innerWidth}));
    await q.screenshot({path:out + '/p-nipah-national.png', fullPage:true});
    ok(nv.n === 15 && nv.lines && nv.cites === 6 && nv.gap && nv.link && nv.hosp && nv.refs && nv.confirm && /national guideline, Jan 2026, 4\.2, p11/.test(nvs.txt) && nvs.wide,
      'Nipah: six lines from the national guideline of January 2026 in the guide\'s own words with section and page, its circular cited by number and date, no hospital list copied, and the differences and mpox under Still to confirm' + (nv.n === 15 && nv.cites === 6 && nv.confirm ? '' : ' ' + JSON.stringify(nv)));

    /* The abbreviation list names its circular */
    await q.goto(U + '#abbreviations'); await q.waitForFunction(() => KB.state === 'ready', null, {timeout:8000}).catch(() => {}); await settle(300);
    const kb = await q.evaluate(() => { const n = document.querySelector('#kbsrc .lk-note'), a = n && n.querySelector('a[href*="surat-pekeliling-kpk-bil-4-2024"]'); return {t:n ? n.textContent : '', a:!!a && a.target === '_blank', c:CONFIRM.some(c => /circular KPK Bil\.4\/2024 \(19 Apr 2024\)/.test(c)) && !CONFIRM.some(c => /Bil\.1\/2024 prints no issuer/.test(c))}; });
    ok(/Surat Pekeliling Ketua Pengarah Kesihatan Bil\.4\/2024/.test(kb.t) && /19 April 2024/.test(kb.t) && !/prints no issuer/.test(kb.t) && kb.a && kb.c, 'abbreviations: the source line names circular Bil.4/2024 of 19 April 2024 with its link, and Still to confirm keeps only the do-not-use list');

    /* What's new: one round naming every entry whose content changed */
    ok(await q.evaluate(() => APP_VER === 'Version 8, updated 26 Nov 2026' && /^Current alerts/.test(V8[0][0]) && ['#asthma-cpg', '#infection-alerts', '#cellulitis', '#pneumonia', '#animal-bites', '#renal-colic', '#diabetic-foot-cpg'].every(h => V8[0][3].includes(h)) && V8[0][3].every(h => !!P[h.slice(1)])), 'What\'s new: the 26 Nov 2026 round names the seven entries whose content changed');
    await ctx.close();

    /* On a wide screen the card shows each source's full name, the pill's full label and every line in full */
    const ctxW = await b.newContext({viewport:{width:1280, height:900}, serviceWorkers:'block', reducedMotion:'reduce'}), w = await ctxW.newPage();
    w.on('pageerror', e => errs.push('26 Nov wide PAGEERROR: ' + e.message));
    await w.goto(U + '#home'); await w.waitForTimeout(900); await w.evaluate(() => renderAlerts('2026-11-26'));
    const wd = await w.evaluate(() => ({s:getComputedStyle(document.querySelector('#alerts .al-s')).display, gf:getComputedStyle(document.querySelector('#alerts .al-gf')).display, more:getComputedStyle(document.querySelector('#alerts .al-more')).display, clamp:getComputedStyle(document.querySelector('#alerts .al-t')).webkitLineClamp, cols:new Set([...document.querySelectorAll('#alerts .al-r')].map(r => Math.round(r.getBoundingClientRect().top))).size === 1 ? document.querySelectorAll('#alerts .al-r').length : 0, h:Math.round(document.querySelector('#alerts').getBoundingClientRect().height)}));
    await w.screenshot({path:out + '/d-home-alerts.png'});
    ok(wd.s !== 'none' && wd.gf !== 'none' && wd.more === 'none' && (wd.clamp === 'none' || wd.clamp === '') && wd.cols === 3 && wd.h < 360, 'current alerts on a wide screen: side by side, with the source\'s full name, the pill\'s full label and each line in full' + (wd.cols === 3 && wd.h < 360 ? '' : ' ' + JSON.stringify(wd)));
    await ctxW.close();
  }
  /* ---------- 26 Nov 2026, part 2: header bands on five pearl cards, and the journey's narration in two files ---------- */
  {
    const PB = {viewport:{width:390, height:844}, isMobile:true, hasTouch:true, deviceScaleFactor:1, serviceWorkers:'block'};
    const ctx = await b.newContext({...PB}), q = await ctx.newPage(), got = [];
    q.on('pageerror', e => errs.push('26 Nov b PAGEERROR: ' + e.message));
    q.on('console', m => { if (m.type() === 'error') errs.push('26 Nov b: ' + m.text()); });
    q.on('request', x => { if (/\/audio\/stops?/.test(x.url())) got.push(x.url().split('/').pop()); });
    const settle = async (ms = 400) => q.waitForTimeout(ms);

    /* Bands: the five keys, on their cards, decorative, through the tile machinery */
    await q.goto(U + '#home'); await settle(1500); await q.evaluate(() => renderAlerts('2026-11-26')); await settle(300);
    const bd = await q.evaluate(() => {
      const want = {'#alerts':'alerts', '#tl-now':'opennow', '#tl-keyn':'keynums', '#tl-rules':'rulesband', '#tl-new':'newsband'};
      return {keys:Object.entries(want).every(([s, k]) => { const t = document.querySelector(s + ' > .tm.band'); return !!t && t.dataset.tm === k && t.getAttribute('aria-hidden') === 'true' && !t.querySelector('a,button,[tabindex]') && TILE_KEYS.has(k); }),
        heads:Object.keys(want).every(s => { const h = document.querySelector(s + ' > .tile-h h2, ' + s + ' > .al-h h2'), t = document.querySelector(s + ' > .tm.band'); if (!h || !t) return false; const a = h.getBoundingClientRect(), r = t.getBoundingClientRect(); return a.bottom <= r.bottom + 2 && getComputedStyle(h).color === 'rgb(255, 255, 255)'; }),
        h:Math.round(document.querySelector('#alerts > .tm.band').getBoundingClientRect().height), lean:!document.querySelector('#tl-keyn.lit'),
        files:['alerts', 'opennow', 'keynums', 'newsband', 'rulesband'].length, wide:document.documentElement.scrollWidth <= innerWidth, max:document.querySelectorAll('.tm[data-play]').length <= TILE_MAX,
        alertsPlay:document.querySelector('#alerts > .tm.band').hasAttribute('data-play')}; });
    ok(bd.keys && bd.heads && bd.h >= 64 && bd.h <= 80 && bd.wide && bd.max && bd.alertsPlay && ['alerts', 'opennow', 'keynums', 'newsband', 'rulesband'].every(k => fs.existsSync(path.join(root, 'tiles', k + '.mp4')) && fs.existsSync(path.join(root, 'tiles', k + '.webp'))),
      'bands: the five Flow loops sit as 64 to 80 px bands on Now, the alerts, More numbers, Three rules to keep and New in version 8, decorative, their headings in white over the band, through the tile machinery and its cap' + (bd.keys && bd.heads ? '' : ' ' + JSON.stringify(bd)));
    /* Now redraws every 30 s and keeps its band (the same node, so a playing loop never restarts); the alerts card with nothing in date hides band and all */
    const kept1 = await q.evaluate(() => { const a = document.querySelector('#tl-now > .tm.band'); renderNow(); renderNow(); return a === document.querySelector('#tl-now > .tm.band') && document.querySelectorAll('#tl-now > .tm.band').length === 1 && !!document.querySelector('#tl-now .nowsum'); });
    const gone = await q.evaluate(() => { renderAlerts('2027-04-01'); const el = document.querySelector('#alerts'), r = el.hidden && !el.querySelector('.tm'); renderAlerts('2026-11-26'); return r && !el.hidden && el.querySelectorAll(':scope > .tm.band').length === 1; });
    ok(kept1 && gone, 'bands: Now keeps its band across its redraws, and the alerts card with nothing in date hides, band and all');
    /* Moving tiles off: the bands keep their stills and no loop plays */
    await q.evaluate(() => { prefs.tiles = 'off'; tileClips(); }); await settle(300);
    ok(await q.evaluate(() => !document.querySelector('.tm.band[data-play]') && [...document.querySelectorAll('.tm.band')].every(t => !!t.querySelector('img'))), 'bands: with Moving tiles off they show their stills and play nothing');
    await q.evaluate(() => { prefs.tiles = 'on'; tileClips(); });
    await q.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark')); await settle(300);
    ok(await q.evaluate(() => getComputedStyle(document.querySelector('#tl-keyn > .tile-h h2')).color === 'rgb(255, 255, 255)' && document.documentElement.scrollWidth <= innerWidth), 'bands at night: the headings stay white over the band, nothing sideways');
    await q.evaluate(() => document.documentElement.removeAttribute('data-theme'));

    /* The journey: two files now, the old ten gone, nothing fetched before a tap; a stop plays from its offset and stops at its end, captions in step */
    ok(['stops-en.mp3', 'stops-ms.mp3'].every(f => fs.existsSync(path.join(root, 'audio', f))) && [1, 2, 3, 4, 5].every(i => !fs.existsSync(path.join(root, 'audio', `stop${i}.mp3`)) && !fs.existsSync(path.join(root, 'audio', `stop${i}-ms.mp3`)))
      && !fs.readFileSync(path.join(__dirname, '..', 'green-zone-pathways.html'), 'utf8').match(/audio\/stop\d/), 'journey: its narration is two files, stops-en.mp3 and stops-ms.mp3; the ten stop files are gone, and nothing names them');
    await q.goto(U + '#journey-2'); await settle(900);
    ok(!got.length, 'journey: no narration is fetched before Listen');
    await q.evaluate(() => { voice.defaultPlaybackRate = 2; voice.playbackRate = 2; voice.muted = true; });
    await q.click('#jlisten');
    await q.waitForFunction(() => !voice.paused && voice.currentTime > 0, null, {timeout:8000}).catch(() => {});
    const j1 = await q.evaluate(() => { const g = JSTOPS_AUDIO.en.s[1]; return {i:voice.dataset.i, blob:/^blob:/.test(voice.src), t:voice.currentTime, at:g.at, end:g.at + g.dur, cap:document.querySelector('#jcap').textContent.trim(), first:(JOURNEY[1].say.match(/[^.?!]+[.?!]+/g) || [JOURNEY[1].say])[0].trim()}; });
    ok(j1.i === '1' && j1.blob && j1.t >= j1.at - .05 && j1.t < j1.end && got.length === 1 && got[0] === 'stops-en.mp3', 'journey: Listen fetches the English file once and plays stop 2 from its own offset, from a blob' + (j1.t >= j1.at - .05 ? '' : ' ' + JSON.stringify(j1)));
    /* captions follow the segment's own clock: at about two thirds in, the caption is the sentence that time points to */
    const parts = await q.evaluate(() => JOURNEY[1].say.match(/[^.?!]+[.?!]+/g) || [JOURNEY[1].say]);
    await q.waitForFunction(() => voice.currentTime - JSTOPS_AUDIO.en.s[1].at > JSTOPS_AUDIO.en.s[1].dur * .65 || voice.paused, null, {timeout:8000}).catch(() => {});
    const mid = await q.evaluate(p => { const g = JSTOPS_AUDIO.en.s[1], el = voice.currentTime - g.at, total = JOURNEY[1].say.length, at = el / g.dur * total; let acc = 0, k = 0; for (; k < p.length - 1; k++){ acc += p[k].length; if (at < acc) break; } return {want:p[k].trim(), cap:document.querySelector('#jcap').textContent.trim(), paused:voice.paused}; }, parts);
    ok(mid.paused || mid.cap === mid.want || parts.length === 1, 'journey: the captions are timed from the stop\'s own start' + (mid.cap === mid.want ? '' : ' ' + JSON.stringify(mid)));
    await q.waitForFunction(() => voice.paused, null, {timeout:9000}).catch(() => {});
    const j2 = await q.evaluate(() => { const g = JSTOPS_AUDIO.en.s[1]; return {paused:voice.paused, t:voice.currentTime, end:g.at + g.dur, next:JSTOPS_AUDIO.en.s[2].at, cap:document.querySelector('#jcap').hidden, btn:document.querySelector('#jlisten').getAttribute('aria-pressed')}; });
    ok(j2.paused && j2.t >= j2.end - .1 && j2.t < j2.next && j2.cap && j2.btn === 'false', 'journey: the stop ends at its own end, before the next stop begins, and its captions close' + (j2.paused && j2.t < j2.next ? '' : ' ' + JSON.stringify(j2)));
    /* The second stop of the same language reuses the blob: nothing fetched again */
    await q.click('#jnext'); await settle(500); await q.click('#jlisten');
    await q.waitForFunction(() => !voice.paused && voice.dataset.i === '2', null, {timeout:6000}).catch(() => {});
    ok(await q.evaluate(() => voice.currentTime >= JSTOPS_AUDIO.en.s[2].at - .05) && got.length === 1, 'journey: the next stop seeks within the same file, with nothing fetched again');
    await q.evaluate(() => stopJourney());
    await q.screenshot({path:out + '/p-journey-joined.png'});
    /* A host that refuses blob: media (the claude.ai frame is not proven to allow one): the Malay file plays from its own address instead */
    await q.evaluate(() => { const mk = URL.createObjectURL.bind(URL); URL.createObjectURL = () => mk(new Blob(['not audio'], {type:'audio/mpeg'})); jLang = 'ms'; listen(2); });
    await q.waitForFunction(() => !voice.paused && /audio\/stops-ms\.mp3$/.test(voice.src), null, {timeout:8000}).catch(() => {});
    ok(await q.evaluate(() => !voice.paused && /audio\/stops-ms\.mp3$/.test(voice.src) && JDIRECT.ms === true && voice.dataset.i === '2' && voice.dataset.lang === 'ms'), 'journey: when blob: media is refused, the stop plays from the joined file\'s own address');
    await q.evaluate(() => { stopJourney(); jLang = 'en'; });
    await ctx.close();
  }
  console.log('errors:', errs.length ? '\n  ' + errs.join('\n  ') : 'none');
  console.log(fails ? fails + ' FAILED' : 'all checks passed');
  console.log('screenshots: ' + out);
  process.exitCode = (fails || errs.length) ? 1 : 0;
  await b.close(); srv.close();
})().catch(e => { console.error(e); process.exit(1); });
