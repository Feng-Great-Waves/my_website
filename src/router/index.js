import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component: () => import('@/view/index'),
    },
    {
        path: '/his',
        component:()=>import('@/view/page/index'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

