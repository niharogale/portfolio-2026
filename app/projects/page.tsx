import { projects } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/project-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "A showcase of my personal and professional projects.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A collection of projects I&apos;ve worked on, from full-stack applications
          to open-source tools. Each project represents a unique challenge and
          learning experience.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
