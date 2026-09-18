"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Search } from "lucide-react";
import type { Case } from "@/types/case";
import { useInvestigation } from "@/context/investigation-context";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { isEvidenceUnlocked, resolveUnlockHint } from "@/lib/evidence-unlock";
import { EvidenceCard } from "./EvidenceCard";
import { EvidenceModal } from "./EvidenceModal";

export function EvidenceGrid({ caseData }: { caseData: Case }) {
  const { stats, isEvidenceViewed, isTestimonyReviewed, isLocationVisited, viewEvidence } =
    useInvestigation();
  const [openId, setOpenId] = useState<string | null>(null);

  const openEvidence = caseData.evidences.find((e) => e.id === openId);
  const locationName = openEvidence
    ? caseData.locations.find((l) => l.id === openEvidence.locationId)?.name
    : undefined;

  function handleOpen(id: string) {
    setOpenId(id);
    viewEvidence(id);
  }

  const unlockedCount = caseData.evidences.filter((e) =>
    isEvidenceUnlocked(e, { isEvidenceViewed, isTestimonyReviewed, isLocationVisited }),
  ).length;

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        eyebrow={caseData.caseNumber}
        title="Evidencias"
        description="Documentos, fotografías, comunicaciones y hallazgos forenses recolectados durante la investigación. Algunas permanecen bloqueadas hasta seguir la pista correcta."
        action={
          <span className="font-mono text-xs text-ink-faint">
            {stats.evidencesFound}/{stats.evidencesTotal} descubiertas
            {unlockedCount < caseData.evidences.length && (
              <> · {caseData.evidences.length - unlockedCount} bloqueadas</>
            )}
          </span>
        }
      />

      {caseData.evidences.length === 0 ? (
        <EmptyState icon={Search} title="Todavía no hay evidencias cargadas para este caso." />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseData.evidences.map((evidence) => {
            const unlocked = isEvidenceUnlocked(evidence, {
              isEvidenceViewed,
              isTestimonyReviewed,
              isLocationVisited,
            });
            return (
              <EvidenceCard
                key={evidence.id}
                evidence={evidence}
                viewed={isEvidenceViewed(evidence.id)}
                locked={!unlocked}
                unlockHint={!unlocked ? resolveUnlockHint(evidence, caseData) : undefined}
                onOpen={() => handleOpen(evidence.id)}
              />
            );
          })}
        </div>
      )}

      <AnimatePresence>
        {openEvidence && (
          <EvidenceModal
            evidence={openEvidence}
            locationName={locationName}
            onClose={() => setOpenId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
