import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Inicio", num: "00" },
  { to: "/servicios", label: "Servicios", num: "01" },
  { to: "/casos", label: "Casos", num: "02" },
  { to: "/proceso", label: "Proceso", num: "03" },
  { to: "/sobre", label: "Estudio", num: "04" },
  { to: "/contacto", label: "Contacto", num: "05" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="relative size-4">
            <div className="absolute inset-0 bg-ink transition-transform duration-300 group-hover:rotate-45" />
            <div className="absolute inset-[3px] bg-paper" />
            <div className="absolute inset-[5px] bg-blueprint" />
          </div>
          <span className="font-display text-[15px] font-semibold tracking-tight">Pascalcrea</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-graphite md:inline">
            / Ingeniería digital
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.slice(1).map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "group relative px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors",
                  active ? "text-ink" : "text-graphite hover:text-ink",
                )}
              >
                <span className="text-blueprint">{item.num}</span>{" "}
                <span>{item.label}</span>
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-ink" />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/contacto"
          className="group inline-flex items-center gap-2 bg-ink px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors hover:bg-blueprint"
        >
          Agendar diagnóstico
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </header>
  );
}
