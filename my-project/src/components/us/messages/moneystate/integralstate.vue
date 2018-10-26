<template>
    <div>
        <Head>
            <span>{{msg}}</span>
        </Head>
        <section class="f_money_content">
            <h3>Q1: 怎么获得积分？</h3>
            <p>在线支付的订单将获得订单积分奖励：

                积分将在用户完成评价后获得。
                可获得积分=订单金额×10（即1元=10点积分）。
                订单金额指实际付款金额，不包含活动优惠金额。
                每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</p>
            <h3>Q2: 积分用来做什么？</h3>
            <p>可以在积分商城兑换各种礼品。</p>
            <h3>Q3: 礼品兑换很多天了还没有收到，该怎么办？</h3>
            <p>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</p>
            <h3>Q4:礼品兑换中的手机充值卡兑换，怎么样进行充值,充值之前会和我电话联系吗?</h3>
            <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
        </section>
    </div>
</template>


<script>
import Head from '../../header'
export default{
    name:'integarlstate',
    data(){
return{
    msg:"积分问题"
}
    },
    components:{
        Head
    }
}

</script>


<style scoped>
.f_money_content{
    margin-top:0.45rem;
    font-size: 0.14rem;
    padding: 0 0.12rem 0.12rem;
}
.f_money_content>h3{
    line-height: 0.46rem;
}
.f_money_content>p{
    line-height: 0.23rem;
    font-size: 0.13rem;
    color: #666;
}
</style>