import {
  MarketingArticles,
  MarketingFooter,
  MarketingHero,
  MarketingNav,
} from "@/components/marketing";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen text-[color:var(--text)]">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[url('/assets/home/Background%20Image.svg')] bg-cover bg-center" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[color:var(--surface)]" />
      <MarketingNav />
      <div className="flex flex-col gap-12 px-4 pb-16 pt-36 sm:px-6 md:pt-32 lg:px-10">
        <MarketingHero />
        <MarketingArticles />
      </div>
      <MarketingFooter />
      <BackToTop />
    </div>
  );
}
