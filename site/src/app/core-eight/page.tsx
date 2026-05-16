import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { CoreEightWheel } from "@/components/CoreEightWheel";
import { PILLARS } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Core Eight Capability Model",
  description:
    "Eight essential disciplines for leading projects, operations, and people. The Bush Group's Signature Series — proven, complementary, and built for real results.",
  alternates: { canonical: "/core-eight" },
};

const GROUPS = [
  {
    num: "01",
    title: "Leading a Project",
    body: "Successful change depends on project leaders who lead both the technical and people side. Project Management and Change Management are companion skills to help projects achieve goals and sustain results.",
    slugs: ["project-management", "change-management"] as const,
  },
  {
    num: "02",
    title: "Leading a Process",
    body: "Successful operations depend on managers who lead both the process and people side of their function. Active Management and Process Improvement are complementary skills to ensure operations consistently achieve targets and continually become more refined.",
    slugs: ["active-management", "process-improvement"] as const,
  },
  {
    num: "03",
    title: "Leading People",
    body: "Whether leading a project or an operation, a leader must run effective meetings, speak in front of groups, coach others, and help their team perform under pressure. Group Facilitation, Presentation Skills, Team Resilience, and Coaching are essential to high-performing teams.",
    slugs: ["group-facilitation", "presentation-skills", "team-resilience", "coaching-method"] as const,
  },
];

export default function CoreEightPage() {
  return (
    <>
      <PageHero
        eyebrow="The Bush Group Signature Series"
        title={<>The Core Eight <span className="text-gold">Capability Model.</span></>}
        subtitle={
          <>
            Eight professional skills essential to manage operations, execute projects, and lead
            people. Each discipline stands on its own — but every skill you add amplifies your
            ability to make a bigger impact.
          </>
        }
      />

      {/* Interactive wheel + structure */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 lg:items-center">
          <Reveal>
            <CoreEightWheel />
          </Reveal>
          <div className="space-y-8">
            {GROUPS.map((g, i) => (
              <Reveal key={g.num} delay={i * 0.05}>
                <div className="rounded-2xl bg-bg border border-line p-7 card-ring">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-3xl text-gold-2">{g.num}</span>
                    <span className="h-px flex-1 bg-line" />
                  </div>
                  <h3 className="font-display text-2xl text-ink leading-tight">{g.title}</h3>
                  <p className="mt-3 text-ink-2 leading-relaxed pretty">{g.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {g.slugs.map((slug) => {
                      const p = PILLARS.find((x) => x.slug === slug)!;
                      return (
                        <Link
                          key={slug}
                          href={`/core-eight/${slug}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-alt border border-line text-xs font-medium text-ink-2 hover:bg-ink hover:text-bg hover:border-ink transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
                          {p.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <SectionEyebrow>Why It Matters</SectionEyebrow>
            <h2 className="font-display mt-5 text-4xl sm:text-5xl text-ink leading-[1.05] balance">
              The gap between effort and results.
            </h2>
          </Reveal>
          <div className="space-y-6 text-ink-2 text-lg leading-relaxed pretty">
            <Reveal>
              <p>
                Organizations struggle not because people aren't smart or committed, but
                because they often lack the core skills that make projects, teams, and
                operations succeed. Managers are rarely taught how to actually run a
                department. Processes are burdened with waste and complexity. Projects stall
                when leaders try to "figure it out as they go." And even the best solutions
                fail if people resist the change.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p>
                The Core Eight Capability Model addresses these realities head-on. It equips
                people to manage operations with confidence, improve processes systematically,
                lead projects that deliver, and drive adoption of change. It develops the
                ability to present with impact, guide collaboration, coach people toward
                growth, and build resilient teams that thrive under pressure.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                These are not "nice to have" skills — they are essential capabilities that
                close the gap between effort and results. By mastering them, you will not only
                achieve your professional goals but create stronger, more engaged teams and
                organizations that sustain success over time.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* All 8 cards */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="max-w-3xl mb-14">
            <Reveal>
              <SectionEyebrow>All Eight Disciplines</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-5 text-4xl sm:text-5xl text-ink leading-[1.05] balance">
                Use each on its own — or combine for a complete development experience.
              </h2>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.04}>
                <Link
                  href={`/core-eight/${p.slug}`}
                  className="group relative block rounded-2xl bg-bg border border-line p-7 h-full overflow-hidden card-ring hover:bg-ink hover:text-bg transition-colors"
                >
                  <span
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-30 transition-opacity duration-500 group-hover:opacity-70"
                    style={{ background: `radial-gradient(circle, ${p.color}, transparent 70%)` }}
                  />
                  <span className="text-xs uppercase tracking-[0.18em] font-semibold opacity-70">{p.group}</span>
                  <h3 className="font-display mt-3 text-2xl leading-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-80">{p.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
