"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

import { getThemeAssets } from "@/lib/themeAssets";
import { useThemeMode } from "@/lib/useThemeMode";

type FeatureCarouselVariant = "hero" | "compact";

type MarketingFeatureCarouselProps = {
  title?: string;
  subtitle?: string;
  variant?: FeatureCarouselVariant;
};

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

export default function MarketingFeatureCarousel({
  title = "Feature Content",
  subtitle = "Explore what Zero Labs can deliver.",
  variant = "hero",
}: MarketingFeatureCarouselProps) {
  const theme = useThemeMode();
  const { featureSlides } = getThemeAssets(theme);
  const prefersReducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = Math.max(0, featureSlides.length - 1);
  const currentIndex = clampIndex(activeIndex, maxIndex);
  const isCompact = variant === "compact";

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame: number | null = null;
    const updateIndex = () => {
      frame = null;
      const first = track.querySelector<HTMLElement>("[data-slide]");
      if (!first) return;
      const style = window.getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap || "0");
      const slideWidth = first.offsetWidth + gap;
      const idx = Math.round(track.scrollLeft / slideWidth);
      setActiveIndex(clampIndex(idx, maxIndex));
    };

    const handleScroll = () => {
      if (frame != null) return;
      frame = window.requestAnimationFrame(updateIndex);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      track.removeEventListener("scroll", handleScroll);
      if (frame != null) {
        cancelAnimationFrame(frame);
      }
    };
  }, [maxIndex]);

  if (!featureSlides.length) {
    return null;
  }

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.querySelector<HTMLElement>("[data-slide]");
    if (!first) return;
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || "0");
    const slideWidth = first.offsetWidth + gap;
    track.scrollTo({
      left: slideWidth * index,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
    setActiveIndex(clampIndex(index, maxIndex));
  };

  const handleStep = (direction: "prev" | "next") => {
    const next =
      direction === "prev" ? currentIndex - 1 : currentIndex + 1;
    scrollToIndex(clampIndex(next, maxIndex));
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

  const imageHeightClass = isCompact
    ? "h-[200px] sm:h-[230px] lg:h-[260px]"
    : "h-[300px] sm:h-[360px] lg:h-[430px]";

  return (
    <section className="w-full pb-12 pt-4">
      <div className="content-frame">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-left">
            <p className="text-[0.6rem] uppercase tracking-[0.35em] text-[color:var(--muted)]">
              {title}
            </p>
            <h2 className="font-display text-2xl text-[color:var(--text)] sm:text-3xl">
              {subtitle}
            </h2>
          </div>
        </div>
      </div>

      <div
        className="content-frame mt-6"
        role="region"
        aria-roledescription="carousel"
        aria-label={title}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="relative">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
          >
            {featureSlides.map((slide, index) => (
              <article
                key={`${slide.title}-${index}`}
                data-slide
                className="glass-panel snap-center rounded-[28px] shadow-[var(--zl-shadow-soft)]"
                style={{ minWidth: "100%" }}
              >
                {isCompact ? (
                  <div className="flex h-full flex-col">
                    <div
                      className={`relative w-full ${imageHeightClass} bg-[color:var(--surface-2)]`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        sizes="(max-width: 768px) 92vw, 1120px"
                        className="object-contain p-4 sm:p-6"
                        priority={index === 0}
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <p className="text-[0.55rem] uppercase tracking-[0.35em] text-[color:var(--muted)]">
                        {slide.label}
                      </p>
                      <h3 className="mt-2 text-base font-semibold sm:text-lg">
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
                ) : (
                  <div className="relative w-full overflow-hidden rounded-[var(--zl-radius-lg)]">
                    <div
                      className={`relative w-full ${imageHeightClass} bg-[color:var(--surface-2)]`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        sizes="100vw"
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 z-10 flex items-end">
                      <div
                        className="pointer-events-auto m-4 max-w-[360px] rounded-[24px] border border-[color:var(--glass-border)] p-4 text-[color:var(--text)] backdrop-blur-[8px] sm:m-6 sm:p-5"
                        style={{
                          background:
                            "color-mix(in srgb, var(--glass-bg) 45%, transparent)",
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
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
            <button
              type="button"
              aria-label="Previous feature slide"
              onClick={() => handleStep("prev")}
              disabled={currentIndex === 0}
              className="glow-hover glass-panel pointer-events-auto rounded-full px-3 py-2 text-[0.55rem] uppercase tracking-[0.3em] text-[color:var(--text)] backdrop-blur disabled:cursor-not-allowed disabled:opacity-50"
            >
              Prev
            </button>
            <button
              type="button"
              aria-label="Next feature slide"
              onClick={() => handleStep("next")}
              disabled={currentIndex === maxIndex}
              className="glow-hover glass-panel pointer-events-auto rounded-full px-3 py-2 text-[0.55rem] uppercase tracking-[0.3em] text-[color:var(--text)] backdrop-blur disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          {featureSlides.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollToIndex(index)}
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
