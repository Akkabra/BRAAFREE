import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="relative flex flex-col items-center justify-center px-10 py-8">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
            >
              <motion.rect
                x="1" y="1" width="398" height="198"
                rx="14" ry="14"
                fill="none"
                stroke="#E10600"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0.9 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
              />
            </svg>
            <motion.h1
              className="font-display text-2xl sm:text-4xl font-semibold tracking-[0.2em] text-white"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              BRYAN ALVAREZ
            </motion.h1>
            <motion.p
              className="mt-2 text-xs sm:text-sm tracking-[0.4em] text-[#B5B5B5] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Frontend Developer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
