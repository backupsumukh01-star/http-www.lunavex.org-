"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/shared/CountUp";
import LivePrice from "@/components/shared/LivePrice";

const stats = [
  { label: "Live Price", value: <LivePrice /> },
  { label: "Total Supply", value: <CountUp value={1000000000} suffix=" LXV" /> },
  { label: "Network", value: "BNB Smart Chain" },
  { label: "Supply Type", value: "Fixed" },
  { label: "Liquidity", value: "Locked" },
];

export default function Stats() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-3 lg:grid-cols-5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-6 text-center"
          >
            <div className="font-heading text-2xl font-semibold text-text">
              {s.value}
            </div>
            <div className="mt-1 text-xs text-muted">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
