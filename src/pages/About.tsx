import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import SectionHeader from "@/components/SectionHeader";
import { capabilityPillars, siteAssets } from "@/content/site";

const About = () => (
  <Layout>
    <section className="section-shell">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
        <AnimatedSection direction="left">
          <span className="eyebrow mb-6">About UGENESIS</span>
          <h1 className="text-5xl font-semibold leading-none text-foreground md:text-7xl">
            A premium operating model for serious infrastructure work.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            UGENESIS is being built around a simple belief: better assets come from tighter
            continuity between strategy, execution, operations, and capital stewardship.
          </p>
          <div className="mt-10 premium-card p-7">
            <p className="text-2xl font-semibold italic leading-tight text-foreground md:text-3xl">
              "We are shaping an operating system, not just another project vehicle."
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card overflow-hidden">
            <img
              src={siteAssets.skylineAbstract}
              alt="Abstract skyline visual supporting the UGENESIS brand story"
              className="h-[32rem] w-full object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto">
        <SectionHeader
          label="What Defines Us"
          title="Institutional thinking with a more integrated execution posture"
          description="UGENESIS is designed to feel measured, capable, and consistent across the full lifecycle of an asset."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {capabilityPillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.08}>
              <div className="premium-card h-full p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-primary">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-semibold leading-none text-foreground">{pillar.title}</h3>
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
          <div className="premium-card overflow-hidden">
            <img
              src={siteAssets.heroConstruction}
              alt="Construction skyline showing a real-world infrastructure context"
              className="h-full min-h-[26rem] w-full object-cover"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card p-8 md:p-10">
            <span className="eyebrow mb-6">Long View</span>
            <h2 className="text-4xl font-semibold leading-none text-foreground md:text-5xl">
              The ambition is durable relevance, not short-lived attention.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Our direction is to create a trusted layer for infrastructure partnerships,
              execution systems, and disciplined asset thinking. That requires quality in the
              work, clarity in the communication, and continuity in the operating model.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              The result should feel credible to investors, useful to operators, and reassuring to
              partners who need a team that can handle complexity without losing composure.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <CTABanner headline="Explore how UGENESIS can support your next phase of growth or delivery." />
  </Layout>
);

export default About;
