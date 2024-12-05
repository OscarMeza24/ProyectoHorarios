import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Permite aceptar conexiones desde cualquier host
    port: 5173, // Cambia el puerto si es necesario
  },
});