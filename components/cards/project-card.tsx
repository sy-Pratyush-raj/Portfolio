"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

import { ShineBorder } from "@/components/magicui/shine-border";

type ProjectCardProps = {
  title: string;
  summary: string;
  tags: readonly string[];
  href: string;
  repo: string;
  image: string;
};

export function ProjectCard({ title, summary, tags, href, repo, image }: ProjectCardProps) {
  return (
    <motion.article whileHover={{ y: -8 }} transition={{ duration: 0.25, ease: "easeOut" }}>
      <ShineBorder className="h-full">
        <div className="panel flex h-full flex-col rounded-[1.75rem] p-4">
          <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[var(--background-soft)]">
            <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className="flex flex-1 flex-col gap-4 p-2">
            <div className="space-y-2">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm leading-7 text-[var(--muted)]">{summary}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--muted)]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-3 pt-2 text-sm">
              <Link
                href={href}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)]"
              >
                Live Preview
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href={repo}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[var(--muted)] transition hover:border-white/20 hover:text-white"
              >
                Code
                <Github size={16} />
              </Link>
            </div>
          </div>
        </div>
      </ShineBorder>
    </motion.article>
  );
}
