import { socials } from "../../data/profile.js";

export function Footer() {
  const year = new Date().getFullYear();

  function backToTop() {
    document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer className="border-t border-line bg-paper">
      <div className="shell flex flex-col items-center gap-6 py-14 text-center">
        <button
          onClick={backToTop}
          className="font-display text-xl font-semibold text-ink"
          aria-label="Back to top"
        >
          VB<span className="text-accent">.</span>
        </button>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-ink-muted">
          Written &amp; built by Vidant Bhardwaj
        </p>
        <p className="font-mono text-[11px] text-ink-muted/70">
          © {year} · All entries logged, none of them final.
        </p>
      </div>
    </footer>
  );
}
