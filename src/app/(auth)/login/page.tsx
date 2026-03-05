import Link from "next/link";

import { MarketingFooter, MarketingNav } from "@/components/marketing";
import BackToTop from "@/components/ui/BackToTop";
import ThemedBackground from "@/components/ui/ThemedBackground";

type LoginPageProps = {
  searchParams?: {
    error?: string;
    redirectTo?: string;
  };
};

const errorMessages: Record<string, string> = {
  invalid_credentials: "Invalid email or password. Please try again.",
  missing_config:
    "Authentication is not configured yet. Please contact support.",
  unauthorized: "This account does not have access.",
  check_email:
    "Please check your email to confirm your account before logging in.",
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  const errorKey = searchParams?.error;
  const errorMessage = errorKey ? errorMessages[errorKey] : undefined;
  const redirectTo = searchParams?.redirectTo ?? "";

  return (
    <div className="relative min-h-screen text-[color:var(--text)]">
      <ThemedBackground />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[color:var(--page-overlay)]" />
      <MarketingNav />

      <main className="flex flex-col gap-10 pb-16 pt-36 sm:pt-32">
        <section className="content-frame">
          <div className="glass-panel auth-panel rounded-[36px] p-6 shadow-[var(--zl-shadow-soft)] sm:p-10">
            <h1 className="text-3xl font-semibold">User Access</h1>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Sign in to continue to your Zero Labs workspace.
            </p>

            {errorMessage ? (
              <div className="mt-4 rounded-[20px] border border-[color:var(--glass-border)] bg-[color:var(--surface)] p-3 text-sm text-[color:var(--text)]">
                {errorMessage}
              </div>
            ) : null}

            <form
              className="mt-6 space-y-4"
              action="/auth/login"
              method="post"
            >
              <input type="hidden" name="auth_context" value="user" />
              <input type="hidden" name="redirectTo" value={redirectTo} />

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
                Sign in
              </button>
            </form>

            <div className="mt-6 flex flex-col gap-2 text-sm text-[color:var(--muted)]">
              <Link href="/signup" className="hover:text-[color:var(--text)]">
                Don&apos;t have an account? Sign up
              </Link>
              <Link
                href="/admin/login"
                className="hover:text-[color:var(--text)]"
              >
                Administrator access
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
