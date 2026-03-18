"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/data";

export function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.25, 0.5, 0.75]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress(window.scrollY / scrollHeight);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(246,248,252,0.85)] backdrop-blur-xl">
      <div className="container-shell flex h-[4.8rem] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] font-[family-name:var(--font-heading)] text-sm font-semibold tracking-[0.18em] text-[var(--foreground)]">
            PR
          </span>
          <span className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/90">
            Pratyush Raj
          </span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-2 py-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`relative rounded-full px-4 py-2 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)] ${
                active === item.id ? "text-[var(--foreground)]" : ""
              }`}
            >
              {active === item.id ? (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-[var(--surface-muted)]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              ) : null}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full border border-[var(--line-strong)] bg-[var(--surface-soft)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--line-strong)] hover:bg-[var(--surface-muted)]"
          >
            Let&apos;s connect
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-soft)] text-[var(--foreground)] md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[var(--surface-soft)]">
        <div
          className="h-full origin-left bg-gradient-to-r from-[var(--accent)] to-[var(--accent-warm)] transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="container-shell pb-4 md:hidden"
          >
            <div className="panel flex flex-col gap-2 rounded-[1.5rem] p-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm text-[var(--muted)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--foreground)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
