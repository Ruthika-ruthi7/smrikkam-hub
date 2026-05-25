import { motion } from "framer-motion";
import { Brain, Radio, Database, BarChart3, Cloud, ShieldCheck, Workflow, Bot } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const sols = [
  { icon: Brain, title: "Generative AI", desc: "LLM applications, RAG pipelines, and copilots fine-tuned for enterprise context." },
  { icon: Radio, title: "Industrial IoT (IIoT)", desc: "Edge gateways, sensor networks, and real-time machine intelligence." },
  { icon: Database, title: "Data Engineering", desc: "Lakehouses, streaming pipelines, and CDC for petabyte-scale workloads." },
  { icon: BarChart3, title: "Analytics & Dashboards", desc: "Operational dashboards, KPI systems, and embedded analytics." },
  { icon: Cloud, title: "DevOps & Cloud Infra", desc: "Kubernetes, GitOps, observability and multi-cloud landing zones." },
  { icon: ShieldCheck, title: "Data Governance", desc: "Catalogs, lineage, masking, and policy enforcement at scale." },
  { icon: Workflow, title: "Enterprise Integrations", desc: "SAP, Salesforce, ServiceNow & ERP integrations via event mesh." },
  { icon: Bot, title: "AI Workflow Automation", desc: "Agentic workflows that orchestrate business processes end-to-end." },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-mesh opacity-20" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Solutions" title="Enterprise Solutions Built for Scale" subtitle="A unified intelligence stack spanning data, AI, IIoT, and cloud — engineered for production at enterprise scale." />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sols.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-3xl transition group-hover:opacity-30" />
              <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-mist text-[var(--electric)] transition group-hover:bg-gradient-primary group-hover:text-white">
                <s.icon className="h-6 w-6 transition group-hover:scale-110" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
              <div className="mt-3 flex items-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--electric)] opacity-0 transition group-hover:opacity-100">
                Explore →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
