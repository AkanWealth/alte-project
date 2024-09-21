import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      // Create an alias '@' to reference the 'src' folder
      '@': path.resolve(__dirname, './src'),
    },
  },
});
