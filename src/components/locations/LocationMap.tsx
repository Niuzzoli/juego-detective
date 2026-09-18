"use client";

import { motion } from "motion/react";
import type { CaseLocation } from "@/types/case";

export function LocationMap({
  locations,
  selectedId,
  visitedIds,
  onSelect,
}: {
  locations: CaseLocation[];
  selectedId: string | null;
  visitedIds: string[];
  onSelect: (id: string) => void;
}) {
  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border-strong bg-panel/60"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      {/* corner ticks for a blueprint / HUD feel */}
      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-ink-faint/40" />
      <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-ink-faint/40" />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-ink-faint/40" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-ink-faint/40" />

      <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
        Mapa del caso
      </span>

      {locations.map((location) => {
        const isSelected = selectedId === location.id;
        const visited = visitedIds.includes(location.id);

        return (
          <button
            key={location.id}
            onClick={() => onSelect(location.id)}
            style={{ left: `${location.position.x}%`, top: `${location.position.y}%` }}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          >
            <span className="relative flex h-3.5 w-3.5 items-center justify-center">
              {!visited && (
                <motion.span
                  className="absolute h-full w-full rounded-full bg-case/40"
                  animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                />
              )}
              <span
                className={`h-2.5 w-2.5 rounded-full border-2 transition-colors ${
                  isSelected
                    ? "border-case bg-case"
                    : visited
                      ? "border-signal bg-signal/40"
                      : "border-case bg-case/40"
                }`}
              />
            </span>
            <span
              className={`whitespace-nowrap rounded-sm border px-1.5 py-0.5 font-mono text-[10px] transition-colors ${
                isSelected
                  ? "border-case/40 bg-case-soft text-case"
                  : "border-border-strong bg-panel-raised/80 text-ink-muted"
              }`}
            >
              {location.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
