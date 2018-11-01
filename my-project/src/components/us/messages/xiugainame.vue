<template>
    <div>
<Head>
    <span>
        {{msg}}
    </span>
</Head>

<section class="f_gai_input">

    <input v-model="str" class="f_gai_input_input" :class="{borderred:Red}" type="text" placeholder="输入用户名">
    <p class="f_gai_input_p" :class="{red:Red}">用户名只能修改一次 (5-24字符之间)</p>
</section>
<div class="f_button" @click="xiuname()">
    确认修改
</div>


    </div>
</template>


 <script>
 import Head from '../header.vue'

 export default {
     name:"xiugai",
     data(){
         return{
             msg:'修改用户名',
             Red:false,
             str:''
         }
     },
     components:{
         Head
     },
     methods:{
         
         xiuname(){
             this.$store.commit('username',this.str);
             this.$router.go(-1);
         }
     },
     watch:{
         str(){
            if(this.str.length>=5){
                 this.Red = false;
             }else{
                 this.Red = true;
             }
         }
     }
 }
 
 </script>
  


  <style scoped>

      .f_gai_input{
          margin-top: 0.45rem;
          padding: 0.1rem 0.12rem;
          box-sizing: border-box;

      }
      .f_gai_input_input{
          height: 0.4rem;
          width: 100%;
          outline: none;
          border: 1px solid #666;
          font-size: 0.16rem;
          margin-bottom: 0.1rem;
      }
      .f_gai_input_p{
          color: #666;
          font-size: 0.11rem;
      }
  .f_button{
      width: 96%;
      line-height: 0.4rem;
      margin: 0 auto;
      text-align: center;

      background-color: #3190e8;
      margin-top: 0.2rem;
      border-radius: 0.05rem;
      color: #666;
      
  }
  .borderred{
      border: 1px solid red;
  }
  .red{
      color:red;
  }
  </style>