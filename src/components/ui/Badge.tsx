import type { ReactNode } from "react";

type BadgeVariant = "neutral" | "case" | "amber" | "signal";

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "bg-white/[0.04] text-ink-muted border-border-strong",
  case: "bg-case-soft text-case border-case/30",
  amber: "bg-amber-soft text-amber border-amber/30",
  signal: "bg-signal-soft text-signal border-signal/30",
};

export function Badge({
  children,
  variant = "neutral",
  className = "",
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
