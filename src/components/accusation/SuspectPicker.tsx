"use client";

import type { Suspect } from "@/types/case";

export function SuspectPicker({
  suspects,
  selectedId,
  onSelect,
}: {
  suspects: Suspect[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {suspects.map((suspect) => {
        const selected = suspect.id === selectedId;
        return (
          <button
            key={suspect.id}
            onClick={() => onSelect(suspect.id)}
            className={`flex items-center gap-3 rounded-md border p-4 text-left transition-colors duration-150 ${
              selected
                ? "border-case/50 bg-case-soft"
                : "border-border bg-panel/50 hover:border-border-strong"
            }`}
          >
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-mono text-sm ${
                selected ? "border-case/50 text-case" : "border-border-strong text-ink-muted"
              }`}
            >
              {suspect.avatarInitials}
            </div>
            <div className="flex min-w-0 flex-col">
              <span className={`truncate text-sm font-semibold ${selected ? "text-ink" : "text-ink"}`}>
                {suspect.name}
              </span>
              <span className="truncate text-xs text-ink-faint">{suspect.occupation}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
