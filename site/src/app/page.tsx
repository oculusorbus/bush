import Link from "next/link";
import { HeroHome } from "@/components/HeroHome";
import { CoreEightWheel } from "@/components/CoreEightWheel";
import { Reveal } from "@/components/Reveal";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { TestimonialMarquee } from "@/components/TestimonialMarquee";
import { PILLARS, WHY_US } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <HeroHome />

      {/* Layer 2 — Intro statement */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32">
          <Reveal>
            <SectionEyebrow>Who We Are</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-display mt-6 text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.18] text-ink balance pretty">
              We help organizations think clearly, align teams, and execute with confidence.
              Our work spans strategic planning, leadership facilitation, and operational
              improvement — guiding boards and executives through critical decisions,
              partnering on mergers and acquisitions, and leading sessions that{" "}
              <span className="text-gold-2">spark innovation and build stronger teams.</span>
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Pill>Strategic Planning</Pill>
              <Pill>Executive Facilitation</Pill>
              <Pill>Change Management</Pill>
              <Pill>Mergers & Acquisitions</Pill>
              <Pill>Lean Six Sigma</Pill>
              <Pill>Coaching</Pill>
              <Pill>Team Resilience</Pill>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Layer 3 — The Core Eight wheel */}
      <section className="relative bg-ink text-bg overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-25" />
        <div className="absolute -top-32 right-0 w-[30rem] h-[30rem] glow-gold opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <SectionEyebrow variant="dark">The Bush Group Signature Series</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-bg balance">
                The Core Eight Capability Model
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 text-lg text-bg/75 leading-relaxed pretty max-w-xl">
                Eight professional skills essential to manage operations, execute projects, and
                lead people. Each discipline stands on its own — but every skill you add
                amplifies your ability to make a bigger impact.
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-3 gap-5 max-w-2xl">
              <CategoryCard
                num="1"
                title="Leading Projects"
                desc="Project Management & Change Management — companion skills that achieve goals and sustain results."
              />
              <CategoryCard
                num="2"
                title="Leading Operations"
                desc="Active Management & Process Improvement — complementary skills for hitting targets consistently."
              />
              <CategoryCard
                num="3"
                title="Leading People"
                desc="Facilitation, Presentations, Coaching, & Resilience — the human side of high-performing teams."
              />
            </div>

            <Reveal delay={0.2}>
              <div className="mt-10">
                <Link
                  href="/core-eight"
                  className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3 font-medium hover:bg-bg transition-colors"
                >
                  Explore the Core Eight
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="absolute inset-0 -m-12 glow-gold opacity-30" />
            <div className="relative">
              <CoreEightWheel />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Layer 4 — Three services */}
      <section className="bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="max-w-3xl">
            <Reveal>
              <SectionEyebrow>What We Do</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink balance">
                Three ways to engage.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg text-muted leading-relaxed pretty">
                Whether you need high-level strategy, structured problem-solving, or
                long-running change leadership, we bring the tools and the experience to move
                your organization forward.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            <ServiceCard
              tag="Advisory"
              href="/advisory"
              title="Facilitation that moves decisions forward"
              description="Strategic planning, board sessions, M&A integration, executive retreats. Certified Master Facilitators design and lead the moments your organization can't afford to get wrong."
              points={["Strategic Planning", "Board Facilitation", "M&A Integration", "Executive Retreats"]}
            />
            <ServiceCard
              tag="Consulting"
              href="/consulting"
              title="Change management that lasts"
              description="A structured approach to manage change and increase employee adoption — so the solutions you spent so much building actually deliver their intended results."
              points={["Change Portfolio Strategy", "Enterprise Change Capability", "Adoption & Sustainment", "Sponsor Coaching"]}
            />
            <ServiceCard
              tag="Facilitation"
              href="/facilitation"
              title="Meetings designed to make easy"
              description="Virtual, on-site, and graphic facilitation. Sessions are carefully planned and highly structured — but to participants, they feel natural and energizing."
              points={["On-site Sessions", "Virtual Facilitation", "Graphic Facilitation", "Large-group Events"]}
            />
          </div>
        </div>
      </section>

      {/* Layer 5 — Why us */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:items-center">
          <div>
            <Reveal>
              <SectionEyebrow>Why The Bush Group</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[3.2rem] leading-[1.05] text-ink balance">
                Top-shelf practitioners. Real-world results.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg text-muted leading-relaxed pretty max-w-md">
                We've sat at the table with Fortune 100 leaders, federal agencies, and
                non-profit boards — in 25 countries and counting. Our methods are proven,
                our certifications are current, and our experience is broad.
              </p>
            </Reveal>
          </div>

          <ul className="grid sm:grid-cols-2 gap-4">
            {WHY_US.map((item, i) => (
              <Reveal key={item} delay={i * 0.04} as="li">
                <div className="h-full rounded-2xl bg-bg border border-line p-5 flex items-start gap-3 card-ring">
                  <span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold/15 text-gold-2 shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  <span className="text-sm text-ink-2 leading-snug">{item}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Layer 6 — Testimonials marquee */}
      <section className="bg-bg border-y border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
          <Reveal>
            <SectionEyebrow>In Their Words</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1] max-w-3xl balance">
              What clients say after a session.
            </h2>
          </Reveal>
        </div>
        <TestimonialMarquee />
      </section>

      {/* Layer 7 — Pillar grid teaser */}
      <section className="bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <Reveal>
                <SectionEyebrow>The Eight Disciplines</SectionEyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display mt-4 text-4xl sm:text-5xl text-ink leading-[1.1] balance">
                  Built on decades of practice.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link
                href="/core-eight"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-gold-2 transition-colors"
              >
                See all eight
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </Link>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.04}>
                <Link
                  href={`/core-eight/${p.slug}`}
                  className="group relative block rounded-2xl bg-bg-alt border border-line p-6 h-full overflow-hidden card-ring transition-colors hover:bg-ink hover:text-bg"
                >
                  <span
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-30 transition-opacity duration-500 group-hover:opacity-70"
                    style={{ background: `radial-gradient(circle, ${p.color}, transparent 70%)` }}
                  />
                  <span className="text-xs uppercase tracking-[0.18em] font-semibold opacity-70">
                    {p.group}
                  </span>
                  <h3 className="font-display mt-3 text-2xl leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-80">{p.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium opacity-75 group-hover:opacity-100">
                    Read more
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Layer 8 — Final CTA */}
      <section className="relative bg-ink text-bg overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-25" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] glow-gold" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 py-28 lg:py-36 text-center">
          <Reveal>
            <SectionEyebrow variant="dark">Let's Talk</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] balance">
              Bring us in for the moments that matter most.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl mx-auto text-lg text-bg/75 leading-relaxed pretty">
              Strategic planning. Board retreats. Change in motion. M&A integration.
              Whatever the moment, we'll help you design it, lead it, and land it.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold text-ink px-8 py-4 text-base font-medium hover:bg-bg transition-colors"
              >
                Start a Conversation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </Link>
              <a
                href="mailto:info@thebushgroupinc.com"
                className="inline-flex items-center gap-2 rounded-full border border-bg/30 px-8 py-4 text-bg/95 hover:bg-bg/5 transition-colors"
              >
                info@thebushgroupinc.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-bg border border-line text-sm text-ink-2 font-medium">
      {children}
    </span>
  );
}

function CategoryCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="relative rounded-xl border border-bg/15 bg-bg/[0.04] p-5">
      <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">0{num}</span>
      <h3 className="mt-2 font-display text-lg leading-snug text-bg">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-bg/65">{desc}</p>
    </div>
  );
}

function ServiceCard({
  tag,
  href,
  title,
  description,
  points,
}: {
  tag: string;
  href: string;
  title: string;
  description: string;
  points: string[];
}) {
  return (
    <Reveal>
      <Link
        href={href}
        className="group relative block h-full rounded-3xl bg-bg-alt border border-line p-8 lg:p-10 overflow-hidden card-ring hover:bg-ink hover:text-bg transition-colors"
      >
        <span className="absolute -top-20 -right-20 w-56 h-56 rounded-full glow-gold opacity-40 group-hover:opacity-80 transition-opacity" />
        <span className="relative inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-gold-2 group-hover:text-gold">
          <span className="w-6 h-px bg-current opacity-70" />
          {tag}
        </span>
        <h3 className="relative font-display mt-5 text-3xl lg:text-[2rem] leading-[1.1] balance">
          {title}
        </h3>
        <p className="relative mt-5 text-base leading-relaxed opacity-80 pretty">
          {description}
        </p>
        <ul className="relative mt-6 space-y-2.5 text-sm">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
              <span className="opacity-85">{p}</span>
            </li>
          ))}
        </ul>
        <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-medium">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        </span>
      </Link>
    </Reveal>
  );
}
