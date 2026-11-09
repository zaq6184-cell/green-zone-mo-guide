# Review: CPG Prevention and Treatment of Venous Thromboembolism (August 2013)

**Built into the app on 9 Nov 2026** (third CPG round): the entry *VTE: CPG 2013* (`#vte-cpg`) beside the ebook's DVT pathway. No calculator was built. Its copyright gives no permission to reproduce it, so at Krishna's decision of 9 Nov 2026 the entry and this review are in the guide's own words, with page numbers, and quote nothing at length.

*Clinical Practice Guidelines: Prevention and Treatment of Venous Thromboembolism.* Malaysian Society of Haematology, National Heart Association of Malaysia, Ministry of Health Malaysia and Academy of Medicine Malaysia (cover). August 2013. MOH/P/PAK/264.13(GU). ISBN 978-967-12100-0-0. Electronic version: http://www.haematology.org.my. © Ministry of Health Malaysia.

For the Green Zone MO Guide, entry `vte-cpg`. Reviewed 9 Nov 2026, in the guide's own words throughout: no sentence of the CPG is reproduced here or in the draft. Drug names, named criteria, short terms and every number are kept exact, each with its printed page.

- **File read:** `...\AMM Clinical Practice Guidelines\Haematology\2013 - Prevention and Treatment of Venous Thrombosis [612].pdf`, 170 PDF pages, not modified. Also read: the Quick Reference (`...[613].pdf`, 14 PDF pages).
- **Copyright and reuse:** p1 prints © Ministry of Health Malaysia and gives no reuse terms. So, by Krishna's decision of 9 Nov 2026, the entry is a summary in the guide's own words (`src:'CPG VTE (2013), summarised'`), its lead ends with the required sentence, and `refs` carry the "Summarised, not reproduced" line with no reproduction acknowledgement. The CPG shelf already treats it this way (`drive:''` in `CPG_SHELF`).
- **Funding:** the CPG says it was supported by an unrestricted educational grant from Bayer Healthcare Pharmaceuticals, and that the funder did not influence it (p1). Recorded here as a fact; it is not in the draft.
- **Age:** issued 2013, review due 2017 (p1), so the review is 9 years overdue. It is the only VTE CPG on the Academy list (`CPG-RUN-THROUGH.md`, row 37). The lead says so.
- **Page offset:** printed page = PDF page − 1 throughout. The cover (PDF 1) has no number; p1 is the statement of intent (PDF 2). There is no roman front matter. Pathway 1 (thromboprophylaxis) is p7–17, Pathway 2 (diagnosis and treatment) p18–25, the contents p26–27, the chapters p28–112, the appendices p113–147 and the references p148–168. PDF 170 is blank. Every page below and in the draft is the printed page.
- **Method:** PyMuPDF text layer, normalised (non-breaking spaces, soft hyphens). Two traps were found and handled:
  1. In the bold table cells, the font maps ≥ to `!` and ≤ to `"`. For example, Table 3.1.1 (p44) reads `! 2 points` and `"1 point` in the text layer, and the pathway form (p19) reads `!2`. Every threshold in a table, form or algorithm was therefore read from a page image (150 dpi; the p19 bands also at 400 dpi, and confirmed glyph by glyph from the raw span data).
  2. A few lines use a custom-encoded font and come out as gibberish (p8, p16, p24, p28, p51, p82–85, p101, p117). Those I needed (p51 and p117) were read from images. The rest are not used.

- **Scope (p3):** everyone with VTE or at risk of it; arterial thrombosis is outside it. The users are all health care professionals.
- **Sources:** the two clinical pathways cite NICE guidance on VTE (references 1 and 2, p148: 2010 and 2012); Appendix 1 adapts the University of Michigan and Singapore General Hospital warfarin guides (p114) and the 8th ACCP conference, 2008 (p117).
- **What this CPG does not have** (the draft says so where it matters, and invents nothing):
  - a D-dimer step in any algorithm;
  - criteria for treating a confirmed DVT as an outpatient;
  - any test for upper limb DVT;
  - a separate rule for isolated calf DVT;
  - treatment of superficial thrombophlebitis;
  - apixaban or edoxaban as treatment (apixaban appears only as post-operative prophylaxis, p33);
  - any named ED team or zone.
- **Advice:** no leaflet. Appendix 4 (p121–124) is a pharmacist's counselling checklist, in English only. The draft's `advice` is written from it, and from Pathway 2 (p23, p25), in the guide's own words.
- **Size:** `JSON.stringify(P['vte-cpg']).length` = 21,302, about 6% over the addendum's 20,000. What was cut by scope to get there is listed after (a).
- **Discharge advice button:** the app shows it only on `end:'discharge'` outcomes. The draft's only one is `excl` (DVT excluded), while most advice lines are for a patient on a blood thinner, so each such line starts "On a blood thinner" or "On warfarin". `dispo` stays neutral because the CPG sets no discharge criteria; if Krishna decides the disposition (open question 2), `dispo` can become a discharge outcome and carry the button.

---

## (a) The CPG chapter by chapter

| Part (pages) | What it holds | What matters to the Green Zone | In the draft? |
|---|---|---|---|
| Cover, statement of intent, development, objectives, groups (PDF 1, p1–6) | Bodies, date, review year, funding, method (SIGN-modified grading, Appendix 12), scope, committee lists | Issue and review dates; scope | Lead, menu hint, refs |
| Pathway 1: thromboprophylaxis in hospitalised patients (p7–17) | VTE and bleeding risk factors; mechanical and drug prophylaxis with prophylactic doses (p9–11); platelet monitoring (p11); prophylaxis by specialty, including lower limb plaster casts (p14); regional anaesthesia timing (p15–16); patient information and discharge plan (p16–17) | Mostly ward work. One ED-type decision: drug prophylaxis for a lower limb plaster cast (p14), but it sits in the in-hospital pathway and gives no criteria and no cast-specific dose | No: cut for scope and size (see below) |
| Pathway 2: diagnosis and treatment of VTE (p18–25) | The form: Wells for DVT and PE (p19); risk factors and baseline bloods (p20); scan route (p21); initial treatment (p22–23); thrombolysis, stockings and IVC filters (p23–24); cancer and thrombophilia tests (p24); duration, follow-up and patient information (p25) | Core | Yes: `wells` hint, `cusq`, `rep`, `excl`, `tx` to `txl`, `dispo`, `pe` |
| Contents (p26–27) | | | |
| 1 Epidemiology and pathogenesis (p28–30) | Rates and natural history, for example: most DVT start in the calf; left untreated, a symptomatic calf DVT spreads to the proximal veins in about 25%, mostly within a week; without treatment, half of proximal DVT or PE recur within 3 months (p29) | Background only | No |
| 2 VTE prophylaxis (p31–43) | Methods; Padua score (p34); medical patients, including long flights (Table 2.3.1.2, p35); surgical risk (p36); IMPROVE bleeding score (p38); timing (p39); regional anaesthesia (p40–41); duration (p42); stroke (p42–43) | Ward work. The long-flight advice is a walk-in question but not an ED decision | No: cut for scope |
| 3 Clinical diagnosis (p44–49) | DVT Wells (Table 3.1.1, p44); PE Wells (Table 3.1.2, p45); PE signs (p45); DVT route and the D-dimer comment (p45–46); PE route (p47); cancer screen after unprovoked VTE (p48); thrombophilia testing (p48–49, Table 3.4) | Core: pretest probability, scan, no D-dimer | Yes: `wells`, `unl`, `cus` to `excl`, `pe`; the thrombophilia line in the Doses tab. Cancer screen cut (clinic work) |
| 4 Treatment of VTE (p50–57) | Initial treatment (p50); LMWH doses (Table 4.2.1, p50); fondaparinux (Table 4.2.2, p51); rivaroxaban and switching (p51); dabigatran not licensed for treatment (p52); IV UFH nomogram (Table 4.2.5, p52); maintenance and follow-up (p52–53); recurrence and bleeding risk factors and duration (Tables 4.3.1.1, 4.3.1.2 and 4.3.1, p53–54); thrombolysis (p55); IVC filters (p56–57); stockings (p57) | Core: first doses, follow-up, how long | Yes: `tx`, `txs`, `txr`, `txc`, `txl`, `dispo`, the Doses and Duration tabs. Switching rules and the UFH nomogram steps cut (ward work); the UFH starting dose kept in the Doses tab |
| 5 Monitoring anticoagulation (p58–62) | INR targets and test schedule (p58); UFH by APTT (p58); LMWH anti-Xa (p59); fondaparinux and rivaroxaban need no monitoring (p59); HIT and platelet monitoring (p61–62) | Target INR; a baseline platelet count before heparin | `inr` hint; the Doses tab |
| 6 Perioperative anticoagulation (p63–68) | Thromboembolic and bleeding risk tables; warfarin interruption and bridging; emergency surgery reversal (p63) | Not ED | No (one inconsistency in (b), point 21) |
| 7 Over-anticoagulation (p69–75) | Warfarin bleeding risk; vitamin K, PCC and FFP (p69–70); Table 7.3 (p71); emergency surgery, head injury and dengue on warfarin (p72–73, Table 7.4); protamine for heparin (Table 7.5.1, p73–74); fondaparinux (p74); the new oral anticoagulants (p74–75) | Core: the patient on warfarin with a high INR or bleeding, and minor bleeding on rivaroxaban | Yes: `inr` branch (`maj`, `nmaj`, `i8`, `i58`, `i5`, `hiw`, `dw`) and `noac` branch. Protamine table cut (ward) |
| 8 VTE in obstetrics (p76–86) | Risk (p76); diagnosis (p76–78); DVT and PE algorithms in pregnancy (p78–79); treatment and LMWH doses (p80–81); antenatal and postnatal prophylaxis risk tables (p81–85); antiphospholipid syndrome (p85–86) | Pregnant walk-in with a swollen leg | Yes: `preg`, `pregq`, `pregr`, `pregx`, `txp`. Prophylaxis tables cut (O&G work) |
| 9.1 Elderly, renal impairment, obesity (p87–88) | Table 9.1 | Doses below a creatinine clearance of 30; obesity | Yes: `txr`, `txs` |
| 9.2 VTE in stroke patients (p88) | LMWH until warfarin INR above 2.0 for >24 hours; at least 3 months | Ward | No (cited in (b), point 8) |
| 9.3 Children (p88–96) | UFH, LMWH and VKA dosing in children (Tables 9.3.x) | Rare and specialist; the Green Zone sees adults mostly | No |
| 9.4 Fertility treatment and OHSS (p96–98) | VTE after assisted reproduction; OHSS severity table | Only as a cause of upper limb DVT | OHSS named in `ul` |
| 9.5 Hormonal contraception (p99–101) | Combined contraception doubles VTE risk; a past VTE is a contraindication (Table 9.5, p100); WHO eligibility table (p101) | A woman with DVT taking the pill | One line in `dispo` |
| 9.6 Cancer (p102–103) | LMWH first; indefinite or until the cancer resolves (Table 9.6.4) | Treatment choice | Yes: `txc` |
| 9.7 Unusual sites (p104–105) | Upper limb, cerebral vein, splanchnic vein, incidental thrombosis (Table 9.7) | Upper limb only | Yes: `ul` |
| 10 MTAC-Warfarin (p106–112) | The pharmacist warfarin clinic. It refers to a doctor for an INR over 4.0 or under 1.0, bleeding or thromboembolism (p107); patient selection (p108–109); counselling (p109–110) | Why patients with a high INR arrive in the ED; where to send them | `inr` hint; `dispo` |
| Appendix 1, warfarin dosage (p113–117) | Starting doses (p113); starting algorithm by age (p114); dose adjustment tables for targets 2.0–3.0 and 2.5–3.5 (p115–116); over-anticoagulation table from ACCP 2008 (p117) | The INR above range but not over 5.0, which chapter 7 does not cover | `i5`; gaps in `txs`, `maj`, `i8` |
| Appendices 2–10 (p118–136) | MTAC workflow and forms; counselling checklist (Appendix 4, p121–124); drug check list (Appendix 7, p129–133); label, dosing note, missed-appointment record | Appendix 4 for patient advice | `advice` only |
| Appendix 11, children's warfarin (UMMC 2013) (p137–144) | | No | No |
| Appendices 12–13, references (p145–168) | Evidence levels; clinical questions; 333 references | No | No |
| Quick Reference (14 PDF pages) | Pathways 1 and 2 again, plus the obstetric prophylaxis tables. Compared line by line with p7–25: the same text, with only the line breaks differing | Nothing beyond the main CPG | n/a |

**Cut to keep the draft near 20,000 characters, with the reason:**
- the lower limb plaster cast prophylaxis line and the prophylactic doses (p10–11, p14), because they belong to the in-hospital pathway and set no criteria;
- the long-flight advice (p35), because it is not an ED decision;
- the cancer screen after unprovoked VTE (p48), and the D-dimer and ultrasound at the end of treatment (p54), because both are clinic work;
- the recurrence risk factors (Table 4.3.1.1, p53);
- the UFH nomogram steps (Table 4.2.5, p52) and the protamine doses (Table 7.5.1, p73–74), because both are ward work;
- dabigatran's licensing note (p52).

Each can be added back if Krishna wants it.

---

## (b) Points inside the CPG

None is resolved in the draft. The ones that change an ED decision are also in that node's `gap`.

**Diagnosis**

1. **No D-dimer anywhere.**
   - The DVT, PE and pregnancy algorithms have no D-dimer step (p46, p47, p78–79). A Wells score of 1 or less ends the work-up (p46).
   - The CPG's reasons: the commercial assays lack standard cut-offs; the whole-blood agglutination method in most Malaysian laboratories is not sensitive enough to rule out VTE; many conditions raise D-dimer (p46). In pregnancy D-dimer rises normally (p76).
   - Whether HKL's assay is that method is not something the CPG can answer: see (c).
2. **Two DVT Wells tables.** Table 3.1.1 (p44) and the Pathway 2 form (p19) differ in six places:
   - DVT unlikely is ≤1 point (p44) but <1 (p19). With <1, a score of exactly 1 is in neither band.
   - Major surgery within 4 weeks (p44), but under 12 weeks (p19).
   - The minus 2 item is an alternative diagnosis as likely or more likely (p44), but only more likely (p19).
   - Cancer counts if treated now, within 6 months or palliative (p44), but within 6 months only (p19).
   - Paralysis, paresis or recent immobilisation (p44), but paralysis or a recent leg plaster (p19).
   - Calf swelling of 3 cm over the other side (p44), but more than 3 cm (p19).

   The draft uses Table 3.1.1 and names the p19 band in the hint.
3. **Calf (below-knee) DVT.** The pathway sends a DVT below or above the knee alike to treatment (p21). But the treatment lines speak of a confirmed proximal DVT or PE (p22), and the stockings are for proximal DVT only (p23). No rule is given for isolated calf DVT.
4. **Waiting for the repeat scan.**
   - A normal first scan is repeated within 1 week (p45, p46), or in 7 days on the form (p21).
   - The CPG does not say whether the LMWH started while waiting (p45, p50) goes on after a normal first scan. In pregnancy it does (p78).
5. **PE timing.** The text gives LMWH cover and a CTPA the same day or within 24 hours (p47); the form says immediate CTPA (p21).
6. **PE in pregnancy, two orders.** The text says: chest X-ray first when there are no leg symptoms, then bilateral CUS, then V/Q or CTPA if suspicion persists; CTPA or V/Q at once if suspicion is high (p77). The algorithm starts with CTPA or V/Q, then CUS if that is negative (p79).
7. **Pregnancy and pretest probability.** Wells is validated only outside pregnancy (p44), yet the pregnancy algorithm asks whether DVT is still likely (p78) without saying how to judge it.

**Treatment**

8. **When to stop the heparin overlap, three versions:**
   - INR 2 or above on 2 consecutive days, with at least 5 days of heparin, whichever is longer (p22);
   - INR above 2 for at least 24 hours (p50, p51);
   - in stroke patients, LMWH usually 5 to 10 days, until the INR is above 2.0 for >24 hours (p88).
9. **Warfarin starting dose, three versions:**
   - 5 mg daily, within 24 hours of diagnosis (p22);
   - most people may start on 5 to 10 mg, for 1 or 2 days; under 5 mg for the elderly, the debilitated or malnourished, or with heart failure, liver disease, recent major surgery or drugs that raise sensitivity (Appendix 1, p113);
   - the starting algorithm: 5 mg on days 1 and 2 below age 70 and 3 mg above 70 (p114). It has no column for exactly 70.
10. **Fondaparinux and the kidneys, four wordings:**
    - use with caution in renal impairment (p51);
    - contraindicated in renal impairment (p22);
    - should not be used in renal impairment (Table 9.1, p88, Grade A);
    - as prophylaxis, contraindicated below an eGFR of 30 (p10).

    For a patient with mild or moderate impairment, the CPG does not settle it. The draft follows p22 and p88 (not in renal impairment) and shows the source.
11. **The cut-off of 30.**
    - The same cut-off appears as eGFR <30 mL/min/1.73 m2 (p22), eGFR <30 mL/min (p50) and creatinine clearance <30 mL/min (p87, p88).
    - None says what to do at exactly 30.
    - "Severe" renal impairment means eGFR <30 in treatment (p22) but <15 in prophylaxis (p11), where 15 - 30 is called moderate (p10).
    - The renal enoxaparin dose (1 mg/kg once daily with anti-Xa levels, Table 9.1, p87) has no threshold at all.
12. **Tinzaparin and the kidneys.** Usable without adjustment up to a creatinine clearance of 20 mL/min (Table 9.1, p87), but up to <20 mL/min in the text on the same page.
13. **Tinzaparin dose against its own formula.** The dose is 175 units/kg (p50, p80). The syringes hold 20,000 anti-Xa IU/mL (p50, p80). The quick formula is (weight − 10) ÷ 100 mL (p50, p80). The two agree only at 80 kg (my arithmetic from the CPG's numbers; the CPG does not say this):

    | Weight | 175 units/kg comes to | The formula gives | Units per kg from the formula |
    |---|---|---|---|
    | 45 kg | 0.39 mL | 0.35 mL | about 156 |
    | 60 kg | 0.53 mL | 0.5 mL | about 167 |
    | 100 kg | 0.88 mL | 0.9 mL | about 180 |

    The CPG's own worked examples (p50) follow the formula. A calculator must show both, not choose.
14. **LMWH in pregnancy.**
    - The text says LMWH is given daily (p80), but Table 8.5.2 gives enoxaparin twice daily (BD).
    - The table's bands are <50, 50 - 69, 70 - 89 and >90 kg: there is no dose for exactly 90 kg, and none for weights between the bands (such as 69.5 kg).
15. **Cancer, how long.** LMWH for 6 months, then reassess (p22). Elsewhere: indefinite, or until the cancer resolves (p103, Table 9.6.4), or as long as the risk factor lasts (Table 4.3.1, p54).
16. **Unprovoked VTE, how long.** Table 4.3.1 (p54) offers indefinite treatment after weighing. The form says to consider going beyond 3 months for unprovoked proximal DVT if the recurrence risk is high, and to offer it for unprovoked PE (p25). The pathway says to consider long-term treatment for unprovoked VTE (p22).
17. **Disposition.** The CPG says only that LMWH makes outpatient treatment feasible (p50). It gives no criteria, and no discharge rule after a confirmed DVT. Its only discharge (to the health clinic) is for a DVT or PE that has been excluded (p21, p45, p47).

**Over-anticoagulation**

18. **Holes in Table 7.3 (p71):**
    - no PCC dose for an INR of exactly 5.0 (the table has <5.0 and >5.0);
    - the no-bleeding bands are >5.0 <8.0 and >8.0, so exactly 5.0 and exactly 8.0 are in neither;
    - no step at all for an INR above range but not over 5.0.

    Appendix 1 covers that last range for the warfarin clinic (p115–116): 3.1 - 3.9 and 4.0 - 4.9 for a target of 2.0 to 3.0. Its own bands leave gaps at 3.9–4.0 and 4.9–5.0.
19. **Two over-anticoagulation schemes.** Chapter 7 (Table 7.3, p71, graded B and C) and Appendix 1 (p117, from the 8th ACCP conference, 2008) disagree:

    | | Chapter 7 (Table 7.3, p71) | Appendix 1 (ACCP 2008, p117) |
    |---|---|---|
    | No bleeding, bands | >5.0 <8.0 and >8.0 | 5-8.9 and >9.0 |
    | No bleeding, highest band | Oral vitamin K 1 to 5 mg | 2.5-5 mg by mouth, or 1-2 mg IV |
    | Serious bleeding, vitamin K | IV 5 mg | 10 mg slow IV |
    | Serious bleeding, other | PCC | FFP or PCC, with rFVIIa as an alternative |

    Chapter 7 itself does not recommend rFVIIa for warfarin reversal (p70). The draft follows chapter 7 and names Appendix 1 in the gaps.
20. **FFP.** Table 7.3 offers FFP 15 to 20 mL/kg when PCC is unavailable (p71). The text says FFP at that dose lifts factor levels by no more than 30% and cannot be recommended for life-threatening bleeding (p70). It also says every unit caring for anticoagulated patients must stock a 4-factor PCC (p70).
21. **Emergency surgery on warfarin.** IV vitamin K 2 to 4 mg with PCC 15 to 30 IU/kg, or FFP 15 to 20 mL/kg (p63), against IV vitamin K 2 mg to 5 mg and PCC 30 IU/kg (Table 7.4, p72). Not in the draft.
22. **Dengue on warfarin.** The text stops warfarin for platelets below 50 × 10⁹/L only (p72). Table 7.4 adds bleeding and shock (p73).
23. **Head injury on warfarin.** Reverse with PCC on a strong suspicion of an intracranial bleed, before the CT and the INR result (p72, Table 7.4 p73). The CPG does not define a strong suspicion.
24. **INR over 4.0.** The warfarin clinic refers an INR over 4.0 (or under 1.0) to a doctor (p107), but chapter 7 starts at over 5.0 (p71). An INR between 4.0 and 5.0 reaches the ED with no ED step.
25. **The new oral anticoagulants (p74–75).**
    - Written when rivaroxaban was the only one licensed to treat VTE (p66).
    - Dabigatran was not licensed for treatment (p52).
    - The lower restart doses after minor bleeding (rivaroxaban 10 mg/day, dabigatran 75 mg/day, p74) come with no indication or duration.
26. **Spelling and typing slips** (summarised, so they do not reach the draft): analegesia (p50), withold (p71), odema (p44), Rcommendations (p61), unsual (Table 9.7, p105), no require (p105).

---

## (c) The app's related entries against this CPG

The app's entries stay as written (rules 5 and 6). Each difference is an open question for Krishna. The entries read are:
- `dvt` (ebook p33–35, `data.js`);
- the calculators `anticoag` and `wells` (`engine.js`);
- `blood-tests` (`data2.js`);
- `head-injury-cpg` (`data6.js`);
- `dengue-cpg` (`data4.js`);
- `mild-tbi`, `cellulitis` and `syncope` (`data.js`);
- `outpatient-referral` (`data2.js`).

| Item | App says (entry) | This CPG says (page) | Open question |
|---|---|---|---|
| Wells bands | Three bands: low −2 to 0, moderate 1 to 2, high 3 or more (`dvt.wells`, and `#calc-wells`) | Two bands: likely ≥2, unlikely ≤1 (Table 3.1.1, p44); the form sets unlikely at <1 (p19) | Which bands does the Green Zone use? A score of 1 or 2 changes route |
| Wells items | Same ten items and points, worded from the ebook, for example plaster immobilisation of the leg | Same points; the CPG's two tables word three items differently from each other ((b), point 2) | None for the score; wording only |
| D-dimer | Low and moderate risk go to a D-dimer; a negative D-dimer is discharged to the nearest KK (`dd`, `ddm`, `ddq`, `kk`) | No D-dimer: unlikely means no further tests (p46). The whole-blood agglutination assay in most Malaysian laboratories is not sensitive enough to rule out VTE (p46) | **Top question:** which D-dimer assay does HKL run, and does the Green Zone keep the D-dimer step? |
| Interim anticoagulant | At moderate and high risk, while waiting (`ddm`, `cp`) | For high clinical probability, until objective tests exclude VTE (p50); for DVT likely when the scan cannot be done today (p45) | Broadly agree. The CPG has no moderate band |
| Imaging | A 2-point compression test in the ED, then a formal ultrasound if that is negative (`cp`, `cpq`, `us`) | A CUS the same day, or within 24 hours under LMWH cover; if normal, a repeat within 1 week (p45–46, p21) | Is the ED's 2-point test the CPG's CUS? Is a repeat scan at 1 week arranged? |
| Negative imaging | Consider another diagnosis, stop the interim anticoagulant, admit to the ward after considering other diagnoses (`other`) | Repeat the CUS within 1 week; both normal means discharge to the health clinic (p45, p21) | Admit, or home with a repeat scan? |
| Fondaparinux | If creatinine clearance is over 30: <50 kg 5 mg, 50–100 kg 7.5 mg, >100 kg 10 mg, once a day (`anticoag` constant; `#calc-anticoag`) | The same weight bands (Table 4.2.2, p51; p22). But not in renal impairment (p22, p88), or with caution (p51) | The CPG is stricter: should fondaparinux be avoided in any renal impairment, not just below 30? |
| Enoxaparin | 1 mg/kg every 12 hours if creatinine clearance is over 30; 1 mg/kg once a day if under 30 | 1 mg/kg twice daily (p50). In renal insufficiency: 1 mg/kg once daily with trough and peak anti-Xa levels, no threshold given (Table 9.1, p87). Below 30: IV UFH by APTT, or LMWH by anti-Xa level (p22, p50, p88) | The ebook gives once-daily enoxaparin below 30 without anti-Xa; the CPG pairs it with anti-Xa or offers UFH. Open item 8 (exactly 30) is not answered by this CPG either ((b), point 11) |
| Obesity | Consult the EP | Dose LMWH by actual weight, no cap (p87–88); fondaparinux 10 mg above 100 kg (p88) | Does the department keep "consult EP"? |
| Other drugs | Fondaparinux and Clexane only | Adds tinzaparin by weight with a volume formula (p50), rivaroxaban alone (p23, p51), warfarin from day 1 (p22) and IV UFH (p52) | Which are on the HKL formulary for ED starts? |
| Disposition | "DVT confirmed: start anticoagulation" is an admit outcome, with a gap: the ebook does not state the disposition | Outpatient treatment is feasible (p50), with no criteria | **Second question:** may a stable DVT go home on LMWH or rivaroxaban, and with which follow-up (medical or haematology clinic, MTAC-Warfarin, p25)? |
| Upper limb | Compression ultrasound from the basilic and brachial veins to the axillary veins, then CT venography (`ul`, `ulq`, `ctv`) | No test given; anticoagulate 3 months if catheter-related and the catheter is out; not beyond 3 months without APS or cancer (p104–105) | No conflict: the CPG is silent on diagnosis |
| Pregnancy | No pregnancy branch | Wells not validated; D-dimer of limited use; LMWH until DVT is excluded; CUS, then a repeat at 1 week or MRV; enoxaparin by booking weight (p44, p76–81) | Who sees a pregnant woman with a swollen leg: the Green Zone or O&G? |
| Advice | Return if the swelling increases, or if short of breath (`dvt.advice`) | Appendix 4 (p121–124): bleeding signs, avoiding NSAIDs and aspirin, a steady diet, missed doses, telling other doctors, and the signs of DVT and PE | None: the draft adds these in its own words |
| `#calc-wells` | Reads the ebook's items and bands. A score of 1 shows "Moderate risk: D-dimer"; 2 shows "Moderate risk: D-dimer" with an interim anticoagulant | A score of 1 is DVT unlikely: no tests. A score of 2 is DVT likely: CUS the same day | If Krishna adopts the CPG's bands, the calculator needs a second verdict, not a new calculator ((d)) |
| `#calc-anticoag` | Over 30 or under 30; it declines exactly 30 ("The ebook gives doses for over 30 and under 30") | No dose for exactly 30 either; fondaparinux excluded in any renal impairment | Open item 8 stays open. Add the CPG's line as a second source, not an answer |
| `head-injury-cpg` (2015) | Its Anticoagulants tab: stop and reverse in intracranial bleeding; the 2015 CPG gives no doses for vitamin K, FFP, PCC or rFVIIa | This CPG reverses with PCC on a strong suspicion, before the CT and the INR (p72–73). PCC is 15 or 30 IU/kg by INR, up to 50 IU/kg in intracranial haemorrhage, with IV vitamin K 5 mg (p71) | The 2013 CPG reverses earlier (on suspicion) than the 2015 CPG's wording (on a bleed): which does the Green Zone follow? The draft links the two (`hiw` and see-also) |
| `mild-tbi` (ebook) | Immediate CT for a symptomatic patient on an anticoagulant or antiplatelet (`ct`) | A lower threshold for CT in anyone on warfarin (p72), symptoms or not | The same question already open for the head injury CPG (open item 14) |
| `dengue-cpg` (4th edition, 2026) | `mac`: monitor patients on an anticoagulant closely; they may need hospital referral (its p32). No platelet threshold | Withhold warfarin if platelets are <50 × 10⁹/L, or with bleeding or shock; bridge with LMWH only for a high thrombotic risk; restart in recovery with rising platelets (p72–73) | They agree, and the 2013 CPG adds a threshold. Does the Green Zone use it? |
| `blood-tests` | Blood gases, GXM sample rules and drug levels. It has **no INR content** (the brief expected INR) | Not covered | None. The draft links `#blood-tests--gxm` from the major bleeding outcome, for the FFP sample only |
| `cellulitis` (ebook) | Suspected DVT is a life-threatening sign: admit (`lts`) | Cellulitis is one of the alternative diagnoses in the Wells table footnote (p44) | No conflict; `unl` links to `cellulitis` |
| `syncope` (ebook) | Lists PE among the causes | PE route (p45–47) | No conflict |
| `outpatient-referral` | The department's general check for sending a patient to a clinic | No DVT-specific rule | `dispo` links to it as the department's own check |

---

## (d) Calculator candidates

Any new route must be added to `okHref` in `check-data.js`; the draft links only to `#calc` (the hub). Calculator links for the entry go through `CALC_SEE` in `engine.js`, as for `acs-cpg`; the proposed line is at the foot of the draft. `CALC_FACTS` should take the 39 phrases in the calculator facts, all checked present with `JSON.stringify(P['vte-cpg']).includes(...)`.

### 1. VTE treatment doses by weight (recommended: build, or extend `#calc-anticoag` with a source switch)

| Input | Values |
|---|---|
| Weight | kg (booking or latest weight if pregnant) |
| Pregnant | yes / no |
| Kidneys | eGFR or creatinine clearance ≥30 and no impairment; some impairment above 30; below 30; exactly 30; unknown |
| Drug | enoxaparin; tinzaparin; fondaparinux; rivaroxaban |

| Output | Source (draft phrase) |
|---|---|
| Enoxaparin mg twice daily = 1 × weight | 'Enoxaparin 1 mg/kg twice daily' (Table 4.2.1, p50) |
| Tinzaparin: units = 175 × weight, **and** the CPG's formula volume, both shown | 'tinzaparin 175 units/kg once daily'; 'volume in mL = (weight in kg - 10) ÷ 100' (p50). See (b), point 13 |
| Fondaparinux band | '<50 kg 5 mg; 50 - 100 kg 7.5 mg; >100 kg 10 mg' (Table 4.2.2, p51) |
| Rivaroxaban fixed dose | '15 mg twice daily for 21 days, then 20 mg once daily' (p23, p51) |
| Pregnant: enoxaparin band | '<50 kg 40 mg BD; 50 - 69 kg 60 mg BD; 70 - 89 kg 80 mg BD; >90 kg 100 mg BD' (Table 8.5.2, p80) |
| Below 30: UFH or LMWH by anti-Xa; renal enoxaparin 1 mg/kg once daily with anti-Xa; fondaparinux not used | p22, p50, Table 9.1 (p87–88) |
| IV UFH start | '80 IU/kg bolus, then 18 IU/kg/h' (Table 4.2.5, p52) |

It must decline, rather than choose, in these cases:
- fondaparinux with any renal impairment, citing p22 and p88 and showing that p51 says caution;
- a renal input of exactly 30 ('Not in the source: a dose for exactly 30');
- a pregnant weight of exactly 90 kg, or between bands ('no dose for exactly 90 kg or between its bands');
- tinzaparin, where it shows both numbers.

Exactly 50 kg and exactly 100 kg are inside the fondaparinux band '50 - 100'. It stores nothing.

### 2. Warfarin with a high INR (recommended second, after Krishna rules on (b) point 19)

Inputs: INR; bleeding (none, not major, major, intracranial); weight. Outputs from Table 7.3 (p71):
- PCC in IU = weight × 15 (INR <5.0) or × 30 (INR >5.0), up to × 50 for intracranial haemorrhage;
- vitamin K: IV 5 mg with PCC; IV 1 to 3 mg if the bleeding is not major; oral 1 to 5 mg above 8.0;
- withhold 1 to 2 doses for >5.0 <8.0.

It must decline at INR exactly 5.0 (no PCC band, no no-bleeding band) and exactly 8.0. For an INR above range but not over 5.0, it shows the warfarin clinic's Appendix 1 row for the patient's target (p115–116), labelled as the clinic's dose guide, and that chapter 7 has no step. It shows Appendix 1's ACCP 2008 table (p117) only as a note. Draft phrases: the Table 7.3 phrases in the calculator facts, plus 'refers to a doctor for an INR over 4.0' (p107).

### 3. The CPG's Wells bands (optional, small)

Add a second verdict line to `#calc-wells` showing 'DVT likely: 2 points or more' or 'DVT unlikely: 1 point or less' (Table 3.1.1, p44), with the p19 note. Only after Krishna answers the top open question. A separate calculator would duplicate `#calc-wells`.

### 4. Not worth building

- PE Wells: the app links MDCalc already, and these patients are not Green Zone patients.
- Duration (Table 4.3.1): a lookup that needs judgement.
- The UFH nomogram and the protamine table: ward work.
- The pregnancy prophylaxis risk tables: O&G.
- The warfarin starting algorithm (p114): the clinic's.

---

## (e) Every number in the draft, and how it was checked


| # | Number as in the draft | Where | Page | Check |
|---|---|---|---|---|
| 1 | August 2013; review 2017 | title, lead, menu, refs | p1 | Text |
| 2 | ISBN 978-967-12100-0-0; MOH/P/PAK/264.13(GU) | refs | p1; cover | Text |
| 3 | Wells items, 1 point each, alternative diagnosis −2 | `wells` items | p44 | Image (Table 3.1.1) and text |
| 4 | 6 months (cancer item) | `wells`, `pe` | p44, p45 | Image and text |
| 5 | More than 3 days; within 4 weeks | `wells` | p44 | Image and text |
| 6 | Calf 3 cm; 10 cm below the tibial tuberosity | `wells` | p44 | Image and text |
| 7 | DVT likely 2 points or more; unlikely 1 point or less | `wells` opts, `unl` | p44 | Image (text layer shows `!` and `"`) |
| 8 | Pathway form: unlikely <1 | `wells` hint | p19 | Image at 400 dpi, and raw glyphs (`<` is a real 0x3C; `!` maps to ≥) |
| 9 | CUS the same day; within the next 24 hours | `cus` | p45 | Text |
| 10 | Repeat within 1 week; in 7 days on the form | `rep` | p45; p21 | Text; image (p21) |
| 11 | Score of 1 or less ends the work-up | `unl` | p46 | Text and image (algorithm) |
| 13 | Enoxaparin 1 mg/kg twice daily | `txs`, Doses tab | p50 | Text and image (Table 4.2.1) |
| 14 | Tinzaparin 175 units/kg once daily; (weight in kg - 10) ÷ 100; 60 kg = 0.5 mL; 45 kg 0.35 mL; 70 kg 0.6 mL | `txs`, `txp`, Doses tab | p50, p80 | Image (the text layer has U+037E for the semicolons) |
| 15 | Fondaparinux <50 kg 5 mg; 50 - 100 kg 7.5 mg; >100 kg 10 mg | `txs`, Doses tab | p51; p22 | Text and image (Table 4.2.2; p22) |
| 16 | Warfarin 5 mg daily within 24 hours | `txs` | p22 | Text and image |
| 17 | At least 5 days; INR 2 or above on 2 days running | `txs` | p22 | Text and image |
| 18 | INR above 2 for at least 24 hours | `txs` | p50, p51 | Text and image |
| 19 | Rivaroxaban 15 mg twice daily for 21 days, then 20 mg once daily | `txs`, Doses tab | p23; p51 | Text and image |
| 20 | eGFR <30 (mL/min/1.73 m2 and mL/min); creatinine clearance <30 mL/min | `tx` opt, `txr` | p22, p50, p87–88 | Text and image (p22 superscript, p87–88) |
| 21 | Renal enoxaparin 1 mg/kg once daily | `txr`, facts | p87 | Text and image (Table 9.1) |
| 22 | Tinzaparin to a creatinine clearance of 20 mL/min; text <20 mL/min | `txr` | p87 | Text and image |
| 23 | Enoxaparin in pregnancy: <50 kg 40 mg BD; 50 - 69 kg 60 mg BD; 70 - 89 kg 80 mg BD; >90 kg 100 mg BD | `txp`, Doses tab | p80 | Image (Table 8.5.2; the text layer's cell order is scrambled) |
| 24 | Stop LMWH 24 hours before planned delivery | `txp` | p80 | Text |
| 25 | At least 6 weeks after delivery; at least 3 months in all | `txp` | p81 | Text |
| 26 | LMWH for 6 months (cancer) | `txc` | p22 | Text and image |
| 27 | Under 14 days; life expectancy 1 year or more | `txl` | p23 | Text and image |
| 28 | Age >75 years (bleeding risk) | `dispo`, `i58` | p54 | Image (Table 4.3.1.2) and text |
| 29 | INR within a week, then 2 weeks later, then monthly | `dispo` | p52 | Text |
| 30 | Rivaroxaban review in 1 to 2 weeks, then monthly | `dispo` | p53 | Text |
| 31 | Ankle pressure above 23 mmHg; a week after diagnosis; at least 2 years | `dispo` | p23 | Text and image |
| 32 | 3 months (duration rows) | Duration tab | p54 | Image (Table 4.3.1, Grade B) |
| 33 | Target INR 2.5 (2.0 to 3.0); 3.0 (2.5 to 3.5) | `inr` hint, `i5` | p58 | Text |
| 34 | INR over 4.0 referred by the warfarin clinic | `inr` hint | p107 | Text |
| 35 | Major bleeding: reversal within 6 to 8 hours | `maj` | p70 | Text |
| 36 | IV vitamin K 5 mg; PCC INR <5.0 15 IU/kg, INR >5.0 30 IU/kg, up to 50 IU/kg | `maj`, `hiw` | p71 | Image (Table 7.3) and text |
| 37 | FFP 15 to 20 mL/kg; no more than 30% | `maj` | p71; p70 | Image and text |
| 38 | 4-factor and 3-factor PCC | `maj` | p69 | Text and image |
| 39 | IV vitamin K 1 to 3 mg | `nmaj` | p71 | Image and text |
| 40 | INR over 8.0: oral vitamin K 1 to 5 mg | `i8` | p71 | Image and text |
| 41 | Same correction at 24 hours | `i8` | p70 | Text |
| 42 | Oral 1.0 to 2.0 mg; 5 mg if very high | `i8` | p69 | Text and image |
| 43 | INR over 5.0 and below 8.0: withhold 1 to 2 doses | `i58` | p71 | Image and text |
| 44 | Appendix 1: INR 3.1 - 3.9, cut 5 - 10%, next INR 7 - 14 days; INR 4.0 - 4.9, hold 0 - 2 days and cut 10%, next INR 3 - 8 days; target 2.0 to 3.0 and 2.5 to 3.5 | `i5` | p115, p116 | Image (p115) and text |
| 45 | ACCP bands 5 to 8.9 and >9.0; vitamin K 10 mg slow IV | `maj`, `i8` gaps | p117 | Image (one line is garbled in the text layer) |
| 46 | Appendix 1's other starting doses (referred to, no number in the draft; the numbers are in (b) point 9) | `txs` | p113, p114 | Text (p113); image (p114) |
| 47 | Platelets <50 × 10⁹/L | `dw` | p73; p72 | Image (Table 7.4) and text |
| 48 | Head injury: IV vitamin K 5 mg once confirmed | `hiw` | p73 | Image (Table 7.4) |
| 49 | Rivaroxaban 10 mg/day; dabigatran 75 mg/day | `nmin` | p74 | Text and image |
| 50 | One or two days | `nmin` | p74 | Text and image |
| 51 | Rivaroxaban PCC 30 to 50 IU/kg | `nbig` | p75 | Text |
| 52 | PE Wells points 3, 3, 1.5, 1.5, 1.5, 1, 1; heart rate >100; 4 weeks; 6 months | `pe` | p45 | Image (Table 3.1.2) and text |
| 53 | PE likely >4 points; unlikely ≤4 points | `pe` | p45; p19 | Image (`" 4` in the text layer) |
| 54 | CTPA the same day or within 24 hours | `pe` | p47 | Text |
| 55 | Systolic BP <90 mmHg | `pe` | p23 | Text and image |
| 56 | Upper limb: 3 months | `ul` | p104, p105 | Text |
| 57 | IV UFH 80 IU/kg bolus, then 18 IU/kg/h; APTT ratio 1.5 to 2.5 | Doses tab | p52; p58 | Text (Table 4.2.5) |
| 58 | 2015 (the head injury CPG's year) | `hiw` gap | app data | From `data6.js` |
| 59 | 2008 (ACCP) | `maj`, `i8` gaps | p117 | Image |

Also checked: every one of the 39 phrases in the calculator facts is found in the draft. Every node and link resolves when the draft is loaded after `data.js` to `data6.js`, with `check-data.js`'s own rules (46 entries; rules: 15; no errors). The Wells suggestion was tested at the boundaries: scores −2 to 1 go to unlikely, and 2 and above to likely.

---

## What could not be verified

- **HKL's D-dimer method.** The CPG criticises the whole-blood agglutination assay used in most Malaysian laboratories (p46). Which assay HKL runs is a question for the department, and it decides whether the ebook's D-dimer step and this CPG can be reconciled.
- **The 2-point compression test.** Whether the ED's bedside 2-point test (ebook) counts as the CPG's CUS is not answered by either source.
- **The formulary.** Whether tinzaparin, fondaparinux, rivaroxaban and a 4-factor PCC (octaplex or beriplex, p69) are stocked at HKL in 2026 is not in the CPG.
- **Corrections.** The copy read is the Academy's file (PDF created 20 Sep 2013). It was not compared with the Malaysian Society of Haematology's web version.
- **Superseded content.** The CPG is 13 years old and 9 years past its review date. Newer drugs and reversal agents are outside it, and I have not added any (rule 8). Whether a newer national VTE guideline exists outside the Academy list was not checked (no web access, by the brief).
- **The draft's own tinzaparin arithmetic** in (b) point 13 is mine, from the CPG's dose and syringe strength. It is in the review only, not in the draft.

---
