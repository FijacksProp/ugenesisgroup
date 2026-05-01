import AnimatedSection from "./AnimatedSection";

interface FeatureCardProps {
  icon?: React.ReactNode;
  number?: string;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, number, title, description, delay = 0 }: FeatureCardProps) => (
  <AnimatedSection delay={delay}>
    <div className="premium-card hover-lift group relative h-full overflow-hidden p-6 sm:p-7">
      <div className="surface-line absolute left-0 right-0 top-0 h-px" />
      <div className="mb-6 flex items-center justify-between gap-4">
        {number ? <span className="text-xs font-semibold uppercase text-primary">{number}</span> : null}
        {icon ? (
          <div className="tech-icon flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-primary">
            {icon}
          </div>
        ) : null}
      </div>
      <h3 className="mb-3 text-xl font-semibold leading-tight text-foreground sm:text-2xl">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  </AnimatedSection>
);

export default FeatureCard;
