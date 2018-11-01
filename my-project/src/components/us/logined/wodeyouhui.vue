<template>
  <div  class="f">
    <section class="f_you_top">
      <span @click="bol=true" :class="{f_span:bol}">红包</span>
      <span @click="bol=false" :class="{f_span:!bol}">商家代金券</span>
    </section>
    <section v-if="bol" class="f_center">
      <section class="f_center_top">
        <p class="f_left">有
          <strong>3</strong>
          个红包即将到期
        </p>
        <router-link tag="div" to="/benefit/hbDescription" class="f_right">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAvJJREFUSA21Vk1IFVEU/s7MvOd/+U+pkZmEEBXiIgpq06KFYUmLFrZp0S4fFAW1ioi2RU9oFbQJCgoqQYIWEkKQixKK7IfMCnuEYvlSek99M7d77rzRGWfu06Du5s49P98599zzM4QCa3dyumlR2IeFEJ0gbJWiDXnxFATGiGggRuaj4UTNhA6GohjtfVMNcMQlgjghwc0oGY8mjdgCdAsGXRzprUt5dG8PGWjv+95FNt0WEBWe0Fp2As0KUxwf6d3Q75c3/IeO5GQCNj34W3DGUDpSV2H4QJduwJ4zuBQNGPVky+KELVUmZEgw/iOHuQXhsVbs5MAU3d5NlAGOOdnOuyjPK4oIp/aW4+iOEhlm1x/bEbj/OoO+Z3P4vRg25IbLaOM3sZR5+aBR4Ax39VAlOpriGPyYxdNP8zAl8cj2EhzbVYraMgPnBtIrbpAPl8SUjJPkpmLuc1S2dLYV4/LB9XjyIYvzj5eBLBnEuz01aKm20HNnGm8ncyEjnF0xspqNfJ5HpmJ7Y0wp9o9mAgA5Bxj+uqBo2+rcIAQE5IEdZmxDFdFKbv78fiqHh28yGJsOe9i4zvVpJhN+Aw+OsS1VoRqZe6/Y86D3rLxzYwx7NseRzjp4+c29iQca2GX1c0p65R/g6Q4t1Saud1Uq9gX5LrPzGu9cgIbInNeB15cbuNFdhdIYyeyZwfP8O+jkmc4GQv1Dp3BmXwXqy01cGfyFofECoVkGSBncFZfP+q+4fNMDrUWYSOfQP5rVC/o5ElsWJw34abpvLirTIHz5aetEQnTGLlhofg0urjppJCNbw0y24MMqtaVC42Gh+rkfLeK72CK01lpoltW7lsWYjO1mkRwW3KAKKW6q5PSswtn9q48JhSUxGU8Z4K7HwwKQrVazON+HZLMbSa2WPeS4g8edbm7/zYPysHAccU03EzS2fWRyDINOv0jUJz1iwAAT/+vIZAM8iYRptIGMm5wJTCu0lIyUZR1vivnlQzfwM//Fb8sfhhUzHMwI/u8AAAAASUVORK5CYII="
            alt="">
          <span>红包说明</span>
        </router-link>
      </section>
      <section>
        <ul>
          <li v-for="(item,index) in arr" :key="index" class="f_center_center">
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
              {{item.description_map.validity_delta}}
            </div>

          </li>
        </ul>
        <div class="f_center_footer">
          限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理
        </div>
      </section>
      <!-- <div class="f_footer" >
        <span>查看历史红包</span>
        <span class="el-icon-arrow-right"></span>
      </div> -->
      <router-link class="f_footer" tag="div"  to="/benefit/hbHistory">
        <span>查看历史红包</span>
        <span class="el-icon-arrow-right"></span>
    </router-link>

      <div class="f_weibu">
        <router-link tag="span" to="/benefit/exchange">
          兑换红包
        </router-link>
        <router-link tag="span" to="/benefit/commend">
          推荐有奖
        </router-link>
      </div>

    </section>
    <Quan v-else>

    </Quan>




  </div>

</template>


<script>
  import Quan from '../messages/daijinquan.vue'
  export default {
    name: 'woyouhui',
    data() {
      return {
        bol: true,
        arr: null
      }
    },
    components:{
      Quan
    },
    created() {
      var id = localStorage.getItem('id');
      var url = 'https://elm.cangdu.org/promotion/v2/users/' + id + '15318/hongbaos?limit=20&offset=0';
      this.$http.get(url).then((res) => {
        console.log(res.data);
        this.arr = res.data;
      })
    },

  }

</script>


<style scoped>
  .f {
    margin-top: 0.45rem;
  }

  .f_you_top {
    height: 0.6rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    font-size: 0.16rem;
  }

  .f_span {
    color: #3190e8;
    border-bottom: 3px solid #3190e8;
    padding-bottom: 0.06rem;
  }

  .f_center {
    box-sizing: border-box;
    padding: 0 0.12rem;

  }

  .f_center_top {
    height: 0.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .f_left {
    font-size: 0.14rem;
    color: #333;
  }

  .f_left>strong {
    color: red;
  }

  .f_right {
    color: #3190e8;
    font-size: 0.14rem;
  }

  .f_right>img {
    width: 0.14rem;
    height: 0.14rem;
    vertical-align: top;
  }

  .f_center_center {
    height: 1rem;
    width: 100%;
    background-color: white;
    padding: 0.14rem 0.1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.12rem;

  }

  .f_li_div1 {
    border-right: 1px solid #c1c1c1;
    padding-right: 0.09rem;
    color: #999;
    font-size: 0.13rem;

  }

  .f_li_div1>span {
    color: red;
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

  .f_li_div3 {
    color: red;
    font-size: 0.18rem;
  }

  .f_center_footer {
    padding: 0.1rem 0.12rem;
    background-color: #f1f1f1;
    color: #999;
    font-size: 0.13rem;
    box-sizing: border-box;

  }

  .f_footer {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.2rem 0;
    color: #999;
    font-size: 0.13rem;
  }

  .f_weibu {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.18rem;

  }

  .f_weibu>span {
    text-align: center;

    color: #333;
    width: 50%;
    line-height: 0.46rem;

  }
  .f_weibu>span:nth-child(1){
      border-right: 1px solid #999;
  }

</style>
