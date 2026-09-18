import { Fingerprint } from "lucide-react";
import { cases } from "@/data/cases";
import { CaseCard } from "@/components/home/CaseCard";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16 sm:px-10 sm:py-24">
        <header className="flex flex-col gap-8">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
            <Fingerprint className="h-4 w-4 text-case" strokeWidth={1.5} />
            Unidad de investigación · Archivo digital
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold tracking-tight text-ink sm:text-7xl">
              DETECTIVE
            </h1>
            <p className="font-mono text-sm italic text-ink-muted sm:text-base">
              &ldquo;Every case leaves a trace.&rdquo;
            </p>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Cada caso es un expediente real por resolver: evidencias, testimonios, sospechosos
            y una línea temporal que hay que reconstruir a mano. No hay respuestas obvias — solo
            la información que decidas seguir. Elegí un caso y empezá a investigar.
          </p>
        </header>

        <section className="mt-16 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
              Casos disponibles
            </h2>
            <span className="font-mono text-xs text-ink-faint">{cases.length} activo(s)</span>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {cases.map((caseData, index) => (
              <CaseCard key={caseData.id} caseData={caseData} index={index} />
            ))}
          </div>
        </section>

        <footer className="mt-20 flex items-center justify-between border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
          <span>Sistema de expedientes v0.1</span>
          <span>Acceso restringido</span>
        </footer>
      </div>
    </div>
  );
}
