<template>

  <header id="f_navigation">
    <div class="f_navigation_left" @click="back()">
      <span class="el-icon-arrow-left"></span>
    </div>
    <div class="f_navigation_right">
      <!-- <span>搜索</span> -->
      <slot></slot>
    </div>
  </header>

</template>

<script>

export default{
    name:'headers',
    methods:{
        back(){
            this.$router.go(-1);
        }
    }

}
</script>


<style scoped>
#f_navigation{
    background-color: #3190e8;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 0.45rem;
    color: white;
}
.f_navigation_left{
    position: absolute;
    left:0.12rem;
    top:50%;
    transform: translateY(-50%);
}
.el-icon-arrow-left{
    font-size: 0.18rem;
}
.f_navigation_right{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    font-size: 0.17rem;
}


</style>
