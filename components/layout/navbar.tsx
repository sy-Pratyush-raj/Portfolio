"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/data";

export function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(5,11,20,0.72)] backdrop-blur-xl">
      <div className="container-shell flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-lg font-semibold tracking-[0.18em] text-white uppercase">
          Pratyush
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`relative rounded-full px-4 py-2 text-sm text-[var(--muted)] transition hover:text-white ${
                active === item.id ? "text-white" : ""
              }`}
            >
              {active === item.id ? (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white/10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              ) : null}
              {item.label}
            </Link>
          ))}
          <Link
            href="/resume"
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)]"
          >
            Resume
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
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
                  className="rounded-2xl px-4 py-3 text-sm text-[var(--muted)] transition hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/resume"
                className="rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-slate-950"
                onClick={() => setOpen(false)}
              >
                Digital Resume
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
