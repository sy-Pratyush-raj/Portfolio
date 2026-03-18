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
      <div className="container-shell grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface-soft)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--muted)]"
          >
            <Sparkles size={14} className="text-[var(--accent)]" />
            Open to internships • security and cloud roles
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="space-y-5"
          >
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] md:text-7xl">
              Hi, I&apos;m Pratyush Raj
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Security analyst in training building reliable, modern web systems with secure architecture and strong UX.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Next.js
              </span>
              <span className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                TypeScript
              </span>
              <span className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Cloud + Security
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 text-center">
                  <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--foreground)]">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            <Link href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)]">
              View My Work
              <ArrowRight size={18} />
            </Link>
            <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-3 text-sm text-[var(--foreground)] transition hover:border-[var(--line-strong)] hover:bg-[var(--surface-muted)]">
              Let&apos;s Connect
            </Link>
          </div>
        </div>

        <div className="panel rounded-[2rem] border border-[var(--line)] bg-[var(--surface-soft)] p-4 md:p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">Professional Snapshot</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            <li>Secure front-end builds with performance-first best practices.</li>
            <li>Production deployments with maintainable architecture and observability.</li>
            <li>Product-focused delivery aligned with team and business goals.</li>
          </ul>
          <div className="mt-4 grid gap-2 text-left text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            <span className="rounded-full border border-[var(--line)] px-2 py-1">Ethical Hacking</span>
            <span className="rounded-full border border-[var(--line)] px-2 py-1">Cloud Security</span>
            <span className="rounded-full border border-[var(--line)] px-2 py-1">Rapid Iteration</span>
          </div>
        </div>
      </div>
    </section>
  );
}
