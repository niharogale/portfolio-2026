import { experiences } from "@/lib/portfolio-data";
import { ExperienceCard } from "./experience-card";

export function ExperienceSection() {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Experience
      </h2>
      <div className="flex flex-col gap-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
