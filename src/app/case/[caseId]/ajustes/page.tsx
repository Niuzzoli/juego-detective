import { notFound } from "next/navigation";
import { getCaseById } from "@/data/cases";
import { AjustesView } from "@/components/settings/AjustesView";

export default async function AjustesPage({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;
  const caseData = getCaseById(caseId);
  if (!caseData) notFound();

  return <AjustesView caseData={caseData} />;
}
