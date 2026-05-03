import { HeroSection } from "@/components/hero-section";
import { ExperienceSection } from "@/components/experience-section";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      <HeroSection />
      <ExperienceSection />
    </main>
  );
}
