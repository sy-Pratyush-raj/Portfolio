type TimelineItemProps = {
  period: string;
  title: string;
  subtitle: string;
  detail: string;
};

export function TimelineItem({ period, title, subtitle, detail }: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      <span className="absolute left-0 top-1 h-4 w-4 rounded-full border border-[var(--accent)] bg-[var(--background)]" />
      <div className="panel rounded-[1.5rem] p-5">
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">{period}</p>
        <h3 className="mt-3 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">{title}</h3>
        <p className="mt-1 text-sm text-[var(--foreground)]/80">{subtitle}</p>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{detail}</p>
      </div>
    </div>
  );
}
