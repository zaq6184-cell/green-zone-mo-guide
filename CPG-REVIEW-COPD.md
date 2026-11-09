# Review: CPG Management of Chronic Obstructive Pulmonary Disease, 2nd edition (Ministry of Health Malaysia, Academy of Medicine of Malaysia and Malaysian Thoracic Society, November 2009)

**Built into the app on 9 Nov 2026** (third CPG round): the entry *COPD: CPG 2009* (`#copd-cpg`) beside the Asthma Zone flow and the asthma entries. No calculator was built. Its copyright gives no permission to reproduce it, so at Krishna's decision of 9 Nov 2026 the entry and this review are in the guide's own words, with page numbers, and quote nothing at length.

For the Green Zone MO Guide, entry `copd-cpg`. Reviewed 9 Nov 2026. Written in my own words throughout, with printed page numbers: this CPG states no reuse terms, so nothing in the draft or here is quoted beyond short labels and the exact numbers.

- **Source:** *Clinical Practice Guidelines: Management of Chronic Obstructive Pulmonary Disease*, 2nd edition. Ministry of Health Malaysia, Academy of Medicine of Malaysia and Malaysian Thoracic Society (cover logos); CPG Secretariat, Health Technology Assessment Section, Medical Development Division, Ministry of Health Malaysia, Putrajaya. November 2009; MOH/P/PAK/197.09(GU) (cover). No ISBN is printed. File read: `...\AMM Clinical Practice Guidelines\Respiratory Medicine\2009 - Management of Chronic Obstructive Pulmonary Disease (2nd Edition) [323].pdf`, 67 PDF pages (PDF dated 24 May 2010), and its Quick Reference [324], 8 pages. Neither was modified.
- **Status:** it replaced the 1998 CPG, was issued in November 2009 and was due for review in November 2013 (the unnumbered page after the cover, PDF 2). The Academy list read on 9 Nov 2026 (`amm-cpgs.json`) has only this edition. The working group had 19 members under Prof Liam Chong-Kin, mostly chest physicians, with one emergency physician and primary care doctors (p vi). Development was funded by unconditional educational grants from AstraZeneca, Boehringer Ingelheim and GlaxoSmithKline (p48).
- **Copyright:** none printed. There is no copyright line and no reproduction terms in the CPG or the quick reference. By Krishna's decision of 9 Nov 2026 the entry is written in the guide's own words, with every dose, threshold and drug name exact and its printed page, and `src` ends in "summarised".
- **Page offset:** printed arabic page = PDF page − 9 (p1 = PDF 10, p36 = PDF 45, p44 = PDF 53, p58 = PDF 67). Roman front matter = PDF page − 2 (p i = PDF 3, p vii = PDF 9). PDF 1 is the cover and PDF 2 the statement of intent with the review date (the text layer labels them "a" and "b"). Every page below and in the draft is the printed page.
- **Method:** PyMuPDF text layer for the body text. Page images, rotated upright where the page is landscape, at 130 to 800 dpi, for the cover and PDF 2, Tables 1-1, 1-3 and 8-2, and Figures 8-1, 8-2 and 8-3. **Glyph trap:** the figures and some tables draw ± as an underlined + and ≥ or ≤ as an underlined > or <, and the text layer drops the underline. So the text layer reads "SABA + SAAC" where Figures 8-1 and 8-2 print SABA ± SAAC; "β-lactam + β-lactamase inhibitor" where Table 8-2 prints ±; ">" for every ≥ in Figure 8-3; and "FEV1 > 80%" and "50% < FEV1" where Tables 1-1 and 1-3 print ≥ and ≤. All of these were read from images. Figure 8-2's hospital box does print a plain > (checked at 800 dpi), unlike 8.9.1's ≥ (point 9).
- **Scope (p iii):** all adults with COPD; the users named include emergency physicians and medical officers. Chapter 8 (p33–44) is the flare-up chapter; the rest is diagnosis, stable treatment, prevention and primary care.
- **No severity grades for a flare-up, no leaflet.** The CPG stages stable COPD (Tables 1-1 and 1-3) but gives no grades for a flare-up: section 8.5 (p33) leaves severity to the history, examination and tests. There is no patient leaflet; the draft's `advice` restates the education points of 6.2 (p20) and the home treatment, and says so in a comment.

---

## (a) The CPG chapter by chapter

| Part (pages) | What it covers | What matters to the Green Zone | In the draft? |
|---|---|---|---|
| Preface, development, objectives, quality indicator (p i–iii) | Built on the 1998 edition; GOLD (2008) and Canadian Thoracic Society (2007) consulted (p ii); target population all adults; indicator: flare-ups a year, ≤ 1 for moderate and ≤ 1.5 for severe or very severe COPD (p iii) | Context only | Refs and menu hint |
| Working group, external reviewers (p vi–vii) | Names and posts | No | No |
| 1 Definition, staging, pathophysiology (p1–5) | Table 1-1 stages by spirometry (p2); Table 1-2 MMRC breathlessness scale (p3); Table 1-3 stages by spirometry and symptoms, with "follow the symptoms" when they disagree (p4); respiratory failure defined in the table notes (p2, p4) | Table 8-1 admits "underlying severe COPD", which needs a stage | Severity tab: Table 1-3 restated, with the MMRC grades it names |
| 2 Epidemiology (p6–7) | Burden, prevalence | No | No |
| 3 Risk factors (p8–10) | Smoking, dusts, biomass, infections | No | No |
| 4 Assessment and monitoring (p11–15) | Spirometry diagnosis; pack-years formula (p11); reversibility, 200 mL and 12% (p12); tests; alpha-1 antitrypsin screening (p13); differentials, Table 4-1 (p13); asthma against COPD, Table 4-2 (p14); follow-up visit items (p14–15) | Telling asthma from COPD in a breathless patient | `which` node (Table 4-2 restated, pack-years) |
| 5 Reducing risk factors (p16–19) | Smoking prevention and cessation; 5A steps (p17); brief advice and its quit rates (p18); drug names without doses | Brief advice at discharge | Follow-up tab (Smoking); `advice` |
| 6 Stable COPD: education and drugs (p20–27) | Education topics (p20); influenza and pneumococcal vaccines (p21); inhaler classes with example doses (p22–25); Figures 6-1 and 6-2, stable algorithms (p26–27), with the note that every patient should have a SABA or SABA/SAAC to use as needed | The as-needed reliever on the discharge prescription | `home` (Figure 6-1 note); `advice`. Long-acting regimens left out: clinic care |
| 7 Non-drug treatment (p28–32) | Rehabilitation, long-term oxygen criteria (p29), nutrition, lung volume reduction, transplant, surgery | No: long-term oxygen is not assessed during a flare-up (p29) | No |
| 8.1–8.4 Flare-up: definition, burden, causes (p33) | Definition (48 hours or more), causes and triggers | Yes | `ex` |
| 8.5 Diagnosis and assessment (p33–35) | History and examination; no spirometry or peak flow in the acute phase; oximetry; ABG; sputum; CXR; ECG; bloods | Yes | `hx`, Oxygen tab, Severity tab (respiratory failure) |
| 8.6 Differentials (p35) | Mimics and aggravators | Yes, when treatment fails | `resp` hint |
| 8.7–8.8 Aims, Table 8-1, home management (p35–36); Figure 8-1 (p37) | Admission indications; step-up doses; steroid for home care | Table 8-1 yes. Figure 8-1 is the primary care algorithm | `t81`; 8.8.1 doses in `home` |
| 8.9 Hospital management (p36–42); Figure 8-2 (p38); Figure 8-3 (p39); Table 8-2 (p41) | Controlled oxygen, bronchodilators, aminophylline, steroids, antibiotics, other measures | Core: the ED algorithm is Figure 8-2 | `tx`, `resp`, `admit`, `home`, `abx` to `abxc`, `o2` to `o2d` |
| 8.10 Severe, not life-threatening, in the ED (p42); drug recommendations (p42) | Treatment list for the ED | Yes | `tx`, `admit`, `abxno` gap |
| 8.11–8.12 NIV and invasive ventilation (p43–44); Tables 8-3 to 8-5 | Indications, contraindications | The escalation thresholds | `danger` (Table 8-3), `crit` (Table 8-5); Table 8-4 named in a gap only |
| 8.13 Hospital discharge, 8.14 follow-up (p44) | Discharge criteria for inpatients; review within 8 weeks | Reference for the ward; follow-up | Follow-up tab; `home` gap |
| 9 Primary care (p45–46) | Early diagnosis, spirometry, joint care; when to refer to a specialist (9.6) | Little | Not in the draft (cut for size; written for primary care) |
| Glossary, acknowledgements, disclosure, funding (p47–48); references (p49–57); evidence scale (p58) | | No | Refs name GOLD, the Canadian Thoracic Society and the National Antibiotic Guideline 2008 only |
| Quick reference (8 pages) | Its Table 1 is Table 1-3; Figures 1 to 4 are Figures 6-1, 6-2, 8-1 and 8-2; two evidence summary tables | Same algorithms; no Figure 8-3, no Table 8-2, no doses beyond prednisolone | Not used separately |

---

## (b) Points inside the CPG: where it disagrees with itself or leaves a gap

None is resolved in the draft. Those that change an ED decision are also in the node's `gap` or `hint`.

**Severity and the definition**

1. **No grades for a flare-up.** The CPG uses "severe exacerbation" for nebulised Combivent or Duovent and for IV aminophylline (p40), for the Pseudomonas risk (p40) and for NIV care (p44), and "life-threatening" for HDU or ICU (p36), but defines neither. Only stable COPD is staged (p2, p4).
2. **48 hours.** The definition needs a worsening that lasts 48 hours or more (p33); the CPG does not say how to handle a patient who comes earlier.

**Danger signs, admission and discharge**

3. **Two lists of warning signs.** Figure 8-2 lists five danger signs to look for (p38) and gives them no branch; 8.5.1 lists signs of a poorer prognosis (p34), overlapping but not the same.
4. **The admission box has no arrows.** In Figure 8-2 the ten indications for admission sit in a box joined to nothing (p38); the good-response path passes "no indication for hospital admission" before discharge. The CPG does not say what to do with a patient who has an indication but responded well. The draft asks Table 8-1 after a good response and sends any indication to admission, and says so in the `admit` gap.
5. **Undefined terms in Table 8-1 (p36):** older age (no age; Table 8-2 uses > 65 years old, p41), significant co-morbidities, marked increase in symptoms, reduced alertness.
6. **Titles:** Table 8-1 (p36) and Figure 8-1 (p37) call the list indications for hospital assessment or admission; Figure 8-2 (p38) calls it indications for admission.
7. **No ED discharge criteria.** Figure 8-2 discharges after a good response with no indication (p38). The only criteria list, 8.13 (p44), is written for inpatients and needs 12-24 hours of clinical and blood gas stability.
8. **Follow-up after an ED discharge has no time:** Figure 8-2 says discharge with follow-up (p38); 8.14 sets review within 8 weeks after hospital discharge (p44). No clinic is named anywhere.
9. **New presentation:** Figure 8-2 sends a new presentation to a specialist (p38); Figure 8-1 arranges investigations for it and refers only if necessary (p37).

**Oxygen and blood gases**

10. **Four oxygen aims.** SpO2 ≥ 90% (8.5.3, p34; 8.9.1, p36); SpO2 90-93% (Figures 8-1 and 8-2, p37–38); SpO2 ≥ 95% when PaCO2 is normal or low (Figure 8-3, p39); and a warning that morbidity and mortality rise in hypercapnic respiratory failure above 93-95% (p34). Figure 8-2's hospital box prints PaO2 > 8 kPa or SpO2 > 90% (p38) where 8.9.1 prints ≥ (p36).
11. **Figure 8-3 does not define a high PaCO2** (p39).
12. **Repeat ABG:** 30-60 minutes after starting oxygen (8.9.1, p36) or after 30 minutes (8.10, p42).
13. **pH cut-offs:** acidosis that calls for assisted ventilation, pH < 7.36 (p34); NIV or mechanical ventilation if pH < 7.35 (Figure 8-3, p39); NIV for pH 7.25 - 7.35 (Table 8-3, p43); invasive ventilation for pH < 7.25 (Table 8-5, p44).
14. **Hypercapnia thresholds:** PaCO2 > 6.7 kPa (50 mmHg) in the respiratory failure definition (p2, p4, p34); pCO2 6 - 8 kPa (45 – 60 mmHg) with acidosis (p34); PaCO2 > 6.0 kPa (45 mmHg) for NIV (p43); PaCO2 > 8.0 kPa (60 mmHg) for invasive ventilation (p44). Table 8-3 joins acidosis and hypercapnia with "and/or", so as printed a raised PaCO2 with a normal pH counts as an NIV indication, while Figure 8-3 ties NIV to pH < 7.35.
15. **Table 8-3 (p43) does not say whether one indication is enough**; the draft asks it as "any" and says so in the hint.

**Drugs**

16. **Bronchodilators:** the algorithms print SABA ± SAAC (p37–38); 8.10 says combine them in the ED (p42); 8.8.1 lets the anticholinergic be added if not in use (p36). Not a contradiction, but the ED step reads ± in one place and "combine" in another.
17. **Steroids:** for home care only with a significant rise in breathlessness or a baseline FEV1 < 50% predicted (8.8.2, p36; Figure 8-1, p37); in hospital for every patient without a significant contraindication (8.9.3, p40; Figure 8-2, p38). IV hydrocortisone is named for a patient who cannot swallow or is vomiting (p37–38), with no dose anywhere in the CPG.
18. **Aminophylline (p40):** the loading dose is printed as 250-500 mg and as 5 mg/kg, which agree only from 50 to 100 kg. Nothing changes for a patient already on theophylline except no loading dose; interactions are flagged without a list.
19. **Doses not given:** heparin (p38, p42), any anti-Pseudomonas antibiotic (p41), any diuretic (p42), IV hydrocortisone (p37–38).
20. **Who gets antibiotics, four ways:** at least 2 of 3 cardinal symptoms (Figures 8-1 and 8-2, p37–38; 8.9.4, p40); purulent sputum alone (8.5.8, p35); a change in sputum colour, more sputum and/or more breathlessness (Recommendation 2, p42); signs of bacterial infection (8.10, p42).
21. **Table 8-2 (p41):** risk factors count > 4 exacerbations/year, where Figure 6-1 calls ≥ 1 a year frequent (p26); antibiotics in the past 3 months, where the Pseudomonas risk counts 4 courses in the last year and admission in the last 3 months (p40); amoxycillin/clavulanate 625 mg twice daily for simple COPD but 2 g twice daily for complicated COPD, unexplained; "amoxicillin" and "amoxycillin" in one cell; *Haemophilus influenza* in one row and *influenzae* in the other; a "**" note inside the cell with no footnote. The table is adapted from the National Antibiotic Guideline 2008, and the text defers to local policy (p40).
22. **Parenteral or oral:** the complicated row says therapy may need to be parenteral and suggests referral to hospital (p41), written for primary care; it does not say which choices are for IV use in the ED.

**Outside the ED (not in the draft)**

23. Alpha-1 antitrypsin deficiency: screen under 45 years (p13), refer under 40 years (p46).
24. PPV23 is recommended for patients younger than 65 with FEV1 < 40% predicted "irrespective of age" (p21), which contradicts itself.
25. The recommendations box on diagnosis and severity appears twice with different wording (p5, p15).
26. Quick reference: its stable-COPD objectives are numbered 1 to 5 and then 7 to 9 (quick reference p3), and differ from the seven of 6.1 (p20).

---

## (c) The app's related entries against this CPG

The ebook has no COPD pathway. Entries read: `asthma-zone` (data2.js; it replaces at build the older Asthma Zone entry still present in data.js), `mau-admission` and `outpatient-referral` (data2.js), `referral-rules` node `ipr` (data.js, as extended in data3.js), `emacc` and `em-watch`, the ebook's `asthma` and `pneumonia` (data.js), and `asthma-cpg` (data5.js). Department and ebook entries keep their wording; nothing below is resolved.

**What the app says about COPD now.** The live Asthma Zone flow (memo, 13 Nov 2025) names asthma only, but its discharge prescription cites the department's BA/COPD protocol of 27 Mar 2020 and its table lists risk factors for asthma or COPD death. The older Asthma Zone entry in data.js (replaced at build, so no longer shown) asked "known asthma or COPD?" at secondary triage, uptriaged a patient who needed urgent FBC or ABG, and its poster table held "IV aminophylline (for COAD)" for life-threatening cases and a rule to swap a Venturi mask for nasal cannula 4 L/min during MDI. MAU's list takes a flare-up of asthma or COPD; IPR takes COPD.

| Item | The app says (entry) | This CPG says (page) |
|---|---|---|
| Where a flare-up is managed | MTS level 4 or 5 asthma goes to the Asthma Treatment Room; levels 2 and 3 to R1 (`asthma-zone`) | Hospital management by Figure 8-2 for any patient in the ED (p38); life-threatening: HDU or ICU (p36). No MTS level or zone |
| Tests | Vital signs and PEFR before and after treatment (`asthma-zone` room); older flow: urgent FBC or ABG means uptriage | ABG recommended for flare-ups seen in the ED, and for an unwell patient with a good SpO2 (p34); FBC, BUSECr, LFT, glucose, CXR, ECG, sputum C&S (p38). Peak flow and spirometry not recommended routinely during the flare-up (p34) |
| Oxygen | None stated in the live flow; older table: nasal cannula during MDI, Venturi swapped for nasal cannula 4 L/min; MAU accepts up to nasal prongs 3 L/min; IPR up to Venturi 40% (`mau-admission`, `referral-rules--ipr`) | Controlled oxygen if SpO2 < 90%, aiming 90-93%; 24-28% Venturi or 1-2 litres per minute by nasal prongs (p36–38); Figure 8-3 titration (p39) |
| Oxygen target | Asthma CPG 2024: 93 to 95% (`asthma-cpg`) | 90-93% in the algorithms; ≥ 95% only with a normal or low PaCO2 (p37–39); harm above 93-95% in hypercapnic failure (p34) |
| Nebuliser gas | Asthma CPG 2024, severe: SABA via an oxygen-driven nebuliser (`asthma-cpg`); department: MDI with spacer | Spacers or air-driven nebulisers (p42); MDI 10 to 20 puffs via spacer works as well as a nebuliser (p40) |
| Bronchodilator doses | Salbutamol 4–6, then 6–8, then 8 puffs, then uptriage; ipratropium only as an equivalence, 0.5 mg = 4 puffs (`asthma-zone` table) | SABA ± SAAC (p38); MDI 10 to 20 puffs via spacer (p40); severe: Combivent 2.5 mL or Duovent 4 mL 6 hourly (p40) |
| Ready to go home | Improved, no rhonchi, SpO2 95% or more on room air (`asthma-zone`); ebook asthma: SpO2 over 95% and PEF over 80% | Good response and no Table 8-1 indication (p38). No SpO2 or PEF threshold for discharge; inpatient criteria in 8.13 (p44) |
| Steroid at discharge | Prednisolone 30 mg once daily for 5 days (`asthma-zone`, BA/COPD protocol 2020; ebook asthma the same) | Prednisolone 30-40 mg daily for 7-14 days (p36, p38, p40); stop after the flare-up (p36, p40) |
| Reliever at discharge | Salbutamol MDI 4 puffs every 4–6 hours for 1 day, then 2 puffs as needed (`asthma-zone`) | Step up SABA ± SAAC: salbutamol 200-400 µg or terbutaline 500 µg every 3-4 hours; ipratropium bromide 40 µg 6 hourly may be added (p36); every patient keeps a SABA or SABA/SAAC as needed (p26) |
| Antibiotics | None in the Asthma Zone flow | 2 of 3 cardinal symptoms, and anyone on NIV or invasive ventilation (p40); choice by Table 8-2 (p41) and local policy (p40) |
| IV hydrocortisone | Ebook asthma 200 mg; asthma CPG 2024 100 mg stat | Named for a patient who cannot swallow or vomits, no dose (p37–38) |
| Magnesium | Ebook asthma MgSO4 2.47 g; asthma CPG 2024 2 g | Not mentioned |
| Aminophylline | Older Asthma Zone table: IV aminophylline (for COAD) when life-threatening, no dose; asthma CPG 2024: not routinely in asthma (its p41) | Severe flare-up with inadequate response to SABA and SAAC: 250-500 mg (5 mg/kg) over 20 minutes, then 500 µg/kg/hour (p40) |
| Risk lists | Seven risk factors for asthma or COPD death, recorded on the clerking sheet (`asthma-zone`) | No list of risk factors for death. Table 8-1 admission indications (p36); signs of a poorer prognosis (p34); risk factors for complicated COPD (p41) |
| Admission | MAU: a flare-up needing a bronchodilator 2-hourly or less often, oxygen up to nasal prongs 3 L/min, RR 9–20 (`mau-admission`); IPR: Venturi 40% at most (`referral-rules--ipr`) | Admit to hospital, no ward named (p38); inpatients go home when a bronchodilator is needed no more often than every 4 hours (p44) |
| Follow-up | Referral letter, no clinic named (`asthma-zone`); older flow: OPD, PC or KK. FAST clinic, EMACC and EM Watch lists have no COPD row | Follow-up with no time after an ED discharge (p38); within 8 weeks after a hospital discharge (p44); a new presentation to a specialist (p38) |
| Pneumonia | Ebook CAP pathway: CURB-65; no outpatient antibiotic named (`pneumonia`) | CXR to find pneumonia as a cause (p35); sputum culture if the CXR suggests it (p34). Table 8-2 is for flare-ups; no CAP management |
| Asthma and COPD together | Asthma CPG 2024 excludes asthma-COPD overlap (its p vii); the Asthma Zone takes both | If they cannot be told apart, take both to be present (p13); Table 4-2 differences (p14) |
| Smoking | Review smoking at discharge (`asthma-zone`) | Offer every smoker the strongest support available (p16); 5A (p17); brief advice works (p18) |

**Open questions for Krishna**

1. **ABG and the Asthma Treatment Room.** The CPG recommends an ABG for a COPD flare-up seen in the ED (p34). Does every known COPD patient in the Green Zone get one, and if so, do they leave the Asthma Treatment Room (as the older flow did for urgent bloods)?
2. **Oxygen target and the discharge SpO2.** For COPD, the CPG aims for SpO2 90-93% (p37–38) and warns against going above 93-95% in hypercapnic patients (p34); the department's ready-to-go-home rule is SpO2 95% or more on room air. Which applies to a COPD patient?
3. **Discharge prescription.** Department BA/COPD protocol: prednisolone 30 mg once daily for 5 days; CPG: 30-40 mg daily for 7-14 days. And antibiotics: the CPG gives them for 2 of 3 cardinal symptoms; the department flow has none.
4. **Which antibiotic rule and list.** Two of three, purulent sputum alone, or "and/or" (point 20); and Table 8-2 comes from the National Antibiotic Guideline 2008: does HKL's current antibiotic policy replace it?
5. **Nebulisers.** Air-driven nebulisers for COPD (p42) against the oxygen-driven nebuliser of the asthma CPG: what does the Asthma Treatment Room use, and does it have Venturi masks?
6. **The CPG's age.** Issued 2009 and due for review in 2013. Should the entry carry it at all, and with what warning beyond the lead?
7. **Follow-up.** Where does a COPD patient discharged from the Green Zone go: KK, the Physician's Clinic, IPR? None of the department's clinic lists has a COPD row.
8. **IV hydrocortisone dose** for a COPD patient who cannot take prednisolone: the CPG gives none.

---

## (d) Calculator candidates

The Calculators view reads its numbers from the pathway data, and `CALC_FACTS` must find each phrase in `P['copd-cpg']`. The phrases are in the calculator facts (16, all checked present with `JSON.stringify(P['copd-cpg']).includes(s)`). A new route such as `#calc-aminoph` must also be added to `okHref` in `check-data.js`; the draft links to no calculator (calculator links go through `CALC_SEE` in engine.js, as for `#calc-curb`, which `okHref` would reject in `see`).

### 1. IV aminophylline by weight: build (small; the only weight-based dose in this CPG)

| Input | Values |
|---|---|
| Weight | kg, shared with the other calculators (in memory only) |
| Already taking theophylline? | Yes / no |

| Output | Source (draft phrase, page) |
|---|---|
| When: a severe flare-up with an inadequate response to inhaled SABA and SAAC | "IV aminophylline in a severe flare-up when inhaled SABA and SAAC are not enough" (p40) |
| Loading dose: 5 mg/kg over 20 minutes, shown beside the printed range 250-500 mg | "loading 250-500 mg (5 mg/kg) over 20 minutes" (p40) |
| Maintenance: 500 µg/kg/hour, shown in µg/hour and mg/hour | "then 500 µg/kg/hour" (p40) |
| Target level | "adjusted to a theophylline level of 10–20 mg/L or 55–110 µmol/L" (p40) |

Where it must decline or show a note:
- **Already on theophylline:** no loading dose ("No loading dose if already on theophylline", p40). The CPG says nothing else for these patients: show the maintenance rate with "Not in the source: any other change for a patient already on theophylline".
- **Weight under 50 kg or over 100 kg:** 5 mg/kg falls outside 250-500 mg; the CPG does not say which governs. Show both, choose neither. At exactly 50 and 100 kg they agree.
- **Not in the source:** dilution, infusion volume or rate in mL; any change for age, smoking, heart failure, liver disease or interacting drugs (the CPG flags interactions without a list, p40); a maximum dose.
- **Asthma:** show the asthma CPG 2024's position (not routinely used in asthma, its p41) as a note, since the Asthma Zone sees both.
- Context: Figure 8-2 places aminophylline in hospital management after failure to improve (p38): a note that this is not a Green Zone treatment.

### 2. Antibiotic choice: not worth building as a calculator

Two checklists and two lists of drugs; the stepper already does it (`abx` → `abxrf` → `abxs` or `abxc`, with `abxno`). A calculator would have to decline at one cardinal symptom (point 20) and could not name an anti-Pseudomonas drug.

### 3. Pack-years: not worth building

One line in `which`: (cigarettes a day ÷ 20) x years smoked (p11), beside COPD, usually > 10 pack-years (p14).

### 4. Oxygen by blood gas (Figure 8-3): not a calculator

A four-way decision, already the `o2` node. "High PaCO2" is undefined (point 11), so a numeric tool would have to invent a cut-off.

### 5. Stage from FEV1: not worth building

Clean boundaries (≥ 80%, 50% ≤ FEV1 < 80%, 30% ≤ FEV1 < 50%, < 30%, p4), but spirometry is rarely at hand in the ED and is not done during a flare-up (p34).

---

## (e) Every number in the draft, and how it was checked


| # | Number as in the draft | Where in the draft | Page | Check |
|---|---|---|---|---|
| 1 | November 2009; MOH/P/PAK/197.09(GU); 2nd edition | lead, menu hint, refs | Cover | Image, 250 dpi |
| 2 | Replaced the 1998 CPG; review due November 2013 | lead, refs | PDF 2 | Image, 200 dpi |
| 3 | GOLD (2008), Canadian Thoracic Society (2007) | refs | p ii | Text |
| 4 | All adults with COPD | menu hint | p iii | Text |
| 5 | 48 hours or more | `ex` hint | p33 | Text |
| 6 | 50 to 60% | `ex` info | p33 | Text |
| 7 | ABG (note the FiO2), FBC, BUSECr, LFT, blood glucose, CXR, ECG, sputum C&S | `hx` | p38 | Text and image, 130 dpi |
| 8 | Respiratory rate > 25 breaths per minute; pH 7.25 - 7.35; PaCO2 > 6.0 kPa (45 mmHg) | `danger`, `o2b`/`o2d` gaps | p43 | Text and image, 150 dpi |
| 9 | Respiratory rate > 35 breaths per minute; pH < 7.25; PaCO2 > 8.0 kPa (60 mmHg) | `crit` | p44 | Text (printed "8.0 kPa, (60 mmHg)") and image, 150 dpi |
| 10 | SpO2 < 90%; aim SpO2 90-93% | `tx`, Oxygen tab, `o2a`/`o2c` gaps | p34; p37–38 | Text (p34); image, 300–400 dpi (p37–38) |
| 11 | 24-28% Venturi; 1-2 litres per minute nasal prongs | `tx`, Oxygen tab, facts | p36 | Text and image, 150 dpi |
| 12 | ABG 30-60 minutes later; after 30 minutes | `tx`, Oxygen tab | p36; p42 | Text |
| 13 | SABA ± SAAC | `tx`, `home` | p37–38 | Image, 400 dpi (text layer prints +) |
| 14 | 10 to 20 puffs via a spacer | `tx` | p40 | Text and image, 150 dpi |
| 15 | Combivent® 2.5 mL (ipratropium bromide 500 µg, salbutamol 2.5 mg) 6 hourly | `tx` | p40 | Text and image |
| 16 | Duovent® 4 mL (ipratropium bromide 500 µg, fenoterol 1.25 mg) 6 hourly | `tx` | p40 | Text and image |
| 17 | Prednisolone 30-40 mg daily for 7-14 days | `tx`, `home`, facts, `asthma-zone` link | p36, p38, p40 | Text (p36, p40); image (p38) |
| 18 | 2 out of 3 cardinal symptoms | `tx`, `abx`, facts | p37–38, p40 | Text (p40); image (p37–38) |
| 19 | PaO2 > 8 kPa or SpO2 > 90% (hospital box) | `admit`, Oxygen tab | p38 | Image, 800 dpi (plain >) |
| 20 | Systemic steroid for 7-14 days | `admit` | p38 | Image, 400 dpi |
| 21 | Aminophylline 250-500 mg (5 mg/kg) over 20 minutes; 500 µg/kg/hour; 10–20 mg/L or 55–110 µmol/L; no loading dose if on theophylline | `admit`, facts | p40 | Text and image, 150 dpi |
| 22 | > 25 mL of sputum a day | `admit` | p42 | Text |
| 23 | Salbutamol 200-400 µg or terbutaline 500 µg every 3-4 hours; ipratropium bromide 40 µg 6 hourly | `home` | p36 | Text and image, 150 dpi |
| 24 | Berodual®/Combivent® | `home` | p26 | Text |
| 25 | Within 8 weeks | `home` gap, Follow-up tab | p44 | Text |
| 26 | FEV1 < 50% predicted; > 4 exacerbations/year; > 65 years old; past 3 months | `abxrf`, facts | p41 | Text and image, 400 dpi |
| 27 | Simple COPD: azithromycin 500 mg once daily for 3 days; clarithromycin 250 mg twice daily for 7 days; cefuroxime 250-500 mg twice daily for 7 days; amoxycillin/clavulanate 625 mg twice daily for 7 days; erythromycin ethylsuccinate 800 mg twice daily for 7 days; doxycycline 100 mg twice daily for 7 days; moxifloxacin 400 mg once daily for 5-7 days | `abxs` | p41 | Text and image, 400 dpi |
| 28 | Complicated COPD: β-lactam ± β-lactamase inhibitor; amoxicillin 1 g three times a day; amoxycillin/clavulanate 2 g twice daily for 7 days; cefuroxime 500 mg twice daily; ceftriaxone 1 g once daily for 7 days; azithromycin 500 mg once daily for 3-5 days; levofloxacin 750 mg once daily for 5 days; moxifloxacin 400 mg once daily for 5-7 days; ciprofloxacin 250-500 mg twice daily for 5-7 days | `abxc` | p41 | Text; ± from the image, 400 dpi (text layer prints +) |
| 29 | Pseudomonas: admission in the last 3 months; 4 courses of antibiotics in the last year | `abxc` | p40 | Text |
| 30 | National Antibiotic Guideline 2008 | `abxs` gap, comments, refs | p41 | Text |
| 31 | SpO2 ≥ 90% or PaO2 ≥ 8 kPa (60 mmHg); SpO2 ≥ 95%; PaO2 ≥ 8 kPa (60 mmHg) and SpO2 of 90-93%; pH < 7.35 | `o2` to `o2d`, facts | p39 | Image, 400 dpi (text layer prints > for each ≥) |
| 32 | 93-95% | `o2a`/`o2c` gaps, Oxygen tab | p34 | Text |
| 33 | pH < 7.36; pCO2 6 - 8 kPa (45 – 60 mmHg) | `o2b`/`o2d` gaps, Severity tab | p34 | Text and image, 150 dpi |
| 34 | SpO2 ≥ 90% without an ABG; PaO2 ≥ 8 kPa or ≥ 60 mmHg or SpO2 ≥ 90% | Oxygen tab | p34; p36 | Text and image, 150 dpi |
| 35 | > 40 years old; > 10 pack-years | `which`, facts | p14 | Text |
| 36 | (cigarettes a day ÷ 20) x years smoked | `which`, facts | p11 | Text |
| 37 | FEV1/FVC < 0.70; FEV1 ≥ 80%; 50% ≤ FEV1 < 80%; 30% ≤ FEV1 < 50%; FEV1 < 30%; FEV1 < 50% with chronic respiratory failure; about 100 m; MMRC 1, 2 to 3, 4 | Severity tab | p4 (and p2) | Text; the ≥ 80% boundary from the image, 400 dpi (text layer prints >) |
| 38 | PaO2 < 8.0 kPa (60 mmHg) and/or SaO2 < 90%, with or without PaCO2 > 6.7 kPa (50 mmHg) | Severity tab | p34 (and p2, p4) | Text |
| 39 | Every 4 hours; 12-24 hours; at least 12-24 hours; stage IV | Follow-up tab | p44 | Text and image, 150 dpi |
| 40 | Three minutes; 5-10%; 5A | Follow-up tab | p17–18 | Text |


---

## What could not be verified

- **The department's BA/COPD protocol (27 Mar 2020)** was not read: only the app's summary of it in `asthma-zone`. Whether it says anything COPD-specific (oxygen, antibiotics, steroid length) is unknown.
- **The ebook PDF** is not in the folder; it has no COPD pathway according to `CPG-RUN-THROUGH.md`, and the ebook's asthma and pneumonia pathways were compared from the app's text only.
- **A newer national COPD guideline** outside the Academy list (for example on the Ministry of Health or Malaysian Thoracic Society sites) was not looked for: no web access. The lead says only that none is on the Academy list.
- **Current antibiotic policy:** whether the National Antibiotic Guideline 2008 behind Table 8-2 has been replaced, and what HKL's own policy says, was not checked.
- **The copy read** is the Academy of Medicine file (PDF dated 24 May 2010); it was not compared with any Ministry of Health web version.
- **Reference sources** (GOLD 2008, the Canadian Thoracic Society 2007, ATS/ERS 2004) were not opened.
- **Department facts to confirm:** what the Asthma Treatment Room has (Venturi masks, air-driven nebulisers, ABG), and where a discharged COPD patient is followed up.

---
