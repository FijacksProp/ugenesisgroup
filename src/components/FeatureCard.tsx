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
    <div className="premium-card hover-lift group h-full p-8">
      {number ? <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.28em] text-primary">{number}</span> : null}
      {icon ? <div className="mb-4 text-primary">{icon}</div> : null}
      <h3 className="mb-3 text-2xl font-semibold leading-none text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  </AnimatedSection>
);

export default FeatureCard;
