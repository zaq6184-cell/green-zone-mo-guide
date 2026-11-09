# Review: CPG Management of Cancer Pain, 2nd edition (MaHTAS, 2023)

**Built into the app on 9 Nov 2026** (third CPG round): the entry *Cancer pain: CPG 2nd edition* (`#cancer-pain-cpg`) beside the ebook's pain pathway, with the CPG's patient leaflet in English and Bahasa Melayu, and the calculator *Cancer pain: rescue dose and titration* (`#calc-copioid`). No opioid conversion was built: section (d) explains why.

For the Green Zone MO Guide, entry `cancer-pain-cpg`. Reviewed 9 Nov 2026.

- **Source:** *Clinical Practice Guidelines: Management of Cancer Pain (Second Edition).* Published by the Malaysia Health Technology Assessment Section (MaHTAS), Medical Development Division, Ministry of Health Malaysia, 2023 (PDF page 2); cover logos of the Ministry of Health Malaysia, the Malaysian Association for the Study of Pain and the Academy of Medicine Malaysia; MOH/P/PAK/530.23(GU)-e (cover, read at 400 dpi); e ISBN 978-967-2887-70-6 (PDF page 2). Issued in 2023, to be reviewed "in a minimum period of four years (2027)" (PDF page 3). File read: `...\AMM Clinical Practice Guidelines\Cancer\2023 - Management of Cancer Pain (2nd Edition) [342].pdf`, 120 PDF pages, not modified. Also read in full: its Quick Reference (`[343]`, 8 pages) and the two patient information leaflets (`[374]`, `[1165]`, 2 pages each). The training module (`[518].zip`) was not opened.
- **Copyright (PDF page 2):** the copyright owner is MaHTAS. Content may be reproduced in any number of copies and any format or medium provided that a copyright acknowledgement to MaHTAS is included and the content is not changed, not sold, or used to promote or endorse any product or service, and not used in an inappropriate or misleading context. The draft's `refs` carry that acknowledgement. The leaflets carry no copyright line of their own (see What could not be verified).
- **Page offset:** printed arabic page = PDF page − 19 (p1 = PDF 20; p25 = PDF 44; p75 = PDF 94; p100 = PDF 119). Front matter in roman = PDF page − 6 (p i = PDF 7; Algorithms 1 to 3 = p x to xii = PDF 16 to 18). PDF 1 is the cover, PDF 2 to 3 the copyright and updating text (unnumbered), PDF 4 to 6 the contents, PDF 19 blank, PDF 120 the back cover. Every page cited below and in the draft is the printed page.
- **Method:** text from PyMuPDF's text layer (it keeps ≥, ≤, <, >; its bullets are private-use glyphs, normalised before searching). The three algorithms have a text layer, but their arrows and Yes/No branches were read from page images (120 dpi). **No text layer**, read from page images: Table 3 (p19, 300 dpi), Table 4 (p25, 300 dpi), Table 5 (p32, partly: the text layer has the words but not the row structure, 120 dpi), Appendix 3 (p75: words present, rows read from the image), Appendix 4a pictures (p76), Appendix 5a (p89–91, 250 dpi in halves), Appendix 5b (p92–94, 120 and 300 dpi), Figure 2 (p13) and Figure 3 (p53), the cover number (400 dpi), and the leaflet pictures (110 dpi). pdftotext was not used.
- **Scope (p vi):** "Adults and children of all ages with pain from any type of cancer"; users include doctors in primary, secondary and tertiary care. The CPG has no emergency department chapter and no MTS levels.
- **Leaflets:** leaflet 1 (`[374]`) is English, leaflet 2 (`[1165]`) is Bahasa Melayu: checked by reading both. Both are in the draft's `leaflet`, word for word, in the shape of `P['dengue-cpg'].leaflet`. Neither prints a title of its own (the cover panel is a picture of the CPG cover), so `title` ("Cancer pain", "Sakit akibat kanser") is the app's label, taken from the leaflets' headings. Details and what was left out: under (b), points 41 to 43.
- **No `advice` field:** the CPG prints no discharge advice for patients leaving the ED. The two leaflets are its patient advice, and the engine shows them from the discharge outcome (`fu`, `end:'discharge'`) as Home care advice.
- **Size:** `JSON.stringify(P['cancer-pain-cpg']).length` = 37,234: nodes 21.9k, leaflet 7.2k (both languages, required), notes 6.6k, refs 0.8k. Without the leaflet the entry is about 30.1k. The full first draft was 53k; it was cut by scope, not by trimming quotes. What was left out, and why, is listed at the end of (a).

---

## (a) The CPG chapter by chapter

| Part (pages) | What it holds | What matters to the Green Zone | In the draft? |
|---|---|---|---|
| Levels of evidence, formulation (p i) | USPSTF levels; GRADE: "should" strong, "may" weak; yellow box = key message, blue box = recommendation | How to read "should" and "may" | No (used for wording only) |
| Key recommendations (p ii–iii) | 23 bullets from Recommendations 1 to 7 and 11 to 19 | Leaves out Recommendations 8, 9, 10, 20 and 21 and the laxative bullet of 12: see (b) point 38 | Each quoted from its chapter |
| Development, objectives, groups (p iv–ix) | Guidelines used; 23 clinical questions; population; users; DG chaired by a palliative medicine consultant at HKL; HKL pharmacists, nuclear medicine, anaesthesia and oncology on the DG or review committee | Population line | Menu hint |
| Algorithm 1, adults (p x) | Assessment, diagnosis (type, source, severity), pain score bands, WHO ladder Steps I to III, pain control loops, refer to Palliative Care Team/Pain Specialist, reassessment and follow-up | The main ED path | Yes: `asx` to `fu`/`refpal` |
| Algorithm 2, rapid titration (p xi) | IV 1 - 2 mg or SC 2.5 - 5 mg morphine, reassess, adverse events stop rule, end point, convert to 4-hourly; 10% bolus if on opioids | Severe pain with distress: a higher acuity than the Green Zone (MTS 4 and 5) | Yes, as its own outcome `alg2`, labelled above the Green Zone, with the stop rule in `safe` |
| Algorithm 3, children (p xii) | Same ladder with "Opioids" at Steps II and III | Children of all ages are in scope | Yes, summarised in `kid` |
| 1 Introduction (p1–2) | Prevalence; barriers | Context | No |
| 2 Principles (p3–4) | Total Pain; multidisciplinary team; patient and family | Context | No |
| 3 Diagnosis and assessment (p5–11), Recommendation 1 | Table 1 (classification), pain syndromes, Table 2 (history), investigations, tools (VAS, NRS, VRS, FPS; neuropathic LANSS, PainDETECT, DN4; IPOS, ESAS; DT, HADS; FLACC, PAINAD) | Recommendation 1; source of pain; tools in cognitive impairment | `asx`, `src` (syndromes named in the hint), `noncx`. Tables 1 and 2 and the tool list left out |
| 4.1 Principles (p12) | By mouth, by the clock, for the individual, attention to detail | Education on medicines | `fu` |
| 4.2 WHO ladder (p12–13), Recommendation 2, Figure 2 | Steps by pain score; "*Strong opioids can be considered to treat moderate cancer pain" | Core | `sev`, `st2` |
| 4.3 Non-opioids (p14–15), Recommendation 3 | No high-quality evidence for paracetamol or NSAIDs as add-on to opioids | Step I | `st1` |
| 4.4.1 Weak opioids (p15–16), Recommendation 4 | Tramadol (serotonin syndrome, convulsion), codeine, dihydrocodeine | Step II | `st2` |
| 4.4.2 Strong opioids (p16–19), Table 3, Recommendation 5 | Morphine first; oxycodone, fentanyl alternatives; TD fentanyl only when stable; pharmacokinetics | Core | `s3n`, `rot`; Table 3 left out (points 21, 22) |
| 4.4.3 Initiation, titration, maintenance (p19–22), Recommendation 6 | Opioid-naive definition; starting doses; titration options and examples 1 to 3; SR and patch maintenance; no maximum dose; tapering | Core | `op`, `s3n`, `s3w`, `titr`, Titrate tab (Examples 1 and 2) |
| 4.4.4 Breakthrough pain (p22–23), Recommendation 7 | 1/6 to 1/12; up to hourly; incident pain; end-of-dose failure; sublingual fentanyl | Core | `bt` |
| 4.4.5 Opioid rotation (p24–26), Table 4, Recommendation 8 | Indications; conversion table; examples; ratios | Patients on oxycodone or a patch | `rot`, `s3w`, Convert tab |
| 4.4.6 Methadone, pethidine (p26–27), Recommendations 9 and 10 | Methadone by experienced prescribers only; pethidine should not be used | Pethidine is an ED habit | `s3n` (pethidine), `rot` (methadone) |
| 4.4.7 Special populations (p27–29), Recommendation 11 | Renal (eGFR 30 - 89 list), liver, older adults | Dose caution | `s3n` (Recommendation 11). The eGFR list left out: it gives no numbers |
| 4.4.8 Side effects (p29–31), Table 5 | Constipation, nausea, dry mouth, sedation, delirium, pruritus, endocrinopathy, hyperalgesia | Core | `lax`, `drow`, Side effects tab |
| 4.4.9 Toxicity (p32–33), Recommendation 12 | Respiratory depression; naloxone 40 mcg; laxative prophylaxis | Core | `safe`, `tox`, `lax` |
| 4.4.10 Tolerance and addiction (p33–34) | Referral above 600 mg/day oral morphine and equivalents; misuse risk factors | Referral threshold | `refpal` |
| 4.5 Adjuvants (p34–38), Recommendation 13 | Anticonvulsants, antidepressants, corticosteroids, bone agents, ketamine | Long-term, specialist | Left out (doses in Appendix 5a, p90–91) |
| 4.6 Medical cannabis (p38–39) | No recommendation | No | No |
| 4.7 Anticancer therapy (p39–41), Recommendation 14 | Radiotherapy, pain flare after radiotherapy, radionuclides | Oncology | No (Recommendation 14 cut for size) |
| 5 Psychosocial (p42–43), Recommendation 15 | Psychoeducation, psychological, spiritual | Not an ED decision | No |
| 6 Interventional (p44–47), Recommendation 16 | Neurolysis, neuraxial opioids, vertebroplasty, surgery | Whom to refer | `refpal` (Recommendation 16) |
| 7 Other interventions (p48–49) | TENS, exercise, massage, acupuncture | No | No |
| 8 Paediatric (p50–56), Tables 6 to 9, Figure 3, Recommendations 17 to 20 | Assessment ABCDE; tools by age; modified ladder; morphine case example | Children of all ages in scope | `kid` (Recommendations 17 to 19, Table 8 ages, case example) |
| 9 Barriers and education (p57–58) | Barriers; education topics | Context | No |
| 10 Follow-up and referral (p59–60), Recommendation 21 | Clinic, primary care or home; telemedicine; refer severe, inadequately managed pain | Disposition | `fu`, `refpal` |
| 11 Implementing (p61–62) | Facilitators; audit indicator: patients with pain score 7 - 10 prescribed strong opioids | Context | No |
| References (p63–70) | 137 references | Sources named | `refs` (the adapted sources) |
| Appendix 1, 2 (p71–74) | Search strategy; clinical questions | No | No |
| Appendix 3 (p75) | Sedation score (Macintyre), 0 to 3 | Algorithm 2 and toxicity | Sedation tab |
| Appendix 4 (p76–88) | MoH pain scale, FLACC, VRS, SF-MPQ-2, LANSS, PainDETECT, DN4, Distress Thermometer (English and Malay), IPOS, ESAS, PAINAD | FLACC and PAINAD are already in the app (ebook) | Not reproduced; wording differences in (c) |
| Appendix 5a (p89–91) | Adult doses: paracetamol, NSAIDs, weak and strong opioids, combinations, sublingual fentanyl, antidepressants, anticonvulsants, bone agents, dexamethasone, laxatives, anti-emetics | ED doses | Steps (paracetamol, opioids, laxatives, anti-emetics) and Doses tab (NSAIDs, combinations, TD fentanyl) |
| Appendix 5b (p92–94) | Paediatric doses, adapted from the MoH Paediatric Pain Management Guidelines 2023 | Rarely Green Zone | Not reproduced (point 36) |
| Appendix 6 (p95) | Transdermal fentanyl guide, adapted from the HKL Counseling Checklist (Oct 2020) and Hosp Selayang | A walk-in whose patch fell off | Two lines, Convert tab |
| Appendix 7 (p96–97) | Naloxone guide, from the Palliative Care Formulary, 8th edition | Toxicity | `tox`, `drow` |


---

## (b) Points inside the CPG: where its algorithms, text and tables disagree or leave a gap

None is resolved in the draft. Each is quoted with its page; the ones that change an ED decision are also in a node's `gap`, hint or last item.

**Starting and titrating**

1. **Three starting doses for opioid-naive patients.** "A dose of 5 mg 4-hourly of IR oral morphine in opioid-naive patients has been shown to be a safe and effective starting dose (p<0.01)" (p19). Yellow box: "should be initiated at the dose of 5 - 10 mg 4-hourly using the oral IR formulation" (p21, from the 2010 CPG). Appendix 5a: "Starting dose (oral): 3 - 5 mg 4-hourly of IR morphine" (p89), repeated in the Quick Reference (p7). For the elderly: "2.5 mg 4 - 6 hourly ... in elderly or frail patients" (p19) and "2.5 - 5 mg 4 - 6-hourly of the IR formulation in the elderly" (p21); Appendix 5a has no elderly line. The draft shows all three in `s3n`.
2. **"Elderly", "frail" and "older" are never defined**, though they change the dose (p19, p21, Algorithm 2 footnote, Recommendation 11, Table 4 note 3). The only ages in the opioid chapters are study findings: neuropathic pain predictors "age <65 years old" (p9) and morphine intolerance "age >78 years" (p28).
3. **The 50% limit.** Option 1: "Limit to 50% dose increment within 24 hours. If >50% increment is needed, to consult specialist" (p20). Example 1 is exactly 50% (30 to 45 mg/24h). The CPG does not say what to prescribe while the specialist is consulted when the summed total is more than 50% above the regular dose.
4. **Rounding.** Examples 1 and 2 round "down to nearest mg" (7.5 to 7 mg; 6.25 to 6 mg, p20–21); Example 3 then starts from "aqueous morphine 7.5 mg 4-hourly", the dose Example 1 rounded away, and rounds SR by tablet strength (22.5 mg to "Tab morphine SR 20* mg BD", p21).
5. **No maximum dose, yet a referral threshold.** "There is no maximum dose for opioids in cancer pain management" (p20; also p16, p21, Appendix 5a), but "when opioid doses are very high (oral morphine >600 mg/day, oral oxycodone >400 mg/day or transdermal fentanyl >200 mcg/hour), patients should be referred" (p33). The three thresholds agree with Table 4 (600 ÷ 1.5 = 400; 600 ÷ 3 = 200; my arithmetic).
6. **Severe pain: three strengths.** "Rapid titration using IV or SC morphine is preferred in patients presenting with severe cancer pain for initial pain control" (yellow box, p21); the text above it: "rapid titration using parenteral opioids may be useful" (p21); Algorithm 2's entry adds "and distress" (p xi). Whether severe pain without distress also needs parenteral titration is not settled.
7. **Algorithm 2's stop rule comes late.** Its adverse events are "Respiratory rate <8/min OR Sedation score >2" (p xi). On Appendix 3's scale of 0 to 3, ">2" is only score 3, "Somnolent, difficult to rouse, severe respiratory depression" (p75), so titration stops only once severe respiratory depression is present, although "Sedation almost always precedes respiratory depression. Therefore, sedation assessment is a good early clinical indicator" (p32).
8. **Algorithm 2's gaps.** No maximum number of doses or total dose; no rule for converting the "total dose of morphine used from the start of titration" into "regular 4-hourly morphine" (route and fraction not given; Table 4 gives oral = SC × 2 and "SC morphine = IV morphine"); nothing after "Stop titration, Monitor vital signs". It is for adults only; there is no paediatric rapid titration (Appendix 5b's IV morphine says "Slow titration: Refer IV morphine titration protocol", which the CPG does not print, p93).
9. **An unanchored asterisk.** "*Strong opioids can be considered to treat moderate cancer pain" is printed under Algorithm 1 (p x) and Figure 2 (p13), but no box or step carries the asterisk.
10. **The WHO ladder: protocol or not.** "remains useful as an educational tool but not as a strict protocol for cancer pain treatment" (p12) against Recommendation 2: "should be based on the World Health Organization (WHO) analgesic ladder" (p13).
11. **Algorithm 1 has no branch for a patient already on opioids**; it starts from severity. The draft asks "opioid-naive?" first (`op`), using the definition on p19.

**Breakthrough pain**

12. **Five fractions.** "1/6 to 1/12 of the 24-hour dose" (Recommendation 7, p23; Table 4 note 9 says "approximately"); "5% to 15% (up to 20%) of the morphine equivalent daily dose (MEDD)" (p22; 1/6 is 16.7%, above 15%); "similar doses given up to every hour" at initiation (p19, which equals 1/6); Algorithm 2's bolus "10% of the total 24-hour morphine requirement converted to intravenous/subcutaneous equivalent" (p xi); children "1/10 to 1/6 of daily dose ... can be served 1-2 hours after previous dose" (p54) against adults "up to hourly" (p23).
13. **"Smaller rescue doses ... e.g. in renal impairment ... as low as 1/12"** (p22): no eGFR or creatinine threshold.
14. **Patch patients.** Recommendation 7 names morphine or oxycodone only; Table 4 note 9 says "for each opioid" but TD fentanyl is in mcg/h. The CPG does not say which opioid, or what dose, to give for breakthrough pain on a patch. Sublingual fentanyl: "It should only be used in adults on regular strong opioids (oral morphine 60 mg/24h) for ≥1 week" (p23) prints no "≥" before 60 mg.

**Conversion (Table 4, p25)**

15. **Fentanyl ratio, two versions.** p24: "oral morphine-transdermal fentanyl of 100:1"; Table 4: oral morphine mg/day ÷ 3 = TD fentanyl mcg/h. By my arithmetic, 100:1 by mass gives about 42 mcg/h for 100 mg/day, Table 4 gives 33 mcg/h. The CPG does not reconcile them. Morphine to oxycodone, 1.5:1 (p24), agrees with the table.
16. **The two 0.7 cells.** SC morphine to oral oxycodone "÷ 0.7" and oral oxycodone to SC morphine "× 0.7". From the table's own oral morphine row (÷ 2 to SC morphine, ÷ 1.5 to oral oxycodone), the consistent factor would be 0.75 (my arithmetic); every other cell is consistent with that row.
17. **Example 2 (p26) slip:** "Oral morphine mg/day (16 mg 4-hourly = 100 mg per day)": 16 × 6 = 96 mg. Its "Reduce equivalent dose by 25% = 25 mcg per hour" rounds 24.75 (33 × 0.75). Both examples reduce by 25%, the low end of note 2's "25 - 50%"; p24 says "reduce the calculated dose by 25 - 50% when initiating opioid rotation and titrate upwards".
18. **Weak opioids: one pair each.** "PO dihydrocodeine 90 mg/day = PO morphine 10 - 12 mg/day; PO tramadol 150 mg/day = PO morphine 15 - 30 mg/day" (a twofold range). No codeine conversion, though codeine is on Step II and "oral codeine and dihydrocodeine appear to be equipotent" (p16), and Appendix 5a lists paracetamol 500 mg + codeine 8 mg. p19 starts morphine "at a dose equivalent to that of the weak opioid" without saying whether note 2's 25 - 50% reduction applies.
19. **Methadone:** "highly variable, ranging from 5:1 to 10:1" (p24); not in the table.
20. **Transdermal fentanyl, three conditions:** "should only be used when opioid requirements are stable" (Recommendation 5, p19); "should only be considered in patients with stable opioid requirements who have difficulty swallowing or intractable nausea and vomiting" (p18); "never in an opioid naïve patient" (Appendix 5a, p89). Switching: oral 4-hourly opioids stop "12 hours after patch application" (p18), while an RCT supports a "6-h method" for IV (p18).

**Pharmacokinetics (Table 3, p19)**

21. **Table 3 against the text on p17.** p17: "The Tmax for intravenous (IV) and subcutaneous (SC) morphine is 5 - 10 minutes and 15 minutes respectively"; Table 3: Tmax IV 15 mins, SC 30 mins (its onset row gives IV 5 mins, SC 15 mins). p17: SR Tmax "2 - 6 hours", Table 3 "6 hours"; p17: IR duration "3 - 6 hours", Table 3 "4 - 6 hours". Algorithm 2's reassessment times (5 - 10 and 15 - 30 minutes) fit p17.
22. Table 3 prints one merged cell for morphine and oxycodone, so the oxycodone values are the morphine ones.

**Toxicity and naloxone**

23. **Two naloxone regimens.** p32: "very low doses of naloxone at 40 mcg (0.04 mg) can be used and titrated every 1 - 3 minutes" when "respiratory rate <8/minute". Appendix 7: dilute 400 mcg in 10 ml, "small boluses of 0.5 ml (20 mcg) every two minutes" (p96). Children: "0.01 mg/kg IV (Max: 0.4 mg) may repeat every 2 minutes" (Appendix 5b, p93).
24. **Thresholds at exactly 8.** "<8/min" (Algorithm 2, p32); Appendix 7: "If respiratory rate is ≤8 breaths/min and patient is unresponsive" (naloxone) and "If the respiratory rate ≥8 breaths/minute and patient can be easily aroused" (monitor); satisfactory function "≥8 breaths/minute and no cyanosis". At 8 both Appendix 7 rows can apply; responsiveness separates them.
25. Appendix 3 has no "S" (asleep, easily rousable) level, which the ebook's sedation score has (see (c)).
26. **Renal and liver: no numbers.** Recommendation 11: "Adjustment in doses/frequency of opioids should be considered" (p29); the eGFR 30 - 89 list says "reduced dose or frequency" without amounts (p28); below 30, only "a lower eGFR should prompt consideration of a change of opioid to one considered safer" (p28). The Quick Reference words it more strongly: "all opioids should be used with caution & at reduced doses and/or frequency" (QR p2), as the 2010 CPG did (quoted p29).

**Doses (Appendix 5a, p89–91)**

27. **Ibuprofen:** "200 - 400 mg daily, 8-hourly. Max: 2400 mg/day": "daily" and "8-hourly" together, and the maximum is twice the top of the regimen (400 mg 8-hourly = 1200 mg/day; my arithmetic).
28. **Shared cells:** "Consider dose reduction in renal impairment" is printed across metoclopramide and prochlorperazine; the NSAID, weak opioid, combination and strong opioid remarks span their groups. The draft gives each once, then "As above".
29. Typos: "conversion of opiods" (p89); Appendix 6 has two "Step 3" headings (p95); "Puritus" (p31); "Doeleur Neuropathique" (p9, p82).

**Assessment**

30. **FLACC ages, three versions:** ">1 month to 3 years" (Appendix 4b, p77); "1 month to 4 years" (Table 8, p52; QR p3); "children less than 7 years old" with the IASP Faces Pain Scale (Appendix 4a, p76). Table 8 expands FLACC as "Face, Legs, Arms, Cry, Consolability"; Appendix 4b and the abbreviation list say "Activity".
31. Revised FACES: "the child selects 1 to 6 faces" (Table 8), while the MoH faces scale (Appendix 4a picture) is marked 0, 2, 4, 6, 8, 10. The VRS (0 to 4, "ranks, not equal intervals") has no mapping onto the ladder's pain score bands.
32. **No red flags.** The CPG lists "Epidural spinal cord, nerve root or cauda equina compression" as a pain syndrome (p6), "neuropathic pain from spinal cord compression" as a corticosteroid indication (p36) and spinal cord compression among skeletal-related events (p36); "malignant spinal compression fractures" for vertebroplasty (Recommendation 16); hypercalcaemia only as a cause of persistent delirium (p31); "malignant bowel obstruction" (p46); "impending or pathologic fracture" (p46). It gives no urgency, imaging or referral route for any of them. The draft says so in `src` and invents none.

**Children**

33. **Two ladders.** Algorithm 3 (p xii) is the three-step ladder with "Opioids" at Steps II and III; Figure 3 (p53) is a "Modified Analgesic Ladder" from the MoH Paediatric Pain Management Guidelines 2023, which sends uncontrolled pain to the "Pain Service" (Algorithm 3: "Palliative Care Team/ Pain Specialist"). p52: "Weak opioids still have a role despite insufficient robust data"; p54: "Caution on the use codeine and tramadol" and tramadol "is unsuitable for escalating mild-moderate pain or severe pain". Algorithm 3 prints no source line.
34. **Morphine dose.** Case example: "0.2 mg/kg/dose ... (maximum initial dose is 5 mg/dose for children)" for pain score 6/10 (p54). Appendix 5b oral morphine: ">1 year: 0.1 - 0.2 mg/kg 4 - 6 H (for moderate pain) 0.2 - 0.4 mg/kg 4 - 6 H (for severe pain)"; ">12 years: 0.1 - 0.3 mg/kg 4 - 6 H (Max: 10 - 15mg/dose, up to 6 times/24 H)" (p93, image). Breakthrough "(2.5 - 4 mg)" for a 24 mg/day total: 1/10 is 2.4 mg.
35. **Paediatric paracetamol** (Appendix 5b, p92, image at 300 dpi): oral ">3 months - 12 years: 15 mg/kg 4 - 6 H (Max: 75 mg/kg/day or 4 g/day)"; IV ">10 kg or child up to 50 kg: 15 mg/kg 4 - 6H (Max: 60 mg/kg/day ...)"; 12 - 18 years oral "500 mg - 1 g 4 - 6 g (if non-obese ≥50 kg: 1 g 4 -6H)": "4 - 6 g" is presumably "4 - 6 H".
36. **"(Restricted to Pain Service)"** on p92 sits in the fentanyl PCA row (text block at y 457 of 590), not under the table heading: the rest of Appendix 5b is not marked restricted. It was still not transcribed (scope and size).
37. Population "all ages", but the only rapid titration (Algorithm 2) is for adults.

**Key recommendations and Quick Reference**

38. The key recommendations (p ii–iii) leave out Recommendation 12's second bullet, "Laxatives should be prophylactically prescribed in patients with cancer pain and on regular opioid therapy" (p33), and Recommendations 8 (rotation), 9 (methadone), 10 (pethidine), 20 (adjuvants in children) and 21 (follow-up).
39. Quick Reference: "Cancer pain is prevalent at 40 - 70%" (QR p2) against 39.3%, 55.0% and 66.4% by stage (p1); its adult starting dose is 3 - 5 mg (QR p7, as Appendix 5a).
40. The Quick Reference's "Oral morphine is the preferred choice in moderate to severe cancer pain in children & adults" (QR p2) agrees with Recommendations 5 and 18.

**Leaflets**

41. **Translation differences**, quoted as printed in each language: English "help track your pain levels", Bahasa Melayu "membantu memantau tahap kesihatan anda" (help monitor your health level); English "In sedated & intubated patients", Bahasa Melayu "Bagi pesakit yang tidak sedar & diintubasi" (unconscious and intubated); English "interventional procedures", Bahasa Melayu "prosedur khas" (special procedures). The Total Pain diagram in the Bahasa Melayu leaflet keeps its English labels.
42. **Left out of the leaflets:** the MoH pain scale and faces scale pictures (SKALA KESAKITAN 0 to 10, "TIADA KESAKITAN" to "KESAKITAN YANG AMAT SANGAT"; SKALA MUKA 0, 2, 4, 6, 8, 10), the Total Pain wheel and its caption ("Concept of Total Pain" / "Konsep Kesakitan Menyeluruh (Total Pain)"), the picture caption "Source: Ministry of Health, Malaysia. Pain as the 5th Vital Sign Guideline: 3rd Edition. Putrajaya: MoH; 2018." (readable in the image, absent from the text layer), the cover panel (a picture of the CPG cover) and the illustrations. Both text layers also contain "WHAT IS OUR SATISFACTION RATE? CHOOSE US", which is not visible anywhere on the rendered pages (template text hidden under artwork): left out. No line was unreadable.
43. **Joins:** where an answer holds a bullet list ("Medications include:", "Ubat-ubatan termasuk:"), the bullets are joined with semicolons, keeping each bullet's printed capital. The panel heading "What should I know about PAIN RELIEVING MEDICATIONS?" holds the four questions under it, each with its answer, as one group. The leaflet `title` is the app's label (point under Leaflets above). The English "Contact the following for help & more information" has no colon; the Bahasa Melayu has one: both as printed.

---

## (c) The app's related entries against this CPG

Read in `src\parts\data.js` (`pain`, `behavioural-disturbance`), `data2.js` (`children`) and `engine.js` (calculators `analgesia`, `pain`, `calm`, `kids`). The ebook PDF is not available: the comparison is with the app's text. The ebook pathway stays as written (rule 5); nothing below is resolved. Each row is an open question for Krishna.

| Item | App says (entry) | CPG says (page) |
|---|---|---|
| Severe pain route | Ebook `pain`: pain score over 6, consult EP, morphine pain protocol: morphine in saline 1 mg/ml; sedation score under 2, respiratory rate over 8, normotensive; 60 years or below IV 1 mg, otherwise 0.5 mg; reassess in 5 minutes; repeat while pain score over 6 | Algorithm 2 (p xi): severe pain and distress; IV 1 - 2 mg (reassess after 5 - 10 minutes) or SC 2.5 - 5 mg (15 - 30 minutes); stop at respiratory rate <8/min or sedation score >2; end at acceptable relief or a 2-point reduction; lower dose for elderly, frail or renal impaired (no age); on opioids, 10% of the 24-hour requirement. Different dose, age rule, stop thresholds (sedation 2 stops the ebook, not the CPG; RR 8 stops the ebook, not the CPG), blood pressure criterion (ebook only), end point and opioid-tolerant dose |
| Sedation score | Ebook `pain` hint: 0 none (alert), 1 mild (sometimes drowsy), 2 moderate (often drowsy, easily rousable), 3 unrousable, S sleeping and easily rousable | Appendix 3 (Macintyre, p75): 0 awake and alert; 1 occasionally drowsy, easy to rouse, can stay awake; 2 constantly drowsy, easy to rouse, unable to stay awake; 3 somnolent, difficult to rouse, severe respiratory depression; no S |
| Ladder | Ebook: Mild 1–3, Moderate 4–6 (weak opioid e.g. tramadol, dihydrocodeine), Severe 7–10 (strong opioid), "PRN and/or regular"; uncontrolled: Acute Pain Service | Same bands (p12); Step II adds codeine; strong opioids may treat moderate pain (p x); persistent pain needs regular around-the-clock analgesia (Recommendation 6); not controlled at Step III: Palliative Care Team/Pain Specialist (p x) |
| Paracetamol | Ebook and `#calc-analgesia`: over 50 kg 500 mg–1 g 6–8 hourly, max 4 g/day; under 50 kg 15 mg/kg/dose, max 60 mg/kg/day | Adults 0.5 - 1 g, 6-8-hourly, Max 4 g/day, no weight band (p89). Children (Appendix 5b, p92): oral >3 months - 12 years 15 mg/kg 4 - 6 H, Max 75 mg/kg/day or 4 g/day; IV up to 50 kg Max 60 mg/kg/day. Open item 8 (exactly 50 kg) is not settled: the 50 kg lines in Appendix 5b are for children of 12 - 18 years |
| Diclofenac | Ebook: 50–150 mg daily, 8–12 hourly, max 200 mg/day | Max: 150 mg/day (p89) |
| Mefenamic acid | Ebook: 250–500 mg 8 hourly, no maximum | Max: 1500 mg/day (p89) |
| Celecoxib | Ebook: 400 mg BD in acute pain (48 h); 200–400 mg daily longer term; elderly 100 mg daily | 200 - 400 mg, 12 - 24-hourly, Max: 400 mg/day (p89): the ebook's acute dose is twice the CPG maximum |
| Ibuprofen, etoricoxib | Not in the ebook table | 200 - 400 mg daily, 8-hourly, Max 2400 mg/day; 60 - 90 mg daily, Max 120 mg/day (p89) |
| Tramadol | Ebook: 50–100 mg 6–8 hourly, max 400 mg/day; elderly start 50 mg, max 300 mg/day | Same dose and maximum, no elderly line (p89); serotonin syndrome, convulsion (p15–16) |
| Dihydrocodeine | Ebook: named, no dose | 30 - 60 mg, 6 - 8-hourly, Max 240 mg/day (p89) |
| Oral IR morphine | Ebook: 5–10 mg 4-hourly; elderly 2.5–5 mg 4–6 hourly | Same as p21; but p19 gives 5 mg (2.5 mg elderly or frail) and Appendix 5a 3 - 5 mg (point 1) |
| SC morphine | Ebook: under 65 years 5–10 mg 4-hourly; over 65 years 2.5–5 mg 4-hourly | SC 2.5 - 5 mg as a titration bolus (Algorithm 2); "4-hourly parenteral morphine/oxycodone" as an alternative method, no dose (p21); SC = oral ÷ 2 (Table 4) |
| Renal or hepatic impairment | Ebook: reduce initial dose to 1/2–1/3 (morphine, fentanyl) | "Adjustment in doses/frequency of opioids should be considered"; fentanyl safer in renal impairment (Recommendation 11); no fraction |
| Fentanyl | Ebook: IV/IM 50–100 mcg | No adult parenteral bolus dose; parenteral fentanyl "not routinely used for maintenance therapy" (p18); TD only when stable, never opioid naïve |
| Ketamine | Ebook and `#calc-analgesia`: analgesia 0.1–0.3 mg/kg and other bands | An adjunct "used by specialists familiar with cancer pain management or palliative medicine/pain specialists" (p38); no adult dose |
| Pethidine | Not mentioned | "Pethidine should not be used in the management of cancer pain" (Recommendation 10) |
| Rescue dose | Not in the ebook | 1/6 to 1/12 of the 24-hour dose, up to hourly (Recommendation 7, p23) |
| Laxatives | Not in the ebook | Prophylactic laxatives with every regular opioid (Recommendation 12) |
| Discharge | Ebook: pain score under 3, cause identified, cause treated; EMACC, EMWATCH or OPC; TCA stat to nearest facility if pain persists | No discharge criteria; follow-up in the specialist outpatient clinic, primary care clinic or at home (Recommendation 21) |
| Referral | Ebook: Acute Pain Service HKL for persistent severe pain despite maximal ED therapy, underlying chronic pain, or previous APS follow-up | Palliative Care Team/Pain Specialist (Algorithm 1); interventional pain specialists (Recommendation 16); pain or palliative specialist for very high doses (p33) and for severe, inadequately managed pain (p60). Which HKL team takes a cancer pain referral is open |
| Pain tools | Ebook: MOH self-report 0–10; PAINAD (geriatric, dementia); FLACC (non-communicative); CPOT (ventilated) | MoH Pain Scale and VRS (p8); FLACC (">1 month to 3 years"; adults unable to communicate verbally); PAINAD (advanced dementia); no CPOT; sedated and intubated: "observations and behavioral assessment" (Appendix 4a) |
| FLACC wording (`pain` table, `#calc-pain`) | Shortened rows | Appendix 4b (p77): Face 1 adds "disinterested"; Activity 0 "Lying quietly, normal position, moves easily"; Activity 1 "Squirming, shifting back and forth, tense"; Cry 0 "No cry (awake or asleep)"; Cry 2 adds "frequent complaints"; Consolability 1 "Reassured by occasional touching, hugging or being talked to, distractible". Scoring identical (0 to 2 each, total 0 to 10) |
| PAINAD wording | Shortened rows | Appendix 4l (p88): for example "Occasional laboured breathing. Short period of hyperventilation."; "Repeated troubled calling out. Loud moaning or groaning. Crying."; "Facial grimacing". Scoring identical |
| `#calc-pain` reading | Reads FLACC, PAINAD and CPOT totals on the MOH ladder bands | The CPG uses the bands for "pain score" and says PAINAD runs from 0 "no pain" to 10 "severe pain" (p88), but never maps an observational total onto the ladder |
| `#calc-calm` (RASS) | RASS +4 to −5 (ebook, behavioural disturbance) | A different scale: the CPG uses the Macintyre sedation score (0 to 3). They should not be read as one another |
| `children` | No pain content; PAT form sends a child to ETD or PEDWCH; `#calc-kids` has no analgesia | Algorithm 3, Recommendations 17 to 20, Table 8 tools, case example (p54); Appendix 5b doses. Where a child with cancer pain is seen in HKL is the department's rule |

---

## (d) Calculator candidates

A new route (for example `#calc-copioid`, "Opioid doses for cancer pain") must be added to `okHref` in `check-data.js`, and its phrases to `CALC_FACTS`. The 41 phrases in the calculator facts were all checked present with `JSON.stringify(P['cancer-pain-cpg']).includes(s)`. The five Table 4 lines are written as the row's JSON (for example `"Oral morphine mg/day","","÷ 2","÷ 1.5","÷ 3","÷ 3"`), so a calculator can read the table from `notes` (the `dTable` pattern) and the fact check proves every cell.

### 1. Rescue dose for breakthrough pain (recommended: build)

Inputs: regular opioid (oral morphine or oral oxycodone), 24-hour dose (or the regular dose and its interval).
Output: rescue dose range = 24-hour dose ÷ 12 to ÷ 6; "1/6 i.e. equivalent to the 4-hourly opioid dose" marked as the usual ratio; "given as often as required (up to hourly)".
Sources: "Opioids (morphine or oxycodone) for breakthrough cancer pain should be prescribed at 1/6 to 1/12 of the 24-hour dose" (Recommendation 7, p23); "has been 1/6 i.e. equivalent to the 4-hourly opioid dose"; "doses as low as 1/12 of the 24-hour dose can be used" (p22); "Rescue dose for breakthrough pain is given as often as required (up to hourly)" (p23).
Decline or note, not choose: which fraction in renal impairment (no threshold, point 13); a patient on a fentanyl patch ("For a patient on a fentanyl patch, the CPG does not say which opioid to use for rescue or how to convert its dose"); sublingual fentanyl (not interchangeable, p23); children (1/10 to 1/6, p54: a different rule). Optionally one labelled line for Algorithm 2's IV/SC bolus in opioid-tolerant patients: 10% of the 24-hour morphine requirement converted to IV/SC (÷ 2 from oral, Table 4), marked "Algorithm 2, above the Green Zone".

### 2. New regular dose after titration (recommended: build, with item 1)

Inputs: current regular 4-hourly dose; rescue doses taken in the last 24 hours (number and size); or "no rescue doses, pain still uncontrolled".
Output, option 1: total = regular × 6 + rescue doses; new 4-hourly dose = total ÷ 6. If the increment is over 50%: show the 50% limit and "Limit to 50% dose increment within 24 hours. If >50% increment is needed, to consult specialist." Do not choose between the capped dose and waiting (point 3).
Output, option 2: new 24-hour dose = 1.25 to 1.5 × current; ÷ 6. Show both ends ("25 - 50% of the daily dose").
Rounding: show the exact value and the value "rounded down to nearest mg", as Examples 1 and 2; say that SR rounding follows tablet strength (Example 3) and do not round SR.
Checks against the CPG: Example 1 (5 mg 4-hourly + 3 rescue doses: 45 mg/24h, 7.5 mg, prescribe 7 mg) and Example 2 (30 mg + 25% = 37.5 mg, 6.25 mg, prescribe 6 mg) must reproduce.
Decline: titration within 24 hours of starting ("as early as 24 hours after initiation"); a dose reduction for intolerable side effects (no amount printed); very high doses: show the p33 thresholds.

### 3. Opioid conversion from Table 4 (recommended: build after Krishna confirms points 15 to 18)

Inputs: current opioid and form (oral morphine, SC morphine, oral oxycodone, SC oxycodone mg/day; TD fentanyl mcg/h), its 24-hour dose, the new opioid.
Output: equivalent 24-hour dose by the cell's factor; the same after a 25% and a 50% reduction (both shown: "consider a dose reduction of 25 - 50% due to incomplete cross-tolerance"); per dose ÷ 2 (BD) or ÷ 6 (4-hourly); rescue 1/6 to 1/12 for morphine or oxycodone. Notes always shown: "This conversion chart should only be used as a guide"; "Consider reduced doses in the elderly and in patients with renal or significant hepatic impairment"; for a fentanyl result, "never in an opioid naïve patient" and only when requirements are stable.
Decline: codeine ("The CPG gives no conversion for codeine"); methadone ("highly variable, ranging from 5:1 to 10:1"); tramadol and dihydrocodeine beyond the two printed pairs (scaling a single printed equivalence to other doses is not printed: show the pairs, ask Krishna before computing); a fentanyl patch strength (none printed; Example 2 rounds 24.75 to 25 mcg/h); show the p24 "100:1" note beside any fentanyl result and the 0.7 cells as printed.
Example 1 (p26: 120 mg/day oral morphine ÷ 1.5 = 80 mg; −25% = 60 mg; CR oxycodone 30 mg twice daily) must reproduce. Example 2 reproduces only from 100 mg/day, not from the 96 mg that 16 mg 4-hourly gives (point 17).

### 4. Not worth building

- **Child oral morphine by weight:** the case example (0.2 mg/kg/dose, maximum initial 5 mg/dose) and Appendix 5b (ranges by age and severity, maximum 10 - 15 mg/dose over 12 years) differ (point 34); few such children reach the Green Zone, and the PAT rule decides where they are seen.
- **Sedation score:** four rows; a table does it. Its stop rule (>2) differs from the ebook's (2 or more): settle that first.
- **Naloxone:** a fixed dilution (400 mcg in 10 ml, 0.5 ml = 20 mcg); two regimens to settle first (point 23).

---

## (e) Every number in the draft, and how it was checked

"Text" = found in PyMuPDF's text layer of that page (a scripted search of every draft fragment of 25 characters or more over all 120 pages and both leaflets: 249 found; the 151 not found are my own connective words, cells read from images, or parentheses the script strips, each reviewed by eye; four quotes found to be altered were restored to the printed wording). "Image" = read from a rendered page at the dpi shown.

| # | Number as in the draft | Where | Page | Check |
|---|---|---|---|---|
| 1 | 2023; review 2027 | menu, refs | PDF 2–3 | Text |
| 2 | e ISBN 978-967-2887-70-6 | refs | PDF 2 | Text |
| 3 | MOH/P/PAK/530.23(GU)-e | refs | cover | Image, 400 dpi |
| 4 | Pain score 1 - 3, 4 - 6, 7 - 10 | sev, kid | p x, p xii, p12 | Text and image, 120 dpi |
| 5 | Paracetamol 0.5 - 1 g, 6-8-hourly, Max: 4 g/day | st1 | p89 | Image, 250 dpi (dose also in the text layer) |
| 6 | Tramadol 50 - 100 mg, 6 - 8-hourly, Max: 400 mg/day | st2 | p89 | Image, 250 dpi |
| 7 | Dihydrocodeine tartrate 30 - 60 mg, 6 - 8-hourly, Max: 240 mg/day | st2 | p89 | Image, 250 dpi |
| 8 | 5 mg 4-hourly (p<0.01) | s3n | p19 | Text |
| 9 | 2.5 mg 4 - 6 hourly (p<0.01) | s3n | p19 | Text |
| 10 | 5 - 10 mg 4-hourly; 2.5 - 5 mg 4 - 6-hourly | s3n | p21 | Text |
| 11 | 3 - 5 mg 4-hourly of IR morphine | s3n | p89 | Image, 250 dpi |
| 12 | Oxycodone 5 mg of IR 4 - 6-hourly | s3n | p89 | Image, 250 dpi |
| 13 | PO dihydrocodeine 90 mg/day = PO morphine 10 - 12 mg/day; PO tramadol 150 mg/day = PO morphine 15 - 30 mg/day | s3w, Convert | p25 | Text |
| 14 | Divide by 2 (BD), by 6 (4-hourly) | s3w, Convert | p25 | Text |
| 15 | 25 - 50% (cross-tolerance) | s3w, rot, Convert | p25 | Text |
| 16 | 24 hours after initiation; >3 doses; 50% within 24 hours; 25 - 50% of the daily dose; divided by 6 | titr | p20 | Text |
| 17 | 1/6 to 1/12 of the 24-hour dose | bt, Convert | p23, p25 | Text |
| 18 | 1/6; as low as 1/12 | bt | p22 | Text |
| 19 | Up to hourly; last 24 hours | bt | p23 | Text |
| 20 | Lactulose 15 - 20 ml, 6 - 8-hourly; macrogol 1 - 4 sachets/day; bisacodyl 5 - 10 mg, 1 - 2 times daily, Max 20 mg/day; senna 2 tabs OD or 1 tab BD, Max 8 tabs/day | lax | p91 | Image, 250 dpi |
| 21 | Metoclopramide 10 - 20 mg, 6 - 8 hourly; prochlorperazine 10 - 30 mg daily; haloperidol 0.5 - 3 mg nocte | lax | p91 | Image, 250 dpi |
| 22 | 5 -10 days | lax | p30 | Text |
| 23 | Respiratory rate <8/min; sedation score >2 | safe, alg2 | p xi | Text and image, 120 dpi |
| 24 | ≤8 breaths/min; 400 mcg in 10 ml; 0.5 ml (20 mcg) every two minutes; "1 ampoule stat" | tox | p96–97 | Text |
| 25 | <8/minute; 40 mcg (0.04 mg); every 1 - 3 minutes | tox gap | p32 | Text |
| 26 | ≥8 breaths/minute | drow, tox gap | p96 | Text |
| 27 | Within a week; dose reduction of 25% | drow | p30–31 | Text |
| 28 | >600 mg/day; >400 mg/day; >200 mcg/hour | refpal | p33 | Text |
| 29 | IV 1 - 2 mg, 5 - 10 minutes; SC 2.5 - 5 mg, 15 - 30 minutes; 2 points; 4-hourly; 10% of the 24-hour requirement | alg2, titr facts | p xi | Text and image, 120 dpi |
| 30 | 5:1 to 10:1 | rot | p24 | Text |
| 31 | FLACC 1 month to 4 years; Revised FACES 4 years to 7 years; NRS ≥7 years | kid | p52 | Text and image, 120 dpi |
| 32 | 0.2 mg/kg/dose × 20 kg = 4 mg q4h; 5 mg/dose; 24 mg/day; 1/10 to 1/6; 2.5 - 4 mg; 1-2 hours; 10-year-old, 20 kg | kid | p54 | Text |
| 33 | Table 4: 2, 1.5, 3, 3; 2, 0.7, 1.5, 1.5; 1.5, 0.7, 2, 2; 3, 1.5, 2, 1; 3, 1.5, 2, 1 (multiply below the diagonal, divide above) | Convert | p25 | Image, 300 dpi (numbers also in the text layer, without the colours) |
| 34 | TD fentanyl 25 mcg/hour = SC/IV infusion 25 mcg/hour | Convert | p25 | Text |
| 35 | 72 hours (patch change) | Convert | p95 | Text |
| 36 | Example 1: 5 mg × 6 + 5 mg × 3 = 45 mg/24h; 45/6 = 7.5 mg; 7 mg | Titrate | p20 | Text |
| 37 | Example 2: 30 mg; 25% (7.5 mg); 37.5 mg; 6.25 mg; 6 mg | Titrate | p21 | Text |
| 38 | Diclofenac 50 - 150 mg daily, 8-12 -hourly, Max 150 mg/day; mefenamic acid 250 - 500 mg 8-hourly, Max 1500 mg/day; ibuprofen 200 - 400 mg daily, 8-hourly, Max 2400 mg/day; celecoxib 200 - 400 mg 12 - 24-hourly, Max 400 mg/day; etoricoxib 60 - 90 mg daily, Max 120 mg/day | Doses | p89 | Image, 250 dpi |
| 39 | Paracetamol 500 mg + codeine 8 mg and paracetamol 325 mg + tramadol 37.5 mg: 1 - 2 tablets, 6 - 8-hourly, Max 8 tablets/day | Doses | p89 | Image, 250 dpi |
| 40 | Sedation score 0 to 3 | Sedation | p75 | Image, 120 dpi (words in the text layer, rows from the image) |
| 41 | 7th ed. 2020; 2021; 2019 (Appendix 5a sources); 8th edition 2022 (Appendix 7); 2007 (Appendix 3); 2010 (adapted algorithms) | Doses src, refs | p91, p97, p75, p x | Text |
| 42 | 0 to 10; under 7 | leaflet | leaflets p2 | Text (both leaflets) |
| 43 | MTS levels 4 and 5 | alg2, tox, sv | the app (CLAUDE.md) | Not a CPG number |

---

## What could not be verified

- **The ebook.** Its PDF is not available; (c) compares with the app's text of the pain pathway.
- **Leaflet copyright.** The leaflets print no copyright line, date or publisher statement; their cover shows the CPG cover with its number and the three logos. They are reproduced unchanged with acknowledgement, as the CPG's copyright allows, on the assumption that they belong to the CPG's implementation materials (p62 names the CPG, Quick Reference and Training Module, not leaflets). Krishna may want to confirm.
- **Corrections.** The CPG says the web version is definitive (PDF 3); the copy read is the Academy of Medicine file; it was not compared with the MaHTAS website version.
- **Appendix 5b** was read at 120 dpi to describe it, and its paracetamol and morphine rows at 300 dpi for points 34 and 35; nothing from it is in the draft.
- **"oral morphine 60 mg/24h" (p23)** is read as at least 60 mg; the CPG prints no sign.
- **The HKL Counseling Checklist (Oct 2020)** that Appendix 6 adapts was not seen; the department may hold a newer version.
- **Ten points need Krishna or the department**, not the CPG: the starting dose of oral morphine (point 1); whether severe pain with distress (Algorithm 2) is outside the Green Zone, and in which zone; Algorithm 2 or the ebook's EP morphine protocol; the sedation and respiratory thresholds; the naloxone regimen; which HKL team takes cancer pain referrals (palliative care or the Acute Pain Service); diclofenac and celecoxib maxima; discharge criteria for cancer pain; whether the conversion calculator may scale the tramadol and dihydrocodeine pairs; and where a child with cancer pain is seen.

---
