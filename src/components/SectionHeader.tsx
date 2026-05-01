import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ label, title, description, centered = true }: SectionHeaderProps) => (
  <AnimatedSection className={`mb-10 md:mb-14 ${centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}`}>
    {label ? <span className="eyebrow mb-5">{label}</span> : null}
    <h2 className="mb-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:mb-5 md:text-5xl lg:text-6xl">
      {title}
    </h2>
    {description ? (
      <p className={`text-base leading-relaxed text-muted-foreground md:text-lg ${centered ? "mx-auto max-w-3xl" : "max-w-3xl"}`}>
        {description}
      </p>
    ) : null}
  </AnimatedSection>
);

export default SectionHeader;
