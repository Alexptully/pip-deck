/**
 * Team placeholders. Replace anything in square brackets before pitching.
 * A value still in square brackets renders as a visible placeholder slot.
 */
export const config = {
  productName: "Pip",
  teamName: "[TEAM NAME]",
  teamMembers: ["[TEAM MEMBER]", "[TEAM MEMBER]", "[TEAM MEMBER]", "[TEAM MEMBER]"],
  event: "Innovator's Forum, Fall 2026",
  prompt: "Prompt 3a: What does the future of vibe coding look like?",
  demoUrl: "[DEMO URL]",
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
