import { ProjectCard } from "@/components/cards/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, projectsSection } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-frame section-spacing">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow={projectsSection.eyebrow}
            title={projectsSection.title}
            description={projectsSection.description}
          />
        </Reveal>
        <div className="section-grid lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="h-full">
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
