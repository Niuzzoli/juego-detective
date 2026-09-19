"use client";

import { motion } from "motion/react";
import { Lock } from "lucide-react";
import type { Evidence } from "@/types/case";
import { evidenceCategoryLabels, importanceLabels } from "@/lib/labels";
import { Badge } from "@/components/ui/Badge";
import { categoryIcons, importanceBadgeVariant } from "./evidence-meta";

export function EvidenceCard({
  evidence,
  viewed,
  locked,
  unlockHint,
  onOpen,
}: {
  evidence: Evidence;
  viewed: boolean;
  locked: boolean;
  unlockHint?: string;
  onOpen: () => void;
}) {
  const Icon = categoryIcons[evidence.category];

  if (locked) {
    return (
      <div className="flex cursor-not-allowed flex-col gap-4 rounded-md border border-dashed border-border-strong bg-panel/25 p-5 text-left opacity-70">
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
            {evidence.code}
          </span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink-faint/40" title="Bloqueada" />
        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-sm border border-border-strong bg-white/[0.02] text-ink-faint">
          <Lock className="h-5 w-5" strokeWidth={1.5} />
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="text-sm font-semibold text-ink-faint">Evidencia bloqueada</h3>
          {unlockHint && <p className="text-xs leading-relaxed text-ink-faint">{unlockHint}</p>}
        </div>

        <div className="mt-auto pt-1">
          <Badge>{evidenceCategoryLabels[evidence.category]}</Badge>
        </div>
      </div>
    );
  }

  return (
    <motion.button
      onClick={onOpen}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.18 }}
      className="group flex flex-col gap-4 rounded-md border border-border bg-panel/50 p-5 text-left transition-colors duration-200 hover:border-border-strong hover:bg-panel"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
          {evidence.code}
        </span>
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${viewed ? "bg-signal" : "bg-ink-faint/40"}`}
          title={viewed ? "Descubierta" : "No descubierta"}
        />
      </div>

      <div className="flex h-16 w-16 items-center justify-center rounded-sm border border-border-strong bg-white/[0.03] text-ink-muted transition-colors group-hover:text-ink">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm font-semibold text-ink">{evidence.title}</h3>
        <p className="line-clamp-2 text-xs leading-relaxed text-ink-muted">
          {evidence.description}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-1">
        <Badge>{evidenceCategoryLabels[evidence.category]}</Badge>
        <Badge variant={importanceBadgeVariant[evidence.importance]}>
          {importanceLabels[evidence.importance]}
        </Badge>
      </div>
    </motion.button>
  );
}
