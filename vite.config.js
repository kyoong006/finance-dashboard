import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/finance-dashboard/', // Replace with your repository name
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: 'src/setupTests.js'
  }
});
