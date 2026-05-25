import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Activity, Cpu, Cloud, Gauge, Zap, TrendingUp, AlertTriangle } from "lucide-react";

function Particles() {
  const pts = Array.from({ length: 28 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pts.map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[var(--electric)]/40"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animation: `float-y ${5 + (i % 6)}s ease-in-out ${i * 0.2}s infinite`,
            opacity: 0.3 + ((i % 5) * 0.1),
          }}
        />
      ))}
    </div>
  );
}

function NeuralSVG() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]" viewBox="0 0 800 600" fill="none">
      <defs>
        <linearGradient id="ln" x1="0" x2="1">
          <stop offset="0" stopColor="oklch(0.6 0.22 258)" stopOpacity="0" />
          <stop offset="0.5" stopColor="oklch(0.6 0.22 258)" stopOpacity="0.8" />
          <stop offset="1" stopColor="oklch(0.78 0.16 215)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {Array.from({ length: 14 }).map((_, i) => (
        <path
          key={i}
          d={`M ${-50 + i * 30} ${50 + i * 30} Q 400 ${100 + (i % 5) * 50} ${850 - i * 20} ${i * 40}`}
          stroke="url(#ln)"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="animate-dash"
          style={{ animationDuration: `${6 + i}s` }}
        />
      ))}
    </svg>
  );
}

function KPI({ icon: Icon, label, value, trend, color }: any) {
  return (
    <div className="glass rounded-xl p-3">
      <div className="flex items-center justify-between">
        <div className={`grid h-8 w-8 place-items-center rounded-lg ${color}`}>
          <Icon className="h-4 w-4 text-white" />
        </div>
        <span className="text-[10px] font-semibold text-emerald-600">{trend}</span>
      </div>
      <div className="mt-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="font-display text-xl font-bold text-ink">{value}</div>
    </div>
  );
}

function MiniChart() {
  return (
    <svg viewBox="0 0 200 60" className="h-16 w-full">
      <defs>
        <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(0.6 0.22 258)" stopOpacity="0.4" />
          <stop offset="1" stopColor="oklch(0.6 0.22 258)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,45 L20,40 L40,42 L60,30 L80,32 L100,22 L120,25 L140,15 L160,18 L180,10 L200,12 L200,60 L0,60 Z" fill="url(#area)" />
      <path d="M0,45 L20,40 L40,42 L60,30 L80,32 L100,22 L120,25 L140,15 L160,18 L180,10 L200,12" fill="none" stroke="oklch(0.55 0.22 258)" strokeWidth="1.8" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute inset-0 grid-bg" />
      <NeuralSVG />
      <Particles />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-32">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-foreground/70"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--electric)]" />
            AI • DATA • IIoT • CLOUD • ENTERPRISE INTELLIGENCE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-6xl lg:text-7xl"
          >
            Engineering <span className="text-gradient">Intelligent</span> Enterprises
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Transform factories, operations, and enterprise systems with AI-powered analytics,
            Industrial IoT, cloud engineering, and intelligent automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-15px_oklch(0.6_0.22_258_/_0.7)]">
              Book Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#solutions" className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5">
              Explore Solutions
            </a>
          </motion.div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            {[
              ["50+", "Enterprise Deployments"],
              ["17M+", "Data Points / Day"],
              ["99.9%", "Platform Uptime"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-bold text-ink">{v}</div>
                <div className="text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — dashboard ecosystem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-primary opacity-20 blur-3xl" />
          {/* Main dashboard */}
          <div className="glass relative rounded-2xl p-5 shadow-glow">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Operational Intelligence</div>
                <div className="font-display text-lg font-bold text-ink">Plant Overview · Line 03</div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 animate-pulse-glow rounded-full bg-emerald-500" />
                <span className="text-[11px] font-medium text-emerald-600">LIVE</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <KPI icon={Gauge} label="OEE" value="87.4%" trend="+4.2%" color="bg-gradient-primary" />
              <KPI icon={Activity} label="Throughput" value="2,481" trend="+1.8%" color="bg-[var(--indigo-accent)]" />
              <KPI icon={Zap} label="Energy" value="412 kW" trend="-3.1%" color="bg-[var(--cyan-glow)]" />
            </div>

            <div className="mt-4 rounded-xl border border-border bg-white/60 p-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-ink">Predictive Maintenance · 30d</div>
                <TrendingUp className="h-3.5 w-3.5 text-[var(--electric)]" />
              </div>
              <MiniChart />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-border bg-white/60 p-3">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-[var(--indigo-accent)]" />
                  <span className="text-[11px] font-semibold text-ink">AI Insight</span>
                </div>
                <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">
                  Bearing wear detected on CNC-07 — schedule service within 72h.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-white/60 p-3">
                <div className="flex items-center gap-2">
                  <Cloud className="h-4 w-4 text-[var(--electric)]" />
                  <span className="text-[11px] font-semibold text-ink">SAP Sync</span>
                </div>
                <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">
                  3.2M records · streamed to S/4HANA · 41ms latency
                </p>
              </div>
            </div>
          </div>

          {/* Floating side cards */}
          <div className="glass absolute -left-6 top-20 hidden w-44 rounded-2xl p-3 shadow-soft md:block animate-float">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <span className="text-[11px] font-semibold text-ink">Anomaly</span>
            </div>
            <p className="mt-1 text-[10px] text-muted-foreground">Vibration spike · Press-02</p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-mist">
              <div className="h-full w-3/4 rounded-full bg-gradient-primary" />
            </div>
          </div>

          <div className="glass absolute -right-4 bottom-8 hidden w-48 rounded-2xl p-3 shadow-soft md:block animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Cloud Pipeline</div>
            <div className="mt-1.5 flex items-end gap-1">
              {[40, 65, 35, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="w-3 rounded-sm bg-gradient-to-t from-[var(--electric)] to-[var(--cyan-glow)]" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mt-2 text-[11px] font-bold text-ink">12.4k events/s</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
