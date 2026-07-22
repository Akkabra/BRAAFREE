import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { useEffect, useState } from "react";

const links = [
  { key: "nav.home", href: "#home" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.tech", href: "#tech" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.contact", href: "#contact" },
];

export function Navbar() {
  const { t, lang, toggle } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`glass flex items-center gap-2 rounded-full px-3 py-2 md:px-5 md:py-3 transition-all duration-300 ${
          scrolled
            ? "border-transparent shadow-[0_18px_50px_-24px_rgba(225,6,0,0.8)] ring-1 ring-white/10"
            : "border-gradient-red shadow-[0_12px_30px_-22px_rgba(0,0,0,0.9)]"
        }`}
      >
        <a href="#home" className="mr-2 hidden md:flex items-center gap-2 px-2">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-red shadow-[0_0_12px_rgba(225,6,0,0.6)]" />
          <span className="font-display text-sm tracking-[0.28em] text-white">BA</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.key}>
              <a
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium tracking-[0.12em] text-[#B5B5B5] transition-all duration-300 hover:text-white hover:bg-white/[0.04]"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded-full px-3 py-2 text-sm text-white"
          aria-label="menu"
        >
          {open ? "×" : "≡"}
        </button>

        <div className="mx-2 hidden md:block h-6 w-px bg-white/10" />

        <button
          onClick={toggle}
          className="group relative flex items-center gap-1 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[11px] font-semibold tracking-[0.25em] uppercase transition-all duration-300 hover:border-[#E10600]/70 hover:bg-[#E10600]/10"
        >
          <span className={lang === "es" ? "text-white" : "text-[#B5B5B5]"}>ES</span>
          <span className="text-white/30">|</span>
          <span className={lang === "en" ? "text-white" : "text-[#B5B5B5]"}>EN</span>
        </button>
      </nav>

      {open && (
        <div className="absolute top-full mt-3 w-[calc(100%-2rem)] max-w-md rounded-[1.5rem] border border-white/10 bg-black/70 p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.key}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-lg px-4 py-3 text-sm font-medium tracking-[0.12em] text-[#B5B5B5] transition-colors hover:bg-white/5 hover:text-white"
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
