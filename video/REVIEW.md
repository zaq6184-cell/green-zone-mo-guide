# Green Zone explainer: review notes

**Files:** `green-zone-explainer-1080p.mp4` (1920×1080, 30 fps, H.264 with AAC 48 kHz stereo, 64.6 s, 5.8 MB) and `green-zone-explainer-720p.mp4` (the same video at 1280×720, 2.2 MB, used inside the app).

## What it covers

| Time | Scene | Narration |
|---|---|---|
| 0:00 | Title | New to the Green Zone? Here is how a patient moves through it, and what you decide at each step. |
| 0:08 | Patient journey | Patients move one way. Triage, then secondary triage, then ECG, irrigation or dressing if needed, and on to you. You fill in the green slip. The treatment room calls the queue number, carries out each order, and documents it. |
| 0:25 | Pathways | For the diagnosis, open its pathway. 23 ebook pathways, one question at a time, ending in the outcome box. |
| 0:36 | Waiting | Waiting for results? Send the patient to the CCA. The elderly, ACS, or anyone needing stat drugs never waits outside. |
| 0:45 | Discharge | Before discharge, reassess and review every result. After a CT brain, ask the EP to review, and book EMACC or EMWATCH follow-up. |
| 0:55 | Close | Unsure, or the disposition is stuck? Call the EP in charge. Right patient. Right zone. Right time. |

Sources: memo HKL/JK/98/188/3(31)22 (patient flow and the green slip), the "Green Zone Warrior" note in the MO Drive, memo HKL/JK/98/188/3(10)24 (reassess before admit, discharge or transfer), memo HKL/JK/98/188/3(17)23 (delayed disposition), and the HKL ED Clinical Pathway ebook (2025).

## How it was made and checked

- **Narration:** VoiceStudio, voice "Google Kira - Female - BM + EN", speed 0.86, seven clips. Each clip was transcribed back to confirm the wording. No real person's voice or face is used.
- **Motion graphics:** HyperFrames, five scenes. All on-screen text is typed, not generated, so the spelling is exact.
- **Timing:** every animation cue and caption follows the word timings found by forced alignment of the narration (pocketsphinx), and 21 sync points were checked frame by frame.
- **Sound:** integrated loudness −16.4 LUFS, true peak −1.8 dBTP, no clipping. These were measured; nobody has listened to the mix yet.
- **Captions:** burned in, timed word by word. The narration text is also in the app under "Read the narration".

## Known points

- There is no music, because no licensed track was available. Soft interface sounds mark the patient token, the queue call, the scene changes, the stamps and the final reveal.
- In the pathway scene the question cards pass quickly on purpose; the answers stay on screen as breadcrumbs.
- An automated contrast warning on one caption (about 0:32) comes from its fade-in and clears once the caption is fully on.

## Please check before showing it

1. Listen once at normal volume, especially the abbreviations ECG, CCA, ACS, CT, EP, EMACC and EMWATCH.
2. Confirm the flow with the Green Zone TL: triage, secondary triage, ECG or irrigation or dressing if needed, MO, Red Box, treatment room (PPP), CCA if needed.
3. Confirm that EMWATCH is the right name for that follow-up option.
