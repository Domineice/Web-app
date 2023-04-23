<script>
import {
  collection,
  onSnapshot,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
export default {

    name: "list",
    data(){
        return {
            search:"",
            restlist :[]
        }
    },
    mounted(){
        const db = getFirestore();
        const collec = collection(db,"Restaurant");
        onSnapshot(collec,(snapshot)=>{
            this.restlist = snapshot.docs.map((doc)=>doc.data())
            console.log(this.restlist)
        })

    },
    computed :{
        filterRestaurant: function () {
        return this.restlist.filter((restautant) => {
        return (restautant.type.match(this.search) || restautant.name.match(this.search) ||(restautant.price < parseInt(this.search)));
      });
    },
    }


}
</script>
<template>
  <input type="text" name="search" placeholder="Search ..." v-model="search" />
  <form v-for="rest in filterRestaurant">
    <h1>{{rest.name}}</h1>
    <h2>{{rest.price}}</h2>
    <h2>{{rest.type}}</h2>
  </form>
</template>
<style scope></style>
