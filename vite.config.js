import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import babel from 'vite-plugin-babel'
import cesium from 'vite-plugin-cesium'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cesium(),
    babel()
  ],
  assetsInclude: ['**/*.gltf'],
  resolve: {
    alias: {
      '@': resolve(resolve(__dirname, 'src'))
    }
  }
})
