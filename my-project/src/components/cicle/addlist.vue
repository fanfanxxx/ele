<template>
    <div>
         <div class="z_addlist-header">
           <h1> 
               &lt;  
               </h1>
           <p>添加地址</p>
        </div>
        <div class="z_addlist-top">
            <ul>
                <li class="z_addlist-top01">
               <span>联系人</span>
              
                    <input  type="text" placeholder="你的名字">
                </li>
                <li class="z_addlist-top02">
                    <i class="el-icon-circle-check-outline">   
                    </i>
                    <span>男</span>
                    <i class="el-icon-circle-check-outline"></i>
                    <span>女</span>
                </li>
                <li class="z_addlist-top03">
                    <span>联系电话</span>
                     <input type="text" placeholder="你的手机号">
                     <span style="color:blue;font-size:0.25rem;">+</span>
                </li>
                <li class="z_addlist-top04"> <input type="text" placeholder="备选电话"></li>
              <li class="z_addlist-top05">
                    <span>送餐地址</span>
                     <router-link to="/shop"> 
                     <input type="text" placeholder="小区/写字楼/学校等"></router-link>
                </li>
                 <li class="z_addlist-top06"> 
                     <input type="text" placeholder="详细地址">
                </li>
                  <li class="z_addlist-top07"> 
                      <span>标签</span>
                     <input type="text" placeholder="详细地址">
                </li>
            </ul>
        </div>
        <div class="z_addlist-btn">
              <input type="button" value="提交">
        </div>
    </div>
</template>
<script>
import Header from "../us/header.vue";
    export default{
        name:"addlist",
        computed:{
             Header
        }
    }
</script>
<style scoped>
.z_addlist-header {
  width: 3.75rem;
  height: 0.45rem;
  background-color: blue;
  text-align: center;
  line-height: 0.45rem;
  /* border:1px solid red; */
}
.z_addlist-header p {
  position: absolute;
  right: 1rem;
  width: 1.75rem;
  color: white;
  /* border:1px solid red;  */
  font-size: 0.2rem;
}
.z_addlist-header h1 {
  position: absolute;
  left: 0.1rem;
  color: white;
  /* border:1px solid red; */
}
.z_addlist-header h4 {
  position: absolute;
  right: 0.1rem;
  color: white;
  /* border:1px solid red; */
}
.z_addlist-top li{
    margin: 0.1rem;
    padding-left:0.2rem;
    margin-top: 0.2rem;
}
.z_addlist-top li span{
    font-size: 0.2rem
}
.z_addlist-top li input{
    font-size: 0.17rem
}

.el-icon-circle-check-outline{
    margin-left: 0.7rem;
     font-size: 0.2rem;
      /* border: 1px solid red; */
}
.el-icon-circle-check-outline:hover{
    color: blue;
}
.z_addlist-top01 input,.z_addlist-top03 input,.z_addlist-top05 input{
  margin-left:0.1rem
}
.z_addlist-top04 input,.z_addlist-top06 input{
            margin-left: 0.9rem;
            /* border: 1px solid  red; */
}
.z_addlist-top07 input{
     margin-left:0.45rem
}
.z_addlist-top01 input{
     margin-left:0.25rem
}
.z_addlist-btn{
    width: 100%;
    text-align: center;
    margin-top:0.5rem;
}
.z_addlist-btn input{
    width:3rem;
    border:1px solid red;
    background: green;
    font-size:0.35rem;
}

</style>

