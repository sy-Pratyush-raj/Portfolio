import { AchievementCard } from "@/components/cards/achievement-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements, achievementsSection } from "@/lib/data";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-frame section-spacing">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow={achievementsSection.eyebrow}
            title={achievementsSection.title}
            description={achievementsSection.description}
          />
        </Reveal>

        <div className="section-grid md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={index * 0.08}>
              <AchievementCard {...achievement} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
