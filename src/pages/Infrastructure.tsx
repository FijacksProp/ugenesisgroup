import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import SectionHeader from "@/components/SectionHeader";
import { infrastructureCapabilities, siteAssets } from "@/content/site";

const Infrastructure = () => (
  <Layout>
    <section className="section-shell">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
        <AnimatedSection direction="left">
          <span className="eyebrow mb-6">Infrastructure Platform</span>
          <h1 className="text-5xl font-semibold leading-none text-foreground md:text-7xl">
            Development, delivery, and operations designed as one connected discipline.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            UGENESIS is positioned to operate across the asset lifecycle with greater continuity,
            reducing the gaps that usually weaken project quality, schedule confidence, and
            long-term returns.
          </p>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card overflow-hidden">
            <img
              src={siteAssets.constructionIllustration}
              alt="Construction workforce illustration"
              className="h-[31rem] w-full object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto">
        <SectionHeader
          label="Capabilities"
          title="What the infrastructure layer is designed to handle"
          description="The platform story becomes more believable when it is translated into practical capabilities."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {infrastructureCapabilities.map((capability, index) => (
            <AnimatedSection key={capability} delay={index * 0.05}>
              <div className="premium-card h-full p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{capability}</p>
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
              src={siteAssets.craneDetail}
              alt="Crane detail showing large-scale infrastructure precision"
              className="h-full min-h-[24rem] w-full object-cover"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card p-8 md:p-10">
            <span className="eyebrow mb-6">Execution Quality</span>
            <h2 className="text-4xl font-semibold leading-none text-foreground md:text-5xl">
              Better outcomes come from fewer fractures in the chain of responsibility.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              The premium move for UGENESIS is not simply looking polished. It is expressing a
              model where development strategy, construction intelligence, and operating
              stewardship remain in dialogue from the first decision to the long-term asset phase.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <CTABanner headline="Bring an infrastructure brief, partnership idea, or delivery challenge to the table." />
  </Layout>
);

export default Infrastructure;
