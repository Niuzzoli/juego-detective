"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import type { Case } from "@/types/case";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { TimelineItem } from "./TimelineItem";

export function TimelineView({ caseData }: { caseData: Case }) {
  const [expandedId, setExpandedId] = useState<string | null>(caseData.timeline[0]?.id ?? null);

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        eyebrow={caseData.caseNumber}
        title="Línea temporal"
        description="Reconstrucción cronológica de los hechos conocidos hasta el momento."
      />

      {caseData.timeline.length === 0 ? (
        <EmptyState icon={Clock} title="Todavía no hay una línea temporal cargada para este caso." />
      ) : (
        <div className="flex flex-col">
          {caseData.timeline.map((event, i) => (
            <TimelineItem
              key={event.id}
              event={event}
              locationName={caseData.locations.find((l) => l.id === event.locationId)?.name}
              expanded={expandedId === event.id}
              onToggle={() => setExpandedId(expandedId === event.id ? null : event.id)}
              isLast={i === caseData.timeline.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
