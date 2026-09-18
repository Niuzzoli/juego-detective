import { notFound } from "next/navigation";
import { getCaseById } from "@/data/cases";
import { HypothesisBoard } from "@/components/hypotheses/HypothesisBoard";

export default async function HipotesisPage({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;
  const caseData = getCaseById(caseId);
  if (!caseData) notFound();

  return <HypothesisBoard caseData={caseData} />;
}
