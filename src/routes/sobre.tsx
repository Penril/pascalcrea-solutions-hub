import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, SectionLabel } from "@/components/editorial";
import studioCraft from "@/assets/studio-craft.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Estudio — Pascalcrea" },
      {
        name: "description",
        content:
          "Pascalcrea es una firma de ingeniería digital remota que combina desarrollo web y ciencia de datos. Conoce el equipo y los principios.",
      },
      { property: "og:title", content: "Sobre Pascalcrea — Ingeniería digital" },
      {
        property: "og:description",
        content:
          "Equipo pequeño, senior y enfocado. Cómo trabajamos y por qué nos llaman Pascalcrea.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border py-20 md:py-28">
        <PageShell>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7 flex flex-col gap-8">
              <SectionLabel index="§ 04">Estudio</SectionLabel>
              <h1 className="text-balance font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-[80px]">
                Un equipo pequeño,
                <br />
                <span className="text-blueprint">construyendo sistemas serios.</span>
              </h1>
              <p className="max-w-[58ch] text-pretty text-lg font-light leading-relaxed text-graphite">
                Pascalcrea nace de la idea de que el desarrollo web y los datos no son disciplinas
                separadas: son dos caras del mismo sistema digital. Combinamos ambas porque la
                mayoría de problemas valiosos viven en su intersección.
              </p>
              <p className="max-w-[58ch] text-pretty text-base leading-relaxed text-graphite">
                Trabajamos remoto desde LATAM con clientes de Latinoamérica y Estados Unidos.
                Equipos pequeños, senior, sin intermediarios. El nombre viene de Blaise Pascal —
                matemático, ingeniero y filósofo— y de la práctica diaria de crear (
                <em>crea</em>) sistemas con su mismo rigor.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative bg-cream p-1">
                <img
                  src={studioCraft}
                  alt="Mesa de trabajo: laptop, cuaderno con diagramas de sistema y notas técnicas"
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-[440px] w-full object-cover mix-blend-multiply md:h-[520px]"
                />
              </div>
              <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-widest text-graphite">
                <span>Fig. 03</span>
                <span>Mesa de trabajo · LATAM</span>
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      <section className="border-b border-border bg-cream/40 py-24 md:py-28">
        <PageShell>
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {[
              {
                k: "Senior por defecto",
                v: "Sin juniors aprendiendo en tu proyecto. Quien diseña, también implementa.",
              },
              {
                k: "Cliente directo",
                v: "Trabajas con los ingenieros. No hay account managers entre ustedes.",
              },
              {
                k: "Pocos clientes a la vez",
                v: "Tomamos solo proyectos donde podemos darle atención completa. Calidad sobre volumen.",
              },
            ].map((it, i) => (
              <div key={it.k} className="bg-paper p-8">
                <div className="font-mono text-xs tracking-[0.2em] text-blueprint">
                  V.{String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{it.k}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">{it.v}</p>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="border-b border-border py-24 md:py-28">
        <PageShell>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-5 flex flex-col gap-6">
              <SectionLabel index="§ 05">Capacidades técnicas</SectionLabel>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Stack pragmático, no ideológico.
              </h2>
              <p className="text-pretty text-base leading-relaxed text-graphite">
                Elegimos herramientas por su tracción y mantenibilidad, no por moda. Cuando algo
                nuevo aporta valor real, lo adoptamos. Cuando es ruido, lo dejamos pasar.
              </p>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-px bg-border">
              {[
                {
                  cat: "Frontend",
                  items: ["React", "TypeScript", "Tailwind", "TanStack", "Next.js"],
                },
                {
                  cat: "Backend",
                  items: ["Node.js", "Python", "PostgreSQL", "Redis", "tRPC / REST"],
                },
                {
                  cat: "Datos",
                  items: ["dbt", "Airflow", "Dagster", "BigQuery", "Snowflake"],
                },
                {
                  cat: "ML & IA",
                  items: ["scikit-learn", "PyTorch", "OpenAI APIs", "LangChain", "MLflow"],
                },
                {
                  cat: "Infra",
                  items: ["AWS · GCP · CF", "Terraform", "Docker", "GitHub Actions", "Edge"],
                },
                {
                  cat: "Observabilidad",
                  items: ["Sentry", "Grafana", "PostHog", "Datadog", "OpenTelemetry"],
                },
              ].map((g) => (
                <div key={g.cat} className="bg-paper p-6">
                  <div className="text-blueprint-label mb-4 border-b border-border pb-2">
                    {g.cat}
                  </div>
                  <ul className="space-y-1.5 font-mono text-sm">
                    {g.items.map((i) => (
                      <li key={i} className="text-ink">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </PageShell>
      </section>

      <section className="bg-ink py-20 text-paper md:py-24">
        <PageShell>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-[28ch] font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              ¿Te interesa cómo trabajamos? Conversemos.
            </h2>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-paper px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:bg-blueprint hover:text-paper"
            >
              Contactar →
            </Link>
          </div>
        </PageShell>
      </section>
    </>
  );
}
