<template>
    <div class="wrap">
       <div class="z_shop-header">
           <h1> 
            &lt;  
               </h1>
           <p>商家详情</p>
           </div> 
        <div class="z_shop-top">
            
            <ul class="z_shop-tops">
                <h3>活动与属性</h3>
                <li class="z_shop-top-active" v-for="item in data[0].supports" :key="item.id">
                    <span :style="'background:#'+item.icon_color">
                       {{item.icon_name}}
                    </span>
                    <span>
                       {{item.description}} (APP专享)
                    </span>
                </li>
            </ul>
        </div>
        <div class="z_shop-content">
            <section style="font-size:0.15rem;overflow:hidden;margin-left:0.1rem;margin-right:0.1rem;">
            <h2 style="float:left;">食品监督安全公示</h2>
           <router-link to="/shop/shopDetail/shopSafe"> <h3 style="float:right;color:black"> 企业认证详情> </h3></router-link>
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
        <div class="z_shop-bottom">
            <h2>商家信息</h2>
            <ul class="z_shop-bottom-intion">
                <li class="z_shop-bottom-intion01">
                            {{data[0].name}}
                </li>
                <li class="z_shop-bottom-intion02">
                    <span> 地址:</span>   
                    <span>{{data[0].address}}</span>
                </li>
                <li class="z_shop-bottom-intion03">
                    <span>营业时间:</span>
                    <span>{{data[0].opening_hours}}</span>
                </li>
                <li class="z_shop-bottom-intion04">
                    营业执照
                </li>
                <li class="z_shop-bottom-intion05">
                    餐饮服务许可证
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "shopDetail",
  data() {
    return {
      data: []
    };
  },
  created() {
    let api =
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
    this.$http.get(api).then(data => {
      console.log(data);
      this.data = data.data;
      console.log(this.data);
    });
  }
};  
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
  
  background: white;
  margin-top: 0.1rem;
  padding-top: 0.1rem;
}
.z_shop-bottom {
 margin-top:0.1rem;
  background: white;
 
}
.z_shop-bottom h2 {
 
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
 margin-left: 0.1rem;
}
.z_shop-bottom-intion{
  width: 100%;
 overflow: hidden;
}
.z_shop-bottom-intion01,
.z_shop-bottom-intion02,
.z_shop-bottom-intion03,
.z_shop-bottom-intion04,
.z_shop-bottom-intion05 {
  margin-top: 0.15rem;
  margin-bottom: 0.33rem;
  font-size: 0.14rem;
  margin-left: 0.1rem;
}
</style>