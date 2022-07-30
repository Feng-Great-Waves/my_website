import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  //路径别名配置
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src'),
    },
    extensions:['.js','.vue']
  },

  server:{
    host: '0.0.0.0',
    port: 5173,
    open:true,
    https:false,
    proxy:{
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:8080`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
})
