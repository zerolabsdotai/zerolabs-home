import Image from "next/image";

export default function MarketingHero() {
  return (
    <section id="platform" className="w-full">
      <div className="glow-hover animate-banner-in relative w-full overflow-hidden rounded-[40px] bg-[color:var(--card-bg)] shadow-[var(--zl-shadow-soft)]">
        <div className="relative aspect-[4029/1797] w-full">
          <Image
            src="/assets/home/Banner.svg"
            alt="Zero Labs hero banner"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <button
          type="button"
          className="glow-hover absolute bottom-6 left-6 rounded-full border border-[color:var(--border)] bg-[color:var(--cta-bg)] px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--cta-text)] sm:bottom-[12%] sm:left-[6%]"
        >
          Learn More...
        </button>
      </div>
    </section>
  );
}
