import Link from "next/link";

const articles = [
  {
    title: "Operational clarity",
    description:
      "A single, calm view of system health and governance across every AI workflow.",
  },
  {
    title: "Audit-ready coverage",
    description:
      "Structured trails that keep compliance teams aligned without slowing delivery.",
  },
  {
    title: "Resilient automation",
    description:
      "Guardrails, runbooks, and signals that help teams respond with confidence.",
  },
];

export default function MarketingArticles() {
  return (
    <section id="articles" className="w-full">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article, index) => (
          <article
            key={article.title}
            className="glow-hover animate-articles-in glass-panel rounded-[36px] p-6 text-[color:var(--text)] shadow-[var(--zl-shadow-soft)]"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div className="flex h-full flex-col gap-4">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.35em] text-[color:var(--muted)]">
                  Article
                </p>
                <h3 className="mt-3 text-lg font-semibold">{article.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  {article.description}
                </p>
              </div>
              <Link
                href="/blog"
                className="glow-hover mt-auto w-fit rounded-full border border-[color:var(--border)] bg-[color:var(--cta-bg)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--cta-text)]"
              >
                Read more...
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
