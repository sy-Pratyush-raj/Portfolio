import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactLinks } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <div className="panel rounded-[2rem] p-8 md:p-10">
            <SectionHeading
              eyebrow="Contact"
              title="Let&apos;s build something sharp and useful."
              description="This block is intentionally simple: easy to replace with your final email, social links, location, and calendaring options."
            />

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Link
                href="mailto:rockpratyushraj@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)]"
              >
                <Mail size={18} />
                rockpratyushraj@gmail.com
              </Link>

              <div className="flex flex-wrap gap-3">
                {contactLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-[var(--muted)] transition hover:border-white/20 hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
