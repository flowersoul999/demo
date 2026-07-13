import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Inspector from 'unplugin-vue-dev-locator/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  base: '/demo/',
  build: {
    sourcemap: 'hidden',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router'],
        },
      },
    },
  },
  plugins: [
    vue(),
    Inspector(),
    ViteImageOptimizer({
      png: {
        quality: 60,
      },
      jpeg: {
        quality: 60,
      },
      webp: {
        quality: 60,
      },
      avif: {
        quality: 60,
      },
      convertImages: ['webp'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
