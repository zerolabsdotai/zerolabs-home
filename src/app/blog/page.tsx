import Link from "next/link";

import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b1430] via-[#0a0f1f] to-[#04060f] text-slate-100">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute left-[-10%] top-1/3 h-[22rem] w-[22rem] rounded-full bg-indigo-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-15%] right-[-5%] h-[26rem] w-[26rem] rounded-full bg-sky-400/10 blur-[150px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-300">
            ZERO LABS BLOG
          </p>
          <h1 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
            Notes from the Zero Labs team.
          </h1>
          <p className="mt-5 text-base text-slate-300 sm:text-lg">
            Product updates, research notes, and practical guidance on building
            reliable AI operations.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_30px_80px_-60px_rgba(15,23,42,0.9)] transition hover:border-white/20 sm:p-8"
              >
                <div className="flex flex-col gap-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                    {post.date}
                  </p>
                  <h2 className="text-2xl font-semibold text-white transition-colors group-hover:text-slate-200 sm:text-3xl">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-300 sm:text-base">
                    {post.summary}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
