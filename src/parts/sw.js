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
   Fonts      The Google Fonts stylesheet and font files are kept as the page loads them, so the guide keeps its type.
   Everything Settings, "Save everything" (12 Nov 2026): on a tap only, the page asks which kept files are still missing
              (with their sizes) and fetches each one in full; the fetch passes through this worker, which keeps it as above.
              Nothing is fetched ahead without that tap. */
'use strict';
const VERSION = '__VERSION__', PAGE = '__PAGE__';
const PRE = __PRE__;   /* path: hash, saved at install ('' is the page) */
const KEEP = __KEEP__; /* path: hash, kept once used */
const SIZE = __SIZE__; /* path: bytes, for the kept files: what Save everything would download */
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
  /* Save everything: which kept files this device does not hold yet, and their sizes */
  if (e.data && e.data.gz === 'missing' && e.source) return e.waitUntil((async () => {
    const kept = await caches.open(KEPT), have = new Set();
    for (const r of await kept.keys()){ const res = await kept.match(r), p = pathOf(r.url); if (res && res.headers.get('X-GZ-Hash') === KEEP[p]) have.add(p); }
    const list = Object.keys(KEEP).filter(p => !have.has(p)).map(p => [p, SIZE[p] || 0]);
    e.source.postMessage({gz: 'missing', list, of: Object.keys(KEEP).length, bytes: Object.values(SIZE).reduce((s, n) => s + n, 0)});
  })());
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
