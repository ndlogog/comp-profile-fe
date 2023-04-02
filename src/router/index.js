import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categories',
      name: 'CategoryIndex',
      component: () => import('../views/categories/CategoryIndex.vue')
    },
    {
      path: '/categories/create',
      name: 'CategoryCreate',
      component: () => import('../views/categories/CategoryCreate.vue')
    },
    {
      path: '/categories/:id/edit',
      name: 'CategoryEdit',
      component: () => import('../views/categories/CategoryEdit.vue'),
      props: true,
    },
  ]
})

export default router
