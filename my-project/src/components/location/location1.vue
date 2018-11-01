<template>
  <div>
    <div>
      <header class="f_city_top">
        <div class="f_city_top_left">
          <span class="el-icon-arrow-left" @click="back"></span>
        </div>
        <div class="f_city_top_center">
          <span>{{city}}</span>
        </div>
        <a class="f_city_top_right" href="/#/home">切换城市</a>
      </header>
      <div class="f_city_center">
        <div>
          <input type="text" placeholder="输入学校,商务楼,地址" v-model="content">
        </div>
        <div>
          <input id="submit" type="submit" @click="se()">
        </div>
      </div>
    </div>
    <div v-if="bool">
      <header class="f_city_history">搜索历史</header>
     
      <ul  class="f_city_history_lis">
        <li  @click="tiaozhuan(item.geohash)" class="f_city_history_li" v-for="item in cc" :key="item.id">
          <h4>{{item.name}}</h4>
          <p>{{item.address}}</p>
         
        </li>
        
      </ul>
      <footer v-if="bb"  class="f_history_clear" @click="reduce">清空所有</footer>
    </div>
    <div v-else>
      <ul class="f_city_history_lis">
        <li  @click="add(item.geohash)"  class="f_city_history_li"  v-for="(item,index) in citys"
          :key="index">
          <h4>{{item.name}}</h4>
          <p>{{item.address}}</p>
      </li>
      </ul>
    </div>


  </div>
</template>
<script>
  export default {
    name: "location1",
    data() {
      return {
        data: "",
        city: "",
        bool: true,
        content: "",
        citys: [],
        history:[],
       
      }
    },
    mounted() {
      this.data = this.$route.params.id;
      var url1 = "/v1/cities/" + this.data;
      this.axios.get(url1).then((res) => {
        console.log('tag', res);
        this.city = res.data.name;
      }, res => {
        console.log(res)
      })
    },
    created(){
          console.log('tag', this.bool);
    },
    methods: {
      se() {
        this.bool = false;
        var url2 = 'https://elm.cangdu.org/v1/pois?city_id=' + this.data + '&keyword=' + this.content;
        this.$http.get(url2).then((res) => {
          console.log('tag', res.data);
          this.citys = res.data;
        }, (res) => {
          console.log(res)
        })
      },
      add(ge){
        console.log(ge)
          // this.$store.commit('add',this.citys[index]);
          this.$router.push({name:'htakeout',params:{geohash:ge}})
          // var keepge=localStorage.setItem('keepge',ge);
          localStorage.cityge=ge;
          
      },
      reduce(){
          this.$store.commit('reduce');
          
      },
      back(){
          this.$router.go(-1);
      },
      tiaozhuan(ge){
        localStorage.cityge=ge;
        this.$router.push({name:'htakeout',params:{geohash:ge}})
        // var keepge=localStorage.setItem('keepge',ge);
      }

    },
    computed:{
        cc(){
   
            return  this.$store.state.history
        },
        bb(){
            return  this.$store.state.bol
        
        }
    }
   
    


  }

</script>
<style scoped>
  .f_city_top {
    background-color: #3190e8;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.45rem;
    z-index: 100;
    color: white;
  }

  .f_city_top_center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.18rem;
  }

  .f_city_top_left {
    margin-left: 0.12rem;
    /* border: 1px solid red; */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

  }

  .f_city_top_left>span {
    font-size: 0.2rem;
  }

  .f_city_top_right {
    position: absolute;
    right: 0.12rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.14rem;
    color: white;
  }

  .f_city_center {
    margin-top: 0.55rem;
    border-top: 1px solid #e4e4e4;
    background-color: #fff;
    /* margin-bottom: 0.12rem; */
    border-bottom: 1px solid #e4e4e4;

  }

  .f_city_center>div {
    width: 90%;
    margin: 0.12rem auto;
    height: 0.4rem;
    box-sizing: border-box;
    border: 1px solid gray;

  }

  .f_city_center>div>input {
    height: 100%;
    width: 100%;
    font-size: 0.17rem;

  }

  #submit {
    background-color: #3190e8;
    color: white;
  }

  .f_city_history {
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding: 0.06rem 0;
    padding-left: 0.12rem;
    font-size: 0.13rem;
  }

  .f_city_history_lis {
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
  }

  .f_city_history_li {
    border-bottom: 1px solid #e4e4e4;
    padding-top: 0.14rem;
  }

  .f_city_history_li>h4 {
    width: 90%;
    margin: 0 auto 0.1rem;
    font-size: 0.15rem;
    color: #333;
  }

  .f_city_history_li>p {
    width: 90%;
    margin: 0 auto 0.1rem;
    font-size: 0.09rem;
    color: #999;
  }

  .f_history_clear {
    text-align: center;
    font-size: 0.18rem;
    color: #666;
    background-color: white;
    line-height: 0.34rem;
  }

</style>
