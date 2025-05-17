import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Spotlight - Sandarbh's Portfolio",
  description:
    "Spotlight is my personal portfolio . I am a passionate full-stack developer and technology enthusiast. This interactive site showcases my projects, technical skills, achievements, and blog insights, all brought to life with modern design, engaging animations, and a focus on user experience. Built with Next.js, Tailwind CSS, and MongoDB, Spotlight is more than a resume: it’s a living, evolving reflection of my journey in software development, creativity, and continuous learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="pt-16 bg-background text-foreground">
            {" "}
            {/* Apply bg/text here so theme provider can manage it */}
            {children}
          </div>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
