import { ArrowRight, Bot, Building2, Landmark, Orbit, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import FeatureCard from "@/components/FeatureCard";
import Layout from "@/components/Layout";
import NetworkIntelligenceMark from "@/components/NetworkIntelligenceMark";
import SectionHeader from "@/components/SectionHeader";
import {
  capabilityPillars,
  marketStats,
  missionVision,
  operatingSystemPoints,
  siteAssets,
  strategicDivisions,
} from "@/content/site";

const Index = () => (
  <Layout>
    <section className="section-shell relative">
      <div className="container mx-auto grid items-center gap-8 lg:grid-cols-[1.08fr,0.92fr] lg:gap-10">
        <AnimatedSection direction="left">
          <span className="eyebrow mb-5 md:mb-6">UGENESIS Group</span>
          <h1 className="max-w-5xl text-[2.65rem] font-semibold leading-[0.98] text-foreground sm:text-5xl md:text-7xl lg:text-[5.25rem]">
            A venture studio building connected companies across infrastructure, assets, intelligence, and capital.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-7 md:text-lg">
            UGENESIS is not a single-product company. We build, own, and coordinate a portfolio of
            divisions, platforms, and real-world assets under one enterprise system.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-10 md:gap-4">
            <Link
              to="/infrastructure"
              className="btn-primary"
            >
              Explore Divisions
            </Link>
            <Link
              to="/contact"
              className="btn-secondary"
            >
              Partner With UGENESIS <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 md:mt-12 md:gap-4">
            {marketStats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="premium-card px-5 py-4 md:py-5">
                <p className="text-2xl font-semibold text-foreground md:text-3xl">{stat.value}</p>
                <p className="mt-2 text-xs uppercase text-muted-foreground" style={{ letterSpacing: "0.08em" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" className="relative">
          <div className="media-frame hero-glow overflow-hidden">
            <img
              src={siteAssets.heroConstruction}
              alt="Construction skyline representing UGENESIS infrastructure development"
              className="h-[21rem] w-full object-cover sm:h-[28rem] lg:h-[34rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          </div>
          <div className="premium-card absolute -bottom-8 left-6 hidden max-w-[16rem] overflow-hidden p-3 md:block">
            <img
              src={siteAssets.aiEnergy}
              alt="Abstract AI energy visual representing NOVA intelligence"
              className="h-36 w-full rounded-lg object-cover"
            />
            <div className="p-4">
              <p className="text-xs font-semibold uppercase text-primary" style={{ letterSpacing: "0.08em" }}>
                NOVA layer
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                The intelligence layer connecting companies, assets, data, and decisions.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto">
        <SectionHeader
          label="What UGENESIS Is"
          title="A company that builds companies, then connects them into one stronger system"
          description="UGENESIS works like a modern enterprise group. Each division can grow as an independent business, while the group provides shared leadership, intelligence, brand, and capital strategy."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            number="01"
            icon={<Building2 size={26} />}
            title={capabilityPillars[0].title}
            description={capabilityPillars[0].description}
          />
          <FeatureCard
            number="02"
            icon={<Bot size={26} />}
            title={capabilityPillars[1].title}
            description={capabilityPillars[1].description}
            delay={0.08}
          />
          <FeatureCard
            number="03"
            icon={<Landmark size={26} />}
            title={capabilityPillars[2].title}
            description={capabilityPillars[2].description}
            delay={0.16}
          />
        </div>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
        <AnimatedSection direction="left">
          <div className="media-frame">
            <img
              src={siteAssets.constructionIllustration}
              alt="Construction illustration showing a coordinated infrastructure workforce"
              className="h-[18rem] w-full object-cover sm:h-[24rem] lg:h-full lg:min-h-[24rem]"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card p-6 md:p-10">
            <span className="eyebrow mb-6">Why It Matters</span>
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              UGENESIS is built as a network, not a collection of disconnected ideas.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              The brand is built around networked intelligence because the company itself is a
              connected ecosystem. Each node represents a company, asset, platform, or division.
              The connections represent shared data, capital, talent, strategy, and execution.
            </p>
            <div className="mt-6 space-y-3 md:mt-8 md:space-y-4">
              {operatingSystemPoints.map((point) => (
                <div key={point} className="flex gap-4 border-t border-white/10 py-4 first:border-t-0 first:pt-0">
                  <Sparkles className="mt-1 shrink-0 text-primary" size={17} />
                  <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[0.95fr,1.05fr]">
        <AnimatedSection direction="left">
          <NetworkIntelligenceMark />
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card h-full p-6 md:p-10">
            <span className="eyebrow mb-6">Brand Architecture</span>
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              A symbol system that explains the company before a sentence is read.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              The networked identity shows what UGENESIS is: a central enterprise core connecting
              divisions, platforms, assets, talent, data, and capital into one operating ecosystem.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3 md:mt-8">
              {["Structure", "Intelligence", "Integration"].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto">
        <SectionHeader
          label="Mission And Vision"
          title="Clear direction for a multi-division enterprise platform"
          description="The mission is practical: build useful companies and systems. The vision is bigger: connect them into a global operating ecosystem."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {missionVision.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.08}>
              <div className="premium-card h-full p-6 md:p-10">
                <p className="text-xs font-semibold uppercase text-primary" style={{ letterSpacing: "0.08em" }}>{item.title}</p>
                <p className="mt-4 text-xl font-semibold leading-tight text-foreground sm:text-2xl md:mt-5 md:text-3xl">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto">
        <SectionHeader
          label="Explore Divisions"
          title="Our portfolio is designed as a connected system of companies"
          description="UGENESIS builds across several markets. Each division can stand on its own, but together they form a stronger enterprise platform."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {strategicDivisions.map((division, index) => (
            <AnimatedSection key={division.title} delay={index * 0.05}>
              <div className="premium-card h-full p-6">
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
      <div className="container mx-auto grid gap-8 lg:grid-cols-[1fr,0.95fr]">
        <AnimatedSection direction="left">
          <div className="premium-card h-full p-6 md:p-10">
            <span className="eyebrow mb-6">NOVA Intelligence</span>
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              The intelligence layer that keeps the ecosystem connected.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              NOVA represents the operating intelligence behind UGENESIS. Its role is to connect
              data, decisions, workflows, assets, and teams so the group can build and scale with
              more control.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-3">
              <span className="eyebrow"><Orbit size={14} /> Live coordination</span>
              <span className="eyebrow"><Bot size={14} /> AI-guided workflows</span>
              <span className="eyebrow"><Landmark size={14} /> Capital clarity</span>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="media-frame">
            <img
              src={siteAssets.aiEnergy}
              alt="AI visual representing the NOVA intelligence engine"
              className="h-[18rem] w-full object-cover sm:h-[24rem] lg:h-full lg:min-h-[24rem]"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <CTABanner />
  </Layout>
);

export default Index;
