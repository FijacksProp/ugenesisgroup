import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ label, title, description, centered = true }: SectionHeaderProps) => (
  <AnimatedSection className={`mb-14 ${centered ? "text-center" : ""}`}>
    {label ? <span className="eyebrow mb-5">{label}</span> : null}
    <h2 className="mb-4 text-4xl font-semibold leading-none text-foreground md:text-5xl lg:text-6xl">
      {title}
    </h2>
    {description ? (
      <p className={`text-base leading-relaxed text-muted-foreground md:text-lg ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
        {description}
      </p>
    ) : null}
  </AnimatedSection>
);

export default SectionHeader;
