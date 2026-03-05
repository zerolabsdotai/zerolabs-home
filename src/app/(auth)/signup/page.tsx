import Link from "next/link";

import { MarketingFooter, MarketingNav } from "@/components/marketing";
import BackToTop from "@/components/ui/BackToTop";
import ThemedBackground from "@/components/ui/ThemedBackground";

type SignupPageProps = {
  searchParams?: {
    error?: string;
  };
};

const errorMessages: Record<string, string> = {
  signup_failed: "Unable to create your account. Please try again.",
  missing_config:
    "Authentication is not configured yet. Please contact support.",
};

export default function SignupPage({ searchParams }: SignupPageProps) {
  const errorKey = searchParams?.error;
  const errorMessage = errorKey ? errorMessages[errorKey] : undefined;

  return (
    <div className="relative min-h-screen text-[color:var(--text)]">
      <ThemedBackground />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[color:var(--page-overlay)]" />
      <MarketingNav />

      <main className="flex flex-col gap-10 pb-16 pt-36 sm:pt-32">
        <section className="content-frame">
          <div className="glass-panel auth-panel rounded-[36px] p-6 shadow-[var(--zl-shadow-soft)] sm:p-10">
            <h1 className="text-3xl font-semibold">Create your account</h1>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Get started with Zero Labs AI in just a few steps.
            </p>

            {errorMessage ? (
              <div className="mt-4 rounded-[20px] border border-[color:var(--glass-border)] bg-[color:var(--surface)] p-3 text-sm text-[color:var(--text)]">
                {errorMessage}
              </div>
            ) : null}

            <form
              className="mt-6 space-y-4"
              action="/auth/signup"
              method="post"
            >
              <label className="block text-sm">
                Name (optional)
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  className="mt-2 w-full rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-4 py-2 text-sm text-[color:var(--text)] placeholder:text-[color:var(--muted)]"
                />
              </label>

              <label className="block text-sm">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-4 py-2 text-sm text-[color:var(--text)] placeholder:text-[color:var(--muted)]"
                />
              </label>

              <label className="block text-sm">
                Password
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-4 py-2 text-sm text-[color:var(--text)] placeholder:text-[color:var(--muted)]"
                />
              </label>

              <button
                type="submit"
                className="glow-hover w-full rounded-full border border-[color:var(--glass-border)] bg-[color:var(--cta-bg)] px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--cta-text)] sm:w-auto"
              >
                Create account
              </button>
            </form>

            <div className="mt-6 text-sm text-[color:var(--muted)]">
              <Link href="/login" className="hover:text-[color:var(--text)]">
                Already have an account? Log in
              </Link>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
      <BackToTop />
    </div>
  );
}
