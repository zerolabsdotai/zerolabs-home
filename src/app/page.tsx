import {
  MarketingCTA,
  MarketingFooter,
  MarketingHero,
  MarketingNav,
  MarketingShowcase,
  MarketingSignals,
} from "@/components/marketing";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--zl-snow)] text-[var(--zl-ink)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_top_right,var(--zl-steel-18),transparent_60%),radial-gradient(900px_circle_at_bottom_left,var(--zl-ash-25),transparent_55%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 sm:py-14">
          <MarketingNav />
          <MarketingHero />
          <MarketingSignals />
          <MarketingShowcase />
        </div>
      </div>
      <MarketingCTA />
      <MarketingFooter />
    </main>
  );
}
