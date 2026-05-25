import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-white p-12 md:p-20"
        >
          <div className="absolute inset-0 -z-10 bg-mesh opacity-50" />
          <div className="absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full bg-[var(--electric)]/30 blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-24 -right-10 -z-10 h-80 w-80 rounded-full bg-[var(--cyan-glow)]/40 blur-3xl animate-pulse-glow" />
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[var(--electric)]/50"
              style={{
                left: `${(i * 47) % 100}%`,
                top: `${(i * 31) % 100}%`,
                animation: `float-y ${4 + (i % 5)}s ease-in-out ${i * 0.1}s infinite`,
              }}
            />
          ))}

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Available this week
            </div>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
              Let’s Build Your <span className="text-gradient">Intelligent Enterprise</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Book a free strategy consultation with our experts and discover how AI, IoT, and cloud intelligence can transform your operations.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href="#" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
                Schedule Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#" className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5">
                <Phone className="h-4 w-4" /> Talk to Experts
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
