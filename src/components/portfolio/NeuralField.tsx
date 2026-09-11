import { useEffect, useRef } from "react";

type Node = { x: number; y: number; z: number; vx: number; vy: number; r: number };

/**
 * Mouse-reactive neural intelligence sphere rendered on canvas.
 * Node count scales down on small screens.
 */
export function NeuralField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    let nodes: Node[] = [];

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = w < 520 ? 34 : w < 900 ? 54 : 78;
      const radius = Math.min(w, h) * 0.38;
      nodes = Array.from({ length: count }, () => {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const rr = radius * (0.55 + Math.random() * 0.45);
        return {
          x: w / 2 + rr * Math.sin(phi) * Math.cos(theta),
          y: h / 2 + rr * Math.sin(phi) * Math.sin(theta),
          z: Math.cos(phi),
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          r: 0.9 + Math.random() * 1.9,
        };
      });
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = e.clientX - rect.left - rect.width / 2;
      pointer.ty = e.clientY - rect.top - rect.height / 2;
    };

    const draw = () => {
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2 + pointer.x * 0.06;
      const cy = h / 2 + pointer.y * 0.06;

      // core halo
      const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * 0.5);
      halo.addColorStop(0, "rgba(120,150,255,0.22)");
      halo.addColorStop(0.5, "rgba(140,90,240,0.10)");
      halo.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, w, h);

      for (const n of nodes) {
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
        }
        const dx = n.x - w / 2;
        const dy = n.y - h / 2;
        const lim = Math.min(w, h) * 0.44;
        if (Math.hypot(dx, dy) > lim) {
          n.vx *= -1;
          n.vy *= -1;
          n.x += n.vx * 2;
          n.y += n.vy * 2;
        }
      }

      const maxDist = Math.min(w, h) * 0.24;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]!;
        const ax = a.x + pointer.x * (0.05 + a.z * 0.05);
        const ay = a.y + pointer.y * (0.05 + a.z * 0.05);
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]!;
          const bx = b.x + pointer.x * (0.05 + b.z * 0.05);
          const by = b.y + pointer.y * (0.05 + b.z * 0.05);
          const d = Math.hypot(ax - bx, ay - by);
          if (d < maxDist) {
            const o = (1 - d / maxDist) * 0.4;
            ctx.strokeStyle = `rgba(130,170,255,${o.toFixed(3)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.fillStyle = a.z > 0 ? "rgba(160,220,255,0.95)" : "rgba(170,140,255,0.8)";
        ctx.arc(ax, ay, a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    build();
    draw();
    const ro = new ResizeObserver(build);
    ro.observe(canvas);
    window.addEventListener("pointermove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
