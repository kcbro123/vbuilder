import { fileURLToPath, URL } from 'node:url'

// import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
// @ts-ignore
import veauryVitePlugins from 'veaury/vite/index.js'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [/* vue(), vueJsx(),  */ vueDevTools(), veauryVitePlugins({ type: 'vue' })],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        port: 3000,
        proxy: {
            '/charts': {
                target: 'https://echarts.apache.org',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/charts/, '')
            }
        }
    }
})
