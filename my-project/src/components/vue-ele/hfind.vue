<template>
    <div class="d-top">
            <Header>{{msg}}</Header>
        <Htotal></Htotal>
    </div>
</template>
<script>
    import Header from "../us/header"
     import Htotal from "./htotal"
    export default{
        name:"hfind",
        data(){
           return{
               msg:"订单列表"
           }
        },
        components:{
            Header,
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