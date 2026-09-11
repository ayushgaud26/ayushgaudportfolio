import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-cyan">
          {index} / {kicker}
        </span>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent sm:block" />
      </div>
      <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.9rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
        {title}
      </h2>
    </Reveal>
  );
}
