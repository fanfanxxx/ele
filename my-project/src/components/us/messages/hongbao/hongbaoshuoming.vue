<template>

  <div>

    <Head>
      <span>
        {{msg}}
      </span>
    </Head>
    <section class="f_content">
      <h3>Q1:怎么获得红包?</h3>
      <p>通过邀请好友获得</p>
      <p>再下单返红包的商家下单获得</p>
      <p>抢微信朋友分享的红包获得</p>
      <h3>
        Q2: 红包可以做什么？
      </h3>
      <p>
        可以抵扣在线支付时的实际支付金额
      </p>
     
      <h3>
        Q3: 红包的门槛金额按照什么金额计算?
      </h3>
      <p>
            红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。
      </p>
      <h3>
            Q4: 一个红包能拆开多次使用吗？
      </h3>
      <p>
           不能，一个红包只能一次性使用，不能分开使用。
      </p>
      <h3>
            Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？
      </h3>
      <p>会的，订单无效后红包会自动返还到您的账户里。</p>
      <h3>Q6: 红包兑换码怎样兑换成红包，怎样查看红包？</h3>
      <p>在个人中心 &gt; 我的红包 &gt; 兑换红包，输入兑换码进行兑换。</p>
      <h3>Q7: 邀请好友了，为什么没获得红包？</h3>
      <p>
            先检查下您是否在同一设备上进行的邀请？或者被邀请人是否通过您发给对方的链接进行注册？而非自己复制链接注册的。同一设备上邀请或没有按照点击发送的链接邀请都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。
      </p>

    </section>
  </div>

</template>

<script>
  import Head from '../../header'

  export default {
    name: 'shuobao',
    data() {
      return {
        msg: '红包说明'
      }
    },
    components: {
      Head
    }
  }

</script>

<style scoped>
  .f_content {
    margin-top: 0.45rem;
    padding-left: 0.12rem;
    box-sizing: border-box;
  }

  .f_content>h3 {
    color: #666;
    font-size: 0.17rem;
    line-height: 0.4rem;
  }

  .f_content>p {
    color: #999;
    font-size: 0.14rem;
    line-height: 0.24rem;
  }

</style>
