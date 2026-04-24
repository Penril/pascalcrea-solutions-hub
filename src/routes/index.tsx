import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, SectionHeader, SectionLabel } from "@/components/editorial";
import { ClientLogos } from "@/components/client-logos";
import heroInterface from "@/assets/hero-interface.jpg";
import dataSchema from "@/assets/data-schema.jpg";
import webPerformance from "@/assets/web-performance.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pascalcrea — Desarrollo web, SEO y ciencia de datos" },
      {
        name: "description",
        content:
          "Construimos sitios y sistemas web, los posicionamos con SEO y SEM, y los conectamos a soluciones de datos que generan resultados medibles.",
      },
      { property: "og:title", content: "Pascalcrea — Desarrollo web, SEO y ciencia de datos" },
      {
        property: "og:description",
        content:
          "Web + datos bajo un mismo método. Sitios, sistemas, SEO, analítica y modelos predictivos para empresas que miden lo que hacen.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    code: "01",
    title: "Sitios Web, SEO & Analítica Digital",
    summary:
      "Diseñamos y desarrollamos sitios, e-commerce y sistemas web a medida — y nos aseguramos de que se posicionen, se midan y conviertan. Tu presencia digital como un activo de negocio, no como un entregable.",
    items: [
      "Sitios corporativos, landings & e-commerce",
      "Sistemas y plataformas web a medida",
      "SEO técnico, contenidos & posicionamiento",
      "Google Ads, SEM & medición de conversión",
    ],
  },
  {
    code: "02",
    title: "Datos, Ingeniería & Ciencia Aplicada",
    summary:
      "Conectamos tus fuentes, ordenamos los flujos y construimos modelos que convierten datos en decisiones. Desde la automatización operativa hasta el modelo predictivo en producción.",
    items: [
      "Automatización & pipelines ETL/ELT",
      "Dashboards & analítica avanzada",
      "Modelos predictivos & ciencia de datos",
      "Soluciones de datos aplicadas al negocio",
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
                <span className="text-blueprint">Web</span> que convierte.
                <br />
                <span className="text-blueprint">Datos</span> que deciden.
              </h1>

              <p className="max-w-[52ch] text-pretty text-lg font-light leading-relaxed text-graphite md:text-xl">
                Pascalcrea es una firma de <span className="text-ink">ingeniería digital</span>.
                Construimos <span className="text-ink">sitios y sistemas web</span> que se
                posicionan, se miden y se optimizan — y los conectamos con{" "}
                <span className="text-ink">soluciones de datos</span> que sostienen las decisiones
                del negocio.
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
                  src={heroInterface}
                  alt="Esquema editorial: interfaz web conectada a una red de nodos de datos"
                  width={1280}
                  height={1600}
                  className="h-[420px] w-full object-cover mix-blend-multiply md:h-[480px]"
                />
                <div className="corner-bracket absolute inset-3 pointer-events-none" />
              </div>
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-graphite">
                <span>Fig. 01</span>
                <span>Interfaz · Sistema · Datos</span>
                <span>v2.6</span>
              </div>
            </div>
          </div>
        </PageShell>

        {/* Stats strip */}
        <div className="border-t border-border bg-cream-deep/55">
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

      {/* CLIENT LOGOS */}
      <ClientLogos />

      {/* SERVICES — 2 pillars */}
      <section className="border-b border-border py-24 md:py-32">
        <PageShell>
          <SectionHeader
            index="§ 01"
            label="Servicios · Dos pilares"
            title={
              <>
                Web y datos. <span className="text-blueprint">Mismo peso, un mismo método.</span>
              </>
            }
            description="Diseñamos, desarrollamos y posicionamos activos digitales — y los conectamos con soluciones de datos que los hacen medibles, predecibles y rentables. Una sola lógica, dos disciplinas con el mismo protagonismo."
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
      <section className="border-b border-border bg-cream/70 py-24 md:py-32">
        <PageShell>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5 flex flex-col gap-8">
              <SectionLabel index="§ 02">Integración</SectionLabel>
              <h2 className="text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
                Construir, posicionar, medir, optimizar.
              </h2>
              <p className="max-w-[48ch] text-pretty text-lg leading-relaxed text-graphite">
                Diseñamos el activo digital, lo lanzamos, lo posicionamos con SEO y campañas, y
                cerramos el círculo con datos que muestran qué funciona y qué no. Sin entregables
                sueltos entre proveedores: una misma firma, una misma metodología.
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
                    { code: "A", label: "Sitio · Sistema", sub: "Web · UX · Build" },
                    { code: "B", label: "Tráfico", sub: "SEO · SEM · Ads" },
                    { code: "C", label: "Eventos", sub: "Analítica · Tag" },
                    { code: "D", label: "Modelo", sub: "Datos · ML" },
                    { code: "E", label: "Decisión", sub: "Optimización" },
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
                  <div>Web · React · TS · CMS</div>
                  <div>SEO · GA4 · Ads · GTM</div>
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
      <section className="border-b border-border bg-sand/40 py-24 md:py-32">
        <PageShell>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7 relative bg-paper p-1">
              <img
                src={webPerformance}
                alt="Esquema editorial de un sitio web junto a una curva de performance comercial"
                width={1280}
                height={960}
                loading="lazy"
                className="h-[360px] w-full object-cover mix-blend-multiply md:h-[480px]"
              />
            </div>
            <div className="md:col-span-5 flex flex-col gap-6">
              <SectionLabel index="§ 04">Caso destacado</SectionLabel>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Un e-commerce que vende mejor cada mes.
              </h2>
              <p className="text-pretty text-base leading-relaxed text-graphite md:text-lg">
                Rediseñamos el sitio, reescribimos su SEO técnico, montamos campañas de Google Ads
                con tracking limpio y conectamos las ventas a un modelo de atribución. El equipo
                pasó de operar por intuición a decidir con datos cada semana.
              </p>
              <div className="grid grid-cols-3 gap-4 border-y border-border py-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                    Conversión
                  </div>
                  <div className="mt-1 font-mono text-2xl tabular-nums text-ink">+58%</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                    Tráfico orgánico
                  </div>
                  <div className="mt-1 font-mono text-2xl tabular-nums text-ink">+212%</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                    CAC
                  </div>
                  <div className="mt-1 font-mono text-2xl tabular-nums text-ink">−37%</div>
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
