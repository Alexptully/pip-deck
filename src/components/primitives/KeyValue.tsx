type Row = { key: string; value: string };

/** Facts as a key and value list, in place of metadata strips. */
export function KeyValue({ rows, className = "" }: { rows: readonly Row[]; className?: string }) {
  return (
    <dl className={`grid grid-cols-[auto_1fr] gap-x-10 gap-y-5 ${className}`}>
      {rows.map((row) => (
        <div key={row.key} className="contents">
          <dt className="type-caption text-text-faint pt-1">{row.key}</dt>
          <dd className="type-body text-text">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
