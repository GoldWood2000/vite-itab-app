import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { fileURLToPath, URL } from "node:url";

const srcPath = fileURLToPath(new URL("./src", import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  publicDir: false,
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue']
        }
      },
      plugins: []
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2048
  },
  plugins: [
    vue(),
    createHtmlPlugin({
      inject: {
        data: {
          faviconPath: './public/',
          injectConfigScript: `<script src="./config.js"></script>`,
        },
      }
    }),
    viteStaticCopy({
      targets: [
        {
          src: `${__dirname}/config.js`,
          dest: ''
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": srcPath,
      "components": `${srcPath}/components`
    },
    extensions: ['.vue', '.js']
  },
  server: {
    host: true,
    proxy: {
      "/api": {
        target: "https://api.codelife.cc/api",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      },
    }
  },
})
