import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Projects() {
  const [open, setOpen] = useState(0);

  return (
    <section id="work" className="mx-auto max-w-[86rem] scroll-mt-24 px-6 py-28 sm:px-10">
      <SectionHeading index="02" kicker="Selected work" title="Systems that learn." />

      <div className="mt-14 flex flex-col gap-5">
        {projects.map((p, i) => {
          const active = open === i;
          return (
            <Reveal key={p.title} delay={i * 90}>
              <article
                onMouseEnter={() => setOpen(i)}
                onClick={() => setOpen(i)}
                className={cn(
                  "glass group relative cursor-pointer overflow-hidden rounded-[2.25rem] transition-all duration-700 ease-out",
                  active ? "border-primary/40" : "hover:border-border",
                )}
              >
                <span
                  className={cn(
                    "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700",
                    active && "opacity-100",
                  )}
                  style={{
                    background:
                      "radial-gradient(70% 120% at 10% 0%, oklch(0.5 0.2 275 / 30%), transparent 65%)",
                  }}
                />
                <div className="relative grid gap-6 p-7 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                  <span className="font-mono text-[0.7rem] tracking-[0.3em] text-cyan">
                    {p.index}
                  </span>
                  <h3
                    className={cn(
                      "font-display text-[clamp(1.4rem,3.4vw,2.4rem)] font-bold leading-tight tracking-[-0.03em] transition-colors",
                      active ? "text-aurora" : "text-foreground/85",
                    )}
                  >
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={cn(
                    "relative grid transition-[grid-template-rows,opacity] duration-700 ease-out",
                    active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 border-t border-border px-7 py-8 sm:px-10 md:grid-cols-3">
                      <Detail label="Problem" value={p.problem} />
                      <Detail label="Solution" value={p.solution} />
                      <Detail label="Result" value={p.result} />
                    </div>
                    <div className="flex flex-wrap gap-3 px-7 pb-8 sm:px-10">
                      <a
                        href={p.github}
                        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                      >
                        <Github className="h-3.5 w-3.5" /> GitHub
                      </a>
                      <a
                        href={p.demo}
                        className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-primary/25"
                      >
                        Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-cyan">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value}</p>
    </div>
  );
}
