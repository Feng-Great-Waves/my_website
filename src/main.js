import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Router from "@/router";
const app = createApp(App)
import store from "@/store";


//滑动条样式
import '@/assets/css/scrollbar.css'
//全局样式
import '@/assets/css/global.css'
app.use(Router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')

