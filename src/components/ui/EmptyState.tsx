import type { LucideIcon } from "lucide-react";

export function EmptyState({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-md border border-dashed border-border-strong bg-panel/40 px-6 py-16 text-center">
      <Icon className="h-6 w-6 text-ink-faint" strokeWidth={1.5} />
      <p className="text-sm font-medium text-ink-muted">{title}</p>
      {description && <p className="max-w-sm text-xs text-ink-faint">{description}</p>}
    </div>
  );
}
