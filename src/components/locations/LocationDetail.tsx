"use client";

import { motion } from "motion/react";
import { Lock, MapPin } from "lucide-react";
import type { CaseLocation, Evidence } from "@/types/case";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { evidenceCategoryLabels } from "@/lib/labels";
import { categoryIcons } from "@/components/evidence/evidence-meta";

export function LocationDetail({
  location,
  evidences,
  visited,
  isEvidenceLocked,
}: {
  location: CaseLocation | null;
  evidences: Evidence[];
  visited: boolean;
  isEvidenceLocked: (evidence: Evidence) => boolean;
}) {
  if (!location) {
    return (
      <EmptyState
        icon={MapPin}
        title="Seleccioná una ubicación en el mapa"
        description="Cada punto marcado corresponde a un lugar relevante para la investigación."
      />
    );
  }

  return (
    <motion.div
      key={location.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-5 rounded-md border border-border bg-panel/50 p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink">{location.name}</h3>
        <Badge variant={visited ? "signal" : "neutral"}>
          {visited ? "Visitada" : "No visitada"}
        </Badge>
      </div>

      <p className="text-sm leading-relaxed text-ink-muted">{location.description}</p>

      <div className="flex flex-col gap-3 border-t border-border pt-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
          Evidencias asociadas
        </span>
        {evidences.length === 0 ? (
          <p className="text-xs text-ink-faint">No hay evidencias registradas en este lugar.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {evidences.map((evidence) => {
              const locked = isEvidenceLocked(evidence);
              const Icon = locked ? Lock : categoryIcons[evidence.category];
              return (
                <li
                  key={evidence.id}
                  className={`flex items-center gap-3 rounded-sm border border-border bg-white/[0.02] px-3 py-2 ${
                    locked ? "opacity-60" : ""
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-ink-faint" strokeWidth={1.75} />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-ink">
                      {locked ? "Evidencia bloqueada" : evidence.title}
                    </span>
                    <span className="text-[10px] text-ink-faint">
                      {evidence.code} · {evidenceCategoryLabels[evidence.category]}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
