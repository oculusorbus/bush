import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with The Bush Group. Strategic facilitation, change management consulting, executive retreats, and Core Eight training.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Tell us about the <span className="text-gold">moment that matters.</span></>}
        subtitle="A board retreat. A change in motion. An M&A integration. A team that needs to align. Whatever it is — we'll help you design it, lead it, and land it."
      />

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
          <Reveal>
            <div className="space-y-10">
              <div>
                <SectionEyebrow>Direct</SectionEyebrow>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-4 block font-display text-3xl sm:text-4xl text-ink leading-tight link-underline w-fit"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <SectionEyebrow>Based In</SectionEyebrow>
                <p className="mt-4 font-display text-2xl text-ink">{SITE.location}</p>
                <p className="mt-2 text-sm text-muted">Working with clients in 25+ countries.</p>
              </div>
              <div>
                <SectionEyebrow>Response Time</SectionEyebrow>
                <p className="mt-4 text-ink-2 leading-relaxed pretty">
                  Most messages get a same-day or next-business-day response.
                  For time-sensitive engagements, mention dates in your note and we'll move
                  fast.
                </p>
              </div>
              <div className="pt-8 border-t border-line">
                <SectionEyebrow>What to Include</SectionEyebrow>
                <ul className="mt-4 space-y-2.5 text-sm text-ink-2">
                  {[
                    "What you're trying to accomplish",
                    "Audience size and seniority",
                    "Approximate timing",
                    "Any constraints — geography, format, prior work",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
