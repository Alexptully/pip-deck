import { launchSlide } from "@/content/content";

export type DeskLine = { visit: string; count: number; notes: string[] };

/** Groups today's check-ins by visit type for the front desk, carrying any notes along. */
export function frontDeskList(): DeskLine[] {
  const lines = new Map<string, DeskLine>();
  for (const checkIn of launchSlide.checkIns) {
    const line = lines.get(checkIn.visit) ?? { visit: checkIn.visit, count: 0, notes: [] };
    line.count += 1;
    if ("note" in checkIn && checkIn.note) line.notes.push(checkIn.note);
    lines.set(checkIn.visit, line);
  }
  return [...lines.values()].sort((a, b) => b.count - a.count);
}
