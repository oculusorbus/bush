import { TESTIMONIALS } from "@/lib/content";

export function TestimonialMarquee() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <div className="overflow-hidden py-6">
      <div className="marquee-track flex gap-6 w-max">
        {items.map((t, i) => (
          <figure
            key={i}
            className="shrink-0 w-[24rem] rounded-2xl bg-bg-alt border border-line p-7 card-ring"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#C9A86A" className="mb-3 opacity-90">
              <path d="M9.6 7.2C6.6 7.2 4.2 9.6 4.2 12.6c0 2.55 1.95 4.5 4.5 4.5 1.5 0 2.4-.45 3-1.05-.6 3-3.15 5.1-6.45 5.4l.45 1.35c4.5-.45 8.1-3.45 8.1-9 0-3.45-2.1-6.6-4.2-6.6zm10.2 0c-3 0-5.4 2.4-5.4 5.4 0 2.55 1.95 4.5 4.5 4.5 1.5 0 2.4-.45 3-1.05-.6 3-3.15 5.1-6.45 5.4l.45 1.35c4.5-.45 8.1-3.45 8.1-9 0-3.45-2.1-6.6-4.2-6.6z"/>
            </svg>
            <blockquote className="font-display text-lg leading-snug text-ink pretty">
              {t.quote}
            </blockquote>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">
              — {t.attribution}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
