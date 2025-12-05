import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Mian-Sharif-Hospital/", // correct for GitHub Pages
  plugins: [react()],
});
