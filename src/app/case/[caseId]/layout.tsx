import { notFound } from "next/navigation";
import { getCaseById } from "@/data/cases";
import { InvestigationProvider } from "@/context/investigation-context";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { PageTransition } from "@/components/layout/PageTransition";
import type { ReactNode } from "react";

export default async function CaseLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;
  const caseData = getCaseById(caseId);

  if (!caseData) {
    notFound();
  }

  return (
    <InvestigationProvider caseData={caseData}>
      <div className="flex min-h-screen w-full">
        <Sidebar caseData={caseData} />
        <div className="flex min-w-0 flex-1 flex-col">
          <MobileNav caseData={caseData} />
          <main className="flex-1 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="mx-auto w-full max-w-5xl">
              <PageTransition>{children}</PageTransition>
            </div>
          </main>
        </div>
      </div>
    </InvestigationProvider>
  );
}
