import { createRouter, createWebHistory } from 'vue-router'
import Cards from '../views/Card.vue'
import editContact from '../views/editContact.vue'
import newContact from '../views/NewContact.vue'
import login from '../views/login.vue'
import VueCookies from 'vue-cookies';
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
      meta :{
        requiresAuth : true
      }
    },
    {
      path : '/editContact/:editId',
      name : 'editContact',
      component:editContact,
      meta :{
        requiresAuth : true
      }
    },
    {
      path : '/newContact',
      name : 'newContact',
      component:newContact,
      meta :{
        requiresAuth : true
      }
    },
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

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  // alert("ge Path")
  // alert(this.$cookies.key())
  if (requiresAuth) {
    if(window.$cookies.isKey("Contacttoken")){
      console.log("You are authorized to access this area.");
      next()
    } else {
      console.log("You are not authorized to access this area.")
      next({name :'login'})
    }
  } else {
    next()
  }
})

export default router
