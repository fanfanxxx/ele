<template>
    <div class="d-top">
            <Header>{{msg}}</Header>
        <Htotal class="h-botton3"></Htotal>
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
        },
        created(){
            this.$store.commit("fx")
        }
    }
</script>
<style scoped>
     
    .h-ding{
        width: 40%;
        height: 50px;
        line-height: 40px;
        font-size: 0.2rem;
        color:white;
        text-align: center;
        margin-left: 30%;
    }
    .h-botton3{
        z-index:100;
  position:fixed;
  bottom: 0;
  
    }
</style>