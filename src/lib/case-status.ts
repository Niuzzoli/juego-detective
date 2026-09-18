import type { Accusation, Case, CaseStatus } from "@/types/case";

// The case's static status can flip to "solved" for the current session
// once the player submits a correct accusation. It never persists to data.
export function effectiveStatus(caseData: Case, accusation: Accusation | null): CaseStatus {
  if (accusation?.correct) return "solved";
  return caseData.status;
}
