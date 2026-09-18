"use client";

import { motion } from "motion/react";
import { ShieldQuestion, X } from "lucide-react";
import type { Suspect } from "@/types/case";
import { InterestMeter } from "./InterestMeter";

export function SuspectModal({ suspect, onClose }: { suspect: Suspect; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-void/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        layoutId={`suspect-card-${suspect.id}`}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[85vh] w-full max-w-lg flex-col gap-6 overflow-y-auto rounded-md border border-border-strong bg-panel-raised p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border-strong bg-white/[0.03] font-mono text-lg text-ink-muted">
              {suspect.avatarInitials}
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-ink">{suspect.name}</h2>
              <span className="text-xs text-ink-faint">
                {suspect.age} años · {suspect.occupation}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-sm p-1 text-ink-faint transition-colors hover:bg-white/[0.06] hover:text-ink"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>

        <div className="flex items-center justify-between rounded-sm border border-border bg-white/[0.02] px-4 py-3">
          <span className="text-xs uppercase tracking-[0.1em] text-ink-faint">
            Relación con la víctima
          </span>
          <span className="text-sm text-ink">{suspect.relationToVictim}</span>
        </div>

        <p className="text-sm leading-relaxed text-ink-muted">{suspect.description}</p>

        <div className="flex flex-col gap-2 border-t border-border pt-5">
          <span className="text-xs uppercase tracking-[0.1em] text-ink-faint">Coartada</span>
          <p className="text-sm leading-relaxed text-ink">{suspect.alibi}</p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <ShieldQuestion className="h-4 w-4 text-ink-faint" strokeWidth={1.75} />
            <span className="text-xs uppercase tracking-[0.1em] text-ink-faint">
              Información conocida
            </span>
          </div>
          <ul className="flex flex-col gap-2">
            {suspect.knownInfo.map((info, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-ink-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                {info}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-5">
          <span className="text-xs uppercase tracking-[0.1em] text-ink-faint">
            Interés investigativo
          </span>
          <InterestMeter level={suspect.interestLevel} />
        </div>
      </motion.div>
    </motion.div>
  );
}
