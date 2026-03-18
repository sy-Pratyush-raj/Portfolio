type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description="",
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`mb-10 flex max-w-3xl flex-col gap-4 md:mb-12 md:gap-5 ${alignment}`}>
      <span className="inline-flex rounded-full border border-[var(--line-strong)] bg-[var(--surface-soft)] px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[var(--accent-warm)]">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="max-w-3xl font-[family-name:var(--font-heading)] text-[2rem] font-semibold tracking-tight leading-[1.08] text-[var(--foreground)] md:text-[3.2rem]">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base md:leading-8">{description}</p>
      </div>
    </div>
  );
}
