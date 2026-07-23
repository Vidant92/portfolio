import { profile, milestones } from "../../data/profile.js";
import { RevealOnScroll, Stagger, staggerItem } from "../shared/RevealOnScroll.jsx";
import { Counter } from "../shared/Counter.jsx";
import { ImageOrPlaceholder } from "../shared/Placeholder.jsx";
import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";

export function About() {
  return (
    <section id="about" className="shell section-pad">
      <RevealOnScroll>
        <span className="log-label">Entry 02 — About</span>
        <h2 className="heading-display mt-4 text-4xl sm:text-5xl lg:text-6xl">
          The person <span className="accent-underline">behind</span> the log
        </h2>
      </RevealOnScroll>

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <RevealOnScroll direction="right">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs">
            <div className="absolute -inset-3 -z-10 rounded-[28px] bg-accent-soft" />
            <ImageOrPlaceholder
              src="/images/profile.jpg"
              alt="Vidant Bhardwaj"
              kind="portrait"
              note="Portrait · 1200×1500 recommended"
              className="h-full w-full rounded-[24px] border border-line"
            />
          </div>
        </RevealOnScroll>

        <div>
          <RevealOnScroll delay={0.1}>
            <p className="font-display text-2xl italic text-ink sm:text-3xl">
              &ldquo;{profile.aboutQuote}&rdquo;
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} className="mt-6 space-y-5">
            {profile.about.map((para, i) => (
              <p key={i} className="text-pretty leading-relaxed text-ink-muted">
                {para}
              </p>
            ))}
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} className="mt-6">
            <span className="chip">Currently learning: {profile.currentlyLearning}</span>
          </RevealOnScroll>

          <Stagger className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {profile.highlights.map((item) => (
              <motion.div key={item.label} variants={staggerItem} className="card p-4">
                <p className="heading-display text-2xl text-accent-deep sm:text-3xl">
                  <Counter value={item.value} />
                </p>
                <p className="mt-1 text-xs font-semibold text-ink">{item.label}</p>
                <p className="mt-0.5 font-mono text-[10px] text-ink-muted">{item.caption}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>

      {/* Milestones — achievements & education, folded into the About narrative */}
      <div className="mt-20 grid gap-10 md:grid-cols-2">
        <RevealOnScroll>
          <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-ink">
            <Trophy className="h-4 w-4 text-accent" />
            Milestones
          </h3>
          <div className="mt-5 space-y-4">
            {milestones.achievements.map((item) => (
              <div key={item.title} className="border-b border-line pb-4 last:border-0">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-semibold text-ink">{item.title}</p>
                  <span className="shrink-0 font-mono text-[10px] text-ink-muted">
                    {item.date}
                  </span>
                </div>
                <p className="mt-1 font-mono text-[11px] text-ink-muted">{item.org}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-ink">
            <GraduationCap className="h-4 w-4 text-accent" />
            Education
          </h3>
          <div className="mt-5 space-y-4">
            {milestones.education.map((item) => (
              <div key={item.institution + item.degree} className="border-b border-line pb-4 last:border-0">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-semibold text-ink">{item.institution}</p>
                  <span className="shrink-0 font-mono text-[10px] text-ink-muted">
                    {item.duration}
                  </span>
                </div>
                <p className="mt-1 font-mono text-[11px] text-ink-muted">
                  {item.degree} · {item.grade}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
