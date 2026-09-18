import { notFound } from "next/navigation";
import { getCaseById } from "@/data/cases";
import { AccusationView } from "@/components/accusation/AccusationView";

export default async function AcusacionPage({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;
  const caseData = getCaseById(caseId);
  if (!caseData) notFound();

  return <AccusationView caseData={caseData} />;
}
