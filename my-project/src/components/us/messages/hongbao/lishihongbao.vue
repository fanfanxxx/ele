<template>
  <div>

    <Head>
      <span>
        {{msg}}
      </span>
    </Head>
    <section class="f_content">
      <ul>
          <section v-for="(item,index) in arr" :key="index" class="f_sec">
                <li  class="f_center_center">
                        <div class="f_li_div1">
                          <span>￥</span>
                          <span>{{parseInt(item.amount)}}</span>
                          <span>.</span>
                          <span>{{item.amount%parseInt(item.amount)*10}}</span>
                          <p>{{item.description_map.sum_condition}}</p>
                        </div>
                        <div class="f_li_div2">
                          <p>{{item.name}}</p>
                          <p>{{item.description_map.validity_periods}}</p>
                          <p>{{item.description_map.phone}}</p>
                        </div>
                        <div class="f_li_div3">
                         <img src="../../imgs/已过期.png" alt="">
                        </div>
                      </li>
                      <p class="f_limit" v-if="item.limit_map">
                          {{item.limit_map.restaurant_flavor_ids}}
                      </p>
          </section>
        
      </ul>

    </section>

  </div>

</template>



<script>
  import Head from '../../header.vue'
  export default {
    name: 'lishi',
    data() {
      return {
        msg: "历史红包",
        arr: []
      }
    },
    components: {
      Head
    },
    created(){
      var id = localStorage.getItem('id');
      console.log('tag', id);
      var url = 'https://elm.cangdu.org/promotion/v2/users/' + id + '/expired_hongbaos?limit=4&offset=0';
      this.$http.get(url).then((res) => {
        console.log(res.data);
        this.arr = res.data;
      })
    }
  }

</script>

<style scoped>
  .f_content {
    margin-top: 0.6rem;
    padding: 0 0.12rem;

  }

  .f_center_center {
    height: 1rem;
    width: 100%;
    background-color: white;
    padding: 0.14rem 0.1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
   

  }

  .f_li_div1 {
    border-right: 1px solid #c1c1c1;
    padding-right: 0.09rem;
    color: #999;
    font-size: 0.13rem;

  }

  .f_li_div1>span {
    color: #999;
    font-weight: bold;
    font-size: 0.18rem;

  }

  .f_li_div1>span:nth-child(2) {
    font-size: 0.4rem;
  }

  .f_li_div1>p {
    margin-top: 0.05rem;
  }

  .f_li_div2>p {

    color: #999;
    font-size: 0.13rem;
    margin-bottom: 0.05rem;
  }

  .f_li_div2>p:nth-child(1) {
    font-size: 0.16rem;
    color: #666;

  }

  .f_li_div3{
    position: relative;

  }
  .f_li_div3>img{
      position: absolute;
      width: 0.6rem;
      height: 0.6rem;
      left: -0.6rem;
      top: 0.05rem;
  }
.f_limit{
    line-height: 0.24rem;
    background-color: #999;
    color: #666;
    font-size: 0.14rem;
    padding-left: 0.12rem;
}
.f_sec{
    margin-bottom: 0.12rem;
}
</style>
