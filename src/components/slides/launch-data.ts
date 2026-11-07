import { launchSlide } from "@/content/content";

export type BakeLine = { item: string; count: number; notes: string[] };

/** Adds the reservations up into the order Marisol sends the bakery. */
export function bakeryOrder(): BakeLine[] {
  const lines = new Map<string, BakeLine>();
  for (const order of launchSlide.orders) {
    const line = lines.get(order.item) ?? { item: order.item, count: 0, notes: [] };
    line.count += order.count;
    if ("note" in order && order.note) line.notes.push(order.note);
    lines.set(order.item, line);
  }
  return [...lines.values()].sort((a, b) => b.count - a.count);
}
