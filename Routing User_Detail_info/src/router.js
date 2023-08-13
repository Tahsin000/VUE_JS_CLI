import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      name:'home',
      component: () => import('@/components/Home.vue')
    },
    {
      path:'/profile/:id',
      name:'profile',
      component: () => import('@/components/profile.vue')
    }

  ],
})
