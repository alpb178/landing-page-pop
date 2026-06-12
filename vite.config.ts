import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // Multi-page build: the marketing landing (index) and the standalone
      // privacy policy page (privacidad) each emit their own HTML entry.
      input: {
        main: resolve(__dirname, "index.html"),
        privacidad: resolve(__dirname, "privacidad.html"),
        terminos: resolve(__dirname, "terminos.html"),
      },
    },
  },
});
