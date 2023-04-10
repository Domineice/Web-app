import { createRouter, createWebHistory } from 'vue-router'
import {onAuthStateChanged,getAuth} from 'firebase/auth'
import CityList from '../views/citylist.vue'
import detail from '../views/detail.vue'
import SignIn from '../views/signIn.vue'
import SignUp from '../views/signUp.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CityList',
      component: CityList,
      meta :{
        requireAuth :true
      }
    },
    {
      path: '/detail/:city',
      name: 'detail',
      component: detail,
      meta :{
        requireAuth :true
      }
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
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
