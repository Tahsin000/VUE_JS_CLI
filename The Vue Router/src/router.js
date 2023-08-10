import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name:'home',
      component: Home,
    },
    {
      path: '/about',
      name:'about',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/jobs',
      name:'jobs',
      component: () => import('@/views/jobs/Jobs.vue'),
    },
    {
      path: '/jobs/:id',
      name:'jobsDetails',
      component: () => import('@/views/jobs/JobsDetails.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name:'NotFound',
      component: () => import('@/views/ErrorPage.vue'),
    },
  ],
})
