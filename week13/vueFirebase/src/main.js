import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { initializeApp } from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css'

const firebaseConfig = {
  apiKey: "AIzaSyBe8nqP-f0jpr45BZpwN_2GxVwVd8ggJQ0",
  authDomain: "egco427-55ee4.firebaseapp.com",
  projectId: "egco427-55ee4",
  storageBucket: "egco427-55ee4.appspot.com",
  messagingSenderId: "319505362244",
  appId: "1:319505362244:web:efca53bcf7a4af3cf3bb11",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
// app = createApp(App).use(router).mount("#app");