import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, './playground'),
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './playground'),
    },
  },
  plugins: [vue()],
  build: {
    outDir: resolve(__dirname, './dist'),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['es', 'cjs', 'iife'],
      name: 'LazyAparat',
      fileName: (format) => {
        if (format === 'es') return `lazy-aparat.mjs`
        if (format === 'cjs') return `lazy-aparat.cjs`
        if (format === 'iife') return `lazy-aparat.min.js`
        return `lazy-aparat.${format}.js`
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
