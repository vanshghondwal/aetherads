import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

// Custom plugin to ensure portfolio directory is copied to dist/portfolio for production deployment
function copyPortfolioPlugin() {
  return {
    name: 'copy-portfolio',
    closeBundle() {
      const srcDir = resolve(__dirname, 'portfolio');
      const destDir = resolve(__dirname, 'dist', 'portfolio');
      if (fs.existsSync(srcDir)) {
        fs.cpSync(srcDir, destDir, { recursive: true });
        console.log('✓ Successfully mirrored portfolio assets to dist/portfolio');
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), copyPortfolioPlugin()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0
  }
});
