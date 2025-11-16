// FILE: vite.config.js (UPDATED)
import { defineConfig } from 'vite';

export default defineConfig({
  // Add this 'base' property.
  // It tells Vite that all asset paths should start with /lms/
  base: '/lms/',

  server: {
    host: '0.0.0.0',
    port: 4173
  }
});