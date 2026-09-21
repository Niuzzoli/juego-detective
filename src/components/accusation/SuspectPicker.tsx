"use client";

import type { Suspect } from "@/types/case";

export function SuspectPicker({
  suspects,
  selectedId,
  onSelect,
  discardedIds = [],
}: {
  suspects: Suspect[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  discardedIds?: string[];
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {suspects.map((suspect) => {
        const selected = suspect.id === selectedId;
        const discarded = discardedIds.includes(suspect.id);
        return (
          <button
            key={suspect.id}
            onClick={() => onSelect(suspect.id)}
            disabled={discarded}
            className={`flex items-center gap-3 rounded-md border p-4 text-left transition-colors duration-150 ${
              discarded
                ? "cursor-not-allowed border-border bg-panel/30 opacity-50"
                : selected
                  ? "border-case/50 bg-case-soft"
                  : "border-border bg-panel/50 hover:border-border-strong"
            }`}
          >
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-mono text-sm ${
                selected && !discarded ? "border-case/50 text-case" : "border-border-strong text-ink-muted"
              }`}
            >
              {suspect.avatarInitials}
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-semibold text-ink">{suspect.name}</span>
              <span className="truncate text-xs text-ink-faint">
                {discarded ? "Descartado — acusación previa incorrecta" : suspect.occupation}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
