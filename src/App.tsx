import { useEffect, useState } from "react";
import { MODES, type ModeId } from "./data/content";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ModeTabs from "./components/ModeTabs";
import MockupGallery from "./components/MockupGallery";
import Tagline from "./components/Tagline";
import FeatureCards from "./components/FeatureCards";
import DownloadBanner from "./components/DownloadBanner";
import Footer from "./components/Footer";

function initialMode(): ModeId {
  if (typeof window !== "undefined") {
    const param = new URLSearchParams(window.location.search).get("mode");
    if (param === "date" || param === "circle") return param;
  }
  return "circle";
}

export default function App() {
  const [mode, setMode] = useState<ModeId>(initialMode);
  const content = MODES[mode];

  // Keep the URL in sync so the active mode is shareable/deep-linkable.
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("mode", mode);
    window.history.replaceState(null, "", url);
  }, [mode]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-white">
      <Navbar />

      <main className="flex-1">
        <Hero content={content} />

        {/* Mode switcher + device gallery + tagline */}
        <section id="nosotros" className="relative scroll-mt-24">
          <h2 className="sr-only">Conoce PolyPOP</h2>
          <div className="flex flex-col gap-10 pt-16 lg:gap-14 lg:pt-24">
            <ModeTabs mode={mode} onChange={setMode} />
            <MockupGallery content={content} />
            <Tagline content={content} />
          </div>
        </section>

        <div className="pt-16 lg:pt-24">
          <FeatureCards content={content} />
        </div>

        <DownloadBanner content={content} />
      </main>

      <Footer />
    </div>
  );
}
