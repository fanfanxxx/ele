<template>

    <!--总体页面  分为上中下底四个模块-->
    <div class="z_wrap">
      <Header style="background:none" @click="tiao()"></Header>  
      <!--上模块-->
      <div class="z_top">
        <div class="z_top-top">
        <!--头像-->
            <div class="z_top-img" >
              <img :src="'https://elm.cangdu.org/img/'+data01.image_path" alt="">
            </div>
        <!--店铺名-->
        <div class="z_top-shopNames" >
          <h4 style="width: 2.91rem;font-size:0.2rem;">{{data01.name}}</h4>
          <p style="font-size:0.13rem;margin-top: 0.08rem;margin-bottom: 0.08rem">商家配送/分钟送达/配送费$0</p>
          <p style="font-size:0.13rem;">公告&nbsp;:&nbsp;{{data01.promotion_info}}</p>

        </div>

        </div>
        <div class="z_top-active">
          <p>
            <span style="background: limegreen; margin-right: 0.05rem;">新</span>
            <span style=" margin-right: 0.05rem;">新用户8折</span>
            <span>(app专享)</span></p>
          <p><span>一个活动</span>
            <span style="margin-right:0.08rem">> </span></p>

        </div>
       <div class="z_top-active-details">
          <router-link to="/shop/shopDetail"><p style="font-size:0.3rem;color:white;"> ></p></router-link > 
        </div>
        <div class="z_top-background">
              <img class="blur" :src="'https://elm.cangdu.org/img/'+data01.image_path" alt="">
        </div>

      </div>
      
      <!--中模块-->
      <div class="z_content">
        <div class="z_content-shop01" @click="handle()">
          <span>商户</span>
        </div>
        <div class="z_content-shop02" @click="handles()">
          <span>评价</span>
        </div>
      </div>
      <!--下模块-->
      <!--商品-->
      <div v-show="ping" class="z_bottom">
        <!--热销左边按钮-->
          <ul class="z_bottom-hotShops">
             <li v-for="item in data"  class="z_bottom-shops" :key="item.id">
               <a :href="'#mmp'+item.id">
                <span>{{item.name}}</span>
              </a>
              <p style="position:absolute;width:0.2rem;height:0.2rem;border-radius:50%;border:1px solid red;text-align:center;line-height:0.2rem;left:0.85rem;top:0.1rem;">1</p>
              <!-- <span class="z_bottom-hotShops-span">1</span> -->
               </li>
          </ul>
        <!--热销右边-->
        <ul class="z_bottom-hotBox">
       <li v-for="item in data" class="z_bottom-Box" :key="item.id">
            <header class="z_bottom-hotBox-titleBox" :id="'mmp'+item.id">
              <section class="z_bottom-hotBox-title">
                <span>{{item.name}}</span>
                <span style="font-size: 0.13rem;color: whitesmoke;">{{item.description}}</span>
                <span>...</span>
              </section>
            </header>
              <!--热销内容-->
              <section class="z_bottom-hotBox-list">
                <!--店铺介绍-->
                <div class="z_bottom-hotBox-list01" v-for="(value,index) in item.foods" :key="index" >
                 <router-link to="/shop/list01"><section style="position:absolute;width:2.5rem;height:0.6rem;color:white;font-size:0.14rem;overflow:hidden;margin-left:-0.08rem;margin-top:-0.08rem;">
                    <p style="width:0.5rem;border-radius:0.2rem;text-align:center;color:red;font-size:0.15rem;margin-left:1.8rem;margin-top:0.1rem;border:1px solid red;">招牌</p>
                    <p style="width:0.5rem;padding-top:0.4rem;transform:rotate(-49deg);text-align:center;background:green;margin-top:-0.5rem;margin-left:-0.26rem" >新品</p>
                    </section>  </router-link>
                 
                  <section class="z_bottom-hotBoxImg" >
                    <img :src="'https://elm.cangdu.org/img/'+value.image_path" alt="">
                  </section>
                  <section class="z_bottom-hotBoxdetail01">
                    <h3 style=" font-size: 0.21rem;margin-bottom:0.05rem; "><strong>{{value.name}}</strong></h3>
                    <p style=" font-size: 0.12rem;color: darkgray;">{{value.description}}</p>
                  </section>
                  <p style="font-size: 0.15rem">
                   {{value.tips}}
                  </p>
                  <p v-if="values.image_text" v-for="values in value.activity" :key="values.id">
                    <span style=" font-size: 0.1rem;border-radius: 0.15rem;border: 1px solid red;color: red;">
                  {{values.image_text}}
                  </span>
                  </p>
                
           <!--店铺价格,预计绑定购物车-->
                  <footer class="z_bottom-hotBox-list02">
                    <section class="z_bottom-hotBox-list02-left">
                      <span>$</span>
                      <span>{{value.specfoods[0].price}}</span>
                    </section>
                    <!-- @click="countAdd(value.specfoods[num].price,values01,index)" -->
                    <section class="z_bottom-hotBox-list02-right" >
                      <section style="font-size: 0.16rem;">
                        <i class="el-icon-remove-outline" style="font-size: 0.21rem" v-show="value.specfoods[0].count>0" @click="app(value.specfoods[0])"></i>
                        <span @click="yins()"  style="font-size: 0.15rem">{{value.specfoods[0].count}}</span>
                        <i class="el-icon-circle-plus" style="font-size: 0.21rem" @click="add(value.specfoods[0])"></i>
                      </section>
                    </section>
                  </footer>
                  </div>
                  </section>
                 
                   </li>
        </ul>
    
      </div>
           <!--评价页面-->
      <div class="z_app" v-show="bing">
          <header class="z_app-top">
            <section class="z_app-top-left">
              <p style="font-size: 0.3rem;color: red;">4.7</p>
              <p style="font-size: 0.18rem;margin-bottom: 0.1rem;margin-top: 0.1rem">综合评价</p>
              <p style="font-size: 0.14rem;color: lightgray;">高于周边买家76.98%</p>
            </section>
            <section class="z_app-top-right">
              <p >
                <span style="font-size: 0.15rem;margin-right: 0.05rem;">服务态度</span>
                <el-rate
                  v-model="value5"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}" class="el-rate__icon">
                </el-rate>
              </p>
              <p style="margin-bottom: 0.05rem;">
                <span style="font-size: 0.15rem;margin-right: 0.05rem;">菜品评价</span>
                <el-rate
                  v-model="value5"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}" class="el-rate__icon">
                </el-rate>
              </p>
              <p><span style="margin-right: 0.1rem;">送达时间</span><span>{{data[0].foods[0].server_utc}}</span></p>
            </section>
          </header>
        <section class="z_app-content">
          <ul class="z_app-contentS">
            <li class="z_app-contentSS"  v-for="(oo,index) in data03" :key="index">{{oo.name}}({{oo.count}})</li>
          </ul>
          <ul class="z_app-contentX" v-for="(items,index) in data02" :key="index">
              <img style="width: 0.3516rem;height: 0.3516rem;margin-right: 0.2rem;margin-left: 0.1rem;" :src="'https://elm.cangdu.org/img/'+items.image_hash" alt="">
              <ul class="z_app-contentXX-name">
                <li style="width:2.5rem;">
                <p>{{items.username}}</p>
                <span><el-rate
                  v-model="value5"
                  disabled
                  text-color="#ff9900"
                  score-template="{value}" style="display: inline-block;margin-top: 0.1rem" class="el-rate__icon">
                </el-rate></span>
                  <span>{{items.time_spent_desc}}</span>
                </li>
        <li style="width: 0.8rem;font-size: 0.13rem;">
            <p>{{items.rated_at}}</p>
        </li>
        </ul>
              <ul class="z_app-contentXX-img">
                <li class="z_app-contentXX-img1" v-for="val in data02.item_ratings" :key="val._id">
                  <img style="width: 0.7rem;margin-right: 0.1rem;" :src="'https://elm.cangdu.org/img/'+val.image_hash" alt="">
                </li>
              </ul>
              <ul class="z_app-contentXX-mark">
                <li class="z_app-contentXX-markS" v-for="val in data02.item_ratings" :key="val.id">{{val.food_name}}</li>
              </ul>

          </ul>

        </section>
      </div>
      <div class="z_tankaung"  v-if="yin">
        <section style="display:flex;justify-content: space-between;color:black;font-size:0.2rem;background:gray;">
          <p>购物车</p><p @click="clear()">清空</p>
        </section>
    <section v-for="fff in arr" :key="fff.id">
      <p>{{fff.name}}</p>
      <p>${{fff.price}}</p>
      <div style="display:flex;">
      <p @click="app(fff)">-</p>
      <p>{{fff.count}}</p>
      <p @click="add(fff)">+</p>
      </div>
    </section>
   </div>
       <ShopChe></ShopChe> 
    </div>
</template>

<script>
import List from "./list-top.vue";
import ShopChe from "./shopche.vue";
import Header from "../us/header.vue";
import Vue from "vue";
export default {
  name: "business-list",
  components: {
    List,
    ShopChe,
    Header
  },
  data() {
    return {
      value5: 3.7,
      ping: true,
      bing: false,
      data01: [],
      date: "",
      values: "",
      values01: 0,
      show2: false,
      // 储存招牌的值
      data02: [],
      num: "",
      aaa: {},
      data03: [],
    };
  },
  methods: {
    handle() {
      if (this.ping == true) {
        return;
      } else {
        this.bing = false;
        this.ping = !this.ping;
      }
    },
    handles() {
      if (this.ping == true) {
        this.ping = false;
        this.bing = !this.bing;
      } else {
        return;
      }
    },
    app(aaa) {
        this.$store.commit("app",aaa);
      
    },
    add(aaa){
      this.$store.commit("addShop",aaa);
    },
    yins(){
      this.$store.commit("yin");
    },
    clear(){
      this.$store.commit("clear")
    },
    tiao(){
      this.$router.push("/htakeout")
    }
    
  },
  created() {
    console.log("斤斤计较斤斤计较");
    //  console.log( this.$route.params);
    this.aaa = localStorage.shopid;
    let api =
      "https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+this.aaa;
    let api01 =
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
    let api02 =
      "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10";
     let api03 ="https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags";
    this.$http.get(api).then(data => {
      // console.log(data);
      
      // console.log(this.data);
     
      for (let i = 0; i < data.data.length; i++) {
        for(let ii = 0; ii < data.data[i].foods.length; ii++)
        Vue.set(data.data[i].foods[ii].specfoods[0], "count", 0);
      }
      console.log(data.data)
      this.$store.commit("addChange", data.data);
    });
    this.$http.get(api01).then(data => {
      // console.log(data);
      this.data01 = data.data.filter(key => this.aaa == key.id)[0];
      this.$store.commit("shopss",data.data)
      // console.log(this.data01)
    });
    this.$http.get(api02).then(data => {
      this.data02 = data.data;
      // console.log(this.data02);
    });
      this.$http.get(api03).then(data => {
      this.data03 = data.data;
      console.log(this.data03);
    });
  },
  computed: {
      data(){
        return this.$store.state.shopAdd
      },
      arr(){
        return this.$store.state.arrss
      },
      yin(){
           return this.$store.state.yin
      }
      
      
  }
}
</script>


<style scoped>
/*<!--返回键-->*/
.z_top-return {
  width: 3.75rem;
  height: 0.4688rem;
  color: white;
  /*border: 1px solid yellow;*/
  position: absolute;
  left: 0.1rem;
  top: 0.05rem;
  z-index: 9;
}
.z_top-return p {
  width: 0.9375rem;
  height: 0.4219rem;
  font-size: 0.28rem;
}
/*上部分*/
.z_top {
  width: 3.75rem;
  height: 1rem;
  color: white;
  padding-left: 0.1rem;
  padding-top: 0.1rem;
  background-color: rgba(0, 0, 0, 0.2);
}
/**/
.z_top-top {
  display: flex;
  justify-content: flex-start;
  /*border: 3px solid yellow;*/
  margin-right: 0.1rem;
}
/*店铺图像*/
.z_top-img img {
  width: 0.6797rem;
  height: 0.6797rem;
  /*border: 1px solid red;*/
}
/*店铺名字*/
.z_top-shopNames {
  /*border: 1px solid red;*/
  position: absolute;
  left: 0.85rem;
  z-index: 8;
}
.z_top-active {
  width: 3.5rem;

  display: flex;
  justify-content: space-between;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  margin-left: 0.2rem;
  /*border: 1px solid red;*/
  font-size: 0.15rem;
}
.z_top-active-details {
  z-index: 10;
  position: absolute;
  right: 0.1rem;
  top: 0.45rem;
}
.z_top-background {
  /* border: 1px solid red; */
  width: 3.75rem;
  height: 1.1rem;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0rem;
  bottom: 1rem;
  padding-right: 3rem;
  overflow: hidden;
}
.z_top-background img {
  width: 100%;

  position: absolute;
  top: -1.5rem;
  left: 1.5rem;
  /* border: 3px solid yellow; */
}

/*中部 */
.z_content {
  border: 1px solid lightgray;
  width: 3.75rem;
  display: flex;
  font-size: 0.18rem;
  padding: 0.05rem;
}
.z_content-shop01,
.z_content-shop02 {
  width: 1.75rem;
  margin-top: 0.05rem;
  margin-bottom: 0.16rem;
  text-align: center;
  /*border: 1px solid red;*/
}
.z_content-shop01 span:hover {
  color: cornflowerblue;
  border-bottom: 2px solid dodgerblue;
}
.z_content-shop02 span:hover {
  color: cornflowerblue;
  border-bottom: 2px solid dodgerblue;
}
.z_bottom {
  position: relative;
  /* border: 1px solid red; */
}
/*左边*/
.z_bottom-hotShop {
  position: absolute;
  /* border: 1px solid red; */
}
.z_bottom-hotShops {
  width: 1.2rem;
  height: 5rem;
  overflow: scroll;
  /* border: 1px solid red; */

  background: lightgray;
}
.z_bottom-shops {
  /* border: 1px solid red; */
  padding-left: 0.05rem;
  padding-bottom: 0.15rem;
  padding-top: 0.25rem;
}
.z_bottom-shops span {
  /* border: 1px solid red; */
  font-size: 0.2rem;
  color: black;
}
.z_bottom-shops:hover {
  background: white;
  border-left: 5px solid blue;
}
/*右边*/
.z_bottom-hotBox {
  width: 2.55rem;
  /* border: 1px solid green; */
  position: absolute;
  right: 0;
  top: 0;
  height: 5rem;
  overflow: scroll;
}
/*header标签*/
.z_bottom-hotBox-titleBox {
  background: gainsboro;
  /* border: 1px solid yellow; */
}
.z_bottom-hotBox-titleBox span {
  /* border: 1px solid yellow; */
  padding-left: 0.1rem;
}
/* header标签前三个字 */
.z_bottom-hotBox-title {
  /* border: 1px solid yellow; */
  padding: 0.1rem;
  font-size: 0.21rem;
}
.z_bottom-hotBox-list {
  margin-top: 0.1rem;
}
/*店铺信息布局*/
.z_bottom-hotBox-list01 {
  margin-bottom: 0.2rem;
  padding-left: 0.05rem;
  /* border: 2px solid yellow; */
}
.z_bottom-hotBoxImg {
  height: 0.78rem;
  float: left;
  /* border: 1px solid red; */
}
.z_bottom-hotBoxImg img {
  width: 0.47rem;
  margin-left: 0.05rem;
}
/*题目*/
.z_bottom-hotBoxdetail01 {
  width: 1.55rem;
  /* border: 1px solid red; */
  float: left;
  margin-left: 0.1rem;
}
/*"月售"*/
.z_bottom-hotBox-list01 > p {
  width: 1.4rem;
  float: left;
  margin-top: 0.05rem;
  margin-bottom: 0.05rem;
  /*border: 1px solid red;*/
  font-size: 0.1rem;
  margin-left: 0.1rem;
}
/*价格*/
.z_bottom-hotBox-list02 {
  width: 1.55rem;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  padding-left: 0.2rem;
  padding-top: 0.1rem;
}
.z_bottom-hotBox-list02-left {
  width: 0.5rem;
  font-size: 0.18rem;
  color: red;
}
.z_bottom-hotBox-list02-right {
  width: 0.62rem;
}

.z_app {
  width: 3.75rem;
  /*border: 2px solid red;*/
}
.z_app-top {
  margin: 0.15rem;
  margin-left: 0.1rem;
  margin-right: 0.01rem;
  /*border: 1px solid red;*/
  display: flex;
}
.z_app-top-left {
  width: 1.45rem;
  /*border: 1px solid red;*/
  text-align: center;
}
.z_app-top-right {
  width: 2.2rem;
  /*border: 1px solid red;*/
}
.z_app-top-right > p {
  /*border: 1px solid red;*/
  display: flex;
  padding-top: 0.05rem;
}
/*评价右上*/
.z_app-content {
  width: 3.75rem;
  /*border: 1px solid red;*/
}
.z_app-contentS {
  margin: 0.1rem;
  /*border: 1px solid red;*/
}

.z_app-contentSS {

  /*border: 1px solid red;*/
  background: #2fa8ec;
  margin-right: 0.05rem;
  display: inline-block;
  text-align: center;
  margin-top: 0.05rem;
}
.z_app-contentSS:hover {
  color: white;
}
.z_app-contentX {
  width: 3.75rem;
  display: flex;
  flex-wrap: wrap;
  /*border: 1px solid red;*/
}
/*评价详情右侧*/
.z_app-contentXX-name {
  width: 3rem;
  /*border: 1px solid red;*/
  display: flex;
  justify-content: space-between;
}
.z_app-contentXX-img {
  width: 2.97rem;
  /*border: 1px solid red;*/
  display: inline-block;
  margin-left: 0.65rem;
  margin-top: 0.05rem;
  margin-bottom: 0.15rem;
}
.z_app-contentXX-img1 {
  /*border: 1px solid red;*/
  display: inline-block;
}
.z_app-contentXX-mark {
  width: 2.97rem;
  /*border: 1px solid red;*/
  margin-left: 0.65rem;
}
.z_app-contentXX-markS {
  /*border: 1px solid red;*/
  display: inline-block;
  font-size: 0.15rem;
  margin-left: 0.15rem;
}
/* .transition-box {
  width: 3.75rem;
  height: 1rem;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
  position: absolute;
  z-index: 211;
} */
.z_tankaung{
  width: 3.75rem;
  background: white;
   position: absolute;
  bottom: 0.2rem;
  z-index: 500;
}
.z_tankaung section{
  display: flex;
  justify-content:space-between;
 
 
}
.z_tankaung section p{
  margin: 0.2rem;
  color: black;
}
</style>
<style>
.el-rate__icon {
  font-size: 0.01rem;
}
</style>

