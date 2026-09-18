"use client";

import { motion } from "motion/react";
import { Check, RotateCcw, X } from "lucide-react";
import type { Accusation, Case } from "@/types/case";
import { Badge } from "@/components/ui/Badge";

export function AccusationResult({
  caseData,
  accusation,
  onRetry,
}: {
  caseData: Case;
  accusation: Accusation;
  onRetry: () => void;
}) {
  const accused = caseData.suspects.find((s) => s.id === accusation.suspectId);
  const guilty = caseData.suspects.find((s) => s.id === caseData.solution.guiltySuspectId);
  const keyEvidences = caseData.solution.keyEvidenceIds
    .map((id) => caseData.evidences.find((e) => e.id === id))
    .filter((e): e is NonNullable<typeof e> => Boolean(e));

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6"
    >
      <div
        className={`flex items-center gap-4 rounded-md border p-6 ${
          accusation.correct ? "border-signal/30 bg-signal-soft/40" : "border-case/30 bg-case-soft/40"
        }`}
      >
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 ${
            accusation.correct ? "border-signal text-signal" : "border-case text-case"
          }`}
        >
          {accusation.correct ? (
            <Check className="h-6 w-6" strokeWidth={2} />
          ) : (
            <X className="h-6 w-6" strokeWidth={2} />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <span
            className={`font-mono text-sm font-semibold uppercase tracking-[0.15em] ${
              accusation.correct ? "text-signal" : "text-case"
            }`}
          >
            {accusation.correct ? "Acusación correcta" : "Acusación incorrecta"}
          </span>
          <span className="text-sm text-ink-muted">
            Acusaste a <span className="font-medium text-ink">{accused?.name}</span>.
            {!accusation.correct && guilty && (
              <>
                {" "}
                El verdadero responsable era <span className="font-medium text-ink">{guilty.name}</span>.
              </>
            )}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-md border border-border bg-panel/50 p-6">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          Qué ocurrió realmente
        </h3>
        <p className="text-sm leading-relaxed text-ink">{caseData.solution.explanation}</p>
      </div>

      <div className="flex flex-col gap-3 rounded-md border border-border bg-panel/50 p-6">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          Evidencia clave del caso
        </h3>
        <div className="flex flex-wrap gap-2">
          {keyEvidences.map((evidence) => {
            const cited = accusation.evidenceIds.includes(evidence.id);
            return (
              <Badge key={evidence.id} variant={cited ? "signal" : "neutral"}>
                {cited && <Check className="h-3 w-3" strokeWidth={2} />}
                {evidence.title}
              </Badge>
            );
          })}
        </div>
        <p className="text-xs text-ink-faint">
          Marcadas en verde las que incluiste en tu acusación.
        </p>
      </div>

      <button
        onClick={onRetry}
        className="inline-flex w-fit items-center gap-2 rounded-sm border border-border-strong bg-panel px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-ink"
      >
        <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.75} />
        Reiniciar acusación
      </button>
    </motion.div>
  );
}
