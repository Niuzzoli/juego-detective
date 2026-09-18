"use client";

import { motion } from "motion/react";
import { Clock, MapPin, X } from "lucide-react";
import type { Evidence } from "@/types/case";
import { evidenceCategoryLabels, importanceLabels } from "@/lib/labels";
import { Badge } from "@/components/ui/Badge";
import { categoryIcons, importanceBadgeVariant } from "./evidence-meta";

export function EvidenceModal({
  evidence,
  locationName,
  onClose,
}: {
  evidence: Evidence;
  locationName?: string;
  onClose: () => void;
}) {
  const Icon = categoryIcons[evidence.category];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-void/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        layoutId={`evidence-card-${evidence.id}`}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[85vh] w-full max-w-lg flex-col gap-6 overflow-y-auto rounded-md border border-border-strong bg-panel-raised p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            {evidence.code}
          </span>
          <button
            onClick={onClose}
            className="rounded-sm p-1 text-ink-faint transition-colors hover:bg-white/[0.06] hover:text-ink"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>

        <div className="flex h-24 w-24 items-center justify-center rounded-sm border border-border-strong bg-white/[0.03] text-ink-muted">
          <Icon className="h-9 w-9" strokeWidth={1.5} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-ink">{evidence.title}</h2>
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge>{evidenceCategoryLabels[evidence.category]}</Badge>
            <Badge variant={importanceBadgeVariant[evidence.importance]}>
              Importancia {importanceLabels[evidence.importance]}
            </Badge>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-ink-muted">{evidence.description}</p>

        <div className="flex flex-col gap-3 border-t border-border pt-5 text-xs text-ink-muted">
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-ink-faint" strokeWidth={1.75} />
            <span>{evidence.foundAt}</span>
          </div>
          {locationName && (
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-ink-faint" strokeWidth={1.75} />
              <span>{locationName}</span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
