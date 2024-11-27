import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: 'server',

  experimental: {
    env: {
      schema: {
        SECRET_WEBHOOK_URL: envField.string({
          context: "server",
          access: "secret",
        }),
      },
    },
  },

  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    react(),
  ],

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
