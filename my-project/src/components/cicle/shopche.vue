<template>
     <!--底模块-->
       <div v-show="ping" class="z_base">
        <ul class="z_base-shop">
          <li class="z_base-shopimg" >
                  <p style="width:0.2rem;height:0.2rem;border-radius:50%;
                  text-align:center;background:red;float:right;;">{{arr.length}}</p>
            <img  src="./imgs/14472493.png" alt="">
          </li>
          <li class="z_base-shopPrice" @click="yin()">
            <p style="font-size: 0.23rem;">
              <span>$</span>
              <span>{{text}}</span>
            </p>
            <p style="font-size: 0.13rem;margin-top:0.05rem">配送费$5</p>
          </li>
         <li class="z_base-shopOver" >
            <button   type="button" class="btn btn-default btn-lg"  @click="tiao">
                    结算
              </button>
          </li>
        </ul>
       
      </div>
</template>
<script>
export default {
  name: "shopche",
  data () {
      return {
           ping: true,
           length:false,
           ting:true
          
      }
  },
  computed:{
    text(){
        return this.$store.state.numbers
      },
       arr(){
          return this.$store.state.arrss
      }
  },
  methods:{
    yin(){
 this.$store.commit("yin");
    },
    tiao(){
      if(this.arr.length<1){
        return ;
      }
        this.$router.push("/shop/payment");
     
    }
   
  },
  created(){
   
  },
}
</script>
<style>
.z_base {
  width: 3.75rem;
  background: #2f3238;
  padding-right: 0.2rem;
  box-sizing: border-box;
  /*border: 1px solid red;*/
  position: fixed;
  bottom: 0rem;
  left: 0;
}
.z_base-shop {
  height: 0.4688rem;
  /*border: 1px solid red;*/
  position: flex;
  left: 0.1rem;
  z-index: 120;
}
.z_base-shopimg {
  width: 0.555rem;
  /* border: 3px solid red; */
  position: absolute;
  left: 0.1rem;
  bottom: 0.83rem;
  border-radius: 50%;
  background: gray;
  height: 0rem;
  z-index: 1400;
}
.z_base-shopimg img {
  width: 0.55rem;
  margin-bottom: 0.2rem;
}
.z_base-shopPrice {
  color: white;
  /*border: 1px solid red;*/
  position: absolute;
  right: 50%;
}
.z_base-shopOver {
  /*border: 1px solid red;*/
  width: 1.5rem;
  text-align: center;
  height: 0.4688rem;
  font-size: 0.21rem;
  background: green;
  line-height: 0.4688rem;
  position: absolute;
  bottom: 0;
  right: 0rem;
}
.z_tan{
height: 6rem;
width: 3.75rem;
position: relative;
}
.z_tan1{
  width: 100%;
 
  background:white;
  border: 1px solid red;
}
</style>

