import { createRouter, createWebHistory } from 'vue-router'
import Cards from '../components/Card.vue'
import editContact from '../components/editContact.vue'
import newContact from '../components/NewContact.vue'
import login from '../components/login.vue'
import testRoute from '../components/testRoute.vue'
// import {onAuthStateChanged, getAuth} from 'firebase/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/login',
    },
    {
      path:'/:catchAll(.*)', //ไม่ได้กำหนดไว้
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path : '/Cards',
      name : 'Cards',
      component:Cards,
      // meta :{
      //   requiresAuth : true
      // }
    },
    {
      path : '/editContact/:editId',
      name : 'editContact',
      component:editContact,
      // meta :{
      //   requiresAuth : true
      // }
    },
    {
      path : '/newContact',
      name : 'newContact',
      component:newContact,
      // meta :{
      //   requiresAuth : true
      // }
    },
    {
      path : '/testRoute/:editId',
      name : 'testRoute',
      component:testRoute,
      // meta :{
      //   requiresAuth : true
      // }
    }
  ]
})

// const getCurrentUser = () =>{
//   return new Promise((resolve, reject)=> {
//     const removeListener = onAuthStateChanged(
//       getAuth(),
//       (user)=>{
//         removeListener()
//         resolve(user)
//       },
//       reject
//     )
//   })
// }

// router.beforeEach(async (to, from, next) => {
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
//   if (requiresAuth) {
//     if(await getCurrentUser()){
//       console.log("You are authorized to access this area.");
//       next()
//     } else {
//       console.log("You are not authorized to access this area.")
//       next('signIn')
//     }
//   } else {
//     next()
//   }
// })

export default router
