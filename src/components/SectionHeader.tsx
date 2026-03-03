interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  const titleColor = light ? "text-white" : "text-[#0D1F5C]";
  const subtitleColor = light ? "text-white/70" : "text-[#6B7A9A]";
  const alignment = centered ? "text-center" : "text-left";

  return (
    <div className={`${alignment} ${centered ? "max-w-3xl mx-auto" : ""}`}>
      {eyebrow && (
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase text-[#00C2FF] mb-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.12em" }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold leading-tight ${titleColor}`}
        style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${subtitleColor}`}
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
