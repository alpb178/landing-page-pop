import type { ModeContent } from "../data/content";
import DownloadBadges from "./DownloadBadges";

interface HeroProps {
  content: ModeContent;
}

/**
 * Floating photo cards that frame the hero device, per the updated Figma hero
 * (node 9483:14844). Positions are expressed as percentages of the phone box so
 * they scale with it. Shown on lg+ only; the phone stands alone below that.
 */
const HERO_CARDS = [
  {
    src: "/assets/hero-card-couple.jpg",
    // top-right, flush to the device's right edge
    style: { left: "68%", top: "1%", width: "31%", aspectRatio: "119 / 123" },
  },
  {
    src: "/assets/hero-card-group-left.jpg",
    // mid-left, overlapping the device's left edge
    style: { left: "-19%", top: "48%", width: "40%", aspectRatio: "155 / 160" },
  },
  {
    src: "/assets/hero-card-group-br.jpg",
    // bottom-right, just past the device's right edge
    style: { left: "74%", top: "71%", width: "33%", aspectRatio: "129 / 133" },
  },
] as const;

export default function Hero({ content }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white to-teal-deep shadow-[0_4px_32px_4px_rgba(0,0,0,0.05)]"
    >
      {/* Flowing silk texture lightened over the gradient (Figma image 1259) */}
      <img
        src="/assets/hero-texture.jpg"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-lighten"
      />
      {/* Soft glow behind the device (top-right) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 hidden h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_70%)] lg:block"
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

        {/* Device + floating photo cards */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-[260px] animate-fade-in sm:w-[300px] lg:w-[384px]">
            <img
              key={content.id}
              src={content.hero}
              alt={`Vista de la app PolyPOP — ${content.label}`}
              decoding="async"
              fetchPriority="high"
              className="relative z-10 w-full drop-shadow-2xl"
            />

            {HERO_CARDS.map((card) => (
              <img
                key={card.src}
                src={card.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                style={card.style}
                className="absolute z-20 hidden rounded-2xl object-cover shadow-[0_10px_28px_-8px_rgba(0,0,0,0.4)] ring-1 ring-white/30 lg:block"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
