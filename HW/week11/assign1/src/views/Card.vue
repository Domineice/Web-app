<script>
import axios from "axios";
export default {
  name: "Cards",
  data() {
    return {
      Users: [],
      display: [],
      search: "",
    };
  },
  mounted() {
    var url = "http://127.0.0.1:5005/contacts/";
    // console.log(url);
    axios
      .get(url)
      .then((response) => {
        this.Users = response.data;
        this.display = response.data;
        console.log(this.Users);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    filterUsers: function () {
      return this.Users.filter((user) => {
        return user.firstname.match(this.search);
      });
    },
  },
  methods: {
    async logoutprocess() {
      // alert("Logout successful");
      await window.$cookies.remove("Contacttoken");
      // VueCookies.set('token', 'abc123', '1d')
      this.$router.push("/login");
    },
    filtermdet() {
      this.display = this.filterUsers;
    },
    editCard(id) {
      console.log(id);
      this.$router.push({ name: "editContact", params: { editId: id } });
    },
    deleteCard(delid) {
      var url = "http://127.0.0.1:5005/contacts/" + delid;
      var geturl = "http://127.0.0.1:5005/contacts/";
      // console.log(url);
      axios
        .delete(url)
        .then((response) => {
          axios
            .get(geturl)
            .then((responseget) => {
              this.Users = responseget.data;
              this.display = responseget.data;
              console.log(this.Users);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });

      // console.log(url);
    },
  },
  // computed: {
  // },
};
</script>

<template>
  <div class="ui stack segment">
    <a class="ui green ribbon label"><h5>Contacts</h5></a>
    <!-- <p></p> -->
    <div class="ui right aligned action input">
      <input
        type="text"
        class="searchBar"
        placeholder="Search ..."
        v-model="search"
      />
      <div class="ui button" @click="filtermdet()">Search</div>
      <div class="ui orange button">
        <router-link
          class="addbutton"
          :to="{
            path: '/newContact',
            name: 'newContact',
          }"
          >+ Add</router-link
        >
      </div>
    </div>
  </div>
  <div class="ui raise segment">
    <div class="ui animated red button" @click="logoutprocess()" tabindex="0">
      <div class="visible content">Logout</div>
      <div class="hidden content">
        <i class="sign out alternate icon"></i>
      </div>
    </div>
  </div>

  <div class="ui raise segment">
    <div class="ui five column grid">
      <!-- carddiv -->
      <div class="column" v-for="card in display">
        <div class="ui card">
          <div class="image">
            <img v-bind:src="card.imageUrl" />
            <!-- <img src={{ card.imageUrl }} /> -->
          </div>
          <div class="content">
            <span class="header">{{ card.firstname }} {{ card.lastname }}</span>
          </div>
          <div class="meta">
            <span class="carddetail">Mobile : {{ card.mobile }}</span
            ><br />
            <!-- <span class="carddetail">URL : {{ card.imageUrl }}</span
            ><br /> -->
            <span class="carddetail">Facebook : {{ card.facebook }}</span
            ><br />
            <span class="carddetail">Email : {{ card.email }}</span>
          </div>
          <div class="ui center aligned">
            <button class="ui icon blue button" @click="editCard(card.cid)">
              <i class="edit outline icon"></i>
            </button>
            <button class="ui icon red button" @click="deleteCard(card.cid)">
              <i class="eraser icon"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- end card -->
    </div>
  </div>
</template>

<style scoped>
.ui.action.input {
  margin: 1%;
  width: 88%;
  padding-right: 0%;
  /* float:right; */
}

.ui.ribbon.label {
  left: calc(-1rem - 1.2em);
  margin-right: -1.2em;
  padding-left: calc(1rem + 1.2em);
  padding-right: 1.2em;
  text-decoration: none;
}
.ui.ui.ui.green.ribbon.label {
  border-color: #0ca974;
  background-color: #0cd894;
}
.ui.stack.segment {
  margin-left: 3%;
  margin-right: 3%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-color: #0ca974;
  border-top-style: solid;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-width: medium;
}
div.ui.center.aligned {
  margin-top: 10px;
  margin-bottom: 20px;
}
div.ui.raise.segment {
  text-align: right;
  margin-left: 3%;
  margin-right: 3%;
}
div.ui.five.column.grid {
  margin-left: 1%;
  margin-right: 1%;
  text-align: left;
}
span.header {
  text-decoration: none;
}
div.ui.fluid.card {
  text-align: center;
  max-height: 200px;
}
div.image {
  margin: 2%;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
span.carddetail {
  font-size: medium;
  margin: 5%;
}
div.ui.equal.width.grid {
  margin-left: 10%;
  margin-right: 10%;
}
.addbutton {
  text-decoration: none;
  color: white;
}
</style>
