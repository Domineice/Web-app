<template>
  <div class="signUp">
    <h1>Sign up</h1>
    <input type="text" placeholder="Email" v-model="user.email" /><br /><br />
    <input type="password" placeholder="Password" v-model="user.password" />
    <button @click="signUp">Submit</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
export default {
  name: "signUp",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signUp() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then((UserCredential) => {
          console.log("Successful register");
          this.$router.replace("/movies");
        })
        .catch((error) => console.log(error.code + ":" + error.message));
    },
  },
};
</script>
