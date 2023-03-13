<script>
export default{
  data(){
    return{
      msg: "Hello",
      url : "www.vuejs.org",
      age: 21,
      counter : 0,
      firstName : "Deen",
      lastName : "Phit"
    }
  },
  mounted(){
    setInterval(()=>{
      this.counter++
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
    }
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <a v-bind:href = "url">vuejs web</a>
  <p>
    <input v-model="msg">
  </p>
  
  <p>
    <input v-model="age">
  </p>
  <button v-on:click.stop = "clickMethod">
    Click me
  </button>
  <button v-on:click.once = "clickMethod">
    Click me once
  </button>
  <p v-bind:title="msg">
    Show Title
  </p>
  <p>
    {{age>20 ? "adult":"child"}}
  </p>
  <p>
    Counter : {{counter}}
  </p>
  <p>
    {{inputFullname("Mr1","Mrb")}}
  </p>
  <p>
    {{this.getFullname()}}
  </p>
  <p>
    {{upperCase()}}
  </p>
<p>
    {{capitalize()}}
  </p>
  <p>
    {{capitalWord()}}
  </p>
</template>
<style>
  p {
      color : red;
  }</style>