import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { education, educationSection } from "@/lib/data";

export function EducationSection() {
  return (
    <section id="education" className="section-frame section-spacing">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow={educationSection.eyebrow}
            title={educationSection.title}
            description={educationSection.description}
          />
        </Reveal>
        <div className="section-grid md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="card-standard panel rounded-[1.75rem] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">{item.period}</p>
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--foreground)]/80">{item.subtitle}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
