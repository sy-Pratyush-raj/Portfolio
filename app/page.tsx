import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative isolate overflow-hidden">
        <div className="grain-overlay" />
        <div className="absolute left-[-10rem] top-20 h-72 w-72 rounded-full bg-[var(--accent)]/8 blur-3xl" />
        <div className="absolute right-[-8rem] top-[32rem] h-80 w-80 rounded-full bg-[var(--accent-warm)]/10 blur-3xl" />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <AchievementsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
