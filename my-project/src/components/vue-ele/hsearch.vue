<template>
  <div class="searchfood">
    <Header1>{{msg}}</Header1>
     <div class="h-scenter">

    
    <div class="h-input">
      <input v-model="inputval" class="foodinput" placeholder="搜索商家或食品">
     
      <div @click="searchfood" class="submit">提交</div>
    </div>

    <div class="main">
 <!-- //搜索到的东西 -->
 <div v-if="list!=''" class='search '>
    <div v-for="item in list" @click="goaddress({name:item.name,latitude:item.latitude,longitude:item.longitude,address:item.address,geohash:item.geohash})"
      class="result">
      <div class=" h-sname ">{{item.name}}</div>
      <!-- <div class=" h-saddress ">{{item.address}}</div> -->
    </div>
  </div>


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
      searchfood: function () {
        this.$http.get('https://elm.cangdu.org/v1/pois?city_id=32' + '&keyword=' + this.inputval + '&type=search').then(
          response => {
            console.log(response);
            this.list = response.data;
          }, response => {
            console.log(response);

          });
      },
      //去重展示历史纪录
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
        // localStorage.clear();
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
      /* display: flex; */
      /* border: 2px solid black; */
      /* position: relative; */
    }
  .h-input {
    width: 100%;
    /* position: relative; */
    display: flex;
    justify-content: space-around;
  }
  .foodinput {
    width: 70%;
    height: 0.8rem;
    margin-top:0.6rem ;
    margin-left:0.2rem ;
    outline: 0px;
    padding: 0px 5px;
    box-sizing: border-box;
    border: 1px solid gray;
    background-color: #f2f2f2;
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
    margin-top:0.6rem ;
    margin-right:0rem ;
    font-size: 0.2rem;
  }
  

  /* 大的div */
  .main{
    width: 100%;
    height: 100px;
    /* border: 1px solid blueviolet; */
    margin-top: 0.2rem;
  }
  /* 搜索到的东西 */
  .search { 
  width: 100%;
  }
.result{
  margin-top: 0.05rem;
  color: #666;
  border-bottom: 1px solid gray;
  padding-left:  0.3rem;
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
  /* 搜索历史 */
  .his{
    width: 100%;
    float: left;
    
  }
   /* 搜索历史四个字 */
   .h-history {
    font-size: 0.15rem;
    margin-left: 0.2rem;
    height: 0.3rem;
    line-height: 0.3rem;
    font-weight: 700;
    color: #666;
  }
  .mainbody {
    width: 100%;  
    margin-top: 0.1rem;
  }
 
  .h-history1{
    /* border:1px solid red; */
    width: 100%;   
    padding-left: 0.2rem;
    color: #666;
    background-color: white
  }
   .history-name{
 padding-top: 0.1rem;
 /* margin-bottom: 0.05rem; */
 padding-bottom: 0.1rem;
 border-bottom: 1px solid gray;
 font-size: 0.18rem;
 color: #333;
 margin-top: 0.1rem;
   }
   .history-address{
 /* border:1px solid red; */
  font-size: 0.1rem;
 margin-bottom: 0.05rem;
 padding-bottom: 0.1rem;
   }
    .clearall {
    text-align: center;
    height: 0.4rem;
    background-color: white;
    color:#3190e8 ;
    font-size: 0.2rem;
    line-height: 0.4rem;
     margin-top: 0.2rem
  
  }
  .h-botton2{
    z-index:100;
  position:fixed;
  bottom: 0;
  
  }

</style>
