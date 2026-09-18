"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, Brain, Plus, Sparkles } from "lucide-react";
import type { Case } from "@/types/case";
import { useInvestigation } from "@/context/investigation-context";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { isEvidenceUnlocked } from "@/lib/evidence-unlock";
import { EvidenceSlot } from "./EvidenceSlot";
import { HypothesisCard } from "./HypothesisCard";

export function HypothesisBoard({ caseData }: { caseData: Case }) {
  const { state, addHypothesis, isEvidenceViewed, isTestimonyReviewed, isLocationVisited } =
    useInvestigation();
  const [slotA, setSlotA] = useState<string | null>(null);
  const [slotB, setSlotB] = useState<string | null>(null);
  const [text, setText] = useState("");

  const availableEvidences = caseData.evidences.filter((e) =>
    isEvidenceUnlocked(e, { isEvidenceViewed, isTestimonyReviewed, isLocationVisited }),
  );

  const canConnect = Boolean(slotA && slotB);
  const canSave = canConnect && text.trim().length > 0;

  function handleSave() {
    if (!slotA || !slotB || !text.trim()) return;
    addHypothesis([slotA, slotB], text.trim());
    setSlotA(null);
    setSlotB(null);
    setText("");
  }

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        eyebrow={caseData.caseNumber}
        title="Hipótesis"
        description="Conectá dos evidencias y registrá una teoría. Cada hipótesis queda guardada en tu expediente de investigación."
      />

      <div className="flex flex-col gap-6 rounded-md border border-border bg-panel/50 p-6">
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-start">
          <EvidenceSlot
            label="Evidencia A"
            evidences={availableEvidences}
            excludeId={slotB}
            selectedId={slotA}
            onSelect={setSlotA}
          />
          <div className="flex items-center justify-center pt-7 sm:pt-9">
            <Plus className="h-4 w-4 text-ink-faint" strokeWidth={1.75} />
          </div>
          <EvidenceSlot
            label="Evidencia B"
            evidences={availableEvidences}
            excludeId={slotA}
            selectedId={slotB}
            onSelect={setSlotB}
          />
        </div>

        <AnimatePresence>
          {canConnect && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-2 overflow-hidden"
            >
              <ArrowDown className="h-4 w-4 text-ink-faint" strokeWidth={1.75} />
              <span className="flex items-center gap-1.5 rounded-sm border border-case/30 bg-case-soft px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-case">
                <Sparkles className="h-3 w-3" strokeWidth={1.75} />
                Nueva conexión
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col gap-3 border-t border-border pt-5">
          <label htmlFor="hypothesis-text" className="text-xs uppercase tracking-[0.1em] text-ink-faint">
            Tu teoría
          </label>
          <textarea
            id="hypothesis-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Creo que..."
            rows={3}
            className="w-full resize-none rounded-md border border-border bg-white/[0.02] px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-case/40 focus:outline-none"
          />
          <button
            onClick={handleSave}
            disabled={!canSave}
            className="ml-auto inline-flex items-center gap-2 rounded-sm border border-case/40 bg-case-soft px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-case transition-colors enabled:hover:bg-case enabled:hover:text-void disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Brain className="h-3.5 w-3.5" strokeWidth={1.75} />
            Guardar hipótesis
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          Hipótesis guardadas ({state.hypotheses.length})
        </h3>
        {state.hypotheses.length === 0 ? (
          <EmptyState
            icon={Brain}
            title="Todavía no creaste ninguna hipótesis"
            description="Conectá dos evidencias arriba para empezar a construir una teoría."
          />
        ) : (
          <div className="flex flex-col gap-3">
            {state.hypotheses.map((hypothesis) => (
              <HypothesisCard key={hypothesis.id} hypothesis={hypothesis} evidences={caseData.evidences} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
