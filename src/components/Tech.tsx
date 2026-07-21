import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { useI18n } from "@/lib/i18n";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiGreensock, SiFramer, SiGit, SiGithub, SiFigma,
} from "react-icons/si";
import type { IconType } from "react-icons";

const items: { icon: IconType; name: string; color: string }[] = [
  { icon: SiHtml5, name: "HTML", color: "#E44D26" },
  { icon: SiCss3, name: "CSS", color: "#1572B6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
  { icon: SiGreensock, name: "GSAP", color: "#88CE02" },
  { icon: SiFramer, name: "Framer Motion", color: "#ffffff" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiGithub, name: "GitHub", color: "#ffffff" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
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
                  <span className="text-xs text-[#B5B5B5] transition-colors group-hover:text-white">
                    {it.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
