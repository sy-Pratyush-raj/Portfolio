type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`mb-10 flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">{description}</p>
      </div>
    </div>
  );
}
