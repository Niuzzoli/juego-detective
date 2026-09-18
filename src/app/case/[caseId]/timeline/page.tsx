import { notFound } from "next/navigation";
import { getCaseById } from "@/data/cases";
import { TimelineView } from "@/components/timeline/TimelineView";

export default async function TimelinePage({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;
  const caseData = getCaseById(caseId);
  if (!caseData) notFound();

  return <TimelineView caseData={caseData} />;
}
