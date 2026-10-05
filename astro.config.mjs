// @ts-check
import { defineConfig } from 'astro/config';

// Served from the domain root (decision 0011), so no `base`.
export default defineConfig({
  site: 'https://walkingkangaroo.com',
  output: 'static',
});
