import { ProjectCard } from "@/components/cards/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-frame section-spacing">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Projects presented like case studies, not just screenshots."
            description="Each project highlights problem context, implementation approach, and frontend quality standards."
          />
        </Reveal>
        <div className="section-grid lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
