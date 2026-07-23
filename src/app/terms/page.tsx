import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { TERMS_DOC } from "@/data/terms";

export const metadata: Metadata = {
  title: "Términos y Condiciones · Popyplan",
  description:
    "Términos y Condiciones de Popyplan — reglas de uso de la aplicación, conducta de la comunidad y responsabilidades.",
};

export default function Page() {
  return <LegalPage doc={TERMS_DOC} />;
}
