import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const ink = variant === "light" ? "#0E1B2E" : "#FAFAF7";
  const gold = "#C9A86A";

  return (
    <Link
      href="/"
      aria-label="The Bush Group — Home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-500 group-hover:rotate-[20deg]"
      >
        <circle cx="24" cy="24" r="22" stroke={ink} strokeOpacity="0.18" strokeWidth="1.2" />
        <circle cx="24" cy="24" r="13" stroke={gold} strokeWidth="1.5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="24"
            y1="11"
            x2="24"
            y2="6"
            stroke={ink}
            strokeWidth="1.2"
            strokeLinecap="round"
            transform={`rotate(${deg} 24 24)`}
          />
        ))}
        <circle cx="24" cy="24" r="3.2" fill={gold} />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.05rem] font-semibold tracking-tight"
          style={{ color: ink }}
        >
          The Bush Group
        </span>
        <span
          className="text-[0.62rem] uppercase tracking-[0.22em] font-semibold mt-0.5"
          style={{ color: gold }}
        >
          Est. 2016
        </span>
      </span>
    </Link>
  );
}
