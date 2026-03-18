import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { activities, activitiesSection } from "@/lib/data";

export function ActivitiesSection() {
  return (
    <section id="activities" className="section-frame section-spacing">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow={activitiesSection.eyebrow}
            title={activitiesSection.title}
            description={activitiesSection.description}
          />
        </Reveal>
        <div className="section-grid md:grid-cols-3">
          {activities.map((activity, index) => (
            <Reveal key={activity.title} delay={index * 0.08}>
              <div className="card-standard panel rounded-[1.75rem] p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">{activity.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{activity.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
