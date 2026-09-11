import { useEffect, useState } from "react";

/** Layered atmospheric gradients + soft floating particles behind all content. */
export function Atmosphere() {
  const [dots, setDots] = useState<
    { left: number; top: number; size: number; delay: number; dur: number; op: number }[]
  >([]);

  useEffect(() => {
    setDots(
      Array.from({ length: 40 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 8,
        dur: 6 + Math.random() * 10,
        op: 0.15 + Math.random() * 0.5,
      })),
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="aurora absolute inset-[-20%] animate-drift opacity-90" />
      <div className="absolute left-[-10%] top-[30%] h-[38rem] w-[38rem] rounded-full bg-violet/20 blur-[140px]" />
      <div className="absolute right-[-15%] top-[5%] h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-[150px]" />
      <div className="absolute bottom-[-10%] left-[35%] h-[30rem] w-[30rem] rounded-full bg-indigo/20 blur-[160px]" />
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-cyan animate-floaty"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.op,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
