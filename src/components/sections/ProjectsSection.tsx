import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lightbulb, Construction } from "lucide-react";
import { getProjects } from "@/app/actions/projectActions";
import type { Project } from "@/lib/types";
import { LampPostWithSpotlight } from "@/components/LampPostWithSpotlight";

interface ProjectsSectionProps {
  id: string;
}

export async function ProjectsSection({ id }: ProjectsSectionProps) {
  const projects = await getProjects();

  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lamp Post Heading */}
        <div className="flex justify-center mb-4">
          <LampPostWithSpotlight textClassName="text-4xl font-bold text-primary">
            My Projects
          </LampPostWithSpotlight>
        </div>
        <p className="text-lg text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
          Here are some of the key projects I've worked on. Each project
          showcases my skills in developing robust and user-friendly
          applications.
        </p>
        {projects && projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="fade-in-section"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
            {/* Work in Progress / Behind the Scenes Card Hint */}
            <div
              className="fade-in-section md:col-span-1 lg:col-span-1 flex"
              style={{ animationDelay: `${projects.length * 0.15}s` }}
            >
              <div className="group bg-secondary p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-dashed border-accent/30 hover:border-accent flex flex-col justify-center items-center text-center w-full transform hover:scale-105">
                <Construction className="h-12 w-12 text-accent mb-4 transition-transform group-hover:rotate-12" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Always Building
                </h3>
                <p className="text-foreground/80 text-sm mb-4">
                  I'm constantly working on new ideas and improving my skills.
                  Check out my blog or GitHub for behind-the-scenes and upcoming
                  projects!
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="text-accent border-accent hover:bg-accent/10 mt-2"
                >
                  <Link href="https://github.com/Bajpaisandarbh/TaskManager">
                    <Lightbulb className="mr-2 h-4 w-4" />
                    See My Process
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-foreground/70">
              No projects to display at the moment. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
