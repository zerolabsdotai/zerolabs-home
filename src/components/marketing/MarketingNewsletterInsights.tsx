"use client";

import Link from "next/link";
import { useState } from "react";

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const chartRows = [
  { label: "E-commerce", value: 18 },
  { label: "SaaS", value: 14 },
  { label: "Support Teams", value: 22 },
  { label: "Enterprise", value: 12 },
];

export default function MarketingNewsletterInsights() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
  };

  return (
    <section className="w-full py-12">
      <div className="w-full px-[20px]">
        <div className="glass-panel w-full rounded-[36px] p-6 text-left text-[color:var(--text)] shadow-[var(--zl-shadow-soft)] sm:p-8">
          <div className="mx-auto grid w-full max-w-[1200px] gap-6 md:grid-cols-2">
            <div>
                <p className="text-[0.6rem] uppercase tracking-[0.35em] text-[color:var(--muted)]">
                  Newsletter
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                  Newsletter
                </h2>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Get product updates, research summaries, and automation
                  playbooks.
                </p>

                <form
                  className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center"
                  onSubmit={handleSubmit}
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (status !== "idle") {
                        setStatus("idle");
                      }
                    }}
                    placeholder="you@company.com"
                    className="w-full rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-4 py-2 text-sm text-[color:var(--text)] placeholder:text-[color:var(--muted)] focus:border-[color:var(--focus)] focus:outline-none sm:flex-1"
                  />
                  <button
                    type="submit"
                    className="glow-hover w-full rounded-full border border-[color:var(--glass-border)] bg-[color:var(--cta-bg)] px-5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--cta-text)] sm:w-auto"
                  >
                    Subscribe
                  </button>
                </form>

                {status === "error" ? (
                  <p className="mt-3 text-xs text-[color:var(--text)]">
                    Please enter a valid email address.
                  </p>
                ) : null}
                {status === "success" ? (
                  <p className="mt-3 text-xs text-[color:var(--text)]">
                    Thanks — you&apos;re subscribed.
                  </p>
                ) : null}
                <p className="mt-2 text-xs text-[color:var(--muted)]">
                  No spam. Unsubscribe anytime.
                </p>
            </div>

            <div className="rounded-[28px] border border-[color:var(--glass-border)] bg-[color:var(--surface)] p-5 sm:p-6">
              <p className="text-[0.6rem] uppercase tracking-[0.35em] text-[color:var(--muted)]">
                AI Impact Snapshot
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[color:var(--text)]">
                AI Impact Snapshot
              </h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                Typical profit uplift reported by teams adopting AI automation.
              </p>

              <div className="mt-4 space-y-3 text-sm">
                {chartRows.map((row) => (
                  <div key={row.label} className="space-y-1">
                    <div className="flex items-center justify-between text-[color:var(--text)]">
                      <span>{row.label}</span>
                      <span>{row.value}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[color:var(--surface-2)]">
                      <div
                        className="h-2 rounded-full bg-[color:var(--brand)]"
                        style={{ width: `${row.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-[color:var(--muted)]">
                Benchmarks are illustrative; results vary by implementation.
              </p>

              <Link
                href="/insights"
                className="glow-hover mt-4 inline-flex w-fit rounded-full border border-[color:var(--glass-border)] bg-[color:var(--cta-bg)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--cta-text)]"
              >
                See More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
