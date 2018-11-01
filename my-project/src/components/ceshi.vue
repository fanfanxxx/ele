<template>
    <div>
        <h1>
            {{la}}
        </h1>
        

    </div>
    
</template>


<script>
    export default{
        name:'ceshi',
        data(){
            return{
                la:"",
                
            }
        },
        created(){
this.la = this.$route.params;
console.log('123',this.$route.params )
        }
    }


</script>


<style>


</style>