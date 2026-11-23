#!/usr/bin/env node
/* How soon a first visit can use the guide on a weak signal (23 Nov 2026). It serves ../app the way GitHub Pages does (gzip
   and ETags), opens the guide in a phone-sized Chromium with the CPU slowed 4 times and the network slowed to 1.6 Mbps with
   150 ms of latency (DevTools' slow 4G), with no worker and an empty cache, and reports:
     paint     the first contentful paint;
     ready     when the guide answers a tap (its engine has run: curView is set);
     whole     when the rest of the page has arrived and run (MORE, gzMore in engine.js; the same as ready for a page in one part);
     load      the load event.
   Usage: node firstopen.js [page, default ../app/index.html] [runs, default 3] [port, default 8797]
   Pass another build's index.html to compare: it is served in place of the page, with the same pictures. */
const http = require('http'), fs = require('fs'), path = require('path'), zlib = require('zlib'), crypto = require('crypto');
const { chromium } = require('playwright');
const root = path.join(__dirname, '..', 'app');
const pagePath = path.resolve(process.argv[2] || path.join(root, 'index.html')), runs = Number(process.argv[3]) || 3, port = Number(process.argv[4]) || 8797;
const TYPES = {'.html':'text/html; charset=utf-8', '.webp':'image/webp', '.avif':'image/avif', '.png':'image/png', '.jpg':'image/jpeg', '.mp4':'video/mp4', '.mp3':'audio/mpeg', '.js':'text/javascript', '.webmanifest':'application/manifest+json', '.json':'application/json', '.txt':'text/plain'};
const srv = http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split('?')[0]); if (rel === '/') rel = '/index.html';
  const file = rel === '/index.html' ? pagePath : path.join(root, path.normalize(rel));
  if (rel !== '/index.html' && !file.startsWith(root)) { res.writeHead(404); res.end(); return; }
  if (rel === '/sw.js') { res.writeHead(404); res.end(); return; } /* a first visit: no worker yet */
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); res.end(); return; }
  const buf = fs.readFileSync(file), type = TYPES[path.extname(file)] || 'application/octet-stream';
  const h = {'Content-Type':type, 'ETag':'"' + crypto.createHash('sha1').update(buf).digest('hex').slice(0, 16) + '"', 'Cache-Control':'max-age=600'};
  if (/gzip/.test(req.headers['accept-encoding'] || '') && /html|javascript|json|text|manifest/.test(type)) { const z = zlib.gzipSync(buf); h['Content-Encoding'] = 'gzip'; h['Content-Length'] = z.length; res.writeHead(200, h); res.end(z); return; }
  h['Content-Length'] = buf.length; res.writeHead(200, h); res.end(buf);
}).listen(port);
const med = a => a.slice().sort((x, y) => x - y)[a.length >> 1];
(async () => {
  const b = await chromium.launch(), out = [];
  for (let i = 0; i < runs; i++) {
    const ctx = await b.newContext({viewport:{width:390, height:844}, deviceScaleFactor:3, isMobile:true, hasTouch:true, serviceWorkers:'block'});
    await ctx.addInitScript(() => {
      const t = setInterval(() => {
        try { if (!window.__ready && typeof curView !== 'undefined' && curView) window.__ready = performance.now(); } catch (e) {}
        try { if (!window.__whole && (typeof MORE === 'undefined' ? window.__ready : MORE)) window.__whole = performance.now(); } catch (e) {}
        if (window.__ready && window.__whole) clearInterval(t);
      }, 20);
    });
    const p = await ctx.newPage(), c = await ctx.newCDPSession(p), reqs = [];
    if (process.env.LIST) p.on('requestfinished', async q => { const s = await q.sizes().catch(() => ({})), t = q.timing(); reqs.push([Math.round(t.startTime - (reqs.t0 || (reqs.t0 = t.startTime))), Math.round(t.responseEnd), (s.responseBodySize || 0) + (s.responseHeadersSize || 0), q.url().replace(/^https?:\/\/[^/]+/, '')]); });
    await c.send('Emulation.setCPUThrottlingRate', {rate:4});
    await c.send('Network.enable');
    if (!process.env.FAST) await c.send('Network.emulateNetworkConditions', {offline:false, latency:150, downloadThroughput:1.6 * 1024 * 1024 / 8, uploadThroughput:750 * 1024 / 8});
    await p.goto(`http://localhost:${port}/`, {waitUntil:'load', timeout:120000});
    await p.waitForFunction(() => window.__ready && window.__whole, null, {timeout:60000});
    const r = await p.evaluate(() => { const f = performance.getEntriesByName('first-contentful-paint')[0], n = performance.getEntriesByType('navigation')[0];
      return {paint:f ? Math.round(f.startTime) : null, ready:Math.round(window.__ready), whole:Math.round(window.__whole), load:Math.round(n.loadEventEnd)}; });
    if (process.env.LIST) reqs.sort((x, y) => x[0] - y[0]).forEach(q => console.log('   ', q.join('  ')));
    out.push(r); console.log(`run ${i + 1}: paint ${r.paint} ms, ready ${r.ready} ms, whole ${r.whole} ms, load ${r.load} ms`);
    await ctx.close();
  }
  console.log(`median: paint ${med(out.map(r => r.paint))} ms, ready ${med(out.map(r => r.ready))} ms, whole ${med(out.map(r => r.whole))} ms, load ${med(out.map(r => r.load))} ms`);
  await b.close(); srv.close(); process.exit(0);
})().catch(e => { console.log(e.message); process.exit(1); });
