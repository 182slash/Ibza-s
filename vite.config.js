import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Enables SVG files to be imported as React components via the ?react suffix.
    // Usage: import MyIcon from "./icon.svg?react"
    svgr(),
    react(),
  ],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir:    "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor:        ["react", "react-dom"],
          "framer-motion": ["framer-motion"],
        },
      },
    },
  },
});
