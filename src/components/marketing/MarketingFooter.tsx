const FOOTER_LINKS = [
  {
    title: "Product",
    items: [
      "AI Customer Support",
      "Messenger Automation",
      "Voice AI Support",
      "Analytics",
      "Integrations",
    ],
  },
  {
    title: "Solutions",
    items: [
      "E-commerce",
      "SaaS",
      "Customer Support Teams",
      "Startups",
      "Enterprise",
    ],
  },
  {
    title: "Resources",
    items: ["Blog", "Case Studies", "Documentation", "API", "Help Center"],
  },
  {
    title: "Company",
    items: ["About Us", "Mission", "Careers", "Press Kit", "Contact"],
  },
  {
    title: "Investors",
    items: [
      "Investor Relations",
      "Pitch Deck",
      "Roadmap",
      "Partnerships",
    ],
  },
  {
    title: "Legal",
    items: ["Privacy Policy", "Terms of Service", "AI Ethics", "Security"],
  },
];

export default function MarketingFooter() {
  return (
    <footer
      id="footer"
      className="animate-fade-in footer-glass border-t border-[color:var(--footer-border)] py-12 text-[color:var(--text)]"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {FOOTER_LINKS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-[0.6rem] uppercase tracking-[0.35em] text-[color:var(--muted)]">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm text-[color:var(--text)]">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="transition hover:text-[color:var(--brand)]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[30px] border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] p-6 backdrop-blur">
          <p className="text-lg font-semibold">
            Interested in investing in the future of AI automation?
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="glow-hover rounded-full border border-[color:var(--glass-border)] bg-[color:var(--cta-bg)] px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--cta-text)]"
            >
              Become a Partner
            </button>
            <button
              type="button"
              className="glow-hover rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--text)]"
            >
              Request Investor Deck
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-[color:var(--footer-border)] pt-6 text-sm text-[color:var(--muted)]">
          <p>Zero Labs AI – Building the future of AI-powered customer support.</p>
          <p className="mt-2 text-[color:var(--text)]">
            © 2026 Zero Labs AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
