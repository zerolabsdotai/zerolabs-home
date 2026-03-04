import {
  IconLogin,
  IconNotification,
  IconPen,
  IconSearch,
} from "@/components/ui/icons";

const signals = [
  {
    title: "Scenario planning",
    description: "Model outcomes and recovery paths before launch.",
    icon: IconSearch,
  },
  {
    title: "Human checkpoints",
    description: "Route high risk decisions to the right owners.",
    icon: IconLogin,
  },
  {
    title: "Latency watch",
    description: "Track every response for speed and stability.",
    icon: IconNotification,
  },
  {
    title: "Cost trace",
    description: "Hold spend accountable across teams and regions.",
    icon: IconPen,
  },
];

export default function MarketingSignals() {
  return (
    <section id="signals" className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-3">
          <p className="font-display text-[0.65rem] uppercase tracking-[0.45em] text-[var(--zl-ink-60)]">
            Signal layer
          </p>
          <h2 className="font-display text-3xl text-[var(--zl-ink)] sm:text-4xl">
            Design guardrails around every AI decision.
          </h2>
        </div>
        <div className="rounded-full border-[var(--zl-border-thin)] border-[color:var(--zl-ink-20)] bg-[var(--zl-mist)] px-4 py-2 text-[0.55rem] uppercase tracking-[0.35em] text-[var(--zl-ink-60)]">
          04 modules
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {signals.map((signal, index) => {
          const Icon = signal.icon;

          return (
            <div
              key={signal.title}
              className="flex h-full flex-col gap-4 rounded-[var(--zl-radius-md)] border-[var(--zl-border-thin)] border-[color:var(--zl-ink-15)] bg-[var(--zl-mist)] p-6 shadow-[var(--zl-shadow-soft)]"
            >
              <div className="flex items-center justify-between text-[0.55rem] uppercase tracking-[0.35em] text-[var(--zl-ink-40)]">
                <span>Signal {index + 1}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-[var(--zl-border-thin)] border-[color:var(--zl-ink-10)] bg-[var(--zl-snow)]">
                  <Icon size={20} />
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-base font-semibold text-[var(--zl-ink)]">
                  {signal.title}
                </p>
                <p className="text-sm text-[var(--zl-ink-70)]">
                  {signal.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
