import Link from "next/link";

import { contactLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-shell flex flex-col gap-4 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>© 2026 Pratyush Raj. Built with Next.js and a motion-first UI system.</p>
        <div className="flex flex-wrap gap-4">
          {contactLinks.map((link) => (
            <Link key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
