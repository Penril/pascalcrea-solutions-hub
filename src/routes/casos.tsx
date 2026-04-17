import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, SectionLabel } from "@/components/editorial";

export const Route = createFileRoute("/casos")({
  head: () => ({
    meta: [
      { title: "Casos — Pascalcrea" },
      {
        name: "description",
        content:
          "Una selección de proyectos web y de datos. Resultados, decisiones y sistemas que dejamos en producción.",
      },
      { property: "og:title", content: "Casos de estudio — Pascalcrea" },
      {
        property: "og:description",
        content:
          "Proyectos reales: SaaS, dashboards, pipelines y modelos predictivos. Resultados medibles.",
      },
    ],
  }),
  component: CasesPage,
});

const cases = [
  {
    code: "C.01",
    industry: "Logística",
    title: "Predicción de retrasos para una operadora regional",
    summary:
      "Integramos su plataforma operativa con un modelo predictivo que anticipa retrasos con 48 h de antelación.",
    discipline: "Web + Data Science",
    metrics: [
      { k: "Retrasos", v: "−34%" },
      { k: "Tiempo decisión", v: "−61%" },
      { k: "Precisión modelo", v: "0.94" },
    ],
    year: "2025",
  },
  {
    code: "C.02",
    industry: "Retail",
    title: "Plataforma de gestión de inventario en tiempo real",
    summary:
      "SaaS multi-tenant con sincronización de stock entre 12 tiendas físicas y canales online.",
    discipline: "Web Engineering",
    metrics: [
      { k: "Sucursales", v: "12" },
      { k: "Latencia sync", v: "<2s" },
      { k: "Uptime", v: "99.99%" },
    ],
    year: "2025",
  },
  {
    code: "C.03",
    industry: "Salud",
    title: "Pipeline de ingesta clínica anonimizada",
    summary:
      "Pipeline ETL con validación HL7/FHIR para reportería regulatoria y análisis interno.",
    discipline: "Data Engineering",
    metrics: [
      { k: "Volumen diario", v: "4.2M" },
      { k: "Cumplimiento", v: "100%" },
      { k: "Errores", v: "<0.01%" },
    ],
    year: "2024",
  },
  {
    code: "C.04",
    industry: "Fintech",
    title: "Scoring de riesgo crediticio embebido en producto",
    summary:
      "Modelo de scoring + dashboard ejecutivo integrados al onboarding de nuevos clientes.",
    discipline: "Data Science + Web",
    metrics: [
      { k: "Aprobaciones", v: "+22%" },
      { k: "Mora", v: "−18%" },
      { k: "AUC modelo", v: "0.89" },
    ],
    year: "2024",
  },
  {
    code: "C.05",
    industry: "Educación",
    title: "Migración de LMS legacy a stack moderno",
    summary:
      "Migración de plataforma educativa con 80k usuarios activos sin downtime perceptible.",
    discipline: "Web Engineering",
    metrics: [
      { k: "Usuarios migrados", v: "80k" },
      { k: "Performance", v: "+3.4x" },
      { k: "Downtime", v: "0min" },
    ],
    year: "2024",
  },
  {
    code: "C.06",
    industry: "Manufactura",
    title: "Dashboard de OEE con datos de planta",
    summary:
      "Captura de datos de PLCs y dashboard de eficiencia operativa en tiempo casi real.",
    discipline: "Data + Web",
    metrics: [
      { k: "Líneas monitoreadas", v: "8" },
      { k: "Refresh", v: "15s" },
      { k: "OEE detectado", v: "+11pts" },
    ],
    year: "2023",
  },
];

function CasesPage() {
  return (
    <>
      <section className="border-b border-border py-20 md:py-28">
        <PageShell>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8 flex flex-col gap-8">
              <SectionLabel index="§ 02">Casos · Selección</SectionLabel>
              <h1 className="text-balance font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-[80px]">
                Sistemas que dejamos
                <br />
                <span className="text-blueprint">funcionando en producción.</span>
              </h1>
              <p className="max-w-[55ch] text-pretty text-lg font-light leading-relaxed text-graphite">
                Cada caso describe el problema, la decisión técnica y el resultado medible. Los
                nombres comerciales se omiten por NDA, los números no.
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="border border-border bg-paper p-6">
                <div className="text-blueprint-label mb-3">Resumen</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-mono text-2xl tabular-nums text-ink">+40</div>
                    <div className="text-xs text-graphite">Proyectos</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl tabular-nums text-ink">9</div>
                    <div className="text-xs text-graphite">Industrias</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      <section className="border-b border-border">
        <PageShell>
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
            {cases.map((c) => (
              <article
                key={c.code}
                className="group flex flex-col gap-6 bg-paper p-8 transition-colors hover:bg-cream/50 md:p-10"
              >
                <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-[0.2em]">
                  <span className="text-blueprint">{c.code}</span>
                  <span className="text-graphite">
                    {c.industry} · {c.year}
                  </span>
                </div>

                <h2 className="text-pretty font-display text-2xl font-semibold leading-tight tracking-tight text-ink md:text-[28px]">
                  {c.title}
                </h2>

                <p className="text-pretty text-sm leading-relaxed text-graphite md:text-base">
                  {c.summary}
                </p>

                <div className="mt-2 grid grid-cols-3 gap-4 border-y border-border py-5">
                  {c.metrics.map((m) => (
                    <div key={m.k}>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                        {m.k}
                      </div>
                      <div className="mt-1 font-mono text-xl tabular-nums text-ink">{m.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]">
                  <span className="text-graphite">{c.discipline}</span>
                  <span className="text-blueprint group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="bg-ink py-20 text-paper md:py-24">
        <PageShell>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-[28ch] font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              ¿Tu proyecto puede ser el siguiente caso?
            </h2>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-paper px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:bg-blueprint hover:text-paper"
            >
              Conversemos →
            </Link>
          </div>
        </PageShell>
      </section>
    </>
  );
}
