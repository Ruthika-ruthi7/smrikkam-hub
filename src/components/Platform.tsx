import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Activity, Cpu, Database, Gauge, ShieldCheck, Zap } from "lucide-react";

export function Platform() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Platform" title="See Intelligence in Action" subtitle="A live look at the dashboards, models, and pipelines our customers run every day." />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-primary opacity-20 blur-3xl" />
          {/* laptop frame */}
          <div className="rounded-[1.75rem] border border-border bg-gradient-to-b from-mist to-white p-3 shadow-glow">
            <div className="rounded-[1.25rem] border border-border bg-white p-5">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  <span className="ml-3 text-xs font-semibold text-muted-foreground">smrikaam.io / operations</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600">
                  <span className="h-2 w-2 animate-pulse-glow rounded-full bg-emerald-500" /> STREAMING
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2fr_1fr]">
                {/* left rail */}
                <div className="space-y-3">
                  {[
                    { i: Gauge, l: "OEE", v: "87.4%" },
                    { i: Activity, l: "Throughput", v: "2,481 u/h" },
                    { i: Zap, l: "Energy", v: "412 kW" },
                    { i: ShieldCheck, l: "Quality", v: "99.6%" },
                  ].map((k) => (
                    <div key={k.l} className="flex items-center gap-3 rounded-xl border border-border bg-mist/50 p-3">
                      <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-white">
                        <k.i className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{k.l}</div>
                        <div className="font-display text-lg font-bold text-ink">{k.v}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* big chart */}
                <div className="rounded-xl border border-border bg-mist/40 p-5">
                  <div className="flex items-center justify-between">
                    <div className="font-display text-sm font-bold text-ink">Production vs Predicted · 7d</div>
                    <div className="text-[10px] font-semibold text-emerald-600">+4.2% wow</div>
                  </div>
                  <svg viewBox="0 0 600 220" className="mt-4 h-56 w-full">
                    <defs>
                      <linearGradient id="ar" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="oklch(0.6 0.22 258)" stopOpacity="0.35" />
                        <stop offset="1" stopColor="oklch(0.6 0.22 258)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[0, 1, 2, 3, 4].map((g) => (
                      <line key={g} x1="0" x2="600" y1={40 + g * 40} y2={40 + g * 40} stroke="oklch(0.92 0.008 250)" />
                    ))}
                    <path d="M0,160 C60,150 90,120 150,130 S260,90 320,100 S430,60 480,70 S580,40 600,50 L600,220 L0,220 Z" fill="url(#ar)" />
                    <path d="M0,160 C60,150 90,120 150,130 S260,90 320,100 S430,60 480,70 S580,40 600,50" fill="none" stroke="oklch(0.55 0.22 258)" strokeWidth="2.5" />
                    <path d="M0,170 C60,160 90,140 150,145 S260,110 320,120 S430,85 480,90 S580,65 600,72" fill="none" stroke="oklch(0.78 0.16 215)" strokeWidth="2" strokeDasharray="5 5" />
                  </svg>
                </div>
                {/* right insights */}
                <div className="space-y-3">
                  <div className="rounded-xl border border-border bg-mist/50 p-3">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-[var(--indigo-accent)]" />
                      <span className="text-xs font-semibold text-ink">AI Insights</span>
                    </div>
                    <ul className="mt-2 space-y-2 text-[11px] text-muted-foreground">
                      <li>• CNC-07 bearing wear · service in 72h</li>
                      <li>• Press-02 vibration anomaly detected</li>
                      <li>• Shift B yield 3.1% below target</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-border bg-mist/50 p-3">
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4 text-[var(--electric)]" />
                      <span className="text-xs font-semibold text-ink">Pipelines</span>
                    </div>
                    <div className="mt-2 space-y-1.5">
                      {["ingest.sensors", "transform.oee", "ml.predict.maint"].map((p) => (
                        <div key={p} className="flex items-center justify-between text-[11px]">
                          <span className="font-mono text-foreground/70">{p}</span>
                          <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-600">OK</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
