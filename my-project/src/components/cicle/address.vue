<template>
    <div>
        <Header>添加地址</Header>
        <div class="z_add-top">
            <ul>
                <li v-for="(item,index) in arrs" :key="index" >
                  <section>
                    <p>
                      <span style="font-size:0.25rem;color:blue;margin-right:0.3rem">{{item.name}}</span>
                      <span>{{item.max}}</span>
                      </p>
                      <p>
                        联系电话:<span style="display:block;font-size:0.25rem;color:blue;margin-right:0.3rem">{{item.dianhua}}</span>
                        备选电话:<span>{{item.beixuan}}</span>
                      </p>
                  </section>
                  <section>
                    <p>地址:{{item.song}}</p>
                    <p><span  style="font-size:0.2rem;color:blue;margin-right:0.1rem">详细地址:</span>{{item.xiangxisong}}</p>
                  </section>
                  <p><span style="font-size:0.2rem;color:blue;margin-right:0.1rem">标签:</span><span>{{item.biaoqian}}</span></p>
                </li>
            </ul>
            </div> 
             <router-link to="/shop/payment/address/addlist"><div class="z_add-buttom">
          <i class="el-icon-circle-plus-outline" style="color:blue;font-size:0.3rem;margin-right:0.1rem;"></i><p>新增收货地址</p> 
            </div> </router-link>
         </div>
         


</template>
<script>
import Header from "../us/header.vue";
export default {
  name: "add",
  components:{
    Header
  },
  methods: {
   
  },
  computed: {
     arrs(){
       return this.$store.state.numss
            }
  }
};
</script>
<style>
.z_add-header {
  width: 3.75rem;
  height: 0.45rem;
  background-color: blue;
  text-align: center;
  line-height: 0.45rem;
  /* border:1px solid red; */
}
.z_add-header p {
  position: absolute;
  right: 1rem;
  width: 1.75rem;
  color: white;
  /* border:1px solid red;  */
  font-size: 0.2rem;
}
.z_add-header h1 {
  position: absolute;
  left: 0.1rem;
  color: white;
  /* border:1px solid red; */
}
.z_add-header h4 {
  position: absolute;
  right: 0.1rem;
  color: white;
  
 
  /* border:1px solid red; */

}
.z_add-top{
     padding: 0.1rem;
     font-size:0.2rem;
     margin-top:0.8rem; 
}
.z_add-top li{
  border: 1px solid red;
  background: pink;
  margin-bottom: 0.2rem;
  padding: 0.1rem;
}
.z_add-top li p{
  border: 1px solid red;
  background: pink;
  margin-bottom: 0.1rem;
  padding: 0.1rem;
}
.z_add-buttom{
    width: 100%;
   position: absolute;
   bottom: 0;
   display: flex;
   justify-content: center;
    font-size:0.24rem;
    padding: 0.1rem;
}
</style>

