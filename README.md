# Green Zone MO Guide, version 7

A guide for medical officers working in the Green Zone (MTS levels 4–5), Emergency & Trauma Department, Hospital Kuala Lumpur. It is built for use during a shift, on a phone first. It comes from *The Clinical Pathway in Emergency for Medical Officer* (HKL ED, 2025), which stays the approved source, with department documents from the MO Drive and the triage course folder added as labelled notes. It is a reference tool only and holds no patient data.

## Links

- **Interactive app:** https://claude.ai/artifact/RgdF1Ty9z9ZWhUeKti2HZ9 (version 7 replaced version 6 at the same link on 7 Nov 2026)
- **Poster design canvas** (editable): https://claude.ai/artifact/5QaoLt2gwXut47WzhtprES

Both links are private until you share them from the page's Share menu. The QR code on poster sheet 1 opens the app link, so colleagues can open it only after the app is shared with them.

## What is in this folder

| Item | Contents |
|---|---|
| `HANDOVER.md` | How to carry on with Claude Code in this folder, with the first prompt to paste. |
| `CLAUDE.md` | What Claude Code reads first: your rules, how the app is built and tested, and how to publish it. |
| `src/` | The source: `parts/` (the page in five files), and the build, check, test and preview scripts. |
| `green-zone-pathways.html` | The built page, exactly as published. |
| `app/` | An offline copy of the app. Open `app/index.html` in Chrome or Edge, and keep the `clips`, `audio`, `img`, `media` and `poster` folders beside it. Fonts need the internet; without it the app falls back to the system font. |
| `app/clips/` | Six 8-second Flow Studio clips (1280×720): the hero loop and one for each stop of the patient journey. They are generated artwork with no text, logos or real people. |
| `app/audio/` | The narration for each journey stop, cut from the explainer's narration. |
| `flow-video/` | On the laptop only: the same six clips as they came from Flow Studio, at full quality. |
| `video/` | The narrated explainer at 1080p and 720p, and `REVIEW.md` with how it was made. |
| `poster/` | `green-zone-poster-A3.pdf` (two A3 pages, ready to print) and a PNG of each sheet. |
| `illustrations/` | The six Flow Studio illustrations (1376×768 PNG). |
| `DRIVE-RUN-THROUGH.md` | Every subfolder of the MO Drive's 3. CLINICAL folder and the triage course folder documents: what went into the guide, what did not, and why. |
| `RESEARCH.md` | What the research on point-of-care lookup and teaching video says, and how the app applies it. |

## What the app does

**During a shift**
- **Home:** search, six quick actions, your saved and recent pathways, four key numbers with Copy, a pearl for the shift from Million Ringgit Habits, what is new, and the three rules to keep.
- **Search from anywhere:** press **/** or Ctrl K (⌘K on a Mac), tap a search box, or use the Search tab on a phone. It finds pathways, rules, steps, numbers and department notes as you type.
- **Pathways:** 23 ebook pathways in six body-system groups, and 15 rules and protocols (8 on the Green Zone flow and referrals, 7 department protocols). Filter as you type, or tap a group. Star a pathway to keep it on the home screen.
- **The step screen:** one question at a time, with a progress bar and **Your path** beside it (on a phone, the answers so far as chips you can tap to go back). Checklists highlight the answer that fits what you ticked. It ends in the outcome box: red for admit, green for discharge, amber for observation, violet for referral. **Copy outcome** and **Copy advice** put the text on the clipboard. Below it, tabs for discharge advice, practical concerns, department notes, tables and references. On a keyboard, 1 to 9 answer and Backspace steps back.
- **Discharge safety check:** six things to tick before a patient goes home, and seven stop signs (for example a return within 48 hours, abdominal pain above 0, or a CT brain) that each tell you what to do instead.
- **Quick sums:** shock index, pulse pressure and heart rate against the dengue discharge criteria; child doses by weight (prednisolone, salbutamol MDI puffs, dexamethasone and nebulised adrenaline for croup, ORS); BMI, ideal and adjusted body weight. Nothing you type is saved.
- **Numbers to know:** 14 extensions and lines in four groups, each with a copy button and a link to the rule it belongs to.
- **Links you can send:** every pathway and every step has its own address, for example `#renal-colic`, `#gz-rules--ivab` or `#calc-kids`.
- **Settings:** light, dark or the device's theme; standard or large text; journey clips on or off; clear your saved list and history.
- **On a phone:** a bottom tab bar (Home, Pathways, Search, Tools, Numbers). The hero clip plays only on wide screens, to save mobile data.

**For learning and new staff**
- **The patient journey:** five stops, each with an 8-second clip, a Listen button for the narration, and links to the rules at that stop. Play all runs through them in order.
- **The tour:** the 65-second explainer with 7 chapters, a clickable transcript, speeds from 0.75 to 1.5, and resume where you stopped.
- **Quiz:** 13 questions on the Green Zone rules and the department material, each with the reason and a link to the rule.
- **What's new:** the triage course folder and MO Drive run-throughs, and what is still to confirm.
- **Wall poster** and **Sources and about**.

## What changed from version 6

- **Six documents from the triage course folder,** added as seven labelled steps on the Green Zone rules and the referral rules, each with its source and date:
  - One-way flow: no repeat ECG, dressing or vital signs after secondary triage (HKL ED one-way procedure flow; KKM MTS announcement, Jul 2026).
  - Down-triage is for the MO only, after examining the patient (memo, 4 Oct 2022).
  - IV antibiotics when no bed is free: a CCA chair, with one of four antibiotics (memo, 30 Jun 2026).
  - When the primary team is delayed: the EP may decide the admission within 4 hours (KKM MTS announcement, Jul 2026).
  - Redirect to a Klinik Kesihatan or private GP (KKM MTS announcement, Jul 2026).
  - Orthopaedic referral: the Lampiran 1 urgent criteria, on call or clinic (memo, 17 May 2024).
  - Transfer to IPR (respiratory): the criteria, exclusions and on-call line (IPR admission criteria).
- **A new design:** a sidebar on wide screens, body-system groups with icons, a step screen with Your path and tabs, outcome boxes with icons, key numbers and a pearl on the home screen, a new mark, and settings for theme, text size and clips.
- Three new quiz questions, the IPR on-call line in Numbers, and new journey links.

## Version history

- **Version 7 (7 Nov 2026):** the triage course folder documents and the new design, as above.
- **Version 6 (7 Nov 2026):** 11 topics from the MO Drive (EM Watch, admission to MAU, clinic referrals, the Yellow Zone flow, OSCC, blood tests, animal bites, infection alerts, trauma walk-ins, children in the ED, safe practice); the Asthma Zone flow from the 13 November 2025 memo; department notes on six pathways; search, saved and recent, the discharge safety check, quick sums, numbers, deep links, the phone tab bar, the journey clips and the quiz.
- **Version 5 and earlier:** the 23 ebook pathways, the Green Zone rules, the poster and the explainer.

## Flow Studio use

Six clips with Omni 1.1 Flash at 12 credits each: **72 credits** in total. No other paid generation was used.

## Still to confirm

1. How to book EM Watch: the training deck shows the recruitment step only as a picture.
2. The procedure for patients redirected to a Klinik Kesihatan or private GP.
3. Whether the EMACC SOP of 1 Feb 2018 (ext 7040, Monday to Friday 9 am to 4 pm) is still current.
4. Numbers against the current directory: Neuro Rehab 7099, the MAU 6682 / 6684 (both 2022 documents), the SCAN team line and the IPR on-call line.
5. The MERS-CoV case definition, which is not in the PUI file.
6. A readable copy of the Malaysian snakebite guideline.
