<template>
      <div > 
        <!-- <Top></Top> -->
        <div class="alltop">

        
          <router-link to="/hsearch" class="h-top1">
            <img src="../vue-ele/imgs/sousuo.png" alt="">
          </router-link>
          <router-link to="/home" class="h-top2">
            <p     class="topaddress" style="width: 100%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{address}}</p>
            <!-- <p  v-else class="writeaddress" style="width: 100%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">请输入地址</p> -->
          </router-link>
         
            <div v-if="!user.username" class="h-login">
                <router-link to="/login" class="h-top3" >
                <span>登录</span>
                <span>/</span>
                <span>注册</span>
              </router-link>
             </router-link>
            </div>
            
         
          <div v-else class="h-headimg"> 
            <router-link to="/hmine">
              <img src="../vue-ele/imgs/headimg.png" alt="">
            </router-link>
          </div>
        </div>
        <Header class="h-wmheader"></Header>
        <Shopsdetail  class="detail"></Shopsdetail>
        <Htotal class="botton"></Htotal>
      </div>
</template>
<script>
    import Header from "../vue-ele/home/header"
    import Shopsdetail from "../vue-ele/home/shopsdetail"
    import Htotal from "./htotal"
  export default{
      name:"htakeout",
      data(){
        return{
         address:'',
        //  la:'',
         geohash:''
        }
      },
      components:{
          Header,
          Shopsdetail,
          Htotal
      },
      computed:{
      user(){
        return this.$store.state.usermessage;
      }
    },
      created() {
        this.$store.commit("wm");
        console.log(localStorage.cityge);
       //接口4
      let api4 = "https://elm.cangdu.org/v2/pois/"+localStorage.cityge;
      this.$http.get(api4).then((data) => {
        //成功后的回调 
        //  console.log(data.data)
         this.address = data.data.address;
         
      })
      
      },
  }
</script>
<style scoped>
.alltop{
  width: 100%;
  position: relative;
  display:flex;
  height: 0.4rem;
  background-color: #3190e8;  
}
.h-top1{
  width: 10%;
  /* border: 1px solid red; */
  height: 0.4rem;
  color: white;
  font-size: 0.17rem;
  margin-left: 10%;
}

.h-top1  img{
  width: 80%;
  height: 0.4rem;
  /* border: 1px solid red; */
  margin-top: 30%;
  height: 50%;
  
  
  
  
}
.h-top2{
  width: 40%;
  /* border: 1px solid green; */
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  color: white;
  /* padding-left: 5%; */
  font-size: 0.17rem;
  margin-left: 5%;
}
.h-top2 p{
  width: 100%;
  /* border: 1px solid green; */
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  color: white;
  /* padding-left: 5%; */
  font-size: 0.17rem;
  /* margin-left: 5%; */
}
.h-top3{
  width: 30%;
  /* border: 1px solid black; */
  height: 0.4rem;
  line-height: 0.4rem;
  color: white;
  margin-right: 0;
  text-align: center;
  font-size: 0.17rem;
  position: relative;
}

.h-login{
width:30%;
text-align: center;
position: absolute;
top:0;
right:0;
/* border: 1px solid black; */
 }
 .h-headimg{
width:30%;
height: 0.4rem;
position: absolute;
top:0;
right:0;
 }
 .h-headimg img{
width:30%;
height: 80%;
position: absolute;
top:10%;
right:10%;
 }
.botton{
  z-index:100;
  position:fixed;
  bottom: 0;
  
}
</style>