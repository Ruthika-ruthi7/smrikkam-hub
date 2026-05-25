import { Logo } from "./Logo";
import { Linkedin, Twitter, Github, Mail, MapPin } from "lucide-react";


const cols = [
  { h: "Solutions", l: ["Generative AI", "Industrial IoT", "Data Engineering", "DevOps & Cloud", "Data Governance"] },
  { h: "Industries", l: ["Manufacturing", "Healthcare", "Telecom", "E-Commerce", "Logistics"] },
  { h: "Company", l: ["About", "Accelerators", "Case Studies", "Careers", "Contact"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              An Enterprise Intelligence & Industrial AI Ecosystem — engineering data, AI, IIoT and cloud into a single operational fabric.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-[var(--electric)]" /> hello@smrikaam.com</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--electric)]" /> Chennai · Bengaluru · Remote</div>
            </div>
            <div className="mt-6 flex gap-2">
              {[Linkedin, Twitter, Github].map((I, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-lg border border-border text-foreground/70 transition hover:border-[var(--electric)] hover:text-[var(--electric)]">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground/80">{c.h}</div>
              <ul className="mt-5 space-y-3">
                {c.l.map((x) => (
                  <li key={x}>
                    <a href="#" className="text-sm text-muted-foreground transition hover:text-[var(--electric)]">{x}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} SMRIKAAM Technologies. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
