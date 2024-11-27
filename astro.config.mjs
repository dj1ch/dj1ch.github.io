import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// import vercel from "@astrojs/vercel/serverless";
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  buildOptions: {
    out: './dist',
  },

  base: 'dj1ch.github.io',

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
  
  adapter: node({
    mode: 'standalone',
  }),
});
