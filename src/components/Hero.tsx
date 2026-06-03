import type { ModeContent } from "../data/content";
import DownloadBadges from "./DownloadBadges";
import Decoration from "./Decoration";

interface HeroProps {
  content: ModeContent;
}

export default function Hero({ content }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-24 overflow-hidden bg-white shadow-[0_4px_32px_4px_rgba(0,0,0,0.05)]"
    >
      {/* Soft teal glow behind the device (only in the two-column layout) */}
      <Decoration
        src="/assets/blob-1.svg"
        className="-right-24 -top-24 hidden h-[640px] w-[600px] rotate-[20deg] opacity-80 lg:block"
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-10 px-6 pb-16 pt-12 md:grid-cols-[1fr_minmax(300px,440px)] md:gap-8 lg:grid-cols-[1fr_minmax(360px,520px)] lg:px-12 lg:pb-24 lg:pt-20">
        {/* Copy */}
        <div className="flex max-w-[800px] flex-col gap-7">
          <div className="flex flex-col gap-5">
            <h1 className="text-[40px] font-bold leading-[1.1] text-ink sm:text-[52px] lg:text-[64px]">
              Lo mejor pasa cuando las burbujas se encuentran.
            </h1>
            <p className="text-xl text-ink sm:text-2xl">
              Conecta con tu <span className="font-bold">POP</span> perfecto.
            </p>
          </div>
          <DownloadBadges variant="hero" />
        </div>

        {/* Device */}
        <div className="relative flex justify-center md:justify-end">
          <img
            key={content.id}
            src={content.hero}
            alt={`Vista de la app PolyPOP — ${content.label}`}
            decoding="async"
            fetchPriority="high"
            className="relative w-[260px] animate-fade-in drop-shadow-2xl sm:w-[300px] lg:w-[360px]"
          />
        </div>
      </div>
    </section>
  );
}
