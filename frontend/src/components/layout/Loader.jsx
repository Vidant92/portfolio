import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "vb-loaded";

export function Loader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyLoaded = window.sessionStorage.getItem(SESSION_KEY);
    if (alreadyLoaded) return;

    setVisible(true);
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      window.sessionStorage.setItem(SESSION_KEY, "true");
    }, 1350);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120" className="overflow-visible">
            <motion.path
              d="M20 30 L20 90 M20 30 L45 30 Q60 30 60 45 Q60 60 45 60 L20 60 M60 60 L85 90 M75 30 L100 90 M87.5 60 L62.5 60"
              fill="none"
              stroke="#FF5A36"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            />
          </svg>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-muted"
          >
            Opening the log
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
