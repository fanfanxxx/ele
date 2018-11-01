<template>
  <div class="warp">
    <div class="title">
      <div class="h-fenlei" @click="fenlei" :class="{'color':blue}">
        <div >分类</div>
        <div v-show="num"> <img src="../../vue-ele/imgs/sj 1.png" alt=""></div>
        <div  v-show="!num"> <img src="../../vue-ele/imgs/sj2.png" alt=""></div>
      </div>
      <div class="h-paixu" :class="{'color1':blue1}" @click="paixu">
        <div >排序</div>
        <div v-show="num1"> <img src="../../vue-ele/imgs/sj 1.png" alt=""></div>
        <div  v-show="!num1"> <img src="../../vue-ele/imgs/sj2.png" alt=""></div>
      </div>
      <div class="h-shaixuan" :class="{'color2':blue2}" @click="shaixuan">
        <div> 筛选</div>
        <div v-show="num2"> <img src="../../vue-ele/imgs/sj 1.png" alt=""></div>
        <div  v-show="!num2"> <img src="../../vue-ele/imgs/sj2.png" alt=""></div>
      </div>
    </div>
    <!-- ---------------分类的下拉列表------------------- -->
    <div class="down">
      <div class="f-list">
        <div v-show="value1">
          <div v-for="(items,index) in menudata" :key="index">

            <div class="pandu" v-if="index==0">
              <div class="h-list1"    @click="list1(index)" :class='{class1:index==currentIndex}'
              >
                <li class="yiguo">{{items.name}}</li>
                <li class="yorder">{{items.count}}</li>

              </div>
            </div>
            <div class="pandu" v-else-if="index==4">
              <div class="h-list1"     @click="list1(index)" :class='{class1:index==currentIndex}' >
                <img  :src="'https://fuss10.elemecdn.com/'+items.image_url+'.jpeg'">
                <li class="menu">{{items.name}}</li>
                <li class="order">{{items.count}}</li>
                <li class="h-sign">></li>
              </div>
            </div>
            <div class="pandu" v-else-if="index==7">
              <div class="h-list1"   @click="list1(index)" :class='{class1:index==currentIndex}'>
                <img  :src="'//elm.cangdu.org/img/default.jpg'">
                <li class="menu">{{items.name}}</li>
                <li class="order">{{items.count}}</li>
                <li class="h-sign">></li>
              </div> 
            </div>



            <div class="panduan" v-else>
              <div class="h-list1 "    @click="list1(index)" :class='{class1:index==currentIndex}'>
                <img  :src="'https://fuss10.elemecdn.com/'+items.image_url+'.png'">
                <li class="menu">{{items.name}}</li>
                <li class="order">{{items.count}}</li>
                <li class="h-sign">></li>
              </div>
            </div>


          </div>

        </div>
        <!-- ---------------------------------- -->
       
      </div>
      <div v-show="value2">
        <div class="p-list">
          <div @click="sx(4)">
            <li><img src="../imgs/jiantou.png" alt=""></li>
            <li v-if="1"  >智能排序</li>
            <!-- <span>{{this.isindex}}</span> -->
            <!-- <li  class="h-chooseimg" v-if="isindex=4"><img src="../imgs/duihao.png" alt=""></li> -->
          </div>
         <div @click="sx(5)">
            <li><img src="../imgs/juli.png" alt=""></li>
            <li v-if="1" >距离最近</li>
            <!-- <span>{{isindex}}</span> -->
            <!-- <li  class="h-chooseimg" v-show="isindex=5"><img src="../imgs/duihao.png" alt=""></li> -->
         </div>
          <div  @click="sx(6)">
            <li><img src="../imgs/huo.png" alt=""></li>
            <li v-if="1">销量最高</li>
            <!-- <span>{{isindex}}</span> -->
            <!-- <li  class="h-chooseimg" v-show="isindex=6"><img src="../imgs/duihao.png" alt=""></li> -->
          </div>
         <div @click="sx(1)">
            <li><img src="../imgs/jiage.png" alt=""></li>
            <li v-if="1" >起送价最低</li>
            <!-- <span>{{isindex}}</span> -->
            <!-- <li  class="h-chooseimg" v-show="isindex=1"><img src="../imgs/duihao.png" alt=""></li> -->
         </div>
         <div @click="sx(2)">
            <li><img src="../imgs/zhong.png" alt=""></li>
            <li v-if="1" >配送速度最快</li>
            <!-- <span>{{isindex}}</span> -->
            <!-- <li  class="h-chooseimg" v-show="isindex=2"><img src="../imgs/duihao.png" alt=""></li> -->
         </div>
        <div  @click="sx(3)">
            <li><img src="../imgs/pingfen.png" alt=""></li>
            <li v-if="1">评分最高</li>
            <!-- <span>{{isindex}}</span> -->
            <!-- <li  class="h-chooseimg" v-show="isindex=3"><img src="../imgs/duihao.png" alt=""></li> -->
        </div>
         
        </div>
      </div>
      <!-- ---------------------------------- -->
      <div v-show="value3" >
        <div class="s-list">
          <div >配送方式</div>
          <div @click="changeimg"  id="fengniao">
             <li v-show="showimg" class="nimg1" @click="addnumber1(1)"><img src=".././imgs/niao.png" alt=""></li>
             <li   v-show="!showimg " class="nimg2"   @click="reducenumber0(1)"><img src=".././imgs/duihao.png" alt=""></li>
             <li  class="h-zs">蜂鸟专送</li>
             
          </div>
          <div>商家属性(可以多选)</div>
          <div  id="shuxing">
            <div v-for="(item,index) in shaixuandata"  > 
              <!-- <li>{{index}}</li> -->
             <div  class="h-sxall">
                <li :style="{'color':'#'+item.icon_color,'border-color':'#'+item.icon_color}"   class="sxname"  @click="toggleShow(index,1)" v-show="!item.show "  >
                    {{item.icon_name}}</li>
                    <li class="h-truesigal"  v-show="item.show"
                    @click="reducenumber1(index,1)"><img src=".././imgs/duihao.png" alt="" ></li>
                    
                  <li class="h-namedetail">{{item.name}}</li>
            
             </div>
                  
                
            </div>
            
          </div>
          <div id="sxbutton">
            <li @click="clear1">清空</li>
            <li  @click="hsure"><span v-show="!count1==0" >({{count1}})</span>确定</li>
          </div>
        </div>
      </div>
      <!-- ---------------------------------- -->
      <div class="list-right">
        <div v-show="value4">
          <div   class="h-list2" v-for="(menudetail,index) in arr" :key="index">
                   <div  v-show="see" @click="list2(menu1,menudetail.name)">
                    
                    <li >{{menudetail.name}}</li>
                    <li>{{menudetail.count}}</li>
                     <!-- <li>{{menu1}}</li> -->
                      
                   </div>
             
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {mapState,mapMutations } from 'vuex'
  export default {
    name:"xiala2",
    props:['mes','changeid'],
    data: () => ({
      value1: false,value2: false,value3: false,value4: false,
      num:true,num1:true,num2:true,
      see:'',
      menudata:[],
      arr:[],
      menu1:'',
      name:'',
      parentname:'',   
      blue:false,blue1:false,blue2:false,
      sxid:'',
      shaixuandata:[],
      showimg:true,
      // nameshow:true,
      // chooseindex:'',
      // index:true,
      index:null,
      activeIndex: null,
      currentIndex:'-1',
      isindex:"",
      chooseindex:0,
      datashow:true
    }),
    computed:mapState({
       count1:"count1"
    }),
    methods: {
      //分类的点击
      fenlei: function() {
        this.value1 = !this.value1;
        this.value2 = this.value3 = this.value4=false;
        this.num=!this.num;
       this.blue=!this.blue;
       this.num1=this.num2=true;
       this.blue1=false;this.blue2=false;
        
      },
      paixu: function() {
        this.value2 = !this.value2;
        this.value1 = this.value4 = false;
        this.value3 = false;
        this.num1=!this.num1;
        this.num=true;
        this.num2=true;
        this.blue1=!this.blue1; this.blue=false;this.blue2=false
      },
      shaixuan: function() {
        this.value3 = !this.value3;
        this.value2 = false;
        this.value2 = this.value4 = false;
        this.num2=!this.num2;
        this.num=true;
        this.num1=true;
        
        this.blue2=!this.blue2; this.blue=this.blue1=false;
        this.$store.commit("clearnumber");  
      },
      list1: function(a,e) {
        this.value4 = false;
        this.value4 = !this.value4;
        this.see=true;
        console.log(a);
        this.arr=this.menudata[a].sub_categories;
        console.log(this.arr);
        this.isA=true;
        //点击谁获得他的父级的元素 
        this.menu1=this.menudata[a].name
        console.log(this.menudata[a].name)
        this.currentIndex = a;  
      },
      list2:function(parentname,name){
          //  this.parentname=parentname;
          //  this.name=name;
           var names = parentname + '/' +name;
           this.mes(names);
          //  this.$router.push({name:'allshops',params:{parentname:this.parentname,name:this.name}});
          this.value1=this.value4=false;
          this.blue=false;
          this.num=true
      },
      sx:function(sxid){
          this.sxid=sxid
          console.log(this.sxid)
          this.isindex=this.sxid;
          //传入父组件
          this.changeid(this.sxid)
          this.value2=false;
          this.blue1=false;
          this.num1=true;
          
          console.log(this.isindex,"ffffff")
      },
      //下拉
      changeimg:function(){
        this.showimg=!this.showimg
      },
      toggleShow: function (index,value) {     
         let newItem = this.shaixuandata[index]
        newItem.show = !this.shaixuandata[index].show
        Vue.set(this.shaixuandata, index, newItem)      // 一定要注意vue不能检测的几种数据变化情况包括数组和对象
        // this.isindex=index
        console.log(index,"bbbbbbbb");
        this.$store.commit("addnumber",value)
        
      },
      
      addnumber1(value){
        this.$store.commit("addnumber",value)
       
      },
      reducenumber0(value){
        this.$store.commit("reducenumber",value)
      },
      reducenumber1(index,value){
        // console.log(index,"hhhhhhh")
        this.$store.commit("reducenumber",value)
        let newItem2=this.shaixuandata[index];
        newItem2.show=!this.shaixuandata[index].show;
        Vue.set(this.shaixuandata, index, newItem2)  
      },
      hsure(){
           this.value3=this.blue2=false;
           this.num2=true;
      },
      clear1(){
        this.$store.commit("clearnumber");  
        // let newItem2=this.shaixuandata;
        // newItem2.show=this.shaixuandata.show;
        // Vue.set(this.shaixuandata, this.shaixuandata.show, newItem2)  
        location.reload()
      },
  },
    created(){
      var _this = this;

      // 接口8
      const api8="https://elm.cangdu.org/shopping/v2/restaurant/category"
      this.$http.get(api8
     
      ).then(data=>{
        _this.menudata=data.data;
        console.log("获取到数据")
        // console.log(_this.menudata)
      });
      //接口10
     let api10="https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes"
      this.$http.get(api10
     
      ).then(data=>{
        _this.shaixuandata=data.data;
        console.log("获取到好多好多数据")
        // console.log(_this.menudata)
        console.log(data.data)
      })
    },
    
  };
</script>
<style scoped>
  .warp {
    background-color: #fff;
    position: relative;
    /* border: 1px solid black */

  }
  .title {
    height: 0.6rem;
    display: flex;
    border-bottom: 1px solid gray;
    font-size: 0.15rem;
    line-height:  0.6rem;
    width: 100%;
    text-align: center;

  }
  .title>div{
    width: 30%;
    height:0.6rem;
    line-height: 0.6rem;
    font-size:0.15rem;
    border-right: 1px solid gray;
  
   
  } 
  .h-fenlei,.h-paixu,.h-fenlei,.h-shaixuan{
    display: flex;
  }
  .h-fenlei>div:nth-child(1),.h-paixu>div:nth-child(1),
  .h-shaixuan>div:nth-child(1){
    
    width: 60%;
  text-align:right;
    /* border: 1px solid red; */
  }
  .h-fenlei>div:nth-child(2),.h-fenlei>div:nth-child(3),
  .h-paixu>div:nth-child(2),.h-paixu>div:nth-child(3),
  .h-shaixuan>div:nth-child(2),.h-shaixuan>div:nth-child(3){
    width: 30%;
    /* border: 1px solid red; */
  }
  .h-fenlei>div:nth-child(2) img,
  .h-paixu>div:nth-child(2) img,
  .h-shaixuan>div:nth-child(2) img{
    width: 100%;
    height: 0.3rem;
    margin-top: .15rem
    
   
  }
  .h-fenlei>div:nth-child(3) img,
  .h-paixu>div:nth-child(3) img,
  .h-shaixuan>div:nth-child(3) img{
    width: 100%;
    height: 0.3rem;
    margin-top: .15rem
    
   
  }
 .color,.color1,.color2{
   color:rgb(0, 132, 255);
 }
  
  .down {
    background-color: #fff;
    width:100%;
    position: absolute;
    z-index: 1000;
  }
  .f-list {
    background-color: rgb(201, 201, 204);
    /* background-color:white; */
    
    width: 49%;
    float: left;
   

  }


  .h-list1 {
    /*margin: 1.4rem 0;*/
    font-size: 0.1rem;
    /*border: 1px solid green;*/
    height: 50px;
    width: 100%;
    position: relative;
    z-index:1000;
  }
  .h-list1 img{
    width: 30%;
    height: 50px;
    margin-top: 5px;


  }
  .menu{
    width: 40%;
    height: 50px;
    line-height: 60px;
    text-align: center;
    /* border: 1px solid red; */
    position: absolute;
    top: 0;
    left:35%;
    font-size:0.15rem;

  }
  .order{
    width: 20%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    /*border: 1px solid red;*/
    position: absolute;
    top: 5px;
    right:5%;
    font-size:0.15rem;

  }
  .yiguo{
    width: 40%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-left: 10%;
    font-size:0.15rem;
  }
.yorder{
  width: 20%;
  height: 50px;
  line-height:  50px;
  text-align: center;
  position: absolute;
  top:0 ;
  right:30%;
  font-size:0.15rem;
}
  .h-sign{
    width: 10%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    /*border: 1px solid red;*/
    position: absolute;
    top: 5px;
    right:0%;
    font-size:0.15rem;
  }
  .list-right{
    background-color: #fff;
    width: 48%;
    position: absolute;
    top:0;
    right: 0;
    z-index: 100;

  }
  .h-list2{
    width:100%;
    height: 50px;
    display: flex;
    /* border: 1px solid green; */
   
    z-index: 100;
  }
  .h-list2>div{
    height: 50px;
    width:100%;
    line-height: 50px;
    text-align: center;
    font-size: 0.15rem;
    border-bottom: 1px solid gray;
    display: flex;
  }
  .h-list2>div li{
    height: 50px;
    width:50%;
    line-height: 50px;
    text-align: center;
    font-size: 0.15rem;
    border-bottom: 1px solid gray;
  }
  .p-list, .s-list{
    position: absolute;
    left: 0;
    top:0;
    background-color: white;
    width: 100%;
    z-index: 1000;
  }
  .p-list>div{
    height: 0.6rem;
    width:100%;
    line-height: 0.6rem;
     display: flex;
    
    color: black;
    border-bottom: 1px solid gray;
   
  }
  .p-list>div li:nth-child(1){
    width: 10%;
    height: 0.6rem;
  }
  .p-list>div li:nth-child(1) img{
    width: 50%;
    height: 0.2rem;
    margin-top: 0.2rem;
    margin-left: 30%;
  }
  .p-list>div li:nth-child(2){
    width: 60%;
    height: 0.6rem;
    font-size: 0.2rem;
  }
  .h-chooseimg{
   width: 20%;
   height: 0.4rem;
   margin-top: 0.1rem;
   /* border: 1px solid red; */
 }
 .h-chooseimg img{
   width: 100%;
   height: 100%;
  
 } 
 .s-list>div{
   height: 0.5rem;
  /* border: 1px solid red; */
  display: flex;
  font-size: 0.2rem;
  line-height: 0.5rem;
  width: 100%;
 }
 .s-list>div li:nth-child(1){
   height: 0.3rem;
   margin-top: 0.1rem;
   width: 20%;
   /* border: 1px solid yellow; */

 }
 .s-list>div li:nth-child(2){
   height: 0.3rem;
   margin-top: 0.1rem;
   width: 70%;

 }
 #fengniao{
   position: relative;
   width: 50%;
   border: 1px solid gray;
   margin-left: 5%;
 }
 .nimg1{
   position: absolute;
   /* border: 1px solid red; */
   /* left:-30%; */
   top:0;
   width: 30%;
   height: 0.8rem;
  
 }
 .nimg2{
   position: absolute;
   /* border: 1px solid blue; */
   /* left:-30%; */
   top:0;
   width: 30%;
   height: 0.6rem
 }
 .h-zs{
   position: absolute;
   /* border: 1px solid yellow; */
   left:25%;
   top:0;
   width: 60%;
 }
 .nimg2 img
 {
   width: 25%;
   height: 100%

 }
 .nimg1 img{
  width: 100%;
  height: 100%
  
 }
 
  #shuxing{
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
  height: 1.2rem;
  /* border:1px solid greenyellow; */
 }
 #shuxing>div{
  height: 0.5rem;
  width: 32%;
  display: flex;
  border: 1px solid gray;
  border-radius: 0.03rem;
  line-height: 0.5rem;
  /* position: relative; */
 
  
 }
 .h-sxall{
  height: 0.5rem;
   width: 100%;
   display: flex;
   border: 1px solid gray;
   border-radius: 0.03rem;
   line-height: 0.4rem;
   position: relative;
   font-size: 0.15rem
  
 }
 .sxname{
   position: absolute;
   left:5%;
   top:0;
   border-width:1px;
   border-style:solid;
   height: 0.3rem;
   width: 20%;
   line-height: 0.3rem;
   text-align: center
 }
 .h-truesigal{
  position: absolute;
   left:5%;
   top:0;
   height: 0.3rem;
   width: 20%;
   line-height: 0.3rem;
   /* border: 1px solid red; */
 }
 .h-truesigal img{
   margin-left: -10%;
   width: 40%;
   height: 100%
 }

 .h-namedetail{
  height: 0.3rem;
   width: 90%;
   /* border: 1px solid red; */
   line-height: 0.3rem;
   margin-top:0.1rem;
   margin-left:30%;
 }
 #sxbutton{
   height: 0.7rem;
   width: 100%;
    display: flex;
    justify-content: space-around;
    /* border:1px solid red; */
 }
 #sxbutton li{
   width: 45%;
   height: 0.5rem;
   /* border:1px solid red; */
   font-size: 0.3rem;
   text-align: center;
  
   margin-top: 0.1rem;
 }
 #sxbutton li:nth-child(1){
   background-color: white;
   border:1px solid transparent;
   color:black;
   border-radius: 0.05rem
 }
 #sxbutton li:nth-child(2){
   background-color:#56d176;
   color: white;
   border-radius: 0.05rem;
   height: 0.4rem;
   line-height: 0.4rem;
   margin-top: 0.2rem;
 }
 .class1{
   background-color: white;
 }
 
</style>
