import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import { investmentThemes, marketStats, siteAssets } from "@/content/site";

const Investment = () => (
  <Layout>
    <section className="section-shell">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[1fr,1fr] lg:gap-10">
        <AnimatedSection direction="left">
          <span className="eyebrow mb-5 md:mb-6">Investment Perspective</span>
          <h1 className="text-[2.55rem] font-semibold leading-[1] text-foreground sm:text-5xl md:text-7xl">
            An enterprise platform where value is created through connected divisions.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-7 md:text-lg">
            UGENESIS is building a portfolio model. The investment story is not one product or one
            sector, but a group of companies, platforms, and assets designed to strengthen each
            other over time.
          </p>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="media-frame">
            <img
              src={siteAssets.capitalStrategy}
              alt="Capital-themed visual representing long-horizon investment strategy"
              className="h-[20rem] w-full object-cover sm:h-[26rem] lg:h-[31rem]"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto">
        <SectionHeader
          label="Scale"
          title="A platform structure built for multiple markets"
          description="The numbers on this site are not just vanity signals. They show that UGENESIS is being positioned as a multi-division group with room to build across regions, sectors, and business lines."
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
          title="The investment story is integration, not isolation"
          description="Like system-driven companies such as Alphabet, Microsoft, and Zoho, the value is created when products, assets, users, talent, and infrastructure reinforce one another."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {investmentThemes.map((theme, index) => (
            <AnimatedSection key={theme.title} delay={index * 0.08}>
              <div className="premium-card hover-lift relative h-full overflow-hidden p-6 md:p-8">
                <div className="surface-line absolute left-0 right-0 top-0 h-px" />
                <p className="text-xs font-semibold uppercase text-primary" style={{ letterSpacing: "0.08em" }}>0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold leading-tight text-foreground md:mt-5 md:text-2xl">{theme.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{theme.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CTABanner headline="Request an investor or strategic partner conversation with UGENESIS Group." />
  </Layout>
);

export default Investment;
