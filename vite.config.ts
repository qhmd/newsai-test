import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  define: {
    	__VARIABLE_NAME__: JSON.stringify(process.env.VARIABLE_NAME)
    },
  plugins: [tailwindcss(),react()],
})
