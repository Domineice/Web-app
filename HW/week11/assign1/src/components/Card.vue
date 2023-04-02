<script>
import axios from "axios";
export default {
  name: "Cards",
  data() {
    return {
      Users: [],
      search: "",
    };
  },
  mounted() {
    var url = "http://127.0.0.1:5005/contacts/";
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        this.Users = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    filterUsers: function () {
      return this.Users.filter((user) => {
        return user.cid.match(this.search);
      });
    },
  },
};
</script>

<template>
  <div class="ui raise segment">
    <br />
  </div>
  <div class="ui raise segment">
    <div class="ui five column grid">
      <!-- carddiv -->
      <div class="column" v-for="card in filterUsers">
        <div class="ui card">
          <div class="image">
            <img src="{{" card.imageUrl }} />
          </div>
          <div class="content">
            <span class="header">{{ card.firstname }} {{ card.lastname }}</span>
          </div>
          <div class="meta">
            <span class="carddetail">Mobile : {{ card.mobile }}</span
            ><br />
            <span class="carddetail">Facebook : {{ card.facebook }}</span
            ><br />
            <span class="carddetail">Email : {{ card.email }}</span>
          </div>
          <div class="ui center aligned">
            <button class="ui icon blue button">
              <i class="edit outline icon"></i>
            </button>
            <button class="ui icon red button">
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
div.ui.center.aligned {
  margin-top: 10px;
  margin-bottom: 20px;
}
div.ui.raise.segment {
  margin-left: 3%;
  margin-right: 3%;
}
div.ui.five.column.grid {
  margin-left: 1%;
  margin-right: 1%;
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
</style>
