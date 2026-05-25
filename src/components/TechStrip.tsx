const techs = ["AWS", "Azure", "OpenAI", "Snowflake", "Databricks", "Docker", "Kubernetes", "SAP", "ServiceNow", "Jenkins", "Terraform", "Grafana"];

export function TechStrip() {
  const list = [...techs, ...techs];
  return (
    <section className="border-y border-border bg-white/60 py-14 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Powered by Enterprise-Grade Technologies
        </p>
      </div>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-14 px-6">
          {list.map((t, i) => (
            <span
              key={i}
              className="select-none whitespace-nowrap font-display text-2xl font-bold tracking-tight text-foreground/30 transition hover:text-[var(--electric)] hover:drop-shadow-[0_0_18px_oklch(0.6_0.22_258_/_0.6)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
