import { launchSlide } from "@/content/content";

export type BakeLine = { item: string; count: number; notes: string[] };

/** Adds the orders up into the list the team bakes from. */
export function bakeList(): BakeLine[] {
  const lines = new Map<string, BakeLine>();
  for (const order of launchSlide.orders) {
    const line = lines.get(order.item) ?? { item: order.item, count: 0, notes: [] };
    line.count += order.count;
    if ("note" in order && order.note) line.notes.push(order.note);
    lines.set(order.item, line);
  }
  return [...lines.values()].sort((a, b) => b.count - a.count);
}
