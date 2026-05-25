import { motion } from "framer-motion";
import { Cpu, CloudUpload, Database, Link2, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    name: "BitXhift",
    tag: "Industrial IoT Platform",
    desc: "Industrial IoT & Machine Intelligence Platform for real-time OEE, downtime, and predictive insights.",
    icon: Cpu,
    metrics: ["OEE", "Vibration", "Energy", "Alerts"],
  },
  {
    name: "MigrateMax",
    tag: "Cloud Migration Accelerator",
    desc: "Cloud & Legacy Data Migration Accelerator — schema mapping, validation, and zero-downtime cutover.",
    icon: CloudUpload,
    metrics: ["Oracle", "MSSQL", "Snowflake", "Redshift"],
  },
  {
    name: "ParseMaster",
    tag: "Data Transformation Engine",
    desc: "Enterprise Data Transformation Engine for ingesting, parsing, and normalizing complex enterprise feeds.",
    icon: Database,
    metrics: ["EDI", "XML", "JSON", "Parquet"],
  },
  {
    name: "LinkGenX",
    tag: "Integration Framework",
    desc: "SAP / ERP / Salesforce Integration Framework with prebuilt connectors and contract testing.",
    icon: Link2,
    metrics: ["SAP", "Salesforce", "ServiceNow", "Workday"],
  },
];

export function Accelerators() {
  return (
    <section id="accelerators" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Proprietary Accelerators"
          title="Proprietary Accelerators Built for Enterprise Transformation"
          subtitle="Purpose-built frameworks designed to accelerate industrial intelligence, AI automation, cloud modernization, and enterprise integration."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-60" />
              <div className="absolute inset-[1.5px] rounded-3xl bg-white" />

              <div className="relative p-7">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary shadow-glow">
                      <it.icon className="h-7 w-7 text-white" />
                      <span className="absolute inset-0 -z-10 rounded-2xl bg-[var(--cyan-glow)] opacity-0 blur-2xl transition group-hover:opacity-60" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--electric)]">
                        {it.tag}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-ink">{it.name}</h3>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--electric)]" />
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>

                {/* mini arch visual */}
                <div className="mt-6 grid grid-cols-4 gap-2">
                  {it.metrics.map((m) => (
                    <div key={m} className="rounded-lg border border-border bg-mist/60 px-2 py-2 text-center text-[10px] font-semibold text-foreground/70">
                      {m}
                    </div>
                  ))}
                </div>

                <svg className="mt-5 h-12 w-full" viewBox="0 0 400 40" fill="none">
                  <defs>
                    <linearGradient id={`grd-${i}`} x1="0" x2="1">
                      <stop offset="0" stopColor="oklch(0.6 0.22 258)" />
                      <stop offset="1" stopColor="oklch(0.78 0.16 215)" />
                    </linearGradient>
                  </defs>
                  <path d="M5 25 L80 25 L100 10 L180 10 L200 30 L290 30 L310 15 L395 15" stroke={`url(#grd-${i})`} strokeWidth="1.5" strokeDasharray="3 4" className="animate-dash" />
                  {[5, 80, 180, 290, 395].map((x, j) => (
                    <circle key={j} cx={x} cy={j % 2 ? 30 : 15} r="3" fill="oklch(0.6 0.22 258)" />
                  ))}
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
