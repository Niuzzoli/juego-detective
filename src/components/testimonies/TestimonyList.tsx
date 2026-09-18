"use client";

import { useRef, useState } from "react";
import { MessageSquare } from "lucide-react";
import type { Case } from "@/types/case";
import { useInvestigation } from "@/context/investigation-context";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { TestimonyCard } from "./TestimonyCard";

export function TestimonyList({ caseData }: { caseData: Case }) {
  const { stats, isTestimonyReviewed, reviewTestimony } = useInvestigation();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  function handleToggle(id: string) {
    const next = expandedId === id ? null : id;
    setExpandedId(next);
    if (next) reviewTestimony(id);
  }

  function handleJumpTo(id: string) {
    setExpandedId(id);
    reviewTestimony(id);
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function resolvePerson(testimonyId: string) {
    return caseData.testimonies.find((t) => t.id === testimonyId)?.personName;
  }

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        eyebrow={caseData.caseNumber}
        title="Testimonios"
        description="Declaraciones registradas durante los interrogatorios. Compará fechas, horarios y detalles entre sí."
        action={
          <span className="font-mono text-xs text-ink-faint">
            {stats.testimoniesReviewed}/{stats.testimoniesTotal} revisados
          </span>
        }
      />

      {caseData.testimonies.length === 0 ? (
        <EmptyState icon={MessageSquare} title="Todavía no hay testimonios cargados para este caso." />
      ) : (
        <div className="flex flex-col gap-3">
          {caseData.testimonies.map((testimony) => (
            <div key={testimony.id} ref={(el) => { refs.current[testimony.id] = el; }}>
              <TestimonyCard
                testimony={testimony}
                reviewed={isTestimonyReviewed(testimony.id)}
                expanded={expandedId === testimony.id}
                onToggle={() => handleToggle(testimony.id)}
                resolvePerson={resolvePerson}
                onJumpTo={handleJumpTo}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
