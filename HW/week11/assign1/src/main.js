import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/main.css'
import VueCookies from 'vue3-cookies'

createApp(App).use(router).use(VueCookies, {
    expireTimes: "1d"
}).mount('#app')
