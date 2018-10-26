<template>
    <div>
<Head>
    <span>
        {{msg}}
    </span>
</Head>
<section>

    <input type="text" placeholder="输入用户名">
</section>


    </div>
</template>


 <script>
 import Head from '../header.vue'

 export default {
     name:"xiugai",
     data(){
         return{
             msg:'修改用户名',
         }
     },
     components:{
         Head
     }
 }
 
 </script>
  


  <style scoped>
  
  
  </style>