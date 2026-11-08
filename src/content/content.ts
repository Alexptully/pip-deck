import type { SourceId } from "./sources";

/**
 * All slide copy, chart data and speaker notes live here.
 * Slide components read from this file and never hard-code words or numbers.
 */

export type SlideId =
  | "title"
  | "human"
  | "story"
  | "stat"
  | "meetPip"
  | "listen"
  | "say"
  | "ask"
  | "launch"
  | "zoomOut"
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

/** The person the deck follows. Used in labels across the demo slides. */
export const ownerName = "Gloria";

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
      "[Alex] Quick show of hands: who here has tried an AI app builder, stared at the empty box, and closed the tab? Hold on to that feeling.",
      "We're Group 7, and this is Pip. Well, almost Pip. It's still figuring out its face.",
    ],
  },
  {
    id: "human",
    name: "The future of AI is human",
    section: "The idea",
    rubric: "Original",
    steps: 2,
    sources: [],
    mist: { x: 1500, width: 520, strength: 0.7 },
    notes: [
      "[Alex] Right now, AI speaks command. You type, it obeys. That's great if you already think in specs.",
      "[Click] But when most people get stuck, they don't open a terminal. They turn to the person next to them and ask for help. That's the AI we wanted to build. Cara?",
    ],
  },
  {
    id: "story",
    name: "Meet Gloria",
    section: "Who it's for",
    rubric: "Built for a specific person",
    steps: 7,
    sources: [],
    mist: { x: 1800, width: 200, strength: 0.4 },
    notes: [
      "[Cara] This is Gloria. Picture her clinic on a Tuesday.",
      "[Click] It's 7 a.m. and the phone is already ringing. [Click] By 10, every chair is taken, and someone's asking how much longer for the third time. [Click] At lunch, she's writing refill requests on sticky notes.",
      "[Click] That evening, she finally tries one of those AI app builders. It asks her to describe her app, then shows her code. Tab closed. [Click] At 8, she's still calling people back.",
      "[Click] Gloria isn't missing an idea. She's missing a partner.",
    ],
  },

  {
    id: "stat",
    name: "The opening",
    section: "Who it's for",
    rubric: "Believable",
    steps: 2,
    sources: ["gs10ksb2026", "nhsGpTraining2022"],
    mist: { x: 1700, width: 300, strength: 0.5 },
    notes: [
      "[Cara] And she's everywhere. Most small business owners using AI want it to save time, yet nearly three in four say they need help just getting started. In the UK, three in four clinic staff say they're too swamped to finish training. The appetite is there. The on-ramp isn't.",
      "[Click] So we asked: what if building an app felt like talking to a friend? Daisy?",
    ],
  },

  {
    id: "meetPip",
    name: "Meet Pip",
    section: "What Pip makes easier",
    rubric: "Understandable through the product itself",
    steps: 3,
    sources: [],
    mist: { x: 1500, width: 520, strength: 0.8 },
    notes: [
      "[Daisy] Let's condense. [Beat.]",
      "[Click] Say hello to Pip. [Gesture to the fog screen.] The fog screen has been dark until now: light gathers, and Pip appears and says hi.",
      "[Click] Pip lives in a sheet of fog, and it's made to feel like a person, not a program. You talk. It listens. It builds.",
    ],
  },
  {
    id: "listen",
    name: "Pip picks things up",
    section: "What Pip makes newly possible",
    rubric: "Original",
    steps: 2,
    sources: [],
    mist: { x: 1840, width: 140, strength: 0.4 },
    notes: [
      "[Daisy] But here's the part we're proudest of: Pip doesn't wait to be asked. Like a new hire in their first week, it notices things. The morning rush. The one person juggling phones and check-ins. The sticky notes. The question everyone keeps asking.",
      "[Click] And then, like a good coworker, it speaks up. Gloria never had to explain a thing. Jerry, show them.",
      "If asked about privacy: Pip glows when it listens, keeps patterns not recordings, anyone can say 'Pip, pause,' and nothing is built without a yes. These observations are demo data.",
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
      "[Jerry] So Gloria says yes, and she talks the way she'd vent to a friend: 'Our phones never stop.'",
      "[Click] Pip says it back in plain language. No spec, no jargon. If it misheard, she just says so.",
    ],
  },
  {
    id: "ask",
    name: "Shape it",
    section: "What Pip makes easier",
    rubric: "Useful",
    steps: 1,
    sources: [],
    mist: { x: 330, width: 460, strength: 0.85 },
    notes: [
      "[Jerry] Now watch the phone. Pip asks one thing at a time. [Click 12.] She says twelve walk-ins a day, and the list is already full. She just made an engineering decision without knowing it. [Click back to 30.]",
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
      "[Jerry] And then two words: 'Launch it.'",
      "[Click] That's a real page and a QR code. If the demo is up: scan it now and you're on Gloria's list. Ame?",
    ],
  },
  {
    id: "zoomOut",
    name: "Everywhere Pip works",
    section: "Who Pip allows to build",
    rubric: "Useful",
    steps: 2,
    sources: [],
    mist: { x: 960, width: 1400, strength: 0.25 },
    notes: [
      "[Ame] Gloria's clinic is one door.",
      "[Click] Open the rest and it's the school office asking if a kid got picked up, the food bank short on Thursday volunteers, the permit office fielding the same call all day. Same problem everywhere: people who know exactly what's wrong and have no time to build the fix.",
    ],
  },
  {
    id: "benefits",
    name: "Who else benefits",
    section: "Who gets to build and who benefits",
    rubric: "Useful",
    steps: 1,
    sources: [],
    mist: { x: 460, width: 700, strength: 0.35 },
    notes: [
      "[Ame] And when one of them can build, it ripples. Their team gets afternoons back, and the people they serve stop waiting on hold.",
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
      "[Ame] Why now? A few years ago this needed a team of engineers. Today a browser can listen, a model can turn rambling into structure, and we built it as students.",
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
      "[Ame] What surprised us most: people told Pip things they'd never type into a box. A face changes what people say.",
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
      "[Ame] So, that empty box you closed? Pip's answer is to never hand you one. Come say hi, and tell it what's been hard this week. Thank you.",
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
  line: "Pip is an AI you talk to like a person. It listens, picks up on what you need and builds it for you.",
};

export const humanSlide = {
  heading: "The future of AI is human",
  commandLabel: "We can already tell AI what to do",
  command: "build me a patient check-in app",
  humanLabel: "But people connect best with people, especially those who aren't comfortable with technology",
  humanLine: "Hi! What's been hardest this week?",
};

export const storySlide = {
  heading: "Meet Gloria",
  intro: "Gloria runs a family clinic and wants an app to end the nonstop calls, but she has no time to build one.",
  constraints: "No budget for a developer, patient privacy rules to follow, and her phone as her only computer.",
  panels: [
    { id: "phones", time: "7 a.m.", icon: "phone", text: "The phones ring before the doors open." },
    { id: "waiting", time: "10 a.m.", icon: "waiting", text: "The waiting room is full. “How much longer?”" },
    { id: "refills", time: "1 p.m.", icon: "notes", text: "Refills pile up on sticky notes. A voicemail gets missed." },
    {
      id: "builder",
      time: "6 p.m.",
      icon: "code",
      text: "She tries an AI app builder. It shows her code. She closes the tab.",
    },
    { id: "night", time: "8 p.m.", icon: "night", text: "Still returning calls. “There has to be an easier way.”" },
  ],
  need: "Gloria doesn't need to learn to code. She needs help that works like a person.",
};

export const meetPipSlide = {
  heading: "Meet Pip",
  condense: "Let's condense.",
  hello: "Say hello to Pip.",
  definition: "Pip is an AI that builds the apps you need, just by talking with you.",
  flow: [
    { id: "talk", icon: "talk", text: "You talk to it like a person" },
    { id: "figure", icon: "idea", text: "It listens and picks up on what you need" },
    { id: "build", icon: "app", text: "It builds the app, and you never see code" },
  ],
  body: "Pip lives on a fog screen, so it feels like someone in the room with you.",
};

export const statSlide = {
  heading: "Busy people want easier tools but can't stop to learn them",
  groups: [
    {
      id: "want",
      label: "They want easier ways to work",
      figures: [
        {
          id: "efficiency",
          figure: "84%",
          text: "of small business owners using AI say saving time and working more efficiently is the main benefit",
          detail: "Goldman Sachs 10,000 Small Businesses survey of 1,256 owners, 2026",
        },
      ],
    },
    {
      id: "stuck",
      label: "But learning new tools takes time they don't have",
      figures: [
        {
          id: "training",
          figure: "73%",
          text: "say more training and help setting it up would help them",
          detail: "Same Goldman Sachs survey, 2026",
        },
        {
          id: "workload",
          figure: "74%",
          text: "of clinic staff say their workload keeps them from finishing training",
          detail: "NHS England survey of 791 general-practice staff, 2022 (UK)",
        },
      ],
    },
  ],
  pivot: "What if building an app felt like talking to a friend?",
};

export const saySlide = {
  heading: "Pip says back what it heard",
  speaker: ownerName,
  said: "Our phones never stop. Half the calls are people asking how long the wait is, and the rest are about refills. I just want people to stop waiting on hold.",
  heardTitle: "What I heard",
  heard: [
    { key: "Who", value: "Walk-in patients, many of them older and more at home in Spanish" },
    { key: "Clinic", value: "A two-doctor family clinic in East Los Angeles" },
    { key: "Problem", value: "Patients call to ask about the wait and get stuck on hold" },
    { key: "Goal", value: "Patients join the walk-in list from their phone and hear back when it's their turn" },
  ],
  confirm: "Did I get that right?",
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
  heading: "One friendly question at a time",
  answerLabel: `${ownerName} answers`,
  buildsLabel: "Pip builds",
  questions: [
    {
      id: "limit",
      topic: "Walk-ins a day",
      ask: "How many walk-ins can your doctors see in a day?",
      reason: "I'll close the list before your doctors get swamped.",
      defaultChoice: "30",
      choices: [
        { id: "12", label: "12", builds: "The walk-in list closes after 12 patients a day." },
        { id: "30", label: "30", builds: "The walk-in list closes after 30 patients a day." },
        { id: "45", label: "45", builds: "The walk-in list closes after 45 patients a day." },
      ],
    },
    {
      id: "checkIn",
      topic: "Waiting",
      ask: "Where should patients wait?",
      reason: "Waiting at home means a calmer lobby. Waiting at the clinic keeps it simple.",
      defaultChoice: "home",
      choices: [
        { id: "home", label: "At home", builds: "Patients get a text when it's almost their turn." },
        { id: "desk", label: "At the clinic", builds: "Patients check in at the front desk when they arrive." },
      ],
    },
    {
      id: "language",
      topic: "Language",
      ask: "What do your patients read?",
      reason: "I'll write every button in the language they use at your front desk.",
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
      ask: "Do some patients need bigger text?",
      reason: "Bigger text and buttons help anyone reading without glasses.",
      defaultChoice: "large",
      choices: [
        { id: "regular", label: "Regular", builds: "Text uses the regular size." },
        { id: "large", label: "Bigger", builds: "Text and buttons are a size larger." },
      ],
    },
  ] satisfies AskQuestion[],
};

export const zoomOutSlide = {
  closeHeading: "Gloria's clinic is one example",
  wideHeading: "Pip works wherever people need help",
  focus: "clinic",
  places: [
    {
      id: "market",
      icon: "store",
      name: "Corner market",
      hears: "You're out of conchas again?",
      builds: "A reserve-ahead page",
    },
    {
      id: "school",
      icon: "school",
      name: "School front office",
      hears: "Did my kid get picked up?",
      builds: "A pickup log for parents",
    },
    {
      id: "soccer",
      icon: "soccer",
      name: "Youth soccer league",
      hears: "Is practice canceled?",
      builds: "Team alerts by text",
    },
    {
      id: "foodBank",
      icon: "basket",
      name: "Food bank",
      hears: "Who's covering Thursday?",
      builds: "A volunteer shift board",
    },
    {
      id: "clinic",
      icon: "clinic",
      name: "Family clinic",
      hears: "How much longer?",
      builds: "A walk-in list that texts patients",
    },
    {
      id: "city",
      icon: "city",
      name: "City permit office",
      hears: "Where's my permit?",
      builds: "A permit status page",
    },
    {
      id: "salon",
      icon: "salon",
      name: "Neighborhood salon",
      hears: "Can I get in Saturday?",
      builds: "Booking with reminders",
    },
    {
      id: "auto",
      icon: "auto",
      name: "Auto repair shop",
      hears: "Is my car ready yet?",
      builds: "A text when the car is done",
    },
    {
      id: "restaurant",
      icon: "restaurant",
      name: "Family restaurant",
      hears: "Is this gluten-free?",
      builds: "An allergy-friendly menu",
    },
  ],
  note: "Examples of what Pip could hear and build",
};

export const clinicPageCopy = {
  en: {
    clinicName: "Eastside Family Clinic",
    tagline: "Join today's walk-in list",
    visit: "Walk-in visit",
    wait: "Wait now: about 40 min",
    left: (count: number) => `${count} spots left today`,
    full: "The walk-in list is full today",
    join: "Join the list",
    waitHome: "We'll text you when it's almost your turn",
    waitDesk: "Check in at the front desk",
    notes: "Anything we should know? (interpreter, wheelchair)",
    switchTo: "Español",
  },
  es: {
    clinicName: "Clínica Familiar Eastside",
    tagline: "Anótese en la lista de hoy",
    visit: "Consulta sin cita",
    wait: "Espera: unos 40 min",
    left: (count: number) => `Quedan ${count} lugares hoy`,
    full: "La lista de hoy está llena",
    join: "Anotarme",
    waitHome: "Le mandamos un texto cuando casi sea su turno",
    waitDesk: "Regístrese en la recepción",
    notes: "¿Algo que debamos saber? (intérprete, silla de ruedas)",
    switchTo: "English",
  },
} as const;

/** Patients already on today's list in the demo, so the counter has something to count down from. */
export const demoCheckedInToday = 18;

export type DemoCheckIn = { name: string; visit: string; time: string; note?: string };

export const launchSlide = {
  heading: "Launch takes one word",
  ownerSays: "Launch it.",
  liveLabel: "Live",
  scanText: "Scan to join the list from the live demo",
  ordersTitle: "Today's check-ins",
  listTitle: "Front desk list",
  demoLabel: "Demo data",
  checkIns: [
    { name: "Ernesto R.", visit: "Sick visit", time: "1:15", note: "Spanish interpreter" },
    { name: "Marco L.", visit: "Refill", time: "1:30" },
    { name: "Ana P.", visit: "Sick visit", time: "1:45", note: "Wheelchair" },
    { name: "Sofía G.", visit: "Checkup", time: "2:00" },
    { name: "Don Beto", visit: "Refill", time: "2:10" },
    { name: "Carla V.", visit: "Sick visit", time: "2:30" },
  ] satisfies DemoCheckIn[],
};

export const mapSlide = {
  heading: "Pip picks things up like a real person",
  rooms: [
    { id: "waiting", label: "Waiting room", x: 0, y: 0, w: 420, h: 600 },
    { id: "desk", label: "Front desk", x: 420, y: 0, w: 220, h: 250 },
    { id: "office", label: "Back office", x: 420, y: 250, w: 220, h: 350 },
    { id: "exam1", label: "Exam room 1", x: 640, y: 0, w: 260, h: 300 },
    { id: "exam2", label: "Exam room 2", x: 640, y: 300, w: 260, h: 300 },
  ],
  layersTitle: "For example, at Gloria's clinic Pip noticed, without being asked",
  layers: [
    {
      id: "patients",
      number: 1,
      name: "How patients move",
      text: "Walk-ins peak from 9 to 11 a.m., and the waiting room spills outside.",
      pin: { x: 200, y: 330 },
    },
    {
      id: "staff",
      number: 2,
      name: "How staff work",
      text: "One person answers the phone and checks patients in at the same time.",
      pin: { x: 530, y: 120 },
    },
    {
      id: "operations",
      number: 3,
      name: "How operations run",
      text: "Refill requests go on sticky notes and get called back after closing.",
      pin: { x: 530, y: 430 },
    },
    {
      id: "complaints",
      number: 4,
      name: "What patients complain about",
      text: "“How much longer?” is the question asked most at the desk.",
      pin: { x: 340, y: 120 },
    },
  ],
  buildsTitle: "Then it brings it up, like a coworker would",
  pipSays:
    "Hey Gloria, I keep hearing people ask how much longer. Want me to make a list that texts them when it's their turn?",
  buildsLead: "What Pip offers to build",
  builds: [
    {
      id: "waitlist",
      from: [1, 4],
      name: "A walk-in list that texts patients",
      text: "The waiting room empties and nobody has to ask how long.",
    },
    {
      id: "desk",
      from: [2],
      name: "One front desk list",
      text: "Check-ins and calls land in one place instead of two.",
    },
    {
      id: "refills",
      from: [3],
      name: "A refill board",
      text: "Every refill has a status, so the sticky notes go away.",
    },
  ],
  demoLabel: "Observations are demo data",
};

export const whyNowSlide = {
  heading: "Why Pip could only exist now",
  pipeline: [
    { id: "talk", name: "You talk", detail: '"Our phones never stop"' },
    { id: "hear", name: "The browser hears you", detail: "Speech recognition and speech synthesis" },
    { id: "structure", name: "A model finds the structure", detail: "Who, where, problem, goal" },
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
    { icon: "character", text: "People describe their problem in more detail to a character than to a text box." },
    { icon: "calm", text: 'Free-form "build anything" overwhelmed even us. One question at a time felt calm.' },
    { icon: "mirror", text: "Showing what Pip heard before building did more for trust than any explanation." },
    { icon: "customer", text: "People relaxed once they could see when Pip was listening." },
  ],
};

export const benefitsSlide = {
  heading: "Who else benefits",
  center: "One builder",
  rings: [
    { id: "helpers", who: "Their team", text: "stops answering the same questions all day." },
    { id: "customers", who: "The people they serve", text: "get answers faster, in their own language." },
    { id: "neighbors", who: "The community", text: "gets local places with tools only chains used to have." },
  ],
  othersTitle: "Who gets to build",
  others: ["Small business owners", "Teachers and coaches", "Nonprofit and city staff"],
};

export const standardsSlide = {
  heading: "How Pip meets the prompt",
  rows: [
    {
      standard: "Original",
      where:
        "Pip acts like a real person: you talk with it, and it picks up on what a workplace needs the way a coworker would.",
    },
    {
      standard: "Useful",
      where: "A walk-in list with a daily limit, texts when it's your turn and one front desk list.",
    },
    { standard: "Believable", where: "It works: the room joins the list from their phones during the demo." },
    {
      standard: "Accessible to non-engineers",
      where: "Gloria only talks and answers plain questions. She never sees code.",
    },
    {
      standard: "Understandable through the product",
      where: '"What I heard" and Pip bringing up what it noticed explain the idea without slides.',
    },
    { standard: "Built for a specific person", where: "Gloria and her family clinic in East Los Angeles." },
  ],
};

export const closeSlide = {
  heading: "Tell Pip what's been hard",
  scanText: "Try the demo",
};

export const sourcesSlide = {
  heading: "Sources",
  note: "Ratios marked as team calculations divide two published figures. Gloria is a persona based on our interviews. Check-ins on the demo slides are demo data.",
};

/**
 * What Pip does on the fog screen at each slide and build step. The fog screen stays fully
 * dark, with no mist and no light, until "Say hello to Pip". Then light gathers and Pip
 * appears in the fog for the first time.
 */
export type PipCue = {
  show: boolean;
  mood: "smile" | "talk" | "listen" | "think";
  reach?: "none" | "left" | "right";
  /** Light gathers into the spot where Pip appears. Used on Pip's first appearance. */
  forming?: boolean;
  line?: string;
  /** Speak the line out loud from the hologram window. */
  speak?: boolean;
};

const dark: PipCue = { show: false, mood: "smile" };

export const pipCues: Partial<Record<SlideId, PipCue[]>> = {
  meetPip: [
    dark,
    { show: true, mood: "talk", forming: true, line: "Hi, I'm Pip.", speak: true },
    { show: true, mood: "smile" },
  ],
  listen: [
    { show: true, mood: "listen" },
    { show: true, mood: "talk", line: mapSlide.pipSays, speak: true },
  ],
  say: [
    { show: true, mood: "listen" },
    { show: true, mood: "talk", line: saySlide.confirm, speak: true },
  ],
  ask: [{ show: true, mood: "talk", reach: "right", line: askSlide.questions[0].ask }],
  launch: [
    { show: true, mood: "listen" },
    { show: true, mood: "smile", line: "Your page is live.", speak: true },
  ],
  zoomOut: [{ show: true, mood: "smile" }],
  whyNow: [{ show: true, mood: "listen" }],
  learned: [{ show: true, mood: "listen" }],
  benefits: [{ show: true, mood: "smile" }],
  close: [{ show: true, mood: "talk", line: "What's been hard this week?", speak: true }],
  standards: [{ show: true, mood: "listen" }],
  sources: [{ show: true, mood: "smile" }],
};

/** The cue for a slide and step. Slides before Meet Pip have no cue and keep the fog screen dark. */
export function pipCueFor(slideId: SlideId, step: number): PipCue {
  const cues = pipCues[slideId];
  if (!cues) return dark;
  return cues[Math.min(step, cues.length - 1)];
}

/** Before the deck connects, the fog screen shows nothing at all. */
export const pipCueBeforeDeck: PipCue = dark;

export const hologramCopy = {
  title: "Pip on the fog screen",
  help: "Start it to go full screen on the fog projector and let Pip speak. The screen then stays black until Pip appears in the deck. Press N in the deck to check that this screen is connected. In Chrome, allow window management when asked and it picks the extended display itself; otherwise drag this window onto the projector first.",
  start: "Start the hologram",
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
    "Pip speaks from the computer running the hologram, so plug the speaker into that one.",
    "If the Wi-Fi drops, the hologram keeps its last pose and catches up as soon as it reconnects.",
    "The hosted copy on GitHub Pages can only reach a hologram window in the same browser, so present from npm run present when Pip runs on a second computer.",
  ],
};
