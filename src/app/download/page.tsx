import type { Metadata } from "next";
import DownloadRedirect from "@/components/DownloadRedirect";

export const metadata: Metadata = {
  title: "Descargar Popyplan",
  description: "Descarga Popyplan — te llevamos a la tienda de tu dispositivo.",
  robots: { index: false },
};

export default function Page() {
  return <DownloadRedirect />;
}
