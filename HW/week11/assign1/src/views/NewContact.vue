<script>
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  name: "newContact",
  data() {
    return {
      contact: {
        cid: "",
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        facebook: "",
        imageUrl: "",
      },
    };
  },
  methods: {
    async pushToAPI() {
      try {
        const url = "https://six213129webassignback.onrender.com/contacts/";

        if (!this.validatePhoneNumber()) {
          alert("Please enter a valid phone number");
        } else if (
          this.contact.firstname.length > 0 &&
          this.contact.lastname.length > 0 &&
          this.contact.mobile.length > 0 &&
          this.contact.cid.length > 0
        ) {
          if (this.contact.imageUrl.length <= 0) {
            this.contact.imageUrl =
              "https://fomantic-ui.com/images/avatar2/large/kristy.png";
          }
          const response = await axios.post(url, this.contact);
          console.log(response);
          alert("Add successful");
          this.$router.replace("/Cards");
        } else {
          alert("Please fill in all required fields");
        }
      } catch (error) {
        console.error(error);
        alert("Add failed");
      }
    },
    validatePhoneNumber() {
      const phoneNumberRegex = /^\d{10}$/; // matches exactly 10 digits

      return (this.validPhoneNumber = phoneNumberRegex.test(
        this.contact.mobile
      ));
    },
    clearfield() {
      this.contact.cid = "";
      this.contact.firstname = "";
      this.contact.lastname = "";
      this.contact.email = "";
      this.contact.mobile = "";
      this.contact.facebook = "";
      this.contact.imageUrl = "";
    },
    gotomain() {
      this.$router.push("/Cards");
    },
  },
};
</script>
<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-sm-1"></div>
    <div class="col-lg-8">
      <div class="column">
        <form class="ui large form">
          <div class="ui stacked segment">
            <h2 class="ui dividing header">
              Contacts<span class="ui teal horizontal label">new</span>
            </h2>
            <div class="field">
              <h6 class="loginText">
                ContactID<span class="ui red text">*</span>
              </h6>
              <div class="ui input focus">
                <input
                  type="text"
                  name="text"
                  placeholder="add ContactID"
                  v-model="contact.cid"
                />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">
                First Name<span class="ui red text">*</span>
              </h6>
              <div class="ui input focus">
                <input
                  type="text"
                  name="text"
                  placeholder="add First Name"
                  v-model="contact.firstname"
                />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">
                Last Name<span class="ui red text">*</span>
              </h6>
              <div class="ui input focus">
                <input
                  type="text"
                  name="text"
                  placeholder="add Last Name"
                  v-model="contact.lastname"
                />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">
                Mobile No<span class="ui red text">*</span>
              </h6>
              <div class="ui input focus">
                <input
                  type="text"
                  name="text"
                  placeholder="add Mobile No"
                  v-model="contact.mobile"
                />
              </div>
              <p v-if="!validPhoneNumber">
                Please enter a 10-digit phone number.
              </p>
            </div>

            <div class="field">
              <h6 class="loginText">Email</h6>
              <div class="ui input focus">
                <input
                  type="email"
                  name="text"
                  placeholder="add Email"
                  v-model="contact.email"
                />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">Facebook</h6>
              <div class="ui input focus">
                <input
                  type="text"
                  name="text"
                  placeholder="add Facebook"
                  v-model="contact.facebook"
                />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">Image URL</h6>
              <div class="ui input focus">
                <input
                  type="text"
                  name="text"
                  placeholder="add Image URL"
                  v-model="contact.imageUrl"
                />
              </div>
            </div>
            <div class="ui center aligned">
              <div class="ui basic buttons">
                <button
                  class="ui blue basic button"
                  type="button"
                  @click="pushToAPI()"
                >
                  <i class="save outline icon"></i>Save
                </button>
                <router-link
                  class="ui blue basic button"
                  @click="gotomain()"
                  :to="{
                    path: '/Cards',
                    name: 'Cards',
                  }"
                >
                  <i class="times red icon"></i>Close
                </router-link>
              </div>
            </div>
          </div>

          <div class="ui error message"></div>
        </form>
      </div>
    </div>
    <div class="col-sm-3"></div>
  </div>
</template>
<style scoped>
.ui.stack.segment {
  border-style: none;
}
div.column {
  margin-top: 100px;
}
h6.loginText {
  font-weight: bold;
}
div.ui.basic.buttons {
  margin-top: 10px;
  margin-bottom: 20px;
}
h2.ui.dividing.header {
  font-weight: bolder;
}
.ui.raised.segment {
  border-color: #0ca974;
  border-top-style: solid;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-width: medium;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
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
div.column {
  margin-left: 50px;
  margin-right: 50px;
}
button.loginbtn {
  color: white;
  background-color: #bfc9ca;
  border: none;
  padding: 5px 10px 5px 10px;
}
</style>
