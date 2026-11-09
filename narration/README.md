# Read-aloud narration

The patient advice in the guide can be played aloud, word for word, for a patient to follow on the screen. Made on 9 Nov 2026, when Krishna asked to make the app more premium with live audio and video where it is needed.

| Clip (`app/audio/`) | What it reads | Language |
|---|---|---|
| `leaf-dengue-en.mp3`, `leaf-dengue-ms.mp3` | The dengue CPG's home care leaflet (4th edition, Appendix 5B, p105–106) | English, Bahasa Melayu |
| `leaf-cancerpain-en.mp3`, `leaf-cancerpain-ms.mp3` | The cancer pain CPG's patient leaflet (2nd edition, 2023) | English, Bahasa Melayu |
| `adv-tbi-en.mp3`, `adv-dengue-en.mp3`, `adv-asthma-en.mp3` | The Discharge advice tab of mild head injury, dengue (the ebook pathway) and the Asthma Zone | English |

The dengue leaflet's narration is also the voice of the "Dengue at home" films (`video/REVIEW.md`).

## How it is made

- **Voices:** VoiceStudio (Krishna's local service, the same engine as the `voicestudio` MCP tool), 32 steps, no `instruct`. English: the cloned voice "Google Kira - Female - BM + EN" (`e4e6e5d8`), speed 0.86 as in the explainer. Bahasa Melayu: "Malay Kore - Female - TTS Studio" (`364099c8`), speed 0.95 as in the Malay explainer. Krishna chose Kore on 10 Nov 2026, after the first Malay takes, made in the Kira clone, sounded like an English speaker reading Malay; he allows any of the five Malay TTS Studio clones (Kore, Zephyr, Charon, Fenrir, Puck), one voice within a narration.
- **Words:** `scripts/make-segments.cjs` takes the text straight from the app's data (`src/parts/data*.js`), one segment per leaflet section (the title, then each group) or half of an advice tab, and keeps each line apart: a heading, the warning paragraph, or one item. It writes `scripts/segments.json`.
- **Spoken forms, for the voice only** (`scripts/spoken-lib.cjs`; the screen keeps the printed text): acronyms spelled letter by letter (O. R. S., N. S. A. I. D.s, and in Malay N. S. A. I. D., since Malay has no plural s; NGOs as N. G. Os, because "N. G. O.s" came out with an extra syllable; FLACC as a word); "&" as "and" or "dan"; a slash between words as "or" or "atau"; ml, g and "e.g." written out; web addresses read part by part with "dot" or "titik" (moh and masp spelled, malaysianhospicecouncil as three words; in Malay the pain association's address is spelled in full, M. A. S. P. titik O. R. G. titik M. Y., the only form Kore read clearly); and every number in the Malay clips in Malay words (sifar hingga sepuluh), so the bilingual voice never reads one in English.
- **Recording and checking** (`scripts/gen-chunks.cjs`): one take per line (a line over 220 characters is split at its sentences). Each take is transcribed back with VoiceStudio's faster-whisper and compared with what it should say: English by word error rate, counting near-miss spellings as right; Malay by character error rate with spaces ignored, because the transcriber spells Malay by ear ("Dengidi" for "denggi di"). A take that reads badly is recorded again with other seeds (7, 11, 23, 41) and the best is kept. Lines are joined with 0.25 s between them. The takes are in `read-aloud/<clip>/<section>/p<line>-<part>.wav`, the joined sections in `read-aloud/<clip>/<section>.wav`, and the scores in `scripts/chunks.json`. The takes and the music masters stay on this PC (not in git).
- **Joining** (`scripts/assemble.cjs`): the sections with 0.7 s between them, levelled to −16 LUFS, encoded as mono 64 kbps MP3 into `app/audio/`. It notes where each section starts (`marks`) and each line starts (`lines`, as [seconds, section, element]) in `scripts/read-map.json`; `scripts/fill-read.cjs` writes them into `READ` in `src/parts/engine.js`.

To change a clip after its text changes: `node make-segments.cjs`, delete the takes of the lines that changed in `read-aloud/<clip>/<section>/`, then `node gen-chunks.cjs <clip>`, `node assemble.cjs <clip>`, `node fill-read.cjs` (all in `narration/scripts`), and rebuild and test the app. For the dengue leaflet, also remake the films (`video/REVIEW.md`).

## The strict check (10 Nov 2026)

Krishna heard a fault at 1:09 in the Malay film: the voice began the warning paragraph, stumbled ("Apabila dia mem…") and began again. A whole-take transcription had passed it, because the transcriber smooths over a stumble. So every take was checked again a stricter way (`scripts/check-all.cjs`): each take is cut at its own pauses into pieces of 1.5 to 6 seconds, each piece is transcribed on its own, and the joined transcript is compared with the script for its character error, its length, any phrase heard more often than the script has it, and a restart on one of its first words. All 165 voice takes in the app were checked: the 140 read-aloud lines (which are also the films' narration), the explainer tour's 20 lines in English and Bahasa Melayu, and the 5 journey stops. The results are in `scripts/check-report.json`.

Fixed after the check, each by a fresh take that passes it (`scripts/fix-takes.cjs`):
- Malay dengue leaflet, the warning paragraph ("Apabila demam mula kebah…"): the false start Krishna heard. Both films were re-rendered.
- English dengue leaflet, the heading "Dengue warning signs": the voice clipped "dengue" to "deng".
- Malay cancer pain leaflet, "Doktor anda akan mempreskripsikannya…": a stray word after "risiko".
- Malay cancer pain leaflet, the four web-address lines: re-recorded with every short part spelled (W. W. W., O. R. G., M. Y.), the only way the Kore voice read them clearly.
- English cancer pain leaflet, "Non-governmental organisations (NGOs)": the acronym came out with an extra syllable.

Flagged by the check but not faults, so left as they are: "gua sha" heard as "gua syah" (its Malay sound), "triaj" heard as "trias" in the Malay explainer (the voice says "triage", as intended), and "E.P." and "EMACC" in the Malay explainer, spelled for the voice. Average read-back error per clip after the fixes: 0.1% to 1.8%.

## Please listen before sharing

Every take was checked by a machine transcriber, not by ear. Worth a listen by a Malay speaker: the Malay web addresses near the end of the cancer pain leaflet (Dengar dalam Bahasa Melayu, from 3:23), spelled letter by letter for the voice, and "gua sha" in the Malay dengue leaflet. ("Sakit perut yang teruk" and "Pitam", doubtful in the first Malay takes, read back cleanly in the Kore takes.)
