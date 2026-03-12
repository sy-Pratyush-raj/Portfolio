import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "@/components/ui/timeline-item";
import { education } from "@/lib/data";

export function EducationSection() {
  return (
    <section id="education" className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic milestones presented as a clean timeline."
            description="Use this timeline for degrees, coursework, certifications, internships, and major transitions."
          />
        </Reveal>
        <div className="relative mt-10 space-y-6 before:absolute before:left-[0.45rem] before:top-0 before:h-full before:w-px before:bg-white/10">
          {education.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <TimelineItem {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
