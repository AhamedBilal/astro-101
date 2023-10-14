import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-101.com',
  base: '/astro-101',
  integrations: [preact()]
});