export default function MarketingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--zl-ink-10)] bg-[var(--zl-mist)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-[0.6rem] uppercase tracking-[0.35em] text-[var(--zl-ink-60)] sm:flex-row sm:items-center sm:justify-between">
        <span>(c) {year} Zero Labs AI</span>
        <div className="flex flex-wrap gap-4 text-[0.55rem] text-[var(--zl-ink-40)]">
          <span>Reliability first</span>
          <span>Governance built in</span>
          <span>Operational clarity</span>
        </div>
      </div>
    </footer>
  );
}
