<script setup></script>
<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-sm-1"></div>
    <div class="col-lg-8">
      <div class="column">
        <form class="ui large form">
          <div class="ui stacked segment">
            <h2 class="ui dividing header">
              Contacts<span class="ui teal horizontal label">Add</span>
            </h2>
            <div class="field">
              <h6 class="loginText">
                ContactID<span class="ui red text">*</span>
              </h6>
              <div class="ui input focus">
                <input type="text" name="text" placeholder="ContactID" />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">
                First Name<span class="ui red text">*</span>
              </h6>
              <div class="ui input focus">
                <input type="text" name="text" placeholder="First Name" />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">
                Last Name<span class="ui red text">*</span>
              </h6>
              <div class="ui input focus">
                <input type="text" name="text" placeholder="Last Name" />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">
                Mobile No<span class="ui red text">*</span>
              </h6>
              <div class="ui input focus">
                <input type="text" name="text" placeholder="Mobile N" />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">Email</h6>
              <div class="ui input focus">
                <input type="text" name="text" placeholder="Email" />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">Facebook</h6>
              <div class="ui input focus">
                <input type="text" name="text" placeholder="Facebook" />
              </div>
            </div>

            <div class="field">
              <h6 class="loginText">Image URL</h6>
              <div class="ui input focus">
                <input type="text" name="text" placeholder="Image URL" />
              </div>
            </div>
            <div class="ui center aligned">
            <div class="ui basic buttons">
              <button class="ui blue basic button">
                <i class="save outline icon"></i>Save
              </button>
              <button class="ui blue basic button">
                <i class="times red icon"></i>Close
              </button>
            </div>
          </div>
          </div>

          <div class="ui error message"></div>
        </form>
        
      </div>
    </div>
    <div class="col-sm-3"></div>
  </div>
</template>
<style scoped>
.ui.stack.segment {
  border-style: none;
}
div.column {
  margin-top: 100px;
}
h6.loginText {
  font-weight: bold;
}
div.ui.basic.buttons{
  margin-top: 10px;
  margin-bottom: 20px;
}
h2.ui.dividing.header {
  font-weight: bolder;
}
.ui.raised.segment {
  border-color: #0ca974;
  border-top-style: solid;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-width: medium;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ui.ui.ui.green.ribbon.label {
  border-color: #0ca974;
  background-color: #0cd894;
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
div.column {
  margin-left: 50px;
  margin-right: 50px;
}
button.loginbtn {
  color: white;
  background-color: #bfc9ca;
  border: none;
  padding: 5px 10px 5px 10px;
}
</style>
