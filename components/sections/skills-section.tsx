import { SkillPill } from "@/components/cards/skill-pill";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Focused on modern frontend engineering."
            description="A balanced mix of interface engineering, product polish, and foundational computer science skills."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 0.05}>
              <SkillPill {...skill} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
