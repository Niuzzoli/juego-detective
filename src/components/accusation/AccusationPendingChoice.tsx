"use client";

import { motion } from "motion/react";
import { Eye, RotateCcw, X } from "lucide-react";
import type { Case } from "@/types/case";

export function AccusationPendingChoice({
  caseData,
  suspectId,
  onReveal,
  onRetry,
}: {
  caseData: Case;
  suspectId: string;
  onReveal: () => void;
  onRetry: () => void;
}) {
  const accused = caseData.suspects.find((s) => s.id === suspectId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6"
    >
      <div className="flex items-center gap-4 rounded-md border border-case/30 bg-case-soft/40 p-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-case text-case">
          <X className="h-6 w-6" strokeWidth={2} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-case">
            Acusación incorrecta
          </span>
          <span className="text-sm text-ink-muted">
            <span className="font-medium text-ink">{accused?.name}</span> queda descartado como
            responsable de este caso.
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-md border border-border bg-panel/50 p-6">
        <p className="text-sm leading-relaxed text-ink">
          Todavía no revelamos qué pasó realmente. Podés conocer el veredicto completo ahora, o
          volver a la lista de sospechosos e intentarlo de nuevo — esta vez con la ventaja de
          saber que {accused?.name ?? "esta persona"} no fue quien lo hizo.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onReveal}
            className="inline-flex items-center gap-2 rounded-sm border border-case/40 bg-case px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-void transition-colors hover:bg-case/90"
          >
            <Eye className="h-3.5 w-3.5" strokeWidth={1.75} />
            Conocer el veredicto
          </button>
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 rounded-sm border border-border-strong bg-panel px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-ink"
          >
            <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.75} />
            Volver a intentar
          </button>
        </div>
      </div>
    </motion.div>
  );
}
