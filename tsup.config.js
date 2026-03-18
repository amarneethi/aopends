import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.js'],
  format: ['esm', 'cjs'],
  splitting: true,
  clean: true,
  external: ['react', 'react-dom', 'lucide-react', 'recharts'],
  banner: {
    js: "'use client';",
  },
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      '.js': 'jsx',
    }
    options.jsx = 'automatic'
    // options.jsxImportSource = 'react'  // only needed if non-default
  },
})