import ScrollReveal from "@/components/shared/ScrollReveal";

const steps = [
  {
    title: "Foundation",
    desc: "Smart contract deployment and BSC launch.",
  },
  {
    title: "Expansion",
    desc: "Community growth and ecosystem integrations.",
  },
  {
    title: "Cross-Chain",
    desc: "Multi-chain availability and liquidity expansion.",
  },
  {
    title: "Governance",
    desc: "Community-led decision making and utility.",
  },
];

export default function Timeline() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-heading text-center text-3xl font-semibold text-text mb-12">
          LUNAVEX Growth Path
        </h2>

        <div className="space-y-8">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-semibold text-text mb-1">
                  {s.title}
                </h3>
                <p className="text-sm text-muted">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
