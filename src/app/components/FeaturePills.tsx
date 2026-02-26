const features = [
  {
    title: "Multi-agent workflows",
    description: "Coordinate complex tasks across tools and models.",
  },
  {
    title: "Unified data layer",
    description: "Bring logs, prompts, and datasets into one view.",
  },
  {
    title: "Reliability guardrails",
    description: "Automate retries, approvals, and escalation paths.",
  },
  {
    title: "Secure deployment",
    description: "Govern access with policy-driven controls.",
  },
  {
    title: "Performance insights",
    description: "Track cost, latency, and quality in real time.",
  },
];

export default function FeaturePills() {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
        <span>Platform pillars</span>
        <span className="text-white/40">{features.length} modules</span>
      </div>
      <div className="flex flex-wrap gap-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/70 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.9)]"
          >
            <span className="text-white">{feature.title}</span>
            <span className="text-white/60">{feature.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
