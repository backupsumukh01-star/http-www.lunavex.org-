export default function AuditEmbed() {
  return (
    <section className="py-24 bg-bg">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="font-heading text-2xl font-semibold text-text mb-6">
          Smart Contract Audit
        </h3>

        <p className="mb-6 text-muted">
          The LUNAVEX smart contract has undergone independent security review.
          The full audit report is available below.
        </p>

        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <iframe
            src="/audit/LUNAVEX_Extended_Audit_Report_Dark_Letterhead.pdf"
            className="h-[700px] w-full"
            title="LUNAVEX Audit Report"
          />
        </div>

        <a
          href="/audit/LUNAVEX_Extended_Audit_Report_Dark_Letterhead.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-sm text-primary hover:underline"
        >
          Download Audit Report (PDF)
        </a>
      </div>
    </section>
  );
}
