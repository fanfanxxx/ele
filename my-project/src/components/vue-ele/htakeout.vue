<template>
      <div > 
        <!-- <Top></Top> -->
        <div class="alltop">

        
          <router-link to="/hsearch" class="h-top1">
            <div><img src="../vue-ele/imgs/sousuo.png" alt=""></div>
          </router-link>
          <router-link to="/home" class="h-top2">
            <p   class="topaddress" style="width: 100%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{address}}</p>
          </router-link>
          <router-link to="/login" class="h-top2" >
            <div class="h-login">
                <span>登录</span>
                <span>/</span>
                <span>注册</span>
                
              </div>
          </router-link>
          
        </div>
        <Header class="h-wmheader"></Header>
        <Shopsdetail  class="detail"></Shopsdetail>
        <Htotal class="botton"></Htotal>
      </div>
</template>
<script>
    // import Top from "../vue-ele/home/top"
    // import Header1 from "../us/header"
    import Header from "../vue-ele/home/header"
    import Shopsdetail from "../vue-ele/home/shopsdetail"
    import Htotal from "./htotal"
  export default{
      name:"htakeout",
      data(){
        return{
         address:'',
         la:'',
         geohash:''
        }
      },
      components:{
          // Header1,
        //   Top,
          Header,
          Shopsdetail,
          Htotal
      },
    
      created() {
        this.$store.commit("wm");
        this.ge=localStorage.cityge
        this.la = this.ge;
        // console.log(this.la,"嘎嘎嘎嘎");
       //接口4
      let api4 = "https://elm.cangdu.org/v2/pois/"+this.la;
      this.$http.get(api4).then((data) => {
        //成功后的回调 
         console.log(data.data)
         this.address = data.data.address;
         
      })
      
      },
  }
</script>
<style scoped>
 
  .h-header1{
    width: 100%;
    position: relative;
    /* border: 1px solid red; */
  }
.detail{
  margin-top: 0.2rem
}
.alltop{
  width: 100%;
  /* position: relative; */
  display:flex;
  height: 0.4rem;
  background-color: blue;
 
  
}
.h-top1{
  width: 40%;
  /* border: 1px solid red; */
  height: 0.4rem;
  color: white;
  font-size: 0.17rem;
}
.h-top1 img{
  width: 20%;
  /* border: 1px solid red; */
  margin-top: -0.08rem;
  height: 20%;
  padding: 20%;
  margin-left: 5%;
  
}
.h-top2{
  width: 40%;
  /* border: 1px solid yellow; */
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  color: white;
  padding-left: 5%;
  font-size: 0.17rem;
}
.h-top3{
  width: 15%;
  /* border: 1px solid black; */
  height: 0.4rem;
  color: white;
  margin-right: 0;
  text-align: center;
  font-size: 0.17rem;
}
/* .topaddress{
  
  margin-left: 10%;
  /* border: 1px solid green; */
  /* color: white;
}
.h-login{
width:90%;
position: absolute;
top:0;
right:-70%;
/* border: 1px solid red; */
/* color: white; */
/* } */ 
.botton{
  z-index:100;
  position:fixed;
  bottom: 0;
  
}
</style>