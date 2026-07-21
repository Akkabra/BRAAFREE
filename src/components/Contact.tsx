import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="border-gradient-red glass relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 text-center"
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-[#E10600]/25 blur-[100px]" />
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#B5B5B5]">— Contact</p>
          <h2 className="font-display text-5xl md:text-7xl font-semibold leading-[0.95]">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[#B5B5B5]">{t("contact.desc")}</p>
          <a
            href="mailto:hello@bryanalvarez.dev"
            className="group relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#E10600]/60 bg-transparent px-8 py-4 text-sm font-medium text-white transition-transform hover:scale-[1.05]"
          >
            <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-red transition-transform duration-500 group-hover:translate-y-0" />
            <span className="relative z-10">{t("contact.cta")}</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
