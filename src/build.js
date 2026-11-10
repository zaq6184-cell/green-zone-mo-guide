#!/usr/bin/env node
/* Build the Green Zone MO Guide.

   Joins parts/head.html with the twelve scripts, in this order: data.js, data2.js, data3.js, data4.js, data5.js, data6.js, data7.js, data8.js, data9.js, data10.js, data11.js, engine.js.
   Writes into the folder above src/ (or into the folder given as the first argument):

     green-zone-pathways.html   The page that is published as the claude.ai artifact. It has no doctype,
                                html, head or body tags, because the artifact host adds them. It never gets the web
                                app's manifest, touch icon or service worker: the host's rules forbid them, and the
                                build stops if the page mentions them.
     app/index.html             The same page inside a minimal document, for the public web app (GitHub Pages) and
                                offline use. It needs the app/img, app/media, app/poster, app/clips, app/audio, app/tiles
                                and app/icons folders beside it. It also carries the tab icon (the claude.ai host sets its
                                own) and, as the installable web app, the manifest and touch icon links, the theme colour
                                and parts/pwa.js, which registers the service worker on github.io and localhost only.
     app/manifest.webmanifest   The web app manifest: start_url and scope ./ (so /green-zone-mo-guide/ on GitHub Pages),
                                standalone, --bg from head.html as the theme and background colour, the app/icons PNGs.
     app/sw.js                  parts/sw.js with this build's version, the page's id, and every file it handles with the
                                first 16 hex digits of its SHA-256, so it keeps only copies that match this build.

   The app/icons PNGs are drawn by icons.js (npm run icons), not here.
   Usage: node build.js [output folder]          (npm run build) */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PARTS = path.join(__dirname, 'parts');
const OUT = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const APP = path.join(OUT, 'app');
const SCRIPTS = ['data.js', 'data2.js', 'data3.js', 'data4.js', 'data5.js', 'data6.js', 'data7.js', 'data8.js', 'data9.js', 'data10.js', 'data11.js', 'engine.js'];
const stop = msg => { console.error(msg); process.exit(1); };

/* LF line endings throughout, as git keeps the files (.gitattributes), so the hashes in sw.js match what GitHub Pages serves */
const read = f => fs.readFileSync(path.join(PARTS, f), 'utf8').replace(/\r\n?/g, '\n');
const hash16 = data => crypto.createHash('sha256').update(data).digest('hex').slice(0, 16);
const js = SCRIPTS.map(read).join('\n');

try {
  new Function(js); // parse only: nothing runs
} catch (e) {
  stop('The joined script does not parse: ' + e.message);
}

const head = read('head.html');
const page = head + '\n<script>\n' + js + '\n</script>\n';
if (!page.startsWith('<title>')) console.warn('Warning: the page should start with its <title> (the artifact host reads it from the first 8 KB).');
if (/serviceWorker|manifest\.webmanifest|apple-touch-icon|\bsw\.js\b/.test(page)) stop('The artifact page must not mention the service worker, the manifest or the touch icon: they belong in parts/pwa.js and build.js, for app/ only.');

/* The tab icon for the offline copy and the GitHub Pages site: the app's mark (LOGO in engine.js) on its emerald tile */
const ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0d7049"/><stop offset="1" stop-color="#063d28"/></linearGradient></defs>' +
  '<rect width="64" height="64" rx="18" fill="url(#g)"/><g transform="translate(11 11) scale(1.75)" fill="none" stroke-width="2.6" stroke-linecap="round">' +
  '<path d="M5 18.5h7.5a4 4 0 0 0 4-4V12.2" stroke="#43dd8c"/><path d="M16.5 3.6v6.6M13.2 6.9h6.6" stroke="#fff"/><circle cx="5" cy="18.5" r="2.3" fill="#fff" stroke="none"/></g></svg>';

/* The page background (--bg), light and dark: the web app's theme and splash colour */
const BG = (head.match(/:root\{[^}]*?--bg:\s*(#[0-9a-fA-F]{6})/) || [])[1];
const BG_DARK = (head.match(/prefers-color-scheme: dark\)\{:root:not\(\[data-theme="light"\]\)\{[^}]*?--bg:\s*(#[0-9a-fA-F]{6})/) || [])[1];
if (!BG || !BG_DARK) stop('Could not read --bg (light and dark) from parts/head.html.');

/* The same skeleton the artifact host wraps around the page, plus the tab icon and, for the web app, its manifest,
   touch icon, home screen name (iOS) and the browser bar's colour (pwa.js keeps it with the Day and Night switch) */
const SHELL = '<!doctype html><html><head><meta charset="utf-8">' +
  '<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,' + encodeURIComponent(ICON) + '">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' +
  '<link rel="manifest" href="manifest.webmanifest"><link rel="apple-touch-icon" href="icons/apple-touch-icon.png">' +
  '<meta name="apple-mobile-web-app-title" content="Green Zone">' +
  `<meta name="theme-color" content="${BG}" media="(prefers-color-scheme: light)"><meta name="theme-color" content="${BG_DARK}" media="(prefers-color-scheme: dark)">` +
  '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}' +
  'body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style></head><body>\n';

/* The web app manifest. start_url and scope are relative to the manifest, so on GitHub Pages they are
   https://zaq6184-cell.github.io/green-zone-mo-guide/, and the same files also install from localhost or a fork. */
const MANIFEST = {
  id: '/green-zone-mo-guide/',
  name: 'Green Zone MO Guide',
  short_name: 'Green Zone',
  description: 'Pathways, rules, calculators and numbers for medical officers and house officers in the Green Zone (MTS 4 and 5), Emergency & Trauma Department, Hospital Kuala Lumpur. A reference tool only.',
  lang: 'en-GB',
  dir: 'ltr',
  start_url: './',
  scope: './',
  display: 'standalone',
  background_color: BG,
  theme_color: BG,
  categories: ['medical', 'education'],
  icons: [
    {src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any'},
    {src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any'},
    {src: 'icons/maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable'},
    {src: 'icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable'}
  ],
  /* Long-press shortcuts on the home screen icon (Android), for one tap to an answer */
  shortcuts: [
    {name: 'Search the guide', short_name: 'Search', url: './#search'},
    {name: 'Calculators', short_name: 'Calculators', url: './#calc'},
    {name: 'Numbers to know', short_name: 'Numbers', url: './#numbers'}
  ]
};
const manifest = JSON.stringify(MANIFEST, null, 2) + '\n';

/* app/index.html with pwa.js, which carries the page's id: a hash of the page with the id left blank, so the service
   worker of a newer build can tell an open page from an older build that a newer one is saved */
const one = (text, key, file) => { if (text.split(key).length !== 2) stop(file + ' must hold ' + key + ' exactly once.'); return text; };
let app = one(SHELL + page + '<script>\n' + read('pwa.js') + '</script>\n</body></html>\n', "'__PAGE__'", 'parts/pwa.js');
const PAGE_ID = hash16(app).slice(0, 12);
app = app.replace("'__PAGE__'", () => `'${PAGE_ID}'`);

/* What the service worker handles, from the files in app/ */
const walk = dir => fs.existsSync(dir) ? fs.readdirSync(dir, {withFileTypes: true}).flatMap(d => d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]) : [];
const files = ['img', 'tiles', 'media', 'poster', 'clips', 'audio'].flatMap(d => walk(path.join(APP, d))).map(f => path.relative(APP, f).split(path.sep).join('/')).sort();
const SMALL = /^(img\/[^/]+|tiles\/[^/]+|media\/[^/]+|poster\/[^/]+-thumb)\.webp$/; /* the small stills: saved at install */
const LATER = /^(poster\/[^/]+\.webp|(media|clips|audio|tiles)\/[^/]+\.(mp4|mp3))$/; /* poster sheets, films and sounds: kept once used */
const PRE = {'': hash16(app), 'manifest.webmanifest': hash16(manifest)}, KEEP = {};
let preBytes = Buffer.byteLength(app) + Buffer.byteLength(manifest), keepBytes = 0;
for (const f of files){
  const buf = fs.readFileSync(path.join(APP, f));
  if (SMALL.test(f)){ PRE[f] = hash16(buf); preBytes += buf.length; }
  else if (LATER.test(f)){ KEEP[f] = hash16(buf); keepBytes += buf.length; }
}
const json = o => JSON.stringify(o, null, 1).replace(/\n /g, '\n  ');
let sw = read('sw.js');
['__PRE__', '__KEEP__', "'__VERSION__'", "'__PAGE__'"].forEach(k => one(sw, k, 'parts/sw.js'));
const VERSION = hash16(sw + JSON.stringify(PRE) + JSON.stringify(KEEP)).slice(0, 12);
sw = sw.replace("'__VERSION__'", () => `'${VERSION}'`).replace("'__PAGE__'", () => `'${PAGE_ID}'`).replace('__PRE__', () => json(PRE)).replace('__KEEP__', () => json(KEEP));

fs.mkdirSync(APP, {recursive: true});
fs.writeFileSync(path.join(OUT, 'green-zone-pathways.html'), page);
fs.writeFileSync(path.join(APP, 'index.html'), app);
fs.writeFileSync(path.join(APP, 'manifest.webmanifest'), manifest);
fs.writeFileSync(path.join(APP, 'sw.js'), sw);

const kb = n => Math.round(n / 1024) + ' KB', mb = n => (n / 1048576).toFixed(1) + ' MB';
console.log('Built ' + path.join(OUT, 'green-zone-pathways.html') + ' (' + kb(Buffer.byteLength(page)) + ')');
console.log('Built ' + path.join(APP, 'index.html') + ', manifest.webmanifest and sw.js (build ' + VERSION + ', page ' + PAGE_ID + ')');
console.log('Offline: saves ' + Object.keys(PRE).length + ' files (' + mb(preBytes) + ') at install; keeps ' + Object.keys(KEEP).length + ' films, sounds, loops and poster sheets (' + mb(keepBytes) + ' in all) only once used');
const missing = ['img', 'media', 'poster', 'clips', 'audio', 'tiles', 'icons'].filter(d => !fs.existsSync(path.join(APP, d)));
if (missing.length) console.warn('Note: app/ has no ' + missing.join(', ') + ' folder, so the offline copy will miss those images, clips or sounds' + (missing.includes('icons') ? ' (run npm run icons for the web app icons)' : '') + '.');
const icons = MANIFEST.icons.map(i => i.src).concat('icons/apple-touch-icon.png').filter(f => !fs.existsSync(path.join(APP, f)));
if (icons.length && !missing.includes('icons')) console.warn('Note: missing ' + icons.join(', ') + ': run npm run icons.');
