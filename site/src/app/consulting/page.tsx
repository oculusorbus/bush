import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const metadata: Metadata = {
  title: "Consulting · Change Management",
  description:
    "Prosci-based change management consulting. Increase adoption, manage your change portfolio, and build enterprise change capability.",
  alternates: { canonical: "/consulting" },
};

const BELIEFS = [
  {
    h: "A well-designed solution means nothing unless people embrace it.",
    p: "We apply a structured approach to manage change and increase employee adoption — so the changes you make achieve their intended results.",
  },
  {
    h: "Change saturation leads to resistance and failed projects.",
    p: "We help clients plan, coordinate, and sequence their entire portfolio of changes at a sustainable pace.",
  },
  {
    h: "Equipping others is essential to scale or sustain anything.",
    p: "We teach and coach clients to build their organization's internal change capabilities.",
  },
  {
    h: "A positive mindset toward change is a competitive advantage.",
    p: "We help organizations build enterprise change capabilities that increase capacity and responsiveness.",
  },
];

const DELIVERABLES = [
  "Long-term aims and goals",
  "Mission & vision refresh",
  "Measurable objectives",
  "Critical success factors",
  "Barriers and risks",
  "Project / change identification",
  "Prioritized portfolio",
  "Action plans and owners",
  "Change capacity assessment",
  "Portfolio health assessment",
  "Performance measurement",
  "Benefit realization tracking",
  "Regular re-prioritization",
];

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="Consulting"
        title={<>Change management <span className="text-gold">that lasts.</span></>}
        subtitle="We partner with senior executives to plan, sequence, and stage the entire change portfolio at a pace employees can absorb — so changes stick."
      />

      {/* Beliefs */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28">
          <div className="max-w-2xl mb-14">
            <Reveal><SectionEyebrow>What We Believe</SectionEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-4 text-4xl sm:text-5xl text-ink leading-[1.05] balance">
                Four operating principles for sustained change.
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {BELIEFS.map((b, i) => (
              <Reveal key={b.h} delay={i * 0.05}>
                <div className="h-full rounded-3xl bg-bg border border-line p-7 lg:p-8 card-ring relative overflow-hidden">
                  <span className="absolute -top-12 -right-12 w-32 h-32 rounded-full glow-gold opacity-50" />
                  <span className="font-display text-4xl text-gold-2">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display mt-4 text-2xl text-ink leading-tight balance">{b.h}</h3>
                  <p className="mt-3 text-ink-2 leading-relaxed pretty">{b.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Planning + Portfolio */}
      <section className="bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <div className="rounded-3xl bg-ink text-bg p-8 lg:p-10 relative overflow-hidden h-full">
              <div className="absolute -top-32 -right-32 w-[24rem] h-[24rem] glow-gold opacity-50" />
              <SectionEyebrow variant="dark">Strategic Planning</SectionEyebrow>
              <h3 className="font-display mt-5 text-3xl sm:text-4xl leading-[1.05] balance">
                Strategy that becomes action.
              </h3>
              <p className="mt-5 text-lg text-bg/80 leading-relaxed pretty">
                We partner with your senior executives to create a strategic plan that's not
                just aspiration — but leads to action and gets results. By measuring change
                impacts, saturation levels, and resistance, you'll access new insights that
                will help you become a more "change-ready" organization.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-3xl bg-bg-alt border border-line p-8 lg:p-10 h-full card-ring">
              <SectionEyebrow>Portfolio Management</SectionEyebrow>
              <h3 className="font-display mt-5 text-3xl sm:text-4xl text-ink leading-[1.05] balance">
                Sequence the whole portfolio.
              </h3>
              <p className="mt-5 text-lg text-ink-2 leading-relaxed pretty">
                We guide your strategic planning to prioritize, sequence, and stage your
                entire change portfolio at a sustainable pace. We assess your organization's
                change capacity and readiness, and track the health and realized benefits of
                every initiative.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28">
          <div className="max-w-2xl mb-12">
            <Reveal><SectionEyebrow>Capabilities & Deliverables</SectionEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-4 text-4xl sm:text-5xl text-ink leading-[1.05] balance">
                Tangible outputs at every stage.
              </h2>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {DELIVERABLES.map((d, i) => (
              <Reveal key={d} delay={i * 0.02}>
                <div className="h-full rounded-xl bg-bg border border-line px-5 py-4 text-sm font-medium text-ink-2 flex items-start gap-2.5 card-ring">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                  {d}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise change */}
      <section className="bg-ink text-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-25" />
        <div className="absolute top-1/3 right-0 w-[36rem] h-[36rem] glow-gold opacity-50" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32 text-center">
          <Reveal><SectionEyebrow variant="dark">Enterprise Change</SectionEyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] balance">
              From ad-hoc projects to a positive change culture.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 text-lg lg:text-xl text-bg/80 leading-relaxed pretty max-w-3xl mx-auto">
              Becoming a nimble, change-ready organization takes more than sending someone to
              training. We engage your executives and share best practices to help them
              become better sponsors of change. We help you build broad change-management
              capabilities — so a positive change mindset becomes the norm.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-7 py-3.5 font-medium hover:bg-bg transition-colors">
                Start the conversation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
