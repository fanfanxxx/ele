<template>
    <div>
        <div class="z_address-header">
           <h1> 
               &lt;  
               </h1>
           <p>选择地址</p>
           
        </div>
        <div class="z_address-top">
            <ul>
                <li></li>
            </ul>
            </div> 

             <router-link to="/shop/payment/address/addlist"><div class="z_address-buttom">
          <i class="el-icon-circle-plus-outline" style="color:blue;font-size:0.3rem;margin-right:0.1rem;"></i><p>新增收货地址</p> 
            </div> </router-link>
         </div>
         


</template>
<script>
export default {
  name: "address"
};
</script>
<style>
.z_address-header {
  width: 3.75rem;
  height: 0.45rem;
  background-color: blue;
  text-align: center;
  line-height: 0.45rem;
  /* border:1px solid red; */
}
.z_address-header p {
  position: absolute;
  right: 1rem;
  width: 1.75rem;
  color: white;
  /* border:1px solid red;  */
  font-size: 0.2rem;
}
.z_address-header h1 {
  position: absolute;
  left: 0.1rem;
  color: white;
  /* border:1px solid red; */
}
.z_address-header h4 {
  position: absolute;
  right: 0.1rem;
  color: white;
  /* border:1px solid red; */
}
.z_address-top{
     padding: 0.1rem;
     font-size:0.2rem;
}
.z_address-buttom{
    width: 100%;
   position: absolute;
   bottom: 0;
   display: flex;
   justify-content: center;
    font-size:0.24rem;
    padding: 0.1rem;
}
</style>

