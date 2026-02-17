import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import TrustBadges from "@/components/shared/TrustBadges";
import AuditEmbed from "@/components/shared/AuditEmbed";
import LPLockProof from "@/components/shared/LPLockProof";
import ContractInfo from "@/components/shared/ContractInfo";

export const metadata: Metadata = {
  title: seo.security.title,
  description: seo.security.description,
};

export default function SecurityPage() {
  return (
    <div>
      <section className="py-24 bg-bg">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-heading text-4xl font-semibold text-text mb-6">
            Security & Transparency
          </h1>
          <p className="mb-8 text-muted">
            LUNAVEX is built with best-practice security principles to protect
            participants and maintain long-term trust.
          </p>
          <ul className="space-y-3 text-muted">
            <li>Fixed total supply</li>
            <li>No mint functions</li>
            <li>Liquidity locked</li>
            <li>Public contract verification</li>
          </ul>
        </div>
      </section>

      <TrustBadges />

      <AuditEmbed />

      <LPLockProof />

      <ContractInfo />
    </div>
  );
}
