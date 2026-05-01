import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

interface CTABannerProps {
  headline?: string;
  buttonText?: string;
  to?: string;
}

const CTABanner = ({
  headline = "Bring your next company, platform, asset, or partnership into the UGENESIS ecosystem.",
  buttonText = "Partner With UGENESIS",
  to = "/contact",
}: CTABannerProps) => (
  <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-24">
    <div className="container relative mx-auto px-0 text-center sm:px-6">
      <AnimatedSection>
        <div className="network-panel premium-card hero-glow hover-lift mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14 md:px-14">
          <span className="eyebrow mb-6">Next Step</span>
          <h2 className="relative z-10 mx-auto mb-7 max-w-3xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:mb-8 md:text-6xl">
            {headline}
          </h2>
          <Link
            to={to}
            className="btn-primary relative z-10 px-8"
          >
            {buttonText}
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTABanner;
