<template>
    <div class="signUp">
      <h1>Sign In</h1>
      <input type="text" placeholder="Email" v-model="user.email" /><br /><br />
      <input type="password" placeholder="Password" v-model="user.password" />
      <button @click="signIn">Submit</button>
      <button type="button" @click="signIngGoogle">GoogleSignIn</button>
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
    signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider
  } from "firebase/auth";
  export default {
    name: "signIn",
    data() {
      return {
        user: {
          email: "",
          password: "",
        },
      };
    },
    methods: {
      signIn() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.user.email, this.user.password)
          .then((UserCredential) => {
            console.log("Successful signIn");
            this.$router.replace("/movies");
          })
          .catch((error) => console.log(error.code + ":" + error.message));
      },
      signIngGoogle(){
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth,provider).then((result)=>{
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          console.log("token: "+token)
          const user = result.user
          console.log("User: "+user)
          this.$router.replace("/movies")
        })
        .catch((error)=>{
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.customData.email
          const credential = GoogleAuthProvider.credentialFromError(error)
        })
      }
    },
  };
  </script>
  