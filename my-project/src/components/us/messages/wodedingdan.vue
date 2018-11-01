<template>
    <div>
        <Head>
            <span>
                {{msg}}
            </span>
        </Head>
    </div>

</template>


<script>
    import Head from '../header.vue'
    export default{
        name:"wodedingdan",
        data(){
            return{
              msg:"订单列表"  
            }
        },
        components:{
            Head
        }
    }


</script>


<style scoped>

</style>