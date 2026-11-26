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

## 10. Research: premium mobile UI in 2025–26 for a clinical reference

All of these were read on 25 Nov 2026 by a research agent. A point marked [unverified] came only from a search snippet.

### Apple Liquid Glass (iOS 26)

[Newsroom, 9 Jun 2025](https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/); HIG [Materials](https://developer.apple.com/tutorials/data/design/human-interface-guidelines/materials.json), [Color](https://developer.apple.com/tutorials/data/design/human-interface-guidelines/color.json) and [Tab bars](https://developer.apple.com/tutorials/data/design/human-interface-guidelines/tab-bars.json). The HIG pages were read through their JSON endpoints.

- Glass is "a distinct functional layer for controls and navigation elements". The HIG says: "Don't use Liquid Glass in the content layer"; "use … sparingly".
- **Regular** glass blurs and adjusts luminosity, for elements that carry text. Over bright content, add a 35% dimming layer.
- Larger glass elements are made more opaque.
- Supply increased-contrast variants of custom colours; the material responds to Reduce Transparency and Increase Contrast.
- Tab bars float, can minimise on scroll, prefer monochrome labels over colourful content, and are for navigation, not actions.

Critics:
- [NN/g, "Liquid Glass Is Cracked", Oct 2025](https://www.nngroup.com/articles/liquid-glass/): text on glass over busy content becomes illegible, and "motion for motion's sake is not usability".
- [MacRumors, Oct 2025](https://www.macrumors.com/2025/10/20/ios-26-1-transparency-option-liquid-glass/): iOS 26.1 added a more opaque Tinted option.

**For this guide:** glass stays on the top bar and tab bar only, which is the Lit Pearl Rule already. Opaque enough is the trend, and 84 to 90% is right. What the guide lacks is the accessibility variants.

### Material 3 Expressive (May 2025)

Sources: [Google Design research article](https://design.google/library/expressive-material-design-google-research), [9to5Google](https://9to5google.com/2025/05/13/android-16-material-3-expressive-redesign/), [Dezeen](https://www.dezeen.com/2025/05/28/google-ushers-in-age-of-expressive-interfaces-with-material-design-update/) and [Compose MotionScheme](https://developer.android.com/reference/kotlin/androidx/compose/material3/MotionScheme).

- Google ran 46 studies with more than 18,000 people. Key elements were found "up to 4x faster" in the expressive versions, and people aged 45 and over matched younger users.
- Expressive design hurt usability when it broke familiar patterns, and "a strong minority prefer calmer designs".
- Motion uses springs, split into spatial springs and effects springs. The expressive scheme is "for hero interactions"; the standard scheme is for "utilitarian UI elements and recurring interactions".
- Emphasised type styles and shape morphing.

**For this guide:** use emphasis (size, containment, colour) on the one primary per screen, and keep recurring motion standard. That is already the guide's rule: the spring only on pops.

### Typography

Sources: [Braille Institute](https://www.brailleinstitute.org/freefont/), Google Fonts metadata for [Atkinson Hyperlegible Next](https://raw.githubusercontent.com/google/fonts/main/ofl/atkinsonhyperlegiblenext/METADATA.pb) and [Figtree](https://raw.githubusercontent.com/google/fonts/main/ofl/figtree/METADATA.pb), [MDN `font-variant-numeric`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric) and the [HIG Typography](https://developer.apple.com/tutorials/data/design/human-interface-guidelines/typography.json) page.

- Atkinson Hyperlegible Next (2025) has a variable weight axis of 200 to 800 and a Mono sibling for tables. Figtree's weight axis runs 300 to 900.
- Neither font has an optical-size axis.
- `tabular-nums` only takes effect if the font carries the feature. Check the font files.
- The HIG says: minimise the number of typefaces; layouts must adapt to large text sizes.

**For this guide:** the pairing is current and well chosen. The premium step is fewer type sizes, not new fonts.

### Motion and haptics

Sources: HIG [Motion](https://developer.apple.com/tutorials/data/design/human-interface-guidelines/motion.json) and [Playing haptics](https://developer.apple.com/tutorials/data/design/human-interface-guidelines/playing-haptics.json), [web.dev on reduced motion](https://web.dev/articles/prefers-reduced-motion), [MDN vibrate](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate), [caniuse: vibration](https://caniuse.com/vibration) and [Chrome: View Transitions](https://developer.chrome.com/docs/web-platform/view-transitions).

- "Generally avoid adding motion to UI interactions that occur frequently"; let people cancel motion.
- Haptics: one pattern per meaning, and let people turn them off.
- The Vibration API is **not in iOS Safari up to 27.2**; it is Android only.
- Same-document view transitions: Chrome 111, Safari 18 and Firefox 144.

**For this guide:** the guide already follows all of this. No new motion is proposed.

### Dark mode

Sources: [Material codelab](https://codelabs.developers.google.com/codelabs/design-material-darktheme/), [Google Design: dark theme](https://design.google/library/material-design-dark-theme), [MDC Dark.md](https://raw.githubusercontent.com/material-components/material-components-android/master/docs/theming/Dark.md), [HIG Dark Mode](https://developer.apple.com/tutorials/data/design/human-interface-guidelines/dark-mode.json), and NN/g ([2020](https://www.nngroup.com/articles/dark-mode/), [2023](https://www.nngroup.com/articles/dark-mode-users-issues/)).

- Use dark grey rather than black, and off-white text, not pure #FFF.
- "More saturated colors tend to visually 'vibrate' against darker backgrounds"; use lighter, less saturated tones.
- Show elevation by lightness: elevated surfaces are brighter.
- Aim for 7:1 for small text.
- Follow the OS setting. Light mode reads better for small text in general.

**For this guide:** the night ground and cards already do this. The saturated outcome fills do not: see proposal 9.

### Medical reference apps

- [MDCalc frontend update](https://blog.mdcalc.com/post/mdcalc-nipped-and-tucked-our-biggest-frontend-update-in-years): search is the main action on home; favourites sort by most used; calculator pages got "More white…" with functionality unchanged.
- [MDCalc App Store listing](https://apps.apple.com/us/app/id1001640662): fully offline; evidence and pearls beside results.
- [UpToDate App Store listing](https://apps.apple.com/us/app/-/id334265345) and [Mayo Clinic Libraries, Jul 2025](https://libraryguides.mayo.edu/blog/Mayo-Clinic-Libraries-Announce-Enhancements-to-UpToDate-Website-and-App): Key Points in search results; UpToDate Pathways as interactive decision guides.
- [Medscape App Store listing](https://apps.apple.com/app/medscape/id321367289) and the [Pratt usability study, 2023](https://ixd.prattsi.org/2023/05/35361/): cluttered results pages. Users asked for a result count and filter chips that are easy to remove. Reviewers complained of slow, ad-heavy landing pages.
- [Epocrates App Store listing](https://apps.apple.com/us/app/epocrates-drug-info-pill-id/id281935788): offline; tabbed topic pages; a news pop-up that stalls search.
- [BNF App Store listing](https://apps.apple.com/gb/app/bnf-bnfc/id1045514038): offline; reviewers complain it loses typed text when you switch apps.
- [Read by QxMD App Store listing](https://apps.apple.com/app/id574041839): a literature feed; of little relevance here.

**For this guide:** premium in this category means calm and search-first, with the result first and its evidence beside it. The guide's pick-up card and pins already match the best of these.

### Web platform, Baseline as of late 2026

Support from caniuse and MDN; the browser numbers are first supporting versions.

| Feature | Support | Notes |
|---|---|---|
| `@starting-style` | Chrome 117, iOS 17.5 | Animate sheets and dialogs in without script. |
| `text-wrap: balance` | iOS 17.5 | |
| `text-wrap: pretty` | iOS 26 | |
| `light-dark()` | iOS 17.5 | |
| Container queries | iOS 16 | |
| `dvh` | iOS 15.4 | |
| `:has()` | iOS 15.4 | |
| `popover` | iOS 17 | |
| `interpolate-size` | Not in Safari | |
| `contrast-color()` | New in Safari 26 | [WebKit, Safari 26](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/): every site added to the Home Screen opens as a web app. |

[Ben Frain, Nov 2025](https://benfrain.com/ios26-safari-theme-color-tab-tinting-with-fixed-position-elements/): Safari 26 ignores `theme-color` and tints its bars from the `body` background, or from a fixed overlay's background while one is shown. This is a developer's report.

**Could not fetch:** several HIG HTML pages (connection reset; the JSON copies were used instead), the m3.material.io pages (rendered by script), the Wolters Kluwer UpToDate page and the Epocrates 2022 press releases (403). The Epocrates 2022 redesign figures are [unverified].

---

## 11. Ranked design upgrades

**What every proposal shares:**
- CSS and a few lines in `engine.js` or `head.html`; no new files (the artifact has 5 files of headroom, 506 of 511).
- No paid generation and no change to clinical text.
- Sizes are rough gzip additions to the first open (786 KB on the wire).

**Not proposed again, because CLAUDE.md records them as measured and rejected or kept by design:** AVIF, `content-visibility`, the reranker, a different spring easing, the plum and teal jewels, figures as cards inside cards.

### 1. Say "Source:" where a calculator cites its source

| | |
|---|---|
| **What changes** | Split `gap` into citation and gap, or detect a leading author or year. Render a citation as "Source: …" in the panel's muted source style, and keep "Not in the source:" with the info icon for real gaps. Copy follows. Add a test. |
| **Views** | Every calculator built from its own source (22 of them), NEWS2 first. |
| **Why** | P1. PRODUCT.md principle 2. MDCalc's "evidence beside results". |
| **Effort** | Small. |
| **Risk to speed or data** | None (under 0.2 KB). |
| **Keep** | The source-stops honesty: real gaps keep their label. |

### 2. One reference-list page pattern for the five drug and reference lists

| | |
|---|---|
| **What changes** | (a) `VIEW_TITLE` and `NAV_IC` keys for `antidotes`, `abbreviations` and `antibiotics`. (b) Replace the two-line clamp with `.vkey`/`.vmore`, or drop the lead under 560 px, since the banner carries it. (c) The banner keeps the count and the edition only. (d) Placeholders that fit 390 px ("Antidote or poison", "Letters or a word", "Antimicrobial"). (e) Antimicrobial filters in one edge-faded scrolling row like `#libf`; selected and unselected states as in the library. (f) Band cells become recessed rows inside the drug card. (g) Fix the h2 to h4 skip. (h) Fold Abbreviations' source paragraph behind "About this list" and show three example searches. |
| **Views** | `#antidotes`, `#abbreviations`, `#antibiotics`; check `#pharmacy` and `#dilution` against the same pattern. |
| **Why** | P2-1. Heuristic 4. The detector's `skipped-heading`. |
| **Effort** | Small to medium. |
| **Risk** | None: it removes height (about 0.5 KB). |
| **Keep** | The Fixed Jewel Key Rule. Each page keeps its jewel unless the owner chooses one family (see the questions). The Lit Pearl Rule. |

### 3. A calculator opens on itself, with a running result in thumb reach

| | |
|---|---|
| **What changes** | (a) On phones an open calculator drops the hub's title and lead and opens on its own banner, as a pathway does; the hub keeps them. (b) Field pairs align: labels get a two-line minimum height, or the field grid aligns to its end. (c) Once any field is filled and the result panel is off screen, a slim result bar shows above the tab bar: the score in mono and the verdict word on its flat outcome colour, a tap scrolling to it. This reuses the answer bar's pattern (`ansIO`) and the Flat Outcome Rule. (d) Units sit inside the number fields as a quiet suffix. |
| **Views** | All 56 calculators; NEWS2, CURB-65 and the dengue calculators most. |
| **Why** | P2-2. MDCalc's result-first pages. PRODUCT principle 1. |
| **Effort** | Medium. |
| **Risk** | None to data (about 1 KB). The bar must hide when the panel is on screen, as the answer bar does. |
| **Keep** | The Flat Outcome Rule on the bar; "Not in the source" honesty; nothing typed is stored (rule 4). |

### 4. Settle the runner's header on phones

| | |
|---|---|
| **What changes** | (a) Move the library link ("Pathways" pill, about 80 px) into the banner's chip row as its first chip with the group icon, since the top bar's back arrow already leads back. (b) On a phone, show the newest route chip as "Urgent indication: None" (question and answer), with older chips as now. (c) Have the answer bar leave room for the row it covers: scroll-padding, or a bottom margin equal to its height. |
| **Views** | Every pathway step and outcome. |
| **Why** | The 13 Nov P2 is only partly fixed: the question is still at about 40 to 43% of the screen height. Heuristic 6. |
| **Effort** | Small to medium. |
| **Risk** | None (about 0.4 KB). |
| **Keep** | "A left chevron means back only" (DESIGN.md, Back Through This Visit); every step's address; the route as an undo. |

### 5. Calmer, grouped search results

| | |
|---|---|
| **What changes** | (a) Results under quiet group heads with counts: In the guide, Calculators, Drug lists, Outside. The order is kept: the drug lists stay below the guide's pages (13 Nov decision). (b) The match highlight in titles drawn as a heavier weight or underline, not a box on every word; boxes stay in snippets. (c) Hover and selected drawn differently: hover as surface-3, selected as accent-soft with a 2 px accent bar. (d) Label the "EN" button "Voice: EN". |
| **Views** | The search palette. |
| **Why** | P3. Pratt's Medscape study (a result count; clear filters); MDCalc (search first). |
| **Effort** | Small to medium. |
| **Risk** | None (about 0.5 KB). Arrow keys must still walk the results in order. |
| **Keep** | Smart search's ordering; the drug finder card outside the arrow-key results. |

### 6. Accessibility variants the 2025–26 guidance now expects

| | |
|---|---|
| **What changes** | (a) `@media (prefers-reduced-transparency: reduce)`: the top bar and tab bar go solid. (b) `@media (prefers-contrast: more)`: stronger `--line`, `--muted` toward ink, and no glass chips; banner chips become solid dark. (c) `@media (forced-colors: active)`: outcome cards keep a visible border, and the checkbox ticks show. (d) Banner chips on jewels sit on the black-16% glass the rule tiles use, which fixes "Abdomen" at 3.9:1. |
| **Views** | Global. |
| **Why** | HIG Materials and Color (Reduce Transparency, Increase Contrast, increased-contrast colour variants); NN/g on glass legibility; the detector's contrast finding. |
| **Effort** | Small. |
| **Risk** | None (about 0.6 KB). |
| **Keep** | The Two Theme Rule, with every new value as a token; the bars at 84 to 90% in the default state. |

### 7. Collapse the type and radius drift into the documented scale

| | |
|---|---|
| **What changes** | Map the 33 computed font sizes to about 9 steps, and the 23 radii to 12, 16, 22, 28 and 999 px plus the documented exceptions (the 20 px search, the 26 and 19 px tab bar, the 14 px icon buttons), through tokens (`--fs-*`, `--r-*`). Fold the per-round blocks at the end of head.html into their components. Add `text-wrap: balance` to display and headline type, and check that Atkinson Hyperlegible Mono and Figtree carry `tnum`. |
| **Views** | Global. |
| **Why** | Heuristic 4; the detector's 19 radius and 16 font-size findings, unchanged since 12 Nov; the HIG's "minimise" advice. |
| **Effort** | Medium. A visual diff of every test screenshot is needed. |
| **Risk** | None to data. The page gets smaller (likely 1 to 3 KB less). |
| **Keep** | The Heavy Display Rule; the Mono Means A Figure Rule. Fix "e.g. 45" and "Counter 10" while there. |

### 8. A shorter home on phones

| | |
|---|---|
| **What changes** | (a) The Now tile opens as one summary line ("Open now: Obs Ward MO, LA OT · Closed until 8 am: EMACC, EM Watch, Animal Bite Clinic") that expands to today's rows. The tile keeps its place. (b) The Rules tile and the Pathways tile list show whole names: a shorter label, or two lines. (c) Drop "ON SHIFT", since the greeting already says it. |
| **Views** | `#home` on phones. |
| **Why** | The phone home is 5,035 px long; Quick routes sits on the second screen; truncated names. |
| **Effort** | Small. |
| **Risk** | None (about 0.3 KB). |
| **Keep** | The order the owner set for the phone (zone, the two numbers, Now, Quick routes); `HOURS` phrases unchanged. |

### 9. The night outcome card: a decision for the owner

| | |
|---|---|
| **What changes** | Give the five outcome fills a night value: the same hue at lower chroma and lightness, as Material and NN/g advise for saturated colour on dark. The inverted primary becomes the outcome's soft tint instead of white. |
| **Views** | The outcome card, verdicts, dots and legends at night. |
| **Why** | `pd-outcome`: the saturated green and white primary are the brightest things on a dark screen. Research: "saturated colours vibrate on dark". |
| **Effort** | Small in code. |
| **Risk** | None (about 0.2 KB). |
| **Keep** | **This needs a rule change.** The Two Theme Rule says "the flat outcome fills … are the same in both themes", and the Flat Outcome Rule says the answer must read as the ebook printed it. Krishna's call: put it to him with a day and night pair. Do not build it unasked. |

### 10. One film card, one listen control

| | |
|---|---|
| **What changes** | (a) One film-card component: cover at the left at 16 px, margin below, the same on the leaflet tab, What's new and desktop; the cover cropped so its title shows. (b) Where a recorded take exists, "Read this tab aloud" moves into the bar as a small "Use this phone's voice" link. (c) The English and Bahasa Melayu advice stacks get the same spacing: switch, 12 to 16 px, bar, parts. (d) The translation note moves under the language switch. |
| **Views** | Advice tabs, leaflets, `#new`, the patient page. |
| **Why** | P2-3; heuristic 4. |
| **Effort** | Small. |
| **Risk** | None. Nothing more loads: films still load only on a tap. |
| **Keep** | Sound only from a tap; captions and transcripts; READ marks. |

### 11. Native-feeling details from the web platform

| | |
|---|---|
| **What changes** | (a) `@starting-style` for Settings, the search palette and the map sheet, so they animate in from `display:none` in CSS, with the same durations. (b) `dvh` on sheets and the palette, so the iPhone toolbar does not crop them. (c) On the web app, make the `body` background match the top bar's ground, since Safari 26 tints its bars from it. (d) The tab bar shrinks to icons while scrolling down on phones and returns on scroll up (HIG tab bars), at 84 to 90% glass, off with reduced motion. |
| **Views** | Global. |
| **Why** | The research above; WebKit Safari 26. |
| **Effort** | Small; (d) is medium. |
| **Risk** | None (about 0.5 KB). For (d), labels must stay visible at rest; NN/g warns about controls that change shape. Let Krishna try it on a phone first. |
| **Keep** | "Don't thin the bars' glass"; the reduced-motion rule; Search stays the centre tab. |

**Suggested order:** 1 → 2 → 3 → 4 → 6 → 5 → 10 → 8 → 7 → 11, with 9 put to Krishna.
- Items 1 to 4 change the most-used screens and cost almost nothing.
- Item 7 is best done once the others have settled, so the scale absorbs them.

---

## Questions for the owner

Questions skipped (there is no user in this sub-agent run). The critique has 5 priority issues, so these are the questions it would ask, for the caller to put to Krishna:

1. **Which comes first:** the provenance label and calculators (1, 3), the newest reference pages (2), or the runner header (4)?
2. **Should the five reference lists** (pharmacy, dilution, antimicrobials, antidotes, abbreviations) **become one family** with one jewel and one header, or keep a jewel each?
3. **Night outcome card:** keep it as the ebook prints it (today), or allow a quieter night tone (proposal 9, which changes the Two Theme Rule)?
4. **Now tile at night:** keep the full list, or a one-line summary that expands (proposal 8)?

## Run notes

- **Screens:** 57 PNGs in this folder. The capture script and contact sheets are in the session scratchpad, not kept.
- **Detector:** `impeccable detect --json app/index.html`, exit 2, 49 findings. Raw JSON and the browser reports are in the session scratchpad (`B/`).
- **Overlay:** the live server sent a cut-off `detect.js` (curl exit 56 every time), so a complete copy was served through Playwright's request routing. It was stopped with `live-server stop --keep-inject`, which leaves empty, untracked `.impeccable/live/` folders.
- **A stray scan:** while finding a free debug port, Assessment B sent one detector scan, by mistake, to the Chrome on port 9334, the Flow Music MCP's profile. It read the page open there and changed nothing: no click, input or navigation. Every reported scan ran on the test browser's own port, 9471.
- **Unrelated file:** `RESEARCH-2026-11.md` at the project root (a source currency check, 22:38) is not from this review. It was written by another task.
