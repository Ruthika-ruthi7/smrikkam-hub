export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-2.5 group ${className}`} aria-label="SMRIKAAM Technologies">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
        <svg viewBox="0 0 32 32" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M6 22 L12 10 L16 18 L20 8 L26 22" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="6" cy="22" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="26" cy="22" r="1.6" fill="currentColor" stroke="none" />
        </svg>
        <span className="absolute inset-0 rounded-xl bg-[var(--cyan-glow)] opacity-0 blur-xl transition group-hover:opacity-40" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-bold tracking-[0.18em] text-ink">SMRIKAAM</span>
        <span className="mt-0.5 text-[9px] font-medium tracking-[0.3em] text-muted-foreground">TECHNOLOGIES</span>
      </span>
    </a>
  );
}
