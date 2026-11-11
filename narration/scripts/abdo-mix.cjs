// Mix the five Malay takes over the music bed.
// Layout: 1.5 s music alone, L1, 0.6 s, L2, ... L5, then 2.0 s of music fading out over those 2.0 s; music fades in over 1 s.
// Music: a fixed gain envelope (no sidechain): DUCK dB below the voice from just before L1 to the end of L5, RISE dB higher in the
// intro and outro. Stems are summed with amix normalize=0, then levelled to -16 LUFS with two-pass loudnorm (linear), and encoded
// as stereo MP3 96 kbps 44.1 kHz. Writes app/audio/abdo-script-ms.mp3 and narration/read-aloud/abdo-script-ms/timing.json
// ({dur, lines:[[start, 0, line index]]}); working files in narration/scripts/asm/abdo/ (git-ignored), with mixinfo.json.
// node abdo-mix.cjs ../music/flow-bed-abdo.mp3 [--test] [--offset S]   (--test writes only into the working folder)
const fs = require('fs'), path = require('path'), { execFileSync, spawnSync } = require('child_process');
const args = process.argv.slice(2), bed = args[0], TEST = args.includes('--test');
const offArg = args.includes('--offset') ? +args[args.indexOf('--offset') + 1] : null;
const TAKES = path.resolve(__dirname, '..', 'read-aloud', 'abdo-script-ms');
const W = path.join(__dirname, 'asm', 'abdo'); fs.mkdirSync(W, {recursive:true});
const OUT_MP3 = TEST ? path.join(W, 'test-mix.mp3') : path.resolve(__dirname, '..', '..', 'app', 'audio', 'abdo-script-ms.mp3');
const OUT_TIMING = TEST ? path.join(W, 'test-timing.json') : path.join(TAKES, 'timing.json');
const SR = 44100, INTRO = 1.5, GAP = 0.6, TAIL = 2.0, FADE_IN = 1.0, DUCK = 22, RISE = 6, TARGET = -16;
const ff = a => execFileSync('ffmpeg', ['-v', 'error', '-y', ...a]);
const ffErr = a => spawnSync('ffmpeg', ['-hide_banner', '-nostats', ...a], {encoding:'utf8', maxBuffer:1 << 28}).stderr || '';
const samples = f => Math.round(+execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'stream=duration_ts', '-of', 'csv=p=0', f]).toString().trim());
const lufs = (f, extra = []) => { const e = ffErr(['-i', f, ...extra, '-af', 'ebur128=peak=true', '-f', 'null', '-']);
  const sum = e.slice(e.lastIndexOf('Summary:'));
  return {I:+sum.match(/I:\s+(-?[\d.]+) LUFS/)[1], LRA:+sum.match(/LRA:\s+(-?[\d.]+) LU/)[1], TP:+((sum.match(/Peak:\s+(-?[\d.inf]+) dBFS/) || [0, 'NaN'])[1])}; };

// 1. Working copies of the takes: head and tail silence trimmed (-50 dB, 20 ms kept at the head, 50 ms at the tail),
//    44.1 kHz, stereo (the mono voice copied to both channels), 32-bit float. p1.wav ... p5.wav stay as recorded.
const lines = [];
for (let n = 1; n <= 5; n++) {
  const src = path.join(TAKES, `p${n}.wav`), dst = path.join(W, `v${n}.wav`);
  ff(['-i', src, '-af', 'silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.02,areverse,silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.05,areverse,aresample=' + SR + ',pan=stereo|c0=c0|c1=c0', '-c:a', 'pcm_f32le', dst]);
  lines.push({n, file:dst, len:samples(dst)});
}
// 2. Exact silences and the voice stem (sample-accurate placement)
const sil = (name, sec) => { const f = path.join(W, name + '.wav'); ff(['-f', 'lavfi', '-i', `anullsrc=r=${SR}:cl=stereo`, '-t', String(sec), '-c:a', 'pcm_f32le', f]); return f; };
const sIntro = sil('s-intro', INTRO), sGap = sil('s-gap', GAP), sTail = sil('s-tail', TAIL);
let pos = samples(sIntro); const gapN = samples(sGap), tailN = samples(sTail), seq = [sIntro];
for (const [i, l] of lines.entries()) { l.start = pos; seq.push(l.file); pos += l.len; l.end = pos; if (i < 4) { seq.push(sGap); pos += gapN; } }
seq.push(sTail); pos += tailN;
const total = pos, totalSec = total / SR, voiceEnd = lines[4].end / SR, firstStart = lines[0].start / SR;
const lst = path.join(W, 'voice.txt'); fs.writeFileSync(lst, seq.map(f => `file '${f.replace(/\\/g, '/')}'`).join('\n'));
const voice = path.join(W, 'voice-stem.wav');
ff(['-f', 'concat', '-safe', '0', '-i', lst, '-c:a', 'pcm_f32le', voice]);
if (samples(voice) !== total) throw new Error(`voice stem ${samples(voice)} samples, expected ${total}`);
const V = lufs(voice);
console.log(`voice stem: ${totalSec.toFixed(3)} s, ${V.I} LUFS, TP ${V.TP}`);

// 3. Music window: the steadiest stretch of the bed (short-term loudness, 3 s windows), skipping a quiet or building start
const bedWav = path.join(W, 'bed.wav');
ff(['-i', bed, '-af', `aresample=${SR},aformat=channel_layouts=stereo`, '-c:a', 'pcm_f32le', bedWav]);
const bedSec = samples(bedWav) / SR, B = lufs(bedWav);
const st = [...ffErr(['-i', bedWav, '-af', 'ebur128', '-f', 'null', '-']).matchAll(/t:\s*([\d.]+)\s+TARGET.*?S:\s*(-?[\d.]+)/g)].map(m => [+m[1], +m[2]]);
let best = null;
for (let s = 0; s + totalSec <= bedSec - 0.5; s += 0.5) {
  const w = st.filter(([t]) => t >= s + 3 && t <= s + totalSec).map(([, v]) => v);
  if (w.length < 10) continue;
  const mean = w.reduce((a, b) => a + b, 0) / w.length, sd = Math.sqrt(w.reduce((a, b) => a + (b - mean) ** 2, 0) / w.length);
  const score = sd + Math.max(0, B.I - 3 - mean); // steady, and not well under the bed's own level
  if (!best || score < best.score) best = {s, mean, sd, min:Math.min(...w), max:Math.max(...w), score};
}
const OFF = offArg ?? best.s;
console.log(`bed: ${bedSec.toFixed(2)} s, ${B.I} LUFS; window at ${OFF} s (auto best ${best.s} s: short-term mean ${best.mean.toFixed(1)}, sd ${best.sd.toFixed(2)}, range ${best.min}..${best.max})`);
const win = path.join(W, 'bed-window.wav');
ff(['-i', bedWav, '-af', `atrim=start_sample=${Math.round(OFF * SR)}:end_sample=${Math.round(OFF * SR) + total},asetpts=PTS-STARTPTS`, '-c:a', 'pcm_f32le', win]);
const M = lufs(win);
// 4. Gain envelope. Duck level: DUCK dB under the voice stem's integrated loudness; intro and outro RISE dB above that.
const span = ['-ss', firstStart.toFixed(3), '-to', voiceEnd.toFixed(3)];
const cut = (f, o) => { ff([...span, '-i', f, '-c:a', 'pcm_f32le', o]); return lufs(o); };
const maxS = f => Math.max(...[...ffErr(['-i', f, '-af', 'ebur128', '-f', 'null', '-']).matchAll(/t:\s*([\d.]+)\s+TARGET.*?S:\s*(-?[\d.]+)/g)].filter(([, t]) => +t >= 3).map(m => +m[2]));
const music = path.join(W, 'music-stem.wav');
let duck = DUCK, Vsp, Msp, MspMax, gDuck, gUp;
for (let k = 0; k < 3; k++) {
  gDuck = Math.pow(10, (V.I - duck - M.I) / 20); gUp = gDuck * Math.pow(10, RISE / 20);
  // fade in over 1 s to the intro level, hold, duck over 0.25 s just before L1; rise over 0.45 s after L5 while the 2 s fade-out runs
  const d0 = firstStart - 0.3, d1 = firstStart - 0.05, u0 = voiceEnd + 0.05, u1 = voiceEnd + 0.5;
  const env = `if(lt(t,${d0}),${gUp},if(lt(t,${d1}),${gUp}+(${gDuck}-${gUp})*(t-${d0})/${(d1 - d0).toFixed(3)},if(lt(t,${u0}),${gDuck},if(lt(t,${u1}),${gDuck}+(${gUp}-${gDuck})*(t-${u0})/${(u1 - u0).toFixed(3)},${gUp}))))`;
  ff(['-i', win, '-af', `volume='${env}':eval=frame,afade=t=in:st=0:d=${FADE_IN}:curve=qsin,afade=t=out:st=${voiceEnd.toFixed(4)}:d=${TAIL}:curve=qsin`, '-c:a', 'pcm_f32le', music]);
  // measured: music during speech (L1 start to L5 end) against the voice over the same stretch; also the music's loudest 3 s
  Vsp = cut(voice, path.join(W, 'voice-span.wav')); Msp = cut(music, path.join(W, 'music-span.wav')); MspMax = maxS(path.join(W, 'music-span.wav'));
  console.log(`duck ${duck} dB: music window ${M.I} LUFS, gain ${(20 * Math.log10(gDuck)).toFixed(1)} dB (intro/outro +${RISE} dB); during speech voice ${Vsp.I} LUFS, music ${Msp.I} LUFS (loudest 3 s ${MspMax}) -> ${(Vsp.I - Msp.I).toFixed(1)} dB under, loudest stretch ${(Vsp.I - MspMax).toFixed(1)} dB under`);
  if (Vsp.I - MspMax >= 19.5) break;
  duck += 19.5 - (Vsp.I - MspMax) + 0.5; // a louder stretch of the bed came within 20 dB of the voice: duck further
}
// 5. Sum (no rescaling), then two-pass loudnorm to -16 LUFS, linear
const sum = path.join(W, 'sum.wav');
ff(['-i', voice, '-i', music, '-filter_complex', 'amix=inputs=2:duration=longest:normalize=0', '-c:a', 'pcm_f32le', sum]);
const S = lufs(sum);
console.log(`sum: ${S.I} LUFS, LRA ${S.LRA}, TP ${S.TP}`);
const p1 = ffErr(['-i', sum, '-af', `loudnorm=I=${TARGET}:TP=-1.0:LRA=20:print_format=json`, '-f', 'null', '-']);
const m = JSON.parse(p1.slice(p1.lastIndexOf('{'), p1.lastIndexOf('}') + 1));
console.log('loudnorm pass 1:', JSON.stringify(m));
// The 96 kbps MP3 encode measures about 0.4-0.5 LU quieter than its input (tested in the dry run), so pass 2 is run again with
// the target moved by what the MP3 measured, until the MP3 itself reads -16 LUFS within 0.15 LU
let target = TARGET, m2, F, tries = [];
for (let k = 0; k < 3; k++) {
  const ln = `loudnorm=I=${target.toFixed(2)}:TP=-1.0:LRA=20:measured_I=${m.input_i}:measured_TP=${m.input_tp}:measured_LRA=${m.input_lra}:measured_thresh=${m.input_thresh}:offset=${m.target_offset}:linear=true:print_format=json`;
  const p2 = spawnSync('ffmpeg', ['-hide_banner', '-nostats', '-y', '-i', sum, '-af', ln, '-ar', String(SR), '-ac', '2', '-c:a', 'libmp3lame', '-b:a', '96k', OUT_MP3], {encoding:'utf8'}).stderr;
  m2 = JSON.parse(p2.slice(p2.lastIndexOf('{'), p2.lastIndexOf('}') + 1));
  F = lufs(OUT_MP3);
  tries.push({target:+target.toFixed(2), mode:m2.normalization_type, lnOut:+m2.output_i, mp3:F.I, tp:F.TP});
  console.log(`loudnorm pass 2 (I=${target.toFixed(2)}): ${m2.normalization_type}, loudnorm output ${m2.output_i}; MP3 measures ${F.I} LUFS, TP ${F.TP}`);
  if (m2.normalization_type !== 'linear') throw new Error('loudnorm fell back to dynamic');
  if (Math.abs(F.I - TARGET) <= 0.15) break;
  target += TARGET - F.I;
}
// 6. Timing: each line's start on the placement timeline; dur from the MP3
const mp3Dur = +execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', OUT_MP3]).toString().trim();
const timing = {dur:+mp3Dur.toFixed(2), lines:lines.map((l, i) => [+(l.start / SR).toFixed(2), 0, i])};
fs.writeFileSync(OUT_TIMING, JSON.stringify(timing));
// momentary loudness (400 ms) of the final file in the intro (music alone at its intro level) and just after L5
const mom = [...ffErr(['-i', OUT_MP3, '-af', 'ebur128', '-f', 'null', '-']).matchAll(/t:\s*([\d.]+)\s+TARGET.*?M:\s*(-?[\d.]+)/g)].map(m => [+m[1], +m[2]]);
const momAt = t => (mom.find(([x]) => x >= t - 0.001) || [0, NaN])[1];
const introM = momAt(1.2), outroM = momAt(voiceEnd + 0.6);
console.log(`intro momentary loudness at 1.2 s: ${introM} LUFS; outro at ${(voiceEnd + 0.6).toFixed(1)} s: ${outroM} LUFS`);
console.log(`final: ${OUT_MP3} ${fs.statSync(OUT_MP3).size} bytes, ${mp3Dur} s (timeline ${totalSec.toFixed(3)} s), ${F.I} LUFS, LRA ${F.LRA}, TP ${F.TP}`);
console.log('lines:', lines.map(l => `L${l.n} ${(l.start / SR).toFixed(3)}-${(l.end / SR).toFixed(3)}`).join(', '));
console.log('timing.json:', JSON.stringify(timing));
fs.writeFileSync(path.join(W, TEST ? 'test-mixinfo.json' : 'mixinfo.json'), JSON.stringify({bed, offset:OFF, auto:best, V, M, duck, rise:RISE, Vsp, Msp, MspMax, gapUnder:+(Vsp.I - Msp.I).toFixed(1), loudestUnder:+(Vsp.I - MspMax).toFixed(1), introM, outroM, S, pass1:m, pass2:m2, tries, F, lines:lines.map(l => ({n:l.n, start:l.start / SR, end:l.end / SR})), totalSec, mp3Dur}, null, 1));
