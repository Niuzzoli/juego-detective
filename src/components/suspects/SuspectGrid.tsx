"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Users } from "lucide-react";
import type { Case } from "@/types/case";
import { useInvestigation } from "@/context/investigation-context";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { SuspectCard } from "./SuspectCard";
import { SuspectModal } from "./SuspectModal";

export function SuspectGrid({ caseData }: { caseData: Case }) {
  const { stats, isSuspectAnalyzed, analyzeSuspect } = useInvestigation();
  const [openId, setOpenId] = useState<string | null>(null);

  const openSuspect = caseData.suspects.find((s) => s.id === openId);

  function handleOpen(id: string) {
    setOpenId(id);
    analyzeSuspect(id);
  }

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        eyebrow={caseData.caseNumber}
        title="Sospechosos"
        description="Personas de interés identificadas durante la investigación. Ninguna es culpable por defecto: la evidencia decide."
        action={
          <span className="font-mono text-xs text-ink-faint">
            {stats.suspectsAnalyzed}/{stats.suspectsTotal} analizados
          </span>
        }
      />

      {caseData.suspects.length === 0 ? (
        <EmptyState icon={Users} title="Todavía no hay sospechosos cargados para este caso." />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseData.suspects.map((suspect) => (
            <SuspectCard
              key={suspect.id}
              suspect={suspect}
              analyzed={isSuspectAnalyzed(suspect.id)}
              onOpen={() => handleOpen(suspect.id)}
            />
          ))}
        </div>
      )}

      <AnimatePresence>
        {openSuspect && <SuspectModal suspect={openSuspect} onClose={() => setOpenId(null)} />}
      </AnimatePresence>
    </div>
  );
}
