// The takes to check: every read-aloud take as chosen, the explainer's twenty voice lines and the five journey stops.
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const rep = require('./chunks.json'), items = [];
const RA = 'C:/Users/user/Green Zone/narration/read-aloud';
fs.mkdirSync(path.join(__dirname, 'ext'), {recursive:true});
for (const [k, v] of Object.entries(rep)) for (const c of v.chunks)
  items.push({id:`${k} ${c.file}`, file:path.join(RA, v.clip, String(v.seg).padStart(2, '0'), c.file), lang:v.lang, say:c.say, kind:'read'});
const T = fs.readFileSync('C:/Users/user/Green Zone/video/explainer/work/timing.cjs', 'utf8');
const re = /\{id:'(s\d\d)', chapter:(?:null|'(?:[^'\\]|\\.)*'), text:'((?:[^'\\]|\\.)*)'\}/g;
const scenes = [...T.matchAll(re)].map(m => [m[1], m[2].replace(/\\'/g, "'")]);
if (scenes.length !== 20) throw new Error('expected 20 explainer lines, found ' + scenes.length);
scenes.forEach(([id, text], i) => {
  const lg = i < 10 ? 'en' : 'ms', src = `C:/Users/user/Green Zone/video/explainer${lg === 'ms' ? '-ms' : ''}/assets/vo/${id}.wav`;
  const out = path.join(__dirname, 'ext', `explainer-${lg}-${id}.wav`);
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', src, '-ac', '1', '-ar', '24000', '-c:a', 'pcm_s16le', out]);
  items.push({id:`explainer-${lg} ${id}`, file:out, lang:lg, say:text, kind:'explainer'});
});
const E = fs.readFileSync('C:/Users/user/Green Zone/src/parts/engine.js', 'utf8');
const stops = [...E.matchAll(/audio:'(audio\/stop\d\.mp3)'[\s\S]*?say:'((?:[^'\\]|\\.)*)'/g)].map(m => [m[1], m[2]]);
for (const [a, text] of stops) {
  const out = path.join(__dirname, 'ext', path.basename(a, '.mp3') + '.wav');
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', 'C:/Users/user/Green Zone/app/' + a, '-ac', '1', '-ar', '24000', '-c:a', 'pcm_s16le', out]);
  items.push({id:'journey ' + path.basename(a), file:out, lang:'en', say:text, kind:'journey'});
}
fs.writeFileSync(path.join(__dirname, 'items.json'), JSON.stringify(items, null, 1));
console.log(items.length, 'takes:', ['read', 'explainer', 'journey'].map(k => k + ' ' + items.filter(i => i.kind === k).length).join(', '));
