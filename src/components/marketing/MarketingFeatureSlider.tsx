"use client";

import Image from "next/image";
import { useRef } from "react";

import { getThemeAssets } from "@/lib/themeAssets";
import { useThemeMode } from "@/lib/useThemeMode";

export default function MarketingFeatureSlider() {
  const theme = useThemeMode();
  const { featureSlides } = getThemeAssets(theme);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const scrollAmount = track.clientWidth * 0.85 * (direction === "left" ? -1 : 1);
    track.scrollBy({ left: scrollAmount, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.35em] text-[color:var(--muted)]">
              Feature Content
            </p>
            <h2 className="font-display text-2xl text-[color:var(--text)] sm:text-3xl">
              Explore what Zero Labs can deliver.
            </h2>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              aria-label="Scroll feature content left"
              onClick={() => handleScroll("left")}
              className="glow-hover rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-3 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--text)] backdrop-blur"
            >
              Prev
            </button>
            <button
              type="button"
              aria-label="Scroll feature content right"
              onClick={() => handleScroll("right")}
              className="glow-hover rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-3 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--text)] backdrop-blur"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-6">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-4 sm:px-6 lg:px-10"
        >
          {featureSlides.map((slide) => (
            <article
              key={slide.title}
              tabIndex={0}
              className="glass-panel glow-hover snap-center rounded-[36px] p-5 text-[color:var(--text)] shadow-[var(--zl-shadow-soft)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus)]"
              style={{ minWidth: "min(85vw, 420px)" }}
            >
              <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-[24px] border border-[color:var(--glass-border)]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1280px) 50vw, 420px"
                  className="object-cover"
                />
              </div>
              <p className="text-[0.55rem] uppercase tracking-[0.35em] text-[color:var(--muted)]">
                {slide.label}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{slide.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {slide.description}
              </p>
              <button
                type="button"
                className="glow-hover mt-4 w-fit rounded-full border border-[color:var(--glass-border)] bg-[color:var(--cta-bg)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--cta-text)]"
              >
                Learn more
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
