import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import SectionHeader from "@/components/SectionHeader";
import { companyDivisions, globalFocusAreas, siteAssets } from "@/content/site";

const Divisions = () => (
  <Layout>
    <section className="section-shell">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:gap-10">
        <AnimatedSection direction="left">
          <span className="eyebrow mb-5">Global Divisions</span>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            One enterprise platform coordinating multiple divisions with institutional discipline.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            UGENESIS is designed as a diversified organization where infrastructure, real estate,
            intelligence, and capital functions are aligned under one strategic direction.
          </p>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card overflow-hidden">
            <img
              src={siteAssets.skylineAbstract}
              alt="Global skyline abstraction"
              className="h-[22rem] w-full object-cover sm:h-[30rem]"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell section-tight-mobile">
      <div className="container mx-auto">
        <SectionHeader
          label="Portfolio"
          title="Core divisions working as a coordinated system"
          description="Each division has a clear mandate, while leadership and intelligence layers ensure coherence across the full enterprise."
        />
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {companyDivisions.map((division, index) => (
            <AnimatedSection key={division.title} delay={index * 0.05}>
              <div className="premium-card h-full p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.28em] text-primary">{division.id}</p>
                <h3 className="mt-4 text-2xl font-semibold leading-none text-foreground">{division.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{division.description}</p>
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
              src={siteAssets.aiEnergy}
              alt="Technology and intelligence visual"
              className="h-full min-h-[20rem] w-full object-cover sm:min-h-[24rem]"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card p-7 sm:p-8 md:p-10">
            <span className="eyebrow mb-6">Global Orientation</span>
            <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Built for cross-region partnerships and long-horizon growth.
            </h2>
            <div className="mt-7 space-y-4">
              {globalFocusAreas.map((focus) => (
                <p key={focus} className="border-t border-white/10 pt-4 text-sm leading-relaxed text-muted-foreground first:border-t-0 first:pt-0">
                  {focus}
                </p>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <CTABanner headline="Connect with UGENESIS on partnerships, expansion strategy, and division-level collaboration." />
  </Layout>
);

export default Divisions;
