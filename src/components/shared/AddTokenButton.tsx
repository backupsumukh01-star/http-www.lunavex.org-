"use client";

declare global {
  interface Window {
    ethereum?: {
      request: (args: {
        method: string;
        params?: unknown[];
      }) => Promise<unknown>;
    };
  }
}

import { getAddress } from "viem";
import { CONTRACT_ADDRESS } from "@/lib/constants";

const BSC_TOKEN_URL = `https://bscscan.com/token/${CONTRACT_ADDRESS}`;

export default function AddTokenButton() {
  async function addToken() {
    if (typeof window === "undefined" || !window.ethereum) {
      alert("Wallet not detected");
      return;
    }

    const address = getAddress(CONTRACT_ADDRESS);
    const token = {
      address,
      symbol: "LXV",
      decimals: 18,
    };

    try {
      const result = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: [
          {
            type: "ERC20",
            options: token,
          },
        ],
      });
      if (result === true) {
        alert("LXV added to your wallet");
      }
    } catch (e) {
      const err = e as { code?: number; message?: string };
      if (err?.code === 4001 || err?.message?.includes("rejected")) {
        return;
      }
      if (
        confirm(
          `Could not add token automatically. Would you like to open BSCScan to add it manually?`
        )
      ) {
        window.open(BSC_TOKEN_URL, "_blank", "noopener,noreferrer");
      }
    }
  }

  return (
    <button
      onClick={addToken}
      className="rounded-lg bg-secondary px-5 py-3 font-medium text-white transition hover:opacity-90"
    >
      Add LUNAVEX to Wallet
    </button>
  );
}
