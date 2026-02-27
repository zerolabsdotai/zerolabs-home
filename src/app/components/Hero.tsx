import Link from "next/link";

export default function Hero() {
  return (
    <section className="space-y-8 sm:space-y-10">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">
          Zero Labs Platform
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          The control plane for reliable AI operations.
        </h1>
        <p className="max-w-2xl text-base text-white/70 sm:text-lg">
          Orchestrate agents, data, and workflows in one secure workspace with
          observability built in.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
          >
            Request access
          </button>
          <Link
            href="/blog"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            Explore the blog
          </Link>
        </div>
      </div>
      <div className="text-xs uppercase tracking-[0.3em] text-white/50">
        Orchestration · Observability · Compliance
      </div>
    </section>
  );
}
