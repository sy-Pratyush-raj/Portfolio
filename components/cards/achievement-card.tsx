type AchievementCardProps = {
  title: string;
  description: string;
};

export function AchievementCard({ title, description }: AchievementCardProps) {
  return (
    <div className="panel rounded-[1.75rem] p-6">
      <div className="mb-4 h-px w-14 bg-gradient-to-r from-[var(--accent)] to-transparent" />
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{description}</p>
    </div>
  );
}
