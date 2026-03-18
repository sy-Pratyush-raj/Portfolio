"use client";

import { SkillPill } from "@/components/cards/skill-pill";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills, skillsSection } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="section-frame section-spacing">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow={skillsSection.eyebrow}
            title={skillsSection.title}
            description={skillsSection.description}
          />
        </Reveal>
        <div className="section-grid mt-8 sm:grid-cols-2 xl:grid-cols-4">
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
