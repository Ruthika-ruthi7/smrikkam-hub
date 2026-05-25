import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Cpu, Cloud, Brain, BarChart3, Link2, Radio } from "lucide-react";

const nodes = [
  { i: Radio, t: "Machines & Sensors" },
  { i: Cpu, t: "BitXhift" },
  { i: Cloud, t: "Cloud Pipelines" },
  { i: Brain, t: "AI Models" },
  { i: BarChart3, t: "Dashboards" },
  { i: Link2, t: "SAP / ERP" },
];

export function Architecture() {
  return (
    <section className="relative py-28">
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Architecture" title="Where Industrial IoT Meets Artificial Intelligence" subtitle="An end-to-end ecosystem connecting the physical shop floor to enterprise decision systems." />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative mt-16"
        >
          <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 1200 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="flow" x1="0" x2="1">
                <stop offset="0" stopColor="oklch(0.6 0.22 258)" />
                <stop offset="1" stopColor="oklch(0.78 0.16 215)" />
              </linearGradient>
            </defs>
            <line x1="0" x2="1200" y1="40" y2="40" stroke="url(#flow)" strokeWidth="2" strokeDasharray="6 8" className="animate-dash" />
          </svg>

          <div className="relative grid grid-cols-2 gap-5 md:grid-cols-6">
            {nodes.map((n, i) => (
              <motion.div
                key={n.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass relative flex flex-col items-center gap-3 rounded-2xl p-5 text-center"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white shadow-glow animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                  <n.i className="h-7 w-7" />
                </div>
                <div className="font-display text-sm font-bold text-ink">{n.t}</div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Stage {i + 1}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
