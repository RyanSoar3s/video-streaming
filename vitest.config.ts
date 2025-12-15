import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: import.meta.dirname,
  plugins: [
    angular(),
    tsconfigPaths()

  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [
      'setup-vitest.ts'

    ]

  }

});
