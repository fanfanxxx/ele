<template>
  <div>
    <header id="f_head_top">
      <span id="f_head_left">
        ele.me
      </span>
      <a v-if="!user.username"  href="#/login" class="f_head_right">
        <span>
          登录|注册
        </span>
      </a>
      <a v-else class="f_head_right" href="#/profile">
      <img src="../us/imgs/头像.png" alt=""></a>
    </header>
    <nav class="f_city_nav">
      <div class="f_city_tip">
        <span class="f_city_tip_left">当前定位城市</span>
        <span class="f_city_tip_right">定位不准时请在城市列表中选择</span>
      </div>
      <router-link tag="a"  class="f_guess_city" :to="'/city/'+city.id">
        <span>{{city.name}}</span>
        <span class="el-icon-arrow-right">

        </span>
      </router-link>
    </nav>
    <section class="f_hot_city">
      <h4 class="f_hot_city_title citytitle">热门城市</h4>
      <ul class="f_hot_city_lis">
        <router-link tag="li" :to="'/city/'+item.id"  class="f_hot_city_li cityli" v-for="item in data" :key="item.id">{{item.name}}</router-link>
      </ul>
    </section>
    <section class="f_group_city">
      <ul>
        <li class="f_group_city_xulies" v-for="(item,index) in arr" :key="index">
          <h4 class="f_group_city_xulie citytitle">{{item}} <span v-if="reduce">(按字母排序)</span></h4>
          <ul class="f_group_city_lis">
            <router-link tag="li" :to="'/city/'+oo.id" class="f_group_city_li cityli" v-for="oo in obj[item]" :key="oo.id">{{oo.name}}</router-link>

          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    name: "lo",
    data() {
      return {
        city:{},
        data: [],
        arr: [],
        obj: {},
        a: 1
      }
    },
    created() {
      let ul ='https://elm.cangdu.org/v1/cities?type=guess';
      this.$http.get(ul).then((res1)=>{
        console.log(res1.data);
        this.city = res1.data;
      });
      let ur = 'https://elm.cangdu.org/v1/cities?type=hot';
      this.$http.get(ur).then((res) => {
        console.log(res.data);
        this.data = res.data;
      });
      let ur2 = 'https://elm.cangdu.org/v1/cities?type=group';
      this.$http.get(ur2).then((res) => {
        var bb = Object.keys(res.data).sort();
        console.log(bb);
        this.arr = bb;
        this.obj = res.data;

      })
    },
    methods: {
      reduce() {
        if (this.a >= 1) {
          this.a--;
          return true;
        } else {
          return false;
        }
      }
    },
    computed:{
      user(){
        return this.$store.state.usermessage;
      }
    }

  }

</script>

<style scoped>
  #f_head_top {
    background-color: #3190e8;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: 0.45rem;
    z-index: 100;

  }

  #f_head_left {
    color: white;
    font-size: 0.16rem;
    position: absolute;
    left: 0.09rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .f_head_right {
    color: white;
    font-size: 0.16rem;
    position: absolute;
    right: 0.09rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .f_head_right>img{
  width:0.3rem;
  }

  .f_city_nav {
    padding-top: 0.55rem;
    border-top: 1px solid gray;
    background-color: #fff;
    margin-bottom: 0.12rem;
  }

  .f_city_tip {
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    line-height: 0.30rem;
  }

  .f_city_tip_left {
    font-size: 0.12rem;
  }

  .f_city_tip_right {
    font-size: 0.1rem;
    font-weight: 900;
    color: #9f9f9f;
  }

  .f_guess_city {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.4rem;
    padding: 0 0.1rem;
    border-top: 1px solid gray;
    border-bottom: 2px solid gray;
  }
  .f_guess_city>span{
    font-size: 0.2rem;
    color: #3190e8;
  }

  .el-icon-arrow-right {
    height: 0.20rem;
    width: 0.16rem;
    color: #999;
  }

  .f_hot_city {

    background-color: #fff;
    margin-bottom: 0.12rem;
  }

  .f_hot_city_title,
  .citytitle {
    color: #666;
    font-weight: 400;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    text-indent: 0.10rem;
    font-size: 0.10rem;
    line-height: 0.30rem;
  }

  .f_hot_city_lis {
    overflow: hidden;
  }

  .f_hot_city_li,
  .cityli {
    float: left;
    text-align: center;
    box-sizing: border-box;
    color: #3190e8;
    border-bottom: 0.006rem solid #e4e4e4;
    border-right: 0.006rem solid #e4e4e4;
    width: 25%;
    font-size: 0.14rem;
    line-height: 0.30rem;
    overflow: hidden;
    /*内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis;
    /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    white-space: nowrap;/*超出不换行*/


  }

  .f_group_city_xulies {
    margin-bottom: 0.12rem;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
  }

  .f_group_city_xulie {
    color: #666;
    font-weight: 400;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font-size: 0.12rem;
    line-height: 0.30rem;

  }

  .f_group_city_xulie>span {
    font-size: 0.1rem;
    color: #999;
  }

  .f_group_city_lis {
    overflow: hidden;
  }

  .f_group_city_li {
    color:#666;
  }

</style>
