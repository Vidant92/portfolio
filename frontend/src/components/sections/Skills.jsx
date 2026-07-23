import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills.js";
import { RevealOnScroll } from "../shared/RevealOnScroll.jsx";

export function Skills() {
  return (
    <section id="skills" className="shell section-pad">
      <RevealOnScroll>
        <span className="log-label">Entry 03 — Skills</span>
        <h2 className="heading-display mt-4 text-4xl sm:text-5xl lg:text-6xl">
          The <span className="accent-underline">toolkit</span>
        </h2>
      </RevealOnScroll>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="card card-hover p-6"
          >
            <p className="font-mono text-[11px] text-ink-muted">{cat.framing}</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink">{cat.category}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
