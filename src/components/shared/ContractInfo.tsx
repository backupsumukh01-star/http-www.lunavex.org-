function Info({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="rounded-lg border border-border bg-bg p-4">
      <div className="text-xs text-muted">{label}</div>
      <div
        className={`mt-1 ${
          mono ? "font-mono text-sm text-text" : "font-body text-text"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

import { CONTRACT_ADDRESS } from "@/lib/constants";

export default function ContractInfo() {

  return (
    <section className="border-t border-border bg-card py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-heading text-3xl font-semibold text-text mb-8">
          Contract & Asset Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Info label="Token Name" value="LUNAVEX" />
          <Info label="Ticker" value="LXV" />
          <Info label="Blockchain" value="BNB Smart Chain (BEP-20)" />
          <Info label="Total Supply" value="1,000,000,000 LXV" />
          <Info label="Supply Type" value="Fixed (Non-Inflationary)" />
          <Info label="Mint Function" value="Disabled" />
          <Info label="Ownership" value="Renounced / Planned" />
          <Info label="Liquidity" value="Locked" />
          <Info label="Contract Address" value={CONTRACT_ADDRESS} mono />
        </div>

        <div className="mt-10 max-w-3xl text-sm text-muted">
          LUNAVEX follows a transparent smart contract design with no hidden mint
          functions, no supply inflation, and publicly verifiable deployment.
          Full contract details will be published upon launch.
        </div>
      </div>
    </section>
  );
}
