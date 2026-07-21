import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-[#B5B5B5]">© 2026 Bryan Alvarez · {t("footer.rights")}</p>
        <div className="flex items-center gap-3">
          {[
            { icon: FiGithub, href: "https://github.com" },
            { icon: FiLinkedin, href: "https://linkedin.com" },
            { icon: FiMail, href: "mailto:hello@bryanalvarez.dev" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#B5B5B5] transition-all hover:scale-110 hover:border-[#E10600]/60 hover:text-white"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
