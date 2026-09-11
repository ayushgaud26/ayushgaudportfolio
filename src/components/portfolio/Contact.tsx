import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { profile } from "@/content/portfolio";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sending, setSending] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Message captured", {
        description: "Connect a mail service to deliver it to your inbox.",
      });
    }, 700);
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-[86rem] scroll-mt-24 px-6 py-32 sm:px-10"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-background/40 p-8 sm:p-14">
        <span
          className="pointer-events-none absolute inset-0 animate-drift"
          style={{
            background:
              "radial-gradient(60% 90% at 20% 10%, oklch(0.58 0.2 300 / 30%), transparent 70%), radial-gradient(70% 90% at 90% 80%, oklch(0.68 0.19 258 / 28%), transparent 70%)",
          }}
        />
        <div className="relative grid gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-cyan">
                07 / Contact
              </p>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,7vw,5.4rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
                LET&rsquo;S BUILD
                <br />
                <span className="text-aurora">SOMETHING</span>
                <br />
                INTELLIGENT.
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-10 flex flex-col gap-3 text-sm">
                <ContactLink label="Email" value={profile.email} href={`mailto:${profile.email}`} />
                <ContactLink label="LinkedIn" value={profile.linkedin} href={profile.linkedin} />
                <ContactLink label="GitHub" value={profile.github} href={profile.github} />
              </ul>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <form onSubmit={submit} className="glass flex flex-col gap-5 rounded-[2rem] p-8">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="What are we building?"
                  className="resize-none rounded-2xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
                />
              </label>
              <MagneticButton type="submit" className="self-start">
                {sending ? "Sending..." : "Send message"}
              </MagneticButton>
            </form>
          </Reveal>
        </div>
      </div>

      <p className="mt-14 text-center font-mono text-[0.58rem] uppercase tracking-[0.3em] text-muted-foreground">
        {profile.name} — {profile.role}
      </p>
    </section>
  );
}

function ContactLink({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        className="group flex items-baseline gap-4 border-b border-border py-3 transition-colors hover:border-primary/50"
      >
        <span className="w-20 shrink-0 font-mono text-[0.58rem] uppercase tracking-[0.3em] text-cyan">
          {label}
        </span>
        <span className="truncate text-muted-foreground transition-transform duration-500 group-hover:translate-x-1 group-hover:text-foreground">
          {value}
        </span>
      </a>
    </li>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-2xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
      />
    </label>
  );
}
