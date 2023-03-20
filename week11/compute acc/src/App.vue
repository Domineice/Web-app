
//==========================================//
<script>
export default {
  data() {
    return {
       newData: {
      studentName: '',
      score: 0
    },
    datas: [
      {
        studentName: "Student 1",
        score: 50
      },
      {
        studentName: "Student 2",
        score: 5
      }
      ]
    }
  },
  methods: {
    addScore: function() {
      this.datas.push({
        studentName: this.newData.studentName,
        score: this.newData.score
      });
      this.newData.studentName = '';
      this.newData.score = 0;
    }
  },
  computed: {
    averageScore: function() {
      var sum = this.datas.reduce(function(accumulate, data) {
        return accumulate + Number(data.score);
      }, 0);
      return (sum / this.datas.length).toFixed(2);
    }
  }
}
</script>

<template>
<span>Student Name: </span>
    <input v-model="newData.studentName">
    <br><br>
    <span>Score: </span>
    <input v-model="newData.score">
    <br><br>
    <button @click="addScore">Add Score</button>
    <br><br>
    <span>Average Score {{averageScore}}</span>
    <ul>
      <li v-for="data in datas"> 
        {{data.studentName}}, Score:  {{data.score}}
      </li>
    </ul>
</template>
