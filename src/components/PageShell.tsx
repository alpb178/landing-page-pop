import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "./Footer";

interface PageShellProps {
  /** Page <h1>. */
  title: string;
  /** Optional muted line under the title (e.g. a "last updated" label). */
  subtitle?: string;
  children: ReactNode;
}

/**
 * Shared chrome for the standalone PolyPOP pages (legal, support…): a minimal
 * sticky header (logo → home + "Volver al inicio"), a teal title band, and the
 * same full <Footer /> used on the home page so the footer is consistent across
 * every page.
 */
export default function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white font-body text-ink">
      {/* Minimal header — logo links back home */}
      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12 lg:py-5">
          <Link href="/" className="flex shrink-0 items-center" aria-label="PolyPOP — inicio">
            <img
              src="/assets/logo.svg"
              alt="PolyPOP"
              width={79}
              height={52}
              className="h-11 w-[67px] object-contain sm:h-[52px] sm:w-[79px]"
            />
          </Link>
          <Link
            href="/"
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

      {/* Same full footer as the home page */}
      <Footer />
    </div>
  );
}
