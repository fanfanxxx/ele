<template>
  <div>

    <Head>
      <span>
        {{msg}}
      </span>
    </Head>
    <section class="f_kuang">
      <input v-model="content" type="text" placeholder="请输入小区/写字楼/学校等">
      <button @click="search">确认</button>

    </section>
    <div class="tishi">
      为了满足商家的送餐要求,建议你从列表中选择地址
    </div>
    <section v-if="bol" class="f_jianyi">
      <p>
        找不到地址?
      </p>
      <p>
        请尝试输入小区,写字楼或学校名
      </p>
      <p>详细地址 (如门牌号) 可稍后输入哦.</p>
    </section>
    <ul v-else class="f_lis">
      <router-link tag="li" to="/profile/info/address/add" @click.native="add(index)" class="f_li" v-for="(item,index) in data" :key="index">
        <p>{{item.name}}</p>
        <p>{{item.address}}</p>
      </router-link>
    </ul>


  </div>

</template>


<script>
  import Head from '../header.vue'
  export default {
    name: 'sou',
    data() {
      return {
        msg: '搜索地址',
        id: "",
        content: "",
        data: [],
        bol:true
      }
    },
    components: {
      Head
    },

    methods: {
      search() {
        const url1 = 'https://elm.cangdu.org/v1/cities?type=guess';
        this.$http.get(url1).then((res) => {
          console.log(res.data);
          this.id = res.data.id;
          var url2 = 'https://elm.cangdu.org/v1/pois?city_id=' + this.id + '&keyword=' + this.content;
          this.$http.get(url2).then((res) => {
            console.log(res);
            this.data = res.data;

          }, (res) => {
            console.log(res);
          });
        });


      },
      add(index){
          var obj =this.data[index]; 
          this.$store.commit('shizhi',obj);
          
          
      }
    },
    watch:{
        data(){
          if(this.data.length>=1){
              this.bol = false;
          }
        }
    }

  }

</script>

<style scoped>
  .f_kuang {
    margin-top: 0.55rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 0.1rem;
    height: 0.4rem;
  }

  .f_kuang>input {
    display: block;
    background-color: #f2f2f2;
    width: 2.76rem;
    font-size: 0.15rem;
    color: #333;
    padding: 0.09rem;
    box-sizing: border-box;
    border-radius: 0.08rem;
  }

  .f_kuang>button {
    display: block;
    width: 0.7rem;
    background-color: #3190e8;
    border-radius: 0.06rem;
    color: white;
    font-size: 0.17rem;
  }

  .tishi {
    font-size: 0.14rem;
    background-color: #fff6e4;
    text-align: center;
    line-height: 0.34rem;
    color: #ff883f;
    font-size: 0.14rem;
  }

  .f_jianyi {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

  }

  .f_jianyi>p {
    text-align: center;
    color: #999;
    font-size: 0.18rem;
    margin-bottom: 0.1rem;
  }

  
  .f_li{
    padding: 0.12rem;
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid #666;
  }

  .f_li>p:nth-child(1) {
    color: #969696;
    font-size: 0.15rem;
    margin-bottom: 0.08rem;
  }

  .f_li>p:nth-child(2) {
    color: #969696;
    font-size: 0.17rem;

  }

</style>
