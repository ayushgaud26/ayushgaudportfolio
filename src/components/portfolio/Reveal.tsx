import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "./use-reveal";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", shown && "revealed", className)}
    >
      {children}
    </div>
  );
}
