import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const cases = [
  {
    client: "Malhotra Cables",
    sector: "Manufacturing",
    desc: "17 connected machines streaming live OEE, downtime, and SMS-based alerts to floor managers.",
    stats: [
      { v: 17, s: "", l: "Machines connected" },
      { v: 28, s: "%", l: "OEE uplift" },
      { v: 99, s: ".9%", l: "Stream uptime" },
    ],
  },
  {
    client: "Shyaway",
    sector: "E-Commerce",
    desc: "CI/CD automation, Kubernetes infrastructure, and AI analytics platform for hyper-growth.",
    stats: [
      { v: 6, s: "x", l: "Faster deploys" },
      { v: 42, s: "%", l: "Infra cost saved" },
      { v: 0, s: " inc", l: "Prod incidents/mo" },
    ],
  },
  {
    client: "Arrows Electrical",
    sector: "Energy & Electrical",
    desc: "Energy analytics, IIoT infrastructure and predictive maintenance readiness across plants.",
    stats: [
      { v: 22, s: "%", l: "Energy reduction" },
      { v: 11, s: "", l: "Plants live" },
      { v: 70, s: "%", l: "Fewer breakdowns" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Case Studies" title="Real Deployments. Measurable Outcomes." subtitle="Production-grade transformations delivered for global enterprises." />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass relative overflow-hidden rounded-3xl p-7"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--electric)]">{c.sector}</div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-ink">{c.client}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--electric)]" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {c.stats.map((s) => (
                  <div key={s.l} className="rounded-xl border border-border bg-white/70 p-3">
                    <div className="font-display text-2xl font-bold text-gradient">
                      <Counter to={s.v} suffix={s.s} />
                    </div>
                    <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>

              <svg viewBox="0 0 300 60" className="mt-6 h-14 w-full">
                <path d="M0,45 L40,40 L70,30 L110,32 L150,18 L190,22 L230,10 L270,14 L300,6" fill="none" stroke="oklch(0.55 0.22 258)" strokeWidth="2" />
              </svg>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
