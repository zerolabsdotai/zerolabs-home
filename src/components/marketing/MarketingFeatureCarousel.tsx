"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties, type KeyboardEvent } from "react";

import { getThemeAssets } from "@/lib/themeAssets";
import { useThemeMode } from "@/lib/useThemeMode";

const clampIndex = (value: number, max: number) =>
  Math.max(0, Math.min(value, max));

const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(media.matches);
    handleChange();
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
};

export default function MarketingFeatureCarousel() {
  const theme = useThemeMode();
  const { featureSlides } = getThemeAssets(theme);
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = Math.max(0, featureSlides.length - 1);
  const currentIndex = clampIndex(activeIndex, maxIndex);

  if (!featureSlides.length) {
    return null;
  }

  const goTo = (index: number) => {
    setActiveIndex(clampIndex(index, maxIndex));
  };

  const handleStep = (direction: "prev" | "next") => {
    goTo(currentIndex + (direction === "prev" ? -1 : 1));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      handleStep("prev");
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      handleStep("next");
    }
  };

  const trackStyle: CSSProperties = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: prefersReducedMotion ? "none" : "transform 500ms ease",
  };

  return (
    <section className="w-full pb-16 pt-6">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.35em] text-[color:var(--muted)]">
              Feature Content
            </p>
            <h2 className="font-display text-2xl text-[color:var(--text)] sm:text-3xl">
              Explore what Zero Labs can deliver.
            </h2>
          </div>
        </div>
      </div>

      <div
        className="relative mt-6 w-full"
        role="region"
        aria-roledescription="carousel"
        aria-label="Feature content carousel"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="overflow-hidden">
          <div className="flex w-full" style={trackStyle}>
            {featureSlides.map((slide, index) => (
              <div
                key={`${slide.title}-${index}`}
                className="w-full shrink-0 px-4 sm:px-6 lg:px-10"
              >
                <article className="glass-panel relative w-full overflow-hidden rounded-[var(--zl-radius-lg)] shadow-[var(--zl-shadow-soft)]">
                  <div className="relative w-full aspect-[3/1] sm:aspect-[5/2] lg:aspect-[3/1] bg-[color:var(--surface-2)]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority={index === 0}
                    />
                    <button
                      type="button"
                      aria-label="Previous feature slide"
                      onClick={() => handleStep("prev")}
                      disabled={currentIndex === 0}
                      className="glow-hover glass-panel absolute left-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-[0.55rem] uppercase tracking-[0.3em] text-[color:var(--text)] backdrop-blur disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      aria-label="Next feature slide"
                      onClick={() => handleStep("next")}
                      disabled={currentIndex === maxIndex}
                      className="glow-hover glass-panel absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-[0.55rem] uppercase tracking-[0.3em] text-[color:var(--text)] backdrop-blur disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                  <div className="absolute inset-0 flex items-end">
                    <div
                      className="m-4 max-w-[360px] rounded-[24px] border border-[color:var(--glass-border)] p-4 text-[color:var(--text)] backdrop-blur sm:m-6 sm:p-5"
                      style={{
                        background:
                          "color-mix(in srgb, var(--glass-bg) 65%, transparent)",
                      }}
                    >
                      <p className="text-[0.55rem] uppercase tracking-[0.35em] text-[color:var(--muted)]">
                        {slide.label}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">
                        {slide.title}
                      </h3>
                      <p className="mt-2 text-sm text-[color:var(--muted)]">
                        {slide.description}
                      </p>
                      <button
                        type="button"
                        className="glow-hover mt-4 w-fit rounded-full border border-[color:var(--glass-border)] bg-[color:var(--cta-bg)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--cta-text)]"
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {featureSlides.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-2 w-2 rounded-full transition ${
                index === currentIndex
                  ? "bg-[color:var(--text)]"
                  : "bg-[color:var(--muted)] opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
