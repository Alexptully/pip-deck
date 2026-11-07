/**
 * Team placeholders. Replace anything in square brackets before pitching.
 * A value still in square brackets renders as a visible placeholder slot.
 */
export const config = {
  productName: "Pip",
  teamName: "Group 7",
  teamMembers: ["Alex Tully", "Daisy Wang", "Ame Wang", "Jerry Wu", "Cara Austring"],
  event: "Innovator's Forum, Fall 2026",
  prompt: "Prompt 3a: What does the future of vibe coding look like?",
  demoUrl: "[DEMO URL]",
  demoUrlLabel: "[DEMO URL]",
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
