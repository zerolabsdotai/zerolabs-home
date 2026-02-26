import Image from "next/image";

export default function ProductPreview() {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            Product preview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            A unified command center for AI operations.
          </h2>
        </div>
        <button
          type="button"
          className="h-10 rounded-full border border-white/20 bg-white/5 px-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:border-white/40 hover:bg-white/10"
        >
          View roadmap
        </button>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.9)] backdrop-blur-2xl sm:p-6">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
          <Image
            src="/brand/Banners/zerolabs-banner-dark-base.png"
            alt="Zero Labs product preview"
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="mt-6 grid gap-4 text-sm text-white/70 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-white">Mission control</p>
            <p className="mt-2 text-white/60">
              Track every deployment, experiment, and escalation path.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-white">Workflow composer</p>
            <p className="mt-2 text-white/60">
              Build repeatable playbooks with AI-safe approvals.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-white">Compliance logs</p>
            <p className="mt-2 text-white/60">
              Export audit-ready evidence in minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
