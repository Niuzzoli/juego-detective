import { notFound } from "next/navigation";
import { getCaseById } from "@/data/cases";
import { TestimonyList } from "@/components/testimonies/TestimonyList";

export default async function TestimoniosPage({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;
  const caseData = getCaseById(caseId);
  if (!caseData) notFound();

  return <TestimonyList caseData={caseData} />;
}
