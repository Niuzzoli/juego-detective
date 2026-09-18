"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Case } from "@/types/case";
import { NAV_ITEMS, SETTINGS_ITEM } from "./nav-items";
import { StatusStamp } from "@/components/ui/StatusStamp";
import { useInvestigation } from "@/context/investigation-context";
import { effectiveStatus } from "@/lib/case-status";

export function MobileNav({ caseData }: { caseData: Case }) {
  const pathname = usePathname();
  const activeSlug = pathname.split("/").filter(Boolean)[2] ?? "expediente";
  const allItems = [...NAV_ITEMS, SETTINGS_ITEM];
  const { state } = useInvestigation();

  return (
    <div className="sticky top-0 z-20 flex flex-col border-b border-border bg-panel/90 backdrop-blur-sm lg:hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="text-ink-faint transition-colors hover:text-ink-muted">
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
        </Link>
        <div className="flex flex-1 flex-col items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
            {caseData.caseNumber}
          </span>
          <h2 className="truncate text-sm font-semibold text-ink">{caseData.title}</h2>
        </div>
        <StatusStamp
          status={effectiveStatus(caseData, state.accusation)}
          className="hidden sm:inline-flex"
        />
      </div>

      <div className="flex gap-1 overflow-x-auto px-3 pb-2">
        {allItems.map((item) => {
          const Icon = item.icon;
          const active = activeSlug === item.slug;
          return (
            <Link
              key={item.slug}
              href={`/case/${caseData.id}/${item.slug}`}
              className={`flex shrink-0 items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs whitespace-nowrap transition-colors ${
                active ? "bg-white/[0.08] text-ink" : "text-ink-muted"
              }`}
            >
              <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
              {item.label}
              {item.slug === "acusacion" && state.accusation && (
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
