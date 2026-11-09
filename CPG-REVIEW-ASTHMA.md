# CPG Management of Asthma in Adults, 2nd edition (2024): review for the Green Zone MO Guide

**In the app since 9 Nov 2026** (Academy CPG round): the entry *Asthma in adults: CPG 2nd edition* (`#asthma-cpg`) beside the ebook's asthma pathway and the Asthma Zone flow, with five reference tabs (Severity, Drugs, Action plan, Inhaler and spacer, Treatment steps), and two calculators: prednisolone by weight (`#calc-apred`) and the action plan PEF zones (`#calc-apef`). The Table 9 grading stays a stepper, not a calculator (section d). Where the CPG and the ebook differ is listed under Still to confirm in the app (items 11 and 12).

Reviewed 9 Nov 2026, line by line, for the entry `P['asthma-cpg']` in `src/parts/data5.js` and its two calculators. "The draft" below means that entry.

- **Source:** *Clinical Practice Guidelines: Management of Asthma in Adults (Second Edition)*. Malaysian Health Technology Assessment Section (MaHTAS), Medical Development Division, Ministry of Health Malaysia. Issued 2024, review due 2028 (PDF page 3). 112 PDF pages; the PDF was made 15 Apr 2025 and last modified 9 May 2025.
- **Copyright (PDF page 2):** content may be reproduced "provided that a copyright acknowledgement to MaHTAS is included and the content is not changed, not sold, nor used to promote or endorse any product or service, and not used in an inappropriate or misleading context". The draft quotes as printed, names MaHTAS in `refs`, and each tab carries the engine's "Reproduced with acknowledgement to MaHTAS" line.
- **Scope (p vii):** adults (≥18 years old) with asthma. Excluded: asthma-COPD overlap syndrome and in-patient asthma care. Settings: primary, secondary and tertiary care. The external reviewers (p x) include a senior consultant emergency physician of Hospital Kuala Lumpur.
- **Standing rules:** Krishna admitted this CPG as a source on 9 Nov 2026 (CLAUDE.md, rule 8). The ebook stays the approved source (rule 5); every difference below is listed, not resolved.

## Page numbers

- **Body:** printed page = PDF page − 19 (PDF 20 = p1, through PDF 111 = p92). PDF 112 is blank.
- **Front matter:** PDF 6 = i, 7 = ii, 8 = iii, 9 = iv, 10 = v, **11 = vii** (no page prints vi), 12 = viii, 13 = ix, 14 = x.
- **Algorithms:** PDF 15 = xi (Algorithm 1), 16 = xii (Algorithm 2), 17 = xiii (Algorithm 3), 18 = xiv (Algorithm 4). PDF 19 is blank. PDF 1 to 5 (cover, copyright, updating, contents) carry no page number.
- **Contents errors:** it lists Appendix 5a at page 73; the template is on p71 (5b, p72, is right).

## How it was checked

- Text from PyMuPDF `page.get_text()` for all 112 pages; pdftotext was not used.
- Every threshold and dose in the draft was matched against the text layer (whitespace collapsed; straight apostrophes), or, where the text is drawn as outlines with no text layer (Appendix 5, 6 and 9), read from page images rendered at 230 to 500 dpi. Section (e) lists each one.
- Dashes are as printed: the algorithms use a hyphen with spaces ("4 - 10 puffs", "0.5 - 1 mg/kg", "5 - 7 days"); Table 9 and 7.3 use an en dash ("100 – 120/min", "90 – 95%", "15 – 30 minutes"); "µg" is U+00B5, as in the text layer.
- The draft was run through `node --check` (wrapped as `const P = {asthma:{}};` plus the file) and a structure check: 22 nodes, all reachable, every option and `next` target exists, every table row has as many cells as its head, tab names are ASCII, no em dash. JSON size 39.8 KB; the file is about 43 KB with comments and indentation.
- All 26 lines of the calculator facts (`CALC_FACTS` in engine.js) were checked against `JSON.stringify(P['asthma-cpg'])` the way `calcFactsMissing()` does: none missing.

---

## (a) The CPG chapter by chapter

| Part (printed pages) | What it holds that matters to the ED | In the draft? |
|---|---|---|
| Copyright, statement of intent, updating (PDF 2–3) | Reproduction terms; the CPG does not override the practitioner's responsibility | In: `refs` and the Treatment steps tab (statement of intent) |
| Levels of evidence and formulation of recommendation (p i) | "should" marks a strong recommendation, "may" a weak one | Out (useful for reading the recommendations; noted here) |
| Key recommendations (p ii–iii) | Exacerbation: treat immediately by severity; systemic corticosteroids for all; a follow-up plan for all on discharge | In, through Recommendations 8, 11 and 14 |
| Development, objectives, target population (p iv–vii) | Adults ≥18; excludes asthma-COPD overlap and in-patient care | In: menu hint |
| Algorithm 1, initiation (p xi) | Starting maintenance treatment; reliever choice; risk factors for exacerbation | In, briefly (Treatment steps tab) |
| Algorithm 2, step up and down (p xii) | The treatment ladder; ICS-formoterol reliever "maximum total dose 12 puffs/day" | In, briefly |
| Algorithm 3, exacerbation in primary care (p xiii) | The same severity table and boxes as Algorithm 4, with a different discharge box | Not as a route; where it differs from Algorithm 4 and Table 9 it is quoted (Severity and Drugs tabs) |
| Algorithm 4, exacerbation in the ED (p xiv) | Initial assessment, severity, treatment by severity, discharge box, monitoring, admission | In: the stepper (Grade and treat) |
| 1 Introduction (p1–2) | None | Out |
| 2 Risk factors for developing asthma (p3) | None for the ED | Out |
| 3 Diagnosis (p4–7) | PEFR before treatment and at 1 hour (p4); spirometry and challenge tests (Table 3) | In: the PEFR line only (Severity tab). Diagnosis by spirometry is a clinic task |
| 4 General principles (p8–11) | Treatment goals; initiation, step-up and step-down; Recommendation 2 (SABA always with ICS); a short-term step-up for 1 - 2 weeks with an AAP | In: Recommendation 2 and the step-up lines |
| 5 Patient education (p12–19) | The AAP (5.2, p13–14), Recommendation 3, inhaler technique errors (p15) | In: how to use the AAP. Out: education programmes, behaviour change techniques, adherence tools, RMTAC |
| 6.1 Assessment of stable asthma (p20–23) | GINA, ACT, ACQ-5 and RCP 3 control tools; future exacerbation risk (p23) | Out: clinic assessment. Algorithm 1 carries the risk list |
| 6.2.1 Pharmacological treatment (p24–31) | Relievers, ICS, ICS-LABA, MART, Table 7 (ICS doses), LTRA, methylxanthine, LAMA, macrolides, OCS, SLIT; Recommendations 5 and 6 | In: Recommendations 5 and 6 and Table 7. Out: the evidence summaries |
| 6.2.2 Non-pharmacological treatment (p31–35) | Smoking, physical activity, weight, vaccination; **k. medication to be used with caution: aspirin, NSAIDs and β-blockers (p35)** | In: k, and the smoking line of Recommendation 7 |
| **7 Asthma exacerbation (p36–43)** | Assessment and Table 8 (risk of death), Table 9 (severity), Recommendation 8; oxygen, β2-agonists, ipratropium, steroids, ICS, magnesium, aminophylline (Recommendations 9 to 12); monitoring (Recommendation 13); admission and discharge (Recommendation 14) | **In, in full**: stepper, Severity and Drugs tabs |
| 8.1 Severe asthma (p44–49) | Definitions, biologics, azithromycin dosing (p48), Recommendation 15 | Out: specialist care. Severe or uncontrolled asthma is a referral indication (chapter 9) |
| 8.2 Pregnancy and breastfeeding (p49–51) | Exacerbation treatment the same; SpO2 94 to 98%; foetal monitoring; early critical care referral for moderate to severe; hydrocortisone in labour; Recommendation 16 | In: the Pregnant patient outcome |
| 8.3 Occupational asthma (p51–53) | Ask about occupation; refer suspected cases; notify confirmed cases (WEHU-L1 (JKKP7) form); Recommendation 17 | In: the referral and notification line only |
| 8.4 Exercise-induced bronchoconstriction (p53–54) | Diagnosis and pre-exercise reliever | Out |
| 8.5 Co-morbidities (p54–55) | Obesity (BMI >27.5), OSA, rhinitis, rhinosinusitis, GERD, anxiety and depression | Out: no ED decision depends on them |
| 8.6 Asthma and COVID-19 (p56–57) | Nebulisers not to be discouraged in life-threatening asthma; spacers single patient use; homemade spacers not equivalent; paxlovid interaction with ICS-salmeterol or ICS-vilanterol | In: those four lines |
| 9 Referral (p58) | Nine indications for referral to a respiratory physician | In: the Refer stepper node |
| 10 Implementing the guidelines (p58–60) | Audit indicator: patients given a follow-up plan on discharge after an exacerbation, target 100% | Out (noted here: it bears on ED practice) |
| References (p61–65) | | Out; `refs` cites the CPG |
| Appendix 1–2 (p66–68) | Search strategy; 21 clinical questions. Question 11 asks about antibiotics and antiviral therapy in acute asthma | Out (see point 22 in (b)) |
| Appendix 3 (p69) | Diurnal PEF variability formula | Out: diagnosis |
| Appendix 4 (p70) | PEF nomogram (Da Costa and Goh, Singapore Chinese adults, 1973) | Out as a picture; the AAP note cites it |
| **Appendix 5 (p71–72)** | **Suggested asthma action plan templates: A (standard) and B (MART), English only, with blanks** | **In: the Action plan tab** (not as a `leaflet`: see below) |
| Appendix 6 (p73–76) | Inhaler devices and technique: pMDI, pMDI and spacer, Respimat, DPIs | In: the pMDI and spacer column. Out: DPIs and Respimat |
| Appendix 7 (p77) | Test of Adherence to Inhalers, in Malay | Out: a clinic adherence questionnaire, not patient advice |
| Appendix 8 (p78) | Asthma Control Test | Out: a clinic tool (the ACT is a trademarked questionnaire) |
| **Appendix 9 (p79–86)** | Common medications: A SABA, B ICS, C ICS/LABA, D LAMA, E ICS/LABA/LAMA, F LTRA, G methylxanthine, **H nebuliser** | In: A (salbutamol reliever rows) and H (the only nebulised doses in the CPG). Out: B to G (maintenance products) |
| Appendix 10 (p87) | Biologic selection algorithm | Out |
| Appendix 11 (p88–89) | PEFR variability for occupational asthma | Out |
| Abbreviations, acknowledgement, disclosure, funding (p90–92) | | Out |

**Why there is no `leaflet`.** The CPG prints no patient leaflet. Its only patient-facing material is the action plan template (Appendix 5), printed in English only and full of blanks for the doctor to fill in (doses, PEF values, inhaler names and colours). In `engine.js`, `pathWords()` and `leafletHTML()` read both `leaflet.en` and `leaflet.ms`; an English-only `leaflet` would throw when the search index is built and break the whole page. So the templates are a `notes` tab ("Action plan"), quoted with their blanks, without the form's name and IC number fields. If Krishna wants the "Home care advice" button on the discharge outcome for this entry, the engine first needs a one-language mode for `leaflet`.

---

## (b) Points inside the CPG

Places where its algorithms, text, tables and recommendations disagree, or leave a gap. Most important for the Green Zone first.

1. **Mild SpO2.** Table 9 (p37): mild "≥95%", moderate "90 – 95%". Algorithms 3 and 4 (p xiii, xiv): mild "<95%". The algorithms' value overlaps moderate and severe. The draft grades by Table 9 (Recommendation 8 points to it) and quotes both.
2. **Mild accessory muscle use.** Table 9: mild "Absent". Algorithms 3 and 4: mild "Present", the same as moderate.
3. **Mild respiratory rate.** Table 9 prints "Normal/" with nothing after the slash; the algorithms print "Normal". No number for a normal rate appears anywhere.
4. **Moderate PaCO2.** Algorithm 3: "<40 mmHg or normal". Algorithm 4 and Table 9: "<40 mmHg".
5. **Cells printed in more than one column of Table 9.** SpO2 "<90%" and PaO2 "<60 mmHg" (severe and life-threatening); "confused/drowsy" (severe "Alert/confused/drowsy", life-threatening "Confused/drowsy/coma"); hypotension (severe "Normal/hypotension", life-threatening "Hypotension"); PaCO2 "normal" (mild, and severe "<40 mmHg or normal"); PaCO2 "<40 mmHg" (moderate and severe); SpO2 95% (mild ≥95%, moderate 90 – 95%); alert, normal BP and wheezing (mild, moderate and severe). The note says "Classify using the most severe parameters". Read literally, a normal PaCO2 grades any exacerbation as severe, and an SpO2 of 89% alone grades it life-threatening. **The draft** lists the cells shared with life-threatening under life-threatening (the note, literally), leaves out the cells shared with milder grades, and says so in each hint. **Open item:** whether SpO2 <90% or PaO2 <60 mmHg alone should grade an exacerbation life-threatening.
6. **Respiratory failure against Table 9.** 7.3 (p42): "A PaO2<60 mmHg and a normal or increased PaCO2 (especially >45 mmHg) indicates respiratory failure" and "A rising or normal PaCO2 may indicate impending respiratory arrest". Table 9 puts PaO2 <60 mmHg with PaCO2 "<40 mmHg or normal" in the severe column, not life-threatening.
7. **PEF.** p37 says symptoms, signs and lung function (PEF/FEV1) are used to classify severity "(refer to Table 9)", but Table 9 has no PEF or FEV1 row, and the same paragraph says PEF or FEV1 "may not be applicable to be used in acute asthma exacerbation". Yet p4 asks for PEFR before treatment and at 1-hour post treatment, 7.3 uses "PEFR <50%" to consider an ABG (p41), 7.2 uses "FEV1 <25 – 30% predicted" for magnesium (p41), and the action plan is built on PEFR zones.
8. **Oxygen targets.** Recommendation 9 (p39) and 7.2 (p38): "Oxygen saturation of ≥94% should be maintained in all hypoxic asthma patients." Algorithms 3 and 4: "target saturation 93 to 95%" (a floor of 93% is below 94%). Algorithm footnote: "SpO2 >94% under room air" for improvement. Pregnancy (p50): "between 94 and 98%". Algorithm 4 adds "(if available)" to oxygen in the mild and moderate box only, although it is the ED algorithm.
9. **HFNC.** Recommendation 9 (p39): "In asthma exacerbation in emergency department, high flow nasal cannula should be considered over conventional oxygen therapy" (no severity given). Algorithm 4 prints "Consider HFNC" in the severe box only.
10. **Nebulised SABA: continuous or every 20 minutes.** 7.2 (p39): "In severe and life-threatening exacerbations, continuous delivery of nebulised oxygen-driven β2-agonists should be used." Algorithm 4: "SABA via oxygen driven nebuliser, repeat every 20 minutes for 1 hour". The algorithms give no nebulised dose; only Appendix 9 H (p86) does ("2.5 to 5 mg every 20 minutes for the first hour (3 doses), then 2.5 to 10 mg every 1 to 4 hours as needed, or 10 to 15 mg/hour by continuous nebulisation"), under a disclaimer that it "only serves as a general guide".
11. **Ipratropium.** The text (p39) supports ipratropium plus SABA for ED exacerbations without a severity limit; Algorithm 4 gives it only in the severe and life-threatening boxes, "0.5 mg every 4 - 6 hours"; Algorithm 3 gives "0.5 mg stat"; Appendix 9 H: "500 µg; repeated doses can be administered (4 to 6 hourly)". None gives it in the mild and moderate box, and none repeats it every 20 minutes.
12. **Prednisolone: stat or daily, actual or ideal weight.** Algorithm 4: "Prednisolone: 0.5 - 1 mg/kg with a maximum of 50 mg stat". p40: "The suggested daily dose of prednisolone ranges from 0.5 to 1 mg/kg of the ideal body weight with a maximum of 50 mg daily". The CPG gives no formula for the ideal body weight.
13. **Hydrocortisone.** Algorithm 4: "IV hydrocortisone 100 mg stat". p40: "200 mg of intravenous hydrocortisone in divided doses" (a daily dose, no interval). The only interval printed is in labour: "100 mg every 6 to 8 hours" (p50).
14. **The clinical improvement footnote is not attached.** Algorithms 3 and 4 print "*Improvement of symptoms (not needing continuous SABA) and SpO2 >94% under room air", but no asterisk marks any arrow or box (PyMuPDF spans: the asterisk occurs only in the footnote).
15. **Three discharge wordings.** The footnote above; 7.5 (p43): "can follow their prescribed treatment at home, have few symptoms or need less reliever medications"; Recommendation 14 (p43): "have resolution of symptoms after treatment and are able to follow their prescribed treatment at home". Few symptoms is not resolution of symptoms. 7.5 also says "There are no specific parameters that assure safe discharge".
16. **Follow-up interval.** Algorithms 3 and 4: follow-up "within 1 - 2 weeks" (Algorithm 4: "at primary care clinic"). 7.5 (p43): "a referral letter to a clinic for the patient to be seen within seven days".
17. **Discharge treatment.** Algorithm 4 says "Continue usual treatment"; Algorithm 3 says "Assess inhaler technique and adherence" and "Step-up treatment if indicated", which Algorithm 4 drops. Recommendations 5 and 6 say SABA should not be used as monotherapy and all asthma patients should be on ICS-containing therapy. A patient on SABA alone, discharged to "continue usual treatment", stays on SABA monotherapy. **Gap:** the CPG does not say whether the ED should start ICS-containing therapy.
18. **No discharge route after escalation.** In Algorithm 4, mild or moderate "No clinical improvement" leads to the severe box, and from the severe box both arrows lead to monitoring and evaluation and "REFER FOR ADMISSION AND/OR CRITICAL CARE". 7.4 agrees ("progressive deterioration following initial treatment ... should be admitted"). So a patient who needed the severe box is admitted even if they then improve. The final box also has no arrow into it from the monitoring box.
19. **Pregnancy is "the same", with exceptions.** Recommendation 16 (p51): treat pregnant patients the same as non-pregnant. The text (p50) adds early referral to critical care for **moderate** to severe exacerbations, continuous foetal monitoring, and a different SpO2 target (94 to 98%).
20. **SABA overuse has four measures.** Table 8 (p36): "over-use of SABAs" (no number). p23 and Algorithm 1: "≥3 cannisters per year" (future exacerbation risk; spelled "cannisters"). Recommendation 5 (p25): "≥3 canisters/year". p24: "≥3 of 200-dose canisters a year". 7.4 (p42): "use of more than eight SABA puffs in previous 24 hours" (admission).
21. **ICS-formoterol maximum.** Algorithm 2 and p11: "12 puffs/day". Action plan 5B: "Maximum 12 inhalations a day including controller dose". Appendix 9 C (p80–81), beclometasone-formoterol MART: "Maximum daily dose: 8 inhalations (allow up to 12 based on GINA)"; budesonide-formoterol (p82): ">8 inhalations is not normally needed; however, a total daily dose of up to 12 inhalations could be used for a limited period".
22. **Antibiotics.** Clinical question 11 (Appendix 2, p68) asks about antibiotics and antiviral therapy in acute asthma; chapter 7 never answers it. Table 8 lists pneumonia as a co-morbidity, and 7.3 suggests a CXR if pneumonia is suspected.
23. **NIV.** p38 reports a cohort in which NIV reduced intubation and in-hospital mortality, but makes no recommendation, and Algorithm 4 does not mention NIV.
24. **Magnesium.** The evidence (p41) is for patients "not responding to initial treatments and have persistent hypoxaemia ... with FEV1 <25 – 30% predicted"; Recommendation 12 says "should be considered in acute severe and life-threatening asthma"; Algorithm 4 gives it in the severe box without an FEV1 or response condition. No diluent or volume is given.
25. **ABG.** 7.3 (p41): "not routinely required", to be considered for PEFR <50%, non-response or deterioration; Recommendation 13 (p42): "In severe and life-threatening asthma arterial blood gases should be done". Table 9 still grades mild and moderate on PaO2 and PaCO2.
26. **Admission factors without numbers.** 7.4 (p42): "older age" (no age), "past history of severe exacerbations", "past history of unscheduled clinic and emergency department visits requiring use of OCS" (no count or period).
27. **Action plan bands.** WELL "80% to 100% of personal best" and GETTING WORSE "50% to 79%" leave readings between 79% and 80%, and above 100%, unassigned. The Alert zone advises a spacer for patients with "Difficulty walking or talking", while 7.2 says "pMDI with spacer should not be used in life-threatening asthma" (different settings: home and transfer, against the ED).
28. **Algorithm 1 against its text.** Algorithm 1's second column joins its criteria with OR ("Daily Symptoms OR Night-time awakening ≥ 1 a week OR FEV1 <80% of predicted or LLN"); the text on p9 says "daily symptoms OR night-time awakening of ≥1 night per week AND FEV1 <80% of predicted or LLN".
29. **Smaller points.** ACQ-5 bands on p22 are headed "ACT Score" and read "0.75 – 1.50 Very poorly controlled; >1.50 Not well controlled" (labels apparently swapped; 0.75 sits in two bands). PEF variability is "≥20%" in Table 3 (p6) and ">20%" in Appendix 3 (p69). The CPG mixes "nebuliser" and "nebulizer" (the severe and life-threatening boxes of Algorithm 4 differ). The nebuliser table's dilution comment (p85–86) sits in one cell beside all three drugs. Appendix 9's MART cell for Nexthaler (p81) carries a stray "If patients". IM corticosteroids are said to be as effective as oral before ED discharge (p40), with no IM dose. The page numbers skip vi; the contents put Appendix 5a on p73.

---

## (c) The ebook pathway and the Asthma Zone flow against the CPG

Ebook: *The Clinical Pathway in Emergency for Medical Officer*, HKL 2025, Bronchial asthma p19–23, as built in `data.js` (`P['asthma']`); it cites GINA 2023 and the Malaysia CPG 2017 (the 1st edition). Memo: Asthma Zone flow, memo HKL/JK/98/188/3(27)25 of 13 Nov 2025, with the discharge prescription and MDI doses from the department BA/COPD protocol of 27 Mar 2020, as built in `data2.js` (`P['asthma-zone']`).

| Item | Ebook / memo says | CPG 2nd ed. says (page) |
|---|---|---|
| Edition cited | Ebook refs and discharge: "Malaysia CPG Management of Asthma 2017", "Written Asthma Action Plan (Malaysia CPG 2017)" | The 2nd edition (2024) updates the 2017 CPG (p1); its action plan templates are Appendix 5 (p71–72) |
| Who it covers | Memo: asthma and COPD; adult and children's MDI doses | Adults ≥18 only; excludes asthma-COPD overlap (p vii). No children's doses |
| Severity grades | Ebook table: life threatening "Drowsy or confused, cyanosed, poor respiratory effort, silent chest"; severe "Sits forward, speaks in words, uses accessory muscles, agitated"; moderate "Prefers sitting to lying, speaks in phrases, no accessory muscles, not agitated"; mild "Walking, speaks in sentences, no accessory muscles, not agitated" | Table 9 (p37): life-threatening confused/drowsy/coma, unable to speak, RR <12/min, bradycardia/cardiac arrest, hypotension, paradoxical chest movement/absent, silent chest, SpO2 <90%, PaO2 < 60 mmHg, PaCO2 >45 mmHg; severe speaks in words, RR >25/min, PR >120/min, accessory muscles very evident; moderate speaks in phrases, RR >20/min, PR 100 – 120/min, accessory muscles **present**, SpO2 90 – 95%, PaO2 <80 mmHg. No cyanosis, posture or agitation |
| Respiratory rate | Severe "Over 30"; moderate "20–30"; mild "Not or mildly tachypnoeic" | Severe ">25/min"; moderate ">20/min"; mild "Normal/"; life-threatening "<12/min" (p37) |
| Heart rate | Severe "Over 120"; moderate "100–120"; mild "Under 100" | The same bands: ">120/min", "100 – 120/min", "<100/min"; life-threatening "Bradycardia/cardiac arrest" (p37) |
| SpO2 | Severe "Under 90%"; moderate "90–95%"; mild "Over 95%" | "<90%", "90 – 95%", "≥95%" (Table 9, p37); mild "<95%" in Algorithms 3 and 4 (p xiii–xiv) |
| PEF | Severe "Under 50% best or predicted"; moderate "Over 50%"; mild "Over 80%"; memo: PEFR before and after treatment | No PEF row in Table 9; PEF "may not be applicable" in acute exacerbation (p37); PEFR before treatment and at 1 hour (p4); ABG if PEFR <50% (p41) |
| Where the patient is treated | Ebook: mild to the Asthma Bay; moderate, severe and life threatening to the Critical Care Zone. Memo: MTS 2 or 3 to R1; 4 or 5 to the Asthma Treatment Room | No zones and no MTS levels anywhere in the CPG |
| First bronchodilator | Ebook: "MDI salbutamol 4–6 puffs (400–600 mcg) with spacer, or nebulised salbutamol 1:3", reassess after 10 minutes, repeat up to 3 times. Protocol: dose 1 4–6 puffs and dose 2 6–8 puffs, each reassessed after 10 minutes, then dose 3 8 puffs. Memo: reassess at 15–20 minutes | "SABA 4 - 10 puffs by pMDI + spacer (preferable patient's own) or via nebuliser, repeat every 20 minutes for 1 hour" (p xiv); pMDI via spacer preferred in mild to moderate (p39) |
| Nebulised salbutamol | Ebook: "1:3"; severe "continuous for 1 hour"; ward "every 1 hour". Protocol: "Neb salbutamol 5 mg = 5–10 puffs" | Appendix 9 H (p86): "2.5 to 5 mg every 20 minutes for the first hour (3 doses), then 2.5 to 10 mg every 1 to 4 hours as needed, or 10 to 15 mg/hour by continuous nebulisation"; dilute to "4 – 5 ml". No 1:3 dilution, and no puff equivalence |
| When to give a steroid | Ebook: the first dose is at the second step, after the first bronchodilator has failed; a step-1 responder goes home on prednisolone. Protocol: dose 1 "with IV or oral steroid" | "Systemic corticosteroids should be given in all patients with asthma exacerbation" (Recommendation 11, p40), "as early as possible" (p40); in the initial box of Algorithm 4 |
| Prednisolone dose | Ebook and memo: 30 mg (stat and daily) | "0.5 - 1 mg/kg with a maximum of 50 mg stat" (p xiv); daily "0.5 to 1 mg/kg of the ideal body weight with a maximum of 50 mg daily" (p40) |
| Prednisolone duration | Ebook and memo: "30 mg OD for 5 days" | "5 to 7 days and can be stopped without gradual reduction" (p40); "Continue prednisolone (5 - 7 days)" (p xiv) |
| Hydrocortisone | Ebook: "IV hydrocortisone 200 mg" (second step; severe "if not yet given"); ward and ICU "100 mg TDS" | "IV hydrocortisone 100 mg stat" (severe and life-threatening, p xiv); "200 mg of intravenous hydrocortisone in divided doses" a day (p40) |
| Ipratropium | Ebook: moderate "consider nebulised Atrovent 500 mcg, or nebulised Combivent 1 vial, or MDI Atrovent 4 puffs (80 mcg)"; severe "may repeat every 20 minutes (up to 3 times)"; ward "every 4–6 hourly". Protocol: "neb ipratropium 0.5 mg = 4 puffs (20 mcg per puff)" | Severe and life-threatening only: "0.5 mg every 4 - 6 hours" (p xiv); Appendix 9 H: "500 µg; repeated doses can be administered (4 to 6 hourly)", "Daily doses exceeding 2 mg should only be given under medical supervision"; ipratropium 0.5 mg and salbutamol 2.5 mg UDV "1 UDV every 4 to 6 hours" (p85–86). No MDI ipratropium dose, no every-20-minute dosing |
| SC terbutaline | Ebook severe: "SC Bricanyl (terbutaline) 0.5 ml (0.25 mg)" | Parenteral β2-agonists: no evidence for routine use; "only be reserved for ventilated patients or those with life-threatening asthma in critical care settings who do not respond to other treatments" (p39) |
| Magnesium sulphate | Ebook: "Consider IV MgSO4 2.47 g in 20 cc NS over 20 minutes" | "IV magnesium sulphate 2 g infusion over 20 minutes (single dose)" (p xiv); Recommendation 12 (p41); no diluent or volume |
| Oxygen | Ebook pathway: no target; memo: none | Controlled oxygen, target 93 to 95% (p xiv); ≥94% in hypoxic patients (Recommendation 9, p39); HFNC considered over conventional oxygen in the ED (p39) |
| Critical care | Ebook ICU: mechanical ventilation, nebulised salbutamol via T-piece, "IVI ketamine or IVI propofol", "IV antibiotic" | "Consider early intubation" with its criteria, "Early referral to critical care" (p xiv); no sedation drugs; no statement on antibiotics (point 22) |
| Discharge criteria | Ebook: symptoms improved, "SpO2 over 95% on room air", adequate resources at home, "PEF over 80% predicted or best". Protocol: "Improved, no rhonchi, and SpO2 95% or more on room air" | Footnote: "Improvement of symptoms (not needing continuous SABA) and SpO2 >94% under room air" (p xiv); Recommendation 14: resolution of symptoms and able to follow treatment at home (p43); "no specific parameters that assure safe discharge" (p43); no PEF threshold |
| Observation | Ebook: a mild or moderate patient responding at the second step: "Admit or observe for frequent reassessment" | No observation outcome: no improvement after the initial box leads to the severe box and then admission (p xiv); progressive deterioration should be admitted (p42) |
| Discharge medicines | Ebook: "MDI salbutamol 4–6 puffs PRN", prednisolone 30 mg OD 5 days. Memo: the balance of the patient's MDI with the spacer; "Salbutamol MDI 4 puffs every 4–6 hours for 1 day, then 2 puffs as needed" | "Continue usual treatment" (p xiv); continue maintenance ICS (Recommendation 11, p40); SABA not as monotherapy (Recommendation 5, p25); all on ICS-containing therapy (Recommendation 6, p31); salbutamol pMDI for relief "1 to 2 inhalations" (Appendix 9 A, p79) |
| Follow-up | Ebook: "Continue asthma follow-up" (no interval). Memo: OPD, PC or KK, with a referral letter | Primary care clinic "within 1 - 2 weeks" (p xiv); "referral letter to a clinic ... within seven days" (p43); a follow-up plan for every patient (Recommendation 14) |
| Action plan advice | Memo (patient leaflet): getting worse "reliever every 4 hours"; severe "4 puffs of the reliever every 4 minutes on the way" | Appendix 5A (p71): getting worse "2 to 4 inhalations every 20 minutes for a total 3 times", then "every 3 – 4 hours"; alert "With spacer – increase dose up to 10 inhalations every 20 minutes", "Without spacer – take 2 inhalations every 5 minutes"; 5B for MART |
| Risk factors for asthma death | Memo (clerking sheet): near-fatal asthma needing intubation; hospital or emergency care in 12 months; not using ICS or poor adherence; oral steroids now or recently; SABA overuse "more than 1 canister a month"; psychiatric or psychosocial problems; confirmed food allergy | Table 8 (p36) adds poor adherence to, or lack of, a written asthma action plan, co-morbidity "e.g. pneumonia, diabetes and arrhythmias", and anaphylaxis; "over-use of SABAs" has no number there (≥3 canisters a year elsewhere: point 20) |
| Spacer | Protocol: "Prime the spacer with 2 puffs (not counted); give 1 puff every 30 seconds with at least 5 tidal breaths; rest 5–10 minutes". Leaflet: wash once a week in soapy water, rinse, air dry, do not wipe. The department uses a modified spacer poster | Appendix 6 (p73–74): prime by releasing "several puffs" (varies by product) before first use or when unused "for 5 – 7 days"; a non-antistatic spacer is pre-washed "(do not rinse)" and air-dried before first use; tidal breathing "5 times" (VHC only); "Wait 30 - 60 seconds before repeating"; "Clean spacer once a week; cleaning instruction varies". p56: homemade spacers "should not be regarded as equivalent replacements"; a spacer is "single patient use or autoclaved" |
| Reassessment interval | Ebook 10 minutes; memo 15–20 minutes | SABA repeated every 20 minutes for 1 hour (p xiv); severe or life-threatening vital signs "continuously or at least every 15 – 30 minutes" (p42); PEFR at 1 hour (p4) |
| Admission | Ebook: severe or life threatening not responding, to the ward; impending respiratory failure, to ICU or HDW | All severe or life-threatening patients and any progressive deterioration (p42, Recommendation 14); other factors (older age, more than eight SABA puffs in 24 hours, past severe exacerbations, past unscheduled visits needing OCS, living alone, psychological problems, physical disability) |
| Pregnancy | Not covered | Same treatment; SpO2 94 to 98%; continuous foetal monitoring; early critical care referral for moderate to severe (p50) |
| Smoking | Memo: smoking cessation advice | Recommendation 7: "strongly encouraged to quit at every clinic visit" (p35) |

---

## (d) Calculator candidates

The other drugs in an exacerbation (nebulised salbutamol and ipratropium, magnesium, hydrocortisone) are fixed doses, so they belong in the Drugs tab, not a calculator.

### 1. Prednisolone by weight (recommended)

- **Inputs:** a weight in kg, labelled as the ideal body weight (see "where it stops").
- **Numbers and their source:**
  - "Prednisolone: 0.5 - 1 mg/kg with a maximum of 50 mg stat" (Algorithm 4, p xiv; the same in Algorithm 3, p xiii).
  - "The suggested daily dose of prednisolone ranges from 0.5 to 1 mg/kg of the ideal body weight with a maximum of 50 mg daily or 200 mg of intravenous hydrocortisone in divided doses. This dosage should be maintained for 5 to 7 days and can be stopped without gradual reduction." (7.2, p40)
  - "Continue prednisolone (5 - 7 days)" (Algorithm 4, p xiv).
- **Output:** 0.5 × weight to 1 × weight mg, each end capped at 50 mg (at 50 kg and over the upper end is 50 mg; at 100 kg and over the whole range is 50 mg), for 5 to 7 days.
- **Where the CPG stops (the calculator must say so):**
  - It gives no formula for the ideal body weight. The ebook's dengue table has one (female 45.5 kg, male 50 kg, plus 0.91 × (height − 152 cm); the app's `#calc-weight`); whether it may be used for asthma prednisolone is Krishna's call, not the CPG's.
  - The algorithm writes mg/kg without saying which weight; only the text says ideal body weight.
  - No tablet strength or rounding.
  - Whether the stat dose is day 1 of the 5 to 7 days.
  - No interval for "200 mg of intravenous hydrocortisone in divided doses" (Algorithm 4 gives "100 mg stat").
  - Under 18 is outside the CPG (p vii).

### 2. Action plan PEF zones (useful at discharge)

- **Inputs:** personal best PEF (l/min), or the predicted PEF if no personal best is known; optionally the current PEF.
- **Numbers and their source:**
  - "PEFR: ____ to ____l/min (80% to 100% of personal best)"; "PEFR: ____ to ____l/min (50% to 79% of personal best)"; "PEFR: Below ____l/min (less than 50% of personal best)" (Appendix 5A, p71; the same in 5B, p72).
  - "In PEFR-based plans, personal best PEFR should be used for the action point ... In patients without known personal best, the predicted value may be used." (5.2, p13)
  - ABG "should be considered for patients with PEFR <50% or those who do not respond to initial treatment or are deteriorating" (7.3, p41–42).
- **Output:** the l/min values to write in the three blanks (80% and 100%, 50% and 79%, below 50% of personal best), and the current PEF as a percentage with its zone.
- **Where the CPG stops:**
  - Readings between 79% and 80%, and above 100%, have no zone.
  - The predicted value comes only from the Appendix 4 nomogram (Singapore Chinese adults, 1973), a picture with no formula, so the user must read it off.
  - No rounding to a meter's scale.
  - p37: PEF "may not be applicable to be used in acute asthma exacerbation", so in the ED the only acute use is the ABG prompt.

### 3. Table 9 vital signs (possible, with many declines)

- **Inputs:** respiratory rate, pulse rate, SpO2; optional PaO2 and PaCO2 (mmHg); taps for speech, accessory muscle use, consciousness and breath sounds.
- **Numbers and their source (Table 9, p37):**
  - Respiratory rate ">20/min" (moderate), ">25/min" (severe), "<12/min" (life-threatening).
  - Pulse "<100/min", "100 – 120/min", ">120/min".
  - SpO2 "≥95%", "90 – 95%", "<90%" (severe and life-threatening).
  - PaO2 "<80 mmHg" (moderate), "<60 mmHg" (severe), "< 60 mmHg" (life-threatening).
  - PaCO2 "<40 mmHg" (moderate), "<40 mmHg or normal" (severe), ">45 mmHg" (life-threatening).
  - Note: "Not all parameters need to be met to classify the severity. Classify using the most severe parameters."
- **Output:** the column or columns each value falls in, and the most severe column matched, only where that column is decided by a cell no other column shares.
- **Where the CPG stops:**
  - Respiratory rate 12 to 20 (mild "Normal/", no number); exactly 20 is not ">20".
  - "Bradycardia" and "hypotension" have no thresholds.
  - SpO2 <90% and PaO2 <60 mmHg cannot separate severe from life-threatening.
  - SpO2 95% is printed for mild and moderate.
  - PaO2 80 or more: "Normal" has no number.
  - PaCO2 40 to 45: "normal" has no number. Under 40 it is printed for moderate and severe, so "most severe" would always say severe.
  - Whether the SpO2 is on air or oxygen is not stated.
  - Algorithms 3 and 4 print mild SpO2 and accessory muscles differently (points 1 to 5 in (b)).

### Not calculators

- "use of more than eight SABA puffs in previous 24 hours" (p42) is a yes or no question (it is in the `dcf` checklist).
- Diurnal PEF variability (Appendix 3) and occupational PEF variability (Appendix 11) are diagnostic, not ED.
- The ACT (Appendix 8) is a clinic tool and a trademarked questionnaire.

the calculator facts (`CALC_FACTS` in engine.js) lists the source phrase behind every number for calculators 1 to 3, plus the oxygen targets and the SABA puff count, as `['asthma-cpg', '...']` lines for `CALC_FACTS`.

---

## (e) Every number in the draft, with its check

The coverage scan took every number in the draft (leaving out page, section, table and recommendation numbers and years). Each one sits inside one of the printed strings below. There were two leftovers, neither clinical: the "13" of the memo date and the "19" of COVID-19. In all, 117 text-layer quotes were checked (rows 1 to 56 are those that carry a number) and 32 image readings.

Text-layer strings are shown with whitespace collapsed. Three quotes wrap across lines or pages in the PDF:
- "0.5 to 1 mg/ kg" is "mg/kg" printed across a line break (p40).
- The ABG sentence runs from p41 to p42.
- "(ICS)-containing" is hyphenated across a line (p31).

| # | Page (PDF) | Check | Exact printed string |
|---|---|---|---|
| 1 | p vii (PDF 11) | text layer: found | Adults (≥18 years old) with asthma |
| 2 | p37 (PDF 56) | text layer: found | <12/min |
| 3 | p37 (PDF 56) | text layer: found | Silent chest <90% < 60 mmHg >45 mmHg |
| 4 | p37 (PDF 56) | text layer: found | Speaks in words >25/min >120/min Normal/ hypotension Very evident Wheezing <90% <60 mmHg <40 mmHg or normal |
| 5 | p37 (PDF 56) | text layer: found | Speaks in phrases >20/min 100 – 120/min Normal Present Wheezing 90 – 95% <80 mmHg <40 mmHg |
| 6 | p37 (PDF 56) | text layer: found | Alert Normal Normal/ <100/min Normal Absent Wheezing ≥95% Normal Normal |
| 7 | p37 (PDF 56) | text layer: found | 2023;5(4):100277 |
| 8 | p xiv (PDF 18) | text layer: found | SABA 4 - 10 puffs by pMDI + spacer (preferable patient's own) or via nebuliser, repeat every 20 minutes for 1 hour |
| 9 | p xiv (PDF 18) | text layer: found | Prednisolone: 0.5 - 1 mg/kg with a maximum of 50 mg stat |
| 10 | p xiv (PDF 18) | text layer: found | Controlled oxygen (if available): target saturation 93 to 95% |
| 11 | p xiv (PDF 18) | text layer: found | Improvement of symptoms (not needing continuous SABA) and SpO2 >94% under room air |
| 12 | p xiv (PDF 18) | text layer: found | SABA via oxygen driven nebuliser, repeat every 20 minutes for 1 hour |
| 13 | p xiv (PDF 18) | text layer: found | Ipratropium bromide nebuliser 0.5 mg every 4 - 6 hours |
| 14 | p xiv (PDF 18) | text layer: found | Ipratropium bromide nebulizer 0.5 mg every 4 - 6 hours |
| 15 | p xiv (PDF 18) | text layer: found | Controlled oxygen: target saturation 93 to 95% |
| 16 | p xiv (PDF 18) | text layer: found | IV hydrocortisone 100 mg stat |
| 17 | p xiv (PDF 18) | text layer: found | IV hydrocortisone 100 mg stat (if not given earlier) |
| 18 | p xiv (PDF 18) | text layer: found | IV magnesium sulphate 2 g infusion over 20 minutes (single dose) |
| 19 | p xiv (PDF 18) | text layer: found | IV magnesium sulphate 2 g infusion over 20 minutes (single dose) (if not given earlier) |
| 20 | p xiv (PDF 18) | text layer: found | Conscious level, SpO2, PR, BP |
| 21 | p xiv (PDF 18) | text layer: found | PaO2 and PaCO2 |
| 22 | p xiv (PDF 18) | text layer: found | Continue prednisolone (5 - 7 days) |
| 23 | p xiv (PDF 18) | text layer: found | Ensure follow-up at primary care clinic within 1 - 2 weeks |
| 24 | p xiv (PDF 18) | text layer: found | Alert Normal Normal <100/min Normal Present Wheezing <95% Normal Normal |
| 25 | p xiv (PDF 18) | text layer: found | 90 – 95% <80 mmHg <40 mmHg Alert |
| 26 | p xiii (PDF 17) | text layer: found | 90 – 95% <80 mmHg <40 mmHg or normal |
| 27 | p xiii (PDF 17) | text layer: found | Alert Normal Normal <100/min Normal Present Wheezing <95% Normal Normal |
| 28 | p xiii (PDF 17) | text layer: found | Ipratropium bromide nebuliser 0.5 mg stat |
| 29 | p xiii (PDF 17) | text layer: found | Controlled oxygen: target saturation 93 to 95% |
| 30 | p38 (PDF 57) | text layer: found | Oxygen saturation of ≥94% should be maintained in all hypoxic asthma patients. |
| 31 | p39 (PDF 58) | text layer: found | In severe and life-threatening exacerbations, continuous delivery of nebulised oxygen-driven β2-agonists should be used. |
| 32 | p41 (PDF 60) | text layer: found | A single dose of 2 g intravenous magnesium sulphate infusion over 20 minutes should be considered in acute severe and life-threatening asthma. |
| 33 | p41 (PDF 60) | text layer: found | Oxygen saturation levels of <90% indicates the need for aggressive management. Saturation should be assessed before oxygen is commenced or five minutes after oxygen is removed or when saturation stabilises. |
| 34 | p42 (PDF 61) | text layer: found | A PaO2<60 mmHg and a normal or increased PaCO2 (especially >45 mmHg) indicates respiratory failure. |
| 35 | p42 (PDF 61) | text layer: found | Monitor continuously or at least every 15 – 30 minutes, including SpO2, respiratory rate, heart rate and blood pressure. |
| 36 | p42 (PDF 61) | text layer: found | A rising or normal PaCO2 may indicate impending respiratory arrest. |
| 37 | p42 (PDF 61) | text layer: found | use of more than eight SABA puffs in previous 24 hours |
| 38 | p43 (PDF 62) | text layer: found | The follow-up plan should include a referral letter to a clinic for the patient to be seen within seven days. |
| 39 | p50 (PDF 69) | text layer: found | Oxygen saturation should be maintained between 94 and 98%. |
| 40 | p50 (PDF 69) | text layer: found | In patients who are on prednisolone exceeding 7.5 mg/day for more than 2 weeks prior to delivery, IV hydrocortisone 100 mg every 6 to 8 hours should be administered during labour to prevent adrenal insufficiency. |
| 41 | p4 (PDF 23) | text layer: found | It should be monitored at 1-hour post treatment and at regular intervals until a clear response has occurred or a plateau is reached. |
| 42 | p25 (PDF 44) | text layer: found | inhaled SABA overuse (≥3 canisters/year) should be avoided |
| 43 | p11 (PDF 30) | text layer: found | Short-acting β2-agonist should always be taken together with inhaled corticosteroids. |
| 44 | p11 (PDF 30) | text layer: found | Consider a short-term step up (for 1 - 2 weeks) with Asthma Action Plan (AAP) in situations with identifiable triggers e.g. during viral infection or allergen exposure. |
| 45 | p35 (PDF 54) | text layer: found | a selective COX2 inhibitors (e.g. celecoxib or etoricoxib) and paracetamol may be used as an alternative. |
| 46 | p35 (PDF 54) | text layer: found | However, cardio-selective β-blockers are not absolutely contraindicated as it has not been shown to affect FEV1 or asthma exacerbation in mild to moderate asthma. |
| 47 | p9 (PDF 28) | text layer: found | night-time awakening of ≥1 night per week AND FEV1 <80% of predicted or LLN |
| 48 | p xi (PDF 15) | text layer: found | Night-time awakening ≥ 1 a week OR FEV1 <80% of predicted or LLN |
| 49 | p xi (PDF 15) | text layer: found | Well-controlled asthma as defined by ACT ≥20 or 'NO' to all GINA questionnaire |
| 50 | p xi (PDF 15) | text layer: found | Reassess asthma symptoms at 3 - 6 months |
| 51 | p xii (PDF 16) | text layer: found | *maximum total dose 12 puffs/day |
| 52 | p27 (PDF 46) | text layer: found | 200 - 500 >500 - 1000 >1000 100 - 200 >200 - 400 >400 200 - 400 >400 - 800 >800 80 - 160 >160 - 320 >320 200 100 - 250 >250 - 500 >500 100 - 250 >250 - 500 >500 100 (Table 7 cells in reading order) |
| 53 | p56 (PDF 75) | text layer: found | It should be either single patient use or autoclaved if manufacturer permits. |
| 54 | p73 (PDF 92) | text layer: found | Inhaler techniques must be checked and corrected, if necessary, at every single opportunity. |
| 55 | p40 (PDF 59) | text layer: found | The suggested daily dose of prednisolone ranges from 0.5 to 1 mg/ kg of the ideal body weight with a maximum of 50 mg daily or 200 mg of intravenous hydrocortisone in divided doses. This dosage should be maintained for 5 to 7 days and can be stopped without gradual reduction. |
| 56 | p41 (PDF 60) | text layer: found | It should be considered for patients with PEFR <50% or those who do |
| 57 | p71 (PDF 90) | page image (outlined text, no text layer) | PEFR: ____ to ____l/min (80% to 100% of personal best) |
| 58 | p71 (PDF 90) | page image | PEFR: ____ to ____l/min (50% to 79% of personal best) |
| 59 | p71 (PDF 90) | page image | PEFR: Below ____l/min (less than 50% of personal best) |
| 60 | p71 (PDF 90) | page image | Take 2 to 4 inhalations every 20 minutes for a total 3 times and assess symptoms |
| 61 | p71 (PDF 90) | page image | lengthen interval to every 3 – 4 hours as needed |
| 62 | p71 (PDF 90) | page image | Need to use reliever more frequently than every 4 hours |
| 63 | p71 (PDF 90) | page image | Proceed to nearest hospital or clinic or dial 999 IMMEDIATELY |
| 64 | p71 (PDF 90) | page image | With spacer – increase dose up to 10 inhalations every 20 minutes |
| 65 | p71 (PDF 90) | page image | Without spacer – take 2 inhalations every 5 minutes |
| 66 | p72 (PDF 91) | page image | Take one inhalation as needed (Maximum 12 inhalations a day including controller dose) |
| 67 | p72 (PDF 91) | page image | Need to use reliever more than every 4 hours |
| 68 | p72 (PDF 91) | page image | PEFR: Below_____l/min (less than 50% of personal best) |
| 69 | p72 (PDF 91) | page image | Take one inhalation every 1 to 3 minutes up to 6 inhalations (Maximum 12 inhalations a day including controller dose) |
| 70 | p73 (PDF 92) | page image | When not used for 5 – 7 days |
| 71 | p74 (PDF 93) | page image | Inhale and exhale slowly 5 times through mouth |
| 72 | p74 (PDF 93) | page image | hold breath for 5 - 10 seconds or as long as comfortable |
| 73 | p74 (PDF 93) | page image | Wait 30 - 60 seconds before repeating |
| 74 | p74 (PDF 93) | page image | Clean spacer once a week |
| 75 | p79 (PDF 98) | page image | Salbutamol 100 µg/dose inhaler, pMDI |
| 76 | p79 (PDF 98) | page image | For relief of acute bronchospasm, 1 to 2 inhalations |
| 77 | p79 (PDF 98) | page image | Salbutamol 100 and 200 µg/dose inhaler, Easyhaler® (DPI) |
| 78 | p79 (PDF 98) | page image | For relief of acute bronchospasm, 1 inhalation as a single starting dose; may be increased to 2 inhalations if necessary |
| 79 | p85 (PDF 104) | page image | Ipratropium bromide 0.0125% nebulising solution (125 µg/ml) |
| 80 | p85 (PDF 104) | page image | Ipratropium bromide 0.025% nebulising solution (250 µg/ml) |
| 81 | p85 (PDF 104) | page image | 500 µg; repeated doses can be administered (4 to 6 hourly) |
| 82 | p85 (PDF 104) | page image | Recommend to dilute the drug solution dose to a final volume of 4 – 5 ml in jet nebuliser |
| 83 | p86 (PDF 105) | page image | Daily doses exceeding 2 mg should only be given under medical supervision |
| 84 | p86 (PDF 105) | page image | Salbutamol 0.5 % nebulising solution |
| 85 | p86 (PDF 105) | page image | 2.5 to 5 mg every 20 minutes for the first hour (3 doses), then 2.5 to 10 mg every 1 to 4 hours as needed, or 10 to 15 mg/hour by continuous nebulisation |
| 86 | p86 (PDF 105) | page image | Ipratropium bromide 0.5 mg and salbutamol 2.5 mg/unit dose vial (UDV) |
| 87 | p86 (PDF 105) | page image | 1 UDV every 4 to 6 hours |
| 88 | p86 (PDF 105) | page image | unless the nebulizer is specifically designed for a small fill volume |

Rows 57 to 88: the text is drawn as vector outlines, so PyMuPDF has nothing to read. Each was read from a page image rendered at 230 to 500 dpi (rotated upright for the landscape tables of Appendices 6 and 9), with the dash glyphs zoomed: "3 – 4", "5 – 7" and "4 – 5" are en dashes; "5 - 10" and "30 - 60" are hyphens. These rows rest on reading the image; no text layer confirms them.

---
