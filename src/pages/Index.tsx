import { ArrowRight, Bot, Building2, Landmark, Orbit, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import FeatureCard from "@/components/FeatureCard";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import {
  capabilityPillars,
  marketStats,
  operatingSystemPoints,
  siteAssets,
} from "@/content/site";

const Index = () => (
  <Layout>
    <section className="section-shell">
      <div className="container mx-auto grid items-end gap-10 lg:grid-cols-[1.15fr,0.85fr]">
        <AnimatedSection direction="left">
          <span className="eyebrow mb-6">UGENESIS Group</span>
          <h1 className="max-w-5xl text-5xl font-semibold leading-none text-foreground md:text-7xl lg:text-[5.4rem]">
            Infrastructure, intelligence, and capital in one disciplined system.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            UGENESIS is shaping a calmer, more premium model for real-world economic activity,
            combining development logic, operational control, and AI-backed coordination under one
            institutional brand.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Discuss The Next Phase
            </Link>
            <Link
              to="/infrastructure"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-7 py-3 text-sm font-semibold text-foreground transition hover:border-primary/50"
            >
              Explore The Platform <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {marketStats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="premium-card px-5 py-5">
                <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" className="relative">
          <div className="absolute -left-10 top-12 hidden h-24 w-24 rounded-full bg-accent/20 blur-3xl lg:block" />
          <div className="premium-card hero-glow overflow-hidden">
            <img
              src={siteAssets.heroConstruction}
              alt="Construction skyline representing UGENESIS infrastructure development"
              className="h-[33rem] w-full object-cover"
            />
          </div>
          <div className="premium-card absolute -bottom-10 left-6 hidden max-w-[15rem] overflow-hidden md:block">
            <img
              src={siteAssets.aiEnergy}
              alt="Abstract AI energy visual representing NOVA intelligence"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">NOVA layer</p>
              <p className="mt-2 text-sm text-muted-foreground">
                AI-backed orchestration embedded into the operating model from the beginning.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto">
        <SectionHeader
          label="Platform Thesis"
          title="A higher-grade way to design, execute, and operate productive assets"
          description="The opportunity is not only to build more. It is to build with more continuity, better control, and a clearer line between strategy and execution."
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
          <div className="premium-card overflow-hidden">
            <img
              src={siteAssets.constructionIllustration}
              alt="Construction illustration showing a coordinated infrastructure workforce"
              className="h-full min-h-[24rem] w-full object-cover"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card p-8 md:p-10">
            <span className="eyebrow mb-6">Why It Matters</span>
            <h2 className="text-4xl font-semibold leading-none text-foreground md:text-5xl">
              One operating system instead of isolated project fragments.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              UGENESIS is being shaped to reduce the silent drag that weakens serious projects:
              scattered decisions, fragmented ownership, and too many handoffs between strategy,
              delivery, and long-term value creation.
            </p>
            <div className="mt-8 space-y-4">
              {operatingSystemPoints.map((point) => (
                <div key={point} className="flex gap-4 border-t border-white/10 py-4 first:border-t-0 first:pt-0">
                  <Sparkles className="mt-1 shrink-0 text-primary" size={18} />
                  <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
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
          label="Signals"
          title="Built to speak with investors, operators, and institutional partners"
          description="The platform story has to carry strategic clarity and visual confidence at the same time."
        />
        <div className="grid gap-6 lg:grid-cols-4">
          {marketStats.map((stat, index) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>

    <section className="section-shell">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[1fr,0.95fr]">
        <AnimatedSection direction="left">
          <div className="premium-card p-8 md:p-10">
            <span className="eyebrow mb-6">NOVA Intelligence</span>
            <h2 className="text-4xl font-semibold leading-none text-foreground md:text-5xl">
              An AI layer designed to feel precise, not theatrical.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              The role of NOVA is to create operational coherence across planning, sequencing,
              asset decisions, and capital visibility. It should make the organization calmer and
              more exact, not louder.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="eyebrow"><Orbit size={14} /> Live coordination</span>
              <span className="eyebrow"><Bot size={14} /> AI-guided workflows</span>
              <span className="eyebrow"><Landmark size={14} /> Capital clarity</span>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="premium-card overflow-hidden">
            <img
              src={siteAssets.aiEnergy}
              alt="AI visual representing the NOVA intelligence engine"
              className="h-full min-h-[24rem] w-full object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <CTABanner />
  </Layout>
);

export default Index;
