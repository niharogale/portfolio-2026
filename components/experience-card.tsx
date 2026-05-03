import { ExternalLink } from "lucide-react";
import type { Experience } from "@/lib/portfolio-data";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <h3 className="text-lg font-semibold text-foreground">
              {experience.role}
            </h3>
            {experience.companyUrl && (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={`Visit ${experience.company} website`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
          <p className="mb-1 text-primary">{experience.company}</p>
          <p className="text-sm text-muted-foreground">{experience.period}</p>
        </div>
      </div>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        {experience.description}
      </p>
    </div>
  );
}
