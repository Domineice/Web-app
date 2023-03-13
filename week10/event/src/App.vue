<script>
export default{
  data(){
    return{
      msg: "",
      url : "www.vuejs.org",
      age: 21,
      counter : 0,
      firstName : "Deen",
      lastName : "Phit",
      html : "<p>Show Data</p>",
  		isShow : true,
      numItem : 15
    }
  },
  mounted(){
      setTimeout(()=>{
                 this.msg = "Hello"
                 },3000)
  },
  methods :{
    getFullname : function(){
      return this.firstName + " "+ this.lastName
    },
    inputFullname : function(fName,lName){
      return fName + " "+ lName
    },
    upperCase : function(){
     let upText =  this.msg.toUpperCase()
      return upText;
  	},
    capitalize : function(){
    let newMsg = this.msg
    newMsg = newMsg.charAt(0).toUpperCase()+ newMsg.slice(1)
    return newMsg
  },
    capitalWord: function(){
      let arrMsg = this.msg.split(" ")
      let result = ""
      for(var word of arrMsg)
        {
          word = word.charAt(0).toUpperCase()+ word.slice(1)
          result += word+" "
        }
      return result
    },
    clickMethod : function(event){
      console.log(event)
      alert("Congrat you win")
    },
    toggle : function()
    {
      this.isShow = !this.isShow
    }
  }
}
</script>
<template>
  <h1>
    {{msg}}
  </h1>
  <p>
    {{numItem}}
  </p>
  <p v-if="numItem <10">
    Phease refill
  </p>
  <p v-else>
    Enough stock
  </p>
  <p v-show = "isShow">
    Show na
  </p>
  <div v-html = "html">
    
  </div>
  <input type = "text" v-on:keyup = "clickMethod"><br>
  <input type = "text" v-on:keyup.enter = "clickMethod"><br>
  <input type = "text" v-on:keyup.space = "clickMethod"><br>
  <input type = "text" v-on:keyup.shift.enter = "clickMethod"><br>
  <button @click = "clickMethod">
    ClickMe
  </button>
  <button @click = "toggle">
    Toggle
  </button>
</template>
<style>
  p {
      color : red;
  }</style>