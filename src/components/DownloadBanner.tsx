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
        {/* Gradient darkened so white text clears WCAG AA on the lightest stop */}
        <div className="relative rounded-[32px] bg-[linear-gradient(155deg,#19a39e_0%,#0e7a74_72%)] px-7 py-12 shadow-[0_24px_60px_-24px_rgba(14,122,116,0.7)] sm:px-10 lg:px-16 lg:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Copy + badges */}
            <div className="flex flex-col gap-8">
              <h2 className="max-w-[500px] text-3xl font-bold leading-[1.2] text-white sm:text-4xl lg:text-[36px]">
                Descárgala gratis y conecta con tu <span className="font-extrabold">POP</span>{" "}
                ideal.
              </h2>
              <DownloadBadges variant="banner" />
            </div>

            {/* Devices — overlap and rise above the banner on desktop */}
            <div className="relative hidden h-[300px] lg:block">
              <img
                key={`${content.id}-small`}
                src={content.banner.small}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute -top-14 left-0 z-0 w-[230px] animate-fade-in drop-shadow-xl xl:left-10 xl:w-[255px]"
              />
              <img
                key={`${content.id}-big`}
                src={content.banner.big}
                alt={`Descarga PolyPOP — ${content.label}`}
                loading="lazy"
                decoding="async"
                className="absolute -top-32 right-0 z-10 w-[285px] animate-fade-in drop-shadow-2xl xl:right-10 xl:w-[310px]"
              />
            </div>
          </div>

          {/* Mobile / tablet device preview */}
          <div className="mt-10 flex justify-center lg:hidden">
            <img
              src={content.banner.big}
              alt={`Descarga PolyPOP — ${content.label}`}
              loading="lazy"
              decoding="async"
              className="w-[220px] drop-shadow-2xl sm:w-[240px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
