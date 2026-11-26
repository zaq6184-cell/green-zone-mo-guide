# Source currency check, 25 Nov 2026

Research for the Green Zone MO Guide: which of its national sources have a newer edition, which national documents it lacks, the public health alerts that matter in the ED this month, and each source's reuse terms. Read-only: nothing in the app was changed.

**How it was done.** Web search, page reads (WebFetch), and the browser pane for three pages that refuse automated requests but load in a browser: the MOH CPG list, the MaHTAS CPG database and one Berita Harian article. Two research agents covered the non-CPG MOH documents and the alerts; their findings are folded in below with their evidence tags. No PDF was downloaded: the asthma update is 16 MB, so it is named here for Krishna to download.

**Quotations.** Text in quotation marks was read as page text only for the MOH CPG list, the MaHTAS pages, the Berita Harian article, the JKN Selangor and WHO WPRO dengue PDFs (extracted by the alerts agent) and the server headers. Everything else came through a page summariser and is near-verbatim: check it against the page before it goes into the app.

**Evidence tags.** *Primary*: read on the issuer's own page. *News*: read on a news page that quotes MOH or a state health department. *Snippet*: seen only as a search-engine summary; treat as a lead. "No newer edition found" is weak evidence. The Academy of Medicine list (acadmed.org.my) was blocked by Cloudflare in the browser too ("Sorry, you have been blocked"), and several moh.gov.my pages return HTTP 403 to automated requests.

**Reuse terms.** Terms are quoted only where they were read on the page. "Terms not read" means the copyright page was not seen; nothing was filled in from memory. The terms of the CPGs already in the app are in their `CPG-REVIEW-*.md` files and `CPG-RUN-THROUGH.md`, and were not re-read, except where a new file now exists.

---

## Summary

### Stale or changed: sources the guide already uses

1. **Asthma in Adults CPG, 2nd edition: re-issued.** MaHTAS now serves `e-CPG_Management_of_Asthma_in_Adults_(Second_Edition) - update June 2026.pdf` and `QR ... - Update Oct 2025 (3).pdf`; both files were last modified on the server on 30 Jun 2026. The guide's copy, `sources/CPG Management of Asthma in Adults (2nd Edition, 2024).pdf`, is 16,476,377 bytes: exactly the size of the April 2025 file (`..._-_11_4_25.pdf`). The June 2026 file is 16,319,165 bytes, so the guide was built from the earlier version. What changed is not yet known. *Primary (file list, server headers and local file size). Confidence: high that the guide's copy is superseded; nothing known about the content.*
2. **Nipah: a new national guideline.** The January 2026 national guideline, issued with circular KPK Bil. 16/2026, replaces the guideline of 2000. The guide's Nipah step rests on the department memo HKL/JK/98/123/8. That memo is printed "28 Januari 2025" but was circulated in January 2026, and its year is already under Still to confirm, so it may have been written alongside the national guideline. Check the memo against the guideline. *Snippet (circular title and summary). Confidence: high that the guideline exists.*
3. **Mpox: a newer national guideline.** "Guidelines of MPOX Management Malaysia Third Edition" is dated 18 Sep 2025. The guide uses the HKL Mpox pathway of Sept 2024. *Primary (mpox.moh.gov.my list). Confidence: high.*
4. **National Antimicrobial Guideline (NAG), 4th edition (online): updated topic by topic since Sep 2024.** The Dec 2025 and Jan 2026 rounds touch cellulitis, bite-related infections, UTI and urosepsis, community-acquired pneumonia, influenza and melioidosis. The guide cites NAG in the ebook's `gastroenteritis` references ("National Antimicrobial Guideline, 4th edition, 2024") and in the abdominal pain handbook. The Dec 2025 round updated "Infectious diarrhoea". Its ED antimicrobial guides (Feb 2024) predate every update (OPEN-ITEMS line 24 already asks whether they are current). *Primary. Confidence: high.*
5. **Hypertension CPG, 6th edition: coming, not yet listed.** The Malaysian Society of Hypertension congress (24–26 Apr 2026) held a session "An Update of the Malaysian Management of Hypertension CPG (6th Edition)". A search summary says the ACS CPG 2026 cites a "6th Ed 2026". Neither MOH's list (updated 18 May 2026) nor MaHTAS's database (read today) shows it. The ebook's `hypertensive-urgency` rests on the 5th edition (2018). *Primary (congress page); snippet (ACS citation). Confidence: medium that it is imminent.*
6. **The MOH abbreviation list (Bil.1/2024) may have an issuing circular.** A search snippet of MOH's publication list shows "Surat Pekeliling KPK Bil.4/2024 Senarai Kata Singkatan (Abbreviation) Di Fasiliti Kementerian Kesihatan Malaysia (KKM)". The guide says the list "prints no issuer, date or rule for its use" (Still to confirm). *Snippet. Confidence: medium.*
7. **CKD CPG: a 3rd edition is in drafting.** One personal LinkedIn post says the draft went to its review committee. *Snippet. Confidence: low.*
8. **Unchanged.**
   - On both MOH's list and MaHTAS's database: dengue in adults (4th edition, 2026: on MaHTAS's list only, as MOH's predates it), gout (2021), head injury (2015), diabetic foot (2018), CKD (2018), rhinosinusitis (both lists say 2017; the guide says 2016), hip fracture (2023), cancer pain (2023), T2DM 6th edition (2020; its 2025 review date has passed), VTE (2013), COPD (2009), sore throat (2003).
   - On MOH's list only: ACS (2026), foreign body ingestion in children (2025) and avulsed teeth (2019). MaHTAS's database lacks them, so it is incomplete, and absence from it is weak evidence.
   - Also unchanged: the snakebite guideline (2017) and the Antidotes Quick Guide (2022).
   - Not checked: the HKL Code Blue Manual and rabies protocol, which are hospital-internal.

### New and worth adding, ranked by how often a Green Zone MO would need it

1. **MOH's patient-flow guideline, effective June 2026.** It tightens the "Zon Tidak Kritikal (Hijau)" policy: non-emergency cases are diverted to health clinics and private clinics, and emergency physicians are mandated to decide admission within four hours. It also carries the MTS 2022 rollout. This is the most direct change to Green Zone work found. The document itself was not found; ask the department for it. *News (Bernama via Berita Harian, 3 Jul 2026).*
2. **NAG 4th edition (online)**, for empirical antibiotics in cellulitis, bites, UTI and CAP. "Copyright © 2024 Ministry of Health Malaysia", and its home page reads: "No part of this website, including text, images, and media, may be printed or distributed in any other form without the prior written permission of the copyright owner." (corrected 26 Nov 2026, read as page text on 25 Nov 2026; this line first said no reproduction statement was found). So link to it and name its topics only: no regimen, dose or table goes into the guide.
3. **Heat-related illness guideline (MOH Medical Development Division, Mar 2016)**, written for "Health Clinic and Emergency and Trauma Department". It is older than 2024 but national and ED-specific; useful in hot spells and haze seasons. *Snippet.*
4. **Mpox, 3rd edition (Sep 2025)**, with the outpatient triage flowchart and annexes (Sep 2024).
5. **Nipah, January 2026.**
6. **Abdominal trauma in adults CPG (MaHTAS)**: 2026 on MaHTAS's database, 2025 ("-v2" file) on MOH's list. Tier B in CPG-RUN-THROUGH for `trauma-walkins`; earlier recorded as allowing reproduction.
7. **Rabies.** Sarawak's "Guideline of Animal Bite Management in Sarawak (GAJKNS-6/2026)", 22 Apr 2026 (snippet; only on a third-party flipbook). A Johor district copy of "Rabies Management in Human and Animal 2025" (unreadable PDF). No new national PEP circular was found.
8. **Hypertension CPG, 6th edition**, once published.
9. **Spontaneous intracerebral haemorrhage (2025) and IBD (2025)**: Red Zone or specialist care; a shelf link is enough.

**Not found since 2024.**
- Searched: urticaria or anaphylaxis treatment, migraine or headache, adult CAP and sepsis (NAG covers the antibiotics), a newer leptospirosis guideline than 2011, a national melioidosis guideline, and a new OSCC guideline (one was still pending in July 2026).
- Not searched, and on neither MOH's list (18 May 2026) nor MaHTAS's database (25 Nov 2026): epistaxis, low back pain, acute gastroenteritis, adult UTI and measles.

### Public health alerts, Nov 2026

1. **Dengue is high and still rising.**
   - Selangor at week 45: +70.7% cumulative on 2025, 33 deaths against 6 (*primary*).
   - WHO WPRO, week 34: 63,752 cases and 60 deaths in 2026, higher than the same period of 2025 and the 5-year median (*primary*).
   - KL and Putrajaya at week 32: 10,316 cases against 5,013, +106% (*news*, page undated).
   - Nationally at week 35: 65,979 cases, +66% (*snippet*).
2. **Northeast monsoon floods.** The monsoon runs 27 Oct 2026 to March. MOH names leptospirosis, diarrhoea, food poisoning and respiratory infections.
3. **Rabies.**
   - Kedah, Sept 2026: a man died after a stray-dog bite in August. He had been seen at a health facility and given no post-exposure prophylaxis. It was Kedah's first human case since 1998.
   - Seven deaths nationally to 12 Oct (six in Sarawak).
4. **Haze, Sep–Oct 2026.** URTI rose 167% in one week, asthma 127%, conjunctivitis 83% (geographic scope not stated in what was read).
5. **Ebola (Bundibugyo).** WHO declared a PHEIC on 16 May 2026, and MOH screens travellers. Its status in November was not confirmed.

### Top 10 (all three lists together)

| # | Item | Kind | Action for the guide |
|---|---|---|---|
| 1 | Asthma in Adults CPG re-issued ("update June 2026"; QR "Update Oct 2025") | Stale source | Download both, diff against the May 2025 PDF behind `asthma-cpg` and its calculators |
| 2 | MOH patient-flow guideline, June 2026: Green Zone diversion, 4-hour admission mandate | Missing | Get the circular from the department; a dated note on `gz-rules` |
| 3 | Dengue surge (Selangor week 45: +70.7% cumulative, 33 deaths against 6, primary; WHO WPRO week 34: higher than 2025 and the 5-year median, primary; KL/Putrajaya +106% at week 32, news) | Alert | An "infection alerts" note with its date; `dengue-cpg` already current |
| 4 | NAG 4th edition updates, Dec 2025 and Jan 2026 (cellulitis, bites, UTI, CAP, influenza, melioidosis) | Missing / stale neighbour | Link it; ask whether the ED guides of Feb 2024 still stand |
| 5 | Rabies: Kedah death after no PEP; Sarawak GAJKNS-6/2026 | Alert + source | Note on `animal-bites`; get an official Sarawak copy |
| 6 | Floods and leptospirosis season | Alert | Point to `infection-alerts--lepto` (circular 26/2021) |
| 7 | Nipah national guideline, Jan 2026 (KPK Bil. 16/2026), replaces the 2000 guideline | Stale source | Check the department memo of Jan 2025 against it |
| 8 | Mpox guideline, 3rd edition (Sep 2025) | Stale source | Check the HKL pathway of Sept 2024 against it |
| 9 | Hypertension CPG, 6th edition (presented Apr 2026, not yet listed) | Coming | Watch the MOH and MaHTAS lists |
| 10 | Abbreviation list's issuing circular, KPK Bil.4/2024; heat-illness guideline (2016) | Gap | Read the circular; consider a heat-illness link |

---

## 1. National sources the guide quotes or summarises

### 1.1 The MOH and MaHTAS lists, read today

- **MOH "Panduan Amalan Klinikal (CPG)".**
  - Page: https://www.moh.gov.my/en/publications-and-reports/policies-act-policies-guide-lines/penerbitan-klinikal/senarai-penerbitan-klinikal/panduan-amalan-klinikal-cpg
  - The page shows "11 February 2026" and "Last Updated: 18 May 2026".
  - Read in the browser pane: *primary*. Every row's status icon is the same image ("Current CPG"), so status cannot be read from it.
  - Its newest rows: "Management Of Acute Coronary Syndrome (ACS) 1st Edition 2026"; abdominal trauma in adults (2025, file `CPG_Management_of_Abdominal_Trauma_in_Adults_2025-v2.pdf`); spontaneous intracerebral haemorrhage (2025); conservative kidney management (2025); myeloproliferative neoplasms, 2nd edition (2025); foreign body ingestion in children (2025).
  - It still lists **dengue in adults, 3rd edition (2015)**: the page predates the 4th edition.
- **MaHTAS CPG database.**
  - Page: https://mymahtas2.moh.gov.my/index.php/main/carian/CPG (the frame inside https://mymahtas.moh.gov.my/index.php/docman-list/publications/cpg-clinical-practice-guideline).
  - Read today: *primary*. 101 rows, newest first:
    - "CPG MANAGEMENT OF ABDOMINAL TRAUMA IN ADULTS", 2026, CPG, QR and TM;
    - "MANAGEMENT OF DENGUE IN ADULTS (FOURTH EDITION)", 2026, CPG and QR (files `e-CPG Management of Dengue in Adults (Fourth Edition).pdf` and `QR Dengue4.pdf`);
    - then the 2025 and 2024 rows already known.
  - There is no hypertension 6th edition, no COPD after 2009, no VTE after 2013 and no T2DM after 2020.
  - The ACS CPG is not in MaHTAS's database: it is the National Heart Association's.
- **MaHTAS news, 12 Nov 2026** (https://mymahtas.moh.gov.my/, *primary*): "The meeting endorsed five CPGs, two HTA reports and eight Technology Reviews". The five are not named. New CPGs may appear in the coming weeks: check again in December.

### 1.2 Per source

| Source in the guide | Latest found | Link and date | What changed that matters | Reuse terms | Evidence, confidence |
|---|---|---|---|---|---|
| Dengue in adults, 4th edition (2026) | Same | MaHTAS database, 2026 | None. Now confirmed as published on MaHTAS's list. | As in `CPG-REVIEW.md` | Primary, high |
| Asthma in adults, 2nd edition (2024) | **Same edition, re-issued; the guide's copy (16,476,377 bytes) is the April 2025 file** | CPG: https://mymahtas2.moh.gov.my/files/e-CPG_Management_of_Asthma_in_Adults_(Second_Edition)%20-%20update%20June%202026.pdf (16,319,165 bytes, Last-Modified 30 Jun 2026). QR: https://mymahtas2.moh.gov.my/files/QR%20Management%20of%20Asthma%20in%20Adults%20(Second%20Edition)%20-%20Update%20Oct%202025%20(3).pdf (2.9 MB, 30 Jun 2026). MOH's list also links a file named "...Updated_Oct_2025.pdf". The earlier file, `..._-_11_4_25.pdf`, is still served (Last-Modified 27 May 2025). | **Not known.** No erratum page or change log was found. Search showed only the launch (25 May 2025) and the training sessions. The CPG's own preface says corrections are posted in the web version, "the definitive version at all time" (search summary). Diff the new PDF against `sources/CPG Management of Asthma in Adults (2nd Edition, 2024).pdf`, especially Table 9 (severity), the prednisolone and magnesium lines (OPEN-ITEMS 11) and every number in `asthma-cpg` and its calculators. | Not re-read for the new file | Primary for the files; content unknown |
| Gout, 2nd edition (2021) | Same | Both lists | None | As reviewed | Primary, high |
| Head injury in adults (2015) | Same | Both lists | None | As reviewed | Primary, high |
| ACS, 1st edition (2026) | Same | MOH list | None | As reviewed | Primary, high |
| Diabetic foot, 2nd edition (2018) | Same | Both lists | None | As reviewed | Primary, high |
| Foreign body ingestion in children (2025) | Same | MOH list only (not in MaHTAS's database) | None | As reviewed | Primary, medium |
| CKD, 2nd edition (2018) | Same; 3rd edition being drafted | Snippet: a personal LinkedIn post saying the 3rd edition's draft went to its review committee | None yet | As reviewed | Snippet, low |
| Rhinosinusitis | Same document | MOH and MaHTAS both list it as **2017**; the guide and the Academy say 2016 | Year label only | As reviewed | Primary, high |
| Avulsed teeth, 3rd edition (2019) | Same | MOH list only (not in MaHTAS's database) | None | As reviewed | Primary, medium |
| Geriatric hip fracture (2023) | Same | Both lists | None | As reviewed | Primary, high |
| Cancer pain, 2nd edition (2023) | Same | Both lists; the MOH file is named `..._8_8_24.pdf` | None found. Whether the guide's copy is the same file was not checked. | As reviewed | Primary, high |
| T2DM, 6th edition (2020) | Same; no 7th edition found | Both lists. The edition says it is to be reviewed "in 5 years (2025)" (search summary of the MEMS copy). | None | Own words (no reproduction terms) | Primary, medium |
| VTE (2013) | Same | Both lists | None | Own words | Primary, medium |
| COPD, 2nd edition (2009) | Same | Both lists. An IQVIA white paper (11 Mar 2025, secondary) says the CPG has "not been updated since 2009". | None | Own words | Primary, medium |
| Sore throat (2003) | Same | Both lists | None | Own words | Primary, medium |
| Hypertension, 5th edition (2018; the ebook's `hypertensive-urgency`) | **6th edition in preparation** | Congress page https://congress2026.msh.my/home (24–26 Apr 2026): Day 1, Symposium 1, "An Update of the Malaysian Management of Hypertension CPG (6th Edition)". A search summary of the ACS CPG 2026 PDF says it cites "Malaysian Clinical Practice Guidelines on Management of Hypertension, 6th Ed 2026" (Krishna has that PDF in the AMM folder to check). Not on either list. msh.org.my now hosts unrelated content; do not link to it. | Not yet published | 5th edition: rights reserved | Primary (congress); snippet (ACS); medium |
| MOH snakebite guideline (2017) | Same | MyBIS lists it as 2017. MOH PDF https://moh.gov.my/moh/resources/Penerbitan/Garis%20Panduan/Garis%20Panduan%20Umum(KKM)/Guideline%20Management%20Of%20Snakebite.pdf (403). | None. No MST or RECS consensus found. | Terms not read | Snippet, medium |
| MOH Antidotes Quick Guide (Adult Dose), 2022 | Same | https://pharmacy.moh.gov.my/en/documents/antidote-quick-guide-adult-dose.html ("Date: 12 April 2022") | None. No 2nd edition or paediatric guide found. | As recorded on 21 Nov 2026 (its page 2 allows reproduction with acknowledgement) | Primary, high |
| MOH abbreviation list, Bil.1/2024 | Same list; **issuing circular found by title** | A snippet of MOH's publication list shows "Surat Pekeliling KPK Bil.4/2024 Senarai Kata Singkatan (Abbreviation) Di Fasiliti Kementerian Kesihatan Malaysia (KKM)" (https://www.moh.gov.my/en/component/content/category/penerbitan-dan-laporan?start=260, 403) | It may supply the issuer, date and rule of use the guide lists under Still to confirm | Terms not read | Snippet, medium |
| Rabies and animal bites (HKL protocol, Oct 2022) | No new national circular found | National: "Interim Guideline for Prevention and Control of Human Rabies in Malaysia" (https://www2.moh.gov.my/moh/resources/Penerbitan/Interim_Guideline_for_Prevention_and_Control_of_Human_Rabies_in_Malaysia.pdf; dated 2018 by a 2021 review). Sarawak: "Guideline of Animal Bite Management in Sarawak (GAJKNS-6/2026)", 22 Apr 2026, said to update GAJKNS-5/2023 (snippet; only on a fliphtml5 flipbook). Johor district: "Rabies Management in Human and Animal 2025" (https://jknjohor.moh.gov.my/pkdsegamat/wp-content/uploads/2025/10/Annex-1_2_3_RABIES-MANAGEMENT-IN-HUMAN-AND-ANIMAL_2025.pdf; unreadable). | No PEP schedule is reported here: none was read on a primary page. | Terms not read | Snippet, low |
| HKL Code Blue Manual 2022/2024 | Hospital-internal; not searched | – | – | – | Not checked |
| National Antimicrobial Guideline, 4th edition (2024) (cited in the ebook's `gastroenteritis` refs and in `abdo-handbook`) | Same edition, **updated online by topic** | Landing page https://pharmacy.moh.gov.my/en/documents/national-antimicrobial-guideline-nag-2024-4th-edition.html ("29 July 2024"): "The 4th edition of NAG is now available online". Site: https://sites.google.com/moh.gov.my/nag, banner "LATEST UPDATES! (Jan '26)". Change list: https://sites.google.com/moh.gov.my/nag/information/whats-new | Topics updated, as the What's New page names them (it does not say what changed): **Jan 2026**, adult "Community-acquired pneumonia (Inpatient - Severe CAP)", "Carbuncles", "Melioidosis"; primary care "Skin and Soft Tissue Infection", "Urinary Tract Infection in Non-Pregnancy". **Dec 2025**, adult "Community-acquired pneumonia", "Influenza", "Cellulitis", "Bite-related infections", "Uncomplicated UTI", "Complicated UTI", "Urosepsis", "Diabetic Foot Infections", "Infectious diarrhoea", "Herpes zoster", "Varicella zoster (Chickenpox)", "Bartholin's Gland Abscess (NEW TOPIC)", "Melioidosis"; paediatric "Leptospirosis", "Tetanus", "Dog bites", "Cat bites". **Jan 2025**, "Uncomplicated Cystitis - alternative treatment". **Sep 2024**, "Complicated UTI - Oral treatment option", and a new "Sepsis" section. | "Copyright © 2024 Ministry of Health Malaysia"; no reproduction statement found. Treat as permission not given: link, or facts in the guide's own words. | Primary, high |
| MOH Medicines Formulary (used for `#pharmacy` categories) | Version date not found | https://pharmacy.moh.gov.my/en/documents/ministry-health-medicines-formulary-mohmf.html (page "10 June 2025"); https://myformulary.pharmacy.gov.my/ shows no date | Unknown | Portal footer: "Copyright © 1999 - 2026 MOH Pharmaceutical Services Programme. All Rights Reserved." | Primary, low |
| Circulars cited: Bil. 24/2021 (own risk), 26/2021 (leptospirosis), 9/2024 (ectopic), 25/2026 (smoking products) | No replacement found | MOH circular list https://www.moh.gov.my/en/publications-and-reports/circulars/list-of-circulars (403; did not render in the browser pane) | None found. Bil. 25/2026 and 26/2026 were not in the search index, which is expected for a circular of 19 Oct 2026. | As recorded in the guide | Snippet, low |
| Malaysian Triage Scale 2022 (cited in `data3`, `data6`) | Same scale, now being enforced | See section 2.1 | Five levels, primary and secondary triage, separate parameters for children | News article | News, high |

---

## 2. National documents since 2024 that the guide lacks, ranked

### 2.1 MOH patient-flow guideline, June 2026 (Green Zone policy)

- **Source:** Bernama, published by Berita Harian, "KKM rombak sistem penarafan triaj hospital awam, perkukuh penilaian pesakit kecemasan", 3 Jul 2026, 6:12 pm: https://www.bharian.com.my/amp/berita/nasional/2026/07/1582135/kkm-rombak-sistem-penarafan-triaj-hospital-awam-perkukuh-penilaian. A written parliamentary reply. *News, read in full.*
- **Verbatim:**
  - "Bagi mengurangkan kesesakan di Jabatan Kecemasan, KKM melaksanakan panduan baharu pengurusan aliran pesakit yang berkuat kuasa bulan lalu."
  - "Ia termasuk mengetatkan dasar Zon Tidak Kritikal (Hijau) dengan mengalihkan kes bukan kecemasan ke klinik kesihatan dan klinik swasta melalui inisiatif kerjasama awam-swasta seperti Skim Perubatan MADANI serta Skim Penjagaan Kesihatan untuk Kumpulan B40 (PeKa B40)."
  - "pakar perubatan kecemasan kini diberi mandat penuh untuk menentukan kemasukan ke wad dalam tempoh maksimum empat jam sekiranya pasukan rawatan utama tertunda"
  - On MTS 2022: it moves from the three-colour "Malaysian Triage Category (2011)" to "lima peringkat ... daripada Tahap 1 (Resusitasi) hingga Tahap 5 (Rutin)", with "Primary Triage" and "Secondary Triage" and separate parameters for children. A "Jawatankuasa Teknikal Perkhidmatan Triage EMTS" at state level runs cross-hospital triage audits and training "sekurang-kurang dua kali setahun"; the "MyTriage App" is a training aid; undertriage is a KPI.
- **Title not confirmed.** A search summary gives the document as a circular dated 4 June 2026, "Garis Panduan Pelaksanaan Langkah-Langkah Pengukuhan Pengurusan Aliran Pesakit", including a Bed Management Unit, an open-bed policy and a discharge lounge (*snippet*). The document was not found online.
- **Related:** Bernama, 18 Nov 2026 (https://www.bernama.com/bm/am/news.php?id=2636247). The Health Minister announced four hospital–health clinic initiatives "bagi mengurangkan kesesakan di zon hijau Jabatan Kecemasan", which faces waits "sehingga tujuh jam". *News.*
- **Why it ranks first:** it changes who the Green Zone keeps and who it sends to a KK or a private clinic, on every shift. Under rule 6 it goes in only from the circular itself, so ask the department for it.
- **Reuse:** a government circular; terms not read.

### 2.2 National Antimicrobial Guideline, 4th edition (online)

See the table in section 1.2. It is the national empirical antibiotic reference for the Green Zone's commonest prescriptions: cellulitis, bites, UTI, CAP. The guide names it in the ebook's `gastroenteritis` references and the abdominal pain handbook, but gives none of its content. Its Dec 2025 round updated "Infectious diarrhoea", the topic behind `gastroenteritis`'s antibiotic line. Its terms give no permission to reproduce, so link to it, or give facts in the guide's own words with the topic named. Ask the department whether the ED quick guides (Feb 2024) follow the Dec 2025 and Jan 2026 updates.

### 2.3 Heat-related illness

- **Document:** "Clinical Guidelines on Management of Heat Related Illness at Health Clinic and Emergency and Trauma Department", Medical Development Division, Mar 2016, with a Malay version. Listed at https://ghhin.org/resources/clinical-guidelines-on-management-of-heat-related-illness-at-health-clinic-and-emergency-and-trauma-department.
- **Status:** no newer edition found. *Snippet.* Terms not read.
- **Why:** it predates 2024 but is the only national ED document on the topic. Haze and heat in Aug–Oct 2026 (section 3) make it timely.

### 2.4 Mpox, 3rd edition

- **Document:** "Guidelines of MPOX Management Malaysia Third Edition", 18 Sep 2025, from https://mpox.moh.gov.my/ms/petugas-kesihatan/garis-panduan-mpox (*primary*, list only).
- **On the same page:**
  - "Flowchart for Patient Management of Suspected mpox Case in Outpatient Setting", with Annexes A to G (triage screening checklist, differential diagnosis, clerking guide, admission criteria, home isolation checklist, PPE, specimens), 26 Sep 2024;
  - "PROSES KERJA PEMBERIAN VAKSIN MPOX", 22 Sep 2025.
- **Action:** the guide's HKL pathway (Sept 2024) should be checked against the 3rd edition.
- **Reuse:** no copyright statement on the page; terms not read.

### 2.5 Nipah, January 2026

- **Circular:** "Surat Pekeliling Ketua Pengarah Kesihatan Bil. 16/2026: Pelaksanaan Garis Panduan Pengurusan Jangkitan Virus Nipah (NiV) di Malaysia Edisi Kemaskini Januari 2026": https://www.moh.gov.my/en/publications-and-reports/circulars/list-of-circulars/surat-pekeliling-ketua-pengarah-kesihatan-bil-16-2026-pelaksanaan-garis-panduan-pengurusan-jangkitan-virus-nipah-niv-di-malaysia-edisi-kemaskini-januari-2026
- **Guideline, English:** https://www.moh.gov.my/images/04-penerbitan/garis-panduan-kkm/Guidelines%20on%20the%20Management%20of%20Nipah%20Virus%20NiV%20Infection%20in%20Malaysia%20January%202026%20Disease%20Control%20Division%201.pdf
- **Guideline, Malay:** https://www.moh.gov.my/images/04-penerbitan/garis-panduan-kkm/Garis%20Panduan%20Pengurusan%20Jangkitan%20Virus%20Nipah%20NiV%20di%20Malaysia%20Januari%202026%20BM%20Bahagian%20Kawalan%20Penyakit%201.pdf
- **What changed** (*snippet*): it replaces the guideline published in 2000 and adds burial management, as NiV is now classed Risk Group 4. MOH said on 23 Feb 2026 that Malaysia remains Nipah-free.
- **Action:** compare it with the department's memo HKL/JK/98/123/8 (printed "28 Januari 2025", circulated in January 2026; its year is under Still to confirm, so it may already follow this guideline).
- **Reuse:** terms not read.

### 2.6 Abdominal trauma in adults CPG (MaHTAS)

- **Where:** 2026 on MaHTAS's database (CPG, QR, TM); 2025 on MOH's list (file `...2025-v2.pdf`).
- **Status:** Tier B in CPG-RUN-THROUGH (Academy fileid 1160, 2025). Its MEWS is already used in `ed-scores`.
- **Check:** whether the 2026 entry is a new version of the 2025 file the guide used.
- **Reuse:** recorded on 9 Nov 2026 as allowing reproduction; not re-read for the 2026 file.

### 2.7 Rabies guidance

- No new national document was found (section 1.2).
- The Sarawak guideline GAJKNS-6/2026 needs an official copy (JKN Sarawak) before use.
- The Kedah death (section 3) is the practical reason to look again.

### 2.8 Hypertension CPG, 6th edition

When published, `hypertensive-urgency` and its calculator rest on an older edition. The 5th edition reserved all rights; the new edition's terms must be read before anything is quoted.

### 2.9 Link-only candidates

- Spontaneous intracerebral haemorrhage (2025): Code Stroke, Red Zone.
- Inflammatory bowel disease (2025): Academy list, tier C.

### 2.10 Nothing national found since 2024

Searched: urticaria or anaphylaxis, migraine or headache, CAP and sepsis, leptospirosis, melioidosis, acute poisoning, OSCC and aggressive patients. Not searched (absent from both lists only): epistaxis, low back pain, acute gastroenteritis, adult UTI, measles.

- Urticaria or anaphylaxis treatment: only the Malaysian Allergy Prevention Guidelines 2.0, which cover prevention.
- Adult UTI, CAP or sepsis CPG: NAG covers the antibiotics. The MSIC Guide to Antimicrobial Therapy (2023) is intensive care.
- Not found by search: migraine or headache; heat illness newer than 2016; leptospirosis newer than the 2011 Disease Control Division guideline (*snippet*); a national melioidosis guideline; acute poisoning.
- OSCC: the 2015 policy still stands. NST, 9 Jul 2026, quotes a select-committee chair: "The Health Ministry must expedite the release of the new OSCC guidelines" (*news*).
- Aggressive patients: the MOH guideline of 2017 still stands (*snippet*).

---

## 3. Public health alerts relevant to the ED, Nov 2026

| # | Alert | Figures and advice as the source states them | Date, source | Evidence |
|---|---|---|---|---|
| 1 | **Dengue, rising** | **Selangor, week 45/2026 (8–14 Nov):** "674 kes ... peningkatan sebanyak 5.6% (36 kes) berbanding 638 kes pada ME 44/2026"; cumulative weeks 1–45 "34,820 kes ... peningkatan sebanyak 70.7%"; "tiga puluh tiga (33) kes kematian denggi ... berbanding enam (6)". **National, week 35:** 65,979 cases (+66% against 39,616), 62 deaths against 32. **Week 32:** KL and Putrajaya 10,316 against 5,013 (+106%). **WHO WPRO:** Malaysia week 34, "2 585 new dengue cases", 63,752 cases and 60 deaths cumulative in 2026. | JKN Selangor, https://jknselangor.moh.gov.my/images/2026/denggi/ME45_26.pdf; WHO WPRO update 757 (29 Oct 2026), https://cdn.who.int/media/docs/default-source/wpro---documents/emergency/surveillance/dengue/dengue_20261029.pdf; The Sun (week 32), https://thesun.my/news/malaysia-news/people-issues/dengue-cases-up-56-2-pct-55-deaths-reported-moh/; Business Today (week 35, 9 Sep 2026) | Primary (Selangor, WHO); news (week 32); snippet (week 35) |
| 2 | **Northeast monsoon floods** | MOH put "85 emergency medical teams comprising 387 personnel on standby" for the monsoon, 27 Oct 2026 to March, to reduce "diarrhoea, food poisoning, leptospirosis and respiratory tract infections". Public advice: "avoiding direct contact with potentially contaminated floodwater", "seek medical attention promptly" for fever, diarrhoea, vomiting or muscle aches. On 18 Nov: 2,553 evacuees in five states, Selangor the most; KL not listed. | The Star, 9 Nov 2026, https://www.thestar.com.my/news/nation/2026/11/09/floods-85-emergency-medical-teams-on-standby-says-health-ministry; NST, 18 Nov 2026, https://www.nst.com.my/amp/news/nation/2026/11/1580181/2553-flood-victims-sheltering-26-relief-centres-five-states | News |
| 3 | **Rabies** | Kedah: a 31-year-old man died "after being bitten by a stray dog in August"; he sought treatment at a healthcare facility but "did not receive rabies post-exposure prophylaxis (PEP)". It was Kedah's first human case since 1998. Advice: wash the wound with "soap and running water for at least 15 minutes", then seek a risk assessment. Nationally, seven rabies deaths as of 12 Oct, six of them in Sarawak (Veterinary Services Department). | The Star, 27 Sep 2026, https://www.thestar.com.my/news/nation/2026/09/27/man-dies-of-rabies-in-kedah039s-first-human-case-since-1998; The Star, 22 Oct 2026, https://www.thestar.com.my/news/nation/2026/10/22/seven-rabies-deaths-recorded-in-malaysia-so-far-this-year-says-dvs-director | News |
| 4 | **Haze** | In week 36 (6–12 Sep), URTI "surged by 167% to 7,065"; asthma +127% to 1,117; conjunctivitis +83% to 334. Advice: "wear suitable face masks". No November reading was found. | The Star, 16 Oct 2026, https://thestar.com.my/news/nation/2026/10/16/respiratory-illnesses-spike-to-7065-in-one-week | News |
| 5 | **Ebola (Bundibugyo), DRC and Uganda** | WHO declared a PHEIC on 16 May 2026. MOH: "no Ebola cases have been reported in Malaysia so far"; travellers returning within 21 days with "fever, body aches, vomiting or bleeding" should seek care. An ECDC summary reports 10,920 confirmed cases in the DRC as of 8 Nov 2026 (*snippet*). PHEIC status in late November not confirmed. | The Star, 20 May 2026, https://www.thestar.com.my/news/nation/2026/05/20/malaysia-tightens-ebola-watch-after-who-global-alert; WHO DON https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON602 | News; snippet |
| 6 | HFMD, low | 40,879 cases as of 22 Aug, against 239,907 in 2025 | The Star, 26 Aug 2026 | Snippet |

**Nothing current found** (Aug to Nov 2026): influenza or COVID-19 waves; measles; pertussis or diphtheria; mpox (last MOH statement 16 Nov 2025); chikungunya; Nipah (MOH, 23 Feb 2026: Malaysia Nipah-free); cholera; methanol; MERS; avian influenza; WHO DON items naming Malaysia.

---

## 4. Reuse terms, in one place

| Source | Terms as read | Where read |
|---|---|---|
| NAG 4th edition (online) | "Copyright © 2024 Ministry of Health Malaysia"; its home page forbids printing or distributing any part "in any other form without the prior written permission of the copyright owner" (corrected 26 Nov 2026): links and topic names only | NAG site, What's New page |
| MOH Pharmaceutical Services portal | "Copyright © 1999 - 2026 MOH Pharmaceutical Services Programme. All Rights Reserved." (the portal's own footer, not any one document's) | pharmacy.moh.gov.my |
| MaHTAS site | "Hakcipta Terpelihara © 2026 - Cawangan Penilaian Teknologi Kesihatan" (the site's footer; each CPG's own copyright page decides) | mymahtas.moh.gov.my |
| MOH portal | "©2025 Ministry of Health Malaysia. All Rights Reserved." (the portal's footer) | moh.gov.my |
| Mpox guidelines page | No copyright statement on the page | mpox.moh.gov.my |
| Asthma update June 2026, hypertension 6th edition, Nipah 2026, mpox 3rd edition, the June 2026 patient-flow guideline, the heat-illness guideline, the Sarawak rabies guideline, the KPK Bil.4/2024 circular | **Terms not read.** Read each document's own copyright page before quoting anything. | – |
| CPGs already in the app | As recorded in each `CPG-REVIEW-*.md` (not re-read) | – |

---

## 5. For Krishna to fetch (links behind blocks or too large to download here)

- **Asthma CPG, "update June 2026" (16 MB) and its QR "Update Oct 2025" (2.9 MB):** links in section 1.2. Diff them against the May 2025 PDF in `sources/`.
- **The June 2026 patient-flow guideline:** from the department or the MOH circular list (https://www.moh.gov.my/en/publications-and-reports/circulars/list-of-circulars).
- **Surat Pekeliling KPK Bil.4/2024** (abbreviation list), from the same list.
- **The ACS CPG 2026, already in the AMM folder:** check its reference to the hypertension CPG "6th Ed 2026". PyMuPDF is not installed for the Python on this PC, so it was not read here.
- **The Academy of Medicine list** (https://www.acadmed.org.my/index.cfm?menuid=67): Cloudflare blocked it for the browser pane as well. Compare it with the snapshot of 9 Nov 2026 in `CPG-RUN-THROUGH.md`.
- **MaHTAS's five CPGs endorsed on 12 Nov 2026:** check the database in December.
