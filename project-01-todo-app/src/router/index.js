import { createRouter, createWebHistory } from 'vue-router'
import TasksView from '@/views/TasksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: { name: 'tasks' },
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView,
    },
  ],
})

export default router
