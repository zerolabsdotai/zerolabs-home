import { MarketingFooter, MarketingNav } from "@/components/marketing";
import BackToTop from "@/components/ui/BackToTop";
import ThemedBackground from "@/components/ui/ThemedBackground";

export default function AppDashboardPage() {
  return (
    <div className="relative min-h-screen text-[color:var(--text)]">
      <ThemedBackground />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[color:var(--page-overlay)]" />
      <MarketingNav />

      <main className="flex flex-col gap-10 pb-16 pt-36 sm:pt-32">
        <section className="content-frame">
          <div className="glass-panel rounded-[36px] p-6 text-left shadow-[var(--zl-shadow-soft)] sm:p-10">
            <h1 className="text-3xl font-semibold">Customer Workspace</h1>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              This is a placeholder for the Zero Labs user dashboard.
            </p>
          </div>
        </section>
      </main>

      <MarketingFooter />
      <BackToTop />
    </div>
  );
}
