# Green Zone explainer, version 8: spec

GOAL: a new MO finishes the film knowing the one-way route through the Green Zone and the six rules they act on (no repeats after secondary triage, down-triage is theirs, the CCA, IV antibiotics on a CCA chair, reassess before discharge, when the EP decides or is called), and knows the guide shows each pathway one question at a time.

OUTPUT: HyperFrames 0.9.22, 1920 × 1080, 30 fps, H.264 with AAC. Delivered as `video/green-zone-explainer-1080p.mp4` and a 1280 × 720 copy for the app (`app/media/green-zone-explainer-720p.mp4`).

TIME: 88.9 s = 2666 frames in English, 94.7 s = 2841 frames in Bahasa Melayu (`../explainer-ms`). The voice is the clock: ten clips (`assets/vo/s01.wav` … `s10.wav`), each scene opens 0.45 s before its clip (0.8 s for the first) and holds 0.5 s after it (2.4 s for the last). No music.

LOOK: the app's version 8 world (see `../../DESIGN.md`).
- Ground: pearl `#e9edeb` with a light from the upper left, `radial-gradient(130% 90% at 15% 0, #f3f6f4, transparent 55%)`. Never dark, except in the night version that Krishna asked for on 8 Nov 2026: the same film on the app's dark tokens (`node work/build.cjs night`, see `../REVIEW.md`).
- Jewel tiles by the app's fixed key: emerald for the zone, sapphire for a pathway, plum for a rule, teal for the discharge check, obsidian for the EP. Material: 150° gradient over the three stops, the app's SVG grain at 180 px, a 1.5 px inner edge at 14% white, a shadow tinted with the tile's deepest stop (0 44px 70px -40px). Radius 44 px on tiles, 36 px on white cards.
- Outcomes stay flat (admit `#c42a20`, discharge `#13834c`, next step `#41544b`), as in the ebook.
- Type: Figtree only (700, 800, 900 shipped in `assets/fonts`). Display 900 at 120–132 px with −0.035em tracking; scene titles 800 at 48–56 px; labels 700 at 34–40 px; nothing under 28 px. Atkinson Hyperlegible is not on this machine, so the video uses Figtree where the app uses Atkinson (noted in REVIEW.md).
- Pictograms: the app's own stroke icons (`ICONS` in `src/parts/engine.js`), stroke 2 on a 24 grid.

OBJECTS:
- The zone map: an emerald tile with five stops on a track (Triage, You the MO, Treatment room, CCA, Review and finish), a mint fill that draws along it, and a white patient token that travels it. Same stops, icons and words as the app's home tile.
- The green slip: pale green paper, an emerald header, order lines with tick boxes, a blank queue-number tag. No names, numbers or IC numbers on it.
- The triage form, the bed board, the pathway card with its "Can still end in" chips, the outcome box, the 4-hour dial: each drawn as the thing it is, with the wording from the app.

MOTION: enter `power3.out` 0.45 s (cards deal in from 40 px below with 1.5° of turn, as in the app); moves `power2.inOut` 0.9 s; checks `back.out(2.2)` 0.32 s; outcome turns over in 0.6 s (rotateX −90° to 0); the route fill draws in 2.0 s. One hero move per beat, on the word that names it. Cuts land in the pauses between clips.

SHOTS (scene-local times come from `work/timing.json`):
1. 0.0–7.9 · Title "New to the Green Zone?" over the zone map. On "how a patient moves through it" the fill and the token run the five stops; on "what you decide" the MO stop lights mint; on "each step" each stop pulses.
2. 7.9–17.9 · One way. Token Triage → Secondary triage on "move one way"; the secondary triage card deals in; vital signs, ECG and dressing tick on their words; the "No repeats" card and its struck loop arrive on "Do not repeat"; "Unless they were missed" and the Procedure Room note follow.
3. 17.9–26.2 · You and the slip. The token reaches the mint MO stop on "you"; the green slip slides out on "green slip"; the route runs through the Red Box to the treatment room on "treatment room"; its call ring pulses on "calls"; the slip's order lines tick on "each order".
4. 26.2–36.3 · Down-triage. The triage form, then the plum "Only the EP" tile on "EP"; the down-triage row lights on "down-triage"; the two checks on "examine" and "document"; the PPP note after "document". The form carries the memo's number (HKL/JK/98/188/3(22)22); the EP rule has no written source yet (open item 7).
5. 33.7–41.8 · The pathway: Syncope, ebook p57–58, exactly as the app shows it. "Is this syncope?" → Yes → Assess → "Any dangerous cause or high-risk factor?" → None → the flat green box "Observation and discharge". The "Can still end in" chips go from three to two to one as the steps pass.
6. 41.8–51.4 · The CCA. The token moves to the CCA stop on "CCA"; the plum "Never waits outside" tile and its three chips arrive on their words; the places to bring them in follow.
7. 51.4–59.9 · IV antibiotics. The bed board (Yellow Obs, ISO, YZ Ext) dims on "no bed is free"; the CCA chair tile on "CCA chair"; the four allowed antibiotics on "four allowed antibiotics"; "Only these four" on "only".
8. 59.9–69.8 · Before discharge. The teal check ticks reassess and review; the CT brain branch grows node by node: EP review, then EMACC or EM Watch.
9. 69.8–79.1 · The EP. The obsidian dial fills to 4 hours on "within four hours"; "Unsure, or stuck?" card; the emerald "Call the EP in charge" tile on "Call".
10. 79.1–84.8 · "Right patient. Right zone. Right time." line by line over the lit zone map; hold.

CAPTIONS: burned in, one group at a time, 2–6 words, Figtree 700 at 48 px in ink on a white plate sized to the text, 70 px above the bottom edge; words turn from muted to ink as they are spoken. None over shot 10, where the words are the picture.

BANNED: a dark ground (outside the night version); glow, bloom, particles; glass cards; serif display; mono labels, numbered labels, eyebrow lines; three equal cards in a row; everything centred; everything fading in at once; text that moves while it is read; corner labels and HUD decoration; any patient name, IC number or queue number; any clinical wording not in the app's data.

QA: frames at each scene's middle and at each hero word; the outcome turn at 40.6 s; the dial at 74.3 s; the phone sheet at 360 px; `hyperframes check`; loudness about −16 LUFS, true peak −1 dBTP or lower.
