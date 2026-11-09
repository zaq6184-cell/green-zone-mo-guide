# ACS CPG, 1st edition: line-by-line review for the Green Zone MO Guide

**In the app since 9 Nov 2026** (Academy CPG round): the entry *ACS: CPG 1st edition* (`#acs-cpg`) beside the ebook's chest pain pathway, with five reference tabs (ECG, Troponin, Scores, Fibrinolysis, Advice). Its TIMI score for UA/NSTEMI is a scored step (`#acs-cpg--timi`), which the Obsess protocol check now links to; no separate calculator was built. The alteplase row is left out, as section (b) explains.

**Source:** *Clinical Practice Guidelines: Management of Acute Coronary Syndromes (ACS), 1st Edition*, 2026. Issued jointly by the Ministry of Health Malaysia, the National Heart Association of Malaysia (NHAM) and the Academy of Medicine Malaysia (disclaimer, p1). Published by NHAM; MOH/P/PAK/613.25(GU) - e; eISBN 978-967-11794-9-9. 223 PDF pages.
**File reviewed (read-only):** `C:\Users\user\Documents\Codex\2026-11-09\dedicated-loop-would\outputs\AMM Clinical Practice Guidelines\Cardiovascular Disease\2026 - Management of Acute Coronary Syndromes (1st Edition) [1171].pdf` (a working copy was made in the scratchpad; the original was not touched).
**Copyright (PDF page 2):** "The owners of this publication are the National Heart Association of Malaysia (NHAM) and the Academy of Medicine Malaysia." Content may be reproduced "provided that a copyright acknowledgement to the owners is included and the content is not changed in any form or method, not sold and not used to promote or endorse any product or service", and not used in any inappropriate or misleading context. The acknowledgement in `refs` names NHAM and the Academy of Medicine Malaysia, not MaHTAS.
**Rule 3:** the Director General's message (p2) is signed by Datuk Dr. Mahathar B Abd. Wahab. It is the page that says the CPG follows the STEMI CPG (4th ed., 2019) and the NSTEMI CPG (3rd ed., 2021). It is cited here as a source only and nothing from it is quoted in the draft; the draft's "joins the STEMI and NSTE-ACS guidelines" comes from the Rationale (p8).
**Reviewed:** 9 Nov 2026, from the PyMuPDF text layer of every page (dumped and normalised per page), with page images for every table, flowchart and threshold page used: Flowcharts 3, 5 and 6 (both copies), Tables 1, 4 to 8, 16, 18, 21, 25, 26, Key Recommendations pages 25, 26 and 28, section 7.1 (p93), the HEART-stratum page (p86) and Appendices II, III, IV, V, IX and X.

## Page numbers

| What | PDF pages | Printed |
|---|---|---|
| Cover, copyright | 1 to 2 | unnumbered |
| Statement of intent to acknowledgements | 3 to 222 | 1 to 220 (**printed = PDF − 2** throughout, front matter included) |

There are no roman-numeral pages. Some pages carry the number only at the foot (for example PDF 22, 41, 46, 48). PDF 138 prints a stray "86" at the top of the page; its foot reads 136, which fits the offset. Pages are cited here and in the draft as "p93".

---

## (a) The CPG chapter by chapter

| Part | Printed pages | What matters to the ED | In the draft? |
|---|---|---|---|
| Statement of intent, review, disclaimer | 1 | "issued in 2026 and will be reviewed in 2031"; not legally binding; independent clinical judgement. | `refs` |
| DG's message | 2 | Follows STEMI 2019 and NSTEMI 2021. Signed by Datuk Dr. Mahathar. | No (rule 3: cited only) |
| Panel, reviewers, contents | 3 to 7 | ED physicians are on the panel and among the reviewers. | No |
| Rationale, objectives, process, PICO, target group | 8 to 13 | Joins the STEMI and NSTE-ACS CPGs (p8). Literature to 31 Aug 2025 (p9). **Target population: "All patients (18 years and older) presenting with chest pain" (p12).** Target group includes medical officers and emergency physicians (p12). Specialist hospitals should measure troponin, preferably hs-cTn; troponin should replace "cardiac enzymes" (p12). | Target population in the `menu` hint |
| Grades, glossary, what is new | 14 to 18 | Grading (I, IIa, IIb, III; A, B, C). | No |
| Key messages and key recommendations | 19 to 32 | Same content as the chapters, but **numbered differently**: see (b).27. | Quoted by page |
| Flowcharts and tables | 33 to 48 | Table 1 (public and PHP), Flowcharts 1 to 6, Tables 2 to 12. | FC2 (`cat`), FC3 (`stemi`), **FC6 (rule-out, 14 nodes)**, Tables 4, 8, 9 (nodes), Table 7 (Scores tab), Table 2/25 (`ons`), Table 1 (Advice tab). Not: Table 3 (lysis protocol for designated health centres), Tables 5 and 6 (STEMI prognosis), Tables 10 to 12 |
| 1 Introduction | 49 to 51 | NCVD-ACS mortality; networks lacking outside the Klang Valley (p51). | No |
| 2 Pathogenesis and definition | 52 to 56 | Definition of MI (rise and/or fall of troponin above the 99th percentile URL plus one of four criteria), STEMI definition, reinfarction (28 days), UA versus NSTEMI, OMI/NOMI terminology; about 50% of OMI have no ST elevation (p60). | MI definition (Troponin tab); OMI (`omi`) |
| **3 Diagnosis** | 56 to 70 | 3.1 history: Table 16, chest pain equivalent (8-30% of ACS), atypical presentations, nitrate or PPI relief not diagnostic (p56). 3.2 examination. **3.3 ECG within 10 minutes of FMC (p59)**, contiguous leads, repeat at least every 15 minutes, V3R/V4R and V7-V9, aVR, LBBB no longer a STEMI equivalent, Tables 17 to 20. **3.4 biomarkers:** hs-cTn preferred; CK, AST, LDH not; timing of first and repeat samples; Table 21 deltas; "It is inappropriate to label cTn results as positive and negative" (p66); POC kits; rule in and rule out (p68–69); Table 22. 3.5 echo/POCUS, CT only for dissection or PE. | Yes: `tri`, `cat`, `omi`, `ro`, ECG and Troponin tabs |
| 4 STEMI networks | 70 to 75 | Hub, spoke and clinics; time targets (DIDO < 30 minutes, transfer < 60 minutes, door to needle < 30 minutes). | Time targets only (`ppci`, `l12`) |
| 5 Pre-hospital | 75 to 82 | Public: five symptoms, 999, do not drive, chew 300 mg aspirin, GTN for known CHD, PDE-5 warning (Table 1, p76–77). PHP: aspirin 300 mg + clopidogrel 300 mg (75 mg if > 75 years), GTN if SBP > 90, oxygen above 94%, morphine 3-5 mg + metoclopramide 10 mg (p78–79). Kelantan TNK programme (p80). | Advice tab; the doses as cross-checks in `rxw`, `rxo`, `rxci` |
| **6 ED part 1** | 82 to 92 | **6.1 triage: chest pain or suggestive ECG needs at least a monitored (YELLOW, MTS 3) or critical (RED, MTS 1 and 2) zone (p82); Key Recommendation #8: suspected ACS "should NOT be triaged to a green/non-critical zone" (p26, p92).** ECG within 10 minutes of arrival, repeat every 15 minutes (p83). 6.2.1 STEMI to RED (p83). 6.2.2 definite NSTE-ACS admit; possible NSTE-ACS to the rule-out pathway (Flowchart 6); ESC 0/1 h and 0/3 h pathways; HEART and TIMI (p84–88); 1.6-3.3% missed by HEART (p88); indeterminate group (p88–89). 6.2.3 non-coronary causes (p89). 6.3 risk scores (p89–91); bleeding scores (p91). | Yes, the core of the draft. Bleeding scores not included |
| **7 ED part 2** | 93 to 102 | **7.1 general measures and first drugs (p93).** 7.2.1 STEMI: primary PCI versus fibrinolysis (Table 25, p95), fibrinolysis (DNT within 30 minutes, golden hour, post-lysis anticoagulant, p96), Table 26 (p97), special circumstances (p97–98), reperfusion indicators (p98–99), failed lysis to rescue PCI (p99). 7.2.2 NSTE-ACS timing and drugs (p99). | `rx`, `rxw`, `rxn`, `rxs`, `ons` to `vl`, Fibrinolysis tab |
| 8 Pharmacotherapy | 103 to 115 | Aspirin (reload if on aspirin; no enteric-coated loading), PPI indications, aspirin allergy options, clopidogrel default locally, no routine CYP2C19 testing, pre-treatment, DAPT duration, GP IIb/IIIa, anticoagulants (PCI, post-lysis, medically treated NSTE-ACS 2-8 days), OAC combinations, high-intensity statin "preferably in ER", oral β-blocker if SBP > 120, no i.v. β-blocker, nitrate contraindications, immediate-release nifedipine contraindicated, RAAS, MRA, SGLT2, colchicine. | ED-relevant parts in `rx`, `rxn`, `rxs`, `rxci`. Inpatient and long-term parts not |
| 9 PCI | 116 to 122 | Primary, rescue (1 to 2 hours after failed lysis), pharmaco-invasive (2 to 24 hours); > 75 years: clopidogrel loading omitted (p117); NSTE-ACS timing; technical. | p117 in `rxo`; rest summarised only |
| 10 CCU | 122 to 123 | Oxygen > 94%; routine oxygen may not help normoxaemic patients; morphine 5-10 mg, withheld if SBP ≤ 90. | `rxci`, `rxw` hint |
| 11 Complications; 12 CABG; 13 in-hospital risk | 123 to 136 | Arrhythmias, shock, mechanical complications, RV infarct, LV thrombus; NCORT algorithms (p157–160). | No (outside the Green Zone; ACLS is elsewhere in the guide) |
| 14 Special populations | 137 to 145 | Women: lower troponin values, sex-specific cut-offs, up to 40% of women with MI report no chest pain. Older persons: atypical presentations, almost 40% of those ≥ 75 with MI have no chest pain, baseline troponin raised in 22%, TNK 50% if > 75, clopidogrel loading individualised, enoxaparin 0.75-1.0 mg/kg. CKD: serial troponin, repeat at 3-6 hours, fondaparinux avoided if CrCl < 30. | `rxo`, `rxn` gap, Troponin tab |
| 15 Cardiac rehab; 16 post discharge; 17 audit | 145 to 156 | Discharge checklist (Table 31), TRS2P (Table 30), Family Medicine follow-up after an ACS admission. | No (after an admission, not an ED discharge) |
| 18 Algorithms | 157 to 160 | NCORT cardiac arrest, tachycardia, bradycardia. | No |
| Appendices | 161 to 180 | I SOCRATES; II TIMI for STEMI; **III HEART**; **IV TIMI for UA/NSTEMI**; V GRACE (6-month post-discharge card); VI non-ischaemic troponin rises; VII PRECISE-DAPT; VIII ARC-HBR; **IX fibrinolysis contraindications**; X drug tables; XI cardiac rehab. | III (`heart`), IV (`timi`), VI (part), IX (Fibrinolysis tab), X (doses in `rxn`, gaps). II, V, VII, VIII, XI not |
| References, acknowledgements | 181 to 220 | Ref 8 (HEART), ref 9 (TIMI UA/NSTEMI), ref 10 (GRACE). | HEART and TIMI refs in `refs` |

No Bahasa Melayu text is printed anywhere, so there is **no `leaflet`**. Table 1's public messages (English only) are in the Advice tab, labelled as a public message, not a discharge leaflet.

---

## (b) Points inside the CPG: where its algorithms, text and tables disagree or leave a gap

Each was checked on the page image unless marked "text layer".

**Troponin and the rule-out (Flowchart 6)**
1. **Single hs-cTn timing, three values:** "at least 2-3 hours after the onset of symptoms" (Key Recommendations #3, p24 and p70); "at least 3 hours" (3.4.1.1, p67); "hs-cTn measured > 2 hours from symptom onset" (Flowchart 6, p41 and p87).
2. **Repeat interval:** "1-2 hours later (for hs-cTn) or 3-6 hours later (for cTn)" (p24, p67, p70) against Flowchart 6 "Repeat cTn 3 hours later or hs-cTn 2 hours later". In CKD, "repeat measurements be performed at 3-6 hours or even longer intervals" (p142).
3. **Both onset boxes of Flowchart 6 print "cTn measured > 6 hours"** (p41 and p87): the box that leads to the repeat should logically read under 6 hours. As printed, the flowchart has no route for a conventional cTn taken under 6 hours. The draft sends that case to `cgap`, a step that says "Not in the source" and quotes Key Recommendations #3 ("may be repeated ... 3-6 hours later (for cTn)"), then on to the repeat (`crep`).
4. **The rule-in delta:** "> 50% change" (Flowchart 6, p41) against "≥ 50% change" (Flowchart 6, p87); footnote "a change of at least 50% is required" (both copies); Table 17 note "a change of 50-60% is necessary" (p61); Table 21 "> URL + > 50% from baseline" (p65). For a baseline above the URL: "> 20%" (Flowchart 6, Table 17, Table 21, p68).
5. **Combinations Flowchart 6 does not place:** after the repeat it places only "> 99th percentile and ≥ 50% change" (admit) and "< 99th percentile and < 50% change" (to the score). A value exactly at the 99th percentile, or taken exactly at 2 or 6 hours, is also not placed. Table 9 (p45) covers part of the gap ("Elevated cTn /hs-cTn levels but without a significant rise and/or fall"; "equivocal results"). Draft: `tmix` quotes Table 9 and does not choose.
6. **A first value above the 99th percentile goes straight to ADMIT** in Flowchart 6, without a repeat, while MI needs "a rise and/or fall" (p52) and Table 9 puts a raised but flat troponin in the indeterminate group. Quoted in `tadm` with the gap.
7. **Pain and score grouping:** "Pain free and HEART score ≤ 3 or TIMI for UA/NSTEMI score 0 or 1" against "Still having pain and/or HEART score > 3 or TIMI ... ≥ 2". The footnote ("If cTn use HEART ... for hs-cTn use modified HEART score or TIMI") implies pain free AND one score; the draft reads it that way and says so.
8. **Typing slips in Flowchart 6:** p41 prints "hs-sTns" and "hs-sTn" (p87 prints hs-cTn); both print "counsult". Quoted as printed in `dch`.
9. **Troponin kinetics:** "Troponins rise within 3-4 hours of the onset of MI" and hs-cTn "detected 1-2 hours after onset" (p65); Table 22 gives hs-troponin first detection at "2-4 hours" (p69).
10. **"It is inappropriate to label cTn results as positive and negative" (p66)**, while Flowchart 6 and the ebook work in above/below or positive/negative.

**Risk scores**
11. **TIMI 2:** Appendix IV (p164) "Low Risk: ≤ 2 point" and Table 7 (p43) "0 - 2"; Flowchart 6 discharges only "TIMI for UA/NSTEMI score 0 or 1" and sends "≥ 2" to the indeterminate group. p88 explains: "modifications have been studied including using a cut off from 0 or 1 for low risk".
12. **HEART, exactly 3 risk factors:** Appendix III (p163) scores "> 3 Risk Factors* or h/o atherosclerotic disease**" as 2 and "1 - 2 Risk Factors" as 1. Three risk factors is in no row. The row is also labelled "History", like the first row.
13. **HEART high band:** p86 prints "7: High risk" (no ≥; checked on the image), Table 7 "≥ 7", Appendix III "High Risk (7 - 10)".
14. **HEART undefined grades:** "Highly / Moderately / Slightly suspicious" history and "Significant ST segment depression / Non specific repolarization disturbances" are not defined anywhere in the CPG; the troponin row uses "x normal" and "normal limit", while the rest of the CPG uses the 99th percentile URL. "The HEART score is the commonest risk score used in our EDs although there have been no validation studies in our local population" (p85).
15. **GRACE:** Table 4 uses "GRACE score > 140" and "GRACE risk score 109 - 140" without naming the model; Table 7 has two GRACE 1.0 columns (6-month death: > 118, 89 - 118, ≤ 88; in-hospital mortality: > 140, 109 - 140, ≤ 108). Appendix V (p165) prints only the **6-month post-discharge** card, and its systolic-pressure bands **overlap** ("100 - 139.9 ... 18" and "120 - 139.9 ... 14") with a stray "1" below "≥ 200". Creatinine is in mg/dL. The draft does not reproduce the card.
16. **TIMI for STEMI:** Table 5 (p43) "Low Risk 0 - 2, Intermediate 3 - 4, High > 5" leaves a score of 5 unplaced; Appendix II (p162) says "5 points and below" is low and moderate and "6 points and above" is high.
17. **Citation slip:** Appendix IV (TIMI UA/NSTEMI) cites reference 6, the TIMI score for STEMI; Table 7 cites reference 9 (Antman 2000) for the same score.
18. **TIMI is endorsed with reservations:** "The TIMI score, although commonly used, was not designed for application to undifferentiated patients presenting with chest pain" and "the HEART score outperformed the TIMI and GRACE scores in predicting 30-day MACE" (p88).

**Drugs**
19. **Oxygen:** "≥ 94%" (7.1, p93); "> 94%" (Key Recommendations #6, p25; 10.2, p122); "above 94%" (p79); Flowchart 3 "Oxygen [if oxygen saturation (SpO2) < 94%]" (p36); "Routine supplemental oxygen administration may not be beneficial or harmful ... in normoxemic patients" (p123).
20. **Alteplase (Table 26, p97): "0.75mg/kg i.v. over 30 min (up to 5 mg)"**, checked on the image. A 5 mg ceiling on 0.75 mg/kg would cap the dose of anyone over about 6.7 kg, so it cannot be what is meant; the CPG gives no other alteplase dose. The draft leaves the alteplase row out and says why. Not corrected from memory (rule 8).
21. **GTN:** "if SBP ≥ 90mmHg" (7.1, p93) against "if SBP is > 90mmHg" (p25, p81) and "more than 90mmHg" (p79). Tablet "0.3-0.6mg" (p93) against "0.5 mg" (Appendix X, p174). PDE-5 window: "within the last 24 to 48 hours" (p25, p79), "within 48 hours" (p77; Appendix X, p174), "(24-48 hours, depending on the agent's half-life)" (p112).
22. **Morphine:** "3-5mg slow bolus every 5-15 minutes, titrated" (p93); "(3-5 mg)" (p79); "iv Morphine 5-10mg" (p123). Withheld if "SBP ≤ 90mmHg" (p123).
23. **Clopidogrel over 75 years, four wordings:** "Loading dose is 75mg if > 75 years of age" (p25, p78, unconditional); "75mg of clopidogrel (> 75 years of age)" with fibrinolysis (p28, p101) and "75 mg if > 75 years and fibrinolysis is given" (Appendix X, p170); "the loading dose of clopidogrel is omitted" for > 75 years in a pharmaco-invasive strategy (p117); "The need for a loading dose must be individualized" (p141). 7.1 (p93) does not mention age.
24. **Who gets clopidogrel at once:** Key Recommendations #6 (p25) gives aspirin and clopidogrel "as soon as the diagnosis of ACS is suspected" to all patients suspected of cardiac pain; Table 1 (p33) gives them "If STEMI or definite NSTE-ACS".
25. **Ticagrelor:** Key Recommendations #12 (p29, p102) offers "180mg ticagrelor" to all NSTE-ACS; 7.1 (p93) "Ticagrelor 180mg (only for PCI)"; Table 10 (p46) "(not for patients undergoing fibrinolysis)".
26. **Anticoagulants:** UFH "60U/kg bolus (maximum of 4000U) ... 12U/kg with a maximum of 1000U/h ... aPTT: 1.5 to 2.0 x control" (p28, p96) against Appendix X "IV bolus 70-100U/kg ... aPTT of 60-80s" (p170), with no indication given for either. Enoxaparin ≥ 75 years: "no bolus, 0.75mg/kg s.c. bid" (p28, p96, p107) against "0.75-1.0mg/kg twice daily" (p141). Fondaparinux in CKD: "avoided in patients with CrCL < 30mL/minute" (p144) against "Not recommended if CrCl < 20mL/min" (Appendix X, p170).
27. **Tenecteplase in older persons:** "reduce to half dose in patients ≥ 75 years of age" (Table 26, p97) against "50% of the recommended dose in those > 75 years of age" (p140).

**STEMI and reperfusion**
28. **Primary PCI time targets:** Key Recommendations #9 counts "FMC to wire crossing ≤ 90 minutes" at a PCI centre and "≤ 120 minutes" if transferred (p26–27); Table 25/Table 2 count from "STEMI diagnosis" (p39, p95); 9.1.1 says "within 120 min of STEMI diagnosis" and "< 2 hours of symptom onset" (p116); Flowchart 5 (p38) gives a self-presenting patient "DBT: <60 mins". Door to needle: "≤ 30 minutes" (p26, p100), "< 30 minutes" (p74, p80), "within 30 minutes" (p96), and "The goal is 10 minutes from FMC to initiation of fibrinolysis" (p74).
29. **Pharmaco-invasive window:** "2-24 hours" (p26, p37, p38, p40, p79, p117) against Flowchart 3 "Consider PCI within 3-24 hours" (p36).
30. **Table 25 time bands** overlap at 3 hours ("within 3 hours" and "3 to 12 hours") and leave exactly 24 hours out ("> 12 hours < 24 hours" and "> 24 hours").
31. **ST elevation:** "ST elevation of > 1 mm in 2 contiguous leads" (Key Messages, p20 and p53) against "a minimum of 0.1mV" (Table 17, p61) and "≥ 0.1 mV" (Table 18, p62). Table 18 gives the right-sided leads in mm ("≥ 0.5 mm (≥ 1 mm in men < 30 years old)") and the rest in mV.
32. **Appendix IX:** absolute "Recent major surgery trauma/head injury within the preceding month" against relative "Recent major surgery < 3 weeks"; relative "Severe refractory hypertension on presentation (SBP > 180/110mmHg)" puts a diastolic value under SBP. Streptokinase re-use: Appendix IX "Prior exposure (> 5 days and within 12 months of first usage)" against Table 26 "less effective if given between 3 days and 1 or even 4 years after the first administration".

**Cross-references, numbering and typing slips (text layer and images)**
33. Table 1 (p33) points to "Table 4, pg 38" (Table 4 is p42) and to "STEMI- section 4.2.1 / NSTE-ACS- section 4.2.2" (those are network sections; p78 repeats it). Flowchart 2 (p35) sends non-coronary chest pain to "Section 5.2.3" (it is 6.2.3). 6.3.1 (p90) cites Table 6 for TIMI-STEMI and GRACE and Table 5 for Killip (they are Tables 5, 7 and 6). 9.2.1.1 (p120) cites "table 6, pg 43" for high-risk criteria (Table 4, p42). 16.2 (p152) cites "section 14.2" (13.2).
34. Key Recommendation and Key Message numbers differ between the front section and the chapters: NSTE-ACS is #10 on p27 but #11 on p102; STEMI pharmacotherapy #11 on p28 but #10 on p101; "Initial Assessment" is Key Message #7 on p20 and #8 on p92. The draft cites #3, #6, #8, #9 and #12, which agree in both places, and cites the others by page.
35. Other slips: "Unstable Agnina" (Flowchart 1, p34), "Medial Therapy" (Flowchart 3, p36; quoted in the review only), "in -house" (p83, quoted as printed), "Patent awareness programs" (p73), a stray "86" on PDF 138.

**Gaps that matter to the Green Zone**
36. **Key Recommendation #8 (p26, p92) and 6.1 (p82):** a patient with chest pain suspected of ACS "should NOT be triaged to a green/non-critical zone"; 6.1 goes further: "If chest pain is present, and/or there are clinical features and/or ECG changes suggestive of ischemic pain, they require at least a monitored ... zone". The CPG does not say where the rule-out (Flowchart 6) is run, beyond "observed in the observational area of the ED" for the indeterminate group (p45).
37. **No follow-up interval for an ED discharge:** "early outpatient cardiology (in the absence of cardiology- internal medicine) counsult" (Flowchart 6), "further cardiac investigations as outpatient" (Table 8), "an appointment in the cardiology or general medical outpatient clinic" (p89). No time frame, no discharge drugs and no return advice for a ruled-out patient.
38. **Indeterminate group:** admit, observe in the ED or refer for an early clinic (Table 9), with no criteria for choosing and no observation time.
39. **The 99th percentile URL is assay-specific** and the CPG gives no value; the department's own cut-off is a department note on the ebook pathway (not carried into the draft).
40. **Table 8 "Low Risk: ... Allow discharge"** depends on Table 4, whose High-Risk list includes "Rise or fall in cardiac troponins compatible with MI": the Low-Risk end can only be reached once the serial troponin is back. The draft says so in the `lo` gap.

---

## (c) The ebook `acs` pathway and the `obsess` calculator against this CPG

The ebook pathway (`P['acs']`, ebook p12–14) cites the STEMI CPG 2019 and the department's Obsess protocol. Its department notes (data2.js) add the Low Risk Chest Pain Protocol, ticagrelor loading and IJN referral. The `obsess` calculator (engine.js) ticks the ebook's seven Obsess criteria and links to MDCalc for TIMI because "the ebook does not list the TIMI items". Differences are listed, not resolved.

| Item | Ebook / department says | CPG says (page) |
|---|---|---|
| **Zone** | Not stated in the pathway. The department note says the ETT form and book are "at Yellow Obs". | Suspected ACS needs at least a monitored (YELLOW, MTS 3) or critical (RED, MTS 1 and 2) zone and "should NOT be triaged to a green/non-critical zone" (p26, p82, p92). STEMI needs RED (p83). |
| ECG timing | "Start with an ECG" (no time). Obsess: "Serial ECG". | Within 10 minutes of FMC/arrival, compared with old ECGs; repeat every 15 minutes if non-diagnostic; V3R-V4R, V7-V9 (p24, p59, p82–83). |
| STEMI route | Consult EP on the floor; IJN referral criteria, consent and acceptance; IJN hotline; else thrombolysis and CCU referral. | Primary PCI versus fibrinolysis by time from onset, contraindications and high risk (Table 25, p95); FMC or diagnosis to wire ≤ 90 (PCI centre) or ≤ 120 minutes (transfer: DIDO ≤ 30, transport ≤ 60, door to wire ≤ 30); > 120 minutes: lyse, then pharmaco-invasive PCI at 2-24 hours; DNT ≤ 30 minutes (p26–27). No IJN criteria. |
| Occlusion MI without ST elevation | Not covered. | Table 20 signs; Very-High-Risk (Table 4); BBB or pacing with ongoing pain: PCI strategy, no fibrinolysis (p94). |
| NSTE-ACS | Start ACS treatment, serial ECG, troponin T; raised: NSTEMI, CCU referral; not raised: unstable angina, admit medical ward. | Risk by Table 4 (p42) and disposition by Table 8 (p44): very high and high risk to a monitored bed/critical care with invasive strategy < 24-48 hours; intermediate: admit, invasive this admission; **low risk (no recurrence, no Table 4 criteria): "Allow discharge and carry out further cardiac investigations as outpatient"**. |
| Troponin reading | "Troponin T positive?"; department: "Trop T 14 ng/L or more is positive". | "It is inappropriate to label cTn results as positive and negative" (p66): use the local assay's 99th percentile URL, with age and sex limits (p24, p67), and the delta (Table 21, p65). Whether 14 ng/L is HKL's assay URL, and whether HKL's Trop T is an hs assay, is for the department (not inferred here). |
| Troponin timing | Obsess: onset < 2 h, Trop T at 2 h after onset (T=0) then 2 h later; 2-4 h, on arrival then 2 h later; > 4 h, a single test (T=4). | hs-cTn: single test at > 2 h (FC6), at least 2-3 h (p24) or 3 h (p67); repeat at 2 h (FC6) or 1-2 h (p24). cTn: single test at ≥ 6 h (p24, p67); repeat at 3 h (FC6) or 3-6 h (p24). If HKL's Trop T is an hs assay, the ebook repeats in the 2-4 h group where FC6 would go straight to the score; if it is conventional, the ebook's single test at > 4 h is earlier than the CPG's 6 hours. |
| **Risk score** | Obsess entry: "TIMI under 1" (TIMI 0); items not listed. Department discharge: "TIMI under 2". Ticagrelor note: "high-risk NSTEMI (TIMI 3 or more)". `obsess` links to MDCalc TIMI. | Flowchart 6: "HEART score ≤ 3 or TIMI for UA/NSTEMI score 0 or 1" with pain free; footnote: HEART with cTn, modified HEART or TIMI with hs-cTn. Prints the TIMI UA/NSTEMI items (Appendix IV, p164) and HEART (Appendix III, p163). Table 4: TIMI 3 & 4 intermediate, > 4 high (p42). |
| Obsess entry criteria | Over 18; TIMI under 1; no high-risk factor; no trauma; not pregnant; no malignancy or palliative care; no other pathology. | Population "18 years and older" (p12). The rule-out only "following exclusion of STEMI or other life-threatening conditions" (p84). No pregnancy, malignancy or palliative exclusions. |
| Aspirin | Obsess: "Start T aspirin 300 mg". | Aspirin 300mg chewable or soluble "if not taken prior" (p93); if already on 75-150 mg, an additional 300 mg (p77–78); no enteric-coated loading (p103). |
| Second antiplatelet | Raised troponin: load clopidogrel 300 mg (ebook); department: clopidogrel 300 mg plus enoxaparin 40 mg SC or fondaparinux 2.5 mg; ticagrelor 180 mg for listed high-risk groups with EP countersignature. | Clopidogrel 300 mg (600 mg if primary PCI) with aspirin as soon as ACS is suspected (p25, p93); NSTE-ACS 300-600 mg clopidogrel or 180 mg ticagrelor, pre-treatment advocated (p29); > 75 years: see (b).23. |
| Anticoagulant | Department: enoxaparin 40 mg SC or fondaparinux 2.5 mg. | Medically treated NSTE-ACS: s.c. LMWH or fondaparinux for 2-8 days (p29, p99); Appendix X: enoxaparin 1 mg/kg b.i.d., fondaparinux 2.5 mg/d (p170). The department's enoxaparin dose differs from Appendix X. |
| Nitrate, oxygen, analgesia, statin | Not in the pathway. | GTN, morphine or fentanyl, oxygen to ≥ 94%, high-intensity statin "preferably in ER" (p93, p109); cautions (p110–123). |
| Monitoring during observation | Obsess: vital signs hourly, pain score. | "Continuous cardiac monitoring with defibrillation capability" for ACS (p93). |
| Discharge | Obsess negative: "Allow discharge"; aspirin 150 mg od; follow-up at 30 days; stress test within 1 week; MAU FAST clinic with ECG copy. Department: after a negative ETT stop aspirin unless CAD risk is high. | FC6: "Discharge from ED with early outpatient cardiology (in the absence of cardiology- internal medicine) counsult"; "Rule out does not equate to discharge" (p69); 1.6-3.3% missed by HEART (p88). No discharge drug, interval or return advice. |
| Unstable angina | Admit medical ward. | Low risk may be discharged for outpatient tests (Table 8); intermediate risk admitted. |
| Patient advice | Six advice lines (compliance, smoking, diet, BMI under 25, TCA stat for symptoms, no illicit drugs). | Table 1 public messages (five symptoms, 999, aspirin, GTN for known CHD). Secondary prevention targets after ACS in Table 11 (BMI < 23 kg/m2), not for ruled-out patients. |
| `obsess` calculator | Reads the ebook's seven criteria; MDCalc link for TIMI. | The CPG now prints the TIMI items and points, so an in-app TIMI score can be built from a national source (see d.1). The ebook's "TIMI under 1" stays as written. |

**Can the CPG's risk approach sit with the Obsess protocol and TIMI?** Yes, in its structure, with three conditions for Krishna to decide.
- The CPG's own rule-out (Flowchart 6) accepts TIMI for UA/NSTEMI, but only with hs-cTn ("for hs-cTn use modified HEART score or TIMI UA/NSTEMI score"); with a conventional cTn it asks for HEART. Which assay HKL's Trop T is decides whether the department's TIMI-based protocol is inside the CPG.
- Thresholds: the department's discharge rule (TIMI under 2) is the CPG's (0 or 1). The ebook's Obsess entry (TIMI under 1) is stricter than the CPG, which is allowed; it sends TIMI 1 patients out of Obsess where the CPG would rule them out.
- Zone: the CPG says suspected ACS should not be in the Green Zone. If the Obsess protocol runs in Yellow Obs (as the ETT note suggests), there is no conflict; if Green Zone MOs run it in the Green Zone, Key Recommendation #8 says otherwise.
The CPG also prefers HEART ("commonest risk score used in our EDs"; outperformed TIMI in one cohort, p85 and p88). None of this changes the ebook pathway (rule 5); items 1 to 3 belong on the Still to confirm list.

---

## (d) Calculator candidates

A risk score is a candidate only where the CPG prints its items and points. Each number below is quoted with its page; every one was checked on the page image.

### d.1 TIMI risk score for UA/NSTEMI: **build first**
- **Source:** Appendix IV, p164 (image checked). "The TIMI risk score is determined by the sum of the presence of 7 variables at admission."
- **Inputs:** seven ticks, 1 point each: "Age 65 years or older"; "At least 3 risk factors for CAD" (Family history of premature CAD, Hypertension 140/90 or on antihypertensives, Low HDL cholesterol (< 40mg/dL), Current cigarette smoker, Diabetes mellitus); "Known CAD (coronary stenosis of ≥ 50%)"; "Use of aspirin in prior 7 days"; "ST - segment deviation (≥ 0.5mm) on ECG"; "At least 2 anginal episodes in prior 24 hours"; "Elevated serum cardiac biomarkers". "Total (possible) TIMI Risk Score for UA/NSTEMI Score : 7 points".
- **Outputs, each labelled with its source:** Flowchart 6 (p41, p87): with pain free and a troponin below the 99th percentile, "TIMI for UA/NSTEMI score 0 or 1" to "Discharge from ED ...", "TIMI ... ≥ 2" to the indeterminate group. Appendix IV: "Low Risk : ≤ 2 point; Moderate Risk : 3 - 4 points; High Risk : ≥ 5 points". Table 7 (p43): 0 - 2 (4.7 - 8.3%), 3 - 4 (13.2 - 19.9), ≥ 5 (26.2 - 40.9%), end point "All-cause mortality, MI and severe recurrent ischemia prompting urgent revascularization through 14 days". Table 4 (p42): "TIMI risk score 3 & 4" intermediate, "TIMI for UA/NSTEMI risk score > 4" high.
- **Where it must decline or flag:** at TIMI 2, show both labels (Low Risk in Appendix IV and Table 7, but not dischargeable by Flowchart 6) and do not choose. With a conventional cTn, say Flowchart 6 asks for HEART. The CPG does not define "Elevated serum cardiac biomarkers", "premature CAD" (age), or give the HDL cut-off in mmol/L: show "Not in the source" rather than convert. The ebook's "TIMI under 1" (Obsess entry) and the department's "TIMI under 2" belong to the `obsess` check, not to this calculator.
- **Fit:** Heart group (`cardio`). It could replace the MDCalc TIMI link in `CALC_LINKS`, whose note says the ebook does not list the items: the CPG now does. Facts: lines 1 to 15 of the calculator facts.

### d.2 HEART score: second, if Krishna wants it
- **Source:** Appendix III, p163 (image checked); strata p86 and Table 7.
- **Inputs (segmented, 0/1/2):** History: Highly suspicious 2; Moderately suspicious 1; Slightly suspicious 0. ECG: Significant ST segment depression 2; Non specific repolarization disturbances 1; Normal 0. Age: ≥ 65 years 2; > 45 - < 65 years 1; ≤ 45 years 0. Risk factors (printed as "History"): > 3 Risk Factors* or h/o atherosclerotic disease** 2; 1 - 2 Risk Factors 1; No known Risk Factors 0 (*currently treated diabetes mellitus, current or recent smoker, diagnosed and/or treated hypertension, diagnosed hypercholesterolemia, family history of coronary artery disease, obesity (body mass index >30); **coronary revascularization, myocardial infarction, stroke, or peripheral arterial disease). Troponins#: ≥ 3 x normal 2; >1 - < 3 x normal 1; ≤ normal limit 0 (# modified HEART: hs-cTn instead).
- **Outputs:** Appendix III "Low Risk (0 - 3) : Potentially can be discharged early with high confidence. Moderate Risk (4 - 6) : May require further evaluation and observation. High Risk (7 - 10) : Requires urgent or emergent intervention"; Flowchart 6 ≤ 3 against > 3; Table 7 ≥ 7 (72.7%), 4 - 6 (20.3%), 0 - 3 (2.5%).
- **Must decline:** **exactly 3 risk factors** (no row); it should not compute a total then. History and ECG grades are the clinician's call (no definitions). The troponin row needs the assay's "normal"; the calculator can only ask for the multiple, not compute it. Note p86's "7: High risk" without ≥.
- **Fit:** the guide left HEART out because the department uses TIMI (`CALC_LINKS` comment). The CPG asks for HEART when the troponin is conventional, so it matters only if HKL's Trop T is not an hs assay. Facts: lines 16 to 27.

### d.3 Flowchart 6 troponin helper: not now
- **Inputs:** assay (hs-cTn or cTn); hours from onset; first and repeat values; the laboratory's 99th percentile URL (typed in, not stored); pain free; the score.
- **Arithmetic:** change from baseline = (repeat − first) ÷ first × 100, read against Flowchart 6's footnote and Table 21 (p65: "> URL + > 20% from baseline" if the baseline is above the URL; "> URL + > 50% from baseline" if at or below).
- **Must decline:** cTn under 6 hours (b.3); exactly 2 or 6 hours; a value exactly at the URL; any combination other than the two Flowchart 6 places (b.5); a change of exactly 50% (> 50% on p41, ≥ 50% on p87, 50-60% in Table 17). The URL itself is not in the CPG.
- **Recommendation:** the pathway (`assay` to `heart`) already walks Flowchart 6; a delta calculator adds arithmetic but invites mixing the CPG with the department's 14 ng/L. Revisit once the department confirms its assay and URL.

### d.4 Tenecteplase by weight: list, do not build
- **Source:** Table 26, p97 (image checked): "Single i.v. bolus over 5 secs: 30mg (6000 U) if < 60kg; 35mg (7000 U) if 60 to < 70kg; 40mg (8000 U) if 70 to < 80kg; 45mg (9000 U) if 80 to < 90kg; 50mg (10 000 U) if ≥ 90 kg"; "reduce to half dose in patients ≥ 75 years of age".
- **Must decline:** at exactly 75 years ("≥ 75" in Table 26, "> 75" on p140).
- **Recommendation:** not a Green Zone drug; thrombolysis is the EP's (ebook) and HKL's own protocol is not in the guide. Not in the calculator facts.

### Not candidates
- **GRACE:** the printed card is the 6-month post-discharge model with overlapping SBP bands and mg/dL creatinine, while Table 4 needs the in-hospital score > 140 (b.15).
- **TIMI for STEMI:** printed (Appendix II), but its bands disagree with Table 5 (b.16), and STEMI prognosis is not a Green Zone decision.
- **Killip, PRECISE-DAPT (nomogram image), ARC-HBR, TRS2P:** inpatient or outpatient tools.
- **Post-lysis UFH and enoxaparin:** two UFH regimens and two enoxaparin doses for ≥ 75 (b.26).

---

## Open items for Krishna (suggested for Still to confirm)

1. Key Recommendation #8: suspected ACS "should NOT be triaged to a green/non-critical zone". Where the Obsess protocol is run, and whether Green Zone MOs keep walking chest pain patients, is the department's call.
2. HKL's troponin: is Trop T an hs assay, and is 14 ng/L its 99th percentile URL (with any age and sex limits)? This decides whether TIMI is the right score under Flowchart 6 and how the ebook's timings compare.
3. Flowchart 6's "cTn measured > 6 hours" in both boxes, the 50% wording, and the unplaced combinations (b.3 to b.6).
4. Clopidogrel loading over 75 years (four wordings), tenecteplase at 75, enoxaparin ≥ 75, fondaparinux CrCl 20 or 30, the two UFH regimens (b.23, b.26, b.27).
5. Alteplase "up to 5 mg" (b.20): ask the CPG secretariat or NHAM before any alteplase dose goes in.
6. Whether to build the TIMI calculator (d.1) and drop the MDCalc TIMI link.
7. The entry uses `hero:'acscpg'`. A still and loop for it would be paid generation (rule 2): Krishna's go-ahead first.

---

## (e) Every number in the draft, with the check

- **T: PDF n** means the segment was found verbatim on that PDF page (printed page = PDF − 2).
- **I: image** means the segment comes from a table or a two-column layout that the text layer interleaves; the numbers were read on the page image named.
- **own words** means a label, hint or gap I wrote; each number in it was checked by hand against the page it cites.
The TIMI points (1 for each of the seven items, p164) are numbers in the `items` arrays, checked on the image of Appendix IV.

Totals: 216 number-bearing segments, 133 found verbatim (T), 39 read on page images (I), 44 in my own wording.

| Where in the draft | Numbers | Check |
|---|---|---|
| `lead` | 10 min | own words; numbers checked against the cited page |
| `nodes.menu.hint` | 18 years | own words; numbers checked against the cited page |
| `nodes.menu.opts[0][0]` | 10 min | own words; numbers checked against the cited page |
| `nodes.tri.step` | 10 min | own words; numbers checked against the cited page |
| `nodes.tri.items[0]` | 10 min | T: PDF 85 |
| `nodes.cat.info[2]` | 50% / 25% / 24% / 19% | I: image p58 (PDF 60) |
| `nodes.omi.items[2]` | > 30 min | T: PDF 96 |
| `nodes.stemi.items[2]` | <12hours | T: PDF 28 |
| `nodes.stemi.items[3]` | < 94% | T: PDF 38 |
| `nodes.ons.hint` | 3 hours / 3 to 12 hours / 24 hours | own words; numbers checked against the cited page |
| `nodes.ons.opts[0][0]` | 3 hours | own words; numbers checked against the cited page |
| `nodes.ons.opts[1][0]` | 3 to 12 hours | own words; numbers checked against the cited page |
| `nodes.ons.opts[2][0]` | 12 hours | own words; numbers checked against the cited page |
| `nodes.e3.q` | 3 hours | T: PDF 41,96,97 |
| `nodes.e3.items[5]` | ≥ 75 years | T: PDF 97 |
| `nodes.e3.items[8]` | 60 min | T: PDF 41,97 |
| `nodes.ppci.items[1]` | < 12 hours | T: PDF 29,102 |
| `nodes.ppci.items[2]` | ≤ 90 min | T: PDF 28,102 |
| `nodes.ppci.items[2]` | ≤ 120 min | T: PDF 29,102 |
| `nodes.eq.items[0]` | 1 to 2 hours | T: PDF 98 |
| `nodes.eq.items[1]` | ≤ 30 min | T: PDF 28,102 |
| `nodes.eq.items[2]` | 2-24 hours | T: PDF 28,102 |
| `nodes.eq.gap` | 3-24 hours | own words; numbers checked against the cited page |
| `nodes.l12.items[0]` | 90 min | own words; numbers checked against the cited page |
| `nodes.l12.items[1]` | ≤ 120 min | T: PDF 41,97 |
| `nodes.l12.items[1]` | ≤ 30mins | T: PDF 97 |
| `nodes.l12.items[1]` | ≤ 60mins | T: PDF 97 |
| `nodes.l12.items[1]` | ≤ 30 min | T: PDF 28,29,97 |
| `nodes.l12.items[2]` | > 120 min | T: PDF 41,97 |
| `nodes.l12.gap` | 120 min | own words; numbers checked against the cited page |
| `nodes.vl.items[0]` | > 12 hours / < 24 hours | I: image p95 (PDF 97) |
| `nodes.vl.items[1]` | > 24 hours | I: image p95 (PDF 97) |
| `nodes.vl.gap` | 24 hours | I: image p95 (PDF 97) |
| `nodes.hrc.items[2]` | > 140 | T: PDF 44 |
| `nodes.hrc.items[3]` | > 4 | T: PDF 44 |
| `nodes.irc.items[1]` | < 40% | T: PDF 44 |
| `nodes.vh.items[1]` | < 24-48 hours | T: PDF 46 |
| `nodes.hi.items[1]` | < 24-48 hours | T: PDF 46 |
| `nodes.ro.items[2]` | 99th percentile | T: PDF 26,72 |
| `nodes.h0.hint` | 99th percentile | own words; numbers checked against the cited page |
| `nodes.h0.hint` | 99th percentile / 2 hours | own words; numbers checked against the cited page |
| `nodes.h0.opts[0][0]` | > 99th percentile | T: PDF 43,63,67 |
| `nodes.h0.opts[1][0]` | < 99th percentile / > 2 hours | own words; numbers checked against the cited page |
| `nodes.h0.opts[2][0]` | < 99th percentile / < 2 hours | own words; numbers checked against the cited page |
| `nodes.hrep.step` | 2 hours | own words; numbers checked against the cited page |
| `nodes.hrep.items[0]` | 3 hours / 2 hours | T: PDF 43,89 |
| `nodes.hrep.items[0]` | 1-2 hours / 3-6 hours | T: PDF 26,69,72 |
| `nodes.hrep.items[1]` | > 99th percentile / > 20% | T: PDF 43,89 |
| `nodes.hrep.items[1]` | ≤ 99th percentile / 50% | T: PDF 43,89 |
| `nodes.h2.hint` | > 50% / ≥ 50% | own words; numbers checked against the cited page |
| `nodes.h2.opts[0][0]` | > 99th percentile / ≥ 50% | T: PDF 89 |
| `nodes.h2.opts[1][0]` | < 99th percentile / < 50% | T: PDF 43,89 |
| `nodes.c0.hint` | 99th percentile | own words; numbers checked against the cited page |
| `nodes.c0.opts[0][0]` | > 99th percentile | T: PDF 43,63,67 |
| `nodes.c0.opts[1][0]` | < 99th percentile / > 6 hours | own words; numbers checked against the cited page |
| `nodes.c0.opts[2][0]` | < 99th percentile / 6 hours | own words; numbers checked against the cited page |
| `nodes.cgap.step` | 6 hours | own words; numbers checked against the cited page |
| `nodes.cgap.items[0]` | > 6 hours | own words; numbers checked against the cited page |
| `nodes.cgap.items[0]` | 3-6 hours | own words; numbers checked against the cited page |
| `nodes.cgap.items[0]` | 3 hours | own words; numbers checked against the cited page |
| `nodes.cgap.items[1]` | 6 hours | T: PDF 26,72 |
| `nodes.cgap.items[2]` | 1-2 hours / 3-6 hours | T: PDF 26,72 |
| `nodes.crep.step` | 3 hours | T: PDF 43,89 |
| `nodes.crep.items[0]` | 3 hours / 2 hours | T: PDF 43,89 |
| `nodes.crep.items[1]` | > 99th percentile / > 20% | T: PDF 43,89 |
| `nodes.crep.items[1]` | ≤ 99th percentile / 50% | T: PDF 43,89 |
| `nodes.c2.hint` | > 50% / ≥ 50% | own words; numbers checked against the cited page |
| `nodes.c2.opts[0][0]` | > 99th percentile / ≥ 50% | T: PDF 89 |
| `nodes.c2.opts[1][0]` | < 99th percentile / < 50% | T: PDF 43,89 |
| `nodes.timi.hint` | ≥ 2 | own words; numbers checked against the cited page |
| `nodes.timi.hint` | ≤ 2 | own words; numbers checked against the cited page |
| `nodes.timi.items[0][0]` | 65 years | T: PDF 166 |
| `nodes.timi.items[1][0]` | < 40mg/dL | T: PDF 166 |
| `nodes.timi.items[2][0]` | ≥ 50% | T: PDF 166 |
| `nodes.timi.items[3][0]` | 7 days | T: PDF 166 |
| `nodes.timi.items[4][0]` | ≥ 0.5mm | T: PDF 166 |
| `nodes.timi.items[5][0]` | 24 hours | T: PDF 166 |
| `nodes.timi.opts[1][0]` | ≥ 2 | T: PDF 43,89 |
| `nodes.heart.info[2]` | ≥ 65 years | T: PDF 165 |
| `nodes.heart.info[2]` | > 45 - < 65 years | T: PDF 165 |
| `nodes.heart.info[2]` | ≤ 45 years | T: PDF 165 |
| `nodes.heart.info[3]` | > 3 | T: PDF 165 |
| `nodes.heart.info[4]` | ≥ 3 x normal | T: PDF 165 |
| `nodes.heart.info[4]` | >1 - < 3 x normal | T: PDF 165 |
| `nodes.heart.info[5]` | >30 | own words; numbers checked against the cited page |
| `nodes.heart.opts[0][0]` | ≤ 3 | T: PDF 43,89 |
| `nodes.heart.opts[1][0]` | > 3 | T: PDF 43,89 |
| `nodes.tadm.items[1]` | 5-fold / > 90% | T: PDF 68 |
| `nodes.tadm.items[1]` | 3-fold / 50 - 60% | T: PDF 68 |
| `nodes.tadm.gap` | 99th percentile | own words; numbers checked against the cited page |
| `nodes.tmix.items[1]` | 99th percentile | T: PDF 70 |
| `nodes.tmix.gap` | > 99th percentile / ≥ 50% / < 99th percentile / < 50% | own words; numbers checked against the cited page |
| `nodes.dch.items[2]` | 1.6-3.3% | T: PDF 90 |
| `nodes.dch.gap` | 30 days | own words; numbers checked against the cited page |
| `nodes.rx.items[1]` | ≥ 94% | T: PDF 95 |
| `nodes.rx.items[4]` | 0.3-0.6mg / 0.4-0.8mg / 5 min / ≥ 90mmHg | I: image p93 (PDF 95) |
| `nodes.rx.items[5]` | 3-5mg / 5-15 min | T: PDF 95 |
| `nodes.rx.items[5]` | 10mg / 25mg | T: PDF 95 |
| `nodes.rx.items[6]` | 50mcg | T: PDF 95 |
| `nodes.rx.items[7]` | 300mg | T: PDF 95 |
| `nodes.rx.items[7]` | 300mg / 600mg | T: PDF 95 |
| `nodes.rx.items[7]` | 180mg | T: PDF 95 |
| `nodes.rx.items[8]` | 40-80mg / 20-40mg | T: PDF 111 |
| `nodes.rxw.hint` | ≥ 94% / > 94% / < 94% | own words; numbers checked against the cited page |
| `nodes.rxw.hint` | ≥ 90mmHg / > 90mmHg / 0.3-0.6mg / 0.5 mg | own words; numbers checked against the cited page |
| `nodes.rxw.opts[2][0]` | 75 years | T: PDF 142,216 |
| `nodes.rxn.items[0]` | 300 mg / 300-600mg / 180mg | T: PDF 31,104 |
| `nodes.rxn.items[1]` | 75-150mg / 75mg / 90mg | T: PDF 31,103,104 |
| `nodes.rxn.items[2]` | 2-8 days | T: PDF 31,101 |
| `nodes.rxn.items[3]` | 1 mg/kg | T: PDF 172 |
| `nodes.rxn.items[3]` | 2 days | I: image p170 (PDF 172) |
| `nodes.rxn.items[3]` | 1mg/kg | I: image p170 (PDF 172) |
| `nodes.rxn.items[3]` | 2.5 mg | I: image p170 (PDF 172) |
| `nodes.rxn.items[3]` | < 20mL/min | I: image p170 (PDF 172) |
| `nodes.rxn.gap` | 180mg | own words; numbers checked against the cited page |
| `nodes.rxn.gap` | < 30mL/minute / < 20mL/min | own words; numbers checked against the cited page |
| `nodes.rxs.items[0]` | 300mg / 75mg / > 75 years / ≤ 75 years | T: PDF 30 |
| `nodes.rxs.items[1]` | 60U/kg / 4000U | T: PDF 30 |
| `nodes.rxs.items[1]` | 12U/kg / 1000U/h / 24-48h | T: PDF 30,103 |
| `nodes.rxs.items[1]` | 1.5 to 2.0 x control | T: PDF 30,103 |
| `nodes.rxs.items[2]` | < 75 year / 30mg | T: PDF 30,98,103 |
| `nodes.rxs.items[2]` | 15 min / 1mg/kg | T: PDF 30,103,109 |
| `nodes.rxs.items[2]` | ≥ 75 year / 0.75mg/kg | T: PDF 30,98,103 |
| `nodes.rxs.items[2]` | < 30mL/min / 1mg/kg | T: PDF 30 |
| `nodes.rxs.items[2]` | 48 hours | T: PDF 31,98,103 |
| `nodes.rxs.items[3]` | 300 mg / 300 - 600mg / 180mg | T: PDF 31 |
| `nodes.rxs.gap` | 2.5mg | own words; numbers checked against the cited page |
| `nodes.rxs.gap` | 70-100U/kg / 60-80s | own words; numbers checked against the cited page |
| `nodes.rxo.items[0]` | 75mg / > 75 years | T: PDF 27,80 |
| `nodes.rxo.items[0]` | 75mg / > 75 years | I: image p25, p28, p170 (PDF 27, 30, 172) |
| `nodes.rxo.items[0]` | 75 mg / > 75 years | I: image p25, p28, p170 (PDF 27, 30, 172) |
| `nodes.rxo.items[1]` | > 75 years | T: PDF 119 |
| `nodes.rxo.items[2]` | > 75 years / 75mg | T: PDF 143 |
| `nodes.rxo.items[3]` | ≥ 75 year / 0.75mg/kg | T: PDF 30,98,103 |
| `nodes.rxo.items[3]` | 0.75-1.0mg/kg / ≥75 years | T: PDF 143 |
| `nodes.rxo.items[4]` | ≥ 75 years | I: image p97 (PDF 99) |
| `nodes.rxo.items[4]` | 50% / > 75 years | T: PDF 142 |
| `nodes.rxo.gap` | 75 years | own words; numbers checked against the cited page |
| `nodes.rxci.items[0]` | < 90mmHg | T: PDF 114,176 |
| `nodes.rxci.items[0]` | 24-48 hours | T: PDF 114 |
| `nodes.rxci.items[1]` | ≤ 90mmHg | T: PDF 125 |
| `nodes.rxci.gap` | 24 to 48 hours / 48 hours | own words; numbers checked against the cited page |
| `nodes.rxci.gap` | 3-5mg / 5-10mg | own words; numbers checked against the cited page |
| `notes[0].notes[0].src` | > 1 mm | own words; numbers checked against the cited page |
| `notes[0].notes[0].src` | 0.1 mV | own words; numbers checked against the cited page |
| `notes[0].notes[0].items[0]` | 0.1mV | T: PDF 63 |
| `notes[0].notes[0].items[0]` | 0.25mV / < 40 years / 0.2mV / 40 years / 0.15mV | T: PDF 63 |
| `notes[0].notes[0].items[1]` | > 1 mm / > 30 min | T: PDF 22,57 |
| `notes[0].notes[1].table.rows[0][2]` | ≥ 0.25 mV / < 40 years / ≥ 0.2 mV / ≥ 40 years / ≥ 0.15 mV | I: image p62 (PDF 64) |
| `notes[0].notes[1].table.rows[1][2]` | ≥ 0.1 mV | I: image p62 (PDF 64) |
| `notes[0].notes[1].table.rows[2][2]` | ≥ 0.05 mV / ≥ 0.1 mV / < 40 years | T: PDF 64 |
| `notes[0].notes[1].table.rows[3][2]` | > 30ms | T: PDF 64 |
| `notes[0].notes[1].table.rows[3][2]` | > 1 | T: PDF 64 |
| `notes[0].notes[1].table.rows[4][2]` | ≥ 0.1 mV | T: PDF 64 |
| `notes[0].notes[1].table.rows[5][2]` | ≥ 0.1 mV | T: PDF 64 |
| `notes[0].notes[1].table.rows[6][2]` | ≥ 0.1 mV | T: PDF 64 |
| `notes[0].notes[1].table.rows[7][2]` | ≥ 0.1 mV | T: PDF 64 |
| `notes[0].notes[1].table.rows[8][2]` | ≥ 0.5 mm / ≥ 1 mm / < 30 years old | I: image p62 (PDF 64) |
| `notes[0].notes[2].items[0]` | >3 | T: PDF 65 |
| `notes[0].notes[2].items[0]` | ≥ 6 mm | T: PDF 65 |
| `notes[0].notes[2].items[0]` | > 2 mm | T: PDF 65 |
| `notes[0].notes[2].items[0]` | ≥ 2 | T: PDF 65 |
| `notes[0].notes[2].items[2]` | > 1 | T: PDF 65 |
| `notes[0].notes[2].items[3]` | ≥ 2 mm | T: PDF 65 |
| `notes[0].notes[2].items[5]` | ≥ 1 mm / ≥ 1 | T: PDF 65 |
| `notes[0].notes[2].items[5]` | ≥ 1 mm / ≥ 1 | T: PDF 65 |
| `notes[0].notes[2].items[5]` | ≥ 1 / ≥ 1 mm / ≥ 25% | T: PDF 65 |
| `notes[1].notes[0].src` | 2-3 hours / 3 hours / > 2 hours | own words; numbers checked against the cited page |
| `notes[1].notes[0].items[0]` | 1-2 hours / 3-6 hours | T: PDF 26,72 |
| `notes[1].notes[0].items[1]` | 2-3 hours | T: PDF 26,72 |
| `notes[1].notes[0].items[1]` | 6 hours | T: PDF 26,72 |
| `notes[1].notes[0].items[2]` | ≥ 6 hours / < 99th percentile | T: PDF 69 |
| `notes[1].notes[1].src` | > 99th percentile / > 20% | T: PDF 43,89 |
| `notes[1].notes[1].src` | ≤ 99th percentile / 50% | T: PDF 43,89 |
| `notes[1].notes[1].src` | 50-60% | T: PDF 63 |
| `notes[1].notes[1].table.rows[0][0]` | > 99th percentile | T: PDF 63,67 |
| `notes[1].notes[1].table.rows[0][1]` | > 20% | T: PDF 67 |
| `notes[1].notes[1].table.rows[1][0]` | ≤ 99th percentile | T: PDF 43,63,67 |
| `notes[1].notes[1].table.rows[1][1]` | > 50% | T: PDF 67 |
| `notes[1].notes[2].items[0]` | 99th percentile | T: PDF 21,54,57 |
| `notes[1].notes[2].items[0]` | > 30 min | T: PDF 21,54,57 |
| `notes[1].notes[2].items[1]` | 99th percentile | T: PDF 69 |
| `notes[1].notes[2].items[2]` | < 20% | T: PDF 67 |
| `notes[1].notes[2].items[3]` | 99th percentile / > 20% | T: PDF 70 |
| `notes[1].notes[2].items[4]` | 99th percentile | T: PDF 68 |
| `notes[2].notes[0].src` | 30 days | I: image p43 (PDF 45) |
| `notes[2].notes[0].src` | 14 days | I: image p43 (PDF 45) |
| `notes[2].notes[0].table.rows[0][1]` | ≥ 7 / 72.7% | I: image p43 (PDF 45) |
| `notes[2].notes[0].table.rows[0][2]` | ≥ 5 / 26.2 - 40.9% | I: image p43 (PDF 45) |
| `notes[2].notes[0].table.rows[0][3]` | > 118 / > 8% | I: image p43 (PDF 45) |
| `notes[2].notes[0].table.rows[0][4]` | > 140 / > 3% | I: image p43 (PDF 45) |
| `notes[2].notes[0].table.rows[1][1]` | 20.3% | I: image p43 (PDF 45) |
| `notes[2].notes[0].table.rows[1][3]` | 3 - 8% | I: image p43 (PDF 45) |
| `notes[2].notes[0].table.rows[1][4]` | 1 - 3% | I: image p43 (PDF 45) |
| `notes[2].notes[0].table.rows[2][1]` | 2.5% | I: image p43 (PDF 45) |
| `notes[2].notes[0].table.rows[2][2]` | 4.7 - 8.3% | I: image p43 (PDF 45) |
| `notes[2].notes[0].table.rows[2][3]` | ≤ 88 / < 3% | I: image p43 (PDF 45) |
| `notes[2].notes[0].table.rows[2][4]` | ≤ 108 / < 1 | I: image p43 (PDF 45) |
| `notes[2].notes[1].items[3]` | > 140 | own words; numbers checked against the cited page |
| `notes[3].notes[0].src` | 0.75mg/kg | I: image p97 (PDF 99) |
| `notes[3].notes[0].src` | 30 min / 5 mg / 0.75 mg/kg / 7 kg | I: image p97 (PDF 99) |
| `notes[3].notes[0].table.rows[0][1]` | 1.5 mega units / 100ml / 5% / 1 hour | I: image p97 (PDF 99) |
| `notes[3].notes[0].table.rows[0][2]` | 3 days / 4 years | T: PDF 99 |
| `notes[3].notes[0].table.rows[1][1]` | 5 secs | I: image p97 (PDF 99) |
| `notes[3].notes[0].table.rows[1][1]` | 30mg / 6000 U / < 60kg | I: image p97 (PDF 99) |
| `notes[3].notes[0].table.rows[1][1]` | 35mg / 7000 U / 60 to < 70kg | I: image p97 (PDF 99) |
| `notes[3].notes[0].table.rows[1][1]` | 40mg / 8000 U / 70 to < 80kg | I: image p97 (PDF 99) |
| `notes[3].notes[0].table.rows[1][1]` | 45mg / 9000 U / 80 to < 90kg | I: image p97 (PDF 99) |
| `notes[3].notes[0].table.rows[1][1]` | 50mg / 10 000 U / ≥ 90 kg | I: image p97 (PDF 99) |
| `notes[3].notes[0].table.rows[1][2]` | ≥ 75 years | I: image p97 (PDF 99) |
| `notes[3].notes[1].items[1]` | > 180 / 110mmHg | T: PDF 171 |
| `notes[3].notes[1].items[1]` | > 2 | T: PDF 171 |
| `notes[3].notes[1].items[1]` | < 3 | T: PDF 171 |
| `notes[3].notes[1].items[1]` | > 10 min | T: PDF 171 |
| `notes[3].notes[1].items[2]` | > 5 days | T: PDF 171 |
| `notes[4].notes[0].items[2]` | 300mg | I: image p33 (PDF 35) |
