"use client";

import { motion } from "motion/react";
import type { Suspect } from "@/types/case";
import { InterestMeter } from "./InterestMeter";

export function SuspectCard({
  suspect,
  analyzed,
  onOpen,
}: {
  suspect: Suspect;
  analyzed: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.button
      onClick={onOpen}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.18 }}
      className="group flex flex-col gap-4 rounded-md border border-border bg-panel/50 p-5 text-left transition-colors duration-200 hover:border-border-strong hover:bg-panel"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-white/[0.03] font-mono text-sm text-ink-muted">
            {suspect.avatarInitials}
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-ink">{suspect.name}</h3>
            <span className="text-xs text-ink-faint">{suspect.age} años</span>
          </div>
        </div>
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${analyzed ? "bg-signal" : "bg-ink-faint/40"}`}
          title={analyzed ? "Analizado" : "Sin analizar"}
        />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-[0.08em] text-ink-faint">
          {suspect.occupation}
        </span>
        <span className="text-xs text-ink-muted">{suspect.relationToVictim}</span>
      </div>

      <p className="line-clamp-2 text-xs leading-relaxed text-ink-muted">{suspect.description}</p>

      <div className="mt-auto flex items-center justify-between pt-1">
        <span className="text-[10px] uppercase tracking-[0.1em] text-ink-faint">
          Interés investigativo
        </span>
        <InterestMeter level={suspect.interestLevel} />
      </div>
    </motion.button>
  );
}
