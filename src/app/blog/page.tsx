import type { Metadata } from "next";
import Link from "next/link";

import {
  MarketingFooter,
  MarketingNav,
} from "@/components/marketing";
import BackToTop from "@/components/ui/BackToTop";
import ThemedBackground from "@/components/ui/ThemedBackground";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Zero Labs Blog",
  description:
    "Product updates, research notes, and practical guidance on building reliable AI operations.",
  openGraph: {
    title: "Zero Labs Blog",
    description:
      "Product updates, research notes, and practical guidance on building reliable AI operations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Labs Blog",
    description:
      "Product updates, research notes, and practical guidance on building reliable AI operations.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="relative min-h-screen text-[color:var(--text)]">
      <ThemedBackground />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[color:var(--page-overlay)]" />
      <MarketingNav />

      <main className="flex flex-col gap-12 px-4 pb-20 pt-36 sm:px-6 md:pt-32 lg:px-10">
        <section className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-[color:var(--muted)]">
              Zero Labs Blog
            </p>
            <h1 className="font-display text-3xl text-[color:var(--text)] sm:text-4xl lg:text-5xl">
              Signals, notes, and field work from the Zero Labs team.
            </h1>
            <p className="max-w-2xl text-sm text-[color:var(--muted)] sm:text-base">
              Product updates, research notes, and practical guidance on building
              reliable AI operations.
            </p>
            <div className="flex flex-wrap gap-3 text-[0.6rem] uppercase tracking-[0.3em] text-[color:var(--muted)]">
              <span className="rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-3 py-1">
                Reliability
              </span>
              <span className="rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-3 py-1">
                Research
              </span>
              <span className="rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-3 py-1">
                Product
              </span>
            </div>
          </div>

          <div className="glass-panel rounded-[36px] p-6 text-sm text-[color:var(--muted)] shadow-[var(--zl-shadow-soft)] sm:p-8">
            <p className="text-[0.55rem] uppercase tracking-[0.35em] text-[color:var(--muted)]">
              Publishing cadence
            </p>
            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--brand)]" />
                <p>Field reports from customer deployments and audits.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--brand)] opacity-80" />
                <p>Design notes from the Zero Labs platform roadmap.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--brand)] opacity-60" />
                <p>Monthly research briefs and system performance insights.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Latest dispatches
            </p>
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[color:var(--muted)] opacity-70">
              {posts.length} posts
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.slug} className="group h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="glass-panel glow-hover flex h-full flex-col justify-between rounded-[36px] p-6 text-[color:var(--text)] shadow-[var(--zl-shadow-soft)] transition duration-300 hover:-translate-y-1 sm:p-8"
                >
                  <div className="flex flex-1 flex-col gap-4">
                    <div className="flex items-center gap-3 text-[0.55rem] uppercase tracking-[0.3em] text-[color:var(--muted)]">
                      <span className="h-1 w-6 rounded-full bg-[color:var(--brand)]" />
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-xl font-semibold sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[color:var(--muted)] sm:text-base">
                      {post.summary}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-[0.55rem] uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    <span>Read article</span>
                    <span className="transition group-hover:text-[color:var(--text)]">
                      -&gt;
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <MarketingFooter />
      <BackToTop />
    </div>
  );
}
