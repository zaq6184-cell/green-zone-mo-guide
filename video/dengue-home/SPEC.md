# Dengue at home: spec

GOAL: a patient going home with dengue, or the family member looking after them, hears and sees every line of the CPG's home care leaflet (CPG Management of Dengue in Adults, 4th edition, Appendix 5B, p105–106) once, in English or Bahasa Melayu, and finishes on the warning signs that mean "go to the hospital now". The MO plays it from the leaflet tab of the dengue CPG entry while the patient waits.

OUTPUT: HyperFrames 0.9.22, 1080 × 1080, 30 fps, H.264 with AAC. Delivered as `video/dengue-home-1080.mp4` and `video/dengue-home-ms-1080.mp4`, and 720 × 720 copies for the app (`app/media/dengue-home-720.mp4`, `app/media/dengue-home-ms-720.mp4`) with covers (`app/media/dengue-home-poster.webp`, `app/media/dengue-home-ms-poster.webp`).

TIME: the voice is the clock. The narration is the app's read-aloud take of the leaflet (VoiceStudio: "Google Kira - Female - BM + EN" at speed 0.86 in English, "Malay Kore - Female - TTS Studio" at 0.95 in Malay), recorded one leaflet line at a time, so the start of every line is known to the hundredth of a second (`work/timing-<lang>.json`, written by `work/prep.cjs`). The film opens 2.2 s before the voice, holds 0.9 s after the last word, then an end card for 7.8 s. English: 119.4 s; Malay: 112.4 s.

WORDS: the leaflet as printed, word for word, in the language of the film: the title, the three headings, every item and the warning paragraph. Nothing on screen says anything the leaflet does not, except the source line, the chip naming the CPG and appendix, and the guide's name. The end card carries the source and the MaHTAS acknowledgement exactly as the app shows them (`L.src`), in English in both films, as in the app.

LOOK:
- Ground: the dengue CPG banner loop (`dcpg`, an amber glass Aedes mosquito on dark water, Flow Studio), cropped square (`assets/bg.mp4`), pushed in from 100% to 110% over the film, under a dark scrim that deepens while the cards are up.
- Cards: white, radius 44 px, on the app's jewel colours by section: emerald for What to do, amber for What to avoid, garnet for the warning signs.
- Type: Figtree 700, 800 and 900 (in `assets/fonts`). Title 900 at 96 px (86 px in Malay); headings 800 at 60 px; items 700 at 70, 58, 52 or 48 px by length; warning signs 700 at 33 px; nothing under 30 px. On a phone the film is about 360 px wide, so 48 px on the canvas is about 16 px on screen.
- Pictures: stroke icons on a 24 grid, as in the app (bed, syringe, lungs, abdomen, droplet and stop are the app's own); the What to avoid icons are struck through. "DO NOT" and "JANGAN" are set in garnet, as printed in capitals.

MOTION: cards deal in from 40 px below with 1.5° of turn (`power3.out`, 0.45 s), as in the app. Each item arrives 0.2 s before its first word and leaves 0.5 s before the next. A dot per item marks the place in the section. The warning paragraph is read in full, then its last sentence heads the list, and each sign is added and lit as it is read; the whole list holds at the end of the section.

SOUND: the voice at -16 LUFS; the ElevenLabs bed (Eleven Music v2.5, "eleven-bed-b", calm, no vocals) under it at 0.14 volume, fading in over 1.2 s and out over the last 3.5 s.

BANNED: any wording not in the leaflet; a face or a voice of a real person; a patient name or number; text that moves while it is read; glow, particles, glass cards.

QA: `hyperframes check` clean; frames at each section's first item, the longest item, the warning paragraph, the full list and the end card; the Malay film's longest lines; the rendered loudness.

CHECKED (9 Nov 2026): every leaflet line, 24 in each language, is on screen exactly as printed, and the end card carries the source line exactly as the app shows it (compared from the scene files against `work/leaflet.json`).
