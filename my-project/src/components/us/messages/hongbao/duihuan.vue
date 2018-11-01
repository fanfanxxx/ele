<template>
  <div>

    <Head>
      <span>
        {{msg}}
      </span>
    </Head>
    <section class="f_center">
      <div class="f_center_top">
        <input type="text" placeholder="请输入兑换码" v-model="num1">
      </div>
      <div class="f_center_bottom">
        <input type="text" placeholder="验证码" v-model='num2'>
        <div class="f_center_bottom_right" @click="huan">
          <img :src="src" alt="">
          <div class="f_right" >
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </div>
      </div>
    </section>
    <div class="f_submit" :class="{bac:bol2}"  @click="submit"> 
      兑换
    </div>
    <Elart v-if="bol">
            <p>{{mes}}</p>
            <div class="f_alert_submit" @click="shuaxin">确认</div>
    </Elart>

  </div>


</template>


<script>
  import Head from '../../header.vue'
  import Elart from '../../alert.vue'

  export default {
    name: 'duihuan',
    data() {
      return {
        msg: '兑换红包',
        src: "",
        num1: '',
        num2: '',
        mes:'',
        bol:false,
        bol2:false
      }
    },
    components: {
      Head,
      Elart
    },
    created() {
      var url = 'https://elm.cangdu.org/v1/captchas';
      this.$http({
        method: 'post',
        url: url,
        withCredentials: true,
      }).then((res) => {
        this.src = res.data.code;
      })
    },
    methods: {
      huan() {
        var url = 'https://elm.cangdu.org/v1/captchas';
        this.$http({
          method: 'post',
          url: url,
          withCredentials: true,
        }).then((res) => {
          this.src = res.data.code;
        })
      },
      submit() {
          if(!this.num1 || !this.num2){
              return false;
          }
          var id = localStorage.getItem('id');
        var url = 'https://elm.cangdu.org/v1/users/'+id+'/hongbao/exchange?exchange_code='+this.num1+'&captcha_code='+this.num2;
        this.$http({
          method: 'post',
          url: url,
          withCredentials: true,
        }).then((res) => {
          console.log('tag', res);
          this.mes = res.data.message;
          this.bol = true;
        })
      },
      shuaxin(){
          this.bol = false;
          this.$router.go(0);
      }
    },
    watch:{
        num2(){
            if(this.num1){
                if(this.num2.length>=4){
                    this.bol2 = true;
                }else{
                    this.bol2 = false;
                }
            }
            
        },
        num1(){
            if(!this.num1){
              this.bol2=false
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
  .f_center {
    margin-top: 0.45rem;
    box-sizing: border-box;
    padding: 0.14rem 0.12rem;
  }

  .f_center_top {
    height: 0.4rem;
    background-color: white;
    margin-bottom: 0.14rem;
  }

  .f_center_top>input {
    margin-left: 0.12rem;
    line-height: 0.4rem;
    outline: none;
    color: #666;
    font-size: 0.16rem;

  }

  .f_center_bottom {
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
  }

  .f_center_bottom>input {
    display: block;
    width: 1.88rem;
    color: #666;
    font-size: 0.17rem;
    padding-left: 0.12rem;
  }

  .f_center_bottom_right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 1.4rem;
  }

  .f_center_bottom_right>img {
    vertical-align: top;
  }

  .f_right>p:nth-child(1) {
    color: #333;
    font-size: 0.13rem;
    margin-bottom: 0.06rem;


  }

  .f_right>p:nth-child(2) {
    color: #3190e8;
    font-size: 0.13rem;


  }

  .f_submit {
    margin: 0.14rem auto 0;
    width: 96%;
    line-height: 0.5rem;
    text-align: center;
    color: white;
    font-size: 0.17rem;
    border-radius: 0.05rem;
    background-color: #ccc;
  }
  .bac{
      background-color: #4cd964;
  }

</style>
