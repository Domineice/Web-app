<script>
export default {
  name: "testRoute",

  mounted() {
    alert("testRoute successfully mounted" +this.$route.params.editId)
    console.log(this.$route.params.editId);
  },
};
</script>
<template>
  <h2>{{ this.$route.params.editId }}</h2>
</template>
<style scoped></style>
