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
            title="Cloud and security engineering for reliable production systems."
            description="I combine cloud automation, secure architecture, and polished interfaces to deliver dependable product experiences."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="section-grid gap-5 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="panel rounded-[1.75rem] p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">About me</p>
              <h3 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-semibold text-[#0f172a]">Cloud engineer with a security-first mindset</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                I am focused on building secure cloud solutions, infrastructure as code, and defensive practices that scale. My core strength lies in turning security principles into practical deployments that are observable, resilient, and maintainable.
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                From environment hardening to automation pipelines, I drive a professional engineering workflow that supports rapid iterations without compromising system safety.
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="h-60 w-60 rounded-full border-4 border-[var(--accent)] bg-[var(--surface-soft)] p-2 shadow-xl overflow-hidden md:h-72 md:w-72">
                <img src="/profile-placeholder.jpeg" alt="Pratyush portrait" className="h-full w-full rounded-full object-cover" />
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="section-grid mt-8 lg:grid-cols-3">
            <article className="card-standard panel rounded-[1.75rem] p-6 lg:col-span-1">
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
