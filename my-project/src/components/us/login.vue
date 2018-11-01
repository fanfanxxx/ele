<template>
  <div>

    <Head>
        <span>{{msg}}</span>
    </Head>
    <Alert v-if="bool">
        <p>{{content}}</p>
        <div class="f_alert_submit" @click="bool=false">确认</div>
    </Alert>
    <section class="f_login_form">
      <div>
        <input type="text" placeholder="账号" v-model="username">
      </div>
      <div>
        <input :type="te" placeholder="密码" v-model="password">
        <div :class="but" @click="transition()">
                <div :class="thisclass" ></div>
                <p>abc</p>
                <p>...</p>
        </div>
        
      </div>
      <div>
        <input type="text" placeholder="验证码" v-model="yanma">
        <div class="f_login_img">
             <img :src="data.code" alt="">
             <div>
                 <p class="f_login_img_p1">看不清</p>
                 <p class="f_login_img_p2" @click="update()">换一张</p>
             </div>

        </div>
      </div>
    </section>
    <p class="f_login_tips">温馨提示:未注册过的账号,登录时将自动注册</p>
    <p class="f_login_tips">注册过的用户可凭账号密码登录</p>
    <div @click="submit()" class="f_login_login">登录</div>
    <a href="#/forget" class="f_login_set">重置密码?</a>
   
  </div>

</template>

<script>
  import Head from './header'
  import Alert from './alert.vue'
  export default {

    name: 'login',
    data(){
return{
    thisclass:"f_login_button_left",
    te:'password',
    but:"f_login_button1",
    data:{},
    msg:"登录",
    username:"",
    password:"",
    yanma:"",
    bool:false,
    content:""
}
    },
    components: {
      Head,
      Alert
    },
    methods:{
       transition(){
           if(this.thisclass=="f_login_button_left"){
            this.thisclass="f_login_button_right" ;
            this.te = "text";
            this.but = 'f_login_button2';
           }else{
            this.thisclass="f_login_button_left" ;
            this.te = "password"; 
            this.but = 'f_login_button1';
           }
       },
       update(){
        var url ="https://elm.cangdu.org/v1/captchas";
        // this.$http.post(url).then((res)=>{
        //     // console.log('tag', res.data);
            
        // })
        this.$http({
          method: 'post',
          url: url,
          withCredentials: true, // 默认false
        }).then((res) => {
          console.log('tap', res);
            if(res.data.status == 200){}
            this.data=res.data;
        });
       },
       submit(){
        const api = "https://elm.cangdu.org/v2/login";
        this.$http({
          method: 'post',
          url: api,
          withCredentials: true,
          data: {
            captcha_code: this.yanma,
            password: this.password,
            username: this.username
          }

        }).then(res => {
        //   alert("登陆成功");  
          console.log('---', res);
          if(res.data.message){
              this.bool = true;
            this.content=res.data.message;
            this.update();
          }else{
            this.$store.commit('getmessage',res.data);
            // localStorage.obj=res.data;
            // console.log('aa', localStorage.obj);
               this.$router.go(-1);
          }

          //给vuex保存用户信息
// this.$router.push({name:"person",query:res.data});
        });
       } 
    },
    created(){
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
  .f_login_form {
    margin-top: 0.50rem;
    background-color: white;
    width: 100%;
  }

  .f_login_form>div {
    border-bottom: 1px solid #f1f1f1;
    width: 100%;
    height: 0.6rem;
    padding: 0.12rem 0.14rem;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
    box-sizing: border-box;

  }

  .f_login_form>div>input {
    font-size: 0.14rem;
    color: #666;
    outline:none;
  }
.f_login_button1{
    position: relative;
    /* border:1px solid red; */
    display: flex;
    font-size: 0.16rem;
    width: 0.5rem;
    height: 0.24rem;
    background-color: #666;
    border-radius: 10%;
    
}
.f_login_button2{
    position: relative;
    /* border:1px solid red; */
    display: flex;
    font-size: 0.16rem;
    width: 0.5rem;
    height: 0.24rem;
    background-color:green;
    border-radius: 10%;
    
}
.f_login_button_left{
    position: absolute;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background-color: #f1f1f1;
    top: -0.04rem;
    left: -0.02rem;
}
.f_login_button_right{
    position: absolute;
    width: 0.34rem;
    height: 0.34rem;
    border-radius: 50%;
    background-color: #f1f1f1;
    top: -0.04rem;
    right: -0.02rem;
}
.f_login_img{
    display: flex;
    align-items: center;
}
.f_login_img_p1{
    color: #666;
    font-size: 0.14rem;
    margin-bottom: 0.08rem;
}
.f_login_img_p2{
    color:#3190e8;
    font-size: 0.14rem;
}
.f_login_tips{
    color: red;
    font-size: 0.12rem;
    width: 90%;
    margin: 0 auto;
    height: 0.3rem;
    line-height: 0.3rem;
}
.f_login_login{
    height: 0.4rem;
    width: 90%;
    margin: 0 auto 0.2rem;
    background-color: #4cd964;
    text-align: center;
    line-height: 0.4rem;
    border-radius: 5%;
    font-size: 0.17rem;
    color:white;
    
}
.f_login_set{
    float: right;
    margin-left: 0.12rem;
    font-size: 0.14rem;
    color:#3b95e9;

}
</style>
