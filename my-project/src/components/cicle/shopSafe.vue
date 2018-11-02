<template>
    <div class="wrap">
       <div class="z_shop-header">
           <h1 @click="tiao()"> 
               &lt;  
               </h1>
           <p>食品监督安全公示</p>
           </div> 
        <div class="z_shop-top">   
           <section style="font-size:0.15rem;overflow:hidden;margin-left:0.1rem;margin-right:0.1rem;">
            <h2 style="float:left;margin-top:0.2rem">食品监督安全公示</h2>
            </section>
            <section  style="overflow:hidden;">
                <img style="width:0.8rem;float:left" src="./imgs/1.jpeg" alt="">
                <section style="float:left;margin-left:0.2rem;">
                <p style="margin-top:0.2rem;
                margin-bottom:0.2rem;">检测检查结果: <span style="color:green;">良好</span> </p>
                <p style="margin-top:0.2rem;
                margin-bottom:0.2rem;">检查日期</p>
                </section>
            </section>
        </div>
        <div class="z_shop-content">
           <section style="font-size:0.15rem;overflow:hidden;margin-left:0.1rem;margin-right:0.1rem;">
            <h2 style="float:left;">工商登记信息</h2>
            </section>
            <section  style="overflow:hidden;">
                <p style="margin-top:0.2rem;
                margin-bottom:0.2rem;">企业名称 </p>
                <p style="margin-top:0.2rem;
                margin-bottom:0.2rem;">工商执照注册号</p>
                <p style="margin-top:0.2rem;
                margin-bottom:0.2rem;">注册资本</p>
                <p style="margin-top:0.2rem;
                margin-bottom:0.2rem;">注册地址</p>
                <p style="margin-top:0.2rem;
                margin-bottom:0.2rem;">属地监管所</p>
                <p style="margin-top:0.2rem;
                margin-bottom:0.2rem;">法定代表人</p>
                <p style="margin-top:0.2rem;
                margin-bottom:0.2rem;">经营范围</p>
                </section>
            
        </div>
        <div class="z_shop-bottom">
            <h2>餐饮许可证</h2>
            <ul class="z_shop-bottom-intion">
                <li class="z_shop-bottom-intion01">
                           经营范围
                </li>
                <li class="z_shop-bottom-intion02">
                    许可证有效期
                </li>
                <li class="z_shop-bottom-intion03">
                    许可证号
                </li>
                <li class="z_shop-bottom-intion04">
                    发送时间
                </li>
            </ul>
        </div>
        <div class="z_shop-bottoms">
                      <p style="font-size: 0.25rem;
    padding-bottom: 0.25rem;margin-left:0.1rem;">许可证</p>
                    <section style="font-size: 0.15rem;
    padding-bottom: 0.15rem;margin-left:0.1rem">
                      
                        <img src="" alt="666">
                        <img src="" alt="888">
                        </section> 
        </div>
    </div>
</template>

<script>
export default {
  name: "shopSafe",
  data() {
    return {
      data: []
    };
  },
  created() {
    let api =
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762"
    this.$http.get(api).then(data => {
      console.log(data)
      this.data = data.data
      console.log(this.data)
    })
  },
  methods:{
    tiao(){
      this.$router.go(-1)
    }
  }
}
</script>
<style>
.wrap {
  background-color: gray;
}
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
  background: white;
}
.z_shop-top h3 {
  font-size: 0.25rem;
  padding-bottom: 0.25rem;
}
.z_shop-tops {
  width: 3.75rem;
  background: white;
  padding: 0.1rem;
}
.z_shop-top-active {
  margin-bottom: 0.2rem;
  font-size: 0.1rem;
}
.z_shop-top-active span {
  margin-left: 0.1rem;
}
.z_shop-content {
  width: 3.75rem;
  background: white;
  margin-top: 0.1rem;
  padding-top: 0.1rem;
}
.z_shop-content p {
  margin-left: 0.1rem;
}
.z_shop-bottom {
  width: 3.75rem;
  background: white;
  margin-top: 0.1rem;

  font-size: 0.2rem;
}
.z_shop-bottom h2 {
  width: 100%;
  padding-top: 0.1rem;

  padding-left: 0.1rem;
}
.z_shop-bottom-intion {
  /* border: 1px solid red; */
  padding-bottom: 0.1rem;
  margin-bottom: 0.1rem;
}
.z_shop-bottom-intion01,
.z_shop-bottom-intion02,
.z_shop-bottom-intion03,
.z_shop-bottom-intion04 {
  margin-top: 0.2rem;
  margin-bottom: 0.15rem;
  font-size: 0.15rem;
  margin-left: 0.1rem;
}
.z_shop-bottoms {
  background: white;
  padding-top: 0.1rem;
}
</style>