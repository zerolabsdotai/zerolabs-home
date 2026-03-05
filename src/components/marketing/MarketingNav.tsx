"use client";

import Image from "next/image";
import Link from "next/link";

import { IconSearch } from "@/components/ui/icons";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { getThemeAssets } from "@/lib/themeAssets";
import { useThemeMode } from "@/lib/useThemeMode";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Blog", href: "/blog" },
  { label: "Insights", href: "#articles" },
  { label: "Pricing", href: "#footer" },
];

export default function MarketingNav() {
  const theme = useThemeMode();
  const assets = getThemeAssets(theme);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6 lg:px-10">
      <div className="animate-fade-in rounded-[20px] border border-[color:var(--border)] bg-[color:var(--nav-bg)] px-4 py-3 backdrop-blur-[12px]">
        <div className="flex flex-col gap-3 md:grid md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="flex items-center justify-center md:justify-start">
            <Link
              href="/"
              className="logo-wiggle glow-hover inline-flex items-center"
              aria-label="Zero Labs home"
            >
              <Image
                src={assets.logo}
                alt="Zero Labs robot logo"
                width={40}
                height={40}
                className="logo-wiggle-icon h-8 w-auto sm:h-10"
                priority
              />
            </Link>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-3 text-[0.55rem] uppercase tracking-[0.35em] text-[color:var(--muted)] md:flex-nowrap md:text-[0.6rem]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="glow-hover rounded-full border border-transparent px-3 py-2 transition hover:border-[color:var(--border)] hover:text-[color:var(--text)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            <label className="glow-hover flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-[color:var(--muted)]">
              <span className="sr-only">Search</span>
              <IconSearch size={16} className="shrink-0" />
              <input
                type="search"
                placeholder="Search"
                className="w-24 bg-transparent text-[0.6rem] uppercase tracking-[0.3em] text-[color:var(--text)] placeholder:text-[color:var(--muted)] placeholder:opacity-70 sm:w-32"
              />
            </label>
            <Link
              href="#footer"
              className="glow-hover rounded-[var(--zl-radius-pill)] border border-[color:var(--border)] bg-[color:var(--cta-bg)] px-5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-[color:var(--cta-text)] shadow-[var(--zl-shadow-soft)] transition hover:shadow-[var(--zl-shadow-accent)]"
            >
              Request access
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
