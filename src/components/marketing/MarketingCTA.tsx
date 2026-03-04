import Link from "next/link";

export default function MarketingCTA() {
  return (
    <section id="cta" className="py-14">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-8 rounded-[var(--zl-radius-xl)] border-[var(--zl-border-strong)] border-[color:var(--zl-ink)] bg-[var(--zl-ink)] p-8 text-[var(--zl-mist)] shadow-[var(--zl-shadow-lift)] lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:border-[var(--zl-border-heavy)] lg:p-12">
          <div className="space-y-4">
            <p className="font-display text-[0.65rem] uppercase tracking-[0.45em] text-[var(--zl-mist-80)]">
              Start your zero labs briefing
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">
              Build a calmer control plane for AI operations.
            </h2>
            <p className="text-base text-[var(--zl-mist-80)]">
              Align leadership, engineering, and compliance with a single view
              of AI performance. Zero Labs keeps every system accountable.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <button
              type="button"
              className="rounded-[var(--zl-radius-pill)] bg-[var(--zl-cloud)] px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[var(--zl-ink)] shadow-[var(--zl-shadow-soft)]"
            >
              Schedule a demo
            </button>
            <Link
              href="/blog"
              className="rounded-[var(--zl-radius-pill)] border-[var(--zl-border-medium)] border-[color:var(--zl-mist)] px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[var(--zl-mist)]"
            >
              Visit the blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
