import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { activities } from "@/lib/data";

export function ActivitiesSection() {
  return (
    <section id="activities" className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Extracurriculars"
            title="Beyond coursework and project delivery."
            description="A good portfolio shows how you engage with the broader developer ecosystem, not only what you build."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {activities.map((activity, index) => (
            <Reveal key={activity.title} delay={index * 0.08}>
              <div className="panel rounded-[1.75rem] p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white">{activity.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{activity.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
