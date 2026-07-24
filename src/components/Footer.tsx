import Link from "next/link";
import { DOWNLOAD_QR, NAV_LINKS, STORE_LINKS } from "../data/content";

const COLUMNS = [
  { title: "Producto", links: NAV_LINKS },
  {
    title: "Descargas",
    links: [
      { label: "iOS", href: STORE_LINKS.appStore },
      { label: "Android", href: STORE_LINKS.googlePlay },
    ],
  },
] as const;

/** Store links are external; nav anchors stay in-page. */
const isExternal = (href: string) => /^https?:/.test(href);

/**
 * Footer matching the Figma design (node 9483:16911): a teal gradient surface
 * with a white logo, white link columns, and a frosted QR card.
 */
export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#1fb3ae] to-[#168a86] font-body text-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Logo + link columns */}
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16 lg:gap-24">
            <img
              src="/assets/logo-white.svg"
              alt="Popyplan"
              width={133}
              height={88}
              className="h-[72px] w-[108px] object-contain lg:h-[88px] lg:w-[133px]"
            />
            <nav aria-label="Enlaces del pie" className="flex gap-16 sm:gap-20">
              {COLUMNS.map((col) => (
                <div key={col.title} className="flex flex-col gap-6">
                  <p className="text-xl font-bold text-white">{col.title}</p>
                  <ul className="flex flex-col gap-[18px]">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          {...(isExternal(link.href)
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="text-lg text-white/90 transition-colors hover:text-white"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          {/* Frosted QR card — one smart code that routes to the right store */}
          <div className="flex w-full items-center gap-4 self-start rounded-[16px] bg-white/10 px-5 py-4 ring-1 ring-inset ring-white/20 backdrop-blur-sm sm:w-auto sm:px-6">
            <a
              href={DOWNLOAD_QR.href}
              target="_blank"
              rel="noopener noreferrer"
              className="size-[120px] shrink-0 rounded-2xl bg-white p-2 sm:size-[200px] sm:p-2.5"
            >
              <img src={DOWNLOAD_QR.src} alt={DOWNLOAD_QR.alt} className="h-full w-full" />
            </a>
            <p className="flex-1 text-right text-base font-bold leading-[1.2] text-white sm:w-[197px] sm:flex-none sm:text-xl">
              Escanea el código QR para descargar la aplicación
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Popyplan. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/support" className="transition-colors hover:text-white">
              Soporte
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacidad
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
