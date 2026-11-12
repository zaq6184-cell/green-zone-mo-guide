---
target: the whole guide, phone first (cosmetic upgrades)
total_score: 28
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 1
target_identity: "file:C:\\Users\\user\\Green Zone\\src\\parts\\head.html"
target_fingerprint: "sha256:25b8e2c274dce30ce0834d1e109acdb3d5fa76f89418f405e06c2f86ad919383"
target_path: "C:\\Users\\user\\Green Zone\\src\\parts\\head.html"
timestamp: 2026-11-12T17-02-01Z
slug: src-parts-head-html
---
Method: dual-agent (A: design review · B: detector and browser scan)

## Design health score

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | The route trail is cut off at its newest answer ("Ab…", p-route.png) |
| 2 | Match with the real world | 3 | Department terms and the ebook's box names are right; the EN/BM button in search is unexplained |
| 3 | User control and freedom | 3 | Back pill, restart, tap an earlier answer, Close |
| 4 | Consistency and standards | 2 | Banner chips in three styles; "Dept notes" uses the blue Updated badge (`.b-upd`); the flag report is set in mono (`.flag-t`) |
| 5 | Error prevention | 3 | Calculators say where the source stops; the flag has no box to type in |
| 6 | Recognition rather than recall | 3 | Route chips show answers ("Yes · Done · None") without their questions |
| 7 | Flexibility and efficiency | 3 | Keys 1 to 9, `/`, aliases, voice, deep links, saved list |
| 8 | Aesthetic and minimalist design | 2 | On-shift views open on 4 to 5 lines of prose; the outcome card ends on five equal buttons |
| 9 | Error recovery | 3 | "Nothing for 'paracetmol'. Showing results for paracetamol." |
| 10 | Help and documentation | 3 | Intro, tour, About this pathway, hints |
| **Total** | | **28/40** | **Good** |

## Design specificity verdict

LLM assessment: authored for this product. Two palettes do separate jobs: jewels say which area of the guide you are in, the ebook's flat red, yellow and green say where the patient goes, from "Can still end in" to the outcome card to the calculator verdicts. Extensions as mono keys, the zone route and the page chip on every entry are this guide's own. It drifts toward a template only where it shows least: view headers (display title plus a paragraph) and search result rows.

Deterministic scan: `src/parts/head.html`, 7 low-contrast warnings, all false positives (night text tokens measured against day backgrounds when the stylesheet is scanned on its own; the real page shows none by day or night). `app/index.html`, 52 findings, mostly advisory drift from the documented radius and type scale (19 radius, 16 font size, 15 colour), some of which DESIGN.md itself names (20 px search, 26 px tab bar, 1.75rem). Real: seven colours hard-coded outside the tokens (`#ff8a80` `.dc-route.stop .fill`, `#050a08` `.lb`, `#0b0805` `.lfilm-th`, `#2c4036` `.lb-bar button`, `#f5d0fe` `.pal-ask svg`, `#4a2a63`, `#0d3b2c`), and the source lines on the Numbers cards at .74rem (11.8 px) and 90% opacity (`.num-card .src`).

Browser overlay (5 views, day and night, 390 px): `ai-color-palette` on every jewel tile, `bounce-easing` on the spring, `dark-glow` on the mint halo, `nested-cards` on the Listen bar, `hard-offset-shadow` on the drawn app-icon grid: all by design (DESIGN.md: Fixed Jewel Key, Motion, mint as the current step's halo; CLAUDE.md: figures as cards inside cards). The live server's script reset in the pane, so the overlay was served from a loopback copy of the same file.

## Overall impression

The finish is there; what holds it back on a phone is height. The answer keys on a checklist question, the newest answer in the route and the outcome's main action all sit just out of reach, and the on-shift pages open on prose the banner already says.

## What's working

1. Clinical colour never borrows area colour: the flat ebook boxes carry through "Can still end in", the outcome card and calculator verdicts (CURB-65: a flat red "Score 2 or more: admit").
2. Numbers are built to be used: Code Blue and Code Stroke in the first phone screen with Copy; extensions as mono keys, strong by night (pd-ext.png).
3. Search that says what it did: corrections and Malay words are labelled, and every result shows its source (p-fix.png, s-pal-mic.png).

## Priority issues

1. [P1] Checklist answers land under the tab bar. After ticking, the suggested answer lights up off screen (p-run-steps.png; renal colic step 3). Fix: a slim bar pinned above the tab bar showing the suggested answer key, reusing the `.cx-sticky` pattern. /impeccable layout
2. [P2] The runner header spends height and hides the newest answer. `.ends` wraps to two rows; the question starts at 41% of the screen; `.trailx` clips its last chip. Fix: scroll the trail to the newest answer with edge fades; one-line `.ends` on phones. /impeccable polish
3. [P2] On-shift views open on prose: Numbers, Pathways, Tools and Calculators carry 4 to 5 lines under a title the top bar repeats. Fix: on phones keep the title and the one sentence that carries a rule; fold the rest. /impeccable distill
4. [P2] The outcome card ends busy: five equal buttons, an uneven first row from `.res-f .grow`, and items drawn as already ticked. Fix: two-column grid, primary full width at the bottom, Start again quieter, empty boxes, the ebook page on the card. /impeccable polish
5. [P2] Search rows are tall and snippets start mid-word ("…inical picture"); about four results per screen. Fix: whole-word snippets, two-line clamp. /impeccable polish

## Persona red flags

Casey (one-handed, interrupted): checklist keys under the tab bar; star, map, link and restart at the top edge; Code Blue's Copy in the tile's top corner; the flag link 40 px tall; the library about 10,600 px long.

Sam (keyboard and screen reader): the 3 px mint focus ring is about 1.8:1 on a white key by day, under 3:1; route chips read "Change: Yes" without the question; dimmed map outcomes are pale.

MO on a night shift (dark, bright ED, one hand): dark mode is first-class, but the pale stills (the doorway on the Discharge check, the scales on Scores) are the brightest things on a dark screen; by day the 0.84rem snippets and dimmed map nodes read weakest.

## Minor observations

- The Search label in the tab bar sits about 10 px below the other four.
- At 390 px, "MTS 4 or 5" runs into "Consultation" on the zone map.
- The Ebook page chip renders in the body face; DESIGN.md says mono.
- Find boxes show the browser's own blue ×.
- CURB-65 point badges sit at the top of one-line rows; calculator footers wrap unevenly.
- Filter rows clip with no edge fade.

## Questions to consider

- If the outcome card is the peak, should it carry only the advice and Show to patient, with the rest one step away?
- Does an on-shift list need a paragraph when its banner and filter counts already say what it is?
- Should the route read as a sentence at handover ("Urgent indication: none")?
