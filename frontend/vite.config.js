import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  base: isGitHubPagesBuild ? "/Aula-IA/" : "/",
  plugins: [
    react(),
    tailwindcss(),
  ],

  server: {
    port: 5173,
  },
});
