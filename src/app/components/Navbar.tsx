"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { KeyboardEvent } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Articles", href: "/articles" },
  { label: "Login/Signup", href: "/login" },
];

const brandHighlights = [
  {
    title: "About",
    description:
      "Zero Labs builds the control plane for reliable, observable AI operations.",
  },
  {
    title: "Mission",
    description:
      "Make AI workflows governed, measurable, and dependable across every team.",
  },
  {
    title: "Vision",
    description:
      "A future where AI runs safely, predictably, and at scale for everyone.",
  },
];

export default function Navbar() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setOverlayOpen((prev) => !prev);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleOverlay();
    }
  };

  return (
    <header className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/brand/Logos/zerolabs-primary-light.png.png"
              alt="Zero Labs"
              width={120}
              height={28}
              sizes="120px"
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>
          <nav className="flex flex-wrap items-center gap-3 text-xs text-white/70 sm:text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full border border-transparent px-3 py-1 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="w-full md:w-auto">
          <input
            type="search"
            placeholder="Search"
            className="h-9 w-full rounded-full border border-white/10 bg-white/5 px-4 text-xs text-white/80 placeholder:text-white/40 transition focus:border-white/40 focus:outline-none md:w-56"
          />
        </div>
      </div>

      <div
        className="relative w-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5"
        onMouseEnter={() => setOverlayOpen(true)}
        onMouseLeave={() => setOverlayOpen(false)}
        onClick={toggleOverlay}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={overlayOpen}
      >
        <div className="relative w-full aspect-[3/1]">
          <Image
            src="/brand/Banners/zerolabs-banner-dark-base.png"
            alt="Zero Labs banner"
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
        <div
          className={`pointer-events-none absolute inset-0 flex items-end p-4 transition duration-200 ${
            overlayOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="max-w-sm space-y-3 rounded-xl border border-white/10 bg-slate-950/80 p-4 text-white/75 backdrop-blur">
            {brandHighlights.map((item) => (
              <div key={item.title} className="space-y-1">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/70">
                  {item.title}
                </p>
                <p className="text-xs text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
