import SectionLabel from "./SectionLabel";

const PRICING = [
  {
    tier: "Starter",
    from: "R3,500",
    summary:
      "For individuals and small businesses needing a clean, professional online presence.",
    includes: [
      "Up to 4 pages",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
      "1 round of revisions",
    ],
  },
  {
    tier: "Professional",
    from: "R6,000",
    summary:
      "For established businesses and professionals who need a more complete digital presence.",
    includes: [
      "Up to 8 pages",
      "Custom design",
      "Mobile responsive",
      "Contact form + integrations",
      "SEO fundamentals",
      "2 rounds of revisions",
    ],
    featured: true,
  },
  {
    tier: "Custom",
    from: "R10,000",
    summary:
      "For complex builds, web applications, or clients with specific requirements.",
    includes: [
      "Scope defined per project",
      "Web app functionality",
      "Custom integrations",
      "Performance optimisation",
      "Dedicated support",
      "Ongoing maintenance option",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <SectionLabel number="04" label="Pricing" />

      <div className="mb-8 grid grid-cols-[repeat(auto-fill,minmax(min(100%,340px),1fr))] gap-px bg-border">
        {PRICING.map((plan) => (
          <div
            key={plan.tier}
            className={`relative flex flex-col p-6 sm:p-10 ${
              plan.featured ? "bg-[#101A14]" : "bg-[#0B0B0E]"
            }`}
          >
            {plan.featured && (
              <div className="absolute inset-x-0 top-0 h-0.5 bg-accent" />
            )}

            <div
              className={`mb-6 font-mono text-[0.6875rem] uppercase tracking-[0.12em] ${
                plan.featured ? "text-accent" : "text-muted"
              }`}
            >
              {plan.tier}
            </div>

            <div className="mb-1 font-serif text-[clamp(2rem,3vw,2.5rem)] font-semibold leading-none tracking-[-0.02em] text-foreground">
              {plan.from}
            </div>

            <div className="mb-7 font-mono text-[0.625rem] tracking-[0.06em] text-muted">
              starting from
            </div>

            <p className="mb-8 border-b border-border pb-7 text-sm font-light leading-[1.65] text-muted">
              {plan.summary}
            </p>

            <ul className="m-0 flex-1 list-none p-0">
              {plan.includes.map((item) => (
                <li
                  key={item}
                  className="mb-3 flex items-start gap-3 text-sm font-light leading-normal text-foreground"
                >
                  <span className="mt-0.5 shrink-0 text-xs text-accent">
                    ✓
                  </span>

                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`mt-8 block border px-6 py-3.5 text-center text-xs font-medium uppercase tracking-[0.06em] transition-colors duration-200 ${
                plan.featured
                  ? "border-accent bg-accent text-background hover:bg-accent-muted"
                  : "border-border text-foreground hover:border-accent hover:text-accent"
              }`}
            >
              Discuss this project
            </a>
          </div>
        ))}
      </div>

      <p className="border-l-2 border-accent pl-4 pt-2 text-[0.75rem] leading-[1.7] tracking-[0.06em] text-muted-forground">
        All prices are starting points. Final pricing depends on project
        scope, complexity, and timeline. Every project begins with a free
        consultation.
      </p>

      {/* Ongoing Maintenance */}
      <div className="mt-10 border-2 border-border bg-hover">
        <div className="flex flex-col gap-6 p-5 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="w-fit shrink-0 border border-border bg-background px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted-forground">
            Optional add-on
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="mb-2 font-family text-xl">
              Ongoing Maintenance
            </h3>

            <p className="max-w-xl text-sm leading-relaxed text-muted">
              Keep your website updated, secure, and running smoothly after
              launch.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 md:shrink-0 md:justify-start">
            <div>
              <h3 className="font-family text-2xl font-bold">
                R500
              </h3>

              <p className="font-mono text-xs text-muted">
                from / month
              </p>
            </div>

            <a
              href="#contact"
              className="border border-border px-5 py-3 text-xs uppercase tracking-wider transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Enquire
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 border-t border-border sm:grid-cols-2 md:grid-cols-3">
          {[
            "Minor content updates",
            "Bug fixes",
            "Dependency updates",
            "Website monitoring",
            "Small design adjustments",
            "Technical support",
          ].map((item) => (
            <div
              key={item}
              className="border-b border-border p-5 text-sm text-muted sm:border-r"
            >
              <span className="mr-2 text-accent">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;