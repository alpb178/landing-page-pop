import type { ModeContent } from "../data/content";
import Decoration from "./Decoration";

interface MockupGalleryProps {
  content: ModeContent;
}

export default function MockupGallery({ content }: MockupGalleryProps) {
  return (
    <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-6 lg:px-12">
      {/* Soft glow behind the devices */}
      <Decoration
        src="/assets/blob-3.svg"
        className="left-1/2 top-1/2 hidden h-[620px] w-[640px] -translate-x-1/2 -translate-y-1/2 rotate-90 opacity-70 md:block"
      />
      {/* Bubbles */}
      <Decoration src="/assets/bubble-b.svg" className="-left-8 top-4 hidden h-[240px] w-[240px] lg:block" />
      <Decoration src="/assets/bubble-c.svg" className="-right-4 bottom-10 hidden h-[200px] w-[200px] lg:block" />
      <Decoration src="/assets/bubble-a.svg" className="left-[18%] top-[60%] hidden h-[170px] w-[170px] lg:block" />

      <div
        key={content.id}
        className="relative flex animate-fade-in items-end justify-center"
      >
        <img
          src={content.gallery.left}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="z-0 hidden w-[180px] translate-y-8 sm:block md:w-[230px] lg:w-[280px] lg:translate-y-12"
        />
        <img
          src={content.gallery.center}
          alt={`Mockups de la app PolyPOP — ${content.label}`}
          loading="lazy"
          decoding="async"
          className="relative z-10 -mx-8 w-[210px] sm:-mx-10 sm:w-[230px] md:-mx-16 md:w-[300px] lg:-mx-24 lg:w-[360px]"
        />
        <img
          src={content.gallery.right}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="z-0 hidden w-[180px] translate-y-8 sm:block md:w-[230px] lg:w-[280px] lg:translate-y-12"
        />
      </div>
    </div>
  );
}
