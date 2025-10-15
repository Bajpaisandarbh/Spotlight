"use client";
import type { TimelineEvent } from "@/lib/types";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";
import Image from "next/image";
import { InteractiveTimelineItem } from "@/components/InteractiveTimelineItem";

const skillsData = [
  {
    name: "JavaScript",
    iconSrc: "/assets/icons/javascript.svg", // Path to your SVG
  },
  {
    name: "TypeScript",
    iconSrc: "/assets/icons/typescript.svg", // Path to your SVG
  },
  {
    name: "React",
    iconSrc: "/assets/icons/react.svg", // Path to your SVG
  },
  {
    name: "Next.js",
    iconSrc: "/assets/icons/nextdotjs.svg", // Path to your SVG
  },
  {
    name: "Node.js",
    iconSrc: "/assets/icons/nodedotjs.svg", // Path to your SVG
  },
  {
    name: "Java",
    iconSrc: "/assets/icons/codecrafters.svg", // Path to your SVG
  },
  {
    name: "HTML",
    iconSrc: "/assets/icons/html5.svg", // Path to your SVG
  },
  {
    name: "MongoDB",
    iconSrc: "/assets/icons/mongodb.svg", // Path to your SVG
  },
  {
    name: "PostgreSQL",
    iconSrc: "/assets/icons/postgresql.svg", // Path to your SVG
  },
  {
    name: "GitHub",
    iconSrc: "/assets/icons/github.svg", // Path to your SVG
  },
  {
    name: "REST APIs",
    iconSrc: "/assets/icons/fastapi.svg", // Path to your SVG
  },
  {
    name: "Express.js",
    iconSrc: "/assets/icons/nodedotjs.svg", // Path to your SVG
  },
  {
    name: "Figma",
    iconSrc: "/assets/icons/figma.svg", // Path to your SVG
  },
  {
    name: "Tailwind CSS",
    iconSrc: "/assets/icons/tailwindcss.svg", // Path to your SVG
  },
  {
    name: "Bootstrap",
    iconSrc: "/assets/icons/bootstrap.svg", // Path to your SVG
  },
  {
    name: "Nest JS",
    iconSrc: "/assets/icons/nestjs.svg", // Path to your SVG
  },
  {
    name: ".NET",
    iconSrc: "/assets/icons/dotnet.svg", // Path to your SVG
  },
  {
    name: "CSS",
    iconSrc: "/assets/icons/css.svg", // Path to your SVG
  },
  {
    name: "C",
    iconSrc: "/assets/icons/c.svg", // Path to your SVG
  },
  {
    name: "Git",
    iconSrc: "/assets/icons/git.svg", // Path to your SVG
  },
  {
    name: "MySQL",
    iconSrc: "/assets/icons/mysql.svg", // Path to your SVG
  },
];

const timelineData: TimelineEvent[] = [
  {
    id: "1",
    date: "2022 - 2026",
    title: "Bachelor's Degree in Computer Science",
    description:
      "Currently studying in 3rd year, focusing on software development, AI and ML, and fullstack development.",
    icon: GraduationCap,
  },
  {
    id: "2",
    date: "9th June 2024 - 9th July 2024",
    title: "Frontend Intern at Indibus Software Solutions Pvt. Ltd.",
    description:
      "Contributed to frontend development, API integration, and performance improvements for an e-commerce site.",
    icon: Rocket,
  },
];

interface AboutSectionProps {
  id: string;
}

export function AboutSection({ id }: AboutSectionProps) {
  return (
    <section id={id} className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary wavy-text fade-in-section">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* Left Column for Text Content */}
          <div className="md:col-span-3 space-y-8 slide-in-left">
            {/* Professional Background */}
            <div style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-semibold mb-4 text-primary flex items-center">
                <Briefcase className="mr-3 h-7 w-7 text-accent" />
                Professional Background
              </h3>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                I am a motivated Computer Science graduate and Full-Stack
                Developer with a solid foundation in technologies like Java,
                JavaScript, React, and Node.js, along with experience in
                database systems including MongoDB and PostgreSQL. My
                professional background includes hands-on development experience
                from my e-commerce internship and building impactful projects
                such as AI-powered recruitment tools and a crime helpline
                system, demonstrating my ability to deliver end-to-end software
                solutions.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I have a strong background in full-stack development, with
                expertise in modern JavaScript frameworks like React and
                Next.js, as well as backend technologies such as Node.js. I
                thrive in collaborative environments and am adept at translating
                business requirements into effective technical solutions.
              </p>
            </div>

            {/* Personal Bio */}
            <div style={{ animationDelay: "0.4s" }}>
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-primary">
                Personal Bio
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Balancing my dedication to software development with personal
                interests is key for me. Away from the keyboard, I love playing
                badminton, discovering new music, and relaxing with video games
                – activities that help me stay sharp and maintain a healthy
                perspective.
              </p>
            </div>

            {/* Static Skills Section */}
            <div style={{ animationDelay: "0.6s" }}>
              <h3 className="text-2xl font-semibold mt-8 mb-6 text-primary">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                {skillsData.map((skill, idx) => (
                  <span
                    key={`${skill.name}-${idx}`}
                    className="skill-pill flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border hover:border-accent transition-colors"
                  >
                    <Image
                      src={skill.iconSrc || "/assets/icons/default-icon.svg"}
                      alt={skill.name}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column for Timeline */}
          <div
            className="md:col-span-2 slide-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              My Journey
            </h3>
            <ul role="list" className="space-y-0">
              {timelineData.map((event, index) => (
                <div
                  key={event.id}
                  className="fade-in-section"
                  style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                >
                  <InteractiveTimelineItem
                    event={event}
                    isLast={index === timelineData.length - 1}
                  />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
