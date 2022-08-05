import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "@/router"
const app = createApp(App)
import store from "@/store"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 全局注册el-icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
//md编译器
import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor';
import '@kangc/v-md-editor/lib/style/codemirror-editor.css';
//md显示器
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
//md样式
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
//代码行号
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
//快捷复制
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
// highlightjs
import hljs from 'highlight.js';

VMdEditor.use(githubTheme, {
    Hljs: hljs,
});

VMdPreview.use(githubTheme, {
    Hljs: hljs,
});
VMdPreview.use(createLineNumbertPlugin())
VMdPreview.use(createCopyCodePlugin())

//滑动条样式
import '@/assets/css/scrollbar.css'
//全局样式
import '@/assets/css/global.css'

app.use(router)
app.use(store)
app.use(ElementPlus)
//注册
app.use(VMdPreview);
app.use(VMdEditor);
app.mount('#app')

