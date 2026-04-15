import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import { investmentThemes, marketStats, siteAssets } from "@/content/site";

const Investment = () => (
  <Layout>
    <section className="section-shell">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[1fr,1fr]">
        <AnimatedSection direction="left">
          <span className="eyebrow mb-6">Investment Perspective</span>
          <h1 className="text-5xl font-semibold leading-none text-foreground md:text-7xl">
            A cleaner narrative for infrastructure, AI leverage, and real-asset value creation.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            UGENESIS is not framed around speculative excitement. The investment case is stronger
            when it is grounded in productive assets, operating leverage, and disciplined systems.
          </p>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card overflow-hidden">
            <img
              src={siteAssets.capitalStrategy}
              alt="Capital-themed visual representing long-horizon investment strategy"
              className="h-[31rem] w-full object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto">
        <SectionHeader
          label="Scale"
          title="A market context large enough to reward disciplined execution"
          description="The premium positioning becomes credible when the numbers are paired with a coherent operating system."
        />
        <div className="grid gap-6 lg:grid-cols-4">
          {marketStats.map((stat, index) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto">
        <SectionHeader
          label="Thesis"
          title="The investment story should feel composed, not overextended"
          description="We are positioning UGENESIS as a platform with multiple reinforcing layers rather than a single narrow revenue narrative."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {investmentThemes.map((theme, index) => (
            <AnimatedSection key={theme.title} delay={index * 0.08}>
              <div className="premium-card h-full p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-primary">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-semibold leading-none text-foreground">{theme.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{theme.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CTABanner headline="Request an investor or strategic partner conversation with the UGENESIS team." />
  </Layout>
);

export default Investment;
