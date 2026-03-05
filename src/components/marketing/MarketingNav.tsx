"use client";

import Image from "next/image";
import Link from "next/link";

import { IconSearch } from "@/components/ui/icons";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { getThemeAssets } from "@/lib/themeAssets";
import { useThemeMode } from "@/lib/useThemeMode";

const navLinks = [
  { label: "Platform", href: "/#platform" },
  { label: "Insights", href: "/blog" },
  { label: "Pricing", href: "/#footer" },
];

const productLinks = [
  { label: "Messenger AI Automation", href: "/#platform" },
  { label: "Voice AI Support", href: "/#platform" },
  { label: "Knowledge Base Intelligence", href: "/#platform" },
  { label: "Analytics & Insights", href: "/#platform" },
  { label: "Integrations", href: "/#platform" },
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
            <details className="group relative">
              <summary className="glow-hover cursor-pointer list-none rounded-full border border-transparent px-3 py-2 transition hover:border-[color:var(--border)] hover:text-[color:var(--text)]">
                Product
              </summary>
              <div className="static z-50 mt-2 w-full rounded-[20px] border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] p-2 text-[0.55rem] uppercase tracking-[0.3em] text-[color:var(--text)] shadow-[var(--zl-shadow-soft)] backdrop-blur md:absolute md:left-1/2 md:top-full md:mt-3 md:w-60 md:-translate-x-1/2">
                <ul className="flex flex-col gap-1">
                  {productLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block rounded-[14px] px-3 py-2 transition hover:bg-[color:var(--surface)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
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
