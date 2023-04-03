import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieList from '../views/MovieList.vue'
import signUp from '../views/signUp.vue'
import signIn from '../views/signIn.vue'
import {onAuthStateChanged, getAuth} from 'firebase/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/signIn',
    },
    {
      path:'/:catchAll(.*)', //ไม่ได้กำหนดไว้
      redirect:'/signIn'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path : '/movies',
      name : 'movielist',
      component:MovieList,
      meta :{
        requiresAuth : true
      }
    }
  ]
})

const getCurrentUser = () =>{
  return new Promise((resolve, reject)=> {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user)=>{
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth) {
    if(await getCurrentUser()){
      console.log("You are authorized to access this area.");
      next()
    } else {
      console.log("You are not authorized to access this area.")
      next('signIn')
    }
  } else {
    next()
  }
})

export default router
