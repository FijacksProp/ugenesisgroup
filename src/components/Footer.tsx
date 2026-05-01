import { Link } from "react-router-dom";
import { navLinks } from "@/content/site";

const Footer = () => (
  <footer className="border-t border-white/10 bg-slate-950/50">
    <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16">
      <div className="network-panel premium-card grid gap-8 px-5 py-8 sm:px-8 md:grid-cols-[1.4fr,1fr,1fr] md:gap-12 md:py-10">
        <div>
          <div className="relative z-10 mb-5 flex items-center gap-3">
            <img
              src="/media/logo.png"
              alt="UGENESIS logo"
              className="brand-mark h-12 w-12 rounded-lg border border-white/10 bg-slate-950/60 object-contain p-1.5"
            />
            <p className="eyebrow">UGENESIS</p>
          </div>
          <h3 className="relative z-10 mb-4 max-w-md text-2xl font-semibold leading-tight text-foreground md:text-3xl md:leading-none">
            A venture studio building companies, systems, and assets that work together.
          </h3>
          <p className="relative z-10 max-w-lg text-sm leading-relaxed text-muted-foreground">
            UGENESIS is building a multi-division enterprise platform across infrastructure,
            intelligence, talent, digital systems, and capital.
          </p>
        </div>
        <div className="relative z-10">
          <h4 className="mb-4 text-xs font-semibold uppercase text-muted-foreground" style={{ letterSpacing: "0.08em" }}>Navigation</h4>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="tech-link text-sm text-foreground/80 transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative z-10">
          <h4 className="mb-4 text-xs font-semibold uppercase text-muted-foreground" style={{ letterSpacing: "0.08em" }}>Contact</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>partnerships@ugenesis.com</p>
            <p>Partnerships, new ventures, project opportunities, and investor conversations.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:pt-8">
        <p>(c) {new Date().getFullYear()} UGENESIS Group. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Built for a premium next-phase launch</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
