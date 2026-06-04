import type { ModeContent } from "../data/content";
import DownloadBadges from "./DownloadBadges";
import Decoration from "./Decoration";

interface DownloadBannerProps {
  content: ModeContent;
}

export default function DownloadBanner({ content }: DownloadBannerProps) {
  return (
    <section
      id="descarga"
      className="relative scroll-mt-24 px-6 pb-24 pt-20 lg:px-12 lg:pb-28 lg:pt-32"
    >
      <Decoration
        src="/assets/blob-2.svg"
        className="-right-10 bottom-0 hidden h-[420px] w-[460px] rotate-[86deg] opacity-70 lg:block"
      />

      <div className="relative mx-auto max-w-[1344px]">
        <div className="relative rounded-[32px] bg-teal-deep px-7 py-12 shadow-[0_24px_60px_-24px_rgba(14,122,116,0.7)] sm:px-10 lg:px-16 lg:py-14">
          {/* Background: light cyan -> teal gradient with a wavy glass texture
              screened on top, per the updated Figma banner (node 9475:14779). */}
          <div className="absolute inset-0 overflow-hidden rounded-[32px]">
            <div className="absolute inset-0 bg-[linear-gradient(105deg,#8ed4f1_11%,#47b9b5_100%)]" />
            <img
              src="/assets/banner-texture.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-[0.32] mix-blend-screen"
            />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            {/* Copy + badges */}
            <div className="flex flex-col gap-8">
              <h2 className="max-w-[500px] text-3xl font-bold leading-[1.2] text-white sm:text-4xl lg:text-[36px]">
                Descárgala gratis y conecta con tu <span className="font-extrabold">POP</span>{" "}
                ideal.
              </h2>
              <DownloadBadges variant="banner" />
            </div>

            {/* Devices — two overlapping phones that rise above the banner.
                Profile sits behind/lower-left, the "match" screen in front/right. */}
            <div className="relative hidden h-[300px] lg:block">
              {/* Profile device — behind, lower, overlapped by the match phone */}
              <img
                key={`${content.id}-small`}
                src={content.banner.small}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute bottom-[-32px] right-[150px] z-0 w-[270px] animate-fade-in drop-shadow-xl xl:right-[170px] xl:w-[288px]"
              />
              {/* "¡Es un match!" device — in front, raised, right */}
              <img
                key={`${content.id}-big`}
                src={content.banner.big}
                alt={`Descarga PolyPOP — ${content.label}`}
                loading="lazy"
                decoding="async"
                className="absolute -top-28 right-0 z-10 w-[316px] animate-fade-in drop-shadow-2xl xl:right-6 xl:w-[338px]"
              />
            </div>
          </div>

          {/* Mobile / tablet device preview */}
          <div className="relative mt-10 flex justify-center lg:hidden">
            <img
              src={content.banner.big}
              alt={`Descarga PolyPOP — ${content.label}`}
              loading="lazy"
              decoding="async"
              className="w-[230px] drop-shadow-2xl sm:w-[250px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
