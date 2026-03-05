"use client";

export default function MarketingNewsletterSubscribe() {
  return (
    <section className="w-full pb-16 pt-4">
      <div className="content-frame">
        <div className="glass-panel rounded-[36px] p-6 text-left text-[color:var(--text)] shadow-[var(--zl-shadow-soft)] sm:p-8">
          <h2 className="text-2xl font-semibold">
            Subscribe to Zero Labs Insights
          </h2>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Monthly insights on AI automation, customer support, and product
            updates.
          </p>
          <form
            className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
              className="w-full rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-4 py-2 text-sm text-[color:var(--text)] placeholder:text-[color:var(--muted)] sm:flex-1"
            />
            <button
              type="submit"
              className="glow-hover w-full rounded-full border border-[color:var(--glass-border)] bg-[color:var(--cta-bg)] px-5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--cta-text)] sm:w-auto"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-[0.7rem] text-[color:var(--muted)]">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
