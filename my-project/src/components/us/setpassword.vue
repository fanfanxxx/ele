<template>
    <div>
        <Head>
            <span>{{msg}}</span>
        </Head>
        <Alert v-if="bool">
                <p>{{content}}</p>
                <div class="f_alert_submit" @click="bool=false">确认</div>
        </Alert>
        <section class="f_set_form">
            <div>
                    <input v-model="username" type="text" placeholder="账号">
            </div>
            <div>
                    <input v-model="oldpassword" type="password" placeholder="旧密码">
            </div>
            <div>
                    <input v-model="newpassword" type="password" placeholder="请输入新密码">
            </div>
            <div>
                    <input v-model='conpassword' type="password" placeholder="请确认密码">
            </div>
            <div>
                    <input v-model="captcha_code" type="text" placeholder="验证码">
                    <div class="f_set_img">
                            <img :src="data.code" alt="">
                            <div>
                                <p class="f_set_img_p1">看不清</p>
                                <p class="f_set_img_p2" @click="update()">换一张</p>
                            </div>
               
                       </div>
            </div>
           
            
        </section>
        <div @click="submit()" class="f_set_sure">确认修改</div>
    </div>
</template>

<script>
    import Head from './header.vue';
    import Alert from './alert.vue'
export default{
    name:'setpossword',
    data(){
        return{
            msg:"重置密码",
            data:{},
            username:'',
            oldpassword:'',
            newpassword:'',
            conpassword:'',
            captcha_code:'',
            content:'',
            bool:false
        }
    },
    components:{
        Head,
        Alert
    },
    methods:{
        update(){
        var url ="https://elm.cangdu.org/v1/captchas";
        this.$http({
          method: 'post',
          url: url,
//https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials
        //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。
          withCredentials: true, // 默认false
        }).then((res) => {
          console.log('tap', res);
            if(res.data.status == 200){}
            this.data=res.data;
        });
       },
       submit(){
           const api = 'https://elm.cangdu.org/v2/changepassword';
           this.$http({
          method: 'post',
          url: api,
          withCredentials: true, // 默认的
          data: {
            username:this.username,
            oldpassWord:this.oldpassword,
            newpassword:this.newpassword,
            confirmpassword:this.conpassword,
            captcha_code:this.captcha_code

          },

        }).then(res => {
        //   alert("登陆成功"); 

          console.log('---', res);
          if(res.data.message){
              this.bool = true;
            this.content=res.data.message;
            this.update();
          }else{
              this.$router.go(-1);
          }
        });
       }

    },
    mounted(){
        var url ="https://elm.cangdu.org/v1/captchas";
        this.$http({
          method: 'post',
          url: url,
//https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials
        //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。
          withCredentials: true, // 默认false
        }).then((res) => {
          console.log('tap', res);
            if(res.data.status == 200){}
            this.data=res.data;
        });
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
  .f_set_form {
    margin-top: 0.50rem;
    background-color: white;
    width: 100%;
  }

  .f_set_form>div {
    border-bottom: 1px solid #f1f1f1;
    width: 100%;
    height: 0.6rem;
    padding: 0.12rem 0.14rem;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
    box-sizing: border-box;

  }

  .f_set_form>div>input {
    font-size: 0.14rem;
    color: #666;
    outline:none;
  }
  .f_set_img{
    display: flex;
    align-items: center;
}
.f_set_img_p1{
    color: #666;
    font-size: 0.14rem;
    margin-bottom: 0.08rem;
}
.f_set_img_p2{
    color:#3190e8;
    font-size: 0.14rem;
}
.f_set_sure{
    height: 0.4rem;
    width: 90%;
    margin: 0.2rem auto 0;
    background-color: #4cd964;
    text-align: center;
    line-height: 0.4rem;
    border-radius: 5%;
    font-size: 0.17rem;
    color:white;
}
</style>