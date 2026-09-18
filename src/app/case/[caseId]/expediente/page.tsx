import { notFound } from "next/navigation";
import { getCaseById } from "@/data/cases";
import { ExpedienteView } from "@/components/expediente/ExpedienteView";

export default async function ExpedientePage({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;
  const caseData = getCaseById(caseId);
  if (!caseData) notFound();

  return <ExpedienteView caseData={caseData} />;
}
