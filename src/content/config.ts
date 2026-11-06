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
  /** When true, the deck speaks Pip's answer out loud on the "Any ideas, Pip?" slide. */
  pipSpeaks: true,
  demoUrlLabel: "[DEMO URL]",
  motif: "A sheet of falling mist, the same fog screen Pip lives in, drifts across every slide.",
  ownerQuotes: [
    { quote: "[Quote from a bakery or small-shop owner you interviewed]", who: "[Name, shop and neighborhood]" },
    { quote: "[Quote from a second owner]", who: "[Name, shop and neighborhood]" },
    { quote: "[Quote from a third owner, if you have one]", who: "[Name, shop and neighborhood]" },
  ],
} as const;

export function isPlaceholder(value: string): boolean {
  return value.startsWith("[") && value.endsWith("]");
}
