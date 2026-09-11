import { capabilities, profile } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "./use-reveal";
import { cn } from "@/lib/utils";

function CapabilityOrb({ label, level, delay }: { label: string; level: number; delay: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.3);
  const size = 96;
  const r = 42;
  const c = 2 * Math.PI * r;

  return (
    <div ref={ref} className="group flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            className="fill-none stroke-border"
            strokeWidth="2"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            className="fill-none stroke-cyan transition-[stroke-dashoffset] duration-[1600ms] ease-out"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={shown ? c * (1 - level) : c}
            style={{ transitionDelay: `${delay}ms` }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="h-9 w-9 rounded-full bg-primary/25 blur-md transition-transform duration-500 group-hover:scale-150" />
        </span>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-[0.65rem] text-foreground/80">
          {Math.round(level * 100)}
        </span>
      </div>
      <p className="text-center text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[80rem] scroll-mt-24 px-6 py-28 sm:px-10">
      <SectionHeading index="01" kicker="Profile" title="An AI profile, not a bio." />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="glass rounded-[2rem] p-8">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
              subject
            </p>
            <p className="mt-2 font-display text-2xl font-bold tracking-tight">{profile.name}</p>
            <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-cyan">
              {profile.role}
            </p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            className={cn(
              "glass grid grid-cols-2 gap-8 rounded-[2rem] p-8 sm:grid-cols-3",
              "place-items-center",
            )}
          >
            {capabilities.map((c, i) => (
              <CapabilityOrb key={c.label} label={c.label} level={c.level} delay={i * 120} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
