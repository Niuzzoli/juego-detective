"use client";

import { AnimatePresence, motion } from "motion/react";
import { AlertTriangle, ChevronDown, Lightbulb, Quote } from "lucide-react";

import type { Testimony } from "@/types/case";

export function TestimonyCard({
  testimony,
  reviewed,
  expanded,
  onToggle,
  resolvePerson,
  onJumpTo,
}: {
  testimony: Testimony;
  reviewed: boolean;
  expanded: boolean;
  onToggle: () => void;
  resolvePerson: (testimonyId: string) => string | undefined;
  onJumpTo: (testimonyId: string) => void;
}) {
  const hasContradictions = Boolean(testimony.contradicts?.length);

  return (
    <div
      className={`overflow-hidden rounded-md border bg-panel/50 transition-colors duration-200 ${
        hasContradictions ? "border-case/25 hover:border-case/40" : "border-border hover:border-border-strong"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <span
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${reviewed ? "bg-signal" : "bg-ink-faint/40"}`}
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-ink">{testimony.personName}</span>
            <span className="text-xs text-ink-faint">
              {testimony.date} · {testimony.time} · {testimony.location}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {hasContradictions && (
            <span className="flex items-center gap-1.5 rounded-sm border border-case/30 bg-case-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-case">
              <AlertTriangle className="h-3 w-3" strokeWidth={1.75} />
              Contradicción
            </span>
          )}
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-ink-faint transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
            strokeWidth={1.75}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 border-t border-border px-5 py-4">
              <div className="flex gap-3">
                <Quote className="h-4 w-4 shrink-0 text-ink-faint" strokeWidth={1.75} />
                <p className="text-sm italic leading-relaxed text-ink">{testimony.content}</p>
              </div>

              {hasContradictions && (
                <div className="flex flex-col gap-2 rounded-sm border border-case/25 bg-case-soft/40 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-3.5 w-3.5 text-case" strokeWidth={1.75} />
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-case">
                      Contradicciones detectadas
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {testimony.contradicts?.map((c) => (
                      <li key={c.testimonyId} className="flex flex-col gap-1.5 text-xs text-ink-muted">
                        <span>{c.note}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onJumpTo(c.testimonyId);
                          }}
                          className="w-fit text-[11px] font-medium text-case underline-offset-2 hover:underline"
                        >
                          Ver testimonio de {resolvePerson(c.testimonyId) ?? "otra persona"}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {testimony.clues.length > 0 && (
                <div className="flex flex-col gap-2 rounded-sm border border-amber/20 bg-amber-soft/40 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-3.5 w-3.5 text-amber" strokeWidth={1.75} />
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-amber">
                      Pistas
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {testimony.clues.map((clue, i) => (
                      <li key={i} className="flex gap-2 text-xs text-ink-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                        {clue}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
