import { Link } from "react-router-dom";
import { navLinks } from "@/content/site";

const Footer = () => (
  <footer className="border-t border-white/10 bg-slate-950/50">
    <div className="container mx-auto px-6 py-16">
      <div className="premium-card grid gap-12 px-8 py-10 md:grid-cols-[1.4fr,1fr,1fr]">
        <div>
          <p className="eyebrow mb-5">UGENESIS</p>
          <h3 className="mb-4 max-w-md text-3xl font-semibold leading-none text-foreground">
            Calm infrastructure leadership with the discipline of a modern platform company.
          </h3>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            We are building an institutional-grade operating system for infrastructure, execution,
            intelligence, and capital stewardship.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Navigation</h4>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Contact</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>partnerships@ugenesis.com</p>
            <p>Institutional conversations, project partnerships, and investment dialogue.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} UGENESIS Group. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Built for a premium next-phase launch</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
