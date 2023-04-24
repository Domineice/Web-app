<template>
    <div class="objectlist">
      <br>
      <div class="row">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="panel panel-info" >
            <div class="panel-heading">
            <h3 class="panel-title">List of Objects</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-6" v-for="(card,index) in objects" :key="card.objtype">
                        <div class="card md-3" >
                            <img :src="'/src/assets/img/'+card.objtype+'.png'" class="card-img-top" style="height: 180px" alt="default">
                            <div  class="card-body">
                                <h5 class="card-title">{{index}}</h5>
                                <p class="card-text">{{card.objtype}}</p>
                                <p class="card-text">WxHxD : {{card.width}}x{{card.height}}x{{card.depth}}</p>
                                  <button class="btn btn-success" type="button" @click="todetail(index)">Detail</button>
                            </div>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
      </div>
      <br>
    </div>
  </template>
  
<script>
import jsonobj from '../objects.json'
export default {
    name: 'Main',
    data () {
        return {
        objects: jsonobj,
        keyss: Object.keys(jsonobj)
        }
    },
    mounted() {
      // console.log(this.keyss)
        
    },
    methods: {
      todetail(id) {
      this.$router.push({ name: "Detail", params: { objId: id } });
    }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
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
  p.citydetail{
    text-align: justify;
  }
  </style>