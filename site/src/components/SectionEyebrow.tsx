interface Props {
  children: React.ReactNode;
  variant?: "light" | "dark";
}

export function SectionEyebrow({ children, variant = "light" }: Props) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold",
        variant === "light" ? "text-gold-2" : "text-gold",
      ].join(" ")}
    >
      <span className="w-6 h-px bg-current opacity-70" />
      {children}
    </span>
  );
}
