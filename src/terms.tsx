import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LegalPage from "./components/LegalPage.tsx";
import { TERMS_DOC } from "./data/terms";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LegalPage doc={TERMS_DOC} />
  </StrictMode>,
);
