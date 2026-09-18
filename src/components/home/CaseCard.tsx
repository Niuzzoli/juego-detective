import Link from "next/link";
import { ArrowRight, Calendar, FileSearch, Gauge, MapPin, Users } from "lucide-react";
import type { Case } from "@/types/case";
import { difficultyLabels } from "@/lib/labels";
import { StatusStamp } from "@/components/ui/StatusStamp";

export function CaseCard({ caseData, index = 0 }: { caseData: Case; index?: number }) {
  return (
    <div className="animate-card-in" style={{ animationDelay: `${index * 80}ms` }}>
      <Link
        href={`/case/${caseData.id}`}
        className="group relative block overflow-hidden rounded-md border border-border bg-panel transition-colors duration-300 hover:border-border-strong"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-case/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="flex flex-col gap-6 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
              {caseData.caseNumber}
            </span>
            <StatusStamp status={caseData.status} />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {caseData.title}
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-ink-muted">{caseData.summary}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-border pt-5 text-xs text-ink-muted sm:grid-cols-4">
            <div className="flex items-center gap-2">
              <Gauge className="h-3.5 w-3.5 text-ink-faint" strokeWidth={1.75} />
              <span>Dificultad {difficultyLabels[caseData.difficulty]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-ink-faint" strokeWidth={1.75} />
              <span>{caseData.incidentDate}</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <MapPin className="h-3.5 w-3.5 text-ink-faint" strokeWidth={1.75} />
              <span className="truncate">{caseData.location}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <div className="flex items-center gap-5 text-xs text-ink-muted">
              <div className="flex items-center gap-1.5">
                <FileSearch className="h-3.5 w-3.5 text-ink-faint" strokeWidth={1.75} />
                <span>{caseData.evidences.length} evidencias</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-ink-faint" strokeWidth={1.75} />
                <span>{caseData.suspects.length} sospechosos</span>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 rounded-sm border border-case/40 bg-case-soft px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-case transition-colors duration-200 group-hover:bg-case group-hover:text-void">
              Investigar
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
