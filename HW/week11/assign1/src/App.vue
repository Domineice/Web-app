<script setup>
// import login from "../src/components/login.vue"
// import searchbar from "../src/components/searchbar.vue"
// import NewContact from "./components/NewContact.vue";
// import cardList from "../src/components/Card.vue"
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
    <div class="barformat" background-color="black">
      <div class="ui large secondary inverted pointing menu">
        <img src="./assets/logo.svg" width="40" height="40" />
        <a class="active item">Contact</a>
        <div class="right item">
          <i class="user icon"></i>
        </div>
      </div>
    </div>
    <RouterView />
    <!-- <searchbar/> -->
    <!-- <login/> -->
    <!-- <NewContact/> -->
    <!-- <cardList/> -->
</template>

<style scoped>
header {
  line-height: 1.5;
}
div.barformat {
  background-color: black;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
