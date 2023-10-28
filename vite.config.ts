import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/

export default defineConfig({
  server: { port: 3000 },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "named",
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
