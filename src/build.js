#!/usr/bin/env node
/* Build the Green Zone MO Guide.

   Joins parts/head.html with the eight scripts, in this order: data.js, data2.js, data3.js, data4.js, data5.js, data6.js, data7.js, engine.js.
   Writes two files into the folder above src/ (or into the folder given as the first argument):

     green-zone-pathways.html   The page that is published as the claude.ai artifact. It has no doctype,
                                html, head or body tags, because the artifact host adds them.
     app/index.html             The same page inside a minimal document, for offline use. It needs the
                                app/img, app/media, app/poster, app/clips, app/audio and app/tiles folders beside it.
                                It also carries the tab icon (the claude.ai host sets its own).

   Usage: node build.js [output folder]          (npm run build) */
const fs = require('fs');
const path = require('path');

const PARTS = path.join(__dirname, 'parts');
const OUT = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const SCRIPTS = ['data.js', 'data2.js', 'data3.js', 'data4.js', 'data5.js', 'data6.js', 'data7.js', 'engine.js'];

const read = f => fs.readFileSync(path.join(PARTS, f), 'utf8');
const js = SCRIPTS.map(read).join('\n');

try {
  new Function(js); // parse only: nothing runs
} catch (e) {
  console.error('The joined script does not parse: ' + e.message);
  process.exit(1);
}

const page = read('head.html') + '\n<script>\n' + js + '\n</script>\n';
if (!page.startsWith('<title>')) console.warn('Warning: the page should start with its <title> (the artifact host reads it from the first 8 KB).');

/* The tab icon for the offline copy and the GitHub Pages site: the app's mark (LOGO in engine.js) on its emerald tile */
const ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0d7049"/><stop offset="1" stop-color="#063d28"/></linearGradient></defs>' +
  '<rect width="64" height="64" rx="18" fill="url(#g)"/><g transform="translate(11 11) scale(1.75)" fill="none" stroke-width="2.6" stroke-linecap="round">' +
  '<path d="M5 18.5h7.5a4 4 0 0 0 4-4V12.2" stroke="#43dd8c"/><path d="M16.5 3.6v6.6M13.2 6.9h6.6" stroke="#fff"/><circle cx="5" cy="18.5" r="2.3" fill="#fff" stroke="none"/></g></svg>';

/* The same skeleton the artifact host wraps around the page, plus the tab icon */
const SHELL = '<!doctype html><html><head><meta charset="utf-8">' +
  '<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,' + encodeURIComponent(ICON) + '">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' +
  '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}' +
  'body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style></head><body>\n';

fs.mkdirSync(path.join(OUT, 'app'), {recursive: true});
fs.writeFileSync(path.join(OUT, 'green-zone-pathways.html'), page);
fs.writeFileSync(path.join(OUT, 'app', 'index.html'), SHELL + page + '\n</body></html>\n');

const kb = n => Math.round(n / 1024) + ' KB';
console.log('Built ' + path.join(OUT, 'green-zone-pathways.html') + ' (' + kb(Buffer.byteLength(page)) + ')');
console.log('Built ' + path.join(OUT, 'app', 'index.html'));
const missing = ['img', 'media', 'poster', 'clips', 'audio', 'tiles'].filter(d => !fs.existsSync(path.join(OUT, 'app', d)));
if (missing.length) console.warn('Note: app/ has no ' + missing.join(', ') + ' folder, so the offline copy will miss those images, clips or sounds.');
