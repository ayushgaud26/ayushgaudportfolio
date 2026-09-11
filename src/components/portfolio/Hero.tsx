import { ArrowDownRight, FileDown } from "lucide-react";
import { profile } from "@/content/portfolio";
import { MagneticButton } from "./MagneticButton";
import { NeuralField } from "./NeuralField";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[100svh] max-w-[110rem] flex-col justify-center px-6 pb-20 pt-28 sm:px-10 lg:px-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-cyan" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
              </span>
              Intelligence Lab / Portfolio
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 font-display text-[clamp(2.9rem,9vw,7.2rem)] font-extrabold leading-[0.86] tracking-[-0.04em]">
              <span className="block text-aurora">AYUSH</span>
              <span className="block pl-[0.08em] text-foreground/95">GAUD</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-6 flex items-center gap-4">
              <span className="h-px w-16 bg-gradient-to-r from-cyan to-transparent" />
              <p className="font-mono text-xs uppercase tracking-[0.42em] text-cyan">
                {profile.role}
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {profile.statement}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href="#work">
                Explore my work <ArrowDownRight className="h-3.5 w-3.5" />
              </MagneticButton>
              <MagneticButton href={profile.resumeUrl} variant="ghost">
                Download resume <FileDown className="h-3.5 w-3.5" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
            <NeuralField className="absolute inset-0 h-full w-full" />
            <div className="pointer-events-none absolute inset-[18%] rounded-full border border-border/60 animate-floaty" />
            <div className="pointer-events-none absolute inset-[32%] rounded-full border border-primary/25" />
            <div className="glass absolute bottom-2 left-0 hidden rounded-2xl px-4 py-3 sm:block">
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-muted-foreground">
                model state
              </p>
              <p className="mt-1 font-display text-sm text-foreground">inference · live</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
