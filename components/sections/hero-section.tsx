"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";

import { contactLinks, heroHighlights, heroStats } from "@/lib/data";
import { isExternalHref } from "@/lib/link";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail
} as const;

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden section-spacing pb-16 pt-10 md:pt-16">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--muted)]"
          >
            <Sparkles size={16} className="text-[var(--accent)]" />
            Open to internships, freelance work, and ambitious product teams
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-7"
          >
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
                Pratyush Raj | Developer Portfolio
              </p>
              <h1 className="max-w-4xl font-[family-name:var(--font-heading)] text-5xl font-semibold leading-[0.98] text-[var(--foreground)] md:text-7xl">
                I build <span className="text-[var(--accent)]">professional web experiences</span> with sharp UI, thoughtful structure, and reliable frontend engineering.
              </h1>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              I&apos;m a computer science student focused on creating polished digital products with Next.js, TypeScript, and strong attention to usability, responsiveness, and code quality.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-[var(--line-strong)] bg-[var(--surface-soft)] px-5 py-5"
                >
                  <p className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--foreground)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="panel rounded-[2rem] p-5 md:max-w-2xl">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                    What I bring
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    A strong base in DSA, a growing full-stack mindset, and an eye for interfaces that feel clear, modern, and production-ready.
                  </p>
                </div>
                <div className="h-px w-full bg-[var(--surface-muted)] md:h-auto md:w-px" />
                <div className="grid gap-3 text-sm text-[var(--muted)]">
                  {heroHighlights.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)] hover:shadow-[0_0_20px_rgba(37,99,235,0.24)]"
            >
              Explore Projects
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface-soft)] px-6 py-3.5 text-[var(--foreground)] transition hover:border-[var(--line-strong)] hover:bg-[var(--surface-muted)]"
            >
              View Resume
              <Download size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            {contactLinks.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons];
              if (!Icon) return null;
              const external = isExternalHref(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface-soft)] px-4 py-2.5 text-sm text-[var(--muted)] transition hover:border-[var(--line-strong)] hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
                >
                  <Icon size={16} />
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--accent)]/24 via-transparent to-[var(--accent-warm)]/18 blur-[90px]" />

          <div className="panel relative overflow-hidden rounded-[2.5rem] border border-[var(--line)] shadow-[0_20px_45px_rgba(15,23,42,0.14)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_36%),linear-gradient(180deg,transparent,rgba(15,23,42,0.04))]" />
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/profile-placeholder.jpeg"
                alt="Developer portrait placeholder"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[var(--line)]" />
            </div>

            <div className="absolute inset-x-5 bottom-5 rounded-[1.6rem] border border-[var(--line)] bg-[rgba(255,255,255,0.82)] p-4 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                Current focus
              </p>
              <p className="mt-2 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
                Product-minded frontend development
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Building portfolio-grade interfaces with stronger visual hierarchy, cleaner components, and maintainable code.
              </p>
            </div>
          </div>

          <div className="panel absolute -left-8 top-10 hidden max-w-[12rem] rounded-[1.5rem] p-4 lg:block">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Strength
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Clean implementation with attention to usability and detail.
            </p>
          </div>

          <div className="panel absolute -right-8 bottom-12 hidden max-w-[13rem] rounded-[1.5rem] p-4 lg:block">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Focus
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Shipping modern interfaces that feel premium and trustworthy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
