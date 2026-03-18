import Link from "next/link";

import { contactLinks } from "@/lib/data";
import { isExternalHref } from "@/lib/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="container-shell flex flex-col gap-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <p>&copy; 2026 Pratyush Raj. Designed and built with Next.js.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {contactLinks.map((link) => {
            const external = isExternalHref(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="font-medium transition hover:text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
