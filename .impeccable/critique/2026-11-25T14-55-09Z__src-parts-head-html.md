---
target: the whole guide, phone first (premium review, late 2026)
total_score: 31
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 1
target_identity: "file:C:\\Users\\user\\Green Zone\\src\\parts\\head.html"
target_fingerprint: "sha256:b33494a0c28cd1cd8e2dd12994411150d6377d5e73ae27263dd2cffbe88a9b41"
target_path: "C:\\Users\\user\\Green Zone\\src\\parts\\head.html"
timestamp: 2026-11-25T14-55-09Z
slug: src-parts-head-html
---
# Design review, 25 Nov 2026: Green Zone MO Guide

⚠️ PARTLY DEGRADED: the screenshots and a first read of them were made in the parent context before the critique skill loaded. After that, Assessment A (design review) and Assessment B (detector and browser) ran as two isolated sub-agents, and the web research as a third. The parent's own notes were set aside and used only at synthesis.

Read-only review. Nothing under `src/`, `app/` or the built pages was changed. The screens are in this folder: `p-` phone 390 x 844 at 2x by day, `pd-` the same by night, `pm-` phone with motion on, `d-` desktop 1366 x 900.

**Score: 31/40, Good** (13 Nov 2026: 28/40). Same ten heuristics, same scale.

Capture notes:
- The screens were taken at 10.2 pm on a Wednesday, so every Now row reads closed.
- `p-`, `pd-` and `d-` ran with reduced motion on, which is why Settings shows Moving tiles Off. Motion was judged from DESIGN.md, the source and the `pm-` stills.
- The back arrow in the top bar comes from pages the script visited first. It is not what a first open shows.

---

## 1. Design health score

| # | Heuristic | 13 Nov | Now | Key issue |
|---|---|---|---|---|
| 1 | Visibility of system status | 3 | 3 | The route opens on the newest answer and the answer bar shows what the ticks suggest (`p-step`, `p-outcome`). The top bar is blank on Antidotes, Abbreviations and the antimicrobial guides: `VIEW_TITLE` in engine.js has no key for them (`p-antidotes`, `p-antibiotics`). |
| 2 | Match with the real world | 3 | 3 | Department terms, "Discharge (green box)", Ebook p53–54. Two labels mislead: "Not in the source:" on a citation (P1 below), and the search bar's unexplained "EN" (`p-search`). |
| 3 | User control and freedom | 3 | 4 | Back through this visit with its hold list, undo by tapping the route, Start again, Clear, Esc. Every captured state has an exit. |
| 4 | Consistency and standards | 2 | 2 | The older pages now agree with each other: one chip family, the Dept notes badge, the outcome footer. The pages added since 21 Nov fork the pattern in five ways (P2-1), and film cards come in three layouts (`p-dengue-leaflet`, `p-new`, `d-new`). |
| 5 | Error prevention | 3 | 3 | Calculators stop where the source stops; CrCl marks printed bands only; CHECK marks the doubted antidote rows. |
| 6 | Recognition rather than recall | 3 | 3 | Pins, the pick-up card and the drug finder card help. On a phone the route chips still read "Yes · Done" without their questions (`p-step`); only the desktop rail shows the questions (`d-step`). |
| 7 | Flexibility and efficiency | 3 | 4 | Keys, `/`, voice, aliases, smart search, pins, the thumb bar, reminders, "Reference beside the step" (`d-step`) and the back list. |
| 8 | Aesthetic and minimalist design | 2 | 3 | The 13 Nov prose and outcome fixes landed (`p-library`, `p-tools`, `p-outcome`). The new reference pages say the same thing twice before their list, and an open calculator carries the hub's heading (`p-antidotes`, `p-calc-news2`). |
| 9 | Error recovery | 3 | 3 | Search corrections are labelled; a CrCl with no printed band is said, not rounded. |
| 10 | Help and documentation | 3 | 3 | The intro (now read aloud), the tour, What's new in 60 seconds, hints and the keyboard key bar. |
| **Total** | | **28** | **31/40** | **Good** |

The parent's own draft before reading A came to 30, scoring heuristic 8 at 2 for the home page's length and the new pages' prose. A scored it 3, and that score is kept: the 13 Nov fixes it measured are real.

## 2. Design specificity verdict

**Design review.** The guide is authored for this product, and more so than on 13 Nov. Several pieces could belong to no other app:
- the answer bar, "From what you ticked: Yes, present", with its mono key (`p-step`);
- the flat green box with the ebook page on the card (`p-outcome`);
- extensions as copyable mono keys (`p-numbers`);
- the Now tile reading clinic sessions against Malaysia time (`p-home`);
- CHECK on the antidote rows a reader doubted (`p-antidotes`).

It drifts toward a template on the pages added since 21 Nov. Antidotes, Abbreviations and the antimicrobial guides each stack a display title, a two-line lead cut off with "…", a jewel banner that restates the lead, a find box and a list. On the older on-shift pages the banner does a job: the 6705 key on Numbers, the route meter on the discharge check. On these three it is a caption with a picture.

**Detector** (`impeccable detect --json app/index.html`): 49 findings, against 52 on 12 Nov.

| Rule | Count | Notes |
|---|---|---|
| Radius off the scale | 19 | Unchanged since 12 Nov. |
| Font size off the scale | 16 | Unchanged since 12 Nov. |
| Colour | 10 | Was 15. Five of the seven hard-coded colours named on 12 Nov are now tokens, and the other two are gone. Five of the ten are night tokens that DESIGN.md's frontmatter does not list. New literals: `.spin-pin` (`#3ddc97`, `#ffa64d`) and the `var()` fallbacks `#1f3b8f` and the `.ax-qt` rgba. |
| `tiny-text` | 1 | 0.74rem on the Now lines and the banner chips. |
| `marquee` | 1 | The ready bar. It is off under reduced motion, so this is a false positive in practice. |
| `dark-glow` | 1 | The mint halo. By design. |
| `repeating-stripes-gradient` | 1 | Dashed connectors in drawn figures. By design. |

In computed styles across four views there are 33 font sizes and 23 border radii, against DESIGN.md's radius scale of 12, 16, 22, 28 and 999 px.

**Overlay** (`detect.js` injected on `#home`, `#renal-colic--urgent`, `#calc-news2` and `#antidotes`, by day and by night at 390 px):
- **By design, as on 12 Nov:** `ai-color-palette` (the jewel key), `bounce-easing` (the spring), `dark-glow`, and `nested-cards` on the Listen bar.
- **New and real:**
  - `skipped-heading` on `#antidotes`: an h2 ("38 antidotes"), then h4 "Brands" with no h3.
  - Pixel contrast of **3.9:1** on the white "Abdomen" chip over the teal banner (needs 4.5:1).
- **Gone since 12 Nov:** `hard-offset-shadow`.

The overlay was injected into the test browser only. The live server cut off `detect.js`, so B served a complete copy through Playwright's request routing; no user-visible overlay was left open.

**Measured:**
- No sideways scroll on any view, by day or by night.
- No other contrast failure on a solid ground.
- Borderline on gradients: "Ebook p53–54" at 4.15:1 at its worst stop, and the antidote banner text at 4.49:1. Neither was flagged by the pixel scan.

**Where the reviewers agree, and what each caught alone:**
- Both point at the post-21 Nov pages: the design review names the forked pattern, the detector the skipped heading and the stray colour literals.
- The detector alone caught the chip contrast.
- The design review alone caught the mislabelled source line, which no rule can see.

## 3. Overall impression

The pathway itself, from step to outcome, is now the best part of the guide: the answer bar, the route that opens on its newest answer, and a quiet outcome card with one primary action and the ebook page on it. What holds the guide back from feeling premium is no longer the runner. It is three other things:
1. the reference pages added since 21 Nov, which do not follow the house pattern;
2. the open calculator, which makes you scroll past chrome to reach its first field;
3. one label that undercuts the guide's provenance promise.

**The biggest opportunity:** bring the newest pages and the calculators up to the runner's standard. That needs CSS and a few lines of script, and no new files.

## 4. What's working

1. **The step-to-outcome flow** (`p-step`, `p-outcome`, `pd-outcome`, `d-step`). The answer bar keeps the suggested answer in thumb reach, the trail opens on the newest answer, and the outcome footer has one primary. Every 13 Nov runner issue at the foot of the screen is closed.
2. **The clinical palette stays flat and faithful.** The NEWS2 verdict is flat admit red with a three-band scale (`p-calc-news2-filled`); "Ended in" and "Can still end in" are flat dots; CHECK is champagne, never an outcome colour. Night contrast holds, sampled at 5.6:1 to 9:1 (`pd-` set).
3. **Copyable figures are built for copying.** 6705 is a key in the banner, and every extension is a mono key with a copy glyph, even for rooms with two or three numbers (`p-numbers`, `d-numbers`).

## 5. The 13 Nov items

| 13 Nov item | Now | Evidence |
|---|---|---|
| P1 Checklist answers under the tab bar | **Fixed** | `p-step`, `pd-step`. Side effect: the answer bar covers half of the fourth checklist row until you scroll. |
| P2 Runner header height; newest answer hidden | **Partly fixed** | The trail opens on the newest answer with an edge fade (`p-outcome`), and "Can still end in" fits one line. The question still starts at about 40 to 43% of the screen height: the library pill, banner, route, endings and step meter take the same height as before. |
| P2 On-shift views open on prose | **Fixed on the four named pages, not carried forward** | Pathways, Tools, Calculators and Numbers keep one sentence plus More. The new pages and What's new clamp their lead to two lines ending in "…", with no More (`p-antidotes`, `p-new`). |
| P2 Outcome card busy | **Fixed** | `p-outcome`, `d-outcome`. On a 390 x 844 phone the primary "Discharge advice" still starts under the tab bar. |
| P2 Search rows tall; snippets start mid-word | **Partly fixed** | About 5.5 results per screen, up from 4. Snippets start on whole words, but some open on "…:" (`p-search`). |
| Minor: Search tab label low; MTS label collision; page chip not in mono; blue × in find boxes; footers; filter-row fades; chip styles; flag set in mono; focus ring; hard-coded colours; Numbers source lines | **Fixed** (several confirmed from the source only) | `p-home`, `p-step`, `d-calc-news2-filled`, `p-library`; head.html. CURB-65 badges not captured. |
| Pale stills brightest at night | **Partly** | The doorway and scales are muted now (`pd-tools`, `pd-calc-hub`). The brightest things on a night screen are now the champagne Pearl tile, the white Copy link pill, the outcome's white primary and the journey illustration. All are by design. |

## 6. Cognitive load and emotional journey

**Checklist failures:** 2 to 3, which is moderate.

- **Minimal choices.** At the outcome, nine actions are within reach: four on the card and the thumb bar's five peeking under the tab bar (`p-outcome`). Before its first drug, the antimicrobial page asks for a find box, a CrCl, four filters and the CrCl explainer (`p-antibiotics`).
- **Progressive disclosure on the new pages.** Abbreviations shows a 13-line source paragraph as its empty state (`p-abbreviations`).
- **Working memory, on phones.** The route chips show answers without their questions.

**Emotional journey.**

- **Opening.** Calm: the name, shift, search, zone map and both emergency numbers fit the first screen (`p-home`).
- **Peak.** The outcome card, which is the right place for it.
- **Valleys.** Opening a calculator lands on the hub's heading, with NEWS2's first field at 66% of the screen height. The first antimicrobial card is at 83%.
- **A moment of doubt where it matters most.** A red "emergency response" verdict is followed by "Not in the source:".

## 7. Priority issues

### [P1] A calculator's source line is labelled "Not in the source:"

**Where.** `p-calc-news2-filled`, `pd-calc-news2-filled`, `d-calc-news2-filled`. Under the red NEWS2 verdict the panel reads "**Not in the source:** RCP, NEWS2, 2017 (Charts 2 and 4)."

**Cause** (confirmed in source).
- engine.js line 4250 renders every `r.gap` under that fixed label, and line 4268 copies it the same way.
- `data24.js` has 47 `gap:` lines, many of them citations rather than gaps.

**Why it matters.** It breaks PRODUCT.md principle 2, "The source stays visible", at the moment it matters most.

**Fix.**
- Render citation gaps as "Source: …".
- Keep "Not in the source:" only for real gaps.
- Add a test that no panel headed "Not in the source:" starts with an author or year.

This changes the label only: no clinical text changes. `/impeccable clarify`

### [P2] The pages added since 21 Nov fork the house pattern

**Where.** `p-antidotes`, `p-abbreviations`, `p-antibiotics`.

**What forks.**
1. The top bar is blank: there are no `VIEW_TITLE` or `NAV_IC` keys for these pages.
2. The lead is clamped with "…" instead of `.vkey` and `.vmore`.
3. The banner restates the lead.
4. Every find placeholder is cut mid-word ("for exa", "for example TI", "for example c").
5. The antimicrobial filters wrap to two rows, and an unselected chip looks raised and selected next to the selected "All".

Also: the "38 antidotes" heading skips a level (detector), and the band cells nest three cards deep.

**Fix.** One reference-list pattern, set out in proposal 2. `/impeccable polish`

### [P2] Open calculators and reference pages make you scroll before the first control

**Where** (measured at 390 x 844).

| Page | First usable control at | Screen |
|---|---|---|
| NEWS2 | 66% of the screen height | `p-calc-news2` |
| Antidotes | 54% | `p-antidotes` |
| Antimicrobial guides | 83% | `p-antibiotics` |

On NEWS2, field labels wrap to different heights, so paired fields sit about 7 px apart. The total and verdict are below the fold, with no running total.

**Fix.** Proposal 3. `/impeccable distill`, `/impeccable layout`

### [P2] Advice tabs: two listen controls, uneven rhythm between languages, three film-card layouts

**Where.** `p-dengue-leaflet`, `p-advice-ms`, `p-new`, `d-new`.

- "Read this tab aloud" (the phone's voice) sits above the recorded "Listen" bar.
- The Malay stack sits tighter than the English one.
- There are three film-card layouts:
  - the What's new film card has no gap below it;
  - on desktop its contents sit centred in a full-width card;
  - its cover is cropped to "'s new".

**Fix.** Proposal 10. `/impeccable polish`

### [P3] Small contradictions of the system

- The "Abdomen" banner chip measures 3.9:1.
- "5 of 7" is set in accent green beside a red 14 (`p-calc-news2-filled`).
- Two strings are in mono that are not figures, against the Mono Means A Figure Rule: "e.g. 45" (`p-antibiotics`) and "Counter 10" (`p-home-full`).
- In search, hover and the selected row share one tint, so two rows look selected (`p-search`, `d-search`).

## 8. Persona red flags

**Casey (one-handed, interrupted).**
- The outcome's primary action and the thumb bar start under the tab bar (`p-outcome`).
- The answer bar half-covers the fourth checklist row (`p-step`).
- NEWS2's segmented Scale and Air/Oxygen controls sit between the number fields, where a scrolling thumb can flip one.
- Wrapped filter chips move tap targets between visits (`p-antibiotics`, `p-journey`).

**Sam (keyboard and screen reader).**
- Three pages have no top-bar title once their large title scrolls away.
- The skipped heading on Antidotes.
- Phone route chips read "Yes · Done" for sighted low-vision users. Screen-reader users do get names.
- Hover and selection look alike in search.

**An MO on a night shift.**
- Contrast holds.
- At 10 pm the Now tile spends about 530 px saying three clinics are closed before Quick routes (`pd-home-full`). Its place was the owner's decision, so this is a question, not a defect.
- The white primary on a full-saturation green outcome is the brightest object on a dark screen (`pd-outcome`). Changing that needs a rule change (see proposal 9).

## 9. Minor observations

- The phone home is 5,035 px long (`p-home-full`). The Rules tile cuts its rows short ("Green Zone rul…", "Asthma Zone f…"), and the Pathways tile cuts "Sugar and p…".
- On the runner, the "Pathways" library pill takes about 80 px under a top bar that already has a back arrow (`p-step`).
- The search rows' yellow highlight boxes on every matched word in titles are heavy (`p-search`).
- The Malay advice's translation note sits at the foot of the list, under the tab bar on first view (`p-advice-ms`).
- The reference tab underline is blue on the dengue and renal colic tabs (`p-dengue-leaflet`). DESIGN.md says "underlined in gold": check which is intended.
- The journey's segmented control wraps "Quick check" onto a second row (`p-journey`).
- The greeting's "Night shift" and the Now tile's "ON SHIFT" both say which shift it is.
- In the stylesheet: head.html is 264 KB, with eight or more per-round blocks appended at the end, 161 distinct hex values, and no `prefers-contrast`, `prefers-reduced-transparency`, `forced-colors`, `@starting-style`, `@container` or `dvh`.

---
