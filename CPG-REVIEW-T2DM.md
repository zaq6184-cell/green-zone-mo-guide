# Review: CPG Management of Type 2 Diabetes Mellitus, 6th edition (December 2020), summarised

**Built into the app on 9 Nov 2026** (third CPG round): the entry *Type 2 diabetes: CPG 2020* (`#t2dm-cpg`) beside the ebook's hyperglycaemia and hypoglycaemia pathways. The insulin calculator shows what it gives on splitting a total daily dose, without computing a split. Its copyright gives no permission to reproduce it, so at Krishna's decision of 9 Nov 2026 the entry and this review are in the guide's own words, with page numbers, and quote nothing at length.

For the Green Zone MO Guide, entry `t2dm-cpg`. Reviewed 9 Nov 2026. Written in the guide's own words with printed page numbers, as Krishna decided for CPGs that give no permission to reproduce: numbers are exact, wording is ours.

- **Source:** *Clinical Practice Guidelines: Management of Type 2 Diabetes Mellitus, 6th edition.* December 2020. MOH/P/PAK/447.20(GU)-e. Title page names the Ministry of Health Malaysia, the Academy of Medicine Malaysia, the Malaysia Endocrine & Metabolic Society, the Family Medicine Specialists Association of Malaysia and Diabetes Malaysia; the CPG Secretariat is the Health Technology Assessment Section, Medical Development Division, MOH (p2). The Malaysian Endocrine and Metabolic Society funded it alone (p9). It replaces the 5th edition of 2015 (p2). File read: `...\AMM Clinical Practice Guidelines\Endocrine Disease\2020 - Management of Type 2 Diabetes Mellitus (6th Edition) [763].pdf`, 284 PDF pages (PDF created 9 Feb 2021, modified 1 Mar 2021), not modified. Its Quick Reference ([979], 8 pages) was read in full.
- **Copyright:** none. A scripted search of the text layer of all 284 pages for copyright, reproduction and "all rights" found only unrelated words (a test that is poorly reproducible, women of reproductive age, a journal title). So nothing is quoted: the draft's `src` ends "summarised", its `lead` ends with the addendum's sentence, and its `refs` carry the line "Summarised, not reproduced: the CPG states no reuse terms. Read the full CPG for the wording." No reproduction acknowledgement is written. The Academy shelf already lists this CPG with an empty `drive` field (engine.js, `CPG_SHELF`), which agrees.
- **Page offset:** printed page = PDF page − 2, throughout (PDF 4 = p2, PDF 19 = p17, PDF 118 = p116, PDF 219 = p217). There are no roman-numbered pages. PDF 1 to 3 are the covers and title page. Every page cited here and in the draft is the printed page.
- **Age:** issued December 2020, due for review after 5 years (2025), or earlier if new evidence appears (p2). That date has passed; the Academy list (CPG-RUN-THROUGH.md) and Krishna's Endocrine folder hold no later edition. The draft says so in its lead.
- **Method:** text from PyMuPDF's text layer (every page has one apart from the covers; it keeps ≥, ≤, <, > and ½). Because a text layer does not show which value sits in which box or column, these were also read from page images rendered at 200 to 220 dpi: Figures 3-2 (p75), 4-1 (p119), 4-2 (p127), 4-3 (p132), Tables 4-2 (p117), 4-3 and 4-4 (p124), 4-5 (p125), 6-3 (p191) and Appendix 7 (p217 to 218). Figures 4-2 and 4-3 are printed landscape. 187 number phrases were then checked by script against the text of the page each one cites: all found (one needed the en dash in the anion gap formula normalised). A second script looked for runs of six or more words shared between the draft and the CPG: what remains is the publishers' names, a guide's title, two drug-name lists and numeric criteria (for example the DKA criteria), which the addendum allows as facts and named terms.
- **Scope (p9):** adolescents and adults with type 2 diabetes or at risk of it. Diabetes in pregnancy is left to its own CPG (p9). There is no emergency department chapter as such: the ED content is chapter 4 (metabolic emergencies, p116 to 133) and parts of 3.6 (drugs and insulin), 6.1 (acute illness), 5.2 (kidneys) and Appendix 7.
- **Leaflet:** none. The CPG has no patient handout. The draft's `advice` is written in our words from its education points (p117, p118, p73, p60, p133, p191, Appendix 11), in English only.
- **Size:** `JSON.stringify(P['t2dm-cpg']).length` = 21,718 (target about 20,000). What was left out to get there is listed at the end of (a).

---

## (a) The CPG chapter by chapter

| Part (pages) | What it holds | What matters to the Green Zone | In the draft? |
|---|---|---|---|
| Front matter (p2 to 16) | Intent, review date, forewords, terms of reference, scope, development group, reviewers, contents | Review date (p2) and scope (p9) | Lead and menu hint |
| 1 Introduction (p17 to 21) | Disease background, Malaysian prevalence | None | No |
| 2 Screening and diagnosis (p22 to 30) | Who to screen; capillary screening thresholds; venous glucose, OGTT and HbA1c cut-offs (Tables 2-3 to 2-5); HbA1c pitfalls; Figures 2-1 and 2-2 (symptomatic and asymptomatic routes); CV risk | A walk-in with a new high glucose: one abnormal result is enough with symptoms, two without | Yes: `dm`, `newdm`, `dxs`, `dxa` |
| 3.1 Initial assessment (p31 to 34) | Table 3-1, history and examination at diagnosis | The symptoms of a high glucose (p32), which decide the diagnostic route | `newdm` hint |
| 3.2 Education, 3.3 Team (p35 to 41) | Self-management education, team care | None directly | No |
| 3.4 Targets (p42 to 43) | Table 3-5 targets; Table 3-6 individual HbA1c targets | HbA1c <7.0% for most | `newtx` |
| 3.5 Lifestyle (p44 to 53) | Diet, weight, exercise; exercise and lows on SUs or insulin (p51 to 52) | Little | No |
| 3.6 Medications (p54 to 77) | Each drug class with doses (Tables 3-8 to 3-17); combinations; insulin types (Table 3-18), regimens (Table 3-19), start and titration (p73, Figure 3-2), long-term rules (p76), 5 recommendations (p77) | Metformin start dose; SU lows and interactions; SGLT2-i risks and holding when ill; starting, adjusting and capping insulin | Yes: `hsu`, `hlow`, `met`, `sglt`, `newtx`, `ins`, `istart`, `iadj`, `isplit` |
| 3.7 Algorithms (p78 to 81) | Figures 3-3 to 3-6 by HbA1c band and patient profile | The insulin-first threshold (HbA1c >10% or FPG >13.0 mmol/L) | Threshold only (`newtx`, `istart`); the HbA1c ladder of Figure 3-3 was cut for size |
| 3.8 Monitoring (p82 to 94) | HbA1c methods and pitfalls, SMBG schedules, CGM | Point-of-care HbA1c is not for diagnosis (p85); everyone on insulin self-monitors (p73) | `dxa`, `ins` hint |
| 3.9 Co-morbidities (p95 to 115) | BP, lipids, obesity, bariatric surgery, NAFLD | None | No |
| 4.1 Hypoglycaemia (p116 to 121) | Definition; Table 4-1 symptoms; Table 4-2 levels; risk factors; prevention; treatment by level (p118); Figure 4-1; unawareness; nocturnal lows; harms; Recommendations 1 to 5 (p121) | Core: treat by level and route, find the cause, advise | Yes: `hypo` to `hlow`, Low sugar tab, advice |
| 4.2 DKA (p122 to 127) | Principles; tests; three criteria; HDU/ICU risk and severity features; aims; fluids by SBP (Tables 4-3, 4-4); potassium (Table 4-5); FRIII; bicarbonate; phosphate; monitoring; resolution; move to SC insulin with a TDD and split (p126); Figure 4-2 | Core: recognise, start treatment, hand over. The SC split answers open item 8 in part | Yes: `dka`, `dkatx`, `dkasev`, `dkahdu`, `dkaho`; split in `isplit` |
| 4.3 Euglycaemic ketoacidosis (p128) | Definition; SGLT2-i and pregnancy; triggers; when to check ketones; dextrose fluids; holding the SGLT2-i | Core: the walk-in on an SGLT2-i with a normal-looking glucose | Yes: `eu`, `eudka`, `sglt` |
| 4.4 HHS (p129 to 133) | Features; criteria; effective osmolality; ketone and pH limits; worsening confusion; triggers; goals; fluids; rates of fall; LMWH; resolution; discharge planning; Figure 4-3; Recommendations 1 to 4 on DKA and HHS (p133) | Core: recognise, start treatment, hand over | Yes: `hhs`, `hhstx` |
| 5.1 Retinopathy (p134 to 137) | Screening, treatment | A rapid HbA1c fall can briefly worsen retinopathy (also p181) | No (cut for size) |
| 5.2 DKD (p138 to 146) | eGFR and albuminuria; metformin and SGLT2-i by eGFR (p144); BP; nephrology referral | Discharge drug doses | `met`, `sglt`, Kidneys tab |
| 5.3 Neuropathy (p146 to 154) | DPN, autonomic neuropathy, painful neuropathy drugs | Not a Green Zone decision | No |
| 5.4 CVD (p155 to 164) | ASCVD, heart failure; metformin may continue in stable heart failure while eGFR >30 (p158) | The metformin line | `met` |
| 5.5 Diabetic foot (p165 to 166) | Risk, screening, education; an active foot problem needs urgent referral, with review within 24 hours (p166) | Agrees with the diabetic foot CPG | See-also to `diabetic-foot-cpg` |
| 5.6 to 5.8 (p167 to 176) | Sexual dysfunction, mental health, periodontal disease | None | No |
| 6.1 Acute illness, stress, surgery (p177 to 181) | Inpatient hyperglycaemia >7.8 mmol/L; HbA1c if none in 3 months; insulin preferred; when to stop oral drugs; targets 7.8 to 10; ≤3.9 rule; ICU; surgery; sliding scale discouraged; feeding; steroids; pumps; going home; Recommendations 1 and 2 | The stop-or-keep decision for a known diabetic who is unwell | Yes: `known`, `stop`, `keep` |
| 6.2 Adolescents (p181 to 186) | Screening, metformin and insulin, liraglutide | Not a Green Zone decision | No |
| 6.3 Elderly (p186 to 189) | Frailty, targets (Table 6-2), glibenclamide not over 60 years (p187) | The glibenclamide line | `hsu` |
| 6.4 Ramadan (p189 to 195) | Risk groups; SMBG; when to break the fast (Table 6-3); meals; exercise; drug and insulin changes (Tables 6-5, 6-6); Recommendations 1 to 5 | Advice after a low or a crisis during Ramadan | Two advice lines (Table 6-3; very high risk, p189 and Appendix 11) |
| 7 to 9 (p196 to 203) | Prevention, complementary medicine, KPIs | None | No |
| Appendices 1 to 6, 8 to 10, 12 (p204 to 231) | Diet, exercise, CVOTs, FIB-4, sexual dysfunction, tobacco | None | No |
| Appendix 7 (p217 to 219) | Glucose-lowering drug doses by CKD stage | Discharge prescribing | Kidneys tab (7 rows), `met`, `sglt`, `hsu` |
| Appendix 11 (p229 to 230) | IDF-DAR Ramadan risk categories | Very high risk after a recent severe low, DKA or hyperosmolar coma | One advice line |
| Abbreviations, references (p232 to 280) | | | No |
| Quick Reference (8 pages) | Key messages, diagnosis, targets, drug and renal tables, algorithms | It has no hypoglycaemia, DKA or HHS content at all; its renal table differs from Appendix 7 in four cells (point 31) | Cited once, for the metformin bands (Kidneys tab) |

**Left out for size** (all clinic care, none an ED decision): the HbA1c ladder of Figure 3-3 (p78); the DKA ward detail after the first hour (rate rises each hour, 10% dextrose with persisting ketones, 8 to 12 mmol/L after 24 hours, monitoring times, phosphate, the SC overlap, p125 to 127); HHS background (first presentation in 7-17%, worse confusion, discharge planning, p129 to 131); the Ramadan drug and insulin tables (p192 to 194); the full Appendix 7 (GLP-1 RAs, acarbose, repaglinide, vildagliptin, saxagliptin, pioglitazone, each SGLT2-i); the steroid monitoring rule (prednisolone ≥5mg/day, p180); the retinopathy caution (p181). A first draft with these in three more tabs measured 30,019 characters.

---

## (b) Points inside the CPG: where its figures, text and tables disagree or leave a gap

None is resolved in the draft. The ones that change an ED decision are also in a node's `gap`.

**Hypoglycaemia**

1. **Definition.** The text (p116) says hypoglycaemia is defined by any one of three things: a glucose <3.9 mmol/L, typical symptoms, or a response to carbohydrate. Read literally, symptoms alone would count. Table 4-2 then gives Level 3 no glucose cut-off at all (p117). The ebook entry joins the three with "with" (all three).
2. **D50% volume.** The text gives 20-50 ml over 1-3 minutes (p118); Figure 4-1 prints 25 ml-50 ml with no time (p119).
3. **Glucagon.** The text allows 1 mg SC or IM (p118); Figure 4-1 gives IM only, and only when an IV line cannot be placed (p119).
4. **D20%.** 75-100 ml over 15 minutes in the text (p118); no time in Figure 4-1.
5. **When to stop repeating.** The text rechecks at 15 minutes and gives another 15 g if still <3.9 mmol/L (p118). Figure 4-1 checks every 15 minutes and repeats until >3.9 (p119). A glucose of exactly 3.9 is not hypoglycaemia by the definition (<3.9) but has not reached the figure's end point (>3.9). There is no limit on rounds and nothing on a low that keeps returning.
6. **Numbering.** The text writes "Level I and Level 2" (p118); Table 4-2 uses 1, 2, 3.
7. **No ED disposition.** The chapter gives no observation period, no admission or discharge criteria, no dextrose infusion, nothing specific for a sulphonylurea-induced low, and no time limit for the driving advice (people at risk should be discouraged from driving, p117, with no duration).
8. **Glibenclamide and the kidneys.** The drug notes call it contraindicated in renal impairment (p56); Appendix 7 allows it with caution at GFR 60-89 and says avoid below 60 (p217).

**DKA**

9. **SBP of exactly 90.** Admission SBP <90 goes to Table 4-3 and ≥90 to Table 4-4 (p123 to 124), but inside Table 4-3 the next step after the bolus is for SBP >90, so a reading of exactly 90 after a bolus has no row (p124).
10. **Potassium, three versions.** Table 4-5: 3.5-5.5 mmol/L gets 20-30 mmol KCl per litre and <3.5 needs extra potassium, at most 40 mmol/h (p125). Figure 4-2: below 3.5, hold the insulin while giving 20-40 mmol/L KCl until K is ≥3.5; 3.5 to 5.5, 20-30 mmol/L KCl per litre; above 5.5, recheck 2-hourly (p127). The note under Table 4-3: potassium is likely needed in the second litre, especially if the baseline is <5 mmol/L, aiming for 4-5 (p124). The units differ (mmol KCl per litre against mmol/L KCl).
11. **Monitoring.** The text: venous bicarbonate and potassium at 60 minutes, 4 hours, then 6-hourly; BUSE and ketones 6-hourly (p126). Figure 4-2: BUSE, creatinine, glucose and VBG every 2-4 hours until stable, potassium 2-hourly (p127).
12. **Below 14 mmol/L.** The text offers keeping the insulin rate with 10% dextrose if ketones persist (p125); Figure 4-2 only halves the rate and switches to dextrose (p127). The text keeps the glucose at 8-12 only after 24 hours (p125) and avoids <14.0 in the first 12-24 hours (p123); Figure 4-2 says maintain 8-12 with no time (p127).
13. **Severity features.** SpO2 <92% on air is to be measured by arterial gas (p123). Hypokalaemia (<3.5 mmol/L) on arrival counts as severe and also delays insulin (p125).
14. **Where non-severe DKA goes.** Severe or high-risk DKA goes to HDU or ICU (p123; Recommendation 2, p133). The CPG does not say where DKA without those features is managed.
15. **Sliding scale.** The chapter 4 summary says it should stop being used (p116); 6.1 calls it strongly discouraged (p180). Same intent, different strength.

**Euglycaemic ketoacidosis and the DKA glucose criterion**

16. **The 11 mmol/L boundary.** DKA needs a capillary glucose >11 mmol/L (p122); euglycaemic ketoacidosis is defined as a glucose <11.0 mmol/L (p128). A patient at exactly 11.0 meets neither.
17. **The definition against the description.** The same page says most euglycaemic cases run above 11.0 but below the usual DKA levels of about 15-17 mmol/L (p128). That contradicts the definition and overlaps the DKA criterion, and the 15-17 figure for "DKA levels" appears nowhere in the DKA criteria. For the ED it matters because the fluid differs: dextrose for euglycaemic cases (p128), saline for DKA (p124). A patient on an SGLT2-i with a glucose of 14 and ketoacidosis fits both.

**HHS**

18. **Insulin rate.** The text gives none. Figure 4-3 starts FRIII at 0.05 U/kg/hr and, once the glucose is below 14 mmol/L, "reduces" it to the same 0.05 U/kg/hr (p132). Its glucose target box also lacks the unit's "/L" (8-12 mmol).
19. **Rate of fall.** The text aims for 4-6 mmol/L/hr (p131); Figure 4-3 raises the insulin only if the fall is below 3 mmol/L/hr (p132), so a fall of 3 is accepted by the figure but is under the text's aim.
20. **Osmolality not falling.** The switch to 0.45% saline is triggered when the osmolality is not declining, given as <3 mosm/kg with no time unit (p130). Sodium is printed "Na2+" on p129 to 131.
21. **Measured or calculated.** The criterion is serum osmolality >320 mosmol/kg (p129), followed by the formula for effective osmolality (twice the sodium plus the glucose). Whether the criterion means the measured or the calculated value is not said; the department sends suspected HHS for a laboratory serum osmolality (`blood-tests--gas`).
22. **Ketones of exactly 3.** DKA needs ketones >3 (p122); HHS expects ketones <3.0 (p130). Exactly 3.0 belongs to neither.
23. **HDU for all HHS or only severe.** 4.4 says every HHS is managed intensively in HDU or the equivalent (p129); Recommendation 2 speaks of severe DKA and HHS (p133).

**Insulin**

24. **Two ways in, two settings.** After DKA, the TDD is weight × 0.5 U-0.75 U (0.75 for the insulin resistant), half as long-acting at bedtime, the rest equally before three meals (p126). Outside DKA, insulin starts as basal 10 U a day or 0.1-0.2 U/kg/day and is titrated (p73; Figure 3-2, p75). The CPG never applies the split outside the move off an infusion. It also notes that practice is moving away from deriving the TDD from the last 12-24 hours of IV insulin (p126), without saying what replaces it beyond the weight-based estimate.
25. **The 50% line.** The general rule caps prandial insulin at no more than 50% of the TDD (p76); the DKA split puts exactly 50% into prandial doses (p126). Consistent at the edge only.
26. **Figure 3-2 wording.** Its top box joins newly diagnosed patients with those on maximal tablets; the next box says everyone is not controlled on maximum tablets with or without a GLP1-RA; and it lists the fasting glucose being at target among the reasons to intensify, beside an HbA1c above target and a basal dose >0.5 U/kg (p75).

**Tablets and kidneys**

27. **SGLT2-i below eGFR 30.** Appendix 7 says avoid for every SGLT2-i at GFR <30 (p218). The text says do not start below 30 but may continue if already on it (p60, p144) and stop when dialysis starts (p144); Figure 3-5 says stop at dialysis (p80); Recommendation 4 on DKD considers SGLT2-i at eGFR ≥30 (p145). Appendix 7's footnote explains its cut-offs follow each drug's registered glucose-lowering indication (p219).
28. **Metformin in heart failure.** It may continue in stable heart failure while eGFR stays >30 (p158); in hospital the oral drugs stop with organ failure, heart failure included (p179). Neither says what to do at an ED discharge after decompensation.
29. **Sitagliptin at exactly 50.** Appendix 7 prints >50 no change and 30-<50 50 mg once daily (p217): exactly 50 has no row. The Quick Reference prints ≥50.
30. **Glibenclamide and age.** The drug notes cite WHO against it above 60 years (p55) and the elderly section does not recommend it over 60 (p187), but its dose table and Appendix 7 carry no age note (Table 3-9, p56; p217).
31. **Quick Reference against Appendix 7.** Metformin: 45-60 no change and <45 halve (Quick Reference) against 45-59 and 30-44 (p217, p144); dapagliflozin and canagliflozin bands 45-60 and <45 against 45-59 and 30-44; luseogliflozin not recommended below 60 against "not recommended" in the CKD 3 column (p218); rosiglitazone appears in the Quick Reference drug table but not in the CPG's TZD table (Table 3-12, p58). The draft follows the main CPG and says so.

**Acute illness**

32. **No sick-day rules.** The CPG says SGLT2-i may need to be held during intercurrent illness or surgery (p60) and lists when to stop oral drugs in hospital (p179), but gives no outpatient sick-day rules for metformin, SGLT2-i, SUs or insulin. The phrase "sick day" appears only in Recommendation 5 on Ramadan, which asks for clear advice on stopping a fast (p195).
33. **Inpatient only.** The stop list (p179) is for patients during admission. Nothing covers an ED discharge of a patient who cannot take the tablets.

**Diagnosis and Ramadan**

34. **HbA1c 6.3 to 6.4%.** HbA1c ≥6.3% diagnoses diabetes (p26), but Figure 3-3's lowest band for a new diagnosis is HbA1c <6.5% with FPG <6.0 mmol/L (p78). A patient diagnosed at 6.3 or 6.4% sits in the lifestyle band.
35. **Repeat HbA1c.** Table 2-5's note asks for a repeat HbA1c 4 weeks after a first positive test in an asymptomatic patient when the glucose is indeterminate (p26), while Figure 2-2 accepts one glucose plus one HbA1c from the same sample (p29).
36. **Who should not fast.** p189 says the high and very high risk groups should abstain; Appendix 11 tells very high risk patients who insist on fasting how to do it safely (p229). "First few hours of fasting" in Table 6-3 is not defined (p191).

---

## (c) The app's related entries against this CPG

The ebook pathways and the department notes stay as written. Each row is an open question for Krishna, not a correction. The ebook PDF was not available: the comparison is with the app's text in `data.js` and `data2.js`. The ebook's hypoglycaemia pathway lists this CPG first in its references, so its differences matter most.

**Ebook: Hypoglycaemia (`hypoglycaemia`, p43–44)**

| Item | Ebook (app text) | This CPG |
|---|---|---|
| Definition | Under 3.9 mmol/L, with symptoms, reversed by carbohydrate | Any one of the three (p116); levels 1 to 3 (Table 4-2, p117) |
| Oral route | Rule of 15s: 15 g, reassess in 15 minutes | Same for Levels 1 and 2 (p118); **20 g** for Level 3 while still conscious (p118) |
| Table sugar | **3 tablespoons** dissolved in water | **3 teaspoons** dissolved in water (p118). A threefold difference; possibly a transcription slip in the app or the ebook: to check against the ebook PDF |
| Other examples | Hard candies, raisins, glucose tablets, honey, juice | Honey, 150-200 ml juice or regular soft drink, table sugar (p118). On acarbose only glucose tablets, or milk or honey (p118): **not in the ebook** |
| D50% | 20–50 ml over 3 minutes | 20-50 ml over **1-3 minutes** (p118); 25 ml-50 ml in Figure 4-1 (p119) |
| D20% | 75–100 ml over **20 minutes** | 75-100 ml over **15 minutes** (p118) |
| D10% | 150 ml bolus | Not in the CPG |
| Glucagon | IM 1 mg when there is no IV access | 1 mg **SC or IM** (p118); IM if no IV line (Figure 4-1, p119) |
| Repeats | Still low after two rounds: persistent, admit | Repeat until >3.9 mmol/L, no limit, no admission rule (p118 to 119) |
| Persistent low | D5% 150 ml/h or D10% 75 ml/h; octreotide for SU; hydrocortisone for adrenal insufficiency; work-up | Not in the CPG |
| After recovery | 15–20 g long-acting carbohydrate; glucose hourly, then 4–6 hourly | The usual meal or snack due at that time (p118) |
| Disposition | High-risk features and discharge criteria | None in the CPG; only general risk factors for lows (p117) |
| Driving | Avoid for the next 24–48 hours; awareness reduced 48–72 hours | Discourage driving, cycling, swimming and heavy machinery in people at risk, no duration (p117) |

**Ebook: Hyperglycaemia (`hyperglycaemia`, p41–42)**

| Item | Ebook (app text) | This CPG |
|---|---|---|
| Inpatient hyperglycaemia | Over 7.8 mmol/L with no history of DM | Same, >7.8 mmol/L (p178; Recommendation 1, p181) |
| DKA | BG over 11; capillary ketone over 3 or urine ketone **over 2+**; pH under 7.3 or HCO3 under 15 | Glucose >11; ketones >3 or urine ketones **≥2+**; pH <7.3 and/or bicarbonate <15 (p122). A urine ketone of exactly 2+ meets the CPG's criterion but not the ebook's wording |
| HHS | BG over 30; osmolality over 320; pH over 7.3; HCO3 over 15; urine or serum ketone **normal or nil** | Glucose >30; osmolality >320; **severe dehydration**; ketones **<3.0 mmol/L**, pH >7.3, HCO3 >15 (p129 to 130) |
| Euglycaemic ketoacidosis | Not covered | Glucose <11.0 mmol/L, SGLT2-i and pregnancy; dextrose fluids; hold the SGLT2-i (p128) |
| DKA and HHS disposition | Manage as DKA or HHS; MAU exclusions | Severe or high-risk DKA and HHS: HDU or ICU (p123, p129, p133); first fluids, potassium and insulin (p124 to 125, p132) |
| Known DM, BG over 10 | Restart old drugs; if unsure, basal-bolus by TDD from Table 1.0 (0.2–0.3 elderly, renal failure or risk of lows; 0.4 at 7.8–11.1; 0.5 at 11.2–22.2 unit/kg/day) | Stable patients keep their home drugs (p179). Insulin outside DKA starts basal: 10 U or 0.1-0.2 U/kg/day (p73). TDD **0.5 U-0.75 U per kg** and a 50% basal split only after DKA (p126) |
| Target | 7.8–10 mmol/L | Same (p179; Recommendation 2, p181) |
| New DM | BG over 20: SC insulin; 15–20: metformin 500 mg OD for 1 week; under 15: KK work-up | No ED glucose bands. Metformin first, 500 mg once daily (Recommendation 2, p69; Table 3-8, p55); insulin first if symptomatic with catabolism, or HbA1c >10% or FPG >13.0 (p70) |
| Metformin contraindications | Decompensated HF, **eGFR under 45**, chronic liver disease, hypoperfusion, lactic acidosis, **COPD** | eGFR 45-59 full dose, 30-44 **half dose**, <30 avoid (p144, p217); stable HF may continue while eGFR >30 (p158); stop in hospital for poor intake, AKI, contrast, critical illness, organ failure (p179). COPD and liver disease are not named for metformin in this CPG |
| Source guide | Practical Guide to Inpatient Glycaemic Care, 2nd edition 2020, attributed to MEMS | The CPG points to the same guide, attributed to the Ministry of Health (p181) |

**Insulin calculator (`#calc-insulin`, engine.js)**
It reads the ebook's Table 1.0 and shows a TDD only; its `gap` says the ebook gives no basal and bolus split. This CPG gives a split, but only for the move off an insulin infusion after DKA, with its own higher TDD (p126), plus a general ceiling of 50% prandial (p76). See (d).

**Department: When to run a blood gas (`blood-tests--gas`, MO Drive, Jun 2026)**
"DXT over 11 with serum ketones of 3 or less: DKA ruled out" agrees with the CPG's ketone criterion (>3, p122). It has no line for **euglycaemic ketoacidosis**: a patient on an SGLT2-i with a glucose <11.0 mmol/L who is unwell, fasting or after surgery, for whom the CPG asks for ketones and, if needed, a gas and anion gap (p128). "Suspected HHS: send serum osmolality" fits the CPG's criterion (point 21).

**Department: Admission to MAU (`mau-admission`), Clinic referrals (`outpatient-referral`)**
DKA and HHS are MAU exclusions; the clinic referral check needs no DKA or HHS. Consistent with the CPG's HDU or ICU for severe DKA and all HHS. Where non-severe DKA goes in HKL is a department matter the CPG does not settle (point 14).

**Department: EMACC (`emacc`, SOP 1 Feb 2018)**
Uncontrolled DM (sugar over 11, not DKA or HHS, not needing admission): EMACC within 1 week if no timely clinic appointment. The CPG gives no follow-up interval after an ED visit.

**Dengue CPG (`dengue-cpg`, nodes `mmet`, `msglt`)**
Compatible. Its metformin answer (continue as an outpatient without contraindications; stop in hospital) fits this CPG's inpatient stop list (p179). Its SGLT2-i answer (follow sick-day rules; hold in dehydration, acute illness or poor intake; restart in recovery) fits p60 and p128, but this CPG has no sick-day rules of its own (point 32). The dengue CPG's note that dengue with DKA or HHS follows the DKA or HHS fluid regimen points to Tables 4-3 and 4-4 and Figure 4-3 here. The draft adds a link from `msglt` to `#t2dm-cpg--eudka`.

**Diabetic foot CPG (`diabetic-foot-cpg`)**
Agrees: an active foot problem needs urgent referral, with review within 24 hours (p166 here; its p8 and Table 2). The draft adds see-also links both ways.

**CKD CPG (`ckd-cpg`, drafted in parallel)**
Appendix 7 here is adapted from the Malaysian Society of Nephrology CKD guideline, 2nd edition, 2018, Diabetes Canada 2018 and KDIGO 2020 (p219). When the CKD entry is in, compare its metformin and SGLT2-i thresholds with points 27 and 31. The cross-links are written as a comment in the draft, not as live links, because `#ckd-cpg` would fail the content check until that entry exists.

**Open questions for Krishna** (also in the nodes' `gap`)

1. Which TDD and split the Green Zone uses for a walk-in who is not in DKA: the ebook's Table 1.0 (0.2 to 0.5 unit/kg/day, no split), the CPG's after-DKA split (TDD 0.5 U-0.75 U per kg; 50% long-acting at bedtime, the rest equally before three meals, p126), or the CPG's basal start (10 U or 0.1-0.2 U/kg/day, p73).
2. Hypoglycaemia: D20% over 15 or 20 minutes; D50% over 1-3 or 3 minutes; SC glucagon; table sugar 3 teaspoons or 3 tablespoons; the ebook's two-rounds rule, discharge criteria and 24 to 48 hour driving advice, which the CPG does not have; the acarbose rule and the 20 g Level 3 dose, which the ebook does not have.
3. Metformin under eGFR 45 (ebook: contraindicated; CPG: half dose at 30-44, avoid <30) and the ebook's COPD and liver disease contraindications.
4. SGLT2-i below eGFR 30: avoid (Appendix 7) or continue if already on it (text).
5. Euglycaemic ketoacidosis: whether the blood gas note should gain a line for SGLT2-i users with a glucose <11.0 mmol/L, and which fluid to use for an SGLT2-i patient whose glucose is between 11 and about 17 (point 17).
6. Where non-severe DKA is managed in HKL (point 14), and whether all HHS goes to HDU (point 23).
7. Whether HKL follows the CPG's DKA potassium and monitoring text or Figure 4-2 where they differ (points 10 and 11), and which HHS insulin rate (point 18).

---

## (d) Calculator candidates

The Calculators view reads its numbers from the pathway data; `CALC_FACTS` must find each phrase in `P['t2dm-cpg']`. The 40 phrases are in the calculator facts (all checked present with `JSON.stringify(P['t2dm-cpg']).includes(s)`; none contains a double quote). Any new route, and `#calc-insulin` if a data file links to it, must be added to `okHref` in `check-data.js`; the draft avoids that by asking for a `CALC_SEE` entry instead (`'t2dm-cpg':[['#calc-insulin', 'Insulin dose calculator']]`).

### 1. Insulin: show the CPG's split beside the ebook's TDD (recommended, as facts; numbers only after Krishna decides)

What the CPG gives, with its setting:

| Fact | Setting | Page | Phrase in the draft |
|---|---|---|---|
| TDD = weight × 0.5 U-0.75 U; 0.75 U/kg if more insulin resistant (obese, acanthosis nigricans) | Moving from IV to SC insulin after DKA | p126 | `TDD = weight in kg times 0.5 U-0.75 U`; `use 0.75 U/kg if more insulin resistant, for example obese or with acanthosis nigricans` |
| 50% of the TDD at bedtime as long-acting; the rest equally before breakfast, lunch and dinner | Same | p126 | `Split: 50% of the TDD at bedtime as long-acting insulin; the rest divided equally before breakfast, lunch and dinner` |
| Prandial share not >50% of the TDD | General rule for long-term insulin | p76 | `the prandial share should not be >50% of the TDD` |
| Basal start 10 U a day or 0.1-0.2 U/kg/day; up 2 U every 3 days; cut 10-20% after a low | Starting insulin outside DKA | p73, p75 | `Basal insulin 10 U once daily, or 0.1-0.2 U/kg/day`; `for example up 2 U every 3 days without lows`; `After a low, cut the dose by 10-20%` |
| Basal plus: 4 U per meal or 10% of the basal dose; titrate 1-2 U or 10-15% every 3 days; go beyond basal at >0.5 U/kg | Intensifying | p75 | `prandial insulin 4 U per meal or 10% of the basal dose, titrated by 1-2 U or 10-15% every 3 days`; `the basal dose is >0.5 U/kg` |
| TDD >1.5-2.0 U/kg prompts a search for a cause | Long-term | p76 | `A total daily dose >1.5-2.0 U/kg` |

Recommendation: in `#calc-insulin`, replace the gap ("the ebook does not give the split") with the CPG facts above as a note, labelled with their setting and pages. Do **not** compute a basal and bolus split from the ebook's Table 1.0 TDD until Krishna decides (open question 1): that would apply an after-DKA rule from one source to a dose from another. If he chooses the CPG for after-DKA patients, add a second mode with weight and a 0.5 or 0.75 U/kg choice (the user picks; the calculator does not judge insulin resistance), output TDD, basal (50%) and each meal dose (the rest ÷ 3), unrounded to one decimal, since the CPG gives no rounding. Show the TDD >1.5-2.0 U/kg warning if reached.

### 2. DKA and HHS check (recommended, second; new route, for example `#calc-dka`)

Inputs: capillary glucose; capillary ketones or urine ketone grade; venous pH; bicarbonate; sodium, potassium, chloride; weight; the severity checklist; on an SGLT2-i (yes/no); severe dehydration (yes/no).

Outputs, each with its phrase and page:
- DKA: all three of `Capillary glucose >11 mmol/L`, `Capillary ketones >3 mmol/L, or urine ketones ≥2+`, `Venous pH <7.3 and/or bicarbonate <15 mmol/L` (p122).
- Anion gap from `Anion gap = (Na + K) minus (Cl + HCO3)`, flagged at `Anion gap >16` (p123); severe features from the `dkasev` items (p123).
- Effective osmolality from `Effective osmolality is twice the sodium plus the glucose, in mmol/L, without urea`, against `Serum osmolality >320 mosmol/kg` and `Plasma glucose >30 mmol/L` (p129), with `Expect ketones <3.0 mmol/L, pH >7.3, HCO3 >15 mmol/L` (p130).
- Euglycaemic flag: `Ketoacidosis with a glucose <11.0 mmol/L` (p128).
- FRIII rate: `FRIII 0.1 unit/kg/hr by estimated weight, 50 units in 0.9% saline to 50 ml` gives units/hr = ml/hr (p125); HHS `FRIII 0.05 U/kg/hr`, shown with `Figure 4-3 starts at 0.05 U/kg/hr and also reduces to 0.05 U/kg/hr below 14 mmol/L` (p132). Insulin held if potassium <3.5 (p125, p127, p132).

Where it must decline or show a note: glucose exactly 11.0 (`neither covers exactly 11.0`); ketones exactly 3.0 (neither >3 nor <3.0); pH exactly 7.3 or bicarbonate exactly 15 (criterion not met, show it); urine ketones exactly 2+ (met); an SGLT2-i patient with glucose 11 to about 17 and ketoacidosis (show both DKA and the euglycaemic note, point 17); measured against calculated osmolality (point 21: label the output "calculated effective osmolality"); severe dehydration is a clinical judgement (a tick box, never inferred). It stores nothing.

### 3. Glucose-lowering drugs by eGFR (worth building, third; new route, for example `#calc-gfrdrug`)

Input: eGFR. Output per drug from Appendix 7 (p217 to 218) and the text (p144, p60, p158), with the draft phrases `45-59 no change; 30-44 halve; <30 avoid`, `eGFR 45-59: full dose, less if prone to poor perfusion or hypoxaemia; 30-44: halve the dose; <30: avoid`, `>50 no change; 30-<50 50 mg once daily; <30 25 mg once daily`, `Start 1 mg once daily; ≥15 caution; <15 avoid`, `Do not start at eGFR <30, but may continue if already on it`, `Appendix 7 (p218) prints avoid at GFR <30`. Declines: sitagliptin at exactly 50 (point 29); any SGLT2-i below 30, where it must show both the appendix and the text (point 27); a non-integer eGFR between bands (the CPG prints whole numbers). The full Appendix 7 would have to go into the entry first (it was cut for size): about 1,200 more characters.

### 4. Not worth building

- Hypoglycaemia treatment: fixed doses, no weight, no score; the stepper already gives the route.
- When to break a Ramadan fast: four rows (Table 6-3, p191), already in the advice.
- Figure 3-3's HbA1c ladder: clinic care, and it would decline at HbA1c 6.3 to 6.4% (point 34).
- Diagnosis of diabetes: two branches, already in the stepper.

---

## (e) Every number in the draft, and how it was checked

"Text" = the phrase was found by script in the text layer of the cited page (187 checks, whitespace normalised). "Image" = the value's box or column was also confirmed on a page image at the dpi shown. Each row is one distinct figure or group.

| # | Number as in the draft | Where | Page | Check |
|---|---|---|---|---|
| 1 | December 2020; review in 2025; replaces 5th edition (2015) | lead, refs | p2 | Text |
| 2 | MOH/P/PAK/447.20(GU)-e | refs | p2 (and title page) | Text |
| 3 | Adolescents and adults; pregnancy excluded | menu hint | p9 | Text |
| 4 | Glucose <3.9 mmol/L | hypo, hchk, hafter, advice | p116, p118 | Text |
| 5 | Level 1 <3.9 but ≥3.0 mmol/L; Level 2 <3.0 mmol/L; Level 3 no cut-off | hypo hint | p117 | Text; image 200 dpi |
| 6 | 15 g; 1 tablespoon of honey; 150-200 ml juice or soft drink; 3 teaspoons of table sugar; recheck after 15 minutes | h15, advice | p118 | Text |
| 7 | 20 g for Level 3, still conscious | h20 | p118 | Text |
| 8 | D50% 20-50 ml over 1-3 minutes; Figure 25 ml-50 ml | hiv | p118, p119 | Text; Figure 4-1 image 220 dpi |
| 9 | D20% 75-100 ml over 15 minutes | hiv | p118 | Text |
| 10 | Glucagon 1 mg SC or IM; IM if no IV line | hiv | p118, p119 | Text; image 220 dpi |
| 11 | Every 15 minutes until >3.9 mmol/L | hchk | p119 | Text; image 220 dpi |
| 12 | NPH not before 10 pm | hins | p76 | Text ("10 p.m.") |
| 13 | 2-5 am | hins | p120 | Text |
| 14 | Avoid lows for up to 3 months | hins | p121 | Text |
| 15 | Cut by 10-20% after a low | hins, istart | p75 | Text; Figure 3-2 image 200 dpi |
| 16 | Glibenclamide not over 60 years | hsu | p55, p187 | Text |
| 17 | Glucose >11 mmol/L; ketones >3 mmol/L or urine ≥2+; pH <7.3 and/or bicarbonate <15 mmol/L | dka | p122 | Text |
| 18 | Mortality <1% overall, >5% in the elderly | dkahdu | p122 | Text |
| 19 | SBP <90 mmHg: 500 ml 0.9% saline over 10-15 minutes; >90: 1000 ml over 60 minutes | dkatx | p124 | Text; Table 4-3 image 200 dpi |
| 20 | SBP ≥90 mmHg: 1 L in the first hour, then 1 L with KCl over 2, 4 and 6-8 hours | dkatx | p124 | Text; Table 4-4 image 200 dpi |
| 21 | K <3.5: hold insulin, 20-40 mmol/L KCl until ≥3.5; 3.5-5.5: 20-30 mmol KCl per litre; >5.5: none; max 40 mmol/h | dkatx | p124 to 125, p127 | Text; Table 4-5 image 200 dpi; Figure 4-2 image 200 dpi |
| 22 | FRIII 0.1 unit/kg/hr; 50 units to 50 ml 0.9% saline | dkatx | p125 | Text |
| 23 | Fall <3 mmol/L/hr over 2-3 hours: +1 U/hr; <14 mmol/L: dextrose 5%, halve the rate; not below 14.0 in the first 12-24 hours | dkatx | p123, p125 | Text |
| 24 | Bicarbonate only if pH stays <6.9 | dkatx | p125 | Text |
| 25 | Slower fluids under 18 years | dkatx | p124 | Text |
| 26 | Bicarbonate <5; ketones >6; pH <7.1; K <3.5; GCS <12; SpO2 <92%; SBP <90; pulse >100; anion gap >16 | dkasev | p123 | Text |
| 27 | Anion gap = (Na + K) minus (Cl + HCO3) | dkasev hint | p123 | Text (en dash normalised) |
| 28 | Ketones down ≥0.5 mmol/L/hr or bicarbonate up 3 mmol/L/hr; glucose down ≥3 mmol/L/hr | dkaho | p123 | Text |
| 29 | Resolution pH >7.3, ketones <0.6 mmol/L | dkaho | p126 | Text |
| 30 | Glucose >30 mmol/L; osmolality >320 mosmol/kg | hhs | p129 | Text |
| 31 | Ketones <3.0 mmol/L, pH >7.3, HCO3 >15 mmol/L | hhs hint | p130 | Text |
| 32 | Infection 30-60% | hhs hint | p130 | Text |
| 33 | 1 L 0.9% saline over 1-2 hours; 250-500 ml/hr; sodium >145 mmol/L for 0.45% | hhstx | p132 (and p130) | Text; Figure 4-3 image 200 dpi |
| 34 | FRIII 0.05 U/kg/hr; reduced to 0.05 below 14 mmol/L | hhstx | p132 | Text; image 200 dpi |
| 35 | Glucose 4-6 mmol/L/hr; osmolality 3-8 mosm/kg/hr; sodium ≤10 mmol/L in 24 hours | hhstx | p131 | Text |
| 36 | Resolution: osmolality <320 mosm/kg, glucose <14 mmol/L | hhstx gap | p131 | Text |
| 37 | Euglycaemic: glucose <11.0 mmol/L; most >11.0, below about 15-17 mmol/L | eu, eudka gap | p128 | Text |
| 38 | 5% dextrose saline or 5% dextrose; 10% dextrose | eudka | p128 | Text |
| 39 | Random ≥11.1 mmol/L; fasting ≥7.0 mmol/L | dxs | p25 | Text |
| 40 | HbA1c ≥6.3% (≥45 mmol/mol) | dxs | p26 | Text |
| 41 | Capillary ≥7.8 random, ≥5.6 fasting | dxa | p24 | Text |
| 42 | HbA1c not under 18, CKD stage 4 or 5 | dxa | p27 | Text |
| 43 | Metformin 500 mg once daily, raised weekly | newtx | p54, p55 | Text |
| 44 | Insulin first at HbA1c >10% or FPG >13.0 mmol/L | newtx, istart | p70, p75 | Text; image 200 dpi |
| 45 | HbA1c target <7.0% | newtx | p42 | Text |
| 46 | Target 7.8-10 mmol/L; change at ≤3.9 mmol/L | stop | p179 | Text |
| 47 | Basal 10 U once daily or 0.1-0.2 U/kg/day; up 2 U every 3 days | istart | p73, p75 | Text; image 200 dpi |
| 48 | HbA1c >7% on maximal tablets | istart | p75 | Text; image 200 dpi |
| 49 | Prandial 4 U per meal or 10% of basal; 1-2 U or 10-15% every 3 days; basal >0.5 U/kg | iadj | p75 | Text; image 200 dpi |
| 50 | TDD >1.5-2.0 U/kg | iadj | p76 | Text (printed "1.5 U/kg-2.0 U/kg") |
| 51 | TDD weight × 0.5 U-0.75 U; 0.75 U/kg if insulin resistant | isplit | p126 | Text |
| 52 | 50% of TDD at bedtime; rest equally before three meals | isplit | p126 | Text |
| 53 | Prandial not >50% of TDD | isplit | p76 | Text |
| 54 | Ebook Table 1.0: 0.2 to 0.5 unit/kg/day | isplit gap | ebook p41–42 (app data.js) | Read from the app's text |
| 55 | Metformin eGFR 45-59 full dose; 30-44 half; <30 avoid | met, Kidneys tab | p144, p217 | Text; Appendix 7 image 200 dpi |
| 56 | Stable heart failure: continue while eGFR >30 | met | p158 | Text |
| 57 | Lactic acidosis <1 case per 100,000 treated patients | met | p54 | Text |
| 58 | SGLT2-i: do not start at eGFR <30, may continue; stop at dialysis | sglt | p60, p144 | Text |
| 59 | SGLT2-i avoid at GFR <30 (Appendix 7) | sglt gap, Kidneys tab | p218 | Text; image 200 dpi |
| 60 | Glibenclamide 60-89 caution, below 60 avoid; gliclazide and glipizide no change to 30, caution <30; glimepiride start 1 mg, ≥15 caution, <15 avoid; sitagliptin >50, 30-<50 50 mg, <30 25 mg; linagliptin no change | Kidneys tab | p217, p219 | Text; image 200 dpi |
| 61 | Quick Reference metformin bands 45-60 and <45 | Kidneys tab source | Quick Reference PDF page 8 | Text |
| 62 | Ramadan: <3.3 any time; <3.9 in the first hours; >16.7 | advice | p191 | Text; Table 6-3 image 200 dpi |
| 63 | Severe low, DKA or hyperosmolar coma within 3 months before Ramadan: very high risk | advice | p189, p229 | Text |
| 64 | Department rule: DXT over 11 with ketones of 3 or less | eudka gap | `blood-tests--gas` (data2.js) | Read from the app's text |

---

## What could not be verified

- **A newer edition.** No web access: "no newer edition is on the Academy list" rests on CPG-RUN-THROUGH.md (read 9 Nov 2026) and the Endocrine folder, which hold only this 6th edition.
- **The ebook PDF.** The comparison in (c) is with the app's transcription. In particular, "3 tablespoons" of table sugar and "over 2+" for urine ketones may be transcription slips rather than the ebook's wording.
- **The Practical Guide to Inpatient Glycaemic Care, 2nd edition (2020).** Not available: whether the ebook's Table 1.0 comes from it is taken from the ebook's own reference list; the CPG and the ebook name different publishers for it (MOH against MEMS).
- **Errata and the training module.** The training module (`[1043].pptx`) was not read; no erratum for the 6th edition was looked for (no web access).
- **The colours of Appendix 7.** The appendix shades each cell green, amber or red; the draft reports the printed words only.
- **Intent of Figure 4-3's insulin box** (point 18): whether the second 0.05 U/kg/hr is a misprint cannot be told from the document.

---
