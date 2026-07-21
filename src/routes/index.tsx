import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Tech } from "@/components/Tech";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { GridBackground } from "@/components/GridBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bryan Alvarez — Frontend Developer" },
      { name: "description", content: "Portafolio de Bryan Alvarez, Frontend Developer con 4+ años creando experiencias web rápidas, elegantes e interactivas." },
      { property: "og:title", content: "Bryan Alvarez — Frontend Developer" },
      { property: "og:description", content: "Experiencias web modernas, fluidas y de alto impacto." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <I18nProvider>
      <Loader />
      <SmoothScroll>
        <div className="relative min-h-screen bg-[#050505] text-white">
          <GridBackground />
          <Navbar />
          <main>
            <Hero />
            <Experience />
            <Tech />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </I18nProvider>
  );
}
