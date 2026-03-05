import Link from "next/link";
import { cookies } from "next/headers";

import { IconSearch } from "@/components/ui/icons";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { getUserFromAccessToken } from "@/lib/authServer";
import MarketingNavLogo from "@/components/marketing/MarketingNavLogo";

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

export default async function MarketingNav() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("zl-access")?.value;
  const fallbackUser = cookieStore.get("zl-user")?.value;
  let isLoggedIn = false;

  if (accessToken) {
    const { user } = await getUserFromAccessToken(accessToken);
    isLoggedIn = Boolean(user);
  }

  if (!isLoggedIn && fallbackUser) {
    isLoggedIn = true;
  }

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6 lg:px-10">
      <div className="animate-fade-in rounded-[20px] border border-[color:var(--border)] bg-[color:var(--nav-bg)] px-4 py-3 backdrop-blur-[12px]">
        <div className="flex flex-col gap-3 md:grid md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="flex items-center justify-center md:justify-start">
            <MarketingNavLogo />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-3 text-[0.55rem] uppercase tracking-[0.35em] text-[color:var(--muted)] md:flex-nowrap md:text-[0.6rem]">
            <div className="group relative">
              <button
                type="button"
                aria-haspopup="true"
                className="glow-hover cursor-pointer rounded-full border border-transparent px-3 py-2 transition hover:border-[color:var(--border)] hover:text-[color:var(--text)]"
              >
                PRODUCT
              </button>
              <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 w-60 -translate-x-1/2 rounded-[20px] border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] p-2 text-[0.55rem] uppercase tracking-[0.3em] text-[color:var(--text)] opacity-0 shadow-[var(--zl-shadow-soft)] backdrop-blur transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
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
            </div>
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
            {isLoggedIn ? (
              <Link
                href="/logout"
                className="glow-hover rounded-[var(--zl-radius-pill)] border border-[color:var(--border)] bg-[color:var(--cta-bg)] px-5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-[color:var(--cta-text)] shadow-[var(--zl-shadow-soft)] transition hover:shadow-[var(--zl-shadow-accent)]"
              >
                LOGOUT
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="glow-hover rounded-[var(--zl-radius-pill)] border border-[color:var(--border)] bg-[color:var(--cta-bg)] px-5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-[color:var(--cta-text)] shadow-[var(--zl-shadow-soft)] transition hover:shadow-[var(--zl-shadow-accent)]"
                >
                  LOGIN
                </Link>
                <Link
                  href="/signup"
                  className="glow-hover rounded-[var(--zl-radius-pill)] border border-[color:var(--border)] bg-[color:var(--cta-bg)] px-5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-[color:var(--cta-text)] shadow-[var(--zl-shadow-soft)] transition hover:shadow-[var(--zl-shadow-accent)]"
                >
                  SIGNUP
                </Link>
              </>
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
