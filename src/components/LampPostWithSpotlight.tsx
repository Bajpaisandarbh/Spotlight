"use client";
import { useState, ReactNode } from "react";

interface LampPostWithSpotlightProps {
  children: ReactNode;
  className?: string;
  textClassName?: string; // For controlling text color (e.g. "text-primary text-2xl font-bold")
}

export function LampPostWithSpotlight({
  children,
  className = "",
  textClassName = "",
}: LampPostWithSpotlightProps) {
  const [lit, setLit] = useState(false);

  return (
    <span
      className={`relative flex flex-col items-center select-none ${className}`}
      onMouseEnter={() => setLit(true)}
      onMouseLeave={() => setLit(false)}
      style={{ minWidth: 120 }}
    >
      {/* Lamp post above */}
      <svg
        width="40"
        height="48"
        viewBox="0 0 40 48"
        fill="none"
        aria-hidden="true"
        className="z-20"
      >
        <rect x="18" y="10" width="4" height="22" rx="2" fill="#444" />
        <ellipse cx="20" cy="14" rx="9" ry="5" fill="#888" />
        <circle cx="20" cy="22" r="5" fill={lit ? "#ffe066" : "#bbb"} />
        {lit && (
          <ellipse
            cx="20"
            cy="27"
            rx="13"
            ry="7"
            fill="#ffe066"
            fillOpacity="0.35"
            style={{ filter: "blur(2px)" }}
          />
        )}
      </svg>
      <svg
        width="80"
        height="54"
        viewBox="0 0 80 54"
        aria-hidden="true"
        className={`absolute top-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none transition-opacity duration-300 ${
          lit ? "opacity-80" : "opacity-0"
        }`}
        style={{ filter: "blur(1.5px)" }}
      >
        <defs>
          <radialGradient id="lamp-cone" cx="50%" cy="0%" r="100%">
            <stop offset="0%" stopColor="#fffbe6" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#ffe066" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffe066" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="40" cy="18" rx="32" ry="20" fill="url(#lamp-cone)" />
      </svg>
      <span
        className={`transition-colors duration-300 relative z-20 ${textClassName} ${
          lit ? "text-yellow-400 drop-shadow-[0_2px_12px_#ffe066cc]" : ""
        }`}
        style={{ marginTop: "-10px" }}
      >
        {children}
      </span>
    </span>
  );
}
