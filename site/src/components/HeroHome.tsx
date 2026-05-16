"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export function HeroHome() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-ink text-bg">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] glow-gold" />
      <div className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] glow-ink opacity-60" />

      {/* Subtle floating accent circles */}
      <div className="absolute top-1/3 right-[8%] w-2 h-2 rounded-full bg-gold/80 float-slow" />
      <div className="absolute top-2/3 left-[10%] w-1.5 h-1.5 rounded-full bg-bg/50 float-slow" style={{ animationDelay: "-3s" }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-32 lg:pt-40 lg:pb-44">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="inline-flex items-center gap-3 rounded-full border border-bg/15 bg-bg/5 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.22em] font-medium text-bg/85"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          Strategic Facilitation & Change Leadership
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display mt-7 max-w-4xl text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight font-medium balance"
        >
          Think clearly.
          <br />
          Align teams.
          <br />
          <span className="text-gold">Execute with confidence.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="mt-8 max-w-xl text-lg lg:text-xl text-bg/75 leading-relaxed pretty"
        >
          The Bush Group helps boards, executives, and operating teams plan strategically,
          manage change, and lead operations that consistently get results.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-ink font-medium hover:bg-bg transition-colors"
          >
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/core-eight"
            className="inline-flex items-center gap-2 rounded-full border border-bg/30 px-7 py-3.5 text-bg/95 hover:border-bg hover:bg-bg/5 transition-colors"
          >
            Explore the Core Eight
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-bg/10 rounded-2xl overflow-hidden border border-bg/10"
        >
          {[
            { value: "25", label: "countries served" },
            { value: "50%", label: "of Fortune 100 represented" },
            { value: "16+", label: "industries in a single year" },
            { value: "80%", label: "C-suite & executive level" },
          ].map((s) => (
            <div key={s.label} className="bg-ink px-6 py-7">
              <div className="font-display text-4xl lg:text-5xl text-gold font-medium">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-bg/55 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Soft fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-bg/5 pointer-events-none" />
    </section>
  );
}
