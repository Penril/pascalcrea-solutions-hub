import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, SectionHeader, SectionLabel } from "@/components/editorial";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Pascalcrea" },
      {
        name: "description",
        content:
          "Desarrollo web, ingeniería de datos y ciencia de datos. Dos pilares unificados bajo un mismo método de ingeniería.",
      },
      { property: "og:title", content: "Servicios — Pascalcrea" },
      {
        property: "og:description",
        content:
          "Software web a medida + sistemas de datos. Conoce qué construimos y cómo lo entregamos.",
      },
    ],
  }),
  component: ServicesPage,
});

const pillars = [
  {
    code: "01",
    pillar: "Software & Aplicaciones Web",
    intro:
      "Construimos productos web que tu equipo y tus usuarios pueden usar todos los días sin fricción. Stack moderno, performance medible, código mantenible.",
    services: [
      {
        title: "Plataformas SaaS",
        body: "Aplicaciones multi-tenant con autenticación, roles, billing y dashboards.",
      },
      {
        title: "Sistemas internos",
        body: "Paneles operativos, ERPs ligeros y herramientas de back-office a medida.",
      },
      {
        title: "E-commerce & marketplaces",
        body: "Tiendas con catálogos complejos, integraciones de pago y envíos.",
      },
      {
        title: "Sitios institucionales",
        body: "Sitios corporativos con SEO técnico, performance y CMS si es necesario.",
      },
    ],
    stack: ["React / TypeScript", "Node · Edge functions", "PostgreSQL", "Tailwind", "Vercel · CF"],
  },
  {
    code: "02",
    pillar: "Ingeniería & Ciencia de Datos",
    intro:
      "Tomamos datos crudos y los convertimos en infraestructura confiable y modelos que tu negocio puede usar. Sin cajas negras, sin pipelines frágiles.",
    services: [
      {
        title: "Pipelines ETL/ELT",
        body: "Ingesta desde APIs, bases de datos y archivos. Validación y trazabilidad incluidas.",
      },
      {
        title: "Data warehousing",
        body: "Modelado dimensional con dbt sobre Postgres, BigQuery o Snowflake.",
      },
      {
        title: "Modelos predictivos & ML",
        body: "Forecasting, segmentación, scoring y deployment a producción.",
      },
      {
        title: "Análisis & dashboards",
        body: "Tableros analíticos integrados al producto o standalone.",
      },
    ],
    stack: ["Python", "dbt", "Airflow / Dagster", "Postgres / BigQuery", "scikit-learn"],
  },
] as const;

const integrations = [
  { name: "Auditoría técnica", body: "Diagnóstico de sistemas existentes con plan de acción priorizado." },
  { name: "Equipos en residencia", body: "Refuerzo a tu equipo interno con ingenieros senior por sprint." },
  { name: "Migraciones", body: "Stack legacy → moderno sin interrumpir la operación." },
];

function ServicesPage() {
  return (
    <>
      <section className="relative border-b border-border py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 blueprint-grid-fine opacity-30" />
        <PageShell>
          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8 flex flex-col gap-8">
              <SectionLabel index="§ 01">Servicios · Catálogo</SectionLabel>
              <h1 className="text-balance font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-[80px]">
                Lo que construimos,{" "}
                <span className="text-blueprint">y cómo lo entregamos.</span>
              </h1>
              <p className="max-w-[58ch] text-pretty text-lg font-light leading-relaxed text-graphite">
                Trabajamos en dos disciplinas que se complementan: software web e infraestructura de
                datos. Puedes contratarnos para una sola, pero la mayoría de problemas que vale la
                pena resolver viven en la intersección.
              </p>
            </div>
            <div className="md:col-span-4 border border-border bg-paper p-6">
              <div className="text-blueprint-label mb-4">Modalidades</div>
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Proyecto cerrado</span>
                  <span className="text-graphite">4–16 sem.</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Retainer mensual</span>
                  <span className="text-graphite">3+ meses</span>
                </li>
                <li className="flex justify-between">
                  <span>Sprint diagnóstico</span>
                  <span className="text-graphite">2 sem.</span>
                </li>
              </ul>
            </div>
          </div>
        </PageShell>
      </section>

      {pillars.map((pillar, idx) => (
        <section
          key={pillar.code}
          className={`border-b border-border py-24 md:py-28 ${idx % 2 === 1 ? "bg-cream/40" : ""}`}
        >
          <PageShell>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-4 flex flex-col gap-6">
                <div className="font-mono text-[11px] tracking-[0.22em] text-blueprint">
                  Pilar [ {pillar.code} ]
                </div>
                <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-[44px]">
                  {pillar.pillar}
                </h2>
                <p className="text-pretty text-base leading-relaxed text-graphite">
                  {pillar.intro}
                </p>
                <div className="mt-4 border-t border-border pt-6">
                  <div className="text-blueprint-label mb-3">Stack típico</div>
                  <div className="flex flex-wrap gap-2">
                    {pillar.stack.map((s) => (
                      <span
                        key={s}
                        className="border border-ink/20 bg-paper px-2.5 py-1 font-mono text-[11px] text-ink"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-8 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                {pillar.services.map((s, i) => (
                  <article key={s.title} className="group bg-paper p-6 md:p-8">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[11px] tracking-[0.2em] text-blueprint">
                        {pillar.code}.{String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="size-1.5 bg-ink/30 transition-colors group-hover:bg-blueprint" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-graphite">{s.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </PageShell>
        </section>
      ))}

      <section className="border-b border-border py-24 md:py-28">
        <PageShell>
          <SectionHeader
            index="§ 03"
            label="Servicios complementarios"
            title="Cuando el problema no entra en una sola caja."
          />
          <div className="mt-12 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {integrations.map((it, i) => (
              <div key={it.name} className="bg-paper p-6 md:p-8">
                <div className="font-mono text-xs tracking-[0.2em] text-blueprint">
                  C.{String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                  {it.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">{it.body}</p>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="bg-ink py-20 text-paper md:py-24">
        <PageShell>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-[24ch] font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              ¿Tu proyecto encaja? Veámoslo en 30 minutos.
            </h2>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-paper px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:bg-blueprint hover:text-paper"
            >
              Agendar diagnóstico →
            </Link>
          </div>
        </PageShell>
      </section>
    </>
  );
}
