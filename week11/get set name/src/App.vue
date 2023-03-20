//====================================//
<script>
export default {
  data() {
    return {
       counter: 1,
      firstName: 'Bob',
      lastName: 'Cat'
    }
  },
  methods: {
    changeName: function(){
      this.firstName = 'Tim';
      this.lastName = 'Fox'
    },
    changeNameSetter: function(){
      this.fullName = 'Dean Bear'
    }
  },
  computed: {
    fullName: {
        get: function() {
          alert("Assembling full name...");
          return this.firstName + ' ' + this.lastName;
        },
        set: function(newValue) {
          alert("Setting new name: " + newValue);
          var parts = newValue.split(' ');
          this.firstName = parts[0];
          this.lastName = parts[parts.length - 1];
        }
    }
  }
}
</script>

<template>
<p>{{counter}}</p>
  <p>{{fullName}}</p>
  <p>{{fullName}}</p>
  
  <button v-on:click="counter++">Increase Counter</button>
  <button v-on:click="changeName">Change Name</button>
  <button v-on:click="changeNameSetter">Change Name (Setter)</button>
</template>