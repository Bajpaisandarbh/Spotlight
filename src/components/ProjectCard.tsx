import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BookOpen } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full rounded-xl border-2 border-transparent hover:border-accent">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="project application"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl font-semibold mb-2 text-primary">
          {project.title}
        </CardTitle>
        <p className="text-foreground/80 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-accent/10 text-accent border-accent/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-wrap gap-2 justify-start">
        {project.liveDemoUrl && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="text-accent border-accent hover:bg-accent/10"
          >
            <Link
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="text-foreground/80 border-foreground/30 hover:bg-secondary"
          >
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {project.caseStudyUrl && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="text-foreground/80 border-foreground/30 hover:bg-secondary"
          >
            <Link
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="mr-2 h-4 w-4" /> Case Study
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
