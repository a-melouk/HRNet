import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Disable sourcemaps to see if it resolves the issue
    sourcemap: false,
    // Clears the output directory before building.
    emptyOutDir: true,
    // Adjust chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
});
