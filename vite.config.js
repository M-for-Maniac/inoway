import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react(),
            sitemap({
              hostname: 'https://inoway.co',
              routes: [
                { path: '/', changefreq: 'weekly', priority: 1.0 },
                { path: '/services', changefreq: 'weekly', priority: 0.8 },
                { path: '/contact', changefreq: 'monthly', priority: 0.7 },
                { path: '/about', changefreq: 'monthly', priority: 0.7 },
              ],
    }),
  ],
  base: '/', // Use '/inoway/' for production, '/' for local
});
