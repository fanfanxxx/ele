<template>
  <div class="s-top">
    <Header>{{msg}}</Header>
    <div class="h_food_center">
      <div>
        <input type="text" placeholder="请输入商家或美食名称" v-model="content" >
      </div>

      <div>
        <input id="submit" type="submit" @click="searchData()" >
      </div>
   <!-- <li>{{content}}</li> -->
    </div>
    <div v-if="bool">
      <header class="h_food_history">搜索历史</header>

      <ul class="h_food_history_lis">
        <router-link  to="/htakeout" class="h_food_history_li" v-for="item in user" :key="item.id">
          <h4>{{item}}</h4>
          <!-- <p>{{item.address}}</p> -->

        </router-link>

      </ul>
      <div  class="h_history_clear" @click="clear()">清空搜索历史</div>
    </div>
    <div v-else>
      <ul class="f_city_history_lis">
        <router-link  to="/htakeout" class="h_city_history_li"  v-for="(item,index) in data"
          :key="index">
          <h4>{{item.name}}</h4>
          <p>{{item.address}}</p>
        </router-link>
      </ul>
    </div>
    <Htotal></Htotal>
  </div>

</template>
<script>
  import Header from "../us/header"
  import Htotal from "./htotal"
  export default {
    name: "hsearch",
    data() {
      return {
        msg: "搜索",
        data: "",
        bool: true,
        content: "",
        history: [],
        user:[]
      }
    },
    components: {
      Htotal,
      Header
    },
    created() {
      // console.log('tag', this.bool);
      //接口2
      // console.log(this.content,"哈哈哈哈哈")
      var api2 ='https://elm.cangdu.org/v1/pois?city_id=1&' + 'keyword=' +this.content;
      this.$http.get(api2
      ).then(data => {
        this.data = data.data;
        console.log("获取到数据")
        console.log(this.data,"ffffff");
        
      })
      this.user = JSON.parse(localStorage.getItem("userInfo"))
      console.log(this.user)
    },
    methods: {
      searchData(){
         this.bool=false;
        //  console.log(history);
        //  console.log(this.content)
        this.history.push(this.content)
        // console.log(this.history,"哈哈哈")
        localStorage.setItem("userInfo",JSON.stringify(this.history));
      },
     clear(){
       this.user=[];
      localStorage.clear();
      console.log("666666666")
      this.bool=false;
     }

    },
   
  }

</script>
<style scoped>
  .s-top {
    width: 100%;
    height: 50px;
    background-color: blue;
  }

  .h-sou {
    width: 20%;
    height: 50px;
    line-height: 50px;
    font-size: 0.2rem;
    color: white;
    text-align: center;
    margin-left: 40%;
  }

  .h_food_center {
    margin-top: 0.6rem;
    /* border: 2px solid red; */
    background-color: #fff;
    /* margin-bottom: 0.12rem; */
    /* border-bottom: 1px solid #e4e4e4; */
    display: flex;
    justify-content: space-around;
  }

  .h_food_center>div {
    width: 60%;
    /* margin: 0.12rem auto; */
    height: 0.6rem;
    /* box-sizing: border-box; */
    border: 1px solid gray;



  }

  .h_food_center>div>input {
    height: 0.6rem;
    width: 100%;
    font-size: 0.17rem;

  }

  .h_food_center>div:nth-child(2) {
    width: 30%
  }

  #submit {
    width: 100%;
    background-color: #3190e8;
    color: white;
  }

  .h_food_history {
    /* border-top: 1px solid #e4e4e4; */
    /* border-bottom: 1px solid #e4e4e4; */
    /* padding: 0.06rem 0; */
    /* padding-left: 0.12rem; */
    font-size: 0.15rem;
    margin-top: 0.2rem;
    color:gray
    /* border: 1px solid #c91818; */
    /* border: 1px solid rgb(0, 255, 179); */
  }
  

  .h_food_history_lis {
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    /* border: 1px solid blue; */
    margin-top:0.1rem
  }

  .h_food_history_li { 
    border-bottom: 1px solid gray;
    padding-top: 0.14rem;
    /* border: 1px solid rgb(255, 0, 191); */
  }

  .h_food_history_li>h4 {
    width: 90%;
    margin: 0 auto 0.1rem;
    font-size: 0.15rem;
    color: #333;
  }

  .h_food_history_li>p {
    width: 90%;
    margin: 0 auto 0.1rem;
    font-size: 0.09rem;
    color: #999;
  }

  .h_history_clear {
    text-align: center;
    font-size: 0.18rem;
    color: #3190e8;
    background-color: white;
    height: 0.34rem;
    line-height: 0.34rem;
    /* border: 1px solid red; */
    /* margin-top: 0.1rem; */
  }

</style>
