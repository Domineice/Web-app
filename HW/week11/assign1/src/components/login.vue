<script setup></script>
<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-sm-4"></div>
    <div class="col-sm-4">
      <div class="column">
        <form class="ui large form">
          <div class="ui stacked segment">
            <div class="ui raised segment">
              <a class="ui green ribbon label"><h5>Login</h5></a>
              <p></p>
            </div>
            <div class="field">
              <h7 class="loginText">Username</h7>
              <div class="ui input focus">
                <input type="text" name="text" placeholder="Useraccount" />
              </div>
            </div>
            <div class="field">
              <h7 class="loginText">Password</h7>
              <div class="ui input focus">
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <button type="submit" class="loginbtn">Login</button>
          </div>

          <div class="ui error message"></div>
        </form>
      </div>
    </div>
    <div class="col-sm-4"></div>
  </div>
</template>
<style scoped>
.ui.stack.segment{
    border-style: none;
}
div.column {
  margin-top: 100px;
}
h7.loginText {
  font-weight: bold;
}
.ui.raised.segment{
  border-color: #0CA974;
  border-top-style: solid;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-width: medium;
}
.ui.ui.ui.green.ribbon.label {
    border-color: #0CA974;
    background-color: #0CD894;
}
.ui.ribbon.label {
    left: calc(-1rem - 1.2em);
    margin-right: -1.2em;
    padding-left: calc(1rem + 1.2em);
    padding-right: 1.2em;
    text-decoration: none;
}
div.mar {
  margin: 10%;
}
div.column{
  margin-left : 10%;
  margin-right: 10%;
}
button.loginbtn {
  color: white;
  background-color: #bfc9ca;
  border: none;
  padding: 5px 10px 5px 10px;
}
</style>
