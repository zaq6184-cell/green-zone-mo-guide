# Review: CPG Management of Chronic Kidney Disease in Adults, 2nd edition (MaHTAS, 2018)

**Built into the app on 9 Nov 2026** (third CPG round): the entry *CKD in adults: CPG 2nd edition* (`#ckd-cpg`) in the Abdomen, kidney and scrotum group, with three reference tabs (Stages, Tests, Doses), and the calculator *Kidney function and drug doses* (`#calc-crcl`), which reads the CPG's Cockcroft-Gault (p7) and the Appendix 3 rows kept in the Doses tab.

For the Green Zone MO Guide, entry `ckd-cpg`. Reviewed 9 Nov 2026.

- **Source:** *Clinical Practice Guidelines: Management of Chronic Kidney Disease in Adults (Second Edition).* Malaysian Health Technology Assessment Section (MaHTAS), Medical Development Division, Ministry of Health Malaysia, Putrajaya. Issued 2018, "will be reviewed in a minimum period of four years (2022)" (PDF page 3). ISBN 978-967-2173-39-7 (PDF page 2). File read: `...\AMM Clinical Practice Guidelines\Nephrology\2018 - Management of Chronic Kidney Disease (2nd Edition) [898].pdf`, 68 PDF pages (PDF created 22 Oct 2018), not modified. Its quick reference (`... - Quick Reference [899].pdf`, 8 pages) was read to check the key messages.
- **Copyright (PDF page 2):** MaHTAS owns it. Content may be reproduced in any number of copies and in any format or medium provided that a copyright acknowledgement to MaHTAS is included and the content is not changed, not sold, nor used to promote or endorse any product or service, and not used in an inappropriate or misleading context. The draft's `refs` carry that acknowledgement, worded as in `head-injury-cpg`.
- **Page offset:** printed arabic page = PDF page − 19 (p1 = PDF 20; p48 = PDF 67). Front matter in roman = PDF page − 5 (p i = PDF 6; Algorithms 1 to 4 = p xi to xiv = PDF 16 to 19). PDF 1 is the cover, PDF 2 the copyright page, PDF 3 "Updating the CPG", PDF 4 to 5 the contents, PDF 68 the back cover. Every page cited below and in the draft is the printed page.
- **Method:** text from PyMuPDF's text layer (it keeps ≥, ≤, <, >, μ/µ, κ and α but drops superscripts). The four algorithms, Tables 1 to 7 and Appendix 3 have a text layer whose reading order is scrambled, so their structure was read from page images: Algorithms 1 to 4 at 150 to 170 dpi (Algorithms 3 and 4 are printed sideways and were rotated upright), Tables 2 to 5 at 150 dpi, the equations at 220 dpi, and Appendix 3 (p37 to 44, printed sideways) at 110 to 230 dpi rotated upright, in two halves per page. Algorithm 4's "≥" before 0.5 and 1.0 g/day is missing from the text layer and was read from the image. Table 5 has no text in its cells: its colours were read from the page's vector fill values (green 0.03/0.69/0.31, yellow 0.97/0.92/0.09, orange 0.97/0.60/0.11, red 0.93/0.13/0.14, deep red 0.75/0.13/0.15). A script then checked every table cell of the draft against the text layer (all present) and every quoted fragment of 25 characters or more (295 fragments; those not found are my own connective words, list items joined with "; ", or a superscript reference number inside the source sentence). pdftotext was not used.
- **Scope (p vii):** inclusion "Adults at risk of/with CKD"; exclusion "CKD patients on dialysis and transplant"; "The CPG will also not address detail treatment for CKD-related complications and specific renal diseases." Settings: primary and secondary/tertiary care. It has **no emergency department chapter and no AKI pathway**.
- **Patient advice:** none. The CPG prints no leaflet or discharge advice; Algorithm 4's "general measures" are written for clinicians. The draft has no `advice` field.
- **The equation question from the brief:** Recommendation 3 (p6) names the equation for assessing renal function: "estimated glomerular filtration rate (eGFR) based on the 2009 CKD-epidemiology (CKD-EPI) creatinine equation", and "Serum creatinine should not be used alone". For drug dosing, p7 says Cockcroft-Gault "has been traditionally used", CKD-EPI "is used for drug dosing based on eGFR especially for newer generation drugs", and dosing "should be done according to the United States Food and Drug Administrative- or European Medicines Agency-approved product labelling". Appendix 3 (p44): "The Cockcroft-Gault equation was used to estimate the renal function for drug dosing unless otherwise indicated. #Drug dosing calculated using MDRD or CKD-Epi." Both equations are printed on p7. On NSAIDs and nephrotoxins: 4.7 (p19) "Avoid NSAIDs including cyclooxygenase-2 inhibitors [e.g. mefenamic acid, diclofenac acid, ibuprofen, naproxen, indomethacin, ketoprofen, salicylic acid (high dose), meloxicam, celecoxib and etoricoxib]", long-term PPIs, contrast, gadolinium and oral sodium phosphate; p3 adds NSAIDs as "among the most common risk factors for acute decline in GFR for patients with established CKD" and herbal products containing aristolochic acid.
- **Appendix 3 and the brief's drug list:** Appendix 3 lists **no ACE inhibitor, ARB, calcium channel blocker or beta-blocker, and no analgesic of any kind** (no NSAID, paracetamol, opioid or gabapentinoid), no colchicine, allopurinol or anticoagulant. Its antihypertensive content is the diuretics only. The draft says so in the `bp` and `nsaid` gaps.

---

## (a) The CPG chapter by chapter

| Part (pages) | What it holds | What matters to the ED | In the draft? |
|---|---|---|---|
| Copyright, updating (PDF 2 to 3) | ISBN; issued 2018, review due 2022; "corrections will be published in the web version" | The CPG is four years past its review date | Menu hint ("It was due for review in 2022") |
| Levels of evidence (p i) | USPSTF 2001 levels; GRADE wording | No | No |
| Key recommendations (p ii to iv) | Recommendations 1, 3 to 7, 9 to 12, partly | Some differ from the chapter versions (point 20) | Each recommendation quoted from its chapter |
| Development, objectives, population (p v to vii) | Updates the 2011 first edition; 11 clinical questions; inclusion and exclusion | Dialysis and transplant patients are excluded | Menu hint, `out` |
| Development group, review committee, external reviewers (p viii to x) | Names and posts | Context: two HKL consultant nephrologists (one the head of department) and two HKL clinical pharmacists sat on the DG and RC | No |
| Algorithm 1 (p xi) | Screening in diabetes: dipstick, ACR, retest twice in 3 - 6 months | Screening, not ED; one odd unit (point 3) | `pu` gap |
| Algorithm 2 (p xii) | Screening without diabetes: proteinuria on 2 out of 3 occasions | What follows a positive dipstick | `pu` |
| Algorithm 3 (p xiii) | Evaluation of haematuria: UTI, other aetiologies, re-test, glomerular disease → nephrologist, otherwise urologist | Yes: the commonest incidental finding in a walk-in | `hu`, `uti`, `oth`, `stop`, `ret`, `dch`, `glom`, `neph`, `urh` |
| Algorithm 4 (p xiv) | Treatment: DKD, non-DKD by BP >140/90 and proteinuria; general measures | Long-term | Left out for size |
| 1 Introduction (p1) | Prevalence 9.07%; awareness 4% | No | No |
| 2 Risk factors (p2 to 3), Recommendation 1 | Who to screen; drugs (NSAIDs, PPIs, herbal products) | NSAIDs and acute GFR decline; yearly screening in DM and hypertension for the discharge memo | `gen`, `nsaid` |
| 3.1.1 Proteinuria (p4 to 5), Recommendation 2, Tables 1 and 2 | Confirm within three months; factors that change protein excretion; dipstick against PCR and ACR | Yes: an ED dipstick during acute illness | `pu` (Table 2 left out) |
| 3.1.2 Haematuria (p5) | Two out of three positive dipsticks → microscopy; non-glomerular → urology | Yes | `hu`, `glom`, `urh` |
| 3.2 Renal function (p6 to 7), Recommendation 3 | CKD-EPI 2009; SCr alone not enough; elderly; cystatin C; both equations printed | Which number to use; the Cockcroft-Gault formula for drug doses | Tests tab, `rx`, `newf`, `eld` |
| 3.3 Renal ultrasound (p7 to 8) | What ultrasound shows; indications | Obstruction; the report a referral needs | `obs` hint (indications left out) |
| 3.4 Classification (p8 to 10), Recommendation 4, Tables 3 to 5 | Definition (>3 months), markers of damage, GFR and albuminuria categories, prognosis grid | Whether one raised creatinine is CKD | Stages tab, `newf` |
| 4.1 Hypertension and proteinuria (p11 to 16), Recommendations 5 and 6 | BP targets; ACEi/ARB first-line; renal profile within two weeks; titrate or reduce (SCr 30%, K 5.6); dual RAS; CCBs; aldosterone antagonists; renin inhibitors | Starting an ACE inhibitor at discharge; a rising creatinine or potassium on one | `bp`, `acei`, `acered`, `acecont` (targets left out) |
| 4.2 Glycaemic control (p16), Recommendation 7 | HbA1c ≤7%; SGLT2 trials | Long-term | Left out |
| 4.3 to 4.6 (p17 to 18), Recommendation 8 | Protein restriction, lipids, uric acid, pentoxifylline, vitamin D, traditional medicines | No | No |
| 4.7 Special precautions (p19) | Review doses (Appendix 3); avoid NSAIDs incl. COX-2; long-term PPI; contrast-induced AKI; gadolinium; oral sodium phosphate | Yes: discharge prescriptions and contrast scans | `rx`, `nsaid`, `con` (sodium phosphate left out) |
| 5 Cardiovascular risk (p20 to 21), Recommendations 9 and 10 | Statin; aspirin for secondary not primary prevention; avoid clopidogrel plus aspirin | Aspirin at discharge (Obsess protocol) | `asp` (statin left out) |
| 6 Pregnancy (p22 to 23), Recommendation 11 | Pre-pregnancy care; when pregnancy may be considered or avoided; ACEi and ARB avoided | Rare in the Green Zone | Left out except the ACEi line (`bp`) and the referral criterion (`r12`) |
| 7 Referral (p24 to 25), Recommendation 12 and boxes | 11 referral criteria; immediate discussion list; urology for outflow obstruction; what to send; elderly | Core | `kn`, `newf`, `imm`, `now`, `obs`, `uro`, `r12`, `ref`, `eld`, `pc`, `gen` |
| 8 Complications (p26 to 28), Recommendation 13, Tables 6 and 7 | Anaemia and CKD-MBD screening and monitoring | Long-term | Left out |
| 9 Implementing (p29 to 30) | Facilitators, barriers, six audit indicators | No | No |
| References (p31 to 34) | 69 references | To name sources | `refs` |
| Appendices 1 and 2 (p35 to 36) | Search strategy; clinical questions | No | No |
| Appendix 3 (p37 to 44) | Oral drug doses by GFR band (mild 60 - 90, moderate 30 - 59, severe <30 ml/min) with notes and pregnancy categories | Yes: discharge prescriptions | Doses tab and `abx`, `dm`, `bp`. Kept: amoxicillin, Augmentin, cloxacillin, cephalexin, cefuroxime axetil, ciprofloxacin, azithromycin, clarithromycin, doxycycline, clindamycin, metronidazole, nitrofurantoin, trimethoprim, co-trimoxazole, acyclovir (two rows), oseltamivir; metformin, gliclazide, glibenclamide, dapagliflozin, canagliflozin, empagliflozin (insulin's note in `dm`); hydrochlorothiazide, indapamide, frusemide, spironolactone. Left out (named in each table's source line): statins, fibrates, ezetimibe, glimepiride, glipizide, acarbose, meglitinides, thiazolidinediones, GLP-1 receptor agonists, DPP-4 inhibitors, sultamicillin, ampicillin, penicillin V, cefaclor, ceftibuten, levofloxacin, moxifloxacin, norfloxacin, ofloxacin, erythromycin, minocycline, tetracycline, fluconazole, itraconazole, ketoconazole, chlorthalidone, chlorothiazide, bumetanide, amiloride |
| Appendix 4 (p45) | FDA pregnancy categories A to X | No | No (column left out) |
| Abbreviations, acknowledgement, disclosure, funding (p46 to 47) | | No | No |

Quick reference: its ten key messages were checked. Covered in the draft: 2 (eGFR by CKD-EPI), 3 (KDIGO staging), 5 (ACEi/ARB first-line), 7 (aspirin for secondary prevention only), 9 ("The optimal time of nephrology referral depends on the indications while the urgency is based on the trend of eGFR"), and 1 in part (screening). Left out for size: 4 (targets), 6 (dual RAS, which stays a nephrologist decision), 8 (pre-pregnancy care), 10 (complication screening).

---

## (b) Points inside the CPG: where its algorithms, text and tables disagree or leave a gap

None is resolved in the draft. Each is quoted with its page; those that change an ED decision are also in a node's `gap`.

**Classification**

1. **G5 at exactly 15.** Table 3 (p9) prints G4 "15 - 29" and G5 "≤15", so 15 falls in both. Table 5 (p10) and the quick reference print G5 "<15". (Stages tab source lines.)
2. **Albuminuria thresholds by sex, or not.** Table 2 (p5) gives urine ACR "<2.5 (male) <3.5 (female)" as normal and "≥2.5 to 30 (male) ≥3.5 to 30 (female)" as microalbuminuria; the CKD definition (p8) uses "ACR ≥3 mg/mmol" and Table 4 (p9) A2 "3 - 30", with no sex difference. Page 5 also says "The term microalbuminuria is discouraged", while Table 2, Algorithm 1 and Recommendation 2 use it.
3. **Algorithm 1's unit.** "POSITIVE on 2 occasions (Urine protein >0.3 mg/mol)" (p xi, text layer and image). No other page uses mg/mol, and the CPG does not explain it. (`pu` gap.)
4. **Confirming proteinuria, three versions.** "confirmed by a repeat test within three months" (p4); Algorithm 1 "Retest twice in 3 - 6 months ... If 2 of 3 tests are positive" (p xi); Algorithm 2 "Proteinuria on 2 out of 3 occasions" with no time (p xii).
5. **Rapid decline, two wordings.** Recommendation 12 (p24): ">5 ml/min/1.73 m2 in one year or >10 ml/min/1.73 m2 within five years"; the ultrasound indications (p8): ">5 ml/min/1.73 m2 within one year or 10 ml/min/1.73 m2 within five years".

**Haematuria**

6. **Where Algorithm 3 starts, and for whom.** 3.1.2 (p5): "A positive dipstick test for blood on two out of three occasions warrant a full microscopic examination." Algorithm 3 (p xiii) starts at "Presence of microscopic haematuria" with no dipstick step. Its title is "Evaluation of Haematuria in Chronic Kidney Disease in Adults": the CPG scopes it to CKD, while the draft offers it from the menu for any dipstick blood, with the title in the `hu` hint.
7. **Isolated haematuria: nephrologist or urologist.** Algorithm 3 sends haematuria without evidence of glomerular disease to a urologist, and p5 says "Non-glomerular haematuria warrants a urological evaluation"; Recommendation 12 (p24) refers "persistent isolated microscopic haematuria after excluding urogynaecological cause" to a nephrologist/physician. (`urh` gap.)
8. **Algorithm 3's loose ends.** The UTI box ("Treat infection; Confirm resolution ... after six weeks completion of therapy") has no exit for haematuria that persists; the re-test has no interval; "medications" as an other aetiology names none; and unlike Algorithms 1, 2 and 4 it prints no source. (`uti`, `stop` and `ret`.)

**Renal function and drug dosing**

9. **Which number for doses.** Recommendation 3 assesses renal function by CKD-EPI eGFR (p6); p7 gives Cockcroft-Gault for dosing traditionally, CKD-EPI for newer drugs, and product labelling as the rule; Appendix 3 uses Cockcroft-Gault unless a row carries # (MDRD or CKD-EPI). Of the rows kept, hydrochlorothiazide, indapamide, spironolactone, gliclazide and metronidazole carry #; metformin and the SGLT-2 inhibitors do not. So one patient may need a creatinine clearance for one drug and an eGFR for another, and p6 says "In the elderly (age >65 years), there is no accurate method to assess renal function."
10. **The Cockcroft-Gault unit.** p7 prints "CrCl (ml/min/1.73 m2) = (140 - age (yrs)) x body weight (kg)/SCr (umol/l) x Constant"; Appendix 3's bands are headed in "ml/min" and its only CrCl cell says "CrCl <10 ml/minute" (penicillin V, p43). The CPG does not say which body weight.
11. **The CKD-EPI units.** The printed equation takes "Scr is serum creatinine (in mg/dl)" (p7), while every creatinine elsewhere in the CPG is in µmol/L (p19 "SCr ≥132 μmol/L", p22 "<124 µmol/L") and no conversion is printed. It also prints "[x 1.159 if black]" without guidance for Malaysian patients.
12. **Two mu characters.** p19 prints "μmol/L" (Greek mu) and p22 "µmol/L" (micro sign); the draft keeps each as printed, which matters only for search.

**Appendix 3 (p37 to 44)**

13. **Bands with gaps and overlaps.** The columns are Mild (GFR 60 - 90 ml/min), Moderate (GFR 30 - 59 ml/min), Severe (GFR <30 ml/min); nothing covers >90. Inside them: metformin moderate "30 - 45: 50%" leaves 46 - 59 unstated (p39); cephalexin's "10 - 50: 500 mg q12 - 24h" spans moderate and severe and leaves 51 - 59 unstated (p41); empagliflozin moderate "<45: Avoid" leaves 45 - 59 unstated and canagliflozin "45 - 60: 100 mg OD" reaches into the mild band (p40); spironolactone prints "≥50: 12.5 - 25 mg OD/ BD" in the mild column and "30 - 49" in the moderate (p38); ciprofloxacin severe "15 - 30" and amoxicillin, Augmentin and oseltamivir severe "10 - 30" include 30, which the moderate column also holds (p41 to 43); levofloxacin and ofloxacin moderate "20 - 50" reach into the severe band (p42); sultamicillin severe gives only "<15: q24h" (p43); glimepiride "15 - 30" spans moderate and severe (p38).
14. **The thiazide note.** "Thiazide diuretics are unlikely to be of use once GFR <30 ml/min" is printed beside chlorthalidone and chlorothiazide, whose severe cells say only "<10: Avoid"; hydrochlorothiazide and indapamide carry # instead (p38).
15. **Indapamide's usual dose** is printed "12.5 - 5 mg OD" (a falling range), while its severe cell prints "1.25 - 2.5 mg" (p38). Quoted as printed in the Doses tab with a note.
16. **Fluconazole's usual dose** is printed "200 - 400 mg q8 - 12h", the same as the metronidazole row above it (p40). Not in the draft (row left out); to check against the sources the appendix names.
17. **"Oral" medications** in the title, but the GLP-1 receptor agonist rows are subcutaneous (p39). Trimethoprim prints "50 mg q12H" (capital H, p43), kept as printed. The disclaimer: "The dosing guide for GFR <10 ml/min does not provide information on dosing in haemodialysis, peritoneal dialysis or continuous RRT patients" (p44).

**ACE inhibitors and ARBs (p13 to 14)**

18. **"Or" in both lists.** Titrate "provided: SCr levels remain <30% from the baseline (or eGFR reduces <25%) or serum potassium <5.6 mmol/L"; reduce or discontinue "when SCr levels remain ≥30% from the baseline (or eGFR reduces ≥25%) or serum potassium ≥5.6 mmol/L". A patient with creatinine up 35% and potassium 5.0 meets a titrate criterion and a reduce criterion at once. The reduce rule covers "within two months upon commencement" only; Recommendation 6 says the renal profile "should be carefully monitored", p14 "within two weeks". (`acered` gap.)
19. **Hypertension is defined only in Algorithm 4** ("BP >140/90 mmHg", p xiv); Recommendation 6's "non-DKD with hypertension" does not define it. The BP target table (p12) carries two different footnotes both marked "*".

**Key recommendations, referral and wording**

20. **Key recommendations against the chapters.** The key recommendations (p iii) omit three of Recommendation 6's bullets (any class without proteinuria; renal profile monitoring; dual RAS blockade) and Recommendation 11's "Pregnancy may be considered in women with mild renal impairment (serum creatinine <124 µmol/L)...", and do not list Recommendations 2, 8 and 13.
21. **Referral wording.** Recommendation 12 says "nephrologist/physician"; the boxes on p25 say "nephrologist". "There is no clear evidence to recommend indications of referral to nephrologist" (p24). The immediate discussion list (p25) defines none of its terms (AKI, ESRD, accelerated or malignant hypertension, life-threatening hyperkalaemia). "Special issues in elderly" (p25) gives no age; p6 and Recommendation 1 use >65. (`now`, `ref`, `eld`.)
22. **Contrast risk has two thresholds** that need not agree: "SCr ≥132 μmol/L or an eGFR <60 ml/min/1.73 m2" (p19). No saline volume or rate is given. (`con` gap.)
23. **Spelling as printed:** "estimated Glomerular Flitration Rate" (Recommendation 13, p26), "diclofenac acid" (p19), "Persistence microscopic haematuria" (p5). Table 5 prints G4's term in lower case.
24. **Out of date.** Due for review in 2022 (PDF 3). The same Academy folder holds the newer *Conservative Kidney Management for Advanced CKD* CPG (2025), not reviewed here.

---

## (c) The app's related entries against this CPG

The ebook pathways and department entries stay as written (rules 5 and 6). The draft adds see-also links only (last lines of the entry). Each row below is an open question for Krishna; none is resolved.

| App entry | App says | CPG says (page) | Open question |
|---|---|---|---|
| `renal-colic` (ebook p53–54) | Pain management: "NSAIDs", for every patient | "Avoid NSAIDs including cyclooxygenase-2 inhibitors" in CKD (4.7, p19); NSAIDs are "among the most common risk factors for acute decline in GFR for patients with established CKD" (p3) | In a walk-in with known CKD and ureteric colic, does the Green Zone give an NSAID? |
| `renal-colic` department note (Ureteric colic pathway, MO Drive) | "Refer Urology urgently also for ... renal insufficiency or AKI, or hydronephrosis of any grade" | "AKI superimposed on CKD" → "Immediate discussion with nephrologist"; "Patients with CKD and renal outflow obstruction should be referred to urological services" (p25) | For CKD with colic and AKI, Urology first, nephrology first, or both? The ebook's urgent comorbidities include "transplanted kidney", outside the CPG |
| `pain` (ebook p45–50) | Ladder: paracetamol and/or NSAIDs, COX-2 at every step; diclofenac and mefenamic acid "caution ... renal dysfunction"; celecoxib cautions list nothing renal; tramadol "Seizure risk (high dose, CKD)"; morphine and fentanyl "renal or hepatic dysfunction: reduce initial dose to 1/2–1/3" | Avoid NSAIDs including COX-2 inhibitors, naming celecoxib and etoricoxib (p19); Appendix 3 gives no analgesic doses at all | "Caution" or "avoid" for NSAIDs in CKD? The CPG has no opioid or paracetamol guidance to set against the ebook's |
| `hyperglycaemia` (ebook p41–42) | Metformin contraindicated at "Renal disease, eGFR under 45 ml/min/1.73m²"; "Start PO metformin 500 mg OD for 1 week if no contraindication"; TDD 0.2–0.3 unit/kg/day in renal failure | Metformin 500 - 1,000 mg BD: mild "No adjustment", moderate "30 - 45: 50%", severe "Avoid" (p39), by Cockcroft-Gault (no #); insulin "Doses should be adjusted based on frequent monitoring..." (p40), no numbers | Metformin between 30 and 45: contraindicated (ebook) or 50% (CPG)? And by eGFR (ebook) or creatinine clearance (CPG)? |
| `hypoglycaemia` (ebook p43–44) | Admit for a long-acting hypoglycaemic agent or "Comorbidities, e.g. renal or hepatic" | Sulfonylureas "should be used cautiously due to increased risk of hypoglycaemia"; glibenclamide "Avoid" at moderate and severe; gliclazide "Contraindicated" at severe (p38) | No conflict; a see-also link only |
| `hypertensive-urgency` (ebook p38–40) | Table 1.0 starting doses incl. captopril, perindopril, frusemide 20 mg od (max 80 mg/day), hydrochlorothiazide 12.5 mg od; Table 1.1: ACEi and ARB contraindicated with "K over 5.5"; target organ damage includes "Acute renal failure" | No ACEi, ARB, CCB or beta-blocker doses; frusemide usual "40 - 240 mg/day in 2 - 3 doses", no adjustment; hydrochlorothiazide 12.5 - 50 mg OD, "<10: Avoid", #; reduce or stop ACEi/ARB at "serum potassium ≥5.6 mmol/L" after starting (p14); renal profile "within two weeks" of starting (p14); "accelerated or malignant hypertension" → immediate discussion with nephrologist (p25) | Potassium 5.5 (ebook, before starting) against 5.6 (CPG, after starting): which governs a CKD patient? Is the ebook's frusemide 20 mg a starting dose the CPG's usual range does not cover? |
| `emacc` (department SOP) | Hypertensive urgency: "renal profile if started on captopril"; heart failure: "repeat renal profile if frusemide or ACE inhibitor started" | Renal profile within two weeks of starting or increasing any ACEi/ARB (p14); nothing for frusemide | Consistent; the CPG adds ARBs and dose increases |
| `heart-failure` (ebook p36–37) | IV diuretics; discharge needs "Normal RP" | Spironolactone "<30: Avoid", "Serum potassium needs to be monitored"; amiloride the same note (p38) | No conflict; a see-also link only |
| `dvt` (ebook p33–35) and the anticoagulant calculator | Fondaparinux and Clexane by "creatinine clearance over 30 / under 30"; the calculator links out to MDCalc for Cockcroft-Gault | The Cockcroft-Gault formula is printed (p7), with SCr in umol/l and a constant of 1.23 (male) or 1.04 (female); its unit is printed ml/min/1.73 m2; "In the elderly (age >65 years), there is no accurate method" (p6); no fondaparinux or enoxaparin rows | May the app compute creatinine clearance from the CPG's own formula and drop the outside link? Exactly 30 stays open (open item 8) |
| `gout-cpg` (data5) | Colchicine by CrCl ">60 - 89, 30 - 60, <30"; allopurinol by eGFR; NSAIDs avoided in CKD | Appendix 3 bands "60 - 90, 30 - 59, <30" ml/min; no colchicine or allopurinol rows; NSAIDs avoided (p19); gout is a CKD risk factor (Recommendation 1) | No conflict on NSAIDs; the two CPGs band kidney function differently |
| `diabetic-foot-cpg` (data6) | Mild infection: Cephalexin 500 mg PO q6h or Amoxycillin/Clavulanate 625 mg PO q8h; alternatives Clindamycin 300 - 450 mg PO q8h or Trimethoprim/Sulphametoxazole 5 - 10 mg/kg PO q12h; no renal adjustment | Usual doses: cephalexin 250 - 500 mg q6h (moderate and severe "10 - 50: 500 mg q12 - 24h; <10: 250 - 500 mg q12 - 24h"); Augmentin 625 mg q8h ("10 - 30: q12h; <10: q24h"); clindamycin 150 - 300 mg q6h (no adjustment); co-trimoxazole "960 mg q12h or 15 - 20 mg TMP/kg/day in divided doses q6h" ("15 - 30: 50%; <15: 50% q12 - 24h") | For a diabetic foot infection in CKD: the indication dose from that CPG, adjusted by this one? |
| `scrotal-pain` (ebook p59–63) | Epididymitis: ciprofloxacin 500 mg BD for 2 weeks; azithromycin, doxycycline | Ciprofloxacin moderate "50 - 75%", severe "15 - 30: 50 - 75%; <15: 50%"; azithromycin and doxycycline no adjustment (p42 to 44) | The ebook gives no renal adjustment; no conflict |
| `gz-rules--ivab` (IV antibiotic memo, 30 Jun 2026) | IV Augmentin, cefuroxime, ceftriaxone or Unasyn in the CCA | Appendix 3 is for oral medicines only | No IV renal doses in this CPG: not in the source |
| `trauma-walkins--ct` (HIT protocol, 23 Dec 2021) | "A renal profile is not mandatory" before a whole-body CT | "Avoid radio-contrast agents in high risk patients if possible", high risk being "SCr ≥132 μmol/L or an eGFR <60 ml/min/1.73 m2, DM, volume depletion, CCF, nephrotic syndrome, decompensated liver cirrhosis or concurrent NSAIDs/diuretic use"; avoid repeat studies within 48 hours (p19) | Different setting (major trauma); for an elective contrast CT ordered from the Green Zone, is a renal profile needed first, and who decides? |
| `outpatient-referral` (FAST clinic criteria, draft) | No row for a raised creatinine or CKD; "No organ dysfunction: ... AKI" to be safe for a clinic | Refer to "a nephrologist/physician" for the Recommendation 12 criteria; no clinic, no time frame (p24) | Which HKL clinic takes a Recommendation 12 referral from the ED: nephrology, the Physician's Clinic, MAU FAST clinic or the KK? |
| `acs` (ebook) and `emacc` | Low-risk chest pain after Obsess: "discharge on aspirin 150 mg OD if no contraindication" | "Aspirin should be used ... for secondary prevention ... Aspirin should not be used as primary prevention of CVD in CKD"; "Combination of clopidogrel with aspirin should be avoided in patients with CKD unless compelling indications are present" (Recommendation 10, p20) | For a CKD patient sent home after the Obsess protocol, is the aspirin secondary prevention? |
| `blood-tests` (department) | Blood gas for "ESRF with APO, ECG changes or missed dialysis" | Dialysis patients are outside the CPG (p vii) | Not in the source (`out`) |

---

## (d) Calculator candidates

The calculators read their numbers from the pathway data, and `CALC_FACTS` must find each phrase in `JSON.stringify(P['ckd-cpg'])`. The 39 phrases are in the calculator facts, all checked present with the app's own test (`calcFactsMissing` in engine.js: `JSON.stringify(P[id]).includes(s)`): 12 plain phrases and 27 Appendix 3 rows written as the exact JSON of the row (for example `"Metformin","500 - 1,000 mg BD","No adjustment","30 - 45: 50%","Avoid",""`), so each fact ties a drug to its cells. The draft links to no new calculator route; a new route such as `#calc-crcl` must be added to `okHref` in `check-data.js` (its regex today allows only dengue, kids, weight, dvitals, dfluid, drdt, duo, apred, apef and gcs, so `#calc-anticoag` cannot be linked either; the draft links `#dvt--dvt` and `#calc` instead).

### 1. Creatinine clearance by the CPG's Cockcroft-Gault (build)

| Input | Values |
|---|---|
| Age | years |
| Body weight | kg (the CPG does not say actual or ideal) |
| Serum creatinine | µmol/L (the formula prints "SCr (umol/l)") |
| Sex | male / female |

Logic, as printed (p7): "CrCl (ml/min/1.73 m²) = (140 - age (yrs)) x body weight (kg)/SCr (umol/l) x Constant where the constant is 1.23 in male or 1.04 in female".

Output: the creatinine clearance; the Appendix 3 band it falls in ("Mild (GFR 60 - 90 ml/min)", "Moderate (GFR 30 - 59 ml/min)", "Severe (GFR <30 ml/min)"); and, for the anticoagulant calculator, over or under 30. Show the unit as printed with a note that Appendix 3's bands are in ml/min (point 10).

Notes and declines: age >65, show "In the elderly (age >65 years), there is no accurate method to assess renal function" (p6) as a warning; exactly 30, show the ebook's open item 8 (anticoagulant) and, for Appendix 3, both the moderate cell and any severe cell that includes 30; above 90, no band ("the table's bands stop at 90"); on dialysis, decline with "The dosing guide for GFR <10 ml/min does not provide information on dosing in haemodialysis, peritoneal dialysis or continuous RRT patients" (p44). Saves nothing. It would let the anticoagulant calculator drop its MDCalc link (Krishna's call).

### 2. Doses by kidney function, Appendix 3 lookup (build, with 1)

Inputs: a drug from the Doses tab rows; then the creatinine clearance from calculator 1, or the laboratory eGFR for a # row (hydrochlorothiazide, indapamide, spironolactone, gliclazide, metronidazole), or a band picked by hand.

Output: the printed usual dose, the printed cell for the band and the row's note, word for word (for example metformin at 40: "30 - 45: 50%"; nitrofurantoin at 40: "Avoid"). It must not turn "50%" or "q12 - 24h" into milligrams: the CPG does not say 50% of what.

Where it must decline or show both: metformin 46 - 59; cephalexin 51 - 59; empagliflozin 45 - 59; canagliflozin at 60 (mild cell and "45 - 60"); spironolactone 50 - 59 ("≥50" in the mild column, "30 - 49" in the moderate); exactly 30 for amoxicillin, Augmentin, ciprofloxacin, trimethoprim, co-trimoxazole and oseltamivir (moderate column and a severe sub-band "10 - 30" or "15 - 30"); above 90; the # rows when only a creatinine clearance is known; dialysis. Always show "The list of medication dosage adjustment should be used as a general guides only and is not intended to be comprehensive" (p44).

### 3. eGFR by the 2009 CKD-EPI equation (not now)

The printed equation (p7) takes creatinine in mg/dl and the CPG prints no conversion from µmol/L, so it cannot be built from this source alone (rule 8). It also needs the "[x 1.159 if black]" decision. Build only if Krishna supplies the conversion source, and only if HKL's laboratory does not already report eGFR (to confirm). The equation phrase is in the Tests tab if it is built later.

### 4. Not worth building

- CKD stage and risk from eGFR and ACR (Tables 3 to 5): a lookup already in the Stages tab; ACR is rarely known in the ED; 15 needs a decision (point 1).
- An ACEi/ARB "reduce or titrate" check: two thresholds, and the "or" in both lists (point 18) would make it contradict itself.
- uPCR and urine protein: the CPG gives only "an estimation for practical purpose" and "1 g/day=uPCR 113 mg/mmol" (p24).

---

## (e) Every number in the draft, and how it was checked

"Text" = found in PyMuPDF's text layer of that page (scripted search, whitespace normalised, then read in context). "Image" = layout or symbols read from a rendered image at the dpi shown. "Vector" = read from the page's drawing data.

| # | Number as in the draft | Where in the draft | Page | Check |
|---|---|---|---|---|
| 1 | 2018 (issue); 2022 (review) | title, src, lead, menu, refs | PDF 3 | Text |
| 2 | ISBN 978-967-2173-39-7 | refs | PDF 2 | Text |
| 3 | 2nd edition; 2011 first edition | title, refs | p v, p xi to xiv | Text |
| 4 | eGFR <60 ml/min/1.73 m²; >3 months | newf, Stages tab | p8 | Text; the ² from the image (150 dpi) |
| 5 | AER ≥30 mg/24 hours; ACR ≥3 mg/mmol | Stages tab | p8 | Text |
| 6 | Urine protein ≥1 g/day; uPCR ≥100 mg/mmol | r12 | p24 (and p iv) | Text |
| 7 | Urine protein ≥0.5 g/day; uPCR ≥50 mg/mmol | r12, neph | p24 | Text |
| 8 | 1 g/day=uPCR 113 mg/mmol | r12 hint | p24 | Text |
| 9 | >5 ml/min/1.73 m² in one year; >10 within five years | r12 | p24 | Text |
| 10 | eGFR <30 ml/min/1.73 m² (G4 - G5) | r12 | p24 | Text |
| 11 | Three antihypertensive agents | r12 | p24 | Text |
| 12 | eGFR <60 (elderly); proteinuria ≤1 g/day | eld, pc | p25 | Text and image (150 dpi) |
| 13 | Age >65 years | eld, Tests tab | p6 | Text |
| 14 | SCr ≥132 μmol/L; eGFR <60 | con | p19 | Text (Greek mu confirmed by code point) |
| 15 | Within 48 hours | con | p19 | Text |
| 16 | Gadolinium: eGFR <30 | con | p19 | Text |
| 17 | Renal profile within two weeks | bp, acecont | p14 | Text |
| 18 | SCr <30% / ≥30%; eGFR <25% / ≥25%; potassium <5.6 / ≥5.6 mmol/L; within two months | acei, acered, acecont | p14 | Text |
| 19 | Urinary protein ≥1.0 g/day; ≥0.5 g/day (Recommendation 6) | bp | p13 | Text |
| 20 | Repeat test within three months | pu | p4 | Text |
| 21 | Proteinuria on 2 out of 3 occasions | pu | p xii | Text and image (170 dpi) |
| 22 | Urine protein >0.3 mg/mol | pu gap | p xi | Text and image (170 dpi) |
| 23 | Follow-up urinalysis after six weeks | uti | p xiii | Text and image (170 dpi, rotated) |
| 24 | Blood on two out of three occasions | hu | p5 | Text |
| 25 | Table 3: ≥90; 60 - 89; 45 - 59; 30 - 44; 15 - 29; ≤15 | Stages tab | p9 | Text and image (150 dpi) |
| 26 | Table 4: <30, <3, <30; 30 - 300, 3 - 30, 30 - 300; >300, >30, >300 | Stages tab | p9 | Text and image (150 dpi) |
| 27 | Table 5: G5 <15; the colour of each of the 18 cells | Stages tab | p10 | Image (150 dpi) and vector fill values |
| 28 | SCr rises only after a 50% decline of eGFR | Tests tab | p6 | Text |
| 29 | CKD-EPI: 141; κ 0.7 and 0.9; α -0.329 and -0.411; -1.209; 0.993; 1.018; 1.159; mg/dl; 2009 | Tests tab | p7 | Text; superscripts (α, -1.209, Age) from the image (220 dpi) |
| 30 | Cockcroft-Gault: 140; 1.23 male; 1.04 female; umol/l; ml/min/1.73 m² | Tests tab, facts | p7 | Text and image (220 dpi) |
| 31 | Bands: 60 - 90, 30 - 59, <30 ml/min | rxq hint, Doses tab | p37 to 44 | Text and image (130 to 230 dpi, rotated) |
| 32 | GFR <10 ml/min (dialysis disclaimer) | out, facts | p44 | Text and image (130 dpi) |
| 33 | Antibiotic and antiviral rows (17 rows: every dose, band and sub-band) | Doses tab, abx | p40 to 43 | Each cell string found in the text layer; which column and row it belongs to read from images at 230 dpi, rotated, in halves |
| 34 | Nitrofurantoin 50 - 100 mg q6h; trimethoprim <30 ml/min note | abx | p42, p43 | As row 33 |
| 35 | Diabetes rows: metformin 500 - 1,000 mg BD, 30 - 45: 50%; gliclazide 80 - 160 mg BD; glibenclamide 5 - 10 mg OD; dapagliflozin 5 - 10 mg OD; canagliflozin 100 - 300 mg OD, 45 - 60: 100 mg OD, <45; empagliflozin 10 - 25 mg OD, <45 | Doses tab, dm | p38 to 40 | As row 33 |
| 36 | Diuretic rows: hydrochlorothiazide 12.5 - 50 mg OD, <10; indapamide 12.5 - 5 mg OD, 1.25 - 2.5 mg, <10; frusemide 40 - 240 mg/day in 2 - 3 doses; spironolactone 25 - 100 mg/day in 1 - 2 doses, ≥50: 12.5 - 25 mg, 30 - 49: 12.5 mg, <30 | Doses tab | p38 | As row 33 |
| 37 | Thiazide note: GFR <30 ml/min | bp, Diuretics source | p38 | Text and image (230 dpi), including which rows the merged note cell spans |
| 38 | Metformin 46 - 59 not stated | dm gap, facts | p39 | Derived from the printed cell "30 - 45: 50%" against the column "30 - 59" (image 230 dpi) |
| 39 | Cephalexin 10 - 50 against 30 - 59 | abx gap | p41 | Image (230 dpi): the cell spans the moderate and severe columns |
| 40 | KDIGO 2012 | Table 5 source | p10 | Text |
| 41 | Recommendation and section numbers (1, 2, 3, 4, 6, 10, 12; 3.1.1, 3.2, 3.4, 4.1.2a, 4.7) | throughout | p2 to 26 | Text |

Also checked: every quoted fragment of 25 characters or more (295 fragments). Those not found in the text layer were my own connective words (questions, titles, gaps), list items joined with "; " or with a label (for example "Referral criterion:"), quotes broken by a superscript reference number in the source ("ensure patient has:9"), table structure read from images, or the asterisk dropped from "kidney damage*" in `newf`. Four paraphrases found this way were replaced with the printed words (the ultrasound hint, the `kn` hint, the `acered` item and the elderly hint).

---

## What could not be verified

- **Corrections.** The CPG says errors are corrected in its web version, "the definitive version at all times" (PDF 3). The copy read is the Academy file (PDF of 22 Oct 2018); it was not compared with the MaHTAS website version.
- **Appendix 3's sources.** Where a cell looks odd (indapamide's "12.5 - 5 mg OD", fluconazole's q8 - 12h), the four sources it names (Drug Prescribing in Renal Failure 2007, Lexicomp 2013, Matzke 2011, package inserts) were not available; the draft quotes as printed and says so.
- **Whether HKL's laboratory reports eGFR, and by which equation.** Not in any document read; it decides whether a CKD-EPI calculator is needed at all.
- **The HKL route for a CKD referral from the ED** (nephrology clinic, Physician's Clinic, MAU FAST clinic or KK) and who takes "AKI superimposed on CKD" from the Green Zone: not in the CPG or the department entries.
- **Table 5's colours** are reproduced from vector fill values, not from a colour key with cell text; "Red" and "Deep red" are both "very high risk" in the legend, so the shade does not change the meaning.
- **The quick reference** was read from its text layer only (its algorithms were not rendered); it was used to check the key messages, not as a source for the draft.

---
