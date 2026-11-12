export type StoryChoice = { id: string; label: string; nextNodeId: string };
export type StoryNode = { id: string; title: string; narration: string; choices?: StoryChoice[]; ending?: { reflection: string; saferNextSteps: string[] } };
export type StoryDefinition = { id: string; title: string; category: string; shortDescription: string; startNodeId: string; nodes: Record<string, StoryNode> };
export const stories: StoryDefinition[] = [
  {
    "id": "screenshot",
    "title": "Screenshot-i që u shpërnda",
    "category": "Bullizëm kibernetik",
    "shortDescription": "Një foto fyese përhapet në grupin e klasës. Ti e sheh dhe duhet të vendosësh si të reagosh.",
    "startNodeId": "c1_start",
    "nodes": {
      "c1_start": {
        "id": "c1_start",
        "title": "Çfarë bën kur e sheh fotografinë në grup?",
        "narration": "Në grupin e klasës shfaqet një fotografi e modifikuar e Inës, e shoqëruar me komente fyese. Nuk është hera e parë që disa persona bëjnë shaka me të. Brenda pak minutash, mesazhet shtohen dhe dikush propozon ta dërgojë fotografinë edhe në grupe të tjera. Ti je pjesë e grupit dhe e sheh çfarë po ndodh.",
        "choices": [
          {
            "id": "0",
            "label": "E dërgoj edhe në një grup tjetër, sepse të gjithë po qeshin.",
            "nextNodeId": "c1_shared"
          },
          {
            "id": "1",
            "label": "E shoh mesazhin, por nuk ndërhyj.",
            "nextNodeId": "c1_silent"
          },
          {
            "id": "2",
            "label": "Nuk e shpërndaj dhe i shkruaj Inës privatisht.",
            "nextNodeId": "c1_support"
          }
        ]
      },
      "c1_shared": {
        "id": "c1_shared",
        "title": "Tani e kupton se shpërndarja jote e përkeqësoi situatën. Çfarë bën?",
        "narration": "Fotografia përhapet në më shumë grupe. Disa persona që nuk e njohin Inën fillojnë të komentojnë. Kur e kupton se përmbajtja ka dalë jashtë grupit fillestar, Ina nuk përgjigjet më dhe largohet nga biseda.",
        "choices": [
          {
            "id": "0",
            "label": "E ndal shpërndarjen, pranoj se gabova dhe ndihmoj që përmbajtja të raportohet.",
            "nextNodeId": "c1_end_repair"
          },
          {
            "id": "1",
            "label": "Vazhdoj ta dërgoj, sepse tani e kanë parë shumë persona.",
            "nextNodeId": "c1_end_spread"
          }
        ]
      },
      "c1_silent": {
        "id": "c1_silent",
        "title": "Si mund të reagosh tani pa e vënë veten ose Inën në rrezik?",
        "narration": "Të nesërmen, Ina nuk merr pjesë në bisedën e grupit. Komentet vazhdojnë dhe askush nuk e ka pyetur nëse është mirë. Ti nuk e ke nisur fotografinë, por as nuk ke bërë asgjë për ta ndalur përhapjen.",
        "choices": [
          {
            "id": "0",
            "label": "I shkruaj Inës privatisht dhe i propozoj të flasim me një të rritur të besuar.",
            "nextNodeId": "c1_end_private"
          },
          {
            "id": "1",
            "label": "E lë situatën ashtu siç është; nuk dua të merrem.",
            "nextNodeId": "c1_end_silence"
          }
        ]
      },
      "c1_support": {
        "id": "c1_support",
        "title": "Cili është hapi më i përgjegjshëm?",
        "narration": "Ina të përgjigjet se është mërzitur dhe nuk di nëse duhet të reagojë. Ajo ka frikë se situata do të bëhet edhe më e madhe nëse e përmend publikisht. Ti mund ta dëgjosh dhe ta ndihmosh të mendojë për hapat e ardhshëm.",
        "choices": [
          {
            "id": "0",
            "label": "E pyes çfarë mbështetjeje dëshiron, ruajmë provat dhe kërkojmë ndihmë nga një i rritur i besuar.",
            "nextNodeId": "c1_end_support"
          },
          {
            "id": "1",
            "label": "Publikoj një postim duke fyer personat që e shpërndanë fotografinë.",
            "nextNodeId": "c1_end_escalation"
          }
        ]
      },
      "c1_end_repair": {
        "id": "c1_end_repair",
        "title": "Mund ta korrigjosh një zgjedhje",
        "narration": "E ndalon përhapjen, heq atë që ke dërguar kur është e mundur dhe pranon se veprimi yt ishte i gabuar. Kjo nuk e fshin menjëherë dëmin, por është një hap i rëndësishëm për të mos e shtuar më tej.",
        "ending": {
          "reflection": "Kur kupton se ke kontribuar në një situatë të dëmshme, mos e justifiko veten. Ndalo, prano përgjegjësinë dhe ndihmo në korrigjimin e asaj që mund të korrigjohet.",
          "saferNextSteps": [
            "mos e shpërnda më përmbajtjen;",
            "mos ruaj ose dërgo kopje të panevojshme;",
            "kërko ndihmë për raportimin e përmbajtjes;",
            "mbështet personin pa i kërkuar të të falë menjëherë."
          ]
        }
      },
      "c1_end_spread": {
        "id": "c1_end_spread",
        "title": "Përhapja e shton dëmin",
        "narration": "Fotografia arrin te persona që nuk e njohin as situatën, as Inën. Komentet shtohen dhe kontrolli mbi përmbajtjen bëhet më i vështirë. Shpërndarja nuk është veprim neutral: ajo e zgjeron audiencën dhe mund ta shtojë ndikimin.",
        "ending": {
          "reflection": "Edhe një klikim mund të ndihmojë në përhapjen e përmbajtjes fyese. Mund të ndryshosh drejtim edhe tani: ndalo shpërndarjen, mos e ripubliko dhe kërko ndihmë.",
          "saferNextSteps": [
            "ndalo dërgimin e mëtejshëm;",
            "mos u përfshi në komente fyese;",
            "mbështet personin e shënjestruar;",
            "njofto një të rritur të besuar."
          ]
        }
      },
      "c1_end_private": {
        "id": "c1_end_private",
        "title": "Mbështetja fillon me një bisedë",
        "narration": "Ina kupton se nuk është vetëm. Ti nuk e detyron të flasë publikisht dhe nuk vendos në vend të saj. E dëgjon dhe i ofron ta shoqërosh te psikologia ose një mësues i besuar.",
        "ending": {
          "reflection": "Mbështetja private mund të jetë hapi i parë. Dëgjo pa gjykuar dhe mos premto fshehtësi absolute nëse dikush mund të jetë në rrezik.",
          "saferNextSteps": [
            "pyet çfarë i nevojitet;",
            "mos e shpërnda historinë e saj;",
            "ofro ta shoqërosh te një i rritur i besuar;",
            "raportoni përmbajtjen në platformë kur është e përshtatshme."
          ]
        }
      },
      "c1_end_silence": {
        "id": "c1_end_silence",
        "title": "Heshtja nuk e ndal përhapjen",
        "narration": "Situata vazhdon pa u sfiduar. Kjo nuk do të thotë se ti je përgjegjës për çdo veprim të grupit, por mosreagimi nuk i ofroi Inës mbështetjen që mund t'i duhej.",
        "ending": {
          "reflection": "Nuk është gjithmonë e sigurt ose e lehtë të ndërhysh publikisht. Megjithatë, mund të zgjedhësh një hap më të sigurt: të flasësh privatisht me personin ose me një të rritur të besuar.",
          "saferNextSteps": [
            "kontakto personin në privat;",
            "mos e përforco përmbajtjen;",
            "kërko ndihmë nga psikologia ose një mësues."
          ]
        }
      },
      "c1_end_support": {
        "id": "c1_end_support",
        "title": "Një hap i sigurt përpara",
        "narration": "Ti e dëgjon Inën, nuk e fajëson dhe nuk e ekspozon publikisht. Bashkë ruani informacionin që mund të ndihmojë në raportim dhe kërkoni mbështetje nga një i rritur i besuar.",
        "ending": {
          "reflection": "Mbështetja nuk do të thotë ta zgjidhësh gjithçka vetë. Do të thotë të mos e lësh personin vetëm dhe ta lidhësh me ndihmën e duhur.",
          "saferNextSteps": [
            "ruani provat pa i shpërndarë;",
            "përdorni mjetet e raportimit të platformës;",
            "përfshini psikologen ose mësuesin;",
            "respektoni privatësinë e Inës."
          ]
        }
      },
      "c1_end_escalation": {
        "id": "c1_end_escalation",
        "title": "Hakmarrja mund ta përshkallëzojë situatën",
        "narration": "Postimi yt sjell komente të tjera fyese dhe debati zhvendoset te ofendimet. Edhe pse dëshiroje ta mbroje Inën, sulmi publik mund ta përshkallëzojë situatën dhe ta bëjë më të vështirë zgjidhjen.",
        "ending": {
          "reflection": "Të mbrosh dikë nuk do të thotë të përdorësh të njëjtën sjellje ndaj të tjerëve. Zgjidh mënyra që ndalojnë përhapjen dhe përfshijnë ndihmën e duhur.",
          "saferNextSteps": [
            "mos vazhdo me ofendime;",
            "mos publiko të dhëna personale;",
            "ruaj provat e nevojshme;",
            "kërko ndërhyrjen e një të rrituri të besuar."
          ]
        }
      }
    }
  },
  {
    "id": "grupi",
    "title": "Kush mbetet jashtë grupit?",
    "category": "Përjashtim social",
    "shortDescription": "Në një projekt shkollor, një nxënës lihet vazhdimisht jashtë vendimeve dhe komunikimit.",
    "startNodeId": "s2_start",
    "nodes": {
      "s2_start": {
        "id": "s2_start",
        "title": "Si vepron kur grupi propozon ta lërë Ardin jashtë?",
        "narration": "Klasa po përgatit një projekt në grup. Ardi është pjesë e ekipit, por prej disa javësh nuk njoftohet për takimet dhe vendimet. Në grupin e mesazheve, disa anëtarë bëjnë shaka se “është më mirë pa të”. Ti je pjesë e ekipit dhe duhet të vendosësh si do të reagosh.",
        "choices": [
          {
            "id": "0",
            "label": "Pajtohem me grupin që të mos e përfshijmë.",
            "nextNodeId": "s2_exclude"
          },
          {
            "id": "1",
            "label": "Nuk them asgjë dhe vazhdoj punën time.",
            "nextNodeId": "s2_silent"
          },
          {
            "id": "2",
            "label": "Propozoj ta përfshijmë dhe të ndajmë detyrat në mënyrë të drejtë.",
            "nextNodeId": "s2_include"
          }
        ]
      },
      "s2_exclude": {
        "id": "s2_exclude",
        "title": "Çfarë bën tani?",
        "narration": "Ardi nuk merr informacionet për takimin dhe nuk e di çfarë duhet të përgatisë. Kur mësuesi pyet për kontributin e tij, grupi nuk ka një përgjigje të drejtë, sepse nuk i ka dhënë mundësi të marrë pjesë.",
        "choices": [
          {
            "id": "0",
            "label": "E pranoj se e kemi lënë jashtë dhe propozoj t'i japim mundësi reale të kontribuojë.",
            "nextNodeId": "s2_end_repair"
          },
          {
            "id": "1",
            "label": "Them se Ardi nuk deshi të punonte, edhe pse nuk e njoftuam.",
            "nextNodeId": "s2_end_blame"
          }
        ]
      },
      "s2_silent": {
        "id": "s2_silent",
        "title": "Si mund të ndihmosh që situata të ndryshojë?",
        "narration": "Ardi e merr vesh për projektin në momentin e fundit. Ai thotë se nuk ka marrë mesazhet dhe nuk e di çfarë është vendosur. Ti nuk e ke përjashtuar drejtpërdrejt, por ke parë që kjo po ndodhte.",
        "choices": [
          {
            "id": "0",
            "label": "Pranoj se duhej të kisha reaguar, e informoj dhe propozoj që të flasim me mësuesin për ndarjen e drejtë të punës.",
            "nextNodeId": "s2_end_support"
          },
          {
            "id": "1",
            "label": "Them se nuk është përgjegjësia ime dhe largohem nga biseda.",
            "nextNodeId": "s2_end_isolation"
          }
        ]
      },
      "s2_include": {
        "id": "s2_include",
        "title": "Si sigurohesh që përfshirja të jetë reale?",
        "narration": "Grupi pranon që Ardi të marrë pjesë. Megjithatë, ai nuk është i sigurt nëse të tjerët e duan vërtet në ekip dhe nuk e di çfarë roli do të ketë.",
        "choices": [
          {
            "id": "0",
            "label": "E pyes çfarë mund dhe dëshiron të marrë përsipër, pastaj biem dakord për detyrat dhe afatet.",
            "nextNodeId": "s2_end_belonging"
          },
          {
            "id": "1",
            "label": "I jap një detyrë të vogël pa e pyetur dhe vazhdoj me vendimet e mia.",
            "nextNodeId": "s2_end_token"
          }
        ]
      },
      "s2_end_repair": {
        "id": "s2_end_repair",
        "title": "Përfshirja kërkon përgjegjësi",
        "narration": "Ti pranon se Ardi është lënë jashtë dhe ndihmon që informacionet dhe detyrat të ndahen drejt. Nuk mund ta fshish atë që ka ndodhur, por mund të ndryshosh mënyrën si punon grupi tani e tutje.",
        "ending": {
          "reflection": "Përfshirja nuk është vetëm të shtosh dikë në listë. Është t'i japësh informacion, mundësi reale për të kontribuar dhe respekt.",
          "saferNextSteps": [
            "Mos e përforco sjelljen e dëmshme.",
            "Dëgjo personin dhe respekto privatësinë e tij.",
            "Kërko mbështetje nga psikologia ose një mësues i besuar."
          ]
        }
      },
      "s2_end_blame": {
        "id": "s2_end_blame",
        "title": "Fajësimi e fsheh problemin",
        "narration": "Grupi e vendos përgjegjësinë te Ardi, edhe pse nuk i ka dhënë mundësi të marrë pjesë. Kjo e përforcon përjashtimin dhe e bën më të vështirë që situata të zgjidhet.",
        "ending": {
          "reflection": "Mos ia atribuoni dikujt mungesën e kontributit pa parë nëse i është dhënë mundësia të marrë pjesë. Prano faktet dhe kërko një mënyrë të drejtë për ta rregulluar situatën.",
          "saferNextSteps": [
            "Mos e përforco sjelljen e dëmshme.",
            "Dëgjo personin dhe respekto privatësinë e tij.",
            "Kërko mbështetje nga psikologia ose një mësues i besuar."
          ]
        }
      },
      "s2_end_support": {
        "id": "s2_end_support",
        "title": "Edhe dëshmitari mund të ndryshojë rrjedhën",
        "narration": "Ti e pranon se heshtja jote nuk ndihmoi dhe propozon një mënyrë konkrete për ta përfshirë Ardin. Mësuesi mund të ndihmojë që detyrat dhe komunikimi të jenë të qarta për të gjithë.",
        "ending": {
          "reflection": "Nuk duhet të jesh udhëheqës i grupit për të bërë një ndryshim. Mund të vësh re përjashtimin dhe të kërkosh një zgjidhje të drejtë.",
          "saferNextSteps": [
            "Mos e përforco sjelljen e dëmshme.",
            "Dëgjo personin dhe respekto privatësinë e tij.",
            "Kërko mbështetje nga psikologia ose një mësues i besuar."
          ]
        }
      },
      "s2_end_isolation": {
        "id": "s2_end_isolation",
        "title": "Përjashtimi mbetet i pazgjidhur",
        "narration": "Askush nuk e sqaron situatën dhe Ardi mbetet pa informacion. Mungesa e reagimit nuk e krijon e vetme problemin, por humbet një mundësi për ta ndaluar përjashtimin.",
        "ending": {
          "reflection": "Nëse ndërhyrja e drejtpërdrejtë të duket e vështirë, kërko mbështetje nga mësuesi ose fol privatisht me personin që po përjashtohet.",
          "saferNextSteps": [
            "Mos e përforco sjelljen e dëmshme.",
            "Dëgjo personin dhe respekto privatësinë e tij.",
            "Kërko mbështetje nga psikologia ose një mësues i besuar."
          ]
        }
      },
      "s2_end_belonging": {
        "id": "s2_end_belonging",
        "title": "Përfshirje me respekt",
        "narration": "Ardi shpjegon se mund të përgatisë një pjesë të hulumtimit dhe të prezantojë një nga temat. Grupi bie dakord për detyrat dhe e informon për afatet. Këtë herë ai merr pjesë në mënyrë të barabartë.",
        "ending": {
          "reflection": "Përfshirja funksionon kur personi dëgjohet dhe ka mundësi reale të kontribuojë. Pyetja dhe dëgjimi janë më të dobishme se vendimmarrja në emër të tij.",
          "saferNextSteps": [
            "Mos e përforco sjelljen e dëmshme.",
            "Dëgjo personin dhe respekto privatësinë e tij.",
            "Kërko mbështetje nga psikologia ose një mësues i besuar."
          ]
        }
      },
      "s2_end_token": {
        "id": "s2_end_token",
        "title": "Të jesh në listë nuk mjafton",
        "narration": "Ardi është formalisht në grup, por nuk ka informacion dhe as rol domethënës. Përfshirja vetëm në dukje nuk e zgjidh problemin.",
        "ending": {
          "reflection": "Mos e ngatërro praninë me pjesëmarrjen. Jep informacion, dëgjo mendimin e personit dhe ndaj përgjegjësitë në mënyrë të drejtë.",
          "saferNextSteps": [
            "Mos e përforco sjelljen e dëmshme.",
            "Dëgjo personin dhe respekto privatësinë e tij.",
            "Kërko mbështetje nga psikologia ose një mësues i besuar."
          ]
        }
      }
    }
  },
  {
    "id": "klasa",
    "title": "Kur e gjithë klasa qesh",
    "category": "Bullizëm verbal",
    "shortDescription": "Komentet poshtëruese përsëriten gjatë prezantimeve. Ti je një nga personat që e sheh situatën.",
    "startNodeId": "s3_start",
    "nodes": {
      "s3_start": {
        "id": "s3_start",
        "title": "Si reagon në atë moment?",
        "narration": "Gjatë një prezantimi, Dionit i ndërpresin fjalën dhe disa nxënës komentojnë mënyrën si flet. Disa qeshin, ndërsa të tjerët shikojnë në heshtje. Kjo ka ndodhur edhe në prezantimet e mëparshme. Ti je në klasë dhe e kupton se nuk është më një koment i rastësishëm.",
        "choices": [
          {
            "id": "0",
            "label": "Qesh bashkë me të tjerët dhe vazhdoj të shoh prezantimin.",
            "nextNodeId": "s3_laugh"
          },
          {
            "id": "1",
            "label": "Ndërhyj me qetësi: “Lëreni të përfundojë. Komentet nuk po ndihmojnë.”",
            "nextNodeId": "s3_boundary"
          },
          {
            "id": "2",
            "label": "Nuk flas para klasës, por vendos të flas me Dionin pas orës.",
            "nextNodeId": "s3_private"
          }
        ]
      },
      "s3_laugh": {
        "id": "s3_laugh",
        "title": "Çfarë mund të bësh për ta korrigjuar reagimin tënd?",
        "narration": "Pas orës, komentet vazhdojnë. Dion nuk dëshiron të prezantojë përsëri. Ti kupton se reagimi yt me të qeshur e bëri situatën të dukej e pranueshme për grupin.",
        "choices": [
          {
            "id": "0",
            "label": "I kërkoj falje Dionit pa justifikime dhe i them se do të kërkoj ndihmë që komentet të ndalen.",
            "nextNodeId": "s3_end_apology"
          },
          {
            "id": "1",
            "label": "Bëj sikur nuk ndodhi asgjë dhe vazhdoj të qesh kur të tjerët komentojnë.",
            "nextNodeId": "s3_end_laugh"
          }
        ]
      },
      "s3_boundary": {
        "id": "s3_boundary",
        "title": "Si vazhdon?",
        "narration": "Komentet ndalen për momentin, por një nxënës të thotë se po e merr situatën shumë seriozisht. Ti mund të ruash qetësinë dhe të mos e kthesh ndërhyrjen në një debat tjetër.",
        "choices": [
          {
            "id": "0",
            "label": "Përsëris qetësisht se të gjithë duhet të kenë mundësi të flasin dhe njoftoj mësuesin pas orës.",
            "nextNodeId": "s3_end_boundary"
          },
          {
            "id": "1",
            "label": "Filloj t'i fyej ata që komentuan.",
            "nextNodeId": "s3_end_escalation"
          }
        ]
      },
      "s3_private": {
        "id": "s3_private",
        "title": "Çfarë është më e dobishme tani?",
        "narration": "Pas orës, Dion të thotë se komentet ndodhin prej disa javësh dhe se tani përpiqet të shmangë prezantimet. Ti e dëgjon dhe nuk i kërkon të tregojë më shumë se sa dëshiron.",
        "choices": [
          {
            "id": "0",
            "label": "E pyes çfarë do ta ndihmonte dhe i ofroj ta shoqëroj te psikologia ose mësuesi.",
            "nextNodeId": "s3_end_private_support"
          },
          {
            "id": "1",
            "label": "I premtoj se nuk do t'i tregoj askujt, edhe nëse situata vazhdon.",
            "nextNodeId": "s3_end_secret"
          }
        ]
      },
      "s3_end_apology": {
        "id": "s3_end_apology",
        "title": "Pranoje dhe korrigjoje",
        "narration": "Dion e dëgjon kërkimfaljen tënde. Kjo nuk e zhbën përvojën e tij, por tregon se e kupton ndikimin e veprimit tënd. Ti vendos të mos e përforcosh më talljen dhe të kërkosh ndihmë.",
        "ending": {
          "reflection": "Një kërkimfalje ka kuptim kur shoqërohet me ndryshim të sjelljes. Mos kërko që personi tjetër të të falë menjëherë.",
          "saferNextSteps": [
            "Mos e përforco sjelljen e dëmshme.",
            "Dëgjo personin dhe respekto privatësinë e tij.",
            "Kërko mbështetje nga psikologia ose një mësues i besuar."
          ]
        }
      },
      "s3_end_laugh": {
        "id": "s3_end_laugh",
        "title": "E qeshura e përforcon talljen",
        "narration": "Komentet vazhdojnë dhe Dion shmang pjesëmarrjen. Të qeshurit nuk ishte vetëm një reagim i momentit; në atë grup, ai u kuptua si mbështetje për sjelljen.",
        "ending": {
          "reflection": "Mund të mos jesh personi që nisi talljen, por reagimi yt mund ta përforcojë. Herën tjetër mos u bashko dhe kërko një mënyrë të sigurt për të mbështetur personin.",
          "saferNextSteps": [
            "Mos e përforco sjelljen e dëmshme.",
            "Dëgjo personin dhe respekto privatësinë e tij.",
            "Kërko mbështetje nga psikologia ose një mësues i besuar."
          ]
        }
      },
      "s3_end_boundary": {
        "id": "s3_end_boundary",
        "title": "Vendos kufi pa e përshkallëzuar",
        "narration": "Ti nuk e kthen situatën në ofendime. E bën të qartë se komentet duhet të ndalen dhe njofton një mësues që mund të ndihmojë në trajtimin e sjelljes së përsëritur.",
        "ending": {
          "reflection": "Një ndërhyrje e qetë dhe e sigurt mund të vendosë kufi. Nuk ke pse ta zgjidhësh vetë situatën; kërko ndihmë kur sjellja vazhdon.",
          "saferNextSteps": [
            "Mos e përforco sjelljen e dëmshme.",
            "Dëgjo personin dhe respekto privatësinë e tij.",
            "Kërko mbështetje nga psikologia ose një mësues i besuar."
          ]
        }
      },
      "s3_end_escalation": {
        "id": "s3_end_escalation",
        "title": "Ofendimi nuk e zgjidh ofendimin",
        "narration": "Debati kthehet në një shkëmbim fyerjesh. Vëmendja largohet nga sjellja që duhej ndalur dhe situata bëhet më e tensionuar.",
        "ending": {
          "reflection": "Është e kuptueshme të zemërohesh kur sheh padrejtësi, por hakmarrja me fyerje mund ta përkeqësojë situatën. Vendos kufi dhe kërko mbështetje.",
          "saferNextSteps": [
            "Mos e përforco sjelljen e dëmshme.",
            "Dëgjo personin dhe respekto privatësinë e tij.",
            "Kërko mbështetje nga psikologia ose një mësues i besuar."
          ]
        }
      },
      "s3_end_private_support": {
        "id": "s3_end_private_support",
        "title": "Dëgjo dhe ofro mbështetje",
        "narration": "Dion pranon të flasë me një të rritur të besuar. Ti e shoqëron, nëse ai dëshiron, dhe i tregon mësuesit se komentet janë përsëritur.",
        "ending": {
          "reflection": "Mbështetja private është e vlefshme. Pyet personin çfarë i nevojitet dhe mos merr vendime në emër të tij pa e përfshirë.",
          "saferNextSteps": [
            "Mos e përforco sjelljen e dëmshme.",
            "Dëgjo personin dhe respekto privatësinë e tij.",
            "Kërko mbështetje nga psikologia ose një mësues i besuar."
          ]
        }
      },
      "s3_end_secret": {
        "id": "s3_end_secret",
        "title": "Mos premto fshehtësi absolute",
        "narration": "Ti dëshiron ta mbrosh Dionin, por premtimi se nuk do t'i tregosh askujt mund ta lërë pa ndihmën që i nevojitet. Kur një situatë vazhdon ose dikush nuk ndihet i sigurt, përfshirja e një të rrituri të besuar është e rëndësishme.",
        "ending": {
          "reflection": "Respekto privatësinë, por mos premto ta mbash sekret diçka që mund të kërkojë ndihmë. Shpjego se do ta përfshish vetëm personin e duhur për ta trajtuar situatën.",
          "saferNextSteps": [
            "Mos e përforco sjelljen e dëmshme.",
            "Dëgjo personin dhe respekto privatësinë e tij.",
            "Kërko mbështetje nga psikologia ose një mësues i besuar."
          ]
        }
      }
    }
  }
];
