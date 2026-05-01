import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import SectionHeader from "@/components/SectionHeader";
import { capabilityPillars, missionVision, siteAssets } from "@/content/site";

const About = () => (
  <Layout>
    <section className="section-shell">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:gap-10">
        <AnimatedSection direction="left">
          <span className="eyebrow mb-5 md:mb-6">About UGENESIS</span>
          <h1 className="text-[2.55rem] font-semibold leading-[1] text-foreground sm:text-5xl md:text-7xl">
            A venture studio for building companies, platforms, and asset-backed systems.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-7 md:text-lg">
            UGENESIS is a company that builds companies. We create and coordinate multiple
            divisions across infrastructure, intelligence, capital, talent, and digital systems.
          </p>
          <div className="mt-8 premium-card relative overflow-hidden p-6 md:mt-10 md:p-7">
            <div className="surface-line absolute left-0 right-0 top-0 h-px" />
            <p className="text-xl font-semibold italic leading-tight text-foreground sm:text-2xl md:text-3xl">
              "We are not building one product. We are building a connected enterprise ecosystem."
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="media-frame">
            <img
              src={siteAssets.skylineAbstract}
              alt="Abstract skyline visual supporting the UGENESIS brand story"
              className="h-[20rem] w-full object-cover sm:h-[26rem] lg:h-[32rem]"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto">
        <SectionHeader
          label="What Defines Us"
          title="One group, many divisions, one connected operating system"
          description="The group is structured so each business can grow independently while still benefiting from shared strategy, intelligence, capital, and brand strength."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {capabilityPillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.08}>
              <div className="premium-card hover-lift relative h-full overflow-hidden p-6 md:p-8">
                <div className="surface-line absolute left-0 right-0 top-0 h-px" />
                <p className="text-xs font-semibold uppercase text-primary" style={{ letterSpacing: "0.08em" }}>0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold leading-tight text-foreground md:mt-5 md:text-2xl">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[0.95fr,1.05fr]">
        <AnimatedSection direction="left">
          <div className="media-frame">
            <img
              src={siteAssets.heroConstruction}
              alt="Construction skyline showing a real-world infrastructure context"
              className="h-[18rem] w-full object-cover sm:h-[24rem] lg:h-full lg:min-h-[26rem]"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card h-full p-6 md:p-10">
            <span className="eyebrow mb-6">Long View</span>
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              Our identity is networked because our company is networked.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              The nodes represent companies, platforms, assets, and divisions. The connections
              represent shared data, capital, people, strategy, and control. The center represents
              UGENESIS Group as the orchestrator of the full ecosystem.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              This gives partners and investors a simple message: UGENESIS creates value through
              integration, not isolation.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto grid gap-6 md:grid-cols-2">
        {missionVision.map((item, index) => (
          <AnimatedSection key={item.title} delay={index * 0.08}>
            <div className="premium-card hover-lift h-full p-6 md:p-8">
              <p className="text-xs font-semibold uppercase text-primary" style={{ letterSpacing: "0.08em" }}>{item.title}</p>
              <p className="mt-4 text-xl font-semibold leading-tight text-foreground sm:text-2xl md:mt-5">{item.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    <CTABanner headline="Explore how UGENESIS can build, connect, or scale the next venture with you." />
  </Layout>
);

export default About;
