import { useState } from "react";
import { ImageIcon, User } from "lucide-react";

const icons = {
  portrait: User,
  project: ImageIcon,
  generic: ImageIcon
};

/**
 * Shows a labeled placeholder with the EXACT path the image should be
 * dropped at, plus recommended dimensions — so swapping in a real image
 * never requires touching this component. Drop the file at `path`
 * (relative to /public) and it will render automatically via <img>.
 */
export function Placeholder({ kind = "generic", path, note, className = "" }) {
  const Icon = icons[kind] || ImageIcon;

  return (
    <div className={`placeholder-frame ${className}`}>
      <div className="absolute inset-0 dot-field opacity-40" />
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft">
        <Icon className="h-5 w-5 text-accent-deep" strokeWidth={1.5} />
      </div>
      <p className="relative z-10 max-w-[220px] break-all px-4 font-mono text-[11px] text-ink-muted">
        {path}
      </p>
      {note && (
        <p className="relative z-10 font-mono text-[10px] uppercase tracking-wide text-ink-muted/70">
          {note}
        </p>
      )}
    </div>
  );
}

/**
 * Attempts to load the real image at `src`. If it fails (file not added
 * yet), falls back to the labeled Placeholder automatically — so this
 * component can be dropped in immediately and "just work" once the file
 * exists at that path.
 */
export function ImageOrPlaceholder({ src, alt, kind, note, className = "", imgClassName = "" }) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (errored) {
    return <Placeholder kind={kind} path={src} note={note} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && <div className="skeleton absolute inset-0 rounded-[inherit]" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        className={`h-full w-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${imgClassName}`}
      />
    </div>
  );
}
