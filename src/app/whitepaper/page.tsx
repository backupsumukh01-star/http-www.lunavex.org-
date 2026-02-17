import type { Metadata } from "next";
import { seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: seo.whitepaper.title,
  description: seo.whitepaper.description,
};

export default function WhitepaperPage() {
  return (
    <div>
      <section className="border-b border-[#1E2440] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-semibold text-[#E6E8F0] md:text-5xl">
            LUNAVEX Whitepaper
          </h1>
          <p className="mt-4 font-heading text-xl text-[#7B6CFF]">
            A Transparent Digital Asset Framework
          </p>
          <p className="mt-6 text-lg text-[#9AA0B5]">
            This whitepaper outlines the vision, architecture, tokenomics, and roadmap
            of the LUNAVEX ecosystem.
          </p>
          <a
            href="#"
            className="mt-10 inline-flex rounded-lg bg-[#7B6CFF] px-6 py-3 font-medium text-white transition hover:bg-[#6B5CE8]"
          >
            Download PDF
          </a>
        </div>
      </section>

      <section className="border-b border-[#1E2440] bg-[#11162A] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-[#9AA0B5]">
            The full whitepaper will be available for download once finalized. For
            immediate information, please visit the Tokenomics and Roadmap pages.
          </p>
        </div>
      </section>
    </div>
  );
}
