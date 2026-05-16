import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { ADVISORY_EXPERTISE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Facilitation Services",
  description:
    "On-site, virtual, and graphic facilitation by Certified Master Facilitators. Sessions designed for engagement, energy, and outcomes that stick.",
  alternates: { canonical: "/facilitation" },
};

const MODES = [
  {
    tag: "On-Site",
    title: "On-site facilitation",
    body: "In-person sessions designed and led by professional and master-level facilitators. We work with you to match the right facilitator to the size, complexity, and degree of risk of your desired outcome.",
  },
  {
    tag: "Virtual",
    title: "Virtual facilitation",
    body: "Online working sessions, large-group events, and training. Our virtual experts use proven methods to ensure engagement, productivity, and results across any platform — Zoom, Webex, GoToMeeting, and more.",
  },
  {
    tag: "Graphic",
    title: "Graphic facilitation",
    body: "Large-scale imagery created live during a meeting to guide participants to shared understanding. Increases engagement, boosts conceptual thinking, and produces a permanent visual record of the session.",
  },
];

const VIRTUAL = [
  {
    h: "Virtual Meeting Facilitation",
    p: "Professional facilitators to lead your online working session. Virtual meetings can be successful, engaging, and cost-effective — when done right.",
  },
  {
    h: "Virtual Conference & Event Planning",
    p: "Create an unforgettable experience for your virtual audience. Shareholder meetings, strategy off-sites, fundraisers, leadership retreats — even the happy hour.",
  },
  {
    h: "Virtual Facilitation Training",
    p: "Build essential skills to lead great virtual meetings — for working leaders and aspiring professional facilitators alike.",
  },
];

const GRAPHIC_BENEFITS = [
  "Increases participant engagement and focus",
  "Integrates left-brain and right-brain thinking",
  "Boosts creativity, conceptual thinking, and group memory",
];

export default function FacilitationPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilitation Services"
        title={<>To facilitate means <span className="text-gold">"to make easy."</span></>}
        subtitle="A facilitated session is highly structured — but for participants, it feels natural, flows smoothly, and time flies. Our certified facilitators design sessions that engage participants and meet your objectives."
      />

      {/* Intro */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-28">
          <Reveal>
            <p className="font-display text-2xl sm:text-3xl text-ink leading-[1.25] pretty">
              Our participants often say things like, <span className="text-gold-2">"That was the best meeting I've ever attended"</span> — or, <span className="text-gold-2">"I can't believe how much we got accomplished."</span>
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 text-lg text-ink-2 leading-relaxed pretty">
              Our team includes both professional and master-level facilitators. We work with
              you to match the right facilitator to the size, complexity, and risk of your
              desired outcome — then design a practical, energetic team-building experience
              that lands the result.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Three modes */}
      <section className="bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28">
          <div className="max-w-2xl mb-12">
            <Reveal><SectionEyebrow>Three Ways We Facilitate</SectionEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-4 text-4xl sm:text-5xl text-ink leading-[1.05] balance">
                Matched to your room, your team, and your stakes.
              </h2>
            </Reveal>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {MODES.map((m, i) => (
              <Reveal key={m.tag} delay={i * 0.05}>
                <div className="relative h-full rounded-3xl bg-bg-alt border border-line p-8 overflow-hidden card-ring">
                  <span className="absolute -top-16 -right-16 w-40 h-40 rounded-full glow-gold opacity-40" />
                  <span className="relative text-xs uppercase tracking-[0.22em] font-semibold text-gold-2">
                    {m.tag}
                  </span>
                  <h3 className="relative font-display mt-4 text-2xl text-ink leading-tight">{m.title}</h3>
                  <p className="relative mt-4 text-ink-2 leading-relaxed pretty">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual deep dive */}
      <section className="bg-ink text-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-25" />
        <div className="absolute -bottom-32 -left-32 w-[36rem] h-[36rem] glow-gold opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28">
          <div className="max-w-2xl mb-12">
            <Reveal><SectionEyebrow variant="dark">Virtual Facilitation</SectionEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-4 text-4xl sm:text-5xl text-bg leading-[1.05] balance">
                Engagement and results — wherever your team is.
              </h2>
            </Reveal>
          </div>
          <div className="grid lg:grid-cols-3 gap-5">
            {VIRTUAL.map((v, i) => (
              <Reveal key={v.h} delay={i * 0.05}>
                <div className="rounded-2xl bg-bg/[0.04] border border-bg/10 p-7 h-full">
                  <h3 className="font-display text-xl text-bg leading-tight">{v.h}</h3>
                  <p className="mt-3 text-bg/75 leading-relaxed pretty text-sm">{v.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic facilitation benefits */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
          <Reveal>
            <SectionEyebrow>Graphic Facilitation</SectionEyebrow>
            <h2 className="font-display mt-5 text-4xl sm:text-5xl text-ink leading-[1.05] balance">
              Visual thinking, made shared.
            </h2>
            <p className="mt-6 text-ink-2 leading-relaxed pretty">
              The use of large-scale imagery created live during a meeting to help the
              facilitator guide participants to shared understanding or a common goal — in
              any venue, from small meetings to very large conferences.
            </p>
          </Reveal>
          <div className="grid gap-4">
            {GRAPHIC_BENEFITS.map((b, i) => (
              <Reveal key={b} delay={i * 0.05}>
                <div className="rounded-2xl bg-bg border border-line p-6 flex items-start gap-4 card-ring">
                  <span className="font-display text-3xl text-gold-2 leading-none shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink-2 leading-relaxed pretty">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28">
          <div className="max-w-2xl mb-12">
            <Reveal><SectionEyebrow>Areas of Expertise</SectionEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-4 text-4xl sm:text-5xl text-ink leading-[1.05] balance">
                The kinds of rooms we lead.
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {ADVISORY_EXPERTISE.map((e, i) => (
              <Reveal key={e} delay={i * 0.02}>
                <div className="h-full rounded-2xl bg-bg-alt border border-line px-5 py-4 text-sm font-medium text-ink-2 card-ring">
                  {e}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-14">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink text-bg px-7 py-3.5 font-medium hover:bg-ink-2 transition-colors">
                Plan a session
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
