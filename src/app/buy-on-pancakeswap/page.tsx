import type { Metadata } from "next";
import PancakeSwapEmbedSection from "@/components/shared/PancakeSwapEmbedSection";

export const metadata: Metadata = {
  title: "Buy on PancakeSwap | LUNAVEX",
  description:
    "Swap BNB or stablecoins for LUNAVEX (LXV) directly on PancakeSwap inside the LUNAVEX app.",
};

export default function BuyOnPancakeSwapPage() {
  return (
    <PancakeSwapEmbedSection headingLevel="h1" />
  );
}

