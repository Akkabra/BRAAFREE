import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { useI18n } from "@/lib/i18n";

type LocalizedText = {
  es: string;
  en: string;
};

type P = {
  title: LocalizedText;
  desc: LocalizedText;
  tech: string[];
  hue: string;
  challenge: LocalizedText;
  result: LocalizedText;
  stat: LocalizedText;
  summary: LocalizedText;
  gallery: string[];
  link: string;
};

const projects: P[] = [
  {
    title: { es: "Nebula Studio", en: "Nebula Studio" },
    desc: {
      es: "Portafolio interactivo para un estudio de diseño.",
      en: "Interactive portfolio for a design studio.",
    },
    tech: ["React", "GSAP", "Lenis"],
    hue: "linear-gradient(135deg,#1a0000,#3a0000)",
    challenge: {
      es: "Convertir una presencia estática en una narrativa viva con movimiento y ritmo editorial.",
      en: "Convert a static agency presence into a living narrative with layered motion and editorial pacing.",
    },
    result: {
      es: "Una secuencia premium que posiciona la marca como un estudio de diseño cinematográfico.",
      en: "A premium reveal sequence that positions the brand as a cinematic design house.",
    },
    stat: { es: "+46% de engagement", en: "+46% engagement" },
    summary: {
      es: "Un concepto de portafolio cinematográfico donde cada transición se siente como un cambio de escena.",
      en: "A cinematic portfolio concept where every screen transition feels like a scene change.",
    },
    gallery: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    ],
    link: "https://example.com/nebula-studio",
  },
  {
    title: { es: "Orbit Commerce", en: "Orbit Commerce" },
    desc: {
      es: "E-commerce headless con transiciones cinematográficas.",
      en: "Headless e-commerce with cinematic transitions.",
    },
    tech: ["Next.js", "Tailwind", "Framer"],
    hue: "linear-gradient(135deg,#0f0f0f,#2a0000)",
    challenge: {
      es: "Guiar a la compra con una experiencia clara, emocional y visualmente intensa.",
      en: "Guide shoppers through a conversion-focused buying journey with strong visual rhythm.",
    },
    result: {
      es: "Una tienda más emocional, con mejor descubrimiento del producto y más atención sostenida.",
      en: "A more emotional storefront with clearer product discovery and longer attention time.",
    },
    stat: { es: "Flujo 3.2x más suave", en: "3.2x smoother flow" },
    summary: {
      es: "Experiencia de comercio de lujo pensada para llevar al visitante de la curiosidad a la conversión.",
      en: "Luxury commerce experience built to guide the visitor from curiosity to conversion with clean momentum.",
    },
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    ],
    link: "https://example.com/orbit-commerce",
  },
  {
    title: { es: "FORMARESORTES LEGO SAS", en: "FORMARESORTES LEGO SAS" },
    desc: {
      es: "Dashboard analítico con visualizaciones en tiempo real.",
      en: "Analytics dashboard with real-time visualisations.",
    },
    tech: ["React", "TypeScript", "D3"],
    hue: "linear-gradient(135deg,#050505,#3d0d0d)",
    challenge: {
      es: "Hacer que un flujo de datos denso se sintiera premium, claro e intuitivo.",
      en: "Dense data needed to feel premium, clear and intuitive rather than overwhelming.",
    },
    result: {
      es: "Una interfaz enfocada donde la información se entiende de manera inmediata y elegante.",
      en: "A focused interface where product insights feel immediate and impressive.",
    },
    stat: { es: "Escaneo 2.1x más rápido", en: "2.1x faster scan" },
    summary: {
      es: "Un espacio de trabajo con datos reconstruido para sentirse premium, directo y legible.",
      en: "A data-heavy workspace rebuilt to feel premium, direct and instantly readable.",
    },
    gallery: [
      "@public/src/assets/formaresortesimg1.jpg",
      "@public/src/assets/formaresortesimg2.jpg",
      "@public/src/assets/formaresortesimg3.jpg",
    ],
    link: "https://formaresortes.com/",
  },
  {
    title: { es: "Lumen Agency", en: "Lumen Agency" },
    desc: {
      es: "Sitio de marketing inmersivo para una agencia creativa.",
      en: "Immersive marketing site for a creative agency.",
    },
    tech: ["Next.js", "GSAP", "Three.js"],
    hue: "linear-gradient(135deg,#0a0a0a,#4a0000)",
    challenge: {
      es: "Crear una experiencia tipo instalación espacial en lugar de una landing convencional.",
      en: "Create a landing experience that feels like a spatial installation and not a typical campaign page.",
    },
    result: {
      es: "Una narrativa a pantalla completa que convierte la marca en un entorno vivo.",
      en: "A full-screen narrative that turns brand storytelling into a live environment.",
    },
    stat: { es: "92% retención de scroll", en: "92% scroll retention" },
    summary: {
      es: "Una interfaz de campaña inmersiva con presencia visual completa.",
      en: "An immersive campaign interface shaped like a branded scene with full visual presence.",
    },
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    ],
    link: "https://example.com/lumen-agency",
  },
  {
    title: { es: "Pulse App", en: "Pulse App" },
    desc: {
      es: "App de fitness con diseño de movimiento fluido.",
      en: "Fitness tracking app with fluid motion design.",
    },
    tech: ["React", "Framer", "Tailwind"],
    hue: "linear-gradient(135deg,#111,#2b0000)",
    challenge: {
      es: "Añadir movimiento útil sin perder calma ni legibilidad en la interfaz.",
      en: "Bring meaningful motion to product routines while keeping the interface calm and readable.",
    },
    result: {
      es: "Una sensación más segura y premium, con feedback claro y atractivo.",
      en: "A more confident feel for the app, with action and feedback that feels premium.",
    },
    stat: { es: "31% más claridad", en: "31% higher clarity" },
    summary: {
      es: "Un producto donde el movimiento acompaña el hábito sin saturar la experiencia.",
      en: "A product moment where movement supports habit-building and the interface remains calm and precise.",
    },
    gallery: [
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    ],
    link: "https://example.com/pulse-app",
  },
];

export function Projects() {
  const { t, lang } = useI18n();
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
                  key={p.title[lang]}
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
                      0{i + 1} · {t("projects.project")}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
                      {p.title[lang]}
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
                          <p className="text-sm text-[#B5B5B5]">{p.desc[lang]}</p>
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
                {t("projects.close")}
              </button>

              <div className="grid h-full grid-cols-1 gap-0 md:grid-cols-[1.1fr_0.9fr]">
                <div className="relative flex items-center justify-center p-8 md:p-14">
                  <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />
                  <div className="relative z-10 max-w-2xl">
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-[#F5F5F5]">
                      {t("projects.caseStudy")}
                    </span>
                    <h3 className="mt-5 font-display text-5xl font-semibold md:text-7xl">{study.title[lang]}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#F0F0F0] md:text-base">{study.summary[lang]}</p>
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
                      <span className="text-xs uppercase tracking-[0.35em] text-[#B5B5B5]">{study.stat[lang]}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-black/35 p-8 md:p-12">
                  <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-[#B5B5B5]">{t("projects.impact")}</span>
                      <span className="rounded-full bg-[#E10600]/20 px-3 py-1 text-xs text-white">{study.stat[lang]}</span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#B5B5B5]">{t("projects.summary")}</p>
                        <p className="mt-2 text-sm leading-relaxed text-white">{study.desc[lang]}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#B5B5B5]">{t("projects.challenge")}</p>
                        <p className="mt-2 text-sm leading-relaxed text-white">{study.challenge[lang]}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#B5B5B5]">{t("projects.result")}</p>
                        <p className="mt-2 text-sm leading-relaxed text-white">{study.result[lang]}</p>
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
