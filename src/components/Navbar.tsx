import { useState } from "react";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
      <nav
        aria-label="Principal"
        className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12 lg:py-5"
      >
        <a href="#inicio" className="flex shrink-0 items-center" aria-label="PolyPOP — inicio">
          <img
            src="/assets/logo.svg"
            alt=""
            width={79}
            height={52}
            className="h-11 w-[67px] object-contain sm:h-[52px] sm:w-[79px]"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[20px] font-medium text-ink-black transition-colors hover:text-teal-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#descarga"
            className="flex items-center gap-2.5 rounded-lg bg-ink-black px-4 py-2.5 text-[20px] text-white transition-colors hover:bg-ink"
          >
            <img
              src="/assets/ic-download.svg"
              alt=""
              aria-hidden="true"
              className="h-5 w-5"
            />
            Descarga la app
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#descarga"
            className="flex items-center gap-2 rounded-lg bg-ink-black px-3.5 py-2 text-sm text-white sm:text-base"
          >
            <img src="/assets/ic-download.svg" alt="" aria-hidden="true" className="h-4 w-4" />
            Descarga
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-ink-black"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div id="mobile-menu" className="border-t border-black/5 bg-white lg:hidden">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-1 px-6 py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-lg font-medium text-ink-black transition-colors hover:bg-teal-light hover:text-teal-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
