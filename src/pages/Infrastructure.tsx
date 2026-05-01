import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import SectionHeader from "@/components/SectionHeader";
import { infrastructureCapabilities, siteAssets, strategicDivisions } from "@/content/site";

const Infrastructure = () => (
  <Layout>
    <section className="section-shell">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:gap-10">
        <AnimatedSection direction="left">
          <span className="eyebrow mb-5 md:mb-6">Explore Divisions</span>
          <h1 className="text-[2.55rem] font-semibold leading-[1] text-foreground sm:text-5xl md:text-7xl">
            A portfolio of companies designed to grow independently and work together.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-7 md:text-lg">
            UGENESIS is building multiple divisions across physical and digital markets. Each
            division solves a specific problem, while the group connects them through shared
            leadership, intelligence, capital, and execution.
          </p>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="media-frame">
            <img
              src={siteAssets.constructionIllustration}
              alt="Construction workforce illustration"
              className="h-[20rem] w-full object-cover sm:h-[26rem] lg:h-[31rem]"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto">
        <SectionHeader
          label="Strategic Divisions"
          title="The UGENESIS portfolio is built as a connected enterprise system"
          description="This is the meaning behind Explore Divisions: a portfolio of systems we are building under one group."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {strategicDivisions.map((division, index) => (
            <AnimatedSection key={division.title} delay={index * 0.05}>
              <div className="premium-card hover-lift relative h-full overflow-hidden p-6">
                <div className="surface-line absolute left-0 right-0 top-0 h-px" />
                <p className="text-xs font-semibold uppercase text-primary" style={{ letterSpacing: "0.08em" }}>0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold leading-tight text-foreground md:mt-5 md:text-2xl">{division.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{division.description}</p>
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
              src={siteAssets.craneDetail}
              alt="Crane detail showing large-scale infrastructure precision"
              className="h-[18rem] w-full object-cover sm:h-[24rem] lg:h-full lg:min-h-[24rem]"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card h-full p-6 md:p-10">
            <span className="eyebrow mb-6">Execution Quality</span>
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              The group creates leverage by connecting what most companies keep separate.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Infrastructure, digital tools, talent systems, capital, and intelligence are not
              treated as isolated projects. They are built to support one another so the whole
              enterprise becomes stronger over time.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto">
        <SectionHeader
          label="Operating Capabilities"
          title="What the group is designed to build and coordinate"
          description="UGENESIS turns ideas into divisions, and divisions into a broader enterprise platform."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {infrastructureCapabilities.map((capability, index) => (
            <AnimatedSection key={capability} delay={index * 0.05}>
              <div className="premium-card hover-lift h-full p-5 sm:p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{capability}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CTABanner headline="Bring a venture, partnership idea, asset opportunity, or platform brief to UGENESIS." />
  </Layout>
);

export default Infrastructure;
