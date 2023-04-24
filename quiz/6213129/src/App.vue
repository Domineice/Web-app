<script >
import { RouterLink, RouterView } from 'vue-router'
import jsonobj from './objects.json'
export default {
    name: 'Main',
    data () {
        return {
        objects: jsonobj,
        keyss: Object.keys(jsonobj)
        }
    },
    mounted() {
      // console.log(this.keyss)
        
    },
    methods: {
      todetail() {
      this.$router.push({ name: "Detail", params: { objId: this.keyss[0] } });
    },
    tomain() {
      this.$router.push("/main");
    }
    }
}
</script>

<template>
  
  <div class="wrapper">
    <nav>
      <img src="./assets/logo.svg" width="40" height="40" />
      <button class= "mainmenu" @click="tomain()">Main</button>
      <button class= "mainmenu" @click="todetail()">Detail</button>

    </nav>
  </div>
  <RouterView />
</template>

<style scoped>

.mainmenu{
  margin-right: 20px;
  background: none!important;
  border: none;
  padding: 0!important;
  /*optional*/
  font-family: arial, sans-serif;
  /*input has OS specific font-family*/
  color: #069;
  text-decoration: underline;
  cursor: pointer;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  width: 95%;
}

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: top;
  padding-top: 70px;
}
</style>s
