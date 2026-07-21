import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { useI18n } from "@/lib/i18n";

type P = { title: string; desc: string; tech: string[]; hue: string };

const projects: P[] = [
  { title: "Nebula Studio", desc: "Interactive portfolio for a design studio.", tech: ["React", "GSAP", "Lenis"], hue: "linear-gradient(135deg,#1a0000,#3a0000)" },
  { title: "Orbit Commerce", desc: "Headless e-commerce with cinematic transitions.", tech: ["Next.js", "Tailwind", "Framer"], hue: "linear-gradient(135deg,#0f0f0f,#2a0000)" },
  { title: "Aura Dashboard", desc: "Analytics dashboard with real-time visualisations.", tech: ["React", "TypeScript", "D3"], hue: "linear-gradient(135deg,#050505,#3d0d0d)" },
  { title: "Lumen Agency", desc: "Immersive marketing site for a creative agency.", tech: ["Next.js", "GSAP", "Three.js"], hue: "linear-gradient(135deg,#0a0a0a,#4a0000)" },
  { title: "Pulse App", desc: "Fitness tracking app with fluid motion design.", tech: ["React", "Framer", "Tailwind"], hue: "linear-gradient(135deg,#111,#2b0000)" },
];

export function Projects() {
  const { t } = useI18n();
  const [active, setActive] = useState(2);

  const go = (dir: number) => {
    setActive((a) => (a + dir + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="relative py-32 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle kicker={t("projects.kicker")} title={t("projects.title")} />

        <div className="mt-16 relative flex items-center justify-center">
          <button
            aria-label="prev"
            onClick={() => go(-1)}
            className="absolute left-0 z-20 flex h-12 w-12 items-center justify-center rounded-full glass hover:scale-110 transition-transform"
          >
            ←
          </button>
          <button
            aria-label="next"
            onClick={() => go(1)}
            className="absolute right-0 z-20 flex h-12 w-12 items-center justify-center rounded-full glass hover:scale-110 transition-transform"
          >
            →
          </button>

          <div className="relative flex h-[520px] w-full max-w-5xl items-center justify-center perspective-[1400px]">
            {projects.map((p, i) => {
              const offset = i - active;
              const abs = Math.abs(offset);
              if (abs > 2) return null;
              const isActive = offset === 0;
              return (
                <motion.div
                  key={p.title}
                  onClick={() => !isActive && setActive(i)}
                  animate={{
                    x: offset * 260,
                    scale: isActive ? 1 : 0.78,
                    rotateY: offset * -8,
                    opacity: abs > 1 ? 0.35 : 1,
                    zIndex: 10 - abs,
                  }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={isActive ? { scale: 1.03, rotateY: 0 } : {}}
                  className={`absolute h-[480px] w-[340px] md:w-[380px] cursor-pointer rounded-[2rem] overflow-hidden ${
                    isActive ? "glow-red" : ""
                  }`}
                  style={{ background: p.hue, transformStyle: "preserve-3d" }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
                  <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#E10600]/25 blur-3xl" />

                  <div className="relative flex h-full flex-col justify-end p-8">
                    <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-widest text-[#B5B5B5]">
                      0{i + 1} · Project
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
                      {p.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="mt-3"
                        >
                          <p className="text-sm text-[#B5B5B5]">{p.desc}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {p.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-white"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <a
                            href="#"
                            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-red px-5 py-2.5 text-sm font-medium text-white hover:scale-[1.05] transition-transform"
                          >
                            {t("projects.view")} →
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-10 bg-gradient-red" : "w-4 bg-white/15"
              }`}
              aria-label={`project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
