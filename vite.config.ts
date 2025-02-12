import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    base: '/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        copyPublicDir: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
