"use client";

import Image from "next/image";

import { getThemeAssets } from "@/lib/themeAssets";
import { useThemeMode } from "@/lib/useThemeMode";

export default function MarketingHero() {
  const theme = useThemeMode();
  const assets = getThemeAssets(theme);

  return (
    <section id="platform" className="w-full">
      <div className="glow-hover animate-banner-in relative w-full overflow-hidden rounded-[50px] shadow-[var(--zl-shadow-soft)]">
        <div className="relative aspect-[4029/1797] w-full">
          <Image
            src={assets.banner}
            alt="Zero Labs hero banner"
            fill
            priority
            sizes="100vw"
            className="select-none object-cover"
          />
        </div>
        <button
          type="button"
          className="glow-hover absolute z-10 bottom-[clamp(18px,18%,120px)] left-[clamp(24px,7.5vw,120px)] rounded-full border border-[color:var(--border)] bg-[color:var(--cta-bg)] px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--cta-text)] sm:bottom-[clamp(22px,20%,140px)] sm:left-[clamp(28px,8vw,140px)]"
        >
          Learn More...
        </button>
      </div>
    </section>
  );
}
