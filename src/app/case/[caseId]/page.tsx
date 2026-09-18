import { redirect } from "next/navigation";

export default async function CaseIndexPage({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;
  redirect(`/case/${caseId}/expediente`);
}
