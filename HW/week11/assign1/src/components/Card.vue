<script setup></script>

<template>
  <div class="ui equal width grid">

    <!-- carddiv -->
    <div class="column">
      <div class="ui fluid card">
        <div class="image">
          <img src="https://fomantic-ui.com/images/avatar2/large/kristy.png" />
        </div>
        <div class="content">
          <span class="header">Daniel Louise</span>
        </div>
        <div class="meta">
          <span class="carddetail">Mobile : 032451</span><br>
          <span class="carddetail">Facebook : Playes</span><br>
          <span class="carddetail">Email : poter@hma.com</span>
        </div>
        <div class="ui center aligned">
              <button class="ui icon blue button">
                <i class="edit outline icon"></i>
              </button>
              <button class="ui icon red button">
                <i class="eraser icon"></i>
              </button>
          </div>
      </div>

      
<!-- end card -->
    </div>
    
    

  </div>
</template>

<style scoped>
div.ui.center.aligned{
  margin-top: 10px;
  margin-bottom: 20px;
}
span.header {
  text-decoration: none;
}
div.ui.fluid.card{
  text-align: center;
  max-height:200px;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
span.carddetail{
  font-size: medium;
}
div.ui.equal.width.grid{
  
  margin-left: 10%;
  margin-right: 10%;
}
</style>
