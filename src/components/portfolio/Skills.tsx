import { stack } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[80rem] scroll-mt-24 px-6 py-28 sm:px-10">
      <SectionHeading index="03" kicker="Stack" title="The AI stack I build with." />

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {stack.map((g, i) => (
          <Reveal key={g.group} delay={i * 70}>
            <div className="glass group relative h-full overflow-hidden rounded-[1.75rem] p-7 transition-transform duration-500 ease-out hover:-translate-y-1.5">
              <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet/25 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-primary/30" />
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-cyan">
                node {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight">{g.group}</h3>
              <ul className="mt-5 flex flex-col gap-2.5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan transition-transform duration-300 group-hover:scale-125" />
                    <span className="h-px flex-none w-4 bg-border" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
