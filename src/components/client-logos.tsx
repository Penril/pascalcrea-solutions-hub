import { PageShell } from "@/components/editorial";

/**
 * Editorial client logo strip.
 * Wordmarks rendered as inline SVG in current text color so they
 * inherit the muted "graphite" palette and stay coherent with the
 * editorial blueprint aesthetic. Logos are placeholder marks.
 */

type Logo = {
  name: string;
  render: (props: { className?: string }) => JSX.Element;
};

const logos: Logo[] = [
  {
    name: "Northwind",
    render: ({ className }) => (
      <svg viewBox="0 0 160 28" className={className} aria-hidden>
        <g fill="currentColor">
          <path d="M2 22V6h2.6l7.4 11.2V6h2.4v16h-2.6L4.4 10.8V22H2z" />
          <text
            x="22"
            y="19"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="600"
            letterSpacing="0.02em"
          >
            NORTHWIND
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "Helvetia Labs",
    render: ({ className }) => (
      <svg viewBox="0 0 170 28" className={className} aria-hidden>
        <g fill="currentColor">
          <circle cx="10" cy="14" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <line x1="10" y1="8" x2="10" y2="20" stroke="currentColor" strokeWidth="1.5" />
          <text
            x="24"
            y="19"
            fontFamily="Inter, sans-serif"
            fontSize="13"
            fontWeight="500"
            letterSpacing="0.06em"
          >
            HELVETIA / LABS
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "Kuro & Co",
    render: ({ className }) => (
      <svg viewBox="0 0 130 28" className={className} aria-hidden>
        <g fill="currentColor">
          <rect x="2" y="6" width="14" height="14" />
          <rect x="6" y="10" width="6" height="6" fill="var(--paper)" />
          <text
            x="22"
            y="19"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="700"
            letterSpacing="0.04em"
          >
            KURO &amp; CO
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "Atelier 47",
    render: ({ className }) => (
      <svg viewBox="0 0 150 28" className={className} aria-hidden>
        <g fill="currentColor">
          <text
            x="0"
            y="20"
            fontFamily="Inter, sans-serif"
            fontSize="15"
            fontStyle="italic"
            fontWeight="500"
          >
            Atelier
          </text>
          <text
            x="68"
            y="20"
            fontFamily="JetBrains Mono, monospace"
            fontSize="14"
            fontWeight="600"
          >
            ·47
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "Meridian",
    render: ({ className }) => (
      <svg viewBox="0 0 150 28" className={className} aria-hidden>
        <g fill="currentColor">
          <path
            d="M2 14 Q10 4 18 14 Q10 24 2 14 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <text
            x="24"
            y="19"
            fontFamily="Inter, sans-serif"
            fontSize="14"
            fontWeight="500"
            letterSpacing="0.18em"
          >
            MERIDIAN
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "Forma Studio",
    render: ({ className }) => (
      <svg viewBox="0 0 165 28" className={className} aria-hidden>
        <g fill="currentColor">
          <text
            x="0"
            y="20"
            fontFamily="Inter, sans-serif"
            fontSize="16"
            fontWeight="700"
            letterSpacing="-0.02em"
          >
            forma
          </text>
          <text
            x="60"
            y="20"
            fontFamily="Inter, sans-serif"
            fontSize="16"
            fontWeight="300"
            letterSpacing="-0.02em"
          >
            studio
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "Octave Data",
    render: ({ className }) => (
      <svg viewBox="0 0 160 28" className={className} aria-hidden>
        <g fill="currentColor">
          <circle cx="8" cy="14" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="14" r="2" />
          <text
            x="22"
            y="19"
            fontFamily="JetBrains Mono, monospace"
            fontSize="13"
            fontWeight="500"
            letterSpacing="0.08em"
          >
            OCTAVE.DATA
          </text>
        </g>
      </svg>
    ),
  },
];

export function ClientLogos() {
  return (
    <section
      aria-label="Clientes y colaboradores"
      className="border-b border-border bg-paper"
    >
      <PageShell>
        <div className="flex flex-col gap-8 py-14 md:py-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
              <span className="inline-block size-1.5 bg-blueprint" />
              <span>[ Clientes · Selección 2024–2026 ]</span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-graphite">
              Fig. 00 · Confianza
            </div>
          </div>

          <div className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center text-graphite/70 transition-colors hover:text-ink"
                title={logo.name}
              >
                <logo.render className="h-6 w-auto max-w-full" />
              </div>
            ))}
          </div>
        </div>
      </PageShell>
    </section>
  );
}
