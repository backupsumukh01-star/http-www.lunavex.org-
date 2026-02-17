"use client";

import { motion } from "framer-motion";
import { motionPresets } from "@/lib/motion";

const features = [
  {
    title: "Serious by Design",
    desc: "No exaggerated promises. Built with credibility and discipline.",
  },
  {
    title: "Cross-Chain Vision",
    desc: "Launching on BSC with a roadmap toward multi-chain expansion.",
  },
  {
    title: "Transparent Tokenomics",
    desc: "Fixed supply, public distribution, and locked liquidity.",
  },
  {
    title: "Governance Ready",
    desc: "Future-focused framework for community participation.",
  },
];

export default function Features() {
  return (
    <motion.section {...motionPresets.fadeUp} className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-center text-3xl font-semibold text-text mb-12">
          Why LUNAVEX
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur"
            >
              <h3 className="font-heading text-lg font-semibold text-text mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
