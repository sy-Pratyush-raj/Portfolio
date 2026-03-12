import Link from "next/link";
import { ArrowLeft, BriefcaseBusiness, Download, GraduationCap, Sparkles, Trophy } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements, certifications, education, resumeExperience, skills } from "@/lib/data";

const resumeSections = [
  { title: "Education", icon: GraduationCap },
  { title: "Experience", icon: BriefcaseBusiness },
  { title: "Skills", icon: Sparkles },
  { title: "Achievements", icon: Trophy }
];

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="section-spacing">
        <div className="container-shell space-y-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-5">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-white">
                <ArrowLeft size={16} />
                Back to portfolio
              </Link>
              <SectionHeading
                eyebrow="Digital Resume"
                title="A structured resume page for hiring conversations."
                description="Replace the placeholders with your exact school, dates, experience, achievements, and verified credentials."
              />
            </div>
            <Link
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)]"
            >
              <Download size={18} />
              Download Resume PDF
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {resumeSections.map((section) => {
              const Icon = section.icon;

              return (
                <div key={section.title} className="panel rounded-[1.5rem] p-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(125,211,252,0.12)] text-[var(--accent)]">
                    <Icon size={18} />
                  </span>
                  <h2 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-white">{section.title}</h2>
                </div>
              );
            })}
          </div>

          <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="panel rounded-[1.75rem] p-7">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">Education</h2>
              <div className="mt-6 space-y-6">
                {education.map((item) => (
                  <div key={item.title} className="border-l border-white/10 pl-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">{item.period}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-[var(--foreground)]/80">{item.subtitle}</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="panel rounded-[1.75rem] p-7">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">Experience</h2>
                <div className="mt-6 space-y-6">
                  {resumeExperience.map((item) => (
                    <div key={item.title}>
                      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">{item.period}</span>
                      </div>
                      <p className="mt-1 text-sm text-[var(--foreground)]/80">{item.organization}</p>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel rounded-[1.75rem] p-7">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">Skills</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span key={skill.name} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[var(--muted)]">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-2">
            <div className="panel rounded-[1.75rem] p-7">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">Certifications</h2>
              <div className="mt-6 space-y-5">
                {certifications.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-[var(--foreground)]/80">{item.issuer}</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel rounded-[1.75rem] p-7">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">Achievements</h2>
              <div className="mt-6 space-y-5">
                {achievements.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
