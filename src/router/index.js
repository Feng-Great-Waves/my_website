import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component: () => import('@/view/index'),
    },
    {
        path: '/share',
        component:()=>import('@/view/share/index'),
    },
    {
        path: '/s/:id',
        component:()=>import('@/components/s/index')
    }

]

const router = createRouter({
    scrollBehavior: () => ({y: 0}),
    history: createWebHistory(),
    routes:routes
})

export default router

