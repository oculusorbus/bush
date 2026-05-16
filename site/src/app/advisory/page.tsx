import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { ADVISORY_EXPERTISE, WHY_US, TESTIMONIALS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Advisory & Executive Facilitation",
  description:
    "Strategic planning, board sessions, M&A integration, executive retreats. Certified Master Facilitators design and lead the moments that matter most.",
  alternates: { canonical: "/advisory" },
};

const PRINCIPLES = [
  {
    title: "Real change comes from collaboration.",
    body: "We facilitate groups to reach outcomes that are created, understood, and accepted by all parties.",
  },
  {
    title: "Equipping others is essential to scale.",
    body: "We teach and coach others to do what we do, and help them improve their own facilitation skills.",
  },
  {
    title: "Consensus isn't limited to small rooms.",
    body: "We specialize in facilitating virtual sessions and large-group environments alike.",
  },
];

export default function AdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisory Services"
        title={<>Facilitation that <span className="text-gold">moves decisions forward.</span></>}
        subtitle="We guide boards and executives through critical decisions, partner on mergers and acquisitions, and lead sessions that spark innovation and build stronger teams."
      />

      {/* Areas of expertise */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28">
          <div className="max-w-2xl mb-12">
            <Reveal><SectionEyebrow>Areas of Expertise</SectionEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-4 text-4xl sm:text-5xl text-ink leading-[1.05] balance">
                Fifteen disciplines for high-stakes sessions.
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {ADVISORY_EXPERTISE.map((e, i) => (
              <Reveal key={e} delay={i * 0.02}>
                <div className="h-full rounded-2xl bg-bg border border-line px-5 py-4 text-sm font-medium text-ink-2 card-ring">
                  {e}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding principles */}
      <section className="bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28 grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20">
          <Reveal>
            <SectionEyebrow>Guiding Principles</SectionEyebrow>
            <h2 className="font-display mt-5 text-4xl sm:text-5xl text-ink leading-[1.05] balance">
              How we work.
            </h2>
          </Reveal>
          <div className="space-y-6">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="flex gap-6 rounded-3xl bg-bg-alt border border-line p-7 lg:p-8 card-ring">
                  <span className="font-display text-5xl text-gold-2 leading-none shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-ink leading-tight">{p.title}</h3>
                    <p className="mt-2 text-ink-2 leading-relaxed pretty">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-ink text-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-25" />
        <div className="absolute -top-40 left-0 w-[40rem] h-[40rem] glow-gold opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="max-w-2xl mb-12">
            <Reveal><SectionEyebrow variant="dark">Why The Bush Group</SectionEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-4 text-4xl sm:text-5xl text-bg leading-[1.05] balance">
                Practitioners who've been at the head of the table.
              </h2>
            </Reveal>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY_US.map((item, i) => (
              <Reveal key={item} delay={i * 0.04} as="li">
                <div className="h-full rounded-2xl bg-bg/[0.04] border border-bg/10 p-5 flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold/20 text-gold shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  <span className="text-sm text-bg/90 leading-snug">{item}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-bg">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-28">
          <Reveal><SectionEyebrow>What Clients Say</SectionEyebrow></Reveal>
          <div className="mt-12 space-y-12">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <figure>
                  <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.15] balance pretty">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-5 text-sm uppercase tracking-[0.2em] text-gold-2 font-semibold">
                    {t.attribution}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-16">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink text-bg px-7 py-3.5 font-medium hover:bg-ink-2 transition-colors">
                Discuss your session
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
