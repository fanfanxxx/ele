<template>
    <div>
       <Head>
           <span>
               {{msg}}
           </span>
       </Head>
       <section class="f_content">
           <h3>Q1:什么是商家代金券?</h3>
           <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
           <h3>
                Q2: 怎么获得商家代金券？ 
           </h3>
           <p>
                进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。 
           </p>
           <p>
                「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。
           </p>
           <h3>
                Q3: 商家代金券使用条件 
           </h3>
           <p>
                商家代金券仅限在指定商家使用
           </p>
           <p>
                商家代金券仅限在线支付使用
           </p>
           <p>
                每个订单只能使用一张商家代金券，不可与其他代金券叠加使用
           </p>

       </section>


    </div>
    

</template>

<script>
    import Head from '../../header.vue'
    export default{
        name:'quanshuoming',
        data(){
            return{
                msg:"代金券说明"
            }
        },
        components:{
            Head
        }
    }



</script>


<style scoped>
.f_content{
    margin-top: 0.45rem;
    padding-left: 0.12rem;
    box-sizing: border-box;
}
.f_content>h3{
    color: #666;
    font-size: 0.17rem;
    line-height: 0.4rem;
}
.f_content>p{
    color: #999;
    font-size: 0.14rem;
    line-height: 0.24rem;
}

</style>