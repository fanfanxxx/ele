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
            return this.$store.state.quesdeatail;
        }
    }

}


</script>


<style scoped>


</style>