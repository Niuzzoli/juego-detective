import type { Accusation } from "@/types/case";
import { investigationStorageKey } from "@/context/investigation-context";

// Reads only the final accusation (if any) persisted for a case, without
// pulling in the whole investigation context. Used by the home page's case
// list, which shows every case at once rather than one at a time.
export function readStoredAccusation(caseId: string): Accusation | null {
  try {
    const raw = window.localStorage.getItem(investigationStorageKey(caseId));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed?.accusation ?? null;
  } catch {
    return null;
  }
}
