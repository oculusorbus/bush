"use client";

import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
}

const INITIAL: FormState = {
  name: "",
  email: "",
  company: "",
  topic: "Strategic Facilitation",
  message: "",
};

const TOPICS = [
  "Strategic Facilitation",
  "Change Management Consulting",
  "Core Eight Training",
  "Executive Retreat / Off-site",
  "M&A Integration",
  "Something Else",
];

export function ContactForm() {
  const [data, setData] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`[Website] ${data.topic} — ${data.name}`);
    const lines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.company ? `Company: ${data.company}` : "",
      `Topic: ${data.topic}`,
      "",
      data.message,
    ].filter(Boolean);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:info@thebushgroupinc.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-bg-alt border border-line p-10 lg:p-12 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/20 text-gold-2 mb-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h3 className="font-display text-3xl text-ink">Success — message received.</h3>
        <p className="mt-3 text-ink-2 leading-relaxed pretty max-w-md mx-auto">
          Your email client should have just opened. We typically respond within one business day.
          If you don't hear back, write us directly at{" "}
          <a href="mailto:info@thebushgroupinc.com" className="text-ink underline decoration-gold decoration-2 underline-offset-4">
            info@thebushgroupinc.com
          </a>.
        </p>
        <button
          onClick={() => { setSubmitted(false); setData(INITIAL); }}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-line bg-bg px-6 py-2.5 text-sm font-medium text-ink-2 hover:bg-ink hover:text-bg hover:border-ink transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-bg-alt border border-line p-8 lg:p-10 space-y-5 card-ring"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Your name *">
          <input
            required
            type="text"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            className="input"
          />
        </Field>
        <Field label="Email *">
          <input
            required
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className="input"
          />
        </Field>
      </div>

      <Field label="Company or organization">
        <input
          type="text"
          value={data.company}
          onChange={(e) => update("company", e.target.value)}
          className="input"
        />
      </Field>

      <Field label="What can we help with?">
        <select
          value={data.topic}
          onChange={(e) => update("topic", e.target.value)}
          className="input"
        >
          {TOPICS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </Field>

      <Field label="Tell us about your situation *">
        <textarea
          required
          rows={5}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          className="input resize-y min-h-[120px]"
          placeholder="Project goals, timing, audience size, anything relevant…"
        />
      </Field>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-ink text-bg px-8 py-3.5 font-medium hover:bg-ink-2 transition-colors"
      >
        Send message
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
      </button>

      <p className="text-xs text-muted">
        Your message will be sent via your default mail client to info@thebushgroupinc.com.
      </p>

      <style jsx>{`
        .input {
          width: 100%;
          background: var(--bg);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: var(--ink);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: var(--gold-2);
          box-shadow: 0 0 0 3px rgba(201, 168, 106, 0.18);
        }
      `}</style>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] font-semibold text-ink-2 mb-2">{label}</span>
      {children}
    </label>
  );
}
