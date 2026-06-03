import { NAV_LINKS, STORE_LINKS } from "../data/content";
import QrPlaceholder from "./QrPlaceholder";

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

export default function Footer() {
  return (
    <footer className="relative bg-white font-body">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Logo + link columns */}
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16 lg:gap-24">
            <img src="/assets/logo.svg" alt="PolyPOP" className="h-[52px] w-auto" />
            <nav aria-label="Enlaces del pie" className="flex gap-16 sm:gap-20">
              {COLUMNS.map((col) => (
                <div key={col.title} className="flex flex-col gap-5">
                  <p className="text-xl font-bold text-ink-black">{col.title}</p>
                  <ul className="flex flex-col gap-[18px]">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          {...(isExternal(link.href)
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="text-lg text-ink-black transition-colors hover:text-teal-text"
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

          {/* QR card */}
          <div className="flex w-full items-center gap-4 self-start rounded-[32px] bg-teal px-5 py-4 sm:w-auto sm:px-6">
            <div className="size-[120px] shrink-0 rounded-2xl bg-white p-2 sm:size-[200px] sm:p-2.5">
              <QrPlaceholder className="h-full w-full" />
            </div>
            <p className="flex-1 text-right text-base font-bold leading-[1.2] text-white sm:w-[197px] sm:flex-none sm:text-xl">
              Escanea el código QR para descargar la aplicación
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-black/10 pt-6 text-sm text-ink/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PolyPOP. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-teal-text">
              Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-teal-text">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
