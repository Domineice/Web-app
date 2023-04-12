// src/compnents/SignIn.vue
<template>
    <div class="row">
        <h2>Signin</h2>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3"/>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">

            <input type="email" class="form-control" placeholder="email" v-model="user.email">
            <br>
            <input type="password" class="form-control" placeholder="password" v-model = "user.password">
            <br>
            <button class="btn btn-success btn-block full-width" >Signin</button>
        </div>

    </div>
</template>

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
    methods: {
      signIn() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.user.email, this.user.password)
          .then((UserCredential) => {
            console.log("Successful signIn");
            this.$router.replace("/");
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
          this.$router.replace("/")
        })
        .catch((error)=>{
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.customData.email
          const credential = GoogleAuthProvider.credentialFromError(error)
        })
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>