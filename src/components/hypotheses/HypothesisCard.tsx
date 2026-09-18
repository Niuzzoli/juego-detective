"use client";

import { motion } from "motion/react";
import { Brain, Link2 } from "lucide-react";
import type { Evidence, Hypothesis } from "@/types/case";

export function HypothesisCard({
  hypothesis,
  evidences,
}: {
  hypothesis: Hypothesis;
  evidences: Evidence[];
}) {
  const linked = hypothesis.evidenceIds
    .map((id) => evidences.find((e) => e.id === id))
    .filter((e): e is Evidence => Boolean(e));

  const createdAt = new Date(hypothesis.createdAt).toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-4 rounded-md border border-border bg-panel/50 p-5"
    >
      <div className="flex flex-wrap items-center gap-2">
        {linked.map((evidence, i) => (
          <span key={evidence.id} className="flex items-center gap-2">
            <span className="rounded-sm border border-border-strong bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-ink-muted">
              {evidence.code}
            </span>
            {i < linked.length - 1 && <Link2 className="h-3 w-3 text-ink-faint" strokeWidth={1.75} />}
          </span>
        ))}
        <span className="ml-auto font-mono text-[10px] text-ink-faint">{createdAt}</span>
      </div>

      <div className="flex gap-2.5">
        <Brain className="h-4 w-4 shrink-0 text-case" strokeWidth={1.75} />
        <p className="text-sm leading-relaxed text-ink">{hypothesis.text}</p>
      </div>
    </motion.div>
  );
}
