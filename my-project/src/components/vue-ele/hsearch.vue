<template>
  <div class="searchfood">
    <Header1>{{msg}}</Header1>
     <div class="h-scenter">

    
    <div class="h-input">
      <input v-model="inputval" class="cityinput" placeholder="搜索商家或食品">
     
      <div @click="searchcity" class="submit">提交</div>
    </div>

    <div class="main">

      <div v-if="list==''" class="his after">
        <div class='h-history'>搜索历史</div>
        <!-- 搜索历史 -->
        <div v-if="his!=''" class="mainbody  ">
          <div v-for="item in his" class="h-history1">
            <div class="history-name">{{item.name}}</div>
            <!-- <div class="history-address">{{item.address}}</div> -->
          </div>
          <div @click='removeall' class="clearall">
            清空搜索历史
          </div>
        </div>
      </div>
       <!-- //搜索到的东西 -->
      <div v-if="list!=''" class='search '>
        <div v-for="item in list" @click="goaddress({name:item.name,latitude:item.latitude,longitude:item.longitude,address:item.address,geohash:item.geohash})"
          class="result">
          <div class=" h-sname ">{{item.name}}</div>
          <!-- <div class=" h-saddress ">{{item.address}}</div> -->
        </div>
      </div>
      
    </div>
   
  </div>
  <Htotal class="h-botton2"></Htotal>
   
  </div>
</template>

<script>
import Header1 from "../us/header";
import Htotal from "../vue-ele/htotal"
  export default {
    name: 'hsearch',
    data() {
      return {
        msg:"搜索",
        inputval: "",
        list: "",
        his: ""
      }
    },
    components: {
      //注册组件
      Header1,
     Htotal
    },
    created(){
      this.$store.commit("ss")
    },
    mounted: function () {
      //生命周期
      if (localStorage.getItem("his")) {
        this.his = JSON.parse(localStorage.getItem("his"));
      }
    },
    computed: {
      //计算属性

    },
    methods: {
      //函数
      searchcity: function () {
        this.$http.get('https://elm.cangdu.org/v1/pois?city_id=32' + '&keyword=' + this.inputval + '&type=search').then(
          response => {
            console.log(response);
            this.list = response.data;
          }, response => {
            console.log(response);

          });
      },
      goaddress:function(e){
      var arr=[];
      if(localStorage.getItem("his")){
          arr=JSON.parse(localStorage.getItem("his"));
          for(var i=0;i<arr.length;i++){
            if(arr[i].geohash==e.geohash){
               var isok=true;
            }
          }
          if(!isok){
            arr.unshift(e);
          }
      }else{
          arr.unshift(e);
      }
      localStorage.setItem("his",JSON.stringify(arr));
      this.his=JSON.parse(localStorage.getItem("his"));
      this.list='';
},
      removeall: function () {
        localStorage.clear();
        this.his = "";
      }

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .searchfood{
      width: 100%;
      height: 100%;
      /* border: 2px solid black; */
      position: relative;
    }
  .h-input {
    width: 100%;
    position: relative;
  }
  .cityinput {
    width: 60%;
    height: 0.5rem;
    margin:0.5rem 0px;
    outline: 0px;
    padding: 0px 5px;
    box-sizing: border-box;
    border: 1px solid gray;
    background-color: #f2f2f2;
    position: absolute;
    top: 0;
    left: 0.2rem;
    height: 0.3rem;
    border-radius: 0.03rem;
  }
  .submit {
    width: 20%;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    background-color: #3190e8;
    color: white;
    border-radius: 0.03rem;
    position: absolute;
    right: 0.1rem;
    top: 0.5rem;
    font-size: 0.2rem;
  }

  .h-history {
    font-size: 0.12rem;
    margin-top: 0.9rem;
    margin-left: 0.2rem;
    color: #666;
   
  }
.search {
    margin-top: 1rem;   
  }
  .result{
    margin-top: 0.05rem;
    color: #666;
    border-bottom: 1px solid gray;
    padding-left:  0.2rem;
    padding-bottom:  0.1rem;
  }
  .h-sname {
    font-size: 0.15rem;
    padding-bottom:  0.05rem;
    padding-top:  0.05rem;
  }
  .h-saddress {
    margin-top: 0.05rem;
    font-size: 0.09rem;
  }
  .main {
    border-top: 2px solid #E4E4E4;   
  }

 
  .mainbody {
    margin-top: 0.15rem;
    /* border:1px solid red; */

  }
  
  .h-history1{
    border-bottom: 1px solid gray;
    width: 100%;   
    margin-top: 0.9rem;
    padding-left: 0.2rem;
    color: #666;
    background-color: white

  }
   .history-name{
 /* border:1px solid red; */
 margin-top: -0.7rem;
 padding-top: 0.1rem;
 margin-bottom: 0.05rem;
 padding-bottom: 0.1rem;
 font-size: 0.15rem;
   }
   .history-address{
 /* border:1px solid red; */
  font-size: 0.1rem;
 margin-bottom: 0.05rem;
 padding-bottom: 0.1rem;
   }
   
    .clearall {
    text-align: center;
    height: 0.3rem;
    background-color: white;
    color:#3190e8 ;
    font-size: 0.2rem;
    line-height: 0.3rem;
     margin-top: 0.1rem;
  
  }
  .h-botton2{
    z-index:100;
  position:fixed;
  bottom: 0rem;
  
  }

</style>
