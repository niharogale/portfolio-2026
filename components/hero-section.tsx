import { personalInfo } from "@/lib/portfolio-data";
import { SocialLinks } from "./social-links";

export function HeroSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-2xl">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {personalInfo.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-primary sm:text-2xl">
          {personalInfo.title}
        </p>
        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
