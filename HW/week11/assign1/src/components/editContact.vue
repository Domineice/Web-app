<script>
import axios from "axios";
export default {
  name: "editContact",
  data() {
    return {
      editID: "",
      getcontact: [],
      prevcontact: {
        cid: "",
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        facebook: "",
        imageUrl: "",
      },
      editcontact: {
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
  mounted() {
    console.log(this.$route.params.editId);
    var url = "http://127.0.0.1:5005/contacts/" + this.$route.params.editId;
    // console.log(url);
    axios
      .get(url)
      .then((response) => {
        this.getcontact = response.data[0];
        this.editcontact = this.getcontact;
        this.prevcontact = this.getcontact;
        // console.log(this.editcontact);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    async editToAPI() {
      try {
        this.keepPrevValue();
        const url =
          "http://127.0.0.1:5005/contacts/" + this.$route.params.editId;
        const response = await axios.post(url, this.editcontact);
        console.log(response);
        // alert("Edit successful")
        this.$router.push("/Cards");
      } catch (error) {
        console.error(error);
        alert("Edit failed");
      }
    },
    keepPrevValue() {
      if (this.editcontact.cid.length <= 0) {
        this.editcontact.cid = this.prevcontact.cid;
      }
      if (this.editcontact.firstname.length <= 0) {
        this.editcontact.firstname = this.prevcontact.firstname;
      }
      if (this.editcontact.lastname.length <= 0) {
        this.editcontact.lastname = this.prevcontact.lastname;
      }
      if (this.editcontact.mobile.length <= 0) {
        this.editcontact.mobile = this.prevcontact.mobile;
      }
      if (this.editcontact.email.length <= 0) {
        this.editcontact.email = this.prevcontact.email;
      }
      if (this.editcontact.facebook.length <= 0) {
        this.editcontact.facebook = this.prevcontact.facebook;
      }
      if (this.editcontact.imageUrl.length <= 0) {
        this.editcontact.imageUrl = this.prevcontact.imageUrl;
      }
    },
    clearfield() {
      this.editcontact.cid = "";
      this.editcontact.firstname = "";
      this.editcontact.lastname = "";
      this.editcontact.email = "";
      this.editcontact.mobile = "";
      this.editcontact.facebook = "";
      this.editcontact.imageUrl = "";
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
              Contacts<span class="ui teal horizontal label">Add</span>
            </h2>
            <div class="field">
              <h6 class="loginText">ContactID</h6>
              <div class="ui input focus">
                <input
                  type="text"
                  name="text"
                  placeholder="edit cid"
                  v-model="editcontact.cid"
                />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">First Name</h6>
              <div class="ui input focus">
                <input
                  type="text"
                  name="text"
                  placeholder="edit firstname"
                  v-model="editcontact.firstname"
                />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">Last Name</h6>
              <div class="ui input focus">
                <input
                  type="text"
                  name="text"
                  placeholder="edit lastname"
                  v-model="editcontact.lastname"
                />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">Mobile No</h6>
              <div class="ui input focus">
                <input
                  type="text"
                  name="text"
                  placeholder="edit mobile no"
                  v-model="editcontact.mobile"
                />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">Email</h6>
              <div class="ui input focus">
                <input
                  type="text"
                  name="text"
                  placeholder="edit email"
                  v-model="editcontact.email"
                />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">Facebook</h6>
              <div class="ui input focus">
                <input
                  type="text"
                  name="text"
                  placeholder="edit facebook"
                  v-model="editcontact.facebook"
                />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">Image URL</h6>
              <div class="ui input focus">
                <input
                  type="text"
                  name="text"
                  placeholder="edit imageUrl"
                  v-model="editcontact.imageUrl"
                />
              </div>
            </div>
            <div class="ui center aligned">
              <div class="ui basic buttons">
                <button
                  class="ui blue basic button"
                  type="button"
                  @click="editToAPI"
                >
                  <i class="save outline icon"></i>Save
                </button>
                <button class="ui blue basic button" @click="gotomain">
                  <i class="times red icon"></i>Close
                </button>
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
