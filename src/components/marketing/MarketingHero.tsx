import Image from "next/image";
import Link from "next/link";

const heroTags = ["Orchestration", "Observability", "Compliance"];

const controlTiles = [
  {
    title: "Policy rail",
    description: "Approve sensitive actions before execution.",
  },
  {
    title: "Signal grid",
    description: "Trace every decision across teams and tools.",
  },
  {
    title: "Runbooks",
    description: "Ship safe automation with guided workflows.",
  },
  {
    title: "Evidence",
    description: "Export audit-ready trails on demand.",
  },
];

export default function MarketingHero() {
  return (
    <section
      id="platform"
      className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
    >
      <div className="space-y-8">
        <p className="font-display text-[0.65rem] uppercase tracking-[0.45em] text-[var(--zl-ink-60)]">
          Zero Labs Platform
        </p>
        <h1 className="font-display text-4xl leading-tight text-[var(--zl-ink)] sm:text-5xl lg:text-6xl">
          A composed command center for reliable AI operations.
        </h1>
        <p className="max-w-xl text-base text-[var(--zl-ink-70)] sm:text-lg">
          Bring governance, performance, and accountability into one workspace
          your teams can trust. Replace fragmented tooling with a calm control
          layer built for AI systems.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            className="rounded-[var(--zl-radius-pill)] bg-[var(--zl-cloud)] px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[var(--zl-ink)] shadow-[var(--zl-shadow-soft)] transition hover:shadow-[var(--zl-shadow-accent)]"
          >
            Request access
          </button>
          <Link
            href="/blog"
            className="rounded-[var(--zl-radius-pill)] border-[var(--zl-border-thin)] border-[color:var(--zl-ink)] px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[var(--zl-ink)] transition hover:bg-[var(--zl-mist)]"
          >
            Read the blog
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          {heroTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border-[var(--zl-border-thin)] border-[color:var(--zl-ink-15)] bg-[var(--zl-mist)] px-4 py-2 text-[0.55rem] uppercase tracking-[0.35em] text-[var(--zl-ink-60)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-[var(--zl-radius-lg)] border-[var(--zl-border-strong)] border-[color:var(--zl-mist)] bg-[var(--zl-steel)] p-5 text-[var(--zl-mist)] shadow-[var(--zl-shadow-lift)] sm:p-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(var(--zl-radius-lg)-12px)] border-[var(--zl-border-thin)] border-[color:var(--zl-mist-80)] bg-[var(--zl-ink)]">
          <Image
            src="/brand/Banners/zerolabs-banner-light-base.png"
            alt="Zero Labs system map"
            fill
            priority
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-logo text-[0.65rem] uppercase tracking-[0.5em] text-[var(--zl-mist-80)]">
              zero labs
            </span>
            <span className="font-logo-strong text-5xl text-[var(--zl-mist)] sm:text-6xl">
              AI
            </span>
          </div>
        </div>
        <div className="mt-6 grid gap-4 text-[0.6rem] uppercase tracking-[0.28em] text-[var(--zl-mist-80)] sm:grid-cols-2">
          {controlTiles.map((tile) => (
            <div
              key={tile.title}
              className="rounded-[var(--zl-radius-sm)] border-[var(--zl-border-thin)] border-[color:var(--zl-mist-40)] bg-[var(--zl-mist-08)] px-4 py-3"
            >
              <p className="text-[var(--zl-mist)]">{tile.title}</p>
              <p className="mt-2 text-[0.6rem] normal-case tracking-normal text-[var(--zl-mist-80)]">
                {tile.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
