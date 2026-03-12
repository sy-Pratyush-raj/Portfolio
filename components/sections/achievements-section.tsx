import { AchievementCard } from "@/components/cards/achievement-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements, certifications } from "@/lib/data";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements"
            title="Proof of progress, learning, and credibility."
            description="Separate wins, certifications, and milestones so the portfolio reads like a strong professional profile."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <Reveal key={achievement.title} delay={index * 0.08}>
                <AchievementCard {...achievement} />
              </Reveal>
            ))}
          </div>

          <div className="space-y-5">
            {certifications.map((certification, index) => {
              const Icon = certification.icon;

              return (
                <Reveal key={certification.title} delay={index * 0.08 + 0.1}>
                  <div className="panel rounded-[1.75rem] p-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(125,211,252,0.12)] text-[var(--accent)]">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl font-semibold text-white">
                      {certification.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--foreground)]/80">{certification.issuer}</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{certification.note}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
