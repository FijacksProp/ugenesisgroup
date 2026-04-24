import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import SectionHeader from "@/components/SectionHeader";
import { capabilityPillars, siteAssets } from "@/content/site";

const About = () => (
  <Layout>
    <section className="section-shell section-tight-mobile">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:gap-10">
        <AnimatedSection direction="left">
          <span className="eyebrow mb-5">About UGENESIS</span>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            A diversified enterprise model built for global relevance.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            UGENESIS is built around continuity between strategy, execution, operations, and
            capital. Our ambition is to operate multiple divisions through one clear leadership
            system that remains credible across regions.
          </p>
          <div className="mt-8 premium-card p-6 sm:p-7">
            <p className="text-xl font-semibold italic leading-tight text-foreground sm:text-2xl md:text-3xl">
              "We are building a unified enterprise platform, not a single-sector company."
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card overflow-hidden">
            <img
              src={siteAssets.skylineAbstract}
              alt="Abstract skyline visual supporting the UGENESIS global narrative"
              className="h-[22rem] w-full object-cover sm:h-[32rem]"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell section-tight-mobile">
      <div className="container mx-auto">
        <SectionHeader
          label="What Defines Us"
          title="Institutional thinking with integrated execution"
          description="UGENESIS is designed to remain composed and coordinated across multiple business lines."
        />
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {capabilityPillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.08}>
              <div className="premium-card h-full p-7 sm:p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-primary">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-semibold leading-none text-foreground">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-shell section-tight-mobile">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[0.95fr,1.05fr]">
        <AnimatedSection direction="left">
          <div className="premium-card overflow-hidden">
            <img
              src={siteAssets.heroConstruction}
              alt="Infrastructure and real-asset execution context"
              className="h-full min-h-[20rem] w-full object-cover sm:min-h-[26rem]"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card p-7 sm:p-8 md:p-10">
            <span className="eyebrow mb-6">Long View</span>
            <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
              The objective is long-term enterprise strength across sectors and regions.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              We are shaping an organization that can engage investors, operators, and strategic
              partners with clarity, quality, and operational composure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              The result should be a trusted platform for diversified growth, not a fragmented set
              of isolated initiatives.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <CTABanner headline="Explore how UGENESIS can support your next phase of growth, delivery, or expansion." />
  </Layout>
);

export default About;
