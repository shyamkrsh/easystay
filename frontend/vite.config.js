import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite Configuration
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure Vite outputs the build to the 'dist' folder
    sourcemap: false, // Optional: Disable sourcemaps in production
  },
});
