import { isPlaceholder } from "@/content/config";

/** Shows a team value, or a clearly marked slot when the team hasn't filled it in yet. */
export function Fill({ value, className = "" }: { value: string; className?: string }) {
  if (!isPlaceholder(value)) return <span className={className}>{value}</span>;
  return (
    <span className={`${className} outline-2 outline-dashed outline-accent-dim outline-offset-4 text-text-muted`}>
      {value}
    </span>
  );
}
