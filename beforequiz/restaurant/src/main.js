import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
// import './assets/main.css'

const app = createApp(App)

const firebaseConfig = {
    apiKey: "AIzaSyCX0uWpVJgUyAyDEPE3LXtQ_tpvoZIG8w8",
    authDomain: "webquiz-82a73.firebaseapp.com",
    projectId: "webquiz-82a73",
    storageBucket: "webquiz-82a73.appspot.com",
    messagingSenderId: "383945950510",
    appId: "1:383945950510:web:39b7c9081bf0d366c5a6bf"
  };

app.use(router)
initializeApp(firebaseConfig);

app.mount('#app')
