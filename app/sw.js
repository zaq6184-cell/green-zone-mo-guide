/* Green Zone MO Guide: the service worker of the public web app on GitHub Pages, so the guide opens on patchy hospital
   Wi-Fi and with no signal at all. build.js writes app/sw.js from this file, filling in the build's version, the page's
   id and every file it handles with its hash (the first 16 hex digits of its SHA-256). The claude.ai artifact never has
   it, and pwa.js registers it only on github.io and localhost.

   Install    The page, the manifest and the small stills (img/, tiles/, the film covers in media/ and the poster
              thumbnails) go into a cache named for this build. Every copy must match the build's hash, so a stale copy
              is never kept, and a file unchanged since an earlier build is copied from the old cache, not downloaded
              again. Only the page is essential: a still that fails now is saved when it is first shown. With Data Saver
              on, only the page and the manifest are fetched ahead.
   Activate   Deletes this guide's caches from older builds (never another site's: github.io pages share one origin) and
              any kept film, sound or poster sheet whose file has changed. Then it tells open pages which page it
              carries, so a page from an older build can offer Reload (pwa.js).
   The page   Network first, revalidated past the browser's own cache, so a phone online gets the newest guide. The
              saved copy when the network fails or has not delivered the page within 4 seconds: a hung Wi-Fi connection
              would otherwise leave the MO waiting a minute or more. The page is read in full before it is shown, so a
              connection that drops halfway falls back to the saved copy instead of a broken page.
   Stills     From the cache, else from the network (and saved, if the copy matches the build).
   Films, sounds and the full poster sheets
              Never fetched ahead. A film or sound is kept once it has played and the browser has loaded all of it, from
              that same download, so nothing is fetched twice; a poster sheet once it has been opened. Each must match
              the build. Kept files survive updates while they are unchanged, and films and sounds are served in byte
              ranges, so they seek offline.
   Fonts      The Google Fonts stylesheet and font files are kept as the page loads them, so the guide keeps its type. */
'use strict';
const VERSION = 'ef13487f2260', PAGE = 'ec0535dc22fd';
const PRE = {
  "": "949a0dfcf5f10659",
  "manifest.webmanifest": "3f4620e73fac5885",
  "img/gz-01-hero.webp": "e0db0e365820090d",
  "img/gz-02-triage.webp": "60e7adac5fc1ea89",
  "img/gz-03-consult.webp": "99a51a2b8cb5f5a9",
  "img/gz-04-treatment.webp": "90413ea83059ace0",
  "img/gz-05-cca.webp": "9987d3be02802171",
  "img/gz-06-review.webp": "b3aeba2db719bb6e",
  "media/dengue-home-ms-poster.webp": "0712fa5e3462d050",
  "media/dengue-home-ms-thumb.webp": "7a230527e76a12aa",
  "media/dengue-home-poster.webp": "b0e1f2c628ba9b08",
  "media/dengue-home-thumb.webp": "0de9b3300b92907e",
  "media/explainer-ms-night-poster.webp": "aa1eb90893e817a3",
  "media/explainer-ms-poster.webp": "4f4489cb95d7b28f",
  "media/explainer-night-poster.webp": "dcfde690cdf7217e",
  "media/explainer-poster.webp": "fabae26107853e25",
  "poster/sheet1-night-thumb.webp": "23b3ba6f4695a1bd",
  "poster/sheet1-thumb.webp": "59336fd601178c19",
  "poster/sheet2-night-thumb.webp": "6e38f14de51c87a4",
  "poster/sheet2-thumb.webp": "4afa00737d753989",
  "tiles/abdo.webp": "0500ed50b9c93d10",
  "tiles/acscpg.webp": "c1996e6234f05a8a",
  "tiles/all.webp": "944b2f9765179a04",
  "tiles/asthcpg.webp": "ba2c6ebbc561ab00",
  "tiles/brain.webp": "5e04e8087edb752a",
  "tiles/breath.webp": "4fc70519902f1db5",
  "tiles/calc.webp": "a65974c33af3c91a",
  "tiles/calm.webp": "71897ab971ae59fa",
  "tiles/cardio.webp": "3f0360b90ab895e3",
  "tiles/ckdcpg.webp": "3bc68bda2c1a15c1",
  "tiles/codeblue.webp": "2c6c9fd9db61fd86",
  "tiles/codestroke.webp": "98b14fb6bb8781a3",
  "tiles/comms.webp": "af32bb7456bad1ae",
  "tiles/copdcpg.webp": "b01d89c09c8ca41c",
  "tiles/dc.webp": "3556cfe56537f675",
  "tiles/dcpg.webp": "ae2b6b9197d440d2",
  "tiles/dengue.webp": "f387b9a8760b6fea",
  "tiles/doses.webp": "59d96908b62074a5",
  "tiles/fbcpg.webp": "490eddbff8f686de",
  "tiles/flow.webp": "d7cc3a055d9ba7a7",
  "tiles/footcpg.webp": "0b7c4db64e0fce37",
  "tiles/goutcpg.webp": "7d65fcd3865c79df",
  "tiles/head.webp": "cc3ef57a6b5dba3a",
  "tiles/headcpg.webp": "155c9f7de59dea7e",
  "tiles/heart.webp": "98c7307aed9a9d93",
  "tiles/hipcpg.webp": "afdbe584183d5d64",
  "tiles/infect.webp": "ca8d65935a742eae",
  "tiles/injury.webp": "ed3720a648ca93e9",
  "tiles/interp.webp": "b9f65712358c23f8",
  "tiles/intro.webp": "b28136711f5ac9f1",
  "tiles/kids.webp": "31fa4395bfc8716b",
  "tiles/links.webp": "53203875758f3f9e",
  "tiles/meta.webp": "1215c5ab140b0d72",
  "tiles/paincpg.webp": "d4665b5cad2b6396",
  "tiles/paths.webp": "1271dc88458c23eb",
  "tiles/prot.webp": "031ac0f96762bd53",
  "tiles/rabies.webp": "82d5e094bf4825f2",
  "tiles/rules.webp": "f6cdfb3f9cded6e7",
  "tiles/scores.webp": "88c54116569f7e61",
  "tiles/sinuscpg.webp": "5e5c3b11e9837028",
  "tiles/snakecpg.webp": "233c9a6c490480fe",
  "tiles/t2dmcpg.webp": "8a62f2923a2680ba",
  "tiles/throatcpg.webp": "c77ed1c3a693d447",
  "tiles/tip.webp": "f66ac75367591572",
  "tiles/toothcpg.webp": "c8205f70cec67503",
  "tiles/tox.webp": "2b262a85b15fbfbc",
  "tiles/vtecpg.webp": "9bf4a719eafc769c"
};   /* path: hash, saved at install ('' is the page) */
const KEEP = {
  "audio/adv-abdo-en.mp3": "ffa6d99240ec63c0",
  "audio/adv-asthma-en.mp3": "664d0352f9edb4e5",
  "audio/adv-dengue-en.mp3": "8f3c758376cfdca7",
  "audio/adv-gastro-en.mp3": "03393283cc4c1238",
  "audio/adv-hypo-en.mp3": "dfa5d52622c2012a",
  "audio/adv-renal-en.mp3": "f650b0abc8391f1b",
  "audio/adv-tbi-en.mp3": "a9667d711fc48c86",
  "audio/leaf-cancerpain-en.mp3": "b1f30b164a4bbf68",
  "audio/leaf-cancerpain-ms.mp3": "acdaed85674b34a2",
  "audio/leaf-dengue-en.mp3": "ef53faf10fb55af4",
  "audio/leaf-dengue-ms.mp3": "ce22fd53e69123f0",
  "audio/stop1.mp3": "244163fca2adc1db",
  "audio/stop2.mp3": "8985d56fa70078ce",
  "audio/stop3.mp3": "6b27c7745079c118",
  "audio/stop4.mp3": "02591598a9b9f28c",
  "audio/stop5.mp3": "3acb1e2e3d9e4fcd",
  "clips/hero-loop.mp4": "4dd1c6472d43b485",
  "clips/stop1-triage.mp4": "1bf5e543508672a9",
  "clips/stop2-consult.mp4": "8ec63c933dc6aa4a",
  "clips/stop3-treatment.mp4": "e74e31120027b4c1",
  "clips/stop4-cca.mp4": "ead39a500be76f5d",
  "clips/stop5-review.mp4": "2e63b40e7809dca0",
  "media/dengue-home-720.mp4": "7286a1edf2fc306c",
  "media/dengue-home-ms-720.mp4": "f7651a7db228ff26",
  "media/green-zone-explainer-720p.mp4": "cc22f7472739a2cd",
  "media/green-zone-explainer-ms-720p.mp4": "3f36b02ec3b39bf6",
  "media/green-zone-explainer-ms-night-720p.mp4": "901cab00ada16b65",
  "media/green-zone-explainer-night-720p.mp4": "fec209ebe7660cb3",
  "poster/sheet1-night.webp": "54093a7c495c04a8",
  "poster/sheet1.webp": "3ebb8ed9ca6f1621",
  "poster/sheet2-night.webp": "9990eccb9da88fd2",
  "poster/sheet2.webp": "34bd3aeeac76da7a",
  "tiles/abdo.mp4": "1a41480c60e56f8e",
  "tiles/acscpg.mp4": "2c1e74b12b8fec49",
  "tiles/all.mp4": "1cb74ce37fe849ef",
  "tiles/asthcpg.mp4": "0a01f608ec67c1a4",
  "tiles/brain.mp4": "37969fa6d84670fa",
  "tiles/breath.mp4": "4a85777d7b3d8aa1",
  "tiles/calc.mp4": "fd93b7253b4c646d",
  "tiles/calm.mp4": "3cc06c19278e291c",
  "tiles/cardio.mp4": "8b57014eda5afe21",
  "tiles/ckdcpg.mp4": "14420338c6dd6317",
  "tiles/codeblue.mp4": "5c26838a7c54846b",
  "tiles/codestroke.mp4": "c669c76fa577a528",
  "tiles/comms.mp4": "654f4b5c7519b646",
  "tiles/copdcpg.mp4": "775a490eee07c057",
  "tiles/dc.mp4": "59412911b4488323",
  "tiles/dcpg.mp4": "34e84b4920e7e166",
  "tiles/dengue.mp4": "d951f6aef8cec099",
  "tiles/doses.mp4": "17d76ed842362da6",
  "tiles/fbcpg.mp4": "1b3e44f90abcfec0",
  "tiles/flow.mp4": "e14a2d738b2a5137",
  "tiles/footcpg.mp4": "d06d6506de136b35",
  "tiles/goutcpg.mp4": "c953229945392a80",
  "tiles/head.mp4": "3b618f38f1c9a32e",
  "tiles/headcpg.mp4": "bfab024d2bc4f962",
  "tiles/heart.mp4": "72c0743cbfb62cbb",
  "tiles/hipcpg.mp4": "1e9eb5f68ae04e2f",
  "tiles/infect.mp4": "edc82836cb810cb1",
  "tiles/injury.mp4": "01eeb74b01316809",
  "tiles/interp.mp4": "3087dcf69770ca2e",
  "tiles/intro.mp4": "1628518b3525a86d",
  "tiles/kids.mp4": "e4a3a984b7631c31",
  "tiles/links.mp4": "ac361a3e84b247fe",
  "tiles/meta.mp4": "61ba8d4d4432c339",
  "tiles/paincpg.mp4": "79f6ad1724e03e30",
  "tiles/paths.mp4": "3bcea33492350e52",
  "tiles/prot.mp4": "849294b15f0801a7",
  "tiles/rabies.mp4": "f7a970bee6141025",
  "tiles/rules.mp4": "c7f823c780153fd0",
  "tiles/scores.mp4": "98eceab48dfdd02f",
  "tiles/sinuscpg.mp4": "846bf32d1570c611",
  "tiles/snakecpg.mp4": "81a539c561ca46c0",
  "tiles/t2dmcpg.mp4": "13795d5f44b6ccc5",
  "tiles/throatcpg.mp4": "67bf77fbc63f3fa3",
  "tiles/tip.mp4": "319cc9d631af5e30",
  "tiles/toothcpg.mp4": "8bb44e9b22035dd8",
  "tiles/tox.mp4": "d0ad6cf4aea9d93f",
  "tiles/vtecpg.mp4": "6662710bc80d6b32"
}; /* path: hash, kept once used */
const NAME = 'green-zone-mo-guide-', CACHE = NAME + VERSION, KEPT = NAME + 'kept', FONTS = NAME + 'fonts';
const BASE = new URL('./', self.location.href).href;
const WAIT = 4000;
const PLAYED = /^(media|audio|clips)\/.+\.(mp4|mp3)$/; /* the films and sounds a person plays (tile loops are decoration) */

const hash = async buf => [...new Uint8Array(await crypto.subtle.digest('SHA-256', buf))].slice(0, 8).map(b => b.toString(16).padStart(2, '0')).join('');
const pathOf = url => url.startsWith(BASE) ? decodeURIComponent(url.slice(BASE.length).split(/[?#]/)[0]) : null;
const own = (body, type, extra) => new Response(body, {headers: Object.assign({'Content-Type': type || ''}, extra)});
const older = names => names.filter(n => n.startsWith(NAME) && ![CACHE, KEPT, FONTS].includes(n));
const has = (o, k) => k !== null && Object.prototype.hasOwnProperty.call(o, k);

self.addEventListener('install', e => e.waitUntil((async () => {
  const cache = await caches.open(CACHE);
  const earlier = await Promise.all(older(await caches.keys()).map(n => caches.open(n)));
  const lean = !!(self.navigator.connection && self.navigator.connection.saveData);
  await Promise.all(Object.keys(PRE).filter(p => p === '' || p === 'manifest.webmanifest' || !lean)
    .map(p => save(cache, earlier, p).catch(err => { if (p === '') throw err; })));
  await self.skipWaiting();
})()));

/* Save one file of this build: from an earlier cache if it is unchanged, else from the network, and only if it matches */
async function save(cache, earlier, p){
  const url = BASE + p;
  for (const c of [cache, ...earlier]){
    const res = await c.match(url);
    if (res && await hash(await res.clone().arrayBuffer()) === PRE[p]) return c === cache || cache.put(url, res);
  }
  const res = await fetch(url, {cache: 'no-cache'});
  const buf = res.ok ? await res.arrayBuffer() : null;
  if (!buf || await hash(buf) !== PRE[p]) throw new Error('Not the file of this build: ' + url);
  return cache.put(url, own(buf, res.headers.get('content-type')));
}

self.addEventListener('activate', e => e.waitUntil((async () => {
  await Promise.all(older(await caches.keys()).map(n => caches.delete(n)));
  const kept = await caches.open(KEPT);
  for (const req of await kept.keys()){
    const p = pathOf(req.url), res = has(KEEP, p) ? await kept.match(req) : null;
    if (!res || res.headers.get('X-GZ-Hash') !== KEEP[p]) await kept.delete(req);
  }
  await self.clients.claim();
  for (const c of await self.clients.matchAll({type: 'window', includeUncontrolled: true})) c.postMessage({gz: 'ready', page: PAGE});
})()));

/* pwa.js asks what is saved, for Settings and the Install the guide page: how many files, and their size in bytes */
self.addEventListener('message', e => {
  if (!e.data || e.data.gz !== 'status' || !e.source) return;
  e.waitUntil((async () => {
    const [pre, kept] = await Promise.all([CACHE, KEPT].map(async n => {
      const c = await caches.open(n);
      return Promise.all((await c.keys()).map(async r => ({p: pathOf(r.url), size: (await (await c.match(r)).blob()).size})));
    }));
    const mine = pre.filter(x => has(PRE, x.p)), sum = a => a.reduce((s, x) => s + x.size, 0);
    e.source.postMessage({gz: 'status', page: PAGE, version: VERSION, saved: mine.length, of: Object.keys(PRE).length,
      bytes: sum(mine) + sum(kept), played: kept.filter(x => PLAYED.test(x.p || '')).length});
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const p = pathOf(req.url);
  if (p !== null){
    if (p === '' || p === 'index.html') e.respondWith(page(e));
    else if (has(PRE, p)) e.respondWith(still(e, p));
    else if (has(KEEP, p)) e.respondWith(/\.(mp4|mp3)$/.test(p) ? media(e, p) : later(e, p));
    return; /* anything else (sw.js, the icons) goes to the network as usual */
  }
  const host = new URL(req.url).hostname;
  if (host === 'fonts.googleapis.com' || host === 'fonts.gstatic.com') e.respondWith(font(e, host));
});

async function page(e){
  /* The newest page, revalidated past the browser's cache and read in full */
  const got = fetch(e.request.url, {cache: 'no-cache', credentials: 'same-origin'}).then(async res => {
    if (!res.ok) return res; /* an error page: shown only when nothing is saved */
    const h = new Headers(res.headers); h.delete('content-encoding'); h.delete('content-length');
    return new Response(await res.arrayBuffer(), {status: res.status, statusText: res.statusText, headers: h});
  });
  const saved = await caches.match(BASE, {cacheName: CACHE});
  if (!saved) return got;
  let timer;
  const res = await Promise.race([got.catch(() => null), new Promise(r => { timer = setTimeout(r, WAIT, null); })]);
  clearTimeout(timer);
  if (res && res.ok) return res;
  e.waitUntil(got.catch(() => {})); /* a late answer still lands in the browser's cache, ready for the next update */
  return saved;
}

async function still(e, p){
  const cache = await caches.open(CACHE);
  const hit = await cache.match(BASE + p);
  if (hit) return hit;
  const res = await fetch(e.request);
  if (res.ok) keep(e, cache, p, PRE[p], res.clone());
  return res;
}

/* A full poster sheet: kept once opened */
async function later(e, p){
  const kept = await caches.open(KEPT);
  const hit = await kept.match(BASE + p);
  if (hit) return hit;
  const res = await fetch(e.request);
  if (res.ok) keep(e, kept, p, KEEP[p], res.clone(), {'X-GZ-Hash': KEEP[p]});
  return res;
}

function keep(e, cache, p, want, res, extra){
  e.waitUntil(res.arrayBuffer().then(async buf => {
    if (await hash(buf) === want) await cache.put(BASE + p, own(buf, res.headers.get('content-type'), extra));
  }).catch(() => {}));
}

/* A film or sound: from the kept copy in byte ranges, else from the network. When the network sends the whole file in one
   answer, the bytes pass on to the player as they come and a copy is kept once the player has read every one of them.
   Every answer is one this worker builds, network or kept: Chrome's player refuses to mix those with answers passed
   straight through from the network for the same file (a seek then fails with a data source error). */
async function media(e, p){
  const kept = await caches.open(KEPT);
  const hit = await kept.match(BASE + p);
  if (hit) return ranged(e.request, hit);
  const res = await fetch(e.request);
  const h = new Headers(res.headers); h.delete('content-encoding');
  const built = body => new Response(body, {status: res.status, statusText: res.statusText, headers: h});
  if (!res.body || !whole(res)) return built(res.body);
  const parts = [];
  const pass = new TransformStream({transform(chunk, ctl){ parts.push(chunk); ctl.enqueue(chunk); }});
  e.waitUntil(res.body.pipeTo(pass.writable).then(async () => {
    const blob = new Blob(parts, {type: res.headers.get('content-type') || ''});
    if (await hash(await blob.arrayBuffer()) === KEEP[p]) await kept.put(BASE + p, own(blob, blob.type, {'X-GZ-Hash': KEEP[p]}));
  }).catch(() => {})); /* the player stopped reading (a seek, a pause, leaving the page): nothing is kept */
  return built(pass.readable);
}

/* Does this answer carry the whole file: a 200, or a 206 for bytes 0 to the end? */
function whole(res){
  if (res.status === 200) return true;
  const m = res.status === 206 && /^bytes 0-(\d+)\/(\d+)$/.exec(res.headers.get('content-range') || '');
  return !!m && +m[1] + 1 === +m[2];
}

async function ranged(req, hit){
  const m = /^bytes=(\d*)-(\d*)$/.exec((req.headers.get('range') || '').trim());
  if (!m || (m[1] === '' && m[2] === '')) return hit; /* no range, or one this does not read: the whole file */
  const blob = await hit.blob(), size = blob.size;
  const start = m[1] === '' ? Math.max(0, size - +m[2]) : +m[1];
  const end = m[1] === '' || m[2] === '' ? size - 1 : Math.min(+m[2], size - 1);
  if (start >= size || start > end) return new Response(null, {status: 416, headers: {'Content-Range': 'bytes */' + size}});
  return new Response(blob.slice(start, end + 1), {status: 206, headers: {'Content-Type': hit.headers.get('content-type') || '',
    'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': String(end - start + 1), 'Accept-Ranges': 'bytes'}});
}

async function font(e, host){
  const cache = await caches.open(FONTS);
  const hit = await cache.match(e.request, {ignoreVary: true});
  if (hit && host === 'fonts.gstatic.com') return hit; /* a font file never changes at the same address */
  const net = fetch(e.request);
  e.waitUntil(net.then(res => (res.ok || res.type === 'opaque') && cache.put(e.request, res.clone())).catch(() => {}));
  return hit || net; /* the stylesheet: the kept one now, refreshed for next time */
}
