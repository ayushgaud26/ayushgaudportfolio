import { experience } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[76rem] scroll-mt-24 px-6 py-28 sm:px-10">
      <SectionHeading index="04" kicker="Trajectory" title="A path, not a list." />

      <div className="relative mt-16">
        <svg
          className="pointer-events-none absolute left-0 top-0 hidden h-full w-24 md:block"
          viewBox="0 0 100 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M50 0 C 10 150, 90 300, 50 450 C 20 540, 60 570, 50 600"
            className="fill-none stroke-primary/40"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
        </svg>

        <div className="flex flex-col gap-8 md:pl-32">
          {experience.map((e, i) => (
            <Reveal key={i} delay={i * 110}>
              <div className="glass relative rounded-[1.75rem] p-8 transition-transform duration-500 hover:-translate-y-1">
                <span className="absolute -left-[4.6rem] top-10 hidden h-3 w-3 rounded-full bg-cyan md:block">
                  <span className="absolute inset-0 animate-pulse-ring rounded-full bg-cyan" />
                </span>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-cyan">
                  {e.period}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{e.role}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {e.org}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {e.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
