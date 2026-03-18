"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ShineBorderProps = {
  children: ReactNode;
  className?: string;
};

export function ShineBorder({ children, className = "" }: ShineBorderProps) {
  return (
    <div className={`group relative overflow-hidden rounded-[1.75rem] ${className}`}>
      <motion.div
        className="pointer-events-none absolute inset-x-[-35%] top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-80"
        animate={{ x: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 rounded-[inherit] border border-[var(--line)]" />
      <div className="relative rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
        {children}
      </div>
    </div>
  );
}
