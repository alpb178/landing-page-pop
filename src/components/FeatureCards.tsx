import type { Feature, ModeContent } from "../data/content";
import Decoration from "./Decoration";

interface FeatureCardsProps {
  content: ModeContent;
}

function IconChip({ icon }: { icon: string }) {
  return (
    <div className="relative size-16 shrink-0 overflow-hidden rounded-[32px] bg-teal shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
      <span className="absolute inset-0 flex items-center justify-center">
        <img src={icon} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
      </span>
      {/* Inner shadow for the soft, embossed look */}
      <span className="pointer-events-none absolute inset-0 rounded-[32px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <div className="flex max-w-[340px] flex-col gap-4">
      <IconChip icon={feature.icon} />
      <div className="flex flex-col gap-2 leading-[1.2] text-ink">
        <h3 className="text-2xl font-bold">{feature.title}</h3>
        <p className="text-lg text-ink/90">{feature.body}</p>
      </div>
    </div>
  );
}

export default function FeatureCards({ content }: FeatureCardsProps) {
  return (
    <section id="funcionalidades" className="relative scroll-mt-24">
      <Decoration
        src="/assets/bubble-b.svg"
        className="left-2 top-1/2 hidden h-[230px] w-[230px] -translate-y-1/2 lg:block"
      />
      <Decoration
        src="/assets/bubble-c.svg"
        className="right-6 -top-10 hidden h-[210px] w-[210px] lg:block"
      />

      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <h2 className="sr-only">Funcionalidades</h2>
        <div
          key={content.id}
          className="relative mx-auto grid max-w-[1180px] animate-rise-in grid-cols-1 gap-8 rounded-3xl bg-white/10 px-6 py-10 sm:grid-cols-2 sm:gap-10 sm:px-8 sm:py-12 lg:grid-cols-3 lg:gap-16"
        >
          {content.features.map((feature, i) => (
            <FeatureItem key={`${content.id}-${i}`} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
