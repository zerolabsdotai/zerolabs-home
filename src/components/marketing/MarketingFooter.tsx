export default function MarketingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="animate-fade-in border-t border-[color:var(--border)] bg-[color:var(--bg)] py-8 text-[0.6rem] uppercase tracking-[0.35em] text-[color:var(--muted)]"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
        <span>(c) {year} Zero Labs AI</span>
        <div className="flex flex-wrap gap-4 text-[0.55rem] text-[color:var(--muted)] opacity-80">
          <span>Reliability first</span>
          <span>Governance built in</span>
          <span>Operational clarity</span>
        </div>
      </div>
    </footer>
  );
}
