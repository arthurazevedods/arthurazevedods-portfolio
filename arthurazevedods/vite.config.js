import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
// https://vite.dev/config/
/* eslint-disable no-undef */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@json':'/src/json',
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
