<script>
export default {
  data() {
    return {
      movieTitles: ['Starwar', 'Indiana Jones', 'Sleeping Beauty'],
      employee : [
        {"name" :"bob","title":"student"},
        {"name" :"tom","title":"cat"}
      ],
      person :{
        "firstName":"Alice",
        "lastName":"Water",
        "age": 20
      }
    }
  },
 methods: {
    changeNumber: function(){
      this.numbers[1] = 10
      alert(this.numbers[1])
    }
  }
}
</script>

<template>
  <h1>Movies</h1>
  <ul>
    <li v-for="title in movieTitles">{{title}}</li>
  </ul>
  
  <h1>Employee</h1>
  <table border="1">
    <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="employer, index in employee">
        <td>{{index + 1}}</td>
        <td>{{ employer.name }}</td>
        <td>{{ employer.title }}</td>
      </tr>
    </tbody>
  </table>
  <ul>
    <li v-for = "(value,propertyName,index) in person">({{index+1}}) {{propertyName}} : {{value}}</li>
    <li v-for = "(n,index) in 10">({{index+1}}) * {{10-index}}</li>
  </ul>
  <button @click = "changeNumber">
    Change
  </button>
</template>