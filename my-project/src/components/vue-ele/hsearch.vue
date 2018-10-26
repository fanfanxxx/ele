<template>
    <div class="s-top">
        <div  class="h-sou">搜索</div> 
        <Htotal></Htotal>
    </div>
    
</template>
<script>
    import Htotal from "./htotal"
    export default{
        name:"hsearch",
        components:{
            Htotal 
        }
    }
</script>
<style scoped>
    .s-top{
        width: 100%;
        height: 50px;
        background-color: blue;
    }
    .h-sou{
        width: 20%;
        height: 50px;
        line-height: 50px;
        font-size: 0.2rem;
        color:white;
        text-align: center;
        margin-left: 40%;
    }
</style>