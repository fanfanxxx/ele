<template>
   <div v-html="content">
    


   </div> 

</template>

<script>
export default {
    name:'fuwustate',
    computed:{
        content(){
            console.log('tag')
            return this.$store.getters.shaixuan;
        }
    }

}


</script>


<style scoped>
    div{
        width: 100%;
        color: #333;
        font-size: 0.17rem;
        line-height: 0.24rem;
        
    }
    div>img{
        width:100%;
    }


</style>