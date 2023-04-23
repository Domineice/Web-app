<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      User: {
        Username: "",
        Password: "",
      },
    };
  },
  methods: {
    // loginprocess() {
    //   var loginurl = "http://127.0.0.1:5005/logincontact/";
    //   axios
    //     .post(loginurl, this.User)
    //     .then((result) => {
    //       if (result.data.token) {
    //         this.$cookies.set("Contacttoken");
    //         // VueCookies.set('token', 'abc123', '1d')

    //       } else {
    //         alert("Invalid User and password");
    //         console.log("Invalid User and password");
    //       }
    //     })
    //     .catch((error) => {
    //       alert(error.message);
    //     });
    //     alert("Hello, " + this.User.Username+ "!");
    //     this.$router.replace("/Cards");
    // },
    async loginprocess() {
      try {
        // const loginurl = "http://127.0.0.1:5005/logincontact/";
        const loginurl = "https://six213129webassignback.onrender.com/logincontact/";
        const result = await axios.post(loginurl, this.User);
        if (result.data.token) {
          this.$cookies.set("Contacttoken", result.data.token);
          alert("Hello, " + this.User.Username + "!");
          this.$router.replace("/Cards");
        } else {
          alert("Invalid User and password");
          console.log("Invalid User and password");
        }
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>
<template>
  <div class="ui container">
    <div class="row justify-content-center align-items-center">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <div class="column">
          <form class="ui large form">
            <div class="ui stacked segment">
              <div class="ui raised segment">
                <a class="ui green ribbon label"><h5>Login</h5></a>
                <p></p>
              </div>
              <div class="field">
                <h7 class="loginText">Username</h7>
                <div class="ui input focus">
                  <input
                    type="text"
                    placeholder="Useraccount"
                    v-model="User.Username"
                    required
                  />
                </div>
              </div>
              <div class="field">
                <h7 class="loginText">Password</h7>
                <div class="ui input focus">
                  <input
                    type="password"
                    placeholder="Password"
                    v-model="User.Password"
                    required
                  />
                </div>
              </div>
              <button
                class="loginbtn"
                type="button"
                v-on:click="loginprocess()"
              >
                Login
              </button>
            </div>

            <div class="ui error message"></div>
          </form>
        </div>
      </div>
      <div class="col-sm-4"></div>
    </div>
  </div>
</template>
<style scoped>
.ui.stack.segment {
  border-style: none;
}
div.column {
  margin-top: 100px;
}
h7.loginText {
  font-weight: bold;
}
.ui.raised.segment {
  border-color: #0ca974;
  border-top-style: solid;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-width: medium;
}
.ui.ui.ui.green.ribbon.label {
  border-color: #0ca974;
  background-color: #0cd894;
}
.ui.ribbon.label {
  left: calc(-1rem - 1.2em);
  margin-right: -1.2em;
  padding-left: calc(1rem + 1.2em);
  padding-right: 1.2em;
  text-decoration: none;
}
div.mar {
  margin: 10%;
}
/* div.column {
  margin-left: 10%;
  margin-right: 10%;
} */
button.loginbtn {
  color: white;
  background-color: #bfc9ca;
  border: none;
  padding: 5px 10px 5px 10px;
}
</style>
