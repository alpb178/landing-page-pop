import type { ModeContent } from "../data/content";

interface TaglineProps {
  content: ModeContent;
}

export default function Tagline({ content }: TaglineProps) {
  return (
    <p
      key={content.id}
      className="mx-auto max-w-[760px] animate-fade-in px-6 text-center text-2xl font-semibold leading-[1.2] text-ink sm:text-[32px]"
    >
      {content.tagline}
    </p>
  );
}
