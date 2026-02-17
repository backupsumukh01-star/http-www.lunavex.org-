import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Buy LUNAVEX | LUNAVEX",
  description:
    "Step-by-step guide to safely purchase and store LUNAVEX on BNB Smart Chain.",
};

function Step({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <li className="rounded-xl border border-border bg-card p-6">
      <div className="mb-2 text-sm text-primary">Step {n}</div>
      <h3 className="font-heading text-lg font-semibold text-text mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted">{desc}</p>
    </li>
  );
}

export default function HowToBuyPage() {
  return (
    <section className="py-28 pb-24 md:pb-28">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="font-heading text-4xl font-semibold text-text mb-6">
          How to Buy LUNAVEX (LXV)
        </h1>

        <p className="mb-10 text-muted">
          This guide explains how to safely purchase and store LUNAVEX using a
          supported wallet on BNB Smart Chain.
        </p>

        <ol className="space-y-8">
          <Step
            n="1"
            title="Connect a Wallet"
            desc="Click the Connect Wallet button and connect a supported wallet such as MetaMask, Trust Wallet, or Binance Web3 Wallet."
          />

          <Step
            n="2"
            title="Switch to BNB Smart Chain"
            desc="Ensure your wallet is connected to BNB Smart Chain. The site will prompt you automatically if you are on the wrong network."
          />

          <Step
            n="3"
            title="Buy on PancakeSwap"
            desc="You will be redirected to PancakeSwap with LUNAVEX pre-selected. Enter the amount and confirm the trade."
          />

          <Step
            n="4"
            title="Add LUNAVEX to Your Wallet"
            desc="After purchase, click the Add Token button to display LUNAVEX in your wallet."
          />

          <Step
            n="5"
            title="Verify Contract"
            desc="Always verify the contract address on BscScan to ensure authenticity."
          />
        </ol>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90"
          >
            Back to Home
          </Link>
          <Link
            href="/tokenomics"
            className="rounded-lg border border-border px-6 py-3 font-medium text-text transition hover:border-primary hover:text-primary"
          >
            View Tokenomics
          </Link>
        </div>

        <p className="mt-12 text-xs text-muted">
          LUNAVEX does not provide financial advice. Always verify contract
          details before interacting.
        </p>
      </div>
    </section>
  );
}
