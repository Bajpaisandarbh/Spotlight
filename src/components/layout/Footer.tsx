"use client";

import { Github, Linkedin, Twitter, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Added for potential chatbot button styling
import { useEffect, useState } from "react";

const socialLinks = [
  { Icon: Github, href: "https://github.com/Bajpaisandarbh", label: "GitHub" },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/sandarbh-bajpai/",
    label: "LinkedIn",
  },
  { Icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
  { Icon: Mail, href: "mailto:bajpaisandarbh@gmail.com", label: "Email" },
];

export function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChatButtonClick = () => {
    if (!isMounted) return; // Ensure client-side execution
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map(({ Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className="h-6 w-6 text-secondary-foreground hover:text-accent transition-colors" />
            </Link>
          ))}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sandarbh Bajpai. All rights
          reserved.
        </p>
        <p className="text-xs mt-1">Built with Next.js and Tailwind CSS.</p>
      </div>

      {isMounted && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-14 w-14 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-110 transition-transform"
            aria-label="Chat with me"
            onClick={handleChatButtonClick}
          >
            <MessageSquare className="h-7 w-7" />
          </Button>
        </div>
      )}
    </footer>
  );
}
