export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#0b1430] via-[#0a0f1f] to-[#04060f] px-6 py-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/35 via-blue-600/30 to-indigo-700/35 blur-3xl" />
        <div className="absolute -bottom-52 left-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/25 via-blue-700/25 to-cyan-500/25 blur-3xl" />
        <div className="absolute top-1/4 right-[-7rem] h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-cyan-400/25 via-sky-500/25 to-indigo-600/25 blur-3xl" />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)] backdrop-blur-2xl sm:p-12">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            COMING SOON
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
              className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Notify me
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
