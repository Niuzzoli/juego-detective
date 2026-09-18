"use client";

import { AlertTriangle, RotateCcw, Save } from "lucide-react";
import type { Case } from "@/types/case";
import { useInvestigation } from "@/context/investigation-context";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AjustesView({ caseData }: { caseData: Case }) {
  const { resetInvestigation } = useInvestigation();

  function handleReset() {
    const confirmed = window.confirm(
      "Esto borrará todo tu progreso en este caso (evidencias, sospechosos, testimonios, ubicaciones e hipótesis). ¿Continuar?",
    );
    if (confirmed) resetInvestigation();
  }

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader eyebrow={caseData.caseNumber} title="Ajustes" />

      <section className="flex flex-col gap-3 rounded-md border border-amber/20 bg-amber-soft/30 p-6">
        <div className="flex items-center gap-2">
          <Save className="h-4 w-4 text-amber" strokeWidth={1.75} />
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            Estado de la sesión
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-ink-muted">
          Tu progreso en este caso se guarda solo en memoria mientras la pestaña permanece
          abierta. Si recargás la página, la investigación vuelve a empezar desde cero.
        </p>
      </section>

      <section className="flex flex-col gap-4 rounded-md border border-border bg-panel/50 p-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold text-ink">Reiniciar investigación</h3>
          <p className="text-sm text-ink-muted">
            Borra evidencias descubiertas, sospechosos analizados, testimonios revisados,
            ubicaciones visitadas e hipótesis guardadas para este caso.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="inline-flex w-fit items-center gap-2 rounded-sm border border-case/40 bg-case-soft px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-case transition-colors hover:bg-case hover:text-void"
        >
          <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.75} />
          Reiniciar
        </button>
      </section>

      <section className="flex items-start gap-3 rounded-md border border-border bg-panel/30 p-5 text-xs text-ink-faint">
        <AlertTriangle className="h-4 w-4 shrink-0" strokeWidth={1.75} />
        <p>
          Esta es una versión de demostración de la plataforma. Todavía no hay cuentas, sincronización
          en la nube ni guardado permanente entre sesiones.
        </p>
      </section>
    </div>
  );
}
