<template>
  <div class="objectlist">
    <br>
    <div class="row">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">Object Detail</h3>
          </div>
          <div class="panel-body">
            <div class="border" style="padding: 15px">
              <div class="row">
                <div style="text-align: center;" class="box">
                  <img :src="'/src/assets/img/' + object.objtype + '.png'" style="height: 180px" alt="default">
                  <p><b>Object ID: </b>{{ id }}</p>
                  <p><b>Object Type: </b>{{ object.objtype }}</p>
                  <p><b>WxHxD: </b>{{ object.width }}x{{ object.height }}x{{ object.depth }}</p>
                  <p><b>Area: </b>{{ area }}</p>
                  <p><b>Volume: </b>{{ volume }}</p>
                </div>
                <br><br>
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 15px;">
                    <button type="button" class="btn btn-success" @click="tomain()">Back to Main</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
    </div>
    <br>
  </div>
</template>
  
<script>
import jsonobj from '../objects.json'
export default {
  name: 'Detail',
  // props: [''],
  data() {
    return {
      id: "",
      object: jsonobj[this.$route.params.objId],
      area: 0,
      volume: 0
    }
  },

  mounted() {
    console.log("object detail")
    // window.location.reload();
    this.id = this.$route.params.objId;
    // console.log(jsonobj)
    // console.log(this.$route.params.objId);
    // console.log(this.object)
    if (this.object.objtype.match("triangle")) {
      // this.area = (this.object.width * this.object.height) / 2
      //ผมคิดว่าสามเหลี่ยมควร กว้าง * ยาว /2 นะครับ แต่ผมทำตามโจทย์นะครับ
      this.area = (this.object.width * this.object.height)
      this.volume = this.area * this.object.depth
    }
    if (this.object.objtype.match("rectangle")) {
      this.area = (this.object.width * this.object.height) 
      this.volume = this.area * this.object.depth
    }
  },
  methods: {
    tomain() {
      this.$router.push("/main");
    }
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.box{
  /* border:0px; */
  border-style:solid;
  border-color: #E5E3E3;
  border-top: 0cm;
  border-left: 0cm;
  border-right: 0cm;
  border-width: 2px;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /* display: inline-block; */
  margin: 0 10px;
}

a {
  color: #ffffff;
}

p.citydetail {
  text-align: justify;
}</style>
  