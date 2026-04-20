import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, SectionHeader, SectionLabel } from "@/components/editorial";
import heroSystem from "@/assets/hero-system.jpg";
import systemFlow from "@/assets/system-flow.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pascalcrea — Sistemas web y plataformas de datos" },
      {
        name: "description",
        content:
          "Diseñamos sistemas web a medida y plataformas de datos para empresas que toman decisiones basadas en evidencia.",
      },
      { property: "og:title", content: "Pascalcrea — Sistemas web y plataformas de datos" },
      {
        property: "og:description",
        content:
          "Ingeniería web + ciencia de datos. Construimos sistemas digitales medibles, predecibles y listos para escalar.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    code: "01",
    title: "Sistemas Web & Aplicaciones a Medida",
    summary:
      "Construimos plataformas SaaS, sistemas internos y aplicaciones web a medida. Arquitectura tipada de extremo a extremo, performance medible y código que envejece bien.",
    items: [
      "Plataformas SaaS multi-tenant",
      "Dashboards y paneles operativos",
      "E-commerce e integraciones",
      "Aplicaciones web a medida",
    ],
  },
  {
    code: "02",
    title: "Ingeniería & Ciencia de Datos",
    summary:
      "Construimos pipelines confiables y modelos que convierten datos crudos en decisiones. Desde la ingesta hasta el modelo en producción, sin fugas ni cajas negras.",
    items: [
      "Pipelines ETL/ELT y warehousing",
      "Modelado predictivo y ML",
      "Análisis y segmentación",
      "Dashboards analíticos integrados",
    ],
  },
] as const;

const stats = [
  { value: "+40", label: "Proyectos entregados" },
  { value: "99.98%", label: "Uptime promedio" },
  { value: "<14ms", label: "Latencia p99" },
  { value: "8+", label: "Años combinados" },
];

const principles = [
  {
    code: "P.01",
    title: "Evidencia sobre opinión",
    body: "Cada decisión técnica se justifica con datos: métricas, benchmarks o trazabilidad.",
  },
  {
    code: "P.02",
    title: "Sistemas, no entregables",
    body: "Construimos infraestructura que sigue funcionando cuando el equipo cambia.",
  },
  {
    code: "P.03",
    title: "Precisión sobre velocidad",
    body: "Preferimos enviar menos y mejor. La complejidad innecesaria es deuda técnica.",
  },
  {
    code: "P.04",
    title: "Transparencia operativa",
    body: "Tableros, repos y métricas compartidas. Tu equipo nunca queda en la oscuridad.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 blueprint-grid-fine opacity-40" />
        <PageShell>
          <div className="relative grid grid-cols-1 gap-10 py-20 md:grid-cols-12 md:gap-8 md:py-28 lg:py-32">
            <div className="md:col-span-8 flex flex-col gap-10">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-graphite">
                <span className="inline-block size-1.5 bg-blueprint" />
                <span>[ Spec · Pascalcrea / Rev. 2026.04 ]</span>
              </div>

              <h1 className="text-balance font-display text-[44px] font-semibold leading-[0.95] tracking-tight text-ink md:text-7xl lg:text-[88px]">
                Sistemas digitales.
                <br />
                <span className="text-blueprint">Decisiones</span> basadas en datos.
              </h1>

              <p className="max-w-[52ch] text-pretty text-lg font-light leading-relaxed text-graphite md:text-xl">
                Pascalcrea es una firma de <span className="text-ink">ingeniería digital</span>{" "}
                que une <span className="text-ink">desarrollo web</span> y{" "}
                <span className="text-ink">ciencia de datos</span> para construir sistemas
                medibles, predecibles y listos para escalar.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contacto"
                  className="group inline-flex items-center gap-3 bg-ink px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-blueprint"
                >
                  Agendar diagnóstico
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  to="/servicios"
                  className="group inline-flex items-center gap-3 border-b border-ink pb-1 text-sm font-medium text-ink hover:border-blueprint hover:text-blueprint"
                >
                  Ver metodología
                  <span className="font-mono">→</span>
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-4">
              <div className="relative bg-cream p-1">
                <img
                  src={heroSystem}
                  alt="Diagrama de topología de sistemas Pascalcrea"
                  width={1080}
                  height={1600}
                  className="h-[420px] w-full object-cover mix-blend-multiply md:h-[480px]"
                />
                <div className="corner-bracket absolute inset-3 pointer-events-none" />
              </div>
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-graphite">
                <span>Fig. 01</span>
                <span>Topología de sistema</span>
                <span>v2.4</span>
              </div>
            </div>
          </div>
        </PageShell>

        {/* Stats strip */}
        <div className="border-t border-border bg-cream/40">
          <PageShell>
            <div className="grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col gap-2 px-2 py-8 md:px-8 ${i < 2 ? "border-b border-border md:border-b-0" : ""}`}
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                    [ {String(i + 1).padStart(2, "0")} ]
                  </div>
                  <div className="font-display text-3xl font-semibold tabular-nums tracking-tight text-ink md:text-4xl">
                    {s.value}
                  </div>
                  <div className="text-sm text-graphite">{s.label}</div>
                </div>
              ))}
            </div>
          </PageShell>
        </div>
      </section>

      {/* SERVICES — 2 pillars */}
      <section className="border-b border-border py-24 md:py-32">
        <PageShell>
          <SectionHeader
            index="§ 01"
            label="Servicios"
            title={
              <>
                Dos disciplinas. <span className="text-blueprint">Un mismo método.</span>
              </>
            }
            description="Construimos software web y resolvemos problemas de datos bajo el mismo principio: sistemas que se pueden medir, auditar y escalar."
          />

          <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.code}
                className="group relative flex flex-col gap-6 bg-paper p-8 transition-colors hover:bg-cream/60 md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-blueprint">
                    [ {s.code} ]
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                    Servicio
                  </span>
                </div>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[34px]">
                  {s.title}
                </h3>
                <p className="max-w-[42ch] text-pretty text-base leading-relaxed text-graphite">
                  {s.summary}
                </p>
                <ul className="mt-4 space-y-3 border-t border-border pt-6">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-mono text-sm text-ink"
                    >
                      <span className="text-blueprint">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/servicios"
                  className="mt-auto inline-flex items-center gap-2 self-start border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors group-hover:border-blueprint group-hover:text-blueprint"
                >
                  Ver detalle <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </PageShell>
      </section>

      {/* INTEGRATION DIAGRAM */}
      <section className="border-b border-border bg-cream/40 py-24 md:py-32">
        <PageShell>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5 flex flex-col gap-8">
              <SectionLabel index="§ 02">Integración</SectionLabel>
              <h2 className="text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
                El ciclo completo, bajo un mismo techo.
              </h2>
              <p className="max-w-[48ch] text-pretty text-lg leading-relaxed text-graphite">
                La mayoría de problemas que resolvemos viven en la frontera entre el producto web y
                los datos que produce. Diseñar e implementar ambos lados, sin entregables sueltos
                entre proveedores, es donde aparece la ventaja real.
              </p>
              <Link
                to="/proceso"
                className="self-start border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:border-blueprint hover:text-blueprint"
              >
                Conocer el proceso →
              </Link>
            </div>

            <div className="md:col-span-7">
              <div className="relative border border-border bg-paper p-6 md:p-10">
                <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-widest text-graphite">
                  Fig. 02 · Flujo
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-5 md:items-center">
                  {[
                    { code: "A", label: "Captura", sub: "App web · Eventos" },
                    { code: "B", label: "Pipeline", sub: "ETL · Validación" },
                    { code: "C", label: "Almacén", sub: "Warehouse" },
                    { code: "D", label: "Modelo", sub: "ML · Análisis" },
                    { code: "E", label: "Decisión", sub: "Producto · UI" },
                  ].map((node, i, arr) => (
                    <div key={node.code} className="relative flex flex-col items-center text-center">
                      <div className="flex size-14 items-center justify-center border border-ink bg-paper font-mono text-sm font-medium tabular-nums">
                        {node.code}
                      </div>
                      <div className="mt-3 font-display text-sm font-semibold text-ink">
                        {node.label}
                      </div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-graphite">
                        {node.sub}
                      </div>
                      {i < arr.length - 1 && (
                        <div className="absolute right-[-30px] top-7 hidden h-px w-12 bg-ink/40 md:block" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-widest text-graphite">
                  <div>Frontend · React · TS</div>
                  <div>Cloud · Postgres · Edge</div>
                  <div>Python · dbt · ML</div>
                </div>
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-border py-24 md:py-32">
        <PageShell>
          <SectionHeader
            index="§ 03"
            label="Principios"
            title={
              <>
                Cómo trabajamos cuando <span className="text-blueprint">nadie está mirando.</span>
              </>
            }
          />

          <div className="mt-16 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.code} className="bg-paper p-6 md:p-8">
                <div className="font-mono text-xs tracking-[0.2em] text-blueprint">{p.code}</div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">{p.body}</p>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      {/* CASE TEASER */}
      <section className="border-b border-border bg-cream/40 py-24 md:py-32">
        <PageShell>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7 relative bg-paper p-1">
              <img
                src={systemFlow}
                alt="Diagrama de flujo de datos y modelo predictivo"
                width={1280}
                height={960}
                loading="lazy"
                className="h-[360px] w-full object-cover mix-blend-multiply md:h-[480px]"
              />
            </div>
            <div className="md:col-span-5 flex flex-col gap-6">
              <SectionLabel index="§ 04">Caso destacado</SectionLabel>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Reducir la incertidumbre operativa.
              </h2>
              <p className="text-pretty text-base leading-relaxed text-graphite md:text-lg">
                Para una empresa logística, integramos su plataforma operativa con un modelo
                predictivo que anticipa retrasos con 48 horas de antelación. Resultado: menos
                cancelaciones, más visibilidad y un equipo que decide con datos.
              </p>
              <div className="grid grid-cols-3 gap-4 border-y border-border py-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                    Retrasos
                  </div>
                  <div className="mt-1 font-mono text-2xl tabular-nums text-ink">−34%</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                    Tiempo decisión
                  </div>
                  <div className="mt-1 font-mono text-2xl tabular-nums text-ink">−61%</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                    Precisión
                  </div>
                  <div className="mt-1 font-mono text-2xl tabular-nums text-ink">0.94</div>
                </div>
              </div>
              <Link
                to="/casos"
                className="self-start border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:border-blueprint hover:text-blueprint"
              >
                Ver todos los casos →
              </Link>
            </div>
          </div>
        </PageShell>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 text-paper md:py-32">
        <PageShell>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60">
                [ § 05 · Próximo paso ]
              </div>
              <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Una conversación de 30 minutos
                <br />
                <span className="text-blueprint">puede ahorrarte meses de trabajo.</span>
              </h2>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4">
              <p className="text-pretty text-base leading-relaxed text-paper/70">
                Diagnóstico gratuito sin compromiso. Te decimos si podemos ayudarte —y si no, te
                orientamos hacia quién sí.
              </p>
              <Link
                to="/contacto"
                className="group inline-flex items-center justify-between gap-2 border border-paper/30 bg-paper px-6 py-5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-blueprint hover:text-paper"
              >
                Agendar diagnóstico
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </PageShell>
      </section>
    </>
  );
}
