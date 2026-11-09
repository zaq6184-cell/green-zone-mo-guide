# Review: CPG Management of Foreign Body Ingestion in Children (MaHTAS, 2025)

**In the app since 9 Nov 2026** (Academy CPG round): the entry *Swallowed foreign body in children: CPG 2025* (`#fb-children-cpg`), linked from the department's swallowed foreign body step in Children in the ED, with five reference tabs. No calculator was built: the steps follow the CPG's algorithms object by object.

For the Green Zone MO Guide, entry `fb-children-cpg` (draft: the entry). Reviewed 9 Nov 2026.

- **Source:** *Clinical Practice Guidelines: Management of Foreign Body Ingestion in Children.* Malaysian Health Technology Assessment Section (MaHTAS), Medical Development Division, Ministry of Health Malaysia. Issued 2025, review due 2029 (p vi). e-ISBN 978-629-7842-23-3 (PDF page 2). File read: `...\AMM Clinical Practice Guidelines\Paediatric Surgery\2025 - Management of Foreign Body Ingestion in Children [1174].pdf`, 86 PDF pages, not modified.
- **Copyright (PDF page 2):** MaHTAS owns it. Content may be reproduced in any number of copies and in any format or medium provided that a copyright acknowledgement to MaHTAS is included and the content is not changed, not sold, or used to promote or endorse any product or service, and not used in an inappropriate or misleading context. The draft's `refs` carry that acknowledgement.
- **Page offset:** printed arabic page = PDF page − 20 (p1 = PDF 21; p64 = PDF 84). Front matter in roman = PDF page − 4 (p i = PDF 5; Algorithms 1 to 6 = p xi to xvi = PDF 15 to 20). PDF 1 is the cover, PDF 2 the copyright page, PDF 3 to 4 the contents, PDF 85 to 86 the back cover. Every page cited below and in the draft is the printed page.
- **Method:** text from PyMuPDF's text layer (it keeps ≥, ≤, <, >). The six algorithms, the NASPGHAN imaging table (p10–12), the DG treatment table (p24), Appendix 3's table (p46–47), Appendix 4 (p48–58), Appendix 5 (p59–61) and Appendix 6 (p62, a raster image) have **no text layer**: they are vector art, so every cell was read from page images rendered at 150 to 400 dpi (rotated upright where the page is landscape). The numbers in the algorithms were re-read at 400 dpi. pdftotext was not used.
- **Scope (p iii):** all patients ≤18 years old with foreign body ingestion of non-edible objects: button batteries, sharp objects, magnets, coins/blunt objects and superabsorbent polymer objects. **Excluded:** inhalation of a foreign body, food bolus ingestion and corrosive ingestion. So the food bolus algorithm the ED asked for **does not exist** in this CPG; the draft says so (node `excl`) and invents nothing.
- **Leaflet:** none. The discharge advice (Recommendation 5) and prevention advice (Recommendation 8) are printed in English only. Appendix 6 is a Bahasa Melayu page from the child health record book on home and toy safety, not a translation of the return advice; it is quoted in the Advice tab, labelled as such.

---

## (a) The CPG chapter by chapter

| Part (pages) | What it holds | What matters to the ED | In the draft? |
|---|---|---|---|
| Key recommendations (p i–ii) | The recommendations, repeated from the chapters | Two differ in wording from the chapter versions (points 7 and 27 below) | Not as a block; each recommendation is quoted from its chapter. The two wording differences are noted where they matter (Imaging tab, Follow-up tab) |
| Objectives, population, users, methods (p iii–vi) | ≤18 years; exclusions; levels of evidence (USPSTF 2015); GRADE wording: "should" strong, "may" weak; update due 2029 | The exclusions (food bolus, corrosive, inhaled) | Yes: menu hint and `excl` |
| Development group, review committee, external reviewers (p vii–x) | Names and posts | The chair, a paediatric emergency physician and the review committee chair work at Hospital Tunku Azizah, Kuala Lumpur (p vii–ix): see (c) | No (names not needed) |
| Algorithm 1, initial management (p xi) | Red flags → resuscitation/critical care area; high-risk object or child → urgent referral; radio-opaque? → initial X-ray (Neck AP and lateral, chest AP, abdomen AP) → seen? → symptomatic? → discharge with advice | The ED's own pathway: triage, first X-ray, who goes home | Yes: nodes `rf` to `home1`, as printed |
| Algorithm 2, button battery (p xii) | By location; stomach & duodenum asymptomatic split by age <5 years and/or BB ≥20mm; post-removal branch | The most time-critical object | Yes: `bb`, `bboes`, `bbage`, `bburg`, `bbfu`, `bbbda`, shared `emerg` and `sxbd`; post-removal steps summarised (Follow-up tab, `bboes`) |
| Algorithm 3, sharp (p xiii) | By location; asymptomatic: repeat AXR in 3 to 5 days, in-patient or outpatient by ease of access | Where a sharp object lies decides emergent, urgent or watchful care | Yes: `sh`, `shsta`, `shbda`, shared outcomes |
| Algorithm 4, multiple magnets (p xiv) | By location; beyond duodenum asymptomatic: in-patient observation, X-ray within 8-12 hours | Multiple magnets; fistula formation is shown in Figures 5 and 9 (p15, p26) | Yes: `mm`, `mmobs`, shared outcomes |
| Algorithm 5, coin/cylindrical battery/single magnet/blunt (p xv) | By location; stomach asymptomatic: discharge, X-ray in 2-4 weeks | The commonest objects: blunt objects 60%, coins 40% in one cohort (p19) | Yes: `bl`, `blsta`, `blbda`, `smag` (single magnet notes), shared outcomes |
| Algorithm 6, superabsorbent polymer (p xvi) | Paediatric surgical consult; symptomatic → transfer & imaging; asymptomatic → admit for observation | Water beads and expandable toys (p6); bowel obstruction is shown in Figures 10 and 11 (p27) | Yes: `sap`, `sapsym`, `sapobs` |
| 1 Introduction (p1–2) | 80 - 90% pass spontaneously, 10 - 20% need endoscopy, about 1% surgery; scope is non-edible objects | Context only | Only the scope sentence (`excl`) |
| 2 Triage (p3–4), Recommendation 1 | PAT; triage categories critical/acute/urgent; red flags; endoscopy timing (emergent <2 hours, urgent ≤24 hours, elective >24 hours); unwitnessed button battery symptoms | Core | Yes: `rf` (categories as info), Triage tab, timing in `bb` hint, outcomes and Treatment table tab |
| 3.1 Clinical assessment (p5–7) | Odds ratios for intervention; presenting symptoms; examination signs; RCH Melbourne high-risk list (section 3.1, used by Algorithm 1 and Recommendation 4) | Core: the high-risk list defines "low-risk" for discharge | Yes: `hr` checklist, `sym` hint, Triage tab "On examination". Odds ratios left out |
| 3.2 Imaging (p7–15), Recommendation 2 (p13) | Diagnostic accuracy; RCEM magnet imaging (p8); ESPGHAN (p8–9); NASPGHAN table by object (p10–12); DG table (p13); figures (p14–15) | Core: which views, what they show | Yes: `xr`, object hints, Imaging tab (DG table, Recommendation 2, what X-rays show). NASPGHAN table not reproduced; its three numbers that conflict are in gaps |
| 4 Referral (p16–17) and 4.1 Admission | Indications for referral; SCAN/OSCC; immediate admission; admission for observation; admit and consider intervention | Core | Yes: `urg`, `adm`, `admi`, `admo`, `admob`, `magmet` |
| 5.1 Adjunct treatment (p18) | Honey (ESPGHAN dose; National Capital Poison Center indications) | Yes, while waiting for endoscopy | `honey`, `bboes`, `crit` |
| 5.2 Conservative management (p19–20) | Magnets 8 - 12 hours; sharp daily AXR up to 3 days; button battery admission if access is hard; cylindrical batteries; transit times; SAP studies | Yes | In `mmobs`, `shsta`, `bbfu`, `bl`, `blsta`, `sapobs`, `admob` |
| 5.3 Endoscopy (p20–23) | Studies; button battery timing (p21–22); NASPGHAN emergent removal of SAP (p23) | The p22 "within 12 hours" sentence and p23 SAP sentence | Quoted in `bburg`, `sapsym`, `sapobs` |
| 5.4 Surgery (p23–25), DG table (p24), Recommendation 3 (p25) | Treatment by object, location and symptoms; endoscopy and surgery recommendations | Core | Yes: outcomes; the p24 table in full (Treatment table tab, SAP rows summarised in its source line) |
| Figures 7 to 11 (p26–27) | Endoscopic and operative photographs | No | No |
| 6.1 Discharge (p28–31), Recommendations 4 and 5 | RCH discharge criteria; ESPGHAN, BBTF, RCEM, SIGENP discharge conditions; return advice; magnet advice | Core | Yes: `dc`, `dcok`, `dcno`, `home1`, `bbfu`, `bbbda`, `smag`, Advice tab |
| 6.2 Follow-up (p31–34), Recommendations 6 and 7 | Intervals by object; DG opinion (p33); after removal | Yes for discharge planning | Yes: outcomes and Follow-up tab |
| 7 Prevention (p35–36), Recommendation 8 | General, magnet and button battery prevention | Advice to caregivers | Yes: Advice tab (Recommendation 8; the long industry and legislation list left out) |
| 8 Implementing (p37–38) | Facilitators, barriers; audit indicator: button battery removal from the oesophagus within 2 hours of arrival to referral centre, target 60% | The 2-hour standard | Yes: `bboes` |
| References (p39–41) | 57 references | To name the sources the CPG quotes | Named in `refs` |
| Appendix 1 and 2 (p42–45) | Clinical questions, search strategy | No | No |
| Appendix 3, Malaysian Triage Scale (p46–47) | Paediatric triage process; danger-sign table, Levels 1 to 3; children <8 years not Level 5; infants <1 year Level 4 or higher | Yes: drooling and difficulty in swallowing are Level 2 | Yes: Triage tab, full table |
| Appendix 4 (p48–58) | Management options from six other guidelines (NASPGHAN, ESPGHAN, ASGE, Colorado, CMU, SIGENP/AIGO) | Background; not the CPG's own position | No (read at 120 dpi; one inconsistency noted, point 11) |
| Appendix 5 (p59–61) | Safe discharge recommendations from NASPGHAN and a single institution | Background | No (one typo noted, point 10) |
| Appendix 6 (p62) | Buku Rekod Kesihatan Bayi dan Kanak-Kanak (0-6 Tahun): Keselamatan di rumah; Keselamatan bahan permainan | Bahasa Melayu prevention for caregivers | Toy-safety list only, labelled, in the Advice tab. The infosihat links were not copied |
| Abbreviations, acknowledgements (p63–64) | | No | No |

---

## (b) Points inside the CPG: where its algorithms, text and tables disagree or leave a gap

None is resolved in the draft. Each is quoted with its page; the ones that change an ED decision are also in the node's `gap`.

**Triage and the first X-ray**

1. **Red flags, two lists.** Chapter 2 (p3) gives four red flag features: stridor, actively choking; wheeze or increased work of breathing; tachycardia, appears unwell or pale; haematemesis or malaena. Algorithm 1's red flag box (p xi) has seven: it adds drooling, hemodynamic instability and suspected button battery ingestion, which p3–4 file under the *critical* triage category. The draft's checklist uses Algorithm 1's box and shows the categories beside it.
2. **Triage categories have no MTS level.** The DG's categories (p4) are critical, acute and urgent; Appendix 3 (p46–47) uses MTS Levels 1 to 5. The CPG never maps one to the other, nor to a zone. Appendix 3 puts *difficulty in swallowing* and *drooling* at Level 2 and *stridor* at Level 1, and prints *wheezing* at both Level 1 and Level 2. Algorithm 1 names an area (resuscitation/critical care, or non-critical), not a level.
3. **Algorithm 1 asks "high risk foreign body" before the X-ray**, although several items of the section 3.1 list depend on the X-ray: "button battery lodged in oesophagus", "sharp objects in the oesophagus", "lead-based objects that fail to transit through the stomach".
4. **Every object seen goes to urgent referral.** Algorithm 1 sends any foreign body seen on the initial X-ray to "Urgent referral to Paediatric Surgery/General Surgery/ENT/ Gastroenterology", then to the object algorithms, several of which discharge an asymptomatic child (Algorithms 2, 3, 5; Recommendation 4). The CPG does not say whether the ED or the specialist applies them. Its emergent/urgent/elective times (p4) are for endoscopy; no time is given for an urgent referral.
5. **Suspected, not seen, no symptoms.** Algorithm 1 discharges this child with advice and no follow-up, while chapter 4 (p16) lists "suspected/unwitnessed foreign body ingestion" among the indications for consultations/referrals.
6. **Suspected button battery not seen on the X-ray.** Algorithm 2 starts at "Confirmed button battery ingestion". A suspected battery is a red flag (p xi) with "Immediate imaging if available", but no step covers a negative film beyond ESPGHAN's point that the radiograph must include the entire neck, chest and abdomen (p9).
7. **Ultrasound, three versions.** The key recommendations (p i): abdominal ultrasonography for superabsorbent polymer objects. Recommendation 2 (p13): for superabsorbent polymer objects *and any sharp radiolucent object*. The NASPGHAN table the CPG quotes (p12) prints USG "Not-applicable" for SAP objects and plain X-ray "Unlikely to be helpful (radiolucent)", while the DG table (p13) gives "Plain Abdominal X-ray / USG".
8. **The DG imaging table (p13) prints "Suspected Type of Foreign Body" as the heading of both columns**; the second column is the imaging.
9. **Views differ by source.** Algorithm 1: neck AP and lateral, chest AP, abdomen AP. DG table (p13): button battery in chest, chest X-ray AP & lateral; in abdomen, abdominal X-ray AP supine; magnets, CXR-AP and AXR AP & lateral. ESPGHAN (p8–9): biplane AP and lateral of neck, chest, abdomen (and pelvis if indicated). RCEM (p8): chest and abdominal radiographs in supine AP view, with a lateral view if a single magnet is seen.

**Size**

10. **"Large" has four thresholds.** Section 3.1, RCH (p6): ">60 mm long and/or >20 mm wide". Admission criteria (p16): "diameter > 2 - 2.5 cm, length > 5 - 6 cm in children" (a range, not a cut-off). SIGENP (p29): outpatient care if "≤25 mm in diameter or 60 mm in length". Transit time longer for "regularly shaped objects >19.5 mm and irregularly shaped objects >22.5 mm" (p31). Appendix 5 (p59) prints "diameter <255 mm" (read at 400 dpi; presumably 25 mm).

**Button battery**

11. **Gastric battery timing, five versions.** Recommendation 3 (p25): urgent endoscopic removal within 24 hours if the child is aged <5 years, OR the battery is ≥20 mm; aged ≥5 years with <20 mm, repeat abdominal X-ray at 10 - 14 days. A study summary (p22): "endoscopic removal of gastric button battery ingestion within 12 hours can be considered regardless of symptoms or age group". ESPGHAN (p8): battery >20 mm in the stomach, "removal is indicated if the battery remains in place beyond 48 hours post-ingestion". The NASPGHAN imaging table (p10): "If ≥5 yrs old and BB >20 mm, repeat X-ray in 48 hours", with no row for a child <5 years with a battery <20 mm; the same NASPGHAN advice in Appendix 4 (p52) prints "≥20 mm". A radiographic protocol (p32): batteries remaining within the stomach >48 hours should be retrieved endoscopically. Recommendation 3's OR rule overrides the 48-hour options for any battery of 20 mm or more.
12. **Stomach, or stomach and duodenum.** Recommendations 3 and 6 (p25, p33) say "in the stomach"; Algorithm 2 and the p24 table say "Stomach & Duodenum".
13. **Discharge or observation.** For ≥5 years and <20 mm, Algorithm 2 prints "Discharge with follow-up X-ray at 10 - 14 days"; the p24 table prints "observation Repeat X-ray at 10-14 days, remove if persist". The CPG never says whether 10 - 14 days counts from ingestion or presentation; ESPGHAN's 7 - 14 days is "post-ingestion" (p8) or "after" passage beyond the oesophagus (p9, p32). Algorithm 2's "Progress" question and Recommendation 3's "still in the stomach" are not the same test (a battery that moved to the duodenum).
14. **Beyond the duodenum, not symptomatic.** Algorithm 2 and the p24 table allow spontaneous passage and discharge at any age and size; Recommendation 4 (p29) names for discharge only "children ≥5 years of age with <20 mm button battery ingestion beyond the oesophagus"; Appendix 5's NASPGHAN column adds "ingestion time <2 hours" (p60). Algorithm 2 gives this branch no follow-up X-ray; ESPGHAN gives one at 7 - 14 days (p32).
15. **"Low-risk" for discharge.** Recommendation 4 defines a low-risk foreign body as one not on section 3.1's high-risk list. That list names only a button battery *lodged in oesophagus*, so by that definition a battery in the stomach counts as low-risk, although Recommendation 3 sends a child <5 years, or a battery ≥20 mm, for urgent removal.
16. **Symptomatic battery in the stomach**: Algorithm 2 sends it to "Emergent endoscopic removal" (and the p24 table agrees); Recommendation 3 says only "endoscopic removal should be done ... stomach, presenting with symptoms", with no time.
17. **Honey is not a DG recommendation.** 5.1 (p18) quotes ESPGHAN's dose (10 mL, 2 teaspoons, every 10 minutes, maximum six doses; ref 22) and the National Capital Poison Center's indications (ref 8). The CPG lists four indications but does not say whether all must apply, and gives no position of its own; there is no honey box in any algorithm.
18. **Co-ingested magnet.** Algorithm 2 has no magnet branch. The BBTF criteria (p28) allow outpatient observation only with "No co-ingestion with magnet"; 4.1 (p16) admits "a magnet plus another metallic object".

**Magnets**

19. **Imaging interval, four versions.** NASPGHAN table (p11): "Serial X-ray (4 - 6 hours)". RCEM (p8): follow-up AXR after 6 - 12 hours; failure to progress after 6 - 12 hours warrants an immediate discussion with a paediatric surgeon. 5.2 (p19): repeat imaging within 8 - 12 hours after admission. Algorithm 4: "repeat X-ray within 8-12 hours", then "every 8 - 12 hours"; p24: "every 8-12 hours".
20. **A magnet plus another metal object** is high risk (p6) and an immediate admission (p16), but no algorithm names it: Algorithm 4 is "multiple magnet", Algorithm 5 "single magnet".
21. **A blank cell.** In the p24 table the cell for symptomatic multiple magnets in the stomach & duodenum is empty (its borders are drawn; checked in the vector data). Algorithm 4 gives urgent endoscopic removal for every multiple-magnet case in the stomach & duodenum.
22. **Single magnet.** Algorithm 5 discharges an asymptomatic single magnet in the stomach (X-ray in 2-4 weeks) or beyond the duodenum (no X-ray). RCEM (p8, p28) wants a lateral view to confirm a single magnet, a follow-up AXR after 6 - 12 hours, and discharge only for single, accidental ingestion, no co-morbidities, tolerating oral intake, presenting within 24 hours of ingestion, with a caregiver able to observe closely. None of these is in Algorithm 5.

**Sharp objects**

23. **Admit or not.** 4.1 (p16) lists "Sharp objects" for immediate admission. Algorithm 3 lets the repeat AXR be "in-patient or outpatient depending on ease of access to hospital", and p29 says asymptomatic sharp objects beyond the duodenum "may be considered for discharge with follow up if there is easy access to the appropriate level of care". Recommendation 4 does not list sharp objects. "Ease of access" is not defined.
24. **Interval.** 3 to 5 days (Algorithm 3, Recommendation 3, p24, p33) against daily AXR for up to 3 days (p19) and daily AXR with surgical removal if no progression in 3 days (NASPGHAN, p11). The other guidelines in Appendix 4 (p54) remove a sharp object in the stomach urgently or emergently; the CPG lets an asymptomatic one pass ("may be allowed", Recommendation 3).

**Coins, blunt objects and cylindrical batteries**

25. **Follow-up interval, six versions.** Algorithm 5 and p24: X-ray in 2-4 weeks. DG (p33): at least every 2 weeks, intervention beyond 4 weeks. NASPGHAN (p31): coins every 1 - 2 weeks, elective removal beyond 2 - 4 weeks. Radiographic protocol (p32): weekly; coins in the stomach 3 - 4 weeks; blunt objects distal to the duodenum >1 week, surgery. SIGENP (p29): removal after 4 weeks. General (p31): follow-up within 1 - 3 weeks from the day of ingestion.
26. **Cylindrical battery** is in Algorithm 5's title but not in its start oval ("Confirmed coin/single magnet/blunt foreign body ingestion"), and has no row in the p24 table. Its own intervals: 7 to 14 days post-ingestion (ESPGHAN, p8) and 10 - 14 days with stool checks (p32), not 2-4 weeks. 5.2 (p19) adds urgent endoscopy for prior abdominal surgery, a damaged or leaking battery, or symptoms.
27. **Admission for observation (p16)** includes "foreign body beyond oesophagus but not yet passed the stomach, especially if large or irregularly shaped", while Algorithms 2 and 5 send home some children whose object is in the stomach.

**Superabsorbent polymer**

28. **Admit, observe or discharge.** Algorithm 6: asymptomatic, "Admit for observation". p24: "Observe or Discharge with Advice after Paediatric Surgical Consult". p17: confirmed SAP ingestion is admitted and considered for intervention. NASPGHAN (p23): emergent endoscopic removal. Studies (p20): generally no endoscopic removal in asymptomatic or mildly symptomatic children. Algorithm 6 gives no length of observation; it starts from "suspected" (the others from "confirmed"), and its timing legend is printed although no box uses it.

**Follow-up and wording**

29. **Stools.** DG (p33): "Stool monitoring is not required to confirm passage". ESPGHAN (p9, p32): no follow-up AXR if parents saw the battery pass. Cylindrical battery (p32): checking the stool, with a radiograph in 10 - 14 days.
30. **Recommendation 7** (p34): follow-up endoscopic assessment in symptomatic children with *button battery* ingestion; the key recommendations (p ii) print *foreign body* ingestion. Spelling also differs: "esophageal" (p ii), "oesophageal" (p34); "malaena" (p3, p xi), "melaena" (p ii, p31); "Capillary Refil Time" (p47).
31. **Fish bone.** Food bolus is excluded (p iii), but section 3.1's high-risk list includes "sharp objects in the oesophagus e.g. fish bone" (p6), and CXR sensitivity for fish and chicken bones is 33% (p7). The draft keeps fish bones under sharp objects, as printed.

---

## (c) The department's foreign body step against this CPG

Department entry: `P['children']` ("Children in the ED", MO Drive Paeds folder), node `fb` and its branches; source "Foreign body ingestion algorithm, PED HTA, 8 Sep 2020". The department entry stays as written; nothing below is resolved.

Context, a fact rather than a verdict: the CPG's chairperson (Consultant Paediatric Surgeon), a Paediatric Emergency Physician on the development group and the review committee's chairperson are all at Hospital Tunku Azizah, Kuala Lumpur (p vii–ix). If "HTA" in the department's source is that hospital (and if it is the Women and Children Hospital that the department's triage rule names, which these documents do not say), the department's algorithm (2020) predates a national CPG (2025) led from the same hospital. I could not confirm what "HTA" stands for from the documents I had.

| Item | Department says | CPG says (page) |
|---|---|---|
| Suspected button battery | "A button battery needs an X-ray at once" (hint) | A red flag: triage to resuscitation/critical care area, immediate referral, "Immediate imaging if available" (Algorithm 1, p xi); critical triage category (p4); "all suspected or confirmed button battery ingestion" is an indication for referral (p16) |
| Red flags and where to triage | Not in the `fb` step; the `pat` step sends a child to the ETD or PEDWCH by the PAT form | Seven red flag features → resuscitation/critical care area; otherwise non-critical area (Algorithm 1, p xi). Appendix 3: drooling and difficulty in swallowing are MTS Level 2; children <8 years generally not Level 5; infants <1 year Level 4 or higher (p46–47). No rule on which hospital's ED |
| X-ray series | "neck, chest and abdomen" | Initial X-ray: Neck AP and lateral, chest AP, abdomen AP (Algorithm 1, p xi); button battery: two views (AP and lateral) including the entire neck, chest and abdomen (p9); by object, the DG table (p13) |
| High-risk objects | "button battery; long over 6 cm or wide over 2.5 cm; magnet; sharp object; super-absorbent gel ball" | Section 3.1 (p6): button battery lodged in oesophagus; magnet + metal object or >1 magnet; sharp objects in the oesophagus e.g. fish bone, pins or needles; lead-based objects that fail to transit through the stomach; large objects (>60 mm long and/or >20 mm wide); expandable foreign bodies e.g. superabsorbent polymers; multi-component objects; objects impacted in the oropharynx (urgent ENT evaluation). Admission criteria: diameter > 2 - 2.5 cm, length > 5 - 6 cm (p16) |
| Width threshold | over 2.5 cm | >20 mm wide (p6); > 2 - 2.5 cm (p16); ≤25 mm for outpatient care (SIGENP, p29) |
| Single magnet | High risk ("magnet") → urgent Paediatric Surgery referral | Not on the high-risk list (only magnet + metal object or >1 magnet, p6). Algorithm 5: oesophagus, emergent (symptomatic) or urgent removal; stomach, asymptomatic, discharge with X-ray in 2-4 weeks; beyond the duodenum, asymptomatic, discharge (p xv). Recommendation 4: a single magnet beyond the oesophagus may be considered for discharge (p29). RCEM: lateral view, AXR after 6 - 12 hours, discharge criteria (p8, p28) |
| High-risk child | "a child with a GI abnormality or previous oesophageal surgery" | Pre-existing GI tract abnormalities (e.g. strictures) or congenital malformations (repaired or unrepaired); eosinophilic oesophagitis; neuromuscular disease (p6); previous GI surgery or anatomical abnormalities → admission for observation (p16) |
| Button battery in the oesophagus | "Urgent: refer Paediatric Surgery"; "needs urgent removal" | Emergent endoscopic removal: <2 hours from presentation, regardless of NPO (Algorithm 2, p xii; Recommendation 3, p25; p4). The CPG's "urgent" means ≤24 hours. Honey while waiting, if the indications apply, without delaying transfer (p18). Audit standard: removal within 2 hours of arrival at the referral centre, target 60% (p38) |
| Button battery, stomach or beyond, with symptoms | Urgent Paediatric Surgery referral | Stomach & duodenum: emergent endoscopic removal (Algorithm 2, p24). Beyond the duodenum: surgical/endoscopic removal (Algorithm 2; Recommendation 3, p25) |
| Button battery, stomach or beyond, with a magnet | Urgent Paediatric Surgery referral | No branch in Algorithm 2. Outpatient observation needs "No co-ingestion with magnet" (BBTF, p28); a magnet plus another metallic object is an immediate admission (p16) |
| Button battery, stomach or beyond, no symptoms | Home with advice: normal diet, check the stools for 10–14 days, come back if it has not passed by 2 weeks; Paediatric Surgery clinic (Monday) | Stomach & duodenum: **age <5 years or battery ≥20 mm → urgent endoscopic removal within 24 hours**; aged ≥5 years with <20 mm → discharge with follow-up X-ray at 10 - 14 days, endoscopic removal if still in the stomach (Recommendations 3 and 6, p25, p33; Algorithm 2). Beyond the duodenum: allow spontaneous passage, discharge with advice (Algorithm 2), though Recommendation 4 names only ≥5 years with <20 mm (p29). The department has no age or size gate; the CPG names no clinic or day |
| Another high-risk object | "Refer Paediatric Surgery urgently" | Urgent referral to Paediatric Surgery/General Surgery/ENT/ Gastroenterology (Algorithm 1), then by object: multiple magnets (Algorithm 4: emergent, urgent, or in-patient observation with X-ray within 8-12 hours); sharp (Algorithm 3: oesophagus emergent; stomach symptomatic urgent; asymptomatic may pass with AXR in 3 to 5 days); superabsorbent polymer (Algorithm 6: paediatric surgical consult; symptomatic, transfer and imaging; asymptomatic, admit for observation) |
| Low-risk object in the oesophagus | "Refer for early removal"; refer Paediatric Surgery | Coin/blunt/single magnet: symptomatic, emergent (<2 hours); asymptomatic, urgent (≤24 hours) endoscopic removal (Algorithm 5, p xv; p24) |
| Low-risk object, stomach or beyond | Home with advice: normal diet; check the stools for 10–14 days; come back if it has not passed by 2 weeks | Stomach & duodenum, asymptomatic: allow spontaneous passage, discharge home with advice, follow up X-ray in 2-4 weeks, endoscopic removal if no progress. Symptomatic: urgent endoscopic removal. Beyond the duodenum: asymptomatic, discharge with advice; symptomatic, surgical/endoscopic removal (Algorithm 5, p xv). Discharge criteria (Recommendation 4, p29) |
| Stool checks | Check the stools for 10–14 days | "Stool monitoring is not required to confirm passage" (DG, p33); ESPGHAN skips the AXR if parents saw a battery pass (p32) |
| Follow-up | "come back if it has not passed by 2 weeks"; Paediatric Surgery clinic (Monday) for batteries | Follow-up X-ray by object: battery 10 - 14 days (≥5 years, <20 mm); blunt and coins 2-4 weeks, or at least every 2 weeks, intervention beyond 4 weeks; sharp 3 to 5 days; multiple magnets 8 - 12 hours (p xii–xv, p33). Outpatient follow-up within 1 - 3 weeks from the day of ingestion (p31). No clinic named |
| Return advice | Only "come back if it has not passed by 2 weeks" | Seek urgent medical attention for respiratory distress; abdominal pain or distension; persistent vomiting; fever; inability to tolerate oral intake; gastrointestinal bleeding (Recommendation 5, p31); magnet advice (p31); prevention (Recommendation 8, p36) |
| Diet | "Normal diet" | Not stated; "able to eat and drink" is a discharge criterion (Recommendation 4, p29) |
| Discharge criteria | None stated | Well appearing; pain-free; not in respiratory distress; able to eat and drink; reliable history and a low-risk object (Recommendation 4, p29) |
| Radiolucent object | Not covered | Not likely radio-opaque → urgent referral (Algorithm 1); USG abdomen, upper GI contrast study/CT/MRI for sharp radiolucent objects (Recommendation 2, p13) |
| Honey | Not covered | ESPGHAN dose and indications (p18) |
| Suspected abuse | `see` link to OSCC | Referral to SCAN or OSCC is required (p16) |

---

## (d) Calculator candidates

The Calculators view reads its numbers from the pathway data, and `CALC_FACTS` must find each source phrase in `P['fb-children-cpg']`. The 26 phrases are in the calculator facts (all checked present with `JSON.stringify(P[id]).includes(s)`). A new route such as `#calc-fbbb` must also be added to `okHref` in `check-data.js`, or a link to it fails the content check; the draft links to no calculator.

### 1. Button battery decision (recommended)

| Input | Values |
|---|---|
| Where on the X-ray | Oesophagus; stomach or duodenum; beyond the duodenum; not seen or not yet imaged |
| Symptomatic | Yes / no |
| Age | <5 years / ≥5 years (or age in years) |
| Battery diameter | mm, or unknown |

| Output | Source text (page) |
|---|---|
| Not imaged, or suspected: red flag, triage to resuscitation/critical care area, immediate imaging | "Suspected button battery ingestion" in the red flag box; "Immediate imaging if available" (Algorithm 1, p xi) |
| Oesophagus: emergent endoscopic removal | "Emergent endoscopic removal" (Algorithm 2, p xii); "oesophagus, regardless of symptoms" (Recommendation 3, p25); "Emergent (<2 hours from presentation, regardless of Nil Per Oral [NPO])" (p4, p xii) |
| Stomach or duodenum, symptomatic: emergent endoscopic removal | Algorithm 2 arrow to "Emergent endoscopic removal" (p xii); p24 table |
| Stomach or duodenum, asymptomatic, <5 years or ≥20 mm: urgent endoscopic removal within 24 hours | "Urgent endoscopic removal within 24 hours should be done for all asymptomatic children with button battery in the stomach if: child aged <5 years, OR button battery ≥20 mm in diameter" (p25); "Age <5 years old and/or BB ≥20mm" (p xii); "Urgent (≤24 hours from presentation, following usual NPO guidelines)" (p4) |
| Stomach or duodenum, asymptomatic, ≥5 years and <20 mm: discharge, X-ray at 10 - 14 days, removal if still in the stomach | "In asymptomatic children aged ≥5 years with <20 mm button battery in the stomach, repeat abdominal X-ray at 10 - 14 days. If the button battery is still in the stomach, endoscopic removal should be done" (p i; p25 prints "<20mm"); Recommendation 6 (p33) |
| Beyond the duodenum, symptomatic: surgical / endoscopic removal | Algorithm 2 (p xii); "symptomatic patients with foreign body lodged beyond the duodenum" (Recommendation 3, p25) |
| Beyond the duodenum, asymptomatic: allow spontaneous passage, discharge with advice | Algorithm 2 (p xii); show beside it "children ≥5 years of age with <20 mm button battery ingestion beyond the oesophagus" (Recommendation 4, p29) |

Where it must decline or show a note instead of choosing:

- **Diameter unknown, child ≥5 years, battery in the stomach or duodenum:** not in the source ("The CPG gives no rule for a battery of unknown size"). With age <5 years the OR rule already gives urgent removal, so no decline is needed.
- **Boundaries:** none open. Age exactly 5 years is "≥5"; exactly 20 mm is "≥20 mm" (Recommendation 3). Show the NASPGHAN table's "≥5 yrs old and BB >20 mm, repeat X-ray in 48 hours" (p10) as a note, not a route.
- **A magnet with the battery:** decline the outpatient route; show "No co-ingestion with magnet" (BBTF, p28) and "a magnet plus another metallic object" (immediate admission, p16).
- **More than one battery:** not in the source (only a predictor of severe outcomes, p22).
- **Lithium or not:** no different route in the CPG; show the p21 study note only.
- **The 12-hour sentence** (p22, "within 12 hours can be considered regardless of symptoms or age group"): show as a note beside every gastric result.
- **Stomach versus duodenum:** follow Algorithm 2's "Stomach & Duodenum" and show Recommendation 3's "in the stomach".
- **Beyond the duodenum, asymptomatic, <5 years or ≥20 mm:** show Algorithm 2's discharge and Recommendation 4's narrower list together; do not choose.
- **Day 0 for 10 - 14 days:** not in the source; no date output.

### 2. Honey while waiting (second; only after Krishna decides how to read the indications)

Inputs: age in months; hours since ingestion; able to swallow; battery type (lithium, unknown, hearing aid, other known type).
Output: the four printed indications, each met or not, and the dose. Source (p18): "honey should be administered in 10 mL doses (2 teaspoons) every 10 minutes with a maximum of six doses"; indications "a lithium button battery may have been ingested (if unknown type, assume it is a lithium button battery unless it is a hearing aid battery); child is ≥12 months of age; battery has been swallowed within 12 hours; child is able to swallow"; "the administration of honey should not delay the referral or transfer of the patient".
Decline: whether all four must apply (not stated: a guide-owner decision is needed before the calculator suggests "give"); exactly 12 hours ("within 12 hours" is not defined at the boundary); unknown time of ingestion; any child not waiting for endoscopy. Age exactly 12 months is "≥12 months". No weight is involved.

### 3. Object size (not recommended)

Inputs: length and width or diameter in mm. Sources: ">60 mm long and/or >20 mm wide" (p6); "diameter > 2 - 2.5 cm, length > 5 - 6 cm in children" (p16); "≤25 mm in diameter or 60 mm in length" (SIGENP, p29); ">19.5 mm ... >22.5 mm" (p31). It would have to decline for widths between 20 and 25 mm and lengths between 50 and 60 mm, because p16 prints ranges; a calculator would add little to the high-risk checklist.

### 4. Not worth building

- A follow-up date tool: the CPG never says what day 0 is for "10 - 14 days", and gives several intervals per object (points 13, 19, 24, 25).
- Appendix 3's age rule (Level 4 or higher below 1 year; not Level 5 below 8 years): one line, already in the Triage tab.
- The RCEM magnet discharge criteria and Recommendation 4: checklists, already nodes (`smag`, `dc`).

---

## (e) Every number in the draft, and how it was checked

"Text" = found in PyMuPDF's text layer of that page (scripted search over all 86 pages, whitespace and bullets normalised; then read in context). "Image" = the page has no text layer there; read from a rendered image at the dpi shown. 60 numbers or thresholds; each row is one distinct figure (row 58 groups the cells of the p24 table).

| # | Number as in the draft | Where in the draft | Page | Check |
|---|---|---|---|---|
| 1 | 2025 (issue) | title, src, lead, menu hint, refs | p vi | Text ("issued in 2025") |
| 2 | ≤18 years old | header, menu hint | p iii | Text |
| 3 | e-ISBN 978-629-7842-23-3 | refs | PDF 2 | Text ("e ISBN") |
| 4 | 0-6 Tahun (Appendix 6 heading) | Advice tab | p62 | Text (heading) and image of the page, 300 dpi |
| 5 | >60 mm long and/or >20 mm wide | hr | p6 | Text |
| 6 | >1 magnet | hr, magmet | p6 | Text |
| 7 | 100% for coins | ro hint | p7 | Text |
| 8 | 56% for non-coin foreign bodies | ro hint | p7 | Text |
| 9 | 80% for non-coin metallic objects | ro hint | p7 | Text |
| 10 | 33% for fish and chicken bones | ro hint | p7 | Text |
| 11 | Neck AP and lateral, chest AP, abdomen AP | xr | p xi | Image, 220 dpi |
| 12 | Two-view (AP and lateral); entire neck, chest and abdomen | xr | p9 | Text |
| 13 | <2 hours from presentation, regardless of NPO | bb hint, bboes, emerg, Treatment table | p4; legends p xii–xvi | Text (p4; PDF 16 legend has a text layer); image for p xiii–xvi, 190–220 dpi |
| 14 | ≤24 hours from presentation, following usual NPO guidelines | bb hint, bburg, urgent, Treatment table | p4; legends | Text and image, as row 14 |
| 15 | >24 hours from presentation (elective) | Treatment table source | p4 | Text |
| 16 | Chest X-ray (AP & lateral); abdominal X-ray (AP supine) | bb hint, Imaging table | p13 | Text and image, 260 dpi |
| 17 | Within 2 hours of arrival to referral centre; target of 60% | bboes | p38 | Text |
| 18 | Child aged <5 years | bbage, bburg | p i, p25 | Text |
| 19 | Button battery ≥20 mm in diameter | bbage, bburg | p i, p25 | Text |
| 20 | Age <5 years old and/or BB ≥20mm | bbage hint | p xii | Image, 400 dpi |
| 21 | Urgent endoscopic removal within 24 hours | bburg | p i, p25 | Text |
| 22 | Within 12 hours ... regardless of symptoms or age group | bburg | p22 | Text |
| 23 | ≥5 yrs old and BB >20 mm, repeat X-ray in 48 hours (NASPGHAN) | bburg gap | p10 | Image, 260 dpi |
| 24 | Aged ≥5 years with <20 mm; repeat abdominal X-ray at 10 - 14 days | bbfu, bbage option | p i (p25 prints "<20mm") | Text |
| 25 | Discharge with follow-up X-ray at 10 - 14 days | bbfu title | p xii | Image, 400 dpi |
| 26 | 7 - 14 days (ESPGHAN) | bbfu gap, bbbda | p9, p32 | Text |
| 27 | Retrieval if in the stomach >48 hours | bbfu gap | p32 | Text |
| 28 | ≥5 years of age with <20 mm, beyond the oesophagus (Recommendation 4) | bbbda gap, dcok | p ii, p29 | Text |
| 29 | 10 mL doses (2 teaspoons) every 10 minutes, maximum of six doses | honey | p18 | Text |
| 30 | ≥12 months of age | honey | p18 | Text |
| 31 | Swallowed within 12 hours | honey | p18 | Text |
| 32 | Five and ten times stronger (rare earth magnets) | mag hint | p8 | Text |
| 33 | Follow-up AXR after 6 - 12 hours | smag, mmobs gap | p8 | Text |
| 34 | Failure to progress after 6 - 12 hours | smag | p8 | Text |
| 35 | Presents within 24 hours of ingestion (RCEM) | smag | p28 | Text |
| 36 | In-patient observation, repeat X-ray within 8-12 hours | mmobs title | p xiv | Image, 400 dpi |
| 37 | Repeat X-Ray every 8 - 12 hours until spontaneous passage | mmobs | p xiv | Image, 190 dpi |
| 38 | Repeat imaging within 8 - 12 hours after admission | mmobs, admob | p19 | Text |
| 39 | Serial X-ray (4 - 6 hours) (NASPGHAN) | mmobs gap | p11 | Image, 260 dpi |
| 40 | PPV of radiographs 100% for metallic objects | sh hint | p11 | Image, 260 dpi |
| 41 | Repeat AXR in 3 to 5 days | shsta, shbda | p xiii | Image, 400 dpi |
| 42 | Repeat abdominal X-ray after 3 - 5 days (Recommendation 3) | shbda | p i, p25 | Text |
| 43 | Daily abdominal X-ray for up to 3 days | shsta, admob | p19 | Text |
| 44 | Daily AXR; surgical removal if no progression in 3 days (NASPGHAN) | shbda gap | p11 | Image, 260 dpi |
| 45 | Diameter > 2 - 2.5 cm, length > 5 - 6 cm | bl info, adm | p16 | Text |
| 46 | Follow up X-ray in 2-4 weeks | blsta | p xv | Image, 400 dpi |
| 47 | Serial X-rays at least every 2 weeks; beyond 4 weeks | blsta, Follow-up tab | p33 | Text |
| 48 | 7 to 14 days and 10 - 14 days (cylindrical battery) | blsta gap | p8, p32 | Text |
| 49 | Distal to the duodenum for >1 week | blbda | p32 | Text |
| 50 | Within 1 - 3 weeks from the day of ingestion | blbda gap, dcok gap, Follow-up tab | p31 | Text |
| 51 | Lack of radiographic progression after 24 - 48 hours | admo | p16 | Text |
| 52 | 2024 (RCH consensus) | dc hint | p28 | Text |
| 53 | Below 8 years not Level 5; below 1 year Level 4 or higher | Triage tab | p47 | Text |
| 54 | Levels 1 to 3; CRT >5 secs; CRT >2 secs | Triage tab table | p46–47 | Image, 300 dpi |
| 55 | 2022 (Malaysian Triage Scale) | Triage tab, refs | p46 | Text |
| 56 | Sensitivity of 95.2% and specificity of 97.8% | Imaging tab | p7 | Text |
| 57 | 6 hours later (Figure 5) | Imaging tab | p15 | Text (caption) |
| 58 | p24 table: 2 - 4 weeks; <5 years and/or ≥20 mm; ≥5 years and <20 mm; 10-14 days; 8-12 hours; 8 - 12 hourly; 3 to 5 days | Treatment table tab | p24 | Image, 300 dpi (two halves) and 500 dpi (the blank cell); cell borders checked in the vector data |
| 59 | 80% expelled by day 14; >19.5 mm; >22.5 mm | Follow-up tab | p31 | Text |
| 60 | ≥5 years old, <20 mm, repeated X-rays at 10 to 14 days (Recommendation 6) | Follow-up tab | p33 | Text |

Also checked: every quoted fragment of 25 characters or more in the draft's items, checklists, info and table cells was searched in the text layer (284 fragments). Those not found were either read from page images (algorithms, p24, p46–47, p62), our own labels (for example "Beyond duodenum, not symptomatic"), or quotes shortened at a list boundary; six quotes found shortened were restored to the printed wording.

---

## What could not be verified

- **"HTA"** in the department's source (PED HTA, 8 Sep 2020) is assumed by context to be Hospital Tunku Azizah; not confirmed.
- **Corrections.** The CPG says errors are corrected in its web version (p vi). The copy read is the Academy of Medicine file (PDF created 24 Apr 2026); it was not compared with the MaHTAS website version.
- **Appendices 4 and 5** were read at 120–150 dpi to describe them and find contradictions, not transcribed cell by cell; nothing from them is in the draft.
- **Honey:** whether all four indications must apply is not stated in the CPG.
- **Ten points need the guide owner or the department**, not the CPG: which team applies the object algorithms after Algorithm 1's urgent referral; where an asymptomatic child with a suspected button battery is seen in HKL (resuscitation area under the CPG, PEDWCH or ETD under the department's PAT rule); what follows a negative X-ray for a suspected battery; the gastric battery time (24 hours, or 12); a magnet plus another metal object; sharp objects as outpatients; the follow-up clinic; stool checks; SAP admission length; and the honey reading.
