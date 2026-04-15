import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

interface CTABannerProps {
  headline?: string;
  buttonText?: string;
  to?: string;
}

const CTABanner = ({
  headline = "Bring your next project, partnership, or capital conversation into one sharper system.",
  buttonText = "Contact UGENESIS",
  to = "/contact",
}: CTABannerProps) => (
  <section className="relative overflow-hidden py-24">
    <div className="container relative mx-auto px-6 text-center">
      <AnimatedSection>
        <div className="premium-card hero-glow mx-auto max-w-4xl px-8 py-14 md:px-14">
          <span className="eyebrow mb-6">Next Step</span>
          <h2 className="mx-auto mb-8 max-w-3xl text-4xl font-semibold leading-none text-foreground md:text-6xl">
            {headline}
          </h2>
          <Link
            to={to}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:shadow-lg"
          >
            {buttonText}
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTABanner;
