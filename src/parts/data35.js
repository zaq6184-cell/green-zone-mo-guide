/* ================= The 26 Nov 2026 round: four Green Zone topics from open educational sources =================
   Krishna admitted WikEM (CC BY-SA 4.0), RCEMLearning (CC BY-NC 3.0 UK), LITFL and St Emlyn's (CC BY-NC-SA 4.0) on 26 Nov 2026
   ("Open-licence sites") as sources of facts only (rule 8): every line here is in the guide's own words, each number read on
   the page its step names (sources/edu/<topic>.md, checked row by row in <topic>-check.md), nothing quoted at length and no
   table copied as laid out. A Malaysian source leads where it speaks; where the sources differ the step gives each with its
   source, and the department's choice is under Still to confirm. Antibiotics: the National Antimicrobial Guideline by section
   name and link only. None of this replaces the ebook (rule 5). */
const EDU_READ = '26 Nov 2026';
const esrc = t => 'Source: ' + t + '. In the guide\'s own words; read ' + EDU_READ + '.';
const NAG_A10 = ['https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a10-otorhinolaryngology-infections', 'NAG 2024, A10: ear, nose and throat infections'];
const NAG_C2 = ['https://sites.google.com/moh.gov.my/nag/contents/section-c-clinical-pathways-in-primary-care/c2-acute-otitis-media', 'NAG 2024, C2: acute otitis media'];
const E_W1 = 'WikEM, Epistaxis', E_R1 = 'RCEMLearning, Acute Epistaxis (J D Whittaker, reviewed 12 Jun 2024)', E_L1 = 'LITFL, A Case of Epistaxis (K Guthrie, 2011)', E_S1 = 'St Emlyn\'s, the NoPAC trial (S Carley, 2021)';
const E_W2 = 'WikEM, Nasal foreign body', E_W3 = 'WikEM, Ear foreign body', E_R2 = 'RCEMLearning, Foreign Bodies in Ears and Noses (C Davies, O Adenugba, reviewed 3 Mar 2025)';
const E_W4 = 'WikEM, Otitis externa', E_W5 = 'WikEM, Malignant otitis externa', E_W6 = 'WikEM, Acute otitis media (a page written for children)', E_R3 = 'RCEMLearning, Ear Disease (A Pearson, 2020; the page says it has not been reviewed for over three years)';

P['nosebleed-ent'] = {
  title:'Nosebleed, ear and nose', grp:'cpg', own:true, isnew:true, hero:'entbleed',
  src:'WikEM, RCEMLearning, LITFL and St Emlyn\'s, in the guide\'s own words; the NPC CPG (MaHTAS 2016)',
  lead:'A nosebleed from first aid to cautery and packing, things in the nose or ear, and the painful or discharging ear, from open educational sources read on 26 Nov 2026. No Malaysian guideline read covers nosebleed care (the MOH guideline for AMOs in otorhinolaryngology is a scan and was not read); the nasopharyngeal carcinoma CPG leads on when to refer.',
  kw:'epistaxis nosebleed nose bleed bleeding nose hidung berdarah berdarah hidung little\'s area kiesselbach cautery silver nitrate nasal pack packing rapid rhino merocel tranexamic txa nopac foreign body nose ear insect bead button battery magnet mother\'s kiss otitis externa media malignant necrotising ear pain earache sakit telinga discharge wick mastoiditis npc nasopharyngeal carcinoma',
  start:'menu',
  nodes:{
    menu:{q:'What is it?', hint:'Adults in the Green Zone. A child goes where the department\'s paediatric triage (PAT) sends them.', opts:[
      ['A nosebleed now','nbrisk'],
      ['Something in the nose','nfb'],
      ['Something in the ear','efb'],
      ['Ear pain or discharge','ear'],
      ['A one-sided nosebleed that keeps coming back, blood-stained discharge or a neck lump','npc']]},

    nbrisk:{q:'Is the patient unwell, or at high risk?', hint:'RCEM: always treat a nosebleed as a circulatory emergency, especially in high-risk patients and with deranged vital signs; in the elderly, with a bleeding tendency or on an anticoagulant, a cannula and bloods. ' + esrc(E_R1),
      opts:[['Deranged vital signs, a heavy bleed, elderly, a clotting disorder or an anticoagulant','nbres'],['None of these','nbfa']]},
    nbres:{step:'Resuscitate first, then first aid', items:[
      'Deranged vital signs: the patient may not belong in the Green Zone; uptriage by the department\'s rules',
      'Elderly, a bleeding tendency or anticoagulated: at least a green cannula, and FBC, U&Es, clotting and group and save, depending on the blood loss (RCEM)',
      'Clotting studies are not routine: only with a personal or family history of a clotting disorder (RCEM)',
      'Protect yourself: gloves, mask and visor at least (RCEM)'],
      gap:esrc(E_R1), links:[['#gz-rules--glance','The Green Zone at a glance']], next:'nbfa'},
    nbfa:{step:'First aid: lean forward and pinch the soft part', fig:'spin-nose', items:[
      'Sit the patient up and leaning forward; spit the blood out rather than swallow it (RCEM)',
      'Pinch the soft part of the nose firmly, pressing the nostrils together, below the hard nasal bones (RCEM, WikEM, LITFL)',
      'How long: at least 10 minutes (RCEM); 15 to 20 minutes (LITFL); at least 20 minutes before moving on (WikEM)',
      'Sucking an ice cube has been shown to cut nasal blood flow; ice on the neck or forehead has not been shown to change it; an ice pack on the nose may help (RCEM)',
      'Most nosebleeds start at the front of the septum, Little\'s area (Kiesselbach\'s plexus): about 90% (WikEM) or 95% (RCEM)'],
      gap:esrc(E_R1 + '; ' + E_W1 + '; ' + E_L1), next:'nbq'},
    nbq:{q:'After first aid, is it still bleeding?', opts:[['Stopped','nblook'],['Still bleeding','nbvc']]},
    nbvc:{step:'Clear the clots and use a vasoconstrictor', items:[
      'Clear the clots (blow the nose or suction), then put in a topical vasoconstrictor: oxymetazoline or phenylephrine (WikEM)',
      'WikEM soaks cotton pledgets in a 1:1 mix of 0.05% oxymetazoline and 4% lignocaine before cautery',
      'Tranexamic acid on a pledget: WikEM and RCEM give 500 mg of the injectable solution (500 mg in 5 ml); RCEM for adults, especially on antiplatelet drugs, who fail direct pressure, before a pack. The injection (500 mg in 5 ml) is in the department\'s dosing and dilution guide',
      'But the NoPAC trial (496 patients) found packing needed as often with tranexamic acid as with placebo (43.7% against 41.3%), and St Emlyn\'s concludes it cannot be recommended on current evidence; WikEM notes the same trial',
      'Which of these the department stocks and uses is under Still to confirm'],
      gap:esrc(E_W1 + '; ' + E_R1 + '; ' + E_S1), next:'nblook'},
    nblook:{q:'With the field now bloodless, can you see a bleeding point at the front of the septum?', hint:'Cautery is generally only effective once the bleeding has stopped and the point can be seen (WikEM).',
      opts:[['Yes, one point at the front','nbcaut'],['It has stopped, and no point is seen','nbdc'],['Still bleeding with no point seen, from both sides, or blood running down the throat','nbpack']]},
    nbcaut:{step:'Cautery with silver nitrate', items:[
      'Hold the stick just proximal to the bleeding point (WikEM)',
      'How long: a few seconds at most (WikEM); 4 to 5 seconds (LITFL); no more than 30 seconds on any one spot (RCEM)',
      'Never cauterise both sides of the septum at one sitting: it risks a septal perforation (WikEM, LITFL)',
      'Watch the patient for 15 minutes afterwards, before discharge (RCEM)'],
      gap:esrc(E_W1 + '; ' + E_L1 + '; ' + E_R1), next:'nbcq'},
    nbcq:{q:'After cautery and 15 minutes, has it stopped?', opts:[['Stopped','nbdc'],['Still bleeding','nbpack']]},
    nbpack:{step:'Pack the nose', items:[
      'Pack when first aid and cautery have failed, or the bleeding is from both sides (RCEM)',
      'Two kinds: a compressed sponge or an inflatable balloon tampon; Rapid Rhino comes in 5.5 cm and 7.5 cm (RCEM)',
      'Soak it first: in water, not saline (WikEM); in saline or distilled water (RCEM). Pass it along the floor of the nose, as horizontally as you can (WikEM, RCEM)',
      'Watch for a minimum of 30 minutes and look at the back of the throat for further bleeding (RCEM)',
      'A front pack that fails most likely means a bleed from the back of the nose: ENT (RCEM)',
      'A Foley catheter (12 or 14, 5 to 10 ml of water) only as a temporary measure in the ED, when specialist help will be much delayed or the patient is deteriorating (RCEM)',
      'A posterior pack goes with a front pack, and the patient is admitted with monitoring (WikEM)'],
      gap:esrc(E_R1 + '; ' + E_W1) + ' The department\'s ENT route for a packed nose, and the packs it stocks, are under Still to confirm.', next:'nbadm'},
    nbadm:{check:'any', q:'With a front pack in: any reason to admit?', hint:'RCEM\'s groups who are admitted for observation. WikEM admits for packs on both sides, anaemia with symptoms, or anaemia needing a transfusion.',
      items:['A traumatic cause','Haemodynamic compromise or shock','A nasal pack within the last 7 days','Taking an anticoagulant','Haemoglobin measured under 10 g/dl','Uncontrolled hypertension','A significant other illness','Social reasons: lives alone, more than 20 minutes from the hospital, or no telephone or transport','The patient prefers to stay','Packs on both sides, or anaemia with symptoms or needing transfusion (WikEM)'],
      opts:[['One or more','nbin'],['None','nbout']]},
    nbin:{end:'admit', title:'Admit with the pack in: refer to ENT', items:['RCEM: these groups are admitted for further observation with the pack in','Refer by the department\'s ENT route','Bloods if not done: FBC, U&Es, clotting, group and save, depending on the blood loss (RCEM)'],
      gap:esrc(E_R1 + '; ' + E_W1) + ' The department\'s route is under Still to confirm.'},
    nbout:{end:'discharge', title:'Home with a front pack', items:[
      'A patient with a front pack can generally go home with the pack in (LITFL)',
      'Removal: leave it 24 to 48 hours, with ENT follow-up to take it out (RCEM); 2 to 3 days, by ENT or the ED (WikEM)',
      'Antibiotics: no evidence that routine cover is needed for a front pack in for under 48 hours (RCEM); WikEM allows them, with no robust evidence; LITFL (2011) favoured them',
      'WikEM: stop NSAIDs for 3 to 4 days; warfarin with a therapeutic INR may continue (RCEM admits anyone on an anticoagulant with a pack)',
      'Give the nosebleed advice (the Advice tab)'],
      gap:esrc(E_L1 + '; ' + E_R1 + '; ' + E_W1) + ' Antibiotic choice: NAG by name only. Who removes the pack, and when, is the department\'s call (Still to confirm).'},
    nbdc:{end:'discharge', title:'Stopped with first aid or cautery: home', items:[
      'No follow-up is needed when the bleeding stopped by itself, with first aid or with cautery alone (RCEM)',
      'Give the nosebleed advice (the Advice tab)',
      'A one-sided nosebleed that keeps coming back, or blood-stained discharge: see the NPC referral step'],
      links:[['#nosebleed-ent--npc','When to refer for NPC']], gap:esrc(E_R1)},

    nfb:{step:'Something in the nose', items:[
      'Suspect it with a one-sided purulent or bloody discharge, or one-sided sinusitis, even with no story of putting anything in (WikEM)',
      'A button battery or several magnets: remove it at once in the ED; involve ENT if needed (WikEM)',
      'Positive pressure first: the "mother\'s kiss" (blow into the mouth with the other nostril closed) works in 60% (RCEM); a bag-valve-mask can be used, with care over the pressure (RCEM, WikEM)',
      'Or a small Foley (size 6 to 8) passed beyond the object, its balloon filled with 1 to 3 ml of air, and drawn gently out (RCEM)',
      'Cannot remove it: refer to ENT at once, not the next day: it may be breathed in during sleep (RCEM)'],
      gap:esrc(E_W2 + '; ' + E_R2) + ' A child: the department\'s PAT triage decides where they are seen. A throat foreign body goes to the ORL MO on call (memo (5)24).',
      links:[['#children--pat','Children: where to triage'],['#referral-rules--fbt','Throat foreign body: ORL on call']], next:'nfbend'},
    nfbend:{end:'neutral', title:'Nose foreign body: out, or to ENT now', items:['Cannot remove it, or a complication: refer to ENT (WikEM); a nose object that will not come out goes to ENT at once, not the next day (RCEM)'],
      links:[['#children--pat','Children: where to triage'],['#referral-rules--fbt','Throat foreign body: ORL on call']], gap:esrc(E_W2 + '; ' + E_R2)},

    efb:{step:'Something in the ear', items:[
      'A live insect: kill it first, with alcohol, 2% lignocaine or mineral oil (RCEM)',
      'Irrigation: water or saline at body temperature, through a 14 or 16 gauge cannula on a 20 to 60 ml syringe (WikEM); aim at the side of the canal, never straight at the drum (RCEM)',
      'Do not irrigate with a suspected perforation, grommets, a button battery or vegetable matter, which swells (WikEM)',
      'A perforation: you may still remove the object, but put no liquid in, and refer to ENT (RCEM)',
      'ENT should help with button batteries, sharp objects, tightly wedged objects and anything that has not come out after a few attempts (RCEM)',
      'A button battery in the ear needs emergency removal (WikEM)'],
      gap:esrc(E_W3 + '; ' + E_R2), next:'efbend'},
    efbend:{end:'neutral', title:'Ear foreign body: out, or to ENT', items:['Not out: an ENT review the next day is appropriate, unless there is severe pain, a suspected perforation or a button battery (RCEM); a button battery needs emergency removal (WikEM)'], gap:esrc(E_R2 + '; ' + E_W3)},

    ear:{q:'Is the tragus or the canal tender?', hint:'RCEM: in otitis externa the tragus and canal are very tender, the canal swollen, perhaps filled with debris; in acute otitis media the tragus is not tender and the drum may be red and bulging or hidden by pus.',
      opts:[['Yes: otitis externa','oe'],['No: think of acute otitis media','aom']]},
    oe:{step:'Otitis externa', items:[
      'Rapid onset, generally within 48 hours, within the past 3 weeks; the pinna or tragus tender; the canal swollen and red, perhaps with debris (WikEM)',
      'Clean the canal. If it is fully blocked, put in a wick: it should fall out by itself in 3 days as the swelling settles (WikEM)',
      'Drops lying on the side, held there 3 to 5 minutes; at least 4 drops are typically needed to fill the canal; keep the ear dry and avoid water sports for 7 to 10 days (WikEM)',
      'Consider systemic antibiotics when immunosuppressed, including poorly controlled diabetes (WikEM): NAG A10 by name',
      'Refer acutely: spreading cellulitis or perichondritis (RCEM)'],
      links:[[NAG_A10[0], NAG_A10[1], 1]], gap:esrc(E_W4 + '; ' + E_R3), next:'moe'},
    moe:{check:'any', q:'Any sign of malignant (necrotising) otitis externa?', hint:'WikEM: diabetes and immunosuppression are the main risks; Pseudomonas causes over 90%. RCEM: beware the elderly diabetic whose ear pain stops them sleeping; untreated, it can cause cranial nerve palsies and death.',
      items:['Diabetic or immunosuppressed, with pain out of proportion for routine otitis externa','Otitis externa not settling after 2 to 3 weeks of drops','Granulation tissue on the floor of the canal (often seen)','A facial nerve palsy (often the first nerve involved)'],
      opts:[['One or more','moeref'],['None','oedc']]},
    moeref:{end:'refer', title:'Possible malignant otitis externa: ENT', items:['Contact ENT, who decide where it is managed; early infection may be treated as an outpatient (WikEM)'], links:[[NAG_A10[0], NAG_A10[1], 1]], gap:esrc(E_W5 + '; ' + E_R3)},
    oedc:{end:'discharge', title:'Otitis externa: home', items:['Drops as above, the ear kept dry, no water sports for 7 to 10 days (WikEM)'], links:[[NAG_A10[0], NAG_A10[1], 1]], gap:esrc(E_W4) + ' Antibiotic choice: NAG A10 by name only.'},
    aom:{step:'Acute otitis media', items:[
      'Needs acute onset (under 48 hours), fluid behind the drum and signs of inflammation: redness alone is not enough (WikEM, on a page written for children)',
      'Usually lasts 3 days, as RCEM quotes NICE; a drum that bursts heals within 6 weeks in the vast majority once the infection settles (RCEM)',
      'Mastoiditis: the skin behind the ear red and tender, the ear pushed forward: admission under ENT (RCEM)',
      'Antibiotics: NAG A10 and C2 by name'],
      links:[[NAG_C2[0], NAG_C2[1], 1], [NAG_A10[0], NAG_A10[1], 1]], gap:esrc(E_W6 + '; ' + E_R3) + ' Adult otitis media is thin in these sources.', next:'aomend'},
    aomend:{end:'neutral', title:'Acute otitis media: mastoiditis goes to ENT', items:['Mastoiditis signs: admit under ENT (RCEM)','Antibiotics: the NAG pathway, by name'], links:[[NAG_C2[0], NAG_C2[1], 1]], gap:esrc(E_R3)},

    npc:{end:'refer', title:'Refer to ORL to rule out nasopharyngeal carcinoma', items:[
      'The Malaysian NPC CPG (Recommendation 1, p3): patients presenting with any of the following symptoms should be referred to Otorhinolaryngologists as soon as possible to rule out nasopharyngeal carcinoma:',
      'painless neck lump (unilateral/bilateral)', 'blood-stained nasal discharge/saliva', 'unilateral ear block or hearing loss', 'headache', 'facial numbness', 'diplopia',
      'Nasal symptoms, epistaxis among them, are present in 26 to 49.8% of patients; 75 to 85% of Malaysian patients present at an advanced stage (CPG, p3)',
      'LITFL: a one-sided nosebleed that keeps coming back should prompt a search for a tumour'],
      gap:'Source: CPG Management of Nasopharyngeal Carcinoma (MaHTAS, 2016), p3; the six symptoms quoted as printed, with acknowledgement to MaHTAS, as its copyright allows. ' + esrc(E_L1)}
  },
  advice:[
    'Avoid blowing your nose for one week.',
    'If you sneeze, keep your mouth open.',
    'Avoid hot and spicy food and drinks, and alcohol, for two days.',
    'Avoid heavy lifting, straining and bending over.',
    'Avoid vigorous activity for one week.',
    'Do not pick your nose.',
    'If it bleeds again: sit up, lean forward and pinch the soft part of your nose firmly for at least 10 minutes.'],
  notes:[
    {l:'Where the sources differ', notes:[
      {h:'Nosebleed', src:'The sources on each step, read ' + EDU_READ, items:[
        'Share from the front of the nose: about 90% (WikEM), about 95% (RCEM)',
        'How long to pinch: at least 10 minutes (RCEM), 15 to 20 (LITFL), at least 20 (WikEM)',
        'Silver nitrate on the spot: a few seconds at most (WikEM), 4 to 5 seconds (LITFL), up to 30 seconds (RCEM)',
        'Tranexamic acid: 500 mg topically (WikEM, RCEM) against no benefit in NoPAC (St Emlyn\'s)',
        'Soaking a Rapid Rhino: water, not saline (WikEM), or saline or distilled water (RCEM)',
        'When the pack comes out: 24 to 48 hours (RCEM), 2 to 3 days (WikEM)',
        'Antibiotics with a front pack: not routinely under 48 hours (RCEM), possible on weak evidence (WikEM), given (LITFL, 2011)',
        'Who is admitted with a pack: RCEM\'s nine groups against WikEM\'s three',
        'Watching before home: 15 minutes after cautery and at least 30 after a pack (RCEM), 1 hour (WikEM)']},
      {h:'Ear and nose foreign bodies', src:'RCEMLearning; WikEM', items:['A nose object that will not come out goes to ENT at once; an ear object can wait for ENT the next day, unless severe pain, a suspected perforation or a battery (RCEM)']}]},
    {l:'Sources', notes:[
      {h:'Educational sources (admitted 26 Nov 2026, facts only)', src:'Read ' + EDU_READ, items:[
        'WikEM: Epistaxis; Nasal foreign body; Ear foreign body; Otitis externa; Malignant otitis externa; Acute otitis media. wikem.org, CC BY-SA 4.0',
        'RCEMLearning (Royal College of Emergency Medicine): Acute Epistaxis; Foreign Bodies in Ears and Noses; Ear Disease. rcemlearning.co.uk, CC BY-NC 3.0',
        'LITFL: A Case of Epistaxis (2011). litfl.com, CC BY-NC-SA 4.0',
        'St Emlyn\'s: JC: the NoPAC trial (2021). stemlynsblog.org, CC BY-NC-SA 4.0',
        'Each in the guide\'s own words, credited to its source; none endorses this guide']},
      {h:'Malaysian sources', src:'MaHTAS; MOH', items:[
        'CPG Management of Nasopharyngeal Carcinoma (MaHTAS, 2016): Recommendation 1 quoted as printed, with acknowledgement to MaHTAS',
        'National Antimicrobial Guideline 2024 (MOH): sections A10 and C2 by name and link only; no regimen is copied']}]}],
  notesFoot:'Facts from open educational sources in the guide\'s own words, each credited on its step (rule 8, admitted 26 Nov 2026). Where they differ, each is given with its source; the department\'s choice is under Still to confirm. Not a department protocol, and none of it replaces the ebook.'
};
/* Steps show their items, not a gap line or links: each step's source goes in as its last line (as data13.js does) */
const eduSteps = id => Object.values(P[id].nodes).forEach(n => { if (n.step){ if (n.gap){ n.items = [...(n.items || []), n.gap]; delete n.gap; } delete n.links; } });
eduSteps('nosebleed-ent');

/* ---------- Wounds, local anaesthetic and tetanus (sources/edu/wounds.md, checked in wounds-check.md) ---------- */
const W_LAC = 'WikEM, Laceration repair', W_LA = 'WikEM, Local anesthetics', W_LAST = 'WikEM, Local anesthetic systemic toxicity', W_DB = 'WikEM, Nerve block: digital block', W_FB = 'WikEM, Soft tissue foreign body', W_LIP = 'WikEM, Lip laceration', W_TET = 'WikEM, Tetanus prophylaxis';
const R_WND = 'RCEMLearning, Surgical Management of Acute Wounds in the ED (reviewed 21 Nov 2024, modified 13 Mar 2026)', R_HAND = 'RCEMLearning, Soft Tissue Injuries of the Hand', R_LA = 'RCEMLearning, Local Anaesthetics module';
const W_MOH = 'MOH Standard Practice Guidelines for Assistant Medical Officers in Emergency Medicine and Trauma Services (Nov 2023), Appendix 15, p100', L_LAST = 'LITFL, Local Anaesthetic Toxicity', L_TIG = 'LITFL, Tetanus Immunoglobulin (2019)', L_NB = 'LITFL, Nail bed repair (2025)', MY_ANS = 'Guidelines on Safe Use of Medication in Anaesthesia (College of Anaesthesiologists and Malaysian Society of Anaesthesiologists, 2024)';
P['wounds'] = {
  title:'Wounds, local anaesthetic and tetanus', grp:'cpg', own:true, isnew:true, hero:'wounds',
  src:'WikEM, RCEMLearning and LITFL, in the guide\'s own words; the anaesthesia safety guideline (CoA and MSA, 2024)',
  lead:'A laceration from assessment to closure: what to check and refer, how much local anaesthetic, the digital block, toxicity, tetanus and when the stitches come out. From open educational sources read on 26 Nov 2026; the Malaysian anaesthesia guideline leads on local anaesthetic safety and the MOH antidotes guide on lipid emulsion.',
  kw:'wound wounds laceration lacerations cut luka suture sutures stitch stitches jahit glue tissue adhesive steri-strip staples local anaesthetic anesthetic lidocaine lignocaine bupivacaine maximum dose toxicity last lipid intralipid digital block ring block finger nerve block tetanus att tig sero-tet tetanus toxoid immunoglobulin suture removal stitches out tendon foreign body glass',
  start:'menu',
  nodes:{
    menu:{q:'What do you need?', hint:'Bites: the guide\'s own case says do not suture the wound (TAG Warrior Course, CBD 2, case 5), and animal bites have their own entry.', opts:[
      ['Assess the wound','wa'],
      ['Local anaesthetic: how much','la'],
      ['Finger: the digital block','db'],
      ['Close it: which method, and when','wc'],
      ['Tetanus','tet'],
      ['Local anaesthetic toxicity (LAST)','last'],
      ['Stitches out: when','sr']]},

    wa:{step:'Assess the wound', items:[
      'Check movement and sensation before any local anaesthetic (WikEM)',
      'Explore to the base: a foreign body, a tendon injury, a fracture (WikEM)',
      'Possible glass or metal: an X-ray or ultrasound (WikEM); in the hand, an X-ray when a fracture, a penetrating injury or a foreign body is suspected (RCEM)',
      'Hand, sensation: two-point discrimination over 6 mm static or 4 mm moving is abnormal; under 80% accuracy, or testing you cannot interpret, suggests a digital nerve injury may be present (RCEM)',
      'Hand, tendons: loss of the resting cascade may mean a flexor tendon injury; test against resistance, since up to 90% of a tendon can be cut and still move without resistance (RCEM)',
      'Do not extend a hand wound in the ED (WikEM)',
      'MOH (the AMO emergency guideline, Appendix 15): look for a tendon or artery cut; describe the size, shape, area and any tissue or skin loss; control bleeding by direct pressure, and do not use a tourniquet',
      esrc(W_LAC + '; ' + R_HAND + '; ' + W_FB) + ' Malaysia: ' + W_MOH + ', cited only.'], next:'wref'},
    wref:{check:'any', q:'Any reason to refer before closing?', hint:'From WikEM and RCEM. The guide\'s referral rules send a wound over a joint or tendon to the orthopaedic MO on call.',
      items:['Signs of a nerve, vessel or tendon injury','A facial wound crossing a cosmetic boundary, or tissue loss','A contaminated or dirty wound (RCEM: to the speciality, for closure in theatre)','An open wound over a knuckle (MCP joint): a human bite until proven otherwise','An open wound of the wrist or forearm (zones VII and VIII)','A high-pressure injection injury (2000 to 12000 psi guns): immediate hand surgeons','Sensory loss with a hand laceration: nerve division until explored','A foreign body you cannot retrieve (WikEM: follow-up within 1 to 2 days)'],
      opts:[['One or more','wrefer'],['None','wc']]},
    wrefer:{end:'refer', title:'Refer before closing', items:['A tendon, nerve or vessel injury, an open hand or wrist wound, or a high-pressure injection: the hand or orthopaedic team, by the department\'s route','A wound over a joint or tendon: the orthopaedic MO on call (the guide\'s referral rules)','A face wound across a cosmetic boundary or with tissue loss: the department\'s route'],
      links:[['#referral-rules--ortho','Orthopaedic referral (department)']], gap:esrc(W_LAC + '; ' + R_WND + '; ' + R_HAND + '; ' + W_FB) + ' Which team takes a hand tendon or a face wound at HKL is under Still to confirm.'},

    la:{end:'neutral', title:'Local anaesthetic: the maximum dose', items:[
      'Lignocaine plain: 5 mg/kg, max 300 mg (WikEM); 3 mg/kg (RCEM wounds page); 4.5 mg/kg (RCEM local anaesthetics module)',
      'Lignocaine with adrenaline: 7 mg/kg (all three); max 500 mg (WikEM)',
      'Bupivacaine: 2.5 mg/kg, max 175 mg plain, and 3 mg/kg, max 225 mg with adrenaline (WikEM); 2 mg/kg either way (RCEM module)',
      '1% lignocaine (lidocaine) is 10 mg/ml; 2% is 20 mg/ml; 0.5% bupivacaine is 5 mg/ml (WikEM)',
      'Malaysia: the maximum dose is based on milligrams per kilogram of lean body weight; consider dose reductions of 10 to 20% at the extremes of age, in decompensated heart failure, in parturients, in uraemia or acidosis, and in liver disease with heart or kidney disease (CoA and MSA 2024, pp 43, 58, 97 to 98)',
      'No more than 0.5 mg of adrenaline injected at any one time; toxicity can happen even within the maximum dose (RCEM module)',
      'Buffering eases the sting: 1 ml of bicarbonate to 9 ml of lignocaine (WikEM)',
      'The department\'s dosing and dilution guide lists lignocaine 2% (100 mg in 5 ml, 20 mg/ml) and, for local or regional anaesthesia, refers to the LA/RA guide (printed p115)'],
      links:[['#calc-lamax','Local anaesthetic: maximum dose calculator'],['#dilution','ED dosing and dilution guide: lignocaine']],
      gap:esrc(W_LA + '; ' + R_WND + '; ' + R_LA + '; ' + W_LAC) + ' The Malaysian guideline (' + MY_ANS + ') gives the principle, not a figure in mg/kg; the sources\' figures differ, so the department\'s choice is under Still to confirm.'},

    db:{step:'The digital (finger) block', fig:'spin-finger', items:[
      'Each finger has four nerves: two on the back at 10 and 2 o\'clock, two on the palm side at 4 and 8 o\'clock; the palm-side pair lie nearer the midline (WikEM)',
      'A 27 to 30 gauge needle on a 5 to 10 ml syringe (WikEM)',
      'Go in at the base of the finger near the knuckle (MCP joint), to one side of the midline; advance around the bone toward the palm side (WikEM)',
      'Inject about 1 ml for the palm-side nerve, then about 1 ml more as you withdraw for the back nerve; repeat on the other side; stop if the skin tents (WikEM)',
      'Not through infected skin, or where the landmarks are distorted (WikEM)',
      'Adrenaline in a finger: WikEM says studies show it is safe, on poor evidence; RCEM says avoid it in fingers, toes, ears, nose and penis; LITFL uses 1 to 2 ml of 1% lignocaine without adrenaline per side. The department\'s choice is under Still to confirm',
      esrc(W_DB + '; ' + R_WND + '; ' + L_NB)], next:'dbend'},
    dbend:{end:'neutral', title:'The other way in: the transthecal block', items:['WikEM\'s alternative for fingers 2 to 5, the transthecal block (its steps on WikEM\'s page): about 1.5 to 3 ml','Not with a flexor tendon injury or an infection there (WikEM)'], links:[['#calc-lamax','Maximum dose calculator']], gap:esrc(W_DB)},

    wc:{step:'Clean and close', items:[
      'Debridement matters most; no povidone-iodine or chlorhexidine inside the wound (WikEM)',
      'Irrigate under pressure, for example through an 18 gauge; tap water is as effective as sterile water or saline (WikEM)',
      'Timing: WikEM lists a body wound over 12 hours, or a face or scalp wound over 24 hours, as reasons not to close; RCEM: simple wounds closed within 12 to 24 hours heal by primary intention, and a contaminated wound can be infected within 6 hours',
      'Too old to close: irrigate, explore and pack, and look again in 3 days; it may be sutured then if clean (WikEM)',
      'Tissue glue: low tension and well apposed; three layers, letting the first dry for 30 seconds; not on bites, contaminated or puncture wounds, mucosa, or moist areas such as the groin and axilla; no antibiotic ointment over it (WikEM)',
      'Infection risk: sutures more than staples, more than strips (RCEM); favour absorbable sutures on the face (WikEM); MOH lists suture, staples, wound closure clips and tissue adhesive (Appendix 15)',
      'Lip: the first stitch lines up the vermilion border (6-0, WikEM); an isolated laceration inside the mouth needs closing only if over 1 cm (WikEM)',
      esrc(W_LAC + '; ' + R_WND + '; ' + W_LIP)], next:'wab'},
    wab:{check:'any', q:'Antibiotics: any of these?', hint:'RCEM: routine antibiotic prophylaxis for simple wounds has no scientific basis. WikEM lists when to consider it. The MOH AMO emergency guideline lists IV antibiotics to prevent infection (Appendix 15); where they differ is under Still to confirm. The choice of drug is the NAG\'s (A14, skin and soft tissue; A15, trauma), by name only.',
      items:['Debris or faeces in the wound, or a puncture wound','A bite','Much tissue destroyed, or a neglected wound','Immune deficiency (diabetes, HIV, long-term steroids)','Peripheral arterial disease or lymphoedema','A retained foreign body (organic matter, or with diabetes or immunocompromise: WikEM)','A plantar puncture through athletic shoes (WikEM: Pseudomonas cover)'],
      opts:[['One or more: consider antibiotics','wdcab'],['None','wdc']]},
    wdcab:{end:'discharge', title:'Closed: home, antibiotics considered', items:['Choose by the NAG (sections A14 and A15)','Review a higher-risk wound in 24 to 48 hours (RCEM); WikEM: check at 48 to 72 hours only if high risk; there is no point checking before 48 hours','Give the wound advice (the Advice tab)'],
      links:[['https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a14-skin-soft-tissue-infections','NAG 2024, A14: skin and soft tissue infections'],['https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a15-trauma-related-infections','NAG 2024, A15: trauma-related infections']],
      gap:esrc(W_LAC + '; ' + R_WND) + ' Antibiotics: NAG by name only. Tetanus: decide in every injured patient.'},
    wdc:{end:'discharge', title:'Closed: home', items:['No routine antibiotics for a simple wound (RCEM)','Keep the dressing moist, not wet; splint a wound over a flexor surface or under tension (WikEM)','Written advice; the patient knows the signs of infection (RCEM)','Stitches out by site: see "Stitches out"','Tetanus: decide in every injured patient'],
      links:[['#wounds--tet','Tetanus'],['#wounds--sr','Stitches out: when']], gap:esrc(R_WND + '; ' + W_LAC)},

    tet:{end:'neutral', title:'Tetanus: decide for every injured patient', items:[
      'RCEM: a decision on tetanus prophylaxis must be made for every patient with an injury',
      'Adequately primed, last dose within 10 years: none needed, for any wound (RCEM)',
      'Adequately primed, last dose over 10 years: a clean wound needs none; a tetanus-prone wound, an immediate reinforcing dose; a high-risk wound, the dose plus one dose of human tetanus immunoglobulin at another site (RCEM)',
      'Not adequately primed, or uncertain: a clean wound, a reinforcing dose; a tetanus-prone or high-risk wound, the dose plus immunoglobulin (RCEM); then complete the course: WikEM gives further doses at 1 month and 1 year',
      'Tetanus-prone (UK, in RCEM\'s and LITFL\'s references): puncture injuries in a contaminated setting, wounds with a foreign body, compound fractures, wounds or burns with systemic sepsis, certain animal bites and scratches; surgery delayed more than 6 hours (LITFL)',
      'High risk: heavy contamination with material likely to hold tetanus spores, and/or extensive devitalised tissue (LITFL)',
      'The department\'s dosing and dilution guide (3rd edition, January 2026): tetanus toxoid vaccine (ATT), IM 0.5 ml once into the deltoid, for immunisation against tetanus in cases of injury; kept in the ED fridge (printed p214)',
      'The same guide: tetanus immunoglobulin (Sero-Tet, 250 IU/ml), IM or infiltrated around the wound, 500 units (2 vials) once, at a different site and syringe from ATT; its printed indication is tetanus treatment; not kept in the ED: collect it from the A&E pharmacy with a prescription signed by the ID or EP, the EP with the ID\'s verbal consent (printed p213)',
      'Immunoglobulin in the educational sources: 250 units with fewer than 3 doses or none known (WikEM); 250 IU, or 500 IU if more than 24 hours have passed, with heavy contamination or after burns (LITFL)',
      'WikEM gives the US rule instead: fewer than 3 doses or unknown, vaccine for a clean wound and vaccine with immunoglobulin for a dirty one; 3 or more, vaccine if over 10 years (clean) or over 5 years (dirty)'],
      links:[['#calc-tetanus','Tetanus: the decision tool'],['#dilution','ED dosing and dilution guide: Sero-Tet and ATT']],
      gap:esrc(R_WND + '; ' + L_TIG + '; ' + W_TET + '; ' + W_LAC) + ' The department\'s dosing and dilution guide, printed pp 213 to 214, gives the ATT and Sero-Tet doses. The MOH AMO emergency guideline (Appendix 15) lists tetanus status and tetanus for prophylaxis, with no schedule; no other current Malaysian wound schedule was found, so which wounds get them, and the Sero-Tet dose for prevention, are under Still to confirm.'},

    last:{step:'Local anaesthetic systemic toxicity', items:[
      'Usually 1 to 5 minutes after the injection, but from a few seconds to as long as 60 minutes (RCEM)',
      'Brain first (perioral numbness, tinnitus, agitation, then fits), then the heart (WikEM); the Malaysian guideline: the nervous system is the commonest (68% to 77%), and about 20% present with the heart alone (CoA and MSA 2024, pp 122 to 123)',
      'Stop the injection and call for help; small doses of a benzodiazepine for fits (RCEM, WikEM; WikEM warns propofol may worsen heart toxicity)',
      'Changes to the arrest drugs: no vasopressin, calcium channel blocker or beta-blocker; amiodarone for ventricular arrhythmias (WikEM)',
      'Lipid emulsion 20%: the MOH Antidotes Quick Guide (2022) is on the guide\'s Antidotes page; the other sources\' doses differ from it and from each other (total about 12 ml/kg in WikEM, RCEM and the Malaysian guideline; 10 ml/kg in the MOH guide; 8 ml/kg in LITFL)',
      'Monitoring: minor symptoms, at least an hour (RCEM); the Malaysian guideline advises at least 4 to 6 hours after significant heart toxicity, and says at least 2 hours may be prudent after nervous system signs alone',
      esrc(R_WND + '; ' + W_LAST + '; ' + W_LA + '; ' + R_LA + '; ' + L_LAST) + ' Malaysia: ' + MY_ANS + '; lipid emulsion 20% must be immediately accessible wherever local anaesthetic is given (p95).'], next:'lastend'},
    lastend:{end:'admit', title:'Toxicity: resuscitate, lipid, uptriage', items:['Move the patient to resuscitation by the department\'s rules','Lipid emulsion by the MOH Antidotes Quick Guide'], links:[['#antidotes','Antidotes: lipid emulsion (MOH, 2022)']], gap:esrc(R_LA + '; ' + W_LAST)},

    sr:{end:'neutral', title:'Stitches out: when (days)', items:[
      'Face: 5 (WikEM); 4 to 5 (RCEM)',
      'Ear, eyelid, eyebrow, nose: 5 to 7 (WikEM)',
      'Lip: absorbable, none to remove; non-absorbable, 3 to 5 (WikEM)',
      'Scalp: 7 (WikEM); 10 to 14 (RCEM)',
      'Chest and abdomen, foot and sole: 12 to 14 (WikEM)',
      'Back, limbs, hand: 7 to 10 (WikEM); upper body and hand 7 to 10, lower body 10 to 14 (RCEM)',
      'Over a joint: extensor side 10 to 14, flexor side 7 to 10 (WikEM); 14 to 21, splinted (RCEM)'],
      gap:esrc(W_LAC + '; ' + R_WND) + ' Where the Klinik Kesihatan takes the stitches out is the department\'s route (referral rules).'}
  },
  advice:[
    'Keep the dressing moist rather than wet.',
    'Know the signs of infection, and come back if they appear.',
    'Have the stitches removed on the day you were told, at your clinic.'],
  notes:[
    {l:'Where the sources differ', notes:[
      {h:'Local anaesthetic', src:'Read ' + EDU_READ, items:['Lignocaine plain: 5 mg/kg, max 300 mg (WikEM), 3 mg/kg (RCEM wounds), 4.5 mg/kg (RCEM module)','Bupivacaine: 2.5 or 3 mg/kg (WikEM) against 2 mg/kg (RCEM)','Adrenaline in a finger: safe on poor evidence (WikEM), avoid (RCEM), not used (LITFL)','Lipid emulsion total: about 12 ml/kg (WikEM, RCEM, CoA and MSA), 10 ml/kg (MOH antidotes), 8 ml/kg (LITFL)']},
      {h:'Wounds and tetanus', src:'Read ' + EDU_READ, items:['Stitches out: scalp 7 (WikEM) against 10 to 14 (RCEM); over a joint 7 to 14 against 14 to 21','When to close: WikEM splits body (12 hours) and face or scalp (24 hours); RCEM gives 12 to 24 hours','Tetanus: the UK rule (RCEM: primed, 10 years, a high-risk tier) against the US rule (WikEM: 3 doses, 5 or 10 years)']}]},
    {l:'Sources', notes:[
      {h:'Educational sources (admitted 26 Nov 2026, facts only)', src:'Read ' + EDU_READ, items:['WikEM: Laceration repair; Local anesthetics; Local anesthetic systemic toxicity; Nerve block: digital block; Soft tissue foreign body; Lip laceration; Tetanus prophylaxis. CC BY-SA 4.0','RCEMLearning: Surgical Management of Acute Wounds in the ED; Soft Tissue Injuries of the Hand; Local Anaesthetics module. CC BY-NC 3.0','LITFL: Tetanus Immunoglobulin; Nail bed repair. CC BY-NC-SA 4.0','Each in the guide\'s own words, credited; none endorses this guide']},
      {h:'Malaysian sources', src:'CoA and MSA; MOH', items:[W_MOH + ': the wound checklist, cited only', 'Guidelines on Safe Use of Medication in Anaesthesia (College of Anaesthesiologists and Malaysian Society of Anaesthesiologists, 2024), with acknowledgement to CoA and MSA, as its copyright allows','MOH Antidotes Quick Guide (2022), on the guide\'s Antidotes page','National Antimicrobial Guideline 2024: sections by name and link only']}]}],
  notesFoot:'Facts from open educational sources in the guide\'s own words, each credited on its step (rule 8, admitted 26 Nov 2026). Where they differ, each is given with its source; the department\'s choice is under Still to confirm. Not a department protocol.'
};
eduSteps('wounds');

/* ---------- Dizziness, headache and back pain: red flags (sources/edu/redflags.md, checked in redflags-check.md) ---------- */
const F_WV = 'WikEM, Vertigo', F_WB = 'WikEM, Benign paroxysmal positional vertigo', F_RV = 'RCEMLearning, Vertigo (reviewed 26 Feb 2026)', F_LV = 'LITFL, Vertigo: the big 3', F_LDH = 'LITFL, Dix-Hallpike manoeuvre', F_SDZ = 'St Emlyn\'s, Can I safely discharge dizzy patients from the ED? (2018)';
const F_WHA = 'WikEM, Headache', F_WMEN = 'WikEM, Meningitis', F_WGCA = 'WikEM, Giant cell arteritis', F_WCVT = 'WikEM, Cerebral venous thrombosis', F_WPP = 'WikEM, Postpartum headache', F_WCO = 'WikEM, Carbon monoxide toxicity', F_RHA = 'RCEMLearning, Primary Headache (2022)', F_LRF = 'LITFL, Headache red flags', F_LTC = 'LITFL, Thunderclap headache', F_SHA = 'St Emlyn\'s, Headache in the Emergency Department (2014)';
const F_WLBP = 'WikEM, Lower back pain', F_WCES = 'WikEM, Cauda equina syndrome', F_WSEA = 'WikEM, Spinal epidural abscess', F_RLBP = 'RCEMLearning, Lower Back Pain (reviewed 17 Jan 2025)', F_SCES = 'St Emlyn\'s, Re-evaluating risk factors for cauda equina (on Angus et al., EMJ 2021)', F_SBP = 'St Emlyn\'s, back pain lesson plan (awaiting clinician sign-off; relays NICE)';
const MY_STROKE = 'CPG Management of Ischaemic Stroke, 3rd edition (Malaysian Society of Neurosciences and the Academy of Medicine of Malaysia, 2020)';
P['red-flags'] = {
  title:'Dizziness, headache and back pain: red flags', grp:'cpg', own:true, isnew:true, hero:'redflag',
  src:'WikEM, RCEMLearning, LITFL and St Emlyn\'s, in the guide\'s own words; the ischaemic stroke CPG (2020)',
  lead:'Three common Green Zone complaints and the few patients among them who must not go home: central vertigo (with HINTS, Dix-Hallpike and Epley), the dangerous headache, and cauda equina, infection or an aneurysm behind back pain. From open educational sources read on 26 Nov 2026; the Malaysian stroke CPG leads on stroke.',
  kw:'dizzy dizziness vertigo pening giddy giddiness hints head impulse nystagmus skew dix-hallpike hallpike epley bppv vestibular neuritis posterior circulation cerebellar stroke headache sakit kepala thunderclap sah subarachnoid meningitis temporal arteritis giant cell carbon monoxide venous sinus postpartum back pain sakit belakang low back pain cauda equina saddle anaesthesia retention bladder scan epidural abscess aaa aneurysm red flags',
  start:'menu',
  nodes:{
    menu:{q:'Which complaint?', hint:'The department\'s policy keeps severe dizziness and new focal neurological symptoms out of the Green Zone: uptriage when you find them.', opts:[['Dizziness or vertigo','dz1'],['Headache','ha1'],['Low back pain','bp1']]},

    dz1:{q:'Which pattern is it?', hint:'WikEM sorts dizziness by its timing and trigger. ' + esrc(F_WV), opts:[
      ['Brought on by moving the head, brief spells, well in between (triggered)','dzbppv'],
      ['Spells that come on by themselves; well when seen (spontaneous episodic)','dzepi'],
      ['Continuous since it began, present at rest (acute vestibular syndrome)','dzavs']]},
    dzepi:{end:'neutral', title:'Spontaneous spells: think of the dangerous causes', items:['WikEM: the dangerous causes of spontaneous episodic dizziness are TIA, an arrhythmia and pulmonary embolism','Bedside checks: blood glucose, ECG and postural blood pressure, a full neurological examination and the eardrums (RCEM, WikEM)'],
      links:[['#stroke-tia','Stroke and TIA'],['#syncope','Syncope'],['#ed-scores--abcd2','ABCD2 score']], gap:esrc(F_WV + '; ' + F_RV)},
    dzavs:{check:'any', q:'Continuous vertigo: any central red flag?', hint:'RCEM: vertigo from a stroke nearly always comes with other signs of brainstem ischaemia, such as diplopia, dysarthria, numbness or weakness. The Malaysian stroke CPG: isolated vertigo can be a stroke "chameleon", more likely a stroke with known cardiovascular disease or risk factors (' + MY_STROKE + ', p43).',
      items:['Struggles to stand or walk','Severe head or neck pain','Cranial nerve or cerebellar signs: diplopia, dysarthria, numbness, weakness, ataxia','Older, with cardiovascular disease or vascular risk factors','New hearing loss (a central sign in LITFL\'s HINTS+)'],
      opts:[['One or more','dzcen'],['None','dzhints']]},
    dzhints:{step:'HINTS: only for continuous vertigo with nystagmus', items:[
      'Who: acute persistent vertigo with nystagmus and a normal neurological examination (WikEM); vertigo still continuous at the time of examination (RCEM); hours or days of vertigo at rest, not BPPV (LITFL); only with nystagmus (St Emlyn\'s)',
      'Head impulse: an abnormal test (a corrective saccade) suggests a peripheral cause; a normal test in ongoing vertigo should worry you, as it suggests a central cause (RCEM). WikEM: failure on one side only is reassuring; a central cause can show a normal reflex or failure on both sides',
      'Nystagmus: none, or horizontal beating one way only, is reassuring; nystagmus that changes direction, or is vertical or torsional, is more likely central (WikEM, RCEM)',
      'Test of skew: a vertical correction on alternate cover is a central sign, highly specific but not very sensitive (WikEM, St Emlyn\'s)',
      'HINTS+ (LITFL): new hearing loss as a fourth part; any central part makes the result central. Record "HINTS central" or "HINTS peripheral", never "negative" (WikEM)',
      'In its first study (101 patients) HINTS was 100% sensitive and 96% specific for a central lesion, done by neuro-ophthalmologists; emergency doctors need training before relying on it (WikEM, RCEM)',
      esrc(F_WV + '; ' + F_RV + '; ' + F_LV + '; ' + F_SDZ)], next:'dzhq'},
    dzhq:{q:'What did HINTS show?', opts:[['Any central part, or you are not sure','dzcen'],['Every part peripheral','dzwalk']]},
    dzwalk:{q:'Can the patient walk unaided?', hint:'An inferior cerebellar stroke often causes severe unsteadiness and falling (WikEM); severe ataxia or being unable to walk would be a good reason to admit (St Emlyn\'s).', opts:[['Walks safely','dzperi'],['Cannot walk, or badly ataxic','dzcen']]},
    dzcen:{end:'admit', title:'Possible posterior circulation stroke: uptriage and image', items:[
      'Uptriage: the Green Zone does not keep severe dizziness or new focal neurological symptoms (department policy)',
      'The Malaysian stroke CPG: CT brain is mandatory and the preferred emergency imaging in suspected stroke (Key Recommendation 2, p67); dizziness or vertigo is a posterior circulation feature (Table 3.1)',
      'Early imaging can be falsely negative: plain CT found 26% in WikEM\'s table, MRI 68.4% at 24 hours; RCEM: specialist assessment and/or neuroimaging should also be considered, especially with headache, stroke risk factors or symptoms over 48 hours',
      'Within the stroke window: Code Stroke'],
      links:[['#stroke-tia','Stroke and TIA'],['#gz-rules--glance','The Green Zone at a glance']], gap:'Source: ' + MY_STROKE + ', pp 43, 67; reproduced with acknowledgement to its owners. ' + esrc(F_WV + '; ' + F_RV)},
    dzperi:{end:'discharge', title:'Peripheral and walking: home', items:[
      'Most peripheral vertigo can go home (WikEM); LITFL: HINTS+ with nothing central is vestibular neuritis',
      'Vestibular exercises, for peripheral vertigo that is not mild, short-lived or settling by itself: fix on an object, move the head slowly, building up, for several minutes 2 to 3 times a day (RCEM)'],
      gap:esrc(F_WV + '; ' + F_LV + '; ' + F_RV)},
    dzbppv:{step:'Positional vertigo: Dix-Hallpike, then Epley', items:[
      'BPPV: brought on by movement and lasting under 2 minutes at a time (LITFL)',
      'Not with nystagmus at rest (WikEM); not with severe neck disease, recent neck injury or vertebrobasilar insufficiency (LITFL)',
      'Dix-Hallpike: turn the head 45° toward the side being tested, then lie the patient back quickly with the head about 20° below the horizontal (LITFL); watch for 30 seconds (RCEM) or 45 seconds (WikEM)',
      'Positive: upbeat-torsional nystagmus with the vertigo, toward the lower ear, fading within a minute and tiring with repeats (LITFL, WikEM)',
      'Warning: symptoms at once, or nystagmus beating away from the lower ear, call for a central cause to be considered (WikEM)',
      'A negative test does not exclude BPPV: sensitivity 48 to 88% (LITFL); 10 to 20% are positive only on a repeat (LITFL)',
      'Epley (WikEM): from the positive position, hold about 1 to 2 minutes; turn the head 90° the other way, so the unaffected ear faces the floor; keep each new position 1 minute; WikEM sets out the remaining steps',
      esrc(F_LV + '; ' + F_LDH + '; ' + F_WB + '; ' + F_RV)], next:'dzbend'},
    dzbend:{end:'discharge', title:'BPPV: home', items:['A positive Dix-Hallpike with no warning signs, treated with the Epley manoeuvre (WikEM, LITFL)'], gap:esrc(F_WB + '; ' + F_LDH)},

    ha1:{check:'any', q:'Headache: any red flag?', hint:'RCEM: any red flag mandates further investigation. St Emlyn\'s: with any red flag, discuss a scan with a senior. The triage course\'s SNOOP4 cases are in CBD 2.',
      items:['New headache over 50 (WikEM; RCEM)','Thunderclap: at its worst within a minute (LITFL; within 60 seconds, RCEM)','Worsening in frequency and severity','Fever, a stiff neck or reduced consciousness','Focal neurological signs, papilloedema or visual loss','After trauma','Immunocompromise or cancer','Worse with straining, bending or on waking; started on exertion or with sex','On an anticoagulant or antiplatelet','Jaw claudication or a tender temporal artery','A seizure or a faint','Diastolic BP over 120 (WikEM)'],
      opts:[['One or more','ha2'],['None','hadc']]},
    ha2:{q:'Which red flag leads?', opts:[
      ['Thunderclap or sudden onset','hasah'],
      ['Fever, a stiff neck, a rash or altered consciousness','hamen'],
      ['Over 50 with a new headache, jaw claudication or visual loss','hagca'],
      ['Pregnant or post-partum','happ'],
      ['Anything else: focal signs, papilloedema, raised pressure, cancer, immunocompromise, anticoagulants','hact']]},
    hasah:{end:'refer', title:'Thunderclap: CT, and think beyond SAH', items:[
      'Use the Ottawa SAH rule for an alert patient with a headache peaking within an hour',
      'WikEM: a negative non-contrast CT done within 6 hours of onset can rule out SAH for a thunderclap headache; if further testing is needed after a negative CT, CTA or LP',
      'LITFL: CT is diagnostic in the first 6 hours, less sensitive after; an LP must be done if the patient presents more than 12 hours after onset',
      'Other serious causes: cervical artery dissection (one in five presents as thunderclap), stroke, a hypertensive crisis; LITFL advises vessel imaging in most thunderclap headaches',
      'An LP is a senior decision (St Emlyn\'s)'],
      links:[['#ed-scores--sah','Ottawa SAH rule'],['#ct-brain','CT brain (department teaching)']], gap:esrc(F_WHA + '; ' + F_LTC + '; ' + F_SHA)},
    hamen:{end:'admit', title:'Possible meningitis: do not wait', items:[
      'The classic triad (headache, fever, stiff neck) is present in only about 44%, but at least 2 of 4 (with altered mental state) in 95% (WikEM)',
      'Do not delay antibiotics for a CT, an LP or blood results (WikEM, St Emlyn\'s)',
      'CT before LP only with immunocompromise or CNS disease, a new seizure, papilloedema, a focal deficit or a GCS under 10 to 12 (WikEM)',
      'Antibiotics: the NAG, by name'],
      links:[['https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a2-central-nervous-infections','NAG 2024, A2: central nervous system infections'],['#infection-alerts','Infection alerts']], gap:esrc(F_WMEN + '; ' + F_SHA)},
    hagca:{end:'refer', title:'Over 50: giant cell arteritis', items:[
      'Headache in 85%, loss of vision in one eye in 50%; jaw claudication and a beaded temporal artery raise the likelihood most (WikEM)',
      'The "rule of 50s": at least 50 years old, ESR over 50 mm/hr; over 15% can have a normal ESR (WikEM)',
      'Refer by the department\'s route'],
      gap:esrc(F_WGCA + '; ' + F_LRF) + ' The referral route and who starts steroids are under Still to confirm.'},
    happ:{end:'refer', title:'Pregnant or post-partum: the serious causes', items:[
      '40% of women have a headache after delivery, most in the first week; the serious causes include pre-eclampsia, venous sinus thrombosis, PRES, stroke and a post-dural puncture headache (WikEM)',
      'Venous sinus thrombosis: risk through pregnancy and up to 6 weeks after; headache in 74 to 92%, worse with coughing or bending; MRI and MRV are the tests (WikEM)',
      'Refer by the department\'s route (O&G or medical)'],
      gap:esrc(F_WPP + '; ' + F_WCVT)},
    hact:{end:'refer', title:'Red flag: discuss a scan with a senior', items:[
      'WikEM: consider a non-contrast head CT for a thunderclap or worst-ever headache, one unlike the usual, meningeal signs, intractable vomiting, or a new headache over 50, with cancer, HIV or neurological deficits (other than migraine aura)',
      'Raised pressure: straining, bending or jumping sometimes point to it; papilloedema (LITFL)',
      'Carbon monoxide: headache is its commonest symptom (85%); check a carboxyhaemoglobin, as pulse oximetry is unreliable (WikEM)',
      'Immunocompromise: think of fungal meningitis; WikEM adds India ink and cryptococcal antigen to the LP if an AIDS-related infection is suspected'],
      gap:esrc(F_WHA + '; ' + F_LRF + '; ' + F_WCO + '; ' + F_SHA)},
    hadc:{end:'discharge', title:'No red flag: home', items:['A benign cause that has improved, a normal neurological examination, no red flags, able to take oral treatment, and reliable follow-up (WikEM)'],
      links:[['#cbd-2','Triage course cases: headache']], gap:esrc(F_WHA + '; ' + F_RHA)},

    bp1:{check:'any', q:'Back pain: any red flag?', hint:'The sources\' age flags differ: under 18 or over 50 (WikEM), under 20 or over 55 (RCEM).',
      items:['Age under 18 or over 50 (WikEM); onset under 20 or over 55 (RCEM)','Bladder or bowel change, saddle numbness, sexual dysfunction, or pain or weakness in both legs','Fever, IV drug use, immunocompromise, or recent spinal surgery or an epidural','Cancer in the past, weight loss, night or unrelenting pain, thoracic pain','Pain unchanged by movement or position; generally unwell','Trauma, long-term steroids or an anticoagulant','Pain for more than 6 weeks (WikEM)','Widespread neurological symptoms, or a spinal deformity (RCEM)'],
      opts:[['One or more','bp2'],['None','bpdc']]},
    bp2:{q:'Which red flag leads?', opts:[
      ['Bladder, bowel, saddle numbness or both legs: cauda equina','bpces'],
      ['Fever, IV drug use, immunocompromise or a spinal procedure: infection','bpinf'],
      ['Older, collapse, or pain not changed by movement: an aneurysm','bpaaa'],
      ['Cancer, steroids, trauma or older age: fracture or cancer','bpca']]},
    bpces:{end:'admit', title:'Possible cauda equina: urgent MRI, never home', items:[
      'The most sensitive features: low back pain, perineal and sacral sensory loss and bladder disturbance; bladder trouble can occur with normal anal tone (RCEM)',
      'Painless retention predicts it best, but is a late sign (WikEM)',
      'In Angus et al. (996 patients), 11.1% had compression on MRI; loss of perineal sensation was the most sensitive single sign (50%), and the absence of perineal signs is no reason not to scan (St Emlyn\'s)',
      'Bladder scan: WikEM says a post-void residual over 200 ml supports it (no reference given); St Emlyn\'s finds scanning of little diagnostic value, and one measurement cannot exclude it',
      'Urgent MRI, with no delay for other work-up (RCEM, WikEM); surgery within 24 hours of the bladder symptoms (RCEM), or 24 to 48 hours of onset (WikEM)',
      'Do not discharge suspected cauda equina (WikEM)'],
      gap:esrc(F_RLBP + '; ' + F_WLBP + '; ' + F_WCES + '; ' + F_SCES) + ' The department\'s route to MRI and the spinal team is under Still to confirm.'},
    bpinf:{end:'admit', title:'Possible spinal infection', items:[
      'Fever with local back pain is an epidural abscess until proven otherwise; fever is present in only about 50%, and 98% have at least one risk factor (WikEM)',
      'Back pain in an IV drug user is a spinal infection until proven otherwise (WikEM); consider TB (RCEM)',
      'ESR: about 100% sensitive with these risk factors (WikEM); MRI with gadolinium is the test'],
      gap:esrc(F_WSEA + '; ' + F_WLBP + '; ' + F_RLBP)},
    bpaaa:{end:'admit', title:'Possible aortic aneurysm', items:[
      'Back pain that does not behave like muscle pain (not affected by movement or position) may be an aneurysm, sepsis, cancer or an abdominal cause (RCEM)',
      'Ultrasound to rule out an aneurysm (WikEM); St Emlyn\'s, relaying NICE: a bedside aortic scan at once, and a vascular discussion if it is positive, unavailable or not diagnostic',
      'With collapse or shock: resuscitation, not the Green Zone'],
      links:[['#abdo-handbook','Abdominal pain handbook']], gap:esrc(F_RLBP + '; ' + F_WLBP + '; ' + F_SBP)},
    bpca:{end:'refer', title:'Possible fracture or cancer', items:[
      'Post-test probability of fracture or cancer (Downie, BMJ 2013, in WikEM): over 65, 9%; long-term steroids, 33%; a history of cancer, 33%; several red flags, 90%',
      'With a history of cancer, RCEM lists thoracic pain, progressive pain, pain on straining, local tenderness and night pain; MRI rather than plain X-rays'],
      gap:esrc(F_WLBP + '; ' + F_RLBP)},
    bpdc:{end:'discharge', title:'No red flag: simple back pain', items:[
      'No routine imaging for back pain under 6 weeks with no red flags and no severe progressive deficit (WikEM)',
      'Stay active, with pain as the limit (WikEM, RCEM)',
      'Come back at once with new bladder or bowel trouble, saddle numbness or worsening weakness (St Emlyn\'s)'],
      gap:esrc(F_WLBP + '; ' + F_RLBP + '; ' + F_SBP)}
  },
  advice:[
    'Back pain: keep moving and carry on your daily activities as the pain allows.',
    'Back pain: come back at once with new bladder or bowel trouble, numbness around your bottom or genitals, or weakness that gets worse.'],
  notes:[
    {l:'Where the sources differ', notes:[
      {h:'Dizziness', src:'Read ' + EDU_READ, items:['Who HINTS is for: nystagmus and a normal neurological examination (WikEM), continuous vertigo (RCEM), hours or days at rest (LITFL), nystagmus required (St Emlyn\'s)','The head impulse turn: 20 to 40° (RCEM) or 10 to 15° (St Emlyn\'s)','Dix-Hallpike: watch 30 seconds (RCEM) or 45 (WikEM); sensitivity 48 to 88% (LITFL), 50 to 85% (WikEM), 55 to 88% (RCEM)']},
      {h:'Headache and back pain', src:'Read ' + EDU_READ, items:['SAH: a CT within 6 hours can rule it out for thunderclap (WikEM); an LP after 12 hours (LITFL)','Back pain age flags: under 18 or over 50 (WikEM); under 20 or over 55 (RCEM)','Bladder scan: over 200 ml supports cauda equina (WikEM, no reference) against little diagnostic value (St Emlyn\'s)','Surgery: within 24 hours of bladder symptoms (RCEM) or 24 to 48 hours of onset (WikEM)']}]},
    {l:'Sources', notes:[
      {h:'Educational sources (admitted 26 Nov 2026, facts only)', src:'Read ' + EDU_READ, items:['WikEM: Vertigo; HINTS Exam; BPPV; Headache; Meningitis; Giant cell arteritis; Cerebral venous thrombosis; Postpartum headache; Carbon monoxide toxicity; Lower back pain; Cauda equina syndrome; Spinal epidural abscess. CC BY-SA 4.0','RCEMLearning: Vertigo; Primary Headache; Lower Back Pain. CC BY-NC 3.0','LITFL: Vertigo, the big 3; Dix-Hallpike manoeuvre; Headache red flags; Thunderclap headache. CC BY-NC-SA 4.0','St Emlyn\'s: dizziness journal club (2018); headache (2014); cauda equina risk factors (2021); back pain lesson plan. CC BY-NC-SA 4.0','Each in the guide\'s own words, credited; none endorses this guide']},
      {h:'Malaysian source', src:'MSN and AMM', items:[MY_STROKE + ': Table 3.1 and section 3.2 (pp 42 to 44), Key Recommendation 2 (p67), BE-FAST (p69); with acknowledgement to its owners, as its copyright allows. No Malaysian guideline was found for headache or back pain.']}]}],
  notesFoot:'Facts from open educational sources in the guide\'s own words, each credited on its step (rule 8, admitted 26 Nov 2026). Where they differ, each is given with its source; the department\'s choice is under Still to confirm. Not a department protocol.'
};
eduSteps('red-flags');

/* ---------- Red eye and eye injury (sources/edu/eye.md, checked in eye-check.md) ---------- */
const Y_CPG = 'CPG Management of Glaucoma, 2nd edition (MaHTAS, 2017)', Y_MOH = 'MOH Standard Practice Guidelines for Assistant Medical Officers in Ophthalmology (2024)';
const Y_WCKC = 'WikEM, Caustic keratoconjunctivitis', Y_WCA = 'WikEM, Corneal abrasion', Y_WOFB = 'WikEM, Ocular foreign body', Y_WGR = 'WikEM, Globe rupture', Y_WHY = 'WikEM, Traumatic hyphema', Y_WUV = 'WikEM, Ultraviolet keratitis', Y_WSCH = 'WikEM, Subconjunctival hemorrhage', Y_WCJ = 'WikEM, Conjunctivitis', Y_WAAC = 'WikEM, Acute angle-closure glaucoma', Y_WEX = 'WikEM, Eye exam';
const Y_RCHEM = 'RCEMLearning, Chemical Eye Injuries in the ED (2025)', Y_RCI = 'RCEMLearning, Corneal Injuries (2022)', Y_ROT = 'RCEMLearning, Ocular Trauma (2024)', Y_RIA = 'RCEMLearning, Initial Assessment of the Eye (reviewed 2025)', Y_R241 = 'RCEMLearning, 24 Hour Ophthalmic Emergencies, part 1 (2025)', Y_R242 = 'RCEMLearning, 24 Hour Ophthalmic Emergencies, part 2 (2025)';
const Y_LCHEM = 'LITFL, The Eye In Chemical (2018)', Y_LUV = 'LITFL, Blinded By The Light', Y_LFB = 'LITFL, Something in my eye, Doc', Y_LCJ = 'LITFL, A Gritty Sticky Red Eye', Y_LRE = 'LITFL, The Red Eye Challenge', Y_LAAC = 'LITFL, Blind, Aching and Vomiting', Y_LHY = 'LITFL, Half an 8 ball', Y_SE = 'St Emlyn\'s, The dangers of FOAM (2012)';
const NAG_A7 = ['https://sites.google.com/moh.gov.my/nag/contents/section-a-adult/a7-ocular-infections', 'NAG 2024, A7: ocular infections'];
P['eye-red'] = {
  title:'Red eye and eye injury', grp:'cpg', own:true, isnew:true, hero:'eent',
  src:'WikEM, RCEMLearning, LITFL and St Emlyn\'s, in the guide\'s own words; the glaucoma CPG (MaHTAS 2017)',
  lead:'Chemicals in the eye, a scratch or a foreign body, the red eye that must go to the eye team the same day, angle closure, an open globe, hyphaema, arc eye and conjunctivitis. From open educational sources read on 26 Nov 2026; the Malaysian glaucoma CPG leads on angle closure.',
  kw:'eye mata red eye mata merah chemical alkali acid cement lime irrigation ph litmus fluorescein corneal abrasion scratch foreign body rust ring subtarsal evert seidel hyphaema hyphema open globe penetrating rupture shield angle closure glaucoma aac iop timolol acetazolamide pilocarpine mannitol arc eye welding uv keratitis conjunctivitis subconjunctival haemorrhage visual acuity snellen contact lens',
  start:'menu',
  nodes:{
    menu:{q:'What is it?', hint:'Check the visual acuity in every patient (RCEM). How to record it is the last choice below.', opts:[
      ['A chemical in the eye','chem'],
      ['Something in the eye, or a scratch','fb'],
      ['A blow or a sharp injury to the eye','inj'],
      ['A red eye, no injury','red'],
      ['Welding or a sun lamp: arc eye','uv'],
      ['Recording the visual acuity','va']]},

    chem:{step:'Chemical: irrigate first', fig:'spin-eye', items:[
      'MOH (the AMO ophthalmology guideline, 2024): irrigation is recommended for every chemical injury and advisable after any foreign body in the eye; normal saline 0.9% through a drip set after topical anaesthetic drops, from the inner to the outer corner, the patient looking up, down, right and left; evert the upper and lower lids and lift particles with a cotton bud (conjunctiva and lid only); irrigate with 2 pints; recheck the pH 10 minutes later and irrigate again while it is abnormal (pp 42 to 45)',
      'Irrigation comes before the history, the examination or any test (RCEM); start with water even before examining, unless a perforation is suspected (LITFL)',
      'Fluid: 0.9% saline or Hartmann\'s (RCEM); WikEM: saline, Hartmann\'s or buffered saline preferred in hospital, but tap water is acceptable',
      'Anaesthetic drops (proxymetacaine or tetracaine), but never delay irrigation for them (RCEM)',
      'How much: start with 1 litre, for at least 10 to 15 minutes whatever the first pH (RCEM); a minimum of 1 litre through an IV giving set (RCEM); at least 30 minutes, usually about 3 litres (LITFL); WikEM: no consensus on volume or time',
      'Evert the lids early and sweep out hidden debris; after 3 litres, look again for retained debris (RCEM)',
      'Never try to neutralise an acid with an alkali or the reverse (WikEM)',
      'Suspected globe rupture or perforation: delay irrigation until the eye team has assessed it (RCEM). CS spray: do not irrigate; it makes it worse (RCEM)',
      esrc(Y_RCHEM + '; ' + Y_LCHEM + '; ' + Y_WCKC + '; ' + Y_R242 + '; ' + Y_RCI) + ' Malaysia: ' + Y_MOH + ', in the guide\'s own words.'], next:'chemph'},
    chemph:{step:'Check the pH, and keep going until neutral', items:[
      'MOH: litmus paper on the conjunctiva in the fornix, with the lower lid pulled down and the patient looking up; normal is pH 7 (the eye\'s normal pH is 7.4), alkaline 8 to 14, acid 1 to 6 (pp 36 to 37)',
      'Indicator paper in the lower (inferior) fornix, 5 to 10 minutes after irrigating (RCEM); LITFL pauses for 1 minute to sample the fluid there',
      'Target: pH 7.0 to 7.2 (RCEM); 7.0 to 7.3 (RCEM, corneal injuries); 7 (RCEM, part 2; MOH); about 7.5 after each litre (LITFL)',
      'Abnormal: keep irrigating and check again after every litre (RCEM)',
      'Once neutral, recheck every 15 minutes for at least an hour (RCEM); the same page\'s summary says every 5 to 10 minutes',
      'Compare with the other eye, or your own, if in doubt (LITFL)',
      'A painless white eye is not reassuring: it may mean limbal ischaemia (RCEM)',
      esrc(Y_RCHEM + '; ' + Y_LCHEM + '; ' + Y_RCI + '; ' + Y_R242) + ' Malaysia: ' + Y_MOH + '.'], next:'chemend'},
    chemend:{end:'refer', title:'Chemical injury: the eye team', items:[
      'Alkali burns are worse than acid, as they penetrate deeper (RCEM); cement contains lime, so it is an alkali (LITFL)',
      'An alkali injury needs immediate washout and discussion with the on-call eye team (St Emlyn\'s)',
      'Record limbal ischaemia in clock hours (RCEM)',
      'Fluorescein uptake: referral to an ophthalmologist is recommended, although local policy should be followed (RCEM)',
      'Admit with corneal haze, opacity or limbal ischaemia; only an epithelial injury goes home, with eye review in 24 hours (WikEM); RCEM: a grade I injury, discussed with the eye team, may go home with chloramphenicol and follow-up in 1 to 2 days'],
      links:[['#pharmacy','ED pharmacy list: eye drops']], gap:esrc(Y_RCHEM + '; ' + Y_LCHEM + '; ' + Y_SE + '; ' + Y_RCI + '; ' + Y_WCKC) + ' The department\'s eye referral route is under Still to confirm.'},

    fb:{step:'Look properly', fig:'spin-eye', items:[
      'Every corneal injury: visual acuity, the pupils, lid eversion and the slit lamp (RCEM)',
      'Fluorescein: MOH wets the strip with the anaesthetic drop, touches it to the conjunctiva with the patient looking up, asks them to blink, then examines at the slit lamp under cobalt blue light (pp 39 to 40); an abrasion shows green; take contact lenses out first, or they stain (RCEM)',
      'Foreign body not seen: evert the upper lid, unless a penetrating injury is suspected; a cotton bud lifts a subtarsal foreign body (RCEM)',
      'Look for more than one (LITFL); multiple vertical abrasions suggest a foreign body under the upper lid (WikEM)',
      'A Seidel sign (fluorescein streaming) means a penetrating injury; hyphaema suggests one too, and needs the eye team the same day (WikEM)',
      'High-velocity injury (hammering, power tools): consider an intraocular foreign body (RCEM); CT orbit is the first choice, with 1.5 to 2 mm cuts (RCEM); plain films detect only 40% (WikEM)',
      esrc(Y_RCI + '; ' + Y_LFB + '; ' + Y_WCA + '; ' + Y_WOFB + '; ' + Y_ROT) + ' Malaysia: ' + Y_MOH + '.'], next:'fbq'},
    fbq:{q:'What did you find?', opts:[['A possible penetrating injury: Seidel, hyphaema, high velocity','inj'],['A foreign body stuck in the cornea','fbemb'],['An abrasion, or a subtarsal foreign body now out','abr']]},
    fbemb:{end:'neutral', title:'Embedded corneal foreign body', items:[
      'A needle may be used to lift it out, at the slit lamp or with loupes (RCEM): 25 to 30 gauge, tangential (WikEM); 18 to 30 gauge, tip pointing away from the globe (LITFL)',
      'Repeat the Seidel test afterwards (WikEM)',
      'A rust ring over the visual axis: the eye team (WikEM); review in 24 hours (WikEM), though a rust ring may be easier to remove 2 to 3 days later (RCEM)',
      'Not fully removed: review within 24 hours; refer a defect lasting more than 3 days (LITFL)'],
      gap:esrc(Y_RCI + '; ' + Y_WOFB + '; ' + Y_LFB)},
    abr:{end:'discharge', title:'Corneal abrasion: home', items:[
      'Anaesthetic drops are for examining only, not for treatment; never send them home (RCEM)',
      'Eye pads do not speed healing and may worsen the pain (RCEM)',
      'Chloramphenicol 1% ointment: no strong evidence, but one cohort study found less ulceration, especially when started within 18 hours (RCEM)',
      'Contact lens wearer: an anti-pseudomonal drop, and no lenses until healed (RCEM); a white spot or opacity: the eye team the same day (WikEM)',
      'No routine tetanus prophylaxis for a corneal abrasion (RCEM)',
      'Review with fluorescein after 24 hours (RCEM; WikEM: 48 hours); refer if not healed by 72 hours, or with more pain or worse vision (RCEM)'],
      links:[[NAG_A7[0], NAG_A7[1]],['#pharmacy','ED pharmacy list: eye drops']], gap:esrc(Y_RCI + '; ' + Y_WCA) + ' Antibiotic choice: NAG A7 by name only.'},

    inj:{end:'refer', title:'Possible open globe or hyphaema: protect and refer', items:[
      'Signs: a peaked or irregular (tear-drop) pupil, iris transillumination, a deep lid laceration, subconjunctival haemorrhage, hyphaema (RCEM, WikEM)',
      'A rigid shield, never a patch; no unnecessary handling, not even the pressure; no Seidel test if an open globe is suspected (RCEM, WikEM)',
      'Nil by mouth; analgesia and an antiemetic (avoid straining); prophylactic antibiotics; check tetanus (RCEM, WikEM)',
      'Consider CT orbit if there is concern for an intraocular foreign body or the diagnosis is unclear (WikEM: sensitivity about 60%)',
      'Hyphaema: graded by how much of the chamber it fills (I up to a third, II a third to a half, III over a half, IV total); sit the patient upright, shield, not patch (WikEM, LITFL); a rebleed at 3 to 5 days complicates about 30% (WikEM)',
      'Hyphaema disposition is the eye team\'s decision; on anticoagulants or antiplatelet drugs, admit (WikEM)'],
      gap:esrc(Y_ROT + '; ' + Y_R242 + '; ' + Y_WGR + '; ' + Y_WHY + '; ' + Y_LHY)},

    red:{check:'any', q:'Red eye: any red flag?', hint:'RCEM: check the visual acuity in every patient, and refer urgently when serious disease such as acute angle closure, endophthalmitis, uveitis or microbial keratitis is suspected. LITFL: these usually suggest a cause inside the eye.',
      items:['Pain, especially severe pain not relieved by anaesthetic drops','Reduced vision','Photophobia','A change in the cornea, or a pupil that reacts poorly','Recent eye surgery','A contact lens wearer (a very low threshold to refer)','Nausea or vomiting with haloes around lights'],
      opts:[['One or more','redref'],['None','redq']]},
    redref:{q:'Does it look like angle closure?', hint:'The CPG\'s picture: eye pain, nausea or vomiting, blurred vision with haloes; a red eye, a hazy cornea, a mid-dilated pupil that does not react, a shallow chamber.', opts:[['Yes, it may be','aac'],['No: another serious cause','redrefer']]},
    redrefer:{end:'refer', title:'Red flag: the eye team, urgently', items:['Refer urgently by the department\'s eye route (RCEM)','A contact lens wearer with a white spot or opacity: the same day (WikEM)'], gap:esrc(Y_R241 + '; ' + Y_LRE + '; ' + Y_WCA) + ' The route is under Still to confirm.'},
    aac:{end:'refer', title:'Acute angle closure: immediate referral', items:[
      'The Malaysian CPG: acute angle closure is diagnosed when IOP >21 mmHg with occludable angle, with any two of the following symptoms: ocular and periocular pain; nausea and/or vomiting; history of blurring of vision and haloes; and any three of the following signs: conjunctival injection; corneal epithelial oedema; mid-dilated unreactive pupil; shallow anterior chamber (p8)',
      'It needs immediate referral (p30); the aims are to lower the IOP urgently and relieve the acute symptoms (p14)',
      'The CPG gives no ED drug or dose. If the eye team asks you to start: WikEM gives timolol 0.5%, 1 drop, repeated in 1 hour if needed; acetazolamide 500 mg IV or by mouth; brimonidine 0.2% or apraclonidine 1%, 1 drop; pilocarpine 1 to 2%, 1 drop every 15 minutes for 2 to 4 doses (likely ineffective until the pressure is below 40 to 50 mmHg; never over 4%)',
      'LITFL: head up at least 30°; if the pressure and vision have not improved in 1 hour, consider mannitol (for example 1 to 2 g/kg IV over 45 minutes); steroid drops only by the eye team',
      'The CPG: carbonic anhydrase inhibitors are contraindicated with a sulphonamide allergy, kidney stones or failure, acidosis and hypokalaemia (p16)',
      'Of these drugs, only mannitol is in the department\'s dosing and dilution guide; timolol, acetazolamide, pilocarpine, brimonidine and apraclonidine are not on the ED pharmacy list'],
      gap:'Source: ' + Y_CPG + ', pp 8, 14, 16, 30; the diagnostic criteria quoted as printed, with acknowledgement to MaHTAS, as its copyright allows. ' + esrc(Y_WAAC + '; ' + Y_LAAC) + ' Which of these drugs the department stocks is under Still to confirm.'},
    redq:{q:'Which is it?', opts:[['Gritty, sticky or itchy, vision normal: conjunctivitis','conj'],['A bright red patch on the white, painless: subconjunctival haemorrhage','sch']]},
    conj:{end:'discharge', title:'Conjunctivitis: home', items:[
      'No single sign separates viral from bacterial (WikEM); itch and atopy point to allergy (LITFL); a sore throat, a node in front of the ear or a contact with red eyes point to a virus (WikEM)',
      'Expect normal vision, pressure and pupils (LITFL)',
      'Hyperacute (under 24 hours) with heavy pus and STI symptoms: think gonococcal (LITFL)',
      'Viral conjunctivitis is highly contagious for up to 14 days or while the eyes are red and weeping (LITFL)',
      'Contact lens wearer: a fluoroquinolone drop, no lenses until well (WikEM)'],
      links:[[NAG_A7[0], NAG_A7[1]],['#pharmacy','ED pharmacy list: eye drops']], gap:esrc(Y_WCJ + '; ' + Y_LCJ) + ' Antibiotic choice: NAG A7 by name only.'},
    sch:{end:'discharge', title:'Subconjunctival haemorrhage: reassure', items:[
      'Painless, vision normal, fresh blood with clear borders on the white (WikEM)',
      'It will generally settle in 10 to 14 days (WikEM)',
      'If large and after trauma, keep suspecting a hidden globe rupture; one that covers the whole white (360°) is a sign of rupture (WikEM)',
      'Bilateral and recurrent: check for a bleeding tendency and uncontrolled blood pressure (WikEM)'],
      gap:esrc(Y_WSCH + '; ' + Y_WGR)},

    uv:{end:'discharge', title:'Arc eye (UV keratitis): home', items:[
      'Symptoms typically start 6 to 12 hours after the exposure (LITFL); fluorescein shows fine dots of uptake (WikEM)',
      'Pain relief is the mainstay; a single dose of cyclopentolate dilates the pupil for up to 24 hours (RCEM)',
      'Never home with anaesthetic drops: healing is delayed (RCEM)',
      'It heals over 48 to 72 hours; review in 1 to 2 days (WikEM); come back if not clearly better at 24 hours (LITFL)'],
      gap:esrc(Y_LUV + '; ' + Y_WUV + '; ' + Y_RCI)},

    va:{end:'neutral', title:'Recording the visual acuity', items:[
      'A Snellen chart at a set distance, usually 6 m, one eye covered at a time (RCEM)',
      'Write it as the distance over the smallest line read: 6/12 means the size 12 line read at 6 m (RCEM)',
      'Cannot read the top line: test at 3 m and record 3/x; then counting fingers, hand movements, light perception (RCEM)',
      'Better with a pinhole: the loss is refractive (RCEM); test with the patient\'s glasses on (WikEM)'],
      gap:esrc(Y_RIA + '; ' + Y_WEX)}
  },
  advice:[
    'Do not wear contact lenses until the eye has healed.',
    'Come back for your eye check when you were told, usually the next day.',
    'Come back sooner if your vision gets worse or the pain increases.'],
  notes:[
    {l:'Where the sources differ', notes:[
      {h:'Chemical injury', src:'Read ' + EDU_READ, items:['pH target: 7 (MOH; RCEM part 2), 7.0 to 7.2 (RCEM), 7.0 to 7.3 (RCEM corneal injuries), about 7.5 (LITFL)','Volume: 2 pints (MOH), no consensus (WikEM), at least 1 litre (RCEM), about 3 litres over at least 30 minutes (LITFL)','When to read the pH: 10 minutes after (MOH), 5 to 10 minutes after (RCEM), or a 1-minute pause (LITFL)','Recheck: every 15 minutes for at least an hour, or every 5 to 10 minutes (both on one RCEM page)']},
      {h:'Abrasion, foreign body, angle closure', src:'Read ' + EDU_READ, items:['Abrasion review: 24 hours (RCEM) or 48 (WikEM)','Rust ring: review in 24 hours (WikEM), or it may be easier to remove at 2 to 3 days (RCEM); LITFL reviews within 24 hours a foreign body not fully removed','Needle: 25 to 30 gauge (WikEM) or 18 to 30 (LITFL)','Plain films for an intraocular foreign body: generally not obtained (WikEM), may help (RCEM)','Normal pressure: 10 to 21 mmHg (WikEM) or 10 to 20 (LITFL)','Angle closure: WikEM counts IOP over 21 as one of three signs; the CPG makes it a precondition, with two symptoms and three signs','Pilocarpine and timolol: WikEM\'s and LITFL\'s strengths and doses differ']}]},
    {l:'Sources', notes:[
      {h:'Educational sources (admitted 26 Nov 2026, facts only)', src:'Read ' + EDU_READ, items:['WikEM: Caustic keratoconjunctivitis; Corneal abrasion; Ocular foreign body; Globe rupture; Traumatic hyphema; Ultraviolet keratitis; Subconjunctival hemorrhage; Conjunctivitis; Acute angle-closure glaucoma; Eye exam. CC BY-SA 4.0','RCEMLearning: Chemical Eye Injuries in the ED; Corneal Injuries; Ocular Trauma; Initial Assessment of the Eye; 24 Hour Ophthalmic Emergencies, parts 1 and 2. CC BY-NC 3.0','LITFL: The Eye In Chemical; Blinded By The Light; Something in my eye, Doc; A Gritty Sticky Red Eye; The Red Eye Challenge; Blind, Aching and Vomiting; Half an 8 ball. CC BY-NC-SA 4.0','St Emlyn\'s: The dangers of FOAM (2012). CC BY-NC-SA 4.0','Each in the guide\'s own words, credited; none endorses this guide']},
      {h:'Malaysian sources', src:'MaHTAS; MOH', items:[Y_CPG + ': pp 3, 7, 8, 14, 16, 30, 51; the diagnostic criteria quoted as printed, with acknowledgement to MaHTAS','MOH Standard Practice Guidelines for Assistant Medical Officers in Ophthalmology (2024): pH testing, fluorescein staining and eye irrigation (pp 36 to 45), in the guide\'s own words with acknowledgement, as its terms allow for individual use','National Antimicrobial Guideline 2024: A7 by name and link only']}]}],
  notesFoot:'Facts from open educational sources in the guide\'s own words, each credited on its step (rule 8, admitted 26 Nov 2026). Where they differ, each is given with its source; the department\'s choice is under Still to confirm. Not a department protocol.'
};
eduSteps('eye-red');
/* Each page read for these entries, linked from its Sources tab (the research files in sources/edu/ list them) */
Object.entries({"nosebleed-ent":[["WikEM, Epistaxis","https://wikem.org/wiki/Epistaxis"],["WikEM, Nasal foreign body","https://wikem.org/wiki/Nasal_foreign_body"],["WikEM, Ear foreign body","https://wikem.org/wiki/Ear_foreign_body"],["WikEM, Otitis externa","https://wikem.org/wiki/Otitis_externa"],["WikEM, Malignant otitis externa","https://wikem.org/wiki/Malignant_otitis_externa"],["WikEM, Acute otitis media","https://wikem.org/wiki/Acute_otitis_media"],["RCEMLearning, Acute Epistaxis","https://www.rcemlearning.co.uk/reference/epistaxis/"],["RCEMLearning, Foreign Bodies in Ears and Noses","https://www.rcemlearning.co.uk/foamed/foreign-bodies-in-ears-and-noses-practical-tips-for-ed-management/"],["RCEMLearning, Ear Disease","https://www.rcemlearning.co.uk/foamed/ear-disease/"],["LITFL, A Case of Epistaxis","https://litfl.com/a-case-of-epistaxis/"],["St Emlyn's, the NoPAC trial","https://www.stemlynsblog.org/jc-the-nopac-trial-txa-does-not-work-for-epistaxis-st-emlyns/"]],"wounds":[["WikEM, Laceration repair","https://wikem.org/wiki/Laceration_repair"],["WikEM, Local anesthetics","https://wikem.org/wiki/Local_anesthetics"],["WikEM, Local anesthetic systemic toxicity","https://wikem.org/wiki/Local_anesthetic_systemic_toxicity"],["WikEM, Nerve block: digital block","https://wikem.org/wiki/Nerve_block:_digital_block"],["WikEM, Soft tissue foreign body","https://wikem.org/wiki/Soft_tissue_foreign_body"],["WikEM, Lip laceration","https://wikem.org/wiki/Lip_laceration"],["WikEM, Tetanus prophylaxis","https://wikem.org/wiki/Tetanus_prophylaxis"],["RCEMLearning, Surgical Management of Acute Wounds in the ED","https://www.rcemlearning.co.uk/reference/surgical-management-of-acute-wounds-in-the-ed/"],["RCEMLearning, Soft Tissue Injuries of the Hand","https://www.rcemlearning.co.uk/reference/soft-tissue-injuries-of-the-hand/"],["RCEMLearning, Local Anaesthetics module","https://www.rcemlearning.co.uk/modules/local-anaesthetics/"],["LITFL, Tetanus Immunoglobulin","https://litfl.com/tetanus-immunoglobulin/"],["LITFL, Local Anaesthetic Toxicity","https://litfl.com/local-anaesthetic-toxicity-ccc/"],["LITFL, Nail bed repair","https://litfl.com/procedure-nail-bed-repair-instructions/"],["The department's dosing and dilution guide: lignocaine, Sero-Tet, ATT","#dilution"]],"eye-red":[["WikEM, Caustic keratoconjunctivitis","https://wikem.org/wiki/Caustic_keratoconjunctivitis"],["WikEM, Corneal abrasion","https://wikem.org/wiki/Corneal_abrasion"],["WikEM, Ocular foreign body","https://wikem.org/wiki/Corneal_foreign_body"],["WikEM, Globe rupture","https://wikem.org/wiki/Globe_rupture"],["WikEM, Traumatic hyphema","https://wikem.org/wiki/Hyphema"],["WikEM, Ultraviolet keratitis","https://wikem.org/wiki/Ultraviolet_keratitis"],["WikEM, Subconjunctival hemorrhage","https://wikem.org/wiki/Subconjunctival_hemorrhage"],["WikEM, Conjunctivitis","https://wikem.org/wiki/Conjunctivitis"],["WikEM, Acute angle-closure glaucoma","https://wikem.org/wiki/Acute_angle-closure_glaucoma"],["WikEM, Eye exam","https://wikem.org/wiki/Eye_exam"],["RCEMLearning, Chemical Eye Injuries in the ED","https://www.rcemlearning.co.uk/foamed/chemical-eye-injuries-in-the-ed/"],["RCEMLearning, Corneal Injuries","https://www.rcemlearning.co.uk/reference/corneal-injuries/"],["RCEMLearning, Ocular Trauma","https://www.rcemlearning.co.uk/reference/ocular-trauma/"],["RCEMLearning, Initial Assessment of the Eye","https://www.rcemlearning.co.uk/reference/eye-initial-assessment/"],["RCEMLearning, 24 Hour Ophthalmic Emergencies, part 1","https://www.rcemlearning.co.uk/foamed/24-hour-ophthalmic-emergencies-part-1-acute-red-eye/"],["RCEMLearning, 24 Hour Ophthalmic Emergencies, part 2","https://www.rcemlearning.co.uk/foamed/24-hour-ophthalmic-emergencies-part-2-swollen-lids-and-ocular-trauma/"],["LITFL, The Eye In Chemical","https://litfl.com/the-eye-in-chemical/"],["LITFL, Blinded By The Light","https://litfl.com/blinded-by-the-light/"],["LITFL, Something in my eye, Doc","https://litfl.com/something-in-my-eye-doc/"],["LITFL, A Gritty Sticky Red Eye","https://litfl.com/a-gritty-sticky-red-eye/"],["LITFL, The Red Eye Challenge","https://litfl.com/the-red-eye-challenge/"],["LITFL, Blind, Aching and Vomiting","https://litfl.com/blind-aching-and-vomiting/"],["LITFL, Half an 8 ball","https://litfl.com/half-an-8-ball/"],["St Emlyn's, The dangers of FOAM","https://www.stemlynsblog.org/the-dangers-of-foam-at-st-emlyns/"]],"red-flags":[["WikEM, Vertigo","https://wikem.org/wiki/Vertigo"],["WikEM, HINTS Exam","https://wikem.org/wiki/EBQ:HINTS_Exam"],["WikEM, BPPV","https://wikem.org/wiki/Benign_paroxysmal_positional_vertigo"],["WikEM, Headache","https://wikem.org/wiki/Headache"],["WikEM, Meningitis","https://wikem.org/wiki/Meningitis"],["WikEM, Giant cell arteritis","https://wikem.org/wiki/Giant_cell_arteritis"],["WikEM, Cerebral venous thrombosis","https://wikem.org/wiki/Cerebral_venous_thrombosis"],["WikEM, Postpartum headache","https://wikem.org/wiki/Postpartum_headache"],["WikEM, Carbon monoxide toxicity","https://wikem.org/wiki/Carbon_monoxide_toxicity"],["WikEM, Lower back pain","https://wikem.org/wiki/Lower_back_pain"],["WikEM, Cauda equina syndrome","https://wikem.org/wiki/Cauda_equina_syndrome"],["WikEM, Spinal epidural abscess","https://wikem.org/wiki/Epidural_abscess_(spinal)"],["RCEMLearning, Vertigo","https://www.rcemlearning.co.uk/reference/vertigo/"],["RCEMLearning, Primary Headache","https://www.rcemlearning.co.uk/reference/primary-headache/"],["RCEMLearning, Lower Back Pain","https://www.rcemlearning.co.uk/reference/lower-back-pain/"],["LITFL, Vertigo: the big 3","https://litfl.com/vertigo/"],["LITFL, Dix-Hallpike manoeuvre","https://litfl.com/dix-hallpike-test/"],["LITFL, Headache red flags","https://litfl.com/headache-red-flags/"],["LITFL, Thunderclap headache","https://litfl.com/thunderclap-headache/"],["St Emlyn's, Can I safely discharge dizzy patients?","https://www.stemlynsblog.org/dizziness/"],["St Emlyn's, Headache in the Emergency Department","https://www.stemlynsblog.org/induction-headache/"],["St Emlyn's, Re-evaluating risk factors for cauda equina","https://www.stemlynsblog.org/risk-factors-for-cauda-equina/"],["St Emlyn's, Back pain lesson plan","https://www.stemlynsblog.org/lesson-plan-back-pain-induction/"]]}).forEach(([id, refs]) => { const t = P[id].notes.find(n => n.l === 'Sources'); t.notes[0].refs = refs; });
