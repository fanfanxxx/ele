<template>
    <div>
     <Head>
         <span>
             {{msg}}
         </span>
     </Head>
     
     <Wode v-if="user.username"></Wode>

    </div>

</template>


<script>
    import Head from '../header.vue'
    import Wode from '../logined/wodeyouhui.vue'
    export default {
        name:'youhui',
        data(){
            return{
                msg:"我的优惠",
            }
        },
        components:{
            Head,
            Wode
        },
        computed:{
            user(){
                return this.$store.state.usermessage;
            }
        }
    }



</script>


<style scoped>



</style>