import { certifications, education } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section className="mx-auto max-w-[76rem] px-6 py-28 sm:px-10">
      <SectionHeading index="05" kicker="Foundations" title="Education." />

      <div className="mt-12 divide-y divide-border border-y border-border">
        {education.map((e, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="group grid gap-4 py-10 md:grid-cols-[12rem_1fr] md:items-baseline">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-cyan">
                {e.period}
              </p>
              <div>
                <h3 className="font-display text-[clamp(1.5rem,3.6vw,2.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-2">
                  {e.degree}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {e.school}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {e.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-24">
        <SectionHeading index="06" kicker="Credentials" title="Certifications." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="glass h-full rounded-[1.5rem] p-7 transition-transform duration-500 hover:-translate-y-1.5">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-cyan">
                  {c.year}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug">{c.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {c.issuer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
