import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { PRIVACY_DOC } from "@/data/privacy";

export const metadata: Metadata = {
  title: "Política de Privacidad · PolyPOP",
  description:
    "Política de Privacidad de PolyPOP — cómo recopilamos, usamos, almacenamos y compartimos tu información.",
};

export default function Page() {
  return <LegalPage doc={PRIVACY_DOC} />;
}
