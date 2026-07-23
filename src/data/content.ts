/**
 * Content model for the Popyplan landing page.
 *
 * The Figma design ships two variants of the same page — "POP Circle"
 * (community / friends) and "POP Date" (dating). They share one layout and
 * only differ in copy + imagery, so we model each as a `ModeContent` object
 * and toggle between them via the mode tabs.
 */

export type ModeId = "circle" | "date";

export interface Feature {
  /** Path to a white-filled icon SVG in /public/assets. */
  icon: string;
  title: string;
  body: string;
}

export interface ModeContent {
  id: ModeId;
  label: string;
  /** Hero device screenshot. */
  hero: string;
  /** Three device mockups for the gallery (center is the hero piece). */
  gallery: {
    left: string;
    center: string;
    right: string;
  };
  /** Section sub-headline below the gallery. */
  tagline: string;
  /** Three feature highlights. */
  features: [Feature, Feature, Feature];
  /** Overlapping devices shown inside the download banner. */
  banner: {
    small: string;
    big: string;
  };
}

const ICONS = {
  community: "/assets/ic-community.svg",
  browser: "/assets/ic-browser.svg",
  chat: "/assets/ic-chat.svg",
} as const;

export const MODES: Record<ModeId, ModeContent> = {
  circle: {
    id: "circle",
    label: "POP Circle",
    hero: "/assets/circle-hero.png",
    gallery: {
      left: "/assets/circle-mockup-left.png",
      center: "/assets/circle-hero.png",
      right: "/assets/circle-mockup-right.png",
    },
    tagline:
      "Diseñado para quienes buscan conectar a través de sus intereses y hobbies.",
    features: [
      {
        icon: ICONS.community,
        title: "Conecta con personas que comparten tus pasiones.",
        body: "Crea y únete a comunidades de personas que comparten tus mismos intereses.",
      },
      {
        icon: ICONS.browser,
        title: "Ve más allá de una charla.",
        body: "Asiste a eventos cerca de ti y crea conexiones valiosas.",
      },
      {
        icon: ICONS.chat,
        title: "Comparte tus ideas.",
        body: "Expresa tus ideas en hilos abiertos a la comunidad.",
      },
    ],
    // The download banner is now identical across both modes — a profile
    // device behind (small) and the "¡Es un match!" device in front (big).
    banner: {
      small: "/assets/banner-phone-profile.png",
      big: "/assets/banner-phone-match.png",
    },
  },

  date: {
    id: "date",
    label: "POP Date",
    // Figma exported byte-identical assets for the date hero,
    // so we reference the shared circle file instead of shipping a duplicate PNG.
    hero: "/assets/circle-hero.png",
    gallery: {
      left: "/assets/date-mockup-left.png",
      center: "/assets/date-mockup-center.png",
      right: "/assets/date-mockup-right.png",
    },
    tagline:
      "Diseñado para quienes buscan conexiones románticas a través de intereses y experiencias compartidas.",
    features: [
      {
        icon: ICONS.community,
        title: "Conecta con personas que comparten tus pasiones.",
        body: "Liga con personas que entienden lo que te encanta.",
      },
      {
        icon: ICONS.chat,
        title: "Todo comienza con un mensaje.",
        body: "Inicia conversaciones auténticas con personas que comparten tus intereses.",
      },
      {
        icon: ICONS.chat,
        title: "Lleva el chat a una experiencia real.",
        body: "Conoce planes y eventos en la zona ideales para tener citas.",
      },
    ],
    banner: {
      small: "/assets/banner-phone-profile.png",
      big: "/assets/banner-phone-match.png",
    },
  },
};

export const MODE_ORDER: ModeId[] = ["circle", "date"];

/** Live app-store download links. */
export const STORE_LINKS = {
  appStore: "https://apps.apple.com/us/app/polypop/id6755899118",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.tikneo.popmobile",
} as const;

/**
 * Single "smart" download QR for the footer. It encodes the absolute URL of
 * the /download redirect page (see DownloadRedirect), which detects the
 * scanning device and forwards it to the right store. The SVG is a real,
 * scannable QR living in /public/assets.
 */
export const DOWNLOAD_QR = {
  src: "/assets/qr-download.svg",
  alt: "Código QR para descargar Popyplan (iOS o Android)",
  /** Where the QR points; also used as the in-page link for desktop clicks. */
  href: "/download",
} as const;

/** Contact email for support and legal enquiries. */
export const SUPPORT_EMAIL = "apple@tikneo.com";

/** Shared navigation links (hero, footer, mobile menu). */
export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre nosotros", href: "#nosotros" },
  { label: "Funcionalidades", href: "#funcionalidades" },
] as const;
