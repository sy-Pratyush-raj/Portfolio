"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type SkillPillProps = {
  name: string;
  level: string;
  icon: LucideIcon;
};

const levelWidths: Record<string, string> = {
  Advanced: "88%",
  Intermediate: "66%"
};

export function SkillPill({ name, level, icon: Icon }: SkillPillProps) {
  const progress = levelWidths[level] ?? "66%";

  return (
    <div className="card-standard panel rounded-[1.6rem] p-5 transition duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(167,243,208,0.12)] text-[var(--accent)]">
          <Icon size={20} />
        </span>
        <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          {level}
        </span>
      </div>
      <h3 className="mt-5 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
        {name}
      </h3>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[var(--surface-muted)]">
        <motion.div
          className="h-full origin-left rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-warm)]"
          style={{ width: progress }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
