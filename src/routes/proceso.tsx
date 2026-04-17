import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, SectionLabel } from "@/components/editorial";

export const Route = createFileRoute("/proceso")({
  head: () => ({
    meta: [
      { title: "Proceso — Pascalcrea" },
      {
        name: "description",
        content:
          "Cinco fases predecibles desde el diagnóstico hasta la operación. Sin sorpresas, sin entregables huérfanos.",
      },
      { property: "og:title", content: "Proceso — Pascalcrea" },
      {
        property: "og:description",
        content:
          "Diagnóstico, diseño, implementación, validación y operación. Así trabajamos cada proyecto.",
      },
    ],
  }),
  component: ProcessPage,
});

const phases = [
  {
    n: "01",
    name: "Diagnóstico",
    duration: "1–2 sem.",
    body: "Levantamos contexto, restricciones y objetivos. Mapeamos sistemas existentes, datos disponibles y riesgos. Entregamos un plan con alcance, riesgos y estimación.",
    deliverables: ["Plan técnico", "Mapa de sistemas", "Estimación detallada"],
  },
  {
    n: "02",
    name: "Diseño",
    duration: "1–3 sem.",
    body: "Diseñamos la arquitectura del sistema, los modelos de datos y la experiencia de usuario. Validamos decisiones críticas con prototipos y pruebas de concepto.",
    deliverables: ["Arquitectura técnica", "Modelos de datos", "Diseño UI/UX"],
  },
  {
    n: "03",
    name: "Implementación",
    duration: "4–12 sem.",
    body: "Construcción en sprints semanales, con demo y métricas en cada cierre. Tu equipo ve el avance en repositorios y entornos compartidos desde el día uno.",
    deliverables: ["Código revisado", "Tests automatizados", "Infraestructura como código"],
  },
  {
    n: "04",
    name: "Validación",
    duration: "1–2 sem.",
    body: "QA estructurado, pruebas con usuarios reales y validación de métricas en entornos de staging idénticos a producción.",
    deliverables: ["Suite de pruebas", "Reporte de métricas", "Plan de despliegue"],
  },
  {
    n: "05",
    name: "Operación",
    duration: "Continuo",
    body: "Despliegue gradual, monitoreo activo y ciclo de mejora continua. Acompañamos la transición a tu equipo o seguimos con un retainer mensual.",
    deliverables: ["Monitoring + alertas", "Documentación operativa", "Handover técnico"],
  },
];

function ProcessPage() {
  return (
    <>
      <section className="border-b border-border py-20 md:py-28">
        <PageShell>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8 flex flex-col gap-8">
              <SectionLabel index="§ 03">Proceso · Metodología</SectionLabel>
              <h1 className="text-balance font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-[80px]">
                Cinco fases.
                <br />
                <span className="text-blueprint">Cero sorpresas.</span>
              </h1>
              <p className="max-w-[55ch] text-pretty text-lg font-light leading-relaxed text-graphite">
                Trabajamos en ciclos cortos con entregables visibles. Tu equipo nunca queda en la
                oscuridad: ves repositorios, métricas y demos desde la primera semana.
              </p>
            </div>
            <div className="md:col-span-4 border border-border bg-paper p-6">
              <div className="text-blueprint-label mb-4">Cadencia</div>
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Demo</span>
                  <span className="text-graphite">Semanal</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Reporte</span>
                  <span className="text-graphite">Quincenal</span>
                </li>
                <li className="flex justify-between">
                  <span>Revisión ejecutiva</span>
                  <span className="text-graphite">Mensual</span>
                </li>
              </ul>
            </div>
          </div>
        </PageShell>
      </section>

      <section className="border-b border-border py-24 md:py-28">
        <PageShell>
          <div className="space-y-px bg-border">
            {phases.map((p) => (
              <article
                key={p.n}
                className="group grid grid-cols-1 gap-8 bg-paper p-8 transition-colors hover:bg-cream/40 md:grid-cols-12 md:gap-12 md:p-12"
              >
                <div className="md:col-span-2 flex md:flex-col items-start justify-between md:justify-start gap-4">
                  <div className="font-display text-6xl font-semibold tabular-nums text-blueprint md:text-7xl">
                    {p.n}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                    {p.duration}
                  </div>
                </div>
                <div className="md:col-span-6 flex flex-col gap-4">
                  <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                    {p.name}
                  </h2>
                  <p className="text-pretty text-base leading-relaxed text-graphite">{p.body}</p>
                </div>
                <div className="md:col-span-4">
                  <div className="text-blueprint-label mb-4 border-b border-border pb-3">
                    Entregables
                  </div>
                  <ul className="space-y-2.5 font-mono text-sm">
                    {p.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="text-blueprint">+</span>
                        <span className="text-ink">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="border-b border-border bg-cream/40 py-24 md:py-28">
        <PageShell>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <SectionLabel index="§ 04">Garantías</SectionLabel>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Lo que siempre incluimos.
              </h2>
            </div>
            <ul className="space-y-6">
              {[
                "Repositorio y código tuyo desde el día uno.",
                "Documentación técnica y operativa al cierre.",
                "Tests automatizados sobre la lógica crítica.",
                "Handover con tu equipo si así lo prefieres.",
                "Soporte de 30 días post-despliegue sin costo.",
              ].map((g, i) => (
                <li key={g} className="flex gap-4 border-b border-border pb-4">
                  <span className="font-mono text-xs tracking-[0.2em] text-blueprint">
                    G.{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-ink">{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </PageShell>
      </section>

      <section className="bg-ink py-20 text-paper md:py-24">
        <PageShell>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-[28ch] font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Empieza con un diagnóstico de 30 minutos.
            </h2>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-paper px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:bg-blueprint hover:text-paper"
            >
              Agendar →
            </Link>
          </div>
        </PageShell>
      </section>
    </>
  );
}
