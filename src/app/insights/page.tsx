import { MarketingFooter, MarketingNav } from "@/components/marketing";
import BackToTop from "@/components/ui/BackToTop";
import ThemedBackground from "@/components/ui/ThemedBackground";

export default function InsightsPage() {
  return (
    <div className="relative min-h-screen text-[color:var(--text)]">
      <ThemedBackground />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[color:var(--page-overlay)]" />
      <MarketingNav />

      <main className="flex flex-col gap-10 pb-16 pt-36 sm:pt-32">
        <section className="content-frame">
          <div className="glass-panel rounded-[36px] p-6 text-left shadow-[var(--zl-shadow-soft)] sm:p-10">
            <p className="text-[0.6rem] uppercase tracking-[0.35em] text-[color:var(--muted)]">
              Insights
            </p>
            <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Insights
            </h1>
            <p className="mt-3 text-sm text-[color:var(--muted)]">
              Research highlights, benchmarks, and operational playbooks from
              Zero Labs AI.
            </p>
          </div>
        </section>

        <section className="content-frame">
          <div className="glass-panel rounded-[36px] p-6 text-left shadow-[var(--zl-shadow-soft)] sm:p-10">
            <h2 className="text-2xl font-semibold">Coming soon</h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              We are preparing deep-dive research briefs and customer
              benchmarks. Check back soon.
            </p>
          </div>
        </section>
      </main>

      <MarketingFooter />
      <BackToTop />
    </div>
  );
}
