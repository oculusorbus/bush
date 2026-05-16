import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const metadata: Metadata = {
  title: "About",
  description:
    "Since 2016, The Bush Group has trained individuals and empowered organizations worldwide. Meet the founders and learn how The Core Eight was developed.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Training individuals, empowering organizations — <span className="text-gold">worldwide.</span></>}
        subtitle={
          <>
            Since 2016, The Bush Group has been dedicated to providing the tools, knowledge, and
            support that fosters growth in every aspect of your professional journey.
          </>
        }
      />

      {/* Origin story */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <SectionEyebrow>Our Origin</SectionEyebrow>
              <h2 className="font-display mt-5 text-4xl sm:text-5xl text-ink leading-[1.05] balance">
                How The Core Eight was developed.
              </h2>
              <p className="mt-6 text-muted leading-relaxed pretty">
                A professional journey spanning four decades — and a model proven step by step
                through real-world responsibility, formal training, and lessons learned.
              </p>
            </div>
          </Reveal>

          <div className="space-y-10 text-ink-2 leading-relaxed text-lg pretty">
            <Reveal>
              <p>
                The Core Eight Capability Model is not a random group of topics — it's the
                result of a professional journey spanning four decades. Steve began his career
                in operations, managing departments, call centers, and specialized teams for
                several Fortune 100 companies. Those early years taught him what it takes to
                run an operation and became the foundation for{" "}
                <Link href="/core-eight/active-management" className="text-ink underline underline-offset-4 decoration-gold decoration-2 hover:text-gold-2">
                  Active Management
                </Link>
                . Later, he moved into quality and process design, earning advanced Lean Six
                Sigma certifications and leading improvement projects in the U.S. and
                internationally — the backbone for{" "}
                <Link href="/core-eight/process-improvement" className="text-ink underline underline-offset-4 decoration-gold decoration-2 hover:text-gold-2">
                  Process Improvement
                </Link>{" "}
                and the deepened project leadership later formalized through PMP certification
                in{" "}
                <Link href="/core-eight/project-management" className="text-ink underline underline-offset-4 decoration-gold decoration-2 hover:text-gold-2">
                  Project Management Essentials
                </Link>
                .
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                But over time he discovered that technical execution wasn't enough. Projects
                often failed because people resisted change, which led to certifications in
                Prosci and Bridges' change methods. As a former U.S. national champion in
                public speaking and nationally ranked collegiate debater, he continued as a
                conference and keynote speaker — laid out in{" "}
                <Link href="/core-eight/presentation-skills" className="text-ink underline underline-offset-4 decoration-gold decoration-2 hover:text-gold-2">
                  Presentation Skills
                </Link>
                . As a Certified Master Facilitator (INIFAC) he later developed{" "}
                <Link href="/core-eight/group-facilitation" className="text-ink underline underline-offset-4 decoration-gold decoration-2 hover:text-gold-2">
                  Group Facilitation
                </Link>
                .
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                As years passed, he also realized that even with the right processes and tools,
                teams often falter under constant change and stress if they lack resilience.
                His work at Johnson & Johnson's Human Performance Institute gave him strategies
                for sustaining energy, purpose, and performance — the heart of{" "}
                <Link href="/core-eight/team-resilience" className="text-ink underline underline-offset-4 decoration-gold decoration-2 hover:text-gold-2">
                  Team Resilience
                </Link>
                . And throughout every role, he has coached individuals and teams, later
                formalizing that skill into{" "}
                <Link href="/core-eight/coaching-method" className="text-ink underline underline-offset-4 decoration-gold decoration-2 hover:text-gold-2">
                  Coaching Method
                </Link>
                .
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Throughout his career he has read the books and attended the seminars for the
                cool, latest and greatest methods and "breakthrough" ideas. New models come and
                go. What sets these eight skills apart is how widely they apply, and how long
                their value endures. They are not theory or fad, but proven practices —
                together forming a complete model for leading projects, operations, and people
                that achieve and sustain results.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <SectionEyebrow>The Founders</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-5 text-4xl sm:text-5xl text-ink leading-[1.05] balance">
                Meet the team behind The Bush Group.
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <FounderCard
              href="/about/steve-bush"
              name="Steve Bush"
              role="Founder, CEO"
              image="/headshots/steve-bush.png"
              credentials={[
                "Certified Master Facilitator (CMF)",
                "Prosci Master Instructor",
                "Lean Six Sigma Master Black Belt",
                "PMP — Project Management Professional",
              ]}
              bio="Co-founder of The Bush Group; former executive with 30+ years at Fortune 100 companies. Specializes in change management and high-stakes executive facilitation."
            />
            <FounderCard
              href="/about/jessalynn-bush"
              name="Jessalynn Bush"
              role="Founder, VP Operations"
              image="/headshots/jessalynn-bush.jpg"
              credentials={[
                "BS Kinesiology, MA Exercise Physiology",
                "Certified Strength & Conditioning Coach",
                "PMP — Project Management Professional",
                "Fortune 500 executive coaching experience",
              ]}
              bio="Two decades in health, wellness, coaching, and organizational performance — spanning university instruction, executive coaching, and leadership roles in marketing and engagement strategy."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function FounderCard({
  href,
  name,
  role,
  image,
  credentials,
  bio,
}: {
  href: string;
  name: string;
  role: string;
  image: string;
  credentials: string[];
  bio: string;
}) {
  return (
    <Reveal>
      <Link
        href={href}
        className="group relative block rounded-3xl bg-bg-alt border border-line overflow-hidden card-ring hover:bg-ink hover:text-bg transition-colors"
      >
        <div className="relative aspect-[5/4] overflow-hidden bg-ink/5">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
        </div>
        <div className="p-8 lg:p-10">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-gold-2 group-hover:text-gold">
            {role}
          </span>
          <h3 className="font-display mt-3 text-3xl lg:text-4xl">{name}</h3>
          <p className="mt-4 text-base leading-relaxed opacity-80 pretty">{bio}</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm opacity-85">
            {credentials.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="mt-2 w-1 h-1 rounded-full bg-gold shrink-0" />
                {c}
              </li>
            ))}
          </ul>
          <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium">
            Read full bio
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
