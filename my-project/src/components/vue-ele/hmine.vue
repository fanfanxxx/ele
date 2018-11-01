<template>
    
    <div>
            <Ushome></Ushome>
            <Htotal class="h-botton4"></Htotal>
    </div>
</template>
<script>
    import  Ushome from "../us/ushome"
    import Htotal from "./htotal"
    export default{
        name:"hmine",
        components:{
            Htotal ,
            Ushome
        },
        created(){
            this.$store.commit("wd")
        }
    }

</script>
<style scoped>
    .h-botton4{
        z-index:100;
  position:fixed;
  bottom: 0;
 
    }
 
</style>