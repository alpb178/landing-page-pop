/**
 * App Store / Google Play download badges.
 *
 *  - `variant="hero"`   white pill with a black outline (used on white sections)
 *  - `variant="banner"` light-teal pill with a black outline (used on the
 *                       teal gradient banner)
 */
import { STORE_LINKS } from "../data/content";

interface DownloadBadgesProps {
  variant?: "hero" | "banner";
  className?: string;
}

interface BadgeProps {
  icon: string;
  iconWidth: string;
  iconHeight: string;
  caption: string;
  store: string;
  href: string;
  surface: string;
}

function Badge({
  icon,
  iconWidth,
  iconHeight,
  caption,
  store,
  href,
  surface,
}: BadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex shrink-0 items-center gap-3 rounded-lg border border-ink-black px-4 py-2 transition-transform duration-200 hover:-translate-y-0.5 ${surface}`}
    >
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className="shrink-0"
        style={{ width: iconWidth, height: iconHeight }}
      />
      <span className="flex flex-col leading-[1.2] text-ink">
        <span className="text-[15px] font-normal sm:text-[18px]">{caption}</span>
        <span className="text-xl font-bold sm:text-2xl">{store}</span>
      </span>
    </a>
  );
}

export default function DownloadBadges({
  variant = "hero",
  className = "",
}: DownloadBadgesProps) {
  const surface =
    variant === "banner"
      ? "bg-teal-light hover:bg-teal-light-active"
      : "bg-white hover:bg-teal-light/60";

  const playStoreIcon =
    variant === "banner" ? "/assets/playstore-color.svg" : "/assets/playstore.svg";

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <Badge
        href={STORE_LINKS.appStore}
        icon="/assets/apple.svg"
        iconWidth="24px"
        iconHeight="29px"
        caption="Descárgalo en"
        store="App Store"
        surface={surface}
      />
      <Badge
        href={STORE_LINKS.googlePlay}
        icon={playStoreIcon}
        iconWidth="24px"
        iconHeight="27px"
        caption="Obtenlo en"
        store="Google Play"
        surface={surface}
      />
    </div>
  );
}
