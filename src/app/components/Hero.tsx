import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
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
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-white/50">
          <div className="flex -space-x-2">
            <Image
              src="/brand/Avatars/Dark%20-%20PNG/Avatar-Dark-64.png"
              alt="Operator avatar"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full border border-white/20"
            />
            <Image
              src="/brand/Avatars/Dark%20-%20PNG/Avatar-Dark-128.png"
              alt="Operator avatar"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full border border-white/20"
            />
            <Image
              src="/brand/Avatars/Dark%20-%20PNG/Avatar-Dark-256.png"
              alt="Operator avatar"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full border border-white/20"
            />
          </div>
          <span>Trusted by teams shipping AI weekly</span>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.9)] backdrop-blur-2xl sm:p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">
          Live operations stack
        </p>
        <div className="mt-6 space-y-4 text-sm text-white/70">
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400/80" />
            <div>
              <p className="text-white">Agent orchestration</p>
              <p className="text-white/60">
                Route tasks across multi-agent pipelines with guardrails.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <span className="mt-2 h-2 w-2 rounded-full bg-sky-300/80" />
            <div>
              <p className="text-white">Real-time observability</p>
              <p className="text-white/60">
                Trace costs, latency, and outcomes across every run.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <span className="mt-2 h-2 w-2 rounded-full bg-indigo-300/80" />
            <div>
              <p className="text-white">Compliance-ready control</p>
              <p className="text-white/60">
                Enforce policies, audits, and approvals in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
