/* The public web app only. build.js adds this script to app/index.html (GitHub Pages and the offline copy), never to the
   claude.ai artifact, whose host forbids a service worker. It runs after engine.js.
   - Keeps the browser bar's colour (theme-color) with the page's own background, Day and Night switch included.
   - On github.io and localhost only (nowhere else, not even 127.0.0.1 or a file opened from disk), registers sw.js, which
     saves the guide for use without a signal (see src/parts/sw.js).
   - Gives the Install the guide page (#install, drawn by engine.js) its live state through window.GZ_PWA, and tells it of
     every change with a 'gz-pwa' event: saved or saving, how much is kept, installed or not, and the browser's own
     Install offer, which it can open.
   - Adds an "Offline and install" row to Settings: whether the guide is saved, with Install where the browser offers it,
     or a link to the steps.
   - When the connection drops, says whether the saved guide still works.
   - When a newer version of the guide has been saved while an older page is open, offers Reload. */
(() => {
  const PAGE = '__PAGE__'; /* this page's id, which build.js also writes into sw.js */

  const tints = [...document.querySelectorAll('meta[name="theme-color"]')];
  const tint = () => { const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim(); if (bg) tints.forEach(m => m.setAttribute('content', bg)); };
  tint();
  new MutationObserver(tint).observe(document.documentElement, {attributes: true, attributeFilter: ['data-theme']});
  try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', tint); } catch (e) {}

  const host = location.hostname;
  if (!('serviceWorker' in navigator) || !(host === 'localhost' || /\.github\.io$/.test(host))) return;
  const sw = navigator.serviceWorker;
  let state = 'saving', last = null, offer = null;
  const installed = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;

  /* The live state, for the Install the guide page */
  async function install(){
    const o = offer; if (!o) return false;
    offer = null; update();
    try { await o.prompt(); const c = await o.userChoice; return !!c && c.outcome === 'accepted'; } catch (e) { return false; } finally { update(); }
  }
  window.GZ_PWA = {
    info: () => ({state, saved: last ? last.saved : 0, of: last ? last.of : 0, bytes: last ? last.bytes : 0, played: last ? last.played : 0,
      offer: !!offer, installed: installed(), online: navigator.onLine !== false}),
    install
  };

  /* Settings: Offline and install */
  const box = document.querySelector('#settings .dlg-box');
  if (box){
    const row = document.createElement('div');
    row.className = 'set'; row.id = 'st-offline';
    row.innerHTML = '<div><b>Offline and install</b><small id="st-off" aria-live="polite"></small></div><button type="button" class="sm" id="st-inst" hidden>Install</button><a class="btn sm" id="st-how" href="#install">How to install</a>';
    box.insertBefore(row, box.querySelector('.dlg-f'));
    row.querySelector('#st-inst').addEventListener('click', install);
    new MutationObserver(() => { if (!document.querySelector('#settings').hidden) ask(); }).observe(document.querySelector('#settings'), {attributes: true, attributeFilter: ['hidden']});
  }
  function update(){
    const s = document.querySelector('#st-off');
    if (s){
      const t = state === 'failed' ? 'This browser could not save the guide for use without a signal.'
        : state === 'saving' || !last ? 'Saving the guide on this device, so it opens without a signal.'
        : 'Saved on this device: it opens without a signal.' +
          (last.saved < last.of ? ` Pictures are saved as you view them (${last.saved} of ${last.of} so far).` : '') +
          (last.played ? ` Films and sounds you have played through are kept (${last.played} so far).` : ' Films and sounds are kept once played through.');
      s.textContent = (installed() ? 'Installed. ' : '') + t;
      document.querySelector('#st-inst').hidden = !offer || installed();
      document.querySelector('#st-how').hidden = !!offer || installed();
    }
    dispatchEvent(new Event('gz-pwa'));
  }
  function ask(){
    if (sw.controller) sw.controller.postMessage({gz: 'status'});
    update();
  }
  addEventListener('beforeinstallprompt', e => { offer = e; update(); });
  addEventListener('appinstalled', () => { offer = null; update(); });

  /* The connection drops: say whether the saved guide still works (once it has stayed down for a moment, at most once a minute) */
  let downT = 0, toldAt = 0;
  addEventListener('offline', () => {
    clearTimeout(downT);
    downT = setTimeout(() => {
      if (navigator.onLine !== false || Date.now() - toldAt < 60000 || typeof toast !== 'function') return;
      toldAt = Date.now();
      toast(state === 'saved' && sw.controller ? 'Offline: the saved guide still works' : 'Offline, and this guide is not saved on this device yet');
    }, 1500);
    update();
  });
  addEventListener('online', () => { clearTimeout(downT); update(); });

  /* A newer version is saved while this older page is open: offer Reload */
  function offerReload(){
    if (document.querySelector('#gz-upd')) return;
    const t = document.createElement('div');
    t.className = 'toast upd'; t.id = 'gz-upd'; t.setAttribute('role', 'status');
    t.innerHTML = `<span>New version ready</span><button type="button" class="tb">Reload</button><button type="button" class="tx" aria-label="Not now">${typeof svg === 'function' ? svg('x') : '×'}</button>`;
    t.querySelector('.tb').addEventListener('click', () => location.reload());
    t.querySelector('.tx').addEventListener('click', () => t.remove());
    document.body.appendChild(t);
  }

  sw.addEventListener('message', e => {
    const d = e.data || {};
    if (d.gz === 'ready'){ state = 'saved'; if (d.page && d.page !== PAGE) offerReload(); ask(); }
    else if (d.gz === 'status'){ state = 'saved'; last = d; update(); }
  });
  /* The first time the worker takes charge of this page, pass the fonts the page has already loaded through it once (they
     come from the browser's own cache), so the guide keeps its type offline from the first visit */
  const warmFonts = () => performance.getEntriesByType('resource').map(r => r.name).filter(u => /^https:\/\/fonts\.(googleapis|gstatic)\.com\//.test(u))
    .forEach(u => fetch(u, {mode: u.includes('fonts.googleapis.com') ? 'no-cors' : 'cors'}).catch(() => {}));
  let had = !!sw.controller;
  sw.addEventListener('controllerchange', () => { if (!had) warmFonts(); had = true; ask(); });
  sw.startMessages();

  /* Register once the page has loaded, so saving it never slows the first view. Installed, ask the browser to keep the
     saved copy even when the phone runs short of space (Chrome grants this to installed apps without asking) */
  const go = () => {
    const r = sw.register('sw.js', {scope: './'});
    Promise.resolve(r).then(reg => { if (!reg) state = 'failed'; else if (sw.controller) state = 'saved'; ask(); }, () => { state = 'failed'; update(); });
    if (installed() && navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
  };
  if (document.readyState === 'complete') go(); else addEventListener('load', go);
  update(); /* the install page, drawn before this script ran, now has its live state */
})();
