import { createRouter, createWebHistory } from 'vue-router'
import TheMainLayout from '@/components/layout/TheMainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TheMainLayout,
      redirect: { name: 'Game' },
      children: [{ path: 'game', name: 'Game', component: () => import('@/views/GameView.vue') }],
    },
  ],
})

export default router
