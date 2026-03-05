import type { Metadata } from "next";
import Link from "next/link";

import { MarketingFooter, MarketingNav } from "@/components/marketing";
import BackToTop from "@/components/ui/BackToTop";
import ThemedBackground from "@/components/ui/ThemedBackground";

export const metadata: Metadata = {
  title: "Zero Labs Blog",
  description:
    "Insights, guides, and innovations about AI automation, customer support technology, and the future of intelligent business communication.",
  openGraph: {
    title: "Zero Labs Blog",
    description:
      "Insights, guides, and innovations about AI automation, customer support technology, and the future of intelligent business communication.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Labs Blog",
    description:
      "Insights, guides, and innovations about AI automation, customer support technology, and the future of intelligent business communication.",
  },
};

const categories = [
  "AI Automation",
  "Customer Experience",
  "Business Growth",
  "Product Updates",
];

const posts = [
  {
    title: "The Future of AI Customer Support",
    excerpt:
      "How automation is transforming business communication, speed, and trust.",
    category: "AI Automation",
    date: "Feb 19, 2026",
    href: "/blog/hello-zero-labs",
  },
  {
    title: "Why Businesses Are Adopting AI Automation",
    excerpt:
      "The operational drivers behind automation-first support strategies.",
    category: "Business Growth",
    date: "Feb 12, 2026",
    href: "#",
  },
  {
    title: "How Messenger AI Bots Improve Customer Experience",
    excerpt:
      "Designing faster, more consistent interactions inside the channels customers already use.",
    category: "Customer Experience",
    date: "Feb 05, 2026",
    href: "#",
  },
  {
    title: "The Role of Voice AI in Modern Support Systems",
    excerpt:
      "Voice automation as a first layer for triage, scheduling, and status checks.",
    category: "AI Automation",
    date: "Jan 28, 2026",
    href: "#",
  },
  {
    title: "AI vs Human Support: Finding the Balance",
    excerpt:
      "Where automation helps most, and where people still make the difference.",
    category: "Customer Experience",
    date: "Jan 20, 2026",
    href: "#",
  },
  {
    title: "How Small Businesses Can Use AI Automation",
    excerpt:
      "Practical rollout paths that do not require a large operations team.",
    category: "Business Growth",
    date: "Jan 12, 2026",
    href: "#",
  },
  {
    title: "The Cost Benefits of Automated Customer Service",
    excerpt:
      "Lower support costs while improving response times and consistency.",
    category: "Business Growth",
    date: "Jan 03, 2026",
    href: "#",
  },
  {
    title: "Introducing Zero Labs AI: Our Vision for Automation",
    excerpt:
      "Why we are building investor-grade infrastructure for AI support.",
    category: "Product Updates",
    date: "Dec 20, 2025",
    href: "#",
  },
];

export default function BlogPage() {
  return (
    <div className="relative min-h-screen text-[color:var(--text)]">
      <ThemedBackground />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[color:var(--page-overlay)]" />
      <MarketingNav />

      <main className="flex flex-col gap-12 px-4 pb-20 pt-36 sm:px-6 md:pt-32 lg:px-10">
        <section className="mx-auto w-full max-w-6xl space-y-6">
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-[color:var(--muted)]">
            Insights
          </p>
          <h1 className="font-display text-4xl text-[color:var(--text)] sm:text-5xl lg:text-6xl">
            Insights
          </h1>
          <p className="max-w-3xl text-sm text-[color:var(--muted)] sm:text-base">
            Insights, guides, and innovations about AI automation, customer
            support technology, and the future of intelligent business
            communication.
          </p>
        </section>

        <section className="mx-auto w-full max-w-6xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className="glow-hover rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-4 py-2 text-[0.55rem] uppercase tracking-[0.35em] text-[color:var(--text)]"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl space-y-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Latest
            </p>
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[color:var(--muted)] opacity-70">
              8 posts
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="glass-panel glow-hover flex h-full flex-col rounded-[36px] p-6 text-[color:var(--text)] shadow-[var(--zl-shadow-soft)]"
              >
                <div className="flex flex-1 flex-col gap-4">
                  <div className="flex items-center justify-between text-[0.55rem] uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[color:var(--muted)]">
                    {post.excerpt}
                  </p>
                </div>
                <Link
                  href={post.href}
                  className="glow-hover mt-5 w-fit rounded-full border border-[color:var(--border)] bg-[color:var(--cta-bg)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--cta-text)]"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl">
          <div className="glass-panel rounded-[36px] p-6 text-[color:var(--text)] shadow-[var(--zl-shadow-soft)] sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.35em] text-[color:var(--muted)]">
                  Featured Research
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                  The State of AI Customer Support 2026
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-[color:var(--muted)]">
                  Signals, adoption trends, and the architecture patterns that
                  win in production.
                </p>
              </div>
              <Link
                href="#"
                className="glow-hover w-fit rounded-full border border-[color:var(--glass-border)] bg-[color:var(--cta-bg)] px-5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--cta-text)]"
              >
                Read the report
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl">
          <div className="glass-panel rounded-[36px] p-6 text-center text-[color:var(--text)] shadow-[var(--zl-shadow-soft)] sm:p-8">
            <h2 className="text-2xl font-semibold">
              Want to automate your customer support?
            </h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Explore Zero Labs AI solutions.
            </p>
            <Link
              href="/#footer"
              className="glow-hover mt-5 inline-flex w-fit rounded-full border border-[color:var(--glass-border)] bg-[color:var(--cta-bg)] px-5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--cta-text)]"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <MarketingFooter />
      <BackToTop />
    </div>
  );
}
