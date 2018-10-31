<template>
      <div>
        <!-- <Top></Top> -->
        <Header1 class="h-header1">
          <router-link to="/home">
            <p   class="topaddress" style="width: 60%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{address}}</p>
          </router-link>
          <router-link to="/login">
            <div>
                <span>登陆</span>
                <span>/</span>
                <span>注册</span>
                
              </div>
          </router-link>
          
        </Header1>
        <Header></Header>
        <Shopsdetail  class="detail"></Shopsdetail>
        <Htotal></Htotal>
      </div>
</template>
<script>
    // import Top from "../vue-ele/home/top"
    import Header1 from "../us/header"
    import Header from "../vue-ele/home/header"
    import Shopsdetail from "../vue-ele/home/shopsdetail"
    import Htotal from "./htotal"
  export default{
      name:"htakeout",
      data(){
        return{
         address:''
        }
      },
      components:{
          Header1,
        //   Top,
          Header,
          Shopsdetail,
          Htotal
      },
      created() {
       //接口4
      let api4 = "https://elm.cangdu.org/v2/pois/31.22967,121.4762";
      this.$http.get(api4).then((data) => {
        //成功后的回调
        this.address = data.data.address;
        console.log( this.address,"地址水水水水水水水水")

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
.topaddress{
  margin-left: 20%;
  /* border: 1px solid green; */
  color: white;
}
.h-header1 div{
width:40%;
position: absolute;
top:0;
left: 90%;
/* border: 1px solid red; */
color: white;
}
</style>