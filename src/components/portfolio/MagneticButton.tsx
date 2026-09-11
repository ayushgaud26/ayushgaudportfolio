import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "solid",
  className,
  type = "button",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.35;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const leave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  };

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-[transform,box-shadow,background-color] duration-500 ease-out",
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:glow"
      : "glass text-foreground hover:border-primary/50",
    className,
  );

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-y-0 -left-1/3 z-0 w-1/3 skew-x-12 bg-foreground/10 opacity-0 transition-opacity duration-500 group-hover:animate-trail group-hover:opacity-100" />
    </>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={move}
        onMouseLeave={leave}
        className={classes}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={leave}
      className={classes}
    >
      {inner}
    </button>
  );
}
