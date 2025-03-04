import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: '@import "swiper/swiper-bundle.min.css";', // swiper 스타일 자동으로 포함
      },
    },
  },
});
