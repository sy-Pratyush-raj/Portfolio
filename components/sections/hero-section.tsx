"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { heroStats } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden section-spacing pb-16 pt-10 md:pt-16">
      <div className="container-shell grid items-start gap-10">
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
            <h1 className="font-[family-name:var(--font-heading)] text-5xl font-bold leading-[1.05] md:text-8xl">
              Hi, I&apos;m
              <br />
              <span className="block text-[var(--accent)]">Pratyush Raj</span>
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

          </motion.div>

          <div className="flex flex-wrap gap-2">
            <Link href="/resume" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)]">
              View Resume
            </Link>
            <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--foreground)] transition hover:border-[var(--line-strong)] hover:bg-[var(--surface-muted)]">
              Get in Touch
            </Link>
            <a href="https://github.com/sy-Pratyush-raj" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--foreground)] transition hover:border-[var(--line-strong)] hover:bg-[var(--surface-muted)]">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/pratyushraj09/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--foreground)] transition hover:border-[var(--line-strong)] hover:bg-[var(--surface-muted)]">
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
