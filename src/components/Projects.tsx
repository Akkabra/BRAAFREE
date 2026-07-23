import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { useI18n } from "@/lib/i18n";

type P = {
  title: string;
  desc: string;
  tech: string[];
  hue: string;
  challenge: string;
  result: string;
  stat: string;
  summary: string;
  gallery: string[];
  link: string;
};

const projects: P[] = [
  {
    title: "Nebula Studio",
    desc: "Interactive portfolio for a design studio.",
    tech: ["React", "GSAP", "Lenis"],
    hue: "linear-gradient(135deg,#1a0000,#3a0000)",
    challenge: "Convert a static agency presence into a living narrative with layered motion and editorial pacing.",
    result: "A premium reveal sequence that positions the brand as a cinematic design house.",
    stat: "+46% engagement",
    summary: "A cinematic portfolio concept where every screen transition feels like a scene change.",
    gallery: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    ],
    link: "https://example.com/nebula-studio",
  },
  {
    title: "Orbit Commerce",
    desc: "Headless e-commerce with cinematic transitions.",
    tech: ["Next.js", "Tailwind", "Framer"],
    hue: "linear-gradient(135deg,#0f0f0f,#2a0000)",
    challenge: "Guide shoppers through a conversion-focused buying journey with strong visual rhythm.",
    result: "A more emotional storefront with clearer product discovery and longer attention time.",
    stat: "3.2x smoother flow",
    summary: "Luxury commerce experience built to guide the visitor from curiosity to conversion with clean momentum.",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    ],
    link: "https://example.com/orbit-commerce",
  },
  {
    title: "Aura Dashboard",
    desc: "Analytics dashboard with real-time visualisations.",
    tech: ["React", "TypeScript", "D3"],
    hue: "linear-gradient(135deg,#050505,#3d0d0d)",
    challenge: "Dense data needed to feel premium, clear and intuitive rather than overwhelming.",
    result: "A focused interface where product insights feel immediate and impressive.",
    stat: "2.1x faster scan",
    summary: "A data-heavy workspace rebuilt to feel premium, direct and instantly readable.",
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    ],
    link: "https://example.com/aura-dashboard",
  },
  {
    title: "Lumen Agency",
    desc: "Immersive marketing site for a creative agency.",
    tech: ["Next.js", "GSAP", "Three.js"],
    hue: "linear-gradient(135deg,#0a0a0a,#4a0000)",
    challenge: "Create a landing experience that feels like a spatial installation and not a typical campaign page.",
    result: "A full-screen narrative that turns brand storytelling into a live environment.",
    stat: "92% scroll retention",
    summary: "An immersive campaign interface shaped like a branded scene with full visual presence.",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    ],
    link: "https://example.com/lumen-agency",
  },
  {
    title: "Pulse App",
    desc: "Fitness tracking app with fluid motion design.",
    tech: ["React", "Framer", "Tailwind"],
    hue: "linear-gradient(135deg,#111,#2b0000)",
    challenge: "Bring meaningful motion to product routines while keeping the interface calm and readable.",
    result: "A more confident feel for the app, with action and feedback that feels premium.",
    stat: "31% higher clarity",
    summary: "A product moment where movement supports habit-building and the interface remains calm and precise.",
    gallery: [
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    ],
    link: "https://example.com/pulse-app",
  },
];

export function Projects() {
  const { t } = useI18n();
  const [active, setActive] = useState(2);
  const [study, setStudy] = useState<P | null>(null);

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
                  onClick={() => setActive(i)}
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
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              setStudy(p);
                            }}
                            className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-red px-5 py-2.5 text-sm font-medium text-white hover:scale-[1.05] transition-transform"
                          >
                            {t("projects.view")} →
                          </button>
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

      <AnimatePresence>
        {study && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 20 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full w-full flex-col overflow-hidden"
              style={{ background: study.hue }}
            >
              <button
                type="button"
                onClick={() => setStudy(null)}
                className="absolute right-6 top-6 z-20 cursor-pointer rounded-full border-2 border-[#E10600] bg-[#E10600] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_12px_30px_-12px_rgba(225,6,0,0.9)] transition-transform hover:scale-105"
              >
                Cerrar
              </button>

              <div className="grid h-full grid-cols-1 gap-0 md:grid-cols-[1.1fr_0.9fr]">
                <div className="relative flex items-center justify-center p-8 md:p-14">
                  <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />
                  <div className="relative z-10 max-w-2xl">
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-[#F5F5F5]">
                      Caso de estudio
                    </span>
                    <h3 className="mt-5 font-display text-5xl font-semibold md:text-7xl">{study.title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#F0F0F0] md:text-base">{study.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {study.tech.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] text-white">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <a
                        href={study.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-red px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
                      >
                        Ver proyecto →
                      </a>
                      <span className="text-xs uppercase tracking-[0.35em] text-[#B5B5B5]">{study.stat}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-black/35 p-8 md:p-12">
                  <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-[#B5B5B5]">Impacto</span>
                      <span className="rounded-full bg-[#E10600]/20 px-3 py-1 text-xs text-white">{study.stat}</span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#B5B5B5]">Resumen</p>
                        <p className="mt-2 text-sm leading-relaxed text-white">{study.desc}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#B5B5B5]">Reto</p>
                        <p className="mt-2 text-sm leading-relaxed text-white">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#B5B5B5]">Resultado</p>
                        <p className="mt-2 text-sm leading-relaxed text-white">{study.result}</p>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
                      {study.gallery.map((image, idx) => (
                        <div key={`${study.title}-${idx}`} className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/35">
                          <img src={image} alt={`${study.title} gallery ${idx + 1}`} className="h-56 w-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
