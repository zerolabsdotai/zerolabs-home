import {
  MarketingArticles,
  MarketingFeatureCarousel,
  MarketingFooter,
  MarketingHero,
  MarketingImageSlider,
  MarketingNav,
} from "@/components/marketing";
import BackToTop from "@/components/ui/BackToTop";
import ThemedBackground from "@/components/ui/ThemedBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen text-[color:var(--text)]">
      <ThemedBackground />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[color:var(--page-overlay)]" />
      <MarketingNav />
      <div className="flex flex-col gap-12 px-4 pb-16 pt-36 sm:px-6 md:pt-32 lg:px-10">
        <MarketingHero />
        <MarketingArticles />
      </div>
      <div className="pb-16">
        <MarketingFeatureCarousel />
      </div>
      <div className="pb-12">
        <MarketingImageSlider />
      </div>
      <MarketingFooter />
      <BackToTop />
    </div>
  );
}
