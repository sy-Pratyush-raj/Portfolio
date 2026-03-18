import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications, certificationsSection } from "@/lib/data";

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-frame section-spacing">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow={certificationsSection.eyebrow}
            title={certificationsSection.title}
            description={certificationsSection.description}
          />
        </Reveal>

        <div className="section-grid md:grid-cols-2">
          {certifications.map((certification, index) => {
            const Icon = certification.icon;

            return (
              <Reveal key={certification.title} delay={index * 0.08}>
                <div className="card-standard panel rounded-[1.75rem] p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(167,243,208,0.12)] text-[var(--accent)]">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
                    {certification.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--foreground)]/80">{certification.issuer}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{certification.note}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
