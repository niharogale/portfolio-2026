import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80">
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
          {project.githubUrl && (<a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Github className="h-5 w-5" />
          </a>)}
        </div>
      </div>
      <p className="mb-4 flex-1 leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
