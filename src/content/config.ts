/**
 * Team placeholders. Replace anything in square brackets before pitching.
 * A value still in square brackets renders as a visible placeholder slot.
 */
export const config = {
  productName: "Pip",
  teamName: "Group 7",
  teamMembers: ["Alex Tully", "Cara Austring", "Daisy Wang", "Jerry Wu", "Ame Wang"],
  event: "Innovator's Forum, Fall 2026",
  prompt: "Prompt 3a: What does the future of vibe coding look like?",
  demoUrl: "https://gloriasclinicbypip.replit.app/",
  demoUrlLabel: "gloriasclinicbypip.replit.app",
  /** Pip plays its recorded lines out loud from the hologram screen. */
  pipSpeaks: true,
  motif: "A sheet of falling mist, the same fog screen Pip lives in, drifts across every slide.",
  ownerQuotes: [
    { quote: "[Quote from a shop owner you interviewed]", who: "[Name, workplace and neighborhood]" },
    { quote: "[Quote from clinic or shop staff]", who: "[Name, role and workplace]" },
    { quote: "[Quote from a third person, if you have one]", who: "[Name, role and workplace]" },
  ],
} as const;

export function isPlaceholder(value: string): boolean {
  return value.startsWith("[") && value.endsWith("]");
}
