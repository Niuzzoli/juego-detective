import type { CaseStatus } from "@/types/case";
import { statusLabels } from "@/lib/labels";

const statusColors: Record<CaseStatus, string> = {
  unsolved: "text-case border-case/40",
  solved: "text-signal border-signal/40",
  archived: "text-ink-muted border-border-strong",
};

export function StatusStamp({ status, className = "" }: { status: CaseStatus; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-sm border px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] ${statusColors[status]} ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-blink-dot rounded-full bg-current" />
      </span>
      {statusLabels[status]}
    </span>
  );
}
