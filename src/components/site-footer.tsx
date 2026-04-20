import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="relative size-4">
                <div className="absolute inset-0 bg-ink" />
                <div className="absolute inset-[3px] bg-paper" />
                <div className="absolute inset-[5px] bg-blueprint" />
              </div>
              <span className="font-display text-[15px] font-semibold">Pascalcrea</span>
            </div>
            <p className="mt-6 max-w-[40ch] text-pretty text-[15px] leading-relaxed text-graphite">
              Firma de ingeniería digital que une desarrollo web, SEO y ciencia de datos para
              construir activos digitales medibles, posicionados y rentables.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 border border-border px-3 py-1.5">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-signal" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-graphite">
                Aceptando proyectos Q2 · 2026
              </span>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-blueprint-label mb-4 border-b border-border pb-3">Estudio</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/servicios" className="text-ink hover:text-blueprint">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/casos" className="text-ink hover:text-blueprint">
                  Casos
                </Link>
              </li>
              <li>
                <Link to="/proceso" className="text-ink hover:text-blueprint">
                  Proceso
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-ink hover:text-blueprint">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-blueprint-label mb-4 border-b border-border pb-3">Contacto</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hola@pascalcrea.com" className="text-ink hover:text-blueprint">
                  hola@pascalcrea.com
                </a>
              </li>
              <li>
                <Link to="/contacto" className="text-ink hover:text-blueprint">
                  Agendar llamada
                </Link>
              </li>
              <li className="pt-2 font-mono text-xs text-graphite">Remote-first · LATAM</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-blueprint-label mb-4 border-b border-border pb-3">Métrica</div>
            <div className="space-y-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                  Proyectos entregados
                </div>
                <div className="mt-1 font-mono text-2xl tabular-nums text-ink">+40</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-graphite">
                  Uptime promedio
                </div>
                <div className="mt-1 font-mono text-2xl tabular-nums text-ink">99.98%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border py-6 font-mono text-[10px] uppercase tracking-[0.2em] text-graphite md:flex-row md:items-center">
          <div>© {year} Pascalcrea · Todos los derechos reservados</div>
          <div className="flex gap-6">
            <span>Rev. 2026.04</span>
            <span>Spec v2.6</span>
            <span className="text-blueprint">Build OK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
