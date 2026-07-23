import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Animates a numeric prefix of `value` counting up once when scrolled
 * into view, then renders the full string (so "500+" or "1548" or "8.45"
 * all work — only the leading number portion is animated).
 */
export function Counter({ value, duration = 1.2, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(value);

  const match = String(value).match(/^(\d+(\.\d+)?)/);
  const numeric = match ? parseFloat(match[1]) : null;
  const suffix = match ? String(value).slice(match[0].length) : "";
  const isDecimal = match ? match[1].includes(".") : false;

  useEffect(() => {
    if (!inView || numeric === null) return;
    let start = null;
    let raf;

    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const current = numeric * progress;
      setDisplay(`${isDecimal ? current.toFixed(2) : Math.round(current)}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric, duration, suffix, isDecimal]);

  return (
    <motion.span ref={ref} className={className}>
      {numeric === null ? value : display}
    </motion.span>
  );
}
