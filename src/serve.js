#!/usr/bin/env node
/* Preview the offline copy at http://localhost:8765 (or the port in PORT).
   Usage: node serve.js [folder, default ../app]     (npm run serve) */
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(process.argv[2] || path.join(__dirname, '..', 'app'));
const port = Number(process.env.PORT) || 8765;
const TYPES = {'.html': 'text/html; charset=utf-8', '.webp': 'image/webp', '.png': 'image/png', '.mp4': 'video/mp4', '.mp3': 'audio/mpeg', '.js': 'text/javascript', '.css': 'text/css', '.webmanifest': 'application/manifest+json', '.json': 'application/json'};

http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split('?')[0]);
  if (rel === '/') rel = '/index.html';
  const file = path.join(root, path.normalize(rel));
  if (!file.startsWith(root)) { res.writeHead(403); res.end(); return; }
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); res.end('Not found'); return; }
    const type = TYPES[path.extname(file)] || 'application/octet-stream';
    const range = /bytes=(\d*)-(\d*)/.exec(req.headers.range || '');
    if (range) { // video and audio seek with byte ranges
      const start = range[1] ? Number(range[1]) : 0;
      const end = range[2] ? Number(range[2]) : st.size - 1;
      res.writeHead(206, {'Content-Type': type, 'Content-Range': `bytes ${start}-${end}/${st.size}`, 'Accept-Ranges': 'bytes', 'Content-Length': end - start + 1});
      fs.createReadStream(file, {start, end}).pipe(res);
      return;
    }
    res.writeHead(200, {'Content-Type': type, 'Content-Length': st.size, 'Accept-Ranges': 'bytes'});
    fs.createReadStream(file).pipe(res);
  });
}).listen(port, () => console.log(`Green Zone MO Guide: http://localhost:${port}/  (serving ${root}; Ctrl+C to stop)`));
