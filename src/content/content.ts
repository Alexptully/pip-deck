import type { SourceId } from "./sources";

/**
 * All slide copy, chart data and speaker notes live here.
 * Slide components read from this file and never hard-code words or numbers.
 */

export type SlideId =
  | "title"
  | "human"
  | "persona"
  | "stat"
  | "owners"
  | "builders"
  | "broken"
  | "friendly"
  | "journey"
  | "say"
  | "ask"
  | "try"
  | "launch"
  | "route"
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
      "Hi, we're the team behind Pip. The prompt asked what comes after typing a request into an AI builder.",
      "Our answer is a character. Pip lives in a sheet of fog, talks with you like a person and builds the app while you talk. It is made for people who find today's AI builders intimidating.",
      "If the fog screen is running, wave a hand through Pip now. It gets a laugh and it shows the screen is only mist.",
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
      "Our starting belief: the future of AI is human.",
      "We can already tell AI what to do. Type a command and it builds something. That works well for people who already think like engineers.",
      "Advance. But humans connect best with humans, especially people who aren't comfortable with technology. They ask a person for help, not a text box. So the next step for AI is to feel like someone you can talk to.",
    ],
  },
  {
    id: "persona",
    name: "Who it's for",
    section: "Who it's for",
    rubric: "Built for a specific person",
    steps: 1,
    sources: [],
    mist: { x: 1760, width: 240, strength: 0.45 },
    notes: [
      "Meet Gloria. She runs a two-doctor family clinic in East Los Angeles. She is not a doctor and not technical. She keeps the clinic running.",
      "Point at the timeline. The phones start before the doors open. Every dot is a patient calling to ask how long the wait is or whether a refill went through. The hollow dot is the voicemail that got missed.",
      "Gloria tried an AI app builder once. It opened to a blank box, then showed her code. She closed the tab and never went back.",
      "Gloria is a persona built from our interviews. Swap in the real details you heard before the pitch.",
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
      "People like Gloria want easier ways to work. In Goldman Sachs' 2026 survey of 1,256 small business owners in its 10,000 Small Businesses program, 84% of those using AI said the main benefit was saving time and working more efficiently.",
      "But they get stuck at the learning part. In the same survey, 73% said more training and help setting it up would help them, and only 14% said AI was fully part of their day-to-day operations.",
      "Clinics have it worse. In NHS England's survey of 791 general-practice staff, 74% said their workload kept them from finishing training, and the next barrier was having no protected time to learn. That one is a UK survey, so we say so.",
      "Advance. So what if building an app took no learning at all, and felt like talking to a friend?",
    ],
  },
  {
    id: "owners",
    name: "What people told us",
    section: "Who it's for",
    rubric: "Believable",
    steps: 1,
    sources: [],
    mist: { x: 180, width: 220, strength: 0.4 },
    notes: [
      "Judges will ask how we know people like Gloria want this. This slide is the answer.",
      "Replace the placeholders in src/content/config.ts with two or three real quotes from clinic staff, shop owners or other non-technical people you talked to, with their permission.",
      "Read one quote out loud. Pick the one that sounds the most like Gloria.",
    ],
  },
  {
    id: "builders",
    name: "Who gets to build",
    section: "Who Pip allows to build",
    rubric: "Accessible to non-engineers",
    steps: 1,
    sources: ["sbaNation2025", "blsOoh"],
    mist: { x: 1830, width: 150, strength: 0.4 },
    notes: [
      "There are 36.2 million small businesses in the U.S., per the SBA's 2025 profiles, which use 2022 Census data. The BLS counts about 1.7 million software developers in 2025.",
      "That works out to about 21 small businesses for every developer. That ratio is our own division of the two published numbers.",
      "Most clinics, shops and nonprofits will never hire a developer. Pip is for the people who run them.",
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
      "Today's AI builders feel like they were made for engineers. You face a blank box and you're expected to write a spec.",
      "Then you get a wall of code or a generated screen you can't reason about. Gloria's real questions get buried under fields, components and deploys. That is where she closed the tab.",
      "Advance. Pip starts a different way. It says hello, asks what's been hard this week and talks with her in her own words.",
    ],
  },
  {
    id: "friendly",
    name: "Talking to a person",
    section: "What Pip makes easier",
    rubric: "Accessible to non-engineers",
    steps: 1,
    sources: [],
    mist: { x: 300, width: 460, strength: 0.8 },
    notes: [
      "This is the heart of Pip. Building software should feel like talking to a helpful person, not operating a machine.",
      "Walk down the table. Pip starts with a hello instead of a blank box. It speaks Gloria's words, shows what it heard instead of code, asks one question at a time and, when something goes wrong, tries another way instead of throwing an error.",
      "And it has a face. People told a character more about their problem than they ever typed into a box.",
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
      "Say it, shape it, try it, launch it. The next four slides walk through each one with Gloria.",
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
      "Gloria doesn't write a prompt. She talks to Pip the way she would to a friend, and she can be messy and frustrated about it.",
      "Advance. Pip says back what it heard in four lines: who, clinic, problem and goal. Gloria can fix any line before anything gets built.",
      "In testing, this reflection did more for trust than any explanation we tried.",
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
      "This slide is live. Click the answers and watch the check-in page change.",
      "Pip asks four questions, one at a time, as plain choices with a reason attached. Gloria never has to think of a feature.",
      "The daily limit is the best example. 'How many walk-ins can you see a day? I'll close the list before your doctors get swamped' sounds like a scheduling question, and it quietly builds capacity logic.",
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
      "Before launch, Pip tests the app for Gloria by pretending to be a patient. We call him Don Ernesto.",
      "Advance. Ernesto finds the gap: his daughter translates for him, and there was nowhere to say so.",
      "Advance. Gloria says to add a box for notes. Testing becomes a story she can follow instead of a QA step.",
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
      "Gloria says one word and the page goes live with a QR code she can tape to the front door.",
      "Advance. Check-ins arrive live, and the front desk gets one list grouped by visit type, with interpreter requests flagged. The check-ins shown here are demo data.",
      "If the room can reach the demo, ask everyone to scan the code and join the list now. Their check-ins show up during the pitch.",
    ],
  },
  {
    id: "route",
    name: "Pip can come to you",
    section: "What Pip makes newly possible",
    rubric: "Useful",
    steps: 1,
    sources: [],
    mist: { x: 1760, width: 240, strength: 0.45 },
    notes: [
      "One more way to use Pip. Some workplaces are too busy even to sit down and talk for ten minutes.",
      "For them, Pip can come to the workplace and spend about a week there, listening to complaints from customers or patients, needs from staff and everyday conversation.",
      "At the end of the week it shows the owner what it noticed and asks the same friendly questions. Then it moves on to the next workplace.",
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
      "A friendly character that listens only works if people trust it, so we designed the rules first.",
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
      "Pip lives on a small fog screen. A generator above makes mist so fine it feels dry, and fans on both sides hold it in a flat sheet.",
      "A projector draws Pip on the mist, and a laptop runs Pip and listens through its microphone.",
      "The fog screen is part of the friendliness. A character in the room feels like someone to talk to, not software to operate.",
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
      "Pip needs four things to work. The browser has to hear Gloria and talk back, a model has to turn a messy description like 'our phones never stop' into structure, and the model has to make small, reliable changes in real time.",
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
      "The biggest lesson: people opened up to a character in a way they never did with a text box. Friendliness is a feature, not decoration.",
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
      "Gloria's front desk spends less time on hold-and-callback. Her patients, including older patients who prefer Spanish and bigger text, can check in from home.",
      "The neighborhood gets a clinic that is easier to reach, without the clinic paying a developer.",
      "Anyone who can describe a problem can build with Pip: a corner store, a salon, a food-bank coordinator. Offer to let a judge tell Pip about one.",
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
      "Pip lets anyone who can describe a problem build the software for it, by talking to someone friendly instead of a machine.",
      "Invite the judges to walk up and tell Pip what's been hard this week. Thank you.",
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
  line: "Pip is a friendly character that helps anyone build the app they need by talking it through.",
};

export const humanSlide = {
  heading: "The future of AI is human",
  commandLabel: "We can already tell AI what to do",
  command: "build me a patient check-in app",
  humanLabel: "But people connect best with people, especially people who aren't comfortable with technology",
  humanLine: "Hi! What's been hardest this week?",
};

export const personaSlide = {
  heading: "Gloria runs a family clinic",
  facts: [
    { key: "Who", value: "Gloria, 56, clinic director" },
    { key: "Clinic", value: "East Los Angeles, two doctors and a front desk of two" },
    { key: "Patients", value: "Mostly walk-ins, many more at home in Spanish" },
    { key: "Tech", value: "A scheduling system she didn't choose, and her phone" },
    { key: "AI builders", value: "Tried one once and closed it when it showed her code" },
  ],
  dayStartHour: 7,
  dayEndHour: 20,
  ticks: [7, 10, 13, 16, 20],
  blocks: [
    { label: "Opening", from: 7, to: 8 },
    { label: "Patients", from: 8, to: 18 },
  ],
  requestHours: [7.3, 7.8, 8.5, 9.1, 9.7, 10.4, 11.2, 12.1, 13.3, 14.2, 15.0, 16.1, 17.2, 18.4, 19.3],
  lostRequestHour: 14.2,
  moments: [
    { hour: 7, text: "The phones start before the doors open." },
    { hour: 14.2, text: "A voicemail about a refill gets missed." },
    { hour: 20, text: "She is still returning calls after closing." },
  ],
  requestsLabel: "Calls about wait times and refills",
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

export const ownersSlide = {
  heading: "What clinic staff and owners told us",
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
  promise: "If you can describe your problem to a friend, you can build with Pip.",
};

export const brokenSlide = {
  heading: "Today's builders feel made for engineers",
  todayLabel: "Today",
  pipLabel: "With Pip",
  promptPlaceholder: "Describe the app you want to build",
  buriedQuestions: [
    "Can patients see how long the wait is?",
    "How many walk-ins can we take a day?",
    "Do my patients read Spanish?",
  ],
  conversation: [
    { who: "Pip", text: "Hi Gloria! What's been hardest this week?" },
    { who: ownerName, text: "The phones. They never stop." },
    { who: "Pip", text: "Tell me about the calls." },
  ],
  todayCaption: "Gloria's real questions end up buried under the technical ones, so she closes the tab.",
  pipCaption: "Pip starts with a hello and talks with her in her own words.",
};

export const friendlySlide = {
  heading: "Pip feels like talking to a person",
  todayLabel: "An AI builder today",
  pipLabel: "Pip",
  rows: [
    { id: "start", aspect: "Starts with", today: "A blank box", pip: "“Hi! What's been hard this week?”" },
    {
      id: "words",
      aspect: "Talks in",
      today: "Fields, components and deploys",
      pip: "Your words, in English or Spanish",
    },
    { id: "shows", aspect: "Shows you", today: "Code you can't check", pip: "What it heard, so you can fix it" },
    { id: "asks", aspect: "Asks", today: "For everything at once", pip: "One question at a time" },
    { id: "stuck", aspect: "When something breaks", today: "An error message", pip: "“Let me try that another way.”" },
    { id: "face", aspect: "Looks like", today: "A text field", pip: "A face and a voice you can wave a hand through" },
  ],
};

export const journeySlide = {
  heading: "Four steps from a conversation to a working app",
  steps: [
    { id: "say", name: "Say it", text: "Describe the problem out loud, the way you would tell a friend." },
    { id: "shape", name: "Shape it", text: "Answer one plain question at a time." },
    { id: "try", name: "Try it", text: "Pip plays a patient and finds what is missing." },
    { id: "launch", name: "Launch it", text: "Say the word and get a live page with a QR code." },
  ],
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

export const trySlide = {
  heading: "Pip tests the app by playing a patient",
  persona: "Pip, playing Don Ernesto",
  lines: [
    { who: "patient", text: "I'd like to come in this afternoon. My cough won't go away." },
    { who: "patient", text: "My daughter translates for me, and there was nowhere to say so." },
    { who: "owner", text: "Add a box for notes." },
  ],
  fixed: "Every check-in now has a notes box, and interpreter requests show on the front desk list.",
  gapLabel: "Missing: a place for notes",
};

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

export const routeSlide = {
  heading: "Pip can also come to you",
  facts: [
    { key: "For", value: "Workplaces too busy to sit down and talk for ten minutes" },
    { key: "How", value: "Pip spends about a week at the workplace, then moves on" },
    { key: "Where", value: "Clinics, stores, salons, food banks" },
  ],
  listensTitle: "At every stop, Pip listens to",
  streams: [
    {
      id: "complaints",
      name: "Complaints from patients and customers",
      example: "I've been on hold for twenty minutes.",
    },
    { id: "needs", name: "Needs from staff", example: "Who's covering the front desk Thursday?" },
    { id: "talk", name: "Everyday conversation", example: "I wrote that refill on a sticky note somewhere." },
  ],
  stops: [
    { id: "clinic", name: "Gloria's clinic", week: "Week 1" },
    { id: "market", name: "Corner market", week: "Week 2" },
    { id: "salon", name: "Salon", week: "Week 3" },
    { id: "foodBank", name: "Food bank", week: "Week 4" },
  ],
};

export const trustSlide = {
  heading: "Pip listens in the open",
  rules: [
    {
      id: "visible",
      rule: "You can see it listening",
      detail: "Pip glows on the fog screen whenever its microphone is on.",
    },
    {
      id: "consent",
      rule: "Everyone is told first",
      detail: "Signs go up at the door, staff agree before the visit, and anyone can say “Pip, pause.”",
    },
    {
      id: "patterns",
      rule: "It keeps patterns, not recordings",
      detail: "Pip remembers that patients asked about the wait 30 times, not who asked.",
    },
    {
      id: "owner",
      rule: "The owner decides",
      detail: "Nothing gets built without a yes, and every tool can be switched off.",
    },
    { id: "health", rule: "Health details stay out", detail: "In clinics, Pip ignores health information by default." },
    {
      id: "leaves",
      rule: "The listening leaves with Pip",
      detail: "When the visit ends, the microphone goes too. Only the tools stay.",
    },
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
    { id: "talk", name: "Gloria talks", detail: '"Our phones never stop"' },
    { id: "hear", name: "The browser hears her", detail: "Speech recognition and speech synthesis" },
    { id: "structure", name: "A model finds the structure", detail: "Who, clinic, problem, goal" },
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
    { icon: "customer", text: "The pretend patient catching a missing notes box was our most useful AI moment." },
  ],
};

export const benefitsSlide = {
  heading: "Who else benefits",
  center: ownerName,
  rings: [
    { id: "helpers", who: "Her front desk", text: "spends less time on hold and callbacks." },
    { id: "customers", who: "Her patients", text: "join the list from home, in Spanish or English." },
    { id: "neighbors", who: "The neighborhood", text: "gets a clinic that is easier to reach." },
  ],
  othersTitle: "Anyone who can describe a problem",
  others: ["A corner store", "A neighborhood salon", "A food-bank shift coordinator"],
};

export const standardsSlide = {
  heading: "How Pip meets the prompt",
  rows: [
    {
      standard: "Original",
      where:
        "A friendly character on a fog screen is the building interface, and it tests the app by playing a patient.",
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
      where: 'The four steps and "What I heard" explain the idea without slides.',
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
