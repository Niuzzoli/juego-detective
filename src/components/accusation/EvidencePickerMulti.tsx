"use client";

import { Check } from "lucide-react";
import type { Evidence } from "@/types/case";
import { categoryIcons } from "@/components/evidence/evidence-meta";

export function EvidencePickerMulti({
  evidences,
  selectedIds,
  onToggle,
}: {
  evidences: Evidence[];
  selectedIds: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {evidences.map((evidence) => {
        const selected = selectedIds.includes(evidence.id);
        const Icon = categoryIcons[evidence.category];
        return (
          <button
            key={evidence.id}
            onClick={() => onToggle(evidence.id)}
            className={`flex items-center gap-2 rounded-sm border px-3 py-1.5 text-xs transition-colors duration-150 ${
              selected
                ? "border-case/50 bg-case-soft text-case"
                : "border-border-strong bg-panel/40 text-ink-muted hover:text-ink"
            }`}
          >
            {selected ? (
              <Check className="h-3.5 w-3.5" strokeWidth={2} />
            ) : (
              <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
            )}
            {evidence.title}
          </button>
        );
      })}
    </div>
  );
}
