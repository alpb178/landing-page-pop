import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface PageShellProps {
  /** Page <h1>. */
  title: string;
  /** Optional muted line under the title (e.g. a "last updated" label). */
  subtitle?: string;
  children: ReactNode;
}

/**
 * Shared chrome for the standalone PolyPOP pages (legal, support…): a minimal
 * sticky header (logo → home + "Volver al inicio"), a teal title band, and a
 * minimal footer. Self-contained — does not rely on the home page's in-page
 * anchor navigation.
 */
export default function PageShell({ title, subtitle, children }: PageShellProps) {
  // SPA routes share one document, so set the tab title per page.
  useEffect(() => {
    document.title = `${title} · PolyPOP`;
  }, [title]);

  return (
    <div className="flex min-h-screen flex-col bg-white font-body text-ink">
      {/* Minimal header — logo links back home */}
      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12 lg:py-5">
          <Link to="/" className="flex shrink-0 items-center" aria-label="PolyPOP — inicio">
            <img
              src="/assets/logo.svg"
              alt="PolyPOP"
              width={79}
              height={52}
              className="h-11 w-[67px] object-contain sm:h-[52px] sm:w-[79px]"
            />
          </Link>
          <Link
            to="/"
            className="rounded-lg px-4 py-2 text-base font-medium text-ink-black transition-colors hover:text-teal-text"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Title band */}
        <div className="bg-gradient-to-b from-teal-light to-white">
          <div className="mx-auto w-full max-w-[820px] px-6 pb-10 pt-14 lg:pt-20">
            <h1 className="font-display text-3xl font-extrabold text-ink-black sm:text-4xl">
              {title}
            </h1>
            {subtitle && <p className="mt-3 text-sm text-ink/50">{subtitle}</p>}
          </div>
        </div>

        {children}
      </main>

      {/* Minimal footer */}
      <footer className="bg-gradient-to-b from-[#1fb3ae] to-[#168a86] text-white">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-2 px-6 py-10 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <p>© {new Date().getFullYear()} PolyPOP. Todos los derechos reservados.</p>
          <Link to="/" className="transition-colors hover:text-white">
            Volver al inicio
          </Link>
        </div>
      </footer>
    </div>
  );
}
