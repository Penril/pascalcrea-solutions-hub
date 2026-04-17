import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, SectionLabel } from "@/components/editorial";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Pascalcrea" },
      {
        name: "description",
        content:
          "Agenda un diagnóstico de 30 minutos o describe tu proyecto. Respondemos dentro de 24 horas hábiles.",
      },
      { property: "og:title", content: "Contacto — Pascalcrea" },
      {
        property: "og:description",
        content:
          "Conversemos sobre tu proyecto. Diagnóstico gratuito y respuesta en 24 horas.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="border-b border-border py-20 md:py-28">
        <PageShell>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-5 flex flex-col gap-8">
              <SectionLabel index="§ 05">Contacto · Inicio</SectionLabel>
              <h1 className="text-balance font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
                Conversemos
                <br />
                <span className="text-blueprint">sobre tu proyecto.</span>
              </h1>
              <p className="max-w-[42ch] text-pretty text-lg font-light leading-relaxed text-graphite">
                Diagnóstico gratuito de 30 minutos. Te decimos si podemos ayudarte y cómo. Sin venta
                dura, sin seguimiento agresivo.
              </p>

              <div className="mt-4 space-y-6">
                <div>
                  <div className="text-blueprint-label mb-2">Email directo</div>
                  <a
                    href="mailto:hola@pascalcrea.com"
                    className="font-display text-2xl font-semibold text-ink hover:text-blueprint"
                  >
                    hola@pascalcrea.com
                  </a>
                </div>
                <div>
                  <div className="text-blueprint-label mb-2">Tiempo de respuesta</div>
                  <div className="font-mono text-sm text-ink">{"<"} 24h hábiles</div>
                </div>
                <div>
                  <div className="text-blueprint-label mb-2">Estado</div>
                  <div className="inline-flex items-center gap-2">
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-signal" />
                    </span>
                    <span className="font-mono text-sm text-ink">
                      Aceptando proyectos · Q2 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="relative border border-border bg-paper p-6 md:p-10">
                <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-widest text-graphite">
                  Form · 01
                </div>

                {submitted ? (
                  <div className="flex min-h-[420px] flex-col items-start justify-center gap-6">
                    <div className="text-blueprint-label">Mensaje recibido</div>
                    <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                      Gracias. Respondemos pronto.
                    </h2>
                    <p className="max-w-[42ch] text-graphite">
                      Te escribiremos dentro de 24 horas hábiles al correo que dejaste con los
                      próximos pasos para tu diagnóstico.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-[0.2em] hover:border-blueprint hover:text-blueprint"
                    >
                      Enviar otro mensaje →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Field label="Nombre" name="name" required />
                    <Field label="Empresa" name="company" />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Teléfono" name="phone" type="tel" />

                    <div className="md:col-span-2">
                      <label className="text-blueprint-label mb-2 block">Tipo de proyecto</label>
                      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                        {["Web App", "Sistema interno", "Datos / BI", "ML / IA"].map((t) => (
                          <label
                            key={t}
                            className="flex cursor-pointer items-center gap-2 border border-border bg-paper px-3 py-2 font-mono text-xs hover:border-ink"
                          >
                            <input type="checkbox" name="type" value={t} className="accent-blueprint" />
                            {t}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="text-blueprint-label mb-2 block">Cuéntanos del proyecto</label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        placeholder="Contexto, objetivos, plazos, presupuesto aproximado..."
                        className="w-full border border-border bg-paper px-4 py-3 font-sans text-sm text-ink placeholder:text-graphite focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
                      />
                    </div>

                    <div className="md:col-span-2 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 md:flex-row md:items-center">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                        Tus datos no se comparten. Solo para esta conversación.
                      </p>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 bg-ink px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-blueprint"
                      >
                        Enviar solicitud
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      <section className="border-b border-border bg-cream/40 py-20 md:py-24">
        <PageShell>
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {[
              { k: "Tiempo de diagnóstico", v: "30 min" },
              { k: "Costo de diagnóstico", v: "Gratuito" },
              { k: "Respuesta", v: "<24h hábiles" },
            ].map((s) => (
              <div key={s.k} className="bg-paper p-8">
                <div className="text-blueprint-label">{s.k}</div>
                <div className="mt-3 font-display text-3xl font-semibold tabular-nums text-ink">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </PageShell>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-blueprint-label mb-2 block">
        {label} {required && <span className="text-blueprint">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-border bg-paper px-4 py-3 font-sans text-sm text-ink focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
      />
    </div>
  );
}
