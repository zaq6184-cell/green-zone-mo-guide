# Gout CPG, 2nd edition: line-by-line review for the Green Zone MO Guide

**Source:** *Clinical Practice Guidelines: Management of Gout (Second Edition)*. Malaysian Health Technology Assessment Section (MaHTAS), Medical Development Division, Ministry of Health Malaysia. Issued 2021, e-ISBN 978-967-2887-28-7. 96 PDF pages.
**File reviewed:** the MaHTAS PDF, downloaded 9 Nov 2026 from mymahtas2.moh.gov.my (kept locally in `sources/`, not published); the same file as in Krishna's Academy CPG folder.
**Copyright (PDF page 2):** content may be reproduced "provided that a copyright acknowledgement to MaHTAS is included and the content is not changed, not sold, nor used to promote or endorse any product or service, and not used in an inappropriate or misleading context".
**Reviewed:** 9 Nov 2026, from the PyMuPDF text layer of every page, with page images for the algorithm (p xi), Tables 1 to 4, the G-CAN table, the referral pages and all of Appendix 5 (landscape tables, read from rotated renders).

**In the app since 9 Nov 2026** (Academy CPG round): the entry *Gout: CPG 2nd edition* (`#gout-cpg`), 33 steps and outcomes and five reference tabs (Flare drugs, Diagnosis, Urate-lowering, Pregnancy, Diet and medicines), beside the Green Zone gout rule, which links to it. No gout calculator was built: the steps and the dose tables cover what one would do (section d). The open questions at the end are under Still to confirm in the app (item 13).

## Page numbers

| What | PDF pages | Printed |
|---|---|---|
| Cover, copyright, updating note | 1 to 3 | unnumbered |
| Contents | 4 to 6 | unnumbered |
| Levels of evidence to the algorithm | 7 to 17 | i to xi (PDF = roman value + 6) |
| Chapters 1 to 17, references, appendices | 18 to 95 | 1 to 78 (**PDF = printed + 17**) |

Front-matter pages are cited with roman numerals (the algorithm is **p xi**; key recommendations **p ii to iv**); all other pages with the printed number, as "p68".

---

## (a) The CPG chapter by chapter

| Part | Printed pages | What matters to the ED | In the draft? |
|---|---|---|---|
| Statement of intent, copyright, updating | PDF 2 to 3 | The CPG "will be reviewed in a minimum period of four years (2025)". Corrections go in the web version, "the definitive version at all times". | Copyright in `refs`. The review date has passed: see the open questions. |
| Levels of evidence, GRADE | i | Nothing for the ED. | No |
| Key recommendations | ii to iv | Same text as Recommendations 1 to 12. | Through the recommendations |
| Development, objectives, **target population** | v to vii | "Inclusion Criterion: Adults with gout" (p vi). Settings: primary, secondary and tertiary care (p vii). No emergency setting. | Adults named in the lead. The absence of an ED setting is a gap. |
| Development group, reviewers | viii to x | Nothing for the ED. | No |
| **Algorithm** | xi | The five clinical features of gout; other causes, managed accordingly; "Normal SU during gout flare does not exclude the diagnosis of gout"; repeat SU at 2 weeks or more; flare drugs; ULT indications; "Do not stop ULT during attack"; prophylaxis for 3 to 6 months. | Yes: `feat`, `dx`, `rx`, `ind`, `cond`, `keep`, `onprop`, `ultn` |
| 1 Introduction | 1 to 2 | Background only. | No |
| 2 Definition, epidemiology, G-CAN labels | 3 to 4 | The definition of a gout flare. The G-CAN table has a typo ("Hyeruric(a)emia"). | No: `feat` covers recognition |
| 3 Risk factors, prevention (Table 1, Rec 1) | 5 to 8 | Table 1: medicines that raise or lower the risk of gout. Rec 1 (prevention) is not an ED task. | Table 1 in the **Diet and medicines** tab. Rec 1 left out. |
| 4 Natural history | 9 | A first flare "is self-limiting and lasts about 1 - 2 weeks". | The p10 wording of the same fact is in `kk` |
| 5 Clinical presentation | 10 to 11 | The features of a flare, precipitants, and that fever can be present. Examination findings, and tophi that "may be infected". | Precipitants and fever in `feat`; the flare's course in `kk`. The examination list was cut for size. |
| 6 Comorbidities (Rec 2) | 12 to 13 | Screening at diagnosis and follow-up: a clinic task. | No (cut for size; the KK does it) |
| 7 Diagnosis (Rec 3, Table 2) | 14 to 19 | MSU crystals are the gold standard. Storage 24 - 48 hours, refrigerate at 4ºC. SU does not make the diagnosis and may be normal in a flare. The plain X-ray is limited early. ACR/EULAR score of 8 or more (Table 2). | Rec 3, storage and SU in `dx`; SU cut-off and X-ray in the **Diagnosis** tab. Table 2 left out; it is a calculator candidate, see (d). |
| 8 Baseline investigations (Table 3) | 20 | The CPG's list of tests, with the reason for each. | Yes: **Diagnosis** tab |
| **9 Differential diagnoses** | 21 | Septic arthritis, the "key differential diagnosis", with its supportive features; acute CPP crystal arthritis; psoriatic arthritis; reactive arthritis. | Yes: `ddx`, `sep`, `oth` |
| 10 Asymptomatic hyperuricaemia | 22 to 24 | "Insufficient evidence ... to recommend ULT in asymptomatic hyperuricaemia" (p24). Only relevant to an incidental high urate. | No (outside a gout visit) |
| 11 Treat-to-target (Rec 4) | 25 to 26 | Aim for SU under 360 µmol/L; a lower target in severe gout. | Rec 4 in `ulty` |
| 12.1 Non-drug treatment (Rec 5, Rec 6) | 27 to 30 | Health education list; lifestyle; ice packs over a cloth; rest, elevate and keep the joint cool; aspirin not stopped; drugs that raise urate. | Yes: `rx` info, `kk`, **Diet and medicines** tab |
| 12.2a ULT (Rec 7) | 30 to 35 | ULT indications. ULT "can be initiated during a flare as long as the flare is being appropriately managed" (p31). SCAR risk factors and timing. No routine HLA-B*58:01 screening. | Yes: `ind`, `cond`, `ulty`, `ultc`, `scar` |
| **12.2b Gout flare (Rec 8)** | 35 to 37 | The three drug classes; low-dose colchicine preferred; combinations if monotherapy is not enough; intra-articular steroid (evidence extrapolated). | Yes: `rx` and the drug nodes |
| 12.2c Flare prophylaxis (Rec 9) | 37 to 38 | At least 3 to 6 months when starting ULT. | Yes: `ulty`, `onprop`, **Flare drugs** tab |
| **12.2d Special groups: CKD (Rec 10), pregnancy** | 38 to 40 | In CKD, avoid colchicine in severe CKD and avoid NSAIDs; steroids are allowed. Pregnancy and breastfeeding advice. | Yes: `rx` info, `col`, `nsaid`, `colno`, `preg` |
| 13 Discontinuing ULT | 40 | "ULT should be continued long-term". | Yes: `keep` |
| 14 Adjunctive treatment | 41 to 42 | Not recommended yet. | No |
| 15 Monitoring (Rec 11, Table 4) | 43 to 44 | Patient education about SCAR, and stopping promptly. Table 4 is clinic monitoring. | SCAR in `scar`. Table 4 cut for size. |
| **16 Referral (Rec 12)** | 45 to 46 | Rheumatology criteria; orthopaedic and surgical criteria; urolithiasis to a urologist. | Yes: `go`, `rh`, `rheum`, `surg` |
| 17 Implementation, audit | 47 to 48 | Nothing for the ED. | No |
| References; Appendices 1 and 2 | 49 to 57 | Nothing for the ED. | No |
| Appendix 3A, 3B: alcohol servings, DASH tables | 58 to 60 | Dietitian tables. | No |
| Appendix 3C: dietary recommendations for gout | 60 to 61 | Fluid at least two litres a day; foods to restrict; foods not restricted (with Malay fish names). | Yes: **Diet and medicines** tab |
| Appendix 4: ice pack | 62 | Three captions with photos. No duration is given. | Yes |
| Appendix 5A: ULT drugs | 63 to 67 | Allopurinol starting dose by eGFR; febuxostat. Probenecid, benzbromarone and pegloticase are not ED drugs. | Allopurinol and febuxostat in the **Urate-lowering** tab. The other three left out. |
| **Appendix 5B: flare and prophylaxis drugs** | 68 to 72 | Colchicine course, renal, hepatic and CYP3A4/P-gp tables; NSAID and COX-2 doses with contraindications; prednisolone; triamcinolone. | Yes: the drug nodes and the **Flare drugs** tab |
| Appendix 5C: pregnancy and lactation | 73 to 75 | Pregnancy category and lactation data for each drug; FDA categories. | Yes: **Pregnancy** tab (without probenecid, benzbromarone, pegloticase) |
| Abbreviations, acknowledgement | 76 to 78 | Nothing for the ED. | No |

**No patient leaflet.** The CPG prints no patient leaflet, so the draft has no `leaflet`. Appendices 3 and 4 are clinician material: dietitian tables and ice-pack photos. If Krishna wants the Copy button on the discharge outcome, an `advice` array could carry quoted lines (the education list, ice packs, Rec 5). That text would be the CPG's words to clinicians, not patient wording.

**Not reviewed:** the CPG's Quick Reference (Academy file 1046 in `CPG_SHELF`), and the web version that the CPG calls definitive.

---

## (b) Points inside the CPG

These are places where the algorithm, the text, the tables and the recommendations disagree or leave a gap. They are ordered by ED impact, and each was checked on the page image.

### Flare treatment

1. **The colchicine trial doses are not the dose to give.** The text quotes the trials: "low dose (1.2 mg stat and 0.6 mg one hour later; total 1.8 mg over one hour)" (p35), and the DG prefers low dose (p36). Appendix 5B prescribes "Initial dose: 1 mg, then 0.5 mg after 1 hour" (p68). The text never says the Appendix dose is the one to use. The draft gives the Appendix dose and names the trial doses only in the `coldose` gap.
2. **The colchicine renal table has no row for normal kidney function.** Its bands are ">60 - 89", "30 - 60" and "<30, renal replacement therapy" (p68–69), under the heading "Dosage modifications in renal impairment". Nothing covers a CrCl of 90 or more, or one between 89 and 90.
3. **The prophylaxis footnote's 80 ml/min cut-off splits a band.** "*Use of colchicine to treat gout flares is not recommended in patients with renal impairment (CrCl <80 ml/min) already receiving prophylactic colchicine" (p69). 80 is not a band edge, so for a patient on prophylaxis the >60 - 89 band divides at 80.
4. **"Renal impairment" is undefined in the colchicine contraindications.** Appendix 5B contraindicates "Concomitant use of P-glycoprotein or CYP3A4 inhibitors in patients with renal or hepatic impairment" and "Patients with both renal and hepatic impairment" (p68). It never says what counts as renal impairment.
   - If the renal table's own heading is the definition, CrCl >60 - 89 counts. The CYP3A4/P-gp dose table (p70) would then apply only to a CrCl of 90 or more, a range the renal table does not have.
   - The only numeric definition is the footnote's "renal impairment (CrCl <80 ml/min)" (p69).
   - The contraindication list also gives both "drugs that are both P-glycoprotein and CYP3A4 inhibitors" and "P-glycoprotein or CYP3A4 inhibitors". The second covers the first.
5. **The CYP3A4/P-gp table gives a first dose only.**
   - For a moderate CYP3A4 inhibitor the flare dose is "1 mg at first sign of flare", and for a P-gp inhibitor "0.5 mg at first sign of flare" (p70). Whether the 12-hour pause and the 8-hourly doses that follow still apply is not said. The only rule is "***Do not repeat courses of colchicine therapy until 3 days have elapsed."
   - The 0.25 mg doses imply half of the 0.5 mg tablet (the course is "6 mg (12 tablets)", p68). The CPG does not say so.
6. **"Severe CKD" is undefined for the flare drugs.**
   - P39 says "Colchicine should be avoided in severe CKD" with no number. Appendix 5B uses CrCl "<30, renal replacement therapy" for colchicine (p69).
   - Elsewhere "severe CKD" means CrCl 15 - 29 (febuxostat, p39), while CKD "stage ≥3" is called "moderate to severe" (p31, p39).
7. **NSAIDs in CKD: the text and the appendix differ in strength.** The text says "NSAIDs should also be avoided in CKD due to its potential nephrotoxic effect" (p39), which covers any stage. The Appendix 5B contraindication is only "Severe hepatic or renal impairment" (p71). The draft shows both in the `nsaid` check.
8. **Colchicine prophylaxis in CKD.** "Colchicine at a reduced dose is a recommended prophylaxis treatment in gout patients with CKD" (p39). The table limits it to 0.5 mg daily at CrCl 30 - 60 and says "Consider alternative therapy" below 30 (p69).
9. **The repeat interval for a course depends on the liver.** The standard interval is "at least 3 days (72 hours)" (p68). In severe hepatic impairment it is "should not be repeated more frequently than every 14 days" (p69). Hepatic impairment (mild, moderate, severe) is not graded anywhere in the CPG.
10. **NSAIDs in pregnancy: the appendix allows weeks the text excludes.** Appendix 5C lists ibuprofen, diclofenac, naproxen and meloxicam as "Restricted to first and second trimester" (p73). The text adds "FDA recommends to avoid NSAIDs in pregnancy at 20 weeks or beyond" (p40). Weeks 20 to 27 fall inside the second trimester.
11. **COX-2 inhibitors in pregnancy.** The text says "non-selective NSAIDs are preferred over COX-2 specific inhibitors in the first two trimesters" (p40), which implies COX-2 inhibitors are only less preferred. Appendix 5C says celecoxib and etoricoxib "Should be avoided" (p73).
12. **No durations for NSAIDs and COX-2 inhibitors.**
    - Appendix 5B gives daily doses with no length of course (p71).
    - The trial behind celecoxib used "800 mg stat, 400 mg 12 hours later, then 400 mg BD for seven days" (p36). Appendix 5B gives "400 mg stat followed by 200 mg BD subsequently" (p71).
    - Gastroprotection is not mentioned.
13. **"Insufficient response" is not defined.** "Combination of the above may be used in gout flare if response to monotherapy is insufficient" (Rec 8, p37). No combinations, timing or admission criteria are given.

### ULT, diagnosis and referral

14. **Allopurinol titration interval.**
    - Appendix 5A's general line says "adjusted in increments of 100 mg every 2 - 4 weeks" (p63).
    - Its renal table says "every 4 weeks*", with the footnote "*More rapid titration e.g. every 2 weeks is possible" (p63–64).
    - The text says "increase dose slowly every four weeks" (p32).
15. **Allopurinol starting dose.** The text reports that "an allopurinol starting dose of 1.5 mg/unit eGFR minimised risk of AHS" and says to "start allopurinol at low dose, 50 or 100 mg" (p32). The table gives "50 mg every other day" below eGFR 30 (p63), which is neither 50 nor 100 mg daily. The 1.5 mg per unit of eGFR is a study finding, not a dosing rule, and it gives different numbers from the table: eGFR 60 gives 90 mg against 50 mg daily in the table.
16. **Kidney function is measured three ways across the drugs.**
    - Allopurinol uses eGFR (ml/min/1.73m², p63). Colchicine uses CrCl (p68).
    - Febuxostat appears as "eGFR 15 - 89 ml/min" (p35), as "CrCl of 30 - 89 ml/min" and "CrCl of 15 - 29 ml/min" (p39), and as CrCl "≥30" and "15-29" (p65).
    - Probenecid is avoided at "CrCl <30 ml/min" (p64), benzbromarone at "eGFR <20 ml/min" (p66).
    - The CPG gives no CrCl formula, and no febuxostat advice below 15.
17. **The febuxostat hepatic table is mislabelled.** Its header reads "CrCl (ml/min)" over the rows "A or B" and "C" (p65). The CPG never says what A, B and C are.
18. **Where febuxostat sits.**
    - Appendix 5A: "Febuxostat should only be used in patients who have an inadequate response to a maximally titrated dose of allopurinol, who are intolerant to allopurinol or whom treatment with allopurinol is not advisable" (p66).
    - Rec 7: "When allopurinol is contraindicated or not tolerated, febuxostat or uricosuric agents may be considered" (p35).
    - P39: febuxostat is "the second-line ULT in moderate to severe CKD".
    - These are broadly consistent, but the Appendix adds the inadequate-response route.
19. **Prophylaxis wording differs in strength.** Rec 9 says prophylaxis "should be used for at least three to six months" (p38). Appendix 5B says it "may be beneficial for at least the first 3 to 6 months" (p68).
20. **When to measure serum urate.** For diagnosis: "Repeat SU ≥2 weeks after resolution of flare" (p xi) and "two weeks or more after complete resolution of flare" (p15). For the ACR/EULAR score, SU is "Ideally ... scored at a time when the patient was not receiving ULT and it was >4 weeks from the start of an episode", and "The highest value irrespective of timing should be scored" (Table 2, p18). The intervals differ.
21. **Units for serum urate.** The CPG uses µmol/L, converting at 60 per mg/dL (6 mg/dL = 360, 6.8 = 408, 9 = 540). Table 2 alone uses mg/dL and mmol/L (p18).
22. **Referral wording.** 16.1 says "Diagnosis is uncertain in cases with atypical clinical presentations" (p45). Rec 12 says "unclear diagnosis with atypical clinical presentations" (p46). For surgery, 16.1 says "risk of permanent joint destruction" (p45) and Rec 12 says "risk of permanent joint damage" (p46). The meaning is the same; the draft quotes Rec 12.
23. **"Do not stop ULT during attack" (p xi) against SCAR.** The algorithm says not to stop ULT in a flare. P43 says to stop allopurinol at the first sign of a skin reaction. The two are compatible, but the algorithm does not mention the exception. The draft gives them separate options under `ult`.

### Editorial (no clinical effect)

24. **Typos and printed spellings.** "Hyeruric(a)emia" (G-CAN table, p3); "4ºCelcius" (p14); "diastheses", "maybe required" and "hypokalemic" (p72). The draft keeps the printed spellings where it quotes them.
25. **Two mu characters.** The PDF types µmol/L with two different characters, even inside one list. In Recommendation 12 (p46, also p iii and p45), "recurrent flares ... <360 µmol/L" uses the micro sign (U+00B5) and "failure to achieve SU target of <360 μmol/L" uses Greek mu (U+03BC). Rec 4 (p26), p ii, p25 and p28 use Greek mu. The draft writes U+00B5 throughout.
26. **A citation out of order.** Reference 110 is cited on p40, between references 97 and 98.

---

## (c) The gz-rules gout node against this CPG

The node is in `data.js`, `P['gz-rules'].nodes.gout`. Its own `gap` names its source as the HKL Medical Department letter (377)HKL/PBTN/98/100/29 of 29 Nov 2024. **I do not have that letter.** This table compares the node with the CPG only, so some differences may come from the letter itself.

| Item | Node says | CPG says (page) | Verdict |
|---|---|---|---|
| Setting | "Gout is managed at primary care: refer to the nearest Klinik Kesihatan" | "the majority of patients managed in primary and general medical healthcare facilities"; family and general physicians "are encouraged to refer the more challenging and complex cases to the relevant specialties or subspecialties" (p45) | The KK rule is the department's, not the CPG's. Consistent in spirit. |
| Framing | "Only complex cases go to Rheumatology, as listed in the CPG..." | "Referral of gout patients to a rheumatologist **may be considered** for the following" (Rec 12, p46) | **Differs.** The CPG is permissive ("may be considered"); the node reads as a gate ("only"). |
| Diagnostic, core | "unclear diagnosis **or** atypical presentation" | "unclear diagnosis **with** atypical clinical presentations" (Rec 12, p46); "Diagnosis is uncertain in cases with atypical clinical presentations" (16.1, p45) | **Meaning changed.** "Or" lets either one qualify; the CPG needs both. |
| Diagnostic, women | "suspected gout in women before menopause" | "suspected gout in women **with onset** before menopause" (p46) | Drops "with onset". |
| Diagnostic, men | "men under 30 without risk factors" | "men with **early onset at age <30 years** without **predisposing** risk factors for gout" (p46) | **Differs.** The node reads as current age; the CPG means age at onset. |
| Therapeutic, heading | "refractory despite adherence" as one item in the list | "**refractory to conventional therapy despite drug adherence**" is the heading over the next four items (p45, p46) | **Structure flattened.** The node also drops "to conventional therapy". |
| Flare not resolving | "flare not resolving despite CPG treatment" | "gout flare that fails to resolve despite treatment as recommended by the CPG" (p46) | Matches |
| Recurrent flares at target | "recurrent flares despite serum urate under 360 µmol/L" | "recurrent flares although SU target of <360 µmol/L is achieved" (p46) | Matches |
| Target not reached | "urate target not reached after 3 months of allopurinol at the maximum tolerated dose" | "failure to achieve SU target of <360 μmol/L after **a trial of at least** three months of allopurinol at a maximally tolerated dose" (p46) | Drops "at least" and "a trial of". |
| Tophaceous gout | "tophaceous gout with progressive joint damage, active symptoms or growing tophi" | "... or growing tophi **despite medical treatment**" (p46) | **Drops "despite medical treatment"**, which widens the criterion. |
| Destructive changes | "destructive joint changes" | "**complicated gout** with destructive joint changes" (p46) | Drops "complicated gout". |
| Allopurinol reaction | "allopurinol hypersensitivity or intolerance" | "hypersensitivity or intolerance to allopurinol" (p46) | Matches |
| Pregnancy | "Special group: gout in pregnancy" | "special group indication: gout in pregnancy" (p46) | Matches |
| Surgery | "Consider surgery for tophi with uncontrolled infection, entrapment neuropathy or risk of permanent joint damage" | "Surgical management of tophi may be considered when there is: uncontrolled infection; entrapment neuropathy; risk of permanent joint damage" (Rec 12, p46). 16.1 says "joint destruction" (p45). | Matches Rec 12 |
| Urolithiasis | "Gout with urolithiasis: assess by a urologist" | "Gout with urolithiasis should be assessed by a urologist." (p46) | Matches |
| Not in the node | | 16.2 orthopaedic/surgical care (p45–46). Current or impending debilitating complications of tophaceous deposits: uncontrolled infection including discharging sinus; ulceration with risk of infection; entrapment neuropathy e.g. carpal tunnel syndrome at the wrist; major joint destruction; joint instability; impaired joint motion that affects ADL, work or safety; functional impairment e.g. inability to wear shoes or clothing. Also cosmetic surgery (elective). | Missing. The draft's `surg` outcome carries it. |

**Related department lines:**
- `data3.js` (gz-rules `kk`): "Gout is managed at primary care: refer to the nearest Klinik Kesihatan".
- `data2.js` (MAU): "Rheumatology: Acute gout flare" is on the list of diagnoses MAU will consider (flow chart, 18 Oct 2022). The draft links to `#mau-admission`.
- `outpatient-referral` (draft FAST clinic criteria, Aug 2023): "Probable connective tissue or rheumatological disease: Physician's Clinic HKL". Gout is a rheumatological disease, so this may clash with the newer KK rule (29 Nov 2024). Worth confirming.

**Proposed link (not applied):** add one line after the entry, written as the trailing comment in the draft:
`P['gz-rules'].nodes.gout.links = [...(P['gz-rules'].nodes.gout.links || []), ['#gout-cpg', 'Gout CPG, 2nd edition (2021)']];`
With this line the project's `check-data.js` reports "40 entries; rules: 15", "no errors" on a scratch copy.

---

## (d) Calculator candidates

**Engine note.** `dTable` in `engine.js` is hard-wired to `P['dengue-cpg']`. A gout calculator needs a general accessor, for example `cpgTable(id, part)`, that finds a note by heading in `P[id].notes`. The tables it would read are in the draft's **Flare drugs** and **Urate-lowering** tabs under these exact headings:
- "Colchicine by creatinine clearance"
- "Colchicine in hepatic impairment"
- "Colchicine with a CYP3A4 or P-glycoprotein inhibitor, now or in the last 14 days"
- "Allopurinol: starting dose by kidney function"

Every phrase a calculator would show is in the calculator facts, and all 34 are present in the draft.

### 1. Colchicine for a flare: the best candidate

**Inputs:**
- CrCl in ml/min. The CPG gives no formula; the app's existing MDCalc Cockcroft-Gault link fits.
- On renal replacement therapy (yes or no).
- Hepatic impairment: none, mild to moderate, or severe, chosen by the MO.
- Already on colchicine prophylaxis (yes or no).
- A CYP3A4 or P-gp inhibitor now or within 14 days: none, potent CYP3A4, moderate CYP3A4, P-gp, or not sure.

**Numbers and their sources, as printed:**
- The course: "Initial dose: 1 mg, then 0.5 mg after 1 hour. No further tablets should be taken for 12 hours." "After 12 hours, treatment can be resumed if necessary with a maximum dose of 0.5 mg every 8 hours until symptoms are relieved." It ends at "a total of 6 mg (12 tablets)", and "another course should not be started for at least 3 days (72 hours)" (p68).
- Renal bands: ">60 - 89" and "30 - 60" give "No dosage adjustment, monitor closely for AE" for treatment. For prophylaxis, 30 - 60 gives "Limit dose to 0.5 mg daily". "<30, renal replacement therapy" gives "Consider alternative therapy" (p68–69).
- The footnote: "renal impairment (CrCl <80 ml/min) already receiving prophylactic colchicine" means not recommended (p69).
- Hepatic: mild to moderate, no adjustment. Severe: "treatment course should not be repeated more frequently than every 14 days". The footnote ** excludes flare treatment for anyone on prophylaxis with hepatic impairment (p69).
- During prophylaxis: "Do not exceed 1 mg at the first sign of flare, followed by 0.5 mg 1 hour later, wait for 12 hours and then resume prophylactic dose." (p68)
- Inhibitor table (p70):
  - Potent CYP3A4: "0.5 mg at first sign of flare, followed by 0.25 mg one hour later"; prophylaxis "0.25 mg OD or every other day".
  - Moderate CYP3A4: "1 mg at first sign of flare"; prophylaxis "0.25 mg BD, 0.5 mg OD or 0.25 mg OD".
  - P-gp: "0.5 mg at first sign of flare"; prophylaxis "0.25 mg OD or every other day".
  - Prophylaxis together with a CYP3A4 inhibitor: not recommended. "Do not repeat courses of colchicine therapy until 3 days have elapsed."
- Contraindications (p68): both renal and hepatic impairment; a P-gp or CYP3A4 inhibitor with renal or hepatic impairment; blood dyscrasia.

**Where it must decline or hand back to the MO:**
- **CrCl of 90 or more:** there is no row. Show the p68 course labelled "no renal modification printed", and do not invent a band. Also decline a CrCl between 89 and 90.
- **Renal impairment combined with an inhibitor:** the CPG does not define renal impairment for this contraindication (point 4). The calculator must not decide whether CrCl 60 - 89 counts. It should show the contraindication and let the MO judge.
- **On prophylaxis with CrCl under 80, hepatic impairment or a CYP3A4 inhibitor:** show "not recommended" and offer no colchicine dose. The CPG names no alternative beyond the other drug classes.
- **Moderate CYP3A4 or P-gp inhibitor:** give the first dose only, and say the CPG does not state what follows (point 5).
- **An inhibitor that is not in the CPG's examples** (clarithromycin, ketoconazole, itraconazole, protease inhibitors; diltiazem, erythromycin, fluconazole, verapamil; cyclosporin, ranolazine): decline to classify it.
- **Hepatic grading:** the CPG gives none. The MO chooses.

### 2. Allopurinol starting dose by eGFR: a reference card rather than an ED tool

**Input:** eGFR in ml/min/1.73m².

**Bands (p63):**
- ">60": "100 mg daily", "Increase by 100 mg every 4 weeks* if tolerated until SU target is reached or to a maximum of 900 mg daily".
- "30 - 60": "50 mg daily", "Increase by 50 mg every 4 weeks ...**".
- "<30": "50 mg every other day", "Increase to 50 mg every day after 4 weeks, then increase by 50 mg every 4 weeks thereafter ...**".

Footnotes: "*More rapid titration e.g. every 2 weeks is possible", and "**Consider referral to or discussion with rheumatologist if SU targets are not achieved or increase in dose is not tolerated" (p64).

The bands are closed at their edges: 60 and 30 both fall in the middle band.

**Must decline:**
- **Only a CrCl is known:** the table uses eGFR. Do not convert.
- **Dialysis:** not covered; the <30 row does not mention it.
- **Already on allopurinol:** the table is for starting; titration needs the SU result.
- **Hypersensitivity:** contraindicated.
- **HLA-B*58:01-positive:** a caution only, with no other dose given.
- **The 1.5 mg per unit eGFR figure:** never compute it (point 15).
- **The interval:** show both "every 2 - 4 weeks" and "every 4 weeks*" with the footnote (point 14).

**Scope:** the CPG does not say the ED should start ULT, and the Green Zone sends gout to the KK. This is lower priority for the Green Zone.

**Febuxostat (p65)** could be a note on the same card rather than a calculator:
- "CrCl ≥30 ml/min, no adjustment"; "CrCl 15-29 ml/min, maximum dose 40 mg OD".
- Decline below 15.
- The hepatic rows are mislabelled (point 17).

### 3. ACR/EULAR gout classification score (Table 2, p18–19; threshold on p17): link out

The table is printed in full:
- Joint pattern: 1 or 2.
- Characteristics: 1 to 3.
- Time course: 1 or 2.
- Tophus: 4.
- SU: "<4 mg/dL (<0.24 mmol/L)" −4, "6 - <8" 2, "8 - <10" 3, "≥ 10" 4.
- Synovial fluid "MSU negative": −2.
- Ultrasound or DECT: 4. Erosion on X-ray: 4.

"A person with a score ≥8 can be classified as having gout" (p17). The threshold is in the text, not in the table.

**Recommendation: link out.** The CPG itself names https://www.mdcalc.com/acr-eular-gout-classification-criteria and http://goutclassificationcalculator.auckland.ac.nz (p17). This matches the app's link-out policy (`CALC_LINKS`).

**If it is ever built:** Table 2 must first be added to the entry. The mutually exclusive bands and negative points fit segmented fields, not `check:'score'`. It must handle:
- the entry criterion (no episode: not applicable);
- the sufficient criterion (crystals: classify without scoring);
- the footnote zero scores: SU 4–<6, synovial fluid not assessed, imaging unavailable;
- the SU timing caveat (point 20) and units (point 21).

### Not candidates

- NSAID, COX-2 and prednisolone doses are fixed, not weight-based.
- The ULT indications and the referral criteria are already checklists in the nodes.

---

## (e) Every number in the draft, checked

**Method.**
- For each number, the exact printed string was searched in PyMuPDF's `page.get_text()` for that printed page (PDF page = printed + 17; roman + 6).
- Before matching, whitespace was collapsed, line-end hyphens were joined, and U+03BC was read as U+00B5.
- **70 of 70 were found.**
- For the landscape tables in Appendix 5 (p63–73), the text layer gives cells column by column. The row pairings (eGFR band to dose; CrCl band to treatment and prophylaxis; inhibitor class to dose) were confirmed on rotated page images.
- Separately, every quoted fragment of the final draft (415 fragments of 18 characters or more) was matched against the whole text layer. Every fragment not found verbatim was my own label, hint or gap wording, or two printed cells joined with a semicolon. None was a transcription error.

| # | Number(s) in the draft | Page | Exact printed string (text layer) | Result |
|---|---|---|---|---|
| 1 | <24 hours; 14 days | p xi | Time to maximal pain <24 hours and complete resolution of symptoms within 14 days | found |
| 2 | ≥2 weeks | p xi | Repeat SU ≥2 weeks after resolution of flare if highly | found |
| 3 | ≥2 flares in 12 months | p xi | recurrent gout flares (≥2 flares in 12 months) | found |
| 4 | >1 flare; <2 flares/year | p xi | previously had >1 flare but infrequent (<2 flares/year) | found |
| 5 | CKD stage ≥3 | p xi | concomitant CKD stage ≥3 | found |
| 6 | SU >540 µmol/L | p xi | SU >540 µmol/L | found; micro sign (U+00B5) |
| 7 | within 24 hours; 1 - 2 weeks | p10 | Occurs abruptly with joint pain peaking in intensity within 24 hours and resolves spontaneously within 1 - 2 weeks | found |
| 8 | 24 - 48 hours; 4ºCelcius | p14 | stored at room temperature for 24 - 48 hours and should be refrigerated (at 4ºCelcius) | found |
| 9 | >6.8 mg/dL (408 µmol/L) | p15 | a SU concentration of >6.8 mg/dL (408 µmol/L) at physiological pH | found; micro sign |
| 10 | two weeks or more | p15 | SU may be repeated two weeks or more after complete resolution of flare | found |
| 11 | >60 years old | p21 | age >60 years old | found |
| 12 | <360 µmol/L (Rec 4) | p26 | Treat-to-target strategy aiming for serum urate of <360 μmol/L | found; Greek mu (U+03BC) |
| 13 | ≥2 flares in 12 months | p30 | recurrent gout flares (≥2 flares in 12 months) OR | found |
| 14 | ≥1 tophi | p30 | presence of ≥1 tophi OR | found |
| 15 | stage ≥3 | p31 | moderate to severe CKD (stage ≥3) OR | found |
| 16 | >9 mg/dL (540 µmol/L) | p31 | SU concentration >9 mg/dL (540 µmol/L) OR | found; micro sign |
| 17 | >1 flare; (<2/year) | p31 | previously experienced >1 flare but have infrequent flares (<2/year) | found |
| 18 | 30 days (range 1 - 1080 days) | p32 | developing AHS was 30 days (range 1 - 1080 days) | found |
| 19 | 90%; 180 days | p32 | 90% of AHS cases occurred within the first 180 days | found |
| 20 | 1.2 mg then 0.6 mg (trial doses, in a gap) | p35 | (1.2 mg stat and 0.6 mg one hour later; total 1.8 mg over one hour) | found |
| 21 | three to six months (Rec 9) | p38 | Prophylaxis for gout flares should be used for at least three to six months when initiating urate-lowering therapy | found |
| 22 | 20 weeks | p40 | FDA recommends to avoid NSAIDs in pregnancy at 20 weeks or beyond | found |
| 23 | <30 years | p46 | men with early onset at age <30 years without predisposing | found |
| 24 | <360 µmol/L (recurrent flares) | p46 | recurrent flares although SU target of <360 µmol/L is achieved | found; micro sign on this line |
| 25 | <360 µmol/L; three months | p46 | failure to achieve SU target of <360 μmol/L after a trial of at least three months of allopurinol at a maximally tolerated dose | found; Greek mu on this line |
| 26 | at least two litres | p60 | Fluid intake of at least two litres a day unless on fluid restriction. | found |
| 27 | 100 mg/day; 100 mg every 2 - 4 weeks | p63 | Initial: 100 mg/day, adjusted in increments of 100 mg every 2 - 4 weeks according to SU concentration until target is achieved | found |
| 28 | ≥300 mg/day | p63 | Maintenance: ≥300 mg/day are usually needed to reach the desired SU target | found |
| 29 | 900 mg/day | p63 | Maximum: 900 mg/day | found |
| 30 | >300 mg/day | p63 | Once daily in a single dose or in 2 or 3 divided doses if >300 mg/day | found |
| 31 | eGFR >60: +100 mg every 4 weeks, max 900 mg daily | p63 | Increase by 100 mg every 4 weeks* if tolerated until SU target is reached or to a maximum of 900 mg daily | found |
| 32 | eGFR 30 - 60: +50 mg every 4 weeks | p63 | Increase by 50 mg every 4 weeks if tolerated until SU target is reached or to a maximum of 900 mg daily** | found |
| 33 | eGFR <30: 50 mg daily after 4 weeks, +50 mg every 4 weeks | p63 | Increase to 50 mg every day after 4 weeks, then increase by 50 mg every 4 weeks thereafter if tolerated until SU target is reached or to a maximum of 900 mg daily** | found |
| 34 | initial doses 100 mg daily; 50 mg daily; 50 mg every other day | p63 | 100 mg daily 50 mg daily 50 mg every other day (column; rows confirmed on the image) | found |
| 35 | eGFR bands >60; 30 - 60; <30 | p63 | >60 30 - 60 <30 (column; rows confirmed on the image) | found |
| 36 | every 2 weeks (rapid titration) | p64 | *More rapid titration e.g. every 2 weeks is possible | found |
| 37 | febuxostat 40 mg OD; >6.0 mg/dL (360 µmol/L); 2 - 4 weeks; 80 mg OD | p65 | Initial: 40 mg OD; if SU level is >6.0 mg/dL (360 µmol/L) after 2 - 4 weeks, 80 mg OD may be considered | found; micro sign |
| 38 | 40 mg or 80 mg OD; 120 mg OD | p65 | Maintenance: 40 mg or 80 mg OD, dose may be increased to 120 mg OD if clinically indicated | found |
| 39 | CrCl ≥30; 15-29; maximum dose 40 mg OD | p65 | ≥30 15-29 Dose No adjustment Maximum dose 40 mg OD (rows confirmed on the image) | found |
| 40 | colchicine 1 mg; 0.5 mg after 1 hour; 12 hours | p68 | Initial dose: 1 mg, then 0.5 mg after 1 hour. No further tablets should be taken for 12 hours. | found |
| 41 | 0.5 mg every 8 hours | p68 | After 12 hours, treatment can be resumed if necessary with a maximum dose of 0.5 mg every 8 hours until symptoms are relieved. | found |
| 42 | 6 mg (12 tablets); 3 days (72 hours) | p68 | when a total of 6 mg (12 tablets) has been taken. After completion of a course, another course should not be started for at least 3 days (72 hours). | found |
| 43 | 0.5 mg OD or BD; 3 to 6 months | p68 | 0.5 mg OD or BD. Prophylactic therapy may be beneficial for at least the first 3 to 6 months of ULT therapy. | found |
| 44 | 1 mg; 0.5 mg 1 hour later; 12 hours (during prophylaxis) | p68 | Do not exceed 1 mg at the first sign of flare, followed by 0.5 mg 1 hour later, wait for 12 hours and then resume prophylactic dose. | found |
| 45 | at least 12 hours | p68 | Initiate prophylactic dose at least 12 hours after treatment dose and continue until gout flare resolves. | found |
| 46 | CrCl >60 - 89 | p68 | >60 - 89 | found |
| 47 | CrCl 30 - 60; <30, renal replacement therapy | p69 | 30 - 60 <30, renal replacement therapy (rows confirmed on the image) | found |
| 48 | 0.5 mg daily (prophylaxis, CrCl 30 - 60) | p69 | Limit dose to 0.5 mg daily | found |
| 49 | CrCl <80 ml/min | p69 | patients with renal impairment (CrCl <80 ml/min) already receiving prophylactic colchicine | found |
| 50 | every 14 days (severe hepatic) | p69 | treatment course should not be repeated more frequently than every 14 days | found |
| 51 | within 14 days | p70 | recently (within 14 days) received a moderate or potent CYP3A4 inhibitor | found |
| 52 | potent CYP3A4: 0.5 mg then 0.25 mg one hour later | p70 | 0.5 mg at first sign of flare, followed by 0.25 mg one hour later | found |
| 53 | potent CYP3A4 or P-gp prophylaxis: 0.25 mg OD or every other day | p70 | 0.25 mg OD or every other day | found |
| 54 | moderate CYP3A4: 1 mg | p70 | 1 mg at first sign of flare | found |
| 55 | moderate CYP3A4 prophylaxis | p70 | 0.25 mg BD, 0.5 mg OD or 0.25 mg OD | found |
| 56 | P-gp: 0.5 mg | p70 | 0.5 mg at first sign of flare (rows confirmed on the image) | found |
| 57 | 3 days | p70 | ***Do not repeat courses of colchicine therapy until 3 days have elapsed. | found |
| 58 | ibuprofen 400 - 800 mg TDS; 3200 mg/day | p71 | 400 - 800 mg TDS (maximum: 3200 mg/day) | found |
| 59 | diclofenac 50 mg BD/TDS | p71 | 50 mg BD/TDS | found |
| 60 | naproxen 550 - 1100 mg; 2 doses; 275 mg tablet | p71 | 550 - 1100 mg in 2 divided doses (275 mg tablet) | found |
| 61 | naproxen 750 mg; 250 mg TDS; 250 mg tablet | p71 | 750 mg initially, then 250 mg TDS (250 mg tablet) | found |
| 62 | meloxicam 15 mg/day | p71 | Maximum 15 mg/day | found |
| 63 | celecoxib 400 mg stat; 200 mg BD | p71 | 400 mg stat followed by 200 mg BD subsequently | found |
| 64 | etoricoxib 120 mg/day | p71 | 120 mg/day | found |
| 65 | prednisolone 30 to 40 mg/day; 2 doses; 5 days | p71 | 30 to 40 mg/day once daily or in 2 divided doses for 5 days. | found |
| 66 | taper 7 to 10 days | p71 | a gradual taper over 7 to 10 days is an option. | found |
| 67 | taper 14 to 21 days | p72 | A slower taper (e.g. over 14 to 21 days) maybe required, particularly in patients with multiple recent flares. | found |
| 68 | triamcinolone IA 40 mg; 30 mg; 10 mg | p72 | Large joint: 40 mg as a single dose Medium joint: 30 mg as a single dose Small joint: 10 mg as a single dose | found |
| 69 | triamcinolone IM 40 to 80 mg; ≥48-hour | p72 | 40 to 80 mg as a single dose; May repeat at ≥48-hour intervals if there is no flare resolution | found |
| 70 | NSAIDs: first and second trimester | p73 | Restricted to first and second trimester | found |

---

## Open questions for Krishna (for Still to confirm)

These are gaps where the CPG does not cover what the ED needs. Each is shown in a node's `gap`, and nothing is filled in.

1. **Suspected septic arthritis.** The CPG names it the key differential (p21) but gives no pathway: not when to aspirate in the ED, what to send besides crystals (cell count, Gram stain, culture), antibiotics, admission, or referral. What is the department's process?
2. **Joint aspiration and injection.** There is no technique and no pre-injection check; the CPG only lists "recent intra-articular injection" as a septic arthritis risk factor (p21). Who aspirates in the Green Zone, and is crystal microscopy available out of hours?
3. **Admission for a flare.** The CPG has no admission criteria. The MAU flow chart lists acute gout flare. Confirm that MAU is the route for a flare that cannot go home.
4. **Pain relief beyond anti-inflammatories.** Paracetamol, opioids and gastroprotection are not mentioned anywhere in this CPG. The ebook's pain pathway (`#pain`) covers analgesia in general. Should the entry link to it?
5. **NSAID and COX-2 course length,** and NSAIDs between 20 weeks and the end of the second trimester (point 10).
6. **Colchicine edge cases:**
   - CrCl of 90 or more (point 2).
   - What "renal impairment" means for the inhibitor contraindication (point 4).
   - Doses after the first with a moderate CYP3A4 or P-gp inhibitor (point 5).
7. **Should the ED start allopurinol** when ULT is indicated? The CPG allows starting during a flare (p31) but does not mention the ED. The Green Zone sends gout to the KK.
8. **Follow-up interval and return advice after a flare.** None is printed. Is the KK referral letter enough?
9. **The HKL letter of 29 Nov 2024:** check the gz-rules node's wording against the letter (section (c)). The CPG's own words differ in six places, two of them in meaning ("or" for "with", and current age against age at onset).
10. **The FAST clinic draft** sends "rheumatological disease" to the Physician's Clinic; the newer letter sends gout to the KK.
11. **The CPG is past its stated review date (2025),** and the web version is "the definitive version at all times". Check the MOH and Academy sites for an erratum or a 3rd edition before publishing.
