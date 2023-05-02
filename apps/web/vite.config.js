import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@data": resolve(__dirname, "src/data"),
      "@images": resolve(__dirname, "src/images"),
    },
  },
});
