import { motion } from "framer-motion";
import { Brain, Plug, Cloud, Factory, Rocket, Layers, Activity, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { i: Brain, t: "Industrial AI Expertise", d: "Deep ML + domain knowledge across asset-heavy industries." },
  { i: Plug, t: "Enterprise Integrations", d: "Battle-tested SAP, ERP, CRM and event-mesh integrations." },
  { i: Cloud, t: "Multi-Cloud Infrastructure", d: "AWS, Azure, GCP — Kubernetes-native and observable." },
  { i: Factory, t: "Manufacturing Intelligence", d: "OEE, predictive maintenance, energy & quality systems." },
  { i: Rocket, t: "Production-Ready Deployments", d: "From PoC to scale — hardened, monitored, governed." },
  { i: Layers, t: "Scalable Architecture", d: "Event-driven, lakehouse-first, designed to grow." },
  { i: Activity, t: "Real Operational Intelligence", d: "Streaming insights tied to business outcomes." },
  { i: Sparkles, t: "AI + Data + IIoT Under One Roof", d: "A single partner for the full intelligence stack." },
];

export function WhyUs() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Why SMRIKAAM" title="Why Enterprises Choose SMRIKAAM" subtitle="A measurable edge across every dimension of enterprise intelligence." />
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-[var(--electric)] transition group-hover:bg-gradient-primary group-hover:text-white">
                <it.i className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-ink">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
