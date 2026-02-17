export type PriceData = {
  priceUsd: string | null;
};

export async function fetchLxvPrice(): Promise<PriceData | null> {
  try {
    const res = await fetch("/api/price", { cache: "no-store" });
    const data = await res.json();

    if (!res.ok || data?.priceUsd == null) return null;

    return { priceUsd: data.priceUsd };
  } catch {
    return null;
  }
}
