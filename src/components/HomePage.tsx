"use client";

import { useEffect, useState } from "react";
import { MODES, type ModeId } from "../data/content";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ModeTabs from "./ModeTabs";
import MockupGallery from "./MockupGallery";
import Tagline from "./Tagline";
import FeatureCards from "./FeatureCards";
import DownloadBanner from "./DownloadBanner";
import Footer from "./Footer";

export default function HomePage() {
  const [mode, setMode] = useState<ModeId>("circle");
  const content = MODES[mode];

  // Pick up a deep-linked ?mode= on mount. Done in an effect (not the initial
  // state) so server and client render the same markup and avoid a hydration
  // mismatch.
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("mode");
    if (param === "date" || param === "circle") setMode(param);
  }, []);

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
