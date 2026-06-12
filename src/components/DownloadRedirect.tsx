import { useEffect, useState } from "react";
import { STORE_LINKS } from "../data/content";

/**
 * /descargar — the target of the footer QR. Detects the *scanning* device and
 * redirects it to the matching store; on desktop / unknown devices it shows
 * both store buttons instead of redirecting.
 */
export default function DownloadRedirect() {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    document.title = "Descargar PolyPOP";
    const ua = navigator.userAgent || "";
    const isIOS =
      /iPad|iPhone|iPod/i.test(ua) ||
      // iPadOS 13+ reports as "Macintosh" but is a touch device.
      (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(ua);

    if (isIOS) {
      window.location.replace(STORE_LINKS.appStore);
    } else if (isAndroid) {
      window.location.replace(STORE_LINKS.googlePlay);
    } else {
      setShowFallback(true);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-b from-[#1fb3ae] to-[#168a86] px-6 text-center font-display text-white">
      <img src="/assets/logo-white.svg" alt="PolyPOP" className="w-[120px]" />

      {showFallback ? (
        <>
          <p className="text-lg font-semibold">Descarga PolyPOP en tu tienda de aplicaciones</p>
          <div className="flex w-full max-w-[360px] flex-col gap-3">
            <a
              href={STORE_LINKS.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 py-3.5 font-bold text-ink-black transition-opacity hover:opacity-90"
            >
              Descargar para iPhone (App Store)
            </a>
            <a
              href={STORE_LINKS.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 py-3.5 font-bold text-ink-black transition-opacity hover:opacity-90"
            >
              Descargar para Android (Google Play)
            </a>
            <a href="/" className="text-sm text-white/85 underline underline-offset-2">
              Volver al inicio
            </a>
          </div>
        </>
      ) : (
        <p className="text-lg font-semibold">Redirigiendo a la tienda de aplicaciones…</p>
      )}
    </div>
  );
}
