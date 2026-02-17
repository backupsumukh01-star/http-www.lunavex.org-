import type { Metadata } from "next";
import { seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: seo.community.title,
  description: seo.community.description,
};

const links = [
  {
    title: "Telegram",
    desc: "Official Announcements",
    href: "#",
  },
  {
    title: "X (Twitter)",
    desc: "Updates & Insights",
    href: "#",
  },
  {
    title: "Discord",
    desc: "Discussions & Governance",
    href: "#",
  },
  {
    title: "Docs",
    desc: "Technical Documentation",
    href: "#",
  },
];

export default function CommunityPage() {
  return (
    <div>
      <section className="border-b border-[#1E2440] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-semibold text-[#E6E8F0] md:text-5xl">
            Join the LUNAVEX Community
          </h1>
          <p className="mt-6 text-lg text-[#9AA0B5]">
            LUNAVEX is driven by a global community committed to transparency,
            discussion, and long-term growth.
          </p>
        </div>
      </section>

      <section className="border-b border-[#1E2440] bg-[#11162A] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="group flex flex-col rounded-xl border border-[#1E2440] bg-[#0B0F1A] p-6 transition hover:border-[#7B6CFF]"
              >
                <h2 className="font-heading text-xl font-semibold text-[#E6E8F0] group-hover:text-[#7B6CFF]">
                  {link.title}
                </h2>
                <p className="mt-2 text-[#9AA0B5]">{link.desc}</p>
                <span className="mt-4 text-sm text-[#7B6CFF] group-hover:underline">
                  Join →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
