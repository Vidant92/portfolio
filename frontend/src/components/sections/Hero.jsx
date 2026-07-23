import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { profile, socials } from "../../data/profile.js";
import { MagneticButton } from "../shared/MagneticButton.jsx";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <div className="dot-field absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_20%,#000_20%,transparent_80%)]" />

      <div className="shell relative py-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="log-label"
        >
          Entry 01 — Introduction
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 flex items-center gap-2 font-mono text-xs text-ink-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          {profile.status}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display mt-6 text-[15vw] leading-[0.92] sm:text-[110px] lg:text-[150px]"
        >
          Vidant
          <br />
          Bhardwaj
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {profile.heroIntro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <MagneticButton>
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="/resume.pdf" download className="btn-secondary">
              <Download className="h-4 w-4" />
              Download Résumé
            </a>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex items-center gap-3"
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>

        {/* Small easter egg — a quiet running counter, tucked in the corner rather than competing for attention */}
        <LiveClock />
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">
          Scroll
        </span>
        <ArrowDown className="h-3.5 w-3.5 text-ink-muted" />
      </motion.div>
    </section>
  );
}

function LiveClock() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="absolute bottom-6 right-0 hidden flex-col items-end gap-1 font-mono text-[11px] text-ink-muted/70 lg:flex"
    >
      <span>Ghaziabad, IN</span>
      <span>Last commit: whenever it compiled</span>
    </motion.div>
  );
}
