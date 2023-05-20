import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@data": resolve(__dirname, "src/data"),
      "@fonts": resolve(__dirname, "src/fonts"),
      "@images": resolve(__dirname, "src/images"),
      "@styles": resolve(__dirname, "src/styles"),
      "@utils": resolve(__dirname, "src/utils"),
    },
  },
});
