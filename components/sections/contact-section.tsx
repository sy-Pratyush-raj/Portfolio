import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactLinks } from "@/lib/data";
import { isExternalHref } from "@/lib/link";

export function ContactSection() {
  return (
    <section id="contact" className="section-frame section-spacing">
      <div className="container-shell">
        <Reveal>
          <div className="panel rounded-[2.2rem] p-8 md:p-10">
            <SectionHeading
              eyebrow="Contact"
              title="Open to internships, collaborations, and frontend opportunities."
              description="If your team values clean engineering, strong UI quality, and dependable execution, I&apos;d love to connect."
            />

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Link
                href="mailto:rockpratyushraj@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)] hover:shadow-[0_0_24px_rgba(167,243,208,0.3)]"
              >
                <Mail size={18} />
                rockpratyushraj@gmail.com
              </Link>

              <div className="flex flex-wrap gap-3">
                {contactLinks.map((link) => {
                  const external = isExternalHref(link.href);

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-3 text-sm text-[var(--muted)] transition hover:border-[var(--line-strong)] hover:text-[var(--foreground)]"
                    >
                      {link.label}
                      <ArrowUpRight size={16} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
