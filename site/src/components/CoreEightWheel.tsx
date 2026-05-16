"use client";

import Link from "next/link";
import { useState } from "react";
import { PILLARS } from "@/lib/content";

interface Props {
  size?: number;
  interactive?: boolean;
}

export function CoreEightWheel({ size = 520, interactive = true }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const cx = size / 2;
  const cy = size / 2;
  const outer = size / 2 - 4;
  const innerR = size * 0.18;
  const slice = (2 * Math.PI) / 8;

  const arc = (i: number) => {
    const start = -Math.PI / 2 + i * slice - slice / 2;
    const end = start + slice;
    const x1 = cx + outer * Math.cos(start);
    const y1 = cy + outer * Math.sin(start);
    const x2 = cx + outer * Math.cos(end);
    const y2 = cy + outer * Math.sin(end);
    const xi1 = cx + innerR * Math.cos(end);
    const yi1 = cy + innerR * Math.sin(end);
    const xi2 = cx + innerR * Math.cos(start);
    const yi2 = cy + innerR * Math.sin(start);
    return `M ${x1} ${y1} A ${outer} ${outer} 0 0 1 ${x2} ${y2} L ${xi1} ${yi1} A ${innerR} ${innerR} 0 0 0 ${xi2} ${yi2} Z`;
  };

  const labelPos = (i: number) => {
    const ang = -Math.PI / 2 + i * slice;
    const r = (outer + innerR) / 2;
    return { x: cx + r * Math.cos(ang), y: cy + r * Math.sin(ang), ang };
  };

  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-square">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
        <defs>
          {PILLARS.map((p, i) => (
            <radialGradient key={p.slug} id={`grad-${i}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={p.color} stopOpacity="0.95" />
              <stop offset="100%" stopColor={p.color} stopOpacity="0.7" />
            </radialGradient>
          ))}
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        <circle cx={cx} cy={cy} r={outer} fill="#0E1B2E" opacity="0.04" />

        {PILLARS.map((p, i) => {
          const isActive = active === i;
          return (
            <g
              key={p.slug}
              onMouseEnter={() => interactive && setActive(i)}
              onMouseLeave={() => interactive && setActive(null)}
              className={interactive ? "cursor-pointer transition-transform duration-300" : ""}
              style={{
                transformOrigin: `${cx}px ${cy}px`,
                transform: isActive ? "scale(1.035)" : "scale(1)",
              }}
            >
              <Link href={`/core-eight/${p.slug}`}>
                <path
                  d={arc(i)}
                  fill={`url(#grad-${i})`}
                  stroke="#FAFAF7"
                  strokeWidth="2"
                  className="transition-opacity duration-200"
                  style={{ opacity: active === null || isActive ? 1 : 0.55 }}
                />
              </Link>
            </g>
          );
        })}

        {PILLARS.map((p, i) => {
          const { x, y } = labelPos(i);
          return (
            <g key={`label-${p.slug}`} transform={`translate(${x} ${y})`}>
              <text
                textAnchor="middle"
                fontSize={size > 460 ? 14 : 12}
                fontWeight="600"
                fill="#FAFAF7"
                style={{ pointerEvents: "none", letterSpacing: "0.02em" }}
              >
                {p.title.split(" ").map((word, wi) => (
                  <tspan key={wi} x="0" dy={wi === 0 ? "-0.3em" : "1.1em"}>
                    {word}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}

        <circle cx={cx} cy={cy} r={innerR + 1} fill="#FAFAF7" />
        <circle cx={cx} cy={cy} r={innerR - 2} fill="#0E1B2E" />
        <g>
          <text
            x={cx}
            y={cy - 6}
            textAnchor="middle"
            fontFamily="var(--font-display-stack)"
            fontSize={size > 460 ? 20 : 16}
            fontWeight="600"
            fill="#FAFAF7"
          >
            The Core
          </text>
          <text
            x={cx}
            y={cy + 16}
            textAnchor="middle"
            fontFamily="var(--font-display-stack)"
            fontSize={size > 460 ? 20 : 16}
            fontWeight="600"
            fill="#C9A86A"
          >
            Eight
          </text>
        </g>
      </svg>

      {active !== null && (
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 translate-y-full bg-ink text-bg px-5 py-3 rounded-2xl shadow-2xl text-sm pretty max-w-xs w-max">
          <div className="font-semibold mb-0.5">{PILLARS[active].title}</div>
          <div className="text-bg/70 text-xs leading-relaxed">{PILLARS[active].short}</div>
        </div>
      )}
    </div>
  );
}
