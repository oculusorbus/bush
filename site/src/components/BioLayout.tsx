import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionEyebrow } from "./SectionEyebrow";

interface Props {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  education: string[];
  certifications: string[];
  bio: string[];
}

export function BioLayout({ name, role, image, imageAlt, education, certifications, bio }: Props) {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-bg">
        <div className="absolute inset-0 bg-grid-dark opacity-25" />
        <div className="absolute -top-32 -right-32 w-[36rem] h-[36rem] glow-gold opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-24 grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-end">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] max-w-sm rounded-3xl overflow-hidden border border-bg/10 shadow-2xl">
              <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 80vw, 480px" className="object-cover" priority />
            </div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full glow-gold pointer-events-none" />
          </Reveal>

          <div>
            <SectionEyebrow variant="dark">{role}</SectionEyebrow>
            <h1 className="font-display mt-5 text-5xl sm:text-6xl lg:text-7xl leading-[1.04] balance">{name}</h1>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm text-bg/70 hover:text-gold transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
              Back to About
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28 grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32 space-y-10">
              <div>
                <SectionEyebrow>Education</SectionEyebrow>
                <ul className="mt-4 space-y-2 text-ink-2">
                  {education.map((e) => (
                    <li key={e} className="text-base leading-snug">{e}</li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionEyebrow>Certifications</SectionEyebrow>
                <ul className="mt-4 space-y-3">
                  {certifications.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-sm text-ink-2 leading-snug">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="space-y-7 text-ink-2 text-lg leading-relaxed pretty">
            {bio.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className={i === 0 ? "first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:text-gold-2" : ""}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
