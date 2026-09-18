import { notFound } from "next/navigation";
import { getCaseById } from "@/data/cases";
import { EvidenceGrid } from "@/components/evidence/EvidenceGrid";

export default async function EvidenciasPage({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;
  const caseData = getCaseById(caseId);
  if (!caseData) notFound();

  return <EvidenceGrid caseData={caseData} />;
}
