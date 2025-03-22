import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: import.meta.env.VITE_BASE_PATH || '/react-web', // Sử dụng biến môi trường VITE_BASE_PATH
});