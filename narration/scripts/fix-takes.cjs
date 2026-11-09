// Re-record read-aloud takes that failed the strict check: try other seeds, check each the same strict way, keep the first that
// passes (or, if none does, the one with the lowest error and no repeat), then rejoin its section and update chunks.json.
// The spoken form is rebuilt from the text with the current spoken-lib, so a corrected form is used.
// node fix-takes.cjs <id> [<id> ...]   (id as in the report, e.g. "leaf-dengue-ms#3 p1-0.wav")
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const { check } = require('./check-all.cjs'), { say, chunks } = require('./spoken-lib.cjs');
const VOICE = {en:{id:'e4e6e5d8', speed:'0.86'}, ms:{id:'364099c8', speed:'0.95'}};
const SEEDS = [11, 23, 41, 59, 73, 89, 101];
(async () => {
  for (const id of process.argv.slice(2)) {
    const [key, file] = id.split(' '), [clip, seg] = key.split('#');
    const rep = JSON.parse(fs.readFileSync(path.join(__dirname, 'chunks.json'), 'utf8')), v = rep[key], c = v.chunks.find(x => x.file === file);
    const spoken = say(c.text, v.lang), dir = path.join('C:/Users/user/Green Zone/narration/read-aloud', clip, String(seg).padStart(2, '0')), base = file.replace(/\.wav$/, '');
    const formChanged = spoken !== c.say;
    let best = null;
    for (const seed of SEEDS) {
      const f = path.join(dir, `${base}-s${seed}.wav`);
      if (!fs.existsSync(f) || formChanged) {
        const fd = new FormData(); fd.append('text', spoken); fd.append('language', v.lang); fd.append('profile_id', VOICE[v.lang].id); fd.append('speed', VOICE[v.lang].speed); fd.append('num_step', '32'); fd.append('seed', String(seed));
        const r = await fetch('http://127.0.0.1:3900/generate', {method:'POST', body:fd}); if (!r.ok) throw new Error('generate ' + r.status);
        fs.writeFileSync(f, Buffer.from(await r.arrayBuffer()));
      }
      const res = await check({id:`${id} seed ${seed}`, file:f, lang:v.lang, say:spoken});
      console.log(`  ${id} seed ${seed}: ${res.ok ? 'PASS' : 'fail'} error ${(res.cer * 100).toFixed(1)}% ratio ${res.ratio}${res.why.length ? ' (' + res.why.join('; ') + ')' : ''}`);
      const score = res.cer + (res.reps.length ? 1 : 0) + (res.why.some(w => /restarts/.test(w)) ? 1 : 0);
      if (!best || score < best.score) best = {seed, score, res};
      if (res.ok) break;
    }
    // keep the chosen take under the -s<seed> name, copy it in, rejoin the section
    if (formChanged) { c.say = spoken; }
    fs.writeFileSync(path.join(__dirname, 'chunks.json'), JSON.stringify(rep, null, 1));
    execFileSync(process.execPath, [path.join(__dirname, 'swap-take.cjs'), clip, seg, file, String(best.seed), best.res.heard]);
    const rep2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'chunks.json'), 'utf8')), c2 = rep2[key].chunks.find(x => x.file === file);
    c2.err = best.res.cer; c2.strict = best.res.ok ? 'passed' : 'best available: ' + best.res.why.join('; '); fs.writeFileSync(path.join(__dirname, 'chunks.json'), JSON.stringify(rep2, null, 1));
    console.log(`${id}: seed ${best.seed} ${best.res.ok ? 'passes' : 'is the best available (' + best.res.why.join('; ') + ')'}`);
  }
})();
