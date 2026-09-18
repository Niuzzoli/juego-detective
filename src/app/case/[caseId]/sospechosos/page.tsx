import { notFound } from "next/navigation";
import { getCaseById } from "@/data/cases";
import { SuspectGrid } from "@/components/suspects/SuspectGrid";

export default async function SospechososPage({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;
  const caseData = getCaseById(caseId);
  if (!caseData) notFound();

  return <SuspectGrid caseData={caseData} />;
}
