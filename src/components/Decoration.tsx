/**
 * A purely decorative, absolutely-positioned image (soft teal "blobs" and the
 * translucent gradient "bubbles" from the design). Never interactive and hidden
 * from assistive tech.
 */
interface DecorationProps {
  src: string;
  className?: string;
}

export default function Decoration({ src, className = "" }: DecorationProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`pointer-events-none absolute select-none ${className}`}
    />
  );
}
