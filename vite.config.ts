import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins:[react()],

  define:{
    CESIUM_BASE_URL: JSON.stringify("/cesium"),
  },

  resolve:{
    alias:{
      "@": path.resolve(__dirname,"./src")
    }
  }
});