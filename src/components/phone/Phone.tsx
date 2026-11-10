import type { ReactNode } from "react";

/** A phone, because a phone is the only computer most small workplaces have at the counter. */
export function Phone({
  children,
  width = 430,
  className = "",
}: {
  children: ReactNode;
  width?: number;
  className?: string;
}) {
  const height = Math.round(width * 2.05);
  return (
    <div
      className={`relative overflow-hidden rounded-phone bg-paper text-ink shadow-phone ${className}`}
      style={{ width, height }}
    >
      <div className="absolute left-1/2 top-4 h-7 w-28 -translate-x-1/2 rounded-control bg-ink" aria-hidden />
      <div className="absolute inset-0 overflow-hidden px-8 pb-8 pt-16">{children}</div>
    </div>
  );
}
