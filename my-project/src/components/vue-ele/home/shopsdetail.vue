<template>
  <div class="all">
    <div class="h-line">
      <div class="h-logo">
        <img src="./himgs/logo.png" alt="">
      </div>
      <span class="shopers">附近商家</span>
    </div>
    <router-link to="/shop">

      <div class="h-shopers" v-for="(shopsitem,index) in shopsData" :key="index">

        <div @click="gozzs(shopsData[index].id)">


          <div class="h-shopsimg">
            <!-- image_path: "164ad0b6a3917599.jpg" -->
            <!-- https://elm.cangdu.org/img/164ad0b6a3917599.jpg -->
            <!-- <img src="./himgs/img01.jpeg" alt=""> -->
            <img :src="'https://elm.cangdu.org/img/'+shopsitem.image_path" alt="">
          </div>
          <div class="h-content">

            <div class="hh">
              <h2 class="h-h1">品牌</h2>
              <!-- name: "效果演示" -->
              <!-- <h2 class="h-h2">效果演示</h2> -->
              <h2 class="h-h2">{{shopsitem.name}}</h2>
            </div>


            <div class="h-center">
              <div class="h-block">
                <!-- <el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate> -->
                <el-rate v-model="value1" disabled text-color="#ff9900" size="20px">
                </el-rate>
              </div>
              <!-- rating: -->
              <!-- <div class="h-point">4.7</div> -->
              <div class="h-point">{{shopsitem.rating}}</div>
              <!-- recent_order_num: 106 -->
              <!-- <div class="h-bills">月售106单</div> -->
              <div class="h-bills">月售{{shopsitem.recent_order_num}}单</div>
            </div>
            <p class="h-botton">
              <span>¥20起送</span>
              <span>/</span>
              <!-- "piecewise_agent_fee": {
            "tips": "配送费约¥5"
        },  -->
              <!-- 配送费约¥5 -->
              <span>{{shopsitem.piecewise_agent_fee.tips}}</span>

            </p>

          </div>
          <div class="h-last">
            <ul class="h-ul">
              <li>保</li>
              <li>准</li>
              <li>票</li>
            </ul>
            <div class="h-ontime">
              <span>蜂鸟专送</span>
              <!-- <span>{{shopsitem.delivery_mode.text}}</span> -->
              <span>准时达</span>
            </div>
            <div class="h-distance">
              <!-- <span>10公里</span> -->
              <span>{{shopsitem.distance}}</span>
              <span>/</span>
              <!-- <span>40分钟</span> -->
              <span>{{shopsitem.order_lead_time}}</span>
            </div>
          </div>
          <!-- <hr> -->
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
 
  export default {
    name: "shopsdetail",
    data() {
      return {
        shopsData: [],
        value1: 4.5,
       onedata:'',
       id:'',
      
      }

    },
    
    methods: {
      gozzs: function (index) {
        this.index = index;
        localStorage.shopid=index;
        this.$router.push({
          name: 'business-list',
          params: {
            id: this.index
          },
        
        });
      }
    },

    created() {
      
      //接口6 
      let api = "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
      this.$http.get(api).then((data) => {
        //成功后的回调
        console.log('成功了..');
        console.log(data.data, '1234567');
        this.shopsData = data.data;
        // console.log(this.shopsData[0])
      
      })

    }
  }

</script>
<style scoped>
  .h-line {
    position: relative;
    border-top: 1px solid gray;
    margin-bottom: 0.1rem;
  }

  .h-logo {
    width: 0.2rem;
    height: 30px;
    margin-top: 0.3rem;
    /* border:1px solid red; */
    /* float: left; */
    margin-left:5%;
  }

  .shopers {
    position: absolute;
    left: 12%;
    top: 60%;
    color: gray;
    /* float: left; */
  }

  .all {
    height: 1.3rem;
  }


  .h-logo img {
    width: 100%;
    /* border: 1px solid red; */
  }

  .h-shopsimg {
    width: 20%;
    height: 1.3rem;
    /* border: 1px solid red; */
  }

  .h-shopsimg img {
    width: 100%;
    height: 80%;
    margin-top: 5%;
    /* border: 1px solid red; */
  }

  .h-shopers {
    position: relative;
    height: 1.5rem;
    border-bottom: 1px solid gray;

  }

  .h-content {
    width: 48%;
    position: absolute;
    left: 22%;
    top: 0;
    /* border: 1px solid red; */
    height: 1.4rem;
  }

  .h-h1 {
    
    width: 30%;
    text-align: center;
    margin-top: 0.08rem;
    font-size: 0.16rem;  
    color: #333;
    /* background-color: #ffd930; */
    border-radius: .05rem;
    margin-right: .2rem;
}
  

  .h-h2 {
    width: 60%;
    margin-top: 0.03px;
    position: absolute;
    left: 32%;
    top: 0.05rem;
    /* border: 1px solid red; */ 
    color: #333;
    padding-top: .01rem;
    font: .2rem/.2rem PingFangSC-Regular;
    font-weight: 700;
    overflow: hidden;
  }

  .h-center {
    display: flex;
    justify-content: space-around;
    height: 0.5rem;
    margin-top: 20px;
    /* border: 1px solid blue; */
  }

  .h-block {
    margin-top: 0.1rem;
    /* border: 1px solid blue; */
    width: 50%;
  }

  .el-rate {
    width: 100%;
  }

  .h-point {
    width: 10%;
    line-height: 0.5rem;
    /* border: 1px solid red; */
    margin-left: -5%;
    color: #ff9900;
  }

  .h-bills {
    margin-left: 5%;
    width: 40%;
    line-height: 0.5rem;
    font-size: 0.08rem;
    color: #666;
  }

  .h-botton {
    margin-top: 0.15rem;
    /* border: 1px solid red; */
  }

  .h-botton span:nth-child(odd) {
    /* color:red; */
    font-size: 0.1rem;
    color: #666;
  }

  .h-last {
    width: 38%;
    position: absolute;
    right: 0;
    top: 0;
    /* border: 1px solid red; */
    height: 1.4rem;
  }

  .h-ul {
    display: flex;
    justify-content: flex-start;
    height: 0.3rem;
    margin-left: 10%;
    margin-top: 5%;
    color: #666;
  }

  .h-ul li {
    width: 20%;
    text-align: center;
    border: 1px solid transplate;
       font-size: 0.1rem
  }

  .h-ontime {
    display: flex;
    margin-top: 0.25rem;
    justify-content: space-around;

  }

  .h-ontime span {
    height: 0.25rem;
    line-height: 0.25rem;
    width: 35%;
    /* border:1px solid blue; */
    text-align: center;
  }

  .h-ontime span:nth-child(1) {
    background-color: #3190e8;
    font-size: 0.07rem;
    margin-left: 10%;
    color:white;
  }

  .h-ontime span:nth-child(2) {
    border: 1px solid #3190e8;
    border-radius: 0.02rem;
    font-size: 0.07rem;
    color:#3190e8;

  }

  .h-distance {

    display: flex;
    justify-content: center;
    margin-top: 0.2rem;
    /* border: 1px solid yellowgreen; */
    margin-left: 10%;
    font-size: 0.1rem
  }

  .h-distance span:nth-child(odd) {
    width: 45%;
    /* border: 1px solid red; */
    color: #666;
  }

  .h-distance span:nth-child(even) {
    width: 5%;
  }

  .h-distance span:nth-child(3) {
    color: #3190e8;
  }


</style>
<style>
  .el-rate__item {
    margin-top: 0.1rem;
    width: 0.097rem;
  }

  .el-rate__icon {
    font-size: .1rem;
  }

  .el-rate__text {
    font-size: 0.15rem;
  }

</style>
