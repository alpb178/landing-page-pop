import type { Metadata } from "next";
import DeleteAccountPage from "@/components/DeleteAccountPage";

export const metadata: Metadata = {
  title: "Eliminar tu cuenta · Popyplan",
  description:
    "Cómo eliminar tu cuenta de Popyplan y los datos asociados, desde la aplicación o sin tenerla instalada.",
};

export default function Page() {
  return <DeleteAccountPage />;
}
