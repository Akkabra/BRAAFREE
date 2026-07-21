import { motion } from "framer-motion";
import portrait from "@/assets/bryan-portrait.jpg";
import { useI18n } from "@/lib/i18n";

const fadeUp = {
  initial: { opacity: 0, y: 40, filter: "blur(20px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-32 md:pt-40 pb-20">
      {/* soft red glow */}
      <div className="pointer-events-none absolute -top-40 -right-20 h-[520px] w-[520px] rounded-full bg-[#E10600]/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -left-20 h-[380px] w-[380px] rounded-full bg-[#8B0000]/20 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ delay: 2.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[#B5B5B5] tracking-widest"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E10600] shadow-[0_0_12px_2px_rgba(225,6,0,0.6)]" />
            {t("hero.tag")}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 2.35, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display font-semibold leading-[0.9] text-[15vw] md:text-[9.5vw] lg:text-[8rem]"
          >
            <span className="block">BRYAN</span>
            <span className="block text-gradient-red">ALVAREZ</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 2.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-xl md:text-2xl text-white/90"
          >
            {t("hero.role")}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 2.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-lg text-base leading-relaxed text-[#B5B5B5]"
          >
            {t("hero.desc")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 2.75, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-red px-6 py-3 text-sm font-medium text-white shadow-[0_20px_50px_-20px_rgba(225,6,0,0.55)] transition-transform hover:scale-[1.03]"
            >
              {t("hero.cta1")}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#E10600]/60 hover:scale-[1.03]"
            >
              {t("hero.cta2")}
            </a>
          </motion.div>
        </div>

        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 2.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:col-span-5"
        >
          {/* deco shapes */}
          <div className="pointer-events-none absolute -inset-6 md:-inset-10">
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/5" />
            <div className="absolute -inset-2 rounded-[3rem] border border-[#E10600]/15" />
            <div className="absolute top-8 -left-10 h-24 w-24 rounded-full border border-[#E10600]/25" />
            <div className="absolute bottom-6 -right-8 h-32 w-32 rotate-12 border border-white/10" />
          </div>

          <div className="relative mx-auto aspect-[3/4] w-[85%] overflow-hidden rounded-[2rem] glow-red md:translate-y-6 md:translate-x-4">
            <img
              src={portrait}
              alt="Bryan Alvarez"
              width={912}
              height={1200}
              className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
