# Green Zone explainer, version 8: review notes

**Files:** `green-zone-explainer-1080p.mp4` (1920×1080, 30 fps, H.264 with AAC 48 kHz stereo, 88.9 s, about 12.4 MB) and `green-zone-explainer-720p.mp4` (the same film at 1280×720, about 3.4 MB, used inside the app as `app/media/green-zone-explainer-720p.mp4`). The cover image is the closing frame (`app/media/explainer-poster.webp`). The editable project is `video/explainer/`.

This replaces the 64.6-second version 7 film, which is still in the first git commit if it is ever needed.

## What it covers

| Time | Scene | Narration | Source |
|---|---|---|---|
| 0:00 | New to the Green Zone? | New to the Green Zone? Here is how a patient moves through it, and what you decide at each step. | The app's zone map (five stops) |
| 0:08 | Patients move one way | Patients move one way. Secondary triage does the vital signs, ECG and dressing. Do not repeat them unless they were missed. | HKL ED one-way procedure flow (Green Zone); KKM MTS announcement, Jul 2026 |
| 0:18 | The green slip and the treatment room | Then on to you. Fill in the green slip. The treatment room calls the queue number and carries out each order. | Memo HKL/JK/98/188/3(31)22, 20 Dec 2022 |
| 0:26 | Down-triage: the EP allows it | Only the EP can allow a down-triage. Before you down-triage, examine the patient properly, then document it on the triage form. | Memo HKL/JK/98/188/3(22)22, 4 Oct 2022 (the MO examines first and documents it on the triage form; the PPP makes sure). The EP's permission: Krishna's correction, 8 Nov 2026; the memo does not mention it, so its written source is open item 7 |
| 0:36 | Open the pathway | For the diagnosis, open its pathway: one question at a time. Each step shows how it can still end. | Ebook p57–58 (Syncope), shown exactly as the app shows it |
| 0:45 | Waiting for results: the CCA | Waiting for results? Send the patient to the CCA. The elderly, ACS, or anyone needing stat drugs never waits outside. | "Green Zone Warrior" note, MO Drive; memo (31)22 |
| 0:55 | IV antibiotics and no bed | Needs IV antibiotics, and no bed is free? Use a CCA chair, with one of the four allowed antibiotics only. | IV antibiotic memo, 30 Jun 2026 |
| 1:04 | Before discharge | Before discharge, reassess and review every result. After a CT brain, ask the EP to review, then book EMACC or EM Watch. | Memo HKL/JK/98/188/3(10)24, 9 Jul 2024; "Green Zone Warrior" note |
| 1:14 | When to call the EP | Primary team delayed? The EP may decide the admission within four hours. Unsure, or stuck? Call the EP in charge. | KKM MTS announcement, Jul 2026; memo HKL/JK/98/188/3(17)23, 1 Sep 2023 |
| 1:23 | Close | Right patient. Right zone. Right time. | |

On screen, each rule names its source and date, as the app does. The pathway scene uses the ebook's syncope steps word for word: "Is this syncope?", Yes, Assess, "Any dangerous cause or high-risk factor?", None, then the green box "Observation and discharge".

Left out on purpose:
- **Redirecting to a Klinik Kesihatan or private GP:** the HKL procedure is still to be confirmed (open item 2).
- **The orthopaedic and IPR referral criteria:** too detailed for a 90-second tour. They are in the guide.

## How it was made and checked

- **Narration:** VoiceStudio, voice "Google Kira - Female - BM + EN" at speed 0.86, ten clips (one per scene). The clips are saved in `Downloads\Music\Voice Studio` (moved there from `Documents\hkl-football-medicine-2026` on 8 Nov 2026): c7f45ea1, d083cd83, 179ad132, 711350fd, 9d95391f, 5cc3b8f4, c2b2e422, a05f795a, 6b2cebfb and 402fed98. Scene 4 was re-recorded on 8 Nov 2026 after the down-triage correction (01b26dba). They are copied into `video/explainer/assets/vo/`. Each clip was transcribed back and matches the script word for word. The transcriber spelled EMACC as "EMAC". No real person's voice or face is used.
- **Word timings:** whisper.cpp (the large-v3-turbo model already on this laptop) gave word times. Word starts were then corrected against the pauses in the audio, and doubtful starts were checked against the speech energy. Every animation and caption lands on the word that names it.
- **Motion graphics:** HyperFrames 0.9.22. `SPEC.md` sets the look and the shots. `work/build.cjs` writes the ten scenes and the captions from `work/timing.json`. All on-screen text is typed from the app's data, so the spelling is exact.
- **Look:** the version 8 design (see `DESIGN.md`):
  - a pearl background;
  - tiles coloured as in the app: emerald for the zone, sapphire for a pathway, plum for a rule, teal for the discharge check, obsidian for the EP;
  - the ebook's flat outcome colours;
  - the app's own pictograms.
  
  The film uses Figtree only. Atkinson Hyperlegible, the app's reading font, is not on this laptop, and fetching it would have been a download nobody asked for.
- **Checks:** `hyperframes check` passes (lint, runtime, layout, motion, contrast, craft and audio). One warning is kept on purpose: the captions file is long, because one file holds all 44 caption groups so they sit on one track. Every scene, every cut and the phone-width sheet were looked at. Three rounds of fixes followed:
  - six scenes opened half empty, so each now starts with its main object centred, which moves aside when the next one arrives;
  - one label lost its spacing;
  - five lines were on screen too briefly to read, so they now arrive earlier or hold longer.
- **Sound:** narration only. There is no music, because no licensed track is available, and no interface sounds, because synthesised tones were ruled out. Loudness was measured: −16.0 LUFS integrated, true peak −1.8 dBFS. It was measured, not listened to.
- **Captions:** burned in, 2 to 6 words at a time, with each word darkening as it is spoken. There are none over the closing tagline, which is already on screen. The full narration with times is the tour's transcript in the app.

## Please check before showing it

1. Listen once at normal volume, especially the abbreviations ECG, CCA, ACS, CT, EP, EMACC and EM Watch (the transcriber heard EMACC as "EMAC").
2. Confirm the flow with the Green Zone TL: triage, secondary triage, the MO, the Red Box, the treatment room (PPP), and the CCA only if needed.
3. Confirm the name of the follow-up: the narration says "EM Watch", as the app's EM Watch entry does. The ebook prints "EMWATCH", and the syncope outcome on screen keeps the ebook's spelling.

## To change it

Run these in `video/explainer`, with Node and ffmpeg.

1. Change a line: make the new clip in VoiceStudio with the same voice and speed, copy it over `assets/vo/sNN.wav`, and update its text in `SCENES` in `work/timing.cjs`.
2. Word times: `whisper-cli -m ggml-large-v3-turbo-q5_0.bin -f sNN-16k.wav -l en -ml 1 -sow -oj -of work/sNN -dtw large.v3.turbo`, run on a 16 kHz mono copy. Then run `node work/timing.cjs` and `node work/build.cjs`.
3. Check and render: `npx --yes hyperframes@0.9.22 check`, then `npx --yes hyperframes@0.9.22 render --crf 20 -o work/render-1080.mp4`.
4. Make the 720p copy with ffmpeg: `scale=1280:720`, libx264 CRF 25, AAC 96k and `+faststart`.
5. Copy `CHAPTERS` and `CAPTIONS` from `work/app-tour.json` into `src/parts/engine.js`.

The weakest shot is the IV antibiotics scene. It holds the bed board, the chair and the drug list in eight seconds. With more time, it would show the list alone after the chair.

The generator gained its Malay switch after this render. The English files it writes now differ only by two wrappers (around the Red Box chip and the "Results pending" chip) that move nothing on screen. A re-render gives the same picture, though not the same bytes.

## Malay version (Bahasa Melayu)

**Files:** `green-zone-explainer-ms-1080p.mp4` (1920×1080, 30 fps, H.264 with AAC 48 kHz stereo, 94.7 s, about 13.0 MB) and `green-zone-explainer-ms-720p.mp4` (1280×720, about 3.7 MB, in the app as `app/media/green-zone-explainer-ms-720p.mp4`, with the cover `app/media/explainer-ms-poster.webp`). In the app, the tour's Narration switch plays it with its own chapters and transcript, and remembers the choice. The project is `video/explainer-ms/`, generated by the same scripts as the English film: `node work/timing.cjs ms` and `node work/build.cjs ms`, run in `video/explainer`.

- **Voice:** VoiceStudio, the cloned voice "Malay Kore - Female - TTS Studio" (id 364099c8), language ms, speed 0.95, no `instruct`. This follows Krishna's rule of 8 Nov 2026 (narration with VoiceStudio's cloned voices, one engine per film). The first Malay version used Google's Gemini voice Kore through Flow Studio; all ten lines were re-recorded, so the film no longer mixes engines.
- **The takes:** saved in `C:\Users\user\Downloads\Music\Voice Studio`, and copied into `video/explainer-ms/assets/vo/`. Lines 1 to 10: a4e537e4, 3e95a905, ed279b35, 1d984627, e21c0029, 381fb511, 55e09b4c, 4ccc7442, bf3e162d and bf0560cd. The earlier Google takes are still in `C:\Users\user\flow-mcp-out\green-zone-ms` and are not used.
- **Spelling for the voice:** the narration text sent to VoiceStudio spells "E.P." or "Ee Pee" (lines 4, 8 and 9) so the clone says "ee-pee" rather than "ay-pee", "Ai Vee" (line 7) for IV, and "triage" (lines 2 and 4). The captions and the script below keep the normal spellings: EP, IV, triaj.
- **Length:** 1:35, against the English 1:29. The clone speaks a little faster than Google's voice, which made 1:53.

### The script (a proposed translation: please check it)

| # | English | Bahasa Melayu |
|---|---|---|
| 1 | New to the Green Zone? Here is how a patient moves through it, and what you decide at each step. | Baru di Zon Hijau? Inilah cara pesakit bergerak melaluinya, dan apa yang anda putuskan pada setiap langkah. |
| 2 | Patients move one way. Secondary triage does the vital signs, ECG and dressing. Do not repeat them unless they were missed. | Pesakit bergerak sehala. Triaj sekunder mengambil tanda vital, membuat ECG dan balutan. Jangan ulanginya, kecuali jika ada yang tertinggal. |
| 3 | Then on to you. Fill in the green slip. The treatment room calls the queue number and carries out each order. | Kemudian, pesakit datang kepada anda. Isi slip hijau. Bilik rawatan memanggil nombor giliran dan melaksanakan setiap arahan. |
| 4 | Only the EP can allow a down-triage. Before you down-triage, examine the patient properly, then document it on the triage form. | Hanya EP boleh membenarkan turun triaj. Sebelum turun triaj, periksa pesakit dengan teliti, kemudian catatkannya dalam borang triaj. |
| 5 | For the diagnosis, open its pathway: one question at a time. Each step shows how it can still end. | Untuk diagnosis, buka laluan klinikalnya: satu soalan pada satu masa. Setiap langkah menunjukkan kesudahan yang masih mungkin. |
| 6 | Waiting for results? Send the patient to the CCA. The elderly, ACS, or anyone needing stat drugs never waits outside. | Menunggu keputusan? Hantar pesakit ke CCA. Warga emas, ACS, atau sesiapa yang memerlukan ubat stat, tidak boleh dibiarkan menunggu di luar. |
| 7 | Needs IV antibiotics, and no bed is free? Use a CCA chair, with one of the four allowed antibiotics only. | Perlukan antibiotik IV, tetapi tiada katil kosong? Gunakan kerusi di CCA, dengan salah satu daripada empat antibiotik yang dibenarkan sahaja. |
| 8 | Before discharge, reassess and review every result. After a CT brain, ask the EP to review, then book EMACC or EM Watch. | Sebelum discaj, nilai semula pesakit dan semak setiap keputusan. Selepas CT otak, minta EP menyemak, kemudian buat temujanji EMACC atau EM Watch. |
| 9 | Primary team delayed? The EP may decide the admission within four hours. Unsure, or stuck? Call the EP in charge. | Pasukan primer lewat? EP boleh memutuskan kemasukan ke wad dalam masa empat jam. Tidak pasti, atau buntu? Hubungi EP yang bertugas. |
| 10 | Right patient. Right zone. Right time. | Pesakit yang tepat. Zon yang tepat. Masa yang tepat. |

How the translation was done:
- **Department words reused:** Zon Hijau, slip hijau, discaj and kemasukan ke wad, as the department's own memos write them.
- **Kept as the department says them:** MO, PPP, EP, CCA, ECG, ACS, MTS, IV, CT, EMACC, EM Watch, Yellow Obs, ISO, YZ Ext and the drug names.
- **Dates:** Malay month forms, with memo numbers unchanged.

The words to check most:
- **Triage terms:** triaj, triaj sekunder, turun triaj (down-triage).
- **Clinical words:** pencucian luka (wound irrigation), sejarah terfokus (focused history), arahan (orders), Kotak Merah (Red Box).
- **People:** EP yang bertugas (EP in charge), pasukan primer (primary team).
- **The pathway line:** kesudahan yang masih mungkin (how it can still end).

**On screen:** the film's own labels are in Malay, and each rule shows its source as "Sumber: …". Scene 5 shows the app's syncope screen in English, as the app and the ebook print it, so the ebook's wording is not rewritten.

### Checks

- **Transcripts:** each Malay take was transcribed back and matches the script. Some differences are only the transcriber's spellings of a Malaysian accent: EP as "IP" or "EEP", CT as "siti", wad as "Watt", primer as "Primer", temujanji as "temu janji".
- **What the transcriber was unsure of:** "triage" in line 2 came back as "Trias", "Terias" or "Triad" in every take, and in line 4 as "triash", and EMACC as "EMAC" or "EMC". Takes were retaken until EP and IV came back right; please listen to line 2 and to EMACC.
- **`hyperframes check`:** passes with no layout or craft notes. Two frame fixes followed the review: a chip that wrapped onto two lines, and a caption that left one word alone on its line.
- **Loudness:** −15.7 LUFS integrated, true peak −1.8 dBFS. It was measured, not listened to.

Please listen to the Malay version once, for the wording and for how the voice says the abbreviations and "triage".

To change a Malay line:
1. Make a new take with VoiceStudio `generate_speech`: profile 364099c8 (Malay Kore), language ms, speed 0.95, no `instruct`, with the spellings above.
2. Convert it to 48 kHz mono WAV in `video/explainer-ms/assets/vo/sNN.wav`, and make a 16 kHz copy in `video/explainer/work/ms/`.
3. Run whisper with `-l ms` and update the line in `SCENES` (ms) in `work/timing.cjs`.
4. Run `node work/timing.cjs ms` and `node work/build.cjs ms`.
5. Check and render in `video/explainer-ms`.
6. If the new wording moves a cue word, update `IDX.ms` in `work/build.cjs`.
