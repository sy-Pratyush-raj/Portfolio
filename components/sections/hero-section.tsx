"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

import { heroData } from "@/lib/data";

export function HeroSection() {
  const iconMap = {
    Github,
    Linkedin,
    Mail
  } as const;
  const name = heroData.name;
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedName(name.slice(0, index));

      if (index >= name.length) {
        window.clearInterval(timer);
      }
    }, 90);

    return () => window.clearInterval(timer);
  }, [name]);

  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-10 md:pt-16">
      <div className="container-shell grid min-h-[calc(100vh-4.8rem)] items-center gap-10">
        <div className="mx-auto -mt-8 max-w-4xl space-y-8 text-center md:-mt-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="space-y-5"
          >
            <h1 className="font-[family-name:var(--font-heading)] text-5xl font-bold leading-[1.05] md:text-8xl">
              {heroData.intro}
              <br />
              <span className="inline-flex min-h-[1.1em] items-center justify-center text-[var(--accent)]">
                {typedName}
                <span className="ml-1 inline-block h-[0.9em] w-[2px] animate-pulse bg-[var(--accent)]" />
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              {heroData.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mx-auto grid w-full max-w-3xl gap-3 md:grid-cols-3"
          >
            {heroData.highlights.map((highlight) => (
              <div key={highlight.label} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{highlight.label}</p>
                <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">{highlight.value}</p>
              </div>
            ))}
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2">
            <Link
              href={heroData.actions.resumeHref}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)]"
            >
              {heroData.actions.resumeLabel}
            </Link>
            <Link
              href={heroData.actions.contactHref}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--foreground)] transition hover:border-[var(--line-strong)] hover:bg-[var(--surface-muted)]"
            >
              {heroData.actions.contactLabel}
            </Link>
            {heroData.socialLinks.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap] ?? Github;
              const isExternal = social.href.startsWith("http");

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-soft)] text-[var(--foreground)] transition hover:border-[var(--line-strong)] hover:bg-[var(--surface-muted)]"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

