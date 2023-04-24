import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Detail from '../views/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/main',
    },
    {
      path:'/:catchAll(.*)', 
      redirect:'/main'
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/detail/:objId',
      name: 'Detail',
      component: Detail
    }
  ]
})

export default router
