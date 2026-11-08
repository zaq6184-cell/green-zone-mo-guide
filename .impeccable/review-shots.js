/* Dev only: capture the finish-review screenshots into .impeccable/review/ (desktop 1440, phone 390), motion settled. */
const { chromium } = require('C:/Users/user/Green Zone/src/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..', 'app'), out = path.join(__dirname, 'review');
fs.mkdirSync(out, {recursive:true});
const types = {'.html':'text/html','.webp':'image/webp','.mp4':'video/mp4','.mp3':'audio/mpeg','.png':'image/png'};
const srv = http.createServer((q, r) => { const f = path.join(root, decodeURIComponent(q.url.split('?')[0]).replace(/^\/$/, '/index.html')); fs.readFile(f, (e, d) => { if (e){ r.writeHead(404); r.end(); return; } r.writeHead(200, {'content-type':types[path.extname(f)] || 'application/octet-stream'}); r.end(d); }); }).listen(8792);
const U = 'http://localhost:8792/';
(async () => {
  const b = await chromium.launch();
  const shot = async (opts, list) => {
    const ctx = await b.newContext({...opts, reducedMotion:'reduce'}); const p = await ctx.newPage();
    await p.goto(U, {waitUntil:'networkidle'}); await p.waitForTimeout(900);
    for (const [hash, file, full, act] of list){
      await p.evaluate(h => { location.hash = h; }, hash); await p.waitForTimeout(600);
      if (act) await act(p);
      await p.evaluate(() => document.fonts && document.fonts.ready); await p.waitForTimeout(300);
      await p.screenshot({path:path.join(out, file), fullPage:!!full});
    }
    await ctx.close();
  };
  const desk = {viewport:{width:1440, height:900}, colorScheme:'light'};
  const phone = {viewport:{width:390, height:844}, isMobile:true, hasTouch:true, deviceScaleFactor:2, colorScheme:'light'};
  await shot(desk, [
    ['#home', 'desktop.png', true],
    ['#renal-colic', 'desktop-run.png', false],
    ['#dengue--imp', 'desktop-run-mid.png', false],
    ['#abdominal-pain--home', 'desktop-outcome.png', false],
    ['#dengue', 'desktop-map.png', false, async p => { await p.click('.rail-p [data-map]'); await p.waitForTimeout(400); }],
    ['#pathways', 'desktop-library.png', true],
    ['#tools', 'desktop-tools.png', true, async p => { for (let i = 0; i < 4; i++) await p.check(`[data-dc="a${i}"]`); await p.evaluate(() => { location.hash = '#calc-dengue'; }); await p.waitForTimeout(400); await p.fill('#cf-hr', '104'); await p.fill('#cf-sbp', '112'); await p.fill('#cf-dbp', '76'); await p.evaluate(() => window.scrollTo(0, 0)); }],
    ['#numbers', 'desktop-numbers.png', true],
    ['#intro', 'desktop-intro.png', false],
    ['#journey', 'desktop-journey.png', false]
  ]);
  await shot(phone, [
    ['#home', 'mobile.png', true],
    ['#home', 'mobile-first.png', false],
    ['#dengue', 'mobile-run.png', false],
    ['#referral-rules--ortho', 'mobile-checklist.png', true],
    ['#abdominal-pain--home', 'mobile-outcome.png', false],
    ['#dengue', 'mobile-map.png', false, async p => { await p.tap('#run .run-acts [data-map]'); await p.waitForTimeout(400); }],
    ['#intro', 'mobile-intro.png', false],
    ['#numbers', 'mobile-numbers.png', false]
  ]);
  await shot({...phone, colorScheme:'dark'}, [['#home', 'mobile-dark.png', false], ['#abdominal-pain--home', 'mobile-dark-outcome.png', false]]);
  await b.close(); srv.close();
  console.log('captured into ' + out);
})().catch(e => { console.error(e); process.exit(1); });
