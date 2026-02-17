function BuyCard({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-bg p-6">
      <h3 className="font-heading text-lg font-semibold text-text mb-2">
        {title}
      </h3>
      <p className="mb-4 text-sm text-muted">{desc}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-primary hover:underline"
      >
        Open →
      </a>
    </div>
  );
}

export default function WhereToBuy() {
  return (
    <section className="rounded-2xl border border-border bg-card py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-heading text-3xl font-semibold text-text mb-6">
          Where to Buy LUNAVEX (LXV)
        </h2>

        <p className="mb-8 max-w-3xl text-muted">
          LUNAVEX is available on decentralized exchanges on BNB Smart Chain.
          Always verify the contract address before purchasing.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <BuyCard
            title="PancakeSwap (Recommended)"
            desc="Primary decentralized exchange on BNB Smart Chain."
            link="https://pancakeswap.finance/swap"
          />

          <BuyCard
            title="Other DEX Aggregators"
            desc="DEX aggregators that support BNB Smart Chain trading."
            link="#"
          />
        </div>

        <p className="mt-8 text-xs text-muted">
          LUNAVEX does not endorse third-party platforms. Users are responsible
          for verifying authenticity and contract details.
        </p>
      </div>
    </section>
  );
}
