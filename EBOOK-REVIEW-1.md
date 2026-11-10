# Ebook review 1: pages 5 to 23 against the app

Review only, 11 Nov 2026. Nothing in the app was changed. The ebook is *The Clinical Pathway in Emergency for Medical Officer* (Emergency & Trauma Department, Hospital Kuala Lumpur, 2025). The app text is the source in `src/parts/data.js` as it stands today (the build not yet published), read with `sources/ebook-dump.js` and then line by line in `data.js`.

## How this was done

- Every page was read as an image: `sources/ebook-pages/pNN.png` for the whole page, then crops of `sources/ebook-pages-hi/pNN.png` for every dose, threshold, age, time, score and symbol. The crops are listed at the end with their geometry, so any of them can be cut again. Where a row below names a crop (for example `p08-a`), that is where the number was read.
- No medical knowledge was used. A row says only whether the print and the app agree.
- Printed text is quoted as printed, with its own spelling (for example "Olanzepine", "continously", "avaibility", "Excusion"). A slash inside a quotation marks a line break in the print.
- People's names are not transcribed. In reference rows a personal author's name is shown as "[author]"; names that are the title of a book or scale (Tintinalli's Emergency Medicine, Marino's the ICU book, the Richmond scale) are kept as titles.
- Department notes (`dept`), see-also links (`see`) and the calculators are not ebook content and were left out, except to check that no ebook text lives only there. None does on these pages.

### Status words

| Status | Meaning |
|---|---|
| SAME | Same words, or only spelling, punctuation, UK spelling or an abbreviation changed. |
| CONDENSED | Shortened or reworded, nothing of substance lost. |
| LOST | Reworded or shortened so that a fact, number, condition, qualifier or step printed in the ebook is missing from the app. |
| MISSING | Not in the app at all. |
| DIFFERENT | The app says something else, or attaches a label to a number that the print leaves bare. |
| MOVED | Present, but attached to a different step than printed. |

Things the app adds are not rows; they are listed under ADDED for each pathway. An outcome or branch the app invents where the print stops is listed under ADDED and again under the flow.

### Pages

The pages are as the app claims: 5 to 9 acute behavioural disturbance, 10 to 11 abdominal pain, 12 to 14 acute coronary syndrome, 15 to 16 anaphylaxis, 17 to 18 acute gastroenteritis, 19 to 23 bronchial asthma (19 to 23 are landscape). All six `page` fields are right.

---

## 1. Acute behavioural disturbance

Printed pages 5 to 9 (p5 violent flow, p6 non-violent flow, p7 definition, ABCDE, de-escalation and restraint, p8 drug tables, p9 ketamine, reversal agents, sedation scale and references). App id `behavioural-disturbance`. The app's `page:'5–9'` is right.

### 1.1 Row by row

| Row | Page | Kind | Printed text | Status | Where in the app | Note |
|---|---|---|---|---|---|---|
| B1 | 5 | flow | "Clinical Pathway For Acute Behavioral Disturbance"; start box "Acute abnormal behavior" | SAME | `title`, `lead` | |
| B2 | 5 | flow | "Stable ABC": No, "Manage accordingly"; Yes, down | SAME | `abc`, `manage` | |
| B3 | 5 | flow | "Violent/ History of violence": Yes, down; No, "Non violent/ BARS 4", then "Refer non violent algorithm" | SAME | `viol` (second option "No (non-violent, BARS 4)" goes to `nvorg`) | |
| B4 | 5 | flow | "Possession of weapon": Yes, "Call Polis Bantuan for help / ACTIVATE CODE GREY" | SAME | `weapon`, `grey` | |
| B5 | 5 | management | "A: ALERT Team leader and team / ASSESS overall situation and risk (BAR scale) / B: BEHAVIORAL stabilisation , breakaway / DE-ESCALATION technique" | SAME | `ab` items 1 to 4 | Crop `p05-b`. |
| B6 | 5 | flow | "BARS 1-3" and "BARS 5-6" join and go to the organicity question; "BARS 7" goes to C | SAME | `bars` options "1 to 3", "5 to 6", "7" | Crop `p05-b`. |
| B7 | 5 | management | "C: Choice of medication / Control & restraint", then to the organicity question | SAME | `meds` step title, next `org` | |
| B8 | 5 | flow | "*Evidence of organicity? / Toxidrome / Trauma / Medical emergencies": Yes, "Manage accordingly"; No, down | SAME | `org`, `manage` | The three words under the question are not shown under it in the app; the app worked them into the checklist (see ADDED). |
| B9 | 5 | disposition | "Psychiatry MO review within 45 minutes / D : documentation / Monitoring as per Observation chart for agitated/ aggressive patient" | SAME | `psy` title and item 1 | Crop `p05-c`. |
| B10 | 5 | management | "E: Event / Incident reporting & RCA (if required)" | SAME | `psy` item 2 | |
| B11 | 5 | disposition | "Disposition" | SAME | `psy` item 3, "Then disposition" | The print gives no detail of the disposition. |
| B12 | 5, 6 | signs | BARS row 1: "Difficult or unable to response" | DIFFERENT | table "Behavioural Activity Rating Scale (BARS)", row 1 | The app prints "rouse" where the ebook prints "response". Crops `p05-c`, `p06-b`. |
| B13 | 5, 6 | signs | BARS rows 2 to 7: "Asleep but response normally to verbal or physical contact"; "Drowsy, appears sedated"; "Quiet and awake (normal level of activity)"; "Signs of overt activity ( physical or verbal) , calms down with instructions"; "Extremely or continously active, not requiring restraint"; "Violent, requires restraint" | SAME | BARS table rows 2 to 7 | Grammar and spelling only ("responds", "continuously"). |
| B14 | 6 | flow | "Clinical Pathway for Acute Behavioral Disturbance( Non-violent)"; "Acute abnormal behaviour / Non violent / BARS 4" | SAME | `nvorg` question | |
| B15 | 6 | flow | "*Evidence of organicity ? / Toxidrome / Trauma / Medical emergencies": Yes, "Manage accordingly" | SAME | `nvorg`, `manage` | |
| B16 | 6 | flow | "Office hour": Yes, "Send to Psychiatric clinic/ KK" | SAME | `office`, `clinic` | |
| B17 | 6 | disposition | "Office hour": No, "Psychiatry MO review within 45 minutes", then "Disposition" | SAME | `psy2` | Crop `p06-a`. |
| B18 | 6 | footnote | "*Evidence of organicity, trauma or medical emergencies": "Substance intoxication (Alcohol, Serotonin syndrome, Anticholinergic syndrome, Neuroleptic Malignant syndrome)"; "Hypoxia"; "Metabolic disturbance: hypoglycaemia , hyponatraemia , thyroid storm"; "Sepsis & CNS infection"; "Seizures e.g. Temporal lobe epilepsy"; "Head injury"; "Poorly controlled pain" | SAME | `org` and `nvorg` checklist items 1 to 7 | Seven printed lines; the app has eight items and lengthens "Head injury" (see ADDED). Crop `p06-b`. |
| B19 | 7 | definition | "Definition : Acute behavioural disturbance (also previously called excited delirium, acute behavioural disorder, or agitated delirium) is an umbrella term used to describe a presentation which may include abnormal physiology and/or behaviour" | MISSING | nowhere | Searched all of `src/parts` for "excited delirium" and "umbrella term": no match. |
| B20 | 7 | management | "The management of patients with aggression follows the ABCDE pathway:" with "A Assessment" and "E Event reporting" | SAME | `lead` | |
| B21 | 7 | management | "B / Behaviour stabilisation ± breakaway techniques" | LOST | `lead` ("Behaviour stabilisation"); `ab` item 3 ("B: behavioural stabilisation, breakaway") | The "±" is not carried. The app follows the p5 box, which prints no "±". |
| B22 | 7 | management | "C / Choice of medication ± control restraint" | LOST | `lead` ("Choice of medication"); `meds` title ("control and restraint") | The "±" is not carried, as above. |
| B23 | 7 | management | "D / Documentation & debriefing" | LOST | `lead` ("Documentation"); `psy` item 1 ("D: documentation") | "& debriefing" is not under D anywhere. "Debrief patient and staff" is in the app only as the last de-escalation domain. |
| B24 | 7 | reference | Beside the ABCDE table: "Guidelines on management of aggressive patients in ministry of health facilities 2016" | SAME | `refs` 2 | In the app it is a reference, not a source line on the ABCDE list. |
| B25 | 7 | management | "De-escalation techniques / Domains of De-escalation": "Respect personal space", "Do not be provocative", "Establish verbal contact", "Be Concise", "Identify wants and feelings", "Listen closely", "Agree or agree to disagree", "Set clear limits", "Offer choices and optimism", "Debrief patient and staff" | SAME | table "De-escalation techniques" | All ten. |
| B26 | 7 | management | "Observation & monitoring patients on physical restraint:" / "1. Risk of suffocation with prone positioning." | CONDENSED | `meds` item 2: "Monitor for restraint risks: suffocation (prone position), ..." | The five-line list became one line in the BARS 7 step. |
| B27 | 7 | management | "2. Risk of aspiration and subsequent respiratory problems without head elevation." | LOST | `meds` item 2: "aspiration" | "and subsequent respiratory problems without head elevation" is gone. |
| B28 | 7 | management | "3. Abrasions, bruises, dislocation, contusion, numbness, tingling, fracture, or muscle strain." | LOST | `meds` item 2: "injury" | Eight named injuries became one word. |
| B29 | 7 | management | "4. Hyperthermia, lactic acidosis, and elevated creatinine kinase (CK) levels due to prolonged struggling." | LOST | `meds` item 2: "hyperthermia, lactic acidosis, raised CK" | "due to prolonged struggling" is gone. |
| B30 | 7 | management | "5. Escape from restraints" | SAME | `meds` item 2: "escape" | |
| B31 | 8, 9 | drug table | Group headings: "First generation antipsychotics (FGA)", "Second generation antipsychotics (FGA)", "Benzodiazepine", "Sedation" | LOST | table "Medication" | The app has one flat list of seven drugs. The class shows only in the notes of olanzapine and risperidone ("As for first-generation antipsychotics"). "Reversal agents" is kept as a table title. |
| B32 | 8, 9 | drug table | Column "Time to peak concentration" (p9: "Time to max plasma concentration"): haloperidol PO "2-6 hr", IM "20 min", paediatric "20 min"; olanzepine "6 hr"; risperidone "1hr"; midazolam "30 min – 1hr"; diazepam "30 min – 1.5hr"; lorazepam "30- 60 min"; ketamine "Onset / IM 3-4min / IV 30sec" | MISSING | nowhere | The app's table has four columns: Drug, Starting dose, Max dose, Notes. Crops `p08-a`, `p08-b`, `p08-c`, `p09-a`. |
| B33 | 8, 9 | drug table | Column "Approx. plasma half-life": haloperidol "20 hr" (all three rows); olanzepine "21-54 hr"; risperidone "20hr"; midazolam "1-4hr"; ketamine "2.5hr" | MISSING | nowhere | Same crops. |
| B34 | 8 | drug table | Half-life of diazepam "3 – 7 days" and lorazepam "12.9 h" | MOVED | "Medication" table, Notes column: "Half-life 3–7 days", "Half-life 12.9 h" | The app's Notes column holds complications for five drugs and the half-life for these two. Crop `p08-c`. |
| B35 | 8 | drug table | Haloperidol: "PO : 5-10mg / Repeat in 30 – 60min / If needed", max "20mg daily"; "IM : 5 -10mg / Repeat in 30-60min / If needed", max "20mg daily" | SAME | "Medication" row Haloperidol | Crop `p08-a`. |
| B36 | 8 | drug table | Haloperidol: "Paediatric / PO : 0.01 - 0.1mg/kg 12h / IM : 0.025-0.075mg/ kg/dose / Age > 12 receive adult dose (usual 2.5-5mg)" | SAME | Haloperidol, Starting dose | "12h" became "12-hourly"; "Age > 12" became "over 12 years". Crop `p08-a`. |
| B37 | 8 | drug table | Haloperidol paediatric max dose: "0.5mg daily / 2.5mg daily" | DIFFERENT | Haloperidol, Max dose: "(paediatric 0.5 mg daily PO, 2.5 mg daily IM)" | The print gives the two numbers on two lines with no route. The app labels the first PO and the second IM. Crop `p08-a`. |
| B38 | 8 | drug table | Haloperidol complications: "Acute dystonia / Parkinsonism / Neuroleptic malignant syndrome / Seizure" | SAME | Haloperidol, Notes | "NMS" for the third. |
| B39 | 8 | drug table | "Olanzepine *": "PO : 5-10mg", "20mg daily", "Same as FGA" | SAME | row Olanzapine | Spelling changed. The asterisk is not carried; pages 8 and 9 print no footnote for it. Crop `p08-b`. |
| B40 | 8 | drug table | "Risperidone *": "PO : 0.5 – 1.0 mg / Paediatric / PO : 0.02mg/kg bd/tds"; "Same as FGA" | SAME | row Risperidone | Asterisk as above. Crop `p08-b`. |
| B41 | 8 | drug table | Risperidone max dose: "16mg daily / 0.15mg/kg" | DIFFERENT | Risperidone, Max dose: "16 mg daily (paediatric 0.15 mg/kg)" | The print gives "0.15mg/kg" bare on the second line; the app labels it paediatric. Crop `p08-b`. |
| B42 | 8 | drug table | Midazolam: "IM : 0.07 - 0.1 mg/kg / (usual 5mg)", max "-" | SAME | row Midazolam | Crop `p08-c`. |
| B43 | 8 | drug table | Midazolam: "Paediatric / IM 0.1-0.2 mg/kg – / 0.5mg/kg" | DIFFERENT | Midazolam, Starting dose: "paediatric IM 0.1–0.2 mg/kg (max 0.5 mg/kg)" | The print joins "0.1-0.2 mg/kg" and "0.5mg/kg" with a dash; it does not print "max". Crop `p08-c`. |
| B44 | 8 | drug table | Midazolam complications: "Respiratory depression Cardiac arrest / Paradoxical agitation" | SAME | Midazolam, Notes | |
| B45 | 8 | drug table | "Diazepam (Valium)": "PO/IV : 5 – 10mg / Repeat in 30- 60min / if needed / Paediatric / IV/PR : 0.1- 0.4mg/kg / PO : 0.04 – 0.2mg/kg bd/tds"; max "20-60mg / 10mg (IV) / 20mg (PR)" | SAME | row Diazepam | "(Valium)" dropped. Crop `p08-c`. |
| B46 | 8 | drug table | Diazepam complications: the cell "Respiratory depression Cardiac arrest / Paradoxical agitation" runs down beside both midazolam and diazepam | LOST | Diazepam, Notes: "Half-life 3–7 days" | The app shows these complications for midazolam only. Crop `p08-c`. |
| B47 | 8 | drug table | Lorazepam: "PO: 1-2mg Repeat in 30-60 minute"; max "4-8mg / Elderly/ frail half of adult dose"; complications cell empty | SAME | row Lorazepam | "if needed" is not printed for lorazepam, and the app does not add it. Crop `p08-c`. |
| B48 | 9 | drug table | Ketamine: "IM 4mg/kg IV 0.5 - 2mg/kg over 60sec"; max "-"; "Hypertension / Tachycardia / Hypersalivation / Laryngospasm / Emergence phenomenon" | SAME | row Ketamine | Crop `p09-a`. |
| B49 | 9 | drug table | Flumazenil: "Benzodiazepine Overdose"; "First dose : / IV 0.2mg over 30sec / If no response - repeat another every 1 min / titrated until response or max dose 3mg"; "Seizures / Autonomic instability / Arrythmia" | LOST | "Reversal agents" row Flumazenil: "IV 0.2 mg over 30 s; if no response repeat after 1 min, titrate to response or max 3 mg" | "every 1 min" became "after 1 min", and "First dose" is gone. Crop `p09-a`. |
| B50 | 9 | drug table | Orphenadrine: "Acute dystonia from antipsychotics"; "IM/IV 60mg bd / (max 120mg.day) / Paediatric / PO 1-2mg/kg tds"; "Anticholinergic symptoms" | SAME | row Orphenadrine | Crop `p09-a`. |
| B51 | 9 | drug table | "Diphenhydramine hydrochloride (antihistamine)": the indication cell "Acute dystonia from antipsychotics" runs down beside it; dose "Paediatric / 1-2mg/kg tds/qid"; "Sedation / Dizziness / Anticholinergic symptoms" | LOST | row Diphenhydramine: indication "Acute dystonia (paediatric)", dose "1–2 mg/kg tds/qid" | "from antipsychotics" and "hydrochloride (antihistamine)" are gone. "Paediatric" was moved from the dose to the indication. Crop `p09-a`. |
| B52 | 9 | signs | "Level of sedation / Richmond Agitation-Sedation Scale", rows +4 to −1, −3, −4, −5 | SAME | table "Richmond Agitation-Sedation Scale (RASS)" | The printed table is a soft picture but reads in crop `p09-b`. "greater than 10 seconds" became "over 10 s"; "Unarousable" became "Unrousable". The heading "Level of sedation" is not carried. |
| B53 | 9 | signs | RASS −2: "Light Sedation / Briefly awakens to voice / (eye opening & contact less than 10 seconds)" | LOST | RASS row −2: "Briefly awakens to voice (eye contact under 10 s)" | "eye opening &" is gone here, though the app keeps it in row −1. Crop `p09-b`. |
| B54 | 9 | reference | "1. RCEM Acute Behavioural Disturbance in Emergency Departments 2022"; "2. Guidelines on management of aggressive patients in ministry of health facilities 2016"; "4. MIMS 2023" | SAME | `refs` 1, 2, 4 | Crop `p09-c`. |
| B55 | 9 | reference | "3. [author] et al. Verbal de-escalation of the agitated patient: consensus statement of the American association for emergency psychiatry project BETA de-escalation workgroup. West J Emerg Med. 2012;13(1):17-25" | CONDENSED | `refs` 3 | The subtitle is dropped; journal, year, volume and pages kept. |
| B56 | 9 | reference | "5. [author] (2020).Tintinalli's Emergency Medicine 9th edition. Toxicology Section 15 (pp 1187-1329) McGraw Hill" | CONDENSED | `refs` 5 | Year, pages and publisher dropped. |

### 1.2 LOST, MISSING and DIFFERENT in full

| Row | Printed (page, crop) | App |
|---|---|---|
| B12 | p5 and p6, BARS row 1: "Difficult or unable to response" (`p05-c`, `p06-b`) | "Difficult or unable to rouse" |
| B19 | p7: "Definition : Acute behavioural disturbance (also previously called excited delirium, acute behavioural disorder, or agitated delirium) is an umbrella term used to describe a presentation which may include abnormal physiology and/or behaviour" (`p07-a`) | Not in the app. |
| B21 | p7: "Behaviour stabilisation ± breakaway techniques" (`p07-a`) | Lead: "Behaviour stabilisation"; step `ab`: "B: behavioural stabilisation, breakaway" |
| B22 | p7: "Choice of medication ± control restraint" (`p07-a`) | Lead: "Choice of medication"; step `meds`: "C: choice of medication, control and restraint" |
| B23 | p7: "Documentation & debriefing" (`p07-a`) | Lead: "Documentation"; outcome `psy`: "D: documentation; monitor as per the observation chart for agitated or aggressive patients" |
| B27 | p7: "2. Risk of aspiration and subsequent respiratory problems without head elevation." (`p07-c`) | "aspiration" (inside "Monitor for restraint risks: suffocation (prone position), aspiration, injury, hyperthermia, lactic acidosis, raised CK, escape") |
| B28 | p7: "3. Abrasions, bruises, dislocation, contusion, numbness, tingling, fracture, or muscle strain." (`p07-c`) | "injury" (same line) |
| B29 | p7: "4. Hyperthermia, lactic acidosis, and elevated creatinine kinase (CK) levels due to prolonged struggling." (`p07-c`) | "hyperthermia, lactic acidosis, raised CK" (same line) |
| B31 | p8: "First generation antipsychotics (FGA)" over haloperidol; "Second generation antipsychotics (FGA)" over olanzepine and risperidone; "Benzodiazepine" over midazolam, diazepam and lorazepam. p9: "Sedation" over ketamine. | One table "Medication" with seven rows and no group headings. |
| B32 | Time to peak concentration: haloperidol PO "2-6 hr", IM "20 min", paediatric "20 min" (`p08-a`); olanzepine "6 hr", risperidone "1hr" (`p08-b`); midazolam "30 min – 1hr", diazepam "30 min – 1.5hr", lorazepam "30- 60 min" (`p08-c`); ketamine, under "Time to max plasma concentration", "Onset / IM 3-4min / IV 30sec" (`p09-a`) | Not in the app. |
| B33 | Approx. plasma half-life: haloperidol "20 hr" in each of its three rows (`p08-a`); olanzepine "21-54 hr", risperidone "20hr" (`p08-b`); midazolam "1-4hr" (`p08-c`); ketamine "2.5hr" (`p09-a`) | Not in the app. |
| B37 | p8, haloperidol paediatric row, Max dose: "0.5mg daily / 2.5mg daily" (`p08-a`) | "20 mg daily (paediatric 0.5 mg daily PO, 2.5 mg daily IM)" |
| B41 | p8, risperidone, Max dose: "16mg daily / 0.15mg/kg" (`p08-b`) | "16 mg daily (paediatric 0.15 mg/kg)" |
| B43 | p8, midazolam: "Paediatric / IM 0.1-0.2 mg/kg – / 0.5mg/kg" (`p08-c`) | "paediatric IM 0.1–0.2 mg/kg (max 0.5 mg/kg)" |
| B46 | p8: one complications cell, "Respiratory depression Cardiac arrest / Paradoxical agitation", beside both midazolam and diazepam (`p08-c`) | Diazepam notes: "Half-life 3–7 days". Midazolam notes: "Respiratory depression, cardiac arrest, paradoxical agitation". |
| B49 | p9, flumazenil: "First dose : / IV 0.2mg over 30sec / If no response - repeat another every 1 min / titrated until response or max dose 3mg" (`p09-a`) | "IV 0.2 mg over 30 s; if no response repeat after 1 min, titrate to response or max 3 mg" |
| B51 | p9: "Diphenhydramine hydrochloride (antihistamine)"; indication shared with orphenadrine, "Acute dystonia from antipsychotics"; dose "Paediatric / 1-2mg/kg tds/qid" (`p09-a`) | Drug "Diphenhydramine"; indication "Acute dystonia (paediatric)"; dose "1–2 mg/kg tds/qid" |
| B53 | p9, RASS −2: "Briefly awakens to voice / (eye opening & contact less than 10 seconds)" (`p09-b`) | "Briefly awakens to voice (eye contact under 10 s)" |

### 1.3 ADDED

- Organicity checklist: "Head injury **or other trauma**" (print: "Head injury") and an eighth item, "Other medical emergency or toxidrome". The words come from the question box ("Toxidrome / Trauma / Medical emergencies"), not from the seven-line list.
- The route labels "PO" and "IM" on haloperidol's paediatric maximum, "paediatric" on risperidone's "0.15mg/kg", and "max" on midazolam's "0.5mg/kg" (rows B37, B41, B43).
- `meds` item 1 "See the medication table below"; the hints "See the BARS table below" and "(see the table below)"; "Then disposition" as an item.
- A "Notes" column heading in place of "Possible complications" and "Common side effects".
- Outcome kinds: the print's boxes on pages 5 and 6 have no colour; the app files them as neutral (`manage`), refer (`grey`, `clinic`) and observe (`psy`, `psy2`).

### 1.4 The flow

Every printed box, branch and label on pages 5 and 6 has its node, and no branch is invented. Differences of form only:

1. The p5 side box "E: Event / Incident reporting & RCA (if required)" hangs off the psychiatry review box; in the app it is an item of the same outcome.
2. The print shows nothing for a BARS of 4 inside the violent pathway, and neither does the app (`bars` offers 1 to 3, 5 to 6 and 7).
3. The words under the organicity question ("Toxidrome / Trauma / Medical emergencies") are folded into the checklist.

### 1.5 What the ebook prints

- Presentation: the definition on p7 (missing from the app) and the start box "Acute abnormal behavior".
- Signs: BARS (p5, p6), the organicity list (p6), the Richmond scale (p9).
- Investigations: not printed.
- Management: ABCDE (p7), de-escalation domains (p7), monitoring on physical restraint (p7), the drug tables with starting dose, maximum, time to peak, half-life and complications (p8, p9), reversal agents (p9).
- Disposition: Code Grey with Polis Bantuan; psychiatry MO review within 45 minutes; psychiatric clinic or KK in office hours; a box "Disposition" with no detail. Discharge criteria and discharge advice: not printed.

---

## 2. Abdominal pain

Printed pages 10 and 11. App id `abdominal-pain`. The app's `page:'10–11'` is right.

### 2.1 Row by row

| Row | Page | Kind | Printed text | Status | Where in the app | Note |
|---|---|---|---|---|---|---|
| A1 | 10 | flow | "Primary survey / General appearance / Airway, breathing, circulation / Focused abdominal findings" | SAME | `lead` | The first printed box is the app's lead line, not a step in the runner. |
| A2 | 10 | signs | "Hemodynamic unstable or Toxic appearance or Peritoneal sign": Yes, "Resuscitation"; No, "Secondary survey" | SAME | `unstable`; `resus` item 1 | |
| A3 | 10 | management | Left: "Secondary survey / Focused history and examination / Adequate pain control / *Emergent test" | SAME | `resus` items 2 to 4 | |
| A4 | 10 | management | Right: "Secondary survey / Focused history and examination / Adequate pain control / * Emergent test" | SAME | `secondary` items 1 to 3 | |
| A5 | 10 | flow | "#Discharge criteria": Yes, "Discharge with appropriate follow up" (green); No, "† Specific condition diagnosed" | SAME | `dc`, `home` | Crop `p10-b`. |
| A6 | 10 | flow | "† Specific condition diagnosed": Yes, the red box | SAME | `dx`, `admit` | The print draws no "No" exit (see ADDED and the flow). |
| A7 | 10 | disposition | Red box: "Keep NBM / IV drip / +/- antibiotic / Urgent referral / +/- imaging / Admit" | SAME | `admit` title and items | Crop `p10-b`. |
| A8 | 10 | footnote | "* Bedside test eg. ECG, DXT, UPT, Ultrasound, CXR (erect) +/- abdominal X-ray, blood test, GXM" | LOST | `resus` item 4: "Emergent tests: ECG, DXT, UPT, ultrasound, CXR (erect) ± abdominal X-ray, blood tests, GXM"; `secondary` item 3: "Emergent tests as needed: ..." | "Bedside test eg." is gone: the app gives the list as the emergent tests, not as examples. Crop `p10-c`. |
| A9 | 10 | discharge criteria | "#": "Symptoms free", "Stable", "No signs of hemodynamic instability", "Responsive to treatment", "Absence of psychosocial issue", "Absence of logistic issue" | SAME | `dc` items 1 to 6 | Crop `p10-c`. |
| A10 | 11 | other | "† Diagnosis" rows 1 and 3 to 9: "Females of childbearing age / eg. associated vaginal bleed, discharge", "Ectopic pregnancy, miscarriage, ovarian torsion, PID"; "Pain out of proportion in elderly", "Mesenteric ischemia"; "Immunodeficiency eg. HIV, chronic steroids", "Occult infection"; "Abdominal surgical history", "Intestinal obstruction, hernia complications"; "Sudden onset of severe pain", "MI, perforated viscus, ruptured AAA, torsion ovarian cyst"; "Adolescent male", "Testicular torsion"; "Alcohol abuse", "Pancreatitis, hepatic cirrhosis"; "Fever", "Appendicitis, biliary sepsis, diverticulitis, pancreatitis, intraabdominal sepsis" | SAME | table "Red flags: who and what to think of", rows 1 and 3 to 9 | Crop `p11-a`. |
| A11 | 11 | other | "† Diagnosis" row 2: "Elderly age>65, history of heart or peripheral vascular disease or AF", "AAA, mesenteric ischemia" | CONDENSED | same table, row 2: "Elderly over 65, heart or peripheral vascular disease, or AF" | "history of" dropped. Crop `p11-a`. |
| A12 | 11 | discharge advice | "1 . Return to hospital immediately if pain worsens or new symptoms appear such as vomiting, diarrhea, fever, bleeding from back passage"; "2. Avoid caffeine, fatty foods and spicy foods"; "3. Take simple analgesia such as paracetamol and anti-reflux medications"; "4. Return for follow up at Emergency Medicine After Care Clinic (EMACC) or EMWATCH in 24 to 48 hours time" | SAME | `advice` 1 to 4 | The clinic's full name is dropped in favour of "EMACC". Crop `p11-b`. |
| A13 | 11 | reference | "1. [author].Abdominal pain. iEM. 2020. Available at: https://iem-student.org/abdominal-pain/"; "3. Abdominal pain. International Emergency Medicine Education Project" | CONDENSED | `refs` 1 and 3 | The web address and the title of reference 3 are dropped. |
| A14 | 11 | reference | "2. Non-specific abdominal pain (Patient information). NHS"; "4. Uptodate" | SAME | `refs` 2 and 4 | |

### 2.2 LOST, MISSING and DIFFERENT in full

| Row | Printed (page, crop) | App |
|---|---|---|
| A8 | p10: "* Bedside test eg. ECG, DXT, UPT, Ultrasound, CXR (erect) +/- abdominal X-ray, blood test, GXM" (`p10-c`) | `resus`: "Emergent tests: ECG, DXT, UPT, ultrasound, CXR (erect) ± abdominal X-ray, blood tests, GXM". `secondary`: "Emergent tests as needed: ECG, DXT, UPT, ultrasound, CXR (erect) ± abdominal X-ray, blood tests, GXM" |

### 2.3 ADDED

- The outcome `nodx`, "Not covered by the ebook": "The ebook does not show this branch. Discuss with the EP on duty." The print has no exit for a specific condition not diagnosed.
- The table title "Red flags: who and what to think of" and the column headings "Patient" and "Consider". The print's only heading is "† Diagnosis".
- "as needed" in `secondary` item 3.
- `home` items "Give the discharge advice below" and "Follow-up at EMACC or EMWATCH in 24 to 48 hours" (the second repeats advice 4).

### 2.4 The flow

The app's questions and outcomes match the printed chart, the red box as admit and the green box as discharge, with two differences:

1. "† Specific condition diagnosed" is printed as a plain box with one exit, "Yes". The app makes it a question and adds a "No" outcome that says the ebook does not cover it.
2. The first printed box (primary survey) is the lead line, not a step.

### 2.5 What the ebook prints

- Presentation: not printed as such; the "† Diagnosis" table lists patient groups and features against the diagnoses to think of.
- Signs: "Hemodynamic unstable or Toxic appearance or Peritoneal sign".
- Investigations: the footnote "* Bedside test eg. ...".
- Management: resuscitation, focused history and examination, adequate pain control; for a specific condition, NBM, IV drip, +/- antibiotic, +/- imaging.
- Disposition: admit with urgent referral, or discharge with appropriate follow up. Discharge criteria: six lines. Discharge advice: four lines.

---

## 3. Acute coronary syndrome and the Obsess protocol

Printed pages 12 to 14 (p12 the ACS chart, p13 "OBSESS PROTOCOL", p14 advice and references). App id `acs`. The app's `page:'12–14'` is right.

### 3.1 Row by row

| Row | Page | Kind | Printed text | Status | Where in the app | Note |
|---|---|---|---|---|---|---|
| C1 | 12 | presentation | "Patient with chest pain / angina equivalent symptom", then "ECG" | SAME | `lead`, `ecg` | |
| C2 | 12 | flow | "ECG suggestive of STEMI", then "consult EP on floor" | SAME | `ecg` option 1, `stemi` | |
| C3 | 12 | flow | "Patient fulfill criteria for IJN referral and patient consented for IJN referral" | CONDENSED | `ijn` question: "Fulfils IJN referral criteria, patient consented, and accepted for transfer?" | A printed step with one exit; the app joins it with the two boxes below it into one question. |
| C4 | 12 | flow | "Call IJN hotline / (03-26178996)" | MOVED | `ijn` hint: "IJN hotline 03-2617 8996." | A printed step; in the app it is a hint under the question. Number read from crop `p12-b`: the same. |
| C5 | 12 | flow | "For transfer": Yes, "Transfer to IJN" (red) | SAME | `ijn` option 1, `ijnt` | |
| C6 | 12 | flow | "For transfer": No, "Update EP on floor", "Proceed with thrombolysis", "CCU referral" (red) | SAME | `ijn` option 2, `lysis`, `ccu` | |
| C7 | 12 | management | "ECG suggestive of ACS or NSTEMI", then "Start ACS treatment / serial ECG & / Troponin T" | SAME | `ecg` option 2, `nstemi` | |
| C8 | 12 | disposition | "Trop T elevated?": No, "Treat as Unstable angina / Admit medical ward" (red) | SAME | `trop`, `ua` | |
| C9 | 12 | disposition | "Trop T elevated?": Yes, "Treat as NSTEMI", then "CCU referral" (red) | SAME | `nst`: "Treat as NSTEMI: CCU referral" | |
| C10 | 12 | flow | "Normal ECG / old changes / no dynamic changes", then "Fulfill Criteria for Obsess Protocol" | SAME | `ecg` option 3, `oc` | |
| C11 | 12 | other | "Inclusion Criteria": "> 18 years old", "TIMI < 1", "no high risk factor", "no evidence of trauma causing symptom" | SAME | `oc` items 1 to 4 | Symbols read from crop `p12-b`. |
| C12 | 12 | other | "Excusion Criteria": "Pregnant", "Underlying malignancy / palliative care", "Has other pathology causing chest pain" | SAME | `oc` items 5 to 7 | Turned into "Not pregnant", "No underlying malignancy or palliative care", "No other pathology causing the chest pain", so that all seven can be ticked. |
| C13 | 12 | disposition | "Proceed with Obsess Protocol", "Positive", then "ACS treatment & admission to medical ward" (red) | LOST | `pos`: "Load with clopidogrel 300 mg and admit medical ward" | The app's outcome carries the p13 wording only; "ACS treatment" is not in it. Crop `p12-c`. |
| C14 | 12 | disposition | "Negative", then "Discharge with Aspirin and TCA 1/52 for Stress test" (green) | SAME | `home` items 1 and 3 | Crop `p12-c`. |
| C15 | 13 | management | "OBSESS PROTOCOL": "Chest pain"; beside it "Start T Aspirin 300 mg / Serial ECG / Vital sign hourly / Monitor pain score" | SAME | `obs` items 1 to 4 | Crop `p13-a`. |
| C16 | 13 | investigation | "< 2 Hour", then "Troponin T at 2 hours after onset (T=0)" | SAME | `onset` option 1, `t2` | Crop `p13-a`. |
| C17 | 13 | investigation | "2 - 4 hours", then "Take Troponin T upon admission (T=0)" | SAME | `onset` option 2, `t24` | |
| C18 | 13 | investigation | "> 4 hours", then "Take Troponin T upon admission (T=4)" | SAME | `onset` option 3, `t4` | |
| C19 | 13 | flow | First "Troponin T positive": Yes, to "Load with Clopidogrel"; No, "Repeat Troponin T 2 hours later (T=2)" | SAME | `tq1`, `rep` | Crop `p13-b`. |
| C20 | 13 | flow | Second "Troponin T positive": Yes, to "Load with Clopidogrel"; No, to "Allow discharge" | SAME | `tq2` | |
| C21 | 13 | flow | Right "Troponin T positive" (after T=4): Yes, to "Load with Clopidogrel"; No, to "Allow discharge" | SAME | `tq3` | |
| C22 | 13 | disposition | "Load with Clopidogrel / 300mg / Admit medical ward" | SAME | `pos` | Crop `p13-b`. |
| C23 | 13 | disposition | Green box: "Allow discharge / T Aspirin 150mg od / Followup at 30 days / Stress test within 1 week" | SAME | `home` title and items 1 to 3 | The app adds words to item 3 (see ADDED). Crop `p13-b`. |
| C24 | 14 | discharge advice | "1. Compliance to medication"; "2. Cessation of smoking and alcohol intake"; "3. Diet modification and appropriate exercise regimen"; "4. Obtain BMI of < 25"; "5. TCA stat if clinical cardiac symptoms (chest pain, SOB, diaphoresis, failure symptoms)"; "6. Avoid illicit drug use" | SAME | `advice` 1 to 6 | "Obtain BMI of < 25" became "Aim for a BMI under 25"; "if clinical cardiac symptoms" became "for any cardiac symptoms". Crop `p14-a`. |
| C25 | 14 | reference | "1. Clinical Practice Guidelines : Management of ST Elevation Myocardial Infarction (STEMI) 4th edition 2019 / MOH/PAK/420.19(GU)-e" | CONDENSED | `refs` 1: "CPG Management of STEMI, 4th edition 2019, MOH/PAK/420.19(GU)-e" | |
| C26 | 14 | reference | "2. Obsesses Protocol For Low Risk Chest Pain Patient, Emergency & Trauma Department, Kuala Lumpur Hospital" | SAME | `refs` 2 | Spelling of "Obsess" and the department's name shortened. |

### 3.2 LOST, MISSING and DIFFERENT in full

| Row | Printed (page, crop) | App |
|---|---|---|
| C13 | p12, under "Proceed with Obsess Protocol", "Positive": "ACS treatment & admission to medical ward" (`p12-c`) | `pos`: "Load with clopidogrel 300 mg and admit medical ward" |

### 3.3 ADDED

- `home` item 3: "; low-risk chest pain can be referred to MAU FAST clinic with ECG copy". Pages 12 to 14 do not print this. It is in the ebook pathway itself in `data.js`, not in a department note, and carries no source.
- The outcome `noobs`, "Not suitable for the Obsess protocol": "The ebook does not show this branch. Discuss with the EP on duty."
- "and accepted for transfer" in the `ijn` question, and the option label "Not for transfer".
- "(TCA 1/52)" beside "Stress test within 1 week": this joins the p12 green box to the p13 green box.

### 3.4 The flow

The three ECG branches, the troponin questions and the Obsess timings match the print, box for box. Mismatches:

1. STEMI branch: the print has three boxes in a row (criteria and consent; call the hotline; "For transfer"). The app has one question. A patient who does not fulfil the criteria, or does not consent, takes the app's "Not for transfer" option and goes to thrombolysis. The print draws no exit from the criteria box, so it does not say this.
2. Calling the IJN hotline is a printed step; the app shows it as a hint.
3. The print has no exit for a patient with a normal ECG who does not fulfil the Obsess criteria. The app adds `noobs` and says the ebook does not cover it.
4. p12 ends the Obsess branch with "Positive: ACS treatment & admission to medical ward" and "Negative: Discharge with Aspirin and TCA 1/52 for Stress test"; p13 ends it with "Load with Clopidogrel 300mg / Admit medical ward" and "Allow discharge ...". The app uses the p13 endings and keeps "TCA 1/52" from p12, but not "ACS treatment".
5. Colours: the red boxes "Transfer to IJN" and "CCU referral" are refer outcomes in the app; the uncoloured p13 box "Load with Clopidogrel ... Admit medical ward" is an admit outcome.

### 3.5 What the ebook prints

- Presentation: "Patient with chest pain / angina equivalent symptom".
- Signs: not printed.
- Investigations: ECG, serial ECG, troponin T with its timings (T=0, T=2, T=4).
- Management: "Start ACS treatment" (not itemised), thrombolysis, T aspirin 300 mg, clopidogrel 300 mg, aspirin 150 mg od on discharge.
- Disposition: transfer to IJN, CCU referral, medical ward, or discharge with follow-up at 30 days and a stress test within 1 week. Discharge advice: six lines.

---

## 4. Anaphylaxis

Printed pages 15 and 16. App id `anaphylaxis`. The app's `page:'15–16'` is right.

### 4.1 Row by row

| Row | Page | Kind | Printed text | Status | Where in the app | Note |
|---|---|---|---|---|---|---|
| N1 | 15 | flow | "Anaphylaxis": No, "Treat as allergic reaction" | SAME | `ana`, `allergic` | |
| N2 | 15 | management | Yes: "Remove allergen / Administer oxygen / Administer IM adrenaline / Monitor: Blood pressure, pulse oxymetry, ECG" | SAME | `first` items 1 to 4 | Crop `p15-a`. |
| N3 | 15 | management | "Airway", "Partial obstruction": "Repeat IM adrenaline if no response / Nebulized adrenaline and repeat every 10 mins / IV hydrocortisone" | SAME | `airp` | Crop `p15-a`. |
| N4 | 15 | flow | "Airway", "Complete obstruction": "Refer airway algorithm"; "Patent", down | SAME | `air`, `airalg` | |
| N5 | 15 | management | "Breathing", "Wheeze": "Repeat IM adrenaline if no response / Nebulized salbutamol, repeat if required / IV hydrocortisone" | SAME | `brw` | Crop `p15-b`. |
| N6 | 15 | flow | "Breathing", "Apnea": "Refer airway algorithm"; "Adequate", down | SAME | `br`, `airalg` | |
| N7 | 15 | management | "Circulation", "Shock": "Put patient in flat position with leg raised / Repeat IM adrenaline if no response, / IV adrenaline (after 2 doses of IM adrenaline) / Crystalloid / Consider IV glucagon in patient on beta-blocker" | SAME | `shock` items 1 to 5 | Crop `p15-b`. |
| N8 | 15 | flow | "Circulation", "Pulseless": "ACLS protocol" | SAME | `acls` | |
| N9 | 15 | management | Below "Circulation", on an exit with no label: "IV hydrocortisone / IV Chlorpheniramine" | SAME | `h1` | The app labels the exit "Adequate" (see ADDED). |
| N10 | 15 | disposition | "Unresolved": "Medical or ICU admission" (red) | SAME | `res`, `icu` | |
| N11 | 15 | disposition | "Resolved": "Observation" (yellow) | SAME | `obsq` question, "Observation: which group fits?" | |
| N12 | 15 | discharge criteria | Left box: "Good response (within 5-10 min) to single dose of adrenaline given within 30 min of onset / and / Complete resolution of symptoms / and / Adequate supervision following discharge / and / *Unused adrenaline auto-injectors and has been trained how to use them" | SAME | `obsq` info line 1 | All four conditions, joined with AND. The asterisk is not shown here (row N15). Crop `p15-c`. |
| N13 | 15 | discharge criteria | Right box: "Severe reaction requiring ≥2 doses of adrenaline"; "Previous biphasic reaction"; "Patient has severe asthma or reaction involved severe respiratory compromise"; "Possibility of continuing absorption of allergen"; "Patient presents late at night"; "Logistic issues"; "Poor support" | SAME | `obsq` info line 2 | All seven. "≥2" read from crop `p15-c`; the app has "2 or more". The app joins the lines with "or" and heads them "Higher risk" (see ADDED). |
| N14 | 15 | disposition | "Minimum 6 hours from symptoms resolution" and "Minimum 12 hours from symptoms resolution", both to "Discharge" (green) | SAME | `d6`, `d12` titles | Crop `p15-c`. |
| N15 | 16 | footnote | "* depending on drug avaibility, selected patients, accessibility to obtaining auto-injector" | LOST | `advice` 3: "... (depends on availability and access)" | The asterisk it answers is on the auto-injector condition in the p15 left box. The app puts the note on discharge advice 3 instead, and "selected patients" is gone. Crop `p16-a`. |
| N16 | 16 | drug table | "Drugs in anaphylaxis": "IM Adrenaline", "500mcg (0.5mg); 0.5ml of 1:1000 dilution at mid outer thigh, may repeat at 5-15 min up to 2 doses" | SAME | table "Drugs in anaphylaxis", row 1 | "at 5-15 min" became "every 5–15 min". Crop `p16-a`. |
| N17 | 16 | drug table | "IV Adrenaline", "IV bolus 100mcg over 5-10 mins ; mix 0.1mg (0.1ml of 1:1000 dilution) in 10ml NS and infuse over 5-10 min / Infusion: 1mcg/min ; mix 1mg (1ml of 1:1000 dilution) in 500ml NS and infuse at 0.5ml/min" | SAME | row 2 | Every number checked in crop `p16-a`. |
| N18 | 16 | drug table | "IV fluids", "10-20ml/kg NS bolus"; "Glucagon", "1mg IV every 5 min until hypotension resolves, followed by 5-15mcg/min infusion"; "Salbutamol", "2.5-5mg nebulized; 6-8 puff MDI using aerochamber"; "Hydrocortisone", "200mg IV"; "Chlorpheniramine", "10-20mg IV over 1 min"; "Ranitidine", "50mg IV" | SAME | rows 3 to 8 | Every number checked in crop `p16-a`. The app adds "(as printed in the ebook)" to ranitidine. |
| N19 | 16 | discharge advice | "1. Return to hospital if the symptom recurs such as swollen lips, eyes or face; hives or itchy skin rash; abdominal pain or vomitting; sudden breathing dififculties, cough or hoarseness of voice; foreign body sensation in throat; unconscious" | SAME | `advice` 1 | Crop `p16-b`. |
| N20 | 16 | discharge advice | "2. Risk of recurrence within 72 hours"; "3. Administer auto-injector if available in the event of recurrence"; "4. Avoid allergens"; "5. Always bring allergic card along with patient"; "6. TCA EMWATCH in 1-2 day" | SAME | `advice` 2 to 6 | Advice 3 carries the added bracket of row N15. Crop `p16-b`. |
| N21 | 16 | reference | "1. Emergency treatment of anaphylactic reactions: Guidelines for healthcare providers. Resuscitation Council UK. May 2021." | CONDENSED | `refs` 1 | Subtitle dropped. |
| N22 | 16 | reference | "2. Tintinalli's Emergency Medicine, 9th edition."; "3. World Allergy Organization Anaphylaxis Guidance 2020"; "4. Discharge instructions for anaphylactic shock. Saint Luke's" | SAME | `refs` 2 to 4 | |

### 4.2 LOST, MISSING and DIFFERENT in full

| Row | Printed (page, crop) | App |
|---|---|---|
| N15 | p15, left box, fourth condition: "*Unused adrenaline auto-injectors and has been trained how to use them" (`p15-c`); p16, top line: "* depending on drug avaibility, selected patients, accessibility to obtaining auto-injector" (`p16-a`) | `obsq` info: "... AND has unused adrenaline auto-injectors and has been trained to use them" (no note). `advice` 3: "Use an auto-injector, if available, if symptoms recur (depends on availability and access)" |

### 4.3 ADDED

- The label "Adequate" on the way out of "Circulation". The print labels only "Shock" and "Pulseless".
- The heading "Higher risk" for the right-hand observation box, and "or" between its lines. The print gives the seven lines with no heading and no joining word.
- "(as printed in the ebook)" after ranitidine "50 mg IV".
- "(depends on availability and access)" on advice 3 (row N15).
- The items "Give the discharge advice below" and "TCA EMWATCH in 1 to 2 days" on both discharge outcomes (the second repeats advice 6).
- The lead line "Work through airway, breathing and circulation after the first IM adrenaline."

### 4.4 The flow

The questions, labels and outcomes match the print (red box as admit, green as discharge). Mismatches:

1. The three treatment boxes on the left (partial obstruction, wheeze, shock) have no arrow leaving them in the print. The app carries on from each to the next check (`airp` to Breathing, `brw` to Circulation, `shock` to the hydrocortisone and chlorpheniramine step).
2. The exit below "Circulation" has no label in the print; the app calls it "Adequate".
3. "Observation" is a yellow box in the print, leading to two boxes of conditions. The app has no observation outcome: it asks which group fits, and the minimum hours are in the titles of the two discharge outcomes.
4. The print does not say what to do when a patient fits neither box; nor does the app.

### 4.5 What the ebook prints

- Presentation: not printed (the chart starts at the question "Anaphylaxis").
- Signs: only as branch labels: partial or complete obstruction, wheeze, apnea, shock, pulseless.
- Investigations: not printed ("Monitor: Blood pressure, pulse oxymetry, ECG").
- Management: the steps of the chart and the table "Drugs in anaphylaxis".
- Disposition: medical or ICU admission; observation for a minimum of 6 or 12 hours from symptoms resolution, then discharge. Discharge advice: six lines.

---

## 5. Acute gastroenteritis in adults

Printed pages 17 and 18. App id `gastroenteritis`. The app's `page:'17–18'` is right.

### 5.1 Row by row

| Row | Page | Kind | Printed text | Status | Where in the app | Note |
|---|---|---|---|---|---|---|
| G1 | 17 | flow | "Clinical Pathway For Acute Gastroenteritis (AGE) In Adult"; "Clinical diagnosis of AGE" | SAME | `title`, `lead` | |
| G2 | 17 | disposition | "Sign of shock": Yes, "Resuscitate accordingly & admit" (red) | SAME | `shock`, `resus` | |
| G3 | 17 | flow | "Clinical signs of dehydration": No, "Outpatient management ** / IF NO practical concerns" (green) | SAME | `dehyd` option 2, `pc1`, `opd` | The "**" points to the box "Outpatient management :". |
| G4 | 17 | signs | "Signs of dehydration :": "Dry mucous membrane", "Decreased skin turgor", "Altered mental status (Confusion, Lethargy)", "Tachycardia", "Orthostatic hypotension", "Syncope or pre-syncope" | SAME | `dehyd` items 1 to 6 | Crop `p17-b`. |
| G5 | 17 | management | Yes: "Intravenous fluid repletion"; "Oral Rehydration Salt if possible"; "Blood investigation : FBC, RP" | SAME | `rehyd` items 1 to 3 | Crop `p17-b`. |
| G6 | 17 | disposition | "Clinical improvement & normal renal function": No, "Admit" (red) | SAME | `improve`, `admit` | |
| G7 | 17 | disposition | "Clinical improvement & normal renal function": Yes, "Outpatient management ** / IF NO other practical concerns" (green) | SAME | `improve` option 1, `pc2`, `opd` | |
| G8 | 17 | other | "Practical concerns :": "Age > 65 years", "Diarrhoea more than 7 days", "Persistent GI loses", "Poorly controlled comorbidity", "Immunocompromising condition", "Poor oral intake", "Unable to ambulate, too lethargic", "Concern about adherence to therapy", "Cognitive or functional impairment", "Concern about social issue (poor support)" | SAME | `pc1` and `pc2` items, and the `concerns` tab | All ten. "> 65" and "7 days" read from crop `p17-c`. |
| G9 | 17 | management | "Outpatient management :": "Discharge with ORS and symptomatic reliefs", "Empirically use of antibiotic is not recommended", "Discharge advice", "TCA EMWATCH or nearest healthcare facilities" | SAME | `opd` items 1 to 4 | Crop `p17-c`. |
| G10 | 18 | discharge advice | "Medication and Hydration": "1. Continue taking prescribed medications as directed"; "2. Drink plenty of fluid (ORS, clear soups, diluted fruit juices) to prevent dehydration"; "3. Avoid caffeinated, alcoholic and sugary drinks as they can worsen diarrhoea" | CONDENSED | `advice` 1 to 3 | The lines are the same; the sub-heading is dropped. Crop `p18-a`. |
| G11 | 18 | discharge advice | "Rest and Hygiene": "1. Get plenty of rest"; "2. Hand hygiene, especially after using the toilet and before eating" | CONDENSED | `advice` 4 and 5 | The lines are the same; the sub-heading is dropped. |
| G12 | 18 | discharge advice | "When to seek medical help": "1. Persistent vomiting or inability to keep fluids down"; "2. Blood in stools or persistent high fever"; "3. Severe abdominal pain or worsening symptoms" | CONDENSED | `advice` 6 | Three lines joined into one, starting "Seek medical help for". |
| G13 | 18 | reference | "1. [author]. Acute gastroenteritis. Prim Care. 2013 Sep;40(3):727-41. doi: 10.1016/j.pop.2013.05.006. Epub 2013 Jul 19. PMID: 23958366; PMCID: PMC7119329." | CONDENSED | `refs` 1 | The DOI and the PubMed numbers are dropped. Crop `p18-b`. |
| G14 | 18 | reference | "2. Paediatric protocol for Malaysian Hospital, 4th edition"; "3. UpToDate"; "4. National Antimicrobial Guideline, 4th edition, 2024" | SAME | `refs` 2 to 4 | |

### 5.2 LOST, MISSING and DIFFERENT in full

None.

### 5.3 ADDED

- The outcome `pcadmit`, "Consider admission": "Outpatient management applies only if there are no practical concerns." The print says outpatient management applies "IF NO practical concerns" and stops there: it prints no box for a patient who has one.
- The two questions "Any practical concerns?" and "Any other practical concerns?", built from the green boxes' condition.
- The step title "Rehydrate and investigate".

### 5.4 The flow

The questions and the red and green outcomes match the print. One mismatch: the print gives no outcome when a practical concern is present; the app sends that patient to an admit outcome titled "Consider admission", which is the app's wording, not the ebook's.

### 5.5 What the ebook prints

- Presentation: "Clinical diagnosis of AGE" only.
- Signs: "Sign of shock" (no list) and the six signs of dehydration.
- Investigations: "Blood investigation : FBC, RP".
- Management: intravenous fluid repletion, ORS if possible; outpatient: ORS and symptomatic reliefs, no empirical antibiotic.
- Disposition: resuscitate and admit, admit, or outpatient management with TCA EMWATCH or the nearest healthcare facility; ten practical concerns. Discharge advice: eight lines under three headings.

---

## 6. Bronchial asthma

Printed pages 19 to 23, all landscape (p19 severity, p20 mild and moderate, p21 severe and life threatening, p22 the written asthma action plan, p23 references). App id `asthma`. The app's `page:'19–23'` is right.

### 6.1 Row by row

| Row | Page | Kind | Printed text | Status | Where in the app | Note |
|---|---|---|---|---|---|---|
| S1 | 19 | flow | "Clinical Pathway for Asthma Exacerbation"; "Acute exacerbation of asthma : / Assess severity" | SAME | `lead`, `sev` | |
| S2 | 19 | signs | "Life threatening", clinical features: "drowsy / confused", "cyanose", "poor respiratory effort", "silent chest" | SAME | table "Severity", column 1 | The print gives no clinical parameters for this column; nor does the app. Crop `p19-a`. |
| S3 | 19 | signs | "Severe": "sit forward", "speak in words", "use of accessory muscles", "agitated"; parameters "tachypnoeic ( rr > 30)", "tachycardic ( hr > 120)", "spo2 < 90%", "PEF < 50% best or predicted" | SAME | "Severity", column 2 | Symbols read from crop `p19-a`. |
| S4 | 19 | signs | "Moderate": "prefer sitting to lying", "speak in phrases", "no usage of accessory muscles", "not agitated"; parameters "tachypnoeic (rr 20-30)", "tachycardic ( hr 100-120)", "spo2 90-95%", "PEF > 50% predicted or best" | SAME | "Severity", column 3 | Crop `p19-b`. |
| S5 | 19 | signs | "Mild": "walking", "speak in sentences", "no usage of accessory muscles", "not agitated"; parameters "not tachypnoeic / mildly tachypnoeic", "not tachycardic ( hr < 100)", "spo2 > 95%", "PEF > 80% predicted or best" | SAME | "Severity", column 4 | Crop `p19-b`. |
| S6 | 19 | disposition | Life threatening, severe and moderate join: "To Critical Care Zone"; mild: "To Asthma Bay" | SAME | `cczs`, `ccz`, `bay` | Lines checked in crop `p19-c`. |
| S7 | 20 | management | "Mild / Moderate Asthma Exacerbation"; "Bronchodilator / - MDI salbutamol 4 - 6 puffs (400 - 600mcg) with spacer / - or Nebulized salbutamol 1: 3 / - Reassess after 10 minutes" | SAME | `m1` | Crop `p20-a`. |
| S8 | 20 | discharge criteria | "Respond to treatment": Yes, "Assess criteria for discharge": "Symptoms improved", "SPO2 > 95% on room air", "Adequate resources at home and no logistic issue", "PEF > 80% predicted or best" | SAME | `mr1`, `dc` items 1 to 4 | Crop `p20-b`. |
| S9 | 20 | disposition | Green box: "Discharge with asthma action plan": "Refer Written Asthma Action Plan", "MDI salbutamol 4 - 6 puffs PRN", "T prednisolone 30mg OD x 5/7", "If symptoms persist despite regular MDI, to come back", "Continue asthma follow up" | SAME | `home` title and items 1 to 5 | "x 5/7" became "for 5 days". Crop `p20-b`. |
| S10 | 20 | management | No: "Bronchodilator / - MDI salbutamol 4 - 6 puffs (400 - 600mcg) with spacer / - or Nebulized salbutamol 1:3 / - Reassess after 10 minutes / - May repeat up to 3 times" | SAME | `m2` item 1 | Crop `p20-c`. |
| S11 | 20 | management | "Anticholinergic (muscarinic antagonist) / - For moderate asthma, consider : / - Nebulized atrovent (ipratropium bromide) 500mcg / - or Nebulized combivent (ipratropium bromide + salbutamol) 1 vial / - or MDI atrovent (ipratropium bromide) 4 puffs (80mcg) / - Reassess after 10 minutes" | CONDENSED | `m2` item 2 | Doses the same. The generic names in brackets and "(muscarinic antagonist)" are dropped here and in the other asthma steps; only `ward` keeps "(ipratropium)". Crop `p20-c`. |
| S12 | 20 | management | "Systemic steroids / - T prednisolone 30mg / - or IV hydrocortisone 200mg" | SAME | `m2` item 3 | Crop `p20-c`. |
| S13 | 20 | flow | Second "Respond to treatment": No, "Refer to Severe / Life Threatening Asthma Algorithm" | SAME | `mr2` option 2, to `s1` | |
| S14 | 20 | management | Yes, red box: "Bronchodilator / - MDI salbutamol 6 puffs (600mcg) with spacer / - or Nebulized salbutamol 1:3 / - Give every 1 hour, reassess after each cycle" | SAME | `mobs` item 1 | Crop `p20-d`. |
| S15 | 20 | management | Red box: "Anticholinergic (muscarinic antagonist) / - Nebulized atrovent (ipratropium bromide) 500mcg / - or Nebulized combivent (ipratropium bromide + salbutamol) 1 vial / - or MDI atrovent (ipratropium bromide) 4 puffs / - Give every 4 - 6 hourly"; "Systemic steroids / - IV hydrocortisone 100mg TDS" | SAME | `mobs` items 2 and 3 | Crop `p20-d`. |
| S16 | 20 | disposition | Red box: "Disposition / - Admit / observe for frequent reassessment" | SAME | `mobs` title | The box is red in the print; the app files the outcome as observe. |
| S17 | 21 | management | "Severe / Life Threatening Asthma Exacerbation"; "Bronchodilator / - Nebulized salbutamol 1:3 continuous for 1 hour / - SC bricanyl (terbutaline) 0.5ml (0.25mg)" | SAME | `s1` items 1 and 2 | Crop `p21-a`. |
| S18 | 21 | management | "Anticholinergic (muscarinic antagonist) / - Nebulized atrovent (ipratropium bromide) 500mcg / - or Nebulized combivent (ipratropium bromide + salbutamol) 1 vial / - May repeat every 20 minutes (up to 3 times)"; "Systemic steroids / - IV hydrocortisone 200mg (if not yet given)"; "Consider / - IV MgSO4 2.47g in 20cc NS over 20 minutes" | SAME | `s1` items 3 to 5 | Crop `p21-a`. |
| S19 | 21 | disposition | "Respond to treatment": Yes, red box: "Bronchodilators / - Nebulized salbutamol 1:3 every 1 hour / - Reassess after each cycle"; "Anticholinergic ... 500mcg / - or Nebulized combivent ... 1 vial / - Give every 4 - 6 hourly"; "Systemic steroids / - IV hydrocortisone 100mg TDS"; "Disposition / -Admit to ward" | SAME | `sr1`, `ward` | Crop `p21-d`. |
| S20 | 21 | flow | "Respond to treatment": No, "Impending respiratory failure": Yes, the left red box; No, the middle box | SAME | `irf` | |
| S21 | 21 | disposition | Left red box: "Ventilation / - Consider mechanical ventilation / - Obstructive ventilation strategy"; "Bronchodilator / - Nebulized salbutamol 1:3 continuous for 1 hour via T-piece connector / - Suction after each nebulization / - IVI ketamine / IVI propofol (refer drug dilution file)"; "Anticholinergic ... 500mcg / - or Nebulized combivent ... 1 vial / - Give every 20 minutes ( up to 3 times )"; "Systemic steroids / - IV hydrocortisone 100mg TDS"; "Others / - IV antibiotic"; "Disposition / - Admit ICU / HDW" | SAME | `icu` title and items 1 to 6 | Crop `p21-b`. |
| S22 | 21 | management | Middle box: "Ventilation / - Watch out closely for worsening respiratory effort"; "Bronchodilator / - Nebulized salbutamol 1:3 continuous for 1 hour"; "Anticholinergic ... 500mcg / - or Nebulized combivent ... 1 vial / - Give every 4 - 6 hourly"; "Systemic steroids / - IV hydrocortisone 100mg TDS" | SAME | `s2` items 1 to 4 | Crop `p21-c`. |
| S23 | 21 | flow | Lower "Respond to treatment": Yes, to the ward box; No, to the ICU box | SAME | `sr2` | |
| S24 | 22 | other | "Appendix 5 / WRITTEN ASTHMA ACTION PLAN": blanks for "Name", "IC", "Personal Best PEF: ___ L/min", "Date of Plan", "Doctor", "Hospital/Clinic", "Phone No." | MISSING | `home` item 1 names the plan only: "Written Asthma Action Plan (Malaysia CPG 2017)" | See the note under 6.2. Crop `p22-a`. |
| S25 | 22 | discharge advice | "Green: Doing Well": "No cough, wheeze, chest tightness or shortness of breath day/night AND"; "Sleep well at night AND"; "Can do usual activities"; "OR"; "PEF: ___ to ___ L/min (80% to 100% of personal best)" | MISSING | not in `asthma` | Crop `p22-b`. |
| S26 | 22 | discharge advice | Green, action: "Take these controller medications everyday:" with a blank table "Controller medication / How Much / How Often"; "*Use spacer when possible" | MISSING | not in `asthma` | Crop `p22-c`. |
| S27 | 22 | discharge advice | "Yellow: Getting Worse": "Cough, wheeze, chest tightness or shortness of breath OR"; "Wake up at night due to asthma symptoms OR"; "Can do some, but not all usual activities OR"; "Cold/flu"; "OR"; "PEF: ___ to ___ L/min (50% to 79% of personal best)" | MISSING | not in `asthma` | Crop `p22-b`. |
| S28 | 22 | discharge advice | Yellow, action: "Take your regular medications and step up reliever medication for 1 hour:" with "Reliever Medication / How Much: ___ puffs / How Often: Every 20 minutes"; "If your symptoms persist after 1 hour: / Start prednisolone (if available): ___ tablets daily for 5 days (maximum dose 50 mg/day) / Continue using your reliever medication and go to the nearest hospital or clinic"; "*Use spacer when possible" | MISSING | not in `asthma` | Crop `p22-c`. |
| S29 | 22 | discharge advice | "Red: Alert": "Symptoms are worsening (cough, wheeze, chest tightness, shortness of breath, cannot do usual activities) OR"; "You are using your reliever frequently: / every 2 to 3 hours OR / more than 8 puffs a day"; "OR"; "PEF: Below ___ L/min (Less than 50% of personal best)" | MISSING | not in `asthma` | Crop `p22-b`. |
| S30 | 22 | discharge advice | Red, action: "Continue using your reliever medication:" with "Reliever Medication / How Much: ___ puffs / How Often"; "Start prednisolone NOW (if have not started); maximum dose 50 mg/day"; "Go to the nearest hospital or clinic IMMEDIATELY/dial 999"; "*Use spacer when possible" | MISSING | not in `asthma` | Crop `p22-c`. |
| S31 | 22 | reference | "Taken from Malaysia CPG Management of Asthma 2017" | SAME | `home` item 1 ("(Malaysia CPG 2017)"), `refs` 2 | Crop `p22-d`. |
| S32 | 23 | reference | "1. GINA Pocket Guide to asthma management and prevention updated 2023" | CONDENSED | `refs` 1: "GINA Pocket Guide 2023" | Crop `p23-a`. |
| S33 | 23 | reference | "2. Malaysia CPG management of asthma 2017"; "3. Marino's the ICU book Fourth Edition"; "4. Tintinallini 10th edition." | SAME | `refs` 2 to 4 | The print's "Tintinallini" is "Tintinalli" in the app. |

### 6.2 LOST, MISSING and DIFFERENT in full

Rows S24 to S30 are the whole of page 22, quoted in full in the table above from crops `p22-a`, `p22-b` and `p22-c`. In the ebook's `asthma` entry the app has only the plan's name: "Written Asthma Action Plan (Malaysia CPG 2017)".

The app does hold an asthma action plan, but a different one: the entry `asthma-cpg` (the Asthma in Adults CPG, 2nd edition, 2024, Appendix 5A and 5B, in `data5.js`) and the calculator `apef` built on it. That is another edition with other wording, so it does not stand in for page 22. On the lines that carry numbers:

| Page 22 (taken from the 2017 CPG) | The app's 2024 CPG plan (`asthma-cpg`) |
|---|---|
| Zones: "80% to 100% of personal best", "50% to 79% of personal best", "Less than 50% of personal best" | The same three bands. |
| Yellow: "step up reliever medication for 1 hour", "___ puffs", "Every 20 minutes" | "Take 2 to 4 inhalations every 20 minutes for a total 3 times and assess symptoms" |
| Yellow: "Start prednisolone (if available): ___ tablets daily for 5 days (maximum dose 50 mg/day)" | Not in the 2024 template rows the app shows. |
| Yellow: "Cold/flu" as a sign | Not listed. |
| Red: "You are using your reliever frequently: every 2 to 3 hours OR more than 8 puffs a day" | "Need to use reliever more frequently than every 4 hours" |
| Red: "Start prednisolone NOW (if have not started); maximum dose 50 mg/day" | Not in the 2024 template rows the app shows. |
| Red: "Go to the nearest hospital or clinic IMMEDIATELY/dial 999" | "Proceed to nearest hospital or clinic or dial 999 IMMEDIATELY", with doses during transfer. |

### 6.3 ADDED

- `ccz` item: "The ebook sends moderate asthma to the Critical Care Zone (p19) and treats it with the mild/moderate algorithm (p20)". This is the app's own remark, and it is accurate to pages 19 and 20.
- The branch "Not all met" from the discharge criteria back to the second round of treatment (`dc` to `m2`). The print draws one arrow out of "Assess criteria for discharge", to the green box.
- Step titles: "Repeat bronchodilator, add anticholinergic and steroid", "Severe or life-threatening treatment", "Continue and watch closely".
- The severity table's row names ("Respiratory rate", "Heart rate", "SpO2", "PEF"): the print lists the four parameters under "Clinical parameters" without row names.

### 6.4 The flow

Pages 20 and 21 match the app box for box, including the two "Respond to treatment" questions on each page, "Impending respiratory failure" and the hand-over from p20 to p21. Mismatches:

1. The print has no exit for discharge criteria that are not met; the app sends the patient to the second round of treatment.
2. The print joins p19 to p20 and p21 only by their titles ("Mild / Moderate", "Severe / Life Threatening"). The app sends mild to the Asthma Bay and then the mild and moderate treatment, moderate to the Critical Care Zone and then the same treatment, and severe and life threatening to the Critical Care Zone and then the severe treatment. That agrees with the print.
3. The red p20 box ending "Admit / observe for frequent reassessment" is an observe outcome in the app, not an admit outcome.
4. Page 22 is not part of the app's pathway (rows S24 to S30).

### 6.5 What the ebook prints

- Presentation and signs: clinical features and clinical parameters for each of the four grades (p19).
- Investigations: not printed as a list (SpO2 and PEF are among the parameters).
- Management: bronchodilator, anticholinergic, systemic steroids, magnesium sulphate, ventilation, with doses and intervals (p20, p21).
- Disposition: Asthma Bay or Critical Care Zone; discharge with the action plan; admit or observe; admit to ward; admit ICU or HDW. Discharge criteria: four lines. Discharge advice: no advice box; the green discharge box (p20) and the written asthma action plan (p22) take its place.

---

## Summary

| Pathway | Rows | SAME | CONDENSED | LOST | MISSING | DIFFERENT | MOVED |
|---|---|---|---|---|---|---|---|
| Acute behavioural disturbance (p5–9) | 56 | 34 | 3 | 11 | 3 | 4 | 1 |
| Abdominal pain (p10–11) | 14 | 11 | 2 | 1 | 0 | 0 | 0 |
| Acute coronary syndrome (p12–14) | 26 | 22 | 2 | 1 | 0 | 0 | 1 |
| Anaphylaxis (p15–16) | 22 | 20 | 1 | 1 | 0 | 0 | 0 |
| Acute gastroenteritis (p17–18) | 14 | 10 | 4 | 0 | 0 | 0 | 0 |
| Bronchial asthma (p19–23) | 33 | 24 | 2 | 0 | 7 | 0 | 0 |
| **All six** | **165** | **121** | **14** | **14** | **10** | **4** | **2** |

A row is one printed block or line, so a count of rows is a count of blocks, not of words. The seven MISSING asthma rows are one page (p22).

### DIFFERENT and MISSING, in order of clinical weight

1. **B43, DIFFERENT, p8.** Midazolam, paediatric. Print: "IM 0.1-0.2 mg/kg – / 0.5mg/kg". App: "paediatric IM 0.1–0.2 mg/kg (max 0.5 mg/kg)". The app reads the dash as a maximum; the print does not say "max".
2. **B37, DIFFERENT, p8.** Haloperidol, paediatric maximum. Print: "0.5mg daily / 2.5mg daily", no routes. App: "paediatric 0.5 mg daily PO, 2.5 mg daily IM".
3. **B41, DIFFERENT, p8.** Risperidone maximum. Print: "16mg daily / 0.15mg/kg". App: "16 mg daily (paediatric 0.15 mg/kg)".
4. **S24 to S30, MISSING, p22.** The written asthma action plan as the ebook prints it: the three zones with their signs and PEF bands (80% to 100%, 50% to 79%, less than 50% of personal best), reliever "Every 20 minutes" for 1 hour, prednisolone "tablets daily for 5 days (maximum dose 50 mg/day)", "every 2 to 3 hours OR more than 8 puffs a day", "IMMEDIATELY/dial 999", "*Use spacer when possible". The ebook pathway in the app only names the plan.
5. **B32, MISSING, p8 and p9.** The time-to-peak column for all seven drugs, and ketamine's onset ("IM 3-4min / IV 30sec").
6. **B33, MISSING, p8 and p9.** The half-life of haloperidol ("20 hr"), olanzepine ("21-54 hr"), risperidone ("20hr"), midazolam ("1-4hr") and ketamine ("2.5hr").
7. **B19, MISSING, p7.** The definition of acute behavioural disturbance.
8. **B12, DIFFERENT, p5 and p6.** BARS 1. Print: "Difficult or unable to response". App: "Difficult or unable to rouse".

### LOST, in order of clinical weight

1. **B49, p9.** Flumazenil: "repeat another every 1 min" is "repeat after 1 min" in the app; "First dose" is gone.
2. **N15, p15 and p16.** The footnote on the auto-injector condition for the 6-hour discharge group: "* depending on drug avaibility, selected patients, accessibility to obtaining auto-injector". The app moved it to discharge advice 3 and dropped "selected patients".
3. **B46, p8.** Diazepam's complications (the cell shared with midazolam) are not shown for diazepam.
4. **B51, p9.** Diphenhydramine: "from antipsychotics" is gone from the indication, and "Paediatric" moved from the dose to the indication.
5. **B27, B28, B29, p7.** Monitoring on physical restraint: "without head elevation", the eight named injuries, and "due to prolonged struggling".
6. **C13, p12.** Obsess positive: "ACS treatment &" is not in the app's outcome.
7. **A8, p10.** Abdominal pain tests: "Bedside test eg." is gone, so the examples read as the list of emergent tests.
8. **B21, B22, B23, p7.** ABCDE: the two "±" marks and "& debriefing".
9. **B31, p8 and p9.** The drug class headings.
10. **B53, p9.** RASS −2: "eye opening &".

### Added by the app, worth a look

- `acs`, outcome `home`: "low-risk chest pain can be referred to MAU FAST clinic with ECG copy" sits inside the ebook pathway with no source; pages 12 to 14 do not print it.
- `gastroenteritis`, outcome `pcadmit`: "Consider admission" is the app's wording for a case the ebook leaves open.
- `abdominal-pain` `nodx` and `acs` `noobs`: both say plainly that the ebook does not show the branch.
- `asthma`, `dc`: the "Not all met" branch.
- `anaphylaxis`: the labels "Adequate" (circulation) and "Higher risk", and the onward steps from the three treatment boxes.
- `behavioural-disturbance`: the eighth organicity item and "or other trauma".

### Page numbers

No errors. All six `page` fields match the print.

### Legibility

Nothing was illegible. Two things to know:

- The Richmond scale on p9 is a low-resolution picture pasted into the page. It reads in crop `p09-b`, but it is the softest text on these pages.
- "Olanzepine *" and "Risperidone *" carry an asterisk on p8. Neither p8 nor p9 prints a footnote for it, so what it marks cannot be told from these pages.

### How condensed is the app on these pages?

For five of the six pathways the app is the ebook, not a digest of it: every flowchart box, branch label, criterion list, drug dose, discharge advice line and reference on pages 10 to 21 is there, mostly in the same words. Abdominal pain, ACS, anaphylaxis and gastroenteritis have three lost qualifiers between them and nothing missing. The asthma algorithms (p19 to p21) are complete to the last dose and interval.

The condensing is in two places. The first is acute behavioural disturbance: the definition is missing, the five-line restraint monitoring list is one line, and the drug tables lost two of their six columns (time to peak, half-life), their class headings and a few cell details, while three bare numbers gained labels the print does not give. The second is page 22: the written asthma action plan is named but not reproduced.

Where the print stops, the app mostly says so (`nodx`, `noobs`). In three places it fills the gap in its own words without saying so: "Consider admission" in gastroenteritis, the "Not all met" branch in asthma, and the MAU FAST clinic line in ACS.

---

## Crops used

All cut from `sources/ebook-pages-hi/pNN.png` with `ffmpeg -v error -y -i <page> -vf "crop=W:H:X:Y" <out>`. Portrait pages are 2828 × 4000; pages 19 to 23 are landscape, about 5665 × 4000.

| Crop | Page | crop=W:H:X:Y | What it shows |
|---|---|---|---|
| `p05-a` | 5 | 2828:1300:0:300 | Top of the violent flow |
| `p05-b` | 5 | 2828:1300:0:1500 | A and B box, BARS branches, organicity, C box |
| `p05-c` | 5 | 2828:1300:0:2600 | Psychiatry review, E box, BARS table |
| `p06-a` | 6 | 2828:1500:0:150 | Non-violent flow |
| `p06-b` | 6 | 2828:1100:0:1850 | BARS table, organicity list |
| `p07-a` | 7 | 2828:1100:0:550 | Definition, ABCDE table |
| `p07-c` | 7 | 2828:1000:0:2750 | Monitoring on physical restraint |
| `p08-a` | 8 | 2828:1300:0:300 | Haloperidol |
| `p08-b` | 8 | 2828:1100:0:1450 | Olanzepine, risperidone |
| `p08-c` | 8 | 2828:1400:0:2150 | Midazolam, diazepam, lorazepam |
| `p09-a` | 9 | 2828:1450:0:300 | Ketamine, reversal agents |
| `p09-b` | 9 | 1500:950:700:1950 | Richmond scale |
| `p09-c` | 9 | 2828:800:0:2850 | References |
| `p10-b` | 10 | 2828:1100:0:1750 | Lower flow, red and green boxes |
| `p10-c` | 10 | 2828:1000:0:2950 | Footnote, discharge criteria |
| `p11-a` | 11 | 2828:1350:0:500 | Diagnosis table |
| `p11-b` | 11 | 2828:1350:0:1950 | Discharge advice, references |
| `p12-a` | 12 | 2828:1400:0:250 | Top of the ACS chart |
| `p12-b` | 12 | 2828:1300:0:1600 | Hotline, troponin, Obsess criteria |
| `p12-c` | 12 | 2828:1100:0:2800 | CCU referral, Positive and Negative |
| `p13-a` | 13 | 2828:1300:0:500 | Obsess: times and first troponin |
| `p13-b` | 13 | 2828:1700:0:1750 | Obsess: questions and outcomes |
| `p14-a` | 14 | 2828:1350:0:350 | Discharge advice, references |
| `p15-a` | 15 | 2828:1300:0:150 | Anaphylaxis: first treatment, airway |
| `p15-b` | 15 | 2828:1100:0:1350 | Breathing, circulation, outcomes |
| `p15-c` | 15 | 2828:1400:0:2400 | Observation boxes, minimum hours |
| `p16-a` | 16 | 2828:1500:0:300 | Footnote, drug table |
| `p16-b` | 16 | 2828:1700:0:2000 | Discharge advice, references |
| `p17-b` | 17 | 2828:1300:0:1550 | Signs of dehydration, rehydration box |
| `p17-c` | 17 | 2828:1150:0:2750 | Practical concerns, outpatient management |
| `p18-a` | 18 | 2828:1100:0:450 | Discharge advice |
| `p18-b` | 18 | 2828:600:0:1950 | References |
| `p19-a` | 19 | 2500:1350:330:1280 | Life threatening, severe |
| `p19-b` | 19 | 2500:1350:2900:1280 | Moderate, mild |
| `p19-c` | 19 | 5000:1300:330:2500 | Lines to Critical Care Zone and Asthma Bay |
| `p20-a` | 20 | 1900:1400:400:150 | First bronchodilator box |
| `p20-b` | 20 | 3000:700:2350:900 | Discharge criteria, green box |
| `p20-c` | 20 | 1900:1250:400:1560 | Second treatment box |
| `p20-d` | 20 | 2200:1200:2350:2600 | Red box |
| `p21-a` | 21 | 1900:1350:2100:60 | First severe box |
| `p21-b` | 21 | 2200:1600:200:2100 | ICU box |
| `p21-c` | 21 | 1800:1100:2300:2100 | Middle box |
| `p21-d` | 21 | 1600:1100:4000:2100 | Ward box |
| `p22-a` | 22 | 4400:600:750:480 | Action plan heading and blanks |
| `p22-b` | 22 | 1800:2400:850:1050 | Action plan, the three zones |
| `p22-c` | 22 | 2450:2400:2560:1050 | Action plan, the three actions |
| `p22-d` | 22 | 2400:300:3300:3580 | "Taken from ..." line |
| `p23-a` | 23 | 3400:1200:0:150 | References |

Read from the whole-page image only, because they carry no number, dose or symbol: the top of p10 (primary survey to secondary survey), the top of p17 (shock and dehydration questions), the de-escalation table on p7, and the question diamonds on p20 and p21.
