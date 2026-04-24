import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Globe2, Menu, X } from "lucide-react";
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass" : "border-b border-white/5"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3 text-foreground">
            <img
              src="/media/logo.png"
              alt="UGENESIS logo"
              className="h-10 w-10 rounded-full border border-white/10 object-cover"
            />
            <span>
              <span className="block text-base font-semibold tracking-[0.22em] sm:text-lg">UGENESIS</span>
              <span className="block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Global enterprise platform
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90"
            >
              Start A Conversation
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-lg" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative mx-4 mt-24 rounded-[1.4rem] border border-white/10 bg-slate-950/95 p-6 shadow-2xl"
            >
              <p className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-primary">
                <Globe2 size={14} /> Navigation
              </p>
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block rounded-xl px-3 py-3 text-base transition-colors ${
                      location.pathname === link.href
                        ? "bg-white/10 text-foreground"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link
                to="/contact"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                Start A Conversation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
