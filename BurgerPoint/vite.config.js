import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, 
    allowedHosts: ['0143-180-149-227-165.ngrok-free.app',  // Old host
      'ec20-180-149-227-165.ngrok-free.app'  ] // New host]
  },
  plugins: [react(),
    tailwindcss()
  ],
})
