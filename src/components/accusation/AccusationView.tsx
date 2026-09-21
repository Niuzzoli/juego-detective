"use client";

import { useState } from "react";
import { AlertTriangle, Gavel } from "lucide-react";
import type { Case } from "@/types/case";
import { useInvestigation } from "@/context/investigation-context";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { isEvidenceUnlocked } from "@/lib/evidence-unlock";
import { SuspectPicker } from "./SuspectPicker";
import { EvidencePickerMulti } from "./EvidencePickerMulti";
import { AccusationResult } from "./AccusationResult";
import { AccusationPendingChoice } from "./AccusationPendingChoice";

export function AccusationView({ caseData }: { caseData: Case }) {
  const {
    state,
    submitAccusation,
    revealVerdict,
    retryAccusation,
    clearAccusation,
    isEvidenceViewed,
    isTestimonyReviewed,
    isLocationVisited,
  } = useInvestigation();
  const [selectedSuspectId, setSelectedSuspectId] = useState<string | null>(null);
  const [selectedEvidenceIds, setSelectedEvidenceIds] = useState<string[]>([]);
  const [confirming, setConfirming] = useState(false);

  if (state.accusation) {
    return (
      <div className="flex flex-col gap-8">
        <SectionHeader eyebrow={caseData.caseNumber} title="Acusación" />
        <AccusationResult
          caseData={caseData}
          accusation={state.accusation}
          onRetry={() => {
            clearAccusation();
            setSelectedSuspectId(null);
            setSelectedEvidenceIds([]);
            setConfirming(false);
          }}
        />
      </div>
    );
  }

  if (state.pendingIncorrectAccusation) {
    return (
      <div className="flex flex-col gap-8">
        <SectionHeader eyebrow={caseData.caseNumber} title="Acusación" />
        <AccusationPendingChoice
          caseData={caseData}
          suspectId={state.pendingIncorrectAccusation.suspectId}
          onReveal={revealVerdict}
          onRetry={() => {
            retryAccusation();
            setSelectedSuspectId(null);
            setSelectedEvidenceIds([]);
            setConfirming(false);
          }}
        />
      </div>
    );
  }

  const availableEvidences = caseData.evidences.filter((e) =>
    isEvidenceUnlocked(e, { isEvidenceViewed, isTestimonyReviewed, isLocationVisited }),
  );
  const canSubmit = Boolean(selectedSuspectId) && selectedEvidenceIds.length > 0;

  function toggleEvidence(id: string) {
    setSelectedEvidenceIds((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id],
    );
  }

  function handleSelectSuspect(id: string) {
    setSelectedSuspectId(id);
    setConfirming(false);
  }

  function handleConfirm() {
    if (!selectedSuspectId) return;
    submitAccusation(selectedSuspectId, selectedEvidenceIds);
  }

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        eyebrow={caseData.caseNumber}
        title="Acusación"
        description="Elegí a la persona que creés responsable y citá la evidencia que sostiene tu teoría."
      />

      <div className="flex flex-col gap-3">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          1. ¿Quién es el responsable?
        </h3>
        <SuspectPicker
          suspects={caseData.suspects}
          selectedId={selectedSuspectId}
          onSelect={handleSelectSuspect}
          discardedIds={state.discardedSuspectIds}
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          2. ¿Qué evidencia sostiene tu acusación?
        </h3>
        <EvidencePickerMulti
          evidences={availableEvidences}
          selectedIds={selectedEvidenceIds}
          onToggle={toggleEvidence}
        />
      </div>

      {!confirming ? (
        <button
          onClick={() => setConfirming(true)}
          disabled={!canSubmit}
          className="inline-flex w-fit items-center gap-2 rounded-sm border border-case/40 bg-case-soft px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-case transition-colors enabled:hover:bg-case enabled:hover:text-void disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Gavel className="h-3.5 w-3.5" strokeWidth={1.75} />
          Presentar acusación
        </button>
      ) : (
        <div className="flex flex-col gap-3 rounded-md border border-case/30 bg-case-soft/40 p-5">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="h-4 w-4 shrink-0 text-case" strokeWidth={1.75} />
            <p className="text-sm text-ink">
              Si acertás, vas a ver la resolución completa del caso. Si no, vas a poder elegir
              entre conocer el veredicto o volver a intentarlo con otro sospechoso. ¿Confirmás?
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleConfirm}
              className="inline-flex items-center gap-2 rounded-sm border border-case/40 bg-case px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-void transition-colors hover:bg-case/90"
            >
              Confirmar acusación
            </button>
            <button
              onClick={() => setConfirming(false)}
              className="inline-flex items-center gap-2 rounded-sm border border-border-strong px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-ink"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
