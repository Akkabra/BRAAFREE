import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { useI18n } from "@/lib/i18n";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiGreensock, SiFramer, SiGit, SiGithub, SiFigma,
} from "react-icons/si";
import type { IconType } from "react-icons";

const items: { icon: IconType; name: string; color: string; level: 1 | 2 | 3 }[] = [
  { icon: SiHtml5, name: "HTML", color: "#E44D26", level: 3 },
  { icon: SiCss, name: "CSS", color: "#1572B6", level: 3 },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", level: 3 },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6", level: 3 },
  { icon: SiReact, name: "React", color: "#61DAFB", level: 3 },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff", level: 2 },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8", level: 3 },
  { icon: SiGreensock, name: "GSAP", color: "#88CE02", level: 1 },
  { icon: SiFramer, name: "Framer Motion", color: "#ffffff", level: 1 },
  { icon: SiGit, name: "Git", color: "#F05032", level: 2 },
  { icon: SiGithub, name: "GitHub", color: "#ffffff", level: 3 },
  { icon: SiFigma, name: "Figma", color: "#F24E1E", level: 2 },
];

export function Tech() {
  const { t } = useI18n();
  return (
    <section id="tech" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle kicker={t("tech.kicker")} title={t("tech.title")} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="border-gradient-red glass mt-16 rounded-[2rem] p-8 md:p-12"
        >
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <motion.div
                  key={it.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="group flex flex-col items-center gap-3"
                >
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[8deg] group-hover:border-[#E10600]/40 group-hover:bg-white/[0.05]">
                    <Icon size={30} color={it.color} />
                  </div>
                  <span className="text-xs font-medium text-[#F5F5F5] transition-colors group-hover:text-white">
                    {it.name}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 3 }, (_, idx) => (
                      <span
                        key={`${it.name}-${idx}`}
                        className={`h-1.5 rounded-full transition-all ${idx < it.level ? "w-3 bg-[#E10600]" : "w-1.5 bg-white/20"}`}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
