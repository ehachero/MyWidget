import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  

  build: {
    lib: {
      entry: './src/components/WebHelloReact.jsx', // El punto de entrada de tu Web Component
      name: 'WebHelloReact',
      fileName: (format) => `my-web-component.${format}.js`,
    },
    rollupOptions: {
      // Asegúrate de no empaquetar react y react-dom ya que estarán incluidos en el entorno de Avaya
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },

})
