import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function FloatingNav() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <nav className="fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 md:block">
        <ul className="glass flex items-center gap-1 rounded-full px-2 py-2">
          <li className="px-3 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
            AG
          </li>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "relative block rounded-full px-4 py-2 text-[0.66rem] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground",
                  active === l.href && "bg-primary/15 text-foreground",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle navigation"
        className="glass fixed right-4 top-4 z-50 rounded-full p-3 md:hidden"
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      {open && (
        <div className="glass fixed inset-x-4 top-20 z-50 rounded-3xl p-4 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-xs uppercase tracking-[0.25em] text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
