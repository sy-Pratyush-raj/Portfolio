import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications, certificationsSection } from "@/lib/data";
import { isActionableHref, isExternalHref } from "@/lib/link";

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
            const hasCertificateLink = isActionableHref(certification.href);
            const certificateExternal = isExternalHref(certification.href);

            return (
              <Reveal key={certification.title} delay={index * 0.08}>
                <div className="card-standard panel rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(167,243,208,0.12)] text-[var(--accent)]">
                    <Award size={20} />
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
                    {certification.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--foreground)]/80">{certification.issuer}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{certification.note}</p>
                  <div className="mt-auto pt-5">
                    {hasCertificateLink ? (
                      <Link
                        href={certification.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:bg-[var(--surface-muted)]"
                      >
                        {certification.linkLabel ?? "View Certificate"}
                        <ExternalLink size={16} />
                      </Link>
                    ) : (
                      <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--muted)]/70">
                        View Certificate
                        <ExternalLink size={16} />
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
