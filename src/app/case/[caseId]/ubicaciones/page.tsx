import { notFound } from "next/navigation";
import { getCaseById } from "@/data/cases";
import { LocationsView } from "@/components/locations/LocationsView";

export default async function UbicacionesPage({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;
  const caseData = getCaseById(caseId);
  if (!caseData) notFound();

  return <LocationsView caseData={caseData} />;
}
