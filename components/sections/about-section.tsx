import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { aboutSection, aboutStats } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="section-frame section-spacing">
      <div className="container-shell">
        {/* <Reveal>
          {aboutSection.sectionHeading.title ? (
            <SectionHeading
              eyebrow={aboutSection.sectionHeading.eyebrow}
              title={aboutSection.sectionHeading.title}
              description={aboutSection.sectionHeading.description}
            />
          ) : (
            <div className="mb-10 flex max-w-3xl flex-col gap-4 md:mb-12 md:gap-5">
              <span className="inline-flex w-fit rounded-full border border-[var(--line-strong)] bg-[var(--surface-soft)] px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[var(--accent-warm)]">
                {aboutSection.sectionHeading.eyebrow}
              </span>
              <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base md:leading-8">
                {aboutSection.sectionHeading.description}
              </p>
            </div>
          )}
        </Reveal> */}

        <Reveal delay={0.1}>
          <div className="section-grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="panel rounded-[1.75rem] p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                {aboutSection.aboutCard.tag}
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                {aboutSection.aboutCard.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {aboutSection.aboutCard.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {aboutSection.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] text-[var(--foreground)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="h-72 w-72 rounded-full border-4 border-[var(--accent)] bg-[var(--surface-soft)] p-2 shadow-xl overflow-hidden md:h-80 md:w-80">
                <Image
                  src="/profile-placeholder.jpeg"
                  alt="Pratyush portrait"
                  width={320}
                  height={320}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="section-grid mt-10 lg:grid-cols-3">
            {aboutStats.map((stat) => (
              <article
                key={stat.label}
                className="panel rounded-[1.5rem] p-6 text-center"
              >
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-[var(--muted)]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
