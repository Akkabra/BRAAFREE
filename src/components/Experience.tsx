import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionTitle } from "./SectionTitle";

export function Experience() {
  const { t } = useI18n();
  const items = [
    { year: "2022", body: t("exp.2022") },
    { year: "2024", body: t("exp.2024") },
    { year: "2026", body: t("exp.2026") },
  ];

  return (
    <section id="experience" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle kicker={t("exp.kicker")} title={t("exp.title")} />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.year}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass group relative rounded-3xl p-8 transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_rgba(225,6,0,0.4)]"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-5xl font-semibold text-gradient-red">
                  {it.year}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#E10600] shadow-[0_0_10px_rgba(225,6,0,0.7)]" />
              </div>
              <p className="text-[15px] leading-relaxed text-[#B5B5B5]">{it.body}</p>
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E10600]/0 via-transparent to-[#E10600]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
