import type { SourceId } from "./sources";

/**
 * All slide copy, chart data and speaker notes live here.
 * Slide components read from this file and never hard-code words or numbers.
 */

export type SlideId =
  | "title"
  | "market"
  | "owners"
  | "builders"
  | "broken"
  | "journey"
  | "listen"
  | "ask"
  | "try"
  | "launch"
  | "clinic"
  | "trust"
  | "hologram"
  | "whyNow"
  | "learned"
  | "benefits"
  | "standards"
  | "close"
  | "sources";

/** Where the falling mist sits on the 1920 by 1080 stage for a slide. */
export type MistSetting = { x: number; width: number; strength: number };

export type SlideMeta = {
  id: SlideId;
  name: string;
  section: string;
  rubric?: string;
  steps: number;
  sources: SourceId[];
  mist: MistSetting;
  notes: string[];
};

/** The owner Pip visits first. Used in labels across the demo slides. */
export const ownerName = "Marisol";

export const slides: SlideMeta[] = [
  {
    id: "title",
    name: "Pip",
    section: "The idea",
    rubric: "Original",
    steps: 1,
    sources: ["promptBrief"],
    mist: { x: 1360, width: 640, strength: 1 },
    notes: [
      "Hi, we're the team behind Pip. The prompt asked what comes after typing a request into an AI builder.",
      "Our answer is a builder that comes to you. Pip is a character who lives in a sheet of fog at the counter. It travels from workplace to workplace, listens to how each one runs and builds the app that place needs.",
      "If the fog screen is running, wave a hand through Pip now. It gets a laugh and it shows the screen is only mist.",
    ],
  },
  {
    id: "market",
    name: "Who it's for",
    section: "Who it's for",
    rubric: "Built for a specific person",
    steps: 1,
    sources: [],
    mist: { x: 1760, width: 240, strength: 0.45 },
    notes: [
      "Meet Marisol. She owns a corner market in Boyle Heights. She takes deliveries at 6 a.m. and is at the register until 10 at night.",
      "Every morning a local bakery drops off four dozen pieces of pan dulce. It sells out by 10, and people keep asking for it all day.",
      "Point at the timeline. Every dot is a request someone said out loud: a customer asking her to save conchas, a staff member asking where a reservation went. The hollow dot is the reservation that got lost on a receipt.",
      "Nobody writes any of this down, and Marisol has no time to sit and describe an app. That is who Pip is for: workplaces too busy running to stop and build.",
      "Marisol is a persona built from our interviews. Swap in the real details you heard before the pitch.",
    ],
  },
  {
    id: "owners",
    name: "What owners told us",
    section: "Who it's for",
    rubric: "Believable",
    steps: 1,
    sources: [],
    mist: { x: 180, width: 220, strength: 0.4 },
    notes: [
      "Judges will ask how we know workplaces want this. This slide is the answer.",
      "Replace the placeholders in src/content/config.ts with two or three real quotes from shop owners, clinic staff or other busy workplaces you talked to, with their permission.",
      "Read one quote out loud. Pick the one that sounds the most like Marisol.",
    ],
  },
  {
    id: "builders",
    name: "Who gets to build",
    section: "Who Pip allows to build",
    rubric: "Accessible to non-engineers",
    steps: 1,
    sources: ["sbaNation2025", "blsOoh", "sbaMetroWest2025"],
    mist: { x: 1830, width: 150, strength: 0.4 },
    notes: [
      "There are 36.2 million small businesses in the U.S., per the SBA's 2025 profiles, which use 2022 Census data. The BLS counts about 1.7 million software developers in 2025.",
      "That works out to about 21 small businesses for every developer. That ratio is our own division of the two published numbers.",
      "Closer to Marisol: in the Los Angeles metro, 91.4% of the 453,201 Hispanic-owned businesses have no employees at all. There is nobody on staff to hand the tech to.",
      "Pip is for workplaces that will never hire a developer: corner stores, clinics, salons, food banks. If people at your workplace talk about a problem, Pip can hear it and build for it.",
      "Hover a group in the chart to highlight it, or click the key to hide it.",
    ],
  },
  {
    id: "broken",
    name: "What is broken",
    section: "What is broken about building today",
    rubric: "Original",
    steps: 2,
    sources: [],
    mist: { x: 960, width: 110, strength: 0.7 },
    notes: [
      "Today's AI builders assume you have the time to stop working and the words to describe what you want. You face a blank box and you're expected to write a spec.",
      "Then you get a wall of code or a generated screen you can't reason about. Marisol's real questions get buried under fields, components and deploys.",
      "Advance. The needs are already being said out loud at the register, every day. Pip hears them while Marisol keeps working, so she never has to write the prompt.",
    ],
  },
  {
    id: "journey",
    name: "How Pip works",
    section: "What Pip makes easier",
    rubric: "Understandable through the product itself",
    steps: 1,
    sources: [],
    mist: { x: 960, width: 1500, strength: 0.25 },
    notes: [
      "Pip works in five steps. It listens to the workplace for about a week, asks the owner about what it heard, tests the app by playing a customer, launches it and then moves on to the next workplace.",
      "The next four slides walk through the first four steps at Marisol's market. After that, we follow Pip to its next stop.",
    ],
  },
  {
    id: "listen",
    name: "Listen",
    section: "What Pip makes easier",
    rubric: "Accessible to non-engineers",
    steps: 2,
    sources: [],
    mist: { x: 470, width: 560, strength: 0.9 },
    notes: [
      "Pip sits at the counter on its fog screen for a week. Marisol doesn't stop to talk to it. She just runs the shop.",
      "These are the kinds of things Pip hears. The Spanish line means: can you save me six for tomorrow?",
      "Advance. At the end of the week, Pip shows Marisol what it noticed. It keeps patterns and counts, not recordings or names. Marisol can correct any line before anything gets built.",
      "The counts on this slide are demo data. Swap in what your team actually observed if you ran a real listening session.",
    ],
  },
  {
    id: "ask",
    name: "Ask",
    section: "What Pip makes easier",
    rubric: "Useful",
    steps: 1,
    sources: [],
    mist: { x: 330, width: 460, strength: 0.85 },
    notes: [
      "This slide is live. Click the answers and watch the shop page change.",
      "Every question Pip asks starts from something it heard. Marisol never has to think of a feature. She answers questions about her own shop.",
      "The daily limit is the best example. 'People asked after it sold out 14 times. How many can you set aside?' sounds like a business question, and it quietly builds inventory logic.",
      "Every change flies from Pip's hand into the app, so nothing is hidden behind code.",
    ],
  },
  {
    id: "try",
    name: "Try",
    section: "What Pip makes easier",
    rubric: "Original",
    steps: 3,
    sources: [],
    mist: { x: 400, width: 480, strength: 0.85 },
    notes: [
      "Before launch, Pip tests the app for Marisol by pretending to be a customer. We call the customer Doña Lupe.",
      "Advance. Lupe finds the gap: she is allergic to nuts and there was nowhere to tell Marisol.",
      "Advance. Marisol says to add a box for notes. Testing becomes a story she can follow instead of a QA step.",
    ],
  },
  {
    id: "launch",
    name: "Launch",
    section: "What Pip makes easier",
    rubric: "Believable",
    steps: 2,
    sources: [],
    mist: { x: 300, width: 380, strength: 0.6 },
    notes: [
      "Marisol says one word and the page goes live with a QR code she can tape to the register.",
      "Advance. Reservations arrive live, and the app adds them up into tomorrow's order for the bakery. The reservations shown here are demo data.",
      "If the room can reach the demo, ask everyone to scan the code and reserve now. Their reservations show up on the list during the pitch.",
    ],
  },
  {
    id: "clinic",
    name: "Move on",
    section: "What Pip makes newly possible",
    rubric: "Useful",
    steps: 2,
    sources: [],
    mist: { x: 1500, width: 360, strength: 0.6 },
    notes: [
      "Once the market's app is running, Pip moves on. Its next stop is a family clinic a few blocks away, where Janelle runs the front desk.",
      "Same listening, different workplace. Pip hears patients asking how much longer they'll wait, and staff calling the pharmacy back about refills.",
      "Advance. Pip builds two different tools here: a waitlist that texts patients when they're next, and a board that shows where every refill stands.",
      "In a clinic, Pip leaves health details out of what it learns. It keeps patterns, never patient names. Janelle is an illustrative persona.",
    ],
  },
  {
    id: "trust",
    name: "Listening in the open",
    section: "What Pip makes newly possible",
    rubric: "Believable",
    steps: 1,
    sources: [],
    mist: { x: 1800, width: 200, strength: 0.4 },
    notes: [
      "A builder that listens only works if people trust it, so we designed the rules first.",
      "Pip glows whenever it is listening, and everyone is told before it arrives. Anyone can say 'Pip, pause.' It keeps patterns, not recordings, and nothing gets built without the owner's yes.",
      "These are design rules for our prototype, not legal certifications. A real clinic deployment would need a privacy and HIPAA review, and we say so up front.",
    ],
  },
  {
    id: "hologram",
    name: "The fog screen",
    section: "What Pip makes newly possible",
    rubric: "Original",
    steps: 1,
    sources: ["fogscreenContent", "ucsbFogscreen", "fogscreenLaminar"],
    mist: { x: 820, width: 150, strength: 1 },
    notes: [
      "Pip lives on a small fog screen at the counter. A generator above makes mist so fine it feels dry, and fans on both sides hold it in a flat sheet.",
      "A projector draws Pip on the mist, and a laptop runs Pip and listens through its microphone.",
      "We gave a listening agent a body on purpose. Customers and staff can see Pip and see when it is listening, which a hidden microphone in a tablet never shows.",
      "People who build fog displays report that line drawings read better on fog than photos, so we drew Pip in lines of light.",
    ],
  },
  {
    id: "whyNow",
    name: "Why now",
    section: "Why this could only exist now",
    rubric: "Believable",
    steps: 1,
    sources: ["mdnSpeechSynthesis", "mdnSpeechRecognition"],
    mist: { x: 1840, width: 140, strength: 0.4 },
    notes: [
      "Pip needs four things to work. The browser has to hear the workplace and talk back. A model has to turn a week of overlapping conversation into a few patterns, like 'pan dulce sold out 14 times'. And the model has to make small, reliable changes in real time.",
      "Browser speech is free and instant. MDN lists speech synthesis as working across major browsers since September 2018. Speech recognition is still limited to some browsers, so our demo laptop runs Chrome.",
      "A few years ago each of these pieces needed its own team. We prototyped all of them as a student team.",
    ],
  },
  {
    id: "learned",
    name: "What we learned",
    section: "What we learned building it",
    rubric: "Believable",
    steps: 1,
    sources: [],
    mist: { x: 1720, width: 300, strength: 0.5 },
    notes: [
      "These are our starting points. Replace or sharpen them with what actually surprised your team.",
      "The biggest lesson: owners describe problems, never features. Building from what people already say out loud skips the hardest part of vibe coding.",
    ],
  },
  {
    id: "benefits",
    name: "Who else benefits",
    section: "Who benefits beyond the primary user",
    rubric: "Useful",
    steps: 1,
    sources: [],
    mist: { x: 460, width: 700, strength: 0.35 },
    notes: [
      "Marisol's staff stop hunting for reservations on receipts. Her customers, including the abuelitas who prefer Spanish and bigger text, can save their pan dulce.",
      "Neighbors who can't make it before 10 still get conchas, and local shops get tools without paying a developer.",
      "Because Pip travels, every stop makes the next one faster. A clinic, a salon or a food bank gets the same week of listening. Offer to let a judge tell Pip about their own workplace.",
    ],
  },
  {
    id: "standards",
    name: "How Pip meets the prompt",
    section: "Prompt standards",
    rubric: "All standards",
    steps: 1,
    sources: ["promptBrief"],
    mist: { x: 1850, width: 110, strength: 0.3 },
    notes: [
      "This is the map from each standard in the prompt to the place you can see it in the product. Leave it up during questions.",
    ],
  },
  {
    id: "close",
    name: "Close",
    section: "The ask",
    rubric: "Understandable through the product itself",
    steps: 1,
    sources: [],
    mist: { x: 960, width: 720, strength: 1 },
    notes: [
      "Pip doesn't wait for a prompt. It shows up, listens and builds what a workplace already says it needs.",
      "Invite the judges to walk up and tell Pip what isn't working where they work. Thank you.",
    ],
  },
  {
    id: "sources",
    name: "Sources",
    section: "Sources",
    steps: 1,
    sources: [],
    mist: { x: 1840, width: 120, strength: 0.25 },
    notes: ["Every number in the deck traces to one of these sources."],
  },
];

export const titleSlide = {
  name: "Pip",
  line: "Pip visits a workplace, listens to how it runs and builds the app it needs.",
};

export const marketSlide = {
  heading: "Marisol's corner market in Boyle Heights",
  facts: [
    { key: "Who", value: "Marisol, 47, owner" },
    { key: "Shop", value: "A corner market in Boyle Heights, Los Angeles" },
    { key: "Staff", value: "Three part-timers and one register" },
    { key: "Computer", value: "Her phone, between customers" },
    { key: "Reservations", value: "Written on the back of receipts" },
  ],
  dayStartHour: 6,
  dayEndHour: 22,
  ticks: [6, 10, 14, 18, 22],
  blocks: [
    { label: "Deliveries", from: 6, to: 8 },
    { label: "Register", from: 8, to: 22 },
  ],
  requestHours: [7.4, 8.6, 9.3, 10.1, 10.8, 11.6, 12.9, 13.7, 15.1, 16.4, 17.6, 18.8, 20.1, 21.2],
  lostRequestHour: 12.9,
  moments: [
    { hour: 6, text: "Four dozen pan dulce arrive from the bakery." },
    { hour: 12.9, text: "A reservation on a receipt gets lost." },
    { hour: 22, text: "Nobody wrote a single request down." },
  ],
  requestsLabel: "Requests said out loud at the counter",
};

export const ownersSlide = {
  heading: "What owners and staff told us",
};

export const buildersSlide = {
  heading: "Who gets to build software",
  ratio: "21",
  ratioLabel: "small businesses in the U.S. for every software developer",
  ratioNote: "Team calculation: 36.2 million divided by 1.72 million",
  dotValue: 100_000,
  dotLabel: "Each dot is 100,000",
  groups: [
    {
      id: "business",
      label: "Small businesses",
      value: 36_200_000,
      valueLabel: "36.2 million",
      detail: "2025 SBA profile, 2022 data",
      ours: true,
    },
    {
      id: "developers",
      label: "Software developers",
      value: 1_717_800,
      valueLabel: "1.7 million",
      detail: "BLS, 2025",
      ours: false,
    },
  ],
  localFigure: "91.4%",
  localText:
    "of the 453,201 Hispanic-owned businesses in the Los Angeles metro have no employees, so nobody on staff can take on the tech.",
  promise: "If people at your workplace talk about a problem, Pip can hear it and build for it.",
};

export const brokenSlide = {
  heading: "Today's builders start with a blank box",
  todayLabel: "Today",
  pipLabel: "With Pip",
  promptPlaceholder: "Describe the app you want to build",
  buriedQuestions: [
    "Can people save pan dulce before it sells out?",
    "How many can I set aside a day?",
    "Do my customers read Spanish?",
  ],
  overheard: [
    { who: "Customer", text: "Are there any conchas left?" },
    { who: "Staff", text: "Where did that reservation go?" },
    { who: "Customer", text: "¿Me guarda seis para mañana?" },
  ],
  todayCaption: "Marisol would have to leave the register to write this, and her real questions end up buried.",
  pipCaption: "Pip hears the needs at the register while Marisol keeps working.",
};

export const journeySlide = {
  heading: "Five steps from a busy shop floor to a working app",
  steps: [
    { id: "listen", name: "Listen", text: "Pip spends a week in the workplace and hears what people keep asking for." },
    { id: "ask", name: "Ask", text: "Pip asks the owner one plain question at a time about what it heard." },
    { id: "try", name: "Try", text: "Pip plays a customer and finds what is missing." },
    { id: "launch", name: "Launch", text: "The owner says the word and gets a live page with a QR code." },
    { id: "move", name: "Move on", text: "Pip travels to the next workplace and checks back in a month." },
  ],
};

export const listenSlide = {
  heading: "Pip listens while the shop runs",
  overheard: [
    { who: "Customer", text: "Are there any conchas left? It's only ten o'clock." },
    { who: "Staff", text: "Someone left a reservation on a receipt and I can't find it." },
    { who: "Customer", text: "¿Me puede guardar seis para mañana?" },
    { who: ownerName, text: "I only get four dozen a day. I never know if it's enough." },
  ],
  noticedTitle: "What I noticed this week",
  noticed: [
    { key: "Customers", value: "Asked for pan dulce after it sold out 14 times" },
    { key: "Staff", value: "Wrote reservations on receipts, and 3 went missing" },
    { key: "Language", value: "About half of the requests were in Spanish" },
    { key: "Need", value: "A way to save pan dulce before it sells out" },
  ],
  confirm: `${ownerName}, can I ask you about this?`,
  demoLabel: "Week one at the market, demo data",
};

export type AskChoice = { id: string; label: string; builds: string };
export type AskQuestion = {
  id: string;
  topic: string;
  ask: string;
  reason: string;
  choices: AskChoice[];
  defaultChoice: string;
};

export const askSlide = {
  heading: "Pip asks about what it heard",
  answerLabel: `${ownerName} answers`,
  buildsLabel: "Pip builds",
  questions: [
    {
      id: "limit",
      topic: "Daily limit",
      ask: "People asked after the pan dulce sold out 14 times. How many conchas can you set aside each day?",
      reason: "I'll stop taking reservations before you run out.",
      defaultChoice: "48",
      choices: [
        { id: "24", label: "24", builds: "Reservations close after 24 conchas a day." },
        { id: "48", label: "48", builds: "Reservations close after 48 conchas a day." },
        { id: "96", label: "96", builds: "Reservations close after 96 conchas a day." },
      ],
    },
    {
      id: "pay",
      topic: "Payment",
      ask: "Three reservations went missing this week. Should people pay when they reserve?",
      reason: "Paying ahead means fewer no-shows. Paying at pickup keeps it simple.",
      defaultChoice: "pickup",
      choices: [
        { id: "pickup", label: "At pickup", builds: "Reservations hold the bread, and payment happens at the register." },
        { id: "card", label: "Card, when they reserve", builds: "Checkout takes a card before the reservation goes through." },
      ],
    },
    {
      id: "language",
      topic: "Language",
      ask: "About half the requests I heard were in Spanish. Which language should the page use?",
      reason: "I'll write every button in the language people use at your register.",
      defaultChoice: "both",
      choices: [
        { id: "en", label: "English", builds: "The page is written in English." },
        { id: "es", label: "Español", builds: "The page is written in Spanish." },
        { id: "both", label: "Both", builds: "The page opens in Spanish with a switch to English." },
      ],
    },
    {
      id: "size",
      topic: "Text size",
      ask: "Some regulars held the price tags close to read them. Should the text be bigger?",
      reason: "Bigger text and buttons help anyone reading without glasses.",
      defaultChoice: "large",
      choices: [
        { id: "regular", label: "Regular", builds: "Text uses the regular size." },
        { id: "large", label: "Bigger", builds: "Text and buttons are a size larger." },
      ],
    },
  ] satisfies AskQuestion[],
};

export const shopCopy = {
  en: {
    shopName: "Mercado Marisol",
    tagline: "Save your pan dulce before it sells out",
    item: "Conchas",
    price: "$1.75 each",
    left: (count: number) => `${count} left today`,
    soldOut: "Sold out for today",
    order: "Reserve",
    payCard: "Pay with card",
    payPickup: "Pay at pickup",
    notes: "Notes for Marisol (allergies, pickup time)",
    switchTo: "Español",
  },
  es: {
    shopName: "Mercado Marisol",
    tagline: "Aparta tu pan dulce antes de que se acabe",
    item: "Conchas",
    price: "$1.75 cada una",
    left: (count: number) => `Quedan ${count} hoy`,
    soldOut: "Agotado por hoy",
    order: "Apartar",
    payCard: "Pagar con tarjeta",
    payPickup: "Pagar al recoger",
    notes: "Notas para Marisol (alergias, hora de recoger)",
    switchTo: "English",
  },
} as const;

/** Conchas already reserved today in the demo, so the counter has something to count down from. */
export const demoReservedToday = 30;

export const trySlide = {
  heading: "Pip tests the app by playing a customer",
  persona: "Pip, playing Doña Lupe",
  lines: [
    { who: "lupe", text: "I'd like a dozen conchas for Sunday morning." },
    { who: "lupe", text: "I'm allergic to nuts, and there was nowhere to tell you." },
    { who: "owner", text: "Add a box for notes." },
  ],
  fixed: "Every reservation now has a notes box, and allergies print on tomorrow's bakery order.",
  gapLabel: "Missing: a place for notes",
};

export type DemoOrder = { name: string; item: string; count: number; pickup: string; note?: string };

export const launchSlide = {
  heading: "Launch takes one word",
  ownerSays: "Launch it.",
  liveLabel: "Live",
  scanText: "Scan to reserve from the live demo",
  ordersTitle: "Reservations",
  listTitle: "Tomorrow's order to the bakery",
  demoLabel: "Demo data",
  orders: [
    { name: "Lupe M.", item: "Conchas", count: 12, pickup: "Sun 8:00", note: "Nut allergy" },
    { name: "Marco R.", item: "Rosca", count: 1, pickup: "Sat 10:30" },
    { name: "Ana P.", item: "Tres leches", count: 1, pickup: "Sat 2:00", note: "Write 'Feliz cumple, Mateo'" },
    { name: "Sofía G.", item: "Conchas", count: 6, pickup: "Sun 9:15" },
    { name: "Don Beto", item: "Orejas", count: 8, pickup: "Sat 7:30" },
    { name: "Carla V.", item: "Conchas", count: 12, pickup: "Sat 9:00" },
  ] satisfies DemoOrder[],
};

export const clinicSlide = {
  heading: "Next stop is a family clinic",
  from: "Mercado Marisol",
  to: "Family clinic",
  person: "Janelle runs the front desk",
  heardTitle: "What Pip hears",
  heard: [
    { who: "Patient", text: "How much longer? Can I wait in my car?" },
    { who: "Front desk", text: "Did that refill go through? Let me call you back." },
    { who: "Front desk", text: "We lose half the morning hunting for lab faxes." },
  ],
  builtTitle: "What Pip builds",
  built: [
    { id: "waitlist", name: "Text-me waitlist", text: "Patients get a text when they're next, so they can wait in their car." },
    { id: "refills", name: "Refill board", text: "Staff see where every refill stands without calling the pharmacy back." },
  ],
  privacy: "In a clinic, Pip leaves health details out of what it learns. It keeps patterns, never patient names.",
};

export const trustSlide = {
  heading: "Pip listens in the open",
  rules: [
    { id: "visible", rule: "You can see it listening", detail: "Pip glows on the fog screen whenever its microphone is on." },
    {
      id: "consent",
      rule: "Everyone is told first",
      detail: "Signs go up at the door, staff agree before the visit, and anyone can say “Pip, pause.”",
    },
    {
      id: "patterns",
      rule: "It keeps patterns, not recordings",
      detail: "Pip remembers that pan dulce sold out 14 times, not who asked.",
    },
    { id: "owner", rule: "The owner decides", detail: "Nothing gets built without a yes, and every tool can be switched off." },
    { id: "health", rule: "Health details stay out", detail: "In clinics, Pip ignores health information by default." },
    { id: "leaves", rule: "The listening leaves with Pip", detail: "When the visit ends, the microphone goes too. Only the tools stay." },
  ],
  caveat: "These are design rules for our prototype. A real clinic deployment would need a privacy and HIPAA review.",
};

export const hologramSlide = {
  heading: "Pip lives in a sheet of fog",
  parts: [
    { id: "generator", text: "A fog generator makes mist so fine it feels dry.", source: "fogscreenContent" },
    { id: "curtains", text: "Fans on both sides sandwich the mist so it falls flat.", source: "ucsbFogscreen" },
    { id: "projector", text: "A projector behind the sheet draws Pip on the mist.", source: undefined },
    {
      id: "hand",
      text: "A hand passes right through, because the screen is only air and water.",
      source: "fogscreenLaminar",
    },
    { id: "laptop", text: "A laptop runs Pip and listens through its microphone.", source: undefined },
  ],
  lineNote: "Line drawings read better on fog than photos, so Pip is drawn in lines of light.",
};

export const whyNowSlide = {
  heading: "Why Pip could only exist now",
  pipeline: [
    { id: "talk", name: "The shop talks", detail: '"Are there any conchas left?"' },
    { id: "hear", name: "The browser hears it", detail: "Speech recognition and speech synthesis" },
    { id: "structure", name: "A model finds the patterns", detail: "Who asked, for what and how often" },
    { id: "edit", name: "Small edits land live", detail: "One reliable change per answer" },
  ],
  facts: [
    {
      figure: "2018",
      text: "Speech synthesis has worked across major browsers since September 2018.",
      source: "mdnSpeechSynthesis",
    },
    {
      figure: "Chrome",
      text: "Speech recognition still works only in some browsers, so the demo laptop runs Chrome.",
      source: "mdnSpeechRecognition",
    },
  ],
};

export const learnedSlide = {
  heading: "What building Pip taught us",
  lessons: [
    { icon: "calm", text: "Owners describe problems, never features. Listening first skips the hardest part." },
    { icon: "mirror", text: "Showing what Pip noticed before building did more for trust than any explanation." },
    { icon: "customer", text: "The pretend customer catching a missing notes box was our most useful AI moment." },
    { icon: "character", text: "People relaxed once they could see when Pip was listening." },
  ],
};

export const benefitsSlide = {
  heading: "Who else benefits",
  center: ownerName,
  rings: [
    { id: "helpers", who: "Her staff", text: "work from one list instead of receipts." },
    { id: "customers", who: "Her customers", text: "reserve in Spanish or English, with bigger text." },
    {
      id: "neighbors",
      who: "The neighborhood",
      text: "gets pan dulce after 10, and local shops get tools without paying a developer.",
    },
  ],
  othersTitle: "Pip's next stops",
  others: ["A family clinic", "A neighborhood salon", "A food-bank shift coordinator"],
};

export const standardsSlide = {
  heading: "How Pip meets the prompt",
  rows: [
    {
      standard: "Original",
      where: "The AI comes to the workplace and listens, so nobody writes a prompt, and it tests the app by playing a customer.",
    },
    { standard: "Useful", where: "Pip builds from needs people repeated all week, with a daily limit and a bakery list." },
    {
      standard: "Believable",
      where: "It works: the room reserves from their phones during the demo, and the listening rules are spelled out.",
    },
    {
      standard: "Accessible to non-engineers",
      where: "Marisol only answers plain questions about her own shop, in her own words.",
    },
    {
      standard: "Understandable through the product",
      where: 'The five steps and "What I noticed" explain the idea without slides.',
    },
    { standard: "Built for a specific person", where: "Marisol's corner market in Boyle Heights, then the clinic down the street." },
  ],
};

export const closeSlide = {
  heading: "Let Pip listen to your workplace",
  scanText: "Try the demo",
};

export const sourcesSlide = {
  heading: "Sources",
  note: "Ratios marked as team calculations divide two published figures. Marisol and Janelle are personas based on our interviews. Demo counts and reservations are demo data.",
};
