"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  id: string;
}

function HeroWires() {
  return (
    <svg
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      viewBox="0 0 1200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity: 0.45 }}
    >
      <defs>
        {/* Orange wire color */}
        <linearGradient id="wire-color" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#ff9800" />
          <stop offset="1" stopColor="#ff9800" />
        </linearGradient>
        {/* Mask for the trailing fade */}
        <linearGradient id="wire-mask-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Masks for each wire */}
        {[100, 160, 220, 280, 340].map((y, i) => (
          <mask id={`h-mask-${i}`} key={`h-mask-${i}`}>
            <rect
              y={y - 4}
              width="300"
              height="8"
              fill="url(#wire-mask-gradient)"
            >
              <animate
                attributeName="x"
                from="-300"
                to="1200"
                dur="2.5s"
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
              />
            </rect>
          </mask>
        ))}
        {[200, 400, 600, 800, 1000].map((x, i) => (
          <mask id={`v-mask-${i}`} key={`v-mask-${i}`}>
            <rect
              x={x - 4}
              width="8"
              height="300"
              fill="url(#wire-mask-gradient)"
            >
              <animate
                attributeName="y"
                from="-300"
                to="400"
                dur="2.5s"
                begin={`${i * 0.5 + 1.25}s`}
                repeatCount="indefinite"
              />
            </rect>
          </mask>
        ))}
      </defs>
      {/* Horizontal wires */}
      {[100, 160, 220, 280, 340].map((y, i) => (
        <rect
          key={`h-wire-${i}`}
          x="0"
          y={y}
          width="1200"
          height="8"
          rx="4"
          fill="url(#wire-color)"
          mask={`url(#h-mask-${i})`}
        />
      ))}
      {/* Vertical wires */}
      {[200, 400, 600, 800, 1000].map((x, i) => (
        <rect
          key={`v-wire-${i}`}
          x={x}
          y="0"
          width="8"
          height="400"
          rx="4"
          fill="url(#wire-color)"
          mask={`url(#v-mask-${i})`}
        />
      ))}
    </svg>
  );
}

export function HeroSection({ id }: HeroSectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary py-20 relative overflow-hidden"
    >
      {/* Animated SVG wire background */}
      <HeroWires />

      <div className="absolute inset-0 opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-accent z-10">
            <Image
              src="/Profile.jpg"
              alt="Sandarbh Bajpai - Professional Photograph"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <h1 className="wavy-gradient-text text-5xl md:text-7xl font-extrabold mb-4 tracking-tight z-10 relative">
            Sandarbh Bajpai
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-xl mx-auto z-10 relative">
            A passionate and creative professional dedicated to building
            impactful digital experiences.
          </p>
          <div className="space-x-4 z-10 relative">
            <Button
              asChild
              size="lg"
              className="orange-gradient-animated bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform"
            >
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="shadow-lg transform hover:scale-105 transition-transform border-primary text-primary hover:bg-primary/5"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block z-10">
        <ArrowDown className="w-8 h-8 text-accent" />
      </div>
    </section>
  );
}
