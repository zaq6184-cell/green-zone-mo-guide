/* Playwright check for the Green Zone MO Guide, version 7.
   Serves the offline copy and walks every view on desktop (1366 px), phone (390 px) and tablet (900 px),
   in light and dark, with reduced motion on the tablet. It fails on any console or page error, any
   sideways scroll, and any check below that does not hold. Screenshots go to the shots folder.

   It is written for the version 7 markup (ids such as #libgrid, #cur, #ptab, #gq). Change it with the shell.
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
const VIEWS = ['home','pathways','rules','tools','numbers','journey','tour','quiz','new','poster','about'];
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
  await p.screenshot({path:out + '/d-home.png'});
  await p.screenshot({path:out + '/d-home-full.png', fullPage:true});
  for (const v of VIEWS.slice(1)){
    await go(p, '#' + v);
    const vis = await visible(p), expect = ['journey','tour','quiz'].includes(v) ? 'learn' : v;
    ok(vis === expect, `#${v} shows ${expect} (got ${vis})`);
    ok(await hscroll(p) <= 0, `#${v} no sideways scroll`);
    await p.screenshot({path:out + `/d-${v}.png`, fullPage:true});
  }
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
  await p.screenshot({path:out + '/d-run-start.png'});
  await p.keyboard.press('2'); await p.waitForTimeout(300);
  await p.keyboard.press('1'); await p.waitForTimeout(300);
  console.log('     rail ->', await p.evaluate(() => [...document.querySelectorAll('.rp li')].map(l => l.textContent.trim().slice(0, 50)).join(' / ')));
  await p.screenshot({path:out + '/d-run-steps.png', fullPage:true});
  const before = await p.evaluate(() => document.querySelectorAll('.rp li.done').length);
  await p.keyboard.press('Backspace'); await p.waitForTimeout(250);
  ok(await p.evaluate(() => document.querySelectorAll('.rp li.done').length) === before - 1, `Backspace steps back one answer (${before} to ${before - 1})`);
  // Deep links to the version 7 notes
  for (const [h, t] of [['#gz-rules--ivab','IV antibiotics when no bed is free'],['#gz-rules--oneway','One-way flow'],['#gz-rules--down','Down-triage is for the MO only'],['#referral-rules--iprok','Suitable for transfer to IPR'],['#gz-rules--kk','Redirect to a Klinik Kesihatan or private GP']]){
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
  for (let i = 0; i < 6; i++) await p.check(`[data-dc="a${i}"]`);
  ok(await p.evaluate(() => document.querySelector('#verdict').className) === 'verdict ok', 'all checks give ready to discharge');
  await p.check('[data-dc="s3"]');
  ok(await p.evaluate(() => document.querySelector('#verdict').className) === 'verdict stop', 'a stop item blocks discharge');
  await go(p, '#calc-kids', 400);
  await p.fill('#cf-wt', '15'); await p.waitForTimeout(150);
  console.log('     kids 15 kg ->', await p.evaluate(() => [...document.querySelectorAll('#couts .out b')].map(b => b.textContent).join(' | ')));
  await p.screenshot({path:out + '/d-tools-kids.png', fullPage:true});
  // Quiz
  await go(p, '#quiz');
  await p.click('#quizbox .q-opts button'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => !!document.querySelector('#quizbox .q-why')), 'quiz answer shows the explanation');
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
  await p.keyboard.press('Escape'); await p.waitForTimeout(150);
  ok(await p.evaluate(() => document.querySelector('#settings').hidden), 'Escape closes settings');
  await p.screenshot({path:out + '/d-home-dark.png'});
  await go(p, '#asthma', 400);
  await p.screenshot({path:out + '/d-run-dark.png', fullPage:true});
  await go(p, '#pathways', 400);
  await p.screenshot({path:out + '/d-pathways-dark.png'});
  await go(p, '#tour', 400);
  await p.screenshot({path:out + '/d-tour-dark.png'});
  await go(p, '#numbers', 400);
  await p.screenshot({path:out + '/d-numbers-dark.png'});
  await p.evaluate(() => { localStorage.setItem('gz-theme', '"auto"'); });

  /* ---------- Phone, light ---------- */
  const phone = {viewport:{width:390, height:844}, isMobile:true, hasTouch:true, deviceScaleFactor:1};
  p = await mk({...phone, colorScheme:'light'}, 'phone');
  await p.goto(U, {waitUntil:'networkidle'}); await p.waitForTimeout(800);
  ok(await hscroll(p) <= 0, 'phone home has no sideways scroll');
  ok(await p.evaluate(() => getComputedStyle(document.querySelector('#tabbar')).display) !== 'none', 'phone shows the tab bar');
  await p.screenshot({path:out + '/p-home.png'});
  await p.screenshot({path:out + '/p-home-full.png', fullPage:true});
  for (const v of VIEWS.slice(1)){
    await go(p, '#' + v);
    ok(await hscroll(p) <= 0, `phone #${v} no sideways scroll`);
    await p.screenshot({path:out + `/p-${v}.png`, fullPage:true});
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
  await p.screenshot({path:out + '/p-run.png'});
  await p.tap('#cur button.opt'); await p.waitForTimeout(350);
  await p.tap('#cur button.opt'); await p.waitForTimeout(350);
  ok(await p.evaluate(() => getComputedStyle(document.querySelector('.trailx')).display) !== 'none', 'phone shows answer chips');
  ok(await hscroll(p) <= 0, 'phone runner no sideways scroll');
  await p.screenshot({path:out + '/p-run-steps.png'});
  await p.screenshot({path:out + '/p-run-full.png', fullPage:true});
  await go(p, '#gz-rules--ivab', 400);
  await p.screenshot({path:out + '/p-run-ivab.png', fullPage:true});
  await go(p, '#calc-dengue', 400);
  await p.screenshot({path:out + '/p-calc.png'});

  /* ---------- Phone, dark ---------- */
  p = await mk({...phone, colorScheme:'dark'}, 'phone-dark');
  await p.goto(U, {waitUntil:'networkidle'}); await p.waitForTimeout(800);
  await p.screenshot({path:out + '/pd-home.png'});
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

  console.log('errors:', errs.length ? '\n  ' + errs.join('\n  ') : 'none');
  console.log(fails ? fails + ' FAILED' : 'all checks passed');
  console.log('screenshots: ' + out);
  process.exitCode = (fails || errs.length) ? 1 : 0;
  await b.close(); srv.close();
})().catch(e => { console.error(e); process.exit(1); });
