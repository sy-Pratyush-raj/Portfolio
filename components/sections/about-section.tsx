import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutStats } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="section-frame section-spacing">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="I build interfaces that are clear for users and reliable for teams."
            description="I approach frontend engineering with a product mindset: clean architecture, thoughtful UX decisions, and implementation that scales beyond a demo."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="section-grid lg:grid-cols-3">
            <article className="card-standard panel rounded-[1.75rem] p-6 lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Profile Summary</p>
              <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
                I&apos;m a computer science student and frontend-focused developer who converts product ideas into polished, maintainable applications. I prioritize readable code, reusable components, responsive layouts, and smooth user journeys. Alongside frontend development, I continue strengthening backend and deployment skills so I can contribute across the full delivery cycle.
              </p>
            </article>

            <article className="card-standard panel rounded-[1.75rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Working Style</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                <li>Design with clarity before complexity.</li>
                <li>Ship reusable and maintainable UI blocks.</li>
                <li>Keep performance and usability measurable.</li>
              </ul>
            </article>

            {aboutStats.map((stat) => (
              <article key={stat.label} className="card-standard panel rounded-[1.75rem] p-6">
                <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--foreground)]">{stat.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">{stat.label}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
