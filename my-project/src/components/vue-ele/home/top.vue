<template>
  <div class="h-top">
    <div class="h-search">
      <img src="./himgs/search.png" alt="">
    </div>
    <div class="h-address">二七区金博大城D座</div>
    <div class="h-login">
      <a href="">登录 |</a>
      <a href="">注册</a>
    </div>
  </div>
</template>
<script>
  export default {
    name: "top"

  }

</script>
<style scoped>
  .h-top {
    width: 100%;
    height:50px;
    background-color: blue;
    position: relative;

  }
  .h-search {
    width: 10%;
    height: 20px;
    position: absolute;
    top: 10px;
    left: 10%;
  }

  .h-search img {
    width: 100%;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;

  }

  

  .h-address {
    color: white;
    font-size: 0.2rem;
    width: 50%;
    height: 50px;
    margin-left: 25%;
    line-height: 50px;
    /* border: 1px solid red; */
  }

  a {
    /* text-decoration: none; */
    color: white;
  }

  .h-login {
    width: 20%;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 16px;
    line-height: 40px;
  }

</style>
