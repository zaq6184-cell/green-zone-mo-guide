/* Green Zone MO Guide: the service worker of the public web app on GitHub Pages, so the guide opens on patchy hospital
   Wi-Fi and with no signal at all. build.js writes app/sw.js from this file, filling in the build's version, the page's
   id and every file it handles with its hash (the first 16 hex digits of its SHA-256). The claude.ai artifact never has
   it, and pwa.js registers it only on github.io and localhost.

   Install    The page, the manifest and the small stills (img/, tiles/, the film covers in media/ and the poster
              thumbnails) go into a cache named for this build. Every copy must match the build's hash, so a stale copy
              is never kept, and a file unchanged since an earlier build is copied from the old cache, not downloaded
              again. Only the page is essential: a still that fails now is saved when it is first shown. With Data Saver
              on, only the page and the manifest are fetched ahead.
   Activate   Deletes this guide's caches from older builds (never another site's: github.io pages share one origin) and
              any kept film, sound or poster sheet whose file has changed. Then it tells open pages which page it
              carries, so a page from an older build can offer Reload (pwa.js).
   The page   Network first, revalidated past the browser's own cache, so a phone online gets the newest guide. The
              saved copy when the network fails or has not delivered the page within 4 seconds: a hung Wi-Fi connection
              would otherwise leave the MO waiting a minute or more. The page is read in full before it is shown, so a
              connection that drops halfway falls back to the saved copy instead of a broken page.
   Stills     From the cache, else from the network (and saved, if the copy matches the build).
   Films, sounds and the full poster sheets
              Never fetched ahead. A film or sound is kept once it has played and the browser has loaded all of it, from
              that same download, so nothing is fetched twice; a poster sheet once it has been opened. Each must match
              the build. Kept files survive updates while they are unchanged, and films and sounds are served in byte
              ranges, so they seek offline.
   Fonts      The Google Fonts stylesheet and font files are kept as the page loads them, so the guide keeps its type. */
'use strict';
const VERSION = '9e1df8bc3f8f', PAGE = '8eabbd0223a5';
const PRE = {
  "": "6d45e1979e7b3f51",
  "manifest.webmanifest": "3f4620e73fac5885",
  "img/gz-01-hero.webp": "e0db0e365820090d",
  "img/gz-02-triage.webp": "60e7adac5fc1ea89",
  "img/gz-03-consult.webp": "99a51a2b8cb5f5a9",
  "img/gz-04-treatment.webp": "90413ea83059ace0",
  "img/gz-05-cca.webp": "9987d3be02802171",
  "img/gz-06-review.webp": "b3aeba2db719bb6e",
  "media/dengue-home-ms-poster.webp": "0712fa5e3462d050",
  "media/dengue-home-ms-thumb.webp": "7a230527e76a12aa",
  "media/dengue-home-poster.webp": "b0e1f2c628ba9b08",
  "media/dengue-home-thumb.webp": "0de9b3300b92907e",
  "media/explainer-ms-night-poster.webp": "aa1eb90893e817a3",
  "media/explainer-ms-poster.webp": "4f4489cb95d7b28f",
  "media/explainer-night-poster.webp": "dcfde690cdf7217e",
  "media/explainer-poster.webp": "fabae26107853e25",
  "poster/sheet1-night-thumb.webp": "23b3ba6f4695a1bd",
  "poster/sheet1-thumb.webp": "59336fd601178c19",
  "poster/sheet2-night-thumb.webp": "6e38f14de51c87a4",
  "poster/sheet2-thumb.webp": "4afa00737d753989",
  "tiles/abdo.webp": "0500ed50b9c93d10",
  "tiles/abdohb.webp": "08ad40562d58b7d4",
  "tiles/acscpg.webp": "c1996e6234f05a8a",
  "tiles/all.webp": "944b2f9765179a04",
  "tiles/asthcpg.webp": "ba2c6ebbc561ab00",
  "tiles/brain.webp": "5e04e8087edb752a",
  "tiles/breath.webp": "4fc70519902f1db5",
  "tiles/calc.webp": "a65974c33af3c91a",
  "tiles/calm.webp": "71897ab971ae59fa",
  "tiles/cardio.webp": "3f0360b90ab895e3",
  "tiles/ckdcpg.webp": "3bc68bda2c1a15c1",
  "tiles/codeblue.webp": "2c6c9fd9db61fd86",
  "tiles/codestroke.webp": "98b14fb6bb8781a3",
  "tiles/comms.webp": "af32bb7456bad1ae",
  "tiles/copdcpg.webp": "b01d89c09c8ca41c",
  "tiles/dc.webp": "3556cfe56537f675",
  "tiles/dcpg.webp": "ae2b6b9197d440d2",
  "tiles/dengue.webp": "f387b9a8760b6fea",
  "tiles/dilute.webp": "aa66a9b23f6a9e49",
  "tiles/doses.webp": "59d96908b62074a5",
  "tiles/fbcpg.webp": "490eddbff8f686de",
  "tiles/flow.webp": "d7cc3a055d9ba7a7",
  "tiles/footcpg.webp": "0b7c4db64e0fce37",
  "tiles/goutcpg.webp": "7d65fcd3865c79df",
  "tiles/head.webp": "cc3ef57a6b5dba3a",
  "tiles/headcpg.webp": "155c9f7de59dea7e",
  "tiles/heart.webp": "98c7307aed9a9d93",
  "tiles/hipcpg.webp": "afdbe584183d5d64",
  "tiles/infect.webp": "ca8d65935a742eae",
  "tiles/injury.webp": "ed3720a648ca93e9",
  "tiles/interp.webp": "b9f65712358c23f8",
  "tiles/intro.webp": "b28136711f5ac9f1",
  "tiles/kids.webp": "31fa4395bfc8716b",
  "tiles/links.webp": "53203875758f3f9e",
  "tiles/meta.webp": "1215c5ab140b0d72",
  "tiles/newhkl.webp": "85991b06925b2d03",
  "tiles/paincpg.webp": "d4665b5cad2b6396",
  "tiles/paths.webp": "1271dc88458c23eb",
  "tiles/pharm.webp": "6575ddf3b073ec91",
  "tiles/poster.webp": "a565852c874da0cc",
  "tiles/prescr.webp": "8bf6ae0b74920d99",
  "tiles/prot.webp": "031ac0f96762bd53",
  "tiles/rabies.webp": "82d5e094bf4825f2",
  "tiles/rules.webp": "f6cdfb3f9cded6e7",
  "tiles/scores.webp": "88c54116569f7e61",
  "tiles/sinuscpg.webp": "5e5c3b11e9837028",
  "tiles/snakecpg.webp": "233c9a6c490480fe",
  "tiles/sources.webp": "226027a89cf455e7",
  "tiles/t2dmcpg.webp": "8a62f2923a2680ba",
  "tiles/throatcpg.webp": "c77ed1c3a693d447",
  "tiles/tip.webp": "f66ac75367591572",
  "tiles/toothcpg.webp": "c8205f70cec67503",
  "tiles/tox.webp": "2b262a85b15fbfbc",
  "tiles/vtecpg.webp": "9bf4a719eafc769c",
  "tiles/whatsnew.webp": "651f87cc9228152f"
};   /* path: hash, saved at install ('' is the page) */
const KEEP = {
  "abdo/p01.webp": "062dde6cee433832",
  "abdo/p02.webp": "fafa18d84e14f369",
  "abdo/p03.webp": "c60ea4bf27c4b19d",
  "abdo/p04.webp": "8d123cb43f040179",
  "abdo/p05.webp": "bb2ffa44112472b4",
  "abdo/p06.webp": "3deb5d05e030159d",
  "abdo/p07.webp": "e791246879ffc36e",
  "abdo/p08.webp": "9d6454c738f7236f",
  "abdo/p09.webp": "cc0074adbfa0da53",
  "abdo/p10.webp": "905bd16be9e05d1f",
  "abdo/p11.webp": "a826185850f9962f",
  "abdo/p12.webp": "d7d75f49005613a5",
  "abdo/p13.webp": "57199c2a53db196d",
  "abdo/p14.webp": "3e280957a9288231",
  "abdo/p15.webp": "498ab547779d60e8",
  "abdo/p16.webp": "e61d76b66ff61d7a",
  "abdo/p17.webp": "cfc217ff5e9de15f",
  "abdo/p18.webp": "64d1f42098fb0a4e",
  "abdo/p19.webp": "13e2ed37b8ae3bcf",
  "abdo/p20.webp": "4687e689d9547cb3",
  "abdo/p21.webp": "771ac4ba4262a70a",
  "abdo/p22.webp": "bc8e4e4d65f68bae",
  "abdo/p23.webp": "b09ac611b48418c8",
  "abdo/p24.webp": "c709243a4ebf8430",
  "abdo/p25.webp": "0c543750088d8624",
  "abdo/p26.webp": "93e63c1b33ecc5fb",
  "abdo/p27.webp": "d057f77b3b25ee60",
  "abdo/p28.webp": "a265b5e77869d754",
  "abdo/p29.webp": "64c83df41335ae8e",
  "abdo/q02.webp": "3af8f4e06d7eac62",
  "abdo3d/f00.webp": "0156c24f31f63074",
  "abdo3d/f01.webp": "3f7506c042017a6a",
  "abdo3d/f02.webp": "2d37b7a63da8fc57",
  "abdo3d/f03.webp": "79fffea3b71f6868",
  "abdo3d/f04.webp": "f42d5816014bec6e",
  "abdo3d/f05.webp": "c11f17f553da77cd",
  "abdo3d/f06.webp": "3642fa97ee91bef7",
  "abdo3d/f07.webp": "32f59524294cedce",
  "abdo3d/f08.webp": "99d392f7175c3c41",
  "abdo3d/f09.webp": "47a4bff2928fe5b6",
  "abdo3d/f10.webp": "9c656003ca4bda72",
  "abdo3d/f11.webp": "5f0a40c6469b9d29",
  "abdo3d/f12.webp": "cb06fec0effb0a24",
  "abdo3d/f13.webp": "8f20c2028c7cb194",
  "abdo3d/f14.webp": "6a93d72177a56e35",
  "abdo3d/f15.webp": "9dc1529d33753b00",
  "abdo3d/f16.webp": "8b9c96cdc6447574",
  "abdo3d/f17.webp": "3c798932a470ae44",
  "abdo3d/f18.webp": "659d9c332d8f53cb",
  "abdo3d/f19.webp": "20c68172184ef87d",
  "abdo3d/f20.webp": "52f7fe61720ada32",
  "abdo3d/f21.webp": "f4fcbe90f344271e",
  "abdo3d/f22.webp": "d9bc6a32b82b17fa",
  "abdo3d/f23.webp": "20d4cddeba2373cf",
  "abdo3d/f24.webp": "a880e2f0ffda355a",
  "abdo3d/front-lit/r1.webp": "55d4e1c836268a5a",
  "abdo3d/front-lit/r2.webp": "2638c72ac1804625",
  "abdo3d/front-lit/r3.webp": "8cea795024782289",
  "abdo3d/front-lit/r4.webp": "8f26266c0d6b5fd2",
  "abdo3d/front-lit/r5.webp": "5dd1e49ec5cf85ab",
  "abdo3d/front-lit/r6.webp": "45cd866d33432b0d",
  "abdo3d/front-lit/r7.webp": "1531e13d743147aa",
  "abdo3d/front-lit/r8.webp": "cad99074f8a9e372",
  "abdo3d/front-lit/r9.webp": "d51e262f75fcbd35",
  "abdo3d/poster.webp": "fac891231d00369a",
  "audio/abdo-script-ms.mp3": "18de118d87496c4c",
  "audio/adv-abdo-en.mp3": "ffa6d99240ec63c0",
  "audio/adv-asthma-en.mp3": "664d0352f9edb4e5",
  "audio/adv-dengue-en.mp3": "8f3c758376cfdca7",
  "audio/adv-gastro-en.mp3": "03393283cc4c1238",
  "audio/adv-hypo-en.mp3": "dfa5d52622c2012a",
  "audio/adv-renal-en.mp3": "f650b0abc8391f1b",
  "audio/adv-tbi-en.mp3": "a9667d711fc48c86",
  "audio/leaf-cancerpain-en.mp3": "b1f30b164a4bbf68",
  "audio/leaf-cancerpain-ms.mp3": "acdaed85674b34a2",
  "audio/leaf-dengue-en.mp3": "ef53faf10fb55af4",
  "audio/leaf-dengue-ms.mp3": "ce22fd53e69123f0",
  "audio/stop1.mp3": "244163fca2adc1db",
  "audio/stop2.mp3": "8985d56fa70078ce",
  "audio/stop3.mp3": "6b27c7745079c118",
  "audio/stop4.mp3": "02591598a9b9f28c",
  "audio/stop5.mp3": "3acb1e2e3d9e4fcd",
  "clips/hero-loop.mp4": "4dd1c6472d43b485",
  "clips/stop1-triage.mp4": "1bf5e543508672a9",
  "clips/stop2-consult.mp4": "8ec63c933dc6aa4a",
  "clips/stop3-treatment.mp4": "e74e31120027b4c1",
  "clips/stop4-cca.mp4": "ead39a500be76f5d",
  "clips/stop5-review.mp4": "2e63b40e7809dca0",
  "ebook/p05.webp": "a5a2cfd9660a82ec",
  "ebook/p06.webp": "c7a1fa4189a8d159",
  "ebook/p07.webp": "d374b690f1733467",
  "ebook/p08.webp": "170ff2af7d758a63",
  "ebook/p09.webp": "a723054905b43df9",
  "ebook/p10.webp": "03d9fa5dc870935b",
  "ebook/p11.webp": "733400e988ca9f52",
  "ebook/p12.webp": "b96b12445fc95506",
  "ebook/p13.webp": "ddd10d454a07113d",
  "ebook/p14.webp": "e695ab23097fb192",
  "ebook/p15.webp": "26efd86f6e4ff553",
  "ebook/p16.webp": "a509a1839f7ca39e",
  "ebook/p17.webp": "12bd7375c2a235c0",
  "ebook/p18.webp": "a364e70f0af688dc",
  "ebook/p19.webp": "109f3d19779d857c",
  "ebook/p20.webp": "fce9ea2116991e7c",
  "ebook/p21.webp": "26d9d591a3db4d1b",
  "ebook/p22.webp": "825110f0d586ce0e",
  "ebook/p23.webp": "23ad4d2a5991a929",
  "ebook/p24.webp": "d840f552c0b4a39d",
  "ebook/p25.webp": "cec8d7d4ed91f163",
  "ebook/p26.webp": "c98de31671371a68",
  "ebook/p27.webp": "37dcfa3be304989c",
  "ebook/p28.webp": "7c8d1c483929af63",
  "ebook/p29.webp": "cbefcda4f829654f",
  "ebook/p30.webp": "d4c1499c3935a8a8",
  "ebook/p31.webp": "5dd62954a854660e",
  "ebook/p32.webp": "4942bccd522e9577",
  "ebook/p33.webp": "54c8ccd46cdabc91",
  "ebook/p34.webp": "befc85b1b341e3cf",
  "ebook/p35.webp": "25f865713165b0b0",
  "ebook/p36.webp": "f5fcc6478528c0f2",
  "ebook/p37.webp": "73bc8a2c394221e0",
  "ebook/p38.webp": "49a3c1df811e9857",
  "ebook/p39.webp": "9e79fefae3579022",
  "ebook/p40.webp": "e645080e0df14df3",
  "ebook/p41.webp": "ecd9ac2fa1cbe414",
  "ebook/p42.webp": "d4bc420df30b0f5f",
  "ebook/p43.webp": "86b0905500605cb5",
  "ebook/p44.webp": "cc89bd33fd3f0a2f",
  "ebook/p45.webp": "b9e5640191aac448",
  "ebook/p46.webp": "d3da485c9a9da40d",
  "ebook/p47.webp": "63af93679acdd68d",
  "ebook/p48.webp": "db7c057094d6bbd6",
  "ebook/p49.webp": "9b1bbc04e5519c72",
  "ebook/p50.webp": "8d986567cfde31a1",
  "ebook/p51.webp": "a4e75f13d31f636b",
  "ebook/p52.webp": "caaf1662b76aacc8",
  "ebook/p53.webp": "40f63adb38342e2e",
  "ebook/p54.webp": "1df0be5f336281d3",
  "ebook/p55.webp": "14235f335401500b",
  "ebook/p56.webp": "a6a62fb4880ed27c",
  "ebook/p57.webp": "5a7c4c32014ccc2b",
  "ebook/p58.webp": "e70411f514f184da",
  "ebook/p59.webp": "962ae1d423f5893d",
  "ebook/p60.webp": "e6707fd51aed139c",
  "ebook/p61.webp": "d7dba59b5c18e280",
  "ebook/p62.webp": "a8dc585090e18d16",
  "ebook/p63.webp": "b1f6292a363806e1",
  "media/dengue-home-720.mp4": "7286a1edf2fc306c",
  "media/dengue-home-ms-720.mp4": "f7651a7db228ff26",
  "media/green-zone-explainer-720p.mp4": "cc22f7472739a2cd",
  "media/green-zone-explainer-ms-720p.mp4": "3f36b02ec3b39bf6",
  "media/green-zone-explainer-ms-night-720p.mp4": "901cab00ada16b65",
  "media/green-zone-explainer-night-720p.mp4": "fec209ebe7660cb3",
  "memo/2021-12-p1.webp": "21d3fa29671f83f7",
  "memo/2021-12-p3.webp": "106354335159bb50",
  "memo/2021-12-p4.webp": "f958b81724039efd",
  "memo/2021-14-p1.webp": "b6fd6a314d646f04",
  "memo/2022-04-p1.webp": "e646e721fd3934e5",
  "memo/2022-04-p2.webp": "6649b31bc2ee41f2",
  "memo/2022-08-p1.webp": "bd63a0eb8f6659e8",
  "memo/2022-09-p1.webp": "218d9bec251c5216",
  "memo/2022-09-p2.webp": "deaecbe6487990e6",
  "memo/2022-12-p1.webp": "ec159680610b2b43",
  "memo/2022-12-p2.webp": "7338ce362727a41b",
  "memo/2022-12-p3.webp": "beffaab12f878e8f",
  "memo/2022-14-p1.webp": "14722b3a02fedc42",
  "memo/2022-19-p1.webp": "886c032a9992837d",
  "memo/2022-21-p1.webp": "b2eda1b6bf852391",
  "memo/2022-22-p1.webp": "27c498d0ca632329",
  "memo/2022-22-p2.webp": "c8a6878063e48d9f",
  "memo/2022-23-p1.webp": "226ce2c846bbee4f",
  "memo/2022-23-p2.webp": "ef08a7d6f37093c9",
  "memo/2023-01-p1.webp": "06b9708728c9872b",
  "memo/2023-01-p2.webp": "9d07bf20c10428cc",
  "memo/2023-04-p1.webp": "5048f98e1cfbee22",
  "memo/2023-04-p2.webp": "bdcda64ffa9ebd28",
  "memo/2023-05-p1.webp": "8526ac9a754cdd26",
  "memo/2023-05-p2.webp": "60f2650dbede47cb",
  "memo/2023-14-p1.webp": "a2ac8eca8d6c6dfd",
  "memo/2023-14-p3.webp": "d58a023f9dd837ca",
  "memo/2023-20-p1.webp": "6d4663d783b213f3",
  "memo/2023-24-p1.webp": "21a1ecd7fff817c2",
  "memo/2024-02-p1.webp": "ec2a6258567dd779",
  "memo/2024-02-p2.webp": "b2d627fabd4fa022",
  "memo/2024-02-p3.webp": "7ead93f843f8a5fb",
  "memo/2024-02-p4.webp": "5e8306de928fdee4",
  "memo/2024-02-p6.webp": "72ae70ba01008ffc",
  "memo/2024-04-p1.webp": "891577c3f63194b2",
  "memo/2024-09-p1.webp": "2ff0ed9a8b1b41cc",
  "memo/2024-09-p2.webp": "8bee4e01dd6eb974",
  "memo/2024-11-p1.webp": "557be95c2acc45a4",
  "memo/2024-11-p2.webp": "9a226d6453615ffd",
  "memo/2024-11-p3.webp": "4c7973229c7e2f9a",
  "memo/2024-13-p1.webp": "eb51b01f9cafcbaf",
  "og/preview.jpg": "ce77e7462cbacd2f",
  "poster/sheet1-night.webp": "54093a7c495c04a8",
  "poster/sheet1.webp": "3ebb8ed9ca6f1621",
  "poster/sheet2-night.webp": "9990eccb9da88fd2",
  "poster/sheet2.webp": "34bd3aeeac76da7a",
  "sp/a08-1-p1.webp": "0ae13e6c81d6d6ae",
  "sp/a08-2-p1.webp": "62d0beca382c88d0",
  "sp/a08-3-p1.webp": "945144a667715c18",
  "sp/a09-p1.webp": "c64ef1200e6843c7",
  "sp/a10-p1.webp": "060fee82bed21844",
  "sp/a10-p15.webp": "2f1e414c9cd8cb70",
  "sp/a11-p1.webp": "f2989f70577b4f48",
  "sp/a12-p1.webp": "7917286a553a2133",
  "sp/a12-p4.webp": "2266caef52d87f39",
  "sp/b09-p1.webp": "d6fd8d545998129c",
  "sp/b10-p1.webp": "1fe257f9f8290141",
  "sp/b11-p1.webp": "a68d4bdf6093640d",
  "sp/b12-p1.webp": "cccf181a938ea17c",
  "sp/b13-p1.webp": "67aa8a7eee7f7b9d",
  "sp/b14-p1.webp": "0678432f2ee17fd2",
  "sp/b14-p5.webp": "4fccd0c09776969c",
  "sp/b16-p1.webp": "489e672f958e9c84",
  "sp/b17-p1.webp": "f9fc53eba970514a",
  "sp/b18-p1.webp": "8bf16cc1fb148aa4",
  "sp/b19-p1.webp": "6940eb4904f74675",
  "sp/c17-p10.webp": "e527ee29bd04e160",
  "sp/c17-p100.webp": "0341d4858ce32a57",
  "sp/c17-p101.webp": "dea52a84f0ba55ea",
  "sp/c17-p102.webp": "205e85bc148db9e6",
  "sp/c17-p103.webp": "21d6538ff5ad0e0a",
  "sp/c17-p104.webp": "aaaedaf2cf696c84",
  "sp/c17-p105.webp": "51590ea755de2aca",
  "sp/c17-p106.webp": "c204af8c33394ee7",
  "sp/c17-p107.webp": "9471bfd204f672c4",
  "sp/c17-p108.webp": "242b14f3fd4fd62c",
  "sp/c17-p109.webp": "d988429aff368ca0",
  "sp/c17-p11.webp": "3f5f2df94010b9fb",
  "sp/c17-p110.webp": "20f9560a114a09ae",
  "sp/c17-p111.webp": "287bdc162d4d5f89",
  "sp/c17-p112.webp": "64c0d8ff49015f05",
  "sp/c17-p113.webp": "a01b361d38c1c76d",
  "sp/c17-p114.webp": "b84ad61c6c5598dd",
  "sp/c17-p115.webp": "97c70f89b6e0f4fd",
  "sp/c17-p116.webp": "b0042ffccb638c01",
  "sp/c17-p117.webp": "8a61a9e74cb8abb0",
  "sp/c17-p118.webp": "9bba01d42ccb012d",
  "sp/c17-p119.webp": "fc1f1f0cb35d8737",
  "sp/c17-p12.webp": "8d03065f8db6043c",
  "sp/c17-p120.webp": "a29d7280b680a23e",
  "sp/c17-p121.webp": "1914220ae6687a91",
  "sp/c17-p122.webp": "67a700fa838ebc94",
  "sp/c17-p123.webp": "7a2376135267f01d",
  "sp/c17-p124.webp": "e69dd2b5232eb6d2",
  "sp/c17-p125.webp": "18e19801d04e56a1",
  "sp/c17-p126.webp": "32c87b43432313d9",
  "sp/c17-p127.webp": "65f8d505b3375927",
  "sp/c17-p128.webp": "62f03c2093a8eb05",
  "sp/c17-p129.webp": "775d3c1c43e74661",
  "sp/c17-p13.webp": "f7af505b40322e63",
  "sp/c17-p130.webp": "4b3e20df259eeded",
  "sp/c17-p131.webp": "cf7c37730b4d583f",
  "sp/c17-p132.webp": "98f50684c483f15a",
  "sp/c17-p133.webp": "f486a17a2a01406d",
  "sp/c17-p134.webp": "cef23d69d4da1a69",
  "sp/c17-p135.webp": "4cf8466dc24d68f3",
  "sp/c17-p136.webp": "f46e93c99e5782ca",
  "sp/c17-p137.webp": "08a4f3608fadd95e",
  "sp/c17-p138.webp": "8614d0ed10f63a49",
  "sp/c17-p139.webp": "42c5bd6a7d1f85b0",
  "sp/c17-p14.webp": "a25a75e80cda71d9",
  "sp/c17-p140.webp": "7540b9de96dc36fa",
  "sp/c17-p141.webp": "22836b4a4168787d",
  "sp/c17-p142.webp": "7c992f45aa5d79f4",
  "sp/c17-p143.webp": "687231401ed130d3",
  "sp/c17-p144.webp": "7c1be5fb5a942cc5",
  "sp/c17-p145.webp": "1ad1092bc0e5a554",
  "sp/c17-p146.webp": "5aa6c3fc4320bba9",
  "sp/c17-p147.webp": "93dd01df45805777",
  "sp/c17-p148.webp": "7fad52effa77e1a8",
  "sp/c17-p149.webp": "985470a657d8e88e",
  "sp/c17-p15.webp": "238ef0d9e47c396d",
  "sp/c17-p150.webp": "ab69a2742fc8176c",
  "sp/c17-p151.webp": "0189f2d7f99e61ab",
  "sp/c17-p152.webp": "e29884d61edc0ef3",
  "sp/c17-p153.webp": "36850f108c94f27c",
  "sp/c17-p154.webp": "abab559fd37edd7d",
  "sp/c17-p155.webp": "74bf57cf84e31be2",
  "sp/c17-p156.webp": "5f6ae506ab5e3028",
  "sp/c17-p157.webp": "db64dd5d3e5f6c82",
  "sp/c17-p158.webp": "680fac0226296232",
  "sp/c17-p159.webp": "6ba203dae31a21ed",
  "sp/c17-p16.webp": "1b6ad737711934fe",
  "sp/c17-p160.webp": "bda89b7e146165d3",
  "sp/c17-p161.webp": "7cb845a8947f54ef",
  "sp/c17-p162.webp": "5c29618debf32818",
  "sp/c17-p163.webp": "054e5811441b953c",
  "sp/c17-p164.webp": "bd77ed9271c28e0f",
  "sp/c17-p165.webp": "1ac15b9280903563",
  "sp/c17-p166.webp": "f640e1b8f2dcd5bc",
  "sp/c17-p167.webp": "3b884529ef9732bf",
  "sp/c17-p168.webp": "a0bbee4c93996868",
  "sp/c17-p169.webp": "b090424101c8f09f",
  "sp/c17-p17.webp": "1616d71bc47db8c8",
  "sp/c17-p170.webp": "cf1a85ba6df27e63",
  "sp/c17-p171.webp": "a5379a1bc5dde409",
  "sp/c17-p172.webp": "7fb758b7c3ff3a11",
  "sp/c17-p173.webp": "45783e839ce22326",
  "sp/c17-p174.webp": "512b1fac37778cfc",
  "sp/c17-p175.webp": "8836c209f8eef72f",
  "sp/c17-p176.webp": "9e8c434e42cd9840",
  "sp/c17-p177.webp": "05ba4cbdb684e89d",
  "sp/c17-p178.webp": "68692b617d2ba2d3",
  "sp/c17-p179.webp": "8842aefe1eef484f",
  "sp/c17-p18.webp": "e4a9886a7695dcd2",
  "sp/c17-p180.webp": "a8ea453fbc613e21",
  "sp/c17-p181.webp": "c0f55a4cf2942486",
  "sp/c17-p182.webp": "56c3dafb492c5706",
  "sp/c17-p183.webp": "e01230bcbdf00011",
  "sp/c17-p184.webp": "be7d7911697006e6",
  "sp/c17-p185.webp": "5cb2ba8552e0f635",
  "sp/c17-p186.webp": "814cf2120e9b5fcf",
  "sp/c17-p187.webp": "c2821b7a750a9efb",
  "sp/c17-p188.webp": "f0e5eff19fee4b4d",
  "sp/c17-p189.webp": "263a26685af2973f",
  "sp/c17-p19.webp": "2b2c0d041d55facd",
  "sp/c17-p190.webp": "2547e0c6718e4b3d",
  "sp/c17-p191.webp": "af54583b57413497",
  "sp/c17-p192.webp": "123e480a5dbd143a",
  "sp/c17-p193.webp": "b27769a5e2dd83da",
  "sp/c17-p194.webp": "13438b147488d62c",
  "sp/c17-p195.webp": "0c3686aaf7d8a196",
  "sp/c17-p196.webp": "c5198df077e75764",
  "sp/c17-p197.webp": "40105e34e88384cf",
  "sp/c17-p198.webp": "a91a8128494f599e",
  "sp/c17-p199.webp": "c068d7071b22d3c9",
  "sp/c17-p20.webp": "9415da3e30b0c3e7",
  "sp/c17-p200.webp": "d9e233193e3bf6c7",
  "sp/c17-p201.webp": "bb33ad38f66cbf47",
  "sp/c17-p202.webp": "e17534fe49416587",
  "sp/c17-p203.webp": "1ac1a39fa97e62b1",
  "sp/c17-p204.webp": "8ebff38adcfee7f4",
  "sp/c17-p205.webp": "dc0fcd720d9e833f",
  "sp/c17-p206.webp": "853953058880ec61",
  "sp/c17-p207.webp": "bdeba9066e33ae99",
  "sp/c17-p208.webp": "b3c300ee1dabe46f",
  "sp/c17-p209.webp": "12b3409efc38a386",
  "sp/c17-p21.webp": "b04d3eadd5783464",
  "sp/c17-p210.webp": "ec5398cb7a5ca90c",
  "sp/c17-p211.webp": "0b6bdd96e873a058",
  "sp/c17-p212.webp": "f57e8069a8ea2c95",
  "sp/c17-p213.webp": "29f9827e958b30a7",
  "sp/c17-p214.webp": "17e664222998c176",
  "sp/c17-p215.webp": "b63c7d9c72ae7c74",
  "sp/c17-p216.webp": "dac8a7966bcebc2a",
  "sp/c17-p217.webp": "86dec57e68056c00",
  "sp/c17-p218.webp": "35dbfb69c2d620fc",
  "sp/c17-p219.webp": "61cad0c0f0e5d984",
  "sp/c17-p22.webp": "fa7db24281154e62",
  "sp/c17-p220.webp": "9ef18f129037f95d",
  "sp/c17-p221.webp": "6bffb9b3d9870603",
  "sp/c17-p222.webp": "6581ee124e3687dc",
  "sp/c17-p223.webp": "9e7f4d22dbcfe67b",
  "sp/c17-p224.webp": "71fc828400c9f422",
  "sp/c17-p225.webp": "3b4a665623c5e155",
  "sp/c17-p226.webp": "3910fb71d7cf4022",
  "sp/c17-p227.webp": "4a1bc0042bec89e5",
  "sp/c17-p228.webp": "04bbe19dedc2daae",
  "sp/c17-p229.webp": "fa412a7ca99b1f74",
  "sp/c17-p23.webp": "0d50965023c46324",
  "sp/c17-p230.webp": "ea226b2bff06dedc",
  "sp/c17-p231.webp": "4c86534d6a18dfe4",
  "sp/c17-p232.webp": "985709e31054f7c3",
  "sp/c17-p233.webp": "3d7600851b383760",
  "sp/c17-p234.webp": "896b48c0a305bd5f",
  "sp/c17-p235.webp": "ae33631ec35dd313",
  "sp/c17-p24.webp": "616259fdd560f57d",
  "sp/c17-p25.webp": "5434b3142347d551",
  "sp/c17-p26.webp": "490ce1b5dd6126f1",
  "sp/c17-p27.webp": "28343d9cd6b4e5c1",
  "sp/c17-p28.webp": "ab0682ae1746f913",
  "sp/c17-p29.webp": "71c447cb444d5128",
  "sp/c17-p30.webp": "7eb728a1bafd2e6f",
  "sp/c17-p31.webp": "1d8d330dffb9c6c6",
  "sp/c17-p32.webp": "5c8d62559b29ca39",
  "sp/c17-p33.webp": "d408f82b7cb6705d",
  "sp/c17-p34.webp": "4f2e7592f5dd6c3b",
  "sp/c17-p35.webp": "0f4e8be26f0faae6",
  "sp/c17-p36.webp": "5ab29d291948845b",
  "sp/c17-p37.webp": "cc2a3c6004a7acf4",
  "sp/c17-p38.webp": "c98f125e7db07e40",
  "sp/c17-p39.webp": "444cdb4c4bf99300",
  "sp/c17-p40.webp": "6f94c434e98d5082",
  "sp/c17-p41.webp": "d94781232581d092",
  "sp/c17-p42.webp": "daeb08b0aae9d8d2",
  "sp/c17-p43.webp": "977b62e5e0268d58",
  "sp/c17-p44.webp": "0557717154b44666",
  "sp/c17-p45.webp": "4647c116eaf42115",
  "sp/c17-p46.webp": "1934fc8e2e458b78",
  "sp/c17-p47.webp": "036986871c3cc098",
  "sp/c17-p48.webp": "ee6bcbe1718ab57b",
  "sp/c17-p49.webp": "3e3bb62f2dd99330",
  "sp/c17-p50.webp": "afa7e1a28c447740",
  "sp/c17-p51.webp": "2161712b9a258af8",
  "sp/c17-p52.webp": "b80881148b4f534e",
  "sp/c17-p53.webp": "0e53873966e3e41f",
  "sp/c17-p54.webp": "a4f02413f64d4b03",
  "sp/c17-p55.webp": "1e7ef42f624d05f8",
  "sp/c17-p56.webp": "2b7f4a1322d76ba9",
  "sp/c17-p57.webp": "f1531fb76cce950f",
  "sp/c17-p58.webp": "258c1416311f2a9f",
  "sp/c17-p59.webp": "ae0c2b8621701da3",
  "sp/c17-p60.webp": "aa09b1cb84cfe13a",
  "sp/c17-p61.webp": "034244cbc49be55a",
  "sp/c17-p62.webp": "c734621b79f9329d",
  "sp/c17-p63.webp": "b31a4b898bf24183",
  "sp/c17-p64.webp": "4eae7de6b7b8eb3b",
  "sp/c17-p65.webp": "ef1942439fbb10db",
  "sp/c17-p66.webp": "e727e1eb015c61eb",
  "sp/c17-p67.webp": "b1746c736227e192",
  "sp/c17-p68.webp": "29a1d5999336d35a",
  "sp/c17-p69.webp": "fb1619740a9a37b5",
  "sp/c17-p70.webp": "2e5e6687b9c0ffb8",
  "sp/c17-p71.webp": "01a22b253abba4f6",
  "sp/c17-p72.webp": "e73a95b99e2c4e70",
  "sp/c17-p73.webp": "3894c124030fe616",
  "sp/c17-p74.webp": "eae988d719bfee89",
  "sp/c17-p75.webp": "4fe60cfb7fa33c0f",
  "sp/c17-p76.webp": "cedb3afd594db6c5",
  "sp/c17-p77.webp": "7c7dbaa00e564810",
  "sp/c17-p78.webp": "f82c113ea1baa90c",
  "sp/c17-p79.webp": "511950eecb9da8ea",
  "sp/c17-p80.webp": "77abe958a54622c1",
  "sp/c17-p81.webp": "d5bb3200ab25cc0f",
  "sp/c17-p82.webp": "0d9b7673bf8bcd4c",
  "sp/c17-p83.webp": "4fcd3365f4ffb225",
  "sp/c17-p84.webp": "f0189257ff2de5e4",
  "sp/c17-p85.webp": "18d2716c3c051f4d",
  "sp/c17-p86.webp": "3876abda30ee0bfe",
  "sp/c17-p87.webp": "309a2a0d332ccb6e",
  "sp/c17-p88.webp": "6365b410c94fe6d2",
  "sp/c17-p89.webp": "915e16180a84e93c",
  "sp/c17-p9.webp": "0f0fd7f624003413",
  "sp/c17-p90.webp": "9de5adc5a2dde2a2",
  "sp/c17-p91.webp": "56fcd385b6aec7bf",
  "sp/c17-p92.webp": "42d43bc9fae07b37",
  "sp/c17-p93.webp": "a0e9e6588034cd72",
  "sp/c17-p94.webp": "6f060e403cd8c52f",
  "sp/c17-p95.webp": "a5e608dea4bc13be",
  "sp/c17-p96.webp": "233f82f6c01520bb",
  "sp/c17-p97.webp": "76967ab735ef3389",
  "sp/c17-p98.webp": "4f435ee7e0edd0fc",
  "sp/c17-p99.webp": "2d6a40c196603102",
  "sp/c20-p5.webp": "d4d44fe38af5bc00",
  "sp/d07-p7.webp": "561cf5dc944dc2d4",
  "sp/d07-p8.webp": "2af5bb40ceb803f1",
  "sp/d15-p1.webp": "df66bb70d24b4418",
  "sp/d16-p6.webp": "1217336b5b9760ff",
  "sp/d16-p7.webp": "c6ae35f846a9fe06",
  "sp/tile-a01.webp": "201dbe8eb2216b1d",
  "sp/tile-a03.webp": "8f8fa94d2a466269",
  "sp/tile-a04.webp": "5d9d49897cc92d49",
  "sp/tile-a05.webp": "8c30f563b47ecba5",
  "sp/tile-a06.webp": "04670edd4c3d1521",
  "sp/tile-a07.webp": "4d5abb472377e489",
  "sp/tile-b01.webp": "87d668c50bb9648d",
  "sp/tile-b03.webp": "d7c32e99540e9fe0",
  "sp/tile-b04.webp": "5581f8fcbca5d3c7",
  "sp/tile-b05.webp": "71b6ad4a2493c2e5",
  "sp/tile-b07.webp": "61bbd0c1d1bcb177",
  "sp/tile-c01.webp": "20f1e9a8540eea73",
  "sp/tile-c04.webp": "d3b8d79f9a8a62eb",
  "sp/tile-c16.webp": "cbfadfb31b620cef",
  "sp/tile-c17.webp": "14f6f0a3a8c7b6c2",
  "sp/tile-d01.webp": "b3427ed2f09350fd",
  "sp/tile-d04.webp": "0191422522a1179a",
  "sp/tile-d08.webp": "890deb046ead6f20",
  "sp/tile-d15.webp": "4d20ecb266c693b7",
  "sp/tile-d16.webp": "3b466f61202dcf14",
  "sp/tile-d22.webp": "8b540ba1bda1fa0e",
  "sp/tile-farmasi.webp": "208fb9de812a5696",
  "sp/tile-medsafe.webp": "a7a36a46fb8911b9",
  "sp/tile-sp.webp": "183d08c0f95d401c",
  "tiles/abdo.mp4": "1a41480c60e56f8e",
  "tiles/abdohb.mp4": "caf3b5f4fae08686",
  "tiles/acscpg.mp4": "2c1e74b12b8fec49",
  "tiles/all.mp4": "1cb74ce37fe849ef",
  "tiles/asthcpg.mp4": "0a01f608ec67c1a4",
  "tiles/brain.mp4": "37969fa6d84670fa",
  "tiles/breath.mp4": "4a85777d7b3d8aa1",
  "tiles/calc.mp4": "fd93b7253b4c646d",
  "tiles/calm.mp4": "3cc06c19278e291c",
  "tiles/cardio.mp4": "8b57014eda5afe21",
  "tiles/ckdcpg.mp4": "14420338c6dd6317",
  "tiles/codeblue.mp4": "5c26838a7c54846b",
  "tiles/codestroke.mp4": "c669c76fa577a528",
  "tiles/comms.mp4": "654f4b5c7519b646",
  "tiles/copdcpg.mp4": "775a490eee07c057",
  "tiles/dc.mp4": "59412911b4488323",
  "tiles/dcpg.mp4": "34e84b4920e7e166",
  "tiles/dengue.mp4": "d951f6aef8cec099",
  "tiles/dilute.mp4": "7884213adad81d41",
  "tiles/doses.mp4": "17d76ed842362da6",
  "tiles/fbcpg.mp4": "1b3e44f90abcfec0",
  "tiles/flow.mp4": "e14a2d738b2a5137",
  "tiles/footcpg.mp4": "d06d6506de136b35",
  "tiles/goutcpg.mp4": "c953229945392a80",
  "tiles/head.mp4": "3b618f38f1c9a32e",
  "tiles/headcpg.mp4": "bfab024d2bc4f962",
  "tiles/heart.mp4": "72c0743cbfb62cbb",
  "tiles/hipcpg.mp4": "1e9eb5f68ae04e2f",
  "tiles/infect.mp4": "edc82836cb810cb1",
  "tiles/injury.mp4": "01eeb74b01316809",
  "tiles/interp.mp4": "3087dcf69770ca2e",
  "tiles/intro.mp4": "1628518b3525a86d",
  "tiles/kids.mp4": "e4a3a984b7631c31",
  "tiles/links.mp4": "ac361a3e84b247fe",
  "tiles/meta.mp4": "61ba8d4d4432c339",
  "tiles/newhkl.mp4": "774407b2dcf70da6",
  "tiles/paincpg.mp4": "79f6ad1724e03e30",
  "tiles/paths.mp4": "3bcea33492350e52",
  "tiles/pharm.mp4": "12077a0e1a04075c",
  "tiles/poster.mp4": "fb8e4ff22479e1df",
  "tiles/prescr.mp4": "6e0d0a6ae647f801",
  "tiles/prot.mp4": "849294b15f0801a7",
  "tiles/rabies.mp4": "f7a970bee6141025",
  "tiles/rules.mp4": "c7f823c780153fd0",
  "tiles/scores.mp4": "98eceab48dfdd02f",
  "tiles/sinuscpg.mp4": "846bf32d1570c611",
  "tiles/snakecpg.mp4": "81a539c561ca46c0",
  "tiles/sources.mp4": "99866ad1ff5b1599",
  "tiles/t2dmcpg.mp4": "13795d5f44b6ccc5",
  "tiles/throatcpg.mp4": "67bf77fbc63f3fa3",
  "tiles/tip.mp4": "319cc9d631af5e30",
  "tiles/toothcpg.mp4": "8bb44e9b22035dd8",
  "tiles/tox.mp4": "d0ad6cf4aea9d93f",
  "tiles/vtecpg.mp4": "6662710bc80d6b32",
  "tiles/whatsnew.mp4": "8f3ffc220deaf8c6",
  "xray/ankle-ap.webp": "a7280cd774d24143",
  "xray/ankle-lat.webp": "a0db7a5de24f844f",
  "xray/ankle-mortise.webp": "634b91a60244b462",
  "xray/chest-pa.webp": "449c4bf46282846a",
  "xray/elbow-ap.webp": "e29e7d7d7b210b0c",
  "xray/elbow-lat.webp": "fc517d6ee25c1445",
  "xray/foot-dp.webp": "369cc101371d3c61",
  "xray/foot-lat.webp": "f46ee45b43aa2cc3",
  "xray/foot-oblique.webp": "b38c776dcdee5ea3",
  "xray/hand-oblique.webp": "5f4aeaaed2c5130d",
  "xray/hand-pa.webp": "34891b033b8539fe",
  "xray/knee-ap.webp": "905fc898f33925a8",
  "xray/knee-lat.webp": "a5da541f45bd65dd",
  "xray/pelvis-ap.webp": "ebfecbf9625ce3d4",
  "xray/shoulder-ap.webp": "3eae70c8572f4f24",
  "xray/shoulder-y.webp": "7c7045dbb59a6149",
  "xray/wrist-lat.webp": "4a47b03f7c2007c4",
  "xray/wrist-pa.webp": "7ac3ccb38fbdcdd5"
}; /* path: hash, kept once used */
const NAME = 'green-zone-mo-guide-', CACHE = NAME + VERSION, KEPT = NAME + 'kept', FONTS = NAME + 'fonts';
const BASE = new URL('./', self.location.href).href;
const WAIT = 4000;
const PLAYED = /^(media|audio|clips)\/.+\.(mp4|mp3)$/; /* the films and sounds a person plays (tile loops are decoration) */

const hash = async buf => [...new Uint8Array(await crypto.subtle.digest('SHA-256', buf))].slice(0, 8).map(b => b.toString(16).padStart(2, '0')).join('');
const pathOf = url => url.startsWith(BASE) ? decodeURIComponent(url.slice(BASE.length).split(/[?#]/)[0]) : null;
const own = (body, type, extra) => new Response(body, {headers: Object.assign({'Content-Type': type || ''}, extra)});
const older = names => names.filter(n => n.startsWith(NAME) && ![CACHE, KEPT, FONTS].includes(n));
const has = (o, k) => k !== null && Object.prototype.hasOwnProperty.call(o, k);

self.addEventListener('install', e => e.waitUntil((async () => {
  const cache = await caches.open(CACHE);
  const earlier = await Promise.all(older(await caches.keys()).map(n => caches.open(n)));
  const lean = !!(self.navigator.connection && self.navigator.connection.saveData);
  await Promise.all(Object.keys(PRE).filter(p => p === '' || p === 'manifest.webmanifest' || !lean)
    .map(p => save(cache, earlier, p).catch(err => { if (p === '') throw err; })));
  await self.skipWaiting();
})()));

/* Save one file of this build: from an earlier cache if it is unchanged, else from the network, and only if it matches */
async function save(cache, earlier, p){
  const url = BASE + p;
  for (const c of [cache, ...earlier]){
    const res = await c.match(url);
    if (res && await hash(await res.clone().arrayBuffer()) === PRE[p]) return c === cache || cache.put(url, res);
  }
  const res = await fetch(url, {cache: 'no-cache'});
  const buf = res.ok ? await res.arrayBuffer() : null;
  if (!buf || await hash(buf) !== PRE[p]) throw new Error('Not the file of this build: ' + url);
  return cache.put(url, own(buf, res.headers.get('content-type')));
}

self.addEventListener('activate', e => e.waitUntil((async () => {
  await Promise.all(older(await caches.keys()).map(n => caches.delete(n)));
  const kept = await caches.open(KEPT);
  for (const req of await kept.keys()){
    const p = pathOf(req.url), res = has(KEEP, p) ? await kept.match(req) : null;
    if (!res || res.headers.get('X-GZ-Hash') !== KEEP[p]) await kept.delete(req);
  }
  await self.clients.claim();
  for (const c of await self.clients.matchAll({type: 'window', includeUncontrolled: true})) c.postMessage({gz: 'ready', page: PAGE});
})()));

/* pwa.js asks what is saved, for Settings and the Install the guide page: how many files, and their size in bytes */
self.addEventListener('message', e => {
  if (!e.data || e.data.gz !== 'status' || !e.source) return;
  e.waitUntil((async () => {
    const [pre, kept] = await Promise.all([CACHE, KEPT].map(async n => {
      const c = await caches.open(n);
      return Promise.all((await c.keys()).map(async r => ({p: pathOf(r.url), size: (await (await c.match(r)).blob()).size})));
    }));
    const mine = pre.filter(x => has(PRE, x.p)), sum = a => a.reduce((s, x) => s + x.size, 0);
    e.source.postMessage({gz: 'status', page: PAGE, version: VERSION, saved: mine.length, of: Object.keys(PRE).length,
      bytes: sum(mine) + sum(kept), played: kept.filter(x => PLAYED.test(x.p || '')).length});
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const p = pathOf(req.url);
  if (p !== null){
    if (p === '' || p === 'index.html') e.respondWith(page(e));
    else if (has(PRE, p)) e.respondWith(still(e, p));
    else if (has(KEEP, p)) e.respondWith(/\.(mp4|mp3)$/.test(p) ? media(e, p) : later(e, p));
    return; /* anything else (sw.js, the icons) goes to the network as usual */
  }
  const host = new URL(req.url).hostname;
  if (host === 'fonts.googleapis.com' || host === 'fonts.gstatic.com') e.respondWith(font(e, host));
});

async function page(e){
  /* The newest page, revalidated past the browser's cache and read in full */
  const got = fetch(e.request.url, {cache: 'no-cache', credentials: 'same-origin'}).then(async res => {
    if (!res.ok) return res; /* an error page: shown only when nothing is saved */
    const h = new Headers(res.headers); h.delete('content-encoding'); h.delete('content-length');
    return new Response(await res.arrayBuffer(), {status: res.status, statusText: res.statusText, headers: h});
  });
  const saved = await caches.match(BASE, {cacheName: CACHE});
  if (!saved) return got;
  let timer;
  const res = await Promise.race([got.catch(() => null), new Promise(r => { timer = setTimeout(r, WAIT, null); })]);
  clearTimeout(timer);
  if (res && res.ok) return res;
  e.waitUntil(got.catch(() => {})); /* a late answer still lands in the browser's cache, ready for the next update */
  return saved;
}

async function still(e, p){
  const cache = await caches.open(CACHE);
  const hit = await cache.match(BASE + p);
  if (hit) return hit;
  const res = await fetch(e.request);
  if (res.ok) keep(e, cache, p, PRE[p], res.clone());
  return res;
}

/* A full poster sheet: kept once opened */
async function later(e, p){
  const kept = await caches.open(KEPT);
  const hit = await kept.match(BASE + p);
  if (hit) return hit;
  const res = await fetch(e.request);
  if (res.ok) keep(e, kept, p, KEEP[p], res.clone(), {'X-GZ-Hash': KEEP[p]});
  return res;
}

function keep(e, cache, p, want, res, extra){
  e.waitUntil(res.arrayBuffer().then(async buf => {
    if (await hash(buf) === want) await cache.put(BASE + p, own(buf, res.headers.get('content-type'), extra));
  }).catch(() => {}));
}

/* A film or sound: from the kept copy in byte ranges, else from the network. When the network sends the whole file in one
   answer, the bytes pass on to the player as they come and a copy is kept once the player has read every one of them.
   Every answer is one this worker builds, network or kept: Chrome's player refuses to mix those with answers passed
   straight through from the network for the same file (a seek then fails with a data source error). */
async function media(e, p){
  const kept = await caches.open(KEPT);
  const hit = await kept.match(BASE + p);
  if (hit) return ranged(e.request, hit);
  const res = await fetch(e.request);
  const h = new Headers(res.headers); h.delete('content-encoding');
  const built = body => new Response(body, {status: res.status, statusText: res.statusText, headers: h});
  if (!res.body || !whole(res)) return built(res.body);
  const parts = [];
  const pass = new TransformStream({transform(chunk, ctl){ parts.push(chunk); ctl.enqueue(chunk); }});
  e.waitUntil(res.body.pipeTo(pass.writable).then(async () => {
    const blob = new Blob(parts, {type: res.headers.get('content-type') || ''});
    if (await hash(await blob.arrayBuffer()) === KEEP[p]) await kept.put(BASE + p, own(blob, blob.type, {'X-GZ-Hash': KEEP[p]}));
  }).catch(() => {})); /* the player stopped reading (a seek, a pause, leaving the page): nothing is kept */
  return built(pass.readable);
}

/* Does this answer carry the whole file: a 200, or a 206 for bytes 0 to the end? */
function whole(res){
  if (res.status === 200) return true;
  const m = res.status === 206 && /^bytes 0-(\d+)\/(\d+)$/.exec(res.headers.get('content-range') || '');
  return !!m && +m[1] + 1 === +m[2];
}

async function ranged(req, hit){
  const m = /^bytes=(\d*)-(\d*)$/.exec((req.headers.get('range') || '').trim());
  if (!m || (m[1] === '' && m[2] === '')) return hit; /* no range, or one this does not read: the whole file */
  const blob = await hit.blob(), size = blob.size;
  const start = m[1] === '' ? Math.max(0, size - +m[2]) : +m[1];
  const end = m[1] === '' || m[2] === '' ? size - 1 : Math.min(+m[2], size - 1);
  if (start >= size || start > end) return new Response(null, {status: 416, headers: {'Content-Range': 'bytes */' + size}});
  return new Response(blob.slice(start, end + 1), {status: 206, headers: {'Content-Type': hit.headers.get('content-type') || '',
    'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': String(end - start + 1), 'Accept-Ranges': 'bytes'}});
}

async function font(e, host){
  const cache = await caches.open(FONTS);
  const hit = await cache.match(e.request, {ignoreVary: true});
  if (hit && host === 'fonts.gstatic.com') return hit; /* a font file never changes at the same address */
  const net = fetch(e.request);
  e.waitUntil(net.then(res => (res.ok || res.type === 'opaque') && cache.put(e.request, res.clone())).catch(() => {}));
  return hit || net; /* the stylesheet: the kept one now, refreshed for next time */
}
