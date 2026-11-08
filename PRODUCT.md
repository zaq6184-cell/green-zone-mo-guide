# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** medical officers (MOs) and house officers (HOs) working in the Green Zone (MTS levels 4 and 5) of the Emergency & Trauma Department, Hospital Kuala Lumpur. They open the guide on a phone, mid-shift, often one-handed between patients, and give each question less than two minutes.
- **Secondary:** junior MOs new to the Green Zone, who learn how the zone works from the journey, the tour, the quiz, a first-shift onboarding and the wall poster.
- **Owner:** Krishna, an MO in the department, who keeps the guide and decides when it is published and shared.

## Product Purpose

A reference tool that takes an MO from a clinical question to the department's answer in one or two taps. The 23 ebook pathways run one question at a time to an outcome box, and the Green Zone rules, referral rules and department protocols sit beside them, each with its source.

Success: an MO on shift finds the right pathway, step, rule or number within seconds and acts on it; a new MO understands how a patient moves through the zone and which rule applies at each point.

## Positioning

The only guide built on the department's own approved ebook, *The Clinical Pathway in Emergency for Medical Officer* (Emergency & Trauma Department, HKL, 2025), with its page numbers, together with the department's own memos and SOPs, each labelled with source and date. Every pathway and every step has its own link (for example `#gz-rules--ivab`) that a colleague can send.

## Operating Context

- **On shift:** a phone in one hand, on mobile data, in a busy and brightly lit ED. On-shift lookup leads the home screen and the layout (confirmed with Krishna, 8 Nov 2026).
- **Learning:** new staff at orientation or before a first shift, on a phone or a desktop.
- **Zones:** the ED's zones are named by triage colour. The guide covers the Green Zone (MTS 4 and 5) and links to the Yellow Zone flow.
- **Distribution:** a private claude.ai artifact (https://claude.ai/artifact/RgdF1Ty9z9ZWhUeKti2HZ9) for Krishna, and the same app public on GitHub Pages (https://zaq6184-cell.github.io/green-zone-mo-guide/); an offline copy runs from `app/index.html`. The QR code on the A3 wall poster, and links copied in the app, open the public web app.
- **Department terms:** Klinik Kesihatan (KK), slip hijau, PPP, CCA, EMACC, EM Watch, MAU, MTS, EP, IPR.

## Capabilities and Constraints

- **Content:** 23 ebook pathways and 15 rules and protocols (8 flow, 7 protocols); shift tools (the discharge safety check with 6 items and 7 stop signs; quick sums for dengue, child doses and weight); 14 key numbers; a five-stop patient journey with clips and narration; a 65-second narrated tour; a 13-question quiz; What's new; the wall poster; sources.
- **Approved source:** the ebook's pathways are built as written, with page numbers, and its clinical content is never rewritten. Department documents go in only as labelled notes with source and date.
- **No clinical content from memory:** every dose, criterion and number needs the ebook or a named department document. Infographics, maps and visual tools draw only on content and thresholds already in the guide. Where a source does not cover a branch, the node says so.
- **Reference tool only:** no patient data, no patient tracking, nothing that stores what a user types about a patient.
- **Outcome kinds from the ebook:** admit (the red box), discharge (the green box), observation (the yellow box), plus refer and a neutral next step.
- **Permanent addresses:** `#<id>` and `#<id>--<node>` links are saved and sent, and the poster QR opens the public web app. Ids and node keys never change.
- **Artifact host:** one self-contained page with no framework; fonts only from Google Fonts; scripts inline or from pinned cdnjs, jsDelivr, unpkg or code.jquery.com; media only as files published beside the page; no doctype, html, head or body tags in the published file; nothing scrolls sideways at 390 px; colours as tokens with light and dark; every localStorage call wrapped in try/catch; no print button, downloads, iframes, alert, confirm or prompt; sound only from a tap; reduced motion respected; phone numbers as selectable text with Copy.
- **Little mobile data:** heavy media loads only on wide screens or when asked for.
- **Build:** `src/parts/` (head.html, data.js, data2.js, data3.js, engine.js) joined by `src/build.js`; `npm run all` checks, builds and tests.

## Brand Commitments

- Name: Green Zone MO Guide. Line: "Right patient. Right zone. Right time."
- UK spelling as in the ebook; plain, short sentences in the imperative for steps; no em dashes; department terms as the department uses them.
- Never generate or imitate the face or voice of YBhg. Datuk Mahathar.
- Look and feel (confirmed with Krishna, 8 Nov 2026): a familiar clinical-reference app layout, as in version 7, finished to the craft level of MDCalc and UpToDate, with maps, diagrams, illustration and animation carrying the content.

## Evidence on Hand

- The ebook PDF (in the claude.ai project files, not in this folder).
- Department documents from the HKL ED MO Drive and the triage course folder, listed in `DRIVE-RUN-THROUGH.md`.
- Media: six Flow Studio illustrations (`illustrations/`), six 8-second Flow clips (`flow-video/`, smaller copies in `app/clips/`), journey narration (`app/audio/`), seventeen Flow Studio tile stills and 7 to 8-second tile loops (`illustrations/tiles/`, `flow-video/tiles/`, smaller copies in `app/tiles/`), the explainer films in English and Bahasa Melayu, day and night (`video/`), the two A3 poster sheets (`poster/`).
- Research on point-of-care lookup and teaching video: `RESEARCH.md` (Ely, BMJ 1999; Brame, 2016).
- No usage data, testimonials or outcome measures exist. None may be invented.

## Product Principles

1. **The answer within two minutes.** Judge every screen first by how fast an MO on shift reaches the answer on a phone.
2. **The source stays visible.** Every pathway shows its ebook pages; every note shows its source and date.
3. **Show the whole route.** An MO sees where the pathway and the patient go next, not only the current step.
4. **Learn the way you work.** The learning screens teach the same pathways and rules the on-shift screens use.
5. **Light by default.** Nothing heavy loads on mobile data unless asked for.

## Accessibility & Inclusion

- WCAG 2.2 AA: every control reachable by keyboard with visible focus; captions and a transcript for narrated media; no autoplay with sound; a pause control for motion longer than 5 seconds; reduced motion respected; no more than three flashes a second; reflow at 390 px without sideways scroll.
- Standard and large text settings; light, dark and device themes.
