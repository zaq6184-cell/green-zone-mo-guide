# Green Zone MO Guide

A phone-first reference for medical officers (MOs) and house officers (HOs) working in the Green Zone (MTS levels 4 and 5) of the Emergency & Trauma Department, Hospital Kuala Lumpur. The owner is Krishna, an MO in that department. MOs open it mid-shift on a phone, with little time per question, so judge every change by on-shift use first: fast lookup, one tap to an answer, a phone layout and little mobile data. The journey, tour, quiz and poster are extras for new staff.

- **Live app:** https://claude.ai/artifact/RgdF1Ty9z9ZWhUeKti2HZ9 (version 8 with day and night, moving tiles and the calculators; last published 9 Nov 2026 as artifact version 1794185959-9ecd, 84 files). It is private to Krishna until he shares it from the page's Share menu.
- **GitHub:** https://github.com/zaq6184-cell/green-zone-mo-guide (the `origin` remote, branch `main`), public since 8 Nov 2026 by Krishna's choice. Anything pushed there is public, including the ebook pathways, the department notes and the on-call numbers, so a push is an external change: ask Krishna first, every time.
- **Web app on GitHub Pages:** https://zaq6184-cell.github.io/green-zone-mo-guide/, public since 8 Nov 2026. `.github/workflows/pages.yml` publishes the `app/` folder there on every push to main that changes `app/` (or by hand from the repository's Actions tab), so pushing a new build also republishes this site. The poster's QR code and the app's Copy link point here.
- **Version 8** (live since 8 Nov 2026): a premium bento redesign Krishna chose from three live prototypes, with a zone map, whole-pathway maps, "Can still end in" on every step, visual shift tools and a first-shift intro. The explainer is rebuilt (86 s, with the version 7 rules), the tour can play it in English or Bahasa Melayu (the Narration switch under the video), and both poster sheets are redrawn. No clinical content changed.
- **Day and night** (live since 8 Nov 2026, artifact version 1794136884-40ac): a Day and Night switch on the home screen (`#daynight`, the same setting as Settings → Theme), night versions of both explainer films that the tour plays in night colours, and night versions of both poster sheets that the poster page shows in night colours. The sheets on the wall keep the day colours. Dark mode's tinted tile shadows now turn black (the `--shade-k` token), as DESIGN.md says. No clinical content changed.
- **Moving tiles** (live since 8 Nov 2026, artifact version 1794149213-94a5 and the public web app): Flow Studio glass sculptures on the nine topic tiles and on Code Blue and Code Stroke, as stills (`app/tiles/<key>.webp`) and 7 to 8-second loops (`app/tiles/<key>.mp4`). A loop plays only while its tile is on screen and Settings, Moving tiles is on (default on, off with reduced motion or the browser's data saver). On Code Blue and Code Stroke the picture is a quiet 40% background so the extensions read at a glance.
- **Moving home tiles** (live since 9 Nov 2026, artifact version 1794156392-9dae and the public web app): six more stills and loops, for the other home tiles: Pathways (`paths`, a glass book), Rules and protocols (`rules`, a shield), Discharge check (`dc`, a doorway), Quick sums (`calc`, a gauge), First shift (`intro`, a compass) and the Pearl tile (`tip`, a pearl in its shell). The Shift tools headers reuse `dc` and `calc`, and the Pathways section bars carry their topic's picture. All 17 keys are in `TILE_KEYS` in `engine.js`. A phone plays at most six loops at once (`TILE_MAX`, twelve on wider screens), the most visible first.
- **Calculators** (live since 9 Nov 2026, artifact version 1794163133-e657 and the public web app): a Calculators view (`#calc`) replaces Quick sums. Krishna asked on 9 Nov 2026 for PEMCalc's features (https://pemcalc.com, a Malaysian paediatric calculator suite) in the app, and chose to build only from our own sources, with links out for the rest. Twelve calculators in six groups, each naming its source: Dengue (shock index, adjusted weight), Doses (analgesia by weight, anticoagulant for a confirmed DVT, total daily insulin), Scores (CURB-65, Wells), Pain and calm (FLACC, PAINAD and CPOT; BARS and RASS), Head injury (the mild TBI CT and discharge criteria) and Kids (child doses, the SOAP dehydration check). Where a source stops (exactly 50 kg, a creatinine clearance of exactly 30, the basal-bolus split, which SOAP band is moderate, RASS actions), the calculator says so instead of choosing. Five children's tools our sources do not cover link to PEMCalc, labelled as an outside site: PRAM, Westley croup, vital signs by age, PECARN and paediatric GCS. Nothing from PEMCalc is copied: it has no reuse licence. The weight is shared between calculators in memory only. `CALC_FACTS` in `engine.js` lists the source phrase behind each number, and the test fails if one goes missing from the pathway data. The six group tiles carry Flow Studio stills and loops (`kids`, `doses`, `scores`, `calm`, `head`, `dengue`).
- **MDCalc round** (live since 9 Nov 2026, artifact version 1794185959-9ecd and the public web app): Krishna asked for MDCalc's emergency calculators (https://www.mdcalc.com) and kept the PEMCalc rule: our sources in the app, links for the rest. Six more calculators from the ebook: the chest pain Obsess protocol check (`obsess`), the syncope risk check (`syncope`), SVT with esmolol by weight and the drug table (`svt`), hypertensive urgency with the ED drug table and contraindications (`htn`), paracetamol overdose by hours or clock time since ingestion (`paraod`) and the anaphylaxis drugs with fluids by weight (`anaph`). Two new groups, Heart (teal, a glass stethoscope, `cardio`) and Poisoning and allergy (obsidian, an apothecary bottle, `tox`); Head injury became Injuries. Thirteen MDCalc links, taken from MDCalc's own sitemap and checked to open: TIMI (UA/NSTEMI) and ABCD2, which the ebook uses but does not define; creatinine clearance (Cockcroft-Gault) for the anticoagulant; GCS; Wells for PE; PERC; QTc; Alvarado; Centor; Canadian C-spine; NEXUS; Ottawa ankle and knee. HEART is left out because the department's chest pain route uses TIMI through the Obsess protocol. REA (Krishna's reverse-engineering toolkit) was not used on PEMCalc or MDCalc: neither has a reuse licence, and rule 8 rules out their content anyway.
- **Content:** 23 ebook pathways and 15 rules and protocols (8 flow, 7 protocols), shift tools, 18 calculators, 14 key numbers, a five-stop patient journey, an 89-second tour (also in Bahasa Melayu; both in day and night colours), a 13-question quiz, a four-screen first-shift intro, a What's new page and the wall poster.

## Standing rules

These are Krishna's instructions. Follow them exactly, and quote them back if a request conflicts with one.

1. **"Ask before every external change."** Ask Krishna before you publish or republish the artifact, write to Google Drive, post or send anything, or change anything outside this folder. Editing files in this folder is fine.
2. **No paid generation without his go-ahead for that job** (Flow Studio, Higgsfield, Hugging Face, ElevenLabs). Past spending is not a budget. Flow use so far: 31 clips. The 6 journey clips cost 72 credits; the 11 tile loops (8 Nov 2026) were reported by Flow at 12 credits each (132), while the balance fell from 896 to 814; the 6 home-tile loops (8 Nov 2026) cost 72 (814 to 742); the 6 calculator group loops (9 Nov 2026) cost 72 (742 to 670); the 2 MDCalc-round group loops (9 Nov 2026) cost 24 (670 to 646). Stills (Nano Banana) cost 0.
3. **"Do not generate/imitate face/voice of YBhg. Datuk Mahathar (live footage only)."** Documents he signed may be cited as sources only.
4. **Reference tool only.** No patient data, no patient tracking, nothing that stores what a user types about a patient. The calculators and the discharge check save nothing.
5. **The ebook is the approved source:** *The Clinical Pathway in Emergency for Medical Officer*, Emergency & Trauma Department, HKL (2025), 23 conditions, written by HKL emergency physicians. Build its pathways as written, with its page numbers. Do not rewrite its clinical content. Review points for its editors are kept apart (https://claude.ai/artifact/JabPwwuoZwTqt4kBaEQc3m) and are not blockers.
6. **Department documents** (memos, SOPs, Drive notes, posters) go in only as clearly labelled notes, each with its source and date.
7. **Never copy:**
   - the real patient name and IC number on the sample slip in the 2022 Green Zone memo;
   - the named specialist's personal mobile number in the MERS PUI flowchart;
   - the consultants' registration numbers on the MAU FLOW CHART;
   - the outdated 2009 adolescent prophylaxis regimens in the MOH child abuse guideline.
8. **No clinical content from memory.** Every dose, criterion and number needs the ebook or a named department document behind it. Where neither covers a branch, say so in the node's `gap` and add the question to the open items.

## Folder layout

| Path | What it is |
|---|---|
| `CLAUDE.md` | This file. |
| `PRODUCT.md` | Product truth for design work: users, purpose, constraints, brand commitments (including the look Krishna confirmed on 8 Nov 2026). |
| `DESIGN.md` | The version 8 design system (tokens, components, motion), written from the built page. |
| `.impeccable/` | Design records, dev only: the direction contract (`surfaces/`), the three redesign prototypes (`mocks/options/`, preview with the `redesign-options` server), review screenshots. Not published. |
| `.claude/launch.json` | Preview servers for the browser pane: `guide` (the offline copy, port 8765) and `redesign-options` (port 8770). Stop `guide` before `npm test`, or run the test with another port, for example `PORT=8791 node test.js`. |
| `HANDOVER.md` | For Krishna: how to start Claude Code here, and the first prompt. |
| `README.md` | What the app does, and the version history. |
| `DRIVE-RUN-THROUGH.md` | Every MO Drive "3. CLINICAL" subfolder and the triage course folder documents: what went in, what did not, and why. |
| `RESEARCH.md` | The research behind the shift features and the tour (Ely, BMJ 1999; Brame, 2016). |
| `src/parts/` | **The source.** Edit these files, never the built pages. |
| `src/build.js`, `check-data.js`, `test.js`, `serve.js` | Build, content check, Playwright test, local preview. |
| `green-zone-pathways.html` | Built page: exactly what is published as the artifact. |
| `app/` | Built offline copy (`index.html`) plus the media it uses: `img/`, `media/`, `poster/`, `clips/`, `audio/`, `tiles/`. These media folders are the master copies. It is also what GitHub Pages serves. |
| `.github/workflows/pages.yml` | Publishes `app/` to GitHub Pages on each push to main that changes it. |
| `video/` | The narrated explainer, 1080p and 720p, `REVIEW.md` on how it was made, and `explainer/`, the HyperFrames project it is rendered from (`SPEC.md`, `work/timing.cjs` and `work/build.cjs`). `work/build.cjs` also writes `explainer-ms/` (Malay) and the night projects `explainer-night/` and `explainer-ms-night/`: run `node work/build.cjs [ms] [night]` in `video/explainer`. A night film renders silent and takes the day film's sound track; `REVIEW.md` has the steps. |
| `poster/` | The two A3 sheets as PDF and PNG (day, the printed sheets), a night PNG of each (`-night.png`, for screens only), and `src/` (`poster.html`, `render.js`): edit `poster.html`, then run `node render.js` in `poster/src`. It checks both themes (overflow, contrast, the QR code) and then writes only the files that changed: the PNGs, the PDF (day only) and the eight `app/poster/` webp files. Preview the night sheets in a browser with `poster.html#night`. The claude.ai canvas (https://claude.ai/artifact/5QaoLt2gwXut47WzhtprES) still holds the version 7 sheets. |
| `illustrations/` | The six Flow Studio illustrations as full-size PNG, and the twenty-five tile stills in `tiles/` (1376×768 JPEG). |
| `flow-video/` | The six Flow Studio clips at full quality (the app uses smaller copies in `app/clips/`), and the twenty-five tile loops at 720p in `tiles/` (the app uses 640×360 copies in `app/tiles/`; Heart, Abdomen, Infection, Pathways, Rules, Doses, Head injury and Dengue are crossfaded there into 7-second loops because their own ends did not meet). |

## Commands

Run these in `src/`. They need Node.js 18 or later. Set up the test once with `npm install` and then `npx playwright install chromium`.

```
npm run check    # content check: expect "38 entries; rules: 15" and "no errors"
npm run build    # writes ../green-zone-pathways.html and ../app/index.html
npm test         # Playwright walk-through: expect "errors: none" and "all checks passed"
npm run serve    # preview the offline copy at http://localhost:8765
npm run all      # check, build and test in one go
```

After any change in `src/parts/`: run check, build and test, then look at the screenshots in `src/shots/` for the views you touched (`d-` desktop, `p-` phone, `pd-` phone dark, `t-` tablet). The test checks for console errors, sideways scroll on every view, search, the step runner, deep links, tabs, tools, quiz, journey and settings. It also checks the version 8 features: the zone map, the whole-pathway map, "Can still end in", the route meter, the gauges and the intro; and the calculators: every route, the hub and its find, the PEMCalc links, the scores and verdicts, the shared weight, that every number is still in its source text, and that using them stores nothing. It uses the version 8 ids, so update it when you change the markup.

## How the page is built

One self-contained page with no framework and no external scripts. `build.js` joins `parts/head.html` with four scripts, in this order:

| Part | What it holds |
|---|---|
| `head.html` | The `<title>`, fonts (Figtree, Atkinson Hyperlegible Next and Atkinson Hyperlegible Mono from Google Fonts), all CSS (design tokens, the jewel tile palette, light and dark) and the static markup of the shell, the home bento and every view. |
| `data.js` | `const P = {}`, the 23 ebook pathways, and the first four rule entries: `gz-rules`, `asthma-zone`, `emacc`, `referral-rules`. |
| `data2.js` | Version 6: eleven entries from the MO Drive (`em-watch`, `mau-admission`, `outpatient-referral`, `yellow-zone`, `oscc`, `blood-tests`, `animal-bites`, `infection-alerts`, `trauma-walkins`, `children`, `safe-practice`), the 2025 Asthma Zone memo, and department notes on six pathways. |
| `data3.js` | Version 7: the triage course folder documents, added as steps on `gz-rules` (`oneway`, `down`, `ivab`, `ep4`, `kk`) and `referral-rules` (`ortho`, `ipr`). |
| `engine.js` | Everything else: icons, groups (each with a jewel colour), search, saved and recent, the router, the home bento and zone map, the step runner and whole-pathway map, tools, the calculators (`CALC_GROUPS`, `CALCS`, `CALC_LINKS` and `CALC_FACTS`: each calculator reads its checklists and tables straight from the pathway data), numbers, journey, tour, quiz, the first-shift intro, What's new, settings. The content lists for those views (journey stops, numbers, quiz, tips, Drive run-through, open items, version 8 notes, intro screens) are constants near its top. |

### Content model

Each entry is `P['<id>'] = {...}`. The id is its address (`#renal-colic`).

| Field | Meaning |
|---|---|
| `title` | Name shown everywhere. |
| `page` | Ebook pages, for example `'53–54'`. Only for ebook pathways. |
| `src` | Source and date of a rule entry, for example `'EM Watch, Aug 2023'`. |
| `grp`, `sub` | `grp:'rules'` marks a rule or protocol; `sub` is `'flow'` or `'protocol'`. Ebook pathways have neither. |
| `isnew`, `upd` | Show the New or Updated badge. |
| `lead` | One line under the title. |
| `start`, `nodes` | The first node's key, and the nodes (below). |
| `advice` | Discharge advice lines: a tab, with Copy advice. |
| `concerns` | Practical concerns: a tab. |
| `dept` | Department notes, `[{h, src, items, table?}]`: a tab, each note with its source. |
| `tables` | Reference tables, `[{title, head, rows}]`: one tab each. |
| `refs` | References: a tab. |
| `see` | See-also links, `[['#emacc', 'EMACC follow-up'], ...]`. |

A node is one of three kinds:

- **Question:** `q` and `opts: [[label, nextKey], ...]`, with optional `hint` and `info` (a list shown under the question). Add `check: 'all'`, `'any'` or `'score'` and `items` for a checklist, and the runner highlights an option from what is ticked. For `'all'` and `'any'`, put the "met" or "present" option first and the other second. A score checklist has `items: [[label, points], ...]` and `suggest: s => optionIndex`.
- **Step:** `step` (what to do), `items`, `next`. `kind: 'observe'` labels it Observation.
- **Outcome:** `end` (`'admit'`, `'discharge'`, `'observe'`, `'refer'` or `'neutral'`), `title`, `items`, optional `links` and `gap` (a source line, or what the source does not cover).

To add a **rule entry**, give it `grp:'rules'` and `sub`, and it joins the Flow or Protocols group by itself. To add an **ebook pathway**, also add its id to a group in `CATS` in `engine.js`, or it shows under Other. To add a **step to an existing entry**, do what `data3.js` does: add the node and a menu option pointing to it. Add new search words, quiz questions, numbers or tips in the constants at the top of `engine.js`. Run `npm run check` after every content change.

### Routes and storage

- Views: `#home`, `#pathways`, `#saved`, `#rules`, `#tools`, `#calc` (the calculators hub), `#calc-<id>` for each calculator (`dengue`, `weight`, `analgesia`, `anticoag`, `insulin`, `curb`, `wells`, `obsess`, `syncope`, `svt`, `htn`, `pain`, `calm`, `head`, `paraod`, `anaph`, `kids`, `soap`), `#numbers`, `#intro`, `#journey`, `#journey-1` to `#journey-5`, `#tour` (also `#video`), `#quiz`, `#new`, `#poster`, `#about`, `#search`.
- Any entry is `#<id>`, and any step of it is `#<id>--<node>`, for example `#gz-rules--ivab`. Changing an id or a node key breaks links that people have saved or sent. The QR code on poster sheet 1 and the app's Copy link (`APP_URL` in `engine.js`) open the public web app, https://zaq6184-cell.github.io/green-zone-mo-guide/.
- `localStorage` keys, all on the viewer's own device: `gz-saved`, `gz-recent`, `gz-quiz-v7`, `gz-tour-pos`, `gz-tour-pos-ms`, `gz-tour-lang`, `gz-tiles` (Moving tiles), `gz-theme` (set by Settings → Theme and by the home Day and Night switch), `gz-size`, `gz-clips`, `gz-seen`, `gz-intro`. Settings → Clear removes the saved list, recent list, quiz, both tour positions, the tour language and the intro flag.

## Rules of the artifact host

The page is published as a claude.ai artifact, which runs in a locked-down frame. Keep to these, or the page breaks for viewers:

- The published file has no doctype, `html`, `head` or `body` tags; the host adds them. It starts with `<title>Green Zone MO Guide</title>` and `<meta name="claude:viewport-fit-sides" content="cover">`. Keep that title.
- Side gutters use `max(16px, env(safe-area-inset-left, 0px))` and the right-hand equivalent. Nothing may scroll sideways at 390 px.
- Colours are tokens on `:root`, redefined in the two dark blocks (`prefers-color-scheme: dark` guarded by `:root:not([data-theme="light"])`, and `:root[data-theme="dark"]`). No colour may be defined only inside a dark block.
- Fonts only from Google Fonts. Scripts only inline, or from cdnjs, jsDelivr, unpkg or code.jquery.com pinned to an exact version. Media only as files published beside the page.
- Hash routes in plain ASCII letters, digits and hyphens. Never use `settings`, `sidebar`, `customize`, `upgrade`, `downloads` or `comment-*` as a route. No element id may equal a route name.
- Wrap every `localStorage` read and write in try/catch, and make the page work without it.
- No print button, downloads, iframes, `alert`, `confirm` or `prompt`. Sound and narration start only from a tap. Respect reduced motion.
- `tel:` links may do nothing in the viewer, so phone numbers stay as selectable text with a Copy button.

## Publishing

Publishing is an external change: ask Krishna first, every time.

1. Run `npm run all` and check the screenshots.
2. With the Artifact tool, read https://claude.ai/artifact/RgdF1Ty9z9ZWhUeKti2HZ9 first, then publish `green-zone-pathways.html` with that link as `url`, a one-sentence `description` and a short `label` (for example "v8 ..."). Leave out `icon`, so the page keeps its icon.
3. The 83 media files (`img/`, `media/`, `poster/`, `clips/`, `audio/`, `tiles/`) are already published beside the page, and stay when you publish only the page. A new or changed media file goes in `files`, mapped from its published path to its file here, for example `{"clips/stop1-triage.mp4": "app/clips/stop1-triage.mp4"}`. Version 8 (published 8 Nov 2026) replaced six of them and added two: `media/green-zone-explainer-720p.mp4`, `media/explainer-poster.webp`, `media/green-zone-explainer-ms-720p.mp4` (new), `media/explainer-ms-poster.webp` (new), `poster/sheet1.webp`, `poster/sheet1-thumb.webp`, `poster/sheet2.webp` and `poster/sheet2-thumb.webp`. The 22 tile files (`tiles/<key>.webp` and `tiles/<key>.mp4` for `all`, `heart`, `breath`, `brain`, `abdo`, `infect`, `meta`, `flow`, `prot`, `codeblue`, `codestroke`) were added on 8 Nov 2026. Day and night (published 8 Nov 2026) added eight more: `media/green-zone-explainer-night-720p.mp4`, `media/explainer-night-poster.webp`, `media/green-zone-explainer-ms-night-720p.mp4`, `media/explainer-ms-night-poster.webp`, `poster/sheet1-night.webp`, `poster/sheet1-night-thumb.webp`, `poster/sheet2-night.webp` and `poster/sheet2-night-thumb.webp`. The 12 home-tile files (`tiles/<key>.webp` and `tiles/<key>.mp4` for `paths`, `rules`, `dc`, `calc`, `intro`, `tip`) were added on 9 Nov 2026. The 12 calculator group tile files (`tiles/<key>.webp` and `tiles/<key>.mp4` for `kids`, `doses`, `scores`, `calm`, `head`, `dengue`) were added on 9 Nov 2026. The 4 MDCalc-round tile files (`tiles/cardio.webp`, `tiles/cardio.mp4`, `tiles/tox.webp`, `tiles/tox.mp4`) were added on 9 Nov 2026.
4. If this session has no Artifact tool, say so. The offline copy in `app/` still works, and Krishna can publish from a claude.ai session.

## Writing style for the app

- UK spelling, as in the ebook (haemodynamically, paediatric, oedema). Doses, criteria and numbers exactly as the source gives them.
- Plain, short sentences in the imperative for steps. A colon introduces a label or a list. No em dashes.
- Local terms as the department uses them: Klinik Kesihatan (KK), slip hijau, PPP, CCA, EMACC, EM Watch, MAU, MTS.
- Each department note names its source and date, for example "Source: IV antibiotic memo, 30 Jun 2026."

## Sources

- The ebook PDF (`The Clinical Pathway In EMERGENCY FOR MEDICAL OFFICER HKL - FINALE.pdf`, 68 MB) is in the claude.ai project files. It is not in this folder; ask Krishna for a copy if you need to check a pathway against it.
- HKL ED MO Drive: https://drive.google.com/drive/folders/1Skn9YBvNul6q7LCCGFadlNiGV6pp8TBr. Its "3. CLINICAL" folder (https://drive.google.com/drive/folders/1o3QbTFpn9zbQz9d6gWjIUz633cU9jWRP) was read in full on 7 Nov 2026. Folders 1 (Administration), 2 (Memo-memo, beyond the memos already used), 4 (Slides) and 6 (Interdepartment referral) have not been read.
- Triage course folder: https://drive.google.com/drive/folders/1e6MDwAaZRLcRj4EaLpFsYz2-sQ9xRrR-. Several of its PDFs are scans and need reading page by page.
- With the Google Drive connector, query one parent folder at a time: several parents joined with OR drop results.
- Green Zone workflow map: https://claude.ai/artifact/Cq46bHAYu2qrba297xW8p5

## Open items

Still to confirm with the department (the app lists them under Still to confirm on its What's new page, from `CONFIRM` in `engine.js`):

1. How to book EM Watch: the training deck shows the recruitment step only as a picture.
2. The procedure for patients redirected to a Klinik Kesihatan or private GP.
3. Whether the EMACC SOP of 1 Feb 2018 (ext 7040, Monday to Friday 9 am to 4 pm) is still current.
4. Numbers against the current directory: Neuro Rehab 7099, the MAU 6682 / 6684 (both 2022 documents), the SCAN team line and the IPR on-call line.
5. The MERS-CoV case definition, which is not in the PUI file.
6. A readable copy of the Malaysian snakebite guideline.
7. The written source for "only the EP can allow a down-triage", which Krishna added on 8 Nov 2026. The down-triage memo HKL/JK/98/188/3(22)22 of 4 Oct 2022 says the MO must examine the patient first and document it on the triage form, but does not mention the EP.
8. Where the calculators' sources stop (9 Nov 2026), each shown in its calculator as "Not in the source": paracetamol at exactly 50 kg (the ebook gives over and under 50 kg); a creatinine clearance of exactly 30 for fondaparinux and Clexane; how to split the total daily insulin dose into basal and bolus; which SOAP band counts as moderate dehydration, and how to treat a child over 10% dehydrated (Paediatrics 101 notes); whether there is a first-line drug at BARS 7; for paracetamol overdose, the activated charcoal dose, the N-acetylcysteine regimen, the nomogram treatment line and which band exactly 8 hours belongs to; and child doses in anaphylaxis.

Waiting on Krishna: his review of version 8 (including the Malay wording and how both narrations sound, and the night versions), and when to share the app with colleagues. The poster canvas on claude.ai still holds the version 7 sheets.

## Tools on Krishna's laptop

- **Flow Studio** is his local web app at http://127.0.0.1:8787 (Cast, Frames, Shots, Voice, Restyle, Cut, Captions, Library), driven by the `flow` MCP tool. When he says "Flow", he means this. The app's clips were made with Omni 1.1 Flash at 12 credits each, 720p, with the first and last frame set so they loop.
- **VoiceStudio** (`voicestudio` MCP) saves to `C:\Users\user\Downloads\Music\Voice Studio\` (since 8 Nov 2026; the clips it saved earlier in `Documents\hkl-football-medicine-2026\` were moved there too). The folder is set by the Windows user environment variable `OMNIVOICE_MCP_BASE_PATH`, which VoiceStudio reads only when it starts, and it is also the only folder VoiceStudio may read audio from (transcribe, clone_voice). Leave out `instruct`: free text there returns an error. The explainer narration used the voice "Google Kira - Female - BM + EN" at speed 0.86.
- **HyperFrames** made the explainer (see `video/REVIEW.md`). Version 8 uses HyperFrames 0.9.22 pinned with `npx --yes hyperframes@0.9.22`; never run its `publish` command, which uploads the project.
