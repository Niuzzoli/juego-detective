import type { Accusation, Case, CaseStatus } from "@/types/case";

// The case's static status can flip to "solved" for the current session
// once the player's accusation is finalized — either a correct guess, or an
// incorrect one where the player chose to see the verdict. A pending
// incorrect accusation (still awaiting that choice) is never stored here,
// so the case stays "unsolved" until the player commits either way. It
// never persists to data.
export function effectiveStatus(caseData: Case, accusation: Accusation | null): CaseStatus {
  if (accusation) return "solved";
  return caseData.status;
}
