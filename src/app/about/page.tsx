import {
  MarketingFooter,
  MarketingNav,
} from "@/components/marketing";
import BackToTop from "@/components/ui/BackToTop";
import ThemedBackground from "@/components/ui/ThemedBackground";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen text-[color:var(--text)]">
      <ThemedBackground />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[color:var(--page-overlay)]" />
      <MarketingNav />
      <main className="flex flex-col gap-12 px-4 pb-20 pt-36 sm:px-6 md:pt-32 lg:px-10">
        <section className="mx-auto w-full max-w-5xl text-center">
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-[color:var(--muted)]">
            About Zero Labs
          </p>
          <h1 className="font-display text-4xl text-[color:var(--text)] sm:text-5xl">
            About Zero Labs AI
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[color:var(--muted)] sm:text-lg">
            Building the future of AI-powered customer communication.
          </p>
        </section>

        <section id="about-us" className="mx-auto w-full max-w-5xl scroll-mt-28">
          <div className="glass-panel rounded-[var(--zl-radius-md)] p-6 sm:p-8">
            <h2 className="font-display text-2xl text-[color:var(--text)]">
              About Us
            </h2>
            <div className="mt-4 space-y-4 text-sm text-[color:var(--muted)] sm:text-base">
              <p>
                Zero Labs AI is an artificial intelligence automation company
                focused on transforming how businesses communicate with their
                customers.
              </p>
              <p>
                We build AI-powered systems that automate messaging and voice
                interactions, enabling organizations to respond faster, operate
                more efficiently, and deliver better customer experiences.
              </p>
              <p>
                Our platform combines conversational AI, knowledge base
                intelligence, and real-time analytics to create intelligent
                customer support solutions. By integrating directly with
                messaging platforms and business systems, Zero Labs AI allows
                companies to scale their support operations without increasing
                operational complexity.
              </p>
              <p>
                At Zero Labs AI, we believe the future of business communication
                will be powered by intelligent automation.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2">
          <div
            id="mission"
            className="glass-panel rounded-[var(--zl-radius-md)] p-6 sm:p-8 scroll-mt-28"
          >
            <h2 className="font-display text-2xl text-[color:var(--text)]">
              Mission
            </h2>
            <div className="mt-4 space-y-4 text-sm text-[color:var(--muted)] sm:text-base">
              <p>
                Our mission is to empower businesses with intelligent AI
                automation that simplifies communication, enhances customer
                support, and unlocks operational efficiency.
              </p>
              <p>
                We aim to make advanced AI technology accessible to
                organizations of all sizes, allowing teams to focus on growth
                while automation handles repetitive interactions and support
                workflows.
              </p>
            </div>
          </div>
          <div
            id="vision"
            className="glass-panel rounded-[var(--zl-radius-md)] p-6 sm:p-8 scroll-mt-28"
          >
            <h2 className="font-display text-2xl text-[color:var(--text)]">
              Vision
            </h2>
            <div className="mt-4 space-y-4 text-sm text-[color:var(--muted)] sm:text-base">
              <p>
                Our vision is to become a global leader in AI-driven customer
                interaction platforms, enabling millions of businesses to
                operate with smarter, faster, and more efficient communication
                systems.
              </p>
              <p>
                We envision a future where AI seamlessly supports every customer
                conversation, allowing businesses to scale their operations
                without limits.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl">
          <div className="glass-panel rounded-[var(--zl-radius-md)] p-6 text-center sm:p-8">
            <p className="text-lg font-semibold text-[color:var(--text)]">
              Join us in building the future of AI-powered customer
              communication.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
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
        </section>
      </main>
      <MarketingFooter />
      <BackToTop />
    </div>
  );
}
