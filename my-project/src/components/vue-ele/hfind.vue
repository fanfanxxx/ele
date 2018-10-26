<template>
    <div class="d-top">
        <div  class="h-ding">订单列表</div> 
        <Htotal></Htotal>
    </div>
</template>
<script>
     import Htotal from "./htotal"
    export default{
        name:"hfind",
        components:{
            Htotal 
        }
    }
</script>
<style scoped>
    .d-top{
        width: 100%;
        height: 50px;
        background-color: blue;
    }
    .h-ding{
        width: 40%;
        height: 50px;
        line-height: 40px;
        font-size: 0.2rem;
        color:white;
        text-align: center;
        margin-left: 30%;
    }
</style>