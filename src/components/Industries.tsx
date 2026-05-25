import { motion } from "framer-motion";
import { Factory, HeartPulse, Signal, ShoppingBag, Truck, Flame, Building2, Plug } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const inds = [
  { icon: Factory, name: "Manufacturing", kpi: "OEE 92%", sub: "Connected lines" },
  { icon: HeartPulse, name: "Healthcare", kpi: "1.2M", sub: "Records / day" },
  { icon: Signal, name: "Telecom", kpi: "5G", sub: "Network analytics" },
  { icon: ShoppingBag, name: "E-Commerce", kpi: "+38%", sub: "Conversion lift" },
  { icon: Truck, name: "Logistics", kpi: "98.4%", sub: "On-time delivery" },
  { icon: Flame, name: "Oil & Gas", kpi: "24/7", sub: "Asset monitoring" },
  { icon: Building2, name: "Infrastructure", kpi: "Smart", sub: "Operations" },
  { icon: Plug, name: "Electrical", kpi: "-22%", sub: "Energy spend" },
];

function MiniWidget({ i }: { i: number }) {
  const bars = [40, 65, 35, 80, 55, 90, 70, 60];
  return (
    <div className="rounded-xl border border-border bg-mist/40 p-3">
      <div className="flex items-end gap-1">
        {bars.map((h, j) => (
          <div key={j} className="w-2 rounded-sm bg-gradient-to-t from-[var(--electric)]/30 to-[var(--cyan-glow)]" style={{ height: `${h * (0.6 + ((i + j) % 3) * 0.15)}%`, minHeight: 8 }} />
        ))}
      </div>
    </div>
  );
}

export function Industries() {
  return (
    <section id="industries" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Industries" title="Industry-Grade Intelligence" subtitle="Deep domain expertise across regulated, high-throughput, and asset-heavy industries." />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {inds.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-[var(--electric)]/40 hover:shadow-glow"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="text-right">
                  <div className="font-display text-xl font-bold text-ink">{it.kpi}</div>
                  <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">{it.sub}</div>
                </div>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{it.name}</h3>
              <div className="mt-4">
                <MiniWidget i={i} />
              </div>
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[var(--cyan-glow)] opacity-0 blur-3xl transition group-hover:opacity-40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
