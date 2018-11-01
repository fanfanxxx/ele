<template>
  <div>
    <div class="f_content">
      <h3>
        请重新进入
      </h3>

      <p>
        请返回后重新进入积分商城~
      </p>

      <img src="https://yun.duiba.com.cn/webapp/img/retrylogin.png" alt="">
    </div>




  </div>

</template>



<script>
  export default {
    name: "jifen",
    data() {
      return {

      }
    }
  }

</script>


<style scoped>
  .f_content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

  }
  .f_content>h3{
      color: #3190e8;
      font-size: 0.26rem;
      font-weight: 800;
      margin-bottom: 0.15rem;
      
  }
  .f_content>p{
      color: #666;
      font-size: 0.14rem;
      margin-bottom: 0.15rem;
  }

  .f_content>img {
    width: 1.8rem;
  }

</style>
