import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'




export default ({ mode }) =>
    defineConfig({
      plugins: [vue()],
      //路径别名配置
      resolve:{
        alias:{
          '@':path.resolve(__dirname,'src'),
        },
        extensions:['.js','.vue','.css']
      },
      optimizeDeps: {
        include: ['@kangc/v-md-editor/lib/theme/vuepress.js'],
      },
      server:{
        host: '0.0.0.0',
        port: 5173,
        open:true,
        https:false,
        proxy:{
          [loadEnv(mode, process.cwd()).VITE_BASE_API]: {
            target: `http://localhost:9090`,
            changeOrigin: true,
            rewrite: (path) => path.replace(new RegExp(loadEnv(mode, process.cwd()).VITE_BASE_API), '')
          }
        }
      },
    })

