<template>
    <div class="wrap">
       <div class="z_shop-header">
           <h1 @click="tiao"> 
            &lt;  
               </h1>
           <p v-if="data[0].foods[0].name">{{data[0].foods[0].name}}</p>
           </div> 
        <div class="z_shop-top" v-if="data[0].foods[0].image_path">
            <img :src="'https://elm.cangdu.org/img/'+ data[0].foods[0].image_path" alt="">
            <h3>好吃的</h3>
        </div>
        <div class="z_shop-bottom">
                   <h2 v-if="data[0].foods[0].name">{{data[0].foods[0].name}}</h2>
                   <p>
                <span style="font-size: 0.15rem;margin-right: 0.05rem;">服务态度</span>
                <el-rate
                  v-model="value5"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}" class="el-rate__icon">
                </el-rate>
              </p>
                <p class="z_shop-bottom-intion05">
            评论数:<span v-if="data[0].foods[0].rating_count">{{data[0].foods[0].rating_count}}</span>
            好评率:<span>63%</span>
                </p> 
        </div>
    </div>
   
</template>
<script>
export default {
  name: "safe01",
  data() {
    return {
      data: [],
       value5: 3.7,
       aaa:""
    };
  },
  created() {
    this.aaa = localStorage.shopid;
    let api = "https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+this.aaa;
    this.$http.get(api).then(data => {
      // console.log(data);
      this.data = data.data;
    });
  },
  methods:{
    tiao(){
      this.$router.push('/shop');
    }
  },
  computed:{
    shopAdd(){
                    return this.$store.state.shopAdd
             }
  }
};
</script>
<style>

.z_shop-header {
  width: 3.75rem;
  height: 0.45rem;
  background-color: blue;
  text-align: center;
  line-height: 0.45rem;
  /* border:1px solid red; */
}
.z_shop-header p {
  position: absolute;
  right: 1rem;
  width: 1.75rem;
  color: white;
  /* border:1px solid red;  */
  font-size: 0.2rem;
}
.z_shop-header h1 {
  position: absolute;
  left: 0.1rem;
  color: white;
  /* border:1px solid red; */
}

.z_shop-top img {
  width: 100%;
}
.z_shop-top h3{
   color:gray; 
   margin-left: 0.1rem;
   margin-top:0.1rem;
}
.z_shop-bottom{
   width: 100%;
   
   margin-left: 0.1rem;
}
.z_shop-bottom h2,.z_shop-bottom p{
margin-top:0.2rem;
}
</style>