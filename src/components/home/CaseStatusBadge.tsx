"use client";

import { useSyncExternalStore } from "react";
import type { Case } from "@/types/case";
import { StatusStamp } from "@/components/ui/StatusStamp";
import { effectiveStatus } from "@/lib/case-status";
import { readStoredAccusation } from "@/lib/case-progress";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

// The case list is server-rendered from static data, so the server snapshot
// is always the case's static status. Once hydrated on the client, read the
// finalized accusation (if any) from localStorage so cases solved in a
// previous session show as "solved" here too.
export function CaseStatusBadge({ caseData }: { caseData: Case }) {
  const status = useSyncExternalStore(
    subscribe,
    () => effectiveStatus(caseData, readStoredAccusation(caseData.id)),
    () => caseData.status,
  );

  return <StatusStamp status={status} />;
}
