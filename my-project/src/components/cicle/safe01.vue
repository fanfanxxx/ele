<template>
    <div class="wrap">
       <div class="z_shop-header">
           <h1 @click="tiao"> 
            &lt;  
               </h1>
           <p>好吃的</p>
           </div> 
        <div class="z_shop-top">
            <img src="./imgs/35.jpg" alt="">
            <h3>好吃的</h3>
        </div>
        <div class="z_shop-bottom">
                   <h2>好吃的</h2>
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
            评论数:<span>498</span>
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
    };
  },
  created() {
    let api = "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1";
    this.$http.get(api).then(data => {
      // console.log(data);
      this.data = data.data;
      console.log(this.data[0].foods[0].attributes[0].icon_name);
    });
  },
  methods:{
    tiao(){
      this.$router.push('/shop');
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
.z_shop-top {
  border: 1px solid red;
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