<template>
  <div>

    <Head>
      <span>
        {{msg}}
      </span>
    </Head>
    <p class="f_headr">成功兑换红将关联到当前账号:
      <strong>
        {{name}}
      </strong>
    </p>
    <section class="f_center">
      <div>
        <input v-model="num1" type="text" placeholder="请输入10位卡号">
      </div>
      <div>
        <input v-model="num2" type="text" placeholder="请输入6位卡密">
      </div>
    </section>
    <div class="f_submit" :class="{f_blue:bol}" @click="panduan">
      兑换
    </div>
    <section>
      <h3 class="f_bottom_head">
        ——温馨提示——
      </h3>
      <div class="f_bottom_bottom">
        <p>新兑换的会员服务，权益以「会员说明」为准。</p>
        <p>
          月卡：30次减免配送费。
        </p>
        <p>
          季卡：90次减免配送费。
        </p>
        <p>
          年卡：360次减免配送费。
        </p>
        <p>
          ＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）
        </p>
      </div>


    </section>
<Alert v-if="bool">
    <p>无效的卡号</p>
    <div class="f_alert_submit" @click="bool=false">确认</div>
</Alert>


  </div>

</template>


<script>
  import Head from "../../header.vue"
  import Alert from '../../alert.vue'
  export default {
    name: "huanhuiyuan",
    data() {
      return {
        msg: "兑换会员",
        name: "fan000",
        bol:false,
        bol1:false,
        bol2:false,
        bool:false,
        num1:"",
        num2:""
      }
    },
    components: {
      Head,
      Alert
    },
    created() {
        this.name = localStorage.name;
    },
    methods:{
         panduan(){
           if(!this.bol){
             return false;
           };
           this.bool = true ;
         }
    },
    watch:{
        num1(newval,oldval){
            var s = /^\d{10}$/;
            if(s.test(newval)){
                this.bol1 = true;
                if(this.bol2){
                    this.bol = true;
                }
            }else{
                this.bol1 = false; 
                this.bol = false;
            }
        },
        num2(newval,oldval){
            var s2 = /^\d{6}$/;
            if(s2.test(newval)){
                this.bol2 = true;
                if(this.bol1){
                    this.bol = true ;
                }
            }else{
                this.bol2 = false;
                this.bol = false ;
            }
        }
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
  .f_headr {
    margin-top: 0.45rem;
    padding-left: 0.13rem;
    line-height: 0.4rem;
    color: #666;
    font-size: 0.14rem;
  }

  .f_headr>strong {
    font-weight: 600;
    color: #333;
  }

  .f_center {
    background-color: white;
    width: 100%;
  }

  .f_center>div {
    padding-left: 0.12rem;
    box-sizing: border-box;
  }

  .f_center>div>input {
    color: #999;
    font-size: 0.17rem;
    display: block;
    line-height: 0.4rem;
    outline: none;
  }

  .f_submit {
    width: 94%;
    text-align: center;
    line-height: 0.5rem;
    color: white;
    font-size: 0.17rem;
    margin: 0.14rem auto 0.2rem;
    background-color: #aaa;
    border-radius: 0.09rem;
  }
  .f_blue{
      background-color: #4cd964;
  }
  .f_bottom_head{
      text-align: center;
      color: #aaa;
      font-weight: 500;
      font-size: 0.17rem;
      margin-bottom: 0.16rem;
  }
  .f_bottom_bottom{
      margin-left: 0.64rem;
  }
  .f_bottom_bottom>p{
      color: #aaa;
      font-size: 0.12rem;
      margin-bottom:0.07rem;
  }
</style>
