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
  | "amaAi2024"
  | "thryvAi2025"
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
  amaAi2024: {
    id: "amaAi2024",
    short: "AMA physician AI sentiment survey, 2024",
    publisher: "American Medical Association",
    title: "Physician sentiments around the use of AI in health care: motivations, opportunities, risks, and use cases",
    date: "February 2025 (survey run November 2024)",
    url: "https://www.ama-assn.org/system/files/physician-ai-sentiment-report.pdf",
    usedFor: "66% of 1,183 physicians used AI in their practice in 2024, up from 38% in 2023.",
  },
  thryvAi2025: {
    id: "thryvAi2025",
    short: "Thryv small business AI survey, 2025 (via Chain Store Age)",
    publisher: "Chain Store Age, reporting a Thryv survey",
    title: "Survey: AI usage among small businesses up 41%",
    date: "2025 (survey of 540 small businesses, May 4 to 14, 2025)",
    url: "https://chainstoreage.com/survey-ai-usage-among-small-businesses-41",
    usedFor: "Small business AI use rose from 39% in 2024 to 55% in 2025. Thryv sells software to small businesses.",
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
  "amaAi2024",
  "thryvAi2025",
  "sbaNation2025",
  "blsOoh",
  "mdnSpeechSynthesis",
  "mdnSpeechRecognition",
  "fogscreenLaminar",
  "ucsbFogscreen",
  "fogscreenContent",
];
