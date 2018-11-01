<template>
  <div>

    <Head>
      <span>{{msg}}</span>
    </Head>
    <section class="f_fuwu_top">
      <a class="f_a_left" href="https://ecs-im.ele.me/">
        <img src="../imgs/女客服.png" alt="">
        <span>在线客服</span>
      </a>
      <a class="f_a_right" href="https://cangdu.org/elm/tel:10105757">
        <img src="../imgs/电话.png" alt="">
        <span>在线客服</span>
      </a>
    </section>
    <h4 class="f_title_h4">热门问题</h4>
    <ul class="f_lis">
      <router-link tag='li' to="/service/questionDetail" class="f_li" v-for="(item,index) in arr" :key="index" @click.native="submit(index)">
        <span>{{item}}</span>
        <span class="el-icon-arrow-right"></span>
      </router-link>
    </ul>
  </div>

</template>

<script>
  import Head from '../header.vue'

  export default {
    name: 'fuwu',
    data() {
      return {
        msg: '服务中心',
        arr: [],
        ar: []
      }
    },
    components: {
      Head
    },
    created() {
      let url = 'https://elm.cangdu.org/v3/profile/explain';
      this.$http.get(url).then((res) => {
        for(var k in res.data){
          if(k.search('memberPartCut')!=-1 ||k.search('memberFullCut')!=-1 ){
            delete res.data[k];
          }
        }
        for (var key in res.data) {
          if (key.search("Caption") != -1) {
            this.arr.push(res.data[key])
          } else if (key.search('Content') != -1) {
            this.ar.push(res.data[key])
          }
        }
        console.log('tag', this.arr);

      })
    },
    methods: {
      submit(index) {
          this.$store.commit('questadd',this.ar[index]);  
      }
    }
  }

</script>

<style scoped>
  .f_fuwu_top {
    margin-top: 0.45rem;
    overflow: hidden;
    background-color: white;



  }

  .f_fuwu_top>a {
    float: left;
    width: 50%;
    box-sizing: border-box;
    text-align: center;
    height: 0.93rem;
    border-right: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .f_fuwu_top>a>img {
    width: 0.3rem;
    height: 0.3rem;
    /* margin:0 auto; */
  }

  .f_fuwu_top>a>span {
    font-size: 0.14rem;
    margin-top: 0.1rem;
    color: #666;
  }

  .f_title_h4 {
    padding-left: 0.16rem;
    background-color: white;
    border: 1px solid #f5f5f5;
    /* height: 0.7rem; */
    line-height: 0.7rem;
    font-size: 0.18rem;
    color: #333;
  }

  .f_lis {
    color: #666;
    font-weight: 400;
    box-sizing: border-box;
    background-color: white;

  }

  .f_li {
    padding: 0 0.16rem;
    line-height: 0.46rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.16rem;
  }

</style>
