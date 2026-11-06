export type Source = {
  id: SourceId;
  short: string;
  publisher: string;
  title: string;
  date: string;
  url: string;
  usedFor: string;
};

export type SourceId =
  | "sbaNation2025"
  | "sbaMetroWest2025"
  | "blsOoh"
  | "mdnSpeechSynthesis"
  | "mdnSpeechRecognition"
  | "fogscreenLaminar"
  | "ucsbFogscreen"
  | "fogscreenContent"
  | "promptBrief";

export const sources: Record<SourceId, Source> = {
  sbaNation2025: {
    id: "sbaNation2025",
    short: "SBA Office of Advocacy, 2025 profiles",
    publisher: "U.S. Small Business Administration, Office of Advocacy",
    title: "New Advocacy Report Shows the Number of Small Businesses in the U.S. Exceeds 36 million",
    date: "June 30, 2025",
    url: "https://advocacy.sba.gov/2025/06/30/2025-small-business-profiles-for-the-states-territories-and-nation",
    usedFor: "36.2 million U.S. small businesses (firms with fewer than 500 employees).",
  },
  sbaMetroWest2025: {
    id: "sbaMetroWest2025",
    short: "SBA Office of Advocacy, 2025 metro profile for Los Angeles",
    publisher: "U.S. Small Business Administration, Office of Advocacy",
    title: "2025 Small Business Profiles for Major Metropolitan Areas: West",
    date: "October 2025",
    url: "https://advocacy.sba.gov/wp-content/uploads/2025/10/West_2025_FINAL.pdf",
    usedFor:
      "1.8 million small businesses in the LA metro; 453,201 Hispanic-owned businesses, 91.4% with no employees.",
  },
  blsOoh: {
    id: "blsOoh",
    short: "BLS Occupational Outlook Handbook",
    publisher: "U.S. Bureau of Labor Statistics",
    title: "Occupational Outlook Handbook: Software Developers, Quality Assurance Analysts, and Testers",
    date: "Accessed November 2026",
    url: "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
    usedFor: "Software developers held about 1.7 million U.S. jobs in 2025 (1,717,800 in the projections table).",
  },
  mdnSpeechSynthesis: {
    id: "mdnSpeechSynthesis",
    short: "MDN Web Docs, SpeechSynthesis",
    publisher: "MDN Web Docs (Mozilla)",
    title: "SpeechSynthesis",
    date: "Accessed November 2026",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis",
    usedFor: "Speech synthesis has worked across major browsers since September 2018.",
  },
  mdnSpeechRecognition: {
    id: "mdnSpeechRecognition",
    short: "MDN Web Docs, SpeechRecognition",
    publisher: "MDN Web Docs (Mozilla)",
    title: "SpeechRecognition",
    date: "Accessed November 2026",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition",
    usedFor: "Speech recognition is built into some major browsers but not all (limited availability).",
  },
  fogscreenLaminar: {
    id: "fogscreenLaminar",
    short: "Rakkolainen et al., FogScreen research (SPIE)",
    publisher: "SPIE Digital Library, Ismo Rakkolainen author profile",
    title: "Fogscreen mid-air imaging and walk-through 3D display papers",
    date: "Accessed November 2026",
    url: "https://biomedicaloptics.spiedigitallibrary.org/profile/ismo.rakkolainen-7965",
    usedFor: "A thin fog sheet held inside laminar airflow makes a flat projection surface you can walk through.",
  },
  ucsbFogscreen: {
    id: "ucsbFogscreen",
    short: "UC Santa Barbara, FogScreen report",
    publisher: "UC Santa Barbara, Transliteracies Project",
    title: "FogScreen research report (LEMMA on the FogScreen)",
    date: "Accessed November 2026",
    url: "https://transliteracies.english.ucsb.edu/index.html%3Fp=508.html",
    usedFor:
      "Fans on both sides sandwich the fog so the screen stays stable; users interact with real objects around it.",
  },
  fogscreenContent: {
    id: "fogscreenContent",
    short: "Interesting Audio Visual, FogScreen notes",
    publisher: "Interesting Audio Visual",
    title: "FogScreen holographic display",
    date: "Accessed November 2026",
    url: "https://sites.google.com/view/interesting-audio-visual/products-and-services/fogscreen-holographic-display",
    usedFor:
      "Wire diagrams look better on fog than photos or full-frame video; the fog is dry because the particles are so small.",
  },
  promptBrief: {
    id: "promptBrief",
    short: "Innovator's Forum, Fall 2026 Prompt 3a",
    publisher: "Innovator's Forum",
    title: "3a: What Does the Future of Vibe Coding Look Like?",
    date: "Fall 2026",
    url: "https://piquant-salsa-e30.notion.site/3a-What-Does-the-Future-of-Vibe-Coding-Look-Like-3a464001cdcd80458fb8c20ef548d38b",
    usedFor: "The challenge this deck answers.",
  },
};

export const sourceOrder: SourceId[] = [
  "promptBrief",
  "sbaNation2025",
  "blsOoh",
  "sbaMetroWest2025",
  "mdnSpeechSynthesis",
  "mdnSpeechRecognition",
  "fogscreenLaminar",
  "ucsbFogscreen",
  "fogscreenContent",
];
