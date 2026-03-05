const insights = [
  {
    title: "Reliability scorecards",
    description: "Summarize system health across regions and teams.",
  },
  {
    title: "Governance playbooks",
    description: "Standardize approvals with repeatable policies.",
  },
  {
    title: "Traceable outcomes",
    description: "Connect AI decisions to measurable results.",
  },
  {
    title: "Incident memory",
    description: "Capture learnings and reduce repeat failures.",
  },
];

export default function MarketingShowcase() {
  return (
    <section
      id="insights"
      className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-center"
    >
      <div className="space-y-6">
        <p className="font-display text-[0.65rem] uppercase tracking-[0.45em] text-[color:var(--muted)]">
          Insight layer
        </p>
        <h2 className="font-display text-3xl text-[color:var(--text)] sm:text-4xl">
          Monitor every deployment with calm, structured visibility.
        </h2>
        <p className="text-base text-[color:var(--muted)] sm:text-lg">
          Zero Labs keeps operators aligned with what matters: reliability,
          compliance, and measurable outcomes. Every signal is summarized into
          an executive-ready view.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {insights.map((insight) => (
            <div
              key={insight.title}
              className="rounded-[var(--zl-radius-sm)] border-[var(--zl-border-thin)] border-[color:var(--border)] bg-[color:var(--card-bg)] p-4 shadow-[var(--zl-shadow-soft)]"
            >
              <p className="text-sm font-semibold text-[color:var(--text)]">
                {insight.title}
              </p>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {insight.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[var(--zl-radius-xl)] border-[var(--zl-border-strong)] border-[color:var(--border)] bg-[color:var(--card-bg)] p-6 text-[color:var(--text)] shadow-[var(--zl-shadow-lift)] sm:p-8 lg:border-[var(--zl-border-heavy)]">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded-[var(--zl-radius-sm)] bg-[color:var(--surface)] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand-2)]">
                <div className="h-4 w-4 rounded-full bg-[color:var(--surface)]" />
              </div>
            </div>
            <div className="flex items-center justify-center rounded-[var(--zl-radius-sm)] bg-[color:var(--surface)] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand-2)]">
                <div className="h-4 w-4 rounded-full bg-[color:var(--surface)]" />
              </div>
            </div>
          </div>
          <div className="rounded-[var(--zl-radius-sm)] bg-[color:var(--surface)] px-6 py-4 text-center font-accent text-3xl text-[color:var(--text)]">
            ...
          </div>
          <div className="grid gap-3 text-[0.6rem] uppercase tracking-[0.35em] text-[color:var(--muted)]">
            <div className="flex items-center justify-between rounded-[var(--zl-radius-sm)] border-[var(--zl-border-thin)] border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3">
              <span>Signal confidence</span>
              <span className="text-[color:var(--text)]">99.8%</span>
            </div>
            <div className="flex items-center justify-between rounded-[var(--zl-radius-sm)] border-[var(--zl-border-thin)] border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3">
              <span>Recovery cadence</span>
              <span className="text-[color:var(--text)]">12m</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
