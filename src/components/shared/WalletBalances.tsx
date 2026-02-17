"use client";

import { formatUnits } from "viem";
import { useConnection, useBalance, useReadContract } from "wagmi";
import { CONTRACT_ADDRESS } from "@/lib/constants";
import { useLxvPrice } from "@/hooks/useLxvPrice";
import Skeleton from "./Skeleton";

const ERC20_ABI = [
  {
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

export default function WalletBalances() {
  const { address, status } = useConnection();
  const priceUsd = useLxvPrice();

  const { data: bnb } = useBalance({
    address: address ?? undefined,
  });

  const { data: lxvRaw } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: ERC20_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
  });

  const lxvFormatted =
    lxvRaw !== undefined ? formatUnits(lxvRaw, 18).slice(0, 8) : undefined;

  const bnbFormatted =
    bnb?.value !== undefined
      ? formatUnits(bnb.value, bnb.decimals).slice(0, 8)
      : undefined;

  if (status !== "connected" || !address) return null;

  const isLoading = bnb === undefined || lxvRaw === undefined;

  if (isLoading) {
    return (
      <div className="space-y-3 rounded-xl border border-border bg-card p-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-32" />
      </div>
    );
  }

  const lxvNum = lxvFormatted ? parseFloat(lxvFormatted) : 0;
  const usdValue = priceUsd && lxvNum > 0 ? lxvNum * parseFloat(priceUsd) : null;

  return (
    <div className="rounded-xl border border-border bg-bg p-4 text-sm">
      <div className="flex justify-between text-text">
        <span>BNB Balance</span>
        <span>{bnbFormatted ?? "—"} BNB</span>
      </div>
      <div className="flex justify-between mt-2 text-text">
        <span>LXV Balance</span>
        <span>{lxvFormatted ?? "—"} LXV</span>
      </div>
      {usdValue !== null && usdValue > 0 && (
        <div className="mt-2 border-t border-border pt-2 text-muted">
          ≈ ${usdValue < 0.01 ? usdValue.toFixed(6) : usdValue.toFixed(2)} USD
        </div>
      )}
    </div>
  );
}
