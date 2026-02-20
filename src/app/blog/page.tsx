import type { Metadata } from "next";
import Link from "next/link";

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
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b1430] via-[#0a0f1f] to-[#04060f] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/35 via-blue-600/30 to-indigo-700/35 blur-3xl" />
        <div className="absolute -bottom-52 left-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/25 via-blue-700/25 to-cyan-500/25 blur-3xl" />
        <div className="absolute top-1/4 right-[-7rem] h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-cyan-400/25 via-sky-500/25 to-indigo-600/25 blur-3xl" />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-20 sm:py-24">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">
              ZERO LABS BLOG
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Signals, notes, and field work from the Zero Labs team.
            </h1>
            <p className="max-w-2xl text-base text-white/70 sm:text-lg">
              Product updates, research notes, and practical guidance on
              building reliable AI operations.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-white/60">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                Reliability
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                Research
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                Product
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.9)] backdrop-blur-2xl sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Publishing cadence
            </p>
            <div className="mt-5 space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400/80" />
                <p>
                  Field reports from customer deployments and reliability
                  audits.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-sky-300/80" />
                <p>Design notes from the Zero Labs platform roadmap.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-indigo-300/80" />
                <p>Monthly research briefs and system performance insights.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Latest dispatches
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              {posts.length} posts
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-[0_40px_120px_-70px_rgba(14,116,144,0.9)] sm:p-8"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute -top-16 right-0 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
                  </div>

                  <div className="relative z-10 flex flex-1 flex-col gap-4">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/60">
                      <span className="h-1 w-6 rounded-full bg-cyan-400/80" />
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-white transition-colors group-hover:text-cyan-100 sm:text-3xl">
                      {post.title}
                    </h2>
                    <p className="text-sm text-white/70 sm:text-base">
                      {post.summary}
                    </p>
                  </div>
                  <div className="relative z-10 mt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                    <span>Read article</span>
                    <span className="text-white/40 transition group-hover:text-white/80">
                      -&gt;
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
