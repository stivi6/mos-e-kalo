export const historySources = [
  {
    id: "unesco-day",
    name: "UNESCO — International Day against Violence and Bullying at School, including Cyberbullying",
    url: "https://www.unesco.org/en/days/against-school-violence-and-bullying",
    description: "Data vjetore, qëllimi dhe shtrirja e ditës ndërkombëtare.",
  },
  {
    id: "unesco-approval",
    name: "UNESCO — New international day against violence and bullying at school",
    url: "https://www.unesco.org/en/articles/new-international-day-against-violence-and-bullying-school-including-cyberbullying",
    description: "Miratimi i ditës në vitin 2019 dhe Konferenca e Përgjithshme e UNESCO-s.",
  },
  {
    id: "unesco-first-day",
    name: "UNESCO — First International Day in 2020",
    url: "https://www.unesco.org/en/articles/unesco-selebrates-first-international-day-against-violence-and-bullying-school-including",
    description: "Shënimi i parë ndërkombëtar më 5 nëntor 2020.",
  },
  {
    id: "olweus",
    name: "Dan Olweus (1931–2020) — PubMed",
    url: "https://pubmed.ncbi.nlm.nih.gov/34780220/",
    description: "Kontributi i Dan Olweus dhe historia e kërkimit të tij.",
  },
  {
    id: "olweus-history",
    name: "Clemson Olweus — OBPP Funding Toolkit (PDF)",
    url: "https://clemsonolweus.org/documents/OBPP%20Funding%20Toolkit.pdf",
    description: "Historia e programit Olweus dhe botimi suedez i vitit 1973.",
  },
  {
    id: "norway",
    name: "Norwegian Government — NOU 2015:2, chapter 3",
    url: "https://www.regjeringen.no/no/dokumenter/nou-2015-2/id2400765/?ch=3",
    description: "Fushata norvegjeze dhe zhvillimi i punës për parandalim.",
  },
  {
    id: "olweus-program",
    name: "Olweus Bullying Prevention Program",
    url: "https://clemsonolweus.org/",
    description: "Qasja e programit të parandalimit në nivelin e gjithë shkollës.",
  },
] as const;

export type HistorySourceId = (typeof historySources)[number]["id"];

export const historyMilestones: {
  year: string;
  title: string;
  summary: string;
  detail: string;
  sourceId: HistorySourceId;
  additionalSourceIds?: HistorySourceId[];
}[] = [
  {
    year: "1970",
    title: "Nis një studim i gjerë",
    summary: "Dan Olweus nis studimin shkencor të bullizmit dhe marrëdhënieve mes nxënësve.",
    detail:
      "Studimi i tij përfshiu rreth 1 000 djem në Stokholm të Suedisë dhe ndihmoi që sjelljet bullizuese të shqyrtoheshin si dukuri më vete.",
    sourceId: "olweus",
  },
  {
    year: "1973",
    title: "Olweus boton në Suedi",
    summary: "Puna e Olweus mbi bullizmin dhe marrëdhëniet mes nxënësve botohet në Suedi.",
    detail:
      "Botimi suedez i vitit 1973 është pjesë e historisë së kërkimit të Olweus dhe të zhvillimit të programit të tij të parandalimit.",
    sourceId: "olweus-history",
  },
  {
    year: "1978",
    title: "Studimi botohet në Shtetet e Bashkuara",
    summary:
      "Libri i Olweus botohet në anglisht me titullin Aggression in the Schools: Bullies and Whipping Boys.",
    detail:
      "Botimi e çoi punën e tij përtej Skandinavisë dhe ndihmoi në zgjerimin e diskutimit për bullizmin në shkolla.",
    sourceId: "olweus",
  },
  {
    year: "1983–1984",
    title: "Norvegjia nis fushatën e parë kombëtare.",
    summary:
      "Gjatë vitit shkollor 1983–1984 u zhvillua fushata e parë kombëtare kundër bullizmit në Norvegji. Shkollave iu dërgua broshura informuese Mobbing – bakgrunn og tiltak, e përgatitur nga Dan Olweus dhe Erling Roland.",
    detail:
      "Programi i Parandalimit të Bullizmit Olweus u zhvillua në vitin 1983. Referenca historike e programit dokumenton edhe botimin suedez të vitit 1973.",
    sourceId: "norway",
    additionalSourceIds: ["olweus-history"],
  },
  {
    year: "2019",
    title: "UNESCO miraton Ditën Ndërkombëtare",
    summary:
      "Shtetet anëtare të UNESCO-s miratojnë ditën kundër dhunës dhe bullizmit në shkollë, përfshirë atë kibernetik.",
    detail:
      "Vendimi u miratua gjatë Sesionit të 40-të të Konferencës së Përgjithshme të UNESCO-s për të nxitur ndërgjegjësimin dhe bashkëpunimin ndërkombëtar.",
    sourceId: "unesco-approval",
  },
  {
    year: "2020",
    title: "Shënimi i parë ndërkombëtar",
    summary: "Dita shënohet për herë të parë më 5 nëntor 2020.",
    detail: "Dita mbahet çdo vit të enjten e parë të nëntorit. Në vitin 2026, ajo bie më 5 nëntor.",
    sourceId: "unesco-first-day",
  },
  {
    year: "SOT",
    title: "Ndërgjegjësimi përfshin edhe hapësirën online",
    summary: "Bullizmi kibernetik është pjesë e diskutimit për sigurinë dhe mirëqenien në shkollë.",
    detail:
      "Mesazhet fyese, publikimet poshtëruese dhe përjashtimi në internet mund ta zgjasin bullizmin përtej mureve dhe orarit të shkollës.",
    sourceId: "unesco-day",
  },
];
