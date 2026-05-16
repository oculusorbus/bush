import Link from "next/link";
import { Logo } from "./Logo";
import { SITE, PILLARS } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="relative bg-ink text-bg/90 mt-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] glow-gold pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-6 text-sm text-bg/65 max-w-sm pretty leading-relaxed">
              Since 2016, helping organizations think clearly, align teams, and execute with
              confidence. Certified Master Facilitators, Prosci instructors, and Lean Six Sigma
              experts.
            </p>
            <div className="mt-8 flex flex-col gap-1.5 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="text-bg hover:text-gold transition-colors w-fit link-underline"
              >
                {SITE.email}
              </a>
              <span className="text-bg/60">Based in {SITE.location}</span>
            </div>
          </div>

          <FooterCol title="Services">
            <FooterLink href="/advisory">Advisory</FooterLink>
            <FooterLink href="/consulting">Consulting</FooterLink>
            <FooterLink href="/facilitation">Facilitation</FooterLink>
            <FooterLink href="/core-eight">The Core Eight</FooterLink>
          </FooterCol>

          <FooterCol title="The Core Eight">
            {PILLARS.slice(0, 4).map((p) => (
              <FooterLink key={p.slug} href={`/core-eight/${p.slug}`}>
                {p.title}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="More">
            {PILLARS.slice(4).map((p) => (
              <FooterLink key={p.slug} href={`/core-eight/${p.slug}`}>
                {p.title}
              </FooterLink>
            ))}
          </FooterCol>
        </div>

        <div className="mt-16 pt-8 border-t border-bg/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-bg/55">
          <span>{SITE.copyright}</span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gold" />
            Designed and engineered for {SITE.legal}
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-5">{title}</h4>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-bg/75 hover:text-gold transition-colors link-underline">
        {children}
      </Link>
    </li>
  );
}
