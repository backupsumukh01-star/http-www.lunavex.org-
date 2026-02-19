import type { Metadata } from "next";
import { CONTRACT_ADDRESS } from "@/lib/constants";

const PANCAKE_URL = `https://pancakeswap.finance/swap?chain=bsc&outputCurrency=${CONTRACT_ADDRESS}`;

export const metadata: Metadata = {
  title: "Buy on PancakeSwap | LUNAVEX",
  description:
    "Swap BNB or stablecoins for LUNAVEX (LXV) directly on PancakeSwap inside the LUNAVEX app.",
};

export default function BuyOnPancakeSwapPage() {
  return (
    <section className="py-28 pb-24 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="font-heading text-4xl font-semibold text-text mb-4">
          Buy LUNAVEX on PancakeSwap
        </h1>
        <p className="mb-6 text-muted max-w-2xl">
          Use the embedded PancakeSwap widget below to swap BNB or stablecoins
          for LUNAVEX (LXV) on BNB Smart Chain without leaving the LUNAVEX
          website.
        </p>

        <div className="mb-4 rounded-xl border border-border bg-card p-3 text-xs text-muted">
          Always double-check that the token address matches{" "}
          <span className="font-mono text-[11px] break-all">
            {CONTRACT_ADDRESS}
          </span>{" "}
          before confirming any trade.
        </div>

        <div className="relative mt-4 w-full overflow-hidden rounded-2xl border border-border bg-bg">
          <iframe
            src={PANCAKE_URL}
            title="PancakeSwap - Swap LUNAVEX"
            className="h-[720px] w-full"
            allow="clipboard-write; clipboard-read; web-share; fullscreen"
          />
        </div>

        <p className="mt-4 text-xs text-muted">
          If the widget does not load correctly, you can{" "}
          <a
            href={PANCAKE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            open PancakeSwap in a new tab
          </a>
          .
        </p>
      </div>
    </section>
  );
}

