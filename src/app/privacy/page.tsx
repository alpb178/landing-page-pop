import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { PRIVACY_DOC } from "@/data/privacy";

export const metadata: Metadata = {
  title: "Política de Privacidad · Popyplan",
  description:
    "Política de Privacidad de Popyplan — cómo recopilamos, usamos, almacenamos y compartimos tu información.",
};

export default function Page() {
  return <LegalPage doc={PRIVACY_DOC} />;
}
