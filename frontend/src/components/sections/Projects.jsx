import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, Github, Users } from "lucide-react";
import { projects } from "../../data/projects.js";
import { RevealOnScroll } from "../shared/RevealOnScroll.jsx";
import { ImageOrPlaceholder } from "../shared/Placeholder.jsx";

export function Projects() {
  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach((p) => p.stack.forEach((s) => tags.add(s)));
    return ["All", ...Array.from(tags)];
  }, []);

  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.stack.includes(filter));

  return (
    <section id="projects" className="shell section-pad">
      <RevealOnScroll>
        <span className="log-label">Entry 02 — Projects</span>
        <h2 className="heading-display mt-4 text-4xl sm:text-5xl lg:text-6xl">
          Six builds, <span className="accent-underline">logged</span>
        </h2>
        <p className="mt-4 max-w-xl text-ink-muted">
          Each one taught me something specific — noted below rather than smoothed over.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1} className="mt-8 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`rounded-full px-4 py-1.5 font-mono text-xs transition-colors ${
              filter === tag
                ? "bg-ink text-paper"
                : "border border-line text-ink-muted hover:border-ink hover:text-ink"
            }`}
          >
            {tag}
          </button>
        ))}
      </RevealOnScroll>

      <div className="mt-10 space-y-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
      className="card overflow-hidden"
    >
      <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
        <ImageOrPlaceholder
          src={project.imagePath}
          alt={`${project.name} screenshot`}
          kind="project"
          note={project.imageNote}
          className="aspect-video lg:aspect-auto"
        />

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-accent-deep">{project.tag}</span>
            {project.team && (
              <span className="flex items-center gap-1 rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] text-ink-muted">
                <Users className="h-3 w-3" />
                Team project
              </span>
            )}
          </div>

          <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{project.name}</h3>
          <p className="mt-1 font-mono text-xs text-ink-muted">{project.tagline}</p>
          <p className="mt-4 leading-relaxed text-ink-muted">{project.overview}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !px-4 !py-2 text-xs"
              >
                <Github className="h-3.5 w-3.5" />
                Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-4 !py-2 text-xs"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
            <button
              onClick={() => setExpanded((v) => !v)}
              className="ml-auto flex items-center gap-1 font-mono text-xs text-ink-muted transition-colors hover:text-accent"
            >
              {expanded ? "Less detail" : "More detail"}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </button>
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-6 space-y-5 border-t border-line pt-5">
                  {project.team && project.teamNote && (
                    <div className="rounded-xl border border-line bg-paper px-4 py-3">
                      <p className="text-xs leading-relaxed text-ink-muted">{project.teamNote}</p>
                    </div>
                  )}
                  <div>
                    <p className="log-label">Key Features</p>
                    <ul className="mt-2 space-y-1.5">
                      {project.features.map((f) => (
                        <li key={f} className="flex gap-2 text-sm text-ink-muted">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="log-label">Challenges</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.challenges}</p>
                  </div>
                  <div>
                    <p className="log-label">My Contribution</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.contribution}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
