/** A concha drawn in ink: a round bun under a sugar crust scored like a shell. */
export function Concha({ size, className = "" }: { size: number; className?: string }) {
  const fan = [-62, -40, -20, 0, 20, 40, 62];
  return (
    <svg viewBox="0 0 200 140" width={size} height={(size * 140) / 200} className={className} aria-hidden>
      <path
        d="M16 108 C 16 30, 184 30, 184 108 C 150 122, 50 122, 16 108 Z"
        className="fill-paper-shade stroke-ink"
        strokeWidth={5}
        strokeLinejoin="round"
      />
      <path
        d="M30 98 C 34 46, 166 46, 170 98 C 136 106, 64 106, 30 98 Z"
        className="fill-paper stroke-ink-muted"
        strokeWidth={3.5}
        strokeLinejoin="round"
      />
      {fan.map((offset) => (
        <path
          key={offset}
          d={`M100 100 Q ${100 + offset * 0.55} 72 ${100 + offset * 1.05} ${54 + Math.abs(offset) * 0.42}`}
          className="stroke-ink-muted"
          strokeWidth={3.5}
          strokeLinecap="round"
          fill="none"
        />
      ))}
    </svg>
  );
}
