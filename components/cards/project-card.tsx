"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

import { ShineBorder } from "@/components/magicui/shine-border";
import { isActionableHref, isExternalHref } from "@/lib/link";

type ProjectCardProps = {
  title: string;
  summary: string;
  tags: readonly string[];
  href: string;
  repo: string;
  image: string;
};

export function ProjectCard({ title, summary, tags, href, repo, image }: ProjectCardProps) {
  const hasLivePreview = isActionableHref(href);
  const hasRepository = isActionableHref(repo);
  const livePreviewExternal = isExternalHref(href);
  const repositoryExternal = isExternalHref(repo);

  return (
    <motion.article className="h-full" whileHover={{ y: -8 }} transition={{ duration: 0.25, ease: "easeOut" }}>
      <ShineBorder className="h-full">
        <div className="card-standard group panel flex h-full flex-col rounded-[1.9rem] p-4">
          <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-[1.35rem] border border-[var(--line)] bg-[var(--background-soft)]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.88)] via-transparent to-transparent" />
            <div className="absolute left-4 top-4 rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.85)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Featured
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 p-2">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Case Study Snapshot</p>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">{title}</h3>
              <p className="text-sm leading-7 text-[var(--muted)]">{summary}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-1 text-xs text-[var(--muted)]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-3 pt-2 text-sm">
              {hasLivePreview ? (
                <Link
                  href={href}
                  target={livePreviewExternal ? "_blank" : undefined}
                  rel={livePreviewExternal ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 font-semibold text-slate-950 transition hover:bg-[var(--accent-strong)]"
                >
                  Live Preview
                  <ArrowUpRight size={16} />
                </Link>
              ) : (
                <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-[var(--surface-muted)] px-4 py-2 font-semibold text-[var(--muted)]">
                  Case Study Soon
                </span>
              )}

              {hasRepository ? (
                <Link
                  href={repo}
                  target={repositoryExternal ? "_blank" : undefined}
                  rel={repositoryExternal ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-[var(--muted)] transition hover:border-[var(--line-strong)] hover:text-[var(--foreground)]"
                >
                  Code
                  <Github size={16} />
                </Link>
              ) : (
                <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-[var(--muted)]/60">
                  Repo on request
                </span>
              )}
            </div>
          </div>
        </div>
      </ShineBorder>
    </motion.article>
  );
}
