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
    {
      path: '/posts',
      name: 'PostIndex',
      component: () => import('../views/posts/PostIndex.vue'),
    },
    {
      path: '/posts/create',
      name: 'PostCreate',
      component: () => import('../views/posts/PostCreate.vue'),
    },
    {
      path: '/posts/:id/edit',
      name: 'PostEdit',
      component: () => import('../views/posts/PostEdit.vue'),
      props: true,
    },
    {
      path: '/static-pages',
      name: 'StaticPageIndex',
      component: () => import('../views/static-pages/StaticPageIndex.vue'),
    },
    {
      path: '/static-pages/create',
      name: 'StaticPageCreate',
      component: () => import('../views/static-pages/StaticPageCreate.vue'),
    },
    {
      path: '/static-pages/:id/edit',
      name: 'StaticPageEdit',
      component: () => import('../views/static-pages/StaticPageEdit.vue'),
      props: true,
    }

  ]
})

export default router
