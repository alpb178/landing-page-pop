import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// Single-page app: routing is handled client-side by react-router (see
// src/main.tsx). Static hosts must rewrite unknown paths to /index.html
// (see public/_redirects) so deep links like /soporte resolve.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
