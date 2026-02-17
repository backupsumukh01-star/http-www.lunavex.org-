"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-b border-border py-24 bg-bg"
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-heading text-3xl font-semibold text-text md:text-4xl">
          Built for Longevity, Not Hype
        </h2>
        <p className="mt-6 text-muted">
          LUNAVEX was created to prioritize transparency, discipline, and
          long-term value over speculation and short-term attention. Our vision
          is to establish a globally accessible digital asset built on
          transparency, disciplined growth, and responsible expansion.
        </p>
      </div>
    </motion.section>
  );
}
