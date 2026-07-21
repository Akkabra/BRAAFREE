import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, string>;

const es: Dict = {
  "nav.home": "Inicio",
  "nav.experience": "Experiencia",
  "nav.tech": "Tecnologías",
  "nav.projects": "Proyectos",
  "nav.contact": "Contacto",
  "hero.role": "Frontend Developer",
  "hero.tag": "4+ años creando experiencias web interactivas.",
  "hero.desc": "Creo experiencias web rápidas, elegantes e interactivas donde el diseño y el desarrollo trabajan juntos.",
  "hero.cta1": "Ver proyectos",
  "hero.cta2": "Contactarme",
  "exp.title": "Experiencia",
  "exp.kicker": "Un viaje enfocado en el detalle",
  "exp.2022": "Comencé como desarrollador frontend aprendiendo HTML, CSS y JavaScript.",
  "exp.2024": "Especialización en React, TailwindCSS, animaciones y desarrollo de interfaces modernas.",
  "exp.2026": "Creación de experiencias web inmersivas enfocadas en rendimiento, accesibilidad y diseño de alto impacto.",
  "tech.title": "Tecnologías",
  "tech.kicker": "Stack diario",
  "projects.title": "Proyectos",
  "projects.kicker": "Trabajo seleccionado",
  "projects.view": "Ver proyecto",
  "contact.title": "Trabajemos juntos.",
  "contact.desc": "Si tienes una idea, puedo convertirla en una experiencia web moderna.",
  "contact.cta": "Contactar",
  "footer.rights": "Todos los derechos reservados",
  "loader.role": "Frontend Developer",
};

const en: Dict = {
  "nav.home": "Home",
  "nav.experience": "Experience",
  "nav.tech": "Technologies",
  "nav.projects": "Projects",
  "nav.contact": "Contact",
  "hero.role": "Frontend Developer",
  "hero.tag": "4+ years crafting interactive web experiences.",
  "hero.desc": "I build fast, elegant and interactive web experiences where design and development work as one.",
  "hero.cta1": "See projects",
  "hero.cta2": "Get in touch",
  "exp.title": "Experience",
  "exp.kicker": "A detail-driven journey",
  "exp.2022": "Started as a frontend developer learning HTML, CSS and JavaScript.",
  "exp.2024": "Specialized in React, TailwindCSS, animations and modern interface development.",
  "exp.2026": "Building immersive web experiences focused on performance, accessibility and high-impact design.",
  "tech.title": "Technologies",
  "tech.kicker": "Daily stack",
  "projects.title": "Projects",
  "projects.kicker": "Selected work",
  "projects.view": "View project",
  "contact.title": "Let's work together.",
  "contact.desc": "If you have an idea, I can turn it into a modern web experience.",
  "contact.cta": "Contact",
  "footer.rights": "All rights reserved",
  "loader.role": "Frontend Developer",
};

const dicts: Record<Lang, Dict> = { es, en };

const Ctx = createContext<{ lang: Lang; t: (k: string) => string; toggle: () => void }>({
  lang: "es",
  t: (k) => k,
  toggle: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const toggle = useCallback(() => setLang((l) => (l === "es" ? "en" : "es")), []);
  const t = useCallback((k: string) => dicts[lang][k] ?? k, [lang]);
  return <Ctx.Provider value={{ lang, t, toggle }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
