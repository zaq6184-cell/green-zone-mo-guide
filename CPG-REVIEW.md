# The dengue CPG, 4th edition: review, and what went into the app

Reviewed in full on 9 Nov 2026 for Krishna, because he asked for a line-by-line review of the CPG and an interactive version in the app.

## The source

- **Citation:** Ministry of Health Malaysia. *Clinical Practice Guidelines: Management of Dengue in Adults (Fourth Edition).* Putrajaya: Malaysian Health Technology Assessment Section (MaHTAS), Medical Development Division; 2026. 144 PDF pages: front matter i to xvii, chapters 1 to 14 (pages 1 to 87), references, appendices 1 to 13 (pages 97 to 121).
- **Copyright:** MaHTAS. Content may be reproduced if a copyright acknowledgement to MaHTAS is included and the content is not changed, not sold, not used to promote a product or service, and not used in a misleading context (page ii). The app names MaHTAS on every CPG tab, in the leaflet and in the references.
- **Statement of intent:** the CPG is a guide based on the best evidence at the time. It "should not override the responsibility of the practitioners to make decisions appropriate to the circumstances of the individual". The app quotes this in the Course and care tab.
- **Status in the app:** Krishna gave the CPG and asked for its content in the app on 9 Nov 2026. This review treats that as admitting it as a dengue source under standing rule 8. Every CPG line in the app carries its printed page.
- **The ebook stays as written (rule 5).** The ebook's dengue pathway (pages 31 to 32) was built from the CPG 3rd edition (2015). It is not changed. It now links to the CPG entry, and the CPG entry links back. Where the two differ is listed below and under Still to confirm.

### How it was read

- Every page was read. Three reviews ran side by side (front matter to chapter 8; chapters 9 to 14; the appendices with the website check), and I read the pages the app builds on myself.
- The text extractor drops symbols (≥, ≤, ×, ↑, ↓, ½). So every threshold in the app was checked against the PDF's own text layer or a page image. For example "(20% from baseline)" in plain text is "(≥20% from baseline)" on the page.
- Tables, the four algorithms, Appendix 7 and the leaflet were read from page images, the sideways pages turned upright. Table 5's plus and minus marks are pictures, and each row was checked at high zoom.

## What is in the app

### The entry: Dengue in adults, CPG 4th edition (`#dengue-cpg`)

It sits in the Infection group, next to the ebook's Dengue fever, with a New badge. It counts as a guideline, not an ebook pathway: the library's Ebook filter still shows 23.

It opens on three routes:

1. **Triage a patient with fever** (Appendix 7, page 108, with Table 8, page 35). First ask, then four checklists in the CPG's order:
   - life-threatening features;
   - unstable vital signs;
   - warning signs, unstable co-morbids or high risk;
   - co-morbids or social risk.

   Each outcome names the MTS level, the zone, the dengue classification and the PAHO group. The five outcomes are Red Zone level 1 or 2, Red Zone level 2, Yellow Zone level 3, Green Zone level 4, and level 5 at-home management. The level 4 outcome adds the CPG's admission rules from chapter 10: heart failure, CKD 3b and above, pregnancy, elderly patients with comorbidities or poor support, and obesity. The level 5 outcome adds Table 7's plan: notify, daily follow-up until afebrile 24 to 48 hours without antipyretics, the monitoring record, and the warning signs.
2. **Ready to go home?** Chapter 13's absolute discharge criteria (page 84), all nine, with the counselling points.
3. **Regular medicines during dengue.** Nine answers: paracetamol, NSAIDs, corticosteroids, antiplatelet, anticoagulant, antibiotics, statin, metformin and SGLT2 inhibitor. They come from 9.1.2 (pages 31 to 33), Recommendation 3 (page 34), Recommendation 13 (page 76) and pregnancy (page 72).

Seven tabs under the card:

| Tab | What it holds |
|---|---|
| Home care advice | Appendix 5B in English and Bahasa Melayu, word for word, with a language switch and Copy. The only change is a missing space ("DO NOTdo" printed). |
| Groups and zones | The case definition and severe dengue (Table 3), Table 8, Groups A, B1, B2 and C (Table 6), interpreting warning signs (page 15), the predictors of severe dengue (pages 25 to 26), special populations (chapter 10), and where the CPG words the same item differently. |
| Fluids | Algorithm 1, the quota and rate table by weight, the fluid quota (pages 43 to 45, Appendix 11), IV fluids in Group B2 (page 44), Holliday-Segar (Tables 11 and 12), weight for fluids (page 40, Table 13), the febrile phase (Recommendation 6) and the common pitfalls (page 40). |
| Tests | Table 5, diagnosis and vaccination (Recommendation 1, 7.2 to 7.3, Table 7), tests in the ED (9.2.2), and haematocrit, white cells and platelets (7.1, page 42). |
| Shock | Table 1, the CRT method (Appendix 6), dengue shock syndrome (pages 47 to 48), non-responders (page 53, Recommendation 8), and Algorithms 2, 3 and 4 as summaries. |
| Course and care | The course of illness (4.2), key indicators of the critical phase (page 42), outpatient care (9.1), transfer to hospital (page 30), notification (chapter 6), the ICD-11 codes (Table 4) and the statement of intent. |
| References | The citation, the MaHTAS acknowledgement and the PAHO source of Tables 6 and 8. |

### Four new calculators (Dengue group, now six)

| Calculator | What it does | Where the source stops |
|---|---|---|
| Triage vital signs (`#calc-dvitals`) | Checks the seven unstable vital signs of Appendix 7. Any one gives Red Zone level 2 and links to that outcome. None gives the next triage question. | The CPG gives no MAP formula, so the MAP is typed from the monitor. A systolic under 90 counts as "BP < 90/60". A diastolic under 60 with a systolic of 90 or more is flagged for the MO to judge, because the CPG does not say whether it counts. |
| Fluids by weight (`#calc-dfluid`) | Holliday-Segar maintenance (Table 11), the 70 kg limit (page 40), the adjusted weight over BMI 27.5 (Table 13), the 48-hour quota from the printed table, and Algorithm 1's rates in ml/hr. | Between two table rows it shows both and says the table does not cover that weight. Under 30 kg it says the table starts at 30. It uses the printed quota, not a computed one (see point 9 below). |
| Test result (`#calc-drdt`) | Reads NS1, IgM and IgG with the fever history against Table 5. A tick for dengue vaccine in the last 30 days brings up Recommendation 1. | Exactly 5 days of fever, and the 7 result patterns Table 5 leaves out, say "Not in Table 5". |
| Urine output (`#calc-duo`) | ml/kg/hr from one void, against 0.5 minimum (page 31), 0.5 to 1 optimal (page 44) and 0.5 to 1.5 at discharge (page 84). It flags more than 6 hours since the last void. | Above 1.5 ml/kg/hr it says this is above the ranges the CPG gives. |

Like the other calculators, they save nothing. A test checks that every threshold they use is still in the CPG text in the app.

### Elsewhere in the app

- What's new has a Dengue CPG 2026 entry.
- A pearl on the home screen: persistent vomiting in the febrile phase is not a warning sign (page 15).
- Still to confirm has two new items, 9 and 10, below.
- Search finds the CPG in English and in Malay ("denggi"), and each of the three routes on its own.

## Chapter by chapter

| Part | Pages | In the app | Left out, and why |
|---|---|---|---|
| Key recommendations | i to iii | Recommendations 1, 3, 4, 6, 7, 8, 11, 13 and 15, and the special-population points | The ICU points (ventilation, vasopressors): Red Zone and ICU work |
| Development, levels of evidence, committees | iv to xiii | Not needed on shift | Method and names only |
| Algorithms 1 to 4 | xiv to xvii | Algorithm 1 in the Fluids tab and the fluids calculator; 2 to 4 summarised in the Shock tab | Not built as step-by-step routes: they are Red Zone and ICU work, and a summary with its page is safer than a re-drawn flowchart |
| 1 to 3: introduction, epidemiology, pathophysiology | 1 to 8 | No | Background |
| 4: clinical course | 9 to 13 | The three phases, the warning signs, Table 1, severe dengue | Table 2 (differential diagnosis) and the figures (adapted from WHO) |
| 5: classification | 14 to 15 | Table 3, interpreting warning signs | Expanded dengue syndrome (Table 15 is ward content) |
| 6: notification | 16 | The 24-hour rule, the penalty, the ICD-11 codes | The surveillance systems |
| 7: laboratory | 17 to 22 | Haematocrit, white cells, platelets, Table 5, Recommendation 1, vaccination | The test accuracy figures and the post-mortem tests |
| 8: assessment | 23 to 26 | The predictors of severe dengue | APRI and the Plasma Leak Score: the CPG says neither is endorsed and their role "remains tentative" |
| 9.1: outpatient | 29 to 34 | Tables 6 and 7, monitoring, fluids, urine, fever, medicines, transfer, home care advice | The clerking sheet and monitoring record (Appendices 4 and 5A): patient forms, and the app stores no patient data (rule 4) |
| 9.2: emergency department | 34 to 37 | Triage, Table 8, Appendix 7, the ED tests, CXR, PoCUS | Training and outbreak fever clinics |
| 9.3: inpatient | 37 to 53 | The fluid quota, Holliday-Segar, weight rules, B2 fluids, shock principles, Table 13 | Monitoring Tables 9 and 10, Table 14 and the ward details |
| 9.4: complications | 53 to 64 | Non-responders to resuscitation | Acidosis, bleeding and organ involvement: ward and ICU work |
| 9.5: ICU | 64 to 69 | No | ICU work |
| 10: special populations | 70 to 80 | The admission rules for pregnancy, heart failure, CKD 3b and above, the elderly and obesity, and diabetes (Recommendation 13) | Labour and delivery, haemoglobinopathies and the detail of each section |
| 11: complementary treatment | 80 | No | Not needed in the ED |
| 12: prevention and vaccine | 81 to 83 | Only the 30-day test caveat | Vaccine use is not ED work |
| 13: discharge criteria | 84 | All of it | |
| 14: implementation | 85 to 87 | No | Audit and resources |
| Appendices | 97 to 121 | 5B (leaflet), 6 (CRT), 7 (triage), 10 and 11 (quota) | 1 to 3 (method, samples), 4, 5A and 9 (patient forms, rule 4), 8 (PoCUS-guided management), 12 and 13 (PLR, ROX and HACOR: ICU) |

## Points to raise: inside the CPG itself

These are quoted as printed. The app takes no side, except on points 1, 9 and 12, which Krishna decided on 9 Nov 2026. Where a point changes what the app shows, the app says so on the spot.

1. **High risk at triage.** Appendix 7 asks "Warning signs, unstable co-morbids or high risk?" before sending a patient to MTS level 3. Its High Risk box (pregnancy, > 65 years, morbid obesity) is not joined to a question. Tables 6 and 8 put the same patients in Group B1 at MTS level 4. Recommendation 11 then says all pregnant patients with confirmed dengue should be hospitalised (page 73). Heart failure and CKD 3b and above get "early admission despite absence of warning signs" (pages 74 to 75). The app follows Appendix 7's wording at that step and shows the conflict in the question's hint. **Decided by Krishna on 9 Nov 2026:** the Green Zone follows Appendix 7 (MTS level 3).
2. **Unstable comorbidity.** Table 6 keeps it in Group B1 ("*Unstable comorbidities must be referred for assessment"). Table 8 puts "without warning sign but unstable co-morbidity" at MTS level 3, Group B2.
3. **Group B1's disposition.** "Possible referral to hospital" (Table 6) against "Observation or admission" (Table 8).
4. **Age.** ≥65 years (Table 6); > 65 years (Appendix 7, Table 7, Appendix 9, 10.3); ≥60 years for older adults (10.7, page 77).
5. **Persistent vomiting.** ">three times per day" (Tables 3 and 6), ">3 times over 24 hours" (Table 7), "> 3x per day" (Appendix 7) and "≥3 times per day/unable to tolerate fluid" (Appendix 9).
6. **Haematocrit rise.** "≥20% from baseline" (pages 17 and 42, Appendix 4) against "> 20% from the baseline" (Appendix 7).
7. **Obesity.** BMI > 27.5 (Table 13), > 27 (Appendix 4) and ≥ 27.5 (Appendix 9) for the adjusted weight; BMI > 25 among the predictors (page 25).
8. **The first IV rate in Group B2.** "3-5ml/kg/hr for 1 hour" (Algorithm 1) against "3 - 5 ml/kg/hour for 1 - 2 hours" (page 44). The app quotes both, each with its page.
9. **The quota table and its own method.** Appendix 11 gives the quota as maintenance for one day plus 50 ml/kg (worked for 60 kg: 2400 + 3000 = 5400 ml). Rounded to the nearest 100 ml, that method gives every printed figure except two:
   - 65 kg: the method gives 5770 ml; the table prints 5700.
   - 70 kg: the method gives 6140 ml; the table prints 6000.

   The calculator shows the printed table, as the wall chart (Appendix 10) does. **Decided by Krishna on 9 Nov 2026:** the Green Zone uses the printed table.
10. **"Administered over 48 hours".** Recommendation 7 says the total fluid quota "should be administered over 48 hours". The text calls it "the maximum fluid to be given over 48 hours", and says many patients need less (page 43).
11. **Weight for fluids.** The 70 kg limit covers maintenance and the quota (page 40). Table 13 uses the adjusted weight for maintenance over BMI 27.5. Shock boluses are "10 - 20 ml/kg adjusted body weight (ABW)" (page 48). The CPG does not say how the limit and the adjusted weight combine for boluses, or whether a non-obese patient in shock uses the adjusted weight. The calculator therefore does not work out bolus volumes.
12. **"BP < 90/60".** Whether one reading below is enough (Appendix 7). The calculator counts a systolic under 90, and flags a low diastolic with a normal systolic for the MO to judge. **Decided by Krishna on 9 Nov 2026:** keep it that way.
13. **MAP.** Appendix 7 and the monitoring chart use MAP < 65 without a formula.
14. **Table 5.** It lists 9 of the 16 result patterns, and has no row for exactly 5 days of fever.
15. **Algorithms 2 and 3 handle an unchanged HCT differently.** Algorithm 2 gives a second bolus; Algorithm 3 goes straight to Algorithm 4.
16. **Monitoring intervals.** FBC every 4 to 12 hours (Algorithm 1); HCT every 4 to 6 hours (Algorithm 2); every 2 to 4 hours (Algorithm 3).
17. **Comorbidities as a predictor.** "Two or more comorbidities" (page 23) against "one or more co-morbidities" (page 25).
18. **IgM timing.** "Detectable by day 5" and "around days 3 - 5", both on page 19.
19. **Urine.** Minimum 0.5 ml/kg/hour (page 31), optimal 0.5 to 1 (page 44) and 0.5 to 1.5 at discharge (page 84). Frequency is "4 to 6 times a day" outside, while the warning sign is reduced urine "for 4 - 6 hours".
20. **The afebrile end point.** "Afebrile for 24 - 48 hours without antipyretics" (Table 7) against "Afebrile for 24 - 48 hours and clinically improving" (chapter 13).
21. **Metformin.** "May be continued" as an outpatient (page 33, Recommendation 3); oral hypoglycaemics "should be stopped" in hospital (Recommendation 13, page 76). The app shows both.
22. **Alert thresholds in the appendices.** RR > 20 (Appendix 7), > 25 (Appendix 9) and > 24 (Appendix 10). HR > 100 (Appendix 7) against PR < 50 or > 120 (Appendix 10). SpO2 < 95% against ≤ 95% (Appendix 10).
23. **Labels.**
    - Level 5 is "Primary Care" in Appendix 7 and "Outpatient" in Table 8. In HKL the Green Zone sees levels 4 and 5.
    - Table 8's asterisk has no footnote.
    - Algorithm 4 is called "refractory shock" on the algorithm and "persistent shock" on page 53.
24. **Doses the CPG does not give.** PPI, vitamin K, FFP, platelets, cryoprecipitate, bicarbonate, diuretics, insulin, vasopressors and electrolytes. It does give paracetamol (not over 4 g a day), packed red cells 5 to 10 ml/kg and albumin 5% as the colloid.
25. **Small slips.**
    - "DO NOTdo" in Appendix 5B.
    - The CRT method says "the index finger" while its picture says "one finger".
    - NHMS obesity is 53.5% on page 40 and 54.4% on page 78.
    - Severe organ involvement lists encephalitis in Table 3 but not in Table 6.
    - The Malay leaflet's follow-up line ("Hadiri temujanji susulan") has no word for "daily", which the English line has. The app keeps both as printed.

## The ebook (from the 3rd edition, 2015) against the CPG 4th edition (2026)

The ebook pathway is unchanged, so on these points the two dengue pages in the app say different things. Which one the Green Zone follows is for the department to decide (Still to confirm, item 9).

| Topic | Ebook, pages 31 to 32 | CPG 4th edition |
|---|---|---|
| Shock: capillary refill | "Delayed CRT over 2 seconds" | "CRT>3s" (Appendix 7; Table 1; Appendix 6) |
| Shock: other signs | Poor pulse volume, shock index over 1, hypotension | Pallor or cyanosis, cold peripheries, low pulse volume, tachycardia; and seven unstable vital signs |
| Persistent vomiting | "over 2 times in 24 hours" | "> three times per day" |
| Diarrhoea | "Persistent diarrhoea (over 2 times in 24 hours)" is a warning sign | Not a warning sign |
| Liver | "Tender liver" | "Liver enlargement >2 cm" |
| Fluid | "Third space fluid accumulation (ascites, pleural or pericardial effusion)" | "Fluid accumulation" |
| Bleeding | "Spontaneous bleeding tendency" | "Bleeding manifestation" (Table 3), "Mucosal bleed" (Appendix 7) |
| Not in the ebook | | Postural hypotension; reduced or absent urine output for 4 to 6 hours; worsening when the fever subsides |
| Haematocrit cut-offs | Male under 60 years 46% | Male ≤60 years 46% (the same, except at exactly 60) |
| Oral fluids | "more than 8 glasses or 2 litres for an average person" | "200 ml of fluid every hour (one small cup) while awake"; plain water alone avoided |
| Fever | Tepid sponging | Warm bath |
| Antibiotics | "Antibiotics are not required" | "No retrievable evidence" for antibiotics in dengue |
| Shock fluids | "Algorithm A and B" (3rd edition) | Algorithms 2, 3 and 4 |
| Adjusted body weight | Ideal + 0.4 × (actual − ideal), over BMI 27.5 | The same (Table 13) |

The department notes on the ebook pathway (Dengue SOP 2.0; the Observation Ward memo of 23 Mar 2023) are department documents. The CPG does not replace them, and the app keeps them as they are.

## denguecpg.vercel.app against the CPG

The website has no author, date or licence. Its claims were checked one by one against the CPG: 169 claims, of which 109 match, 41 differ, 14 are not in the CPG and 5 are unclear. The differences that matter on shift:

1. **No unstable vital signs step.** Appendix 7 sends any one of seven signs to MTS level 2, Red Zone: BP < 90/60, MAP < 65, PP < 30, shock index > 1, HR > 100, RR > 20, SpO2 < 95%. The site does not ask for the RR or SpO2 and ignores the MAP. A patient with a heart rate over 100 or a pulse pressure under 30 can still end in Group A or B1 there.
2. **Unstable comorbidity is under-triaged.** Table 8 puts it at MTS level 3, Yellow Zone (Group B2 management). The site gives B1, MTS level 4, Green Zone. It does the same with Appendix 7's high-risk patients, which is the CPG's own conflict (point 1 above).
3. **Shock is defined differently.**
   - The site calls a systolic under 90 on its own decompensated shock. The CPG says "hypotension with signs of reduced perfusion", gives no systolic number, and counts bradycardia, which the site does not.
   - The site needs two signs for compensated shock, where the CPG says "a combination of".
4. **Warning signs in any phase.** The site counts warning signs in any phase, and counts a haematocrit rise of ≥20% on its own. The CPG ties warning signs to a patient "near or in critical phase", and pairs the haematocrit rise with a rapidly falling platelet count.
5. **The fluid calculator's numbers do not add up.** At 65 kg the page shows:
   - "hourly maintenance 5,000 ml": the CPG gives 105 ml/hr;
   - "2,500 ml" a day: the formula gives 2,520;
   - a 3,250 ml deficit: correct;
   - a 5,700 ml total: its own parts add to 5,750.

   The 5,700 ml total matches the CPG's printed table. (I said earlier that the site's notification penalty of RM10,000 was wrong. It is right: page 16 says RM10,000 or up to two years in prison, or both.)
6. **The leaflet is not Appendix 5B.**
   - It leaves out rest, temperature and warning-sign monitoring, seeking care and the mosquito lines, and adds "daily blood tests".
   - "NSAIDs or pain relievers" can be read to include paracetamol.
   - The Malay version drops "consult your doctor if already taking these" and gua sha.
7. **Medicines.**
   - The site says to discontinue NSAIDs, aspirin and steroids, as "strictly prohibited". The CPG says do not use them, and leaves continuing them to clinical judgement.
   - Its metformin note also shows for patients the site sends to hospital. Recommendation 13 stops oral hypoglycaemics in hospital.
8. **Laboratory table.**
   - The normal ranges it gives for platelets, white cells, AST, ALT and blood pressure are not in the CPG.
   - It labels an AST or ALT of 1000 or more as liver failure. The CPG defines liver failure differently (an INR of 1.5 or more with encephalopathy).
   - It makes a haematocrit rise of 20% an automatic admission, against the CPG's rule that admission must not rest on a single parameter.
9. **Serology.**
   - For IgG alone, the CPG's next step is a dengue IgG high-titre test; the site suggests NS1 ELISA or RT-PCR.
   - All three tests negative after day 5 is "Not dengue infection" in the CPG and "less likely" on the site.

What matched:
- notification within 24 hours and the penalty;
- 200 ml an hour and no plain water alone;
- paracetamol up to 4 g a day;
- Holliday-Segar, the 70 kg limit and the ideal and adjusted weight formulas;
- the Algorithm 1 rates and the Algorithm 2 and 3 boluses;
- the haematocrit medians;
- the MTS levels for both kinds of shock.

The app's version handles each difference above the CPG's way. It has the seven-sign vital signs step and Table 8's zones, quotes 5B word for word in both languages, and links each medicine answer to its page.

## Outside sources and tools

- **The website's content.** The app takes nothing from denguecpg.vercel.app. It has no author, date or licence, and its numbers are checked above against the CPG. It was used only as a list of features to beat.
- **REA.** Not used on the website, for the same reason as with PEMCalc and MDCalc: no reuse licence, and the content comes from the CPG anyway.
- **Patient fields.** The website asks for a patient name or ID. The app has none (rule 4).
- **Flow Studio.** Used once, at Krishna's request: a still (free) and an 8-second loop (12 credits) of an amber glass Aedes mosquito on dark water, for the entry's banner. The calculators keep the Dengue group's existing tile.

## How to check it

In `src/`: `npm run check` gives "39 entries; rules: 15" and "no errors". `PORT=8791 node test.js` gives "errors: none" and "all checks passed" (191 checks, 22 of them for the dengue CPG).
