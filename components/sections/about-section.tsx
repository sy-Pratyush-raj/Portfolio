import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutStats } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="section-spacing">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A developer portfolio with product thinking."
            description="This structure is designed to be easy to customize later. Replace the copy, add real metrics, and keep the component system intact as your work grows."
          />
        </Reveal>
        <Reveal delay={0.1} className="space-y-6">
          <div className="panel rounded-[1.75rem] p-7">
            <p className="text-base leading-8 text-[var(--muted)]">
              I enjoy turning ideas into responsive, production-ready interfaces with a sharp focus on clarity, performance, and interaction quality. My current interests include frontend systems, scalable UI architecture, cloud engineering, and strong problem-solving foundations through DSA.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="panel rounded-[1.5rem] p-5">
                <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
