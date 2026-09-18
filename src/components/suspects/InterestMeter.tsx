import type { InterestLevel } from "@/types/case";

const levelToFilled: Record<InterestLevel, number> = { low: 1, medium: 2, high: 3 };

export function InterestMeter({ level }: { level: InterestLevel }) {
  const filled = levelToFilled[level];

  return (
    <div className="flex items-center gap-1" title="Nivel de interés investigativo">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-4 rounded-full ${i <= filled ? "bg-amber" : "bg-white/[0.08]"}`}
        />
      ))}
    </div>
  );
}
