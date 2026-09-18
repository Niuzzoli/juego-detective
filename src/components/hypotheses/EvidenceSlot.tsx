"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, FileSearch, X } from "lucide-react";
import type { Evidence } from "@/types/case";

export function EvidenceSlot({
  label,
  evidences,
  excludeId,
  selectedId,
  onSelect,
}: {
  label: string;
  evidences: Evidence[];
  excludeId: string | null;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}) {
  const [open, setOpen] = useState(false);
  const selected = evidences.find((e) => e.id === selectedId) ?? null;
  const options = evidences.filter((e) => e.id !== excludeId);

  return (
    <div className="relative flex-1">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-ink-faint">
        {label}
      </span>

      {selected ? (
        <div className="flex items-center justify-between gap-2 rounded-md border border-case/30 bg-case-soft/40 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <FileSearch className="h-4 w-4 shrink-0 text-case" strokeWidth={1.75} />
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-medium text-ink">{selected.title}</span>
              <span className="text-[10px] text-ink-faint">{selected.code}</span>
            </div>
          </div>
          <button
            onClick={() => onSelect(null)}
            className="shrink-0 rounded-sm p-1 text-ink-faint hover:bg-white/[0.06] hover:text-ink"
            aria-label="Quitar evidencia"
          >
            <X className="h-3.5 w-3.5" strokeWidth={1.75} />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-2 rounded-md border border-dashed border-border-strong bg-panel/40 px-4 py-3 text-left text-sm text-ink-faint transition-colors hover:border-case/40 hover:text-ink-muted"
        >
          Seleccionar evidencia
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} strokeWidth={1.75} />
        </button>
      )}

      <AnimatePresence>
        {open && !selected && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute z-10 mt-2 max-h-64 w-full overflow-y-auto rounded-md border border-border-strong bg-panel-raised p-1.5 shadow-lg"
          >
            {options.map((evidence) => (
              <button
                key={evidence.id}
                onClick={() => {
                  onSelect(evidence.id);
                  setOpen(false);
                }}
                className="flex w-full flex-col gap-0.5 rounded-sm px-3 py-2 text-left transition-colors hover:bg-white/[0.05]"
              >
                <span className="text-sm text-ink">{evidence.title}</span>
                <span className="text-[10px] text-ink-faint">{evidence.code}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
