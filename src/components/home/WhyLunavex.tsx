const items = [
  ["Velocity-Focused", "Optimized for sustainable growth."],
  ["Serious by Design", "Built with credibility and clarity."],
  ["Cross-Chain Vision", "BSC first, multi-chain future."],
  ["Community-Aligned", "Transparent and governance-ready."],
];

export default function WhyLunavex() {
  return (
    <section className="border-b border-border bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-semibold text-text mb-12">
          Designed With Purpose
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          {items.map(([title, desc]) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-bg p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-text">
                {title}
              </h3>
              <p className="mt-2 text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
