# Ebook alignment: changes made to `src/parts/data.js`

11 Nov 2026. This log records what was changed in the 23 ebook pathways so that the app carries what *The Clinical Pathway in Emergency for Medical Officer* (ETD HKL, 2025) prints, from the three reviews `EBOOK-REVIEW-1.md` (pages 5 to 23), `EBOOK-REVIEW-2.md` (24 to 44) and `EBOOK-REVIEW-3.md` (45 to 63). Only `src/parts/data.js` was edited. Nothing was built, tested with Playwright, published or pushed.

How to read it:

- A row id is the review's own (B19, A8, C13, N15, S24 in review 1; "TBI 14", "HTN 18" and so on for review 2, which numbers its rows per pathway; PA-15, PO-04, SV-08, SY-09, SC-12 in review 3).
- Every number, dose, time, age and symbol added or changed was first read from a crop of `sources/ebook-pages-hi/pNN.png` and then compared with the review's transcription.
- "Was" and "now" quote the app's text. Printed wording is in double quotation marks.
- Part 2 lists every row that was not applied, with the reason.

## Part 1: changes, pathway by pathway

### Acute behavioural disturbance (`behavioural-disturbance`, p5–9)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| B19 MISSING | `abc`, new `info` line | 7 | (nothing) | "Definition (p7): acute behavioural disturbance (also previously called excited delirium, acute behavioural disorder, or agitated delirium) is an umbrella term used to describe a presentation which may include abnormal physiology and/or behaviour" |
| B21 LOST | `lead` | 7 | "Behaviour stabilisation" | "Behaviour stabilisation ± breakaway techniques" |
| B22 LOST | `lead` | 7 | "Choice of medication" | "Choice of medication ± control restraint" |
| B23 LOST | `lead` | 7 | "Documentation" | "Documentation and debriefing" |
| B27 LOST | `meds`, new item 3 | 7 | "aspiration" inside the one-line summary (item 2, kept: `engine.js` repeats that sentence in the BARS calculator) | added "Aspiration: risk of aspiration and subsequent respiratory problems without head elevation" |
| B28 LOST | `meds`, new item 4 | 7 | "injury" inside the same summary | added "Injury: abrasions, bruises, dislocation, contusion, numbness, tingling, fracture or muscle strain" |
| B29 LOST | `meds`, new item 5 | 7 | "hyperthermia, lactic acidosis, raised CK" inside the same summary | added "Hyperthermia, lactic acidosis and elevated creatinine kinase (CK) levels are due to prolonged struggling" |
| B31 LOST | new table "Drug class, time to peak and half-life (p8–9)", column Class | 8, 9 | no class headings | First generation antipsychotics (FGA): haloperidol. Second generation antipsychotics: olanzapine, risperidone. Benzodiazepine: midazolam, diazepam, lorazepam. Sedation: ketamine |
| B32 MISSING | same new table, column "Time to peak concentration" | 8, 9 | (nothing) | haloperidol "PO 2–6 hr; IM 20 min; paediatric 20 min"; olanzapine "6 hr"; risperidone "1 hr"; midazolam "30 min–1 hr"; diazepam "30 min–1.5 hr"; lorazepam "30–60 min"; ketamine "Onset: IM 3–4 min, IV 30 sec" (with the print's own column heading in brackets) |
| B33 MISSING | same new table, column "Approx. plasma half-life" | 8, 9 | (nothing) | haloperidol "20 hr"; olanzapine "21–54 hr"; risperidone "20 hr"; midazolam "1–4 hr"; ketamine "2.5 hr" |
| B34 MOVED | same new table | 8 | half-lives of diazepam and lorazepam only in the Notes column of "Medication" | left there, and also in the half-life column of the new table ("3–7 days", "12.9 h"), where the print has them |
| B37 DIFFERENT | table "Medication", Haloperidol, Max dose | 8 | "20 mg daily (paediatric 0.5 mg daily PO, 2.5 mg daily IM)" | "20 mg daily. Paediatric: 0.5 mg daily / 2.5 mg daily" (no routes, as printed) |
| B41 DIFFERENT | table "Medication", Risperidone, Max dose | 8 | "16 mg daily (paediatric 0.15 mg/kg)" | "16 mg daily / 0.15 mg/kg" |
| B46 LOST | table "Medication", Diazepam, Notes | 8 | "Half-life 3–7 days" | "Respiratory depression, cardiac arrest, paradoxical agitation. Half-life 3–7 days" |
| B49 LOST | table "Reversal agents", Flumazenil, Dose | 9 | "IV 0.2 mg over 30 s; if no response repeat after 1 min, titrate to response or max 3 mg" | "First dose: IV 0.2 mg over 30 s; if no response, repeat another every 1 min, titrated until response or max dose 3 mg" |
| B51 LOST | table "Reversal agents", Diphenhydramine row | 9 | "Diphenhydramine", "Acute dystonia (paediatric)", "1–2 mg/kg tds/qid" | "Diphenhydramine hydrochloride (antihistamine)", "Acute dystonia from antipsychotics", "Paediatric: 1–2 mg/kg tds/qid" |
| B53 LOST | table "Richmond Agitation-Sedation Scale (RASS)", row −2 | 9 | "Briefly awakens to voice (eye contact under 10 s)" | "Briefly awakens to voice (eye opening and contact under 10 s)" |
| B12 DIFFERENT (not applied, rule 5) | `bars`, `hint` | 5, 6 | "See the BARS table below." | "See the BARS table below. The ebook prints BARS 1 as "Difficult or unable to response" (p5, p6)." The table cell keeps "Difficult or unable to rouse". |

### Abdominal pain (`abdominal-pain`, p10–11)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| A8 LOST | `resus`, item 4 | 10 | "Emergent tests: ECG, DXT, UPT, ultrasound, CXR (erect) ± abdominal X-ray, blood tests, GXM" | "Emergent tests: bedside tests, e.g. ECG, DXT, UPT, ultrasound, CXR (erect) ± abdominal X-ray, blood tests, GXM" |
| A8 LOST | `secondary`, item 3 | 10 | "Emergent tests as needed: ECG, ..." | "Emergent tests as needed: bedside tests, e.g. ECG, ..." |

### Acute coronary syndrome (`acs`, p12–14)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| C13 LOST | `pos`, new item | 12 | no items (title "Load with clopidogrel 300 mg and admit medical ward", from p13) | item "ACS treatment and admission to medical ward (p12)" |
| C4 MOVED | `ijn`, `hint` | 12 | "IJN hotline 03-2617 8996." as a hint on the question | left as it is: the hint is on the question that stands for the printed boxes, and no node may be added |
| Rule 7 (added by the app) | `home`, item 3 | none | "Stress test within 1 week (TCA 1/52); low-risk chest pain can be referred to MAU FAST clinic with ECG copy" | two items: "Stress test within 1 week (TCA 1/52)" and "Department note: low-risk chest pain can be referred to MAU FAST clinic with ECG copy" |

### Anaphylaxis (`anaphylaxis`, p15–16)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| N15 LOST | `obsq`, `info` line 1 | 15, 16 | "... AND has unused adrenaline auto-injectors and has been trained to use them" | the same, then "(depending on drug availability, selected patients, accessibility to obtaining auto-injector)": the p16 footnote, on the condition that carries its asterisk on p15. Advice 3 keeps its own bracket. |

### Bronchial asthma (`asthma`, p19–23)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| S24 MISSING | new table "Written Asthma Action Plan (p22)", row 1 | 22 | (nothing) | "Appendix 5: WRITTEN ASTHMA ACTION PLAN"; the blanks to fill in (Name, IC, Personal Best PEF: ___ L/min, Date of Plan, Doctor, Hospital/Clinic, Phone No.); "Taken from Malaysia CPG Management of Asthma 2017" |
| S25 MISSING | same table, "Green: Doing Well", Signs | 22 | (nothing) | the three signs joined with AND, "OR PEF: ___ to ___ L/min (80% to 100% of personal best)" |
| S26 MISSING | same table, Green, Action | 22 | (nothing) | "Take these controller medications everyday: Controller medication, How Much, How Often (a blank table to fill in). *Use spacer when possible" |
| S27 MISSING | same table, "Yellow: Getting Worse", Signs | 22 | (nothing) | the four signs joined with OR (including "cold/flu"), "OR PEF: ___ to ___ L/min (50% to 79% of personal best)" |
| S28 MISSING | same table, Yellow, Action | 22 | (nothing) | "step up reliever medication for 1 hour", "___ puffs", "Every 20 minutes", "If your symptoms persist after 1 hour: start prednisolone (if available): ___ tablets daily for 5 days (maximum dose 50 mg/day)", "go to the nearest hospital or clinic", "*Use spacer when possible" |
| S29 MISSING | same table, "Red: Alert", Signs | 22 | (nothing) | "Symptoms are worsening (...) OR you are using your reliever frequently: every 2 to 3 hours OR more than 8 puffs a day; OR PEF: Below ___ L/min (Less than 50% of personal best)" |
| S30 MISSING | same table, Red, Action | 22 | (nothing) | "Continue using your reliever medication", "Start prednisolone NOW (if have not started); maximum dose 50 mg/day", "Go to the nearest hospital or clinic IMMEDIATELY/dial 999", "*Use spacer when possible" |
| (pointer) | `home`, item 1 | 20 | "Written Asthma Action Plan (Malaysia CPG 2017)" | "Refer Written Asthma Action Plan (Malaysia CPG 2017): see the table below" ("Refer" is the print's word on p20) |

Gastroenteritis (p17–18): no LOST, MISSING, DIFFERENT or MOVED row; nothing changed.

### Mild traumatic brain injury (`mild-tbi`, p25–26)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| TBI 14 LOST | `ct`, checklist item 4 (text only; the list keeps its seven items) | 25 | "Focal neurological deficit (problems restricted to one part of the body or activity, visual changes, abnormal reflexes, problems walking)" | "Focal neurological deficit (problems restricted to a particular part of the body or a particular activity: difficulties with understanding, speaking, reading or writing, decreased sensation, loss of balance, general weakness, visual changes, abnormal reflexes, problems walking)" |

### Community acquired pneumonia (`pneumonia`, p27)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| CAP 6 DIFFERENT (not applied, rule 5) | `curb`, new `hint` | 27 | no hint; item 3 "Respiratory rate 30/min or more" | hint "The ebook prints item R as "Respiratory rate >30/min" (p27)." The checklist item is unchanged. |
| CAP 13 DIFFERENT (not applied, rule 5) | `psi`, new `hint` | 27 | no hint (the `gap` on `admitpsi` and `brief` already said so) | hint "The ebook labels the three branches "Class I or II", "Class III" and "Class III or IV" (p27)." The option stays "Class IV or V". |
| Rule 7 (added by the app) | `opd`, item 2 | none | "TCA EMWATCH, EMACC, PC clinic or KK; CURB-65 0–1 can be referred to MAU FAST clinic with a copy of the CXR" | two items: "TCA EMWATCH, EMACC, PC clinic or KK" and "Department note: CURB-65 0–1 can be referred to MAU FAST clinic with a copy of the CXR" |

### CVA and TIA (`stroke-tia`, p28–29)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| Rule 7 (added by the app) | `tiadc`, item 1 | none | "Post-stroke work-up (echo, Holter) can be arranged through MAU FAST clinic after neuromedical review" | "Department note: post-stroke work-up (echo, Holter) can be arranged through MAU FAST clinic after neuromedical review" |

### Dengue fever (`dengue`, p31–32)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| Rule 7 (added by the app) | `med`, item 1 | none | "Dengue fever is an exclusion for MAU admission" | "Department note: dengue fever is an exclusion for MAU admission" |

### Heart failure (`heart-failure`, p36–37)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| Rule 7 (added by the app) | `home`, item 1 | none | "CCF work-up can be referred to MAU FAST clinic with CXR and ECG" | "Department note: CCF work-up can be referred to MAU FAST clinic with CXR and ECG" |

### Hypertensive urgency (`hypertensive-urgency`, p38–40)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| HTN 18 LOST | table "Table 1.1: contraindications", Beta-blockers, Possible | 39 | "Metabolic syndrome, glucose intolerance, athletes" | "Metabolic syndrome, glucose intolerance, athletes and physically active patients" |
| HTN 19 LOST | same table, Calcium channel blockers, Possible | 39 | "... severe leg oedema" | "... pre-existing severe leg oedema" |
| HTN 22 MISSING | `refs`, new last line (the table's title and shape may not change) | 39 | (nothing) | "Table 1.1 is printed with the note "Adopted from ESC/ESH Guidelines 2018 for man" (p39; the line is cut off by the page edge)" |
| HTN 29 LOST | `advice` 6 (not narrated) | 40 | "limit alcohol" | "reduce alcohol consumption and avoid binge drinking" |
| Rule 7 (added by the app) | `home`, item 1 | none | "Young hypertension for investigation: refer to Physician's Clinic HKL" | "Department note: young hypertension for investigation: refer to Physician's Clinic HKL" |

### Hyperglycaemia (`hyperglycaemia`, p41–42)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| HYPER 4 DIFFERENT (applied) | `crisis`, `info` line 2 | 41 | "serum osmolality over 320 mOsm/kg" | "serum osmolarity over 320 mOsm/kg" |
| HYPER 9 LOST | `known`, item 3 | 41 | "IV fluids only if signs of dehydration" | "May consider IV fluids only if signs of dehydration are present" |
| HYPER 21 MISSING | `crisis`, new `info` line 3 | 41 | (nothing) | "Key (p41): BG: blood glucose; MTF: metformin; IVI: infusion" |
| HYPER 28 LOST | `advice` 6 (not narrated) | 42 | "Adherence to medication and follow-up; healthy lifestyle" | "Adherence to medication and follow-up; healthy lifestyle modifications are encouraged for good glycaemic control (e.g. improved diet, increased physical activity, cessation of smoking)" |
| Rule 7 (added by the app) | `dka`, `hhs` items | none | "Manage as DKA; DKA and HHS are exclusions for MAU" (and the HHS line) | two items each: "Manage as DKA" (or "Manage as HHS") and "Department note: DKA and HHS are exclusions for MAU" |

### Hypoglycaemia (`hypoglycaemia`, p43–44)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| HYPO 2 DIFFERENT (applied) | `lead` | 43 | "with autonomic or neuroglycopenic symptoms" | "with autonomic and neuroglycopenic symptoms" |
| HYPO 3 DIFFERENT (not applied, rule 5) | `route`, new `hint` | 43 | no hint | hint "The ebook prints this diamond as "Patient alert? / Risk of aspiration", with "No" to the Rule of 15s and "Yes" to the IV line (p43)." The question and its options are unchanged. |
| HYPO 14 DIFFERENT (not applied, rule 5) | `lc`, new last item (a step shows items only) | 43 | title "Once BG is back above 3.9 mmol/L" | title unchanged; added item "The ebook prints the box before this step as "BG < 3.9 mmol/L" (p43)" |
| HYPO 16 DIFFERENT (not applied, rule 5) | `risk`, new `hint` | 43 | no hint; item 1 "Long-acting hypoglycaemic agent" | hint "The ebook prints item 1 as "Long acting hyperglycaemia agent" (p43)." Item 1 is unchanged. |
| HYPO 18 LOST | `risk`, checklist item 5 (text only) | 43 | "Comorbidities, e.g. renal or hepatic" | "Comorbidities, e.g. renal or hepatic failure" |
| HYPO 22 MISSING | `route`, new `info` line | 43 | (nothing) | "Key (p43): CHO: carbohydrate; BG: blood glucose; IV: intravenous; IM: intramuscular; NBM: nil by mouth; NG: nasogastric" |
| HYPO 24, 26, 27 LOST | `dc`, checklist item 4 (text only) | 44 | "Low risk of recurrence: no major cause needing admission; accidental with cause addressed; not on long-acting insulin or oral agents; adequate home monitoring" | "Low risk of recurrence: no major cause or concurrent illness that warrants hospital admission; hypoglycaemia accidental with cause identified and addressed; not on long-acting insulin or oral agents (if so, medical input may be required for dose adjustment); adequate home monitoring available (able to do home glucose monitoring, caretaker or family available)" |

Biliary disease (p24), acute cellulitis (p30) and deep vein thrombosis (p33–35): no LOST, MISSING, DIFFERENT or MOVED row; nothing changed.

### Pain management (`pain`, p45–51)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| Page field | `page`, and the comment line above the entry | 45–51 | "45–50" | "45–51" |
| PA-15 LOST | `mild`, new item 4 | 45 | "Consider discharge (EMACC, EMWATCH or OPC)" only | added "Discharge plan (p45): TCA EMACC, EMWATCH (Malaysian-only), Outpatient Department (specific to diagnosis) or FAST Clinic" |
| PA-16 LOST | `selfs`, new item | 46 | no items | "MOH Self-Reported Pain Assessment Tool (p46): the "SKALA KESAKITAN" picture, boxes 0 to 10, from "TIADA KESAKITAN" at the 0 end to "KESAKITAN YANG AMAT SANGAT" at the 10 end. Adapted from IASP 2017" (the picture itself is not reproduced) |
| PA-29 LOST | table "Non-pharmacological treatment", Comfort items | 46 | "Blankets, pillows" | "Blankets, pillows or soothing scents to promote relaxation" |
| PA-39 MISSING | `cpot` and `painad`, new item 2 | 47 | (nothing) | "Cumulative pain score 0–10" |
| PA-45 MISSING | `refs`, new last line | 47 | (nothing) | "Pain assessment pathway (2), p47: modified from MOH Pain Pathway for Doctors" |
| PA-47 LOST | table "FLACC (non-communicative)", Face, 1 | 48 | "Occasional grimace or frown, withdrawn" | "Occasional grimace or frown, withdrawn, disinterested" |
| PA-49 LOST | same table, Activity, 0 and 1 | 48 | "Lying quietly, moves easily"; "Squirming, shifting, tense" | "Lying quietly, normal position, moves easily"; "Squirming, shifting back and forth, tense" |
| PA-50 LOST | same table, Cry, 0 and 2 | 48 | "No cry"; "Crying steadily, screams or sobs" | "No cry (awake or asleep)"; "Crying steadily, screams or sobs, frequent complaints" |
| PA-51 LOST | same table, Consolability, 1 | 48 | "Reassured by touch or talk, distractable" | "Reassured by occasional touching, hugging or being talked to, distractable" |
| PA-75 DIFFERENT (applied as an addition; the flow is unchanged) | `again`, new `hint`; `mild`, new item 5 and a link | 49 | `again` No goes to `mild`, with no mention of the printed box | hint on `again`: "The ebook prints the No exit as "Refer to Clinical Pathway for Pain (1) & (2)" (p49)."; item on `mild`: "After the morphine pain protocol (p49): refer to Clinical Pathway for Pain (1) and (2)"; link on `mild` to `#pain` |
| PA-77 MOVED | `mp`, new item 3 | 49 | the note only on the `epc` outcome | left on `epc`, and also on the protocol step: "In case of anaphylaxis, liver disease and kidney disease, discuss the mode of treatment with the EP" |
| PA-80, 84, 87, 90, 93, 96, 99 MISSING | new table "Choice of analgesia: side effects (p50)" (Drug, Side effect), appended last | 50 | no Side effect column | seven rows: paracetamol "Rare"; diclofenac and mefenamic acid (one printed cell for both); celecoxib; tramadol; morphine; fentanyl; ketamine, each as printed |
| PA-88 LOST | table "Choice of analgesia", Celecoxib, Caution | 50 | "IHD, cerebrovascular disease, sulphonamide hypersensitivity, uncontrolled hypertension" | "IHD, cerebrovascular disease, hypersensitivity to sulphonamides, higher doses associated with a higher incidence of GIT and CVS side effects, patients with an indication for cardiac protection require aspirin as a supplement, uncontrolled hypertension" |
| PA-91 LOST | same table, Tramadol, Caution | 50 | "Seizure risk (high dose, CKD); elderly start 50 mg, max 300 mg/day" | "Risk of seizures (high dose, especially CKD); elderly: start low 50 mg, max 300 mg/day (to avoid if possible)" |
| PA-92 LOST | same table, Morphine, Dosage | 50 | "SC: under 65 years ... Oral IR: 5–10 mg 4-hourly; elderly 2.5–5 mg 4–6 hourly" | "SC (adults): under 65 years 5–10 mg 4-hourly; over 65 years 2.5–5 mg 4-hourly. IV: follow the morphine pain protocol. Oral: starting dose 5–10 mg 4-hourly of IR; elderly 2.5–5 mg 4–6 hourly of IR" |
| PA-94 DIFFERENT (applied) | same table, Morphine, Caution | 50 | "Acute asthma, respiratory depression, head injury; renal or hepatic dysfunction: reduce initial dose to 1/2–1/3" | "Acute bronchial asthma (histamine), respiratory depression, head injuries; renal and hepatic dysfunction: needs dose adjustment by decreasing initial dose by 1/2 to 1/3 of the usual amount" |
| PA-97 DIFFERENT (applied) | same table, Fentanyl, Caution | 50 | "Renal or hepatic dysfunction: reduce initial dose to 1/2–1/3" | "Renal and hepatic dysfunction: needs dose adjustment by decreasing initial dose by 1/2 to 1/3 of the usual amount" |

### Paracetamol overdose (`paracetamol-overdose`, p52)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| Page field | `page`, and the comment line above the entry | 52 | "51–52" | "52" |
| PO-04 LOST (as a note only: rule 2 keeps the option label) | `time`, new `hint` | 52 | no hint; option 3 "8 to 24 hours" | hint "The ebook prints the four boxes as "<2 hours", "2-8 hours", ">8-24 hours" and ">24 hours" (p52)." The label "8 to 24 hours" is quoted by `CALC_FACTS` in `engine.js` and is unchanged. |

Renal colic (p53–54): no LOST, MISSING, DIFFERENT or MOVED row; nothing changed.

### Supraventricular tachycardia (`svt`, p55–56)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| SV-08 LOST | `cv`, item 3 (items 1 and 2, which the calculator reads, are unchanged) | 55 | "If refractory: correct the underlying cause, ensure good pad contact, IV amiodarone, alternative pad position (anterior-posterior), 4th synchronised shock after amiodarone, seek expert help" | "If refractory, can consider: correct the underlying cause, ensure good pad-chest wall contact, IV amiodarone, alternative pad position (anterior-posterior), deliver the 4th synchronised cardioversion (after amiodarone or alternative pad placement), seek expert help" |
| SV-22 LOST | table "Drugs used to terminate SVT", Adenosine, Dose | 56 | "6 mg rapid IV push (1–2 s) through a large vein, 20 ml NS flush; if ineffective in 1–2 min, 12 mg, then 18 mg. Reduce dose by 50% ..." | "1st dose: 6 mg rapid IV push (1–2 s) through a large (e.g. antecubital) vein, followed by a 20 ml NS flush. If not effective in 1–2 min, 2nd dose: 12 mg rapid bolus followed by a 20 ml NS flush. If not effective in 1–2 min, 3rd dose: 18 mg rapid bolus followed by a 20 ml NS flush. Reduce dose by 50% ..." |
| SV-24 LOST | same table, Adenosine, Precautions | 56 | "Transient chest discomfort, nausea, flushing; caution in asthma; avoid in WPW" | "Transient unpleasant side effects, in particular nausea, flushing and chest discomfort; caution in asthma; avoid in WPW syndrome, as AV node blockade may promote conduction across the accessory pathway, causing ventricular fibrillation" |
| SV-26 LOST | same table, Verapamil, Precautions | 56 | "Cardiovascular collapse in ventricular tachycardia; reduced contractility in severe LV dysfunction" | "May cause cardiovascular collapse if given to a patient with ventricular tachycardia; may decrease myocardial contractility and critically reduce cardiac output in patients with severe LV dysfunction" |
| SV-28 LOST | same table, Amiodarone, Precautions | 56 | "Hypotension, bradycardia, heart block; cumulative over 2.2 g with hypotension; phlebitis (large vein)" | "Give by infusion pump, drop med or flow rate meter into a large-bore branula; can cause hypotension, bradycardia and heart block; cumulative dose over 2.2 g is associated with hypotension; possible inflammation of veins after IV infusion (use large peripheral veins)" |
| SV-31 LOST | `advice` 1 (not narrated) | 56 | "Short attacks that are not bothersome may not need treatment" | "Attacks like this may occur again. If episodes last only a few minutes and are not bothersome, treatment may not be necessary" |
| SV-32 LOST | `advice` 2 (not narrated) | 56 | "... try simple manoeuvres lying or sitting: take a deep breath and strain as if passing a bowel movement; or blow hard against your thumb in your mouth; or gently massage one side of the neck for 15 seconds (only if no known arterial disease)" | "... try simple manoeuvres while lying or sitting down, to prevent fall injuries: take a deep breath in and then strain, as if trying to pass a bowel movement; or take a deep breath in, place the tip of the thumb in the mouth and blow hard against the thumb; or gently massage the front part of one side of the neck around the pulse area for 15 seconds (only if there is no known arterial disease)" |

### Syncope (`syncope`, p57–58)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| SY-09 LOST | `home`, item 1 (the last item, which the calculator reads, is unchanged) | 57 | "... orthostatic hypotension (a fall of 20 mmHg systolic or 10 mmHg diastolic on standing)" | "... orthostatic hypotension (a significant reduction in blood pressure that typically occurs on standing or assuming an upright posture: a reduction of 20 mmHg or more in systolic pressure or of 10 mmHg or more in diastolic pressure; could be a symptom of another disease)" |
| SY-19 LOST | `risk`, checklist item 10 (text only) | 58 | "Abnormal ECG (arrhythmia, LBBB, ischaemia)" | "Abnormal ECG findings (e.g. arrhythmia, LBBB, ischaemia)" |
| SY-27 LOST | `advice` 6 (not narrated) | 58 | "Sit for 1–2 minutes before standing in the morning or getting up from a chair if prone to dizziness" | "Always sit for 1–2 minutes before standing in the morning or getting up from a chair if you are prone to dizziness or blackout in this situation" |

### Acute scrotal pain (`scrotal-pain`, p59–63)

| Row | Node or field | Page | Was | Now |
|---|---|---|---|---|
| SC-30 DIFFERENT (applied) | `lead` (the rule is not repeated elsewhere in the entry) | 61 | "Patients 12 and over go to urology; under 12 go to paediatric surgery." | "Patients more than 12 years old are referred to urology; patients under 12 years old are referred to paediatric surgery." |
| SC-09 LOST and SC-14 MISSING | `dx`, new `hint` (the option label "No, another diagnosis" on `tt` is unchanged) | 59, 60 | no hint | "Diagnosis other than testicular torsion (no operation needed) (p59). Focused history and clinical examination (p60): see the table of risk factors, symptoms and signs below." |
| SC-15 to SC-23 MISSING | new `tables` array with one table, "Non-testicular torsion: risk factors, symptoms and signs (p60)" | 60 | (nothing) | columns Fournier's gangrene, Scrotal abscess, Acute epididymitis or epididymo-orchitis; rows Risk factors, Symptoms and Signs as printed (with "20–40s", and "Phren's sign" marked as printed), and a last row with the two printed referral boxes |
| SC-10 DIFFERENT (not applied, rule 5: page 60 kept) and SC-27 LOST | `fg` and `abs`, new `gap` | 59, 60, 61 | no gap | "Page 59 prints a non-urgent referral for every diagnosis other than testicular torsion, then discharge with the discharge bundle or ward admission; page 60 prints the semi-urgent referral shown here. Page 60 marks this box "***"; on page 61 "***" is the emergency operation within 1 hour of review, and "****" is the semi-urgent referral, seen within 1–2 hours of referral." |
| SC-12 MISSING | `epi`, new last item | 59 | (nothing) | "Or ward admission (p59)", after "If authorised for home: give the discharge bundle" |
| SC-31 LOST | `op`, new item | 61 | no items | "After review by the primary team, the patient must be in the emergency operation theatre within 1 hour of review" |
| SC-32 LOST | `semi`, items 1 and 2 | 61 | "Seen within 1–2 hours of referral"; "± urgent scrotal ultrasound: ordered only by the primary team, done within 1 hour of request" | "Seen by the on-call specialist or MO from urology or paediatric surgery within 1–2 hours of referral"; "± urgent scrotal ultrasound (sensitivity 96–100%, specificity 84–95%): ordered only by the primary team, from the on-call specialist or MO of the Radiology department; done within 1 hour of request" |
| SC-39 LOST | `fg` item 2, `abs` items, `epi` items 2 to 4 | 62 | "Paediatric: ..."; abscess regimen with no "Adult"; "Non-STD related", "STD related", "Paediatric (only if ...)" | "Paediatric or adolescent: ..."; "Adult 1st line: ..." and a new item "Paediatric or adolescent: the cell is empty in the ebook (p62)"; "Adult, non-STD related", "Adult, STD related", "Paediatric or adolescent (only if pyuria or positive culture or underlying GU abnormality)" |
| SC-44 LOST | `fg`, item 2 | 62 | "non-strep: IV cloxacillin 20–40 mg/kg/day in 3–4 doses" | "non-streptococcus, Staph. A group: IV cloxacillin 20–40 mg/kg/day in 3–4 divided doses" |
| SC-46 MISSING | `refs`, new last line | 62 | (nothing) | "Antibiotic guides (p62): based on antibiotic guidelines, UpToDate 2023" |
| SC-53 MOVED | `bundle`, new last item | 63 | the rule only as discharge advice 7 | left in the advice, and also on the discharge outcome: "No acute testicular pain should be discharged from the Emergency Department before being seen by an Emergency Physician, urologist or paediatric surgeon (p63)" |

## Part 2: rows not applied, with the reason

Rules are the numbered rules of the brief: rule 2 (never change text that `engine.js` quotes), rule 3 (never edit the six narrated advice lists), rule 5 (leave the app's wording; quote the print on the node where it has a `hint`, `gap` or `info`).

### Not applied at all

| Row | Kind | Pathway, place | Page | Printed | App (unchanged) | Reason |
|---|---|---|---|---|---|---|
| B43 | DIFFERENT | `behavioural-disturbance`, table "Medication", Midazolam, Starting dose | 8 | "Paediatric / IM 0.1-0.2 mg/kg – / 0.5mg/kg" | "paediatric IM 0.1–0.2 mg/kg (max 0.5 mg/kg)" | Rule 2. `CALC_FACTS` in `engine.js` holds the phrase "paediatric IM 0.1–0.2 mg/kg (max 0.5 mg/kg)", and the BARS calculator prints "(max 0.5 mg/kg, ... mg)" itself. The brief asks for this cell as printed, so both lines in `engine.js` have to change with it. Proposed cell: "IM 0.07–0.1 mg/kg (usual 5 mg); paediatric IM 0.1–0.2 mg/kg – 0.5 mg/kg". |
| SV-29 | LOST | `svt`, table "Drugs used to terminate SVT", Esmolol, Dose | 56 | "If HR not controlled in 5 minutes, Repeat loading dose over 1 minute and continue with Maintainence infusion 0.1mg/kg/minute over 4 minutes / May administer 3rd bolus if required, then continue Maintainence dose at 0.15mg/kg/minute (9mg/kg/hour) / Titrate according to response / Max dose: 0.3mg/kg/minute (18mg/kg/hour)" | "Loading 0.5 mg/kg/min over 1 min, then 0.05 mg/kg/min over 4 min; repeat loading if HR not controlled in 5 min, maintenance 0.1 mg/kg/min; 3rd bolus if needed, then 0.15 mg/kg/min; max 0.3 mg/kg/min" | Rule 2. `CALC_FACTS` quotes four phrases of this cell. Proposed wording, which keeps all four phrases whole: "Loading 0.5 mg/kg/min over 1 min, then 0.05 mg/kg/min over 4 min; repeat loading over 1 min if HR not controlled in 5 min, and continue with maintenance 0.1 mg/kg/min over 4 min; 3rd bolus if required, then 0.15 mg/kg/min (9 mg/kg/hour); titrate according to response; max 0.3 mg/kg/min (18 mg/kg/hour)". |
| TBI 24 | DIFFERENT | `mild-tbi`, `advice` 1 | 26 | "if possible patient must be accompanied by responsible adult." | "the patient should be accompanied by a responsible adult if possible" | Rule 3 (narrated). |
| TBI 27 | LOST | `mild-tbi`, `advice` 3 | 26 | "Do have plenty of rest" | "rest" | Rule 3 (narrated). |
| TBI 30 | LOST | `mild-tbi`, `advice` 8 | 26 | "9. Don't drive alone" | "Don't drive" | Rule 3 (narrated). |
| DENGUE 19 | LOST | `dengue`, `advice` 5 | 32 | "5. If possible. use mosquito repellent or rest under mosquito net even during day time to prevent mosquito biites" | "Do: use mosquito repellent or rest under a mosquito net, even in the daytime" | Rule 3 (narrated). |
| HYPO 33 | LOST | `hypoglycaemia`, `advice` 5 | 44 | "... causing unconsciousness / seizures / confusion ... persistent low blood glucose levels with or without symptoms or despite quick acting carbohydrates" | "Seek medical help if a hypo causes unconsciousness or seizures, does not improve with quick-acting carbohydrate, or blood sugar stays low" | Rule 3 (narrated). |
| DENGUE 14 | DIFFERENT | `dengue`, table "Important points", Ideal body weight, female | 31 | "Female : 45.5 kg + 0.98 (height in cm - 152 )" (read again from a crop: 0.98 for female, 0.91 for male) | "45.5 kg + 0.91 × (height in cm − 152)" | Rule 5: left for the main session. No note was added, because the cell belongs to a table and the brief says to leave it. |
| PA-79 | DIFFERENT | `pain`, table "Choice of analgesia", Paracetamol, Dosage | 50 | "<50kg: 15mg/kg/dose, Max 60mg/kg/dose" (read again from a crop) | "Under 50 kg: 15 mg/kg/dose, max 60 mg/kg/day" | Rule 5, and rule 2: `CALC_FACTS` quotes "max 60 mg/kg/day" and the Analgesia by weight calculator prints "(60 mg/kg/day)". A table cell has no `hint`, `gap` or `info`, so no note was added. |
| SV-02 | MISSING | `svt`, the first box | 55 | a rhythm strip (a picture, no words) | nothing | A picture; not transcribed. |

### Wording kept, with the print quoted on the node

| Row | Kind | Pathway, place | Page | What was added | Reason |
|---|---|---|---|---|---|
| B12 | DIFFERENT | `behavioural-disturbance`, `bars` hint | 5, 6 | "The ebook prints BARS 1 as "Difficult or unable to response" (p5, p6)." | Rule 5. |
| CAP 6 | DIFFERENT | `pneumonia`, `curb` hint | 27 | "The ebook prints item R as "Respiratory rate >30/min" (p27)." | Rule 5; the checklist item is read by the CURB-65 calculator. |
| CAP 13 | DIFFERENT | `pneumonia`, `psi` hint | 27 | "The ebook labels the three branches "Class I or II", "Class III" and "Class III or IV" (p27)." | Rule 5. |
| HYPO 3 | DIFFERENT | `hypoglycaemia`, `route` hint | 43 | the printed diamond and its Yes and No labels | Rule 5. |
| HYPO 14 | DIFFERENT | `hypoglycaemia`, `lc`, last item | 43 | "The ebook prints the box before this step as "BG < 3.9 mmol/L" (p43)" | Rule 5. `lc` is a step, and a step shows only its items, so the line is an item. |
| HYPO 16 | DIFFERENT | `hypoglycaemia`, `risk` hint | 43 | "The ebook prints item 1 as "Long acting hyperglycaemia agent" (p43)." | Rule 5. |
| SC-10 | DIFFERENT | `scrotal-pain`, `fg` and `abs`, `gap` | 59, 60 | what page 59 prints, beside the page 60 referral that the app keeps | Rule 5. |
| PO-04 | LOST | `paracetamol-overdose`, `time` hint | 52 | the four printed boxes, with ">8-24 hours" | Rule 2: `CALC_FACTS` quotes the option label "8 to 24 hours", so the label stays. |

### MOVED row left as it is

| Row | Pathway, place | Page | Reason |
|---|---|---|---|
| C4 | `acs`, `ijn` hint ("IJN hotline 03-2617 8996.") | 12 | The hint already sits on the one question that stands for the three printed boxes. Showing "Call IJN hotline" as its own step would need a new node. |

## Part 3: counts

| Kind | Rows in the reviews | Applied | Note only (wording kept) | Not applied |
|---|---|---|---|---|
| LOST | 56 | 50 | 1 (PO-04) | 5 (TBI 27, TBI 30, DENGUE 19, HYPO 33, SV-29) |
| MISSING | 35 | 34 | 0 | 1 (SV-02) |
| DIFFERENT | 19 | 8 (B37, B41, HYPER 4, HYPO 2, PA-75, PA-94, PA-97, SC-30) | 7 (B12, CAP 6, CAP 13, HYPO 3, HYPO 14, HYPO 16, SC-10) | 4 (B43, TBI 24, DENGUE 14, PA-79) |
| MOVED | 4 | 3 shown where printed as well (B34, PA-77, SC-53) | 0 | 1 left as it is (C4) |

Also changed: the `page` fields of `pain` ("45–51") and `paracetamol-overdose` ("52") with their two comment lines, and eight lines that the reviews list as added by the app, which now begin "Department note: " (`acs` `home`; `pneumonia` `opd`; `stroke-tia` `tiadc`; `dengue` `med`; `heart-failure` `home`; `hypertensive-urgency` `home`; `hyperglycaemia` `dka` and `hhs`). Four of them were the second half of a line and are now items of their own.

## Part 4: left for other files (not edited here)

- `engine.js` lines 1820 and 2010 still say `src:'Ebook p45–50'` (the calculators Analgesia by weight and Pain scales), and `data7.js` line 824 says "(p45–50)". The paracetamol calculator says `src:'Ebook p52'`: that line, and a sentence in the Adjusted weight calculator's note about the ebook's 0.98 for women, were changed in `engine.js` by another session while this round ran (06:07 on 11 Nov 2026), not by this one.
- `engine.js`, the BARS calculator: its verdict repeats the one-line restraint summary, which is why that line in `meds` was kept and the three printed lines were added after it.
- B43, SV-29 and PA-79 need `CALC_FACTS` and the calculators changed together with `data.js` (see Part 2).
- New tables add a tab each: `behavioural-disturbance` (6 tables now), `asthma` (2), `pain` (8), `scrotal-pain` (1, its first). The test's screenshots of these entries will show the new tabs.
- `npm run build` and `npm test` were not run.


## Part 5: done by the main session after this log (12 Nov 2026)

- **SV-29, esmolol (p56):** applied. The cell now reads "Loading 0.5 mg/kg/min over 1 min, then 0.05 mg/kg/min over 4 min; repeat loading over 1 min if HR not controlled in 5 min, and continue with maintenance 0.1 mg/kg/min over 4 min; 3rd bolus if required, then 0.15 mg/kg/min (9 mg/kg/hour); titrate according to response; max 0.3 mg/kg/min (18 mg/kg/hour)", which keeps whole the four phrases the calculator quotes.
- **Dengue row 14, ideal body weight for women (p31):** the cell now shows the print, "45.5 kg + 0.98 × (height in cm − 152)", and says the dengue CPG, 4th edition, prints 0.91 and the calculators use 0.91. Read from the page by the main session too.
- **B43, midazolam for a child (p8):** still not applied (the calculator quotes the cell). Read from the page by the main session: "IM 0.1-0.2 mg/kg – 0.5mg/kg" is in the Starting Dose column, so the guide's "max 0.5 mg/kg" is a reading of the print, not the print. It is an open item.
- **`engine.js`:** the paracetamol calculator's source is "Ebook p52"; the adjusted weight calculator's note says the ebook prints 0.98 for women and the CPG 0.91.
