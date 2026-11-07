import type { SourceId } from "./sources";

/**
 * All slide copy, chart data and speaker notes live here.
 * Slide components read from this file and never hard-code words or numbers.
 */

export type SlideId =
  | "title"
  | "hook"
  | "gaps"
  | "problems"
  | "rosa"
  | "owners"
  | "builders"
  | "ask"
  | "reverse"
  | "journey"
  | "say"
  | "shape"
  | "try"
  | "launch"
  | "demo"
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
  /** Optional mist position for each build step, for slides where the mist itself moves the story. */
  mistByStep?: MistSetting[];
  notes: string[];
};

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
      "Our answer is a character you talk to. Pip lives in a sheet of fog on stage, and by the end of this pitch it will have built a real ordering page for a real kind of shop.",
      "If the fog screen is running, wave a hand through Pip now. It gets a laugh and it shows the screen is only mist.",
    ],
  },
  {
    id: "hook",
    name: "Hook",
    section: "What is broken about building today",
    rubric: "Original",
    steps: 2,
    sources: [],
    mist: { x: 1420, width: 420, strength: 0.6 },
    notes: [
      "Imagine you're building your first app. What would get you further?",
      "A blank box asking you to describe everything you need?",
      "Advance. Or a conversation that helps you discover what you've left out?",
    ],
  },
  {
    id: "rosa",
    name: "Who it's for",
    section: "Who it's for",
    rubric: "Built for a specific person",
    steps: 1,
    sources: [],
    mist: { x: 1760, width: 240, strength: 0.45 },
    notes: [
      "Now think about what that means for a small business owner. Meet Rosa. She owns a two-oven panadería in Boyle Heights. She is at the ovens by 4 a.m. and at the counter from 7.",
      "She knows how much bread she can promise each morning, but her customers need to know what's available, and her helpers need to know what to bake.",
      "Between batches she answers Instagram DMs and texts from people reserving conchas, a rosca or a birthday tres leches. Every order goes into a paper notebook by the register.",
      "Point at the timeline. At 4 a.m. she guesses how much to bake. During the day an order slips through the DMs. At midnight she is still answering messages.",
      "Rosa is a persona built from our interviews. Swap in the real details you heard before the pitch.",
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
      "Judges will ask how we know shop owners want this. This slide is the answer.",
      "Replace the placeholders in src/content/config.ts with two or three real quotes from bakery or small-shop owners you talked to, with their permission.",
      "Read one quote out loud. Pick the one that sounds the most like Rosa.",
    ],
  },
  {
    id: "gaps",
    name: "The gaps AI fills",
    section: "What is broken about building today",
    rubric: "Believable",
    steps: 2,
    sources: [],
    mist: { x: 1840, width: 140, strength: 0.35 },
    notes: [
      "In vibe coding, you describe what you want and AI builds a first version. The hard part is knowing what to say, and how much to say.",
      "You can explain your goal clearly and still leave out details that matter, especially if you've never built software before.",
      "Advance. When the AI fills those gaps on its own, its assumptions become part of the app's foundation. You might only discover them when you try to use it. For a small business owner, that means finding out on a busy Saturday.",
    ],
  },
  {
    id: "problems",
    name: "Three problems",
    section: "What is broken about building today",
    rubric: "Accessible to non-engineers",
    steps: 1,
    sources: [],
    mist: { x: 1840, width: 140, strength: 0.35 },
    notes: [
      "Problem one: every vibe coding platform starts with a chat box that expects clear, well-arranged written instructions, a skill most non-engineers don't have.",
      "Problem two: the building process is invisible. You see the finished output, not how it got there, so when something breaks you don't have the confidence to decide what to change.",
      "Problem three: input stops at a screen, a keyboard and a mouse. That shuts out people who think out loud, with their hands or through play, like kids, older adults and anyone who struggles with dense text.",
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
      "Closer to Rosa: in the Los Angeles metro, 91.4% of the 453,201 Hispanic-owned businesses have no employees at all. There is nobody on staff to hand the tech to.",
      "Pip is for people who will never learn to code: shop owners, coaches, pantry volunteers, teachers. If you can describe your problem to a friend, you can build with Pip.",
      "Hover a group in the chart to highlight it, or click the key to hide it.",
    ],
  },
  {
    id: "ask",
    name: "Any ideas, Pip?",
    section: "What Pip makes easier",
    rubric: "Understandable through the product itself",
    steps: 3,
    sources: [],
    mist: { x: 1410, width: 160, strength: 0.25 },
    mistByStep: [
      { x: 1410, width: 160, strength: 0.25 },
      { x: 1410, width: 420, strength: 0.7 },
      { x: 1410, width: 620, strength: 1 },
    ],
    notes: [
      "Ask the room: so what would actually help Rosa? Let the half-answers hang for a beat. A template? A tutorial? Hire a developer? Look at each other like you're stuck.",
      "Advance. One of you turns to the fog screen and says: Hey Pip, any ideas?",
      "Advance. Pip gathers out of the mist on the fog screen and answers out loud from the hologram computer. With no hologram screen connected, the deck speaks the line itself.",
    ],
  },
  {
    id: "reverse",
    name: "Pip reverses the roles",
    section: "What Pip makes easier",
    rubric: "Original",
    steps: 2,
    sources: [],
    mist: { x: 180, width: 220, strength: 0.5 },
    notes: [
      "That's Pip, a conversational app builder. Most vibe coding platforms run on command and execute: you write the instructions and the AI carries them out.",
      "Advance. Pip reverses the roles and asks the questions. Rosa says what she wants to get done, Pip works out which decisions it needs her help with, and it asks about them one at a time.",
      "For example, Pip asks how much bread she can bake tomorrow. Rosa answers from experience, Pip sets the order limit, and she sees the change right away in the preview.",
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
      "Pip has four steps, and the product shows them on screen the whole time, so a user always knows where they are.",
      "Say it, shape it, try it, launch it. The next four slides walk through each one with Rosa.",
    ],
  },
  {
    id: "say",
    name: "Say it",
    section: "What Pip makes easier",
    rubric: "Accessible to non-engineers",
    steps: 2,
    sources: [],
    mist: { x: 470, width: 560, strength: 0.9 },
    notes: [
      "Say it. Pip has an animated holographic face, and you can speak to it or type. Rosa doesn't write a prompt. She talks, the way she would to a friend, and she can be messy about it.",
      "Advance. Pip says back what it heard in four lines: who, business, problem and goal. Rosa can fix any line before anything gets built.",
      "In testing, this reflection did more for trust than any explanation we tried.",
    ],
  },
  {
    id: "shape",
    name: "Shape it",
    section: "What Pip makes easier",
    rubric: "Useful",
    steps: 1,
    sources: [],
    mist: { x: 330, width: 460, strength: 0.85 },
    notes: [
      "This slide is live. Click the answers and watch the shop page change.",
      "Shape it. Pip asks one focused question at a time and shows what each answer changes, so the decisions stay manageable and Rosa can judge the result as she builds. While the app builds in the background, Pip keeps asking design questions instead of making every decision itself.",
      "The daily limit is the best example. 'How many can you bake a day? I'll close orders before you get swamped' sounds like a business question, and it quietly builds inventory logic.",
      "Every change flies from Pip's hand into the app, so nothing is hidden behind code.",
    ],
  },
  {
    id: "try",
    name: "Try it",
    section: "What Pip makes easier",
    rubric: "Original",
    steps: 3,
    sources: [],
    mist: { x: 400, width: 480, strength: 0.85 },
    notes: [
      "Try it. Before launch, Pip plays a user of the app. We call this customer Doña Lupe. When Pip runs into a problem, it describes what it was trying to do, so the building process stops being a black box.",
      "Advance. Lupe finds the gap: she is allergic to nuts and there was nowhere to tell Rosa.",
      "Advance. Rosa says to add a box for notes. Testing becomes a story she can follow instead of a QA step.",
      "This was the most useful AI moment in our whole build, more than any code generation.",
    ],
  },
  {
    id: "launch",
    name: "Launch it",
    section: "What Pip makes easier",
    rubric: "Believable",
    steps: 2,
    sources: [],
    mist: { x: 300, width: 380, strength: 0.6 },
    notes: [
      "Launch it. Rosa says one word and a QR code puts the finished app on someone else's phone.",
      "Advance. Orders arrive live and the team gets a bake list that adds them up. The orders shown here are demo data.",
      "If the room can reach the demo, ask everyone to scan the code and place an order now. Their orders show up on the bake list during the pitch.",
    ],
  },
  {
    id: "demo",
    name: "Live demo",
    section: "A live demonstration",
    rubric: "Believable",
    steps: 1,
    sources: [],
    mist: { x: 1500, width: 520, strength: 0.9 },
    notes: [
      "Let's show you how one answer from Rosa shapes the results for her customer and her team.",
      "Switch to the Replit app and the fog screen now. Walk through Say it, Shape it, Try it and Launch it with Rosa's story, then invite the room to scan the code and order.",
      "Press the right arrow to come back to the deck when the demo ends.",
    ],
  },
  {
    id: "hologram",
    name: "The fog screen",
    section: "What Pip makes newly possible",
    rubric: "Original",
    steps: 1,
    sources: ["teamBuildPlan", "fogscreenContent", "ucsbFogscreen", "fogscreenLaminar"],
    mist: { x: 820, width: 150, strength: 1 },
    notes: [
      "Pip lives on a small fog screen we built: about 50 centimeters wide, rising 30 to 50 centimeters from a base. Ultrasonic misters fill a sealed box, a fan pushes the mist up a 12 millimeter slot, and fans on both sides blow clean air beside it so it rises as a flat sheet.",
      "A projector draws Pip on the mist, and a laptop runs Pip and listens through its microphone.",
      "People who build fog displays report that line drawings read better on fog than photos, so we drew Pip in light lines.",
      "A character in the room changes how people talk. In our testing, people gave Pip more detail than they gave a text box.",
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
      "Pip needs four things to work. The browser has to hear Rosa and talk back, a model has to turn a messy description like 'I'm drowning in DMs' into structure, and the model has to make small, reliable changes on request in real time.",
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
      "The biggest lesson: free-form 'build anything' overwhelmed even us. Asking one question at a time made the whole thing feel calm.",
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
      "Rosa's helpers get a shared bake list. Her customers, including the abuelitas who prefer Spanish and bigger text, get something they can actually use.",
      "Neighbors who can't make it before 10 can still get pan dulce, and local shops can compete without paying for software.",
      "The same flow works for a youth soccer coach, a tutor or a food-bank shift coordinator. Offer to let a judge tell Pip about one.",
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
      "Pip lets anyone who can describe a problem build the software for it.",
      "Invite the judges to walk up and tell Pip about a problem of their own. Thank you.",
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
  line: "Pip lets anyone build a working app by talking it through.",
};

export const rosaSlide = {
  heading: "Rosa's panadería in Boyle Heights",
  facts: [
    { key: "Who", value: "Rosa, 52, owner and baker" },
    { key: "Shop", value: "Two ovens in Boyle Heights, Los Angeles" },
    { key: "Computer", value: "Her phone" },
    { key: "Order system", value: "A paper notebook by the register" },
    { key: "Help", value: "Her nephew, on weekends" },
  ],
  dayStartHour: 4,
  dayEndHour: 24,
  blocks: [
    { label: "Ovens", from: 4, to: 7 },
    { label: "Counter", from: 7, to: 16 },
  ],
  messageHours: [5.6, 7.8, 8.9, 10.2, 11.4, 12.7, 13.9, 15.2, 16.6, 18.1, 19.4, 20.8, 22.1, 23.3],
  lostMessageHour: 12.7,
  moments: [
    { hour: 4, text: "She guesses how many conchas to bake." },
    { hour: 12.7, text: "A birthday order slips past in the DMs." },
    { hour: 24, text: "She is still answering messages at midnight." },
  ],
  messagesLabel: "Instagram DMs and texts",
};

export const ownersSlide = {
  heading: "What shop owners told us",
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
  promise: "If you can describe your problem to a friend, you can build with Pip.",
};

export const journeySlide = {
  heading: "Four steps from a story to a shop page",
  steps: [
    { id: "say", name: "Say it", text: "Describe the problem out loud, the way you would tell a friend." },
    { id: "shape", name: "Shape it", text: "Answer one plain question at a time." },
    { id: "try", name: "Try it", text: "Pip plays a customer and finds what is missing." },
    { id: "launch", name: "Launch it", text: "Say the word and get a live page with a QR code." },
  ],
};

export const saySlide = {
  heading: "Pip says back what it heard",
  speaker: "Rosa",
  said: "I'm drowning in DMs. Everyone wants conchas for Sunday, and I write it all in a notebook by the register.",
  heardTitle: "What I heard",
  heard: [
    { key: "Who", value: "Rosa's regulars, many of them older and more at home in Spanish" },
    { key: "Business", value: "A two-oven panadería in Boyle Heights" },
    { key: "Problem", value: "Orders arrive by DM and get lost in the notebook" },
    { key: "Goal", value: "Customers order in two taps, and Rosa stops answering DMs at midnight" },
  ],
  confirm: "Did I get that right?",
  inputModes: "Speak or type",
};

export type ShapeChoice = { id: string; label: string; builds: string };
export type ShapeQuestion = { id: string; ask: string; reason: string; choices: ShapeChoice[]; defaultChoice: string };

export const shapeSlide = {
  heading: "One decision at a time",
  answerLabel: "Rosa answers",
  buildsLabel: "Pip builds",
  questions: [
    {
      id: "limit",
      ask: "How many conchas can you bake tomorrow?",
      reason: "I'll close orders before you get swamped.",
      defaultChoice: "48",
      choices: [
        { id: "24", label: "24", builds: "Tomorrow's orders close after 24 conchas." },
        { id: "48", label: "48", builds: "Tomorrow's orders close after 48 conchas." },
        { id: "96", label: "96", builds: "Tomorrow's orders close after 96 conchas." },
      ],
    },
    {
      id: "pay",
      ask: "How should people pay?",
      reason: "Paying ahead means fewer no-shows. Paying at pickup keeps it simple.",
      defaultChoice: "pickup",
      choices: [
        { id: "pickup", label: "At pickup", builds: "Orders reserve bread, and payment happens at the counter." },
        { id: "card", label: "Card, when they order", builds: "Checkout takes a card before the order goes through." },
      ],
    },
    {
      id: "language",
      ask: "What do your customers read?",
      reason: "I'll write every button in the language they use at the counter.",
      defaultChoice: "both",
      choices: [
        { id: "en", label: "English", builds: "The page is written in English." },
        { id: "es", label: "Español", builds: "The page is written in Spanish." },
        { id: "both", label: "Both", builds: "The page opens in Spanish with a switch to English." },
      ],
    },
    {
      id: "size",
      ask: "Do some customers need bigger text?",
      reason: "Bigger text and buttons help anyone reading without glasses.",
      defaultChoice: "large",
      choices: [
        { id: "regular", label: "Regular", builds: "Text uses the regular size." },
        { id: "large", label: "Bigger", builds: "Text and buttons are a size larger." },
      ],
    },
  ] satisfies ShapeQuestion[],
};

export const shopCopy = {
  en: {
    shopName: "Panadería Rosa",
    tagline: "Order today, pick up warm",
    item: "Conchas",
    price: "$1.75 each",
    left: (count: number) => `${count} left today`,
    soldOut: "Sold out for today",
    order: "Reserve",
    payCard: "Pay with card",
    payPickup: "Pay at pickup",
    notes: "Notes for Rosa (allergies, names on cakes)",
    switchTo: "Español",
  },
  es: {
    shopName: "Panadería Rosa",
    tagline: "Pide hoy y recoge calientito",
    item: "Conchas",
    price: "$1.75 cada una",
    left: (count: number) => `Quedan ${count} hoy`,
    soldOut: "Agotado por hoy",
    order: "Apartar",
    payCard: "Pagar con tarjeta",
    payPickup: "Pagar al recoger",
    notes: "Notas para Rosa (alergias, nombres en pasteles)",
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
    { who: "rosa", text: "Add a box for notes." },
  ],
  fixed: "Every order now has a notes box, and allergies print on the bake list.",
  gapLabel: "Missing: a place for notes",
};

export type DemoOrder = { name: string; item: string; count: number; pickup: string; note?: string };

export const launchSlide = {
  heading: "Launch takes one word",
  rosaSays: "Launch it.",
  liveLabel: "Live",
  scanText: "Scan to order from the live demo",
  ordersTitle: "Orders",
  bakeTitle: "Weekend bake list",
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

export const hologramSlide = {
  heading: "Pip lives in a sheet of fog",
  parts: [
    {
      id: "generator",
      text: "A fog box at the base makes mist so fine it feels dry and pushes it up a narrow slot.",
      source: "fogscreenContent",
    },
    {
      id: "curtains",
      text: "Fans on both sides blow clean air up beside the mist so it rises as a flat sheet.",
      source: "ucsbFogscreen",
    },
    {
      id: "projector",
      text: "A projector 1 to 2 meters behind the sheet draws Pip on the mist.",
      source: "teamBuildPlan",
    },
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
    { id: "talk", name: "Rosa talks", detail: '"I\'m drowning in DMs"' },
    { id: "hear", name: "The browser hears her", detail: "Speech recognition and speech synthesis" },
    { id: "structure", name: "A model finds the structure", detail: "Who, business, problem, goal" },
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
    { icon: "calm", text: 'Free-form "build anything" overwhelmed even us. One question at a time felt calm.' },
    { icon: "mirror", text: "Showing what Pip heard before building did more for trust than any explanation." },
    { icon: "customer", text: "The pretend customer catching a missing notes box was our most useful AI moment." },
    { icon: "character", text: "People describe their problem in more detail to a character than to a text box." },
  ],
};

export const benefitsSlide = {
  heading: "Who else benefits",
  center: "Rosa",
  rings: [
    { id: "helpers", who: "Her helpers", text: "get a shared bake list instead of decoding her notebook." },
    { id: "customers", who: "Her customers", text: "order in Spanish or English, with bigger text when they need it." },
    {
      id: "neighbors",
      who: "The neighborhood",
      text: "gets pan dulce after 10, and local shops compete without paying for software.",
    },
  ],
  othersTitle: "The same flow works for other builders",
  others: ["A youth soccer coach", "A tutor", "A food-bank shift coordinator"],
};

export const standardsSlide = {
  heading: "How Pip meets the prompt",
  rows: [
    {
      standard: "Original",
      where: "A holographic character is the building interface, and the AI tests the app by playing a customer.",
    },
    { standard: "Useful", where: "Real orders, a sold-out limit and a bake list for the team." },
    { standard: "Believable", where: "It works: the room orders from their phones during the demo." },
    {
      standard: "Accessible to non-engineers",
      where: "Voice, one question at a time, no technical words, and Spanish with bigger text in one sentence.",
    },
    {
      standard: "Understandable through the product",
      where: 'The four steps and "What I heard" explain the idea without slides.',
    },
    { standard: "Built for a specific person", where: "Rosa, and her panadería in Boyle Heights." },
  ],
};

export const closeSlide = {
  heading: "Tell Pip about your problem",
  scanText: "Try the demo",
};

export const sourcesSlide = {
  heading: "Sources",
  note: "Ratios marked as team calculations divide two published figures. Rosa is a persona based on our interviews.",
};

export const hookSlide = {
  heading: "What would get you further on your first app?",
  boxLabel: "A blank box that asks you to describe everything you need",
  boxPlaceholder: "Describe the app you want to build",
  talkLabel: "A conversation that helps you find what you left out",
  talk: [
    { who: "pip", text: "Who orders from you?" },
    { who: "rosa", text: "Mostly regulars. Lots of them read Spanish." },
    { who: "pip", text: "How many conchas can you bake tomorrow?" },
  ],
};

export const gapsSlide = {
  heading: "AI fills the gaps you leave",
  saidLabel: "What Rosa types",
  said: "I need a page where my customers can order pan dulce.",
  gaps: [
    { left: "How many she can bake", assumed: "Unlimited orders" },
    { left: "How people pay", assumed: "Card only" },
    { left: "What her customers read", assumed: "English only" },
    { left: "Where allergies go", assumed: "No notes box" },
  ],
  gapsLabel: "What she left out",
  assumedLabel: "What the AI assumed",
  foundation: "These guesses become the app's foundation.",
  consequence: "Rosa finds them on a busy Saturday, when the orders run past what her two ovens can bake.",
};

export const problemsSlide = {
  heading: "Three things stop Rosa today",
  problems: [
    {
      id: "writing",
      name: "You have to write it all down",
      text: "Every platform starts with a chat box that expects clear, complete, written instructions.",
    },
    {
      id: "invisible",
      name: "You can't see it being built",
      text: "You only see the finished output, so when something breaks you don't know what to change.",
    },
    {
      id: "screen",
      name: "You can only type",
      text: "Input stops at a screen, a keyboard and a mouse, which leaves out people who think out loud, with their hands or through play.",
    },
  ],
};

export const askSlide = {
  question: "So what would actually help Rosa?",
  guesses: [
    { text: "A prompt template?", x: 60, y: 480 },
    { text: "A longer tutorial?", x: 640, y: 610 },
    { text: "Hire a developer?", x: 220, y: 740 },
    { text: "A simpler website builder?", x: 900, y: 450 },
  ],
  usLabel: "Us",
  call: "Hey Pip, any ideas?",
  pipLabel: "Pip",
  answer:
    "What if I asked the questions? Tell me what you want to get done, and I'll ask about the decisions only you can make, one at a time.",
};

export const reverseSlide = {
  heading: "Pip reverses the roles",
  todayLabel: "Today: command and execute",
  today: [
    { id: "you", name: "You", detail: "write the whole spec" },
    { id: "ai", name: "AI", detail: "guesses the rest" },
    { id: "app", name: "App", detail: "built on those guesses" },
  ],
  pipLabel: "With Pip: Pip asks, Rosa decides",
  withPip: [
    { id: "goal", name: "Rosa", detail: "says what she wants done" },
    { id: "ask", name: "Pip", detail: "asks one question" },
    { id: "answer", name: "Rosa", detail: "answers from experience" },
    { id: "preview", name: "Preview", detail: "changes right away" },
  ],
  loop: "Repeat until nothing is left to guess",
  example: {
    ask: "How much bread can you bake tomorrow?",
    answer: "48 conchas.",
    result: "Tomorrow's orders close at 48.",
  },
};

export const demoSlide = {
  heading: "Let's show you",
  line: "Watch one answer from Rosa reach her customer's phone and her team's bake list.",
  scanText: "Scan to order during the demo",
};

/**
 * What Pip does on the fog screen at each slide and build step. Slides before the reveal keep
 * the fog screen dark, so Pip's first appearance lands on "Hey Pip, any ideas?".
 */
export type PipCue = {
  show: boolean;
  mood: "smile" | "talk" | "listen" | "think";
  reach?: "none" | "left" | "right";
  /** Light gathering in the mist just before Pip appears. */
  forming?: boolean;
  line?: string;
  /** Speak the line out loud from the hologram window. */
  speak?: boolean;
};

const hidden: PipCue = { show: false, mood: "smile" };

export const pipCues: Partial<Record<SlideId, PipCue[]>> = {
  ask: [hidden, { ...hidden, forming: true }, { show: true, mood: "talk", line: askSlide.answer, speak: true }],
  reverse: [
    { show: true, mood: "listen" },
    { show: true, mood: "smile", line: "I ask, and you decide." },
  ],
  journey: [{ show: true, mood: "smile", reach: "right" }],
  say: [
    { show: true, mood: "listen" },
    { show: true, mood: "talk", line: "Did I get that right?" },
  ],
  shape: [{ show: true, mood: "talk", reach: "right", line: "How many conchas can you bake tomorrow?" }],
  try: [
    { show: true, mood: "talk", line: "I'd like a dozen conchas for Sunday morning." },
    { show: true, mood: "think", line: "I'm allergic to nuts, and there was nowhere to tell you." },
    { show: true, mood: "smile", line: "Every order has a notes box now." },
  ],
  launch: [
    { show: true, mood: "smile", line: "Your page is live." },
    { show: true, mood: "smile", reach: "left" },
  ],
  demo: [{ show: true, mood: "smile", reach: "right" }],
  hologram: [{ show: true, mood: "smile", reach: "left" }],
  whyNow: [{ show: true, mood: "listen" }],
  learned: [{ show: true, mood: "listen" }],
  benefits: [{ show: true, mood: "smile" }],
  standards: [{ show: true, mood: "listen" }],
  close: [{ show: true, mood: "talk", line: "Tell me about your problem.", speak: true }],
  sources: [{ show: true, mood: "smile" }],
};

/** The cue for a slide and step. Slides with no cue stay dark before the reveal and show a calm Pip after it. */
export function pipCueFor(slideId: SlideId, step: number): PipCue {
  const cues = pipCues[slideId];
  if (cues) return cues[Math.min(step, cues.length - 1)];
  const revealIndex = slides.findIndex((slide) => slide.id === "ask");
  const index = slides.findIndex((slide) => slide.id === slideId);
  return index > revealIndex ? { show: true, mood: "smile" } : hidden;
}

export const hologramCopy = {
  title: "Pip on the fog screen",
  help: "Drag this window onto the fog projector, then start it. It goes full screen and lets Pip speak.",
  start: "Start the hologram",
  waiting:
    "Waiting for the deck. Open the deck in another window of this browser, or start it with npm run present on the presenting laptop.",
  keys: [
    { keys: "F", does: "Full screen" },
    { keys: "M", does: "Mirror the image, if the projector isn't in rear-projection mode" },
    { keys: "C", does: "Show or hide Pip's lines as captions" },
    { keys: "Left, Right", does: "Move the deck from this window" },
  ],
};

export const hologramSetup = {
  heading: "Pip's hologram screen",
  intro:
    "Pip can follow the deck on a second computer that feeds the fog projector, the same way the Fold with Nara kiosk followed its deck. Start the deck on this laptop with npm run present, then open the hologram page on the second computer. Both need the same Wi-Fi.",
  secondComputer: {
    name: "Second computer",
    line: "Scan the code or type the address on the computer plugged into the fog projector, then click Start the hologram.",
  },
  thisLaptop: {
    name: "This laptop",
    line: "If the fog projector is a second screen on this laptop, press H in the deck instead and drag the window onto it.",
  },
  statusTitle: "Connected now",
  deckLabel: "Deck is on",
  hologramsLabel: "Hologram screens",
  relayOff:
    "The hologram link isn't running. Start the deck with npm run present (or npm run dev to rehearse), then reload this page.",
  noNetwork: "This laptop isn't on a Wi-Fi network yet. Join the same network as the second computer, then reload.",
  notStarted: "Not started yet",
  openHere: "Open the hologram on this computer",
  tips: [
    "Event Wi-Fi often stops devices from seeing each other. If the second computer can't connect, turn on a phone hotspot and join it with both computers.",
    "Pip speaks from the computer running the hologram, so plug the speaker into that one. The deck stays quiet while a hologram screen is connected.",
    "If the Wi-Fi drops, the hologram keeps its last pose and catches up as soon as it reconnects.",
    "The hosted copy on GitHub Pages can't reach the relay on a laptop, so present from npm run present.",
  ],
};
