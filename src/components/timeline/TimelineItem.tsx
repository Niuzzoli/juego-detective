"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import type { TimelineEvent } from "@/types/case";
import { Badge } from "@/components/ui/Badge";

export function TimelineItem({
  event,
  locationName,
  expanded,
  onToggle,
  isLast,
}: {
  event: TimelineEvent;
  locationName?: string;
  expanded: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <span
          className={`z-10 flex h-3 w-3 shrink-0 rounded-full border-2 ${
            event.certainty === "confirmed"
              ? "border-signal bg-signal/30"
              : "border-amber bg-amber/30"
          }`}
        />
        {!isLast && <span className="w-px flex-1 bg-border-strong" />}
      </div>

      <button onClick={onToggle} className="flex-1 pb-8 text-left">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm font-semibold text-ink">{event.time}</span>
          <h3 className="text-sm font-medium text-ink-muted">{event.title}</h3>
          <ChevronDown
            className={`ml-auto h-3.5 w-3.5 text-ink-faint transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
            strokeWidth={1.75}
          />
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-3 flex flex-col gap-3 rounded-md border border-border bg-panel/50 p-4">
                <p className="text-sm leading-relaxed text-ink-muted">{event.description}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={event.certainty === "confirmed" ? "signal" : "amber"}>
                    {event.certainty === "confirmed" ? "Confirmado" : "Sin confirmar"}
                  </Badge>
                  {locationName && <Badge>{locationName}</Badge>}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
