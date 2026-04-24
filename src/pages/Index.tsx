import { ArrowRight, Bot, Building2, Globe2, Landmark, Orbit, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import FeatureCard from "@/components/FeatureCard";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import {
  capabilityPillars,
  companyDivisions,
  globalFocusAreas,
  marketStats,
  operatingSystemPoints,
  siteAssets,
} from "@/content/site";

const Index = () => (
  <Layout>
    <section className="section-shell section-tight-mobile">
      <div className="container mx-auto grid items-end gap-8 lg:grid-cols-[1.12fr,0.88fr] lg:gap-10">
        <AnimatedSection direction="left">
          <span className="eyebrow mb-5">UGENESIS Group</span>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-[5.1rem] lg:leading-[0.95]">
            A diversified global platform across infrastructure, assets, intelligence, and capital.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            UGENESIS is structured to operate beyond a single sector. We coordinate multiple
            divisions under one disciplined leadership model designed for long-horizon growth,
            strategic partnerships, and institutional confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              to="/divisions"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Explore Divisions
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/50"
            >
              Partner With UGENESIS <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {marketStats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="premium-card px-4 py-4 sm:px-5 sm:py-5">
                <p className="text-2xl font-semibold text-foreground sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-muted-foreground sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" className="relative">
          <div className="premium-card hero-glow overflow-hidden">
            <img
              src={siteAssets.skylineAbstract}
              alt="Global skyline visual representing diversified enterprise leadership"
              className="h-[20rem] w-full object-cover sm:h-[28rem] lg:h-[33rem]"
            />
          </div>
          <div className="premium-card absolute -bottom-8 left-4 hidden max-w-[14.5rem] overflow-hidden md:block">
            <img
              src={siteAssets.aiEnergy}
              alt="Abstract AI energy visual representing NOVA intelligence"
              className="h-36 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">NOVA layer</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Enterprise intelligence supporting operational and leadership decisions.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell section-tight-mobile">
      <div className="container mx-auto">
        <SectionHeader
          label="Enterprise Thesis"
          title="One operating system across multiple strategic divisions"
          description="UGENESIS is designed to integrate domain expertise rather than isolate teams in disconnected verticals."
        />
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          <FeatureCard
            number="01"
            icon={<Building2 size={24} />}
            title={capabilityPillars[0].title}
            description={capabilityPillars[0].description}
          />
          <FeatureCard
            number="02"
            icon={<Bot size={24} />}
            title={capabilityPillars[1].title}
            description={capabilityPillars[1].description}
            delay={0.08}
          />
          <FeatureCard
            number="03"
            icon={<Landmark size={24} />}
            title={capabilityPillars[2].title}
            description={capabilityPillars[2].description}
            delay={0.16}
          />
        </div>
      </div>
    </section>

    <section className="section-shell section-tight-mobile">
      <div className="container mx-auto">
        <SectionHeader
          label="Divisions"
          title="Breadth with discipline"
          description="From infrastructure and real estate to intelligence and capital, each division is coordinated through a shared strategic framework."
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
      <div className="container mx-auto grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
        <AnimatedSection direction="left">
          <div className="premium-card overflow-hidden">
            <img
              src={siteAssets.constructionIllustration}
              alt="Infrastructure and delivery teams in coordinated execution"
              className="h-full min-h-[20rem] w-full object-cover sm:min-h-[24rem]"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card p-7 sm:p-8 md:p-10">
            <span className="eyebrow mb-6">Global Focus</span>
            <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Regional execution with enterprise-level governance.
            </h2>
            <div className="mt-8 space-y-4">
              {globalFocusAreas.map((focus) => (
                <div key={focus} className="flex gap-3 border-t border-white/10 py-4 first:border-t-0 first:pt-0">
                  <Globe2 className="mt-1 shrink-0 text-primary" size={17} />
                  <p className="text-sm leading-relaxed text-muted-foreground">{focus}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell section-tight-mobile">
      <div className="container mx-auto">
        <SectionHeader
          label="Signals"
          title="Built to communicate at institutional and international level"
          description="Strategic clarity, operating confidence, and measured growth discipline define the UGENESIS profile."
        />
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-4">
          {marketStats.map((stat, index) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>

    <section className="section-shell section-tight-mobile">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[1fr,0.95fr]">
        <AnimatedSection direction="left">
          <div className="premium-card p-7 sm:p-8 md:p-10">
            <span className="eyebrow mb-6">NOVA Intelligence</span>
            <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
              An intelligence layer designed for precision, continuity, and leadership visibility.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              NOVA supports coordinated decisions across divisions by providing operating signal,
              planning support, and better strategic alignment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="eyebrow"><Orbit size={14} /> Coordination</span>
              <span className="eyebrow"><Bot size={14} /> Intelligence</span>
              <span className="eyebrow"><Landmark size={14} /> Governance</span>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card overflow-hidden">
            <img
              src={siteAssets.aiEnergy}
              alt="AI visual representing the NOVA intelligence engine"
              className="h-full min-h-[20rem] w-full object-cover sm:min-h-[24rem]"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell section-tight-mobile">
      <div className="container mx-auto">
        <SectionHeader
          label="Operating Logic"
          title="A calmer, unified platform model"
          description="UGENESIS minimizes fragmentation by aligning planning, delivery, operations, and capital through one governance posture."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {operatingSystemPoints.map((point) => (
            <AnimatedSection key={point}>
              <div className="premium-card h-full p-6">
                <Sparkles className="text-primary" size={18} />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{point}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CTABanner />
  </Layout>
);

export default Index;
