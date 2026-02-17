"use client";

import { useEffect, useState } from "react";
import { fetchLxvPrice } from "@/lib/price";

const REFRESH_MS = 30_000;

export function useLxvPrice() {
  const [priceUsd, setPriceUsd] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const data = await fetchLxvPrice();
      if (cancelled) return;
      setPriceUsd(data?.priceUsd ?? null);
    }

    load();
    const interval = setInterval(load, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return priceUsd;
}
