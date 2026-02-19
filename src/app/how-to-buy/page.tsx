import type { Metadata } from "next";
import HowToBuyGuide from "@/components/how-to-buy/HowToBuyGuide";

export const metadata: Metadata = {
  title: "How to Buy LUNAVEX | LUNAVEX",
  description:
    "Step-by-step guide to safely purchase and store LUNAVEX on BNB Smart Chain.",
};

export default function HowToBuyPage() {
  return <HowToBuyGuide />;
}
