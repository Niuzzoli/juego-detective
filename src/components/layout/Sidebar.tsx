"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import type { Case } from "@/types/case";
import { NAV_ITEMS, SETTINGS_ITEM, type NavItem } from "./nav-items";
import { useInvestigation } from "@/context/investigation-context";
import { StatusStamp } from "@/components/ui/StatusStamp";
import { effectiveStatus } from "@/lib/case-status";

function counterFor(slug: string, ctx: ReturnType<typeof useInvestigation>) {
  const { stats, state } = ctx;
  switch (slug) {
    case "evidencias":
      return `${stats.evidencesFound}/${stats.evidencesTotal}`;
    case "sospechosos":
      return `${stats.suspectsAnalyzed}/${stats.suspectsTotal}`;
    case "testimonios":
      return `${stats.testimoniesReviewed}/${stats.testimoniesTotal}`;
    case "ubicaciones":
      return `${stats.locationsVisited}/${stats.locationsTotal}`;
    case "hipotesis":
      return stats.hypothesesCreated > 0 ? String(stats.hypothesesCreated) : null;
    case "acusacion":
      return state.accusation ? "check" : null;
    default:
      return null;
  }
}

function NavLink({ item, caseId, active }: { item: NavItem; caseId: string; active: boolean }) {
  const ctx = useInvestigation();
  const Icon = item.icon;
  const counter = counterFor(item.slug, ctx);

  return (
    <Link
      href={`/case/${caseId}/${item.slug}`}
      className={`group relative flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm transition-colors duration-150 ${
        active
          ? "bg-white/[0.06] text-ink"
          : "text-ink-muted hover:bg-white/[0.03] hover:text-ink"
      }`}
    >
      <span
        className={`absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-case transition-opacity duration-150 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />
      <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
      <span className="flex-1 truncate">{item.label}</span>
      {counter === "check" ? (
        <Check className="h-3.5 w-3.5 text-signal" strokeWidth={2} />
      ) : (
        counter && <span className="font-mono text-[10px] text-ink-faint">{counter}</span>
      )}
    </Link>
  );
}

export function Sidebar({ caseData }: { caseData: Case }) {
  const pathname = usePathname();
  const activeSlug = pathname.split("/").filter(Boolean)[2] ?? "expediente";
  const { state } = useInvestigation();

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-panel/70 backdrop-blur-sm lg:flex">
      <div className="flex flex-col gap-4 border-b border-border px-5 py-5">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-ink-faint transition-colors hover:text-ink-muted"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
          Casos
        </Link>
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
            {caseData.caseNumber}
          </span>
          <h2 className="text-sm font-semibold leading-snug text-ink">{caseData.title}</h2>
          <StatusStamp status={effectiveStatus(caseData, state.accusation)} className="w-fit" />
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.slug} item={item} caseId={caseData.id} active={activeSlug === item.slug} />
        ))}
      </nav>

      <div className="border-t border-border px-3 py-3">
        <NavLink item={SETTINGS_ITEM} caseId={caseData.id} active={activeSlug === SETTINGS_ITEM.slug} />
      </div>
    </aside>
  );
}
