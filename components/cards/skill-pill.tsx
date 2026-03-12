import type { LucideIcon } from "lucide-react";

type SkillPillProps = {
  name: string;
  level: string;
  icon: LucideIcon;
};

export function SkillPill({ name, level, icon: Icon }: SkillPillProps) {
  return (
    <div className="panel rounded-[1.5rem] p-4 transition hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(125,211,252,0.12)] text-[var(--accent)]">
          <Icon size={20} />
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          {level}
        </span>
      </div>
      <h3 className="mt-5 font-[family-name:var(--font-heading)] text-lg font-semibold text-white">{name}</h3>
    </div>
  );
}
