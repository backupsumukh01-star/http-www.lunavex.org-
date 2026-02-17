interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className="font-heading text-3xl font-semibold text-[#E6E8F0] md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[#9AA0B5]">{subtitle}</p>
      )}
    </div>
  );
}
