import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ index, children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-graphite",
        className,
      )}
    >
      {index && <span className="text-blueprint">{index}</span>}
      <span className="h-px flex-1 bg-border md:flex-none md:w-12" />
      <span>{children}</span>
    </div>
  );
}

type SectionHeaderProps = {
  label: string;
  index?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  label,
  index,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
      )}
    >
      <SectionLabel index={index}>{label}</SectionLabel>
      <h2 className="max-w-[22ch] text-pretty text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-[56px] lg:leading-[1.02]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-[58ch] text-pretty text-base leading-relaxed text-graphite md:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Rule({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-border", className)} />;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">{children}</div>
  );
}
