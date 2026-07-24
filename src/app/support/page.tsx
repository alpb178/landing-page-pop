import type { Metadata } from "next";
import SupportPage from "@/components/SupportPage";

export const metadata: Metadata = {
  title: "Soporte · Popyplan",
  description:
    "Soporte de Popyplan — escríbenos tus dudas, problemas o sugerencias y te responderemos lo antes posible.",
};

export default function Page() {
  return <SupportPage />;
}
