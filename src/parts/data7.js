/* ===================================================================================================================
   Green Zone MO Guide: third CPG round (9 Nov 2026). Nine more national CPGs from the Academy of Medicine of Malaysia list,
   each reviewed line by line (CPG-REVIEW-*.md).
   - Quoted as printed, with page and the publisher's acknowledgement (their copyright allows reproduction, unchanged):
     chronic kidney disease (2018), rhinosinusitis (2016), avulsed permanent anterior teeth (2019), geriatric hip fracture
     (2023) and cancer pain (2023).
   - Summarised in the guide's own words, with page numbers, at Krishna's decision of 9 Nov 2026 (their copyright gives no
     permission to reproduce): type 2 diabetes (2020), venous thromboembolism (2013), COPD (2009) and sore throat (2003).
   None replaces the ebook (rule 5): the ebook's pathways stay as written, link to these entries, and where they differ is
   listed under Still to confirm.
   =================================================================================================================== */

/* ----- CPG Management of Avulsed Permanent Anterior Teeth, 3rd edition (Oral Health Programme, MOH, December 2019) -----
   For all patients with traumatically avulsed permanent anterior teeth, children and adults (p iii); it supplants the 2010
   edition (PDF page 3). 60 PDF pages, ISBN 978-967-16632-5-7, MOH/P/PAK/435.19(GU)-e; reviewed line by line (avulsed-review.md).
   Printed page = PDF page minus 17; front matter = PDF page minus 5 (the three algorithms are p viii to x). The algorithms and
   Tables 1 to 3 keep a text layer but lose their layout, so each was also read from page images; the cover is an image. No quick
   reference exists. Quoted as printed; apostrophes are plain. Copyright: the Oral Health Programme (OHP), not MaHTAS, so the
   notes footer needs p.ack (see the report). No identity fields from the Appendix 4 form (rule 4). The app has no dental entry:
   the open items are in avulsed-review.md. */
P['avulsed-tooth-cpg'] = {
  title:'Knocked-out permanent front tooth: CPG 2019', grp:'cpg', src:'CPG Avulsed Permanent Anterior Teeth, 3rd ed. (2019)', isnew:true, hero:'toothcpg',
  ack:'the Oral Health Programme (OHP), Ministry of Health Malaysia',
  lead:'The national guideline (2019) for a knocked-out (avulsed) permanent front tooth, in children and adults. Its first rule: replant immediately, preferably within 15 minutes, or keep the tooth in an appropriate storage medium (Recommendation 1). Storage, timing, antibiotics and follow-up are in the steps and tabs below.',
  start:'menu',
  nodes:{
    menu:{q:'Knocked-out permanent front tooth: what is happening now?', hint:'Recommendation 1 (p4): avulsed permanent anterior tooth should be immediately replanted into its socket preferably within 15 minutes. If immediate replantation is not possible, the avulsed permanent anterior tooth should be kept in an appropriate storage medium. CPG Management of Avulsed Permanent Anterior Teeth, 3rd edition (Oral Health Programme, 2019), for all patients with avulsed permanent anterior teeth (p iii). Printed page numbers. It was due for review in 2024.',
      info:['Pick the tooth by its crown. Do not hold or touch the root (p3)','Of utmost importance is the prevention of tooth being dried (p2–3)','The most recommended storage medium is in the following order: tooth socket; fresh milk; normal saline; patient\'s saliva (p3)'],
      opts:[
      ['The tooth is out: replant now or store it? (Algorithm, p viii)','ci'],
      ['A parent or bystander is phoning from the scene (chapter 2)','phone'],
      ['The tooth was replanted before arrival','pre'],
      ['Antibiotics, pain relief and mouthwash (4.6 and 5.8)','abx'],
      ['Home care advice and follow-up (4.6 and 6.1)','fu'],
      ['Primary (milk) tooth, tooth not found, or another case','excl']]},

    /* The site of incident algorithm (p viii), chapter 3, Contraindications for replantation (p4), Recommendation 2 (p5) */
    ci:{check:'any', q:'Any contraindication for replantation?', hint:'Replantation is absolutely contraindicated in the following conditions (chapter 3, p4). Recommendation 2 (p5): replantation of avulsed permanent anterior tooth should not be carried out in patients who suffer severe concomitant injuries or are severely medically compromised. The site algorithm (p viii) words it more widely: do not replant if the person suffers other concomitant injury to the surrounding areas, the head or other part of the body; medical problem.',
      items:['Where other injuries are more severe and warrant preferential emergency treatment and / or intensive care (such as severe head injury or poly-trauma)','Patients with compromised medical history that would be put at risks by replantation of a tooth (such as immunodeficiency, congenital cardiac defects and bleeding dyscrasia)'],
      opts:[['Yes, present','noreplant'],['None','eat']]},
    noreplant:{end:'refer', title:'Contraindication for replantation: do not replant', items:[
      'Contraindication for replantation, yes: go to nearest dental clinic or hospital as soon as possible (Algorithm, p viii)',
      'Compromised medical history: in this type of patient, it is prudent to discuss the treatment options with the medical physician in charge (p4)',
      'If immediate replantation is not possible for any reason, the avulsed permanent anterior tooth should be stored in a suitable medium to be transported to the nearest dental clinic or hospital emergency service as soon as possible (p3)',
      'The most recommended storage medium is in the following order: tooth socket; fresh milk; normal saline; patient\'s saliva (p3)'],
      links:[['#avulsed-tooth-cpg--store','How to store the tooth'],['#trauma-walkins','Trauma walk-ins: T-RACS'],['#head-injury-cpg','Head injury in adults: CPG 2015']],
      gap:'CPG chapter 3 (p4), Recommendation 2 (p5) and the site algorithm (p viii). The algorithm\'s contraindication branch goes straight to the dental clinic or hospital, with no storage step; the text (p3) stores any tooth that cannot be replanted. The CPG does not say who in a hospital decides, or which team takes the tooth.'},

    /* Extra-alveolar time: 4.4 (p6), 5.1 (p8), the clinic algorithms (p ix–x), Table 3 (p11–12) and p12 */
    eat:{q:'How long has the tooth been out of its socket, and how was it kept?', hint:'Total extra-alveolar time consists of extra-alveolar dry time, and time in storage medium. The best prognostic predictor is extra-alveolar dry time prior to storage or replantation (5.1, p8). The first and last options are the categories of 4.4 (p6); the middle one is from the clinic algorithms (p ix–x). The CPG does not class exactly 15 or exactly 60 minutes. What to record: the Time tab.',
      opts:[
      ['Immediate or early: <15 minutes extra-alveolar dry time or <60 minutes stored in recommended storage medium','poss'],
      ['Dry for >15 minutes but <60 minutes (the clinic algorithms, p ix–x)','poss'],
      ['Delayed: >60 minutes extra-alveolar dry time or stored in recommended storage medium','late']]},
    poss:{q:'Replantation into socket is possible?', hint:'Site algorithm (p viii). Replantation may not be appropriate in certain instances. However, decisions should be made on case by case basis. These include (p4):',
      info:['The tooth has evidence of extensive caries or advanced periodontal disease','The tooth has very short root (i.e. less than the crown length)','The alveolar socket has major comminutions or fractures','Uncooperative patient and / or non-compliant patient, parents or guardian'],
      opts:[['Yes','prep'],['No','store']]},
    prep:{step:'Prepare the tooth for replantation', items:[
      'Pick the tooth by its crown. Do not hold or touch the root (p3)',
      'Check to see if the root surface is clean (p3)',
      'Briefly rinse it with normal saline or tap water for 10 seconds if dirt is present. Do not scrub dirt that is present on the root (p3)',
      'The replantation technique in clinical management begins: place the tooth in normal saline; administer local anaesthesia; gently irrigate the socket with normal saline (4.4, p6). In full in the Replanting tab'], next:'replant'},
    replant:{end:'refer', title:'Replant, then to a dental clinic as soon as possible', items:[
      'Gently place the tooth into its socket without traumatising the tooth and the adjacent structures (p3)',
      'Get the patient to bite on a clean cloth to keep the tooth in place (p3)',
      'Go to the nearest dental clinic as soon as possible (p3); the algorithm says nearest dental clinic or hospital (p viii)',
      'At the dental clinic, during replantation and stabilisation: verify position with radiograph; splint for at least 7 days; prescribe antibiotic, analgesic and mouthwash (Algorithms, p ix–x)'],
      links:[['#avulsed-tooth-cpg--abx','Antibiotics, pain relief, mouthwash'],['#avulsed-tooth-cpg--fu','Home care advice and follow-up']],
      gap:'CPG chapter 2 (p3), the site algorithm (p viii) and the clinic algorithms (p ix–x). The CPG gives no time for the dental review beyond as soon as possible, does not say which team in a hospital takes over, and gives no separate method for a medical officer in the ED. In HKL, which dental team takes a knocked-out tooth, in and out of office hours, is still to confirm.'},
    store:{end:'refer', title:'Keep the tooth in a storage medium and get it to a dental clinic as soon as possible', items:[
      'If immediate replantation is not possible for any reason, the avulsed permanent anterior tooth should be stored in a suitable medium to be transported to the nearest dental clinic or hospital emergency service as soon as possible (p3)',
      'The most recommended storage medium is in the following order: tooth socket; fresh milk; normal saline; patient\'s saliva (p3)',
      'Other storage medium such as coconut water, propolis and green tea can also be considered (p3)',
      'The temperature of the storage medium should be cold (not frozen) or within room temperature around 26 ± 2°C. Do not use hot water or milk to store the tooth (Table 1, p9)',
      'In the event that the above media are unavailable, the tooth should be placed in a clean plastic bag/container for transportation (p4)',
      'The tooth may also be placed in the buccal sulcus (between the cheek and teeth) of the patient. However, this is not recommended for fear of accidental swallowing or aspiration, especially in a young child (p4)',
      'Storage in a suitable physiologic medium will ensure that the avulsed tooth is kept moist at all times (5.2, p8)'],
      links:[['#avulsed-tooth-cpg--abx','Antibiotics, pain relief, mouthwash']],
      gap:'CPG chapter 2 (p3–4), Table 1 (p9) and 5.2 (p8). How to prepare each medium, and how well each works, are in the Storage tab: Table 2 (p9) rates normal saline and saliva as poor, and Appendix 3 (p34) rates saliva very poor, although both come before coconut water, propolis and green tea in the order above. The CPG does not say which team in a hospital takes the tooth: in HKL, still to confirm.'},
    late:{end:'refer', title:'Out for more than 60 minutes: delayed replantation at the dental clinic', items:[
      'Pulp extirpation should be performed early, preferably during extra-alveolar period prior to replantation of an avulsed permanent anterior tooth that has been stored dry, or in unsuitable storage medium for more than 60 minutes (p12)',
      'Table 3 (p11–12): >60 min extra-alveolar dry time or in storage medium, immature or mature root: prognosis poor; extra-oral complete root canal treatment before replantation',
      'At the dental clinic, immature root with >60 min EAT or SM, or mature root with No to <60 min EAT or in SM: immerse in 1% sodium hypochlorite for 15 min; immediate EO pulp extirpation and obturation; replant and stabilise (Algorithms, p ix–x; EAT: extra-alveolar time; SM: storage medium; EO: extra-oral)',
      'If immediate replantation is not possible for any reason, the avulsed permanent anterior tooth should be stored in a suitable medium to be transported to the nearest dental clinic or hospital emergency service as soon as possible (p3)'],
      links:[['#avulsed-tooth-cpg--store','How to store the tooth']],
      gap:'CPG 4.4 (p6–7), p12, Table 3 (p11–12) and the clinic algorithms (p ix–x). The site algorithm (p viii) sets no time limit, while the clinic algorithms treat a tooth out for >60 minutes before it is replanted. Whether a medical officer should replant such a tooth, or keep it for the dental team, the CPG does not say: still to confirm with the dental team. A tooth kept for >60 minutes in a recommended medium is delayed in 4.4 and in the immature root algorithm, but p12 names only a tooth stored dry or in unsuitable medium.'},

    /* Replanted at the scene: chapter 2 (p3), Key Message 1 and 4.4 (p6), the clinic algorithms (p ix–x) */
    pre:{end:'refer', title:'Replanted before arrival: to a dental clinic as soon as possible', items:[
      'Get the patient to bite on a clean cloth to keep the tooth in place. Go to the nearest dental clinic as soon as possible (p3)',
      'Intraoral radiographs are required for diagnosis and baseline record of avulsed permanent anterior teeth (Key Message 1, p6)',
      'Take a periapical radiograph to verify the position of replanted avulsed permanent anterior tooth (4.4, p6)',
      'During replantation and stabilisation: verify position with radiograph; splint for at least 7 days; prescribe antibiotic, analgesic and mouthwash (Algorithms, p ix–x)'],
      links:[['#avulsed-tooth-cpg--abx','Antibiotics, pain relief, mouthwash'],['#avulsed-tooth-cpg--fu','Home care advice and follow-up']],
      gap:'CPG chapter 2 (p3), Key Message 1 and 4.4 (p6), and the clinic algorithms (p ix–x). The CPG does not say how a medical officer checks a tooth replanted at the scene: not in the source. Which dental team takes it in HKL is still to confirm.'},

    /* Chapter 2, Emergency management at site of incidents (p2–4), written for patients, parents, teachers, paramedics and bystanders */
    phone:{end:'neutral', title:'A call from the scene: the CPG\'s steps at the site of incident', items:[
      'Every effort should be made to replant the tooth within the first 15 minutes (p3)',
      'Do not replant if the person suffers: other concomitant injury to the surrounding areas, the head or other part of the body; medical problem (Algorithm, p viii)',
      'Pick the tooth by its crown. Do not hold or touch the root (p3)',
      'Check to see if the root surface is clean (p3)',
      'Briefly rinse it with normal saline or tap water for 10 seconds if dirt is present. Do not scrub dirt that is present on the root (p3)',
      'Gently place the tooth into its socket without traumatising the tooth and the adjacent structures (p3)',
      'Get the patient to bite on a clean cloth to keep the tooth in place (p3)',
      'Go to the nearest dental clinic as soon as possible (p3)',
      'If replantation into socket is not possible: place in suitable storage medium (fresh milk/saline/ patient\'s saliva) or place in a clean plastic bag (Algorithm, p viii)'],
      links:[['#avulsed-tooth-cpg--ci','The same decision, step by step'],['#avulsed-tooth-cpg--store','How to store the tooth']],
      gap:'CPG chapter 2 (p2–4) and the site algorithm (p viii), written for patients, parents, teachers, paramedics and bystanders (p2). The CPG has no telephone advice of its own. Step vi says the nearest dental clinic; the algorithm says the nearest dental clinic or hospital: where a caller in Kuala Lumpur should go is still to confirm.'},

    /* 4.6 Post-operative care (p7), chapter 5 (p8) and 5.8 Systemic antibiotics (p15) */
    abx:{check:'any', q:'Systemic antibiotics: any of these conditions?', hint:'5.8 (p15): a meta-analysis on systemic antibiotic prescription for replanted avulsed teeth showed inconclusive evidence of acceptable healing. However, systemic antibiotics may be indicated in the following conditions:',
      items:['Gross contamination of the tooth and soft tissue','Severe injury including injuries to other body sites','Patients with medical conditions that are prone to infection','Inability to keep injury site free from contamination'],
      opts:[['Yes, present','abxy'],['None','abxn']]},
    abxy:{end:'neutral', title:'Systemic antibiotics may be indicated', items:[
      'Based on National Antibiotic Guidelines 2nd Edition in 2017, penicillin-based antibiotics (e.g. penicillin V or ampicillin or amoxicillin) can be prescribed immediately if indicated (5.8, p15)',
      'Oral analgesic (Paracetamol, Ibuprofen, Naproxen and Diclofenac are adequate to manage mild pain; however, moderate or severe pain requires combination with other agents, most commonly the opioid group) (4.6, p7)',
      '0.12% chlorhexidine gluconate mouthwash twice daily for 1 week (4.6, p7)'],
      links:[['#pain','Pain management (ebook): analgesia doses'],['#avulsed-tooth-cpg--fu','Home care advice and follow-up']],
      gap:'CPG 4.6 (p7) and 5.8 (p15). The CPG gives no doses or durations for the antibiotics or analgesics and no choice for penicillin allergy: not in the source. It gives no tetanus advice: its data collection form (Appendix 4, p35) only asks for the medical history (including immunization) and any tetanus injection already given.'},
    abxn:{end:'neutral', title:'None of the four conditions in 5.8', items:[
      'The following factors may not affect the prognosis of avulsed permanent anterior teeth: type and duration of splinting; root surface treatment; systemic antibiotics (chapter 5, p8)',
      'The clinic algorithms, during replantation and stabilisation: prescribe antibiotic, analgesic and mouthwash (p ix–x)',
      'Oral analgesic (Paracetamol, Ibuprofen, Naproxen and Diclofenac are adequate to manage mild pain; however, moderate or severe pain requires combination with other agents, most commonly the opioid group) (4.6, p7)',
      '0.12% chlorhexidine gluconate mouthwash twice daily for 1 week (4.6, p7)'],
      links:[['#pain','Pain management (ebook): analgesia doses']],
      gap:'CPG chapter 5 (p8), 4.6 (p7), 5.8 (p15) and the clinic algorithms (p ix–x). The algorithms prescribe an antibiotic for every replanted tooth, while 5.8 limits it to four conditions: whether to give one here, the CPG does not settle. No tetanus advice: not in the source.'},

    /* 4.5 Splinting and 4.6 Home care advice (p7), 6.1 Follow-up intervals and Recommendation 4 (p16) */
    fu:{end:'discharge', title:'Home care advice, and reviews for five years', items:[
      'Home care advice includes: avoid biting on splinted teeth; eat soft diet; maintain good oral hygiene (4.6, p7)',
      '0.12% chlorhexidine gluconate mouthwash twice daily for 1 week (4.6, p7)',
      'The replanted avulsed permanent anterior tooth needs to be stabilised in position, by splinting for at least 7 days. Splinting should be extended to at least 4 weeks if there is a concomitant alveolar bone fracture (4.5, p7)',
      'Patients with replanted avulsed permanent anterior tooth should be reviewed at the following intervals post-replantation: 1 week; 2 weeks; 1 month; 3 months; 6 months; every 6 months until 2 years; yearly thereafter until 5 years (6.1, p16)',
      'At every follow-up after the first month, sensibility test and radiographic examination should be performed (p16)',
      'All cases of replanted avulsed permanent anterior teeth should be followed up for five years (Recommendation 4, p16)'],
      links:[['#avulsed-tooth-cpg--abx','Antibiotics, pain relief, mouthwash']],
      gap:'CPG 4.5 and 4.6 (p7), 6.1 and Recommendation 4 (p16). The home care advice is printed in English only. The CPG gives no advice on when to come back early and names no clinic for the reviews. The complications the reviews look for are in the Follow-up tab (Appendix 6, p38).'},

    /* Scope: target population (p iii–iv) and the definition (p1) */
    excl:{end:'neutral', title:'Not covered by this CPG', items:[
      'Inclusion criteria: patients with traumatically avulsed permanent anterior teeth (p iii)',
      'Exclusion criteria: patients with avulsed permanent anterior teeth associated with comminuted alveolar fractures; patients with avulsed permanent anterior teeth due to other causes than trauma such as periodontal disease and pathology (p iv)',
      'Tooth avulsion is defined as the complete dislocation of a tooth from the alveolar bone and soft-tissue socket (p1)'],
      gap:'The CPG says nothing about primary (milk) teeth, how to tell a primary tooth from a permanent one, or a tooth that cannot be found: not in the source. Its only mention of swallowing or aspiration is its warning against keeping the tooth in the buccal sulcus (p4).'}
  },

  /* Home care advice, 4.6 (p7), with the review intervals of 6.1 (p16): English only, as printed */
  advice:['Avoid biting on splinted teeth','Eat soft diet','Maintain good oral hygiene','0.12% chlorhexidine gluconate mouthwash twice daily for 1 week','Patients with replanted avulsed permanent anterior tooth should be reviewed at the following intervals post-replantation: 1 week; 2 weeks; 1 month; 3 months; 6 months; every 6 months until 2 years; yearly thereafter until 5 years'],

  /* Reference tabs: each note names its CPG page */
  notes:[
    {l:'Storage', notes:[
      {h:'The order of storage media', src:'CPG chapter 2 (p3), 5.2 (p8) and Key Message 2 (p10). The plastic bag and the buccal sulcus (p4) are in the storage step.', items:[
        'For an avulsed permanent anterior tooth, the best storage medium is the tooth socket itself (Key Message 2).',
        'The most recommended storage medium is in the following order: tooth socket; fresh milk; normal saline; patient\'s saliva. Other storage medium such as coconut water, propolis and green tea can also be considered (p3).',
        'Storage in a suitable physiologic medium will ensure that the avulsed tooth is kept moist at all times. This will preserve and extend the viability of the periodontal ligament cells before replantation (5.2, p8).']},
      {h:'Table 1: options of storage medium', src:'CPG p9. *The temperature of the storage medium should be cold (not frozen) or within room temperature around 26 ± 2°C. Do not use hot water or milk to store the tooth.', table:{head:['Storage medium','Preparation'], rows:[
        ['Milk','Pasteurized fresh or UHT milk, cold, low-fat, non-flavoured. NOT condensed or powdered milk.'],
        ['Normal Saline','Physiological saline contains 0.9% sodium chloride'],
        ['Saliva','Get the patient to spit into a clean container'],
        ['Coconut water','Fresh tender coconut water'],
        ['Propolis','10 – 50% concentration of natural propolis'],
        ['Green tea','Commercial green tea extract (soaked in water for 5 min)'],
        ['Egg','Egg white only']]}},
      {h:'Table 2: storage medium according to their efficacy and accessibility', src:'CPG p9. ++ easily available, + available, - less available. A dash in a cell means none.', table:{head:['Accessibility','Excellent','Good','Poor'], rows:[
        ['++','Milk','-','Normal Saline, Saliva'],
        ['+','-','Coconut water, Egg','-'],
        ['-','Propolis, Green tea','-','-']]}},
      {h:'Appendix 3: each storage medium', src:'CPG p34. ++ easily available, + available, - less available, - - least available. As printed: Appendix 3 gives milk and normal saline +, and propolis and green tea --, where Table 2 gives ++ and -.', table:{head:['Storage medium','Characteristics','Efficacy','Accessibility'], rows:[
        ['Hank\'s Balanced Salt Solution (HBSS)','Physiological pH, osmolality and nutrients','Excellent','- -'],
        ['Viaspan®','Physiological pH, osmolality and favourable to cell growth','Excellent','- -'],
        ['Euro-Collins®','Physiological pH and hypothermal capacity','Excellent','- -'],
        ['Minimum Essential Medium (MEM)','Nutrients, antimicrobial property and growth factors','Excellent','- -'],
        ['Milk','Small bacterial contents, isotonic, physiological pH, osmolality, unique combination of growth factors and nutrients','Excellent','+'],
        ['Propolis','Anti-inflammatory, antibacterial and antioxidant properties','Excellent','--'],
        ['Green tea','Anti-inflammatory, antibacterial and antioxidant properties','Excellent','--'],
        ['Egg white','Low microbial contamination, contains nutrients and water','Good','+'],
        ['Coconut water','Sterile, natural product and contains nutrients','Good','+'],
        ['Ricetral','Essential cells and nutrients','Good','+'],
        ['Gatorade®','Low pH and hypertonic','Poor','+'],
        ['Contact lens solution','Antimicrobial property, preservatives','Poor','+'],
        ['Normal Saline','Physiological pH and osmolality','Poor','+'],
        ['Water','Microbial contamination, hypotonic, non-physiological pH and osmolality','Very poor','++'],
        ['Saliva','Microbial contamination, hypotonic, non-physiological pH and osmolality','Very poor','++']]}}
    ]},
    {l:'Time', notes:[
      {h:'Extra-alveolar time', src:'CPG 5.1 (p8) and chapter 2 (p3)', items:[
        'Extra-alveolar time is important in determining the viability of periodontal ligament cells. Total extra-alveolar time consists of extra-alveolar dry time, and time in storage medium. For better prognosis of periodontal healing, the followings should be obtained during history taking: extra-alveolar dry time: <15 minutes; total extra-alveolar time (dry time and time in storage medium): <60 minutes (p8).',
        'However, the best prognostic predictor is extra-alveolar dry time prior to storage or replantation of avulsed permanent anterior teeth (p8).',
        'A systematic review showed that replantation of avulsed permanent teeth within 15 minutes gives a favourable long-term prognosis, with the least incidence of root resorption (p3).']},
      {h:'Table 3: tooth maturity and endodontic management', src:'CPG p11–12. Guarded prognosis*: the outcome is uncertain. For mature avulsed tooth where the apex is closed or nearly closed (<1mm), the possibility of pulp revascularisation is very minute (p10). Survival rate of replanted avulsed permanent anterior tooth ranges from 70 – 83% (p18).', table:{head:['Tooth maturity','Clinical presentation','Prognosis','Endodontic management'], rows:[
        ['Immature root','<15 min extra-alveolar dry time; <60 min in storage medium','Good','Monitor; pulp extirpation once sign and symptom present'],
        ['Immature root','>15 min extra-alveolar dry time','Guarded*','Early pulp extirpation intra-orally between 7 to14 days'],
        ['Immature root','>60 min extra-alveolar dry time or in storage medium','Poor','Extra-oral complete root canal treatment before replantation'],
        ['Mature root','<60 min extra-alveolar dry time or in storage medium','Guarded*','Early pulp extirpation intra-orally between 7 to14 days'],
        ['Mature root','>60 min extra-alveolar dry time or in storage medium','Poor','Extra-oral complete root canal treatment before replantation']]}},
      {h:'What to record and hand over', src:'CPG 4.2 (p5), Appendix 4 (p35) and p1. The form\'s identity fields are not reproduced.', items:[
        'Pre-operative assessments must be thorough and well-documented to ensure proper management of avulsed permanent anterior teeth including related and accompanying hard and soft tissues injuries. The assessments should include the following: medical history; trauma history; clinical examination; radiographic investigations; photographic records (4.2, p5).',
        'For tooth avulsion injury, please state: total extra-alveolar time; dry time; storage medium (type and time); tooth maturity (open or closed apex) (Appendix 4).',
        'Medical history (including immunization and regular medication). Previous dental treatment received for this particular injury? (State any management ie tetanus injection, analgesics, antibiotics, radiographs, replantation etc) (Appendix 4).',
        'Avulsion has also been reported as one of the common outcomes of domestic violence among women, children, adolescents and the elderly of both genders (p1).']}
    ]},
    {l:'Replanting', notes:[
      {h:'Replantation technique', src:'CPG 4.4 (p6–7). The aim is to replant the avulsed permanent anterior tooth into its socket with minimal handling. Step v, for delayed replantation, is left out here; for that tooth, the stepper\'s delayed step quotes the clinic algorithms, p12 and Table 3.', items:[
        'i. Place the tooth in normal saline. ii. Administer local anaesthesia. iii. Gently irrigate the socket with normal saline.',
        'iv. For immediate or early replantation (<15 minutes extra-alveolar dry time or <60 minutes stored in recommended storage medium): handle the tooth by its crown. Do not touch the root. Run normal saline over the tooth to remove any contamination. Gently dab with gauze soaked in normal saline if there is still residue of contamination. It is advisable at this time to estimate the length of the tooth from tip of crown to apex. This is important as baseline for future endodontic treatment if needed. Seat the tooth back gently into its socket using light finger pressure. Do not use excessive force. Avoid scraping or curettage of the socket. Avoid scraping off the root. Stabilise the tooth by splinting. Take a periapical radiograph to verify the position of replanted avulsed permanent anterior tooth.']},
      {h:'At the dental clinic', src:'CPG algorithms, p ix (immature root) and p x (mature root). Their time branches are in Table 3 (Time tab) and the delayed step. For an immature root with >15 min EAT, the algorithm gives immediate IO pulp extirpation and obturation; Table 3 gives early pulp extirpation intra-orally between 7 to14 days.', items:[
        'During replantation and stabilisation: verify position with radiograph; splint for at least 7 days; prescribe antibiotic, analgesic and mouthwash.',
        'Follow up: develop complication? Yes: refer to Dental Specialist, then definitive treatment & monitoring. No: definitive treatment & monitoring.']},
      {h:'Consent and splinting', src:'CPG 4.1 (p5) and 4.5 (p7)', items:[
        'Informed consent should be obtained from patients (above 18 years old) / parents/ caretaker/ guardians in managing avulsed permanent anterior teeth (4.1).',
        'The replanted avulsed permanent anterior tooth needs to be stabilised in position, by splinting for at least 7 days: splint the avulsed permanent anterior tooth to the adjacent firm teeth; different types of splinting methods can be utilised; splinting should be extended to at least 4 weeks if there is a concomitant alveolar bone fracture (4.5).']}
    ]},
    {l:'Follow-up', notes:[
      {h:'Follow-up intervals', src:'CPG 6.1, Key Message 3 and Recommendation 4 (p16)', items:[
        'Patients with replanted avulsed permanent anterior tooth should be reviewed at the following intervals post-replantation: 1 week; 2 weeks; 1 month; 3 months; 6 months; every 6 months until 2 years; yearly thereafter until 5 years.',
        'At every follow-up after the first month, sensibility test and radiographic examination should be performed.',
        'All cases of replanted avulsed permanent anterior teeth should be followed up for five years (Recommendation 4).',
        'During follow-up, emphasis should be placed on the recognition of clinical and radiographical characteristics which represent the development of complications. This is to ensure measures can be instituted to reduce risk of failure and early loss of replanted avulsed permanent anterior teeth (Key Message 3).']},
      {h:'Appendix 6: possible complications and expected timing of occurrence', src:'CPG p38. The text gives inflammatory root resorption at 8 months (between 5 and 12 months) post-replantation (p17), and replacement root resorption at 14 months (range between 6 – 24 months) (p18).', table:{head:['Complication','Expected timing of occurrence','Clinical findings','Radiographic findings'], rows:[
        ['Pulpal necrosis','2 weeks – 2 years','Symptomatic (pain/tender/swelling); no respond to sensibility test','No specific characteristics can be appreciated or presence of periapical radiolucency'],
        ['Inflammatory resorption','5 months – 2 years','Symptomatic (pain/tender/swelling); presence of sinus/ abscess/ swelling; the tooth is mobile (grade >1), possibly extruded; tenderness to percussion; no respond to sensibility test; crown discolouration; periodontal pocket depth >3mm, presence of bleeding on probing; presence of gingival recession','Loss of lamina dura; presence of periapical radiolucency; radiolucent saucershaped cavitation along the root surface'],
        ['Replacement resorption or ankylosis','6 months – 2 years','Asymptomatic; the tooth is immobile (grade 0); no tenderness to percussion and percussion tone is high (metallic sound); infra-occlusion of the tooth in growing patient','Loss of lamina dura and replacement of periodontal space with bone; continuous replacement of root with bone']]}}
    ]}
  ],
  refs:['Ministry of Health Malaysia. Clinical Practice Guidelines: Management of Avulsed Permanent Anterior Teeth, 3rd edition. Putrajaya: Oral Health Technology Section, Oral Health Programme, Ministry of Health Malaysia; December 2019. ISBN 978-967-16632-5-7. MOH/P/PAK/435.19(GU)-e. Available at http://www.moh.gov.my and http://www.ohd.gov.my',
    'Copyright Oral Health Programme (OHP), Ministry of Health Malaysia. Content reproduced with a copyright acknowledgement to OHP: not changed, not sold, not used to promote or endorse any product or service, and not used inappropriately or in a misleading context.',
    'It updates and supplants the 2010 edition, Management of Avulsed Permanent Anterior Teeth in Children (November 2010). Sources the CPG quotes include the National Antibiotic Guidelines, 2nd edition (Ministry of Health Malaysia, 2017) and the International Association of Dental Traumatology guidelines on avulsion of permanent teeth (2012).'],
  see:[['#trauma-walkins','Trauma walk-ins: T-RACS and HIT CT'],['#head-injury-cpg','Head injury in adults: CPG 2015'],['#children--pat','Children in the ED: where to triage a child'],['#oscc--dv','Domestic violence (OSCC)'],['#oscc--child','Suspected child abuse (OSCC)'],['#pain','Pain management (ebook): analgesia doses']]
};

/* Related department entries point to the national guideline: links only, their wording stays */
P['trauma-walkins'].see = [...(P['trauma-walkins'].see || []), ['#avulsed-tooth-cpg', 'Knocked-out permanent tooth: CPG 2019']];
P['children'].see = [...(P['children'].see || []), ['#avulsed-tooth-cpg', 'Knocked-out permanent tooth: CPG 2019']];

/* ----- CPG on Management of Geriatric Hip Fracture (MaHTAS, 2023), first edition, for patients with suspected and confirmed GHF
   (evidence on patients aged 60 years old and above) (p vi) -----
   66 PDF pages, e ISBN 978-967-2887-67-6, MOH/P/PAK/529.23(GU)-e; reviewed line by line (hip-review.md). Printed page = PDF page
   minus 15; front matter = PDF page minus 5 (the algorithm is p x). The algorithm and the tables of Appendices 3, 5 and 6 were read
   from page images as well as the text layer. Quoted as printed, with the CPG's own spelling (geriatic, ischemic, Etericoxib,
   balanced); apostrophes and quotation marks are plain; citation numbers dropped. The CPG prints no advice for patients, so there
   is no advice field. Appendix 5 (neuraxial block timings for each antiplatelet and anticoagulant) is for the anaesthetist and is
   not reproduced. The ebook's pain pathway and the department's referral notes stay as written (rules 5 and 6): where they differ
   is an open item. */
P['hip-fracture-cpg'] = {
  title:'Hip fracture in older adults: CPG 2023', grp:'cpg', src:'CPG Geriatric Hip Fracture (2023)', isnew:true, hero:'hipcpg',
  lead:'The national guideline (2023) for the older adult with hip pain after a fall: the signs, the X-ray views, CT or MRI when the X-ray is normal but a fracture is still suspected, analgesia from the first encounter and referral to orthopaedics. Doses for the elderly, the work before surgery and falls risk are in the steps and tabs below.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'CPG on Management of Geriatric Hip Fracture (MaHTAS, 2023), the first edition, for patients with suspected and confirmed GHF (evidence on patients aged 60 years old and above) (p vi). The CPG does not define geriatric by age. Its surgery chapter covers fracture neck of femur, intertrochanteric and subtrochanteric fractures (6.3, p15–22). Printed page numbers; the algorithm is on p x. Due for review in 2027.', opts:[
      ['Hip pain after a fall: is it a hip fracture? (Algorithm, p x)','life'],
      ['Referred in with a confirmed hip fracture','refd'],
      ['Walk-in after a high-energy injury','trauma'],
      ['X-ray views (chapter 4)','xr'],
      ['Normal X-ray, but a fracture is still suspected (Recommendation 1)','occ'],
      ['Hip fracture found: start in the ED, then refer','frx'],
      ['Analgesia in the elderly (Appendix 3)','pain'],
      ['Falls risk (Appendix 6)','fall']]},

    /* Algorithm on management of geriatric hip fracture (p x) */
    life:{q:'Life-threatening medical conditions?', hint:'Algorithm (p x): assessment by ETD team (which include haemodynamic status, X-ray of pelvis/femur/chest, blood investigations, etc.). *Stable cases i.e. without life-threatening medical conditions; unstable cases should be referred to emergency department. The CPG does not list the conditions.',
      opts:[['Yes','icu'],['No: stable','sx']]},
    icu:{end:'refer', title:'Refer and treat accordingly at Intensive Care Unit/High Dependency Unit', items:[
      'Life-threatening medical conditions: refer and treat accordingly at Intensive Care Unit/High Dependency Unit (Algorithm, p x)',
      '*Stable cases i.e. without life-threatening medical conditions; unstable cases should be referred to emergency department (Algorithm, p x)'],
      links:[['#trauma-walkins','Trauma walk-ins: T-RACS and HIT CT'],['#yellow-zone','Yellow Zone flow']],
      gap:'CPG Algorithm (p x). The CPG does not list the life-threatening medical conditions, and names units, not an MTS level or zone. The department\'s uptriage and trauma walk-in rules are linked.'},

    /* Chapter 3, Signs and symptoms (p4) */
    sx:{check:'any', q:'Signs or symptoms of a hip fracture?', hint:'Chapter 3 (p4): patients with GHF often present with a history of fall. Geriatric patients with hip pain following a fall need to be assessed to rule out hip fracture (boxed statement, p4). Those with minimally impacted fracture may continue to bear weight or walk (p4).',
      items:['Hip pain and/or inability to weight bear or walk','Vague pain at the buttock, groin, knee or thigh (occult GHF)','The affected lower limb may be externally rotated and shortened (in a displaced hip fracture)','Bruising, deformity, swelling and ecchymosis can occur at the site of fracture (in intertrochanteric and subtrochanteric fractures)','Palpation on the affected hip joint may elicit localised tenderness','Patient cannot perform straight leg raising','Movement of the affected hip joint causes pain'],
      opts:[['Yes, present','xr'],['None','nosx']]},
    nosx:{end:'neutral', title:'None of the signs or symptoms in chapter 3', items:[
      'Geriatric patients with hip pain following a fall need to be assessed to rule out hip fracture (boxed statement, p4)',
      'Patients with occult GHF may present with vague pain at the buttock, groin, knee or thigh. Those with minimally impacted fracture may continue to bear weight or walk (p4)'],
      links:[['#hip-fracture-cpg--xr','The X-ray views'],['#hip-fracture-cpg--fall','Falls risk (Appendix 6)']],
      gap:'CPG chapter 3 (p4). The CPG gives no rule that rules out a hip fracture without imaging: not in the source.'},

    /* Chapter 4, Diagnosis (p5), and Recommendation 1 (p6) */
    xr:{step:'Plain radiographs according to standard views', items:[
      'Patients with suspected geriatric hip fracture (GHF) should have plain radiographs according to standard views to confirm the diagnosis (Recommendation 1, p6)',
      'The plain radiographs of the affected hip should include the following views: anterior-posterior (AP) view of femur; lateral view of femur; AP pelvis view (with 15° lower limb internal rotation in neutral abduction-adduction). Comparison with the unaffected hip can be helpful (p5)',
      'Assessment by ETD team (which include haemodynamic status, X-ray of pelvis/femur/chest, blood investigations, etc.) (Algorithm, p x)',
      'The majority of GHF are easily identified on plain radiographs; however, a normal plain radiograph does not exclude a fractured hip (p5)',
      'Adequate analgesia is key in GHF care and should be initiated at the first encounter (p7): Analgesia in the elderly, on the menu'], next:'xres'},
    xres:{q:'What does the X-ray show?', hint:'Algorithm (p x). Referral to orthopaedic services includes late presentation of GHF (p6), which the CPG does not define.',
      opts:[['Hip fracture confirmed by x-ray','frx'],['Normal X-ray, but a hip fracture is still suspected','occ'],['No hip fracture','nofx']]},
    occ:{check:'any', q:'Highly suspicious hip fracture despite normal radiographs?', hint:'Chapter 4 (p5): patients with highly suspicious hip fracture, despite normal radiographs, may require alternative forms of imaging. They are those with the features below (the CPG prints the last two as one bullet). The CPG does not define persistent.',
      items:['Persistent hip pain after fall','Inability to bear weight','Pain on attempted straight leg raising, passive rotation or axial loading tests'],
      opts:[['Yes, present','occct'],['None','nofx']]},
    occct:{end:'refer', title:'Possible occult hip fracture: CT or MRI, and refer to orthopaedics', items:[
      'Those with occult GHF (presence of symptoms and signs of hip fractures despite normal plain radiographs) should have computed tomography scan or magnetic resonance imaging done to rule out the fracture (Recommendation 1, p6)',
      'Refer to orthopaedic services: suspected occult GHF (normal plain radiographs) for confirmation of diagnosis (p6)',
      'In occult GHF, computed tomography (CT) is the modality of choice as it is widely available locally even though magnetic resonance imaging (MRI) has higher accuracy (p5)',
      'National Institute for Health and Care Excellence (NICE) recommends MRI to be offered if hip fracture is suspected despite negative plain radiograph of the hip. If it is not available within 24 hours or is contraindicated, CT scan should be considered (p5)',
      'Algorithm (p x): possible occult hip fracture (normal x-ray), refer to orthopaedics, computed tomography scan/magnetic resonance imaging required and done. Fracture: ward admission and pre-operative optimisation (medical/anaesthesia). No fracture: treat accordingly'],
      links:[['#hip-fracture-cpg--frx','Fracture found: start in the ED'],['#hip-fracture-cpg--pain','Analgesia in the elderly'],['#safe-practice--limb','Department: tenderness with a normal X-ray'],['#emacc','EMACC follow-up (department)']],
      gap:'CPG Recommendation 1 (p6), chapters 4 and 5 (p5–6) and the Algorithm (p x). The CPG does not say whether the ED or the orthopaedic team orders the CT or MRI, how soon, or what treat accordingly means when it shows no fracture. The department\'s notes treat localised tenderness with a normal X-ray as a fracture with a follow-up X-ray, and EMACC reviews a suspected fracture with a normal X-ray within 3 days: which the Green Zone follows for an older adult is an open item.'},

    /* Hip fracture confirmed: 6.1 (p7–10), chapter 5 (p6), Recommendation 11 (p23) */
    frx:{step:'Start in the ED: hip fracture confirmed', items:[
      'Adequate analgesia is key in GHF care and should be initiated at the first encounter. Unfortunately, pain is often undertreated and may increase the risk of other medical conditions including delirium (p7). Doses: Analgesia in the elderly, on the menu',
      'Analgesia should be prescribed adequately in geriatric hip fractures. Peripheral nerve block may be considered if pain persists and resources are available (Recommendation 2, p8)',
      'GHF patients should be immobilised in bed by resting the affected limb in a comfortable position to reduce pain (p8)',
      'Traction should not routinely be used in geriatric hip fracture (Recommendation 3, p9)',
      'The assessment of delirium can be conducted using validated tools e.g. 4AT Delirium Detection Tool (p10)',
      'All patients with GHF should receive early multidisciplinary care to ensure optimal analgesia, immobilisation and appropriate medical management (p7)'], next:'ortho'},
    ortho:{end:'refer', title:'Refer to orthopaedics', items:[
      'The CPG DG opines that the following criteria should be used to refer to orthopaedic services e.g.: confirmed GHF (by imaging) for further management; suspected occult GHF (normal plain radiographs) for confirmation of diagnosis; late presentation of GHF (p6)',
      'Algorithm (p x): refer to orthopaedics, then ward admission and pre-operative optimisation (medical/anaesthesia) with early multidisciplinary care, then the operating theatre for surgery',
      'Surgery should be performed within 48 hours of admission* in medically stable geriatric hip fracture patients. *after physical consultation by orthopaedic team (Recommendation 11, p23)',
      'Patients with GHF and on anti-platelets, especially clopidogrel, are at risk of bleeding during surgery. Surgery will usually be delayed for 5 - 7 days after withholding the drug. However, delaying the surgery is associated with increased risks of complications and mortality (p15)',
      'Haemoglobin, VTE prophylaxis, nutrition, delirium and the comprehensive geriatric assessment: the Before surgery tab'],
      links:[['#referral-rules--ortho','How to refer in HKL (department)'],['#hip-fracture-cpg--frx','Start in the ED'],['#hip-fracture-cpg--pain','Analgesia in the elderly']],
      gap:'CPG chapter 5 (p6), Recommendation 11 (p23), p15 and the Algorithm (p x). The 48 hours run from admission; the CPG sets no time from ED arrival to admission, does not list what the ED hands over or documents, does not define late presentation, does not say who starts VTE prophylaxis, oral nutritional support or the delirium assessment, and gives no fluid regimen or pressure care measures.'},
    refd:{q:'Confirmed hip fracture referred from another healthcare facility: stable?', hint:'Algorithm (p x): confirmed hip fracture case* referred from other healthcare facilities goes to refer to orthopaedics. *Stable cases i.e. without life-threatening medical conditions; unstable cases should be referred to emergency department.',
      opts:[['Stable: without life-threatening medical conditions','ortho'],['Not stable','icu']]},
    trauma:{end:'neutral', title:'Walk-in after a high-energy injury', items:[
      'A hip fracture is a break in the proximal part of the femur bone and/or around the hip joint. In older adults, it usually occurs following low energy trauma (p1)'],
      links:[['#trauma-walkins','Trauma walk-ins: T-RACS and HIT CT'],['#hip-fracture-cpg--life','The CPG algorithm']],
      gap:'The CPG does not separate a high-energy injury from a fall: its algorithm (p x) takes a suspected hip fracture case from scene of injury/home/healthcare facilities alike. The department\'s trauma walk-in rule checks the T-RACS criteria first, then the high-impact trauma CT criteria.'},

    /* No hip fracture: Algorithm (p x), then falls (7.1, p27; Appendix 6, p46–47) */
    nofx:{step:'Refer to relevant disciplines: no hip fracture (Algorithm, p x)', items:[
      'Patients with highly suspicious hip fracture, despite normal radiographs, may require alternative forms of imaging (p5): Normal X-ray, on the menu',
      'Geriatric population should be screened and assessed for falls risk. Education about falls prevention should be offered accordingly (Recommendation 14, p27)',
      'Modifiable risk factors for GHF e.g. impaired gait and balanced, low vision, low bone density, alcohol consumption, cigarette smoking and hazardous living environment are important to be identified and addressed (boxed statement, p4)'], next:'fall'},
    fall:{check:'any', q:'Falls risk: presence of fall severity? (one is enough)', hint:'Algorithm on risk stratification, assessment and interventions for community-dwelling older adults (Appendix 6, p47), adapted from the World guidelines for falls prevention (2022). Presenting to healthcare with fall or related injury (70% risk of ≥1 fall in the next year) leads straight to this question. Its footnote defines fall severity as fall with injuries (severe enough to consult a physician), laying on the ground with no capacity to get up, a visit to emergency room or loss of consciousness/suspected syncope; the list below, from the next footnote, leaves out the visit to emergency room.',
      items:['Injury','≥2 falls last year','Frailty','Lying on the floor/unable to get up','Loss of consciousness/suspected syncope (syncope suspicion should trigger evaluation/management)'],
      opts:[['Yes, present','fhi'],['None','gait']]},
    gait:{q:'Gait and balance impaired?', hint:'Appendix 6 algorithm (p47): gait speed ≤0.8 m/s or alternatively Timed up and go >15 seconds. The assessment table (p46) prints Timed Up and Go (high risk >13.5 sec).',
      opts:[['Yes, impaired','fmid'],['No','flo']]},
    fhi:{end:'neutral', title:'High Risk Goal: Secondary prevention and treatment', items:[
      'Multifactorial falls risk assessment, then individualised-tailored interventions, then follow-up in 30 to 90 days (Appendix 6 algorithm, p47)',
      'Individuals at high risk of falls should be offered a comprehensive multifactorial falls risk assessment (p27)',
      'High risk individuals with falls can deteriorate rapidly and close follow-up is recommended which is guided on frequency of consequent health service utilisation (p47)',
      'Loss of consciousness/suspected syncope: syncope suspicion should trigger evaluation/management (p47)',
      'Assessment of each risk factor and the interventions: the Falls tab (Appendix 6, p46)'],
      links:[['#outpatient-referral','Clinic referrals: elderly after a fall (department)'],['#syncope','Syncope (ebook)'],['#safe-practice--limb','Department: before discharging a limb injury']],
      gap:'CPG Appendix 6 (p46–47) and 7.1 (p27). The CPG does not say who performs the multifactorial falls risk assessment, or where, and gives no discharge criteria or return advice for an older adult without a hip fracture: not in the source. The department\'s draft clinic criteria send an elderly patient after a fall to the Physician\'s Clinic.'},
    fmid:{end:'neutral', title:'Intermediate Risk Goal: Secondary prevention to improve major risk factors', items:[
      'Tailored exercises on balance, gait and strength (physiotherapist referral); education on falls prevention; reassess in one year (Appendix 6 algorithm, p47)',
      'Exercise on balance/leg strength is recommended for the intermediate group which may also be referred to a physiotherapist (p47)',
      'Poor gait, strength and balance: refer for physical therapy; engagement in exercise programmes that involve balance, functional exercise and resistance training (Appendix 6, p46)'],
      links:[['#outpatient-referral','Clinic referrals from the ED (department)'],['#safe-practice--limb','Department: before discharging a limb injury']],
      gap:'CPG Appendix 6 (p46–47). The CPG gives no discharge criteria or return advice for an older adult without a hip fracture: not in the source.'},
    flo:{end:'neutral', title:'Low Risk Goal: Primary Prevention', items:[
      'Education on falls prevention; advice on physical activity/exercise; reassess in one year (Appendix 6 algorithm, p47)',
      'All older adults should be advised on falls prevention and physical activity (p27)'],
      links:[['#safe-practice--limb','Department: before discharging a limb injury'],['#trauma-walkins--minor','Department: continue the trauma survey']],
      gap:'CPG Appendix 6 (p46–47) and 7.1 (p27). The CPG gives no discharge criteria or return advice for an older adult without a hip fracture: not in the source.'},

    /* Analgesia: 6.1a (p7–8), Recommendation 2 (p8), Appendix 3 (p39–40) */
    pain:{q:'Analgesia for an older adult with a suspected or confirmed hip fracture: which?', hint:'Analgesia should be prescribed adequately in geriatric hip fractures (Recommendation 2, p8). The approach to management of acute pain is as stated in the Ministry of Health\'s "Pain as the 5th Vital Sign" guideline with strong emphasis on pain assessment and pharmacotherapy (p7). In the Guidelines of Pain Management in the Elderly by MoH, the followings were recommended (p7):',
      info:['Paracetamol is considered as the first-line treatment for acute pain in older patients due to its effectiveness and good safety profile','Opioid therapy may be considered for patients with moderate or severe pain','Selective cyclooxygenase-2 (COX-2) inhibitors must be used with caution in older people','Non-selective non-steroidal anti-inflammatory drugs may be cautiously used if other safer treatments have not provided adequate pain relief'],
      opts:[['Paracetamol, first line','para'],['Moderate or severe pain: opioids','opi'],['COX-2 inhibitors and NSAIDs','cox'],['Pain persists: peripheral nerve block','pnb']]},
    para:{end:'neutral', title:'Paracetamol', items:[
      'Paracetamol: 325 - 500 mg 4-hourly or 500 - 1,000 mg 6-hourly per oral (PO) (Appendix 3, p39)',
      'Maximum dose usually 4 g daily (p39)',
      'Reduce maximum dose 50% to 75% in patients with hepatic insufficiency or history of alcohol abuse (p39)',
      'Paracetamol is considered as the first-line treatment for acute pain in older patients due to its effectiveness and good safety profile (p7)'],
      links:[['#hip-fracture-cpg--opi','Opioids'],['#pain','Pain management (ebook)']],
      gap:'CPG Appendix 3 (p39) and 6.1a (p7). The CPG gives no dose by weight, and does not say whether reduce maximum dose 50% to 75% means by that fraction or to it.'},
    opi:{end:'neutral', title:'Moderate or severe pain: opioids', items:[
      'Opioid therapy may be considered for patients with moderate or severe pain (p7)',
      'Morphine: 2 - 3 mg 4 - 6-hourly (subcutaneous (SC) or PO). Most commonly used for episodic or breakthrough pain. Intravenous (IV) morphine may be considered in severe pain (refer to Guidelines of Pain as 5th Vital Sign) (Appendix 3, p39)',
      'Oxycodone: 2.5 - 5 mg 4 - 6-hourly PO. Useful for acute recurrent, episodic or breakthrough pain (p39)',
      'Dihydrocodeine tartrate (DF118): 30 - 60 mg 6 - 8-hourly PO. Useful for acute recurrent, episodic or breakthrough pain (p40)',
      'Tramadol: 50 mg 6 - 12-hourly PO. Monitor side effects e.g. confusion, drowsiness, constipation and nausea. Risk of seizures in high doses. May precipitate serotonin syndrome if used with selective serotonin reuptake inhibitors. Use with caution in renal impairment; if creatinine clearance (CrCl) <30 millilitres per minute (mL/min), requires dose reduction (p40)',
      'In addition, those with post-operative infection e.g. pneumonia or urinary tract infection and the use of morphine also have increased risk of developing delirium (p10)'],
      links:[['#pain--mp','Ebook: IV morphine pain protocol'],['#hip-fracture-cpg--pnb','Peripheral nerve block']],
      gap:'CPG Appendix 3 (p39–40), 6.1a (p7) and p10. For IV morphine the CPG refers to the MoH Pain as the 5th Vital Sign guideline and prints no IV dose; the ebook\'s morphine pain protocol is linked. The CPG does not say by how much to reduce tramadol when the CrCl is <30.'},
    cox:{end:'neutral', title:'COX-2 inhibitors and NSAIDs: with caution', items:[
      'Selective cyclooxygenase-2 (COX-2) inhibitors must be used with caution in older people. Non-selective non-steroidal anti-inflammatory drugs may be cautiously used if other safer treatments have not provided adequate pain relief (p7)',
      'Celecoxib: 200 mg twice daily (BD) for 2 - 5 days, then 200 mg once daily (OD) PO (Appendix 3, p39)',
      'Etericoxib: 90 mg OD PO (p39)',
      'Higher doses are associated with higher incidence of gastrointestinal (GI) and cardiovascular side effects. Consider prescribing proton-pump inhibitor to reduce GI side effects and when patients on aspirin (p39)'],
      links:[['#hip-fracture-cpg--para','Paracetamol'],['#pain','Pain management (ebook)']],
      gap:'CPG Appendix 3 (p39) and 6.1a (p7). The CPG names no non-selective NSAID and gives no dose for one, or a total length for celecoxib. Etericoxib is spelt as printed; the Quick Reference prints Etoricoxib.'},
    pnb:{end:'neutral', title:'Pain persists: peripheral nerve block', items:[
      'Peripheral nerve block may be considered if pain persists and resources are available (Recommendation 2, p8)',
      'If pain persists and resources are available, regional nerve blocks with ultrasound guidance can be administered to reduce pain and minimise sedation and other potential complications caused by opioids (p7)',
      'In an RCT on GHF comparing pre-operative nerve stimulator-guided femoral nerve block and fascia iliaca compartment block, the result showed: nerve blocks contributed in mean reduction of pain score; femoral nerve block was more effective in pain reduction and also required less morphine (p7–8)',
      'Training, credentialing and privileging are required to perform the nerve blocks procedures (p8)'],
      links:[['#pain--epc','Ebook: regional anaesthesia and APS']],
      gap:'CPG 6.1a (p7–8) and Recommendation 2 (p8). The CPG prints no local anaesthetic, dose or volume for a nerve block, and does not say who in the ED may perform one: not in the source.'}
  },

  /* Reference tabs: each note names its CPG page */
  notes:[
    {l:'Analgesia', notes:[
      {h:'Principles of analgesic prescriptions in the elderly', src:'Appendix 3 (p39), adapted from the MoH Guidelines for Pain Management in the Elderly (1st edition, 2018) and Management of Cancer Pain (2010). The doses are in Analgesia in the elderly, on the menu.', items:[
        'Timing of medication administration is important. Severe, episodic pain requires treatment of a rapid onset of action and short duration. For continuous pain, regular analgesia is the most effective, possibly using modified release formulations.',
        'Start with a low dose single agent at a time, followed by low incremental dose titration.',
        'Allow adequate intervals for assessment of the effect before considering another agent.',
        'Combination therapy using agents with different mechanisms of action may have synergistic effects to provide greater pain relief with fewer side effects than higher doses of a single agent.',
        'Consider the use of non-pharmacological strategies, e.g physiotherapy and cognitive behavioural approaches, in combination with medication.',
        'Treatment should be monitored regularly and adjusted if required to improve effectiveness and minimise side effects.',
        'On choosing an analgesic agent, co-morbidity, contraindications and possibilities of drug-disease and drug-drug interactions should be considered.']},
      {h:'Around the operation', src:'Recommendation 12 (p24). It refers to Appendix 4 for the principles of analgesic prescriptions; they are in Appendix 3.', items:['Analgesia should be provided peri-operatively in geriatric hip fractures. Multimodal analgesia is the preferred choice.']}
    ]},
    {l:'Before surgery', notes:[
      {h:'Surgery', src:'Chapters 1 and 6 (p1, p7). The time to surgery is in Refer to orthopaedics.', items:[
        'In general, the definitive management for geriatric hip fracture (GHF) is surgery. These fractures are associated with significant morbidity and mortality, with one-year mortality after the fracture approaching 30% (p1).',
        'Non-surgical or conservative treatment is rarely an option and only considered when the risk of the surgery outweighs benefits (e.g. approaching end of life, severe acute medical illness, etc.) or patient\'s refusal. However, such treatment is associated with prolonged pain (p7).']},
      {h:'Delirium', src:'6.1c (p10). The CPG names the 4AT but does not print it.', items:[
        'Delirium is a common complication among older patients with hip fractures as these patients often suffer from various co-morbidities and have poor compensatory capacity. The assessment of delirium can be conducted using validated tools e.g. 4AT Delirium Detection Tool.',
        'Therefore, it is important to closely monitor for delirium and institute delirium prevention and treatment strategies for the older patients with hip fracture, as it has been shown that patients with hip fracture who develop delirium have an increased perioperative, 30-day and overall mortality at follow-up.']},
      {h:'Haemoglobin', src:'Boxed statement (p12)', items:['Ideally, a haemoglobin (Hb) level of ≥10 g/dL is aimed for surgery on GHF. However, patients with Hb 8 - 10 g/dL may undergo the surgery if they are asymptomatic of anaemia and with no underlying ischemic heart disease, provided that blood is available in operating theatre.']},
      {h:'Antiplatelets and anticoagulants', src:'6.2b (p15). Appendix 5 (p42–45) gives the time intervals before and after neuraxial blocks for each antiplatelet agent and anticoagulant, for the anaesthetist; it is not reproduced here.', items:[
        'Patients with GHF and on anti-platelets, especially clopidogrel, are at risk of bleeding during surgery. Surgery will usually be delayed for 5 - 7 days after withholding the drug. However, delaying the surgery is associated with increased risks of complications and mortality.',
        'As there is no evidence on the difference in outcomes between spinal and general anaesthesia, for patients on anti-platelet and anti-coagulation who have contraindications to spinal anaesthesia, general anaesthesia may be administered for them.']},
      {h:'VTE prophylaxis', src:'Recommendation 6 (p13). No dose or start time is printed. There is no evidence on prophylaxis VTE on GHF alone (p12).', items:[
        'Patients with geriatric hip fracture should be given venous thromboembolism (VTE) prophylaxis (chemoprophylaxis and/or mechanical prophylaxis). Low molecular weight heparin (LMWH) is the preferred choice for chemoprophylaxis peri-operatively. Post-operatively VTE prophylaxis should be extended up to 4 - 5 weeks with either an anti-coagulant (LMWH, direct oral anticoagulants, warfarin) or anti-platelet (aspirin only) according to individual deep vein thrombosis risk assessment.']},
      {h:'Nutrition and frailty', src:'Recommendations 5 (p11, spelt as printed) and 4 (p10)', items:[
        'Oral nutritional support should be considered for all patients with geriatic hip fractures.',
        'Comprehensive geriatric assessment should be performed by the attending physician for all frail* geriatric patients with hip fracture. *Frailty is an aging-related syndrome of physiological decline, characterised by marked vulnerability to adverse health outcomes.']}
    ]},
    {l:'Falls', notes:[
      {h:'Screening', src:'7.1 (p27) and Recommendation 14 (p27)', items:[
        'CDC reports that >95% of GHF are caused by falls. Two guidelines recommend opportunistic screening at least annually on older adults of their risk of falls during a medical encounter. Three key questions have good sensitivity in screening risk of falls i.e.: Have you fallen in the past year? Do you feel unsteady when standing or walking? Do you have worries about falling?',
        'All older adults should be advised on falls prevention and physical activity. Individuals at high risk of falls should be offered a comprehensive multifactorial falls risk assessment.',
        'Geriatric population should be screened and assessed for falls risk. Education about falls prevention should be offered accordingly (Recommendation 14).']},
      {h:'Assessment of falls risk factors and interventions to reduce identified risk factors', src:'Appendix 6 (p46), from the Malaysian Osteoporosis Society, Management of Osteoporosis 2022 (3rd edition)', table:{head:['Assessment','Interventions'], rows:[
        ['Evaluate lower limb muscle strength, gait, and balance. Timed Up and Go (high risk >13.5 sec)','Poor gait, strength and balance: refer for physical therapy; engagement in exercise programmes that involve balance, functional exercise and resistance training'],
        ['Identify medications that increase fall risk','Medication(s) likely to increase fall risk: optimise medications by stopping, switching or reducing dosage (especially for psychoactive medications)'],
        ['Ask about potential home hazards (e.g. slippery bathroom floor, loose rugs)','Home hazards likely to increase fall risk: refer to occupational therapist to evaluate home safety assessment ± modification'],
        ['Measure positional blood pressure (supine and standing blood pressure measurement)','Orthostatic hypotension observed: review medications; encourage adequate hydration; consider use of compression stockings, abdominal binders or physical manoeuvres'],
        ['Check visual acuity','Visual impairment observed: refer ophthalmologist/optometrist; avoid wearing multifocal glasses when walking, particularly on stairs'],
        ['Assess feet and footwear','Feet or footwear issues identified: appropriate treatment for foot problem identified; advise wearing well-fitted shoes indoors and outdoors'],
        ['Assess vitamin D intake','Vitamin D deficiency observed or likely: recommend daily vitamin D (800 - 1000 IU) supplement for individuals with proven vitamin D deficiency'],
        ['Previous history of falls OR fear of falling','Provide falls education and information to all patients; regular follow-up to ensure adherence to interventions']]}},
      {h:'The next fracture', src:'7.1 (p27) and 7.2 (p28)', items:[
        'Fracture Liaison Service has become an important component of management in secondary fracture prevention (p28).',
        'For further information on the management of osteoporosis and fall prevention, refer to CPG on Management of Osteoporosis (3rd Edition) (p27).']}
    ]}
  ],
  refs:['Ministry of Health Malaysia. Clinical Practice Guidelines: Management of Geriatric Hip Fracture. Putrajaya: Malaysian Health Technology Assessment Section (MaHTAS), Medical Development Division; 2023. e ISBN 978-967-2887-67-6. MOH/P/PAK/529.23(GU)-e. Available at https://www.moh.gov.my',
    'Copyright MaHTAS. Content reproduced with a copyright acknowledgement to MaHTAS: not changed, not sold, not used to promote or endorse any product or service, and not used in an inappropriate or misleading context.',
    'Adapted in the CPG: Appendix 3 from MoH guidelines on pain in the elderly (2018) and cancer pain (2010); Appendix 6 from the Malaysian Osteoporosis Society (2022) and the World guidelines for falls prevention and management for older adults (Age Ageing, 2022). It also refers to the AAOS (2021) and NICE (2023) hip fracture guidelines.'],
  see:[['#pain','Pain management (ebook)'],['#referral-rules--ortho','Orthopaedic referral (department)'],['#gz-rules--wait','Patients who should not wait outside (department)'],['#head-injury-cpg--hr','Fall with a head injury, aged 65 or over (CPG 2015)'],['#trauma-walkins','Trauma walk-ins: T-RACS and HIT CT'],['#outpatient-referral','Clinic referrals: elderly after a fall (department)']]
};

/* Links from related entries to the national guideline: links only, their wording stays (rules 5 and 6) */
P['pain'].see = [...(P['pain'].see || []), ['#hip-fracture-cpg--pain', 'Hip fracture CPG (2023): analgesia in the elderly']];
P['referral-rules'].nodes.orthoc.links = [...(P['referral-rules'].nodes.orthoc.links || []), ['#hip-fracture-cpg--frx', 'Hip fracture in an older adult: CPG 2023']];
/* Where the CPG asks for more than the department's notes (open item): a suspected hip fracture in an older adult with a normal
   X-ray gets CT or MRI and an orthopaedic referral (Recommendation 1, p6; chapter 5, p6), where the notes give a follow-up X-ray
   or EMACC within 3 days */
P['referral-rules'].nodes.orthcl.links = [...(P['referral-rules'].nodes.orthcl.links || []), ['#hip-fracture-cpg--occ', 'Older adult, normal hip X-ray: CPG 2023']];
P['safe-practice'].nodes.limb.links = [...(P['safe-practice'].nodes.limb.links || []), ['#hip-fracture-cpg--occ', 'Older adult, normal hip X-ray: CPG 2023']];
/* For engine.js, not a data file (check-data.js okHref does not accept #calc-pain or #calc-analgesia in data files):
   CALC_SEE['hip-fracture-cpg'] = [['#calc-pain', 'Pain scales (PAINAD)']];
   #calc-analgesia computes the ebook's weight-based doses, not this CPG's Appendix 3 doses: add it only with that label. */

/* ----- CPG Management of Rhinosinusitis in Adolescents and Adults (MaHTAS, 2016), for patients aged >12 years old (p iii) -----
   51 PDF pages, ISBN 978-967-0769-63-9; reviewed line by line (sinusitis-review.md). Printed page = PDF page minus 16; the
   front matter is in roman numerals, PDF page minus 5 (the algorithms are p vii to xi). The copyright page (PDF 2) and the key
   recommendations (PDF 3) carry no printed number. Appendix 5 is printed on p31-32 (the contents say 27). Every page used has a
   text layer except Figure 1's box (p4) and Figure 9 (p18), read from page images; the Appendix 5 fluticasone row was checked on
   the image because the text layer drops its ≥. Copyright MaHTAS: reproduction allowed with acknowledgement, unchanged. Quoted as
   printed, with the CPG's own spelling (ophtalmoplegia, otorhinolaringology, polyphosis, ºC); apostrophes are plain. There is no
   ebook pathway for rhinosinusitis; the department's notes linked here stay as written (rules 5 and 6). Integration: add
   id:'sinusitis-cpg' to its CPG_SHELF card, 'sinuscpg' to TILE_KEYS, and to CALC_SEE
   'sinusitis-cpg':[['#calc-analgesia', 'Analgesia by weight']] (a #calc-analgesia link in the data would fail okHref). */
P['sinusitis-cpg'] = {
  title:'Rhinosinusitis (sinusitis): CPG 2016', grp:'cpg', src:'CPG Rhinosinusitis in Adolescents and Adults (2016)', isnew:true, hero:'sinuscpg',
  lead:'The national guideline (2016) for adolescents and adults (over 12) with a blocked nose and facial pain: urgent signs first, then common cold or acute rhinosinusitis (sinusitis), its severity, the antibiotic decision and doses, and when to refer to ORL. Diagnosis, tests and drug tables are in the tabs below; the nasal spray technique is the discharge advice.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'CPG Management of Rhinosinusitis in Adolescents and Adults (MaHTAS, 2016), for all adolescents and adults (patients aged >12 years old) with rhinosinusitis (RS) (p iii). Printed page numbers; the algorithms are on p vii to xi. It was due for review in 2020.', opts:[
      ['Blocked nose and facial pain: start here (Algorithms 1 and 3)','rf'],
      ['Antibiotic or not? (4.1.2 and Recommendation 4)','abx'],
      ['Back again: not better on treatment (Algorithms 1 and 4)','back'],
      ['Early referral to ORL (6.1 and Algorithm 3)','early'],
      ['Symptoms for 12 weeks or more (Algorithm 2)','crs']]},

    /* Urgent referral: 6.1 (p12), 6.2 (p13) and Algorithm 3 (p ix) */
    rf:{check:'any', q:'Any indication for urgent referral (within 24 hours)?', hint:'6.1 (p12) and 6.2 (p13), with Algorithm 3 (p ix). The first five are the orbital complications (Figure 8, p13). Algorithm 3 prints severe frontal headache and forehead swelling; the text adds retro-orbital and (subperiosteal abscess).',
      items:['Periorbital oedema/erythema','Displaced globe','Double vision','Ophtalmoplegia/restricted eye movement','Reduced visual acuity','Severe frontal/retro-orbital headache','Forehead swelling (subperiosteal abscess)','Neurological manifestations e.g. meningitis, altered consciousness, seizure','Septicaemia','Chronic rhinosinusitis: severe pain or swelling of the sinus areas in particular immunocompromised patients such as uncontrolled diabetes, end-stage renal failure, patient with human immunodeficiency virus (HIV)'],
      opts:[['Yes, present','urg'],['None','dx']]},
    urg:{end:'refer', title:'Urgent referral to the ORL centre (within 24 hours)', items:[
      'Urgent referral (within 24 hours) is required (6.1, p12). **Urgent referral: within 24 hours (Algorithm 3, p ix)',
      'At the ORL centre, ARS with orbital or intracranial complications: hospital admission; nasal endoscopy; CT and/or MRI scan; culture and sensitivity; symptomatic relief; topical steroids; intravenous antibiotics and/or surgery (Algorithm 4, p x)',
      'Surgery should be considered in acute rhinosinusitis with orbital or intracranial complications (Recommendation 8, p20). Indications for surgery in ARS are presence of orbital or intracranial abscess on CT scan or no clinical improvement after 24 - 48 hours of intravenous antibiotics (p20)',
      'Computed tomography scan of the paranasal sinuses should be considered in rhinosinusitis when: medical therapy fails; surgery is planned; complications are suspected (Recommendation 2, p9). MRI may be useful in cases of diagnostic uncertainty or when intracranial complications are suspected (p9)'],
      links:[['#referral-rules--dept','Referral rules: other departments and clinics']],
      gap:'CPG 6.1 and 6.2 (p12–13), Algorithms 3 and 4 (p ix–x), Recommendations 2 and 8 (p9, p20). The CPG gives no ED steps before ORL takes over: it names no intravenous antibiotic or dose, gives no sepsis care, and does not say who orders the CT. How within 24 hours maps to the ORL on-call referral in HKL is for the department.'},

    /* Algorithm 1, Management of acute rhinosinusitis for primary care and non-ORL centre (p vii), modified from EPOS 2012 */
    dx:{check:'all', q:'Presence of ≥2 symptoms one of which should be nasal obstruction or purulent/greenish nasal discharge?', hint:'Algorithm 1 (p vii): ± facial pain, headache; ± smell disturbance. Examination: anterior rhinoscopy (Recommendation 1, p9). Plain radiography is not recommended in the management of rhinosinusitis (Recommendation 2, p9). Nasal swab should not be performed in rhinosinusitis (Recommendation 3, p11).',
      items:['Nasal obstruction or purulent/greenish nasal discharge','At least one more symptom: the other of those two, facial pain, headache or smell disturbance'],
      opts:[['Both met','dur'],['Not met','notrs']]},
    notrs:{end:'neutral', title:'Does not meet the symptom criteria for rhinosinusitis', items:[
      'Clinical definition of rhinosinusitis in adults: inflammation of the nose and the paranasal sinuses characterised by two or more symptoms, one of which should be either nasal blockage/obstruction/congestion or nasal discharge (anterior/posterior nasal drip): ± facial pain/pressure; ± reduction or loss of smell (4.1, p3)',
      'The clinical features that differentiate rhinosinusitis from allergic rhinitis and allergic fungal rhinosinusitis are in the Diagnosis tab (chapter 5, p12)'],
      gap:'CPG 4.1 (p3) and Algorithm 1 (p vii). The CPG covers rhinosinusitis only: it gives no route for other causes of facial pain, headache or a blocked nose.'},
    dur:{q:'How long, and which way are the symptoms going?', hint:'ARS is defined as worsening of symptoms after five days or symptoms persist after 10 days and less than 12 weeks. If the duration of symptoms is less than five days, it is diagnosed as acute viral RS or commonly known as common cold (4.1.1, p3). Algorithm 1 (p vii) puts common cold and mild ARS under the same box with no rule between them, and has no box for symptoms of 5 to 10 days that neither improve nor increase.',
      opts:[['Symptoms <5 days or improving thereafter: common cold','cold'],['Symptoms <5 days or improving thereafter: mild ARS, VAS = 0 to 3','mild'],['Symptoms increasing after 5 days or persistent after 10 days','sev'],['Duration ≥12 weeks: chronic rhinosinusitis','crs']]},
    cold:{end:'discharge', title:'Common cold: treat accordingly', items:[
      'Common cold: treat accordingly (Algorithm 1, p vii)',
      'Viral RS is a self-limiting disease that is managed symptomatically with analgesic or antipyretic (p14)',
      'Topical or systemic decongestants may offer additional symptomatic relief in VRS (p18). Topical decongestants should not be prescribed for more than two weeks due to rebound phenomenon (p19)',
      'Symptoms increasing after 5 days or persistent after 10 days: acute rhinosinusitis (Algorithm 1)'],
      links:[['#sinusitis-cpg--sev','Acute rhinosinusitis: severity'],['#pain','Pain management (ebook): analgesic doses']],
      gap:'CPG Algorithm 1 (p vii), chapter 7 (p14) and 7.1.5 (p18–19). The CPG gives no dose for an analgesic, antipyretic or decongestant, and no return advice for patients.'},
    mild:{end:'discharge', title:'Mild ARS: symptomatic relief medication', items:[
      'Symptomatic relief medication: may include analgesics, nasal saline irrigation & decongestants (Algorithm 1, p vii)',
      'Saline irrigation should be used as an adjunct therapy in patients with rhinosinusitis (Recommendation 6, p17)',
      'No improvement after 10 days or worsening after 5 days: topical steroid. No improvement after 14 days treatment: consider referral to specialist (Algorithm 1)'],
      links:[['#sinusitis-cpg--back','Back again: review'],['#pain','Pain management (ebook): analgesic doses']],
      gap:'CPG Algorithm 1 (p vii) and Recommendation 6 (p17). Algorithm 1 draws mild ARS under symptoms <5 days or improving thereafter, which 4.1.1 (p3) calls a common cold when under five days, and has no box for mild symptoms that increase after 5 days or persist after 10 days. The CPG gives no recipe, volume or frequency for saline irrigation (Figure 9, p18, is a drawing) and names no decongestant.'},
    sev:{q:'Severity by the visual analogue scale (VAS)?', hint:'Severity of RS can be divided into the following based on total severity visual analogue scale (VAS) score (0-10) cm: mild = 0 - 3; moderate = >3 - 7; severe = >7 - 10 (4.1.1, p3). The CPG does not say how to ask it.',
      opts:[['Moderate ARS: VAS >3 to 7','mod'],['Severe ARS: VAS >7 to 10','sevr'],['Mild: VAS 0 to 3','mild']]},
    mod:{end:'discharge', title:'Moderate ARS: symptomatic relief medication + topical steroid', items:[
      'Symptomatic relief medication + topical steroid; symptomatic relief medication may include analgesics, nasal saline irrigation & decongestants (Algorithm 1, p vii)',
      'Intranasal corticosteroids should be considered for 14 - 21 days in acute rhinosinusitis (Recommendation 5, p17)',
      'Mometasone furoate 50 mcg/dose aqueous nasal spray, acute rhinosinusitis: 2 sprays in each nostril twice daily (total 400 mcg/day) (Appendix 5, p32)',
      'Improvement within 3 days: continue treatment 7 - 14 days. No improvement: refer to specialist (Algorithm 1)',
      'Antihistamines should be prescribed in rhinosinusitis with associated symptoms suggestive of allergic rhinitis (sneezing, nasal itchiness, nasal obstruction and rhinorrhoea) (Recommendation 7, p18)'],
      links:[['#sinusitis-cpg--back','Back again: review'],['#sinusitis-cpg--abx','Acute bacterial rhinosinusitis: the criteria'],['#pain','Pain management (ebook): analgesic doses']],
      gap:'CPG Algorithm 1 (p vii), Recommendations 5 and 7 (p17–18) and Appendix 5 (p32). Algorithm 1 gives moderate ARS no antibiotic; Recommendation 4 (p16) allows one in acute bacterial rhinosinusitis. Oral steroids: Appendix 5 prints prednisolone 30 mg daily for 7 days in ARS, but in local practice oral steroids are not given in ARS (p17) and Recommendation 5 keeps short-term oral corticosteroids for chronic rhinosinusitis at Otorhinolaryngology centre. The CPG names no antihistamine, gives no return advice, and does not say where the review at 3 days takes place.'},
    sevr:{step:'Severe ARS: symptomatic relief medication + topical steroid + consider antibiotic', items:[
      'Consider antibiotic with at least 3 of the criteria on the next step (Algorithm 1, p vii)',
      'Intranasal corticosteroids should be considered for 14 - 21 days in acute rhinosinusitis (Recommendation 5, p17). Mometasone furoate, acute rhinosinusitis: 2 sprays in each nostril twice daily (total 400 mcg/day) (Appendix 5, p32)'], next:'abx'},

    /* 4.1.2 Viral vs bacterial RS (p4–5), Recommendation 4 (p16) */
    abx:{check:'score', q:'Acute bacterial rhinosinusitis: at least three of these?', hint:'Acute bacterial rhinosinusitis is suggested when there are at least three symptoms/signs of these (4.1.2, p5); the DG and RC adapted them from EPOS despite the lack of evidence. Algorithm 1 (p vii) prints: at least 3 of: purulent/greenish nasal discharge; severe local pain; fever; elevated erythrocyte sedimentation rate/C-reactive protein; “double sickening”. Figure 1 (p4): double sickening, becoming worse again after initial recovery.',
      items:[['Discoloured discharge (with unilateral predominance) and purulent secretion in the nasal cavity',1],['Severe local pain (with unilateral predominance)',1],['Fever (>38ºC)',1],['Elevated erythrocyte sedimentation rate/C-reactive protein',1],['Deterioration of symptoms and signs',1]],
      suggest: s => s >= 3 ? 0 : 1,
      opts:[['At least three: ABRS is suggested','abxy'],['Fewer than three','abxn']]},
    abxy:{end:'discharge', title:'Consider an antibiotic: amoxicillin or amoxicillin/clavulanate', items:[
      'Antibiotics may be prescribed in acute bacterial rhinosinusitis after weighing benefits against potential side effects. The preferred antibiotics is amoxicillin 500 mg 8-hourly for five to seven days or amoxicillin/clavulanate 625 mg 8-hourly for five to seven days (Recommendation 4, p16)',
      'A 2009 Cochrane meta-analysis reported a reduced risk of treatment failure in antibiotics comparing to placebo by 34% within 7 to 15 days (RR=0.66, 95% CI 0.44 to 0.98). However 80% of cases resolved without antibiotics (p14)',
      'Antibiotics have higher incidence of adverse events compared with placebo; gastrointestinal upsets being the most common (OR=2.10, 95% CI 1.60 to 2.77; NNH=9) (p14)',
      'Duration of antibiotic therapy should be as short as possible to reduce possible side effects (p15)',
      'With symptomatic relief medication + topical steroid. Improvement within 3 days: continue treatment 7 - 14 days; no improvement: refer to specialist (Algorithm 1, p vii)',
      'Other antibiotics, doses and special precautions (Appendix 5, p31): the Drugs tab'],
      links:[['#sinusitis-cpg--back','Back again: review']],
      gap:'CPG Recommendation 4 (p16), 7.1.1 (p14–15), Algorithm 1 (p vii) and Appendix 5 (p31). Appendix 5 prints amoxicillin 250 - 500 mg PO q8hr x 5 - 10 days or 500 - 875 mg PO q12hr x 5 - 10 days, and amoxicillin and clavulanic acid 500/125 mg PO q8hr x 5 - 7 days or 875/125 mg PO q12hr x 5 - 7 days. The CPG does not say which antibiotic to use in penicillin allergy (Appendix 5 lists penicillin allergy as a special precaution for amoxicillin and for cefuroxime axetil) and gives no renal dose. Oral steroids: Appendix 5 prints 30 mg daily for 7 days in ARS, but local practice does not give them in ARS (p17).'},
    abxn:{end:'discharge', title:'Fewer than three: ABRS is not suggested', items:[
      'Majority of ARS cases are viral in origin with only 0.5 - 2.0% complicated by bacterial infection (p4)',
      'Viral RS is a self-limiting disease that is managed symptomatically with analgesic or antipyretic (p14)',
      'Severe ARS: symptomatic relief medication + topical steroid; the antibiotic is considered with at least 3 of the criteria (Algorithm 1, p vii)',
      'Improvement within 3 days: continue treatment 7 - 14 days; no improvement: refer to specialist (Algorithm 1)'],
      links:[['#sinusitis-cpg--back','Back again: review'],['#pain','Pain management (ebook): analgesic doses']],
      gap:'CPG 4.1.2 (p4–5), chapter 7 (p14) and Algorithm 1 (p vii). The CPG says nothing more for severe ARS with fewer than three of the criteria. Oral steroids: Appendix 5 (p32) prints a dose for ARS, but in local practice oral steroids are not given in ARS (p17).'},

    /* Review after treatment: Algorithm 1 (p vii), Algorithm 4 (p x), Recommendation 3 (p11) */
    back:{q:'Back after treatment: which fits?', hint:'Algorithm 1 (p vii). Culture and susceptibility test may be considered in patients who do not respond to antibiotic treatment after 72 hours in acute rhinosinusitis (Recommendation 3, p11); the key recommendations place it in otorhinolaryngology centres.',
      opts:[['Moderate or severe ARS: improvement within 3 days','cont'],['Moderate or severe ARS: no improvement within 3 days','nimp'],['Mild ARS: no improvement after 10 days or worsening after 5 days','mildst'],['Mild ARS: no improvement after 14 days treatment','mildref'],['Recurrent, or persistent despite optimal therapy','early']]},
    cont:{end:'discharge', title:'Improvement within 3 days: continue treatment 7 - 14 days', items:[
      'Continue treatment 7 - 14 days (Algorithm 1, p vii)',
      'Intranasal corticosteroids should be considered for 14 - 21 days in acute rhinosinusitis (Recommendation 5, p17)',
      'Antibiotic: amoxicillin 500 mg 8-hourly for five to seven days or amoxicillin/clavulanate 625 mg 8-hourly for five to seven days (Recommendation 4, p16)'],
      gap:'CPG Algorithm 1 (p vii) and Recommendations 4 and 5 (p16–17). Algorithm 1 does not say whether 7 - 14 days counts from the start of treatment or from the review, or whether it includes the antibiotic. The key recommendations print 2 - 3 weeks for intranasal corticosteroids in acute rhinosinusitis.'},
    nimp:{end:'refer', title:'No improvement within 3 days: refer to specialist', items:[
      'Moderate or severe ARS with no improvement within 3 days: refer to specialist (Algorithm 1, p vii)',
      'At the ORL centre, severe ARS with no improvement of symptoms within 3 days: hospital admission; nasal endoscopy; CT and/or MRI scan; culture and sensitivity; symptomatic relief; topical corticosteroids; intravenous antibiotics; consider surgery if medical therapy fails after 48 hours (Algorithm 4, p x)',
      'At the ORL centre, moderate ARS with no improvement of symptoms after 14 days of treatment: nasal endoscopy; culture and sensitivity; symptomatic relief; topical corticosteroids; oral antibiotics (Algorithm 4)'],
      links:[['#sinusitis-cpg--early','Early referral indications'],['#referral-rules--dept','Referral rules: other departments and clinics']],
      gap:'CPG Algorithms 1 and 4 (p vii, p x) and 7.2 (p20). Algorithm 1 refers moderate ARS that has not improved within 3 days, while Algorithm 4 receives moderate ARS after 14 days of treatment: the CPG does not say which applies, or how soon a moderate case should be seen. Surgery: after 48 hours (Algorithm 4) or after 24 - 48 hours of intravenous antibiotics (p20). Which HKL team takes the referral from the ED is for the department.'},
    mildst:{end:'discharge', title:'Mild ARS, not improving: add a topical steroid', items:[
      'No improvement after 10 days or worsening after 5 days: topical steroid (Algorithm 1, p vii)',
      'Intranasal corticosteroids should be considered for 14 - 21 days in acute rhinosinusitis (Recommendation 5, p17). Mometasone furoate, acute rhinosinusitis: 2 sprays in each nostril twice daily (total 400 mcg/day) (Appendix 5, p32)',
      'No improvement after 14 days treatment: consider referral to specialist (Algorithm 1)'],
      links:[['#sinusitis-cpg--sev','Severity by VAS']],
      gap:'CPG Algorithm 1 (p vii) and 4.1.1 (p3). Worsening after five days also meets the definition of ARS (p3), which Algorithm 1 grades as moderate or severe by VAS: it does not say when a mild case should be graded again.'},
    mildref:{end:'refer', title:'Consider referral to specialist', items:[
      'Mild ARS with no improvement after 14 days treatment: consider referral to specialist (Algorithm 1, p vii)'],
      links:[['#sinusitis-cpg--early','Early referral indications']],
      gap:'CPG Algorithm 1 (p vii), 6.1 (p12) and Algorithm 3 (p ix). Early referral is within one week in 6.1 and within 2 weeks in Algorithm 3.'},

    /* Early referral: 6.1 (p12), 6.2 (p13) and Algorithm 3 (p ix) */
    early:{check:'any', q:'Any indication for early referral?', hint:'Acute rhinosinusitis, 6.1 (p12): indications for early referral (within one week). Algorithm 3 (p ix) times early referral within 2 weeks, adds immunodeficiencies and leaves out anatomical defects. Chronic rhinosinusitis has its own list: the step for 12 weeks or more.',
      items:['Persistent symptoms despite optimal therapy in particular immunocompromised patients such as uncontrolled diabetes, end-stage renal failure, patient with human immunodeficiency virus (HIV)','Frequent recurrence (≥4 episodes per year)','Anatomical defects causing obstruction','Suspected malignancy','Immunodeficiencies (Algorithm 3)'],
      opts:[['Yes, present','earlyx'],['None','dur']]},
    earlyx:{end:'refer', title:'Early referral to the ORL centre', items:[
      'Early referral: within one week (6.1 and 6.2, p12–13). *Early referral: within 2 weeks (Algorithm 3, p ix)',
      'Nasal endoscopy should be performed to diagnose rhinosinusitis at otorhinolaringology centre (Recommendation 1, p9)'],
      links:[['#referral-rules--dept','Referral rules: other departments and clinics']],
      gap:'CPG 6.1 and 6.2 (p12–13) and Algorithm 3 (p ix): the CPG gives two times for early referral, within one week and within 2 weeks. It does not say how an ED patient reaches the ORL clinic. Department note: dependent patients should not be sent to the ENT or Eye clinic for review (interdepartment referral reminder, 17 May 2022).'},

    /* Algorithm 2, Management of chronic rhinosinusitis for primary care and non-ORL centre (p viii) */
    crs:{check:'any', q:'Chronic rhinosinusitis: any indication for early referral?', hint:'Algorithm 2 (p viii): presence of ≥2 symptoms (duration ≥12 weeks): one of which should be nasal obstruction or purulent/greenish nasal discharge; ± facial pain, headache; ± smell disturbance. Examination: anterior rhinoscopy (plain X-ray is NOT recommended). Early referral (within one week): 6.2 (p13), with Algorithm 3 (p ix). Severe pain or swelling of the sinus areas: urgent referral, on the first step.',
      items:['Failed a course of optimal medical therapy','>3 sinus infections/year','Suspected fungal infections, granulomatous disease or malignancy','Immunodeficiencies (Algorithm 3)'],
      opts:[['Yes, present','earlyx'],['None','crsx']]},
    crsx:{end:'discharge', title:'Chronic rhinosinusitis: topical steroids and nasal irrigation, re-evaluation after four weeks', items:[
      'Topical steroids; nasal irrigation; re-evaluation after four weeks. Improvement of symptom(s): continue therapy. No: refer to ORL specialist (Algorithm 2, p viii)',
      'Intranasal corticosteroids should be given for 16 - 52 weeks in chronic rhinosinusitis (Recommendation 5, p17)',
      'Antibiotics should not be used routinely in chronic rhinosinusitis (Recommendation 4, p16)',
      'Short-term oral corticosteroids should ONLY be given in chronic rhinosinusitis at Otorhinolaryngology centre (Recommendation 5, p17)'],
      links:[['#sinusitis-cpg--rf','Urgent referral signs']],
      gap:'CPG Algorithm 2 (p viii) and Recommendations 4 and 5 (p16–17). CRS is defined as symptoms persisting for more than 12 weeks on p3, and as ≥12 weeks on p4 and in Algorithm 2. The CPG does not say who re-evaluates an ED patient after four weeks.'}
  },

  /* Reference tabs: each note names its CPG page. The referral lists are not repeated here: they are the checklists in the
     steps (urgent referral, early referral, 12 weeks or more), with Algorithms 3 and 4 in their hints and outcomes. */
  notes:[
    {l:'Diagnosis', notes:[
      {h:'Examination', src:'4.2 (p5–6) and Recommendation 1 (p9). The clinical definition (4.1, p3) also needs endoscopic signs, CT changes or a past medical history of CRS; Algorithm 1 (p vii) works from the symptoms and anterior rhinoscopy.', items:[
        'Anterior rhinoscopy should be performed as part of clinical assessment of suspected ARS in primary care setting, albeit a rather limited role. It may reveal findings such as mucosal oedema, nasal inflammation, purulent nasal discharge, polyps and anatomical abnormalities (p5).',
        'Nasal endoscopy is not required in diagnosing ARS in primary care (p6). Nasal endoscopy should be performed to diagnose rhinosinusitis at otorhinolaringology centre (Recommendation 1, p9).']},
      {h:'Viral or bacterial', src:'4.1.2 (p4–5) and 4.4 (p10). The criteria for acute bacterial rhinosinusitis are the antibiotic step.', items:[
        'Meta-analysis of randomised controlled trials (RCT) found that most common signs and symptoms (such as previous common cold, purulent nasal discharge, unilateral facial pain, toothache, pain on bending or chewing, purulent discharge in the pharynx) do not help to distinguish a bacterial from a viral infection. Duration of symptoms of >10 days were not significantly associated with bacterial RS (p5).',
        'Two main causative infectious bacteria implicated in acute bacterial rhinosinusitis (ABRS) are Streptococcus pneumoniae and Haemophilus influenzae. Anaerobic organisms are predominant in acute sinusitis with dental origin (p10).']},
      {h:'Rhinosinusitis or another ORL condition?', src:'Chapter 5, differential diagnosis (p12): (+) yes, (-) no, (±) possible', table:{head:['Feature','Allergic Rhinitis','Rhinosinusitis','Allergic Fungal Rhinosinusitis'], rows:[
        ['Nasal discharge','clear','mucopurulent','mucin'],
        ['Facial pain','-','+ (acute)','±'],
        ['Nasal itchiness','+','-','±'],
        ['Sneezing','+','-','±'],
        ['Nasal obstruction','+','+','+'],
        ['Smell disturbance','±','±','±'],
        ['Fever','-','+ (acute)','-']]}},
      {h:'Tests', src:'4.3 and Recommendation 2 (p9); 4.4 (p10) and Recommendation 3 (p11)', items:[
        'Plain radiography is not recommended in the management of rhinosinusitis (Recommendation 2).',
        'Indications for CT scan in RS are: failed medical therapy; planned for surgery; atypical or severe disease, i.e. unilateral symptoms, blood-stained discharge, displacement of the eye and severe pain (p9).',
        'MRI may be useful in cases of diagnostic uncertainty or when intracranial complications are suspected (p9).',
        'Nasal swab should not be performed in rhinosinusitis (Recommendation 3). Nasal swab cultures are of little predictive value in diagnosing ABRS and CRS (p10).']}
    ]},
    {l:'Drugs', notes:[
      {h:'Antibiotics', src:'Appendix 5 (p31), from the Ministry of Health Medicines Formulary - 3/2015. Recommendation 4 (p16) gives amoxicillin or amoxicillin/clavulanate for five to seven days. Appendix 5 also lists ciprofloxacin, levofloxacin and moxifloxacin, each marked (Use with caution): not included here.', table:{head:['Drug','Recommended dosage','Special precautions'], rows:[
        ['Amoxicillin','250 - 500 mg PO q8hr x 5 - 10 days or 500 - 875 mg PO q12hr x 5 - 10 days','Preferred antibiotics in ABRS. Penicillin allergy, infectious mononucleosis, renal impairment, pregnancy and lactation'],
        ['Amoxicillin and Clavulanic acid','500/125 mg PO q8hr x 5 - 7 days or 875/125 mg PO q12hr x 5 - 7 days','Preferred antibiotics in ABRS. Allergy to beta-lactam antibiotics, mononucleosis, renal and hepatic impairment, pregnancy and lactation'],
        ['Cefuroxime axetil','250 - 500 mg PO q12hr x 5 - 10 days','Penicillin allergy, gastrointestinal disease (particularly colitis), renal impairment, pregnancy and lactation'],
        ['Azithromycin','500 mg PO q24hr x 3 days','May increase the risk of torsades de pointes and fatal heart arrhythmias in patients with prolonged QT interval, low K or Mg blood levels, slow heart rate and medication treating abnormal heart rhythms. Impaired hepatic and renal function. Pregnancy and lactation'],
        ['Clarithromycin','250 - 500 mg PO q12hr x 7 - 14 days','Patient with coronary artery disease, severe cardiac insufficiency, hypomagnesaemia, bradycardia (<50 bpm). May exacerbate symptoms of myasthenia gravis. Renal and hepatic impairment. Pregnancy and lactation.']]}},
      {h:'Intranasal corticosteroids', src:'Appendix 5 (p32), from the Ministry of Health Medicines Formulary - 3/2015; mometasone\'s doses for allergic rhinitis and nasal polyposis are left out. Refer to Appendix 4 on Proper Use of Nasal Spray (p17): the Discharge advice tab.', table:{head:['Drug','Indications','Dosage'], rows:[
        ['Mometasone furoate 50 mcg/dose aqueous nasal spray','Symptomatic treatment associated with acute rhinosinusitis and treatment of nasal polyps','Acute Rhinosinusitis: 2 sprays in each nostril twice daily (total 400 mcg/day)'],
        ['Fluticasone propionate 50 mcg/dose nasal spray','Prophylaxis and treatment of seasonal and perennial allergic rhinitis; management of associated sinus pain and pressure','Adults/adolescents (≥12 years): 2 sprays in each nostril once daily. Maximum daily dose 4 sprays in each nostril'],
        ['Budesonide 64 mcg/dose nasal spray','Seasonal and perennial allergic rhinitis and nasal polyposis; treatment and prevention of nasal polyps','Adults and children 6 years and older: Rhinitis: 2 sprays into each nostril once daily in the morning or 1 spray into each nostril twice daily. Nasal polyps: 2 sprays twice daily']]}},
      {h:'Oral steroids', src:'Appendix 5 (p32), 7.1.2 and Recommendation 5 (p17), quoted separately because they differ. Table 3 (p19) prints Yes for the addition of oral corticosteroids to antibiotics in ARS and in CRS.', items:[
        'Oral steroids (prednisolone): 30 mg daily for 7 days in ARS and 25 mg daily for 14 days in CRS (Appendix 5, p32).',
        'In ARS, oral steroids (30 mg/day for seven days) is significantly more effective than placebo in improvement of symptoms up to 12 days. In local practice, oral steroids are not given due to the possibility of exacerbation of bacterial infection (p17).',
        'Short-term oral corticosteroids should ONLY be given in chronic rhinosinusitis at Otorhinolaryngology centre (Recommendation 5, p17).']},
      {h:'Other medicines', src:'7.1.3 to 7.1.5 (p17–19). There is insufficient recent evidence on the analgesics, decongestants, mucolytics and antivirals in rhinosinusitis (p18). The CPG gives no dose for an analgesic, a decongestant or an antihistamine, and no recipe for saline irrigation; the ebook\'s analgesic doses are in Pain management.', items:[
        'Saline irrigation should be used as an adjunct therapy in patients with rhinosinusitis (Recommendation 6, p17). Adverse events of saline irrigation are minor. These include nasal burning, irritation and nausea (p17).',
        'Antihistamines should be prescribed in rhinosinusitis with associated symptoms suggestive of allergic rhinitis (sneezing, nasal itchiness, nasal obstruction and rhinorrhoea) (Recommendation 7, p18).',
        'Analgesics like paracetamol or non-steroidal anti-inflammatory drugs may provide symptomatic relief in both viral and bacterial infections of the upper respiratory passages in RS. The selection of analgesics should be based on the severity of pain (p18).',
        'Topical decongestants should not be prescribed for more than two weeks due to rebound phenomenon. Oral decongestants should be cautiously prescribed in those with medical conditions such as diabetes mellitus, cardiovascular diseases, glaucoma and benign prostate hyperplasia (boxed statement, p19).',
        'There is no evidence to support the use of mucolytics in RS. There is no evidence of antiviral agents in treating patients with RS (p19).']}
    ]}
  ],

  /* Appendix 4, Proper use of nasal spray (p29–30), quoted as printed; its picture callouts and step numbers are left out */
  advice:[
    'Proper use of nasal spray (CPG Appendix 4, p29–30, adapted from the MyHealth portal). A correct technique is essential for effective delivery of the medicines. It is very important to follow the instructions from your healthcare providers and refer to the product labels.',
    'Nasal sprays are only intended for use in the nose. Do not spray it into any other parts of the body.',
    'First time (priming): remove the dust cap. Shake the nasal spray bottle. Press down a few times until you see a fine mist of spray comes out (You might need to press 3 - 5 times depending on the nasal spray). This process is called Priming.',
    'Priming is only done once for every nasal spray. However, if the nasal spray has not been used for more than 1 - 2 weeks, the priming step has to be repeated.',
    'Each time: gently blow your nose to clear the mucous. Remove the dust cap.',
    'Close one nostril with your finger. Bend your head slightly forward. Carefully insert the applicator tip ¼ or ½ inch into the other nostril (point the applicator tip slightly outwards, away from the centre of the nose).',
    'Press down the nasal spray once and at the same time breathe in slowly through your nostril. Repeat in the other nostril.',
    'Do not tilt your head backwards to prevent backflow into your throat.',
    'If the medicine drips into your throat, you will feel a slightly bitter sensation in your mouth. This is normal.',
    'Once you are done using the nasal spray, wipe the applicator tip with a clean tissue or cloth and put on the dust cap.',
    'Try not to sneeze or blow your nose immediately after using the nasal spray.',
    'Do not breathe in strongly and quickly to prevent the medication from going into your throat. If the nasal spray is used correctly, the medicine will not drip from your nose nor will it drip into your oral cavity.',
    'Please use the nasal spray as directed by your healthcare providers.',
    'If you experience any nosebleed following the used of nasal sprays, stop using the nasal spray and seek medical attention.',
    'Keep the nasal spray away from direct sunlight and children.'],
  refs:['Ministry of Health Malaysia. Clinical Practice Guidelines: Management of Rhinosinusitis in Adolescents and Adults. Putrajaya: Malaysia Health Technology Assessment Section (MaHTAS), Medical Development Division; 2016. ISBN 978-967-0769-63-9. Available at http://www.moh.gov.my',
    'Copyright MaHTAS. Content reproduced with a copyright acknowledgement to MaHTAS: not changed, not sold, not used to promote or endorse any product or service, and not used in an inappropriate or misleading context.',
    'Adapted in the CPG: Algorithms 1, 2 and 4, the clinical definition and Table 3 from EPOS 2012 (Fokkens WJ, et al. Rhinology. 2012;50(1):1-12); the nasal spray steps (Appendix 4) from the MyHealth portal; the drug tables (Appendix 5) from the Ministry of Health Medicines Formulary - 3/2015.'],
  see:[['#pain','Pain management (ebook): analgesic doses'],['#referral-rules--dept','Referral rules: other departments and clinics'],['#outpatient-referral','Clinic referrals from the ED'],['#children--pat','Children in the ED: where to triage a child']]
};

/* Department entries point to the national guideline: links only, their wording stays (rule 6) */
P['referral-rules'].see = [...(P['referral-rules'].see || []), ['#sinusitis-cpg--early', 'Rhinosinusitis CPG (2016): referral to ORL']];
P['outpatient-referral'].see = [...(P['outpatient-referral'].see || []), ['#sinusitis-cpg--early', 'Rhinosinusitis: early referral to ORL (CPG 2016)']];

/* ----- CPG Management of Sore Throat (Ministry of Health Malaysia, Academy of Medicine of Malaysia and Malaysian Society of
   Infectious Diseases and Chemotherapy, April 2003), MOH/P/PAK/68.03 (GU), for children and adults from the community (p iii) -----
   26 PDF pages, a scan with no text layer: every figure was read from page images (throat-review.md). Printed p1–2 = PDF 7–8
   (PDF page minus 6); PDF 9 and 10 are blank; printed p3–18 = PDF 11–26 (PDF page minus 8); front matter p i–v = PDF 2–6.
   The algorithm is on p12. The CPG has no copyright or reuse statement and no review date, so it is summarised in the guide's
   own words with page numbers, not quoted (Krishna's decision, 9 Nov 2026). Doses, thresholds and drug names as printed. */
P['sore-throat-cpg'] = {
  title:'Sore throat: CPG 2003', grp:'cpg', src:'CPG Sore Throat (2003), summarised', isnew:true, hero:'throatcpg',
  lead:'The national guideline for children and adults with a sore throat, issued April 2003: viral or streptococcal by the McIsaac score, when to swab or start an antibiotic, which antibiotic and dose, the complications and tonsillectomy referral. It states no review date, and no newer edition is on the Academy list. Summarised in the guide\'s own words, with page numbers: the CPG gives no permission to reproduce it.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'CPG Management of Sore Throat (April 2003), for children and adults from the community with a sore throat, meaning an infective tonsillitis, pharyngitis or both (p iii). Printed page numbers; the algorithm is on p12.', opts:[
      ['Viral or streptococcal? (algorithm, p12)','vf'],
      ['Antibiotic and dose (p9–10)','abx'],
      ['Pain, fever and comfort (p8)','sym'],
      ['No better after 48 hours, or back again (p9)','nr'],
      ['Peritonsillar abscess or quinsy (p7, p11)','pta'],
      ['Recurrent tonsillitis: tonsillectomy? (p10–11)','tons']]},

    /* The algorithm (p12): two branches from a history of sore throat, the viral features and the McIsaac score */
    vf:{check:'any', q:'Any feature that points to a virus?', hint:'The algorithm\'s viral branch (p12). These are usually absent in a streptococcal throat and more often seen with viruses, though the two overlap a lot (p2–3). The algorithm scores McIsaac alongside and does not say which branch wins when they disagree.',
      items:['Rhinitis','Hoarseness','Cough','Conjunctivitis','Diarrhoea','Oropharyngeal ulcers'],
      opts:[['Yes, present','viral'],['None','ms']]},
    ms:{check:'score', q:'McIsaac score', hint:'Algorithm (p12): 1 point each. The CPG bases the decision to test on this score (Evidence level II-2, p3). Even with all four classic features, the throat may not be streptococcal (p3).',
      info:['The text words three items differently: fever > 38°C where the algorithm prints > = 38° C, tonsillar swelling or exudates, and swollen anterior cervical nodes (p3)','Only age <15 scores a point: the CPG gives no points for other ages (p12)'],
      items:[['Fever ≥ 38°C',1],['No cough',1],['Tonsillar exudates',1],['Tender anterior cervical nodes',1],['Age <15',1]],
      suggest:s => s < 2 ? 0 : s <= 3 ? 1 : 2,
      opts:[['Score <2: a virus is likely','viral'],['Score 2-3: throat swab for a test','swab'],['Score 4 or more: swab, or start an antibiotic','four']]},
    viral:{end:'discharge', title:'A virus is likely: treat the symptoms, no antibiotic', items:[
      'Most sore throats are viral and need no antibiotic (p8)',
      'Do not give an antibiotic just to relieve symptoms (Evidence level I, p8)',
      'Comfort: fluids, warm saline gargles, paracetamol and lozenges (p8)',
      'A test is not needed when the clinical and epidemiological picture does not suggest group A streptococcus (p3)'],
      links:[['#sore-throat-cpg--sym','Pain, fever and comfort'],['#sore-throat-cpg--ms','Score McIsaac as well']],
      gap:'CPG algorithm (p12), p3 and p8. The CPG gives no discharge criteria and no follow-up for a viral sore throat: not in the source.'},

    /* Chapter 3, Diagnosis (p3–7) */
    swab:{step:'Take a throat swab, before any antibiotic', items:[
      'Rub the swab over both tonsils and the posterior pharyngeal wall; keep it off the mouth, uvula and oropharynx before and after (p3)',
      'Take it early in the illness, before an antibiotic is started (p3)',
      'Send it in Amies or Stuart\'s transport medium as soon as possible; if the lab cannot process it soon, refrigerate it rather than leave it at room temperature; a delay of over 48 hours is undesirable (p4)',
      'Culture is the gold standard: one swab, taken and cultured properly, finds group A streptococcus in 90%-95% (p3); the result takes 48 hours (p6)',
      'A rapid antigen detection test (RADT) gives a result within minutes, with specificity >95% (p6)'], next:'gas'},
    gas:{q:'Group A streptococcus (GAS) detected?', hint:'Either a positive culture or a positive RADT confirms GAS in the pharynx (p7).',
      info:['A negative RADT should be confirmed with a culture whenever possible: the RADT had not been checked against culture locally (Evidence level II-2, p7)','Starting treatment up to 9 days late still keeps its benefit in preventing rheumatic fever (p7)'],
      opts:[['Yes, detected','abx'],['Not detected','neg'],['No result yet, or no test available','emp']]},
    neg:{end:'discharge', title:'GAS not detected: treat the symptoms', items:[
      'Not detected: symptomatic treatment (algorithm, p12)',
      'A negative RADT: confirm it with a throat culture whenever possible (p7)',
      'Antibiotics have no proven benefit for a pharyngitis caused by bacteria other than GAS; the CPG names diphtheria and gonococcal infection as the exceptions (p8)'],
      links:[['#sore-throat-cpg--sym','Pain, fever and comfort']],
      gap:'CPG algorithm (p12) and p7–8. The CPG gives no treatment for diphtheria or gonococcal pharyngitis, and does not say how to recall a patient whose culture later grows GAS: not in the source.'},
    four:{q:'Score 4 or more: swab, or start an antibiotic?', hint:'The algorithm allows either and does not say how to choose (p12). The text allows an antibiotic without a result when a streptococcal throat is suspected, the patient looks toxic and follow-up is not possible (p9).',
      opts:[['Take a throat swab','swab'],['Start an antibiotic','abx']]},
    emp:{check:'all', q:'No result in hand: start an antibiotic now?', hint:'The CPG\'s ideal is a swab first and an antibiotic only for proven GAS. Where cultures are hard to get or costly, or follow-up is lacking, it allows an antibiotic when all of these apply (p9):',
      items:['A streptococcal sore throat is clinically suspected','The patient looks toxic','Follow-up is not possible'],
      opts:[['All met','abx'],['Not all met','wait']]},
    wait:{end:'discharge', title:'Treat the symptoms; give an antibiotic if the culture grows GAS', items:[
      'The CPG\'s ideal: an antibiotic only once GAS is proven (p9)',
      'Waiting up to 9 days to start treatment does not lose the protection against rheumatic fever (p7)',
      'Meanwhile: fluids, warm saline gargles, paracetamol and lozenges (p8)'],
      links:[['#sore-throat-cpg--sym','Pain, fever and comfort'],['#sore-throat-cpg--abx','Antibiotic and dose']],
      gap:'CPG p7–9. The text joins the three conditions with "and" and does not define toxic-looking. It gives no admission criteria and does not say who acts on the culture result: not in the source.'},

    /* 5.2 Antibiotic therapy for GABHS pharyngitis (p8–10): 5.2.1 children (p9), 5.2.2 adults (p10) */
    abx:{q:'Antibiotic for a streptococcal sore throat: child or adult?', hint:'Penicillin is the drug of choice (Evidence level I); when the CPG was written, no clinical isolate of GAS resistant to penicillin had been documented. By mouth, give a full 10-day course (p9). The CPG does not define the paediatric age group.',
      info:['Why treat GAS: to prevent rheumatic fever and suppurative complications, cut infectivity and shorten the illness (p9)'],
      opts:[['Child (5.2.1, p9)','kid'],['Adult (5.2.2, p10)','adult']]},
    kid:{q:'Child: allergic to penicillin?', hint:'5.2.1 (p9). A child usually responds within 24-48 hours of the right antibiotic (p9).',
      opts:[['No','kpen'],['Allergic to penicillin','kery'],['Allergic to penicillin, and cannot take erythromycin','kcli']]},
    kpen:{end:'discharge', title:'Child: penicillin V for 10 days, or one benzathine penicillin injection', items:[
      'Penicillin V by mouth: 250mg bid or tid x 10 days (p9)',
      'Or benzathine penicillin IM: <27kg: 600,000 units x 1 dose; >27kg: 1,200,000 units x 1 dose (p9)'],
      links:[['#sore-throat-cpg--nr','No better after 48 hours']],
      gap:'CPG 5.2.1 (p9). It gives no benzathine penicillin dose for a child of exactly 27 kg, and one penicillin V dose for every child, with no weight or age bands: not in the source.'},
    kery:{end:'discharge', title:'Child allergic to penicillin: erythromycin for 10 days', items:[
      'Erythromycin estolate: 20-40mg/kg/day bid-qid (max. 1g/day) x 10 days (p9)',
      'Or erythromycin ethylsuccinate: 40mg/kg/day bid-qid (max. 1g/day) x 10 days (p9)'],
      links:[['#sore-throat-cpg--nr','No better after 48 hours']],
      gap:'CPG 5.2.1 (p9).'},
    kcli:{end:'discharge', title:'Child allergic to penicillin who cannot take erythromycin: clindamycin', items:[
      'Clindamycin: 20-30 mg/kg/day tid x 10 days (Evidence level II-1, p9)'],
      links:[['#sore-throat-cpg--nr','No better after 48 hours']],
      gap:'CPG 5.2.1 (p9). It gives no maximum daily dose for clindamycin: not in the source.'},
    adult:{q:'Adult: allergic to penicillin?', hint:'5.2.2 (p10). GAS is the only common acute pharyngitis that clearly needs an antibiotic; for sore throats in general, the absolute benefit of antibiotics is modest (p10).',
      opts:[['No','apen'],['Allergic to penicillin','aery'],['Allergic, but no immediate-type reaction to β-lactams','aceph'],['Erythromycin-resistant strain, and cannot take β-lactams','acli']]},
    apen:{end:'discharge', title:'Adult: penicillin V for 10 days', items:[
      'Phenoxymethylpenicillin (penicillin V): 250 mg t.i.d. or q.i.d (Evidence level II-1), or 500 mg b.i.d (Evidence level III), for 10 days (p10)',
      'A shorter course clears GAS less well, and the sore throat comes back more often (Evidence level I, p10)',
      'No clinical response after 48 hours: reassess (algorithm, p12)'],
      links:[['#sore-throat-cpg--nr','No better after 48 hours']],
      gap:'CPG 5.2.2 (p10). The adult section gives no benzathine penicillin injection: its dose is printed for children only (p9).'},
    aery:{end:'discharge', title:'Adult allergic to penicillin: erythromycin', items:[
      'Erythromycin suits penicillin allergy, four times or twice daily (Evidence level II-2, p10)',
      'Gastrointestinal side effects are common (p10)',
      'Newer macrolides such as clarithromycin: fewer side effects, but costly and no better against resistant strains (p10)'],
      links:[['#sore-throat-cpg--nr','No better after 48 hours']],
      gap:'CPG 5.2.2 (p10). It gives no adult erythromycin dose in mg; section 5.2 asks for a full 10-day course of any oral treatment (p9). Not in the source beyond that.'},
    aceph:{end:'discharge', title:'Adult allergic to penicillin, no immediate-type reaction: a first generation cephalosporin', items:[
      'A first generation cephalosporin is acceptable if the patient is allergic to penicillin but has had no immediate-type hypersensitivity to β-lactam antibiotics (p10)'],
      gap:'CPG 5.2.2 (p10). It names no cephalosporin and gives no dose or course length: not in the source.'},
    acli:{end:'discharge', title:'Erythromycin-resistant GAS, cannot take β-lactams: clindamycin', items:[
      'Clindamycin is the alternative for the rare patient with an erythromycin-resistant GAS who cannot tolerate β-lactam antibiotics (p10)'],
      gap:'CPG 5.2.2 (p10). It gives no adult clindamycin dose or course length: not in the source.'},

    /* Treatment failure and recurrence (p9), and the algorithm's last boxes (p12) */
    nr:{q:'No better, or back again?', hint:'The algorithm\'s last two boxes (p12) and 5.2.1 (p9).', opts:[['No better 48 hours into an antibiotic','nr48'],['Back again after a finished course','recur'],['Suspected peritonsillar abscess (quinsy)','pta']]},
    nr48:{end:'neutral', title:'No response after 48 hours: reassess', items:[
      'Reassess, and consider a viral cause, a suppurative complication such as a peritonsillar abscess, or the antibiotic not being taken (p9; algorithm, p12)',
      'Children usually respond within 24-48 hours of the right antibiotic (p9)'],
      links:[['#sore-throat-cpg--pta','Peritonsillar abscess or quinsy']],
      gap:'CPG p9 and the algorithm (p12). It does not say what to change after reassessment, or when to admit: not in the source.'},
    recur:{end:'neutral', title:'Back again after a course of antibiotics', items:[
      'Possible reasons: the wrong antibiotic (for example cotrimoxazole), too low a dose or too short a course, not taking it, or beta-lactamase-producing organisms alongside (p9)',
      'May help: benzathine penicillin IM (Evidence level I), clindamycin, amoxycillin-clavulanate or cefuroxime (each Evidence level II-1) (p9)',
      'Broader oral antibiotics, such as second and third generation cephalosporins and newer macrolides, work, but resistance and cost are concerns (p9)'],
      links:[['#sore-throat-cpg--tons','Tonsillectomy criteria'],['#sore-throat-cpg--kid','Child doses'],['#sore-throat-cpg--adult','Adult choices']],
      gap:'CPG p9, in the section for children. It gives no dose for amoxycillin-clavulanate or cefuroxime and nothing on recurrence in adults: not in the source.'},

    /* Chapter 4, Complications (p7), and 5.3 b), Peritonsillar abscess or quinsy (p11) */
    pta:{end:'refer', title:'Peritonsillar abscess (quinsy): the CPG drains every abscess', items:[
      'Peritonsillar abscess (PTA) is the commonest complication of acute tonsillitis; it grows out of an acute exudative tonsillitis, mostly in adolescents (p7)',
      'Retropharyngeal abscess (RPA), the other suppurative complication, is more common under 3 years of age; 12-45% had an upper respiratory illness before (p7)',
      'Accepted surgical practice: drain every abscess (p11)',
      'Tonsillectomy for quinsy: when the abscess fails antibiotics with incision and drainage (rarely needed), or after a quinsy in a patient with recurrent tonsillitis; one quinsy without a significant history of tonsillitis is not an indication (Evidence level III, p11)'],
      links:[['#sore-throat-cpg--tons','Recurrent tonsillitis: tonsillectomy criteria']],
      gap:'CPG p7 and p11. It gives no signs of a peritonsillar or retropharyngeal abscess, no airway warning signs, no antibiotic or dose for an abscess, no admission criteria and no referral team: not in the source. Which team takes a suspected quinsy from the Green Zone is to confirm.'},

    /* 5.3 Surgical treatment (p10–11) */
    tons:{check:'all', q:'Recurrent tonsillitis: all four criteria met?', hint:'5.3 (p11): all four must be met before tonsillectomy for recurrent tonsillitis (Evidence level III). The CPG also cites SIGN (more than 5 episodes) and the American Academy of Otolaryngology (more than 3 episodes) (p10).',
      items:['The sore throat comes from inflamed tonsils','Tonsillitis > 6 times over a 12-month period','Symptoms going on over a 12-month period','The symptoms get in the way of normal daily life'],
      opts:[['All met','tonsy'],['Not all met','tonsn']]},
    tonsy:{end:'refer', title:'Meets the CPG criteria for tonsillectomy', items:[
      'All four criteria met: the CPG\'s bar for tonsillectomy in recurrent tonsillitis (p11)',
      'Evidence: four randomised trials in children and none in adults (p10)'],
      links:[['#referral-rules--dept','Department rule: ENT and Eye clinic referrals'],['#outpatient-referral','Clinic referrals from the ED']],
      gap:'CPG 5.3 (p10–11). It names no clinic or referral route: not in the source. The department\'s clinic table has no ENT row.'},
    tonsn:{end:'neutral', title:'Does not meet the CPG criteria for tonsillectomy', items:[
      'The CPG asks for all four criteria before tonsillectomy for recurrent tonsillitis (p11)'],
      gap:'CPG 5.3 (p11).'},

    /* 5.1 Symptomatic treatment (p8) */
    sym:{end:'neutral', title:'Pain, fever and comfort for every sore throat', items:[
      'Fluids to prevent dehydration, and warm saline gargles for the discomfort: cheap and helpful (Evidence level III, p8)',
      'Paracetamol is the analgesic of choice for a sore throat (Evidence level I, p8)',
      'Aspirin: not for general use, especially in children, because of the risk of Reye\'s syndrome (p8)',
      'NSAIDs: small studies found ibuprofen safe and effective, but the CPG does not recommend routine NSAIDs for a sore throat because of the risk of gastrointestinal bleeding (p8)',
      'Throat lozenges and gargles: useful add-ons, especially for a very painful throat (p8)',
      'Dexamethasone: one small study in severe acute exudative pharyngitis found faster, greater pain relief; the CPG calls for more studies and gives no dose (p8)',
      'An antibiotic is not for symptom relief (Evidence level I, p8)'],
      links:[['#pain','Pain management (ebook)']],
      gap:'CPG 5.1 (p8). It gives no paracetamol or ibuprofen dose: the guide\'s Analgesia by weight calculator uses the ebook\'s doses (p45–50). The ebook\'s analgesic ladder lists NSAIDs for mild pain, where this CPG advises against routine NSAIDs for a sore throat: an open item.'}
  },

  /* Reference tabs, in the guide's own words and layout; each line names its printed page */
  notes:[
    {l:'Signs', notes:[
      {h:'A streptococcal throat', src:'CPG chapter 2 (p1–2)', items:[
        'Group A β-haemolytic streptococcus (GABHS) is the commonest bacterial cause: about 15-30% of sore throats in children (p1) and 5-10% in adults (p2)',
        'Rare under 3 years; most frequent between 5-15 years old (p1). Usual incubation: 2-5 days (p2)',
        'Symptoms: a sudden sore throat, pain on swallowing, fever, headache, abdominal pain, nausea and vomiting (p1)',
        'Signs: red tonsils and pharynx with exudate, soft-palate petechiae, a beefy-red swollen uvula, swollen tender anterior cervical nodes and a rash; many cases are milder, without exudate (p1–2)',
        'Adults: an abrupt start, with a sore throat and difficulty swallowing, moderate fever (39-40.5°C), chills but rarely rigors, malaise and headache; GI symptoms in 35-50%, a figure objective studies have not confirmed (p2)']},
      {h:'Causes', src:'CPG chapter 2 and Table 1 (p1–2)', items:[
        'Viruses cause infective sore throats more often than bacteria do (p1)',
        'Estimated shares in Table 1: group A streptococcus 15-30%, rhinovirus 20%, group C streptococcus 5%; diphtheria, gonococcus, Arcanobacterium and Mycoplasma <1% each (p2)']}]},
    {l:'Doses', notes:[
      {h:'Antibiotics for a streptococcal sore throat', src:'CPG 5.2.1 (p9) and 5.2.2 (p10), in the guide\'s layout. Penicillin is the drug of choice; by mouth, a full 10-day course (p9).', table:{head:['Patient','Drug','Dose as printed'], rows:[
        ['Child','Penicillin V, by mouth','250mg bid or tid x 10 days (p9)'],
        ['Child','Benzathine penicillin, IM','<27kg: 600,000 units x 1 dose; >27kg: 1,200,000 units x 1 dose (p9)'],
        ['Child, penicillin allergy','Erythromycin estolate','20-40mg/kg/day bid-qid (max. 1g/day) x 10 days (p9)'],
        ['Child, penicillin allergy','Erythromycin ethylsuccinate','40mg/kg/day bid-qid (max. 1g/day) x 10 days (p9)'],
        ['Child, penicillin allergy and erythromycin intolerance','Clindamycin','20-30 mg/kg/day tid x 10 days (p9)'],
        ['Adult','Phenoxymethylpenicillin (penicillin V)','250 mg t.i.d. or q.i.d, or 500 mg b.i.d, for 10 days (p10)'],
        ['Adult, penicillin allergy','Erythromycin','Four times or twice daily; no dose printed (p10)'],
        ['Adult, penicillin allergy, no immediate-type reaction','First generation cephalosporin','No drug or dose printed (p10)'],
        ['Adult, erythromycin-resistant GAS, cannot take β-lactams','Clindamycin','No dose printed (p10)']]}}]},
    {l:'Complications', notes:[
      {h:'Suppurative', src:'CPG chapter 4 (p7) and 5.3 (p11)', items:[
        'Peritonsillar abscess (PTA): the commonest complication of acute tonsillitis, mostly in adolescents; 15-36% had earlier oropharyngeal infections (p7)',
        'Retropharyngeal abscess (RPA): more common under 3 years of age (p7)',
        'Every abscess is drained, by accepted surgical practice (p11)']},
      {h:'Non-suppurative', src:'CPG chapter 4 (p7)', items:[
        'Acute rheumatic fever, the most important: about 3 weeks after a streptococcal throat, with arthritis, carditis, chorea, erythema marginatum and subcutaneous nodules (p7)',
        'Its risk after an untreated streptococcal throat is 1%; at least one third of episodes follow a subclinical infection (p7)',
        'Starting an antibiotic up to 9 days late still prevents it (p7)',
        'Acute post-streptococcal glomerulonephritis: usually 3 weeks after a throat or skin infection with certain nephritogenic strains (p7)',
        'Reactive arthritis (p7)']}]}
  ],

  /* What to tell the patient, in the guide's own words: 5.1 (p8), 5.2 (p9) and the algorithm (p12). The CPG has no leaflet. */
  advice:[
    'Most sore throats are caused by a virus and do not need an antibiotic (p8).',
    'Drink enough fluids, and gargle with warm salt water to ease the throat (p8).',
    'Take paracetamol for the pain or fever, as advised (p8).',
    'Avoid aspirin, especially for children (p8).',
    'Throat lozenges or gargles can help a very sore throat (p8).',
    'If you were given an antibiotic to take by mouth, take it for the full 10 days (p9).',
    'Come back to be checked if you are no better 48 hours after starting the antibiotic (p9, p12).'],
  refs:['Ministry of Health Malaysia, Academy of Medicine of Malaysia and Malaysian Society of Infectious Diseases and Chemotherapy. Clinical Practice Guidelines: Management of Sore Throat. MOH/P/PAK/68.03 (GU). April 2003. Academy of Medicine of Malaysia file 284: https://www.acadmed.org.my/view_file.cfm?fileid=284',
    'Summarised, not reproduced: the CPG states no reuse terms. Read the full CPG for the wording.',
    'It states no review date; no newer edition is on the Academy of Medicine of Malaysia list (read 9 Nov 2026).'],
  see:[['#children--pat','Children in the ED: where to triage a child'],['#pain','Pain management (ebook)'],['#gz-rules--kk','Redirect to a Klinik Kesihatan or GP'],['#outpatient-referral','Clinic referrals from the ED'],['#sinusitis-cpg','Rhinosinusitis CPG (2016)']]
};

/* For engine.js (not data): calculator links go through CALC_SEE, because check-data.js accepts only some #calc- routes in
   pathway data. Proposed: 'sore-throat-cpg':[['#calc-analgesia', 'Analgesia by weight']] (and '#calc-mcisaac' if that
   calculator is built; see throat-review.md, section d). */

/* See-also from related entries: links only, their wording stays */
P['children'].see = [...(P['children'].see || []), ['#sore-throat-cpg', 'Sore throat CPG (2003): child antibiotic doses']];
/* The rhinosinusitis entry (sinusitis-cpg) is drafted in parallel: guarded, so this line is harmless if it runs first or that
   entry is not built. If it is not built, also drop '#sinusitis-cpg' from see above (okHref rejects it). */
if (P['sinusitis-cpg']) P['sinusitis-cpg'].see = [...(P['sinusitis-cpg'].see || []), ['#sore-throat-cpg', 'Sore throat CPG (2003)']];
/* Summarised in the guide's own words (Krishna's decision, 9 Nov 2026): its reference tabs say so instead of an acknowledgement */
P['sore-throat-cpg'].own = true;

/* ----- CPG Management of Chronic Obstructive Pulmonary Disease, 2nd edition (November 2009) -----
   Issued by the Ministry of Health Malaysia, the Academy of Medicine of Malaysia and the Malaysian Thoracic Society; it replaced
   the 1998 CPG and was due for review in November 2013 (the page after the cover). It prints no copyright or reuse terms, so
   every line is summarised in the guide's own words (Krishna's decision, 9 Nov 2026): facts, doses and numbers exact, each with
   its printed page; nothing quoted. Printed page = PDF page minus 9; roman front matter = PDF page minus 2. Figures 8-1 to 8-3
   (p37–39) and Table 8-2 (p41) were read from page images: their text layer prints + for ± and > for ≥. The micro sign is
   written µ throughout (the CPG prints both µ and μ). The ebook has no COPD pathway; the department's Asthma Zone flow takes
   known COPD patients and keeps its own wording (rule 6): the differences are in copd-review.md. */
P['copd-cpg'] = {
  title:'COPD: CPG 2009', grp:'cpg', src:'CPG COPD (2009), summarised', isnew:true, hero:'copdcpg',
  lead:'The national guideline for adults with COPD (2nd edition) on a flare-up: danger signs first, then oxygen, inhalers, prednisolone and antibiotics with the CPG\'s doses, then home or admission. Issued 2009, due for review in 2013; no newer edition is on the Academy list. Summarised in the guide\'s own words, with page numbers: the CPG gives no permission to reproduce it.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'CPG Management of Chronic Obstructive Pulmonary Disease, 2nd edition (Ministry of Health, Academy of Medicine of Malaysia and Malaysian Thoracic Society, November 2009), for all adults with COPD (p iii). Printed page numbers; flare-ups are chapter 8 (p33–44). The CPG does not grade how severe a flare-up is: it asks you to judge from the history, examination and tests (8.5, p33).', opts:[
      ['Flare-up of known COPD: assess and treat (Figure 8-2)','ex'],
      ['Admit, or home? (Table 8-1)','t81'],
      ['Antibiotics: who, and which (Table 8-2)','abx'],
      ['Adjust the oxygen by the blood gas (Figure 8-3)','o2'],
      ['Asthma or COPD? (Table 4-2)','which']]},

    /* 8.2 to 8.6 (p33–35) and Figure 8-2, hospital management (p38) */
    ex:{q:'Is this a flare-up of known COPD?', hint:'An exacerbation, as the CPG defines it (8.2, p33): the usual breathlessness, cough or sputum gets worse beyond the day-to-day swing, starts acutely, lasts 48 hours or more and may call for a change in regular medicines. Missed medicines can look like one: take a careful history (8.6, p35).',
      info:['Think of a flare-up when a smoker comes with symptoms of a chest infection (8.3, p33)','Respiratory infection, bacterial or viral, sets off 50 to 60% of flare-ups (8.4, p33)'],
      opts:[['Yes: known COPD, worse than usual','hx'],['Not sure it is COPD','which']]},
    hx:{step:'History, examination and tests (Figure 8-2, p38)', items:[
      'Ask about the current symptoms, treatment from other doctors, how severe the COPD is, and past flare-ups, admissions, ICU stays and NIV or intubation (Figure 8-2, p38)',
      'Check temperature, respiratory rate, pulse rate and rhythm and blood pressure; signs of a poorer outlook: confusion, a lower conscious level, cachexia, respiratory distress, cyanosis, cor pulmonale (8.5.1, p34)',
      'Send: ABG (note the FiO2), FBC, BUSECr, LFT, blood glucose, CXR, ECG, sputum C&S (Figure 8-2, p38)',
      'The ABG is recommended for patients seen in the emergency department, and for an unwell patient even when the SpO2 is good (8.5.4, p34)',
      'Do not do spirometry or peak flow routinely during the flare-up: the readings are not accurate then; spirometry can follow recovery (8.5.2, p34)'], next:'danger'},
    danger:{check:'any', q:'Any danger sign, or an indication for NIV?', hint:'Figure 8-2 (p38) lists the danger signs to look for but gives them no branch; a life-threatening flare-up goes to HDU or ICU (8.9, p36). Table 8-3 (p43) lists the indications for NIV and does not say whether one is enough.',
      items:['Respiratory distress','Tachyarrhythmia','Cyanosis','Heart failure','Exhaustion','NIV: moderate to severe breathlessness, with accessory muscle use and paradoxical abdominal movement','NIV: respiratory rate > 25 breaths per minute','NIV: acidosis, pH 7.25 - 7.35, and/or hypercapnia, PaCO2 > 6.0 kPa (45 mmHg)'],
      opts:[['Yes, present','crit'],['None','tx']]},
    crit:{end:'refer', title:'Danger sign or NIV indication: escalate', items:[
      'A life-threatening flare-up belongs in a high dependency unit or the ICU (8.9, p36)',
      'NIV is for hypercapnic respiratory failure that persists despite the best medical treatment, run by trained staff in HDU or ICU, with a plan for deterioration and agreed limits of treatment (8.11, p43; Recommendations, p44)',
      'Invasive ventilation, among the indications in Table 8-5 (p44): NIV not tolerated or failing; respiratory rate > 35 breaths per minute; pH < 7.25 and/or PaCO2 > 8.0 kPa (60 mmHg); respiratory arrest; somnolence or impaired mental state; hypotension or shock',
      'Whether to ventilate turns on how reversible the trigger is, what the patient wants (or has set out in an advance directive) and whether an ICU bed is available (8.12, p43)',
      'Cover every patient on NIV or invasive ventilation with antibiotics (8.9.4, p40)'],
      links:[['#asthma-zone--up','Asthma Zone flow: uptriage to R1'],['#copd-cpg--tx','First treatment'],['#copd-cpg--o2','Adjust the oxygen']],
      gap:'CPG 8.9 (p36), 8.11 to 8.12 and Tables 8-3 to 8-5 (p43–44). The CPG names HDU or ICU, not a zone or MTS level: in the Green Zone, the department\'s Asthma Zone flow uptriages to R1. The contraindications to NIV are in Table 8-4 (p43).'},
    tx:{step:'First treatment (Figure 8-2, p38)', items:[
      'Controlled oxygen if SpO2 < 90%, aiming for SpO2 90-93%: 24-28% by Venturi mask if available, or 1-2 litres per minute by nasal prongs (Figure 8-2, p38; 8.9.1, p36)',
      'Repeat the ABG 30-60 minutes after starting oxygen, to catch CO2 retention or acidosis (8.9.1, p36); 8.10 says after 30 minutes (p42)',
      'Inhalers: SABA ± SAAC by pMDI and spacer, or by nebuliser (Figure 8-2, p38). SABA by pMDI, 10 to 20 puffs through a spacer, works as well as a nebuliser; nebulisers can spread infection to staff and other patients (8.9.2, p40)',
      'Severe flare-up: nebulised SABA may be combined with SAAC, for example Combivent® 2.5 mL (ipratropium bromide 500 µg, salbutamol 2.5 mg) 6 hourly, or Duovent® 4 mL (ipratropium bromide 500 µg, fenoterol 1.25 mg) 6 hourly (8.9.2, p40); combine SABA and SAAC, by spacer or air-driven nebuliser (8.10, p42)',
      'Steroid: oral prednisolone 30-40 mg daily (8.9.3, p40); IV hydrocortisone if the patient cannot swallow or is vomiting (Figure 8-2, p38). The CPG gives no hydrocortisone dose',
      'Antibiotics if 2 out of 3 cardinal symptoms: purulent sputum, more sputum, more breathlessness (Figure 8-2, p38). Which one: the Antibiotics step'], next:'resp'},
    resp:{q:'After the first treatment: good response, or failure to improve?', hint:'Figure 8-2 (p38). The CPG does not define a good response or say how long to wait. No response to standard treatment: think again, as asthma (which can co-exist), bronchiectasis, diffuse parenchymal lung disease, lung cancer, pulmonary embolism, pneumothorax or heart failure can mimic or worsen a flare-up (8.6, p35).',
      opts:[['Good response','t81'],['Failure to improve','admit']]},

    /* Table 8-1 (p36); the same list sits in Figures 8-1 and 8-2 (p37–38) */
    t81:{check:'any', q:'Any indication for admission?', hint:'Table 8-1 (p36); Figures 8-1 and 8-2 carry the same ten (p37–38). The CPG gives no age for older age and does not define significant co-morbidity. Underlying severe COPD: stage III or IV, in the Severity tab.',
      items:['A marked rise in symptoms, such as sudden breathlessness','Underlying severe COPD','New physical signs, such as cyanosis or peripheral oedema','Haemodynamic instability','Reduced alertness','No response to the first treatment','Significant co-morbidities','A new cardiac arrhythmia','Older age','Not enough support at home'],
      opts:[['Yes, present','admit'],['None','home']]},
    admit:{end:'admit', title:'Admit to hospital', items:[
      'Hospital care (Figure 8-2, p38): controlled oxygen to keep PaO2 > 8 kPa or SpO2 > 90% without worse hypercapnia or acidosis; short-acting inhalers by pMDI and spacer or nebuliser; systemic steroid for 7-14 days; antibiotics if indicated; fluid balance and nutrition; close monitoring; think of NIV or invasive ventilation',
      'IV aminophylline in a severe flare-up when inhaled SABA and SAAC are not enough: loading 250-500 mg (5 mg/kg) over 20 minutes, then 500 µg/kg/hour, adjusted to a theophylline level of 10–20 mg/L or 55–110 µmol/L. No loading dose if already on theophylline; mind its drug interactions (8.9.2, p40)',
      'Subcutaneous heparin against DVT, especially if immobile or in acute on chronic respiratory failure; a diuretic for peripheral oedema; chest physiotherapy only for > 25 mL of sputum a day or a mucus plug with lobar collapse (8.9.5, p42)',
      'Leaving hospital later: the CPG\'s discharge criteria are in the Follow-up tab (8.13, p44)'],
      links:[['#mau-admission','Admission to MAU'],['#referral-rules--ipr','Transfer to IPR (respiratory)'],['#asthma-zone--up','Asthma Zone flow: uptriage to R1']],
      gap:'CPG Figure 8-2 (p38) and 8.9 to 8.10 (p36–42). The CPG names no ward or team and gives no heparin dose. In Figure 8-2 the box of admission indications has no arrow: whether a patient with an indication but a good response may go home, the CPG does not say.'},
    home:{end:'discharge', title:'Good response, no indication for admission: home with follow-up', items:[
      'Check the inhaler technique; send a first presentation of COPD to a specialist (Figure 8-2, p38)',
      'Prescribe (Figure 8-2, p38): the short-acting inhaler (SABA ± SAAC) by pMDI, at a higher dose and more often; oral prednisolone 30-40 mg daily for 7-14 days; enough oral antibiotics, if started',
      'Stepped-up doses (8.8.1, p36): salbutamol 200-400 µg or terbutaline 500 µg every 3-4 hours; ipratropium bromide 40 µg 6 hourly can join it, if the patient is not on it already, until the symptoms settle',
      'Stop the steroid when the flare-up is over: longer courses add side effects, not benefit (8.8.2, p36; 8.9.3, p40)',
      'Every COPD patient should have a SABA, or a SABA/SAAC combination (Berodual®/Combivent®), to use as needed (Figure 6-1, p26)',
      'Spirometry after recovery, at a clinic visit, if never done (8.5.2, p34)'],
      links:[['#copd-cpg--abx','Which antibiotic'],['#asthma-zone--dc','Asthma Zone: the department\'s discharge']],
      gap:'CPG Figure 8-2 (p38), 8.8 (p36) and 8.9.3 (p40). Figure 8-2 sets no time for follow-up after an ED discharge: review within 8 weeks is for patients leaving hospital (8.14, p44). The CPG names no clinic.'},

    /* 8.9.4 (p40) and Table 8-2 (p41), adapted in the CPG from the National Antibiotic Guideline 2008 */
    abx:{check:'score', q:'How many cardinal symptoms?', hint:'Give antibiotics with at least 2 of these 3 (8.9.4, p40; Figures 8-1 and 8-2, p37–38), and to every patient who needs NIV or invasive ventilation (p40).',
      items:[['Purulent sputum',1],['More sputum than usual',1],['More breathless than usual',1]], suggest: s => s >= 2 ? 0 : 1,
      opts:[['2 or 3: antibiotics','abxrf'],['0 or 1','abxno']]},
    abxno:{end:'neutral', title:'Fewer than 2 cardinal symptoms', items:['The CPG gives antibiotics with at least 2 of the 3, or for NIV or invasive ventilation (8.9.4, p40), and does not say what to do with 1'],
      gap:'The CPG words this three ways: purulent sputum alone is enough to start empirical antibiotics (8.5.8, p35); antibiotics for signs of airway infection, a change in sputum colour, more sputum and/or more breathlessness (Recommendations, p42); antibiotics when there are signs of bacterial infection (8.10, p42). Which the Green Zone follows is an open question.'},
    abxrf:{check:'any', q:'Any risk factor (complicated COPD)?', hint:'Table 8-2 (p41). The final choice follows the local antibiotic policy (8.9.4, p40).',
      items:['FEV1 < 50% predicted','> 4 exacerbations/year','> 65 years old','Significant co-morbidity, especially heart disease','Home oxygen','Long-term oral steroid','Antibiotics in the past 3 months'],
      opts:[['Yes, present','abxc'],['None','abxs']]},
    abxs:{end:'neutral', title:'Simple COPD: antibiotic choices', items:[
      'First choice (Table 8-2, p41): an extended spectrum macrolide, such as azithromycin 500 mg once daily for 3 days or clarithromycin 250 mg twice daily for 7 days; or a 2nd or 3rd generation cephalosporin, such as cefuroxime 250-500 mg twice daily for 7 days',
      'Other choices (p41): a β-lactam/β-lactamase inhibitor, such as amoxycillin/clavulanate 625 mg twice daily for 7 days; erythromycin ethylsuccinate 800 mg twice daily for 7 days; doxycycline 100 mg twice daily for 7 days; moxifloxacin 400 mg once daily for 5-7 days'],
      gap:'CPG Table 8-2 (p41), from the National Antibiotic Guideline 2008: whether the hospital\'s current antibiotic policy differs is to confirm.'},
    abxc:{end:'neutral', title:'Complicated COPD: antibiotic choices', items:[
      'May need IV treatment: consider referral to hospital (Table 8-2, p41)',
      'First choice (p41): β-lactam ± β-lactamase inhibitor, such as amoxicillin 1 g three times a day or amoxycillin/clavulanate 2 g twice daily for 7 days; or a 2nd or 3rd generation cephalosporin, such as cefuroxime 500 mg twice daily or ceftriaxone 1 g once daily for 7 days; with or instead: an extended spectrum macrolide, such as azithromycin 500 mg once daily for 3-5 days',
      'Other choices (p41): a fluoroquinolone, such as levofloxacin 750 mg once daily for 5 days; moxifloxacin 400 mg once daily for 5-7 days; ciprofloxacin 250-500 mg twice daily for 5-7 days',
      'At risk of Pseudomonas aeruginosa: an anti-Pseudomonas antibiotic (p41). Risk factors (8.9.4, p40): severe airflow limitation; admission in the last 3 months; 4 courses of antibiotics in the last year; a severe flare-up; Pseudomonas grown in a past flare-up or while stable'],
      gap:'CPG Table 8-2 (p41) and 8.9.4 (p40). The CPG names no anti-Pseudomonas antibiotic. Whether the hospital\'s current antibiotic policy differs is to confirm.'},

    /* Figure 8-3, adjusting oxygen (p39), read from the page image */
    o2:{q:'On oxygen, with a blood gas: which fits?', hint:'Figure 8-3 (p39). Adequate oxygenation: SpO2 ≥ 90% or PaO2 ≥ 8 kPa (60 mmHg). In every case, optimise the inhalers and other treatment, and refer to a specialist if the patient does not improve. The figure does not define a high PaCO2.',
      opts:[['Adequate oxygenation, PaCO2 normal or low','o2a'],['Adequate oxygenation, PaCO2 high','o2b'],['Not adequate, PaCO2 normal or low','o2c'],['Not adequate, PaCO2 high','o2d']]},
    o2a:{end:'neutral', title:'Keep the oxygen as it is: aim for SpO2 ≥ 95%', items:['Keep the same concentration or flow; aim for SpO2 ≥ 95%; monitor the SpO2 or ABG (Figure 8-3, p39)'],
      gap:'Figure 8-3 (p39). Figures 8-1 and 8-2 aim for SpO2 90-93% for all (p37–38); above 93-95% harms hypercapnic patients (8.5.3, p34).'},
    o2b:{end:'neutral', title:'Keep or lower the FiO2: PaO2 ≥ 8 kPa (60 mmHg), SpO2 of 90-93%', items:['Keep or lower the FiO2, aiming for PaO2 ≥ 8 kPa (60 mmHg) and SpO2 of 90-93% (Figure 8-3, p39)','Think of NIV or mechanical ventilation if pH < 7.35; watch the ABG closely (p39)'],
      links:[['#copd-cpg--crit','Danger sign or NIV indication: escalate']],
      gap:'Figure 8-3 (p39). Elsewhere the acidosis cut-off is pH < 7.36 (8.5.4, p34) and NIV is for pH 7.25 - 7.35 (Table 8-3, p43).'},
    o2c:{end:'neutral', title:'Increase the oxygen: aim for SpO2 ≥ 95%', items:['Raise the concentration or flow; aim for SpO2 ≥ 95%; monitor the SpO2 or ABG (Figure 8-3, p39)'],
      gap:'Figure 8-3 (p39). Figures 8-1 and 8-2 aim for SpO2 90-93% for all (p37–38); above 93-95% harms hypercapnic patients (8.5.3, p34).'},
    o2d:{end:'neutral', title:'Increase the controlled FiO2: PaO2 ≥ 8 kPa (60 mmHg), SpO2 of 90-93%', items:['Raise the controlled FiO2, aiming for PaO2 ≥ 8 kPa (60 mmHg) and SpO2 of 90-93% (Figure 8-3, p39)','Think of NIV or mechanical ventilation if pH < 7.35; watch the ABG closely (p39)'],
      links:[['#copd-cpg--crit','Danger sign or NIV indication: escalate']],
      gap:'Figure 8-3 (p39). Elsewhere the acidosis cut-off is pH < 7.36 (8.5.4, p34) and NIV is for pH 7.25 - 7.35 (Table 8-3, p43).'},

    /* 4.9 and Table 4-2 (p13–14) */
    which:{end:'neutral', title:'Asthma or COPD: how they usually differ', items:[
      'Onset: asthma usually in early childhood, though at any age; COPD usually > 40 years old (Table 4-2, p14)',
      'Smoking: asthma, any history; COPD, usually > 10 pack-years. Pack-years: (cigarettes a day ÷ 20) x years smoked (4.3, p11)',
      'Atopy, and a family history of asthma or atopy: common in asthma, uncommon in COPD (p14)',
      'Pattern: asthma comes and goes, with cough at night or on exertion and little sputum; COPD persists and slowly worsens, with a morning cough and sputum (p14)',
      'Reversibility: typical of asthma; in COPD the airflow may improve but never becomes normal (p14)',
      'When the two cannot be told apart, the CPG takes both to be present (4.9, p13); asthma can co-exist with COPD (8.6, p35)'],
      links:[['#asthma-cpg','Asthma in adults CPG (2024)'],['#copd-cpg--hx','COPD flare-up: assess and treat']],
      gap:'CPG 4.9 and Table 4-2 (p13–14). The asthma CPG (2024) excludes asthma-COPD overlap (its p vii): which pathway the Green Zone uses for a patient who may have both is an open question.'}
  },

  /* Reference tabs: each line names its CPG page */
  notes:[
    {l:'Severity', notes:[
      {h:'Stages of COPD', src:'Table 1-3 (p4), by spirometry after a bronchodilator or by symptoms; every stage has FEV1/FVC < 0.70. If FEV1 and symptoms disagree, follow the symptoms (p4).', items:[
        'Stage I, mild: FEV1 ≥ 80% predicted; breathless when hurrying on the flat or climbing a gentle slope (MMRC 1)',
        'Stage II, moderate: 50% ≤ FEV1 < 80% predicted; walks more slowly than others of their age on level ground, or must stop for breath after about 100 m or a few minutes (MMRC 2 to 3)',
        'Stage III, severe: 30% ≤ FEV1 < 50% predicted; cannot leave the house for breathlessness, or is breathless while dressing (MMRC 4)',
        'Stage IV, very severe: FEV1 < 30% predicted, or FEV1 < 50% predicted with chronic respiratory failure; by symptoms, chronic respiratory failure or signs of right heart failure']},
      {h:'Respiratory failure', src:'Note to Tables 1-1 and 1-3 (p2, p4) and 8.5.4 (p34)', items:[
        'On room air: PaO2 < 8.0 kPa (60 mmHg) and/or SaO2 < 90%, with or without PaCO2 > 6.7 kPa (50 mmHg) (p34)',
        'Worse with respiratory acidosis, pH < 7.36 with a pCO2 of 6 - 8 kPa (45 – 60 mmHg): an indication for NIV or invasive ventilation (p34)']}
    ]},
    {l:'Oxygen', notes:[
      {h:'Targets and devices', src:'8.5.3 (p34), 8.9.1 (p36), Figures 8-1 to 8-3 (p37–39) and 8.10 (p42)', items:[
        'Give oxygen if SpO2 < 90%; with no ABG result yet, controlled oxygen by Venturi mask, aiming for SpO2 ≥ 90%, to avoid CO2 narcosis (p34)',
        'In hypercapnic respiratory failure, pushing the SpO2 above 93-95% raises morbidity and mortality; pulse oximetry does not show the CO2 (p34)',
        'Aim for PaO2 ≥ 8 kPa or ≥ 60 mmHg or SpO2 ≥ 90%, without acidosis or worse hypercapnia (8.9.1, p36). The algorithms aim for SpO2 90-93% (p37–38); the hospital box of Figure 8-2 prints PaO2 > 8 kPa or SpO2 > 90% (p38)',
        '24-28% by Venturi mask if available, or 1-2 litres per minute by nasal prongs; ABG 30-60 minutes later, then as the clinical state needs (p36); 8.10 says after 30 minutes (p42)']}
    ]},
    {l:'Follow-up', notes:[
      {h:'Leaving hospital', src:'8.13 (p44), written for patients discharged after admission', items:[
        'Inhaled bronchodilator needed no more often than every 4 hours','Walks across the room, if walking before','Eats and sleeps without often waking breathless','Clinically stable for 12-24 hours','ABG or SpO2 stable for at least 12-24 hours','Patient or carer understands the disease and how to use the medicines at home','Follow-up arranged; give the patient a copy of the discharge summary']},
      {h:'Review after discharge', src:'8.14 (p44)', items:[
        'Within 8 weeks: coping at home; spirometry; inhaler technique; understanding of the treatment; smoking; need for long-term oxygen or a home nebuliser (stage IV); pulmonary rehabilitation; vaccination: influenza, with or without pneumococcal; a self-management plan']},
      {h:'Smoking', src:'5.3 to 5.5 (p16–18)', items:[
        'Every smoker, with COPD or at risk of it, should be offered the strongest quit-smoking support on hand (p16)','Even three minutes of advice to quit gives quit rates of 5-10% (p18)','The 5A steps: ask, advise, assess, assist, arrange (p17)']}
    ]}
  ],

  /* The CPG has no patient leaflet: these lines restate its education points (6.2, p20) and home treatment (p36–38) */
  advice:[
    'Use your reliever inhaler more often until this flare-up settles, as your doctor has written (p36, p38)',
    'Take the prednisolone once a day for the days written, then stop (p36, p40)',
    'If you were given antibiotics, take them as written (p38)',
    'Show your inhaler and spacer technique at each visit; a spacer helps if the technique is poor (p14, p20)',
    'Ask your clinic for a self-management plan: how to spot a flare-up, what to take, and when to get help (p20)',
    'Stopping smoking does more than anything else to slow COPD down; ask for help to quit (p19)',
    'A flu vaccine every year lowers the risk of flare-ups (p21)',
    'Keep your follow-up appointment (p38)'],
  refs:['Ministry of Health Malaysia, Academy of Medicine of Malaysia and Malaysian Thoracic Society. Clinical Practice Guidelines: Management of Chronic Obstructive Pulmonary Disease, 2nd edition. Putrajaya: CPG Secretariat, Health Technology Assessment Section, Medical Development Division, Ministry of Health Malaysia; November 2009. MOH/P/PAK/197.09(GU). Available at http://www.moh.gov.my, http://www.acadmed.org.my and http://www.mts.org.my',
    'Summarised, not reproduced: the CPG states no reuse terms. Read the full CPG for the wording.',
    'It replaced the 1998 CPG and was due for review in November 2013 (the page after the cover). It drew on the GOLD global strategy (2008) and the Canadian Thoracic Society recommendations (2007) (p ii); Table 8-2 is adapted from the National Antibiotic Guideline 2008 (p41).'],
  see:[['#asthma-zone','Asthma Zone flow (department, Nov 2025)'],['#asthma-cpg','Asthma in adults CPG (2024)'],['#asthma','Bronchial asthma (ebook pathway)'],['#pneumonia','Community acquired pneumonia (ebook pathway)'],['#pneumonia--curb','CURB-65 (ebook pneumonia pathway)'],['#mau-admission','Admission to MAU']]
};

/* The department's Asthma Zone flow and the asthma entries point to the national COPD guideline: links only, their wording stays */
P['asthma-zone'].see = [...(P['asthma-zone'].see || []), ['#copd-cpg', 'COPD CPG (2009)']];
P['asthma-cpg'].see = [...(P['asthma-cpg'].see || []), ['#copd-cpg', 'COPD CPG (2009)']];
P['asthma'].see = [...(P['asthma'].see || []), ['#copd-cpg', 'COPD CPG (2009)']];
P['pneumonia'].see = [...(P['pneumonia'].see || []), ['#copd-cpg', 'COPD flare-up CPG (2009)']];
/* Optional, as the gout rule and the children's battery step do: where the CPG differs on the department's own step, the link sits
   on the step. The Asthma Zone discharge (BA/COPD protocol, 27 Mar 2020) gives prednisolone 30 mg once daily for 5 days; for COPD
   the CPG gives 30-40 mg daily for 7-14 days (p36, p40). Which the Green Zone follows for COPD is an open question. */
P['asthma-zone'].nodes.dc.links = [...(P['asthma-zone'].nodes.dc.links || []), ['#copd-cpg--home', 'COPD (CPG 2009): prednisolone 30-40 mg for 7-14 days']];
P['copd-cpg'].own = true;

/* ----- CPG Management of Type 2 Diabetes Mellitus, 6th edition (December 2020), summarised -----
   Title page: Ministry of Health Malaysia, Academy of Medicine Malaysia, Malaysia Endocrine & Metabolic Society, Family
   Medicine Specialists Association of Malaysia and Diabetes Malaysia. MOH/P/PAK/447.20(GU)-e. No copyright or reproduction
   notice anywhere in its 284 PDF pages: summarised in the guide's own words with printed page numbers, never quoted
   (Krishna's decision, 9 Nov 2026). Printed page = PDF page minus 2. Every number checked against the text layer; Figures
   3-2, 4-1, 4-2 and 4-3, Tables 4-2 to 4-5 and 6-3 and Appendix 7 also against page images (t2dm-review.md). Review was due
   in 2025 (p2). The ebook's hyperglycaemia and hypoglycaemia pathways stay as written (rule 5): the differences are open items. */
P['t2dm-cpg'] = {
  title:'Type 2 diabetes: CPG 2020', grp:'cpg', src:'CPG Type 2 Diabetes Mellitus, 6th ed. (2020), summarised', isnew:true, hero:'t2dmcpg',
  lead:'The national guideline for type 2 diabetes, 6th edition: treat a low sugar, pick out DKA, HHS and euglycaemic ketoacidosis and start treatment before handing over, then decide on tablets and insulin at discharge. Issued December 2020, due for review in 2025 (p2); no newer edition is on the Academy list. Summarised in the guide\'s own words, with page numbers: the CPG gives no permission to reproduce it.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'For adolescents and adults with type 2 diabetes or at risk of it; pregnancy has its own CPG (p9). Printed page numbers.', opts:[
      ['Low sugar: treat it (4.1)','hypo'],
      ['Unwell with a high sugar, or on an SGLT2 inhibitor: DKA, HHS or euglycaemic ketoacidosis? (4.2 to 4.4)','dka'],
      ['High sugar, no crisis: new or known diabetes','dm'],
      ['Insulin: start, adjust or split a daily dose','ins'],
      ['Tablets when unwell or with weak kidneys','oral']]},

    /* 4.1 Hypoglycaemia (p116 to 121), Figure 4-1 (p119) */
    hypo:{q:'Glucose <3.9 mmol/L: can the patient take sugar by mouth?', hint:'Hypoglycaemia: glucose <3.9 mmol/L, typical symptoms (Low sugar tab) or a response to carbohydrate (p116). Level 1: <3.9 but ≥3.0 mmol/L. Level 2: <3.0 mmol/L, act at once. Level 3: needs another person\'s help, with no glucose cut-off (Table 4-2, p117).',
      opts:[['Conscious and able to treat self','h15'],['Level 3 but still conscious','h20'],['Unconscious','hiv']]},
    h15:{step:'Give 15 g of simple carbohydrate by mouth', items:[
      'For example 1 tablespoon of honey, 150-200 ml of fruit juice or a regular soft drink, or 3 teaspoons of table sugar in water (p118)',
      'On acarbose: glucose (dextrose) tablets, or milk or honey if there are none (p118)',
      'Check the plasma glucose again after 15 minutes (p118)'], next:'hchk'},
    h20:{step:'Give 20 g of carbohydrate by mouth', items:['Level 3 and still conscious: 20 g, then the same checks as for Levels 1 and 2 (p118)'], next:'hchk'},
    hiv:{step:'Unconscious: IV dextrose, or glucagon', items:[
      'D50% 20-50 ml IV over 1-3 minutes (p118); Figure 4-1 prints 25 ml-50 ml (p119)',
      'Or D20% 75-100 ml over 15 minutes (p118)',
      'Or glucagon 1 mg SC or IM (p118); IM when there is no IV line (Figure 4-1, p119)'], next:'hchk'},
    hchk:{q:'Glucose rechecked every 15 minutes: above 3.9 mmol/L?', hint:'Repeat the treatment until the glucose is >3.9 mmol/L (Figure 4-1, p119).',
      opts:[['Yes, above 3.9','hafter'],['Still low, conscious','h15'],['Still low, unconscious','hiv'],['Keeps falling again','hpers']]},
    hpers:{end:'neutral', title:'Low sugar that keeps coming back: not covered', items:['The CPG gives no infusion, no limit on repeat doses and no admission rule for recurrent hypoglycaemia (4.1, p116 to 121)'],
      links:[['#hypoglycaemia--persist','Ebook: persistent hypoglycaemia']],
      gap:'Not in the source: Figure 4-1 (p119) stops at repeating the treatment.'},
    hafter:{step:'Above 3.9 mmol/L: feed, then find the cause', items:[
      'Eat the usual meal or snack due at that time of day, so it does not recur (p118; Figure 4-1, p119)',
      'Find the cause, teach prevention and review the diabetes treatment; avoid over-correcting (p118)'], next:'hdrug'},
    hdrug:{q:'Which glucose-lowering drug is the patient on?', hint:'Risk factors for lows (p117): older age; marked cognitive impairment; limited health knowledge; poorly controlled, swinging glucose; unawareness; long use of insulin; renal or hepatic impairment; neuropathy.',
      opts:[['Sulphonylurea or repaglinide','hsu'],['Insulin','hins'],['Other drugs only','hlow']]},
    hsu:{end:'neutral', title:'On a sulphonylurea: review the drug and dose', items:[
      'Lows are its main adverse effect, more so with renal impairment, liver cirrhosis or older age; gliclazide, glipizide and glimepiride cause fewer (p55)',
      'Glibenclamide: not recommended over 60 years (p55, p187); contraindicated in renal impairment (p56)',
      'NSAIDs, anti-thyroid drugs, sulpha drugs, anticoagulants and α-blockers raise the risk (p55)',
      'Adjust the dose, or consider a drug without a hypoglycaemia risk (p120)',
      'Repaglinide with gemfibrozil: prolonged lows; contraindicated (p56)'],
      links:[['#hypoglycaemia--risk','Ebook: high-risk features'],['#hypoglycaemia--dc','Ebook: discharge criteria']],
      gap:'No ED observation time or discharge criteria after a low in the CPG (4.1): the ebook\'s are linked.'},
    hins:{end:'neutral', title:'On insulin: look at the dose and timing', items:[
      'After a low, cut the basal or prandial insulin by 10-20% (Figure 3-2, p75)',
      'NPH insulin at bedtime, preferably not before 10 pm (p76)',
      'On basal insulin, check an early-morning glucose (2-5 am) from time to time; consider a basal analogue (p120)',
      'Unawareness: review the regimen, relax the targets, avoid lows for up to 3 months (Recommendations 3 to 5, p121)'],
      links:[['#hypoglycaemia--risk','Ebook: high-risk features'],['#hypoglycaemia--dc','Ebook: discharge criteria']],
      gap:'No ED observation time or discharge criteria after a low in the CPG (4.1): the ebook\'s are linked.'},
    hlow:{end:'neutral', title:'Other drugs: few lows on their own', items:[
      'Alone, metformin usually causes none (p54), acarbose none (p57), DPP4 inhibitors minimal risk (p58), SGLT2 inhibitors about placebo level (p59)',
      'Evaluate the cause (p118)'],
      links:[['#hypoglycaemia--dc','Ebook: discharge criteria']],
      gap:'The CPG lists no causes of hypoglycaemia beyond drugs and risk factors (p55, p117).'},

    /* 4.2 DKA (p122 to 127), Tables 4-3 to 4-5, Figure 4-2 (p127) */
    dka:{check:'all', q:'DKA: all three criteria met?', hint:'All 3 must be met (p122). Send venous gas, ketones, BUSE and creatinine, FBC, urinalysis; cultures, chest X-ray and ECG if indicated. Triggers: infection, missed treatment, ACS, stroke, surgery, steroids (p122).',
      items:['Capillary glucose >11 mmol/L','Capillary ketones >3 mmol/L, or urine ketones ≥2+','Venous pH <7.3 and/or bicarbonate <15 mmol/L'],
      opts:[['All met','dkatx'],['Not all met','hhs']]},
    dkatx:{step:'DKA: start treatment', items:[
      'SBP <90 mmHg: 500 ml 0.9% saline over 10-15 minutes, again if still <90, then consider a colloid; once >90, 1000 ml over 60 minutes (Table 4-3, p124)',
      'SBP ≥90 mmHg: 1 L 0.9% saline in the first hour, then 1 L with KCl over the next 2, 4 and 6-8 hours, by hydration (Table 4-4, p124)',
      'Potassium first: <3.5 mmol/L, hold insulin, give 20-40 mmol/L KCl until ≥3.5; 3.5-5.5, 20-30 mmol KCl per litre; >5.5, none; at most 40 mmol/h; none without urine (p124 to 125; Figure 4-2, p127)',
      'Insulin: FRIII 0.1 unit/kg/hr by estimated weight, 50 units in 0.9% saline to 50 ml; no sliding scale; SC long-acting insulin may continue (p116, p125)',
      'Glucose hourly: falling <3 mmol/L/hr over the first 2-3 hours despite fluids, raise by 1 U/hr; <14 mmol/L, switch to or add 5% dextrose and halve the rate; not below 14.0 mmol/L in the first 12-24 hours (p123, p125)',
      'No bicarbonate unless the pH stays <6.9 despite fluids and insulin (p125). Slower fluids under 18 years, in the elderly, in pregnancy and in heart or renal failure (p124)'], next:'dkasev'},
    dkasev:{check:'any', q:'Severe DKA, or a high-risk patient?', hint:'Anion gap = (Na + K) minus (Cl + HCO3) (p123).',
      items:['Venous bicarbonate <5 mmol/L','Plasma ketones >6 mmol/L','Venous pH <7.1','Potassium <3.5 mmol/L on arrival','GCS <12','SpO2 <92% on air (by ABG)','Systolic BP <90 mmHg','Pulse >100 beats/minute','Anion gap >16','High risk: elderly, pregnant, heart or kidney failure, other serious illness'],
      opts:[['Yes, any','dkahdu'],['None','dkaho']]},
    dkahdu:{end:'refer', title:'Severe or high-risk DKA: refer for HDU or ICU', items:['Severe or high-risk DKA: HDU or ICU (p123; Recommendation 2, p133)','Mortality is <1% overall but >5% in the elderly, often from the trigger (p122)'],
      links:[['#t2dm-cpg--eu','On an SGLT2 inhibitor: euglycaemic ketoacidosis'],['#mau-admission','Admission to MAU: DKA is an exclusion'],['#hyperglycaemia--dka','Ebook: DKA']],
      gap:'CPG 4.2 (p122 to 127).'},
    dkaho:{end:'refer', title:'DKA: treat and hand over', items:['Aims: ketones down by at least 0.5 mmol/L/hr or bicarbonate up by 3 mmol/L/hr, glucose down by at least 3 mmol/L/hr, potassium normal (p123)','Resolved at pH >7.3 and plasma ketones <0.6 mmol/L; keep the infusion until then (p126)'],
      links:[['#t2dm-cpg--eu','On an SGLT2 inhibitor: euglycaemic ketoacidosis'],['#mau-admission','Admission to MAU: DKA is an exclusion'],['#hyperglycaemia--dka','Ebook: DKA']],
      gap:'The CPG does not say where DKA without severe features is managed. In HKL, DKA and HHS are MAU exclusions (department note).'},

    /* 4.4 HHS (p129 to 133), Figure 4-3 (p132) */
    hhs:{check:'all', q:'HHS: all three present?', hint:'Criteria (p129). Effective osmolality is twice the sodium plus the glucose, in mmol/L, without urea; the measured sodium reads falsely low, so no hypertonic saline (p129). Expect ketones <3.0 mmol/L, pH >7.3, HCO3 >15 mmol/L; if acidotic, consider mixed DKA and HHS or another cause (p130). Triggers: infection (30-60%), missed treatment, stroke or MI, diuretics, steroids, antipsychotics (p130).',
      items:['Severe dehydration','Plasma glucose >30 mmol/L','Serum osmolality >320 mosmol/kg'],
      opts:[['All present','hhstx'],['Not all','eu']]},
    hhstx:{end:'refer', title:'HHS: start treatment and hand over to HDU', items:[
      'Manage intensively in HDU or an equal level of care (p129)',
      '0.9% saline 1 L over the first 1-2 hours, then reassess; then 250-500 ml/hr, as 0.45% saline if sodium >145 mmol/L, otherwise 0.9% (Figure 4-3, p132)',
      'Insulin: FRIII 0.05 U/kg/hr (Figure 4-3, p132); potassium as for DKA, holding insulin while K <3.5 mmol/L',
      'Lower glucose by 4-6 mmol/L/hr and osmolality by 3-8 mosm/kg/hr; sodium may fall no more than 10 mmol/L in 24 hours (p131)',
      'Cautious fluids in heart or renal failure; prophylactic LMWH unless contraindicated (p131)'],
      links:[['#hyperglycaemia--hhs','Ebook: HHS'],['#blood-tests--gas','Blood gas or serum osmolality']],
      gap:'The text gives no insulin rate; Figure 4-3 starts at 0.05 U/kg/hr and also reduces to 0.05 U/kg/hr below 14 mmol/L (p132).'},

    /* 4.3 Euglycaemic ketoacidosis (p128) */
    eu:{q:'Ketoacidosis with a glucose <11.0 mmol/L?', hint:'Euglycaemic ketoacidosis: glucose <11.0 mmol/L by definition, though most run >11.0 but below about 15-17 mmol/L (p128). Seen with SGLT2 inhibitors and in pregnancy. On an SGLT2 inhibitor with poor intake, fasting, acute illness or recent surgery: check ketones, and a gas and anion gap if needed (p128).',
      opts:[['Yes','eudka'],['No ketoacidosis','dm']]},
    eudka:{end:'refer', title:'Euglycaemic ketoacidosis: treat as DKA, with dextrose', items:[
      'DKA treatment, but correct dehydration with 5% dextrose saline or 5% dextrose; 10% dextrose if the glucose is low without clinical dehydration (p128)',
      'Withhold the SGLT2 inhibitor; restart once the ketoacidosis has resolved and the patient is eating (p128)',
      'Triggers on SGLT2 inhibitors: acute illness (for example infection), major surgery lately, a cut or missed insulin dose (p128)'],
      links:[['#t2dm-cpg--dkatx','DKA treatment'],['#dengue-cpg--msglt','Dengue CPG: SGLT2 inhibitor while unwell']],
      gap:'DKA needs a glucose >11 mmol/L (p122), this one <11.0 mmol/L: neither covers exactly 11.0. The department\'s blood gas note (DXT over 11 with ketones of 3 or less: not DKA) has no line for a low glucose on an SGLT2 inhibitor: still to confirm.'},

    /* Not a crisis: diagnosis (2.4, p24 to 29) and first treatment (3.6, 3.7) */
    dm:{q:'Known diabetes?', opts:[['No: a new high glucose','newdm'],['Yes: known type 2 diabetes','known']]},
    newdm:{q:'Symptoms of a high glucose?', hint:'Thirst, eating more, passing more urine or at night, tiredness, weight change, blurred vision, repeated infections (Table 3-1, p32).',
      opts:[['Symptomatic','dxs'],['No symptoms','dxa']]},
    dxs:{step:'Symptomatic: one abnormal result confirms diabetes', items:['Venous plasma glucose random ≥11.1 mmol/L or fasting ≥7.0 mmol/L (Table 2-3, p25), or HbA1c ≥6.3% (≥45 mmol/mol) (Table 2-5, p26)'], next:'newtx'},
    dxa:{step:'No symptoms: two abnormal results are needed', items:[
      'Two abnormal venous glucose results on separate occasions, or one plus an abnormal HbA1c on the same sample (Figure 2-2, p29)',
      'A capillary glucose ≥7.8 mmol/L random or ≥5.6 mmol/L fasting needs a confirming test (p24)',
      'HbA1c does not diagnose under 18, on steroids, with anaemia or haemoglobin variants, or in CKD stage 4 or 5, among others (p27), nor at the point of care (p85)'], next:'newtx'},
    newtx:{end:'neutral', title:'New type 2 diabetes: first treatment', items:[
      'Metformin first, unless not tolerated or contraindicated (Recommendation 2, p69): 500 mg once daily, raised weekly, with or after meals (p54; Table 3-8, p55)',
      'Insulin first for symptomatic hyperglycaemia with ongoing catabolism, or HbA1c >10% or FPG >13.0 mmol/L (p70; Figure 3-2, p75)',
      'HbA1c target <7.0% for most (Table 3-5, p42)'],
      links:[['#hyperglycaemia--bg','Ebook: new high glucose in the ED'],['#emacc','EMACC follow-up']],
      gap:'The CPG is written for clinic care: no ED threshold for treating a random glucose and no follow-up interval after an ED visit. The ebook\'s thresholds and EMACC are linked.'},

    /* Known diabetes in acute illness (6.1, p178 to 181) */
    known:{check:'any', q:'Any reason to stop the tablets?', hint:'In hospital, stop oral glucose-lowering drugs for any of these; stable patients without them can stay on their home medicines (p179).',
      items:['Poor oral intake','Acute kidney injury','IV contrast (metformin)','Illness becoming critical','Organ failure: renal, liver or heart'],
      opts:[['Yes, present','stop'],['None','keep']]},
    stop:{end:'neutral', title:'Stop the tablets: insulin is preferred', items:[
      'Insulin is preferred in hospital, on a scheduled regimen; sliding scale is strongly discouraged (p178 to 180)',
      'Not eating well or nil by mouth: basal plus insulin, or a variable rate IV insulin infusion (p179)',
      'Target 7.8-10 mmol/L; change treatment if the glucose falls to ≤3.9 mmol/L without an obvious reason (p179)'],
      links:[['#t2dm-cpg--sglt','SGLT2 inhibitor when unwell'],['#hyperglycaemia--known','Ebook: known diabetes, high glucose']],
      gap:'CPG 6.1 is written for inpatients: no rule for sending home a patient who cannot take the tablets, and no outpatient sick-day rules (sick day is named only in the Ramadan advice, p195).'},
    keep:{step:'Keep the home medicines; check what changes', items:[
      'Stable and eating well: basal bolus insulin or the oral drugs, if no contraindication (p179)',
      'Check adherence before intensifying insulin (Recommendation 3, p77)'], next:'ins'},

    /* Insulin (3.6.5, p70 to 77; 4.2 D, p126) */
    ins:{q:'Insulin: what do you need?', hint:'Insulin can be started safely as an outpatient; everyone on it should self-monitor, adjust their doses and know how to treat a low (p73).',
      opts:[['Start insulin','istart'],['Already on insulin: adjust','iadj'],['Split a total daily dose into basal and bolus','isplit']]},
    istart:{end:'neutral', title:'Start basal insulin (Figure 3-2)', items:[
      'When: symptomatic hyperglycaemia; HbA1c >10% or FPG >13.0 mmol/L; or HbA1c >7% (or above target) on maximal tablets (Figure 3-2, p75)',
      'Basal insulin 10 U once daily, or 0.1-0.2 U/kg/day; titrate to the fasting target, for example up 2 U every 3 days without lows (p73)',
      'After a low, cut the dose by 10-20% (Figure 3-2, p75)',
      'Keep metformin unless not tolerated or contraindicated (p68); a sulphonylurea may need reducing or stopping (Recommendation 2, p77)'],
      links:[['#hyperglycaemia--known','Ebook: known diabetes, high glucose']],
      gap:'The CPG starts insulin in clinic: it does not say who starts it in the ED or how follow-up is arranged.'},
    iadj:{end:'neutral', title:'Adjust insulin', items:[
      'Basal plus: prandial insulin 4 U per meal or 10% of the basal dose, titrated by 1-2 U or 10-15% every 3 days (Figure 3-2, p75)',
      'Go beyond basal when HbA1c stays above target, the basal dose is >0.5 U/kg, or the FPG is at target (Figure 3-2, p75)',
      'A total daily dose >1.5-2.0 U/kg: look for non-adherence, wrong dose or technique, and hidden infection (p76)'],
      links:[['#t2dm-cpg--hins','After a low on insulin']],
      gap:'CPG 3.6.5 (p70 to 77), written for clinic follow-up.'},
    isplit:{end:'neutral', title:'Split a total daily dose: what the CPG gives', items:[
      'After DKA, moving from IV to SC insulin: TDD = weight in kg times 0.5 U-0.75 U; use 0.75 U/kg if more insulin resistant, for example obese or with acanthosis nigricans (p126)',
      'Split: 50% of the TDD at bedtime as long-acting insulin; the rest divided equally before breakfast, lunch and dinner (p126)',
      'In general, the prandial share should not be >50% of the TDD (p76)',
      'Already on insulin before: consider the old regimen, adjusted (p126). After HHS, lower doses may do (p131)'],
      links:[['#hyperglycaemia--known','Ebook: TDD by Table 1.0']],
      gap:'The CPG gives this TDD and split only for the move off an insulin infusion after DKA (p126); outside DKA it starts with basal insulin (Figure 3-2, p75). The ebook\'s Table 1.0 gives 0.2 to 0.5 unit/kg/day. Which the Green Zone uses is still to confirm.'},

    /* Tablets in illness and in CKD: 3.6 (p54 to 62), 5.2 (p144), 6.1 (p179), Appendix 7 (p217 to 219) */
    oral:{q:'Which drug?', hint:'The Kidneys tab has the main drugs by GFR (Appendix 7, p217 to 219).',
      opts:[['Metformin','met'],['SGLT2 inhibitor (a gliflozin)','sglt'],['Sulphonylurea','hsu']]},
    met:{end:'neutral', title:'Metformin', items:[
      'eGFR 45-59: full dose, less if prone to poor perfusion or hypoxaemia; 30-44: halve the dose; <30: avoid (p144; Appendix 7, p217)',
      'In hospital, stop it with poor intake, AKI, IV contrast, critical illness or organ failure (p179); in stable heart failure it may continue while eGFR stays >30 (p158)',
      'Lactic acidosis: rare (<1 case per 100,000 treated patients), mostly with renal impairment (p54)'],
      links:[['#hyperglycaemia--mtf','Ebook: starting metformin'],['#dengue-cpg--mmet','Dengue CPG: metformin']],
      gap:'The ebook lists an eGFR under 45 among its metformin contraindications; the CPG halves the dose at 30-44 (p144, p217): still to confirm.'},
    sglt:{end:'neutral', title:'SGLT2 inhibitor', items:[
      'May need holding for a while in intercurrent illness or surgery (p60)',
      'Risks: genital fungal infection, UTI, volume depletion, DKA, and euglycaemic ketoacidosis when unwell (p60)',
      'Withhold it in ketoacidosis; restart once resolved and eating (p128)',
      'Do not start at eGFR <30, but may continue if already on it; stop at the start of dialysis (p60, p144)'],
      links:[['#t2dm-cpg--eu','Euglycaemic ketoacidosis'],['#dengue-cpg--msglt','Dengue CPG: SGLT2 inhibitor while unwell']],
      gap:'Appendix 7 (p218) prints avoid at GFR <30, against continue if already started (p60, p144). No outpatient sick-day rule in the CPG.'}
  },

  notes:[
    {l:'Low sugar', notes:[
      {h:'Symptoms', src:'Table 4-1 (p116). The glucose at which symptoms start varies widely.', items:['Autonomic: trembling, palpitations, sweating, anxiety, hunger, nausea, tingling','Neuroglycopenic: poor concentration, confusion, weakness or stroke-like signs, drowsiness, vision change, speech difficulty, headache, seizures or coma']}
    ]},
    {l:'Kidneys', notes:[
      {h:'Main drugs by GFR', src:'Appendix 7 (p217 to 218), GFR in ml/min/1.73 m2. The Quick Reference prints other metformin bands (45-60, <45); the main CPG is followed.', table:{head:['Drug','By GFR'], rows:[
        ['Metformin','45-59 no change; 30-44 halve; <30 avoid'],
        ['Glibenclamide','60-89 caution; below 60 avoid'],
        ['Gliclazide, glipizide','No change down to 30; <30 caution; preferred in CKD (p219)'],
        ['Glimepiride','Start 1 mg once daily; ≥15 caution; <15 avoid'],
        ['Sitagliptin','>50 no change; 30-<50 50 mg once daily; <30 25 mg once daily'],
        ['Linagliptin','No change'],
        ['SGLT2 inhibitors','<30 avoid; at 30-59 each drug differs (p218)']]}}
    ]}
  ],
  advice:[
    'Low sugar (under 3.9 mmol/L): take 15 g of quick sugar, such as 1 tablespoon of honey, 150-200 ml of fruit juice or a regular soft drink, or 3 teaspoons of sugar in water. Check again after 15 minutes and repeat if still low (p118)',
    'On acarbose, use glucose tablets, or milk or honey (p118)',
    'When the sugar is back up, eat your usual meal or snack (p118)',
    'If you are at risk of low sugar, avoid driving, cycling, swimming and heavy machinery (p117)',
    'On insulin: check your sugar at home, learn to adjust your dose, and know the signs of a low and how to treat it (p73)',
    'Know what brings on DKA and HHS, such as missed treatment and infection (p122, p130; Recommendation 3, p133)',
    'If you take an SGLT2 inhibitor and fall ill, it may need to be stopped for a while (p60)',
    'Ramadan: break the fast if your sugar is under 3.3 mmol/L at any time, under 3.9 mmol/L in the first hours of the fast, over 16.7 mmol/L, or with symptoms of a low or if you feel faint, confused or very dry (Table 6-3, p191)',
    'A severe low, DKA or a hyperosmolar coma in the 3 months before Ramadan puts you at very high risk: you should not fast (p189; Appendix 11, p229)'],
  refs:['Ministry of Health Malaysia, Academy of Medicine Malaysia, Malaysia Endocrine & Metabolic Society, Family Medicine Specialists Association of Malaysia and Diabetes Malaysia. Clinical Practice Guidelines: Management of Type 2 Diabetes Mellitus, 6th edition. December 2020. MOH/P/PAK/447.20(GU)-e. Available at http://www.acadmed.org.my',
    'Summarised, not reproduced: the CPG states no reuse terms. Read the full CPG for the wording.',
    'It replaces the 5th edition (2015); review was due in 2025 (p2). For inpatient care it points to the MOH Practical Guide to Inpatient Glycaemic Care, 2nd edition, 2020 (p181), also cited by the ebook.'],
  see:[['#hyperglycaemia','Hyperglycaemia (ebook pathway)'],['#hypoglycaemia','Hypoglycaemia (ebook pathway)'],['#diabetic-foot-cpg','Diabetic foot CPG (2018)'],['#dengue-cpg--med','Dengue CPG: regular medicines'],['#mau-admission','Admission to MAU'],['#blood-tests--gas','When to run a blood gas'],['#emacc','EMACC follow-up']]
};

/* The ebook pathways and the other CPG entries point here (links only: their content stays as written) */
P['hyperglycaemia'].see = [...(P['hyperglycaemia'].see || []), ['#t2dm-cpg', 'Type 2 diabetes CPG (2020)']];
P['hypoglycaemia'].see = [...(P['hypoglycaemia'].see || []), ['#t2dm-cpg--hypo', 'Type 2 diabetes CPG (2020): low sugar']];
P['diabetic-foot-cpg'].see = [...(P['diabetic-foot-cpg'].see || []), ['#t2dm-cpg', 'Type 2 diabetes CPG (2020)']];
P['dengue-cpg'].nodes.msglt.links = [...(P['dengue-cpg'].nodes.msglt.links || []), ['#t2dm-cpg--eudka', 'Type 2 diabetes CPG: euglycaemic ketoacidosis']];
/* For the integrator, not active here:
   - the insulin calculator link goes through CALC_SEE in engine.js ('t2dm-cpg':[['#calc-insulin', 'Insulin dose calculator']]),
     because check-data.js okHref does not accept #calc-insulin in a data file;
   - when ckd-cpg is in: P['t2dm-cpg'].see gets ['#ckd-cpg', 'CKD CPG'] and P['ckd-cpg'].see gets ['#t2dm-cpg', 'Type 2 diabetes CPG (2020)'].
   - CATS: add 't2dm-cpg' to the 'meta' group (Sugar, poisoning and pain), beside hyperglycaemia and hypoglycaemia.
   - CPG_SHELF: add id:'t2dm-cpg' to the row with cpg:'763' (keep drive:''), so the card leaves the shelf (shelfOut) and the
     References tab gets the Academy and Quick reference links.
   - advice: each line carries its CPG page, as the own-words addendum asks; Copy advice will paste those pages. The
     diabetic-foot-cpg advice carries none: decide whether to keep them here. */
P['t2dm-cpg'].own = true;

/* ----- CPG Management of Cancer Pain, 2nd edition (MaHTAS, 2023), for adults and children of all ages with pain from any type
   of cancer (p vi) -----
   120 PDF pages, e ISBN 978-967-2887-70-6, MOH/P/PAK/530.23(GU)-e; reviewed line by line (cancerpain-review.md). Printed page =
   PDF page minus 19; front matter = PDF page minus 6 (Algorithms 1 to 3 are p x to xii). Table 4 (p25), Table 5 (p32), Appendix 3
   (p75) and Appendix 5a (p89–91) were read from page images. Quoted as printed, including the CPG's spaced hyphens and spelling;
   apostrophes are plain. The two patient information leaflets issued with the CPG (English and Bahasa Melayu) are in `leaflet`,
   word for word. The ebook's pain pathway stays as written (rule 5): the differences are in the review. */
P['cancer-pain-cpg'] = {
  title:'Cancer pain: CPG 2nd edition', grp:'cpg', src:'CPG Cancer Pain, 2nd ed. (2023)', isnew:true, hero:'paincpg',
  lead:'The national guideline (2023) for adults and children with cancer pain: assess and score the pain, treat by the WHO ladder, start or titrate oral morphine, prescribe a rescue dose and a laxative, spot toxicity, and refer pain that stays poorly controlled. Doses, conversion and the sedation score are in the tabs below.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'CPG Management of Cancer Pain, 2nd edition (MaHTAS, 2023), for adults and children of all ages with pain from any type of cancer (p vi). Printed page numbers; the algorithms are on p x to xii. Due for review in 2027.', opts:[
      ['Cancer patient with pain: assess, score and treat (Algorithm 1)','asx'],
      ['Starting or already on an opioid: dose, rescue and titration','op'],
      ['Severe pain and distress: rapid morphine titration (Algorithm 2)','alg2'],
      ['Drowsy, confused or breathing slowly on an opioid','safe'],
      ['Constipation, nausea or other side effects (Table 5)','lax'],
      ['Changing opioid or route (Table 4)','rot'],
      ['Pain still poorly controlled: refer (Recommendation 16, chapter 10)','refpal'],
      ['A child with cancer pain (Algorithm 3)','kid']]},

    /* Algorithm 1, Management of cancer pain in adults (p x), chapter 3 (p5–11) */
    asx:{step:'Assess before you treat', items:[
      'Accurate and comprehensive assessment should be performed prior to treatment in all patients with cancer pain (Recommendation 1, p9)',
      'Assessment - History/Physical Examination/Investigation. Diagnosis: Type - Nociceptive/Neuropathic/Mixed; Source - Cancer-related/Non-cancer-related; Severity - Pain Score (Algorithm 1, p x)',
      'Investigations should be ordered only if the results could potentially influence clinical management (3.2.3, p8)',
      'Observational tools e.g. FLACC scale or PAINAD may be useful to assess pain in cognitively impaired adults (p11)'], next:'src'},
    src:{q:'Is the pain from the cancer or its treatment?', hint:'Cancer patients experience pain due to the underlying cancer or from its treatment. However, not all pain experienced is from the cancer itself, it could sometimes be due to pre-existing conditions (p6). The CPG lists common pain syndromes, among them epidural spinal cord, nerve root or cauda equina compression (p6), but no red flags or oncological emergencies, and no route for them.',
      opts:[['Cancer-related, or from its treatment','op'],['Not cancer-related','noncx']]},
    noncx:{end:'neutral', title:'Not cancer pain: outside this CPG', items:[
      'This emphasises the need to assess and differentiate benign causes of pain (e.g. osteoarthritis, migraine and osteoporosis) which may be managed differently from cancer pain (p6)'],
      links:[['#pain','Ebook: pain management']],
      gap:'CPG p6 and Algorithm 1 (p x). The CPG covers cancer pain only.'},
    op:{q:'Is the patient opioid-naive?', hint:'Opioid-naive patients are those not chronically receiving opioid analgesic on a daily basis and therefore have not developed significant tolerance (p19).', opts:[
      ['Opioid-naive','sev'],
      ['On a regular weak opioid (tramadol or dihydrocodeine), pain not controlled','s3w'],
      ['On a regular strong opioid','titr']]},
    sev:{q:'Pain score?', hint:'Algorithm 1 (p x). The treatment of cancer pain should be based on the World Health Organization (WHO) analgesic ladder (Recommendation 2, p13): Step 1 for a pain score of 1 - 3 (mild), step 2 for a pain score of 4 - 6 (moderate) and Step 3 for a pain score of 7 - 10 (severe) (p12).',
      opts:[['Mild cancer pain: pain score 1 - 3','st1'],['Moderate cancer pain: pain score 4 - 6','st2'],['Severe cancer pain: pain score 7 - 10','sv']]},
    st1:{step:'WHO ladder Step I: paracetamol, NSAIDs or COX-2 inhibitors ± adjuvants', items:[
      'Paracetamol or nonsteroidal anti-inflammatory drugs may be used for mild cancer pain (Step 1 of the World Health Organization analgesic ladder) (Recommendation 3, p15)',
      'Paracetamol 0.5 - 1 g, 6-8-hourly, Max: 4 g/day; consider dose reduction in hepatic impairment (Appendix 5a, p89). NSAID doses: the Doses tab'], next:'pc1'},
    pc1:{q:'Pain control?', hint:'Algorithm 1 (p x).', opts:[['Yes','fu'],['No: WHO ladder Step II','st2']]},
    st2:{step:'WHO ladder Step II: tramadol, codeine or dihydrocodeine ± non-opioids ± adjuvants', items:[
      'Weak opioids may be used for moderate pain (step 2 of the WHO analgesic ladder) in cancer pain (Recommendation 4, p16). *Strong opioids can be considered to treat moderate cancer pain (Algorithm 1, p x)',
      'Tramadol 50 - 100 mg, 6 - 8-hourly, Max: 400 mg/day; dihydrocodeine tartrate 30 - 60 mg, 6 - 8-hourly, Max: 240 mg/day; consider dose reduction in renal impairment (Appendix 5a, p89)',
      'Serotonin syndrome has been reported with the use of tramadol especially with concurrent use of other serotonergic drugs e.g. antidepressants (p15). There is also an increased risk of convulsion with its use (p16)',
      'Laxatives should be prophylactically prescribed in patients with cancer pain and on regular opioid therapy (Recommendation 12, p33)'], next:'pc2'},
    pc2:{q:'Pain control?', hint:'Algorithm 1 (p x).', opts:[['Yes','fu'],['No: WHO ladder Step III','s3n']]},
    sv:{q:'Severe pain with distress?', hint:'Rapid titration using IV or SC morphine is preferred in patients presenting with severe cancer pain for initial pain control (p21). Algorithm 2 (p xi) is for an adult patient with severe pain (Pain Score 7 - 10) and distress: this guide places it above the Green Zone.',
      opts:[['Yes: severe pain and distress','alg2'],['No','s3n']]},

    /* 4.4.2 and 4.4.3, Strong opioids and opioid initiation (p16–21), Recommendations 5 and 11 */
    s3n:{step:'WHO ladder Step III, opioid-naive: start oral immediate-release (IR) morphine', items:[
      'Oral morphine is the preferred choice in moderate to severe cancer pain. Immediate-release oral morphine should be made available in all healthcare facilities (Recommendation 5, p19)',
      'Strong opioids should be initiated at the lowest effective dose. For persistent pain, an IR formulation should be given every four hours to control background pain and with similar doses given up to every hour as needed for breakthrough pain (p19)',
      'A dose of 5 mg 4-hourly of IR oral morphine in opioid-naive patients has been shown to be a safe and effective starting dose (p<0.01) (p19)',
      'A lower starting dose of 2.5 mg 4 - 6 hourly of IR oral morphine has been shown to be effective (p<0.01) and safe in elderly or frail patients (p19)',
      'The CPG prints two other starting doses. Morphine therapy: should be initiated at the dose of 5 - 10 mg 4-hourly using the oral IR formulation; should be started with a lower dose of 2.5 - 5 mg 4 - 6-hourly of the IR formulation in the elderly (p21). Starting dose (oral): 3 - 5 mg 4-hourly of IR morphine (Appendix 5a, p89)',
      'Oxycodone and fentanyl can be used as alternatives to morphine (Recommendation 5). Oxycodone starting dose (oral): 5 mg of IR 4 - 6-hourly. Transdermal fentanyl can only be used when opioid requirements are stable, and never in an opioid naïve patient (Appendix 5a, p89)',
      'In the management of cancer pain for older patients or those with renal/liver impairment: All opioids should be used with caution.* Adjustment in doses/frequency of opioids should be considered. *Fentanyl is a safer opioid in renal impairment (Recommendation 11, p29)',
      'Pethidine should not be used in the management of cancer pain (Recommendation 10, p27)'], next:'bt'},
    s3w:{step:'On a regular weak opioid: start morphine at an equivalent dose', items:[
      'Patients already on regular weak opioids (tramadol or dihydrocodeine) may have morphine initiated at a dose equivalent to that of the weak opioid (refer to Table 4) (p19)',
      'Additional conversions (Table 4, p25): PO dihydrocodeine 90 mg/day = PO morphine 10 - 12 mg/day; PO tramadol 150 mg/day = PO morphine 15 - 30 mg/day',
      'Divide 24-hour dose according to the dosing frequency required (for example divide by 2 for BD dosing and divide by 6 for 4-hourly dosing) (Table 4, p25)',
      'In clinical practice, oral codeine and dihydrocodeine appear to be equipotent (p16)',
      'The CPG prints only these two pairs, gives no codeine conversion, and does not say whether the Table 4 reduction of 25 - 50% applies when a weak opioid is replaced'], next:'bt'},
    titr:{step:'On a regular strong opioid: titrate the dose', items:[
      'Early assessment and dose titration must be carried out in all patients initiated on opioids. Dose titration can be done as early as 24 hours after initiation (p20)',
      'A dose increment may be necessary when a patient reports persistent pain, or needs to take multiple doses for breakthrough pain (>3 doses) throughout the day, while a dose reduction may be warranted if there are intolerable side effects (p20)',
      'Options of titration: calculate the total daily dose of 4-hourly opioid + dose of opioids taken for breakthrough pain over the last 24 hours (Limit to 50% dose increment within 24 hours. If >50% increment is needed, to consult specialist.) OR increase opioid daily dose (25 - 50% of the daily dose) for patient who takes no rescue doses but still has uncontrolled pain (p20)',
      'This is divided by 6 to give the new regular 4-hourly doses (p20). The worked examples are in the Titrate tab',
      'There is no maximum dose for opioids in cancer pain management (p20). If the patient persistently requires many rescue doses despite increasing ATC medication, other pain conditions need to be considered and further assistance from specialist is required (p20)',
      'Severe pain and distress: for patients already on opioids, the bolus dose of morphine should be 10% of the total 24-hour morphine requirement converted to intravenous/subcutaneous equivalent (Algorithm 2, p xi)'], next:'bt'},

    /* 4.4.4, Breakthrough pain management (p22–23), Recommendation 7 (p23) */
    bt:{step:'Prescribe a rescue dose for breakthrough pain', items:[
      'All patients with cancer pain who are on opioids should be prescribed with rescue analgesia if required to ensure optimal pain control (Recommendation 7, p23)',
      'Opioids (morphine or oxycodone) for breakthrough cancer pain should be prescribed at 1/6 to 1/12 of the 24-hour dose (Recommendation 7)',
      'The widely accepted ratio of the rescue dose to the "around-the-clock" (ATC) medication has been 1/6 i.e. equivalent to the 4-hourly opioid dose. In cases where smaller rescue doses are required e.g. in renal impairment, doses as low as 1/12 of the 24-hour dose can be used (p22)',
      'Rescue dose for breakthrough pain is given as often as required (up to hourly). ATC dose is adjusted considering the total amount of rescue dose for the last 24 hours (p23)',
      'For a patient on a fentanyl patch, the CPG does not say which opioid to use for rescue or how to convert its dose'], next:'lax'},

    /* 4.4.8, Opioid side effects (p29–31), Table 5 (p32), Recommendation 12 (p33), Appendix 5a (p91) */
    lax:{step:'Prevent and treat side effects', items:[
      'Laxatives should be prophylactically prescribed in patients with cancer pain and on regular opioid therapy (Recommendation 12, p33)',
      'Constipation: faecal softeners (lactulose, macrogol); stimulant laxatives (bisacodyl, senna) (Table 5, p32). Lactulose 15 - 20 ml orally, 6 - 8-hourly; macrogol 1 - 4 sachets/day; bisacodyl 5 - 10 mg orally, 1 - 2 times daily, Max: 20 mg/day; senna 2 tabs OD or 1 tab BD, Max: 8 tabs/day (Appendix 5a, p91)',
      'Nausea and vomiting: anti-emetics, metoclopramide, haloperidol, prochlorperazine (Table 5). Metoclopramide 10 - 20 mg, 6 - 8 hourly; prochlorperazine 10 - 30 mg daily in divided doses; haloperidol 0.5 - 3 mg single dose nocte (Appendix 5a, p91)',
      'These AEs are temporary and tolerance commonly develops in 5 -10 days after initiation of opioids (p30)',
      'Opioid-induced side effects should be proactively identified and treated adequately to ensure optimum cancer pain management (Recommendation 12). Dry mouth, pruritus and the rest of Table 5: the Side effects tab'], next:'safe'},

    /* 4.4.9, Opioid toxicity (p32), Algorithm 2 (p xi), Appendix 3 (p75) and Appendix 7 (p96–97) */
    safe:{q:'Respiratory rate and sedation score now?', hint:'Sedation almost always precedes respiratory depression. Therefore, sedation assessment is a good early clinical indicator of opioid-induced respiratory depression (p32). Algorithm 2 counts respiratory rate <8/min OR sedation score >2 as adverse events (p xi). The sedation score (Appendix 3, p75) is in the Sedation tab.',
      opts:[['Respiratory rate <8/min, or sedation score >2','tox'],['Drowsy or confused, but neither of those','drow'],['Awake, breathing normally','pc3']]},
    tox:{end:'refer', title:'Opioid-induced respiratory depression: naloxone, titrated', items:[
      'If respiratory rate is ≤8 breaths/min and patient is unresponsive, discontinue the ongoing opioid (e.g. stop CSCI/CIVI, remove TD patch) and naloxone should be administered (Appendix 7, p96)',
      'Dilute 1 ampoule (400 mcg) of naloxone in 10 ml water for injection. Administer small boluses of 0.5 ml (20 mcg) every two minutes until respiratory rate is satisfactory, and patient is easily arousable (need not be fully alert) (Appendix 7)',
      'After the last dose of naloxone, continue to monitor the patient. Further boluses of naloxone might be necessary because naloxone is shorter acting than the opioids. A naloxone infusion may be considered if recovery is not satisfactory with multiple bolus doses (Appendix 7)',
      'Do not use large bolus doses e.g. "1 ampoule stat" in patients who are receiving opioids for chronic pain relief. Naloxone should not be given to patients on opioids when death is expected and imminent; a slow respiratory rate is a normal occurrence (Appendix 7, p97)'],
      links:[['#pain--epc','Ebook: consult EP to stabilise']],
      gap:'CPG 4.4.9 (p32) and Appendix 7 (p96–97). Chapter 4.4.9 prints another regimen: if severe respiratory depression occurs (respiratory rate <8/minute), very low doses of naloxone at 40 mcg (0.04 mg) can be used and titrated every 1 - 3 minutes against the patient\'s respiratory rate (p32). The thresholds also differ: <8/minute; ≤8 and unresponsive; ≥8 and easily aroused. The CPG does not say where to monitor the patient or whether to admit: the Green Zone sees MTS levels 4 and 5.'},
    drow:{end:'neutral', title:'Drowsy or confused on an opioid: reduce, switch, and look for a cause', items:[
      'If the respiratory rate ≥8 breaths/minute and patient can be easily aroused (e.g. opens eyes to verbal command), monitor patient closely and consider omitting or reducing the dose of the regular opioid (Appendix 7, p96)',
      'Sedation can occur at the initiation of opioid therapy and tends to resolve within a week (p30). Sedation and drowsiness: opioid dose reduction, titrate to the lowest effective dose, and consider opioid switching (Table 5, p32)',
      'Persistent delirium should prompt further investigation for its causes (e.g. hypercalcaemia, sepsis and electrolytes imbalances) whenever appropriate. A dose reduction of 25% with opioid switching may resolve delirium. Low-dose antipsychotics e.g. haloperidol may be used (p31)',
      'Naloxone: it is indicated for the reversal of opioid-induced respiratory depression and not for treating drowsiness and/or delirium associated with opioids (Appendix 7, p96)'],
      links:[['#cancer-pain-cpg--rot','Changing opioid (Table 4)']],
      gap:'CPG 4.4.8 (p30–31), Table 5 (p32) and Appendix 7 (p96). It does not say whether this patient can go home, or when to check again: not in the source.'},
    pc3:{q:'Pain controlled?', hint:'Algorithm 1 (p x): pain control at Step III, yes: reassessment and follow-up; no: refer to the palliative care team or pain specialist.', opts:[['Yes','fu'],['No','refpal']]},

    /* Chapter 10, Follow-up and referral (p59–60), Recommendations 8, 16 and 21 */
    fu:{end:'discharge', title:'Pain controlled: discharge with reassessment and follow-up', items:[
      'Reassessment and Follow-up (Algorithm 1, p x)',
      'Cancer patients should be followed-up for pain management either in the specialist outpatient clinic, primary care clinic or at home. Teleconsultations and digital applications may be used for this purpose (Recommendation 21, p60)',
      'Education on the use of these medications should be given including effects and AEs (4.1, p12)',
      'Long-term use of opioids must not be abruptly discontinued to avoid withdrawal (p21)',
      'Give the patient leaflet, in English or Bahasa Melayu: the Home care advice tab'],
      links:[['#pain--mild','Ebook: discharge and follow-up']],
      gap:'CPG Algorithm 1 (p x) and chapter 10 (p59–60). The CPG gives no discharge criteria for the ED and names no clinic. The ebook pain pathway gives the department\'s: pain score under 3, cause identified and treated; EMACC, EMWATCH or OPC.'},
    refpal:{end:'refer', title:'Pain not controlled: refer to the palliative care team or pain specialist', items:[
      'Refer to Palliative Care Team/ Pain Specialist (Algorithm 1, p x)',
      'Patients with severe pain and inadequate pain management should be considered for referral to pain or palliative specialist services (p60)',
      'Opioid rotation should be considered in patients with cancer pain who are not responding to dose escalation or experiencing intolerable adverse events (Recommendation 8, p26)',
      'When opioid doses are very high (oral morphine >600 mg/day, oral oxycodone >400 mg/day or transdermal fentanyl >200 mcg/hour), patients should be referred to a pain specialist or palliative medicine specialist (p33)',
      'Patients whose pain control is poor despite optimal pharmacological therapy should be referred to specialists trained in interventional pain management for consideration of the following interventions: coeliac plexus neurolysis for advanced pancreatic cancer pain; superior hypogastric plexus or ganglion impar neurolysis for advanced pelvic and perineal cancer pain; intrathecal drug delivery system; vertebroplasty for malignant spinal compression fractures (Recommendation 16, p47)'],
      links:[['#cancer-pain-cpg--rot','Changing opioid (Table 4)'],['#pain--epc','Ebook: consult EP, refer APS']],
      gap:'CPG Algorithm 1 (p x), Recommendations 8 and 16, p33 and p60. It does not say how urgently to refer, or how to reach these teams out of hours. The ebook pain pathway refers uncontrolled pain to the Acute Pain Service.'},

    /* Algorithm 2, Titration of morphine for rapid pain relief in adults with severe pain and distress (p xi) */
    alg2:{end:'refer', title:'Severe pain and distress: rapid morphine titration (Algorithm 2), above the Green Zone', items:[
      'Adult patient with severe pain (Pain Score 7 - 10) and distress. Availability of intravenous access? Yes: intravenous morphine 1 - 2 mg*, reassess after 5 - 10 minutes. No: subcutaneous morphine 2.5 - 5 mg*, reassess after 15 - 30 minutes (Algorithm 2, p xi)',
      'Reassess: pain score; respiratory rate; sedation score',
      'Adverse events: respiratory rate <8/min OR sedation score >2**: stop titration; monitor vital signs',
      'No adverse events: pain relief acceptable to patient OR reduction of pain score by 2 points? No: the arrow returns to the next dose. Yes: record total dose of morphine used from the start of titration, then convert to regular 4-hourly morphine',
      '*For patients already on opioids, the bolus dose of morphine should be 10% of the total 24-hour morphine requirement converted to intravenous/subcutaneous equivalent. For elderly, frail or renal impaired patients, use lower dose of the given range',
      '**For details on sedation score, see Appendix 3 in the CPG: the Sedation tab'],
      links:[['#pain--mp','Ebook: morphine pain protocol (consult EP)'],['#yellow-zone','Yellow Zone flow']],
      gap:'CPG Algorithm 2 (p xi), adapted from the 2010 CPG. The CPG names no MTS level or zone for it; this guide places repeated IV or SC doses with checks every 5 to 30 minutes above the Green Zone (MTS levels 4 and 5): still to confirm. The algorithm gives no number of doses, no rule to convert the titration total to 4-hourly morphine, and does not define elderly or frail. A sedation score >2 is score 3 only, which Appendix 3 already describes as severe respiratory depression.'},

    /* 4.4.5, Opioid rotation (p24–26), Table 4 (p25), Recommendations 5, 8, 9 and 11 */
    rot:{end:'neutral', title:'Changing opioid or route: Table 4', items:[
      'Opioid rotation should be considered in patients with cancer pain who are not responding to dose escalation or experiencing intolerable adverse events (Recommendation 8, p26)',
      'Table 4 and its instructions: the Convert tab. When changing from one opioid to another, consider a dose reduction of 25 - 50% due to incomplete cross-tolerance (p25)',
      'Transdermal fentanyl should only be used when opioid requirements are stable (Recommendation 5, p19). *Fentanyl is a safer opioid in renal impairment (Recommendation 11, p29)',
      'Methadone may be considered in the management of cancer pain. It should only be prescribed by healthcare providers experienced with its use in the management of cancer pain (Recommendation 9, p27)'],
      gap:'CPG 4.4.5 (p24–26) and Table 4 (p25). The CPG gives no conversion for codeine, and calls the ratio to methadone highly variable, ranging from 5:1 to 10:1 (p24).'},

    /* Chapter 8, Paediatric cancer pain (p50–56), Algorithm 3 (p xii) */
    kid:{end:'neutral', title:'Child with cancer pain: Algorithm 3', items:[
      'Algorithm 3 (p xii) uses the same three steps: mild (pain score 1 - 3), WHO ladder Step I, non-opioid analgesics (paracetamol, NSAIDs, COX-2 inhibitors) ± adjuvants; moderate (4 - 6), Step II, opioids ± non-opioid analgesics ± adjuvants; severe (7 - 10), Step III, opioids ± non-opioid analgesics ± adjuvants. No pain control at Step III: refer to Palliative Care Team/ Pain Specialist',
      'Pain tools by developmental age (Table 8, p52): FLACC, 1 month to 4 years; Revised FACES, 4 years to 7 years; numerical rating scale, ≥7 years',
      'Paracetamol or nonsteroidal anti-inflammatory drugs should be used in children with mild cancer pain. Paracetamol should be used in combination with opioids as co-analgesic unless contraindicated in children with cancer pain (Recommendation 17, p53)',
      'Oral morphine is the preferred choice for children with moderate to severe cancer pain (Recommendation 18, p54). Fentanyl or oxycodone may be used as alternative analgesics in children with moderate to severe cancer pain (Recommendation 19, p55)',
      'Caution on the use codeine and tramadol has been issued due to ultra metabolisers and potential AEs (p54)',
      'Case example (p54): immediate release oral morphine 0.2 mg/kg/dose x 20 kg = 4 mg q4h (maximum initial dose is 5 mg/dose for children) = 24 mg/day. Breakthrough dose: 1/10 to 1/6 of daily dose (2.5 - 4 mg), can be served 1-2 hours after previous dose of morphine'],
      links:[['#children--pat','Where to triage a child']],
      gap:'CPG chapter 8 (p50–56) and Algorithm 3 (p xii). The case example is a 10-year-old, opioid naïve, 20 kg, with normal renal and liver function. The paediatric doses in Appendix 5b (p92–94, adapted from the MoH Paediatric Pain Management Guidelines 2023) are not reproduced; they give other oral morphine ranges by age and severity, with their own maximum (p93). The CPG has no rapid titration algorithm for children.'}
  },

  /* The two patient information leaflets issued with the CPG: English (leaflet 1) and Bahasa Melayu (leaflet 2), word for word.
     Panels in fold order; a bullet list inside one answer is joined with semicolons. */
  leaflet:{
    src:'CPG Management of Cancer Pain (2nd ed., 2023): patient information leaflets 1 (English) and 2 (Bahasa Melayu), issued with the CPG by the Ministry of Health Malaysia, the Malaysian Association for the Study of Pain and the Academy of Medicine Malaysia. Reproduced with acknowledgement, unchanged. The pain scale pictures and the Total Pain diagram are not reproduced.',
    en:{lang:'English', title:'Cancer pain', groups:[
      {h:'What causes CANCER PAIN?', items:['Cancer pain can result from the tumour pressing on organs, nerves or bones.','It may also be caused by cancer treatments like chemotherapy, radiation or surgery.']},
      {h:'Assessing your CANCER PAIN', p:'There are several tools that can be used to assess pain (e.g. Ministry of Health (MoH) Pain Scale).', items:['The MoH pain scale combines the NRS, VAS, & faces scale. Patients point to their pain level on a scale from 0 to 10.','For children under 7 & cognitively impaired adults, the IASP Faces Pain Scale or FLACC scale may be used. In sedated & intubated patients, pain is assessed through observation including on behaviour.','Cancer pain affects not only your physical well-being but also your emotional, social & spiritual health.']},
      {h:'What should I know about PAIN RELIEVING MEDICATIONS?', items:['How is cancer pain treated? Cancer pain can be treated using medications (like opioids, non-opioids or adjuvant drugs), physical therapies, psychological & spiritual support & in some cases, interventional procedures.','What types of pain medications are available? Medications include: Over-the-counter pain relievers (e.g. paracetamol, ibuprofen); Prescription opioids (e.g. morphine, oxycodone); Adjuvant medications (e.g. antidepressants/ anticonvulsants for nerve pain)','Will I become addicted to pain medications? Addiction is rare when opioids are used under medical supervision for cancer pain. Your doctor will prescribe them safely to minimise risks.','What are the side effects of pain medications? Common side effects include constipation, nausea, drowsiness, & dizziness. Your doctor can provide treatments to manage these side effects.']},
      {h:'If I use morphine or other opioids for my pain now, will it be less effective later on when pain gets worse?', items:['No, you should not worry about this. Good pain relief will lead to better physical, mental & social well being which will help you cope with your cancer.']},
      {h:'If I use morphine, does that mean I\'m nearing the end of my life?', items:['No, taking morphine does not mean you are near the end of life. It is used to manage pain & improve comfort at any stage of cancer. Many people take it for a long time while continuing treatment & daily activities. Talk to your doctor if you have concerns.']},
      {h:'How can my family or caregivers help?', p:'Family & caregivers can:', items:['help track your pain levels','assist with medication schedules','provide emotional & physical support']},
      {h:'Where can I get more help for my CANCER PAIN?', p:'Contact the following for help & more information', items:['Nearest health clinic/hospital','Non-governmental organisations (NGOs) for pain & palliative care','Malaysian Hospice & Palliative Care Council (MHPCC) (https://www.malaysianhospicecouncil.com/)','Malaysian Association for the Study of Pain (http://masp.org.my)','For further information, refer to the Clinical Practice Guidelines Management of Cancer Pain (Second Edition) available on the following websites: Ministry of Health Malaysia: https://www.moh.gov.my; Academy of Medicine Malaysia: http://www.acadmed.org.my']}
    ]},
    ms:{lang:'Bahasa Melayu', title:'Sakit akibat kanser', groups:[
      {h:'Apakah punca SAKIT AKIBAT KANSER?', items:['Sakit akibat kanser boleh berlaku apabila ketumbuhan menekan organ, saraf atau tulang.','Ia juga boleh disebabkan oleh rawatan kanser seperti kemoterapi, radioterapi atau pembedahan.']},
      {h:'Menilai SAKIT AKIBAT KANSER anda', p:'Terdapat beberapa alat yang boleh digunakan untuk menilai kesakitan (contoh: Ministry of Health (MoH) Pain Scale).', items:['MoH pain scale menggabungkan NRS, VAS, & Skala Muka. Pesakit menilai tahap kesakitan mereka pada skala dari 0 hingga 10.','Bagi kanak-kanak di bawah 7 tahun & orang dewasa dengan gangguan kognitif, IASP Faces Pain Scale atau FLACC scale boleh digunakan. Bagi pesakit yang tidak sedar & diintubasi, kesakitan dinilai melalui pemerhatian termasuklah ke atas tingkah laku.','Sakit kanser bukan sahaja menjejaskan kesejahteraan fizikal anda, tetapi juga kesihatan emosi, sosial & kerohanian.']},
      {h:'Apa yang perlu saya tahu tentang UBAT MELEGAKAN SAKIT?', items:['Bagaimana sakit akibat kanser dirawat? Sakit akibat kanser boleh dirawat dengan ubat-ubatan (seperti opioid, bukan opioid atau ubat adjuvan), terapi fizikal, sokongan psikologi & kerohanian, serta dalam beberapa kes, prosedur khas.','Apakah jenis ubat tahan sakit yang ada? Ubat-ubatan termasuk: Ubat tahan sakit tanpa preskripsi (contoh: paracetamol, ibuprofen); Opioid dengan preskripsi (contoh: morfin, oksikodon); Ubat adjuvan (contoh: antidepresan/antikejang untuk sakit saraf)','Adakah saya akan menjadi ketagih kepada ubat tahan sakit? Ketagihan jarang berlaku apabila opioid digunakan di bawah pengawasan perubatan untuk sakit kanser. Doktor anda akan mempreskripsikannya dengan selamat bagi mengurangkan risiko.','Apakah kesan sampingan ubat tahan sakit? Kesan sampingan biasa termasuk sembelit, loya, mengantuk & pening. Doktor anda boleh memberikan rawatan untuk menguruskan kesan sampingan ini.']},
      {h:'Jika saya guna morfin atau opioid sekarang, adakah ia kurang berkesan bila sakit saya makin teruk?', items:['Tidak, anda tidak perlu risau mengenainya. Kelegaan sakit yang baik akan meningkatkan kesejahteraan fizikal, mental & sosial anda, yang dapat membantu anda mengharungi kanser dengan lebih baik.']},
      {h:'Jika saya ambil morfin, adakah itu tanda saya di penghujung hayat?', items:['Tidak, mengambil morfin tidak bermakna anda hampir ke akhir hayat. Ia digunakan untuk mengawal kesakitan & memberi keselesaan pada setiap peringkat kanser. Ramai yang menggunakannya dalam jangka panjang sambil meneruskan rawatan & aktiviti harian. Jika anda ada kebimbangan, berbincanglah dengan doktor anda.']},
      {h:'Bagaimana keluarga atau penjaga boleh membantu?', p:'Keluarga & penjaga boleh:', items:['membantu memantau tahap kesihatan anda','membantu mengatur jadual ubat','memberi sokongan emosi & fizikal']},
      {h:'Di mana saya boleh dapatkan bantuan tambahan untuk SAKIT AKIBAT KANSER?', p:'Hubungi pihak berikut untuk bantuan & maklumat lanjut:', items:['Klinik kesihatan/hospital terdekat','Pertubuhan bukan kerajaan (NGO) untuk penjagaan kesakitan & paliatif','Malaysian Hospice & Palliative Care Council (MHPCC) (https://www.malaysianhospicecouncil.com/)','Malaysian Association for the Study of Pain (http://masp.org.my)','Untuk maklumat lanjut, rujuk kepada Clinical Practice Guidelines Management of Cancer Pain (Second Edition) boleh didapati di laman sesawang berikut: Kementerian Kesihatan Malaysia: https://www.moh.gov.my; Academy of Medicine Malaysia: http://www.acadmed.org.my']}
    ]}
  },

  /* Reference tabs: each note names its CPG page */
  notes:[
    {l:'Convert', notes:[
      {h:'Table 4: suggested dose conversion ratio in the direction specified', src:'CPG p25, adapted from the 2010 CPG; read from the page image. Find the current opioid in the first column and the new one across the top. The CPG marks each cell MULTIPLY (dark green) or DIVIDE (light green): shown here as × and ÷.', table:{head:['From (24-hour dose)','To oral morphine mg/day','To SC morphine mg/day','To oral oxycodone mg/day','To SC oxycodone mg/day','To TD fentanyl mcg/h'], rows:[
        ['Oral morphine mg/day','','÷ 2','÷ 1.5','÷ 3','÷ 3'],
        ['SC morphine mg/day','× 2','','÷ 0.7','÷ 1.5','÷ 1.5'],
        ['Oral oxycodone mg/day','× 1.5','× 0.7','','÷ 2','÷ 2'],
        ['SC oxycodone mg/day','× 3','× 1.5','× 2','','÷ 1'],
        ['TD fentanyl mcg/h','× 3','× 1.5','× 2','× 1','']]}},
      {h:'Using the table', src:'CPG p25, the notes to Table 4', items:[
        'This conversion chart should only be used as a guide and treatment must be individually tailored for patients based on clinical assessment.',
        'When changing from one opioid to another, consider a dose reduction of 25 - 50% due to incomplete cross-tolerance.',
        'Consider reduced doses in the elderly and in patients with renal or significant hepatic impairment.',
        'Calculate the total 24-hour opioid dose in mg (for fentanyl, note that the hourly rate is in mcg).',
        'Divide 24-hour dose according to the dosing frequency required (for example divide by 2 for BD dosing and divide by 6 for 4-hourly dosing).',
        'Calculate the rescue dose for breakthrough pain for each opioid as approximately 1/6 to 1/12 of the total daily dose.',
        'Additional conversions: PO dihydrocodeine 90 mg/day = PO morphine 10 - 12 mg/day; PO tramadol 150 mg/day = PO morphine 15 - 30 mg/day; TD fentanyl 25 mcg/hour = continuous SC/IV infusion fentanyl 25 mcg/hour; SC morphine = IV morphine.']},
      {h:'Fentanyl patch', src:'CPG Appendix 6 (p95), adapted from the HKL Counseling Checklist (Oct 2020) and the Hosp Selayang Palliative Unit Information Leaflet', items:[
        'Change the patch every 72 hours. Remove the old patch before applying a new one. The date and time of patch due change should be written on the patch.',
        'If the patch falls off/peels off before the date and time of due change, apply a new patch on a new area of skin.']}
    ]},
    {l:'Titrate', notes:[
      {h:'Worked examples, as printed', src:'CPG 4.4.3 (p20–21)', items:[
        'Example 1: patient is on aqueous morphine 5 mg 4-hourly and takes 3 extra rescue doses. Total 24h morphine = (5 mg x 6) + (5 mg x 3) = 45 mg/24h. New 4-hourly dose: 45 mg/6 = 7.5 mg (rounded down to nearest mg). Prescription: aqueous morphine 7 mg 4-hourly and 7 mg PRN',
        'Example 2: patient is on aqueous morphine 5 mg 4-hourly and takes no rescue doses but still has uncontrolled pain. Total 24h morphine = (5 mg x 6) = 30 mg/24h. NEW 24h morphine = 30 mg + 25% of 30 mg (7.5 mg) = 37.5 mg. New 4-hourly dose: 37.5 mg/6 = 6.25 mg (rounded down to nearest mg). Prescription: aqueous morphine 6 mg 4-hourly and 6 mg PRN']}
    ]},
    {l:'Doses', notes:[
      {h:'Appendix 5a: other adult dosages', src:'CPG p89, adapted from the Palliative Care Formulary (7th ed., 2020), the Oxford Textbook of Palliative Medicine (2021) and the WHO cancer pain guidelines (2019); read from the page image. Paracetamol, the weak and strong opioids, laxatives and anti-emetics are in the steps. Side effects left out; a remark printed across rows is given once, then as above.', table:{head:['Drug','Recommended dosages','Remarks'], rows:[
        ['Diclofenac Sodium','50 - 150 mg daily, 8-12 -hourly. Max: 150 mg/day','Non-selective NSAIDs: use the lowest efficacious dose for the shortest possible duration. Consider dose reduction in renal impairment. Higher doses increase the risk of gastrointestinal and cardiovascular complications.'],
        ['Mefenamic Acid','250 - 500 mg, 8-hourly. Max: 1500 mg/day','As above'],
        ['Ibuprofen','200 - 400 mg daily, 8-hourly. Max: 2400 mg/day','As above'],
        ['Celecoxib','200 - 400 mg, 12 - 24-hourly. Max: 400 mg/day','Selective NSAIDs: use the lowest efficacious dose for the shortest possible duration. Consider dose reduction in renal impairment and cardiovascular disease. Higher doses increase the risk of gastrointestinal and cardiovascular complications.'],
        ['Etoricoxib','60 - 90 mg daily. Max: 120 mg/day','As above'],
        ['Paracetamol 500 mg + codeine 8 mg','1 - 2 tablets, 6 - 8-hourly. Max: 8 tablets/day','Combination medications: consider dose reduction in renal impairment and hepatic impairment.'],
        ['Paracetamol 325 mg + tramadol 37.5 mg','1 - 2 tablets, 6 - 8-hourly. Max: 8 tablets/day','As above'],
        ['Transdermal fentanyl','Equianalgesic dose of total 24 hours opioid requirement (refer to Table 4 on conversion of opiods)','Transdermal fentanyl can only be used when opioid requirements are stable, and never in an opioid naïve patient.']]}}
    ]},
    {l:'Side effects', notes:[
      {h:'Table 5: management of opioid side effects', src:'CPG p32; read from the page image. Doses of the laxatives and anti-emetics are in the side effects step (Appendix 5a, p91).', table:{head:['Side effects','Management'], rows:[
        ['Constipation','Faecal softeners: lactulose, macrogol. Stimulant laxatives: bisacodyl, senna'],
        ['Nausea and Vomiting','Anti-emetics: Metoclopramide; Haloperidol; Prochlorperazine'],
        ['Dry Mouth','Non-pharmacological treatment: good oral hygiene; sugar-free chewing gum and candies/sweets; saliva stimulants (e.g. mouth spray/gel)'],
        ['Sedation and drowsiness','Opioid dose reduction, titrate to the lowest effective dose, and consider opioid switching. Methylphenidate and other psychostimulant drugs can be considered if necessary'],
        ['Delirium and neurotoxicity (e.g. confusion and myoclonus)','Can be managed by dose reduction and opioid switching. Can consider using clonazepam, sodium valproate and baclofen for myoclonus. Can consider antipsychotics for delirium'],
        ['Pruritus','May consider antihistamines. Opioid switching may be necessary if the symptoms are severe']]}}
    ]},
    {l:'Sedation', notes:[
      {h:'Appendix 3: sedation score (Macintyre)', src:'CPG p75, from Macintyre PE & Schug SA, Acute Pain Management: A Practical Guide (2007); read from the page image. Algorithm 2 stops titration at a sedation score >2.', table:{head:['Score','Sedation level','Clinical findings'], rows:[
        ['0','None','Patient is awake and alert'],
        ['1','Mild','Occasionally drowsy, easy to rouse, and can stay awake once awoken'],
        ['2','Moderate','Constantly drowsy, still easy to rouse, unable to stay awake once awoken'],
        ['3','Severe','Somnolent, difficult to rouse, severe respiratory depression']]}}
    ]}
  ],
  refs:['Ministry of Health Malaysia. Clinical Practice Guidelines: Management of Cancer Pain (Second Edition). Putrajaya: Malaysia Health Technology Assessment Section (MaHTAS), Medical Development Division; 2023. e ISBN 978-967-2887-70-6. MOH/P/PAK/530.23(GU)-e. Available at http://www.moh.gov.my',
    'Copyright MaHTAS. Content reproduced with a copyright acknowledgement to MaHTAS: not changed, not sold, not used to promote or endorse any product or service, and not used in an inappropriate or misleading context.',
    'Patient information leaflets 1 (English) and 2 (Bahasa Melayu), issued with the CPG.',
    'Adapted in the CPG: Algorithms 1 and 2 and Table 4 from the CPG Management of Cancer Pain (MoH, 2010); Appendix 3 from Macintyre and Schug (2007); Appendix 7 from the Palliative Care Formulary, 8th edition (2022).'],
  see:[['#pain','Pain management (ebook pathway)'],['#calc-pain','Pain scales: FLACC, PAINAD and CPOT'],['#calc-analgesia','Analgesia by weight'],['#children--pat','Children in the ED: where to triage a child']]
};

/* The ebook pathway points to the national guideline (a link only: its content stays as written) */
P['pain'].see = [...(P['pain'].see || []), ['#cancer-pain-cpg', 'Cancer pain CPG, 2nd edition (2023)']];

/* ----- CPG Prevention and Treatment of Venous Thromboembolism (August 2013), summarised -----
   Cover: Malaysian Society of Haematology, National Heart Association of Malaysia, Ministry of Health Malaysia and the
   Academy of Medicine Malaysia. Copyright Ministry of Health Malaysia, with no reuse terms (p1): so every line is in the
   guide's own words, with the printed page, and nothing is quoted (Krishna's decision, 9 Nov 2026). Printed page = PDF page
   minus 1; the clinical pathways are p7 to 25. The text layer prints >= and <= as ! and ", so every threshold was read from
   a page image (vte-review.md, section e). Due for review in 2017 (p1); the only VTE CPG on the Academy list. The ebook's DVT
   pathway stays as written (rule 5): the differences, starting with the D-dimer, are open questions in vte-review.md. */
P['vte-cpg'] = {
  title:'VTE: CPG 2013', grp:'cpg', src:'CPG VTE (2013), summarised', isnew:true, hero:'vtecpg',
  lead:'The national guideline on venous thromboembolism: who needs a leg scan, first doses once a DVT is confirmed, and what to do for a high INR or bleeding on an anticoagulant. Issued August 2013, due for review in 2017; no newer edition is on the Academy list. Summarised in the guide\'s own words, with page numbers: the CPG gives no permission to reproduce it.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'CPG Prevention and Treatment of Venous Thromboembolism (August 2013), for anyone with or at risk of VTE; not arterial thrombosis (p3).', opts:[
      ['Swollen or painful leg: could it be DVT?','wells'],
      ['Pregnant, and a DVT is suspected','preg'],
      ['DVT confirmed: first doses','tx'],
      ['On warfarin: high INR or bleeding','inr'],
      ['On rivaroxaban or dabigatran: bleeding','noac'],
      ['Breathless or pleuritic pain: could it be PE?','pe'],
      ['Upper limb DVT','ul']]},

    /* Table 3.1.1 (p44), 3.2.1 and the DVT algorithm (p45–46) */
    wells:{check:'score', q:'DVT Wells score: tick what applies', hint:'Table 3.1.1 (p44), validated outside pregnancy only. Both legs affected: score the more symptomatic one (p44). The pathway form (p19) words some items differently and sets DVT unlikely at <1, leaving a score of 1 in neither band.',
      info:['Other causes the CPG lists (p44): superficial phlebitis; post-thrombotic syndrome; cellulitis; muscle strain or tear; a paralysed leg; venous insufficiency; heart failure or cirrhosis; a vein pressed from outside, as by a tumour; lymphangitis or lymphoedema; Baker\'s cyst; haematoma; pseudoaneurysm; a knee problem'],
      items:[['Active cancer: treated now or within 6 months, or palliative',1],['Paralysis, paresis or recent immobilisation of the legs',1],['Bedridden over 3 days, or major surgery in the last 4 weeks',1],['Tender along the deep veins',1],['Whole leg swollen',1],['Calf swelling 3 cm more than the other side (10 cm below the tibial tuberosity)',1],['Pitting oedema, worse in the symptomatic leg',1],['Collateral superficial veins (not varicose)',1],['DVT documented before',1],['Another diagnosis as likely as DVT, or more',-2]],
      suggest:s => s >= 2 ? 0 : 1,
      opts:[['DVT likely: 2 points or more','cus'],['DVT unlikely: 1 point or less','unl']]},
    unl:{end:'neutral', title:'DVT unlikely: the CPG asks for no further test', items:[
      'A score of 1 or less: no further investigation; the algorithm marks DVT as excluded (p46)',
      'No D-dimer step: the whole-blood agglutination D-dimer used in most Malaysian laboratories is not sensitive enough to rule out VTE, and many conditions raise it (p46)',
      'Look for the other causes listed under the Wells question'],
      links:[['#dvt--wells','Ebook: Wells score and D-dimer'],['#cellulitis','Ebook: acute cellulitis']],
      gap:'CPG 3.2.1 and the DVT algorithm (p45–46). The ebook sends a low or moderate Wells score for a D-dimer, with an interim anticoagulant at moderate risk: which the Green Zone follows is an open question.'},
    cus:{step:'Book a compression ultrasound (CUS) for today', items:[
      'DVT likely: CUS the same day (p45)',
      'If it cannot be done today: start LMWH now and scan within the next 24 hours (p45)',
      'High clinical probability: give LMWH or fondaparinux until a test excludes VTE (p50). Doses: the Doses tab'], next:'cusq'},
    cusq:{q:'CUS result?', hint:'The pathway form treats a DVT below or above the knee alike: go on to treatment (p21).', opts:[['DVT seen','tx'],['No DVT','rep']]},
    rep:{step:'Repeat the CUS within 1 week', items:[
      'A normal first scan is repeated within 1 week (p45); the pathway form says in 7 days (p21)',
      'Not in the source: whether LMWH started while waiting goes on until the repeat scan (it does in pregnancy, p78)'], next:'repq'},
    repq:{q:'Repeat CUS result?', opts:[['DVT seen','tx'],['No DVT','excl']]},
    excl:{end:'discharge', title:'Two normal scans: DVT excluded, discharge to the health clinic', items:[
      'Both scans normal: the patient can go to the health clinic (p45; pathway form, p21)'],
      gap:'CPG 3.2.1 (p45) and Pathway 2 (p21). No advice for this patient, and no task for the health clinic, is given.'},

    /* 4.2 Initial treatment (p50–52), Pathway 2 (p22–23), Table 9.1 (p87–88), 8.5 (p80–81), 9.6 (p103), 4.4.2 (p55) */
    tx:{q:'DVT confirmed. Which applies?', hint:'Offer LMWH, fondaparinux or rivaroxaban, weighing other illnesses, contraindications and drug cost, and start as soon as possible. Give enough analgesia and raise the leg (p50).', opts:[
      ['None of these','txs'],
      ['eGFR or creatinine clearance below 30','txr'],
      ['Pregnant','txp'],
      ['Active cancer','txc'],
      ['Leg at risk: venous gangrene, or iliofemoral DVT','txl']]},
    txs:{step:'Start treatment: choose one', items:[
      'Enoxaparin 1 mg/kg twice daily (Table 4.2.1, p50)',
      'or tinzaparin 175 units/kg once daily: volume in mL = (weight in kg - 10) ÷ 100, so 60 kg = 0.5 mL (Table 4.2.1, p50)',
      'or fondaparinux once daily: <50 kg 5 mg; 50 - 100 kg 7.5 mg; >100 kg 10 mg (Table 4.2.2, p51); not in renal impairment (p22, p88)',
      'With LMWH or fondaparinux, start warfarin 5 mg daily within 24 hours of diagnosis (p22); Appendix 1 gives other starting doses (p113)',
      'Keep LMWH or fondaparinux going for at least 5 days, and on until the INR has been 2 or above on 2 days running if that takes longer (p22); chapter 4 says above 2 for at least 24 hours (p50–51)',
      'or rivaroxaban alone: 15 mg twice daily for 21 days, then 20 mg once daily; no heparin overlap needed (p23, p50–51)',
      'Obese: dose LMWH by actual weight, with no cap (Table 9.1, p87–88)'], next:'dispo'},
    txr:{step:'eGFR or creatinine clearance below 30', items:[
      'Below 30: IV unfractionated heparin adjusted by APTT, or LMWH adjusted by anti-Xa level (eGFR, p22, p50; creatinine clearance, Table 9.1, p88)',
      'Enoxaparin in renal insufficiency: 1 mg/kg once daily, with trough and peak anti-Xa levels; no cut-off given (Table 9.1, p87)',
      'Tinzaparin: no dose change, usable up to a creatinine clearance of 20 mL/min (Table 9.1, p87; the text says <20 mL/min)',
      'Fondaparinux: not in renal impairment (p22; Table 9.1, p88)',
      'Warfarin with INR checks is safe in renal failure (Table 9.1, p88)',
      'Not in the source: a dose for exactly 30. The CPG uses eGFR in mL/min/1.73 m2 (p22) and creatinine clearance in mL/min (p87–88) for the same cut-off'], next:'dispo'},
    txp:{end:'refer', title:'Pregnant: LMWH by weight, and no warfarin', items:[
      'Enoxaparin by booking or latest weight: <50 kg 40 mg BD; 50 - 69 kg 60 mg BD; 70 - 89 kg 80 mg BD; >90 kg 100 mg BD (Table 8.5.2, p80)',
      'or tinzaparin 175 units/kg once daily (Table 8.5.2, p80)',
      'Fondaparinux: not recommended in pregnancy; kept for women who cannot take heparin (p80)',
      'Warfarin is contraindicated in pregnancy: continue LMWH (p80). In labour: no more injections; planned delivery: stop LMWH 24 hours before (p80)',
      'Treat for the rest of the pregnancy, at least 6 weeks after delivery, and at least 3 months in all (p81)'],
      gap:'CPG 8.5 (p80–81). Table 8.5.2 gives no dose for exactly 90 kg or between its bands (such as 69.5 kg). No team is named for a pregnant woman with a DVT in the ED.'},
    txc:{step:'Active cancer: LMWH', items:[
      'Proximal DVT or PE with active cancer: LMWH for 6 months, then weigh going on (p22)',
      'LMWH, not unfractionated heparin; consider anticoagulating indefinitely, or at least until the cancer resolves (Table 9.6.4, p103)'], next:'dispo'},
    txl:{end:'refer', title:'Leg at risk: thrombolysis or thrombectomy', items:[
      'Venous gangrene threatening the leg: raise it, start anticoagulation, and consider venous thrombectomy (indicated for phlegmasia caerulea dolens) or catheter-directed thrombolysis (p55)',
      'Catheter-directed thrombolysis for symptomatic iliofemoral DVT if all apply: symptoms for less than 14 days; good functional status; life expectancy of 1 year or more; low bleeding risk (p23)'],
      gap:'CPG 4.4.2 (p55) and Pathway 2 (p23). The CPG does not name the team to refer to.'},
    dispo:{end:'neutral', title:'Admit or home: the CPG sets no criteria', items:[
      'LMWH needs no monitoring, and the CPG says this makes outpatient treatment feasible (p50), but it lists no criteria for who may go home',
      'Bleeding risk factors (Table 4.3.1.2, p54): uncontrolled hypertension; age >75 years; renal impairment; anaemia; recent major bleeding',
      'Home on warfarin: INR within a week, then 2 weeks later if in range, then monthly (p52); on rivaroxaban, review in 1 to 2 weeks, then monthly (p53)',
      'Arrange a medical or haematology clinic, INR checks at MTAC-Warfarin, and spoken and written advice (p25)',
      'A past VTE rules out combined hormonal contraception (Table 9.5, p100)',
      'Proximal DVT: below-knee compression stockings, ankle pressure above 23 mmHg, from a week after diagnosis or once the swelling settles, for at least 2 years (p23)',
      'How long to treat: the Duration tab'],
      links:[['#outpatient-referral','Clinic referrals from the ED (department)']],
      gap:'CPG 4.2 to 4.6 (p50–57) and Pathway 2 (p22–25). The ebook gives no disposition after a confirmed DVT either: an open question.'},

    /* Pregnancy: 8.3 to 8.5 (p76–81) and the algorithm for suspected DVT in pregnancy (p78) */
    preg:{step:'Pregnant: scan, and LMWH until DVT is excluded', items:[
      'The Wells score is validated only outside pregnancy (p44); D-dimer rises in normal pregnancy, which limits its use (p76)',
      'Give LMWH until a test excludes DVT, unless strongly contraindicated (p80). Doses: DVT confirmed, Pregnant',
      'Compression duplex ultrasound for any clinical suspicion; whole-leg swelling with back pain suggests iliac vein thrombosis (p76, p78)'], next:'pregq'},
    pregq:{q:'CUS result?', hint:'The CPG\'s algorithm for suspected DVT in pregnancy (p78).', opts:[['DVT seen','txp'],['No DVT, but still likely or iliac DVT suspected','pregr'],['No DVT, and no longer suspected','pregx']]},
    pregr:{end:'observe', title:'Continue LMWH; repeat the CUS in 1 week, or MRV', items:[
      'Normal scan with high suspicion: continue anticoagulation and repeat the CUS in 1 week (p78)',
      'Suspected iliac vein thrombosis: consider MR or contrast venography (p78)'],
      gap:'CPG 8.4.1 (p78). The CPG does not say where she waits for the repeat scan or which team follows her.'},
    pregx:{end:'neutral', title:'DVT excluded', items:['Normal CUS and DVT no longer likely: the algorithm excludes DVT (p78)'], gap:'CPG 8.4.1 (p78).'},

    /* 7.2 to 7.4, Tables 7.3 and 7.4 (p69–73); target INR (p58); MTAC-W (p107); Appendix 1 (p113–117) */
    inr:{q:'On warfarin: what is the problem?', hint:'Target INR 2.5 (range 2.0 to 3.0) for most; 3.0 (range 2.5 to 3.5) for metallic heart valves, or VTE that recurs on adequate treatment (p58). The warfarin clinic refers to a doctor for an INR over 4.0, a range each hospital may set (p107). In every case, look for the cause of the high INR (Table 7.3, p71).', opts:[
      ['Major bleeding: life or limb threatening','maj'],
      ['Bleeding, not major','nmaj'],
      ['No bleeding: INR over 8.0','i8'],
      ['No bleeding: INR over 5.0 and below 8.0','i58'],
      ['No bleeding: INR above range, up to 5.0','i5'],
      ['Head injury','hiw'],
      ['Dengue','dw']]},
    maj:{end:'refer', title:'Major bleeding: IV vitamin K 5 mg and a 4-factor PCC', items:[
      'Major bleeding: limb- or life-threatening, needing full reversal within 6 to 8 hours (p70)',
      'IV vitamin K 5 mg with a 4-factor PCC: INR <5.0, 15 IU/kg; INR >5.0, 30 IU/kg; intracranial haemorrhage, up to 50 IU/kg (Table 7.3, p71)',
      'No PCC: FFP 15 to 20 mL/kg (Table 7.3, p71), though the text says FFP lifts factors by no more than 30%, too little for life-threatening bleeding (p70)',
      '4-factor PCCs in Malaysia: octaplex and beriplex; not a 3-factor PCC (p69)'],
      links:[['#blood-tests--gxm','GXM sample and blood requests']],
      gap:'CPG 7.2 and 7.3 (p69–71). No PCC dose is given for an INR of exactly 5.0. Appendix 1 (p117) prints an older ACCP 2008 scheme, with vitamin K 10 mg slow IV. No zone or team is named.'},
    nmaj:{end:'neutral', title:'Bleeding, not major: hold or reduce warfarin, IV vitamin K 1 to 3 mg', items:[
      'Consider stopping warfarin for a time, or a lower dose, as the situation needs (Table 7.3, p71)',
      'IV vitamin K 1 to 3 mg (Table 7.3, p71): IV corrects the INR faster than oral and is preferred when bleeding (p70)'],
      gap:'CPG 7.3.2 and Table 7.3 (p70–71). No time for the repeat INR and no disposition are given.'},
    i8:{end:'neutral', title:'INR over 8.0, no bleeding: oral vitamin K 1 to 5 mg, hold warfarin', items:[
      'Oral vitamin K 1 to 5 mg and withhold warfarin (Table 7.3, p71); oral rather than IV, as the INR is the same at 24 hours (p70)',
      'For most, 1.0 to 2.0 mg by mouth is enough; 5 mg may be needed if the INR is very high. The IV ampoule can be taken by mouth in juice or water; not SC or IM (p69)'],
      gap:'CPG 7.3.3 and Table 7.3 (p69–71). An INR of exactly 8.0 is in neither band, and no repeat INR time is given. Appendix 1 (p117), from ACCP 2008, uses other bands: 5 to 8.9, and >9.0.'},
    i58:{end:'neutral', title:'INR over 5.0 and below 8.0, no bleeding: withhold 1 to 2 doses', items:[
      'Withhold 1 to 2 doses of warfarin and reduce the maintenance dose (Table 7.3, p71)',
      'Oral vitamin K is reasonable only if the bleeding risk is judged high, not routinely (p71)',
      'Bleeding risk factors (Table 4.3.1.2, p54): uncontrolled hypertension; age >75 years; renal impairment; anaemia; recent major bleeding'],
      gap:'CPG 7.3.4 and Table 7.3 (p71). An INR of exactly 5.0 is in neither band of the table, and no repeat INR time is given.'},
    i5:{end:'neutral', title:'INR above range but not over 5.0: chapter 7 has no step', items:[
      'Table 7.3 starts at an INR over 5.0 (p71)',
      'The warfarin clinic\'s dose guide, target 2.0 to 3.0: INR 3.1 - 3.9, cut the dose by 5 - 10%, next INR in 7 - 14 days; INR 4.0 - 4.9, hold 0 - 2 days and cut by 10%, next INR in 3 - 8 days (Appendix 1, p115). For target 2.5 to 3.5: p116'],
      gap:'CPG Appendix 1 (p113–117) is the warfarin clinic\'s dosing guide, not an ED pathway: the CPG gives the ED no step for this range.'},
    hiw:{end:'refer', title:'Head injury on warfarin', items:[
      'Lower threshold for a CT: on warfarin, bleeds follow more minor injury (p72)',
      'Strong suspicion of an intracranial bleed: reverse with PCC at once, before the CT and the INR result (p72; Table 7.4, p73)',
      'Check the INR; once a bleed is confirmed, add IV vitamin K 5 mg (Table 7.4, p73). PCC up to 50 IU/kg for intracranial haemorrhage (Table 7.3, p71)'],
      links:[['#head-injury-cpg--hr','Head injury CPG: 65 or over, or on an anticoagulant'],['#mild-tbi','Ebook: mild TBI']],
      gap:'CPG 7.4.2 (p72) and Tables 7.3 and 7.4 (p71–73). A strong suspicion is not defined. The head injury CPG (2015) gives no vitamin K or PCC doses.'},
    dw:{end:'neutral', title:'Dengue on warfarin', items:[
      'Withhold warfarin if the platelet count is <50 × 10⁹/L, or there is bleeding or shock (Table 7.4, p73; the text names platelets only, p72)',
      'Bridge with LMWH only for a high thrombotic risk, such as a prosthetic valve with AF or a past thromboembolic stroke, once the INR is below range (p72)',
      'Restart once past the defervescence phase, in recovery with rising platelets (p72)'],
      links:[['#dengue-cpg--mac','Dengue CPG: on an anticoagulant'],['#dengue','Ebook: dengue fever']],
      gap:'CPG 7.4.3 (p72) and Table 7.4 (p73).'},

    /* 7.6 and 7.7, fondaparinux and the new oral anticoagulants (p74–75) */
    noac:{q:'How bad is the bleeding?', hint:'CPG 7.7 (p74–75), which covers dabigatran and rivaroxaban only. Fondaparinux has no antidote (p74).', opts:[['Minor: nosebleed, bruising or heavy periods','nmin'],['Moderate: for example GI bleeding','nmod'],['Major or life-threatening','nbig']]},
    nmin:{end:'neutral', title:'Minor bleeding: stop the drug for 1 or 2 days', items:[
      'Stop the anticoagulant for one or two days (p74)',
      'It can then restart at a lower dose for a short time, for example rivaroxaban 10 mg/day or dabigatran 75 mg/day (p74)'],
      gap:'CPG 7.7 (p74). The CPG does not say who restarts the drug, or for how long the lower dose runs.'},
    nmod:{end:'neutral', title:'Moderate bleeding: stop the drug, monitor, find the source', items:[
      'Stop the anticoagulant, monitor closely, and find and treat the source; consider a longer break, perhaps with a parenteral anticoagulant if the thrombotic risk is high; red cells for symptomatic anaemia (p74)'],
      gap:'CPG 7.7 (p74). It does not say whether to admit, or to which team.'},
    nbig:{end:'refer', title:'Major bleeding: stop the drug, transfuse, treat the source', items:[
      'Stop the anticoagulant at once, monitor closely, give packed red cells and treat the source; plasma and cryoprecipitate do not reverse these drugs (p74)',
      'Rivaroxaban: a 4-factor PCC of 30 to 50 IU/kg seems reasonable for acute life-threatening bleeding; not dialysable (p75)',
      'Dabigatran: activated charcoal soon after ingestion; no antidote in 2013; haemodialysis in extreme cases (p75)'],
      gap:'CPG 7.7 (p74–75), written in 2013. It names no team.'},

    /* Table 3.1.2 (p45), 3.2.2 and the PE algorithm (p47), Pathway 2 (p21–23) */
    pe:{end:'refer', title:'Suspected PE: the CPG\'s route', items:[
      'PE Wells (Table 3.1.2, p45): signs of DVT 3; PE likelier than another diagnosis 3; heart rate >100 1.5; immobilised or surgery in the last 4 weeks 1.5; DVT or PE before 1.5; haemoptysis 1; cancer treated now or within 6 months, or palliative 1',
      'PE likely, >4 points: cover with LMWH and CTPA the same day or within 24 hours (p47); the pathway form says immediate CTPA (p21). CTPA normal: bilateral CUS (p47)',
      'PE unlikely, ≤4 points: the algorithm excludes PE, with no D-dimer step (p45, p47)',
      'Unstable, such as a systolic BP <90 mmHg: IV unfractionated heparin, and consider systemic thrombolysis (p22–23)'],
      gap:'CPG 3.1.2 and 3.2.2 (p45–47). The CPG names no zone or team for these patients.'},

    /* 9.7.2 Upper limb DVT (p104–105) */
    ul:{end:'neutral', title:'Upper limb DVT', items:[
      'Uncommon: most follow a venous catheter, cancer, compression of the vein or OHSS, sometimes unaccustomed arm exercise (p104)',
      'Catheter-related, with the catheter removed: anticoagulate for 3 months. No antiphospholipid syndrome or cancer: not beyond 3 months (Table 9.7, p105)'],
      links:[['#dvt--ul','Ebook: upper limb DVT, ultrasound and CT venography']],
      gap:'CPG 9.7.2 (p104–105). The CPG gives no test for diagnosing upper limb DVT.'}
  },

  /* Reference tabs, in the guide's own layout: each line names its CPG page */
  notes:[
    {l:'Doses', notes:[
      {h:'Treatment doses for acute VTE', src:'CPG 4.2 (p50–52) and Table 8.5.2 (p80), set out in the guide\'s own layout', table:{head:['Drug','Dose','Page'], rows:[
        ['Enoxaparin','1 mg/kg twice daily','Table 4.2.1, p50'],
        ['Tinzaparin','175 units/kg once daily; mL = (weight in kg - 10) ÷ 100: 45 kg 0.35 mL, 70 kg 0.6 mL','Table 4.2.1, p50'],
        ['Fondaparinux','Once daily: <50 kg 5 mg; 50 - 100 kg 7.5 mg; >100 kg 10 mg','Table 4.2.2, p51'],
        ['Rivaroxaban','15 mg twice daily for 21 days, then 20 mg once daily','p23, p51'],
        ['IV unfractionated heparin','80 IU/kg bolus, then 18 IU/kg/h; APTT ratio target 1.5 to 2.5','Table 4.2.5, p52; p58'],
        ['Enoxaparin, pregnant','<50 kg 40 mg BD; 50 - 69 kg 60 mg BD; 70 - 89 kg 80 mg BD; >90 kg 100 mg BD','Table 8.5.2, p80']]}},
      {h:'Before the first dose', src:'CPG p61 and Table 3.4 (p49)', items:[
        'Take a baseline platelet count before any heparin (p61)',
        'No thrombophilia tests during the acute clot, before anticoagulation starts, while on anticoagulants, or after a provoked VTE (Table 3.4, p49)']}
    ]},
    {l:'Duration', notes:[
      {h:'How long to anticoagulate a first VTE', src:'CPG Table 4.3.1 (p54), Grade B, in the guide\'s own words', items:[
        'Provoked by a passing risk factor, surgical or not: 3 months',
        'Unprovoked: offer indefinite treatment, weighing the patient\'s wishes, a low bleeding risk and reliable monitoring',
        'Unprovoked with one or more bleeding risk factors: 3 months',
        'Unprovoked with active cancer or the antiphospholipid syndrome: as long as the risk factor lasts']}
    ]}
  ],

  /* Patient advice in the guide's own words, from Pathway 2 (p23, p25) and Appendix 4, the warfarin counselling checklist
     (p121–124) */
  advice:[
    'Come back at once if the leg swells more or grows more painful, red or warm, or if you suddenly get breathless, breathe fast, feel your heart racing, or have chest pain on breathing in.',
    'On a blood thinner, watch for bleeding: nosebleeds, bleeding gums, pink or brown urine, red or black stools, vomiting blood, unusual bruising, headache or dizziness. Tell a doctor if any happen.',
    'On a blood thinner, try not to use ibuprofen, naproxen or aspirin for pain: they raise the risk of bleeding.',
    'On warfarin, take it at the same time every day. If you miss a dose, take it the same day when you remember; never double the next dose.',
    'On warfarin, keep your diet steady, without big changes in green leafy vegetables. Avoid cranberry products and alcohol.',
    'On a blood thinner, avoid cupping (bekam), acupuncture and massage, which can cause bleeding.',
    'Tell every doctor, dentist or pharmacist that you take a blood thinner, and check before starting or stopping any medicine, herbal remedy or vitamin.',
    'Keep every blood test and clinic appointment. If you were given compression stockings, wear them on the affected leg.'],

  refs:['Malaysian Society of Haematology, National Heart Association of Malaysia, Ministry of Health Malaysia and Academy of Medicine Malaysia. Clinical Practice Guidelines: Prevention and Treatment of Venous Thromboembolism. August 2013. MOH/P/PAK/264.13(GU). ISBN 978-967-12100-0-0. Electronic version at http://www.haematology.org.my. Copyright Ministry of Health Malaysia; to be reviewed in 2017 (p1).',
    'Summarised, not reproduced: the CPG states no reuse terms. Read the full CPG for the wording.'],
  see:[['#dvt','Deep vein thrombosis (ebook pathway)'],['#head-injury-cpg','Head injury CPG (2015)'],['#dengue-cpg','Dengue CPG, 4th edition (2026)'],['#blood-tests','Blood gases, GXM and drug levels'],['#calc','Calculators: Wells score and anticoagulant doses (the ebook\'s bands)']]
};

/* The ebook pathway and two CPG entries point here: links only, their wording stays (rule 5) */
P['dvt'].see = [...(P['dvt'].see || []), ['#vte-cpg', 'VTE CPG (2013)']];
P['head-injury-cpg'].see = [...(P['head-injury-cpg'].see || []), ['#vte-cpg--hiw', 'VTE CPG (2013): warfarin and head injury, with doses']];
P['dengue-cpg'].see = [...(P['dengue-cpg'].see || []), ['#vte-cpg--dw', 'VTE CPG (2013): dengue on warfarin']];
/* For engine.js (calculator links go through CALC_SEE, as for acs-cpg):
   'vte-cpg':[['#calc-wells', 'Wells score calculator (the ebook\'s bands)'], ['#calc-anticoag', 'Anticoagulant doses (the ebook\'s)']]
   When the CKD CPG lands (id ckd-cpg): add ['#ckd-cpg', 'CKD CPG'] to P['vte-cpg'].see for the renal doses. */
P['vte-cpg'].own = true;

/* ----- CPG Management of Chronic Kidney Disease in Adults, 2nd edition (MaHTAS, 2018), for adults at risk of/with CKD (p vii) -----
   68 PDF pages, ISBN 978-967-2173-39-7; reviewed line by line (ckd-review.md). Printed page = PDF page minus 19; front matter
   = PDF page minus 5 (Algorithms 1 to 4 are p xi to xiv). Excluded: CKD patients on dialysis and transplant (p vii). Appendix 3
   (p37–44) is printed sideways and its text layer is out of order: every cell was read from page images; only the drugs a
   Green Zone MO prescribes at discharge are kept. The CPG gives no patient advice: no advice tab. Long-term targets (BP,
   HbA1c, statin, diet, complications) are left out for size: they change no ED decision. Quoted as printed, including its
   spelling (diclofenac acid, q12H) and both mu characters (μmol/L on p19, µmol/L on p22); apostrophes are plain; superscripts
   are written as ^ in the equation and as ² in units. It does not replace the ebook (rule 5): the differences are open items. */
P['ckd-cpg'] = {
  title:'CKD in adults: CPG 2nd edition', grp:'cpg', src:'CPG Chronic Kidney Disease in Adults, 2nd ed. (2018)', isnew:true, hero:'ckdcpg',
  lead:'The national guideline (2018) for adults at risk of or with CKD, not on dialysis or after a transplant: when a raised creatinine or low eGFR needs a nephrologist now or a referral, how to prescribe at discharge, and what blood or protein on the dipstick means. Stages, tests and doses by kidney function are in the tabs below.',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'CPG Management of Chronic Kidney Disease in Adults, 2nd edition (MaHTAS, 2018), for adults at risk of/with CKD (p vii). Printed page numbers; the algorithms are p xi to xiv. It was due for review in 2022. The definition and stages are in the Stages tab.', opts:[
      ['Raised creatinine or low eGFR: nephrologist now, refer, or not? (chapter 7)','kn'],
      ['Prescribing at discharge: doses by kidney function (4.7, Appendix 3)','rx'],
      ['On an ACE inhibitor or ARB: creatinine or potassium up (4.1.2)','acei'],
      ['Contrast for a scan (4.7)','con'],
      ['Blood on the urine dipstick (Algorithm 3)','hu'],
      ['Protein on the urine dipstick (3.1.1)','pu'],
      ['On dialysis or with a kidney transplant','out']]},

    /* Chapter 7, Referral (p24–25): Recommendation 12 and the boxed statements */
    kn:{q:'Is CKD already known, or is this a new finding?', hint:'It is important to look at the trend of SCr and eGFR when deciding on the urgency of referral (p25). The definition of CKD is in the Stages tab.',
      opts:[['Known CKD, or an earlier result shows it','imm'],['New finding: no earlier result','newf']]},
    newf:{step:'One result does not make CKD: look for the trend', items:[
      'CKD is defined as: eGFR <60 ml/min/1.73 m² that is present >3 months with or without evidence of kidney damage OR evidence of kidney damage that is present >3 months with or without eGFR <60 ml/min/1.73 m² (p8)',
      'Serum creatinine should not be used alone in the assessment of renal function (Recommendation 3, p6)',
      'The CPG has no AKI pathway and does not say how to tell AKI from CKD at a single visit: not in the source'], next:'imm'},
    imm:{check:'any', q:'Immediate discussion with nephrologist: any of these?', hint:'Boxed statement (p25): immediate discussion with nephrologist is indicated in patients with these.',
      items:['AKI superimposed on CKD','Newly detected ESRD','Accelerated or malignant hypertension','Life-threatening hyperkalaemia','Suspected rapidly progressive glomerulonephritis'],
      opts:[['Yes, present','now'],['None','obs']]},
    now:{end:'refer', title:'Immediate discussion with nephrologist', items:[
      'When referring to a nephrologist, ensure patient has: serial blood chemistry and urine analysis; preferably a recent renal ultrasound report (boxed statement, p25)'],
      links:[['#hypertensive-urgency--tod','Target organ damage (ebook)']],
      gap:'CPG chapter 7 (p25). It does not define AKI, ESRD, accelerated or malignant hypertension or life-threatening hyperkalaemia, gives no ED treatment for them, and does not say whether to admit or how soon to call.'},
    obs:{q:'Renal outflow obstruction?', hint:'Boxed statement (p25). Ultrasound is a useful first-line test for renal tract imaging. It provides information on: urinary tract obstruction (3.3, p7).', opts:[['Yes','uro'],['No','r12']]},
    uro:{end:'refer', title:'Refer to urological services', items:['Patients with CKD and renal outflow obstruction should be referred to urological services (boxed statement, p25)'],
      links:[['#renal-colic','Renal colic (ebook)']],
      gap:'CPG p25. It does not say how soon. The department\'s ureteric colic pathway refers renal insufficiency or AKI to Urology urgently.'},
    r12:{check:'any', q:'Any of these referral criteria? (Recommendation 12)', hint:'Recommendation 12 (p24): a patient with chronic kidney disease (CKD) with any of the following criteria should be referred to a nephrologist/physician. *This is an estimation for practical purpose. The actual conversion of urine protein 1 g/day=uPCR 113 mg/mmol.',
      items:['Persistent heavy proteinuria [urine protein ≥1 g/day or urine protein: creatinine ratio (uPCR) ≥100 mg/mmol*] despite optimal treatment','Persistent isolated microscopic haematuria after excluding urogynaecological cause','Persistent haematuria with proteinuria (urine protein ≥0.5 g/day or uPCR ≥50 mg/mmol*)','Rapidly declining renal function [loss of estimated glomerular filtration rate (eGFR) >5 ml/min/1.73 m² in one year or >10 ml/min/1.73 m² within five years]','eGFR <30 ml/min/1.73 m² (eGFR categories G4 - G5)','Resistant hypertension (failure to achieve target blood pressure despite three antihypertensive agents including a diuretic)','Suspected renal artery stenosis','Suspected hereditary kidney disease','Pregnant or when pregnancy is planned','Persistent abnormalities of serum potassium','Unexplained cause of CKD'],
      opts:[['Yes, present','ref'],['None','eld']]},
    ref:{end:'refer', title:'Refer to a nephrologist/physician', items:[
      'It is important to look at the trend of SCr and eGFR when deciding on the urgency of referral. The optimal time depends on the aim of referral which must always be individualised, taking into consideration the patient\'s co-morbidities, functional status and life expectancy (p25)',
      'When referring to a nephrologist, ensure patient has: serial blood chemistry and urine analysis; preferably a recent renal ultrasound report (p25)',
      'In elderly patients with advanced CKD, referral with the aim of RRT initiation should take into consideration the co-morbidity, functional status, life expectancy, family support and patient\'s wishes because RRT may not confer better quality of life and survival (p25)'],
      links:[['#outpatient-referral','Clinic referrals from the ED']],
      gap:'CPG Recommendation 12 (p24–25). There is no clear evidence to recommend indications of referral to nephrologist (p24); the CPG gives no time frame and names no clinic. Most criteria need results over time. The department\'s clinic referral table (draft) has no row for CKD: still to confirm.'},
    eld:{check:'all', q:'Elderly, with stable eGFR and low risk of CKD progression?', hint:'Special issues in elderly (boxed statement, p25). An eGFR <60 ml/min/1.73 m² is common in elderly people which may be physiological or age-appropriate. The box gives no age. In the elderly (age >65 years), there is no accurate method to assess renal function (p6).',
      items:['Stable eGFR','Proteinuria ≤1 g/day','Optimal BP','Optimal glycaemic control'],
      opts:[['All met','pc'],['Not all met, or not elderly','gen']]},
    pc:{end:'discharge', title:'Can be managed in primary care setting in collaboration with a nephrologist', items:[
      'Elderly patients with stable eGFR and low risk of CKD progression (proteinuria ≤1 g/day, optimal BP and glycaemic control) can be managed in primary care setting in collaboration with a nephrologist (p25)'],
      gap:'CPG p25. It does not name the clinic or say how soon primary care should see the patient.'},
    gen:{end:'neutral', title:'No referral criterion found', items:[
      'Referral to nephrologist is indicated when a healthcare provider feels that additional expert input is required for patient\'s management (p24)',
      'Patients with diabetes mellitus and/or hypertension should be screened at least yearly for chronic kidney disease (CKD) (Recommendation 1, p2)'],
      gap:'CPG chapter 7 (p24–25). For a patient with CKD who meets no referral criterion and is not an elderly patient at low risk, the CPG names no setting, clinic or time frame: not in the source.'},

    /* 4.7 Special precautions (p19), p3, p7 and Appendix 3 (p37–44) */
    rx:{step:'Before you prescribe: check the dose against kidney function', items:[
      'Review all prescribed medications regularly to ensure the dose is appropriate to current renal function (4.7, p19)',
      'The Cockcroft-Gault equation was used to estimate the renal function for drug dosing unless otherwise indicated. #Drug dosing calculated using MDRD or CKD-Epi (Appendix 3, p44). Both equations are in the Tests tab; the rows are in the Doses tab',
      'In recent practice, CKD-EPI equation is used for drug dosing based on eGFR especially for newer generation drugs. However drug dosing adjustment should be done according to the United States Food and Drug Administrative- or European Medicines Agency-approved product labelling (p7)'], next:'rxq'},
    rxq:{q:'What are you prescribing?', hint:'Appendix 3 bands: Mild (GFR 60 - 90 ml/min), Moderate (GFR 30 - 59 ml/min), Severe (GFR <30 ml/min) (p37–44).',
      opts:[['Pain relief','nsaid'],['An antibiotic or antiviral','abx'],['A diabetes medicine','dm'],['A diuretic or another blood pressure medicine','bp'],['Aspirin or clopidogrel','asp']]},
    nsaid:{end:'neutral', title:'Avoid NSAIDs, including COX-2 inhibitors', items:[
      'Avoid NSAIDs including cyclooxygenase-2 inhibitors [e.g. mefenamic acid, diclofenac acid, ibuprofen, naproxen, indomethacin, ketoprofen, salicylic acid (high dose), meloxicam, celecoxib and etoricoxib] (4.7, p19)',
      'Among the most common risk factors for acute decline in GFR for patients with established CKD is NSAIDs, including cyclooxygenase-2 inhibitors (p3)',
      'Avoid long-term PPI use unless with clear indication (p19)'],
      links:[['#pain','Pain management (ebook)'],['#renal-colic','Renal colic (ebook)']],
      gap:'CPG 4.7 (p19) and p3. Appendix 3 lists no analgesic: the CPG gives no dose of paracetamol, tramadol, opioids or gabapentinoids in CKD. The ebook gives NSAIDs for renal colic: where they differ is an open item.'},
    abx:{end:'neutral', title:'Antibiotics and antivirals: by the Appendix 3 bands', items:[
      'Nitrofurantoin 50 - 100 mg q6h: mild, No dosage adjustment necessary; moderate, Avoid; severe, Avoid (p42)',
      'Trimethoprim: <30 ml/min: Close monitoring of blood counts (p43)',
      'Acyclovir: High doses can cause encephalopathy (p41)',
      'Printed No dosage adjustment necessary in all three bands: cefuroxime axetil, azithromycin, clindamycin, cloxacillin, doxycycline, metronidazole (p40–44). The other rows are in the Doses tab'],
      links:[['#diabetic-foot-cpg--mild','Diabetic foot: oral antibiotics'],['#gz-rules--ivab','IV antibiotics when no bed is free']],
      gap:'CPG Appendix 3 (p40–44), for oral medicines only: no IV doses. Some cells use sub-bands that leave gaps, for example cephalexin 10 - 50 against the moderate band 30 - 59.'},
    dm:{end:'neutral', title:'Diabetes medicines by kidney function', items:[
      'Metformin is eliminated via kidney and may accumulate in body as kidney function deteriorates - increased risk of lactic acidosis. Metformin 500 - 1,000 mg BD: mild, No adjustment; moderate, 30 - 45: 50%; severe, Avoid (p39)',
      'Glipizide and gliclazide are the preferred agents among the second-generation sulfonylureas as they do not have active metabolites and have lower risk of hypoglycaemia in CKD patients (p38)',
      'Gliclazide 80 - 160 mg BD: severe, Contraindicated. Glibenclamide 5 - 10 mg OD: mild, Use with caution; moderate and severe, Avoid (p38)',
      'Insulin: Doses should be adjusted based on frequent monitoring to balance goals of glycaemic control and avoidance of hypoglycaemia (p40)'],
      links:[['#hyperglycaemia','Hyperglycaemia (ebook)'],['#hypoglycaemia','Hypoglycaemia (ebook)']],
      gap:'CPG Appendix 3 (p38–40). Metformin\'s moderate cell gives only 30 - 45: the CPG does not state the dose at 46 - 59. Metformin carries no #, so by the disclaimer its bands are by Cockcroft-Gault; gliclazide carries #. The ebook contraindicates metformin at eGFR under 45: where they differ is an open item.'},
    bp:{end:'neutral', title:'Diuretics and blood pressure medicines', items:[
      'Any class of antihypertensive agents may be used to treat hypertension in chronic kidney disease (CKD) patients without proteinuria. The choice will depend on the patient\'s co-morbidity (Recommendation 6, p13)',
      'Angiotensin-Converting Enzyme Inhibitor (ACEi)/Angiotensin Receptor Blocker (ARB) should be used as first-line agent in: diabetic kidney disease (DKD) with albuminuria; non-DKD when urinary protein excretion ≥1.0 g/day; non-DKD with hypertension when urinary protein excretion ≥0.5 g/day (Recommendation 6)',
      'Renal profile should be reassessed within two weeks upon initiation or dose escalation of ACEi/ARB therapy. The interval depends on the baseline renal function (p14)',
      'Thiazide diuretics are unlikely to be of use once GFR <30 ml/min (Appendix 3, p38)',
      'Spironolactone and amiloride: Serum potassium needs to be monitored (p38)',
      'ACEi and ARB should be avoided in pregnancy (p23)'],
      links:[['#ckd-cpg--acei','Creatinine or potassium up on an ACEi or ARB'],['#hypertensive-urgency--mono','Hypertensive urgency: monotherapy (ebook)']],
      gap:'CPG Recommendation 6 (p13), p14, p23 and Appendix 3 (p38). Appendix 3 has no ACE inhibitor, ARB, calcium channel blocker or beta-blocker rows: the CPG gives no doses for them. The diuretic rows are in the Doses tab.'},
    asp:{end:'neutral', title:'Aspirin and clopidogrel', items:[
      'Aspirin should be used in patients with chronic kidney disease (CKD) for secondary prevention of cardiovascular disease (CVD). Aspirin should not be used as primary prevention of CVD in CKD (Recommendation 10, p20)',
      'Combination of clopidogrel with aspirin should be avoided in patients with CKD unless compelling indications are present (Recommendation 10)',
      'CKD patients are at increased risk of bleeding compared with the general population (p21)'],
      links:[['#acs','ACS and Obsess protocol (ebook)'],['#acs-cpg','ACS CPG (2026)']],
      gap:'CPG Recommendation 10 (p20–21). It does not define compelling indications.'},

    /* 4.1.2a, ACEi/ARB monitoring (p14) */
    acei:{check:'any', q:'ACE inhibitor or ARB started or increased: any of these?', hint:'4.1.2a (p14): consider to reduce or discontinue ACEi/ARB within two months upon commencement (after excluding other precipitating factors) when:',
      items:['SCr levels remain ≥30% from the baseline (or eGFR reduces ≥25%)','Serum potassium ≥5.6 mmol/L'],
      opts:[['Yes, either','acered'],['Neither','acecont']]},
    acered:{end:'neutral', title:'Consider to reduce or discontinue ACEi/ARB', items:[
      'Within two months upon commencement (after excluding other precipitating factors) (p14)',
      'Immediate discussion with nephrologist is indicated in patients with life-threatening hyperkalaemia (p25)'],
      links:[['#ckd-cpg--imm','Immediate discussion with nephrologist']],
      gap:'CPG 4.1.2a (p14) and p25. It gives no potassium level for life-threatening hyperkalaemia and no rule beyond two months of starting. Both of its lists join the criteria with or, so one patient can meet a titrate criterion and a reduce criterion at once.'},
    acecont:{end:'neutral', title:'Titrate, with the renal profile reassessed within two weeks', items:[
      'ACEi/ARB should be titrated to the maximum recommended dose to achieve optimal BP and anti-proteinuric targets provided: SCr levels remain <30% from the baseline (or eGFR reduces <25%) or serum potassium <5.6 mmol/L (p14)',
      'Renal profile should be reassessed within two weeks upon initiation or dose escalation of ACEi/ARB therapy (p14)',
      'ACEi should be prescribed first and changed to an ARB only if there is non-renal adverse drug reaction (p14)'],
      links:[['#hypertensive-urgency--mono','Hypertensive urgency: ACE inhibitor doses (ebook)']],
      gap:'CPG 4.1.2a (p14). It gives no ACE inhibitor or ARB doses. The EMACC review list asks for a renal profile if captopril was started.'},

    /* 4.7 iv and v, contrast (p19) */
    con:{end:'neutral', title:'Adhere to risk mitigation strategies to avoid contrast-induced AKI', items:[
      'Avoid radio-contrast agents in high risk patients if possible. They are those with pre-existing renal impairment (SCr ≥132 μmol/L or an eGFR <60 ml/min/1.73 m²), DM, volume depletion, CCF, nephrotic syndrome, decompensated liver cirrhosis or concurrent NSAIDs/diuretic use (4.7, p19)',
      'Consider an alternative imaging study e.g. ultrasound, non-contrasted computerised tomography scan or magnetic resonance imaging',
      'Use isotonic saline peri-procedure',
      'There is insufficient evidence to support the use of N-acetylcysteine and sodium bicarbonate',
      'Use the lowest dose of contrast possible and avoid repeated studies within 48 hours',
      'Gadolinium should be avoided in patients with impaired renal function (eGFR <30 ml/min/1.73 m²) due to increased risk of nephrogenic systemic fibrosis (p19)'],
      links:[['#trauma-walkins--ct','HIT whole-body CT (department)']],
      gap:'CPG 4.7 (p19). It gives no saline volume or rate. The department\'s HIT CT protocol says a renal profile is not mandatory before a whole-body CT.'},

    /* Algorithm 3, Evaluation of haematuria (p xiii), 3.1.2 (p5) */
    hu:{q:'Microscopic haematuria: signs and symptoms of UTI?', hint:'Algorithm 3 (p xiii), Evaluation of Haematuria in Chronic Kidney Disease in Adults. A positive dipstick test for blood on two out of three occasions warrant a full microscopic examination (p5).',
      opts:[['Yes','uti'],['No','oth']]},
    uti:{end:'neutral', title:'Treat infection; confirm resolution with urinalysis after six weeks', items:['Treat infection','Confirm resolution of microscopic haematuria with follow-up urinalysis after six weeks completion of therapy (Algorithm 3, p xiii)'],
      links:[['#ckd-cpg--abx','Antibiotics by kidney function']],
      gap:'CPG Algorithm 3 (p xiii). It does not say what to do if haematuria persists after the infection is treated.'},
    oth:{q:'Other aetiologies?', hint:'Algorithm 3 (p xiii): *vigorous exercise, trauma to urethra, menstruation, medications.', opts:[['Yes','stop'],['No','glom']]},
    stop:{step:'Stop contributing factors, then re-test for microscopic haematuria', items:['Algorithm 3 (p xiii). It gives no interval for the re-test'], next:'ret'},
    ret:{q:'Re-test for microscopic haematuria?', hint:'Algorithm 3 (p xiii).', opts:[['No haematuria','dch'],['Presence of haematuria','glom']]},
    dch:{end:'discharge', title:'Discharge', items:['No haematuria on re-test: discharge (Algorithm 3, p xiii)'], gap:'CPG Algorithm 3 (p xiii).'},
    glom:{check:'any', q:'Evidence of glomerular disease?', hint:'Algorithm 3 (p xiii), footnote **. Urine microscopy (preferably phase contrast microscopy) on a fresh specimen can be used to differentiate haematuria of glomerular or non-glomerular origin (p5).',
      items:['Proteinuria','Red cell casts','Dysmorphic red blood cells','Elevated creatinine'],
      opts:[['Yes, present','neph'],['None','urh']]},
    neph:{end:'refer', title:'Refer to nephrologist', items:['Evidence of glomerular disease: refer to nephrologist (Algorithm 3, p xiii)','Referral criterion: persistent haematuria with proteinuria (urine protein ≥0.5 g/day or uPCR ≥50 mg/mmol*) (Recommendation 12, p24)'],
      links:[['#ckd-cpg--ref','Refer to a nephrologist/physician']],
      gap:'CPG Algorithm 3 (p xiii) and Recommendation 12 (p24). No time frame or clinic.'},
    urh:{end:'refer', title:'Refer to urologist', items:['No evidence of glomerular disease: refer to urologist (Algorithm 3, p xiii)','Non-glomerular haematuria warrants a urological evaluation (p5)'],
      gap:'CPG Algorithm 3 (p xiii) and p5. Recommendation 12 (p24) refers persistent isolated microscopic haematuria after excluding urogynaecological cause to a nephrologist/physician: which applies is an open item. No time frame or clinic.'},

    /* 3.1.1 Proteinuria (p4–5), Recommendation 2, Table 1, Algorithms 1 and 2 */
    pu:{end:'neutral', title:'Proteinuria: confirm it with a repeat test within three months', items:[
      'Presence of proteinuria should be confirmed by a repeat test within three months (p4)',
      'Table 1 (p4), increases protein excretion: strenuous exercise; uncontrolled DM; uncontrolled hypertension; heart failure; UTI; acute febrile illness; haematuria; menstruation; pregnancy. Decreases protein excretion: ACEi/ARB; NSAIDs',
      'In patients with diabetes, albumin: creatinine ratio on an early morning spot urine sample should be performed to screen for microalbuminuria if urine dipstick for protein is negative (Recommendation 2, p4)',
      'Proteinuria on 2 out of 3 occasions: quantify proteinuria; check renal function; perform renal ultrasound scan if indicated (Algorithm 2, p xii)'],
      links:[['#ckd-cpg--r12','Referral criteria (Recommendation 12)']],
      gap:'CPG 3.1.1 (p4–5) and Algorithms 1 and 2 (p xi–xii). It does not say what to do with one positive dipstick taken during an acute illness, beyond Table 1. Algorithm 1 prints Urine protein >0.3 mg/mol for a positive test, a unit the CPG does not explain.'},

    out:{end:'neutral', title:'Outside this CPG', items:[
      'Exclusion Criteria: CKD patients on dialysis and transplant (p vii)',
      'The dosing guide for GFR <10 ml/min does not provide information on dosing in haemodialysis, peritoneal dialysis or continuous RRT patients (Appendix 3, p44)'],
      gap:'Not in the source. The department\'s blood gas note lists ESRF with APO, ECG changes or missed dialysis.'}
  },

  /* Reference tabs: each note names its CPG page */
  notes:[
    {l:'Stages', notes:[
      {h:'Definition of CKD', src:'CPG 3.4 and Recommendation 4 (p8)', items:[
        'Kidney Disease Improving Global Outcomes (KDIGO) staging should be used to classify chronic kidney disease (Recommendation 4).',
        'CKD is defined as: eGFR <60 ml/min/1.73 m² that is present >3 months with or without evidence of kidney damage* OR evidence of kidney damage* that is present >3 months with or without eGFR <60 ml/min/1.73 m².',
        '*Markers of kidney damage are: albuminuria (AER ≥30 mg/24 hours or ACR ≥3 mg/mmol); urine sediment abnormalities; electrolyte and other abnormalities due to tubular disorders; abnormalities detected by histology; structural abnormalities detected by imaging; history of kidney transplantation.',
        'CKD in itself is NOT a diagnosis. There should be attempts to identify the underlying cause. Classification of CKD should be based upon cause, GFR category and albumin category (CGA).']},
      {h:'Table 3: GFR categories in CKD', src:'CPG p9. Table 5 and the quick reference print G5 as <15.', table:{head:['GFR category','GFR (ml/min/1.73 m²)','Term'], rows:[
        ['G1','≥90','Normal or high'],['G2','60 - 89','Mildly decreased'],['G3a','45 - 59','Mildly to moderately decreased'],['G3b','30 - 44','Moderately to severely decreased'],['G4','15 - 29','Severely decreased'],['G5','≤15','Renal failure']]}},
      {h:'Table 4: albuminuria categories in CKD', src:'CPG p9. Albuminuria is an independent CV risk factor at any stage of CKD.', table:{head:['Category','AER (mg/24 hours)','ACR (mg/mmol)','ACR (mg/g)','Terms'], rows:[
        ['A1','<30','<3','<30','Normal to mildly increased'],['A2','30 - 300','3 - 30','30 - 300','Moderately increased'],['A3','>300','>30','>300','Severely increased']]}},
      {h:'Table 5: prognosis of CKD by GFR and albuminuria category', src:'CPG p10, modified from KDIGO 2012. The CPG prints a grid of colours, read here cell by cell with its legend: Green - low risk, Yellow - moderate risk, Orange - high risk, Red and Deep Red - very high risk. Table 5 prints G5 as <15.', items:[
        'Green, low risk: G1 and G2 with A1.',
        'Yellow, moderate risk: G1 and G2 with A2; G3a with A1.',
        'Orange, high risk: G1 and G2 with A3; G3a with A2; G3b with A1.',
        'Red, very high risk: G3a with A3; G3b with A2 and A3; G4 with A1 and A2.',
        'Deep red, very high risk: G4 with A3; G5 with A1, A2 and A3.']}
    ]},
    {l:'Tests', notes:[
      {h:'Renal function', src:'CPG Recommendation 3 (p6) and 3.2 (p6–7)', items:[
        'Renal function should be assessed using estimated glomerular filtration rate (eGFR) based on the 2009 CKD-epidemiology (CKD-EPI) creatinine equation (Recommendation 3).',
        'Serum creatinine (SCr) is not sensitive to diagnose early CKD as it is affected by age, gender, ethnicity, muscle mass and dietary protein intake. It will only rise after a 50% decline of eGFR (p6).',
        'In the elderly (age >65 years), there is no accurate method to assess renal function (p6).']},
      {h:'Equations for Estimation of Renal Function', src:'CPG p7, as printed; ^ marks a superscript. The CPG gives no conversion from µmol/L to mg/dl.', items:[
        '2009 CKD-EPI creatinine equation = 141 x min (Scr/κ,1)^α x max (Scr/κ,1)^-1.209 x 0.993^Age [x 1.018 if female] [x 1.159 if black], where Scr is serum creatinine (in mg/dl), κ is 0.7 for females and 0.9 for males, α is -0.329 for females and -0.411 for males, min indicates the minimum of Scr/κ or 1, and max indicates the maximum of Scr/κ or 1',
        'Cockcroft-Gault Creatinine Clearance = CrCl (ml/min/1.73 m²) = (140 - age (yrs)) x body weight (kg)/SCr (umol/l) x Constant where the constant is 1.23 in male or 1.04 in female',
        'When creatinine-based equations are used, calibration of SCr should confer to the isotope dilution mass spectrophotometry method to minimise variations in results.']}
    ]},
    {l:'Doses', notes:[
      {h:'How to read Appendix 3', src:'CPG Appendix 3 (p37–44): Dosage Recommendation in CKD for Commonly Prescribed Oral Medications. Only the drugs a Green Zone MO prescribes at discharge are kept; the US FDA pregnancy category column is left out (Appendix 4, p45). A cell printed across columns is repeated in each.', items:[
        'The Cockcroft-Gault equation was used to estimate the renal function for drug dosing unless otherwise indicated. #Drug dosing calculated using MDRD or CKD-Epi.',
        'The list of medication dosage adjustment should be used as a general guides only and is not intended to be comprehensive.',
        'OD=once daily, BD= twice daily, q=every, h=hourly.']},
      {h:'Antibiotics and antivirals', src:'CPG Appendix 3 (p40–44). Also printed there: sultamicillin, ampicillin, penicillin V, cefaclor, ceftibuten, levofloxacin, moxifloxacin, norfloxacin, ofloxacin, erythromycin, minocycline, tetracycline, fluconazole, itraconazole and ketoconazole.', table:{head:['Medication','Usual Dose','Mild (GFR 60 - 90 ml/min)','Moderate (GFR 30 - 59 ml/min)','Severe (GFR <30 ml/min)','Note'], rows:[
        ['Amoxicillin','250 - 500 mg q8h','q8h','q8 - 12h','10 - 30: q8 - 12h; <10: q24h',''],
        ['Amoxicillin + Clavulanic Acid (Augmentin)','625 mg q8h','No dosage adjustment necessary','No dosage adjustment necessary','10 - 30: q12h; <10: q24h',''],
        ['Cloxacillin','250 - 500 mg q6h','No dosage adjustment necessary','No dosage adjustment necessary','No dosage adjustment necessary',''],
        ['Cephalexin','250 - 500 mg q6h','q8h','10 - 50: 500 mg q12 - 24h; <10: 250 - 500 mg q12 - 24h','10 - 50: 500 mg q12 - 24h; <10: 250 - 500 mg q12 - 24h',''],
        ['Cefuroxime axetil','250 - 500 mg q12h','No dosage adjustment necessary','No dosage adjustment necessary','No dosage adjustment necessary',''],
        ['Ciprofloxacin','500 - 750 mg q12h','100%','50 - 75%','15 - 30: 50 - 75%; <15: 50%',''],
        ['Azithromycin','250 - 500 mg q24h','No dosage adjustment necessary','No dosage adjustment necessary','No dosage adjustment necessary',''],
        ['Clarithromycin','500 - 1,000 mg q12h','100%','100%','50%',''],
        ['Doxycycline','100 mg q24h','No dosage adjustment necessary','No dosage adjustment necessary','No dosage adjustment necessary',''],
        ['Clindamycin','150 - 300 mg q6h','No dosage adjustment necessary','No dosage adjustment necessary','No dosage adjustment necessary',''],
        ['Metronidazole','200 - 400 mg q8 - 12h','No dosage adjustment necessary','No dosage adjustment necessary','No dosage adjustment necessary','#'],
        ['Nitrofurantoin','50 - 100 mg q6h','No dosage adjustment necessary','Avoid','Avoid',''],
        ['Trimethoprim','100 mg q12h','No dosage adjustment necessary','No dosage adjustment necessary','15 - 30: 50 mg q12H; <15: q24h','<30 ml/min: Close monitoring of blood counts'],
        ['Sulfamethoxazole + Trimethoprim (TMP)','960 mg q12h or 15 - 20 mg TMP/kg/day in divided doses q6h','No dosage adjustment necessary','No dosage adjustment necessary','15 - 30: 50%; <15: 50% q12 - 24h','Dose to be optimised based on diagnosis'],
        ['Acyclovir','200 mg q4h (herpes simplex)','No dosage adjustment necessary','No dosage adjustment necessary','15 - 30: No dosage adjustment necessary; <15: 50% (use with caution)','High doses can cause encephalopathy'],
        ['Acyclovir','800 mg q4h (herpes zoster)','No dosage adjustment necessary','No dosage adjustment necessary','>25: No dosage adjustment necessary; 10 - 25: 800 mg q8h; <10: 800 mg q12h','High doses can cause encephalopathy'],
        ['Oseltamivir','75 mg q12h','No dosage adjustment necessary','No dosage adjustment necessary','10 - 30: 75 mg q24h; <10: No recommendation','']]}},
      {h:'Diabetes medicines', src:'CPG Appendix 3 (p38–40). Sulfonylureas should be used cautiously due to increased risk of hypoglycaemia; first-generation sulfonylureas generally should be avoided due to increased half-life and risk of hypoglycaemia in patients with CKD (p38). Also printed there: glimepiride, glipizide, acarbose, meglitinides, thiazolidinediones, GLP-1 receptor agonists and DPP-4 inhibitors.', table:{head:['Medication','Usual Dose','Mild (GFR 60 - 90 ml/min)','Moderate (GFR 30 - 59 ml/min)','Severe (GFR <30 ml/min)','Note'], rows:[
        ['Metformin','500 - 1,000 mg BD','No adjustment','30 - 45: 50%','Avoid',''],
        ['Gliclazide','80 - 160 mg BD','No dosage adjustment necessary','No dosage adjustment necessary','Contraindicated','#'],
        ['Glibenclamide','5 - 10 mg OD','Use with caution','Avoid','Avoid',''],
        ['Dapagliflozin','5 - 10 mg OD','No dosage adjustment necessary','Avoid','Avoid',''],
        ['Canagliflozin','100 - 300 mg OD','No dosage adjustment necessary','45 - 60: 100 mg OD; <45: Avoid','Avoid',''],
        ['Empagliflozin','10 - 25 mg OD','No dosage adjustment necessary','<45: Avoid','Avoid','']]}},
      {h:'Diuretics', src:'CPG Appendix 3 (p38). The note Thiazide diuretics are unlikely to be of use once GFR <30 ml/min is printed beside chlorthalidone and chlorothiazide; hydrochlorothiazide and indapamide carry #. Indapamide\'s usual dose is printed 12.5 - 5 mg OD. Also printed there: chlorthalidone, chlorothiazide, bumetanide and amiloride.', table:{head:['Medication','Usual Dose','Mild (GFR 60 - 90 ml/min)','Moderate (GFR 30 - 59 ml/min)','Severe (GFR <30 ml/min)','Note'], rows:[
        ['Hydrochlorothiazide','12.5 - 50 mg OD','No dosage adjustment necessary','No dosage adjustment necessary','<10: Avoid','#'],
        ['Indapamide','12.5 - 5 mg OD','No dosage adjustment necessary','No dosage adjustment necessary','1.25 - 2.5 mg; <10: Avoid','#'],
        ['Frusemide','40 - 240 mg/day in 2 - 3 doses','No dosage adjustment necessary','No dosage adjustment necessary','No dosage adjustment necessary',''],
        ['Spironolactone','25 - 100 mg/day in 1 - 2 doses','≥50: 12.5 - 25 mg OD/ BD','30 - 49: 12.5 mg OD/EOD','<30: Avoid','#; Serum potassium needs to be monitored']]}}
    ]}
  ],
  refs:['Ministry of Health Malaysia. Clinical Practice Guidelines: Management of Chronic Kidney Disease in Adults (Second Edition). Putrajaya: Malaysian Health Technology Assessment Section (MaHTAS), Medical Development Division; 2018. ISBN 978-967-2173-39-7. Available at http://www.moh.gov.my',
    'Copyright MaHTAS. Content reproduced with a copyright acknowledgement to MaHTAS: not changed, not sold, not used to promote or endorse any product or service, and not used in an inappropriate or misleading context.',
    'Sources the CPG adapts: Algorithms 1, 2 and 4 and Tables 1 and 2 from its first edition (MoH, 2011); Table 5 from KDIGO 2012; Appendix 3 from Drug Prescribing in Renal Failure (5th Ed., 2007), the Lexicomp Drug information handbook (22nd Ed., 2013), Matzke et al. (Kidney Int. 2011) and medication package inserts.'],
  see:[['#renal-colic','Renal colic (ebook)'],['#hyperglycaemia','Hyperglycaemia (ebook)'],['#hypertensive-urgency','Hypertensive urgency (ebook)'],['#pain','Pain management (ebook)'],['#dvt--dvt','DVT: anticoagulant by creatinine clearance (ebook)'],['#gout-cpg','Gout CPG: colchicine and allopurinol by kidney function'],['#diabetic-foot-cpg','Diabetic foot CPG'],['#outpatient-referral','Clinic referrals from the ED']]
};

/* The related pathways point to the national guideline (links only: their content stays as written) */
P['renal-colic'].see = [...(P['renal-colic'].see || []), ['#ckd-cpg--nsaid', 'CKD CPG (2018): NSAIDs in CKD']];
P['pain'].see = [...(P['pain'].see || []), ['#ckd-cpg--nsaid', 'CKD CPG (2018): avoid NSAIDs in CKD']];
P['hyperglycaemia'].see = [...(P['hyperglycaemia'].see || []), ['#ckd-cpg--dm', 'CKD CPG (2018): diabetes medicines by kidney function']];
P['hypoglycaemia'].see = [...(P['hypoglycaemia'].see || []), ['#ckd-cpg--dm', 'CKD CPG (2018): sulfonylureas in CKD']];
P['hypertensive-urgency'].see = [...(P['hypertensive-urgency'].see || []), ['#ckd-cpg--bp', 'CKD CPG (2018): blood pressure medicines in CKD']];
P['heart-failure'].see = [...(P['heart-failure'].see || []), ['#ckd-cpg--acei', 'CKD CPG (2018): ACE inhibitor or ARB with a rising creatinine or potassium']];
P['dvt'].see = [...(P['dvt'].see || []), ['#ckd-cpg--rx', 'CKD CPG (2018): creatinine clearance (Cockcroft-Gault)']];
P['gout-cpg'].see = [...(P['gout-cpg'].see || []), ['#ckd-cpg', 'CKD CPG, 2nd edition (2018)']];
P['diabetic-foot-cpg'].see = [...(P['diabetic-foot-cpg'].see || []), ['#ckd-cpg--abx', 'CKD CPG (2018): oral antibiotics by kidney function']];

/* Cross-links between this round's entries, now that all nine are in */
P['t2dm-cpg'].see = [...(P['t2dm-cpg'].see || []), ['#ckd-cpg', 'CKD CPG (2018)']];
P['ckd-cpg'].see = [...(P['ckd-cpg'].see || []), ['#t2dm-cpg', 'Type 2 diabetes CPG (2020)']];
P['vte-cpg'].see = [...(P['vte-cpg'].see || []), ['#ckd-cpg', 'CKD CPG (2018): kidney function and doses']];
