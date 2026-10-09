import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
        prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    }
  },
  vite:{plugins:[tailwindcss()]},
  integrations: [react({})]
});