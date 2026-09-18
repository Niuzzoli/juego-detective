"use client";

import { useState } from "react";
import type { Case } from "@/types/case";
import { useInvestigation } from "@/context/investigation-context";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { isEvidenceUnlocked } from "@/lib/evidence-unlock";
import { LocationMap } from "./LocationMap";
import { LocationDetail } from "./LocationDetail";

export function LocationsView({ caseData }: { caseData: Case }) {
  const { stats, isEvidenceViewed, isTestimonyReviewed, isLocationVisited, visitLocation } =
    useInvestigation();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = caseData.locations.find((l) => l.id === selectedId) ?? null;
  const selectedEvidences = selected
    ? caseData.evidences.filter((e) => selected.relatedEvidenceIds.includes(e.id))
    : [];

  function handleSelect(id: string) {
    setSelectedId(id);
    visitLocation(id);
  }

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        eyebrow={caseData.caseNumber}
        title="Ubicaciones"
        description="Lugares relevantes para la investigación. Seleccioná un punto para ver su detalle y evidencias asociadas."
        action={
          <span className="font-mono text-xs text-ink-faint">
            {stats.locationsVisited}/{stats.locationsTotal} visitadas
          </span>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        <LocationMap
          locations={caseData.locations}
          selectedId={selectedId}
          visitedIds={caseData.locations.filter((l) => isLocationVisited(l.id)).map((l) => l.id)}
          onSelect={handleSelect}
        />
        <LocationDetail
          location={selected}
          evidences={selectedEvidences}
          visited={selected ? isLocationVisited(selected.id) : false}
          isEvidenceLocked={(evidence) =>
            !isEvidenceUnlocked(evidence, { isEvidenceViewed, isTestimonyReviewed, isLocationVisited })
          }
        />
      </div>
    </div>
  );
}
