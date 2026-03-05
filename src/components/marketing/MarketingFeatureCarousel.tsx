"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { getThemeAssets } from "@/lib/themeAssets";
import { useThemeMode } from "@/lib/useThemeMode";

const clampIndex = (value: number, max: number) =>
  Math.max(0, Math.min(value, max));

export default function MarketingFeatureCarousel() {
  const theme = useThemeMode();
  const { featureSlides } = getThemeAssets(theme);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
      setActiveIndex(clampIndex(idx, featureSlides.length - 1));
    };

    const handleScroll = () => {
      if (frame != null) return;
      frame = window.requestAnimationFrame(updateIndex);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    updateIndex();

    return () => {
      track.removeEventListener("scroll", handleScroll);
      if (frame != null) cancelAnimationFrame(frame);
    };
  }, [featureSlides.length]);

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
      behavior: "auto",
    });
  };

  const handleStep = (direction: "prev" | "next") => {
    const next =
      direction === "prev" ? activeIndex - 1 : activeIndex + 1;
    scrollToIndex(clampIndex(next, featureSlides.length - 1));
  };

  return (
    <section className="w-full">
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
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll feature content left"
              onClick={() => handleStep("prev")}
              className="glow-hover rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-3 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--text)] backdrop-blur"
            >
              Prev
            </button>
            <button
              type="button"
              aria-label="Scroll feature content right"
              onClick={() => handleStep("next")}
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
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-10 scroll-smooth"
        >
          {featureSlides.map((slide, index) => (
            <article
              key={`${slide.title}-${index}`}
              data-slide
              tabIndex={0}
              className="glass-panel glow-hover snap-center rounded-[36px] p-5 text-[color:var(--text)] shadow-[var(--zl-shadow-soft)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus)]"
              style={{ minWidth: "min(86vw, 420px)" }}
            >
              <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-[24px] border border-[color:var(--glass-border)]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 768px) 86vw, (max-width: 1280px) 55vw, 420px"
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

        <div className="mt-2 flex items-center justify-center gap-2">
          {featureSlides.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollToIndex(index)}
              className={`h-2 w-2 rounded-full transition ${
                index === activeIndex
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
