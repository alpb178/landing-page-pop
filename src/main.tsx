import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import LegalPage from "./components/LegalPage.tsx";
import SupportPage from "./components/SupportPage.tsx";
import DownloadRedirect from "./components/DownloadRedirect.tsx";
import { PRIVACY_DOC } from "./data/privacy";
import { TERMS_DOC } from "./data/terms";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<LegalPage doc={PRIVACY_DOC} />} />
        <Route path="/terms" element={<LegalPage doc={TERMS_DOC} />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/download" element={<DownloadRedirect />} />
        {/* Unknown paths fall back to the home page. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
