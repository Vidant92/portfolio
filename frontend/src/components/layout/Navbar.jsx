import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks } from "../../data/profile.js";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function goTo(href) {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`shell flex items-center justify-between rounded-full border border-line bg-paper/85 px-5 py-3 backdrop-blur-md transition-shadow duration-500 ${
          scrolled ? "shadow-card" : ""
        }`}
      >
        <button
          onClick={() => goTo("#hero")}
          className="font-display text-lg font-semibold tracking-tight text-ink"
          aria-label="Back to top"
        >
          VB<span className="text-accent">.</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => goTo(link.href)}
              className={`relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                active === link.href ? "text-ink" : "text-ink-muted hover:text-ink"
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-accent-soft"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-xs text-paper transition-colors hover:bg-accent md:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            Résumé
          </a>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="card mx-4 mt-3 flex flex-col gap-1 p-3 lg:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className={`rounded-xl px-4 py-3 text-left font-mono text-sm ${
                  active === link.href ? "bg-accent-soft text-ink" : "text-ink-muted"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              download
              className="mt-1 flex items-center gap-2 rounded-xl bg-ink px-4 py-3 font-mono text-sm text-paper"
            >
              <Download className="h-3.5 w-3.5" />
              Download résumé
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
