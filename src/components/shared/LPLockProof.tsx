import { LP_LOCK_ADDRESS } from "@/lib/constants";

export default function LPLockProof() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h3 className="font-heading text-2xl font-semibold text-text mb-4">
          Liquidity Lock Proof
        </h3>

        <p className="mb-6 text-muted">
          Liquidity provider (LP) tokens are locked to ensure market stability
          and protect participants.
        </p>

        <div className="rounded-xl border border-border bg-card p-4">
          <div className="mb-2 text-sm text-muted">Lock Contract</div>
          <div className="mb-4 font-medium text-text">
            PinkLock / Team Finance / Unicrypt
          </div>

          <div className="mb-2 text-sm text-muted">Lock Address</div>

          <a
            href={`https://bscscan.com/address/${LP_LOCK_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all font-mono text-xs text-primary hover:underline"
          >
            https://bscscan.com/address/{LP_LOCK_ADDRESS}
          </a>
        </div>

        <p className="mt-4 text-xs text-muted">
          LP lock details are publicly verifiable on the blockchain.
        </p>
      </div>
    </section>
  );
}
