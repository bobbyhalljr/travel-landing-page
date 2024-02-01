import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
    
//     vue()
//   ],
// })


export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      ViteImageOptimizer({
        /* pass your config */
      }),
    ],
  };
});