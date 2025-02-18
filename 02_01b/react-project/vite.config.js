import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://bakers20.github.io/02_01-React/", 
  plugins: [react()],
})
