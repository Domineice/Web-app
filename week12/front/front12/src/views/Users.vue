<template>
  <div class="about">
    <h1>User Page</h1>
    <input type="text" v-model="search" />
    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
      <tr v-for="auser in filterUsers" v-bind:key="auser.id">
        <td>{{ auser.firstName }}</td>
        <td>{{ auser.lastName }}</td>
        <td>{{ auser.email }}</td>
        <td>
          <router-link
            :to="{
              path: 'updateuser',
              name: 'UpdateUser',
              params: { userId: auser._id },
            }"
          >
            <button>Edit</button>
          </router-link>
          |
          <button>Delete</button>
        </td>
      </tr>
    </table>
    <router-link to="/adduser">
      <button>Add New User</button>
    </router-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      Users: [],
      search: "",
      uid: "",
    };
  },
  mounted() {
    var url = "http://127.0.0.1:5001/users";
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
        return user.firstName.match(this.search);
      });
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
