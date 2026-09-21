import type { Case } from "@/types/case";
import { case001 } from "./case-001";
import { case002 } from "./case-002";
import { case003 } from "./case-003";
import { case004 } from "./case-004";
import { case005 } from "./case-005";
import { case006 } from "./case-006";

// Registry of all available cases. Add new cases here as they're created
// without touching any component.
export const cases: Case[] = [case001, case002, case003, case004, case005, case006];

export function getCaseById(caseId: string): Case | undefined {
  return cases.find((c) => c.id === caseId);
}
