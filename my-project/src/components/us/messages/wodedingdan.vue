<template>
  <div>

    <Head>
      <span>
        {{msg}}
      </span>
    </Head>
    <section v-if="data[0]" class="f_top">

      <img :src="'https://elm.cangdu.org/img/'+data[0].image_path" alt="">
      <div class="f_right">
        <div class="f_right_top">
          <div>
              <div>
                    <span>{{data[0].name}}</span>
                    <span class="el-icon-arrow-right"></span>
              </div>
            
            <p>2018-11-01 09:09</p>
          </div>
          <span>
            等待支付
          </span>
        </div>
        <div class="f_right_center">
            <span >{{arr[0].item_id}}等{{arr[0].length}}件商品</span>
            <span>￥{{number}}</span>
        </div>
        <div class="f_right_bottom">
            <p>去支付(还剩{{tim}})</p>
        </div>

      </div>

    </section>
    <Alert v-if="bol">
            <p>{{content}}</p>
            <div class="f_alert_submit" @click="bol=false">确认</div>
    </Alert>
    <Htotal class="h-botton3"></Htotal>
  </div>

</template>



<script>
  import Head from '../header.vue'
  import Alert from '../alert.vue'
  import Htotal from "../.././vue-ele/htotal.vue"
  export default {
    name: "wodedingdan",
    data() {
      return {
        msg: "订单列表",
        content:"支付超时",
        tim:"",
        bol:false
      }
    },
    computed:{
         number(){
          return this.$store.state.numbers
      },
      arr(){
          return this.$store.state.arrss
      },
        data(){
        return this.$store.state.shopss
      }
    },
    components: {
      Head,
      Alert,
      Htotal 
    },
    created(){
      
            this.$store.commit("fx");
      
        var _this = this;
      var time = 900;
      clearInterval(timer);
      var timer = setInterval(function () {
        time--;
        if (time > 0) {
          var m = parseInt(time / 60);
          if (m < 10) {
            m = '0' + m;
          }
          var s = Math.floor(time % 60);
          if (s < 10) {
            s = '0' + s;
          }
          _this.tim =  m + '分' + s +"秒";
          
        } else {
            _this.tim = "00分00秒";
            _this.bol = true;
          clearInterval(timer);
        }
      }, 1000);
    }
  }

</script>



<style scoped>
    .f_alert_submit{
    background-color: #4cd964;
    width: 100%;
    line-height: 0.42rem;
    border-radius: 0.04rem;
    color: white;
    font-size: 0.16rem;
    
}
  .f_top {
    margin-top: 0.45rem;
    padding:0.14rem 0 0 0.12rem;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    background-color: white;

  }
  .f_top>img{
      width: 16%;
      height: 16%;
      vertical-align: bottom;
      /* margin-right: 0.1rem; */
      float: left;
  }
  .f_top>div{
      float: right;
      width: 80%;
  }
  .f_right_top{
      display: flex;
      justify-content: space-between;
      border-bottom: 0.5px solid #ccc;


  }
  .f_right_top>div>div{
        color: #333;
        font-size: 0.16rem;
        margin-bottom: 0.06rem;

  }
  .f_right_top>div>div>.el-icon-arrow-right{
      color: #999;
      font-size: 0.14rem;
  }
  .f_right_top>div>p{
      color: #999;
      font-size: 0.13rem;
      line-height: 0.2rem;
  }
  .f_right_top>span{
      color: #333;
      font-size: 0.13rem;
      /* line-height: 0.6rem; */
  }
  .f_right_center{
      line-height: 0.4rem;
      color: #333;
      font-size: 0.13rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
     
  }
  .f_right_center>span:nth-child(2){
      color: #f60;
  }
  .f_right_bottom{
      overflow: hidden;
      margin-top: 0.13rem;
  }
  .f_right_bottom>p{
      float: right;
      border: 1px solid orange;
      color: orange;
      font-size: 0.13rem;
      line-height: 0.24rem;
      border-radius: 0.05rem;

  }
  .h-botton3{
        z-index:100;
  position:fixed;
  bottom: 0;
  
    }

</style>
