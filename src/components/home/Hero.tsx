"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import ParallaxContainer from "@/components/shared/ParallaxContainer";
import ParallaxLayers from "@/components/shared/ParallaxLayers";
import HeroVideo from "./HeroVideo";
import ConnectWallet from "@/components/shared/ConnectWallet";

function HeroContent() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-4xl px-6 text-center"
      >
        <ParallaxContainer>
          <h1 className="font-heading text-6xl font-bold tracking-tight text-text md:text-7xl">
            LUNAVEX
          </h1>
        </ParallaxContainer>

        <p className="mt-6 text-xl text-muted">
          A Velocity-Driven Digital Asset for the Next Market Cycle
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Built for sustainability, transparent tokenomics, and cross-chain
          scalability — designed beyond hype.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ConnectWallet />
          <Link
            href="/buy-on-pancakeswap"
            className="rounded-lg border border-primary bg-card/40 px-6 py-3 font-medium text-primary transition hover:bg-card hover:border-primary"
          >
            Buy Now on PancakeSwap
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
  }, []);

  return (
    <ParallaxLayers
      background={
        <div className="relative h-full w-full">
          <motion.div
            className="absolute inset-0 h-full w-full"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "radial-gradient(circle at 20% 30%, #7B6CFF33, transparent 40%)," +
                "radial-gradient(circle at 80% 70%, #4DA3FF22, transparent 40%)," +
                "linear-gradient(180deg, #0B0F1A 0%, #070A14 100%)",
              backgroundSize: "200% 200%",
            }}
          />
          {!isMobile && <HeroVideo />}
        </div>
      }
      mid={
        <div className="h-full w-full bg-primary/10 blur-3xl" />
      }
      foreground={<HeroContent />}
    />
  );
}
