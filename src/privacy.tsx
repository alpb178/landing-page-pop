import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LegalPage from "./components/LegalPage.tsx";
import { PRIVACY_DOC } from "./data/privacy";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LegalPage doc={PRIVACY_DOC} />
  </StrictMode>,
);
