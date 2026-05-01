import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/site";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "border-b border-white/5 bg-slate-950/35 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-5 md:h-20 md:px-6">
        <Link to="/" className="flex items-center gap-3 text-foreground">
          <img
            src="/media/ugenesis-network-logo.png"
            alt="UGENESIS logo"
            className="brand-mark h-10 w-10 rounded-lg border border-white/10 bg-slate-950/60 object-contain p-1.5 shadow-lg md:h-11 md:w-11"
          />
          <span>
            <span className="block text-base font-semibold md:text-lg">UGENESIS</span>
            <span className="block max-w-[10rem] truncate text-[9px] uppercase text-muted-foreground sm:max-w-none md:text-[10px]" style={{ letterSpacing: "0.08em" }}>
              Global enterprise platform
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`tech-nav-link rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? "bg-white/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="btn-primary px-5 py-2.5"
          >
            Partner With Us
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="brand-mark flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card mx-3 mb-3 px-3 py-3 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`tech-nav-link block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                location.pathname === link.href ? "bg-white/10 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary mt-2 w-full py-2.5"
          >
            Partner With Us
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
