"use client";

import { motion } from "motion/react";
import { Gavel, Target } from "lucide-react";
import type { Case } from "@/types/case";
import { useInvestigation } from "@/context/investigation-context";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProgressStat } from "@/components/ui/ProgressStat";
import { Badge } from "@/components/ui/Badge";
import { StatusStamp } from "@/components/ui/StatusStamp";
import { effectiveStatus } from "@/lib/case-status";

function fieldsFor(caseData: Case) {
  return [
    { label: "Fecha del incidente", value: caseData.incidentDate },
    { label: "Ubicación", value: caseData.location },
    { label: "Víctima", value: `${caseData.victim.name} (${caseData.victim.age})` },
    { label: "Ocupación de la víctima", value: caseData.victim.occupation },
    { label: "Investigador a cargo", value: caseData.leadInvestigator },
  ];
}

export function ExpedienteView({ caseData }: { caseData: Case }) {
  const { stats, state } = useInvestigation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-10"
    >
      <SectionHeader
        eyebrow={caseData.caseNumber}
        title={caseData.title}
        description={caseData.summary}
        action={<StatusStamp status={effectiveStatus(caseData, state.accusation)} />}
      />

      {state.accusation && (
        <section
          className={`flex items-center gap-3 rounded-md border p-4 text-sm ${
            state.accusation.correct
              ? "border-signal/30 bg-signal-soft/40 text-ink"
              : "border-case/25 bg-case-soft/40 text-ink"
          }`}
        >
          <Gavel className={`h-4 w-4 shrink-0 ${state.accusation.correct ? "text-signal" : "text-case"}`} strokeWidth={1.75} />
          <span>
            {state.accusation.correct
              ? "Presentaste una acusación y acertaste. Revisá la sección Acusación para ver la resolución completa."
              : "Ya presentaste una acusación para este caso, pero no fue la correcta. Podés revisarla en la sección Acusación."}
          </span>
        </section>
      )}

      <section className="grid grid-cols-1 gap-x-8 gap-y-4 rounded-md border border-border bg-panel/50 p-6 sm:grid-cols-2">
        {fieldsFor(caseData).map((field) => (
          <div key={field.label} className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-[0.1em] text-ink-faint">
              {field.label}
            </span>
            <span className="text-sm text-ink">{field.value}</span>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          Resumen de lo ocurrido
        </h3>
        <p className="text-sm leading-relaxed text-ink-muted">{caseData.description}</p>
      </section>

      <section className="flex flex-col gap-3 rounded-md border border-case/25 bg-case-soft/40 p-6">
        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-case" strokeWidth={1.75} />
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-case">Objetivo</h3>
        </div>
        <p className="text-sm font-medium leading-relaxed text-ink">{caseData.objective}</p>
      </section>

      <section className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            Progreso de la investigación
          </h3>
          <Badge variant={stats.hypothesesCreated > 0 ? "signal" : "neutral"}>
            {stats.hypothesesCreated} hipótesis
          </Badge>
        </div>
        <div className="grid grid-cols-1 gap-6 rounded-md border border-border bg-panel/50 p-6 sm:grid-cols-2 lg:grid-cols-4">
          <ProgressStat
            label="Evidencias encontradas"
            value={stats.evidencesFound}
            total={stats.evidencesTotal}
          />
          <ProgressStat
            label="Sospechosos analizados"
            value={stats.suspectsAnalyzed}
            total={stats.suspectsTotal}
          />
          <ProgressStat
            label="Testimonios revisados"
            value={stats.testimoniesReviewed}
            total={stats.testimoniesTotal}
          />
          <ProgressStat label="Hipótesis creadas" value={stats.hypothesesCreated} />
        </div>
      </section>
    </motion.div>
  );
}
