import Link from "next/link";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Signals", href: "#signals" },
  { label: "Insights", href: "#insights" },
  { label: "Blog", href: "/blog" },
];

export default function MarketingNav() {
  return (
    <header className="flex flex-col gap-6 rounded-[var(--zl-radius-sm)] border-[var(--zl-border-thin)] border-[color:var(--zl-ink-10)] bg-[var(--zl-snow)] p-5 shadow-[var(--zl-shadow-soft)] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-12 items-center justify-center rounded-[var(--zl-radius-sm)] border-[var(--zl-border-strong)] border-[color:var(--zl-mist)] bg-[var(--zl-steel)] px-4">
            <span className="font-logo text-[0.55rem] uppercase tracking-[0.45em] text-[var(--zl-mist)]">
              zero labs
            </span>
            <span className="ml-2 font-logo-strong text-2xl text-[var(--zl-mist)]">
              AI
            </span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-[0.6rem] uppercase tracking-[0.35em] text-[var(--zl-ink-60)]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full border-[var(--zl-border-thin)] border-transparent px-3 py-2 transition hover:border-[color:var(--zl-ink-20)] hover:text-[var(--zl-ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 rounded-full border-[var(--zl-border-thin)] border-[color:var(--zl-ink-20)] bg-[var(--zl-mist)] px-3 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-[var(--zl-ink-60)]">
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.65" y1="16.65" x2="21" y2="21" />
          </svg>
          <input
            type="search"
            placeholder="Search"
            className="w-24 bg-transparent text-[0.6rem] uppercase tracking-[0.3em] text-[var(--zl-ink)] placeholder:text-[var(--zl-ink-40)] focus:outline-none sm:w-32"
          />
        </label>
        <Link
          href="#cta"
          className="rounded-[var(--zl-radius-pill)] border-[var(--zl-border-thin)] border-[color:var(--zl-ink)] bg-[var(--zl-ink)] px-5 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-[var(--zl-mist)] shadow-[var(--zl-shadow-soft)] transition hover:shadow-[var(--zl-shadow-accent)]"
        >
          Request access
        </Link>
      </div>
    </header>
  );
}
