<template>
  <div class="h-total">
      <div class="h-botton">
    <router-link  class="h-link" to="/htakeout">
      <ul  class="static">
          <div  @click="wm1">
                <li v-show="value1"><img src="./imgs/elm.png" alt=""></li>
                <li v-show="!value1"><img src="./imgs/elm1.png" alt=""></li>
          </div>
        
        <p>外卖</p>
      </ul>
    </router-link>
<router-link   class="h-link" :to="{name:'hsearch'}" >
    <ul class="static"  >
        <div @click="ss1">
                <li v-show="value2"><img src="./imgs/zhi.png" alt=""></li>

                 <li v-show="!value2"><img src="./imgs/zhi1.png" alt=""></li>
        </div>
       
        <p>搜索</p>
    </ul>
</router-link >
<router-link  class="h-link" :to="{name:'hfind'}">
    <ul class="static" >
        <div @click="fx1">
                <li v-show="value3"><img src="./imgs/order.png" alt=""></li>
                <li  v-show="!value3"><img src="./imgs/order1.png" alt=""></li>
        </div>
        
        
        <p>发现</p>
    </ul>
</router-link>
<router-link  class="h-link" :to="{name:'hmine'}">
    <ul class="static" >
        <div @click="wd1">
                <li v-show="value4"><img src="./imgs/mine.png" alt=""></li>
                <li v-show="!value4"><img src="./imgs/mine1.png" alt=""></li>
        </div>
        
        <p>我的</p>
    </ul>
</router-link>
</div>
<router-view ></router-view>
  </div>
</template>
<script>
    import {mapState,mapMutations } from 'vuex'
    export default{
        name:"htotal",
     data(){
         return{
            
         }
     },
     computed:mapState({
       value1:"value1",
       value2:"value2",
       value3:"value3",
       value4:"value4",

     }),
    
     methods:{
        wm1(){
            this.$store.commit("wm")
        },
        ss1(){
            this.$store.commit("ss")
        },
        fx1(){
            this.$store.commit("fx")
        },
        wd1(){
            this.$store.commit("wd")
        },
     }
    
}
</script>
<style scoped>
    .h-total{
        width: 100%;
        background-color: white;
        /* border: 1px solid red; */
        /* height: 100%; */
       
    }
  .h-botton
  {
      width: 100%;
      height: 0.6rem;
      display: flex;
      justify-content: flex-start;
      /* position:fixed; */
      /* bottom:0; */
      background-color: white;
      /* z-index: 100; */
      /* border: 1px solid red; */
      /* border: 1px solid rgb(111, 22, 194); */
      
  }
  .h-botton .h-link{
    width: 25%;
  }
  .h-link li img{
      width: 50%;
      margin-left: 25%;
      height: 40px;
  }
  .h-link p{
    text-align: center;
    color: gray
  }
 /* .router-link-active p{
     color:blue;
    
    
 } */
</style>
