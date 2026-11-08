# Green Zone MO Guide, version 8

A guide for medical officers working in the Green Zone (MTS levels 4–5), Emergency & Trauma Department, Hospital Kuala Lumpur. It is built for use during a shift, on a phone first. It comes from *The Clinical Pathway in Emergency for Medical Officer* (HKL ED, 2025), which stays the approved source, with department documents from the MO Drive and the triage course folder added as labelled notes. It is a reference tool only and holds no patient data.

## Links

- **Interactive app:** https://claude.ai/artifact/RgdF1Ty9z9ZWhUeKti2HZ9 (version 8 replaced version 7 at the same link on 8 Nov 2026, and day and night was added the same day).
- **Poster design canvas** (editable): https://claude.ai/artifact/5QaoLt2gwXut47WzhtprES
- **Source code** (public): https://github.com/zaq6184-cell/green-zone-mo-guide, with the offline copy in `app/`.
- **Web app** (public): https://zaq6184-cell.github.io/green-zone-mo-guide/, the same app served by GitHub Pages. It updates itself when a new build reaches `main` on GitHub.

The two claude.ai links are private until you share them from the page's Share menu; the GitHub repository and the GitHub Pages web app are public. The QR code on poster sheet 1, and the links the app copies, open the public web app, so anyone can use them.

## What is in this folder

| Item | Contents |
|---|---|
| `HANDOVER.md` | How to carry on with Claude Code in this folder, with the first prompt to paste. |
| `CLAUDE.md` | What Claude Code reads first: your rules, how the app is built and tested, and how to publish it. |
| `src/` | The source: `parts/` (the page in five files), and the build, check, test and preview scripts. |
| `green-zone-pathways.html` | The built page, exactly as published. |
| `app/` | An offline copy of the app. Open `app/index.html` in Chrome or Edge, and keep the `clips`, `audio`, `img`, `media`, `poster` and `tiles` folders beside it. Fonts need the internet; without it the app falls back to the system font. |
| `app/clips/` | Six 8-second Flow Studio clips (1280×720): the hero loop and one for each stop of the patient journey. They are generated artwork with no text, logos or real people. |
| `app/audio/` | The narration for each journey stop, cut from the explainer's narration. |
| `flow-video/` | The same six clips as they came from Flow Studio, at full quality, and the seventeen tile loops in `tiles/`. |
| `video/` | The narrated explainer at 1080p and 720p in English, and in Bahasa Melayu (`-ms-`), each also in night colours (`-night-`), `REVIEW.md` with how they were made and checked, and the HyperFrames projects `explainer/` (English, and the shared generator), `explainer-ms/` (Malay), and `explainer-night/` and `explainer-ms-night/` (night). |
| `poster/` | `green-zone-poster-A3.pdf` (two A3 pages, ready to print), a PNG of each sheet, a night PNG of each (for screens; the printed sheets stay in day colours), and `src/` (`poster.html` and `render.js`, which builds both themes, refuses to write if anything overflows or the QR code differs, and rewrites only the files that changed). |
| `illustrations/` | The six Flow Studio illustrations (1376×768 PNG), and the seventeen tile stills in `tiles/`. |
| `DRIVE-RUN-THROUGH.md` | Every subfolder of the MO Drive's 3. CLINICAL folder and the triage course folder documents: what went into the guide, what did not, and why. |
| `RESEARCH.md` | What the research on point-of-care lookup and teaching video says, and how the app applies it. |

## What the app does

**During a shift**
- **Home:** a bento of tiles, each showing real data from the guide: the zone map (five stops of a Green Zone visit; tap one for what happens there and the rules that apply), Code Blue and Code Stroke with Copy, quick routes with how each pathway can end, your saved and recent pathways, the number of pathways and rules, the discharge check, quick sums, three more numbers, a pearl for the shift, the three rules to keep and what is new.
- **Search from anywhere:** press **/** or Ctrl K (⌘K on a Mac), tap a search box, or use the Search tab on a phone. It finds pathways, rules, steps, numbers and department notes as you type.
- **Moving tiles:** each topic tile, and Code Blue and Code Stroke, shows a glass sculpture of its body system made in Flow Studio, moving in a quiet 8-second loop (the heart beats, the lungs breathe). The other home tiles move too: a book, a shield, a doorway, a gauge, a compass and a pearl. So do the Pathways section bars and the Shift tools headers. A loop plays only while its tile is on screen, and a phone plays at most six at once; Settings, Moving tiles turns them off.
- **Pathways:** 23 ebook pathways in six body-system groups, and 15 rules and protocols (8 on the Green Zone flow and referrals, 7 department protocols). Filter as you type, or tap a group. Star a pathway to keep it on the home screen.
- **The step screen:** one question per card, with a progress bar and **Your route** beside it (on a phone, the answers so far as chips you can tap to go back). **Can still end in** shows which outcome boxes are still possible from where you are. Checklists highlight the answer that fits what you ticked. It ends in the outcome card, in the ebook's colours: red for admit, yellow for observation, green for discharge, violet for referral. **Copy outcome** and **Copy advice** put the text on the clipboard. Below it, tabs for discharge advice, practical concerns, department notes, tables and references. On a keyboard, 1 to 9 answer and Backspace steps back.
- **Whole pathway:** every step of a pathway on one sheet, numbered, with each answer pointing to the step it leads to. Your route is lit, and the outcomes you can no longer reach are dimmed. Tap any step to go straight to it.
- **Discharge safety check:** six things to tick before a patient goes home, shown on a route meter, and seven stop signs (for example a return within 48 hours, abdominal pain above 0, or a CT brain) that each tell you what to do instead.
- **Quick sums:** shock index, pulse pressure and heart rate against the dengue discharge criteria, each drawn on a scale with those thresholds; child doses by weight (prednisolone, salbutamol MDI puffs, dexamethasone and nebulised adrenaline for croup, ORS); BMI on a scale with the 27.5 threshold, ideal and adjusted body weight. Nothing you type is saved.
- **Numbers to know:** 14 extensions and lines in four groups, each with a copy button and a link to the rule it belongs to.
- **Links you can send:** every pathway and every step has its own address, for example `#renal-colic`, `#gz-rules--ivab` or `#calc-kids`.
- **Day and night:** a switch at the top of the home screen turns the night colours on and off. In night colours the tour plays a night version of the film and the poster page shows night versions of the sheets.
- **Settings:** light, dark or the device's theme (the same setting as the Day and Night switch; Auto follows the device again); standard or large text; moving tiles on or off; journey clips on or off; clear your saved list and history.
- **On a phone:** a floating tab bar (Home, Pathways, Search, Tools, Numbers). No video plays on the home screen, to save mobile data.

**For learning and new staff**
- **First-shift intro:** four quick screens with drawn, animated pictures: search, one question at a time, the one-way zone and the tools. The home screen offers it until you have seen it.
- **The patient journey:** five stops, each with an 8-second clip, a Listen button for the narration, and links to the rules at that stop. Play all runs through them in order.
- **The tour:** the 89-second explainer (rebuilt for version 8 in the new look, with the version 7 rules), in English or Bahasa Melayu (1:35) with the Narration switch under the video, in day or night colours to match the guide. Each language has 9 chapters, a clickable transcript, speeds from 0.75 to 1.5, and resume where you stopped.
- **Quiz:** 13 questions on the Green Zone rules and the department material, each with the reason and a link to the rule.
- **What's new:** the triage course folder and MO Drive run-throughs, and what is still to confirm.
- **Wall poster** and **Sources and about**.

## What changed from version 7

- **A new design, chosen from three live prototypes:** a premium bento. Each area has its own jewel colour (emerald for the zone, sapphire for pathways, plum for rules, garnet for emergencies, teal for tools, bronze for quick sums, champagne for the shift's pearl, obsidian for the menu), with a soft sheen that catches the light under the pointer. Outcomes keep the ebook's own colours. Figtree for headings, Atkinson Hyperlegible Next for reading and Atkinson Hyperlegible Mono for numbers and doses, chosen because they keep 1, l and I, and 0 and O, apart.
- **The zone map** on the home screen, **whole-pathway maps**, **Can still end in** on every step, **visual shift tools** (a route meter and scales) and a **first-shift intro**.
- No clinical content changed: every pathway, rule, number and threshold is as in version 7.

## What changed from version 6 to version 7

- **Six documents from the triage course folder,** added as seven labelled steps on the Green Zone rules and the referral rules, each with its source and date:
  - One-way flow: no repeat ECG, dressing or vital signs after secondary triage (HKL ED one-way procedure flow; KKM MTS announcement, Jul 2026).
  - Down-triage: only the EP can allow it (since 8 Nov 2026; written source to be confirmed). The MO examines the patient properly first and documents it on the triage form (memo, 4 Oct 2022).
  - IV antibiotics when no bed is free: a CCA chair, with one of four antibiotics (memo, 30 Jun 2026).
  - When the primary team is delayed: the EP may decide the admission within 4 hours (KKM MTS announcement, Jul 2026).
  - Redirect to a Klinik Kesihatan or private GP (KKM MTS announcement, Jul 2026).
  - Orthopaedic referral: the Lampiran 1 urgent criteria, on call or clinic (memo, 17 May 2024).
  - Transfer to IPR (respiratory): the criteria, exclusions and on-call line (IPR admission criteria).
- **A new design:** a sidebar on wide screens, body-system groups with icons, a step screen with Your path and tabs, outcome boxes with icons, key numbers and a pearl on the home screen, a new mark, and settings for theme, text size and clips.
- Three new quiz questions, the IPR on-call line in Numbers, and new journey links.

## Version history

- **Moving home tiles (9 Nov 2026, not yet published):** loops on the other six home tiles, the Pathways section bars and the Shift tools headers; a phone plays at most six loops at once.
- **Public web app (8 Nov 2026):** the app on GitHub Pages. The QR code on poster sheet 1 and the app's Copy link now open it instead of the private claude.ai link.
- **Moving tiles (published 8 Nov 2026):** Flow Studio glass sculptures and loops on the topic tiles, Code Blue and Code Stroke, with the Moving tiles setting.
- **Day and night (published 8 Nov 2026):** the home Day and Night switch, and night versions of both explainer films and both poster sheets. In dark mode the tile shadows now turn black instead of glowing.
- **Version 8 (published 8 Nov 2026):** the premium bento redesign, the zone map, whole-pathway maps, visual tools and the first-shift intro, as above.
- **Version 7 (7 Nov 2026):** the triage course folder documents and the new design, as above.
- **Version 6 (7 Nov 2026):** 11 topics from the MO Drive (EM Watch, admission to MAU, clinic referrals, the Yellow Zone flow, OSCC, blood tests, animal bites, infection alerts, trauma walk-ins, children in the ED, safe practice); the Asthma Zone flow from the 13 November 2025 memo; department notes on six pathways; search, saved and recent, the discharge safety check, quick sums, numbers, deep links, the phone tab bar, the journey clips and the quiz.
- **Version 5 and earlier:** the 23 ebook pathways, the Green Zone rules, the poster and the explainer.

## Flow Studio use

Six journey clips with Omni 1.1 Flash at 12 credits each: **72 credits**. On 8 Nov 2026, eleven 8-second tile loops with Omni 1.1 Flash: Flow reported 12 credits each (**132 credits**), while the account balance fell from 896 to 814. Later on 8 Nov 2026, six more tile loops for the home tiles: **72 credits** (814 to 742). The stills (Nano Banana) cost nothing. No other paid generation was used.

## Still to confirm

1. How to book EM Watch: the training deck shows the recruitment step only as a picture.
2. The procedure for patients redirected to a Klinik Kesihatan or private GP.
3. Whether the EMACC SOP of 1 Feb 2018 (ext 7040, Monday to Friday 9 am to 4 pm) is still current.
4. Numbers against the current directory: Neuro Rehab 7099, the MAU 6682 / 6684 (both 2022 documents), the SCAN team line and the IPR on-call line.
5. The MERS-CoV case definition, which is not in the PUI file.
6. A readable copy of the Malaysian snakebite guideline.
