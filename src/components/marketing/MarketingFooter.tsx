export default function MarketingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="animate-fade-in footer-glass border-t border-[color:var(--footer-border)] py-8 text-[0.6rem] uppercase tracking-[0.35em] text-[color:var(--text)]"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
        <span>(c) {year} Zero Labs AI</span>
        <div className="flex flex-wrap gap-4 text-[0.55rem] text-[color:var(--text)] opacity-75">
          <span>Reliability first</span>
          <span>Governance built in</span>
          <span>Operational clarity</span>
        </div>
      </div>
    </footer>
  );
}
