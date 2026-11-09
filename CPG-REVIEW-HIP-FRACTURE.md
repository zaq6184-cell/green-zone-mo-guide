# Review: CPG on Management of Geriatric Hip Fracture, 1st edition (MaHTAS, 2023)

**Built into the app on 9 Nov 2026** (third CPG round): the entry *Hip fracture in older adults: CPG 2023* (`#hip-fracture-cpg`) in the new Injuries and teeth group. No calculator was built.

For the Green Zone MO Guide, entry `hip-fracture-cpg`. Reviewed 9 Nov 2026.

- **Source:** *Clinical Practice Guidelines: Management of Geriatric Hip Fracture* (running head "CPG on Management of Geriatric Hip Fracture"), the first edition (p iv). Malaysian Health Technology Assessment Section (MaHTAS), Medical Development Division, Ministry of Health Malaysia, 2023. The cover also carries the Malaysian Orthopaedic Association, the Academy of Medicine Malaysia and the Malaysian Society of Geriatric Medicine. MOH/P/PAK/529.23(GU)-e (cover, PDF page 1, read from the image: the cover has no text layer). e ISBN 978-967-2887-67-6 (PDF page 2). "Issued in 2023 and will be reviewed in a minimum period of four years (2027)" (PDF page 3, unnumbered). File read: `...\AMM Clinical Practice Guidelines\Orthopedic\2023 - Management of Geriatric Hip Fracture [1107].pdf`, 66 PDF pages (PDF created 14 May 2024, modified 1 Aug 2024), not modified. The Quick Reference (`... - Quick Reference [1108].pdf`, 8 PDF pages) was read only to compare; nothing in the draft is taken from it.
- **Copyright (PDF page 2):** MaHTAS owns it. "Content may be reproduced in any number of copies and in any format or medium provided that a copyright acknowledgement to MaHTAS is included and the content is not changed, not sold, nor used to promote or endorse any product or service, and not used in an inappropriate or misleading context." The draft's `refs` carry the acknowledgement line used in data6.js.
- **Page offset:** printed arabic page = PDF page − 15 (p1 = PDF 16; p50 = PDF 65). Front matter in roman = PDF page − 5 (p i = PDF 6; the algorithm, p x = PDF 15). PDF 1 is the cover, PDF 2 the copyright page, PDF 3 "Updating the CPG" (no page number), PDF 4 to 5 the contents, PDF 66 the back cover. Every page cited below and in the draft is the printed page.
- **Method:** text from PyMuPDF's text layer (it keeps ≥, ≤, <, >, ±). Every page has a text layer except the cover and back cover. The algorithm (p x), Appendix 3's table (p39–40), Appendix 4 (p41), Appendix 5 (p42–45, landscape) and Appendix 6 (p46–47) are vector art with a text layer whose reading order is scrambled, so each was also read from page images (150 to 300 dpi, Appendix 5 rotated upright) for the arrows, the rows and which cell belongs to which drug. The degree sign of "15°" is a white-bullet glyph (U+25E6) in the text layer; the page image at 300 dpi shows a raised ring, a degree sign. The boxed statements on p4 and p12 were confirmed on page images (yellow boxes). pdftotext was not used.
- **Scope (p vi):** "Patients with suspected and confirmed GHF (evidence on patients aged 60 years old and above)". Users: health professionals in primary and secondary/tertiary care. Objectives: diagnosis and risk factors; treatment; referral and follow-up. The CPG never defines "geriatric" by age (point 1): the draft quotes the population line and does not gate on age.
- **Advice for patients:** none. The CPG prints no leaflet or carer advice; its falls interventions (Appendix 6) are written for clinicians ("Advise wearing...", "Refer to..."). The draft therefore has no `advice` field; the falls content is in steps and the Falls tab.
- **Size:** `JSON.stringify(P['hip-fracture-cpg']).length` = 30,786 (24 nodes, 3 tabs). To reach it I left out, all non-ED: Appendix 3's table as a separate tab (every row of it is quoted in the four analgesia outcomes), an Imaging tab (its content is in the X-ray steps), Appendix 4's CGA table, the ICU risk statement (p14), the audit indicator (p29–30), the established risk factor list (p3) and Appendix 5 (anaesthesia).

### The draft in brief

- **Stepper** (`start:'menu'`): `menu` → `life` (life-threatening conditions?) → `icu` | `sx` (signs and symptoms checklist, p4) → `nosx` | `xr` (plain radiographs, views) → `xres` (what the X-ray shows) → `frx` (start in the ED: analgesia, immobilise, no traction, delirium screen) → `ortho` (refer to orthopaedics, 48 hours, antiplatelets) | `occ` (highly suspicious despite a normal film, checklist) → `occct` (refer for CT or MRI) | `nofx` (refer to relevant disciplines, falls) → `fall` (fall severity, checklist) → `fhi` | `gait` → `fmid` | `flo`. Also from the menu: `refd` (referred in with a confirmed fracture) → `ortho` | `icu`; `trauma` (high-energy walk-in, to the department's T-RACS rule); `pain` (analgesia in the elderly) → `para` | `opi` | `cox` | `pnb`.
- **Tabs:** Analgesia (Appendix 3 principles; Recommendation 12), Before surgery (surgery; delirium; haemoglobin; antiplatelets and anticoagulants; VTE prophylaxis; nutrition and frailty), Falls (screening; Appendix 6 table; the next fracture). References via `refs`.
- **Links proposed from other entries** (links only; the wording of those entries stays): `P['pain'].see` → `#hip-fracture-cpg--pain`; `P['referral-rules'].nodes.orthoc.links` → `#hip-fracture-cpg--frx`; `P['referral-rules'].nodes.orthcl.links` and `P['safe-practice'].nodes.limb.links` → `#hip-fracture-cpg--occ` (where the CPG asks for more than the department's notes: open question 1). Checked in memory with the app's six data files loaded: 46 entries, the same checks as check-data.js, no errors.
- **Calculator links:** `#calc-pain` and `#calc-analgesia` fail `okHref` in check-data.js if put in a data file. The draft leaves them out and proposes, for engine.js, `CALC_SEE['hip-fracture-cpg'] = [['#calc-pain', 'Pain scales (PAINAD)']]`. `#calc-analgesia` computes the ebook's weight-based doses, not this CPG's elderly doses (see c), so add it only with a label that says so.
- **No outcome is labelled Discharge.** The CPG never says discharge for an older adult without a fracture ("No hip fracture → Refer to relevant disciplines", p x) and prints no discharge criteria or return advice, so the falls outcomes are `neutral` ("What the CPG says") with that gap. If the department wants its own discharge advice there, it is a department note (rule 6), not CPG content.
- **CPG shelf:** `CPG_SHELF` in engine.js already has the row "Management of Geriatric Hip Fracture" (2023, tier B, with `drive` and `qr` ids). Add `id:'hip-fracture-cpg'` to it so the entry's References tab shows the Drive and Academy PDF links.
- **Group:** none of the CATS groups fits. Proposed: a new group, for example `{k:'injury', t:'Injuries, bones and falls', s:'Injuries'}`, which would also suit later trauma CPGs (the calculators already have an Injuries group). It needs an icon, a jewel class (`t-<colour>`) and a tile still and loop in head.html and engine.js; a Flow loop costs credits and needs Krishna's go-ahead (rule 2). Fallback: `meta` (Sugar, poisoning and pain), beside the ebook's `pain`, since the entry's most used part is analgesia in the elderly.
- **Search words** the integrator may add: NOF, neck of femur, fractured hip, femur, intertrochanteric, subtrochanteric, elderly fall, geriatric, occult fracture, fascia iliaca, FICB, femoral nerve block, 4AT, delirium.

---

## (a) The CPG chapter by chapter

| Part (pages) | What it holds | What matters to the ED | In the draft? |
|---|---|---|---|
| Key recommendations (p ii–iii) | 15 recommendations under diagnosis, treatment and prevention | Plain films, CT or MRI for occult fracture; analgesia and nerve block; no routine traction; surgery within 48 hours; falls screening | Each quoted from its chapter. Two wording differences noted (points 21, 23) |
| Development, objectives, population (p iv–vi) | First edition; also refers to AAOS (2021) and NICE (2023); evidence to 1 July 2023; target population; users | The population line | Menu hint, header comment |
| Development group, review committee, external reviewers (p vii–ix) | The DG includes an emergency physician, and two HKL consultants (a geriatrician and an arthroplasty surgeon); the RC includes three HKL specialists (acute internal medicine, geriatrics, the head of anaesthesiology service); two emergency physicians among the external reviewers | Context only: HKL clinicians wrote and reviewed it, so the local questions in (c) have people to ask | No |
| Algorithm on management of GHF (p x) | Suspected case arrives at the ETD; assessment by the ETD team; four branches (life-threatening, no fracture, fracture on X-ray, possible occult); confirmed case referred from another facility goes straight to orthopaedics; occult → CT/MRI → fracture or "treat accordingly"; footnote on stable cases | The ED's own pathway | Yes: `life`, `icu`, `xr`, `xres`, `occct`, `ortho`, `refd`, `nofx` |
| 1 Introduction (p1–2) | Definition; epidemiology (Malaysia, Asia); one-year mortality approaching 30%; surgery the definitive management | Definition; the mortality line for a conversation with the family | `trauma` (definition); Before surgery tab |
| 2 Risk factors (p3–4) | Established and other risk factors; contralateral fracture; sarcopenia; boxed: modifiable risk factors | Falls and fracture prevention | The boxed statement in `nofx`. The established list was cut for size |
| 3 Signs and symptoms (p4) | History of fall; hip pain and/or inability to weight bear or walk; occult presentation; minimally impacted fractures may still walk; examination; boxed: hip pain after a fall must be assessed | Core | `sx` checklist and `nosx` |
| 4 Diagnosis (p5–6), Recommendation 1 | Imaging confirms; three views; normal film does not exclude; the highly suspicious list; CT the modality of choice locally; NICE: MRI, CT if not within 24 hours | Core | `xr`, `occ`, `occct` |
| 5 Referral criteria (p6) | DG opinion, "e.g.": confirmed GHF; suspected occult GHF for confirmation; late presentation | Core | `ortho`, `occct` |
| 6.1a Analgesics (p7–8), Recommendation 2 | Analgesia from the first encounter; MoH Pain as the 5th Vital Sign; WHO ladder; the MoH elderly guideline's four points; nerve blocks with ultrasound guidance; femoral nerve block against FICB (RCT); Cochrane review; credentialing | Core | `frx`, `pain`, `para`, `opi`, `cox`, `pnb` |
| 6.1b Acute care and immobilisation (p8–9), Recommendation 3 | Immobilise in bed, the limb in a comfortable position; no routine traction (AAOS: some peri-trochanteric fractures) | Yes | `frx` |
| 6.1c Early multidisciplinary care (p9–14), Recommendations 4 to 6 | Orthogeriatric care; CGA (Appendix 4); delirium (4AT named); nutrition (MNA-SF); haemoglobin (boxed); VTE prophylaxis; post-operative care and ICU risk (boxed, p14) | As information for the referral: the delirium screen, Hb, VTE, nutrition | Before surgery tab. CGA table and ICU statement left out (ward decisions) |
| 6.2 Safe anaesthesia (p14–15), Recommendation 7 | Regional against general anaesthesia; avoid intra-operative hypotension; antiplatelets (clopidogrel, 5 - 7 days, early surgery evidence); pointer to Appendix 5 | The antiplatelet paragraph | `ortho`, Before surgery tab. Recommendation 7 left out |
| 6.3 Surgery (p15–24), Recommendations 8 to 12 | Garden classification; arthroplasty; fixation of intertrochanteric and subtrochanteric fractures; waiting time (Recommendation 11); post-operative analgesia (Recommendation 12) | The 48-hour target, for the referral | `ortho`; Recommendation 12 in the Analgesia tab |
| 6.4 Rehabilitation (p24–26), Recommendation 13 | After surgery | No | No |
| 6.5 Discharge plan and follow-up (p26) | Osteoporosis treatment before discharge; orthopaedic follow-up | No (after surgery) | No |
| 7.1 Primary prevention (p27), Recommendation 14 | Hip protectors; vitamin D and calcium; the three key questions; falls advice; multifactorial assessment for high risk; pointer to the osteoporosis CPG | For the older adult without a fracture | `nofx`, the falls steps, Falls tab |
| 7.2 Secondary prevention (p28) | Fracture liaison service | One line | Falls tab |
| 8 Implementing (p29–30) | Facilitators, barriers, cost of implants; audit indicator (operated within 48 hours of admission, target 75% yearly) | Context | Left out for size |
| References (p31–36) | 98 references | To name the sources quoted | `refs` |
| Appendices 1 and 2 (p37–38) | Search strategy; 14 clinical questions | No | No (point 35) |
| Appendix 3 (p39–40) | Principles of analgesic prescriptions in the elderly; pre-operative analgesia table (paracetamol, celecoxib, Etericoxib, morphine, oxycodone, dihydrocodeine, tramadol) | Core: the only doses in the CPG | The four analgesia outcomes; principles in the Analgesia tab |
| Appendix 4 (p41) | CGA dimensions: physical, functional, social, psychological (4AT, MMSE, AMTS, GDS named) | Ward | Left out (the 4AT is named in `frx` and the Before surgery tab) |
| Appendix 5 (p42–45) | Time intervals before and after neuraxial blocks for antiplatelets, parenteral and oral anticoagulants and thrombolytics | Anaesthesia | A pointer only (Before surgery tab). Its errors are points 25 to 29 |
| Appendix 6 (p46–47) | Falls risk factor assessment and interventions (MOS 2022); risk stratification algorithm for community-dwelling older adults (World guidelines 2022) | For the older adult without a fracture | `fall`, `gait`, `fhi`, `fmid`, `flo`; Falls tab |
| Abbreviations, acknowledgement (p48–50) | | No | No |

---

## (b) Points inside the CPG: where its algorithm, text and tables disagree or leave a gap

None is resolved in the draft. Each is quoted with its page; those that change an ED decision are also in the node's `gap` or hint.

**Who and where**

1. **"Geriatric" has no age.** The population is "Patients with suspected and confirmed GHF (evidence on patients aged 60 years old and above)" (p vi). The introduction quotes >65 years (CDC), ≥50 years (Japan), 50 years and above (Malaysia, 1996 to 1997) and above 50 (NORM 2009) (p1); the evidence summaries use above 60 (p10, p20–21), more than 70 (p16), ≥70 (p24) and 90 and above (p22). The draft does not gate on age.
2. **The algorithm's footnote is circular.** "Suspected hip fracture case* arrives at Emergency and Trauma Department (ETD)" carries "*Stable cases i.e. without life-threatening medical conditions; unstable cases should be referred to emergency department" (p x), yet the same algorithm has a branch "Life-threatening medical conditions → Refer and treat accordingly at Intensive Care Unit/High Dependency Unit". The conditions are not listed; the algorithm names units, not an MTS level or a zone.
3. **No analgesia in the algorithm.** The ETD assessment box lists "haemodynamic status, X-ray of pelvis/femur/chest, blood investigations, etc." (p x) but no analgesia, although "Adequate analgesia is key in GHF care and should be initiated at the first encounter" (p7).
4. **"Chest" and "blood investigations, etc."** in that box are not specified anywhere in the text.

**Imaging**

5. **Views, three versions.** The algorithm: "X-ray of pelvis/femur/chest" (p x). Chapter 4: AP view of femur; lateral view of femur; AP pelvis view (with 15° lower limb internal rotation in neutral abduction-adduction); comparison with the unaffected hip can be helpful (p5). The Quick Reference, key message 3: "anterior-posterior pelvis (with 15○ lower limb internal rotation in neutral abduction-adduction) & lateral hip views".
6. **Two triggers for more imaging.** p5: patients with highly suspicious hip fracture, despite normal radiographs, "may require" alternative forms of imaging: persistent hip pain after fall; inability to bear weight, pain on attempted straight leg raising, passive rotation or axial loading tests. Recommendation 1 (p6): occult GHF "(presence of symptoms and signs of hip fractures despite normal plain radiographs) should have" CT or MRI. "May" against "should"; "persistent" is not defined, and almost every older adult X-rayed for hip pain after a fall has hip pain after a fall.
7. **CT or MRI, and how soon.** CT is "the modality of choice as it is widely available locally even though magnetic resonance imaging (MRI) has higher accuracy" (p5); NICE offers MRI first and CT "If it is not available within 24 hours or is contraindicated" (p5); Recommendation 1 says CT or MRI. The CPG sets no time of its own.
8. **Who orders the scan.** The algorithm sends a possible occult fracture to "Refer to orthopaedics" before "Computed tomography scan/magnetic resonance imaging required and done" (p x); chapter 5 refers "suspected occult GHF (normal plain radiographs) for confirmation of diagnosis" (p6). Whether the ED orders the scan is not said; "Treat accordingly" after a negative scan is not defined.
9. **No fracture.** "No hip fracture → Refer to relevant disciplines" (p x) names no discipline, and the CPG has no discharge criteria or return advice anywhere for an older adult without a hip fracture.

**Referral**

10. **Referral criteria are opinion, and open.** "There is no retrieval evidence on referral criteria of GHF. The CPG DG opines that the following criteria should be used to refer to orthopaedic services e.g.:" (p6). "e.g." makes the list open; "late presentation of GHF" is not defined.

**Analgesia (Appendix 3, read from the text layer and page images at 220 dpi)**

11. **Paracetamol in hepatic insufficiency.** "Reduce maximum dose 50% to 75%" (p39): reduce by 50 to 75% (to 1 to 2 g) or to 50 to 75% (2 to 3 g)? Not stated. No dose by weight (the ebook has one).
12. **Tramadol.** "if creatinine clearance (CrCl) <30 millilitres per minute (mL/min), requires dose reduction" gives no amount, and "Risk of seizures in high doses" no maximum daily dose (p40).
13. **IV morphine** "may be considered in severe pain (refer to Guidelines of Pain as 5th Vital Sign)" (p39): no IV dose in this CPG.
14. **Celecoxib and Etericoxib.** "200 mg twice daily (BD) for 2 - 5 days, then 200 mg once daily (OD) PO" with no total length; celecoxib and Etericoxib share one comments cell (image); the CPG prints "Etericoxib" (p39), the Quick Reference "Etoricoxib".
15. **Non-selective NSAIDs** "may be cautiously used if other safer treatments have not provided adequate pain relief" (p7), but none is named and no dose is given.
16. **Wrong appendix.** Recommendation 12 (p24): "Refer to Appendix 4 on Principles of Analgesic Prescriptions in the Elderly". The principles are Appendix 3 (Recommendation 2, p8, cites Appendix 3 correctly).
17. **Nerve block.** Recommendation 2: "may be considered if pain persists and resources are available" (p8), with no time or pain score; p7 says "regional nerve blocks with ultrasound guidance", while the RCT it quotes used "nerve stimulator-guided" blocks and found the femoral nerve block more effective than the fascia iliaca compartment block (p7–8), while the section on analgesia after surgery cites a review of 27 RCTs in support of FICB (p23–24); the CPG prefers neither block. No drug, dose or volume; "Training, credentialing and privileging are required to perform the nerve blocks procedures" (p8), but not who.
18. **Morphine and delirium.** "the use of morphine also have increased risk of developing delirium" (p10, from studies after surgery), while morphine is in the pre-operative table (p39). Nothing reconciles the two.

**Before surgery**

19. **Delirium.** The 4AT is named (p10, Appendix 4) but not printed; "closely monitor for delirium" (p10) has no frequency and no ED instruction.
20. **Haemoglobin** (boxed, p12): ≥10 g/dL ideal; 8 - 10 g/dL if asymptomatic of anaemia, no ischaemic heart disease and blood available in theatre. Nothing for Hb below 8 g/dL, and no transfusion threshold of its own, though the evidence above it compares transfusion thresholds of 10 and 8 g/dL (p11). The Quick Reference drops "provided that blood is available in operating theatre".
21. **VTE prophylaxis.** Recommendation 6 (p13): no LMWH dose and no start time ("peri-operatively"). p12 says "There is no evidence on prophylaxis VTE on GHF alone" just after quoting an RCT and a cohort in patients after GHF surgery (p12). The key recommendations (p ii) match Recommendation 6.
22. **Antiplatelets and anticoagulants.** No recommendation box. "Surgery will usually be delayed for 5 - 7 days after withholding the drug" (p15) describes practice, against evidence of lower mortality with early surgery (p15). Nothing tells the ED to withhold or continue a drug. Warfarin and the direct oral anticoagulants have no text in chapter 6 beyond Appendix 5 (neuraxial block timings): no reversal or surgery timing.
23. **When does the 48-hour clock start?** Recommendation 11 (p23): "within 48 hours of admission*", "*after physical consultation by orthopaedic team". The key recommendations (p iii) drop the asterisk; the audit indicator (p30) adds "after excluding those medically unfit for early surgery and refuse surgery", target 75% yearly; AAOS says 24 - 48 hours and a wait of >36 hours was associated with complications (p23). The time from ED arrival to admission is not addressed.
24. **ICU.** The risk stratification index (p13) is described without its scoring, so it cannot be used; the boxed statement (p14) names risk factors only in general ("increasing age, cardiac and pulmonary disease").

**Appendix 5 (read from page images at 200 dpi, rotated; none of it is in the draft)**

25. **Warfarin:** "Ideally stop international normalised ratio (INR) 3 days before and INR "normalised"" (p45): the drug's name is replaced by INR.
26. **Dabigatran:** "CrCl 30 mL/min: Avoid" (p44) prints no sign (the image confirms), so a CrCl below 30 has no band and exactly 30 falls in two (30 - 49 and 30).
27. **Unfractionated heparin SC:** the low-dose prophylaxis bullet has no time (the 12 hours follows the higher-dose bullet); "higher dose" is ">5,000 U or daily total >15,000" in one column and "7,500 - 10,000 U BD or <20,000 U daily total" in another (p43).
28. **Thrombolytics:** "should not be given for 10 days after puncture of non-compressible" (p45): the sentence ends without its noun.
29. **Typos:** "neuraxial bocks" (p15); Appendix 5 adapted from BJA Education (2021) and NYSORA, not a Malaysian source.

**Falls (Appendix 6, read from the text layer and page images at 220 dpi)**

30. **Timed Up and Go, two thresholds.** "Timed Up and Go (high risk >13.5 sec)" (table, p46, from MOS 2022) against "Gait speed ≤0.8 m/s or alternatively Timed up and go >15 seconds" (algorithm footnote 3, p47, from the World guidelines 2022).
31. **Fall severity, two definitions.** Footnote 1 (p47) defines fall severity as "fall with injuries (severe enough to consult a physician), laying on the ground with no capacity to get up, a visit to emergency room or loss of consciousness/suspected syncope": by this, every older adult seen in the ED after a fall is high risk. Footnote 2's list ("one is enough": injury; ≥2 falls last year; frailty; lying on the floor/unable to get up; loss of consciousness/suspected syncope) leaves out the visit to the emergency room. The draft's checklist uses footnote 2 and quotes footnote 1 in the hint.
32. **Who is covered.** The algorithm is "for community-dwelling older adults" (p47), while "living in institutions" is a risk factor (p3); "injury" and "frailty" are not defined; who performs the multifactorial falls risk assessment, and where, is not said.
33. **Vitamin D:** the row heading is "Vitamin D deficiency observed or likely", the action "for individuals with proven vitamin D deficiency" (p46).
34. **Spelling as printed:** "laying on the ground" (p47), "impaired gait and balanced" (p4), "geriatic" (Recommendation 5, p11; the key recommendations print GHF), "ischemic" (p12), "Fraility" (p41).

**Other, outside the ED**

35. p iv: "A total of five clinical questions were developed under four sections"; Appendix 2 (p38) lists 14.
36. The contents put the acknowledgement, disclosure and funding on p49; they are printed on p50.
37. p16: "(OR=2.19, 95% CI 10.9 to 4.40)", a lower bound above the estimate (presumably 1.09); p14: "0.980 (98% CI 0.967 to 0.993)" where every other interval is 95%.
38. The Quick Reference against the CPG on surgery: it recommends total hip replacement "for patients with either displaced or non-displaced neck of femur fracture" who meet the criteria, where the CPG quotes NICE "for people with a displaced neck of femur fracture" (p17); "arthroplasty, internal fixation or non-operative management" against "hemiarthroplasty, internal fixation or non-operative care" (p17); the ICU sentence becomes "require close monitoring post-operatively"; "Latered wall intact".
39. Traction (p8): the Cochrane review "did not appear to have any benefit with regards to pain relief nor analgesia use prior to surgery and reduced incidence of pressure sores": whether traction reduced pressure sores or did not is unclear.

---

## (c) The app's related entries against this CPG

Read in src\parts\data.js (ebook), data2.js and data3.js (department) and engine.js (calculators). The ebook PDF is not available, so the ebook column is the app's text. Nothing below is resolved; each difference is an open question.

| Entry (node) | The app says | The CPG says (page) |
|---|---|---|
| `pain` (ebook p45–50): assessment | MOH self-reported pain scale 0–10; PAINAD (geriatric, dementia), FLACC, CPOT; the first reference is Pain as the 5th Vital Sign, 3rd edition 2018 | Acute pain as in the MoH "Pain as the 5th Vital Sign" guideline (the same document, ref 28), "with strong emphasis on pain assessment" (p7). No scale printed. A match |
| `pain`: paracetamol | Over 50 kg: 500 mg–1 g 6–8 hourly, max 4 g/day; under 50 kg: 15 mg/kg/dose, max 60 mg/kg/day; caution hepatic impairment (preferred in elderly) | 325 - 500 mg 4-hourly or 500 - 1,000 mg 6-hourly per oral (PO); maximum dose usually 4 g daily; reduce maximum dose 50% to 75% in hepatic insufficiency or history of alcohol abuse (p39). No weight split |
| `pain`: celecoxib | 400 mg BD in acute pain (48 h); 200–400 mg daily longer term; elderly 100 mg daily; not under 18 | 200 mg twice daily (BD) for 2 - 5 days, then 200 mg once daily (OD) PO (p39); COX-2 inhibitors "must be used with caution in older people" (p7) |
| `pain`: etoricoxib | Not listed | Etericoxib 90 mg OD PO (p39) |
| `pain`: diclofenac, mefenamic acid | Doses given | Non-selective NSAIDs only "if other safer treatments have not provided adequate pain relief" (p7); none named |
| `pain`: tramadol | 50–100 mg 6–8 hourly, max 400 mg/day; elderly start 50 mg, max 300 mg/day; seizure risk | 50 mg 6 - 12-hourly PO; seizures in high doses; serotonin syndrome with SSRIs; dose reduction if CrCl <30 (p40) |
| `pain`: dihydrocodeine, oxycodone | Named on the ladder, no dose | DF118 30 - 60 mg 6 - 8-hourly PO (p40); oxycodone 2.5 - 5 mg 4 - 6-hourly PO (p39) |
| `pain`: morphine SC or oral | SC over 65 years 2.5–5 mg 4-hourly; oral IR elderly 2.5–5 mg 4–6 hourly | 2 - 3 mg 4 - 6-hourly (SC or PO) (p39) |
| `pain` (`age`, `m05`): IV morphine | Morphine pain protocol: over 60 years, IV 0.5 mg, reassess in 5 minutes | IV "may be considered in severe pain (refer to Guidelines of Pain as 5th Vital Sign)" (p39); no dose. A coincidence worth noting: the ebook splits at 60 years and the CPG's evidence base is 60 and above |
| `pain`: fentanyl, ketamine | Doses given | Not mentioned |
| `pain` (`mp`, `epc`): regional anaesthesia | "Refer APS or consider regional anaesthesia if needed" | Peripheral nerve block "if pain persists and resources are available"; ultrasound guidance; training, credentialing and privileging (p7–8). No drug or dose |
| `pain`: splints | "Splints and slings: immobilise injured parts for stability and pain relief" | Immobilise in bed, the limb in a comfortable position; no routine traction (p8–9) |
| `pain` (`mild`): discharge | Pain score under 3; cause identified and treated | No ED discharge criteria |
| `#calc-analgesia` (engine.js) | Paracetamol by weight (15 mg/kg under 50 kg; 500 mg–1 g over 50 kg) and ketamine | Fixed doses for the elderly, no weight (p39–40). For an older adult with a hip fracture the calculator shows the ebook's doses, not the CPG's |
| `#calc-pain` | PAINAD for dementia, from the ebook | No scale; consistent |
| `referral-rules` (`ortho`, 2024 memo): fracture of the femur; unable to bear weight | "Fracture of the scaphoid, talus, calcaneum, malleolus, cervical spine, pelvis or femur" and "Unable to bear weight, or severe pain despite analgesia" go to the orthopaedic team on call; a formal referral, no "opinion only" | Confirmed GHF and suspected occult GHF go to orthopaedic services (p6). A match for a confirmed fracture, and for a normal film with inability to bear weight |
| `referral-rules` (`orthcl`): fracture not meeting the urgent criteria | Orthopaedic clinic referral letter (Wisma Kayu), with a link "EMACC follow-up for a suspected fracture with a normal X-ray" | Highly suspicious despite a normal film (persistent hip pain after fall, among others): CT or MRI (Recommendation 1, p6) and orthopaedic referral for confirmation (p6). Differs for persistent pain alone |
| `emacc` (SOP 2018, trauma row) | "Suspected fracture with normal X-ray": EMACC within 3 days; repeat X-ray if needed | CT or MRI (Recommendation 1); "a normal plain radiograph does not exclude a fractured hip" (p5). Differs |
| `safe-practice` (`limb`) and `trauma-walkins` (`minor`) | "Do not discharge a patient who cannot walk"; "Localised tenderness with a normal X-ray: treat as a fracture, explain, arrange a follow-up X-ray" | Inability to bear weight after a normal film makes a fracture highly suspicious: CT or MRI (p5, Recommendation 1). The same caution; a different next test |
| `trauma-walkins`: T-RACS and HIT CT | T-RACS Tier 1 first; HIT CT for a high-impact mechanism plus a criterion such as age over 65 or anticoagulants | No high-energy distinction ("usually occurs following low energy trauma", p1). No conflict; the draft routes a high-energy walk-in to the department's rule |
| `gz-rules` (`wait`) | The elderly, and any illness that needs stat medication and monitoring, should not wait outside the Green Zone | Analgesia from the first encounter (p7); early multidisciplinary care (p7). Consistent; linked |
| `outpatient-referral` (draft FAST criteria) | "Elderly with suspected dementia, or after a fall": Physician's Clinic before Geriatrics | High falls risk: multifactorial falls risk assessment, individualised interventions, follow-up in 30 to 90 days; intermediate: physiotherapist referral; no clinic named (p27, p47) |
| `mau-admission` | Medical short-stay admissions; "Ambulant to semi-dependent" | Not about fractures; "No hip fracture: refer to relevant disciplines" (p x) could include medicine. No conflict; not linked |
| `head-injury-cpg` (`hr`) | Mild head injury aged 65 or over: admit to ward irrespective of CT | Not covered. Linked from `see` for the older adult who also hit the head |
| `syncope` (ebook) | Syncope pathway | "syncope suspicion should trigger evaluation/management" (p47). Linked from `fhi` |

**Open questions for Krishna**

1. **A normal hip X-ray in an older adult who still may have a fracture.** The CPG: CT or MRI (Recommendation 1, p6), with referral to orthopaedic services for confirmation (p6); CT is the local modality of choice, NICE wants MRI within 24 hours (p5). The department's notes: a follow-up X-ray (`safe-practice`, `trauma-walkins`), EMACC within 3 days (`emacc`), or the orthopaedic clinic (`orthcl`). Which does the Green Zone follow, and who orders the CT: the ED, or the orthopaedic team on call?
2. **Analgesia doses for the elderly.** The ebook's table and `#calc-analgesia` against Appendix 3: paracetamol (4-hourly 325 - 500 mg option; how much to reduce in hepatic insufficiency), celecoxib (100 mg daily against 200 mg BD for 2 - 5 days, then 200 mg OD), tramadol (50–100 mg 6–8 hourly, max 300 mg/day in the elderly, against 50 mg 6 - 12-hourly), SC morphine (2.5–5 mg 4-hourly against 2 - 3 mg 4 - 6-hourly). Which applies to an older adult with a hip fracture, and should the analgesia calculator show the CPG's doses or a note for patients aged 60 and over?
3. **No fracture: who takes the faller, and what advice?** The CPG says "refer to relevant disciplines" and stratifies falls risk (multifactorial assessment, follow-up in 30 to 90 days) but has no discharge criteria or return advice. Is the Physician's Clinic (draft FAST criteria) the route for the high-risk faller, and does the department want its own discharge advice in the app?
4. **Nerve blocks in the ED.** Does HKL ED give a fascia iliaca or femoral nerve block for a hip fracture, who is credentialed, and with which drug and dose (the CPG prints none)?
5. **Where the patient waits.** Which zone or area treats an older adult with a suspected or confirmed hip fracture in HKL (the CPG names no MTS level; `gz-rules` keeps the elderly from waiting outside)?
6. **Antiplatelets and anticoagulants.** Does the ED withhold anything, or only record the drug and the time of the last dose for the orthopaedic and anaesthesia teams? The CPG gives no ED instruction.
7. **VTE prophylaxis, oral nutrition and the 4AT.** Started in the ED or on the ward?
8. **Fall severity.** Does a visit to the ED itself count (footnote 1, p47), making every older faller seen in the ED high risk?

---

## (d) Calculator candidates

The Calculators view reads its numbers from the pathway data, and `CALC_FACTS` must find each source phrase in `P['hip-fracture-cpg']`. The 24 phrases in the calculator facts are all present (checked with `JSON.stringify(P[id]).includes(s)` with the app's data files loaded in memory). They cover Appendix 3's doses, the haemoglobin thresholds, the 48 hours, the NICE 24 hours, the X-ray view and the falls thresholds, for any later dose panel or check. A new route would also have to be added to `okHref` in check-data.js.

### 1. Delirium screen (4AT): cannot be built from this CPG

The CPG names it only: "The assessment of delirium can be conducted using validated tools e.g. 4AT Delirium Detection Tool" (p10), and "Delirium assessment (e.g. 4AT Delirium Detection Tool)" (Appendix 4, p41). Its items and scoring are not printed, so rule 8 rules it out. An outside link could be considered; none was checked (no web access in this review).

### 2. Nerve block dose: cannot be built

No drug, concentration, dose or volume is printed for the femoral nerve block or the fascia iliaca compartment block (p7–8, p23–24).

### 3. Analgesia in the elderly: not worth a calculator of its own

Appendix 3's doses are fixed, not by weight. The only arithmetic, "Reduce maximum dose 50% to 75% in patients with hepatic insufficiency or history of alcohol abuse" (p39), is ambiguous (point 11), so a calculator would have to decline there. The stepper's four outcomes (`para`, `opi`, `cox`, `pnb`) give every dose with its comments. Recommended instead, after Krishna answers open question 2: a note in `#calc-analgesia` for a patient aged 60 and over with a hip fracture, pointing to `#hip-fracture-cpg--pain`.

### 4. Falls risk (Appendix 6 algorithm): not worth building

Logic: any fall-severity item (footnote 2: injury; ≥2 falls last year; frailty; lying on the floor/unable to get up; loss of consciousness/suspected syncope) → High Risk Goal; otherwise gait and balance impaired ("Gait speed ≤0.8 m/s or alternatively Timed up and go >15 seconds") → Intermediate Risk Goal; otherwise Low Risk Goal (p47). It would have to decline or flag: a Timed Up and Go between 13.5 and 15 seconds (high risk in the table, p46; not impaired in the algorithm, p47); exactly 15 seconds (not >15); the visit-to-the-emergency-room definition (point 31). The stepper (`fall` → `gait` → `fhi` / `fmid` / `flo`) already does this in two taps.

### 5. Not worth building

- Haemoglobin readiness for surgery (p12): two thresholds, a ward decision.
- Time to surgery (Recommendation 11): a ward target; the start of the clock is unclear (point 23).
- The ICU risk stratification index (p13): its scoring is not printed.

**Recommendation: build none.**

---

## (e) Every number in the draft, and how it was checked

"Text" = found in PyMuPDF's text layer of that page (scripted search over all 66 pages, whitespace, bullets, curly quotes and line-break hyphens normalised, citation markers such as "27, level II-2" removed; then read in context). "Image" = also read from a page image at the dpi shown, for the vector-art pages whose text layer is out of order.

| # | Number as in the draft | Where in the draft | Page | Check |
|---|---|---|---|---|
| 1 | 2023 (issue); first edition | title, src, lead, menu hint, refs | p iv; PDF 3 | Text |
| 2 | 2027 (review due) | menu hint | PDF 3 (unnumbered) | Text |
| 3 | 60 years old and above | menu hint, header comment | p vi | Text |
| 4 | e ISBN 978-967-2887-67-6 | refs | PDF 2 | Text ("e ISBN :") |
| 5 | MOH/P/PAK/529.23(GU)-e | refs | cover (PDF 1) | Image, 150 dpi (no text layer) |
| 6 | 15° (AP pelvis view) | `xr` | p5 | Text (glyph U+25E6) and image, 300 dpi |
| 7 | 24 hours (NICE MRI) | `occct` | p5 | Text |
| 8 | 48 hours of admission | `ortho`, its gap | p23 | Text |
| 9 | 5 - 7 days (clopidogrel) | `ortho`, Before surgery tab | p15 | Text |
| 10 | 70% risk of ≥1 fall in the next year | `fall` hint | p47 | Text and image, 220 dpi |
| 11 | ≥2 falls last year | `fall` | p47 | Text and image, 220 dpi |
| 12 | ≤0.8 m/s; >15 seconds | `gait` hint | p47 | Text and image, 220 dpi |
| 13 | >13.5 sec | `gait` hint, Falls tab | p46 | Text and image, 220 dpi |
| 14 | 30 to 90 days | `fhi` | p47 | Text and image, 220 dpi |
| 15 | 325 - 500 mg 4-hourly; 500 - 1,000 mg 6-hourly | `para` | p39 | Text and image, 220 dpi |
| 16 | 4 g daily | `para` | p39 | Text and image |
| 17 | 50% to 75% | `para`, its gap | p39 | Text and image |
| 18 | Morphine 2 - 3 mg 4 - 6-hourly | `opi` | p39 | Text and image |
| 19 | Oxycodone 2.5 - 5 mg 4 - 6-hourly | `opi` | p39 | Text and image |
| 20 | DF118 30 - 60 mg 6 - 8-hourly | `opi` | p40 | Text and image, 220 dpi |
| 21 | Tramadol 50 mg 6 - 12-hourly | `opi` | p40 | Text and image |
| 22 | CrCl <30 mL/min | `opi`, its gap | p40 | Text and image |
| 23 | Celecoxib 200 mg BD for 2 - 5 days, then 200 mg OD | `cox` | p39 | Text and image (row alignment) |
| 24 | Etericoxib 90 mg OD | `cox` | p39 | Text and image (90 mg sits on the Etericoxib line) |
| 25 | 30% (one-year mortality) | Before surgery tab | p1 | Text |
| 26 | ≥10 g/dL; 8 - 10 g/dL | Before surgery tab | p12 | Text and image, 100 dpi (yellow box) |
| 27 | 4 - 5 weeks | Before surgery tab | p13 | Text |
| 28 | 30-day (delirium mortality) | Before surgery tab | p10 | Text |
| 29 | >95% (falls) | Falls tab | p27 | Text |
| 30 | 800 - 1000 IU | Falls tab | p46 | Text and image, 220 dpi |
| 31 | 2018, 2010 (Appendix 3 sources) | Analgesia tab, refs | p40 | Text and image |
| 32 | 2022 (MOS; World guidelines) | `fall` hint, Falls tab, refs | p46, p47 | Text |
| 33 | 2021 (AAOS), 2023 (NICE) | refs | p iv | Text |
| 34 | 6.3, p15–22 (surgery chapter) | menu hint | p15–22 | Text (section headings) |
| 35 | 3 days (EMACC) | `occct` gap | app: `emacc` table (data.js) | App text, not the CPG |
| 36 | 65 or over; CPG 2015 | `see` label | app: `head-injury-cpg` | App text, not the CPG |

Also checked: every quoted fragment of 25 characters or more in the draft (308 fragments, split at sentence and list boundaries) was searched in the normalised text layer. 205 were found verbatim. The other 103 are the draft's own words (titles, option labels, gaps, source lines, link labels), quotes with a label added ("(occult GHF)" after the occult presentation) or the algorithm's boxes joined by "then" or a colon; 41 quotes embedded in those were searched separately and all were found. Every page citation in the draft was checked against the page footers (offsets above), and every step and outcome item carries its page.

---

## What could not be verified

- **The web version.** The CPG says errors are corrected in its web version (PDF 3). The copy read is the Academy of Medicine file (PDF created 14 May 2024, modified 1 Aug 2024); it was not compared with the MaHTAS website version.
- **The 4AT.** Named, not printed; nothing about it was checked against an outside source.
- **Appendix 5** was read from page images to describe it and find its errors (points 25 to 29); it was not transcribed into the draft.
- **The Quick Reference** was read from its text layer only (no page images), to compare; its figures were not checked.
- **HKL practice.** Eight points need the department, not the CPG: who orders the CT for an occult fracture; elderly analgesia doses; where the faller without a fracture goes; nerve blocks in the ED; where the patient waits; antiplatelets and anticoagulants in the ED; who starts VTE prophylaxis, nutrition and the 4AT; whether an ED visit makes every faller high risk.

---
