import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

export default defineConfig({
  build: {
    public: {
      VITE_ASTRO_WEBHOOK_URL: import.meta.env.VITE_ASTRO_WEBHOOK_URL,
    },
  },

  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    react(),
  ],
});
