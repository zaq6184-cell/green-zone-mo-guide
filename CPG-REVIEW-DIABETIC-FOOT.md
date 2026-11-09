# Diabetic foot CPG, 2nd edition: line-by-line review for the Green Zone MO Guide

**In the app since 9 Nov 2026** (Academy CPG round): the entry *Diabetic foot: CPG 2nd edition* (`#diabetic-foot-cpg`), linked from the ebook's cellulitis pathway, with its patient education as the Discharge advice tab and six reference tabs. No calculator was built: the steps grade the ulcer and the infection.

**Source:** *Clinical Practice Guidelines: Management of Diabetic Foot (Second Edition)*. Malaysian Health Technology Assessment Section (MaHTAS), Medical Development Division, Ministry of Health Malaysia. Issued 2018. MOH/P/PAK/411.18(GU)-e, ISBN 978-967-2173-61-8. 76 PDF pages.
**File reviewed (read-only):** `C:\Users\user\Documents\Codex\2026-11-09\dedicated-loop-would\outputs\AMM Clinical Practice Guidelines\Orthopedic\2018 - Management of Diabetic Foot (2nd Edition) [920].pdf`.
**Copyright (PDF page 2):** "The copyright owner of this publication is MaHTAS. Content may be reproduced in any number of copies and in any format or medium provided that a copyright acknowledgement to MaHTAS is included and the content is not changed, not sold, nor used to promote or endorse any product or service, and not used in an inappropriate or misleading context."
**Reviewed:** 9 Nov 2026, from the PyMuPDF text layer of all 76 pages, with page images of the cover, both algorithms, Tables 1, 2 and 4, the monitoring table, pages 2, 4 to 8, 14, 18 and 19, and every appendix page from 38 to 56 (Appendices 8 to 10 rendered upright, as their tables are printed sideways).

**Outputs (all in this folder):**
- the entry: `P['diabetic-foot-cpg']`, 32 nodes, 6 reference tabs and a 14-item `advice` list; 44.2 KB on disk, 40.9 KB as JSON (asthma-cpg is 39.9 KB, gout-cpg 35.0 KB). `node --check` passes with the `const P = {cellulitis:{}};` prefix.
- the calculator facts: 42 source phrases for `CALC_FACTS`, each found in the draft by the same `JSON.stringify(P[id]).includes(s)` test the app uses, and each verbatim in the PDF text layer.
- This review.

The project's own content check (`src/check-data.js`), run on copies of `data.js` to `data5.js` with the draft appended, gives **"42 entries; rules: 15"** and **"no errors"**: every option, link and see-also resolves and every node is reachable. Nothing under `C:\Users\user\Green Zone` was changed.

---

## Page numbers

| What | PDF pages | Printed |
|---|---|---|
| Cover | 1 | none |
| Copyright and statement of intent; updating the CPG | 2 to 3 | none |
| Contents | 4 to 5 | none |
| Levels of evidence to Algorithm B | 6 to 16 | i to xi (**PDF = roman value + 5**): key recommendations ii to iii, target population vi, Algorithm A **x**, Algorithm B **xi** |
| Blank page | 17 | none visible (its hidden text layer reads "xiii"; there is no p xii) |
| Chapters 1 to 8, references, Appendices 1 to 10, abbreviations, acknowledgement | 18 to 75 | 1 to 58 (**PDF = printed + 17**) |
| Back cover | 76 | none |

Front matter is cited with roman numerals (Algorithm B is **p xi**); everything else with the printed number, as "p51".

## Is this the published MaHTAS version?

- **Title page (image checked):** "CLINICAL PRACTICE GUIDELINES 2018 MOH/P/PAK/411.18(GU)-e", "MANAGEMENT OF DIABETIC FOOT (SECOND EDITION)", with the logos of the Ministry of Health, the Malaysian Orthopaedic Association, the Malaysian Endocrine & Metabolic Society, the Family Medicine Specialists Association and the Academy of Medicine Malaysia. PDF page 2 names MaHTAS as publisher, with the ISBN and the copyright statement. PDF page 3: "These guidelines were issued in 2018". Chapter 1 (p1): "an updated version replacing the first edition of 2004".
- **Page count and hash:** 76 pages, matching the manifest. SHA-256 `e581d55348394d1d362b0432c8b2ab2df29e3ffadad4f61857480ddbd2fc15d8`, identical to the manifest's.
- **File properties:** PDF 1.6 made with Acrobat 11.0.3, created and modified 2 Apr 2019. Its four bookmarks are print-production file names ("f cover foot", "CPG-kandungan Diabetic", "CPG-management of diabetic_", "b cover foot"). No annotations, links, form fields, embedded files or watermarks. The word "draft" appears only in sentences about the drafting process (p v, viii, ix, 58), not as a stamp.
- **Where it came from:** the manifest gives a Google Drive download link listed on the Hospital Raja Perempuan Zainab II CPG page of JKN Kelantan (`jknkelantan.moh.gov.my/hrpz2/v1/cpg-hrpz/`), not MaHTAS or the Academy. Nothing in the file suggests it differs from the published e-version (the "-e" in its code), but it was **not compared** with Academy file 920 or the MoH web copy, which the CPG calls "the definitive version at all times" (PDF page 3, unnumbered).
- **Currency:** "will be reviewed in a minimum period of four years (2022) or sooner if new evidence becomes available" (PDF page 3). The review date has passed; the Academy list read on 9 Nov 2026 (`CPG_SHELF` in `engine.js`) still lists this 2nd edition (2018).

---

## (a) The CPG chapter by chapter

| Part | Printed pages | What matters to the ED | In the draft? |
|---|---|---|---|
| Cover, copyright, statement of intent, updating | PDF 1 to 3 | Copyright terms; review due 2022. | Copyright in `refs`. Statement of intent cut for size (the gout entry has none either). |
| Contents | PDF 4 to 5 | Names the algorithms "Algorithm 1" and "Algorithm 2"; the pages print "ALGORITHM A" and "ALGORITHM B". Lists 2.4 Classification and 2.5 Risk Stratification; the body has them the other way round. Lists 5.3 Rehabilitation; the body has it as 5.2 c. | No (editorial points in (b)) |
| Levels of evidence, GRADE | i | Nothing for the ED. | No |
| Key recommendations | ii to iii | The same 15 recommendations in short form. | Through the recommendations |
| Development, objectives, target population | iv to vi | "All patients with diabetes mellitus who are at risk or have developed diabetic foot"; exclusion criteria "None"; settings "Primary, secondary and tertiary care settings". No emergency department setting. | `menu` hint |
| Development group, reviewers | vii to ix | HKL vascular surgery is represented (a DG member, the Review Committee's vascular member and an external reviewer). | No |
| **Algorithm A, screening** | x | The active foot problem list; risk from history and findings; referral by risk. | `gen` (info), `hi`, `md`, `lw`, `high`, `modr`, `low`, `norm` |
| **Algorithm B, active foot problems** | xi | The ED algorithm: UT grade and stage to outpatient care by Foot Protection Services, oral antibiotics, or the multidisciplinary foot care team; the footnote on urgent admission. | `gen`, `admx`, `ulc`, `ut0`, `ut0op`, `pul`, `infq`, `ibm`, `ib`, `ia`, `iia`, `mdt`; Classification tab |
| 1 Introduction | 1 | Definition; outcome statistics. | No (definition cut for size) |
| 2.1 Screening, Recommendation 1 | 2 to 5 | Monofilament plus another modality; PAD screening by pulses; PAD excluded by ABI 0.9 - 1.3, TBI ≥0.75 or triphasic waveforms. Neuropen, Ipswich Touch Test, VibraTip and Neuropad accuracy data are clinic material. | Assessment tab (monofilament, pulses, ABI). The other devices left out. |
| 2.2 Diagnosis | 5 to 6 | Skin (capillary refill >2 seconds); vascular ("mandatory palpation" of four pulses); critical limb ischaemia defined and "should be referred urgently to specialist care"; probe-to-bone (87% and 83%). Predictors of ulceration (clinic). | `thr`, `pul` hint, Assessment tab. Predictors cut for size. |
| 2.3 Investigation | 6 to 7 | Laboratory: "no evidence ... except in active infection" (no list of tests). X-ray first; osteomyelitis may not show for 10 - 21 days; normal markers, X-ray or probe-to-bone do not exclude it; MRI is the primary imaging for infection. | Assessment tab; `iia`, `om` |
| 2.4 Risk stratification, Table 1 | 8 | Table 1; box: active problems "seen within 24 hours in secondary/tertiary care". | Classification tab; `gen` info; risk branch |
| 2.5 Classification, Recommendation 2 | 8 to 9 | University of Texas classification preferred; other systems named. | `ulc`, Classification tab |
| **3 Referral, Table 2, Recommendation 3** | 10 to 11 | The four limb- or life-threatening examples; the referral schedule; who the foot protection team and the multidisciplinary foot care team are. | `thr`, `urg`, `mdt`, `high`, `modr`, Referral and follow-up tab |
| 4.1 Patient education, Recommendation 4 | 12 | At least annually, more often in higher risk. | `high`; `advice` |
| 4.2 Metabolic control, Table 3, Recommendation 5 | 12 to 13 | HbA1c targets: a clinic task. | No |
| 4.3 Footwear, Table 4, Recommendation 6 | 13 to 15 | Checks before and after wearing; no thong slippers; prescribed footwear by risk. | Foot care tab |
| 4.4 Preventive surgery, Recommendation 7 | 15 to 16 | Elective. | No |
| 5.1a Analgesics, Recommendation 8 | 17 | WHO ladder by name only; neuropathic adjuvants. No doses. | Foot care tab (Pain note); `#pain` links |
| 5.1b Topical antimicrobials | 17 to 18 | Iodine and chlorhexidine; seven topical antibiotics "may be used". | Antibiotics tab, with the contradiction from p54 |
| **5.1c Systemic antibiotics, Recommendation 8** | 18 to 19 | The p19 box: no antibiotics without symptoms of infection; C&S; lowest cost; broad spectrum for moderate and severe; never for prevention or beyond 14 days in mild soft tissue infection; antibiotics as an adjunct to surgical debridement. | `admx`, `ib`, `ia`, `mild`, Antibiotics tab |
| 5.2a Dressings, Recommendation 9 | 19 to 20 | Basic dressing is the minimum; advanced dressings may be offered; silver reserved for high bioburden. | `home`, Wound care tab |
| 5.2a Adjuvant therapy, Recommendation 10 | 21 to 22 | NPWT, maggots, HBOT: specialist. | No |
| 5.2b Revascularisation, Recommendation 11 | 22 to 23 | Offered in PAD; antiplatelet after revascularisation. | `urg`, `mdt` |
| 5.2b Debridement, Recommendation 12 | 23 | By trained staff only; surgical debridement when non-surgical fails or the ulcer is deep and infected. | `mdt`, `home`, Wound care tab |
| 5.2b Reconstruction, Recommendation 13 | 23 to 24 | Grafting: specialist. | No |
| 5.2c Off-loading and rehabilitation, Recommendation 14 | 24 to 25 | Off-loading for plantar ulcers; assistive devices; rehabilitation after amputation. | `ia`, `home`, Wound care tab |
| 6 Monitoring and follow-up | 26 | Frequency by risk (annually; 3 - 6 months; 1 - 2 months; 1 - 2 weeks). No column for an active problem. | `high`, `modr`, `low` gap, Referral and follow-up tab |
| **7 Charcot neuroarthropathy, Recommendation 15** | 27 to 28 | "CN can be mistaken for cellulitis at early stage"; when to suspect it; MRI early; immobilise and off-load; orthopaedic surgeons "for immediate treatment". | `cn`, `ut0`, `cnr` |
| 8 Implementing the guidelines | 29 to 30 | Audit indicators. | No |
| References, Appendices 1 and 2 | 31 to 37 | Nothing for the ED. | No |
| Appendix 3: monofilament and tuning fork | 38 | Technique; ten sites marked. | Assessment tab (brief) |
| Appendix 4: assessment form | 39 to 40 | A paper form with name and identity card fields, so it is **not reproduced** (rule 4). Its clinical anchors are used: capillary refill >3 seconds, "Abnormal monofilament test ( >3/10 )", ABI from the higher of DPA and PTA, the foot care education checklist, follow-up 3 monthly, 6 monthly or yearly. | Assessment and Foot care tabs |
| Appendix 5: University of Texas classification | 41 | The grade and stage table. | Classification tab, `ulc` |
| **Appendix 6: patient education** | 42 to 44 | Six personal foot care points; fourteen patient paragraphs ending with when urgent care is needed; a providers' checklist. **English only.** | The fourteen paragraphs are the `advice` list, unchanged; the return-advice paragraph is also in `home`. |
| Appendix 7: footwear | 45 | Eight features of an ideal shoe. | Foot care tab |
| Appendix 8: neuropathic pain | 46 to 49 | First to third-line drugs with initial and maximum doses. | **Left out for size** (a pointer in the Pain note). It would add about 1.5 KB as a tab if wanted. |
| **Appendix 9: antibiotics** | 50 to 54 | Mild, moderate and severe diabetic foot infection, MRSA, necrotising fasciitis, osteomyelitis and suppurative wound infection, with doses; adapted from the National Antibiotic Guideline (2014). | `sev`, `mild`, `mod`, `sevx`, `nf`, `om`, `sup`, `ib`; Antibiotics tab |
| Appendix 10: dressings | 55 to 56 | Indications, contraindications and review intervals. | Wound care tab (advantages and disadvantages columns left out) |
| Abbreviations, acknowledgement, disclosure, funding | 57 to 58 | "GFR" is defined as gastrocnemius-soleus fascia recession. | No |

**No leaflet.** No Bahasa Melayu text is printed anywhere in the CPG. Appendix 6 is "Modified" from *Panduan Penjagaan Kaki Bagi Pesakit Diabetes* (JKWPKL&P, 2012, unpublished), whose Malay text is not in the CPG. So the draft has no `leaflet`; Appendix 6's fourteen patient paragraphs go in `advice`, which the app shows as a Discharge advice tab with Copy and a "Discharge advice" button on the discharge outcomes (`ut0op`, `ib`, `ia`, `home`, `low`, `norm`). If the department has the Malay original, it could be added later as a labelled department note (rule 6).

**Not reviewed:** the CPG's Quick Reference (Academy file 921) and the MoH web version.

---

## (b) Points inside the CPG

Ordered by ED impact. Each was checked on the page image.

### Disposition and referral

1. **Where a simple active problem goes: three answers.** Algorithm B (p xi) sends UT 0 and UT IA to "Manage as outpatient by Foot Protection Services", and UT IB to "Oral antibiotics" and then the same box; 3.1 (p10) agrees that the foot protection team manages "simple active diabetic foot problems in the community that do not require admission". But Table 2 (p10) gives every active problem "Urgent referral within 24 hours to multidisciplinary foot care team", and the box on p8 says "Patients with active diabetic foot problem should be referred urgently and seen within 24 hours in secondary/tertiary care". The draft follows Algorithm B in the step runner and states the conflict in each outpatient outcome's gap (`ut0op`, `ia`) and in the Classification tab.
2. **Algorithm B sends every patient without an ulcer to outpatient care**, including the non-ulcer problems that chapter 3 calls limb-threatening ("critical limb ischaemia", "clinical concern that there is a deep-seated soft tissue or bone infection (with or without ulceration)", "gangrene (with or without ulceration)", p10) and suspected Charcot neuroarthropathy, which "should be referred to the orthopaedic surgeons for immediate treatment" (Recommendation 15, p28). Its only other exit is the footnote for general illness. **The draft asks the general-illness footnote first, then chapter 3's four examples (with necrotising fasciitis from Appendix 9 added to them), before Algorithm B's grading, and asks about Charcot at UT 0.** This orders statements of the CPG; it is a choice for Krishna to confirm (open question 3).
3. **No route for UT IIA or IIIA.** Algorithm B has boxes for UT 0, IA, IB, IIB/IIIB, the C stages and the D stages, but none for a deep ulcer (to tendon, capsule, bone or joint) without infection or ischaemia. The draft has a `neutral` outcome (`iia`) that says so and links both referral outcomes.
4. **Two infection frameworks, never mapped.** Algorithm B splits infected ulcers by depth and the need for surgery: "Superficial ulcer not requiring surgical intervention (UT IB)" gets "Oral antibiotics"; "Deep ulcer requiring surgical intervention (UT IIB/IIIB)" goes to the team. Appendix 9 grades infection as mild ("Erythema<2 cm around the ulcer", "No systemic signs"), moderate ("Deep tissue infection", "Erythema >2 cm around ulcer", "No ... SIRS") or severe ("All of the above and presence of SIRS"), and only the mild regimens are oral. A superficial ulcer with erythema over 2 cm is UT IB (oral antibiotics, outpatient) by Algorithm B but moderate (IV) by Appendix 9. The draft checks the mild criteria (`ibm`) before the UT IB outpatient outcome and sends anything else to the severity step. The algorithm also pairs depth with the need for surgery, so a superficial infected ulcer that needs surgery, or a deep one that does not, has no box.
5. **Recommendation 8 against Algorithm B:** "Antibiotics should be used as an adjunct to surgical debridement in infected diabetic foot" (p19), while Algorithm B gives oral antibiotics alone for an infected ulcer "not requiring surgical intervention".
6. **Ischaemia has three definitions.** Algorithm B: "Ischaemia (pulses not palpable)", without naming the pulses. Page 6: "Critical limb ischaemia is defined as rest pain with ulcers or tissue loss attributed to arterial occlusive disease." Page 4: "PAD can be excluded when: ankle brachial index (ABI) is 0.9 - 1.3; toe brachial index is ≥0.75; there is presence of triphasic pedal Doppler arterial waveforms (PDAW)". "Non-critical limb ischaemia" (Table 1) is never defined.
7. **High risk: Algorithm A against Table 1.** Algorithm A (p x) asks only "Previous history of ulceration, amputation or on renal replacement therapy?" before sending "Deformity/neuropathy/non-critical limb ischaemia" to moderate risk; Table 1 (p8) also makes "neuropathy and non-critical limb ischaemia", "neuropathy with callus and/or deformity" and "non-critical limb ischaemia with callus and/or deformity" high risk. Algorithm A's footnote points to Table 1, so the draft uses Table 1.
8. **Three lists of active or urgent problems.** Algorithm A: "spreading infection"; Table 1: "infection"; chapter 3's urgent list adds "ulceration with fever or any signs of sepsis" and the deep-seated infection item.
9. **Follow-up for an active problem is not given.** Chapter 6 (p26) has columns for low, moderate and high risk only, and "immediate concern" is not defined. The assessment form's follow-up boxes are "3 monthly", "6 monthly" and "Yearly" (p40), which do not match chapter 6's 1 - 2 weeks and 1 - 2 months.
10. **Destination wording:** moderate and high risk go to "foot protection services" (Table 2) or to "the multidisciplinary professionals in the field of podiatry, diabetology, biomechanics and orthoses, and wound care" (p10). "Immediate treatment" for Charcot (Recommendation 15) has no time frame.

### Antibiotics (Appendix 9, p50 to 54)

11. **Piperacillin/tazobactam printed in milligrams.** The moderate row reads "If pseudomonas is suspected: Piperacillin/Tazobactam 4.5 mg IV q6-8h"; the severe row reads "4.5 g IV q6-8h" and necrotising fasciitis "4.5 g IV q8h" (image checked, p51 and p52). The draft quotes it as printed and flags it in `mod` and the Antibiotics tab. The calculator must not compute from it.
12. **Vancomycin printed two ways:** "Add Vancomycin 1 g IV q12h if high risk for MRSA" (severe infection and necrotising fasciitis comments) and "Vancomycin 15-20 mg/kg IV q8-12h" (MRSA row). No maximum, no renal adjustment, and "high risk for MRSA" is not defined.
13. **Ciprofloxacin intervals differ:** "400 mg IV q8-12h" (moderate, p51) and "400mg IV q24h" (acute osteomyelitis, gram negative bacilli, p53).
14. **Ceftriaxone has no route** in the moderate row ("Ceftriaxone 1 – 2 g q24h"); the osteomyelitis row prints "2g IV q24h".
15. **Piperacillin/tazobactam interval:** q6-8h (moderate, severe) and q8h (necrotising fasciitis).
16. **Gaps in the grading:** erythema of exactly 2 cm is in neither "<2 cm" nor ">2 cm"; erythema is measured "around the ulcer", so an infection without an ulcer is not graded; SIRS is not defined; a patient with systemic signs short of SIRS fits neither mild ("No systemic signs") nor, clearly, moderate; and a, b and c are listed without "and" or "or".
17. **Osteomyelitis durations differ:** "If proven osteomyelitis: at least 4-6 weeks" (moderate row, p51); "to complete minimum of six weeks" (acute osteomyelitis, p53); "Minimum length six weeks but usually >3 months" (chronic, p53). The acute regimen is printed for "No open wound" only, so there is no regimen for osteomyelitis under an ulcer beyond the moderate row's duration.
18. **Topical antibiotics:** "The following topical antibiotics may be used in diabetic foot: bacitracin C, metronidazole, neomycin, fusidic acid, mupirocin, silver sulphadiazine, gentamicin" (p18), against "Topical antibiotics are not recommended for treatment of wound infections as they may result in the emergence of resistant organisms" (p54).
19. **Trimethoprim/sulphametoxazole "5 - 10 mg/kg PO q12h"** does not name the component the dose refers to.
20. **Suppurative wound infections:** "Gentamicin 5 mg/kg IV q24h OR As a monotherapy: Cefuroxime 1.5 g IV q8h" does not say whether gentamicin is given with cloxacillin. "Patient's tetanus immunisation status should be assessed in all cases" appears only here, with no regimen.
21. **Wording:** "local or systemic symptoms of infection" (p19) and "local or systemic features of infection" (p50). The mild duration "1 - 2 weeks" (p50) agrees with "not ... >14 days" (p19).
22. **Source age:** Appendix 9 is "Adapted" from the National Antibiotic Guideline (Second Edition, 2014). Whether a later edition changes these regimens was not checked (outside this CPG).

### Assessment and tests

23. **Capillary refill:** "prolonged capillary refill time (>2 seconds)" (p5); "Capillary refill >3 seconds" (assessment form, p40).
24. **Monofilament threshold:** the text gives the instrument ("5.07/10-g") but no abnormal threshold; Appendix 3 marks ten sites (four "shown to identify 90% of patients with abnormal monofilament test", six "other recommended sites"); the form prints "Abnormal monofilament test ( >3/10 )". The Ipswich Touch Test uses "≥2 insensate sites out of the six sites" (p3).
25. **No blood tests are listed.** "There is no evidence on laboratory investigation in supporting the diagnosis of diabetic foot except in active infection" (p6). Charcot suspicion needs "the absence of fever and elevated erythrocyte sedimentation rate" (p27), but no ESR cut-off is given.
26. **ABI:** normal "0.9 - 1.3" (p4, p6); the form says "Use either DPA or PTA whichever higher" (p40). No formula, no brachial side, and no action for a value outside the range.

### Editorial (no clinical effect)

- Contents "Algorithm 1" and "Algorithm 2" against "ALGORITHM A" and "ALGORITHM B" on the pages; contents 2.4 and 2.5 swapped; contents "5.3 Rehabilitation" against "c. Rehabilitation" under 5.2.
- PDF page 17 is blank, with a hidden "xiii"; there is no p xii.
- Appendix 9 continuation headings read "DIABETES FOOT"; the first page reads "DIABETIC FOOT".
- "Capsaisin" (p46) and "Capsaicin" (p48); "Opiods" (p49); "Sulphametoxazole" (p50); "the entire infected bone are removed" (p51); "If gram negative bacilli by on gram stain" (p53); "MRI is useful tools" (p27); "who has amputation" (Recommendation 14). Quoted as printed in the draft where used.
- Isosorbide dinitrate spray is in the Appendix 8 dose table (p48) but not its flow chart (p46).
- Table 4 cites "J Foot Ankle Res. 2018;1:2"; reference 38 reads "2018;11:2".
- "19 Mac 2017" (p iv).
- "GFR: Gastrocnemius-soleus fascia recession" (p57) can be read as glomerular filtration rate.
- Recommendation 3 reads "should preferably be managed" (p ii) and "should be preferably managed" (p11).
- p9 gives the UT agreement as "t=0.447" beside "κ=0.415" for MW.

---

## (c) The ebook and department notes against this CPG

The ebook has no diabetic foot pathway. Its nearest is `cellulitis` (p30), "For a patient presenting with limb redness".

| Item | Ebook or department note says | CPG says (page) |
|---|---|---|
| Scope | Ebook cellulitis: "For a patient presenting with limb redness"; no mention of diabetes, ulcers or the foot | "infection, ulceration or destruction of tissues of the foot associated with neuropathy and/or peripheral arterial disease of people with diabetes mellitus" (p1) |
| Sepsis | "In sepsis or shock": Admit | "Refer urgently for admission if patients present with general illness (e.g. sepsis or diabetic emergencies) irrespective of foot problems" (p xi); "ulceration with fever or any signs of sepsis": refer urgently, specialist care (p10) |
| Necrotising fasciitis | "Suspected necrotising fasciitis (bullae, severe pain)": Admit | Regimens; "Early aggressive surgical debridement essential"; "With septicaemia/severe infection refer to ICU guidelines" (p52). No clinical features |
| DVT, meningococcal rash, groin redness | Each: Admit | Not mentioned |
| Antibiotics already taken | "Already completed a course of antibiotics?" Yes: "Admit and treat as partially treated cellulitis" | No such rule. "based on the most recent culture and sensitivity (C&S) report" (p19); "If antibiotic-resistant organisms are likely, treat as severe infection" (p51) |
| Practical concerns | Any of the seven: "Consider admission" | No social criteria; the foot protection team manages "simple active diabetic foot problems in the community that do not require admission" (p10) |
| Outpatient antibiotic | "Discharge with antibiotics and symptomatic relief medicine"; the ebook names no antibiotic | Mild: "Cephalexin 500 mg PO q6h OR Amoxycillin/Clavulanate 625 mg PO q8h"; alternatives "Clindamycin 300 - 450 mg PO q8h OR Trimethoprim/Sulphametoxazole 5 - 10 mg/kg PO q12h"; "Duration:1 - 2 weeks" (p50); not ">14 days" (p19) |
| Follow-up | "TCA EMWATCH, EMACC, PC clinic or KK" | UT 0, IA and IB: "Manage as outpatient by Foot Protection Services" (p xi); Table 2: active, "Urgent referral within 24 hours to multidisciplinary foot care team" (p10) |
| Return advice | "Come to the nearest health facility if the condition worsens" | "Urgent care is needed when there is presence of pain, noticeably red or discoloured areas, unusually hot areas, discharges, bad smell, an ulcer or blister or if feeling generally unwell with difficulty controlling sugar levels" (p43) |
| Red, hot foot that is not infection | Not covered | "CN can be mistaken for cellulitis at early stage" (p27); Charcot to the orthopaedic surgeons "for immediate treatment" (Recommendation 15, p28) |
| Investigations | None (USG 2-point compression for suspected DVT) | X-ray first; MRI for infection and osteomyelitis; probe-to-bone; no blood test list (p6 to 7) |
| Wound care | Not covered | Dressings, debridement by trained staff, off-loading (p19 to 25; Appendix 10) |
| Diabetic emergencies (ebook `hyperglycaemia`) | DKA and HHS: admit; "DKA and HHS are exclusions for MAU" | Diabetic emergencies: "Refer urgently for admission" (p xi). Consistent |
| Analgesia (ebook `pain`) | Doses for paracetamol, NSAIDs and opioids | WHO ladder by name only (p17). The draft links `#pain` |
| **MAU criteria flow chart, 18 Oct 2022** (`mau-admission`) | Diagnoses MAU will consider include "Others: Cellulitis; diabetic foot ulcer; poisoning; drug overdose; snake bite"; exclusions include shock and DKA or HHS | The multidisciplinary foot care team "in the hospital is led by the orthopaedic surgeon and/or physician" (p11). No ward named. Not in conflict; which team takes which ulcer is for the department |
| **Admission to General Medicine, Director's memo HKL/PENG/98/100/1/JLD8 (12), Jan 2026; GM letter 14 Nov 2024** (`referral-rules--med`) | "Do not admit to a General Medicine ward without referring to the Medical specialist or MO on call"; "This includes cases a surgical primary team declined and suggested for a medical ward, for example ... diabetic foot ulcer, ulcer from peripheral vascular disease ..." | "Subsequent referral to other specialty is made according to the main problem presented by the patient" (p11); revascularisation for PAD (Recommendation 11). The memo implies surgical teams sometimes decline diabetic foot ulcers in HKL; the CPG routes them to an orthopaedic or physician-led team |
| **Orthopaedic referrals, letter 17 Jan 2018 and memo 20 Dec 2022** (`referral-rules--ortho`) | Dislocations to the on-call team; clinic referrals to the Orthopaedic clinic at Wisma Kayu; notes in duplicate; the referral register | Charcot: orthopaedic surgeons "for immediate treatment" (p28). Whether that is the on-call team or the clinic is not stated |
| **IV antibiotic memo, 30 Jun 2026** (`gz-rules--ivab`) | No bed free: IV antibiotics on a chair in the CCA, "with one of the four allowed antibiotics only: Augmentin, cefuroxime, ceftriaxone or Unasyn" | Moderate infection: "Ampicillin/Sulbactam 1.5 - 3 g IV q6 - 8h OR Ceftriaxone 1 – 2 g q24h ±Metronidazole 500mg IV q8h" (p51). Two of the four CCA drugs are CPG moderate options; metronidazole, piperacillin/tazobactam, ciprofloxacin and clindamycin are not on the CCA list. Cefuroxime appears only for gram-negative suppurative wound infection (p54); IV Augmentin is not in the diabetic foot tables |
| **EM Watch, Aug 2023** (`em-watch`) | Takes "Cellulitis; uncontrolled diabetes" and "wound management" | No telemedicine follow-up in the CPG |
| **EMACC SOP, 1 Feb 2018** (`emacc`) | "large laceration (especially diabetic)": within 3 days for wound check; uncontrolled DM within 1 week | No ED follow-up clinic in the CPG |

No department entry in `data2.js` or `data3.js` mentions diabetic foot other than the MAU table row quoted above; `data.js` mentions it once, in `referral-rules--med` (quoted above).

---

## (d) Calculator candidates

### 1. Diabetic foot infection: grade and antibiotics (Appendix 9). Recommended.

- **Inputs:** depth (skin and subcutaneous tissues only, or deep tissue); erythema around the ulcer (under 2 cm, exactly 2 cm, over 2 cm); systemic signs (none, some, SIRS present, as the doctor judges); pseudomonas suspected; MRSA known or high risk; antibiotic-resistant organisms likely; weight (optional, the hub's shared weight) for the mg/kg doses.
- **Source text behind each grade and dose:** mild, "a. Local infection involving skin and subcutaneous tissues", "b. Erythema<2 cm around the ulcer", "c. No systemic signs" (p50); moderate, "a. Deep tissue infection", "b. Erythema >2 cm around ulcer", "c. No Systemic Inflammatory Response Syndrome (SIRS)" (p51); severe, "All of the above and presence of SIRS" (p51); each regimen and duration as in the facts file; ">14 days for the treatment of mild soft tissue infection in diabetic foot" (p19).
- **Output:** the grade with its criteria quoted; preferred and alternative regimens and duration; the vancomycin add-on; "If antibiotic-resistant organisms are likely, treat as severe infection".
- **Where it must decline ("Not in the source"):** erythema of exactly 2 cm; mixed criteria (deep tissue infection with erythema under 2 cm, or superficial infection with erythema over 2 cm), because Appendix 9 does not say whether a, b and c must all be met; systemic signs that are not SIRS; no ulcer (erythema is "around the ulcer"); any renal adjustment. SIRS is the doctor's call and the screen must say the CPG gives no criteria. **Piperacillin/tazobactam in the moderate row is printed "4.5 mg"**: show it as printed with the flag, never compute or correct it. Show both printed vancomycin doses; a weight-based range from "15-20 mg/kg" is possible but has no printed maximum, so only with Krishna's agreement. Do not compute trimethoprim/sulphametoxazole mg/kg (the component is not named).

### 2. University of Texas grade and Algorithm B route. Recommended, as part 2 of the same calculator.

- **Inputs:** general illness (sepsis, diabetic emergency, other); chapter 3 urgent examples; ulcer present; depth (superficial, to tendon or capsule, to bone or joint); infection; foot pulses palpable.
- **Output:** the UT code (for example IIB) with the Appendix 5 cell text; Algorithm B's box ("Manage as outpatient by Foot Protection Services", "Oral antibiotics", "Refer Multidisciplinary Foot Care Team") or the footnote ("Refer urgently for admission ..."); Table 2's timing for active problems, with the conflict shown.
- **Where it must decline:** UT IIA and IIIA (no box); a superficial infected ulcer needing surgery, or a deep infected ulcer not needing it (Algorithm B ties depth to surgery); UT 0 with ischaemia or gangrene, or suspected Charcot, where Algorithm B's outpatient box conflicts with chapter 3 and Recommendation 15 (show both).

### Not candidates

- **Risk stratification (Table 1) with referral timing (Table 2) and monitoring (chapter 6):** possible, but a clinic task; "immediate concern" is undefined and Algorithm A disagrees with Table 1. Not for now.
- **ABI:** the CPG gives only the range that excludes PAD (0.9 - 1.3) and "Use either DPA or PTA whichever higher"; no formula, brachial side or action for abnormal values.
- **Charcot suspicion:** a checklist, already a step; no ESR cut-off.
- **Appendix 8 neuropathic pain doses:** fixed doses, not a calculation.

---

## (e) Every number in the draft, with the check

**Method.**
1. Every string in the entry (396 of them: titles, hints, items, options, gaps, tab notes, table cells, advice, references) was extracted from the draft with Node. Each fragment of four or more words was looked up in the PyMuPDF text layer, whitespace-normalised and case-insensitive: 291 of 463 fragments are verbatim. The other 172 are the guide's own words (titles, options, hints, gaps, source lines) or joins of verbatim pieces (a label such as "Preferred:" or "alternative", two table cells joined, a quote with its page reference), each looked at by hand. All 41 fragments of the 14 advice paragraphs are verbatim.
2. 77 key phrases (every dose, threshold, interval and duration, and the referral timings) were looked up verbatim and case-sensitive: **77 of 77 found**, each on the expected PDF page.
3. All 79 page citations attached to a quote were checked automatically against the page where the quote sits: 48 matched; the other 31 are citations on the guide's own words or on joined quotes, checked by hand. No citation points to the wrong page.
4. Every page holding a number used in the draft was also looked at as an image (Appendix 9 rendered upright), and each symbol was confirmed there: "<2 cm", ">2 cm", "≥0.75", "≤30", "±Metronidazole", the en dashes in "1 – 2 g" and "2 – 4 MU", "37°C", ">2 seconds", ">3 seconds", "( >3/10 )".
5. The 42 facts were checked twice: present in `JSON.stringify(P['diabetic-foot-cpg'])` (the app's own test) and verbatim in the PDF.

About 180 number occurrences (about 50 distinct values) appear in the draft, outside page references. The table lists each number-bearing passage that is verbatim in the source.

| Number-bearing text in the draft | Where in the draft | Printed page | Check |
|---|---|---|---|
| The examination uses a 5.07/10-g monofilament | Neuropathy and arterial disease | p2 | text layer + page image |
| Neuropathy should be assessed with 10-g monofilament and one other modality (e.g. pin prick, vibration sense with 128-Hz tuning fork, etc.) | Neuropathy and arterial disease | p4 | text layer + page image |
| (>2 seconds) | Where the CPG words it differently | p5 | text layer + page image |
| Skin changes due to vascular insufficiency such as skin atrophy, nail atrophy, diminished pedal hair, prolonged capillary refill time (>2 seconds) and reduced skin temperature are important to be looked for during skin assessment | Examination | p5 | text layer + page image |
| It has a sensitivity and specificity of 87% and 83% respectively | Examination | p6 | text layer + page image |
| Features of osteomyelitis may not be visualised in plain radiographs until 10 - 21 days after the initial infection | Tests and imaging | p7 | text layer + page image |
| Patients with active diabetic foot problem should be referred urgently and seen within 24 hours in secondary/tertiary care | Table 1: diabetic foot risk stratification | p8 | text layer + page image |
| referred urgently and seen within 24 hours in secondary/tertiary care | Where the CPG words it differently | p8 | text layer + page image |
| Urgent referral within 24 hours to multidisciplinary foot care team | mdt, Table 2: recommended referral schedule, Where the CPG words it differently, urg | p10 | text layer + page image |
| 3 - 6 months | modr, Monitoring and follow-up | p26 | text layer + page image |
| 1 - 2 months | Monitoring and follow-up | p26 | text layer + page image |
| 1 - 2 weeks | Monitoring and follow-up | p26, p50 | text layer + page image |
| Capillary refill >3 seconds | Where the CPG words it differently | p40 | text layer + page image |
| Abnormal monofilament test ( >3/10 ) | Neuropathy and arterial disease | p40 | text layer + page image |
| Ensure HbA1c, blood pressure, cholesterol and weight are under control | advice0 | p42 | text layer + page image |
| Use only lukewarm (below 37°C) and not hot water | advice3 | p42 | text layer + page image |
| Keep the blood flowing to feet by wiggling toes and moving ankles for five minutes, 2 - 3 times a day | advice10 | p43 | text layer + page image |
| Erythema<2 cm around the ulcer | ibm | p50 | text layer + page image |
| Cephalexin 500 mg PO q6h OR Amoxycillin/Clavulanate 625 mg PO q8h | ib, mild, Appendix 9 | p50 | text layer + page image |
| Clindamycin 300 - 450 mg PO q8h OR Trimethoprim/Sulphametoxazole 5 - 10 mg/kg PO q12h | ib, mild, Appendix 9 | p50 | text layer + page image |
| Duration:1 - 2 weeks | ib, mild, Appendix 9 | p50 | text layer + page image |
| Ampicillin/Sulbactam 1.5 - 3 g IV q6 - 8h OR Ceftriaxone 1 – 2 g q24h ±Metronidazole 500mg IV q8h | mod, Appendix 9 | p51 | text layer + page image |
| Ciprofloxacin 400 mg IV q8-12h PLUS Clindamycin 600mg IV q8h | mod, Appendix 9 | p51 | text layer + page image |
| usually 2-4 weeks; modify according to clinical response | mod, Appendix 9 | p51 | text layer + page image |
| at least 4-6 weeks | mod, Appendix 9 | p51 | text layer + page image |
| Shorter duration if the entire infected bone are removed (3 to 5 days may be sufficient) | mod, Appendix 9 | p51 | text layer + page image |
| Piperacillin/Tazobactam 4.5 g IV q6-8h | sevx, Appendix 9 | p51 | text layer + page image |
| Cefepime 1-2g IV q8h | sevx, Appendix 9 | p51 | text layer + page image |
| Add Vancomycin 1 g IV q12h if high risk for MRSA | nf, sevx | p51, p52 | text layer + page image |
| Vancomycin 15-20 mg/kg IV q8-12h | sevx, Appendix 9 | p51 | text layer + page image |
| 4-6 weeks | sevx, Appendix 9 | p51 | text layer + page image |
| Piperacillin/Tazobactam 4.5 mg IV q6-8h | Appendix 9 | p51 | text layer + page image |
| Linezolid 600mg IV/PO q12h | Appendix 9 | p51 | text layer + page image |
| Piperacillin/Tazobactam 4.5 g IV q8h | nf | p52 | text layer + page image |
| Benzylpenicillin 2 – 4 MU IV q4h PLUS Clindamycin 600 - 900 mg IV q8h | nf | p52 | text layer + page image |
| Cloxacillin 2 g IV q6h | om | p53 | text layer + page image |
| Ciprofloxacin 400mg IV q24h OR Ceftriaxone 2g IV q24h | om | p53 | text layer + page image |
| Clindamycin 300-600 mg IV q8h followed by oral therapy (same dose) | om | p53 | text layer + page image |
| initial IV therapy for 2-4 weeks, followed by oral therapy, to complete minimum of six weeks | om | p53 | text layer + page image |
| Minimum length six weeks but usually >3 months | om | p53 | text layer + page image |
| Cloxacillin 500 mg PO/IV q6h | sup | p54 | text layer + page image |
| Gentamicin 5 mg/kg IV q24h OR As a monotherapy | sup | p54 | text layer + page image |
| Cefuroxime 1.5 g IV q8h | sup | p54 | text layer + page image |
| 1 - 2 days | Appendix 10: types of wound dressing | p55 | text layer + page image |
| 2 - 3 days | Appendix 10: types of wound dressing | p55, p56 | text layer + page image |
| 2 - 5 days | Appendix 10: types of wound dressing | p56 | text layer + page image |
| 3 - 5 days | Appendix 10: types of wound dressing | p56 | text layer + page image |

**Numbers in joined or labelled text** (each piece verified in step 2, with its page):
- `ib`, `mild`: "Antibiotics should not be given for >14 days for the treatment of mild soft tissue infection in diabetic foot" joins the p19 box's lead-in to its second sub-bullet; the source has a colon and a list.
- `sev` info and the Antibiotics tab: the mild and moderate criteria are the three cells a, b and c joined with semicolons (p50, p51).
- `mod`: "Piperacillin/Tazobactam 4.5 mg IV q6-8h" is verbatim; the bracket after it is the guide's flag.
- `sevx`, `nf`: "alternative Linezolid 600mg IV/PO q12h", "alternative Cefotaxime 2 g IV q6h PLUS Metronidazole 500 mg IV q8h", "alternative Ampicillin/Sulbactam 1.5 g IV q8h PLUS Clindamycin 600 - 900 mg IV q8h": the word "alternative" stands for the table's Alternative column; each regimen is verbatim (p51, p52).
- `om`: "Acute osteomyelitis (Staphylococcus aureus (80%), ...)" joins the row heading and the organism cell (p53).
- `high`: "no immediate concern, 1 - 2 months; immediate concern, 1 - 2 weeks" and `modr` "Monitoring: 3 - 6 months" put the p26 table's column headings beside its cells; the Referral and follow-up tab has the same table.
- Classification tab: "PAD excluded when ABI is 0.9 - 1.3, toe brachial index is ≥0.75 or there are triphasic pedal Doppler arterial waveforms" restates the p4 list in one line; the Assessment tab quotes the list.
- Antibiotics tab: "Add Vancomycin 1 g IV q12h if high risk for MRSA. Duration of treatment: 4-6 weeks." joins two lines of one cell with a full stop.
- Words, not digits, all verbatim: "within two weeks", "within three months" (p10), "Annually" (p26), "Daily" (p55), "minimum of six weeks", "After three months" (p53), "five minutes" and "at least once a year" (p43), "Change socks daily" (p43).

---

## Open questions for Krishna (for Still to confirm)

1. **Piperacillin/tazobactam "4.5 mg IV q6-8h"** in the moderate row (p51): keep the as-printed flag, and ask pharmacy whether 4.5 g is meant.
2. **Where a simple active problem goes in HKL:** outpatient care by Foot Protection Services (Algorithm B) or the multidisciplinary foot care team within 24 hours (Table 2)? What are HKL's foot protection services and foot care team, and which team takes an ED referral (orthopaedics, general surgery or vascular)?
3. **The order of checks:** the draft asks the general-illness footnote and chapter 3's limb-threatening examples before Algorithm B, so a patient without an ulcer but with critical limb ischaemia, gangrene or a deep infection goes to urgent referral, not outpatient care. The draft also lists necrotising fasciitis with chapter 3's four examples (`thr`), although chapter 3 does not name it and Appendix 9 (p52) only says "Early aggressive surgical debridement essential". Confirm both choices.
4. **UT IIA and IIIA**, which Algorithm B does not route.
5. **Infection grading at the edges:** exactly 2 cm of erythema; systemic signs short of SIRS; what counts as SIRS; mixed criteria.
6. **Vancomycin:** 1 g IV q12h or 15-20 mg/kg IV q8-12h; renal adjustment for vancomycin and gentamicin (not in the CPG).
7. **Charcot:** on-call Orthopaedic team or the clinic, and how soon "immediate" is.
8. **Blood tests:** the CPG lists none; a list would need a department document.
9. **Topical antibiotics** (p18 against p54) and **capillary refill** (>2 seconds against >3 seconds).
10. **Appendix 8** (neuropathic pain doses): add it as a tab (about 1.5 KB)?
11. **A Malay foot care leaflet:** the department's copy of *Panduan Penjagaan Kaki Bagi Pesakit Diabetes* (JKWPKL&P, 2012), if it exists, could become a labelled department note.
12. **Currency:** the review date (2022) has passed; is a 3rd edition under way? And does the current National Antibiotic Guideline change Appendix 9?

---
