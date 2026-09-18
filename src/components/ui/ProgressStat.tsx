export function ProgressStat({
  label,
  value,
  total,
}: {
  label: string;
  value: number;
  total?: number;
}) {
  const hasTotal = typeof total === "number";
  const pct = hasTotal && total > 0 ? Math.min(100, (value / total) * 100) : 0;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-xs uppercase tracking-[0.1em] text-ink-muted">{label}</span>
        <span className="font-mono text-sm text-ink">
          {value}
          {hasTotal && <span className="text-ink-faint">/{total}</span>}
        </span>
      </div>
      {hasTotal && (
        <div className="h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-case transition-[width] duration-700 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      )}
    </div>
  );
}
