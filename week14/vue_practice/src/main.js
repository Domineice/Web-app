import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'
import {initializeApp} from 'firebase/app'
import 'bootstrap/dist/css/bootstrap.min.css'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrelrqSbBdop_GAJy4v1aFec-AziV5PUA",
    authDomain: "egci427-practice-94329.firebaseapp.com",
    projectId: "egci427-practice-94329",
    storageBucket: "egci427-practice-94329.appspot.com",
    messagingSenderId: "882156031035",
    appId: "1:882156031035:web:41faa6dea170552caf601e",
    measurementId: "G-JBYCJRGW5M"
  };
initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)

app.mount('#app')
