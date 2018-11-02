<template>
    <div>
         <Header @click="tiao()">添加地址</Header> 
        <div class="z_pay">
        <section class="z_pay-add">
            <p v-show="yinde"><i class="el-icon-location-outline" style="color:blue;margin-right:0.1rem"></i>
            <span>请添加一个收获地址</span>
            </p>
           <ul  style="display:flex;justify-content:space-between;">
               <li v-show="cang" style="margin-right:0.1rem;">收货人:{{submit.name}}</li>
                <li v-show="cang">联系电话:{{submit.xiangxisong}}</li>
           </ul>
            <router-link to="/shop/payment/address"><p style="color:gray" @click="tin=!tin">
                &gt;
            </p></router-link>
        </section>
        <section class="z_pay-time">
            <p><span>尽快送达</span><span>|</span><span>预计&nbsp;22:09</span></p>
            <h2>送达时间</h2>
            <p style="background:blue;color:white;width:0.6rem;padding:0.04rem;text-align:center;font-size:0.13rem;margin-left:2.85rem;">蜂鸟专送</p>
        </section>
        <section class="z_par-way">
            <section class="z_par-way01">
                <p>支付方式</p>
                <p style="color:gray;font-size:0.16rem">
                    <span>在线支付</span>
              <router-link to="/confirmOrder/payment">  <span>
                    &gt;
                    </span></router-link>
                </p>
            </section>
             <section class="z_par-way02">
                <p>红包</p>
                <p style="">
                    暂时只在饿了么APP中支持
                </p>
            </section>
        </section>
        <section class="z_par-indent">
            <div class="z_par-indent01">
               <p> <img style="width:0.4rem;" src="./imgs/1.jpeg" alt=""></p>
                <p style="padding-top:0.1rem">{{arr.specs_name}}</p>
            </div>
            <ul class="z_par-indent02">
                <li v-for="item in arr" :key="item.id"> 
                    <p>{{item.name}}</p>
                    <p>
                        <span style="margin-right:0.2rem;color:red">*{{item.count}}</span>
                        <span>${{item.price}}</span>
                    </p>
                </li>
                 <li>
                     <p>餐盒</p>
                     <p>
                        <span>$21</span>
                    </p>
                 </li>
                  <li>
                      <p>配送费</p>
                      <p>
                        <span>$4</span>
                    </p>
                  </li>
            </ul>
            <section class="z_par-indent03">
                <div class="z_par-indent03-01">
                    <p >订单&nbsp;${{arr.item_id}}</p>
                    <p style="color:red;">待支付</p>
                </div>
                <div class="z_par-indent03-02">
                    ${{number}}
                </div>
            </section>
        </section>
        <section class="z_par-taste">
            <div class="z_par-taste01">
                <p>订单备注</p>
                <p>多点辣,多点醋<span>
                    &nbsp;&gt;</span>
                </p>
            </div>
            <div class="z_par-taste02">
                <p>发票抬头</p>
                <p>不需要开发票<span>
                    &nbsp;&gt;</span>
                </p>
            </div>
        </section>
        </div>
    </div>
</template>
<script>
import Header from "../us/header.vue";
export default {
  name: "payment",
  data () {
      return {
         
      }
  },
  methods: {
      tiao(){
          this.$router.push("/shop")
      }
  },
  components: {
      Header
  },

  computed:{
      number(){
          return this.$store.state.numbers
      },
      arr(){
          return this.$store.state.arrss
      },
       submit(){
              return this.$store.state.submit
            },
             arrs(){
       return this.$store.state.numss
            },
             cang(){
              return this.$store.state.cangde
            },
             yinde(){
              return this.$store.state.yinde
            },


  }
};
</script>
<style>
.z_pay-header {
  width: 3.75rem;
  height: 0.45rem;
  background-color: blue;
  text-align: center;
  line-height: 0.45rem;
  /* border:1px solid red; */
}
.z_pay-header p {
  position: absolute;
  right: 1rem;
  width: 1.75rem;
  color: white;
  /* border:1px solid red;  */
  font-size: 0.2rem;
}
.z_pay-header h1 {
  position: absolute;
  left: 0.1rem;
  color: white;
  /* border:1px solid red; */
}
.z_pay-header h4 {
  position: absolute;
  right: 0.1rem;
  color: white;
  /* border:1px solid red; */
}
.z_pay{
    margin-top:0.3rem; 
    background: gray;
}
.z_pay-add{
background: white;
display: flex;
justify-content: space-between;
padding: 0.2rem;
padding-top: 0.5rem;

/* border: 1px solid red; */
border-bottom: 2px dashed blue; 
}
.z_pay-add p{
font-size: 0.2rem;

}
.z_pay-time{
    margin-top:0.1rem;
    background: white;
     padding-top:0.3rem;
      padding-bottom:0.3rem;
      border-left: 5px solid blue;

}
.z_pay-time p{
    margin-left:2rem;
    font-size: 0.17rem;
    color: blue;
}
.z_pay-time h2{
 font-size: 0.2rem;
    margin-left:0.2rem;
}
.z_par-way{
    background: white;
   margin-top: 0.1rem;    
}
.z_par-way02{
      padding:0.15rem;
    font-size: 0.18rem;
display: flex;
    justify-content:space-between;
     color:gray;
}
.z_par-way01{
    display: flex;
    justify-content:space-between;
    padding:0.15rem;
    font-size: 0.2rem; 
}
.z_par-indent{
background: white;
margin-top: 0.1rem;
}

.z_par-indent01{
display: flex;
justify-content: flex-start;
}
.z_par-indent01 p{
  margin-left: 0.1rem;
  font-size: 0.2rem;
  /* border: 1px solid red; */
}
.z_par-indent02 li{
display: flex;
justify-content:space-between;

font-size: 0.2rem;
color: darkgrey;
padding: 0.1rem;
}
.z_par-indent03{
    margin-top: 0.1rem;
}
.z_par-indent03-01{
    display: flex;
    justify-content: space-between;
    padding: 0.1rem;
    font-size: 0.2rem;
color: darkgrey;
margin-right: 0.2rem
}
.z_par-indent03-02{
    display: flex;
    justify-content:flex-end;
    padding: 0.1rem;
    font-size: 0.2rem;
color: red;
margin-right: 0.15rem
}
.z_par-taste{
    margin-top:0.1rem;
    background: white;
    margin-bottom: 0.1rem;
}
.z_par-taste01,.z_par-taste02{
    display: flex;
    justify-content: space-between;
    padding: 0.1rem;
    color: darkgrey;
    padding-bottom: 0.2rem;
}
</style>


