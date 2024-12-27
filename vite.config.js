import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url";

const srcPath = fileURLToPath(new URL("./src", import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
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
