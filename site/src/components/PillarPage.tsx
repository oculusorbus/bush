import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionEyebrow } from "./SectionEyebrow";
import { Pillar, PILLARS } from "@/lib/content";

interface Props {
  pillar: Pillar;
}

export function PillarPage({ pillar }: Props) {
  const others = PILLARS.filter((p) => p.slug !== pillar.slug).slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-bg">
        <div className="absolute inset-0 bg-grid-dark opacity-25" />
        <div
          className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full opacity-30"
          style={{ background: `radial-gradient(circle, ${pillar.color}, transparent 65%)` }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
          <Link
            href="/core-eight"
            className="inline-flex items-center gap-2 text-sm text-bg/70 hover:text-gold transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
            The Core Eight
          </Link>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-24 lg:items-end">
            <div>
              <SectionEyebrow variant="dark">{pillar.group} · Capability</SectionEyebrow>
              <h1 className="font-display mt-5 text-5xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight balance">
                {pillar.title}
              </h1>
              <p className="mt-7 text-lg lg:text-xl text-bg/75 leading-relaxed pretty max-w-2xl">
                {pillar.short}
              </p>
            </div>

            <div className="rounded-3xl border border-bg/15 bg-bg/[0.04] backdrop-blur p-7 lg:p-8">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-gold">Purpose</span>
              <p className="mt-4 text-lg leading-relaxed text-bg/90 pretty">{pillar.purpose}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives + topics */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <div className="rounded-3xl bg-bg border border-line p-8 lg:p-10 h-full card-ring">
              <SectionEyebrow>Learning Objectives</SectionEyebrow>
              <ul className="mt-6 space-y-4">
                {pillar.objectives.map((o, i) => (
                  <li key={o} className="flex items-start gap-4">
                    <span className="font-display text-2xl leading-none text-gold-2 w-7 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-ink-2 leading-relaxed pt-0.5">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="rounded-3xl bg-ink text-bg border border-ink p-8 lg:p-10 h-full">
              <SectionEyebrow variant="dark">Key Topics</SectionEyebrow>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {pillar.topics.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-bg/85 leading-snug text-sm">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach, audiences, outcomes */}
      <section className="bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28 grid lg:grid-cols-3 gap-8">
          <Reveal>
            <Block title="Our Approach">
              <ul className="space-y-3 text-ink-2">
                {pillar.approach.map((a) => (
                  <li key={a} className="leading-relaxed pretty">— {a}</li>
                ))}
              </ul>
            </Block>
          </Reveal>
          <Reveal delay={0.05}>
            <Block title="Built For">
              <ul className="space-y-3 text-ink-2">
                {pillar.audiences.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-gold shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </Block>
          </Reveal>
          <Reveal delay={0.1}>
            <Block title="Anticipated Outcomes" emphasized>
              <ul className="space-y-3">
                {pillar.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-gold shrink-0" />
                    {o}
                  </li>
                ))}
              </ul>
            </Block>
          </Reveal>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <Reveal>
                <SectionEyebrow>Training Offerings</SectionEyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display mt-4 text-3xl sm:text-4xl text-ink leading-[1.1] balance">
                  Flexible formats designed around your team.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-bg px-6 py-3 font-medium hover:bg-ink-2 transition-colors"
              >
                Get the pricing sheet
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </Link>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillar.offerings.map((o, i) => (
              <Reveal key={o} delay={i * 0.05}>
                <div className="rounded-2xl bg-bg border border-line p-6 h-full card-ring">
                  <span className="font-display text-4xl text-gold-2">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-4 font-medium text-ink leading-snug">{o}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28">
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionEyebrow>Explore More</SectionEyebrow>
              <h2 className="font-display mt-4 text-3xl sm:text-4xl text-ink leading-[1.1] balance">
                Other disciplines that pair well.
              </h2>
            </div>
            <Link href="/core-eight" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-gold-2">
              All eight
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/core-eight/${p.slug}`}
                className="group relative block rounded-2xl bg-bg-alt border border-line p-6 h-full overflow-hidden card-ring hover:bg-ink hover:text-bg transition-colors"
              >
                <span
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-30 transition-opacity duration-500 group-hover:opacity-70"
                  style={{ background: `radial-gradient(circle, ${p.color}, transparent 70%)` }}
                />
                <span className="text-xs uppercase tracking-[0.18em] font-semibold opacity-70">{p.group}</span>
                <h3 className="font-display mt-3 text-xl leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">{p.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Block({
  title,
  children,
  emphasized,
}: {
  title: string;
  children: React.ReactNode;
  emphasized?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl p-8 lg:p-10 h-full border card-ring",
        emphasized ? "bg-ink text-bg border-ink" : "bg-bg-alt border-line",
      ].join(" ")}
    >
      <SectionEyebrow variant={emphasized ? "dark" : "light"}>{title}</SectionEyebrow>
      <div className="mt-6">{children}</div>
    </div>
  );
}
