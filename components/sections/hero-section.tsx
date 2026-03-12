"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";

import { heroHighlights } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden section-spacing">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[var(--muted)]"
          >
            <Sparkles size={16} className="text-[var(--accent)]" />
            Available for internships and impactful product work
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h1 className="max-w-4xl font-[family-name:var(--font-heading)] text-5xl font-semibold leading-[1.02] text-white md:text-7xl">
              Designing and building <span className="text-[var(--accent)]">modern digital products</span> with clean frontend systems.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              I&apos;m Pratyush Raj, a developer focused on elegant interfaces, scalable frontend architecture, and problem solving through code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)]"
            >
              Explore Projects
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Digital Resume
              <Download size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-3 sm:grid-cols-3"
          >
            {heroHighlights.map((item) => (
              <div key={item} className="panel rounded-[1.25rem] px-4 py-4 text-sm text-[var(--muted)]">
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.28),transparent_55%)] blur-2xl" />
          <div className="panel relative overflow-hidden rounded-[2rem] p-4">
            <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(125,211,252,0.12),transparent_40%,rgba(245,158,11,0.08))]" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[var(--background-soft)]">
              <Image
                src="/profile-placeholder.jpeg"
                alt="Developer portrait placeholder"
                width={720}
                height={880}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
