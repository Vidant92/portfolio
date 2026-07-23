import { useState } from "react";

export function StatImage({ src, alt, className = "" }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className={`relative min-h-[110px] overflow-hidden rounded-xl ${className}`}>
      {!loaded && !errored && <div className="skeleton absolute inset-0 rounded-xl" />}
      {errored ? (
        <div className="flex min-h-[110px] w-full items-center justify-center rounded-xl border border-dashed border-ink/15 bg-paper">
          <p className="px-4 text-center font-mono text-[11px] text-ink-muted">
            Stats unavailable right now — visit the profile directly
          </p>
        </div>
      ) : (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`w-full rounded-xl transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
