export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-400/50 via-sky-500/40 to-indigo-600/50 blur-3xl" />
        <div className="absolute -bottom-48 left-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-400/40 via-pink-500/35 to-amber-400/30 blur-3xl" />
        <div className="absolute top-1/4 right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-emerald-400/35 via-teal-500/30 to-cyan-500/35 blur-3xl" />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)] backdrop-blur-2xl sm:p-12">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Coming Soon
          </span>

          <div className="mt-6 space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Zero Labs
            </h1>
            <p className="text-lg text-white/80 sm:text-xl">
              AI operations platform
            </p>
            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              We are building the control plane for intelligent systems so teams
              can orchestrate agents, data, and workflows with confidence.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
              aria-label="Email address"
              className="h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/20"
            />
            <button
              type="button"
              className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
            >
              Notify me
            </button>
          </div>

          <p className="mt-4 text-xs text-white/60">
            Launching soon. No spam.
          </p>
        </div>
      </div>
    </main>
  );
}
