"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LampPostWithSpotlight } from "@/components/LampPostWithSpotlight";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#testimonials" },
  { label: "Resume", href: "#resume" },
  { label: "Blog", href: "#blog" },
  { label: "Details", href: "#personal-details" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = "";
      navItems.forEach((item) => {
        const section = document.getElementById(item.href.substring(1));
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSection = item.href;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ onItemClick }: { onItemClick?: () => void }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={() => {
            setActiveSection(item.href);
            if (onItemClick) onItemClick();
          }}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
            ${
              activeSection === item.href
                ? "text-accent"
                : "text-foreground/80 hover:text-foreground"
            }`}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${
        isScrolled
          ? "bg-background/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand with LampPost and Spotlight */}
          <Link
            href="#home"
            className="flex items-center gap-2 transition-colors relative"
            onClick={() => setActiveSection("#home")}
            style={{ minWidth: 120 }}
            scroll={false}
            aria-label="Go to home"
          >
            <LampPostWithSpotlight textClassName="text-2xl font-bold text-primary">
              Spotlight
            </LampPostWithSpotlight>
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            <NavLinks />
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background">
                <nav className="flex flex-col space-y-4 mt-8">
                  <NavLinks onItemClick={() => setMobileMenuOpen(false)} />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
