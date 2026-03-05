"use client";

import Image from "next/image";

import { getThemeAssets } from "@/lib/themeAssets";
import { useThemeMode } from "@/lib/useThemeMode";

export default function MarketingImageSlider() {
  const theme = useThemeMode();
  const { featureRailImages } = getThemeAssets(theme);
  const trackImages = [...featureRailImages, ...featureRailImages];

  return (
    <section className="w-full">
      <div className="marquee w-full">
        <div className="marquee-track gap-6 px-4 py-6 sm:px-6 lg:px-10">
          {trackImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="glass-panel glow-hover flex h-[220px] w-[320px] shrink-0 items-center justify-center overflow-hidden rounded-[32px] shadow-[var(--zl-shadow-soft)]"
              aria-hidden={index >= featureRailImages.length}
            >
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt="Zero Labs feature visual"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
