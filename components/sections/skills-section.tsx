"use client";

import { SkillPill } from "@/components/cards/skill-pill";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="section-frame section-spacing">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Toolkit"
            title="A focused stack for shipping clean, modern web products."
            description="I&apos;m strongest where UI quality, component architecture, and frontend implementation need to work together."
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
