<script>
export default{
  name :"searchbarcontext"
}
</script>
<template>
    <div class="ui raised segment">
      <a class="ui green ribbon label"><h5>Contacts</h5></a>
      <!-- <p></p> -->
        <div class="ui right aligned action input">
        <input type="text" class = "searchBar" placeholder="Search ..." />
        <div class="ui button">Search</div>
        <div class="ui orange button">+ Add</div>
      </div>
    </div>
  </template>
<style scoped>
.ui.raised.segment {
  margin-left: 3%;
  margin-right: 3%;
  padding-top: 5px;
  padding-bottom:5px;

}

.ui.action.input{
    margin :1%;
    width: 88%;
    padding-right: 0%;
    /* float:right; */
}

.ui.ribbon.label {
    left: calc(-1rem - 1.2em);
    margin-right: -1.2em;
    padding-left: calc(1rem + 1.2em);
    padding-right: 1.2em;
    text-decoration: none;
}
.ui.ui.ui.green.ribbon.label {
    border-color: #0CA974;
    background-color: #0CD894;
}
</style>
