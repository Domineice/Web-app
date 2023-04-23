import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import list from '../views/list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect :'list'
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path :'/:catchAll(.*)',
      redirect :'list'
    }
  ]
})

export default router
