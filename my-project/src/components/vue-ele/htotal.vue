<template>
  <div class="h-total">
      <div class="h-botton">
    <router-link  class="h-link" to="/htakeout">
      <ul  class="static">
          <div  @click="wm1">
                <li v-show="value1"><img src="../../../static/imgs/himgs/elm.png" alt=""></li>
                <li v-show="!value1"><img src="../../../static/imgs/himgs/elm1.png" alt=""></li>
          </div>
        <p>外卖</p>
      </ul>
    </router-link>
<router-link   class="h-link" :to="{name:'hsearch'}" >
    <ul class="static"  >
        <div @click="ss1">
                <li v-show="value2"><img src="../../../static/imgs/himgs/zhi.png" alt=""></li>

                 <li v-show="!value2"><img src="../../../static/imgs/himgs/zhi1.png" alt=""></li>
        </div>  
        <p>搜索</p>
    </ul>
</router-link >
<router-link  class="h-link" to="/order">
    <ul class="static" >
        <div @click="fx1">
                <li v-show="value3"><img src="../../../static/imgs/himgs/order.png" alt=""></li>
                <li  v-show="!value3"><img src="../../../static/imgs/himgs/order1.png"alt=""></li>
        </div>
        
        
        <p>发现</p>
    </ul>
</router-link>
<router-link  class="h-link" :to="{name:'hmine'}">
    <ul class="static" >
        <div @click="wd1">
                <li v-show="value4"><img src="../../../static/imgs/himgs/mine.png" alt=""></li>
                <li v-show="!value4"><img src="../../../static/imgs/himgs/mine1.png" alt=""></li>
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
    }
  .h-botton
  {
      width: 100%;
      height: 0.4rem;
      display: flex;
      justify-content: flex-start;
      background-color: white;
  }
  .h-botton .h-link{
    width: 25%;
    height: 0.4rem;
  }
  .h-link li img{
      width: 30%;
      margin-left: 35%;
      margin-top: 0.06rem;
      height: 0.2rem;
  }
  .h-link p{
    text-align: center;
    color: gray;
    font-size: 0.1rem;
  }
 /* .router-link-active p{
     color:blue; 
 } */
</style>
