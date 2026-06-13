import type { Metadata, Viewport } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Mirrors the original Google Fonts <link>: Plus Jakarta Sans (display) and
// DM Sans (body). next/font self-hosts them and exposes CSS variables that the
// Tailwind theme (globals.css) maps to font-display / font-body.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PolyPOP · Conecta con tu POP perfecto",
  description:
    "PolyPOP — Lo mejor pasa cuando las burbujas se encuentran. Conecta con tu POP perfecto. Descarga la app gratis.",
  icons: {
    icon: "/assets/favicon-256.png",
    apple: "/assets/app-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1fb3ae",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${jakarta.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
