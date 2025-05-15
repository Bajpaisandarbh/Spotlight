import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { PersonalDetailsSection } from "@/components/sections/PersonalDetailsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection id="home" />
      <AboutSection id="about" />
      <ProjectsSection id="projects" />
      <TestimonialsSection id="testimonials" />
      <ResumeSection id="resume" />
      <BlogSection id="blog" />
      <PersonalDetailsSection id="personal-details" />
      <ContactSection id="contact" />
    </div>
  );
}
