import type { Case, Evidence } from "@/types/case";

interface UnlockChecks {
  isEvidenceViewed: (id: string) => boolean;
  isTestimonyReviewed: (id: string) => boolean;
  isLocationVisited: (id: string) => boolean;
}

export function isEvidenceUnlocked(evidence: Evidence, checks: UnlockChecks): boolean {
  if (evidence.discovered) return true;
  const req = evidence.unlocksAfter;
  if (!req) return true;

  switch (req.kind) {
    case "evidence":
      return checks.isEvidenceViewed(req.id);
    case "testimony":
      return checks.isTestimonyReviewed(req.id);
    case "location":
      return checks.isLocationVisited(req.id);
  }
}

export function resolveUnlockHint(evidence: Evidence, caseData: Case): string | undefined {
  const req = evidence.unlocksAfter;
  if (!req) return undefined;

  if (req.kind === "evidence") {
    const target = caseData.evidences.find((e) => e.id === req.id);
    return target ? `Se desbloquea al examinar "${target.title}".` : undefined;
  }
  if (req.kind === "testimony") {
    const target = caseData.testimonies.find((t) => t.id === req.id);
    return target ? `Se desbloquea al revisar el testimonio de ${target.personName}.` : undefined;
  }
  const target = caseData.locations.find((l) => l.id === req.id);
  return target ? `Se desbloquea al visitar "${target.name}".` : undefined;
}
