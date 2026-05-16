import { SectionEyebrow } from "./SectionEyebrow";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
}

export function PageHero({ eyebrow, title, subtitle, align = "left" }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink text-bg">
      <div className="absolute inset-0 bg-grid-dark opacity-25" />
      <div className="absolute -top-32 -right-32 w-[36rem] h-[36rem] glow-gold opacity-60" />
      <div className={`relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-24 lg:pt-40 lg:pb-28 ${align === "center" ? "text-center" : ""}`}>
        <div className={align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"}>
          <SectionEyebrow variant="dark">{eyebrow}</SectionEyebrow>
          <h1 className="font-display mt-5 text-5xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-7 text-lg lg:text-xl text-bg/75 leading-relaxed pretty">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
