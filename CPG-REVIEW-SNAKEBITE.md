# Review: Ministry of Health Guideline: Management of Snakebite (MOH/P/PAK/341.17(GU)), summarised

**Drafted 10 Nov 2026** for the entry *Snakebite: MOH guideline 2017* (`#snakebite-moh`, `src/parts/data9.js`). Not built, not tested, not published: the integrator adds `data9.js` to `build.js` and `check-data.js`, the two calculators (`#calc-snake20`, `#calc-snakeav`) and the figures. The guideline prints no copyright or reproduction terms, so at Krishna's decision of 9 Nov 2026 for such guidelines the entry and this review are in the guide's own words, with printed page numbers, and quote nothing at length. Numbers are exactly as printed.

- **Source:** Ministry of Health Malaysia, *Guideline: Management of Snakebite*, MOH/P/PAK/341.17(GU) (cover, PDF 1), ISBN 978-967-0769-79-0 (back cover, PDF 113, picture only; checked on the page image). Putrajaya. The running footer reads "Guideline : Management of Snake Bite, Ministry of Health, Malaysia". File read: `sources/snakebite/MalaysianSnakebiteManagementGuideline.pdf`, 113 PDF pages, SHA-256 `0AE0CDEE…7DE2` (full hash in `sources/snakebite/INVENTORY.md`), from Krishna's Drive folder "Toxin". Four forewords: the Director General of Health (p iii), the Deputy Director General (p iv), the Director of Medical Development (p v) and the Head of National Emergency Medicine and Trauma Services (p vi).
- **Second source, facts only:** *Land Snakes of Medical Significance in Malaysia*, 2nd edition, July 2017, by Ahmad Khaldun Ismail, Teo Eng Wah, Indraneil Das, Taksa Vasaruchapong and Scott A. Weinstein, with the support of the Malaysian Society on Toxinology (MST), ISBN 978-967-0250-26-7, 52 pages (here "the MST book"). It prints **ALL RIGHTS RESERVED** and "All images are copyrighted to the contributors" (p2). Used only for facts in the guide's own words, with its page: the first-aid do's and don'ts (p46), the caution that a dead snake can still envenom (p9), and its species names where they differ from the guideline (p11 to 45). None of its photos, descriptions or layout; its antivenom doses (p47) are **not** used in the entry and are listed in (b) where they differ. Its Drive copy is not linked.
- **Copyright:** the guideline prints none (INVENTORY: cover, title page, contents, forewords, committee pages, back cover and a search of the whole text layer). Its photographs carry "copyrighted to" credits (for example p14), so no photograph is used. The entry's `refs` say "Summarised, not reproduced: the guideline states no reuse terms", and `own:true` gives the own-words footer.
- **Year and age:** no edition, year or review date is printed anywhere. The PDF was made on 8 Aug 2017 (metadata), the MyBIS record (https://www.mybis.gov.my/pb/1548) lists it as published by the Ministry of Health, Putrajaya, 2017, with the same ISBN, and its newest reference is from 2016 (p96 to 98). The entry says "2017" and explains where the year comes from. It is about 9 years old; no newer edition was found.
- **The Ministry's link** (`doc` in the entry): https://moh.gov.my/moh/resources/Penerbitan/Garis%20Panduan/Garis%20Panduan%20Umum(KKM)/Guideline%20Management%20Of%20Snakebite.pdf. It redirects (301) to the same path on `www.moh.gov.my`, which answers **HTTP 403 to any scripted request** (a header request and the web fetch tool both refused). I did not try to get around that. A web search indexes the PDF under the title "Guideline Management Of Snakebite", and its indexed text shows the same reference MOH/P/PAK/341.17(GU), the Director General's foreword and the same contents; the MyBIS record matches the ISBN. So title, reference and ISBN match; **the page count (113) and the file size could not be checked**. I did not open it in the browser pane either: a 73 MB PDF there may download rather than display, and a download needs Krishna's go-ahead. Krishna can open the link once in a browser to confirm 113 pages.
- **Page offset:** printed page = PDF page − 9 for PDF 10 to 112; PDF 3 to 9 are i to vii. Every page cited here and in the entry is the printed page, except "PDF n" where said.
- **Method:** the text layer (`MalaysianSnakebiteManagementGuideline.pages.txt`) read in full, with the substitutions listed in the INVENTORY (`±` is an en dash, garbled quotes). Read from page images at 110 dpi: the cover and back cover (PDF 1, 113), Tables 2, 3, 5 and 7 (p9, p10, p12, p22), Table 8 (p28), Table 9 (p30), the ptosis photos and their captions (p33), Table 10 (p34), the bite photos and captions (p36, p37), the 20WBCT (p39), Table 11 (p40), Table 12 (p41 to 42), Table 13 (p43), 4.8 (p44), the RPP photo and box (p49, p50), 6.1 to 6.3 (p53), the anticholinesterase doses (p56 to 57), 6.6 and 6.7 (p58), 7.2 (p65 to 66), Table 14 (p67), 7.3.1 (p69), Tables 15 and 16 (p70 to 74), 7.5 and 7.6 (p75), Table 17 (p76 to 77), Appendices 1 and 2 (p90, p91) and both flowcharts (p93, p94); and the MST book's p46 and p47. Then two scripts (in the session scratchpad): **(1)** every number in the entry (249 tokens) was looked for in the text of the page each string cites: 223 found; the other 26 are explained in (e) (the year 2017, which comes from the metadata; "20" in the test's name; table numbers read as numbers; three runner options that take their Table 17 citation from the question's hint; one "one metre" printed as a word). **(2)** Runs of six or more words shared with each source: **none** with the guideline after rewording; with the MST book only its title and its authors' names. Five-word runs that remain are product names (for example "QSMI Neuro Polyvalent Snake Antivenom"), species names and dose phrases.
- **Scope:** the guideline states no formal scope. It is written for "all levels of health care workers" (p vi), covers adults and children, hospitals (Appendix 3) and health clinics (Appendix 4), land and sea snakes, and venom in the eye.
- **Leaflet:** none in either source. The `advice` lines are written from 9.1 to 9.2 (p83 to 87), Table 17 (p77), p7 and the MST book's p46.
- **Size:** `JSON.stringify(P['snakebite-moh']).length` = 48,143 characters. That is about twice the other own-words entries (t2dm-cpg 21,759; vte-cpg 21,370) and about the size of the largest quoted ones (acs-cpg 46,339; dengue-cpg 45,101). A first draft measured 55,203; the cut shortened the lines every antivenom outcome repeats (the choice, preparation and repeat rules), merged the observation lines into one short note, and folded a separate Reactions tab into a note in the Antivenom tab. What else could go, if the size matters more than the reference: the species table (2,000 characters), the Children tab (1,300; every line repeats one elsewhere) and the compartment syndrome note (850).
- **Open item 6 in CLAUDE.md** ("A readable copy of the Malaysian snakebite guideline"; also `CONFIRM` in `engine.js` and the Drive run-through's "SNAKES BITE" row) is answered by Krishna's copy: it has a text layer on every page, partly garbled, with the tables and flowcharts readable from page images. The MO Drive's scanned copy and its "snake atlas" were not opened in this round.

---

## (a) The guideline chapter by chapter

| Part (pages) | What it holds | What matters to the Green Zone | In the entry? |
|---|---|---|---|
| Front matter (p i to vii) | Contents, four forewords, glossary | RECS gives 24-hour consultation nationwide (p iii, p vi) | `red`, `refs` |
| 1 Introduction (p2 to 4) | Burden; Malaysian studies with the species unknown in more than 50% of cases (p2); 15798 cases and 16 deaths in 2010 to 2014 (p2; Table 1, p4); Indian antivenoms used until 2012, then the appropriate ones promoted (p3); RECS phone consultations 24/7 (p3); a call for compulsory notification (p4) | Most bites are never identified, so the syndrome route matters | `syn` hint |
| 2 Snakes of medical importance (p6 to 23) | Families (2.1); identification: no simple rule, mimics, local names mislead, do not capture, killing may be illegal, photos from above, below and of the head, preserve in 10% formaldehyde or 70% alcohol, the MST image gallery, expert verification (2.2, p7 to 8); Tables 2 to 5, venomous snakes by region with local names and effects (p9 to 12); Table 6, common non-venomous snakes (p13); the image gallery (p14 to 21); Table 7, harmless look-alikes (p22 to 23) | Identifying the snake, its local name and its region | `snake` hint; Identify tab (species table, look-alikes); First aid tab ("The snake") |
| 3 Snake venom (p25 to 28) | Venom biochemistry; elapids paralyse, pit vipers cause coagulopathy and bleeding, sea snakes myotoxicity and kidney injury (p26); krait and sea snake bites generally painless (p26 to 27); severe necrosis from cobras and pit vipers generally rules out a pressure bandage (p27); Table 8, constituents and effects (p28) | Painless bites; no pressure bandage | `sx` hint; First aid tab; Identify tab |
| 4.1 History, Table 9 (p30 to 31) | When, where, how, which part, what was done (tourniquet, cutting, suction, traditional medicine), treatment at a clinic, anaphylaxis risk | The history and the first aid already given | `hx` |
| 4.2 Clinical features (p31 to 33) | Observe an unknown species closely for at least 24 hours (p31); general, cardiovascular, bleeding (antepartum haemorrhage; coagulopathy may be delayed), neurological (descending paralysis, ptosis first), musculoskeletal and renal features; the ptosis and ophthalmoplegia tests (p32); photos (p33) | The 24 hours; the bedside tests | `obs`, `dcobs`, `sx`, Observation tab, figure `ptosis` |
| 4.3 Examination, Table 10 (p34) | Resuscitation, vital signs, bite site (no permanent marker; micropore tape; serial photos), lymph nodes, systemic signs | Serial checks from arrival | `yel`, RPP note |
| 4.4 Bite site (p35 to 37) | Local signs; a krait bite may show nothing before sudden paralysis (p35); bite marks; photos of python and Boiga bites, a blister, a Malayan pit viper timeline and dermonecrosis | The krait warning | `sx` hint, `yel` |
| 4.5 Investigations (p38 to 40) | Clotting profile 6-hourly for a suspected pit viper; FBC, renal, CK, urinalysis, LFT, ECG (Naja), ABG (no arterial puncture with a suspected coagulopathy); an expert-identified non-venomous bite with no signs may need no bloods (p38); the 20WBCT (p39); Table 11, tests for 48 hours by snake (p40) | The bloods, the 20WBCT, the schedule | `labs`, `nvdc`, 20WBCT tab, Observation tab |
| 4.6 Most likely snake (p41 to 42) | Geography; Table 12, signs by snake group | The syndrome route | `syn` hint, Identify tab |
| 4.7 Diagnosis, Table 13 (p43) | Unidentified injury, unidentified animal bite, unidentified snakebite, identified snakebite, venom ophthalmia; add the envenoming | How to write the diagnosis | `snake` hint, Identify tab |
| 4.8 Disposition (p44) | Observe and admit: envenoming, a venomous snake, an unidentified snakebite or animal bite; discharge after a non-venomous bite only on three conditions; Boiga and Rhabdophis subminiatus as exceptions | Core: who stays and who goes | `obs`, `nv`, `nvdc` |
| 5 Monitoring (p46 to 51) | Serial assessment for 48 hours, hourly if severe (p46); neurotoxic, haematotoxic and myotoxic signs to watch (5.1 to 5.3); local envenoming: RPP, pain score, nodes, photos (5.4, p47); ultrasound "cobblestone sign" (p48); measuring the RPP (p49 to 50); no limb girth (p50); serial and baseline tests (5.5 to 5.6, p51) | What to watch and how to measure swelling | `obs`, Observation tab (RPP, paralysis), figure `rpp` |
| 6.1 to 6.3 Triage, rapid assessment, resuscitation (p53 to 54) | Possible envenoming to the Red Zone, asymptomatic to the Yellow Zone; ABCDE; airway, oxygen, ventilation; causes of shock; cannulas, monitor; observations every 5-15 minutes, temperature 4-hourly, urine hourly | Core for the Green Zone: the patient leaves | `sx`, `red`, `yel` |
| 6.4 General management (p54 to 55) | Immobilise, neutral position or heart level; no prophylactic steroid or antihistamine; no IM injections with a pit viper; tetanus; eye irrigation 5 to 10 litres; analgesia without NSAIDs in pit viper bites; blood products are no substitute for antivenom | Several do-nots | `hx`, `mpv`, `synh`, `keel`, `eye` |
| 6.5 Supportive treatment (p55 to 57) | Steroids and antihistamines only with a clear indication; paracetamol 4-6 hourly, no aspirin or NSAIDs with a coagulopathy risk, IV opioids titrated; anticholinesterases with doses (adapted from the WHO South-East Asia guideline of 2016); antibiotics for necrosis or extensive injury; tranexamic acid and vitamin K ineffective | Analgesia, neostigmine, antibiotics | `obs`, `coral`, Antivenom tab (neostigmine), `nvdc` |
| 6.6 to 6.8 (p58 to 59) | No contraindication to antivenom; the same dose at all ages; less dilution or none when volume matters; exotic species (expert help, pharmaceutical services); the red-necked keelback and the anti-yamakagashi antivenom from Japan | Special groups; the keelback | Children tab, `other`, `keel` |
| 6.9 Venom ophthalmia (p60) | Spitting cobra venom in the eye: irrigate, look for a bite, fluorescein, topical analgesia, cycloplegics, antibiotics; no topical steroid or antivenom; urgent ophthalmology | A Green Zone presentation | `eye` |
| 7.1 Introduction (p62 to 65) | Antivenom types; the Thai QSMI products, NPAV and HPAV and what they are raised against; monovalent for a confirmed species, polyvalent when uncertain (p64); poor cross-cover between cobra and king cobra, between the kraits, and between the Malayan pit viper and the green pit vipers (p64); CSL for sea snakes; nothing for coral snakes; nothing proven for Wagler's pit viper (p65); green pit viper antivenom and HPAV cover most Trimeresurus (p65); elapids up to 10 vials to start (p65) | Choosing the product | `which`, `syn` outcomes, product outcomes |
| 7.2 Indications (p65 to 67) | Give as soon as indicated; systemic (bleeding, coagulopathy on 20WBCT or lab, platelets below 100 × 10⁹/L, paralysis, cardiovascular, kidney, haemoglobin or myoglobin in urine, other lab evidence) and local (more than half the limb in 48 hours, digit bites, rapid spread, tender node) | Core | `env` |
| 7.3 Availability, Table 14 (p67 to 68) | Stocks differ by hospital: ask the pharmacist; RECS can help share stock; products and their neutralising capacity; the Indian polyvalent is not appropriate | Ask the pharmacist; never the Indian product | `which` hint, `other`, Antivenom tab |
| 7.3.1 Administration (p69) | A doctor trained in snakebite chooses; IV only; adrenaline prepared first; reconstitute, dilute, rate; monitor for an hour after | Core | Every product outcome; Antivenom tab; figure `avgive` |
| 7.4 Dosage, Tables 15 and 16 (p70 to 74) | Starting dose the same at all ages; first and second choice and starting dose by species, Peninsular and Borneo; notes | Core | Product outcomes; Antivenom tab table |
| 7.5 to 7.6 Response and repeat (p75) | What to expect and when; repeat at 6 hours for clotting, 1-2 hours for brisk bleeding or worse paralysis or circulation | Core | Product outcomes; 20WBCT tab; Antivenom tab |
| 7.7 Reactions, Table 17 (p76 to 77) | Early, pyrogenic and late reactions, their timing, signs and treatment, adult and child doses | Core | `rx`, `rxe`, `rxp`, `rxl`; Antivenom tab; Children tab; figure `react` |
| 8 The bitten part (p79 to 81) | Compartment syndrome rare; no fasciotomy before antivenom and clotting are right; measure tissue pressure; 40 mmHg; digits; multidisciplinary decision; debridement | Not a Green Zone decision, but often asked | Observation tab (compartment note) |
| 9 Follow-up and rehabilitation (p83 to 87) | Discharge after observation; return for antivenom-related illness; labs 5-7 days after a pit viper envenoming; wound care; plastic, orthopaedic, physiotherapy and occupational therapy; psychological effects and counselling | Discharge and follow-up | `dcobs`, `fu`, `advice` |
| Appendices 1 to 4 (p89 to 94) | Snakebite charts (bloods every 4-6 hours for 24 to 48 hours; no serial clotting for elapids; hourly checks for 12 hours); the hospital and health clinic flowcharts | Timings | Observation tab; `red` (specialist at any stage) |
| References, committee (p96 to 103) | | | No |

**Left out, and why.** Table 1 and the epidemiology (no bedside use); venom biochemistry, Table 8's constituents and the antivenom pharmacology (F(ab')2 half-life of 3-4 days, p64); the neutralising capacities in Table 14 (mouse data, p68); the image gallery, Table 7's pictures and every photo (photographers' copyright); the ultrasound "cobblestone sign" (p48: not a Green Zone tool); Table 13's example diagnoses (paraphrased instead); the chart layouts of Appendices 1 and 2 (forms; their timings are in); physical rehabilitation detail (9.2.1); the MST book's species pages, icons, habitats and IUCN status; the MST book's antivenom doses (see (b) 14 to 16 and 20).

---

## (b) Points inside the guideline

None is resolved in the entry. Those that change an ED decision are also in a node's `gap`.

**Where the patient goes, and for how long**

1. **No Green Zone.** 6.1 sends possible local or systemic envenoming to the critical (Red) zone and asymptomatic patients to the semi-critical (Yellow) zone (p53). No snakebite is placed in a green zone. The entry's first question moves the patient either way.
2. **Observation length.** At least 24 hours if the species is unknown (4.2, p31); serial assessment for the first 48 hours (chapter 5, p46); at least hourly for the first 12 hours (Appendix 2, p91); home "after a suitable observation period", undefined (9.1.1, p83). There is no time for a known venomous species without signs, and none before a discharge after a non-venomous bite (4.8.2, p44).
3. **How often to check.** Every 5-15 minutes in the acute stage (6.3.8, p54); hourly in severe envenoming (p46); at least hourly for the first 12 hours (p91).
4. **Unidentified injury.** Table 13 lists it as a diagnosis (p43), but 4.8.1's admission list does not (p44).
5. **The hospital flowchart** (Appendix 3, p93): its "No" sits by the arrow from Snake Identification to Close Serial Observation and its "Yes" under Administration of antivenom, so neither label is attached to the decision diamond; a two-way arrow joins the diamond and observation. Read literally, an unidentified snake goes to observation, and "Yes" leads from antivenom to intensive, medical or surgical care. The health clinic flowchart asks "Need for referral?" with no criteria (p94).

**Tests**

6. **The 20WBCT.** Its result alone should not decide antivenom; read it with the patient's condition and confirm with the laboratory profile (4.5.9 v, p39). Yet 7.2.1.1 lists a coagulopathy on the 20WBCT among the indications (p66), and 7.5.3 and 7.6.1 use it to judge response and repeat (p75). The test is described for when no laboratory profile is available (p39). It does not say what counts as clotted (a partial or friable clot), how often to repeat it ("as necessary"), the temperature range of "ambient", or what to do without a glass tube.
7. **Blood test intervals.** Table 11: FBC daily for elapids and sea snakes, 6-hourly for pit vipers and unidentified bites; CK 6-hourly, 4 to 6-hourly for sea snakes (p40). Appendix 1: results every 4-6 hours for the first 24 to 48 hours, and no serial clotting for elapids unless indicated (p90). 4.5.1: clotting 6-hourly for a suspected pit viper (p38). 5.5.1 lists FBC and CK as serial for all (p51).
8. **The platelet threshold** prints as "<100 x 109/litre" (the superscript is lost in the PDF itself) or 100 000/cu mm (p66). The entry writes 100 × 10⁹/L.
9. **Cross-references.** Table 10 twice sends the reader to "Chapter 7 - Monitoring" (p34); monitoring is chapter 5, and chapter 7 is antivenom. Numbering jumps (6.5.4.1.3 to 6.5.2.1.4, p57; 9.1.2.1 to 9.2.2.1.1, p83).
10. **The ptosis test** is described three ways: follow a finger moving up (4.2.4.1, p32); look down and then up (Table 12, p42); look up (Appendix 2, p91).

**Antivenom: which, and how much**

11. **Blank cells at the page breaks.** Table 15 leaves the antivenom and dose blank for the leaf-nose palm pit viper (T. wiroti), the Sumatran pit viper and the mountain pit viper (Ovophis convictus) at the foot of p71; the merged green pit viper cell starts on p72 with Hagen's. Table 16 does the same for the Sabah green pit viper (p73). Table 16 gives the Sumatran pit viper the green pit viper antivenin, 3 vials, in Borneo (p74), and the MST book lists the green pit viper antivenin and HPAV on the pages of all four (p32, p40, p41, p43). Also: the beautiful pit viper (T. venustus) is in Table 5 (p12) but has no row in Table 16; the white-lipped green pit viper is in Table 15 (p72) but not among the Peninsular species of Table 3 (p10).
12. **Second choice for the kraits.** Blank for both kraits in Table 15 (p71); the neuro polyvalent for the banded krait in Table 16 (p73); the neuro polyvalent is raised against both kraits (p64; Table 14, p67).
13. **Polyvalents without a dose.** Polyvalents are "usually indicated when the biting species is uncertain" (p64), but no dose is given for an unidentified bite. The neuro polyvalent has a dose only as the first choice for the red-headed krait (5 vials, p71, p73); the haemato polyvalent has none at all.
14. **Malayan pit viper: 4 vials or 3.** Table 15 prints 4 vials (p71). The guideline's own case photo is captioned as a patient who received 3 vials in all by 2.5 hours after the bite (p37). The MST book prints 30 ml / 3 vials (p47). The entry follows Table 15 and notes the photo.
15. **Cobra.** "Local - 5-10 vials, Systemic - 10 vials" (p70, p73) beside "up to 10 vials initial dose" for confirmed elapid envenoming (p65). Which local cases get 5 and which 10 is not said. The MST book prints 100 ml / 10 vials (p47).
16. **Repeat timing.** Tables 15 and 16: the next dose after 1-2 hours for elapids and sea snakes, at 6 hours for pit vipers, "according to the clinical symptoms" (p72, p74). 7.6: clotting still abnormal 6 hours after the infusion; brisk bleeding, repeat within 1-2 hours; worse paralysis or circulation, after 1-2 hours (p75). For a pit viper bite that is bleeding briskly, the table's 6 hours and 7.6.2's 1-2 hours differ.
17. **No ceiling.** No maximum dose, number of repeats or stopping rule.
18. **Children.** The dose is the same regardless of age (6.6.2, p58) and the same venom needs the same antivenom (p70), but "some children may require a greater volume of antivenom" in severe envenoming (p70): whether "volume" means more vials or more diluent is not said. The child dilution of 5-10 ml/kg is both the standard (p69) and the "reduced" dilution for volume concerns (p58).
19. **Who chooses.** The choice "must be selected by a physician trained and familiar with management of snakebite in Malaysia" (p69). Who that is in HKL out of hours is not said; the entry marks every product outcome "Refer" and asks the MO to confirm with the EP.
20. **Red-necked keelback.** "Anti-Yamakagashi antivenom", sourced from Japan, with no dose (p59, p72, p74). The MST book names the Japan Snake Institute's tiger keelback (Rhabdophis tigrinus) antivenom, one vial with one more if indicated and available, for severe envenoming (p47). Whether these are the same product is not stated in either. The keelback is filed under Natricidae (p6, p72), "Colubrid" (p74) and a "non-front-fanged colubroid" (p59).
21. **Sea snake antivenom.** Table 15 gives it for "Sea snakes (eg: Hydrophis schistosus, Laticauda colubrina)" (p71); Table 14 lists only the beaked sea snake as its venom (p68); the text adds Notechis scutatus (p64).
22. **Minor print points.** Table 14's header has one asterisk and its notes three kinds (p67 to 68). QSMI is spelt "Saovhaba" (p63). "Hemato" and "Haemato" both appear.

**Reactions (Table 17)**

23. **Adrenaline infusion.** Printed as "1 microgm/kg/min" (p76). The ebook's anaphylaxis pathway runs at 1 mcg/min, not per kg. The entry shows the print and sends the MO to the EP; this needs Krishna's decision.
24. **Hydrocortisone.** Adult 2-4 mg/kg with no maximum; child 2-4 mg/kg, maximum 200 mg (p76).
25. **Prednisolone.** "A 5-day course" given "for 5-7 days" (p77).
26. **One treatment cell for two reactions.** The adrenaline, antihistamines and hydrocortisone sit in the same cell as the pyrogenic reaction's cooling and fluids (p76): which apply to a pyrogenic reaction is not said.
27. **IM adrenaline interval.** Every 5-10 minutes (p76); the ebook's anaphylaxis table, every 5-15 minutes up to 2 doses.

**Treatment**

28. **No first aid.** There is no first-aid section; a pressure bandage is generally contraindicated with cobra and pit viper necrosis (p27); nothing on taking off a tourniquet. The MST book's do's and don'ts (p46) fill the first-aid tab.
29. **Unnamed drugs.** Paracetamol every 4-6 hours with no dose; IV opioids "in titrated doses" with no drug (p56); antibiotics with no drug (p57); tetanus "as indicated" by unnamed MOH guidance (p55).
30. **Anticholinesterase wording.** "(or distigmine, pyridostigmine, ambenomium etc. inappropriate doses)" (p56 to 57) presumably means "in appropriate doses"; "ideal for this test" refers to a test not named before.
31. **Eye irrigation.** Normal saline 5 to 10 litres (6.4.6, p55); saline, water or Ringer's lactate, or a bland fluid such as milk when there is no water or saline (6.9, p60). Consistent, worded differently.
32. **No arterial puncture** with a suspected coagulopathy (4.5.8, p38), with no alternative named.

**Names and identification**

33. **Local and common names differ between the two sources.** The guideline gives "Ular katang tebu" to the banded krait and no local name to the Malayan krait (p9, p11); the MST book gives "Ular Katam Tebu" to the Malayan krait and "Ular Katam Belang" to the banded krait (p11 to 12). A patient who says "ular katam tebu" may mean either. "Spotted coral" is Calliophis maculiceps in the guideline (p9) but C. gracilis in the MST book, where C. maculiceps is the "speckled coral snake" (p15, p17). C. intestinalis is the "banded coral" in the guideline and the "Malayan striped coral snake" in the MST book (p16). Naja sumatrana is the "equatorial spitting cobra" in the guideline and the "Sumatran spitting cobra" in the MST book (p19). Ovophis convictus is the "mountain pit viper" in the guideline (p10) and the "Malayan brown pit viper" in the MST book (p32). The guideline itself warns that local names mislead (p7).
34. **Effects by table.** Table 12 marks tissue necrosis "-/+" for pit vipers (p41), while Tables 3 and 5 list necrosis for the Malayan and Kinabalu brown pit vipers (p10, p12). Table 12 marks muscle pain for coral snakes (p42); Table 2 gives coral snakes only "potential paralysis" (p9), and Table 4 adds myolysis for the banded coral (p11).
35. **Undated.** No year, edition or review date; references to 2016.

---

## (c) The ebook and department rules against it

The ebook has no snakebite pathway (its 23 conditions do not include one), so rule 5 is not engaged. The ebook PDF was not available: the comparison is with the app's text in `data.js` and `data2.js`.

**Ebook: Anaphylaxis (`anaphylaxis`, p15–16), against Table 17 for antivenom reactions**

| Item | Ebook (app text) | Guideline, Table 17 (p76) |
|---|---|---|
| IM adrenaline | 500 mcg (0.5 mg), mid outer thigh, every 5–15 min up to 2 doses | Adult 0.5 mg; child 0.01 mg/kg; every 5-10 minutes |
| With a coagulopathy | Not covered | No IM: go straight to an IV infusion |
| IV adrenaline infusion | 1 mcg/min (1 mg in 500 ml NS at 0.5 ml/min) | **1 microgm/kg/min** |
| Chlorpheniramine | 10–20 mg IV over 1 min | Adult 10 mg IV; child 0.2 mg/kg |
| Ranitidine | 50 mg IV | Adult 50 mg IV; child 1 mg/kg |
| Hydrocortisone | 200 mg IV | 2-4 mg/kg IV; child at most 200 mg |
| Restarting the trigger | Not applicable | Restart the antivenom more slowly once settled (7.7) |

The entry links the ebook's anaphylaxis pathway from the early reaction outcome and does not link `#calc-anaph`, which computes the ebook's doses.

**Ebook: Pain (`pain`)**: its analgesia table gives NSAIDs (diclofenac PO/IM, mefenamic acid, celecoxib) and IM routes. The guideline: no aspirin or NSAIDs where a coagulopathy may develop and none in pit viper bites, no IM injections in pit viper bites (6.4.4, 6.4.7, p55; 6.5.2.2, p56). A Green Zone MO should not use the ebook's NSAID rows for a snakebite.

**Department: Green Zone rules (`gz-rules`) and the Yellow Zone flow (`yellow-zone`)**: the Green Zone takes MTS levels 4 and 5; the guideline places every snakebite in the Red or Yellow Zone (point 1). The entry links `#gz-rules--wait` and `#yellow-zone`.

**Department: Admission to MAU (`mau-admission`, flow chart of 18 Oct 2022)**: "snake bite" is on the list of diagnoses MAU will consider, with the MAU criteria (age 12 or older, stable vital signs, no intensive care bed, and so on). The guideline admits for observation every envenoming, venomous or unidentified bite (4.8.1, p44), and its flowchart sends treated patients to intensive, medical or surgical care (p93). Whether MAU takes observation-only bites, and patients after antivenom, is for the department. The entry links MAU from the observation outcome and adds a see-also from MAU to the entry.

**Department: EM Watch (`em-watch`, Aug 2023)** lists "bites and stings" among its conditions. The guideline asks for blood tests 5-7 days after discharge following a pit viper envenoming (p83); a teleconsultation cannot draw blood. Who arranges that test in HKL is open. EMACC's list (`emacc`) has no bites.

**Department: Animal bites and rabies (`animal-bites`, Oct 2022)**: an "unidentified animal bite", where the patient did not see the animal, is an admission indication in the guideline (4.8.1, p44) and may also need the rabies risk assessment. The entry links the rabies protocol, and adds a see-also back.

**Department: Children (`children--pat`)**: a critical child stays in the ETD; the guideline's Red or Yellow Zone triage has no paediatric rule of its own. Where an asymptomatic child with a snakebite goes (ETD or PEDWCH) is open.

**Open questions for Krishna** (also in the nodes' `gap`)

1. The adrenaline infusion for an antivenom reaction: Table 17's 1 microgm/kg/min, or the ebook's 1 mcg/min (point 23).
2. Malayan pit viper: Table 15's 4 vials, against 3 vials in the guideline's case photo and the MST book (point 14). Cobra: when 5 and when 10 vials for local envenoming (point 15).
3. The polyvalent dose for an unidentified bite, neurotoxic or haematotoxic (point 13), and the antivenom for the four pit vipers with blank cells and the beautiful pit viper (point 11).
4. How long to observe a known venomous species without signs, and before discharge after observation (point 2); where in HKL these patients are observed (MAU, a medical ward, the observation ward), and whether the Green Zone may hold an asymptomatic bite while it is identified (point 1).
5. RECS: the number to call. The guideline names the service on five pages and prints no contact (p iii, p vi, p vii, p3, p67); the MST book acknowledges it without a contact (p4).
6. Which antivenoms the HKL ED pharmacy stocks, and who in HKL is the "physician trained and familiar with management of snakebite" (point 19).
7. Who arranges the blood tests 5-7 days after a pit viper envenoming (EMACC, EM Watch, the ward's clinic).
8. Which HKL team sees venom ophthalmia out of hours.
9. The red-necked keelback antivenom: whether the anti-yamakagashi and tiger keelback products are the same, and how HKL would obtain one (point 20).
10. Return advice after a non-venomous bite or an observation without envenoming: the guideline gives none (the entry's discharge outcomes say so).

---

## (d) Calculator candidates

Exact rules and source lines for the two requested calculators are in `sources/snakebite/calc-spec.md`, with the phrases from `data9.js` for `CALC_FACTS`.

1. **`snake20`, the 20WBCT** (recommended): a 20-minute timer and a reading aid. Steps from 4.5.9 (p39); "not clotted, may have a coagulopathy"; the caution that it does not decide antivenom alone (p39); after antivenom, the repeat check 6 hours after the infusion ended (7.6.1, p75), with clotting usually back in 3-9 hours (7.5.3). Declines: a partial clot, a repeat schedule before antivenom, no glass tube (point 6).
2. **`snakeav`, antivenom by snake** (recommended): region, species or syndrome, local or systemic envenoming for cobras, weight for a child. Output: the product, second choice, starting vials, next-dose interval, the 7.6 repeat rules, reconstitution, the dilution volume (adult 250-500 ml; child 5-10 ml/kg computed from weight), the starting rate of 1-2 ml/min for 10-15 minutes, and the adrenaline to draw up (adult 0.5 mg; child 0.01 mg/kg computed). Declines: polyvalents for an unidentified bite, the blank cells, the keelback dose, any maximum (points 11 to 17).
3. **RPP** (worth building, third): two tape positions and the interval give cm per hour (2.5 cm in 4 hours is 0.6 cm/h, p49). The guideline sets no threshold, so the output is a number to chart, not a verdict.
4. **Neostigmine test doses by weight** (possible): atropine 0.6 mg or 50 µg/kg; neostigmine 0.02 or 0.04 mg/kg; edrophonium 10 mg or 0.25 mg/kg; maintenance 0.5-2.5 mg every 1-3 hours up to 10 mg in 24 hours, or 0.01-0.04 mg/kg every 2-4 hours (p56 to 57).
5. **Reaction drug doses by weight** (a mode of `snakeav`, not a new calculator): Table 17's child doses. It must show the 1 microgm/kg/min infusion as printed and flagged, or leave the infusion out until Krishna decides (point 23).
6. **Not worth building:** Table 11 by snake (a lookup, already in the Observation tab); the triage question (one checklist).

---

## (e) Every number in the entry, and how it was checked

"Text" = found in the text layer of the cited page by script. "Image" = also read on the page image (110 dpi). "Meta" = from the PDF metadata or MyBIS, not printed. Each row is one figure or group.

| # | Number as in the entry | Where | Page | Check |
|---|---|---|---|---|
| 1 | MOH/P/PAK/341.17(GU) | `menu` hint, refs | PDF 1 (cover) | Text |
| 2 | ISBN 978-967-0769-79-0 | refs | PDF 113 (back cover) | Image; MyBIS record |
| 3 | 2017; the PDF from August 2017 | title, src, lead, refs | none printed | Meta (PDF created 8 Aug 2017; MyBIS 2017) |
| 4 | Species unknown in more than half of bites | `syn` hint | p2 | Text ("more than 50% of cases") |
| 5 | Spray of 1 metre or more | `eye` gap | p6 | Text (printed "one metre") |
| 6 | 10% formaldehyde or 70% alcohol | First aid tab | p8 | Text |
| 7 | At least 24 hours (species unknown) | `obs`, `dcobs`, Observation tab | p31 | Text |
| 8 | First 48 hours (serial assessment) | `obs`, Observation tab | p46 | Text |
| 9 | At least hourly for the first 12 hours | `obs`, Observation tab | p91 | Text; Image |
| 10 | Every 5-15 minutes; temperature 4-hourly; urine output hourly; two large-bore cannulas | `red`, Observation tab | p54 | Text |
| 11 | Table 11: FBC daily or 6-hourly; clotting baseline or 6-hourly; CK 6-hourly, sea snake 4 to 6-hourly; renal profile baseline, sea snake 6-hourly; LFT baseline, serial if abnormal; urine FEME serial (sea snake); first 48 hours | Observation tab, `labs`, `sea`, `synm` | p40 | Text; Image |
| 12 | Bloods every 4-6 hours for the first 24 to 48 hours; no serial clotting for elapids | Observation tab | p90 | Text; Image |
| 13 | 20WBCT: 2 ml; 20 minutes; tip once | `labs`, 20WBCT tab | p39 | Text; Image |
| 14 | Platelets below 100 × 10⁹/L | `env` | p66 | Text; Image (superscript lost in print) |
| 15 | Swelling of more than half the limb within 48 hours | `env` | p66 | Text; Image |
| 16 | Normal saline 5-10 litres for the eye | `eye` | p55 | Text ("5 to 10 litres") |
| 17 | Adrenaline 0.5% eye drops | `eye` | p60 | Text |
| 18 | Paracetamol every 4-6 hours | `obs` | p56 | Text; Image |
| 19 | Adrenaline ready: adult 0.5 mg, child 0.01 mg/kg, 1 mg/ml, 1 in 1,000 | Antivenom tab, Children tab | p69 | Text; Image |
| 20 | Reconstitute with 10 ml water for injection | Antivenom tab | p69 | Text; Image |
| 21 | Dilute adult 250-500 ml; child 5-10 ml/kg | Antivenom tab, Children tab | p69; p58 | Text; Image |
| 22 | 1-2 ml/min for 10-15 minutes; within an hour; at least an hour after | product outcomes, Antivenom tab | p69 | Text; Image |
| 23 | Elapids: up to 10 vials to start | `synn`, Antivenom tab | p65 | Text; Image |
| 24 | Cobra Antivenin: local 5-10 vials, systemic 10 vials; next after 1-2 hours | `cob`, Antivenom tab | p70; p73 | Text; Image |
| 25 | King Cobra Antivenin: 10 vials; 1-2 hours | `king`, Antivenom tab | p70; p73 | Text; Image |
| 26 | Malayan and Banded Krait Antivenin: 5 vials; 1-2 hours | `krait`, Antivenom tab | p71; p73 | Text; Image |
| 27 | Neuro polyvalent for the red-headed krait: 5 vials; 1-2 hours | `rhk`, `synn`, Antivenom tab | p71; p73 | Text; Image |
| 28 | CSL sea snake: 1-3 vials; 1-2 hours | `sea`, `synm`, Antivenom tab | p71; p73 | Text; Image |
| 29 | Malayan Pit Viper Antivenin: 4 vials; 6 hours | `mpv`, Antivenom tab | p71 | Text; Image |
| 30 | Case photo: 3 vials in all | `mpv` gap | p37 | Image only (caption inside the photo) |
| 31 | Green Pit Viper Antivenin: 3 vials; 6 hours | `gpv`, Antivenom tab | p72; p73 to 74 | Text; Image |
| 32 | Gum bleeding stops in 15-30 minutes; clotting back in 3-9 hours; BP within 30-60 minutes; cobra paralysis from 30 minutes | `mpv`, Antivenom tab, 20WBCT tab | p75 | Text; Image |
| 33 | Repeat: 6 hours after the infusion; within 1-2 hours (bleeding); after 1-2 hours (paralysis or circulation) | product outcomes, Antivenom tab, 20WBCT tab | p75 | Text; Image |
| 34 | Early reaction 2-180 minutes; pyrogenic 1-2 hours; late 1-12 days, mean 7 | `rx`, `rxe`, `rxp`, `rxl`, `fu`, advice | p76; p77 | Text; Image |
| 35 | IM adrenaline adult 0.5 mg, child 0.01 mg/kg; every 5-10 minutes; IV infusion 1 microgm/kg/min | `rxe`, Antivenom tab | p76 | Text; Image |
| 36 | Chlorpheniramine IV adult 10 mg, child 0.2 mg/kg; ranitidine IV adult 50 mg, child 1 mg/kg; hydrocortisone IV 2-4 mg/kg, child at most 200 mg | `rxe`, Children tab | p76 | Text; Image |
| 37 | Chlorpheniramine by mouth for 5 days: adult 2 mg six-hourly, child 0.25 mg/kg/day; after 24-48 hours, prednisolone for 5-7 days: adult 30-60 mg/day, child 0.7-1 mg/kg/day | `rxl`, Children tab | p77 | Text; Image |
| 38 | Atropine IV adult 0.6 mg, child 50 µg/kg | Antivenom tab, Children tab | p56 | Text; Image |
| 39 | Neostigmine IM adult 0.02 mg/kg, child 0.04 mg/kg; edrophonium adult 10 mg, child 0.25 mg/kg; watch 30-60 or 10-20 minutes | Antivenom tab, Children tab | p57 | Text; Image |
| 40 | Neostigmine 0.5-2.5 mg every 1-3 hours, at most 10 mg in 24 hours; child 0.01-0.04 mg/kg every 2-4 hours; by mouth atropine 0.6 mg twice a day, neostigmine 15 mg or pyridostigmine 60 mg four times a day | Antivenom tab, Children tab | p57 | Text; Image |
| 41 | WHO South-East Asia guideline, 2016 (source of 6.5.4) | `coral` gap, Antivenom tab | p56 | Text |
| 42 | Compartment pressure over 40 mmHg (less in children) | Observation tab, Children tab | p80 | Text |
| 43 | Blood tests 5-7 days after discharge (pit viper) | `fu`, advice | p83 | Text |
| 44 | RPP: tape every 2 or 3 hours; 2.5 cm in 4 hours is 0.6 cm/h; keep two tapes | Observation tab | p49; p50 | Text (p49); Image (p50, the box is a picture) |
| 45 | RECS 24-hour advice | `red`, `other`, refs | p iii, p vi, p vii, p3, p67 | Text |
| 46 | MST book: do's and don'ts; a dead snake can envenom; local names | First aid tab, advice, Identify tab | MST p46, p9, p11 to 12 | Text; Image (p46) |

The 26 script misses: 2017 (×7, metadata); "20" in "20WBCT" and "20-minute" (×6, the test's name); "Tables 11, 12 and 15" and "Tables 3, 5, 8, 15 and 16" (×2, table numbers); the `env` checklist's 100 × 10⁹/L and 48 hours (×3, cited in the question's hint, rows 14 and 15); the `rx` options' 2, 180, 1-2, 1 and 12 (×5, cited in the hint, row 34); "1 metre" (×1, row 5); and "48 hours" in a note heading (×1, row 11). All were checked by hand.

---

## Figures to draw

Own drawings from the facts, not redrawn from any photo or layout. The keys are on nodes and notes in `data9.js`; until `FIGS` has them, nothing is drawn.

| Key | Used on | What it should show | From |
|---|---|---|---|
| `ptosis` | `sx`; Observation tab, paralysis note | The bedside test: a finger or pen held in front of the patient and moved slowly up while the head stays still; normal lids lift fully, ptosis lags; then the same moves for eye movements (an eye that cannot follow; double vision). Optionally the "broken neck sign" (weak neck flexors) as a small third panel. | 4.2.4.1 to 4.2.4.2 (p32); 5.1 (p46); Table 12 (p42) |
| `wbct` | `labs`; 20WBCT tab | Four steps: 2 ml fresh venous blood; a small, clean, dry glass tube; 20 minutes undisturbed at room temperature; tip once. Two results: clotted (solid) and not clotted (runs: may be a coagulopathy). A note: not alone for antivenom; after antivenom, recheck 6 hours after the infusion ended. | 4.5.9 (p39); 7.5.3 and 7.6.1 (p75) |
| `obs` | `obs`; Observation tab | A timeline from arrival: checks every 5-15 minutes while acute; at least hourly for 12 hours; serial assessment to 48 hours; at least 24 hours if the species is unknown; bloods by Table 11 (6-hourly for pit viper or unidentified); after antivenom, at least 1 hour of monitoring; after a pit viper envenoming, bloods 5-7 days after discharge. | 6.3.8 (p54); Appendix 2 (p91); chapter 5 (p46); 4.2 (p31); Table 11 (p40); 7.3.1 (p69); 9.1.2.1 (p83) |
| `avgive` | every product outcome (`synn`, `synh`, `cob`, `king`, `krait`, `rhk`, `sea`, `mpv`, `gpv`); Antivenom tab | Preparation as a strip: adrenaline drawn up (0.5 mg adult; 0.01 mg/kg child); reconstitute with the supplied solution or 10 ml water for injection, swirl, never shake; dilute in 250-500 ml NS or D5% (child 5-10 ml/kg); 1-2 ml/min for 10-15 minutes, then faster, done within 1 hour; monitor at least 1 hour after. Optionally the response clock: bleeding stops 15-30 min, BP 30-60 min, clotting 3-9 h, repeat check at 6 h. | 7.3.1 (p69); 7.5 and 7.6 (p75) |
| `react` | `rx`; Antivenom tab, reactions note | A time axis from the start of the infusion: early reactions at 2-180 minutes, pyrogenic at 1-2 hours after, late at 1-12 days (mean 7); under each, the key treatment (stop and adrenaline; cool, antipyretic, fluids; oral chlorpheniramine, then prednisolone). | Table 17 (p76 to 77); 7.7 (p76) |
| `rpp` | Observation tab, RPP note | A limb with two strips of tape at the swelling's proximal edge, labelled with times; the distance measured between the distal borders; the worked example 2.5 cm in 4 hours = 0.6 cm/h; "no permanent marker; keep two tapes; no girth". | Table 10 (p34); 5.4.8 (p48 to 50) |

Not drawn, on purpose: the MST book's do's and don'ts (p46) are an all-rights-reserved infographic, so an icon-for-icon redraw would copy its layout; the entry has them as a text list. Tables 12, 15 and 16 are not drawn as grids, for the same reason (the entry rearranges them by product and by syndrome).

---

## What could not be verified

- **The Ministry's PDF:** the page count and size (HTTP 403 to scripted requests; not opened in a browser, see the header). Title, reference and ISBN match through the search index and MyBIS.
- **RECS:** no contact in either source.
- **The ebook PDF:** not available; the comparison in (c) is with the app's transcription.
- **The WHO South-East Asia snakebite guideline of 2016**, from which 6.5.4 is adapted: not read.
- **Whether the anti-yamakagashi and the tiger keelback antivenoms are one product** (point 20).
- **HKL's antivenom stock**, and the department's own snakebite documents: the MO Drive "SNAKES BITE" folder (a scanned copy and a snake atlas) was not opened in this round.
