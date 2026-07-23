import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { codingProfiles } from "../../data/codingProfiles.js";
import { RevealOnScroll } from "../shared/RevealOnScroll.jsx";
import { StatImage } from "../shared/StatImage.jsx";

export function CodingProfiles() {
  return (
    <section id="coding-profiles" className="shell section-pad">
      <RevealOnScroll>
        <span className="log-label">Entry 04 — Coding Profiles</span>
        <h2 className="heading-display mt-4 text-4xl sm:text-5xl lg:text-6xl">
          Where the <span className="accent-underline">contest history</span> lives
        </h2>
      </RevealOnScroll>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {codingProfiles.map((profileItem, i) => (
          <motion.a
            key={profileItem.name}
            href={profileItem.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card card-hover group block p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft">
                  <profileItem.icon className="h-5 w-5 text-accent-deep" />
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-ink">{profileItem.name}</p>
                  <p className="font-mono text-xs text-ink-muted">@{profileItem.handle}</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            </div>

            {profileItem.statCardSrc && (
              <div className="mt-5">
                <StatImage src={profileItem.statCardSrc} alt={`${profileItem.name} stats`} />
              </div>
            )}
            {profileItem.streakCardSrc && (
              <div className="mt-3">
                <StatImage src={profileItem.streakCardSrc} alt={`${profileItem.name} streak`} />
              </div>
            )}
          </motion.a>
        ))}
      </div>

      <RevealOnScroll delay={0.15} className="mt-8">
        <div className="card p-6">
          <p className="log-label">GitHub contribution activity</p>
          <div className="mt-4">
            <StatImage
              src="https://ghchart.rshah.org/FF5A36/Vidant92"
              alt="Vidant Bhardwaj GitHub contribution graph"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
