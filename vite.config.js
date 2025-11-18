import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import typography from "daisyui/utilities/typography/index.js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),tailwindcss/typography],
})
